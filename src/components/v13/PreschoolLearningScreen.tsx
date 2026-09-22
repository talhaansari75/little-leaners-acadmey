import { useEffect, useMemo, useRef, useState, type PointerEvent, type ReactNode } from "react";
import {
  BookOpen, Car, Check, Hash, Heart, Palette, Shapes, Star, Sun, Trophy, Volume2, Puzzle, Pencil,
  Music2, Calculator, Eye, Sparkles, Download, WifiOff, Brain, Mic2, Clock3, ShieldCheck, UserRound,
  RefreshCw, Baby, Gift, PawPrint, CloudOff, CircleHelp, ChevronRight,
} from "lucide-react";
import { Screen } from "@/components/screens/chrome";
import { useGame } from "@/lib/store";
import { playAnimalSound, playBundledAudio } from "@/lib/game/audio";
import { getPreschoolProgress, savePreschoolProgress } from "@/lib/v13/preschool/server";
import { AdvancedPreschoolHub } from "./AdvancedPreschoolHub";
import { AcademyWorld } from "./AcademyWorld";
import { recordAttempt, skillForActivity, type LearningClass } from "@/lib/intelligence/learningBrain";
import { getSelectedClass, isLearningClass, setSelectedClass, LEARNING_CLASSES } from "@/lib/academy/classSelection";
import { AcademyRoomView, type AcademyRoomId } from "@/components/academy/AcademyRooms";
import { ANIMAL_LIBRARY, WORD_CARDS, animalArt, CLASS_AUDIO } from "@/lib/academy/catalog";

type Kind = "letters"|"numbers"|"colors"|"shapes"|"memory"|"sorting"|"body"|"vehicles"|"math"|"opposites"|"patterns"|"tracing"|"coloring"|"puzzle"|"listen"|"story"|"rhymes";
type Activity = { id:string; title:string; subtitle:string; icon:ReactNode; kind:Kind;  world:string; classes:LearningClass[] };

const ACTIVITIES: Activity[] = [
 {id:"letters",title:"ABC Fun",subtitle:"Letters & first sounds",icon:<BookOpen className="size-6"/>,kind:"letters",world:"abc",classes:["Nursery"]},
 {id:"numbers",title:"Count & Learn",subtitle:"Numbers 1–10",icon:<Hash className="size-6"/>,kind:"numbers",world:"math",classes:["Nursery"]},
 {id:"colors",title:"Color Garden",subtitle:"Match bright colors",icon:<Palette className="size-6"/>,kind:"colors",world:"creative",classes:["Nursery"]},
 {id:"shapes",title:"Shape Safari",subtitle:"Circle, square & more",icon:<Shapes className="size-6"/>,kind:"shapes",world:"math",classes:["Nursery"]},
 {id:"body",title:"My Body",subtitle:"Learn body parts",icon:<Sun className="size-6"/>,kind:"body",world:"abc",classes:["Nursery"]},
 {id:"animals",title:"Animal Friends",subtitle:"Pictures, names & sounds",icon:<PawPrint className="size-6"/>,kind:"listen",world:"nature",classes:["Nursery"]},
 {id:"rhymes",title:"Rhythm Garden",subtitle:"Sing, clap & listen",icon:<Music2 className="size-6"/>,kind:"rhymes",world:"stories",classes:["Nursery"]},
 {id:"pg-abc",title:"ABC Fun",subtitle:"Letters & pictures",icon:<BookOpen className="size-6"/>,kind:"letters",world:"abc",classes:["Playgroup"]},
 {id:"pg-colors",title:"Color Fun",subtitle:"Learn bright colors",icon:<Palette className="size-6"/>,kind:"colors",world:"creative",classes:["Playgroup"]},
 {id:"pg-shapes",title:"Shape Fun",subtitle:"Circle, square & triangle",icon:<Shapes className="size-6"/>,kind:"shapes",world:"math",classes:["Playgroup"]},
 {id:"pg-numbers",title:"Counting Fun",subtitle:"Numbers 1–5",icon:<Hash className="size-6"/>,kind:"numbers",world:"math",classes:["Playgroup"]},
 {id:"kg1-phonics",title:"Phonics Builder",subtitle:"Sounds, letters & CVC",icon:<BookOpen className="size-6"/>,kind:"letters",world:"abc",classes:["KG-1"]},
 {id:"kg1-math",title:"Math Mountain",subtitle:"Add, compare & count",icon:<Calculator className="size-6"/>,kind:"math",world:"math",classes:["KG-1"]},
 {id:"kg1-patterns",title:"Pattern Detective",subtitle:"Find what comes next",icon:<Sparkles className="size-6"/>,kind:"patterns",world:"math",classes:["KG-1"]},
 {id:"kg2-reading",title:"Reading Library",subtitle:"Stories & questions",icon:<BookOpen className="size-6"/>,kind:"story",world:"stories",classes:["KG-2"]},
 {id:"kg2-science",title:"Vehicle Science",subtitle:"Cars, buses & motion",icon:<Car className="size-6"/>,kind:"vehicles",world:"nature",classes:["KG-2"]},
 {id:"kg2-puzzle",title:"Picture Puzzles",subtitle:"Match and reason",icon:<Puzzle className="size-6"/>,kind:"puzzle",world:"games",classes:["KG-2"]},
 {id:"class1-writing",title:"Writing Workshop",subtitle:"Letters, words & sentences",icon:<Pencil className="size-6"/>,kind:"tracing",world:"abc",classes:["Class 1"]},
 {id:"class1-math",title:"Mathematics Lab",subtitle:"Numbers & problem solving",icon:<Calculator className="size-6"/>,kind:"math",world:"math",classes:["Class 1"]},
 {id:"class1-language",title:"Language Shelf",subtitle:"Objects, sounds & tracing",icon:<Pencil className="size-6"/>,kind:"tracing",world:"abc",classes:["Class 1"]},
 {id:"class1-sensorial",title:"Sensorial Studio",subtitle:"Color & shape grading",icon:<Shapes className="size-6"/>,kind:"shapes",world:"creative",classes:["Class 1"]},
 {id:"class1-sorting",title:"Sorting Station",subtitle:"Classify, order & compare",icon:<Star className="size-6"/>,kind:"sorting",world:"games",classes:["Class 1"]},
 {id:"class1-practical",title:"Practical Life",subtitle:"Hands-on daily routines",icon:<Heart className="size-6"/>,kind:"sorting",world:"games",classes:["Class 1"]},
 {id:"class1-nature",title:"Nature Corner",subtitle:"Listen and discover nature",icon:<Volume2 className="size-6"/>,kind:"listen",world:"nature",classes:["Class 1"]},
 {id:"class1-worksheets",title:"Worksheet Table",subtitle:"Calm independent practice",icon:<Pencil className="size-6"/>,kind:"tracing",world:"abc",classes:["Class 1"]},
];

