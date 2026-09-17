import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CK7xd07k.mjs";
import { t as authMiddleware } from "./middleware-CYOSum86.mjs";
import { t as getPrisma } from "./prisma-angsYNAY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-DcTiBG_s.js
var getMyEntitlements_createServerFn_handler = createServerRpc({
	id: "a529758e2663cf4082de79d1fe57edd20a44ee9b3cd6924baf895bc007150042",
	name: "getMyEntitlements",
	filename: "src/lib/v13/payments/server.ts"
}, (opts) => getMyEntitlements.__executeServer(opts));
var getMyEntitlements = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getMyEntitlements_createServerFn_handler, async ({ context }) => getPrisma().entitlement.findMany({
	where: {
		userId: context.userId,
		active: true,
		OR: [{ expiresAt: null }, { expiresAt: { gt: /* @__PURE__ */ new Date() } }]
	},
	orderBy: { updatedAt: "desc" },
	select: {
		productId: true,
		active: true,
		source: true,
		updatedAt: true,
		expiresAt: true
	}
}).then((rows) => rows.map((r) => ({
	...r,
	updatedAt: r.updatedAt.toISOString(),
	expiresAt: r.expiresAt?.toISOString() ?? null
}))));
var recordVerifiedPurchase_createServerFn_handler = createServerRpc({
	id: "d38b308059b70858a9ce92cfceeaa8a429c738b32064fb7cdc0b6429e186b301",
	name: "recordVerifiedPurchase",
	filename: "src/lib/v13/payments/server.ts"
}, (opts) => recordVerifiedPurchase.__executeServer(opts));
var recordVerifiedPurchase = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	provider: String(d.provider ?? "").slice(0, 32),
	externalId: String(d.externalId ?? "").slice(0, 128)
})).handler(recordVerifiedPurchase_createServerFn_handler, async () => ({
	ok: false,
	error: "Manual purchase grants are disabled. Use the signed payment webhook."
}));
var PRODUCTS = {
	ad_free: {
		name: "Ad-Free Journey",
		priceEnv: "STRIPE_PRICE_AD_FREE",
		mode: "payment"
	},
	premium: {
		name: "Journey Premium",
		priceEnv: "STRIPE_PRICE_PREMIUM",
		mode: "subscription"
	},
	starter_pack: {
		name: "Starter Pack",
		priceEnv: "STRIPE_PRICE_STARTER",
		mode: "payment"
	}
};
var createCheckoutSession_createServerFn_handler = createServerRpc({
	id: "4fffa5a0f63ea41e3ee685646e66e22669d938d88b5e688dbcd2825af9159c32",
	name: "createCheckoutSession",
	filename: "src/lib/v13/payments/server.ts"
}, (opts) => createCheckoutSession.__executeServer(opts));
var createCheckoutSession = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ productId: String(d.productId ?? "").slice(0, 64) })).handler(createCheckoutSession_createServerFn_handler, async ({ context, data }) => {
	const product = PRODUCTS[data.productId];
	const secret = process.env.STRIPE_SECRET_KEY?.trim();
	const priceId = product ? process.env[product.priceEnv]?.trim() : void 0;
	if (!product || !secret || !priceId) return {
		ok: false,
		error: "Payment provider is not configured for this product."
	};
	const origin = (await import("./ssr.mjs").then((n) => n.c).then((n) => n.t).then((m) => m.getRequest()))?.headers.get("origin") || process.env.APP_URL?.trim() || "http://localhost:8080";
	const params = new URLSearchParams();
	params.set("mode", product.mode);
	params.set("line_items[0][price]", priceId);
	params.set("line_items[0][quantity]", "1");
	params.set("success_url", `${origin}/?payment=success`);
	params.set("cancel_url", `${origin}/?payment=cancelled`);
	params.set("client_reference_id", context.userId);
	params.set("metadata[userId]", context.userId);
	params.set("metadata[productId]", data.productId);
	if (product.mode === "payment") {
		params.set("payment_intent_data[metadata][userId]", context.userId);
		params.set("payment_intent_data[metadata][productId]", data.productId);
	}
	if (product.mode === "subscription") {
		params.set("subscription_data[metadata][userId]", context.userId);
		params.set("subscription_data[metadata][productId]", data.productId);
	}
	const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${secret}`,
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: params.toString()
	});
	const body = await response.json().catch(() => null);
	if (!response.ok || !body?.url) return {
		ok: false,
		error: body?.error?.message || "Unable to create checkout session."
	};
	return {
		ok: true,
		url: body.url
	};
});
//#endregion
export { createCheckoutSession_createServerFn_handler, getMyEntitlements_createServerFn_handler, recordVerifiedPurchase_createServerFn_handler };
