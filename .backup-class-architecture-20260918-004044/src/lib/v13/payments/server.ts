import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPrisma } from "@/lib/db";
export const getMyEntitlements=createServerFn({method:"GET"}).middleware([authMiddleware]).handler(async({context})=>getPrisma().entitlement.findMany({where:{userId:context.userId,active:true,OR:[{expiresAt:null},{expiresAt:{gt:new Date()}}]},orderBy:{updatedAt:"desc"},select:{productId:true,active:true,source:true,updatedAt:true,expiresAt:true}}).then(rows=>rows.map(r=>({...r,updatedAt:r.updatedAt.toISOString(),expiresAt:r.expiresAt?.toISOString() ?? null}))));
export const recordVerifiedPurchase=createServerFn({method:"POST"}).middleware([authMiddleware]).validator((d:{provider:string;externalId:string})=>({provider:String(d.provider??"").slice(0,32),externalId:String(d.externalId??"").slice(0,128)})).handler(async()=>({ok:false as const,error:"Manual purchase grants are disabled. Use the signed payment webhook."}));


const PRODUCTS = {
  ad_free: { name: "Ad-Free Journey", priceEnv: "STRIPE_PRICE_AD_FREE", mode: "payment" },
  premium: { name: "Journey Premium", priceEnv: "STRIPE_PRICE_PREMIUM", mode: "subscription" },
  starter_pack: { name: "Starter Pack", priceEnv: "STRIPE_PRICE_STARTER", mode: "payment" },
} as const;

export const createCheckoutSession = createServerFn({method:"POST"})
  .middleware([authMiddleware])
  .validator((d:{productId:string})=>({productId:String(d.productId??"").slice(0,64)}))
  .handler(async({context,data})=>{
    const product = PRODUCTS[data.productId as keyof typeof PRODUCTS];
    const secret = process.env.STRIPE_SECRET_KEY?.trim();
    const priceId = product ? process.env[product.priceEnv]?.trim() : undefined;
    if (!product || !secret || !priceId) return {ok:false as const,error:"Payment provider is not configured for this product."};
    const request = await import("@tanstack/react-start/server").then((m)=>m.getRequest());
    const origin = request?.headers.get("origin") || process.env.APP_URL?.trim() || "http://localhost:8080";
    const params = new URLSearchParams();
    params.set("mode", product.mode);
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
    params.set("success_url", `${origin}/?payment=success`);
    params.set("cancel_url", `${origin}/?payment=cancelled`);
    params.set("client_reference_id", context.userId);
    params.set("metadata[userId]", context.userId);
    params.set("metadata[productId]", data.productId);
    if (product.mode === "payment") {
      params.set("payment_intent_data[metadata][userId]", context.userId);
      params.set("payment_intent_data[metadata][productId]", data.productId);
    }
    if (product.mode === "subscription") {
      params.set("subscription_data[metadata][userId]", context.userId);
      params.set("subscription_data[metadata][productId]", data.productId);
    }
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method:"POST",
      headers:{Authorization:`Bearer ${secret}`,"Content-Type":"application/x-www-form-urlencoded"},
      body:params.toString(),
    });
    const body = await response.json().catch(()=>null) as {url?:string;error?:{message?:string}} | null;
    if (!response.ok || !body?.url) return {ok:false as const,error:body?.error?.message || "Unable to create checkout session."};
    return {ok:true as const,url:body.url};
  });
