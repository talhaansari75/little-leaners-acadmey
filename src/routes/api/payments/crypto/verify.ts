import { createFileRoute } from "@tanstack/react-router";
import { submitCryptoTransaction } from "@/lib/payments/crypto";

export const Route = createFileRoute("/api/payments/crypto/verify")({
  server:{handlers:{POST:async({request})=>{
    try{
      const body=await request.json();
      const result=await submitCryptoTransaction({data:{intentId:String(body?.intentId??""),txHash:String(body?.txHash??"")}});
      return new Response(JSON.stringify(result),{status:result.ok?200:400,headers:{"content-type":"application/json"}});
    }catch{return new Response(JSON.stringify({ok:false,error:"Crypto verification failed."}),{status:500,headers:{"content-type":"application/json"}});}
  }}}
});
