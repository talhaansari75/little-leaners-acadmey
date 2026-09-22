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


## Blockchain / Web3 payments

Blockchain checkout is non-custodial and server-verified. The browser asks the user's EVM wallet to send a transaction; the server independently verifies the chain, sender, recipient, exact amount, token contract (for ERC-20), receipt status and confirmation depth before granting the entitlement.

Configure only server-side variables:

CRYPTO_RPC_1=https://...
CRYPTO_TREASURY_1=0x...
CRYPTO_CONFIRMATIONS_1=12
CRYPTO_RPC_137=https://...
CRYPTO_TREASURY_137=0x...
CRYPTO_CONFIRMATIONS_137=30
CRYPTO_RPC_56=https://...
CRYPTO_TREASURY_56=0x...
CRYPTO_CONFIRMATIONS_56=15
CRYPTO_RPC_8453=https://...
CRYPTO_TREASURY_8453=0x...
CRYPTO_CONFIRMATIONS_8453=6
CRYPTO_RPC_42161=https://...
CRYPTO_TREASURY_42161=0x...
CRYPTO_CONFIRMATIONS_42161=6
CRYPTO_RPC_10=https://...
CRYPTO_TREASURY_10=0x...
CRYPTO_CONFIRMATIONS_10=6
# Testnet for QA only
CRYPTO_RPC_11155111=https://...
CRYPTO_TREASURY_11155111=0x...
CRYPTO_CONFIRMATIONS_11155111=2

CRYPTO_ASSET_TYPE=native
CRYPTO_ASSET_SYMBOL=ETH
CRYPTO_TOKEN_ADDRESS=
CRYPTO_TOKEN_DECIMALS=18
CRYPTO_PRICE_PREMIUM_ATOMIC=1000000000000000
CRYPTO_PRICE_STARTER_ATOMIC=500000000000000

For ERC-20 deployment, set CRYPTO_ASSET_TYPE=erc20, the token contract and its decimals. The same exact amount and token contract are enforced server-side.

Supported EVM chain IDs: Ethereum 1, Polygon 137, BNB Smart Chain 56, Base 8453, Arbitrum One 42161, Optimism 10, Sepolia testnet 11155111.

Security properties:
- no private keys/seed phrases are requested or stored
- server chooses recipient, chain, token and exact amount
- payment intents expire after 15 minutes
- transaction hash is idempotent
- failed transactions are rejected
- confirmation depth is checked
- ERC-20 Transfer logs are checked
- entitlement is granted atomically with the verified payment record
- client-supplied prices/recipients are not trusted
- use dedicated treasury addresses and testnet during QA

Important: blockchain checkout currently represents one-time purchases. Recurring crypto subscriptions need a separate authorization design. On-chain refunds require a deliberate treasury/admin workflow; never expose a private treasury key to the browser.