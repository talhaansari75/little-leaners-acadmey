import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CK7xd07k.mjs";
import { t as authMiddleware } from "./middleware-CYOSum86.mjs";
import { t as getPrisma } from "./prisma-angsYNAY.mjs";
import { t as defaultSave } from "./persist-g9i-8HXf.mjs";
import { s as WILD_ANIMALS } from "./wildWhispers-SLpIxgj3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wildWhispersCloud-LY6QmJGH.js
var modes = [
	"normal",
	"silhouette",
	"sound"
];
var difficulties = [
	"easy",
	"medium",
	"hard"
];
var fallback = {
	discovered: [],
	bestStreak: 0,
	streak: 0,
	gamesPlayed: 0,
	score: 0,
	lives: 3,
	difficulty: "medium",
	mode: "normal"
};
var normalize = (value) => {
	const v = value && typeof value === "object" ? value : {};
	return {
		discovered: Array.isArray(v.discovered) ? [...new Set(v.discovered.map(String).filter((id) => WILD_ANIMALS.some((a) => a.id === id)).slice(0, WILD_ANIMALS.length))] : [],
		bestStreak: Math.max(0, Math.min(1e4, Math.floor(Number(v.bestStreak) || 0))),
		streak: Math.max(0, Math.min(1e4, Math.floor(Number(v.streak) || 0))),
		gamesPlayed: Math.max(0, Math.min(1e6, Math.floor(Number(v.gamesPlayed) || 0))),
		score: Math.max(0, Math.min(1e8, Math.floor(Number(v.score) || 0))),
		lives: Math.max(0, Math.min(3, Math.floor(Number(v.lives ?? 3)))),
		difficulty: difficulties.includes(v.difficulty) ? v.difficulty : "medium",
		mode: modes.includes(v.mode) ? v.mode : "normal"
	};
};
var readSave = (json) => {
	try {
		return JSON.parse(json);
	} catch {
		return {};
	}
};
var loadWildWhispersCloud_createServerFn_handler = createServerRpc({
	id: "dc6a5ac3b5925cbe7409cef2efa22a0ded7ffd9d5e2556b40074f0ec48438c85",
	name: "loadWildWhispersCloud",
	filename: "src/lib/game/wildWhispersCloud.ts"
}, (opts) => loadWildWhispersCloud.__executeServer(opts));
var loadWildWhispersCloud = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(loadWildWhispersCloud_createServerFn_handler, async ({ context }) => {
	const row = await getPrisma().playerSave.findUnique({ where: { userId: context.userId } });
	if (!row) return {
		ok: true,
		progress: null,
		revision: 0
	};
	const save = readSave(row.saveJson);
	return {
		ok: true,
		progress: save.wildWhispers ? normalize(save.wildWhispers) : null,
		revision: Number(row.revision)
	};
});
var startWildChallenge_createServerFn_handler = createServerRpc({
	id: "0328babf9660aaa036016c133766138b68d9d0f900cb36a43cfcc81496f73b70",
	name: "startWildChallenge",
	filename: "src/lib/game/wildWhispersCloud.ts"
}, (opts) => startWildChallenge.__executeServer(opts));
var startWildChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(startWildChallenge_createServerFn_handler, async ({ context }) => {
	return getPrisma().$transaction(async (tx) => {
		const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
		const animal = WILD_ANIMALS[Math.floor(Math.random() * WILD_ANIMALS.length)];
		const now = Date.now();
		const challenge = {
			animalId: animal.id,
			issuedAt: now
		};
		if (!row) {
			const save = defaultSave();
			save.wildWhispers = fallback;
			save.wildWhispersChallenge = challenge;
			await tx.playerSave.create({ data: {
				userId: context.userId,
				saveJson: JSON.stringify(save),
				version: 1,
				revision: 1n
			} });
			return {
				ok: true,
				animalId: animal.id,
				revision: 1
			};
		}
		const save = readSave(row.saveJson);
		save.wildWhispers = normalize(save.wildWhispers ?? fallback);
		save.wildWhispersChallenge = challenge;
		if ((await tx.playerSave.updateMany({
			where: {
				userId: context.userId,
				revision: row.revision
			},
			data: {
				saveJson: JSON.stringify(save),
				version: { increment: 1 },
				revision: { increment: 1n }
			}
		})).count !== 1) return {
			ok: false,
			conflict: true
		};
		return {
			ok: true,
			animalId: animal.id,
			revision: Number(row.revision) + 1
		};
	});
});
var answerWildChallenge_createServerFn_handler = createServerRpc({
	id: "2203e48f7602778cc77be4e403a6a8e45240de39af38f6d276347092d28ea440",
	name: "answerWildChallenge",
	filename: "src/lib/game/wildWhispersCloud.ts"
}, (opts) => answerWildChallenge.__executeServer(opts));
var answerWildChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ selectedAnimalId: String(d.selectedAnimalId ?? "").slice(0, 64) })).handler(answerWildChallenge_createServerFn_handler, async ({ context, data }) => {
	return getPrisma().$transaction(async (tx) => {
		const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
		if (!row) return {
			ok: false,
			error: "No active game."
		};
		const save = readSave(row.saveJson);
		const challenge = save.wildWhispersChallenge;
		if (!challenge || Date.now() - Number(challenge.issuedAt) > 6e5) return {
			ok: false,
			error: "Challenge expired. Start a new round."
		};
		const progress = normalize(save.wildWhispers ?? fallback);
		if (progress.lives <= 0) progress.lives = 3;
		const correct = data.selectedAnimalId === challenge.animalId;
		const nextStreak = correct ? progress.streak + 1 : 0;
		const next = {
			...progress,
			discovered: correct ? [.../* @__PURE__ */ new Set([...progress.discovered, challenge.animalId])] : progress.discovered,
			streak: nextStreak,
			bestStreak: Math.max(progress.bestStreak, nextStreak),
			gamesPlayed: Math.min(1e6, progress.gamesPlayed + 1),
			score: Math.min(1e8, progress.score + (correct ? 100 + nextStreak * 10 : 0)),
			lives: correct ? Math.min(3, progress.lives + (nextStreak >= 5 ? 1 : 0)) : Math.max(0, progress.lives - 1)
		};
		save.wildWhispers = next;
		delete save.wildWhispersChallenge;
		if ((await tx.playerSave.updateMany({
			where: {
				userId: context.userId,
				revision: row.revision
			},
			data: {
				saveJson: JSON.stringify(save),
				version: { increment: 1 },
				revision: { increment: 1n }
			}
		})).count !== 1) return {
			ok: false,
			conflict: true
		};
		return {
			ok: true,
			correct,
			progress: next,
			revision: Number(row.revision) + 1,
			animalId: challenge.animalId
		};
	});
});
var saveWildWhispersSettings_createServerFn_handler = createServerRpc({
	id: "7761324f2c4e6e34bb46d73aabe8f79fcb19cfdcce72bfe959eafd043f87179e",
	name: "saveWildWhispersSettings",
	filename: "src/lib/game/wildWhispersCloud.ts"
}, (opts) => saveWildWhispersSettings.__executeServer(opts));
var saveWildWhispersSettings = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	mode: modes.includes(d.mode) ? d.mode : "medium",
	difficulty: difficulties.includes(d.difficulty) ? d.difficulty : "medium",
	expectedRevision: Number.isFinite(d.expectedRevision) ? Math.max(0, Math.floor(Number(d.expectedRevision))) : void 0
})).handler(saveWildWhispersSettings_createServerFn_handler, async ({ context, data }) => {
	return getPrisma().$transaction(async (tx) => {
		const row = await tx.playerSave.findUnique({ where: { userId: context.userId } });
		if (!row) return {
			ok: false,
			error: "Save not initialized."
		};
		if (data.expectedRevision !== void 0 && data.expectedRevision !== Number(row.revision)) return {
			ok: false,
			conflict: true
		};
		const save = readSave(row.saveJson);
		save.wildWhispers = {
			...normalize(save.wildWhispers ?? fallback),
			mode: data.mode,
			difficulty: data.difficulty
		};
		if ((await tx.playerSave.updateMany({
			where: {
				userId: context.userId,
				revision: row.revision
			},
			data: {
				saveJson: JSON.stringify(save),
				version: { increment: 1 },
				revision: { increment: 1n }
			}
		})).count !== 1) return {
			ok: false,
			conflict: true
		};
		return {
			ok: true,
			progress: save.wildWhispers,
			revision: Number(row.revision) + 1
		};
	});
});
//#endregion
export { answerWildChallenge_createServerFn_handler, loadWildWhispersCloud_createServerFn_handler, saveWildWhispersSettings_createServerFn_handler, startWildChallenge_createServerFn_handler };
