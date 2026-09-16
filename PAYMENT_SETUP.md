# Payment setup

The app now has a server-created Stripe Checkout flow and signed webhook verification. No Stripe secret is exposed to the browser.

Set these server-side environment variables in Vercel:

```text
PAYMENT_PROVIDER=stripe
PAYMENT_WEBHOOK_SECRET=whsec_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_AD_FREE=price_...
STRIPE_PRICE_PREMIUM=price_...
STRIPE_PRICE_STARTER=price_...
APP_URL=https://your-domain.example
```

Create a Stripe webhook pointing to:

```text
https://your-domain.example/api/payments/webhook
```

Subscribe the webhook to `checkout.session.completed`. The checkout session stores the verified app `userId` and `productId` in metadata; the webhook then creates the purchase receipt and entitlement for that authenticated user.

For local/dev testing, use Stripe test keys and test Price IDs. Do not put `STRIPE_SECRET_KEY` or `PAYMENT_WEBHOOK_SECRET` in client-side `VITE_*` variables or source control.

The login system is already wired through Better Auth with email/password enabled; deployed builds should keep the provisioned auth environment enabled.
