import { createHmac, timingSafeEqual } from "node:crypto";
export type VerifiedPurchase = { provider:string; externalId:string; productId:string; amountMinor:number; currency:string; raw:unknown; userId:string; expiresAt?:string|null; status?:"verified"|"refunded"|"inactive"; eventKind?:"purchase"|"subscription_update"|"subscription_delete"|"refund" };
export interface PaymentProvider { verifyWebhook(rawBody:string,signature:string|undefined):Promise<VerifiedPurchase|null>; }
function paymentIntentOrRefundExternalId(obj:any, fallback:string){ return String(obj?.payment_intent??fallback).slice(0,128); }

export class StripePaymentProvider implements PaymentProvider {
  constructor(private readonly secret:string, private readonly provider="stripe", private readonly apiKey=process.env.STRIPE_SECRET_KEY?.trim()) {}
  async verifyWebhook(rawBody:string, signature:string|undefined){
    if(!signature||!this.secret)return null;
    const parts=signature.split(",");
    const timestamp=parts.find((x)=>x.startsWith("t="))?.slice(2);
    const signatures=parts.filter((x)=>x.startsWith("v1=")).map((x)=>x.slice(3));
    if(!timestamp||!signatures.length)return null;
    const age=Math.abs(Date.now()/1000-Number(timestamp));
    if(!Number.isFinite(age)||age>300)return null;
    const expected=createHmac("sha256",this.secret).update(`${timestamp}.${rawBody}`).digest("hex");
    const valid=signatures.some((candidate)=>{try{return timingSafeEqual(Buffer.from(expected),Buffer.from(candidate));}catch{return false;}});
    if(!valid)return null;
    let event:any; try{event=JSON.parse(rawBody);}catch{return null;}
    const type=String(event?.type??"");
    const obj=event?.data?.object;
    const isCheckout=type==="checkout.session.completed";
    const isSubUpdate=type==="customer.subscription.updated";
    const isSubDelete=type==="customer.subscription.deleted";
    const isChargeRefunded=type==="charge.refunded";
    const isRefundCreated=type==="refund.created";
    if(!isCheckout&&!isSubUpdate&&!isSubDelete&&!isChargeRefunded&&!isRefundCreated)return null;
    let metadata=obj?.metadata ?? {};
    if (isChargeRefunded || isRefundCreated) {
      const paymentIntentId=String(obj?.payment_intent??"");
      if (paymentIntentId && this.apiKey) {
        try {
          const r=await fetch(`https://api.stripe.com/v1/payment_intents/${encodeURIComponent(paymentIntentId)}`,{headers:{Authorization:`Bearer ${this.apiKey}`}});
          if (r.ok) { const pi:any=await r.json(); metadata={...(pi?.metadata??{}),...(metadata??{})}; }
        } catch { /* webhook remains safe; route can ignore an unresolvable refund */ }
      }
    }
    const userId=String(metadata.userId??obj?.client_reference_id??"");
    const productId=String(metadata.productId??(isCheckout ? "" : "premium"));
    const externalId=String(obj?.id??"");
    if(!userId||!productId||!externalId)return null;
    const amount=Number(obj?.amount_total??obj?.amount??0); const currency=String(obj?.currency??"USD").toUpperCase();
    const periodEnd=Number(obj?.current_period_end??0);
    const expiresAt=periodEnd>0 ? new Date(periodEnd*1000).toISOString() : null;
    if (isChargeRefunded || isRefundCreated) return {provider:this.provider,externalId:paymentIntentOrRefundExternalId(obj, externalId),productId:productId.slice(0,128),amountMinor:Math.max(0,Math.min(100000000,Math.floor(amount||0))),currency:currency.slice(0,8),raw:event,userId:userId.slice(0,128),expiresAt:null,status:"refunded" as const,eventKind:"refund" as const};
    if(isSubDelete) return {provider:this.provider,externalId:externalId.slice(0,128),productId:productId.slice(0,128),amountMinor:0,currency:currency.slice(0,8),raw:event,userId:userId.slice(0,128),expiresAt,status:"inactive" as const,eventKind:"subscription_delete" as const};
    if(isSubUpdate) {
      const active=["active","trialing"].includes(String(obj?.status??""));
      return {provider:this.provider,externalId:externalId.slice(0,128),productId:productId.slice(0,128),amountMinor:0,currency:currency.slice(0,8),raw:event,userId:userId.slice(0,128),expiresAt,status:(active?"verified":"inactive") as const,eventKind:"subscription_update" as const};
    }
    return {provider:this.provider,externalId:String(obj?.payment_intent??externalId).slice(0,128),productId:productId.slice(0,128),amountMinor:Math.max(0,Math.min(100000000,Math.floor(amount||0))),currency:currency.slice(0,8),raw:event,userId:userId.slice(0,128),expiresAt:null,status:"verified" as const,eventKind:"purchase" as const};
  }
}

export class HmacPaymentProvider implements PaymentProvider {
  constructor(private readonly secret:string, private readonly provider:string){ }
  async verifyWebhook(rawBody:string,signature:string|undefined){if(!signature||!this.secret)return null;const expected=createHmac("sha256",this.secret).update(rawBody).digest("hex");try{if(!timingSafeEqual(Buffer.from(expected),Buffer.from(signature)))return null;}catch{return null;}let x:any;try{x=JSON.parse(rawBody)}catch{return null;}if(String(x.provider??this.provider)!==this.provider||!x.userId||!x.externalId||!x.productId)return null;return{provider:this.provider,externalId:String(x.externalId).slice(0,128),productId:String(x.productId).slice(0,128),amountMinor:Math.max(0,Math.min(100000000,Math.floor(Number(x.amountMinor)||0))),currency:String(x.currency??"USD").toUpperCase().slice(0,8),raw:x,userId:String(x.userId).slice(0,128),expiresAt:x.expiresAt??null,status:x.status==="refunded"?"refunded" as const:x.status==="inactive"?"inactive" as const:"verified" as const,eventKind:x.eventKind==="refund"?"refund" as const:x.eventKind==="subscription_update"?"subscription_update" as const:x.eventKind==="subscription_delete"?"subscription_delete" as const:"purchase" as const};}
}
