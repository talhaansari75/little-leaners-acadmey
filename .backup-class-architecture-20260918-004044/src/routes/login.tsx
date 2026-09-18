import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn, authClient } from "@/lib/auth/client";
import { emailAndPasswordEnabled } from "@/lib/auth/email-password";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"in" | "up">("in");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      if (mode === "up") {
        const res = await authClient.signUp.email({
          email,
          password,
          name: name || "Parent",
        });
        if (res.error) throw new Error(res.error.message || "Sign up failed");
      } else {
        const res = await authClient.signIn.email({ email, password });
        if (res.error) throw new Error(res.error.message || "Sign in failed");
      }
      window.location.href = "/";
    } catch (ex) {
      setErr(ex instanceof Error ? ex.message : "Could not sign in");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="academy-login">
      <div className="academy-login-card">
        <p className="academy-opening-kicker">PARENT AREA</p>
        <h1>Little Learners Academy</h1>
        <p>Sign in to sync progress and approve purchases. Children can keep learning without an account.</p>

        {authEnabled ? (
          <div className="mt-5 flex flex-col gap-2">
            {GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="academy-ghost"
              >
                Continue with {p.label}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">Sign-in is disabled in this build.</p>
        )}

        {authEnabled && emailAndPasswordEnabled && (
          <form className="mt-5 flex flex-col gap-2" onSubmit={onEmail}>
            {mode === "up" && (
              <input
                required
                minLength={2}
                className="rounded-2xl border border-border bg-white px-3 py-3 text-slate-800"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            )}
            <input
              required
              type="email"
              className="rounded-2xl border border-border bg-white px-3 py-3 text-slate-800"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <input
              required
              type="password"
              minLength={8}
              className="rounded-2xl border border-border bg-white px-3 py-3 text-slate-800"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "up" ? "new-password" : "current-password"}
            />
            {err && <p className="text-sm text-danger">{err}</p>}
            <button className="academy-primary" disabled={busy} type="submit">
              {busy ? "Please wait…" : mode === "up" ? "Create parent account" : "Sign in"}
            </button>
            <button type="button" className="academy-ghost" onClick={() => setMode(mode === "up" ? "in" : "up")}>
              {mode === "up" ? "I already have an account" : "Create a parent account"}
            </button>
          </form>
        )}

        <a href="/" className="mt-4 inline-block text-sm font-semibold text-slate-600">Back to the Academy</a>
      </div>
    </main>
  );
}
