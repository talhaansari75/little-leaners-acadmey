import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CK7xd07k.mjs";
import { t as authMiddleware } from "./middleware-CYOSum86.mjs";
import { t as getPrisma } from "./prisma-angsYNAY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-ACQJk5jk.js
var clean = (value) => {
	if (!value || typeof value !== "object" || Array.isArray(value)) return {};
	const input = value;
	const profile = input.profile && typeof input.profile === "object" ? input.profile : {};
	const completed = Array.isArray(input.completed) ? input.completed.filter((x) => typeof x === "string").slice(0, 500) : [];
	return {
		profile: {
			name: String(profile.name ?? "Little Learner").slice(0, 40),
			age: Math.max(2, Math.min(6, Math.floor(Number(profile.age ?? 4))))
		},
		completed,
		stars: Math.max(0, Math.min(5e3, Math.floor(Number(input.stars ?? 0)))),
		xp: Math.max(0, Math.min(1e5, Math.floor(Number(input.xp ?? 0)))),
		mission: Math.max(0, Math.min(4, Math.floor(Number(input.mission ?? 0)))),
		level: [
			"Beginner",
			"Learner",
			"Explorer",
			"Super Star"
		].includes(String(input.level)) ? String(input.level) : "Beginner",
		localUpdatedAt: Math.max(0, Math.floor(Number(input.localUpdatedAt ?? 0)))
	};
};
var getPreschoolProgress_createServerFn_handler = createServerRpc({
	id: "745803ee6870b98c25bb612258c2b3215e6e5970b367075a611042f805886df6",
	name: "getPreschoolProgress",
	filename: "src/lib/v13/preschool/server.ts"
}, (opts) => getPreschoolProgress.__executeServer(opts));
var getPreschoolProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getPreschoolProgress_createServerFn_handler, async ({ context }) => {
	const row = await getPrisma().preschoolProgress.findUnique({
		where: { userId: context.userId },
		select: {
			progressJson: true,
			revision: true,
			updatedAt: true
		}
	});
	if (!row) return {
		ok: true,
		progress: null
	};
	return {
		ok: true,
		progress: {
			...row.progressJson,
			revision: Number(row.revision ?? 1),
			updatedAt: new Date(row.updatedAt).getTime()
		}
	};
});
var savePreschoolProgress_createServerFn_handler = createServerRpc({
	id: "69bb05f6452eb114df02fca9b55c22197ca185b117bc2d0c035c84e5b74db4c1",
	name: "savePreschoolProgress",
	filename: "src/lib/v13/preschool/server.ts"
}, (opts) => savePreschoolProgress.__executeServer(opts));
var savePreschoolProgress = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ progress: clean(d?.progress) })).handler(savePreschoolProgress_createServerFn_handler, async ({ context, data }) => {
	const db = getPrisma();
	const current = await db.preschoolProgress.findUnique({
		where: { userId: context.userId },
		select: {
			progressJson: true,
			revision: true
		}
	});
	const incoming = data.progress;
	const existing = current?.progressJson;
	const merged = {
		...incoming,
		completed: Array.from(/* @__PURE__ */ new Set([...Array.isArray(existing?.completed) ? existing.completed : [], ...Array.isArray(incoming.completed) ? incoming.completed : []])).slice(0, 500),
		stars: Math.max(Number(existing?.stars ?? 0), Number(incoming.stars ?? 0)),
		xp: Math.max(Number(existing?.xp ?? 0), Number(incoming.xp ?? 0)),
		localUpdatedAt: Math.max(Number(existing?.localUpdatedAt ?? 0), Number(incoming.localUpdatedAt ?? 0))
	};
	const row = await db.preschoolProgress.upsert({
		where: { userId: context.userId },
		create: {
			userId: context.userId,
			progressJson: merged,
			revision: 1
		},
		update: {
			progressJson: merged,
			revision: Number(current?.revision ?? 0) + 1
		}
	});
	return {
		ok: true,
		progress: {
			...merged,
			revision: Number(row?.revision ?? 1)
		}
	};
});
//#endregion
export { getPreschoolProgress_createServerFn_handler, savePreschoolProgress_createServerFn_handler };
