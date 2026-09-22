import { useEffect, useState } from "react";
import { Screen } from "@/components/screens/chrome";
import { createCheckoutSession, getMyEntitlements } from "@/lib/v13/payments/server";
import { cryptoConfig, createCryptoPaymentIntent, submitCryptoTransaction, getMyCryptoPayments } from "@/lib/payments/crypto";
import { ParentGate } from "./PreschoolLearningScreen";

type EthereumProvider={request(args:{method:string;params?:unknown[]}):Promise<unknown>};
declare global { interface Window { ethereum?: EthereumProvider } }

const PRODUCTS=[
 {id:"ad_free",title:"Ad-Free Journey",detail:"Remove supported game ads from the journey."},
 {id:"premium",title:"Journey Premium",detail:"Premium access through a recurring subscription price configured by the provider."},
 {id:"starter_pack",title:"Starter Pack",detail:"A one-time starter purchase for configured game content."},
] as const;

function atomicToDisplay(value:string,decimals:number){try{const n=BigInt(value),base=10n**BigInt(decimals),whole=n/base,frac=n%base;if(!frac)return whole.toString();return `${whole}.${frac.toString().padStart(decimals,"0").replace(/0+$/,"")}`;}catch{return value;}}
function pad32(hex:string){return hex.replace(/^0x/,"").padStart(64,"0");}
function encodeTransfer(to:string,amount:string){return "0xa9059cbb"+pad32(to)+pad32(BigInt(amount).toString(16));}