const COLORS=["Red","Blue","Yellow","Green"]; const SHAPES=["Circle","Square","Triangle","Star"]; const BODY=["Eyes 👀","Nose 👃","Ears 👂","Hands 👐"]; const VEHICLES=["Car 🚗","Bus 🚌","Train 🚂","Plane ✈️"];
const ANIMALS=[
 {id:"lion",e:"🦁",n:"Lion",group:"Animal"},{id:"elephant",e:"🐘",n:"Elephant",group:"Animal"},{id:"tiger",e:"🐯",n:"Tiger",group:"Animal"},{id:"monkey",e:"🐒",n:"Monkey",group:"Animal"},
 {id:"frog",e:"🐸",n:"Frog",group:"Animal"},{id:"fox",e:"🦊",n:"Fox",group:"Animal"},{id:"bear",e:"🐻",n:"Bear",group:"Animal"},{id:"panda",e:"🐼",n:"Panda",group:"Animal"},
 {id:"owl",e:"🦉",n:"Owl",group:"Bird"},{id:"parrot",e:"🦜",n:"Parrot",group:"Bird"},{id:"eagle",e:"🦅",n:"Eagle",group:"Bird"},{id:"penguin",e:"🐧",n:"Penguin",group:"Bird"},
 {id:"flamingo",e:"🦩",n:"Flamingo",group:"Bird"},{id:"duck",e:"🦆",n:"Duck",group:"Bird"},{id:"peacock",e:"🦚",n:"Peacock",group:"Bird"},{id:"chicken",e:"🐔",n:"Chicken",group:"Bird"},
];
const WORLDS=[
 {id:"abc",e:"🔤",title:"ABC World",text:"Letters, phonics & words",tone:"pink"},
 {id:"math",e:"🔢",title:"Numbers World",text:"Counting, shapes & maths",tone:"blue"},
 {id:"creative",e:"🎨",title:"Creative World",text:"Coloring, drawing & tracing",tone:"yellow"},
 {id:"nature",e:"🐾",title:"Nature World",text:"Animals, birds & sounds",tone:"green"},
 {id:"stories",e:"📚",title:"Story World",text:"Stories, rhymes & listening",tone:"purple"},
 {id:"games",e:"🧩",title:"Game World",text:"Memory, puzzles & sorting",tone:"orange"},
];
const MISSIONS=["ABC Explorer 🔤","Count 10 Things 🔢","Meet an Animal 🐾","Create Something 🎨","Listen & Repeat 🔊"];
const PROFILE_KEY="mw-preschool-profile";
const DONE_KEY="mw-preschool-completed";
const STARS_KEY="mw-preschool-stars";
const XP_KEY="mw-preschool-xp";
const UPDATED_KEY="mw-preschool-updated";

const classKey=(key:string, klass:LearningClass|null)=>klass?`${key}:${klass}`:key;
const completedKey=(klass:LearningClass|null)=>classKey(DONE_KEY,klass);
const starsKey=(klass:LearningClass|null)=>classKey(STARS_KEY,klass);
const xpKey=(klass:LearningClass|null)=>classKey(XP_KEY,klass);
const missionKeyLocal=(klass:LearningClass|null)=>classKey("mw-preschool-mission",klass);
const levelKey=(klass:LearningClass|null)=>classKey("mw-preschool-level",klass);

function readLocal<T>(key:string,fallback:T):T { if(typeof window==="undefined") return fallback; try { const raw=localStorage.getItem(key); return raw==null?fallback:JSON.parse(raw) as T; } catch { return fallback; } }
function writeLocal(key:string,value:unknown){ if(typeof window!=="undefined") try{localStorage.setItem(key,JSON.stringify(value));}catch{} }

function speak(text:string){ if(typeof window!=="undefined" && "speechSynthesis" in window){ window.speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.rate=.86; u.pitch=1.08; window.speechSynthesis.speak(u); } }
async function prepareOfflinePack(){
 try {
   const cache=await caches.open("little-learners-preschool-v6-offline");
   const payload=JSON.stringify({version:6,activities:ACTIVITIES.map(a=>a.id),worlds:WORLDS,animals:ANIMALS,savedAt:Date.now()});
   await cache.put("/preschool-learning-pack.json",new Response(payload,{headers:{"Content-Type":"application/json"}}));
   const registration=await navigator.serviceWorker?.ready;
   registration?.active?.postMessage({type:"CACHE_PRESCHOOL_PACK", urls: typeof performance !== "undefined" ? performance.getEntriesByType("resource").map(entry => (entry as PerformanceResourceTiming).name).filter(url => url.includes("/assets/")) : []});
   if(typeof window!=="undefined") localStorage.setItem("mw-preschool-offline-pack","6");
   return true;
 } catch { return false; }
}

