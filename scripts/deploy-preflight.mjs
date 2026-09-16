#!/usr/bin/env node
/** Production deploy preflight.
 * Fails closed for a real production build when the app's required
 * authentication/database/payment configuration is missing or unsafe.
 * Local development and preview builds keep the existing PGLite fallback.
 */
const production = process.env.NODE_ENV === "production";
if (!production) {
  console.log("[deploy-preflight] non-production build — environment checks skipped.");
  process.exit(0);
}

const env = (key) => process.env[key]?.trim();
const fail = (message) => { throw new Error(message); };

if (env("VITE_AUTH_ENABLED") !== "false") {
  if (!env("DATABASE_URL")) fail("DATABASE_URL is required for production auth/data persistence.");
  const secret = env("BETTER_AUTH_SECRET");
  if (!secret) fail("BETTER_AUTH_SECRET is required in production (AUTH_SECRET is not used by the app).");
  if (secret.length < 32) fail("BETTER_AUTH_SECRET must be at least 32 characters in production.");
}

const appUrl = env("APP_URL");
if (!appUrl) fail("APP_URL is required in production.");
let parsed;
try { parsed = new URL(appUrl); } catch { fail("APP_URL must be a valid absolute URL."); }
if (parsed.protocol !== "https:") fail("APP_URL must use HTTPS in production.");

const db = env("DATABASE_URL");
if (db) {
  let dbUrl;
  try { dbUrl = new URL(db); } catch { fail("DATABASE_URL must be a valid PostgreSQL URL."); }
  if (!["postgres:", "postgresql:"].includes(dbUrl.protocol)) fail("DATABASE_URL must use PostgreSQL.");
  const sslmode = dbUrl.searchParams.get("sslmode");
  if (!["require", "verify-ca", "verify-full"].includes(sslmode ?? "") && env("ALLOW_INSECURE_TEST_DB") !== "true") {
    fail("Production DATABASE_URL must explicitly require TLS with sslmode=require, verify-ca, or verify-full.");
  }
}

const provider = (env("PAYMENT_PROVIDER") ?? "stripe").toLowerCase();
if (provider === "stripe") {
  const stripeSecret = env("STRIPE_SECRET_KEY");
  const webhook = env("PAYMENT_WEBHOOK_SECRET");
  if (!stripeSecret) fail("STRIPE_SECRET_KEY is required because PAYMENT_PROVIDER=stripe.");
  if (!/^sk_(test|live)_/.test(stripeSecret)) fail("STRIPE_SECRET_KEY does not look like a Stripe secret key.");
  if (!webhook || !webhook.startsWith("whsec_")) fail("PAYMENT_WEBHOOK_SECRET must be a Stripe whsec_ webhook secret.");
  for (const key of ["STRIPE_PRICE_AD_FREE", "STRIPE_PRICE_PREMIUM", "STRIPE_PRICE_STARTER"]) {
    if (!env(key)) fail(`${key} is required for the configured purchase catalog.`);
  }
}

console.log("[deploy-preflight] PASS — production environment is configured for deploy.");
