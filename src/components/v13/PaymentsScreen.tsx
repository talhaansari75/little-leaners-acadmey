import { useEffect, useState } from "react";
import { Screen } from "@/components/screens/chrome";
import { createCheckoutSession, getMyEntitlements } from "@/lib/v13/payments/server";

const PRODUCTS = [
  { id: "ad_free", title: "Ad-Free Journey", detail: "Remove supported game ads from the journey." },
  { id: "premium", title: "Journey Premium", detail: "Premium access through a recurring subscription price configured by the provider." },
  { id: "starter_pack", title: "Starter Pack", detail: "A one-time starter purchase for configured game content." },
] as const;

export function PaymentsScreen({onBack}:{onBack:()=>void}) {
 const [rows,setRows]=useState<Awaited<ReturnType<typeof getMyEntitlements>>>([]),[error,setError]=useState(""),[busy,setBusy]=useState<string|null>(null);
 const refresh=()=>void getMyEntitlements().then(setRows).catch(()=>setError("Sign in to view account entitlements."));
 useEffect(refresh,[]);
 const buy=async(productId:string)=>{
   setBusy(productId); setError("");
   try {
     const result=await createCheckoutSession({data:{productId}});
     if(!result.ok) throw new Error(result.error);
     window.location.href=result.url;
   } catch(e) { setError(e instanceof Error?e.message:"Checkout could not be started."); setBusy(null); }
 };
 return <Screen title="Purchases & Entitlements" onBack={onBack}>
  <div className="panel rounded-2xl p-4"><p className="font-semibold text-fg">Secure checkout</p><p className="mt-2 text-sm text-muted">Checkout is created server-side. Card/payment secrets never enter the game client, and access is granted only after a verified provider webhook.</p></div>
  <div className="mt-3 grid gap-2">{PRODUCTS.map(p=><div key={p.id} className="panel rounded-2xl p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-fg">{p.title}</p><p className="mt-1 text-xs text-muted">{p.detail}</p></div><button className="btn-primary shrink-0" disabled={busy!==null} onClick={()=>void buy(p.id)}>{busy===p.id?"Opening…":"Buy"}</button></div></div>)}</div>
  {error&&<p className="mt-3 text-sm text-danger">{error}</p>}
  <div className="mt-4"><p className="mb-2 text-sm font-semibold text-fg">Your active entitlements</p><div className="flex flex-col gap-2">{rows.map((r: { productId: string; active: boolean })=><div key={r.productId} className="panel flex justify-between rounded-xl p-3"><span className="text-fg">{r.productId}</span><span className="text-muted">{r.active ? "Active" : "Inactive"}</span></div>)}{!rows.length&&!error&&<p className="text-sm text-muted">No active entitlements.</p>}</div></div>
 </Screen>
}
