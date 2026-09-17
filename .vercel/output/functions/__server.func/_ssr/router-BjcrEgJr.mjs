import { o as __toESM, r as __exportAll } from "../_runtime.mjs";
import { f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as string, N as number, P as object, R as union, j as literal } from "../_libs/@better-auth/core+[...].mjs";
import { t as getPrisma } from "./prisma-angsYNAY.mjs";
import { n as auth } from "./server-CaehjQPx.mjs";
import { f as TriangleAlert } from "../_libs/lucide-react.mjs";
import { createHmac, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BjcrEgJr.js
var router_BjcrEgJr_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-ChJxw_ks.css";
var APP_NAME = "Little Learners Academy";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#4DA6FF"
			},
			{
				name: "description",
				content: "Little Learners Academy — Learn • Play • Grow. A magical preschool world for Nursery, KG and Montessori."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$1 = () => import("./routes-sAqNqbcX.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./login-C19-loQS.mjs");
var Route$3 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route$2 = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
function paymentIntentOrRefundExternalId(obj, fallback) {
	return String(obj?.payment_intent ?? fallback).slice(0, 128);
}
var StripePaymentProvider = class {
	secret;
	provider;
	apiKey;
	constructor(secret, provider = "stripe", apiKey = process.env.STRIPE_SECRET_KEY?.trim()) {
		this.secret = secret;
		this.provider = provider;
		this.apiKey = apiKey;
	}
	async verifyWebhook(rawBody, signature) {
		if (!signature || !this.secret) return null;
		const parts = signature.split(",");
		const timestamp = parts.find((x) => x.startsWith("t="))?.slice(2);
		const signatures = parts.filter((x) => x.startsWith("v1=")).map((x) => x.slice(3));
		if (!timestamp || !signatures.length) return null;
		const age = Math.abs(Date.now() / 1e3 - Number(timestamp));
		if (!Number.isFinite(age) || age > 300) return null;
		const expected = createHmac("sha256", this.secret).update(`${timestamp}.${rawBody}`).digest("hex");
		if (!signatures.some((candidate) => {
			try {
				return timingSafeEqual(Buffer.from(expected), Buffer.from(candidate));
			} catch {
				return false;
			}
		})) return null;
		let event;
		try {
			event = JSON.parse(rawBody);
		} catch {
			return null;
		}
		const type = String(event?.type ?? "");
		const obj = event?.data?.object;
		const isCheckout = type === "checkout.session.completed";
		const isSubUpdate = type === "customer.subscription.updated";
		const isSubDelete = type === "customer.subscription.deleted";
		const isChargeRefunded = type === "charge.refunded";
		const isRefundCreated = type === "refund.created";
		if (!isCheckout && !isSubUpdate && !isSubDelete && !isChargeRefunded && !isRefundCreated) return null;
		let metadata = obj?.metadata ?? {};
		if (isChargeRefunded || isRefundCreated) {
			const paymentIntentId = String(obj?.payment_intent ?? "");
			if (paymentIntentId && this.apiKey) try {
				const r = await fetch(`https://api.stripe.com/v1/payment_intents/${encodeURIComponent(paymentIntentId)}`, { headers: { Authorization: `Bearer ${this.apiKey}` } });
				if (r.ok) metadata = {
					...(await r.json())?.metadata ?? {},
					...metadata ?? {}
				};
			} catch {}
		}
		const userId = String(metadata.userId ?? obj?.client_reference_id ?? "");
		const productId = String(metadata.productId ?? (isCheckout ? "" : "premium"));
		const externalId = String(obj?.id ?? "");
		if (!userId || !productId || !externalId) return null;
		const amount = Number(obj?.amount_total ?? obj?.amount ?? 0);
		const currency = String(obj?.currency ?? "USD").toUpperCase();
		const periodEnd = Number(obj?.current_period_end ?? 0);
		const expiresAt = periodEnd > 0 ? (/* @__PURE__ */ new Date(periodEnd * 1e3)).toISOString() : null;
		if (isChargeRefunded || isRefundCreated) return {
			provider: this.provider,
			externalId: paymentIntentOrRefundExternalId(obj, externalId),
			productId: productId.slice(0, 128),
			amountMinor: Math.max(0, Math.min(1e8, Math.floor(amount || 0))),
			currency: currency.slice(0, 8),
			raw: event,
			userId: userId.slice(0, 128),
			expiresAt: null,
			status: "refunded",
			eventKind: "refund"
		};
		if (isSubDelete) return {
			provider: this.provider,
			externalId: externalId.slice(0, 128),
			productId: productId.slice(0, 128),
			amountMinor: 0,
			currency: currency.slice(0, 8),
			raw: event,
			userId: userId.slice(0, 128),
			expiresAt,
			status: "inactive",
			eventKind: "subscription_delete"
		};
		if (isSubUpdate) {
			const active = ["active", "trialing"].includes(String(obj?.status ?? ""));
			return {
				provider: this.provider,
				externalId: externalId.slice(0, 128),
				productId: productId.slice(0, 128),
				amountMinor: 0,
				currency: currency.slice(0, 8),
				raw: event,
				userId: userId.slice(0, 128),
				expiresAt,
				status: active ? "verified" : "inactive",
				eventKind: "subscription_update"
			};
		}
		return {
			provider: this.provider,
			externalId: String(obj?.payment_intent ?? externalId).slice(0, 128),
			productId: productId.slice(0, 128),
			amountMinor: Math.max(0, Math.min(1e8, Math.floor(amount || 0))),
			currency: currency.slice(0, 8),
			raw: event,
			userId: userId.slice(0, 128),
			expiresAt: null,
			status: "verified",
			eventKind: "purchase"
		};
	}
};
var HmacPaymentProvider = class {
	secret;
	provider;
	constructor(secret, provider) {
		this.secret = secret;
		this.provider = provider;
	}
	async verifyWebhook(rawBody, signature) {
		if (!signature || !this.secret) return null;
		const expected = createHmac("sha256", this.secret).update(rawBody).digest("hex");
		try {
			if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return null;
		} catch {
			return null;
		}
		let x;
		try {
			x = JSON.parse(rawBody);
		} catch {
			return null;
		}
		if (String(x.provider ?? this.provider) !== this.provider || !x.userId || !x.externalId || !x.productId) return null;
		return {
			provider: this.provider,
			externalId: String(x.externalId).slice(0, 128),
			productId: String(x.productId).slice(0, 128),
			amountMinor: Math.max(0, Math.min(1e8, Math.floor(Number(x.amountMinor) || 0))),
			currency: String(x.currency ?? "USD").toUpperCase().slice(0, 8),
			raw: x,
			userId: String(x.userId).slice(0, 128),
			expiresAt: x.expiresAt ?? null,
			status: x.status === "refunded" ? "refunded" : "verified"
		};
	}
};
var Route$1 = createFileRoute("/api/payments/webhook")({ server: { handlers: { POST: async ({ request }) => {
	const raw = await request.text();
	const providerName = process.env.PAYMENT_PROVIDER?.trim();
	const secret = process.env.PAYMENT_WEBHOOK_SECRET?.trim();
	if (!providerName || !secret) return new Response(JSON.stringify({
		ok: false,
		error: "Payment provider is not configured."
	}), {
		status: 503,
		headers: { "content-type": "application/json" }
	});
	const signature = request.headers.get("stripe-signature") ?? request.headers.get("x-payment-signature") ?? request.headers.get("x-signature") ?? void 0;
	const verified = await (providerName.toLowerCase() === "stripe" ? new StripePaymentProvider(secret, "stripe", process.env.STRIPE_SECRET_KEY?.trim()) : new HmacPaymentProvider(secret, providerName)).verifyWebhook(raw, signature);
	if (!verified) return new Response(JSON.stringify({
		ok: false,
		error: "Invalid webhook signature or payload."
	}), {
		status: 401,
		headers: { "content-type": "application/json" }
	});
	const db = getPrisma();
	const eventId = String(verified.raw?.id ?? verified.externalId).slice(0, 200);
	if (!eventId) return new Response(JSON.stringify({
		ok: false,
		error: "Missing event id."
	}), {
		status: 400,
		headers: { "content-type": "application/json" }
	});
	const eventType = String(verified.raw?.type ?? "unknown").slice(0, 160);
	try {
		await db.$transaction(async (tx) => {
			await tx.paymentEventV5.create({ data: {
				eventId,
				eventType,
				payloadJson: verified.raw,
				processedAt: Date.now()
			} });
			if (verified.eventKind === "refund") {
				await tx.purchaseReceipt.updateMany({
					where: {
						provider: verified.provider,
						externalId: verified.externalId
					},
					data: {
						status: "refunded",
						rawJson: verified.raw
					}
				});
				if (verified.productId === "premium") return;
				if (await tx.purchaseReceipt.count({ where: {
					userId: verified.userId,
					productId: verified.productId,
					status: "verified"
				} }) === 0) await tx.entitlement.updateMany({
					where: {
						userId: verified.userId,
						productId: verified.productId
					},
					data: {
						active: false,
						source: "refund",
						expiresAt: null
					}
				});
				return;
			}
			if (verified.eventKind === "subscription_update" || verified.eventKind === "subscription_delete") {
				const active = verified.eventKind === "subscription_update" && verified.status === "verified";
				await tx.entitlement.upsert({
					where: { userId_productId: {
						userId: verified.userId,
						productId: verified.productId
					} },
					create: {
						userId: verified.userId,
						productId: verified.productId,
						active,
						source: active ? "purchase" : "refund",
						expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null
					},
					update: {
						active,
						source: active ? "purchase" : "refund",
						expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null
					}
				});
				return;
			}
			if (verified.status === "refunded") {
				await tx.purchaseReceipt.updateMany({
					where: {
						provider: verified.provider,
						externalId: verified.externalId
					},
					data: {
						status: "refunded",
						rawJson: verified.raw
					}
				});
				if (verified.productId !== "premium") {
					if (await tx.purchaseReceipt.count({ where: {
						userId: verified.userId,
						productId: verified.productId,
						status: "verified"
					} }) === 0) await tx.entitlement.updateMany({
						where: {
							userId: verified.userId,
							productId: verified.productId
						},
						data: {
							active: false,
							source: "refund"
						}
					});
				}
				return;
			}
			const currency = [
				"USD",
				"EUR",
				"GBP",
				"PKR"
			].includes(verified.currency) ? verified.currency : "USD";
			await tx.purchaseReceipt.upsert({
				where: { provider_externalId: {
					provider: verified.provider,
					externalId: verified.externalId
				} },
				create: {
					userId: verified.userId,
					provider: verified.provider,
					externalId: verified.externalId,
					productId: verified.productId,
					amountMinor: verified.amountMinor,
					currency,
					status: "verified",
					rawJson: verified.raw
				},
				update: {
					status: "verified",
					rawJson: verified.raw,
					userId: verified.userId,
					productId: verified.productId,
					amountMinor: verified.amountMinor,
					currency
				}
			});
			await tx.entitlement.upsert({
				where: { userId_productId: {
					userId: verified.userId,
					productId: verified.productId
				} },
				create: {
					userId: verified.userId,
					productId: verified.productId,
					active: true,
					source: "purchase",
					expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null
				},
				update: {
					active: true,
					source: "purchase",
					expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null
				}
			});
		});
	} catch (e) {
		if (e?.code === "P2002") return new Response(JSON.stringify({
			ok: true,
			duplicate: true
		}), {
			status: 200,
			headers: { "content-type": "application/json" }
		});
		throw e;
	}
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers: { "content-type": "application/json" }
	});
} } } });
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	LoginRoute: Route$3.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$5
	}),
	ApiAuthSplatRoute: Route$2.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$5
	}),
	ApiPaymentsWebhookRoute: Route$1.update({
		id: "/api/payments/webhook",
		path: "/api/payments/webhook",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { getRouter, router_BjcrEgJr_exports as t };