export function PreschoolLearningScreen({onBack}:{onBack:()=>void}){
 const [selected,setSelected]=useState<(Activity & { difficulty?: "gentle"|"steady"|"challenge" })|null>(null); const [tab,setTab]=useState<"home"|"worlds"|"discover"|"sounds">("home");
 const [room,setRoom]=useState<AcademyRoomId|null>(null);
 const [klass,setKlass]=useState<LearningClass | null>(() => getSelectedClass());
 const availableActivities=useMemo(()=>ACTIVITIES.filter(a=>a.classes.includes(klass)),[klass]);
 const [completed,setCompleted]=useState<string[]>(()=>readLocal(completedKey(getSelectedClass()),[]));
 const [stars,setStars]=useState(()=>readLocal(starsKey(getSelectedClass()),0)); const [xp,setXp]=useState(()=>readLocal(xpKey(getSelectedClass()),0));
 const [online,setOnline]=useState(()=>typeof navigator==="undefined"?true:navigator.onLine); const premium=true;
 const [offlinePack,setOfflinePack]=useState(()=>typeof window!=="undefined" && localStorage.getItem("mw-preschool-offline-pack")==="6"); const [packing,setPacking]=useState(false);
 const [profile,setProfile]=useState(()=>readLocal(PROFILE_KEY,{name:"Little Learner",age:4}));
 const [mission,setMission]=useState(()=>readLocal(missionKeyLocal(getSelectedClass()),0)); const [level,setLevel]=useState(()=>readLocal(levelKey(getSelectedClass()),"Beginner"));
 useEffect(()=>{const on=()=>setOnline(true),off=()=>setOnline(false);addEventListener("online",on);addEventListener("offline",off);return()=>{removeEventListener("online",on);removeEventListener("offline",off)}},[]);
 useEffect(() => {
  const onClass = () => setKlass(getSelectedClass());
  addEventListener("lla-class-change", onClass);
  return () => removeEventListener("lla-class-change", onClass);
}, []);

 useEffect(() => {
  if (!klass) return;
  setCompleted(readLocal(completedKey(klass),[]));
  setStars(readLocal(starsKey(klass),0));
  setXp(readLocal(xpKey(klass),0));
  setMission(readLocal(missionKeyLocal(klass),0));
  setLevel(readLocal(levelKey(klass),"Beginner"));
 }, [klass]);
 useEffect(()=>{const onOpen=(e:Event)=>{const detail=(e as CustomEvent<{id?:string;difficulty?:"gentle"|"steady"|"challenge"}>).detail;if(!detail.id)return;const activity=availableActivities.find(a=>a.id===detail.id);if(activity){setRoom(null);setSelected({...activity,difficulty:detail.difficulty})}};addEventListener("lla-open-activity",onOpen);const onRoom=(e:Event)=>{const detail=(e as CustomEvent<{room?:AcademyRoomId}>).detail;if(!detail.room)return;setSelected(null);setRoom(detail.room)};addEventListener("lla-open-room",onRoom);return()=>{removeEventListener("lla-open-activity",onOpen);removeEventListener("lla-open-room",onRoom)}},[availableActivities]);
 useEffect(()=>{
   let alive=true;
   void getPreschoolProgress().then(result=>{
     if(!alive || !result.progress) return;
     const remote=result.progress as Record<string,unknown>;
     const mergedCompleted=Array.from(new Set([...completed,...(Array.isArray(remote.completed)?remote.completed.filter((x):x is string=>typeof x==="string"):[])]));
     const mergedStars=Math.max(stars,Number(remote.stars??0));
     const mergedXp=Math.max(xp,Number(remote.xp??0));
     const mergedMission=Number(remote.mission??mission);
     const mergedProfile=(remote.profile&&typeof remote.profile==="object"?remote.profile:profile) as {name?:string;age?:number};
     setCompleted(mergedCompleted); setStars(mergedStars); setXp(mergedXp); setMission(Math.max(0,Math.min(4,Math.floor(mergedMission))));
     if(mergedProfile.name) setProfile({name:String(mergedProfile.name).slice(0,40),age:Math.max(2,Math.min(6,Number(mergedProfile.age??4)))});
     writeLocal(DONE_KEY,mergedCompleted); writeLocal(STARS_KEY,mergedStars); writeLocal(XP_KEY,mergedXp); writeLocal("mw-preschool-mission",mergedMission); writeLocal(PROFILE_KEY,{name:String(mergedProfile.name??profile.name),age:Number(mergedProfile.age??profile.age)});
   }).catch(()=>{});
   return()=>{alive=false};
 },[]);
 useEffect(()=>{
   if(!online) return;
   const timer=window.setTimeout(()=>{ void savePreschoolProgress({data:{progress:{profile,completed,stars,xp,mission,level,localUpdatedAt:Number(localStorage.getItem(UPDATED_KEY)??0)}}}).catch(()=>{}); },1200);
   return()=>window.clearTimeout(timer);
 },[online,profile,completed,stars,xp,mission,level]);
 const complete=(id:string, kind:Kind)=>{const className = getSelectedClass();
if (!className) return;recordAttempt(className, skillForActivity(className, kind), true, 0, kind === "listen" || kind === "rhymes" ? "audio" : kind === "tracing" || kind === "sorting" ? "hands-on" : kind === "story" ? "story" : kind === "letters" || kind === "colors" || kind === "shapes" ? "picture" : "game"); setCompleted(old=>{const key=`${className}:${id}`;const first=!old.includes(key);const n=first?[...old,key]:old;writeLocal(completedKey(className),n);if(first){setStars(v=>{const next=v+1;writeLocal(starsKey(className),next);return next});}setXp(v=>{const next=v+10;writeLocal(xpKey(className),next);const nextLevel=next>=500?"Super Star":next>=250?"Explorer":next>=100?"Learner":"Beginner";setLevel(nextLevel);writeLocal(levelKey(className),nextLevel);return next});setMission(m=>{const n=(m+1)%MISSIONS.length;writeLocal(missionKeyLocal(className),n);return n});try{localStorage.setItem(UPDATED_KEY,String(Date.now()))}catch{} return n});};
 const open=(a:Activity)=>{if(a.id==="animals"){setRoom("atlas");return} if(a.id==="mont-worksheets"){setRoom("worksheets");return} if(a.id==="rhymes"){setRoom("listen");return} setSelected(a)};
 const saveProfile=(name:string,age:number)=>{const p={name:name.trim().slice(0,40)||"Little Learner",age:Math.max(2,Math.min(6,Math.floor(age)))};writeLocal(PROFILE_KEY,p);try{localStorage.setItem(UPDATED_KEY,String(Date.now()))}catch{} setProfile(p)};

 if(room && klass)return <AcademyRoomView room={room} klass={klass} onBack={()=>setRoom(null)} onSpeak={speak} onComplete={()=>complete(room, room==="stories"?"story":room==="listen"||room==="atlas"?"listen":room==="art"||room==="worksheets"?"tracing":"sorting")} onOpenActivity={(id)=>{const activity=availableActivities.find(a=>a.id===id);setRoom(null);if(activity)setSelected(activity)}} onSelectClass={(next)=>{setKlass(next);try{localStorage.setItem("lla-class",next)}catch{} window.dispatchEvent(new Event("lla-class-change"))}} />;
 if(selected && klass)return <ActivityScreen activity={selected} difficulty={selected.difficulty} onBack={()=>setSelected(null)} onComplete={()=>complete(selected.id, selected.kind)}/>;
 return <Screen title="Little Learners Academy" onBack={onBack}><div className="preschool-bg -mx-1 min-h-full rounded-3xl p-2 pb-24 grid gap-3 overflow-y-auto">
  <section className="preschool-hero preschool-hero-premium rounded-[2rem] p-5 shadow-xl text-white relative overflow-hidden"><div className="preschool-sparkles" aria-hidden="true"><i>✦</i><i>✧</i><i>✦</i></div><div className="flex items-start justify-between gap-3 relative z-10"><div><p className="text-xs font-black uppercase tracking-widest opacity-90">Little Learners Academy • Learn • Play • Grow 🌈</p><h2 className="mt-1 font-display text-3xl">Learn • Play • Grow</h2><p className="mt-1 text-sm opacity-90">Hi {profile.name}! Let's have fun today.</p></div><div className="rounded-2xl bg-white/20 p-3"><Baby className="size-8"/></div></div><div className="mt-4 grid grid-cols-3 gap-2"><div className="rounded-2xl bg-white/20 p-2 text-center"><Star className="mx-auto size-5"/><b className="block">{stars}</b><span className="text-[10px]">Stars</span></div><div className="rounded-2xl bg-white/20 p-2 text-center"><Trophy className="mx-auto size-5"/><b className="block">{xp}</b><span className="text-[10px]">XP</span></div><div className="rounded-2xl bg-white/20 p-2 text-center"><Brain className="mx-auto size-5"/><b className="block">{level}</b><span className="text-[10px]">Level</span></div></div></section>
  <section className="mascot-card rounded-3xl p-4 shadow-md"><div className="flex items-center gap-3"><div className="mascot-bubble" aria-hidden="true">🐼</div><div className="min-w-0 flex-1"><p className="text-xs font-black uppercase tracking-wider text-violet-600">Mimi's Magic Tip ✨</p><h3 className="font-display text-xl text-slate-800">Ready for a tiny adventure?</h3><p className="text-xs text-slate-600">Learn one thing, play one game, then grow your reward garden.</p></div><button type="button" className="mascot-listen" aria-label="Hear Mimi's tip" onClick={()=>speak("Hi little learner! Let's learn, play and grow!")}>🔊</button></div><div className="journey-mini-route mt-3" aria-label="Learning journey"><span className="journey-mini-node done">🏡<small>Start</small></span><span className="journey-mini-line"/><span className="journey-mini-node current">🔤<small>Learn</small></span><span className="journey-mini-line"/><span className="journey-mini-node">⭐<small>Reward</small></span><span className="journey-mini-line"/><span className="journey-mini-node">🌈<small>Unlock</small></span></div></section>
  <div className="grid grid-cols-2 gap-2"><div className="rounded-2xl bg-white/90 px-3 py-3 text-sm font-bold shadow-sm">{online?"🟢 Online":"🟠 Offline"}<span className="block text-[10px] font-normal text-slate-500">{online?"Sync ready":"Learning continues"}</span></div><div className="rounded-2xl bg-white/90 px-3 py-3 text-sm font-bold shadow-sm">{premium?"👑 Premium":"🆓 Free"}<span className="block text-[10px] font-normal text-slate-500">{premium?"All learning unlocked":"Basic library"}</span></div></div>
  {tab==="home"&&<>
   <AcademyWorld xp={xp} completed={completed.filter(id=>id.startsWith(`${klass}:`)).length} available={availableActivities.length} onSpeak={speak} onMissionComplete={()=>{setStars(v=>{const n=v+1;writeLocal(STARS_KEY,n);return n});setXp(v=>{const n=v+10;writeLocal(XP_KEY,n);return n})}} />
   <div className="grid grid-cols-2 gap-2">
    <button type="button" className="academy-quick" onClick={()=>setRoom("atlas")}><span>🐾</span><b>Nature Atlas</b><small>100 animals</small></button>
    <button type="button" className="academy-quick" onClick={()=>setRoom("worksheets")}><span>📝</span><b>Worksheets</b><small>{klass} pages</small></button>
    <button type="button" className="academy-quick" onClick={()=>setRoom("gallery")}><span>🖼️</span><b>My Gallery</b><small>Saved art</small></button>
    <button type="button" className="academy-quick" onClick={()=>setRoom("listen")}><span>🔊</span><b>Class Audio</b><small>Offline lessons</small></button>
   </div>
   <section className="mission-card rounded-3xl p-4 shadow-md"><div className="flex items-center gap-3"><div className="rounded-2xl bg-white/70 p-3"><Gift className="size-6"/></div><div className="min-w-0 flex-1"><p className="text-xs font-black uppercase tracking-wider">Today's Mission</p><h3 className="font-display text-xl">{MISSIONS[mission]}</h3><p className="text-xs opacity-75">Complete activities to earn stars and XP.</p></div><span className="rounded-full bg-white/70 px-2 py-1 text-xs font-black">{completed.filter(id=>id.startsWith(`${klass}:`)).length}/${availableActivities.length}</span></div></section>
   <section className="panel rounded-3xl p-4"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-accent">Learning path</p><h2 className="font-display text-2xl text-fg">Six Little Worlds 🌍</h2></div><ChevronRight className="size-5 text-muted"/></div><div className="mt-3 grid grid-cols-2 gap-2">{WORLDS.map(w=><button key={w.id} onClick={()=>setTab(w.id==="nature"?"sounds":"worlds")} className={`world-card world-${w.tone} rounded-2xl p-3 text-left shadow-sm`}><span className="text-3xl">{w.e}</span><b className="mt-1 block">{w.title}</b><span className="block text-[11px] opacity-70">{w.text}</span></button>)}</div></section>
   <section className="panel rounded-3xl p-4"><div className="flex items-center justify-between"><h3 className="font-semibold text-fg">Activities 🎮</h3><span className="text-xs text-muted">{completed.filter(id=>id.startsWith(`${klass}:`)).length} completed</span></div><div className="mt-3 grid grid-cols-2 gap-2">{availableActivities.map(a=><button key={a.id} type="button" onClick={()=>open(a)} className="preschool-card panel relative min-h-28 rounded-2xl p-3 text-left active:scale-[.98]">{a.premium&&!premium&&<span className="absolute right-2 top-2 rounded-full bg-amber-200 px-2 py-1 text-[10px] font-black text-amber-900">👑</span>}<span className="inline-flex rounded-xl bg-white/75 p-2 text-primary">{a.icon}</span><span className="mt-2 block font-bold text-fg">{a.title}</span><span className="block text-xs text-muted">{a.subtitle}</span>{completed.includes(`${klass}:${a.id}`)&&<span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent"><Check className="size-3"/> Done</span>}</button>)}</div></section>
  </>}
  {tab==="worlds"&&<WorldsPanel onOpen={open} klass={klass}/>}
  {tab==="discover"&&<AdvancedPreschoolHub age={profile.age} xp={xp} completed={completed.filter(id=>id.startsWith(`${klass}:`)).length} premium={premium} onSpeak={speak}/>} 
  {tab==="sounds"&&<SoundsPanel/>}
  <div className="fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-24px)] max-w-lg -translate-x-1/2 rounded-3xl border border-white/50 bg-white/90 p-2 shadow-2xl backdrop-blur"><NavButton active={tab==="home"} icon="🏠" text="Home" onClick={()=>setTab("home")}/><NavButton active={tab==="worlds"} icon="🌍" text="Worlds" onClick={()=>setTab("worlds")}/><NavButton active={tab==="discover"} icon="🧠" text="Learn" onClick={()=>setTab("discover")}/><NavButton active={tab==="sounds"} icon="🔊" text="Sounds" onClick={()=>setTab("sounds")}/><NavButton active={false} icon="🧪" text="Test Lab" onClick={()=>{window.location.href="/test-lab"}}/><NavButton active={false} icon="⚙️" text="Settings" onClick={()=>useGame.getState().go("settings")}/></div>
 </div></Screen>
}

function NavButton({active,icon,text,onClick}:{active:boolean;icon:string;text:string;onClick:()=>void}){return <button onClick={onClick} className={`flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-[10px] font-black ${active?"bg-primary text-white":"text-slate-600"}`}><span className="text-lg">{icon}</span>{text}</button>}
function WorldsPanel({onOpen,klass}:{onOpen:(a:Activity)=>void;klass:LearningClass}){return <section className="grid gap-3">{WORLDS.map(w=><section key={w.id} className={`world-card world-${w.tone} rounded-3xl p-4`}><div className="flex items-center gap-3"><span className="text-5xl">{w.e}</span><div><h2 className="font-display text-2xl">{w.title}</h2><p className="text-xs opacity-70">{w.text}</p></div></div><div className="mt-3 flex flex-wrap gap-2">{ACTIVITIES.filter(a=>a.world===w.id&&a.classes.includes(klass)).map(a=><button key={a.id} onClick={()=>onOpen(a)} className="rounded-2xl bg-white/80 px-3 py-2 text-xs font-bold shadow-sm">{a.title}{a.premium?" 👑":""}</button>)}</div></section>)}</section>}
function SoundsPanel(){const [filter,setFilter]=useState<"All"|"Animal"|"Bird">("All");const list=ANIMAL_LIBRARY.filter(a=>filter==="All"?true:filter==="Bird"?a.group==="bird":a.group==="animal").slice(0,48);return <section className="panel rounded-3xl p-4"><div className="flex items-center justify-between"><div><h2 className="font-display text-2xl text-fg">Animal & Bird Sounds</h2><p className="text-xs text-muted">Tap an animal to see its picture and hear its sound.</p></div><PawPrint className="size-7 text-primary"/></div><div className="mt-3 flex gap-2">{(["All","Animal","Bird"] as const).map(x=><button key={x} onClick={()=>setFilter(x)} className={`rounded-full px-3 py-2 text-xs font-bold ${filter===x?"bg-primary text-white":"bg-slate-100 text-slate-600"}`}>{x}</button>)}</div><div className="mt-3 grid grid-cols-4 gap-2">{list.map(a=><button key={a.id} onClick={()=>{if(a.sound) playBundledAudio(a.sound); else if(["lion","elephant","tiger","fox","wolf","monkey","frog","snake","crocodile","bear","panda","parrot","owl","eagle","penguin","flamingo","duck","peacock","chicken","bee"].includes(a.id)) playAnimalSound(a.id as import("@/lib/game/audio").AnimalSoundId); speak(a.name)}} className="rounded-2xl bg-white p-2 text-center shadow-sm active:scale-95"><img src={a.src} alt={a.name} className="mx-auto h-12 w-12 object-contain"/><span className="text-[10px] font-bold text-slate-700">{a.name}</span></button>)}</div><button type="button" className="btn-primary mt-4 w-full" onClick={()=>window.dispatchEvent(new CustomEvent("lla-open-room",{detail:{room:"atlas"}}))}>Open full Nature Atlas</button></section>}
function ActivityScreen({activity,difficulty="steady",onBack,onComplete}:{activity:Activity;difficulty?:"gentle"|"steady"|"challenge";onBack:()=>void;onComplete:()=>void}) {
 const [answer,setAnswer]=useState<string|null>(null);
 const [round,setRound]=useState(0);

 type Question={prompt:string;choices:string[];correct:string;helper:string;art?:string;listenSrc?:string;listenText?:string};

 const questionBank:Record<Kind,Question[]> = {
   letters:[
     {prompt:"Which letter starts Apple? 🍎",choices:["A","B","C","D"],correct:"A",helper:"A is for Apple!"},
     {prompt:"Which letter starts Ball? ⚽",choices:["A","B","C","D"],correct:"B",helper:"B is for Ball!"},
     {prompt:"Which letter starts Cat? 🐱",choices:["C","D","M","T"],correct:"C",helper:"C is for Cat!"},
     {prompt:"Which letter starts Dog? 🐶",choices:["A","D","G","P"],correct:"D",helper:"D is for Dog!"},
     {prompt:"Which letter starts Sun? ☀️",choices:["S","M","T","R"],correct:"S",helper:"S is for Sun!"},
     {prompt:"Which letter starts Fish? 🐟",choices:["F","P","B","L"],correct:"F",helper:"F is for Fish!"},
     {prompt:"Which letter starts Moon? 🌙",choices:["N","M","S","W"],correct:"M",helper:"M is for Moon!"},
     {prompt:"Which letter starts Tree? 🌳",choices:["T","C","P","D"],correct:"T",helper:"T is for Tree!"},
   ],
   numbers:[
     {prompt:"How many apples? 🍎🍎",choices:["1","2","3","4"],correct:"2",helper:"There are two apples!"},
     {prompt:"How many stars? ⭐⭐⭐",choices:["2","3","4","5"],correct:"3",helper:"There are three stars!"},
     {prompt:"How many ducks? 🦆🦆🦆🦆",choices:["3","4","5","6"],correct:"4",helper:"There are four ducks!"},
     {prompt:"What comes after 4?",choices:["3","5","6","7"],correct:"5",helper:"5 comes after 4!"},
     {prompt:"What comes after 7?",choices:["6","8","9","10"],correct:"8",helper:"8 comes after 7!"},
     {prompt:"How many fingers on one hand? ✋",choices:["4","5","6","10"],correct:"5",helper:"One hand has five fingers!"},
   ],
   colors:[
     {prompt:"What color is the sky? ☁️",choices:["Blue","Red","Green","Pink"],correct:"Blue",helper:"The sky is usually blue!"},
     {prompt:"What color is grass? 🌱",choices:["Green","Purple","Orange","Black"],correct:"Green",helper:"Grass is green!"},
     {prompt:"What color is a banana? 🍌",choices:["Yellow","Blue","Brown","Pink"],correct:"Yellow",helper:"A banana is yellow!"},
     {prompt:"What color is an apple? 🍎",choices:["Red","Blue","Purple","White"],correct:"Red",helper:"A red apple!"},
     {prompt:"What color is an orange? 🍊",choices:["Orange","Green","Blue","Black"],correct:"Orange",helper:"Orange is orange!"},
     {prompt:"Which is a warm color?",choices:["Red","Blue","Green","Purple"],correct:"Red",helper:"Red is a warm color!"},
   ],
   shapes:[
     {prompt:"Which shape has 3 sides?",choices:["Circle","Triangle","Square","Star"],correct:"Triangle",helper:"A triangle has three sides!"},
     {prompt:"Which shape is round?",choices:["Circle","Square","Triangle","Rectangle"],correct:"Circle",helper:"A circle is round!"},
     {prompt:"Which shape has 4 equal sides?",choices:["Circle","Triangle","Square","Oval"],correct:"Square",helper:"A square has four equal sides!"},
     {prompt:"Which shape looks like a door?",choices:["Rectangle","Circle","Triangle","Star"],correct:"Rectangle",helper:"A rectangle can look like a door!"},
     {prompt:"Which shape has 5 points?",choices:["Star","Circle","Square","Oval"],correct:"Star",helper:"A star has points!"},
   ],
   sorting:[
     {prompt:"Which one is BIG?",choices:["Elephant","Ant","Mouse","Ladybug"],correct:"Elephant",helper:"The elephant is big!"},
     {prompt:"Which one is SMALL?",choices:["Elephant","Ant","Giraffe","Bus"],correct:"Ant",helper:"The ant is small!"},
     {prompt:"Which belongs in the kitchen?",choices:["Spoon","Shoe","Ball","Book"],correct:"Spoon",helper:"We use a spoon in the kitchen!"},
     {prompt:"Which is a fruit?",choices:["Apple","Chair","Car","Shoe"],correct:"Apple",helper:"An apple is a fruit!"},
     {prompt:"Which is a vehicle?",choices:["Bus","Banana","Pencil","Flower"],correct:"Bus",helper:"A bus is a vehicle!"},
   ],
   body:[
     {prompt:"What do we use to see?",choices:["Eyes 👀","Ears 👂","Hands ✋","Feet 🦶"],correct:"Eyes 👀",helper:"We see with our eyes!"},
     {prompt:"What do we use to hear?",choices:["Eyes 👀","Ears 👂","Nose 👃","Hands ✋"],correct:"Ears 👂",helper:"We hear with our ears!"},
     {prompt:"What do we use to smell?",choices:["Nose 👃","Eyes 👀","Feet 🦶","Hands ✋"],correct:"Nose 👃",helper:"We smell with our nose!"},
     {prompt:"What do we use to walk?",choices:["Feet 🦶","Ears 👂","Eyes 👀","Teeth 🦷"],correct:"Feet 🦶",helper:"We walk with our feet!"},
   ],
   vehicles:[
     {prompt:"Which picture is a car?",choices:["Car","Cat","Tree","Moon"],correct:"Car",helper:"A car is a vehicle."},
     {prompt:"Which one flies?",choices:["Airplane","Bus","Boat","Bicycle"],correct:"Airplane",helper:"An airplane flies!"},
     {prompt:"Which one travels on water?",choices:["Boat","Car","Bus","Train"],correct:"Boat",helper:"A boat travels on water!"},
     {prompt:"Which one travels on tracks?",choices:["Train","Car","Boat","Bicycle"],correct:"Train",helper:"A train travels on tracks!"},
     {prompt:"Which vehicle has two wheels?",choices:["Bicycle","Bus","Train","Boat"],correct:"Bicycle",helper:"A bicycle has two wheels!"},
   ],
   math:[
     {prompt:"What is 2 + 1?",choices:["2","3","4","5"],correct:"3",helper:"Two plus one makes three!"},
     {prompt:"What is 2 + 2?",choices:["3","4","5","6"],correct:"4",helper:"Two plus two makes four!"},
     {prompt:"What is 3 + 2?",choices:["4","5","6","7"],correct:"5",helper:"Three plus two makes five!"},
     {prompt:"What is 5 - 2?",choices:["2","3","4","5"],correct:"3",helper:"Five minus two makes three!"},
     {prompt:"What is 4 + 3?",choices:["6","7","8","9"],correct:"7",helper:"Four plus three makes seven!"},
     {prompt:"What comes after 9?",choices:["8","10","11","12"],correct:"10",helper:"10 comes after 9!"},
   ],
   opposites:[
     {prompt:"What is the opposite of BIG?",choices:["Small","Fast","Up","Hot"],correct:"Small",helper:"Big ↔ Small"},
     {prompt:"What is the opposite of HOT?",choices:["Cold","Tall","Fast","Happy"],correct:"Cold",helper:"Hot ↔ Cold"},
     {prompt:"What is the opposite of UP?",choices:["Down","Left","Big","Fast"],correct:"Down",helper:"Up ↔ Down"},
     {prompt:"What is the opposite of FAST?",choices:["Slow","Hot","High","Small"],correct:"Slow",helper:"Fast ↔ Slow"},
   ],
   patterns:[
     {prompt:"What comes next? 🔴 🔵 🔴 🔵 ?",choices:["🔴 Red","🟢 Green","🟡 Yellow","🟣 Purple"],correct:"🔴 Red",helper:"The pattern repeats red, blue."},
     {prompt:"What comes next? ⭐ 🌙 ⭐ 🌙 ?",choices:["⭐ Star","☀️ Sun","🌈 Rainbow","❤️ Heart"],correct:"⭐ Star",helper:"Star, moon, star, moon!"},
     {prompt:"What comes next? 🟢 🟢 🔵 🟢 🟢 ?",choices:["🔵 Blue","🟢 Green","🔴 Red","🟡 Yellow"],correct:"🔵 Blue",helper:"Two green, one blue!"},
     {prompt:"What comes next? 🟡 🔴 🟡 🔴 ?",choices:["🟡 Yellow","🔵 Blue","🟢 Green","🟣 Purple"],correct:"🟡 Yellow",helper:"Yellow, red, yellow, red!"},
   ],
   listen:[
     {prompt:"Which animal says Moo? 🐮",choices:["Cow","Lion","Duck","Bee"],correct:"Cow",helper:"A cow says moo!",listenText:"Cow"},
     {prompt:"Which animal says Quack? 🦆",choices:["Duck","Cat","Dog","Lion"],correct:"Duck",helper:"A duck says quack!",listenText:"Duck"},
     {prompt:"Which animal says Woof? 🐶",choices:["Dog","Cat","Cow","Bee"],correct:"Dog",helper:"A dog says woof!",listenText:"Dog"},
     {prompt:"Which animal says Meow? 🐱",choices:["Cat","Duck","Cow","Lion"],correct:"Cat",helper:"A cat says meow!",listenText:"Cat"},
   ],
   puzzle:[
     {prompt:"Which picture matches the cat? 🐱",choices:["Cat","Fish","Apple","Car"],correct:"Cat",helper:"Same animal!"},
     {prompt:"Which belongs with a shoe?",choices:["Sock","Apple","Fish","Moon"],correct:"Sock",helper:"A sock goes with a shoe!"},
     {prompt:"Which belongs with a cup?",choices:["Saucer","Bicycle","Tree","Hat"],correct:"Saucer",helper:"A cup can sit on a saucer!"},
     {prompt:"Which one is different?",choices:["Apple","Banana","Orange","Chair"],correct:"Chair",helper:"The chair is not a fruit!"},
   ],
   story:[
     {prompt:"What comes next in the story?",choices:["Park","Moon","Sea","Home"],correct:"Park",helper:"Great storytelling!"},
     {prompt:"A little bird finds a nest. Where should it rest?",choices:["Nest","Road","Shoe","Spoon"],correct:"Nest",helper:"The nest is a safe place for the bird!"},
     {prompt:"Sara is thirsty. What should she drink?",choices:["Water","Book","Ball","Shoe"],correct:"Water",helper:"Water helps us when we are thirsty!"},
     {prompt:"The sun goes down. What happens next?",choices:["Night","Morning","Lunch","School"],correct:"Night",helper:"After sunset comes night!"},
   ],
   tracing:[],
   coloring:[],
   rhymes:[],
 };

 const base = questionBank[activity.kind] ?? questionBank.story;
 const tuned = useMemo(()=>{
   const list = base.length ? base : questionBank.story;
   const index = round % list.length;
   let q = list[index];
   if(difficulty==="challenge" && activity.kind==="numbers"){
     q={prompt:"How many stars? ⭐⭐⭐⭐⭐⭐",choices:["5","6","7","8"],correct:"6",helper:"Six stars! 🚀"};
   }
   if(difficulty==="challenge" && activity.kind==="math"){
     q={prompt:"What is 6 + 4?",choices:["8","9","10","11"],correct:"10",helper:"Six plus four makes ten! 🚀"};
   }
   if(difficulty==="challenge" && activity.kind==="patterns"){
     q={prompt:"What comes next? 🔴 🔵 🟢 🔴 🔵 ?",choices:["🟢 Green","🔴 Red","🟡 Yellow","🟣 Purple"],correct:"🟢 Green",helper:"The pattern repeats red, blue, green."};
   }
   return q;
 },[round,activity.kind,difficulty]);

 const choose=(v:string)=>{
   setAnswer(v);
   const className=getSelectedClass();
   if(className){
     recordAttempt(
       className,
       skillForActivity(className,activity.kind),
       v===tuned.correct,
       0,
       activity.kind==="listen"?"audio":
       activity.kind==="story"?"story":
       activity.kind==="tracing"||activity.kind==="sorting"?"hands-on":
       activity.kind==="letters"||activity.kind==="colors"||activity.kind==="shapes"?"picture":"game"
     );
   }
   if(v===tuned.correct) onComplete();
 };

 const special=["tracing","coloring","rhymes"].includes(activity.kind);

 if(special){
   return <Screen title={activity.title} onBack={onBack}>
     <SpecialActivity kind={activity.kind} onComplete={onComplete}/>
   </Screen>;
 }

 const total=base.length || 1;
 const finished=round>=total-1 && answer===tuned.correct;

 return <Screen title={activity.title} onBack={onBack}>
   <div className="grid gap-3">
     <section className="panel rounded-3xl p-5 text-center">
       <div className="mx-auto mb-3 inline-flex rounded-2xl bg-surface-2 p-3 text-primary">{activity.icon}</div>
       <p className="text-sm text-muted">Question {round+1} of {total} • {difficulty}</p>
       <h2 className="mt-2 font-display text-2xl text-fg">{tuned.prompt}</h2>
       {tuned.listenText&&<button className="hud-chip mx-auto mt-3" onClick={()=>speak(tuned.listenText!)}>
         <Volume2 className="size-4"/> Listen
       </button>}
     </section>

     <div className="grid grid-cols-2 gap-2">
       {tuned.choices.map(c=>
         <button
           key={c}
           type="button"
           onClick={()=>choose(c)}
           className={`panel min-h-20 rounded-2xl p-3 text-lg font-bold text-fg ${answer===c?(c===tuned.correct?"ring-2 ring-accent":"ring-2 ring-warning"):""}`}
         >{c}</button>
       )}
     </div>

     {answer&&(
       <section className="panel rounded-2xl p-4 text-center">
         <p className="text-lg font-bold text-fg">{answer===tuned.correct?"Great job!":"Try again"}</p>
         <p className="mt-1 text-sm text-muted">{tuned.helper}</p>

         {answer===tuned.correct&&(
           <button
             className="btn-primary mt-3"
             onClick={()=>{
               setAnswer(null);
               if(!finished) setRound(r=>r+1);
               else onBack();
             }}
           >
             {finished?"Finish ✓":"Next →"}
           </button>
         )}
       </section>
     )}
   </div>
 </Screen>;
}

function SpecialActivity({kind,onComplete}:{kind:Kind;onComplete:()=>void}){
 const [done,setDone]=useState(false); const finish=()=>{if(!done){setDone(true);onComplete()}};
 const [colour,setColour]=useState("#ff6fae"); const [strokes,setStrokes]=useState<{x:number;y:number}[][]>([]); const [drawing,setDrawing]=useState(false);
 const points=strokes.flat();
 const traceReady=points.length>=28 && points.some(p=>p.x>105&&p.x<180&&p.y>45&&p.y<245) && points.some(p=>p.x>180&&p.x<255&&p.y>45&&p.y<245) && points.some(p=>p.y>130&&p.y<190&&p.x>120&&p.x<245);
 if(kind==="tracing") return <section className="panel rounded-3xl p-5 text-center"><p className="text-sm text-muted">Trace the letter A with your finger</p><div className="relative mx-auto my-4 h-72 max-w-sm overflow-hidden rounded-3xl bg-white shadow-inner"><div className="pointer-events-none absolute inset-0 grid place-items-center text-[10rem] font-black text-primary/15">A</div><svg viewBox="0 0 360 280" className="absolute inset-0 h-full w-full touch-none" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);setDrawing(true);setStrokes(old=>[...old,[]])}} onPointerMove={e=>{if(!drawing)return;const r=e.currentTarget.getBoundingClientRect();setStrokes(old=>{const n=old.slice();const last=n[n.length-1]??[];n[n.length-1]=[...last,{x:(e.clientX-r.left)/r.width*360,y:(e.clientY-r.top)/r.height*280}];return n})}} onPointerUp={()=>setDrawing(false)} onPointerCancel={()=>setDrawing(false)}>{strokes.map((pts,i)=><polyline key={i} points={pts.map(p=>`${p.x},${p.y}`).join(" ")} fill="none" stroke={colour} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>)}</svg></div><div className="flex justify-center gap-2">{["#ff6fae","#5c8dff","#43c77a","#ffb52e","#9b6cff"].map(c=><button aria-label="Choose color" key={c} onClick={()=>setColour(c)} className="size-9 rounded-full border-4 border-white shadow" style={{background:c}}/>)}</div><div className="flex justify-center gap-2"><button className="hud-chip mt-4" onClick={()=>setStrokes([])}>Clear</button><button disabled={!traceReady||done} className="btn-primary mt-4 disabled:opacity-50" onClick={finish}>{done?"⭐ Completed":traceReady?"Finish tracing":"Keep tracing"}</button></div></section>;
 if(kind==="coloring") return <ColoringStudio onComplete={finish}/>;
 return <section className="panel rounded-3xl p-6 text-center"><div className="text-6xl">🎵 🎶</div><h2 className="mt-4 font-display text-2xl text-fg">Sing & Learn</h2><p className="mt-2 text-sm text-muted">Listen, repeat, and learn new words.</p><button className="hud-chip mx-auto mt-4" onClick={()=>speak("Twinkle twinkle little star. Let's learn and play! ABC, numbers, colors and shapes are fun!")}><Volume2 className="size-4"/> Listen</button><button disabled={done} className="btn-primary mt-4 disabled:opacity-50" onClick={finish}>{done?"⭐ Completed":"I learned it"}</button></section>
}

