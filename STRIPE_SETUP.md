# Stripe production setup

1. Create the three Stripe Prices used by the app:
   - `STRIPE_PRICE_AD_FREE`: one-time
   - `STRIPE_PRICE_PREMIUM`: recurring subscription
   - `STRIPE_PRICE_STARTER`: one-time
2. Set `PAYMENT_PROVIDER=stripe`.
3. Set `STRIPE_SECRET_KEY` and `PAYMENT_WEBHOOK_SECRET` as server-only Vercel environment variables.
4. Set `APP_URL` to the production origin.
5. Configure a Stripe webhook to `https://YOUR_DOMAIN/api/payments/webhook`.
6. Subscribe the webhook to at least `checkout.session.completed`, `customer.subscription.updated`, and `customer.subscription.deleted`.
7. Never put `STRIPE_SECRET_KEY` or `PAYMENT_WEBHOOK_SECRET` in `VITE_*` variables.
