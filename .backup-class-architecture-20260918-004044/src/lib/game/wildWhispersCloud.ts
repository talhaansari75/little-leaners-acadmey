import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPrisma } from "@/lib/db";
import { defaultSave } from "./persist";
import { WILD_ANIMALS, type WildDifficulty, type WildMode, type WildProgress } from "./wildWhispers";

const modes = ["normal", "silhouette", "sound"] as const;
const difficulties = ["easy", "medium", "hard"] as const;

type StoredSave = Record<string, unknown> & { wildWhispers?: WildProgress; wildWhispersChallenge?: { animalId: string; issuedAt: number } };

const fallback: WildProgress = { discovered: [], bestStreak: 0, streak: 0, gamesPlayed: 0, score: 0, lives: 3, difficulty: "medium", mode: "normal" };

const normalize = (value: unknown): WildProgress => {
  const v = (value && typeof value === "object" ? value : {}) as Partial<WildProgress>;
  return {
    discovered: Array.isArray(v.discovered) ? [...new Set(v.discovered.map(String).filter((id) => WILD_ANIMALS.some((a) => a.id === id)).slice(0, WILD_ANIMALS.length))] : [],
    bestStreak: Math.max(0, Math.min(10000, Math.floor(Number(v.bestStreak) || 0))),
    streak: Math.max(0, Math.min(10000, Math.floor(Number(v.streak) || 0))),
    gamesPlayed: Math.max(0, Math.min(1000000, Math.floor(Number(v.gamesPlayed) || 0))),
    score: Math.max(0, Math.min(100000000, Math.floor(Number(v.score) || 0))),
    lives: Math.max(0, Math.min(3, Math.floor(Number(v.lives ?? 3)))),
    difficulty: difficulties.includes(v.difficulty as WildDifficulty) ? v.difficulty as WildDifficulty : "medium",
    mode: modes.includes(v.mode as WildMode) ? v.mode as WildMode : "normal",
  };
};

const readSave = (json: string): StoredSave => {
  try { return JSON.parse(json) as StoredSave; } catch { return {}; }
};

export const loadWildWhispersCloud = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const row = await getPrisma().playerSave.findUnique({ where: { userId: context.userId } });
    if (!row) return { ok: true as const, progress: null, revision: 0 };
    const save = readSave(row.saveJson);
    return { ok: true as const, progress: save.wildWhispers ? normalize(save.wildWhispers) : null, revision: Number(row.revision) };
  });

/** Starts an opaque server-authoritative round. The client never submits score/lives/streak. */
export const startWildChallenge = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const db = getPrisma();
    return db.$transaction(async (tx) => {
      const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
      const animal = WILD_ANIMALS[Math.floor(Math.random() * WILD_ANIMALS.length)]!;
      const now = Date.now();
      const challenge = { animalId: animal.id, issuedAt: now };
      if (!row) {
        const save = defaultSave() as StoredSave;
        save.wildWhispers = fallback;
        save.wildWhispersChallenge = challenge;
        await tx.playerSave.create({ data: { userId: context.userId, saveJson: JSON.stringify(save), version: 1, revision: 1n } });
        return { ok: true as const, animalId: animal.id, revision: 1 };
      }
      const save = readSave(row.saveJson);
      save.wildWhispers = normalize(save.wildWhispers ?? fallback);
      save.wildWhispersChallenge = challenge;
      const updated = await tx.playerSave.updateMany({ where: { userId: context.userId, revision: row.revision }, data: { saveJson: JSON.stringify(save), version: { increment: 1 }, revision: { increment: 1n } } });
      if (updated.count !== 1) return { ok: false as const, conflict: true as const };
      return { ok: true as const, animalId: animal.id, revision: Number(row.revision) + 1 };
    });
  });

/** Awards Wild Whispers progress from the server-side challenge only. */
export const answerWildChallenge = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { selectedAnimalId: string }) => ({ selectedAnimalId: String(d.selectedAnimalId ?? "").slice(0, 64) }))
  .handler(async ({ context, data }) => {
    const db = getPrisma();
    return db.$transaction(async (tx) => {
      const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
      if (!row) return { ok: false as const, error: "No active game." };
      const save = readSave(row.saveJson);
      const challenge = save.wildWhispersChallenge;
      if (!challenge || Date.now() - Number(challenge.issuedAt) > 10 * 60 * 1000) return { ok: false as const, error: "Challenge expired. Start a new round." };
      const progress = normalize(save.wildWhispers ?? fallback);
      if (progress.lives <= 0) progress.lives = 3;
      const correct = data.selectedAnimalId === challenge.animalId;
      const nextStreak = correct ? progress.streak + 1 : 0;
      const next: WildProgress = {
        ...progress,
        discovered: correct ? [...new Set([...progress.discovered, challenge.animalId])] : progress.discovered,
        streak: nextStreak,
        bestStreak: Math.max(progress.bestStreak, nextStreak),
        gamesPlayed: Math.min(1000000, progress.gamesPlayed + 1),
        score: Math.min(100000000, progress.score + (correct ? 100 + nextStreak * 10 : 0)),
        lives: correct ? Math.min(3, progress.lives + (nextStreak >= 5 ? 1 : 0)) : Math.max(0, progress.lives - 1),
      };
      save.wildWhispers = next;
      delete save.wildWhispersChallenge;
      const updated = await tx.playerSave.updateMany({ where: { userId: context.userId, revision: row.revision }, data: { saveJson: JSON.stringify(save), version: { increment: 1 }, revision: { increment: 1n } } });
      if (updated.count !== 1) return { ok: false as const, conflict: true as const };
      return { ok: true as const, correct, progress: next, revision: Number(row.revision) + 1, animalId: challenge.animalId };
    });
  });

/** Only settings are client-controlled. Scores, lives, streaks and discoveries are server-controlled. */
export const saveWildWhispersSettings = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { mode: string; difficulty: string; expectedRevision?: number }) => ({
    mode: modes.includes(d.mode as WildMode) ? d.mode as WildMode : "medium" as WildMode,
    difficulty: difficulties.includes(d.difficulty as WildDifficulty) ? d.difficulty as WildDifficulty : "medium" as WildDifficulty,
    expectedRevision: Number.isFinite(d.expectedRevision) ? Math.max(0, Math.floor(Number(d.expectedRevision))) : undefined,
  }))
  .handler(async ({ context, data }) => {
    const db = getPrisma();
    return db.$transaction(async (tx) => {
      const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
      if (!row) return { ok: false as const, error: "Save not initialized." };
      if (data.expectedRevision !== undefined && data.expectedRevision !== Number(row.revision)) return { ok: false as const, conflict: true as const };
      const save = readSave(row.saveJson);
      const progress = normalize(save.wildWhispers ?? fallback);
      save.wildWhispers = { ...progress, mode: data.mode, difficulty: data.difficulty };
      const updated = await tx.playerSave.updateMany({ where: { userId: context.userId, revision: row.revision }, data: { saveJson: JSON.stringify(save), version: { increment: 1 }, revision: { increment: 1n } } });
      if (updated.count !== 1) return { ok: false as const, conflict: true as const };
      return { ok: true as const, progress: save.wildWhispers, revision: Number(row.revision) + 1 };
    });
  });
