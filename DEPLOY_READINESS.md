# Little Learners Academy — Deployment Readiness

## Application target
The production target is Vercel using the Vite + Nitro `vercel` preset.

## Required production environment
- `VITE_AUTH_ENABLED=true`
- `BETTER_AUTH_SECRET` — 32+ random characters
- `DATABASE_URL` — PostgreSQL URL with explicit TLS
- `APP_URL` — final HTTPS origin
- `PAYMENT_PROVIDER=stripe`
- `STRIPE_SECRET_KEY`
- `PAYMENT_WEBHOOK_SECRET`
- `STRIPE_PRICE_AD_FREE`
- `STRIPE_PRICE_PREMIUM`
- `STRIPE_PRICE_STARTER`

AdSense variables are optional; configure them only if ads are enabled for the release.

## Build safety
`npm run build` runs `scripts/deploy-preflight.mjs` first. A production build fails closed if required auth, database, HTTPS, or Stripe configuration is missing. Database migrations then run after the Vite/Nitro build through `npm run db:migrate`.

## Important runtime behavior
- Production uses the configured PostgreSQL database; PGLite remains a preview/local fallback.
- Payment access is server-authorized and purchase entitlements are granted only from verified payment webhooks.
- The service worker provides offline caching after installation/use; a completely first-ever visit still needs an online connection to obtain the application bundle.
