import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPrisma } from "@/lib/db";

const clean = (value: unknown) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const input = value as Record<string, unknown>;
  const profile = (input.profile && typeof input.profile === "object" ? input.profile : {}) as Record<string, unknown>;
  const completed = Array.isArray(input.completed) ? input.completed.filter((x): x is string => typeof x === "string").slice(0, 500) : [];
  return {
    profile: { name: String(profile.name ?? "Little Learner").slice(0, 40), age: Math.max(2, Math.min(6, Math.floor(Number(profile.age ?? 4)))) },
    completed,
    stars: Math.max(0, Math.min(5000, Math.floor(Number(input.stars ?? 0)))),
    xp: Math.max(0, Math.min(100000, Math.floor(Number(input.xp ?? 0)))),
    mission: Math.max(0, Math.min(4, Math.floor(Number(input.mission ?? 0)))),
    level: ["Beginner", "Learner", "Explorer", "Super Star"].includes(String(input.level)) ? String(input.level) : "Beginner",
    localUpdatedAt: Math.max(0, Math.floor(Number(input.localUpdatedAt ?? 0))),
  };
};

export const getPreschoolProgress = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const row = await getPrisma().preschoolProgress.findUnique({ where: { userId: context.userId }, select: { progressJson: true, revision: true, updatedAt: true } });
    if (!row) return { ok: true as const, progress: null };
    return { ok: true as const, progress: { ...(row.progressJson as Record<string, unknown>), revision: Number(row.revision ?? 1), updatedAt: new Date(row.updatedAt as Date).getTime() } };
  });

export const savePreschoolProgress = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((d: { progress: unknown }) => ({ progress: clean(d?.progress) }))
  .handler(async ({ context, data }) => {
    const db = getPrisma();
    const current = await db.preschoolProgress.findUnique({ where: { userId: context.userId }, select: { progressJson: true, revision: true } });
    const incoming = data.progress as Record<string, unknown>;
    const existing = current?.progressJson as Record<string, unknown> | undefined;
    const merged = {
      ...incoming,
      completed: Array.from(new Set([...(Array.isArray(existing?.completed) ? existing.completed : []), ...(Array.isArray(incoming.completed) ? incoming.completed : [])])).slice(0, 500),
      stars: Math.max(Number(existing?.stars ?? 0), Number(incoming.stars ?? 0)),
      xp: Math.max(Number(existing?.xp ?? 0), Number(incoming.xp ?? 0)),
      localUpdatedAt: Math.max(Number(existing?.localUpdatedAt ?? 0), Number(incoming.localUpdatedAt ?? 0)),
    };
    const row = await db.preschoolProgress.upsert({ where: { userId: context.userId }, create: { userId: context.userId, progressJson: merged, revision: 1 }, update: { progressJson: merged, revision: Number(current?.revision ?? 0) + 1 } });
    return { ok: true as const, progress: { ...merged, revision: Number(row?.revision ?? 1) } };
  });
