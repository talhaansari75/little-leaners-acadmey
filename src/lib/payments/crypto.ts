import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPrisma } from "@/lib/prisma";
import { randomUUID } from "node:crypto";

type AssetType = "native" | "erc20";
type ChainConfig = { id:number; name:string; rpc:string; confirmations:number; recipient:string; nativeSymbol:string; tokenAddress?:string; tokenSymbol?:string; tokenDecimals?:number };

function env(name:string){ return process.env[name]?.trim() || ""; }
function positiveInt(v:string, fallback:number){ const n=Number(v); return Number.isInteger(n)&&n>0?n:fallback; }
function hexBigInt(v:unknown){ try { return BigInt(String(v ?? "0")); } catch { return 0n; } }
function cleanAddress(v:string){ return /^0x[a-fA-F0-9]{40}$/.test(v) ? v.toLowerCase() : ""; }

const CHAINS: Record<number, ChainConfig> = {
  1:{id:1,name:"Ethereum",rpc:env("CRYPTO_RPC_1"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_1"),12),recipient:cleanAddress(env("CRYPTO_TREASURY_1")),nativeSymbol:"ETH"},
  137:{id:137,name:"Polygon",rpc:env("CRYPTO_RPC_137"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_137"),30),recipient:cleanAddress(env("CRYPTO_TREASURY_137")),nativeSymbol:"POL"},
  56:{id:56,name:"BNB Smart Chain",rpc:env("CRYPTO_RPC_56"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_56"),15),recipient:cleanAddress(env("CRYPTO_TREASURY_56")),nativeSymbol:"BNB"},
  8453:{id:8453,name:"Base",rpc:env("CRYPTO_RPC_8453"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_8453"),6),recipient:cleanAddress(env("CRYPTO_TREASURY_8453")),nativeSymbol:"ETH"},
  42161:{id:42161,name:"Arbitrum One",rpc:env("CRYPTO_RPC_42161"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_42161"),6),recipient:cleanAddress(env("CRYPTO_TREASURY_42161")),nativeSymbol:"ETH"},
  10:{id:10,name:"Optimism",rpc:env("CRYPTO_RPC_10"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_10"),6),recipient:cleanAddress(env("CRYPTO_TREASURY_10")),nativeSymbol:"ETH"},
  11155111:{id:11155111,name:"Sepolia Testnet",rpc:env("CRYPTO_RPC_11155111"),confirmations:positiveInt(env("CRYPTO_CONFIRMATIONS_11155111"),2),recipient:cleanAddress(env("CRYPTO_TREASURY_11155111")),nativeSymbol:"ETH"},
};

const PRODUCTS: Record<string,{name:string;amountAtomic:string;assetType:AssetType;assetSymbol:string;tokenAddress?:string;decimals:number}> = {
  premium_crypto:{name:"Journey Premium",amountAtomic:env("CRYPTO_PRICE_PREMIUM_ATOMIC"),assetType:(env("CRYPTO_ASSET_TYPE")||"native") as AssetType,assetSymbol:env("CRYPTO_ASSET_SYMBOL")||"ETH",tokenAddress:cleanAddress(env("CRYPTO_TOKEN_ADDRESS")),decimals:Number(env("CRYPTO_TOKEN_DECIMALS")||18)},
  starter_crypto:{name:"Starter Pack",amountAtomic:env("CRYPTO_PRICE_STARTER_ATOMIC"),assetType:(env("CRYPTO_ASSET_TYPE")||"native") as AssetType,assetSymbol:env("CRYPTO_ASSET_SYMBOL")||"ETH",tokenAddress:cleanAddress(env("CRYPTO_TOKEN_ADDRESS")),decimals:Number(env("CRYPTO_TOKEN_DECIMALS")||18)},
};

async function rpc(c:ChainConfig, method:string, params:unknown[]){
  if(!c.rpc) throw new Error("CRYPTO_CHAIN_NOT_CONFIGURED");
  const res=await fetch(c.rpc,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method,params}),cache:"no-store"});
  if(!res.ok) throw new Error("CRYPTO_RPC_ERROR");
  const body=await res.json() as {result?:unknown;error?:unknown};
  if(body.error) throw new Error("CRYPTO_RPC_ERROR");
  return body.result;
}

function allowedChain(chainId:number){ return CHAINS[chainId] && CHAINS[chainId].rpc && CHAINS[chainId].recipient; }

export const cryptoConfig = createServerFn({method:"GET"}).middleware([authMiddleware]).handler(async()=>{
  const chains=Object.values(CHAINS).filter(c=>c.rpc&&c.recipient).map(c=>({id:c.id,name:c.name,nativeSymbol:c.nativeSymbol,confirmations:c.confirmations}));
  const products=Object.entries(PRODUCTS).filter(([,p])=>p.amountAtomic).map(([id,p])=>({id,name:p.name,amountAtomic:p.amountAtomic,assetType:p.assetType,assetSymbol:p.assetSymbol,tokenAddress:p.tokenAddress||null,decimals:p.decimals}));
  return {chains,products};
});

export const createCryptoPaymentIntent = createServerFn({method:"POST"}).middleware([authMiddleware])
  .validator((d:{productId:string;chainId:number;payerAddress:string})=>({productId:String(d.productId??"").slice(0,64),chainId:Math.floor(Number(d.chainId)),payerAddress:cleanAddress(String(d.payerAddress??""))}))
  .handler(async({context,data})=>{
    const product=PRODUCTS[data.productId]; const chain=CHAINS[data.chainId];
    if(!product||!product.amountAtomic||!allowedChain(data.chainId)) return {ok:false as const,error:"Crypto product or network is not configured."};
    if(!data.payerAddress) return {ok:false as const,error:"Invalid wallet address."};
    if(product.assetType==="erc20" && !product.tokenAddress) return {ok:false as const,error:"Token contract is not configured."};
    const id=randomUUID(), orderId=`crypto_${Date.now()}_${randomUUID().slice(0,8)}`;
    const expiresAt=new Date(Date.now()+15*60_000);
    await getPrisma().cryptoPaymentIntent.create({data:{id,userId:context.userId,orderId,productId:data.productId,chainId:chain.id,assetType:product.assetType,assetSymbol:product.assetSymbol,tokenAddress:product.tokenAddress||null,amountAtomic:product.amountAtomic,recipientAddress:chain.recipient,payerAddress:data.payerAddress,status:"created",confirmations:0,metadataJson:{productName:product.name,decimals:product.decimals},expiresAt}});
    return {ok:true as const,intent:{id,orderId,productId:data.productId,chainId:chain.id,chainName:chain.name,assetType:product.assetType,assetSymbol:product.assetSymbol,tokenAddress:product.tokenAddress||null,amountAtomic:product.amountAtomic,recipientAddress:chain.recipient,expiresAt:expiresAt.toISOString(),confirmationsRequired:chain.confirmations}};
  });

const TRANSFER_TOPIC="0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
function topicAddress(topic:string){ const x=String(topic); return x.startsWith("0x")&&x.length===66 ? "0x"+x.slice(-40).toLowerCase() : ""; }

export const submitCryptoTransaction = createServerFn({method:"POST"}).middleware([authMiddleware])
  .validator((d:{intentId:string;txHash:string})=>({intentId:String(d.intentId??"").slice(0,100),txHash:/^0x[a-fA-F0-9]{64}$/.test(String(d.txHash??""))?String(d.txHash).toLowerCase():""}))
  .handler(async({context,data})=>{
    if(!data.txHash) return {ok:false as const,error:"Invalid transaction hash."};
    const db=getPrisma(); const intent=await db.cryptoPaymentIntent.findUnique({where:{id:data.intentId}});
    if(!intent||intent.userId!==context.userId) return {ok:false as const,error:"Payment intent not found."};
    if(new Date(String(intent.expiresAt)).getTime()<Date.now()) { await db.cryptoPaymentIntent.update({where:{id:intent.id},data:{status:"expired"}}); return {ok:false as const,error:"Payment intent expired. Create a new one."}; }
    if(intent.txHash===data.txHash && intent.status==="verified") return {ok:true as const,status:"verified",confirmations:intent.confirmations};
    const chain=CHAINS[Number(intent.chainId)]; if(!chain?.rpc) return {ok:false as const,error:"Network verifier is not configured."};
    const tx=await rpc(chain,"eth_getTransactionByHash",[data.txHash]) as any;
    if(!tx) return {ok:false as const,error:"Transaction not found yet."};
    const txChain=Number(hexBigInt(await rpc(chain,"eth_chainId",[])));
    if(txChain!==Number(intent.chainId)) return {ok:false as const,error:"Network mismatch."};
    if(String(tx.from??"").toLowerCase()!==String(intent.payerAddress??"").toLowerCase()) return {ok:false as const,error:"Wallet does not match the payment intent."};
    if(String(tx.to??"").toLowerCase()!==String(intent.recipientAddress).toLowerCase() && intent.assetType==="native") return {ok:false as const,error:"Recipient mismatch."};
    const receipt=await rpc(chain,"eth_getTransactionReceipt",[data.txHash]) as any;
    if(!receipt?.blockNumber) { await db.cryptoPaymentIntent.update({where:{id:intent.id},data:{txHash:data.txHash,status:"submitted",payerAddress:String(tx.from).toLowerCase()}}); return {ok:true as const,status:"submitted",confirmations:0}; }
    if(String(receipt.status)!=="0x1") return {ok:false as const,error:"Blockchain transaction failed."};
    const latest=hexBigInt(await rpc(chain,"eth_blockNumber",[])), block=hexBigInt(receipt.blockNumber);
    const confirmations=Number(latest>=block?latest-block+1n:0n);
    let paid=intent.assetType==="native" ? hexBigInt(tx.value) : 0n;
    if(intent.assetType==="erc20"){
      const expectedToken=String(intent.tokenAddress??"").toLowerCase(), logs=Array.isArray(receipt.logs)?receipt.logs:[];
      for(const log of logs){ if(String(log.address??"").toLowerCase()!==expectedToken) continue; const topics=log.topics as string[]|undefined; if(!topics||topics.length<3||String(topics[0]).toLowerCase()!==TRANSFER_TOPIC) continue; if(topicAddress(topics[1])!==String(intent.payerAddress).toLowerCase()||topicAddress(topics[2])!==String(intent.recipientAddress).toLowerCase()) continue; paid+=hexBigInt(log.data); }
    }
    const expected=BigInt(String(intent.amountAtomic));
    if(paid!==expected) return {ok:false as const,error:"Exact payment amount or recipient could not be verified."};
    if(confirmations<chain.confirmations){ await db.cryptoPaymentIntent.update({where:{id:intent.id},data:{txHash:data.txHash,status:"confirming",confirmations,payerAddress:String(tx.from).toLowerCase()}}); return {ok:true as const,status:"confirming",confirmations,required:chain.confirmations}; }
    await db.cryptoPaymentIntent.update({where:{id:intent.id},data:{txHash:data.txHash,status:"verified",confirmations,verifiedAt:new Date(),payerAddress:String(tx.from).toLowerCase()}});
    return {ok:true as const,status:"verified",confirmations,required:chain.confirmations};
  });

export const getMyCryptoPayments = createServerFn({method:"GET"}).middleware([authMiddleware]).handler(async({context})=>{
  return getPrisma().cryptoPaymentIntent.findMany({where:{userId:context.userId},orderBy:{createdAt:"desc"},take:50,select:{id:true,orderId:true,productId:true,chainId:true,assetSymbol:true,amountAtomic:true,status:true,confirmations:true,txHash:true,createdAt:true,verifiedAt:true,expiresAt:true}});
});
