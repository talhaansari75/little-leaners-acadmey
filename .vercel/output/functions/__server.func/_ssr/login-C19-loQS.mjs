import { o as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as signIn, t as authClient } from "./client-Cd2ghEeK.mjs";
import { t as GROK_PROVIDERS } from "./server-CaehjQPx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C19-loQS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("in");
	const [err, setErr] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const onEmail = async (e) => {
		e.preventDefault();
		setBusy(true);
		setErr(null);
		try {
			if (mode === "up") {
				const res = await authClient.signUp.email({
					email,
					password,
					name: name || "Parent"
				});
				if (res.error) throw new Error(res.error.message || "Sign up failed");
			} else {
				const res = await authClient.signIn.email({
					email,
					password
				});
				if (res.error) throw new Error(res.error.message || "Sign in failed");
			}
			window.location.href = "/";
		} catch (ex) {
			setErr(ex instanceof Error ? ex.message : "Could not sign in");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "academy-login",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "academy-login-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "academy-opening-kicker",
					children: "PARENT AREA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Little Learners Academy" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sign in to sync progress and approve purchases. Children can keep learning without an account." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-col gap-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => signIn(p.providerId, { callbackURL: "/" }),
						className: "academy-ghost",
						children: ["Continue with ", p.label]
					}, p.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-5 flex flex-col gap-2",
					onSubmit: onEmail,
					children: [
						mode === "up" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							minLength: 2,
							className: "rounded-2xl border border-border bg-white px-3 py-3 text-slate-800",
							placeholder: "Your name",
							value: name,
							onChange: (e) => setName(e.target.value),
							autoComplete: "name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							className: "rounded-2xl border border-border bg-white px-3 py-3 text-slate-800",
							placeholder: "Email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							autoComplete: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "password",
							minLength: 8,
							className: "rounded-2xl border border-border bg-white px-3 py-3 text-slate-800",
							placeholder: "Password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							autoComplete: mode === "up" ? "new-password" : "current-password"
						}),
						err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-danger",
							children: err
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "academy-primary",
							disabled: busy,
							type: "submit",
							children: busy ? "Please wait…" : mode === "up" ? "Create parent account" : "Sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "academy-ghost",
							onClick: () => setMode(mode === "up" ? "in" : "up"),
							children: mode === "up" ? "I already have an account" : "Create a parent account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-4 inline-block text-sm font-semibold text-slate-600",
					children: "Back to the Academy"
				})
			]
		})
	});
}
//#endregion
export { Login as component };