function ColoringStudio({onComplete}:{onComplete:()=>void}){
 const canvasRef=useRef<HTMLCanvasElement|null>(null); const [colour,setColour]=useState("#ff6fae"); const [drawing,setDrawing]=useState(false); const [hasArt,setHasArt]=useState(false); const [history,setHistory]=useState<ImageData[]>([]);
 useEffect(()=>{const c=canvasRef.current;if(!c)return;const ctx=c.getContext("2d");if(!ctx)return;ctx.fillStyle="#ffffff";ctx.fillRect(0,0,c.width,c.height);ctx.font="120px sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle="#e9e7f5";ctx.fillText("🦋",c.width/2,c.height/2);},[]);
 const point=(e:PointerEvent<HTMLCanvasElement>)=>{const c=canvasRef.current;if(!c)return;const r=c.getBoundingClientRect();return{x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height};};
 const down=(e:PointerEvent<HTMLCanvasElement>)=>{const c=canvasRef.current,ctx=c?.getContext("2d");if(!c||!ctx)return;c.setPointerCapture(e.pointerId);setHistory(h=>[...h.slice(-9),ctx.getImageData(0,0,c.width,c.height)]);setDrawing(true);const p=point(e);if(p){ctx.beginPath();ctx.moveTo(p.x,p.y);}};
 const move=(e:PointerEvent<HTMLCanvasElement>)=>{if(!drawing)return;const ctx=canvasRef.current?.getContext("2d"),p=point(e);if(!ctx||!p)return;ctx.strokeStyle=colour;ctx.lineWidth=14;ctx.lineCap="round";ctx.lineJoin="round";ctx.lineTo(p.x,p.y);ctx.stroke();setHasArt(true);};
 const up=()=>setDrawing(false); const undo=()=>{const c=canvasRef.current,ctx=c?.getContext("2d");const last=history.at(-1);if(!c||!ctx||!last)return;ctx.putImageData(last,0,0);setHistory(h=>h.slice(0,-1));};
 const save=()=>{try{const c=canvasRef.current;if(c)localStorage.setItem("mw-preschool-artwork",c.toDataURL("image/png"));}catch{} onComplete();};
 return <section className="panel rounded-3xl p-4 text-center"><p className="text-sm text-muted">Color, draw, undo and save your picture.</p><canvas ref={canvasRef} width={360} height={280} className="mx-auto my-4 w-full max-w-sm touch-none rounded-3xl bg-white shadow-inner" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}/><div className="flex justify-center gap-2">{["#ff6fae","#5c8dff","#43c77a","#ffb52e","#9b6cff"].map(c=><button aria-label="Choose color" key={c} onClick={()=>setColour(c)} className="size-10 rounded-full border-4 border-white shadow" style={{background:c}}/> )}</div><div className="mt-4 flex justify-center gap-2"><button className="hud-chip" disabled={!history.length} onClick={undo}>Undo</button><button className="hud-chip" onClick={()=>{const c=canvasRef.current,ctx=c?.getContext("2d");if(c&&ctx){ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle="#fff";ctx.fillRect(0,0,c.width,c.height)}setHasArt(false)}}>Clear</button><button disabled={!hasArt} className="btn-primary disabled:opacity-50" onClick={save}>Save picture</button></div></section>
}

