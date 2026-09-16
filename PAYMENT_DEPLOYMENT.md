# Production deployment checklist

## Authentication
- Set `VITE_AUTH_ENABLED=true`.
- Set a long random `BETTER_AUTH_SECRET` (at least 32 characters).
- Set a production `DATABASE_URL`.

## Stripe
- `PAYMENT_PROVIDER=stripe`
- `STRIPE_SECRET_KEY=sk_live_...`
- `PAYMENT_WEBHOOK_SECRET=whsec_...`
- Configure `STRIPE_PRICE_AD_FREE`, `STRIPE_PRICE_PREMIUM`, and `STRIPE_PRICE_STARTER` with real Stripe Price IDs.
- Configure Stripe webhook endpoint to `/api/payments/webhook`.
- Enable at least `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `charge.refunded`, and `refund.created`.
- Use HTTPS in production.

## AdSense
- Set `VITE_ADSENSE_PUBLISHER_ID` to your real publisher ID.
- Set `VITE_ADSENSE_SLOT` to your real responsive ad slot.
- Copy the publisher-specific line into `public/ads.txt` using the exact value Google provides in AdSense.

Never commit real secrets to GitHub.

## Vercel
- Framework/build is already configured through the Vite + Nitro Vercel preset; no custom `vercel.json` is required.
- Set the production environment variables in Vercel before deploying. The build now fails early instead of silently deploying with the temporary PGLite database.
- `DATABASE_URL` must use PostgreSQL and explicit TLS (`sslmode=require`, `verify-ca`, or `verify-full`).
- `APP_URL` must be the final HTTPS app origin.
- Do not put Stripe secrets or `BETTER_AUTH_SECRET` in `VITE_*` variables.
