import { createFileRoute } from "@tanstack/react-router";
import { HmacPaymentProvider, StripePaymentProvider } from "@/lib/payments/providerBoundary";
import { getPrisma } from "@/lib/db";


export const Route = createFileRoute("/api/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const raw = await request.text();
        const providerName = process.env.PAYMENT_PROVIDER?.trim();
        const secret = process.env.PAYMENT_WEBHOOK_SECRET?.trim();
        if (!providerName || !secret) {
          return new Response(JSON.stringify({ ok: false, error: "Payment provider is not configured." }), {
            status: 503,
            headers: { "content-type": "application/json" },
          });
        }
        const signature = request.headers.get("stripe-signature") ?? request.headers.get("x-payment-signature") ?? request.headers.get("x-signature") ?? undefined;
        const verifier = providerName.toLowerCase() === "stripe"
          ? new StripePaymentProvider(secret, "stripe", process.env.STRIPE_SECRET_KEY?.trim())
          : new HmacPaymentProvider(secret, providerName);
        const verified = await verifier.verifyWebhook(
          raw,
          signature,
        );
        if (!verified) {
          return new Response(JSON.stringify({ ok: false, error: "Invalid webhook signature or payload." }), {
            status: 401,
            headers: { "content-type": "application/json" },
          });
        }
        const db = getPrisma();
        const eventId = String((verified.raw as { id?: unknown })?.id ?? verified.externalId).slice(0, 200);
        if (!eventId) return new Response(JSON.stringify({ ok: false, error: "Missing event id." }), { status: 400, headers: { "content-type": "application/json" } });
        const eventType = String((verified.raw as { type?: unknown })?.type ?? "unknown").slice(0, 160);
        try {
          await db.$transaction(async (tx) => {
            await tx.paymentEventV5.create({ data: { eventId, eventType, payloadJson: verified.raw, processedAt: Date.now() } });

          if (verified.eventKind === "refund") {
            await tx.purchaseReceipt.updateMany({ where: { provider: verified.provider, externalId: verified.externalId }, data: { status: "refunded", rawJson: verified.raw } });
            // A refunded subscription charge must not cancel the subscription entitlement.
            // Stripe's subscription.updated/deleted events are the authoritative lifecycle.
            if (verified.productId === "premium") return;
            const remaining = await tx.purchaseReceipt.count({ where: { userId: verified.userId, productId: verified.productId, status: "verified" } });
            if (remaining === 0) {
              await tx.entitlement.updateMany({ where: { userId: verified.userId, productId: verified.productId }, data: { active: false, source: "refund", expiresAt: null } });
            }
            return;
          }
          if (verified.eventKind === "subscription_update" || verified.eventKind === "subscription_delete") {
            const active = verified.eventKind === "subscription_update" && verified.status === "verified";
            await tx.entitlement.upsert({
              where: { userId_productId: { userId: verified.userId, productId: verified.productId } },
              create: { userId: verified.userId, productId: verified.productId, active, source: active ? "purchase" : "refund", expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null },
              update: { active, source: active ? "purchase" : "refund", expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null },
            });
            return;
          }
          if (verified.status === "refunded") {
            await tx.purchaseReceipt.updateMany({ where: { provider: verified.provider, externalId: verified.externalId }, data: { status: "refunded", rawJson: verified.raw } });
            if (verified.productId !== "premium") {
              const remaining = await tx.purchaseReceipt.count({ where: { userId: verified.userId, productId: verified.productId, status: "verified" } });
              if (remaining === 0) await tx.entitlement.updateMany({ where: { userId: verified.userId, productId: verified.productId }, data: { active: false, source: "refund" } });
            }
            return;
          }
          const allowedCurrencies = ["USD","EUR","GBP","PKR"]; const currency = allowedCurrencies.includes(verified.currency) ? verified.currency : "USD";
          await tx.purchaseReceipt.upsert({
            where: { provider_externalId: { provider: verified.provider, externalId: verified.externalId } },
            create: { userId: verified.userId, provider: verified.provider, externalId: verified.externalId, productId: verified.productId, amountMinor: verified.amountMinor, currency, status: "verified", rawJson: verified.raw },
            update: { status: "verified", rawJson: verified.raw, userId: verified.userId, productId: verified.productId, amountMinor: verified.amountMinor, currency },
          });
          await tx.entitlement.upsert({
            where: { userId_productId: { userId: verified.userId, productId: verified.productId } },
            create: { userId: verified.userId, productId: verified.productId, active: true, source: "purchase", expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null },
            update: { active: true, source: "purchase", expiresAt: verified.expiresAt ? new Date(verified.expiresAt) : null },
          });
          });
        } catch (e) {
          if ((e as { code?: string })?.code === "P2002") return new Response(JSON.stringify({ ok: true, duplicate: true }), { status: 200, headers: { "content-type": "application/json" } });
          throw e;
        }
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
