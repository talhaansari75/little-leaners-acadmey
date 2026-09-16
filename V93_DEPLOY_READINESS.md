# V93 Deployment Hardening

This release is prepared for production deployment on Vercel with Vite + Nitro.

### Hardening added
- Production build now fails before compilation when required auth/database/payment configuration is missing.
- Production Better Auth now fails closed at runtime if `BETTER_AUTH_SECRET` is missing instead of silently generating a temporary preview secret.
- `BETTER_AUTH_SECRET` is the documented variable name everywhere; the old `AUTH_SECRET` example was corrected.
- `APP_URL` is required and must be HTTPS in production.
- Production PostgreSQL URLs must explicitly enable TLS.
- Stripe production configuration is checked for the secret, webhook secret, and all configured catalog price IDs.
- Node runtime is pinned to `>=20.19.0`, compatible with the current Vite toolchain.

### Verification
- V92 regression/deployment checks: **7/7 PASS**.
- Existing preschool/academy static regression checks: **36/36 PASS** in the focused release suite.
- TypeScript syntax checks on changed server/database/intelligence files: **PASS**.
- The local environment does not contain a complete dependency installation, so a real Vite production build cannot be truthfully marked as executed here. A deployment with the committed `package-lock.json` will install dependencies first.

### Required Vercel variables
See `DEPLOY_READINESS.md` and `PAYMENT_DEPLOYMENT.md`.


## V94 UI enhancement
The first-launch splash is now a full-screen Little Learners Academy opening experience. See `V94_ACADEMY_OPENING.md`.