export function PaymentsScreen({onBack}:{onBack:()=>void}){
 const [rows,setRows]=useState<Awaited<ReturnType<typeof getMyEntitlements>>>([]),[error,setError]=useState(""),[busy,setBusy]=useState<string|null>(null);
 const [tab,setTab]=useState<"card"|"crypto">("card"),[wallet,setWallet]=useState(""),[crypto,setCrypto]=useState<Awaited<ReturnType<typeof cryptoConfig>>|null>(null),[history,setHistory]=useState<Awaited<ReturnType<typeof getMyCryptoPayments>>>([]),[chainId,setChainId]=useState<number|undefined>(),[cryptoBusy,setCryptoBusy]=useState<string|null>(null);
 useEffect(()=>{void getMyEntitlements().then(setRows).catch(()=>setError("Sign in to view account entitlements."));void cryptoConfig().then(setCrypto).catch(()=>setCrypto(null));void getMyCryptoPayments().then(setHistory).catch(()=>{});},[]);
 useEffect(()=>{if(!window.ethereum)return;void window.ethereum.request({method:"eth_accounts"}).then(x=>{const a=x as string[];if(a?.[0])setWallet(a[0])});void window.ethereum.request({method:"eth_chainId"}).then(x=>setChainId(Number(BigInt(String(x))))).catch(()=>{});},[]);
 const selectedChain=crypto?.chains.find(c=>c.id===chainId)??crypto?.chains[0];
 const connect=async()=>{setError("");if(!window.ethereum){setError("No compatible EVM wallet found.");return}try{const a=await window.ethereum.request({method:"eth_requestAccounts"}) as string[];setWallet(a?.[0]??"");const c=await window.ethereum.request({method:"eth_chainId"});setChainId(Number(BigInt(String(c))));}catch(e){setError(e instanceof Error?e.message:"Wallet connection failed.");}};
 const switchChain=async(id:number)=>{if(!window.ethereum)return;try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+id.toString(16)}]});setChainId(id);}catch(e){setError(e instanceof Error?e.message:"Network switch failed.");}};
 const buyCard=async(productId:string)=>{setBusy(productId);setError("");try{const r=await createCheckoutSession({data:{productId}});if(!r.ok)throw new Error(r.error);window.location.href=r.url;}catch(e){setError(e instanceof Error?e.message:"Checkout could not be started.");setBusy(null);}};
 const payCrypto=async(productId:string)=>{
  setCryptoBusy(productId);setError("");
  try{
   if(!wallet){await connect();throw new Error("Connect your wallet, then press Pay again.");}
   const product=crypto?.products.find(p=>p.id===productId);if(!product||!selectedChain)throw new Error("Crypto product/network is not configured.");
   if(chainId!==selectedChain.id){await switchChain(selectedChain.id);await new Promise(r=>setTimeout(r,700));}
   const intent=await createCryptoPaymentIntent({data:{productId,chainId:selectedChain.id,payerAddress:wallet}});
   if(!intent.ok)throw new Error(intent.error);if(!window.ethereum)throw new Error("Wallet unavailable.");
   const tx:{from:string;to:string;value?:string;data?:string}=product.assetType==="native"?{from:wallet,to:intent.intent.recipientAddress,value:"0x"+BigInt(product.amountAtomic).toString(16)}:{from:wallet,to:product.tokenAddress??"",data:encodeTransfer(intent.intent.recipientAddress,product.amountAtomic)};
   if(product.assetType==="erc20"&&!product.tokenAddress)throw new Error("Token contract is not configured.");
   const txHash=String(await window.ethereum.request({method:"eth_sendTransaction",params:[tx]}));
   let result=await submitCryptoTransaction({data:{intentId:intent.intent.id,txHash}});
   for(let i=0;i<18&&result.ok&&result.status==="confirming";i++){await new Promise(r=>setTimeout(r,5000));result=await submitCryptoTransaction({data:{intentId:intent.intent.id,txHash}});}
   if(!result.ok)throw new Error(result.error);
   await getMyCryptoPayments().then(setHistory);
   if(result.status!=="verified")setError(`Transaction submitted: ${result.confirmations??0}/${result.required??intent.intent.confirmationsRequired} confirmations.`);
  }catch(e){setError(e instanceof Error?e.message:"Blockchain payment failed.");}finally{setCryptoBusy(null);}
 };
 return <Screen title="Purchases & Entitlements" onBack={onBack}><ParentGate>
  <div className="panel rounded-2xl p-4"><p className="font-semibold text-fg">Secure payments</p><p className="mt-2 text-sm text-muted">Card checkout is server-created. Blockchain checkout verifies the transaction on-chain before access is granted. Private keys and seed phrases never enter this app.</p></div>
  <div className="mt-3 grid grid-cols-2 gap-2"><button className={`hud-chip ${tab==="card"?"bg-primary text-primary-foreground":""}`} onClick={()=>setTab("card")}>💳 Card</button><button className={`hud-chip ${tab==="crypto"?"bg-primary text-primary-foreground":""}`} onClick={()=>setTab("crypto")}>⛓️ Blockchain</button></div>
  {tab==="card"?<><div className="mt-3 grid gap-2">{PRODUCTS.map(p=><div key={p.id} className="panel rounded-2xl p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-fg">{p.title}</p><p className="mt-1 text-xs text-muted">{p.detail}</p></div><button className="btn-primary" disabled={busy!==null} onClick={()=>void buyCard(p.id)}>{busy===p.id?"Opening…":"Buy"}</button></div></div>)}</div><Entitlements rows={rows}/></>:<><div className="mt-3 panel rounded-2xl p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-semibold text-fg">Non-custodial wallet</p><p className="text-xs text-muted">{wallet?wallet.slice(0,6)+"…"+wallet.slice(-4):"No wallet connected"}</p></div><button className="btn-primary" onClick={()=>void connect()}>{wallet?"Connected":"Connect wallet"}</button></div><div className="mt-3"><label className="text-xs text-muted">Network</label><select className="mt-1 w-full rounded-xl border bg-background p-2 text-sm" value={selectedChain?.id??""} onChange={e=>void switchChain(Number(e.target.value))}>{crypto?.chains.map(c=><option key={c.id} value={c.id}>{c.name} · {c.nativeSymbol}</option>)}</select></div></div>
  <div className="mt-3 grid gap-2">{crypto?.products.map(p=><div key={p.id} className="panel rounded-2xl p-4"><div className="flex items-start justify-between gap-3"><div><p className="font-semibold text-fg">{p.name}</p><p className="mt-1 text-xs text-muted">{atomicToDisplay(p.amountAtomic,p.decimals)} {p.assetSymbol} · server-verified · {p.assetType==="erc20"?"token":"native"}</p></div><button className="btn-primary" disabled={cryptoBusy!==null||!wallet} onClick={()=>void payCrypto(p.id)}>{cryptoBusy===p.id?"Verifying…":"Pay on-chain"}</button></div></div>)}{!crypto?.products.length&&<p className="text-sm text-muted">Blockchain products are not configured yet.</p>}</div>
  <div className="mt-4"><p className="mb-2 text-sm font-semibold text-fg">Blockchain payment history</p>{history.map(x=><div key={x.id} className="panel mb-2 rounded-xl p-3 text-xs"><div className="flex justify-between"><span>{x.productId}</span><span>{x.status}</span></div><div className="mt-1 text-muted">{x.assetSymbol} · {x.confirmations} confirmations {x.txHash?"· "+x.txHash.slice(0,10)+"…":""}</div></div>)}{!history.length&&<p className="text-sm text-muted">No blockchain payments yet.</p>}</div>
  </>}
  {error&&<p className="mt-3 text-sm text-danger">{error}</p>}
 </ParentGate></Screen>;
}

function Entitlements({rows}:{rows:Awaited<ReturnType<typeof getMyEntitlements>>}){return <div className="mt-4"><p className="mb-2 text-sm font-semibold text-fg">Your active entitlements</p><div className="flex flex-col gap-2">{rows.map((r:{productId:string;active:boolean})=><div key={r.productId} className="panel flex justify-between rounded-xl p-3"><span className="text-fg">{r.productId}</span><span className="text-muted">{r.active?"Active":"Inactive"}</span></div>)}{!rows.length&&<p className="text-sm text-muted">No active entitlements.</p>}</div></div>}
