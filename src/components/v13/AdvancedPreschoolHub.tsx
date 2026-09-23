import { useMemo, useState } from "react";
import { BookOpen, Brain, Calculator, CheckCircle2, Globe2, Heart, PawPrint, Play, Sparkles, Star, Volume2 } from "lucide-react";
import { getSelectedClass, setSelectedClass, LEARNING_CLASSES, type LearningClass } from "@/lib/academy/classSelection";

type Props = { age:number; xp:number; completed:number; premium:boolean; onSpeak:(text:string)=>void };

type Section = "plan"|"adventure"|"teacher"|"classes"|"montessori"|"worksheets"|"audio"|"animals"|"words"|"stories"|"math"|"rewards"|"world"|"music"|"games"|"art";

const ANIMALS = [
  ["🦁","Lion"],["🐘","Elephant"],["🐯","Tiger"],["🐒","Monkey"],["🦊","Fox"],["🐻","Bear"],["🐼","Panda"],["🐨","Koala"],["🦒","Giraffe"],["🦓","Zebra"],
  ["🦏","Rhino"],["🦛","Hippo"],["🐊","Crocodile"],["🐍","Snake"],["🐢","Turtle"],["🐸","Frog"],["🐙","Octopus"],["🦈","Shark"],["🐋","Whale"],["🐬","Dolphin"],
  ["🐟","Fish"],["🦀","Crab"],["🦞","Lobster"],["🦐","Shrimp"],["🦋","Butterfly"],["🐝","Bee"],["🐞","Ladybug"],["🐜","Ant"],["🕷️","Spider"],["🐌","Snail"],
  ["🐰","Rabbit"],["🐹","Hamster"],["🐭","Mouse"],["🐱","Cat"],["🐶","Dog"],["🐺","Wolf"],["🦝","Raccoon"],["🦦","Otter"],["🦥","Sloth"],["🦘","Kangaroo"],
  ["🐎","Horse"],["🐄","Cow"],["🐖","Pig"],["🐑","Sheep"],["🐐","Goat"],["🐓","Rooster"],["🦆","Duck"],["🦢","Swan"],["🦉","Owl"],["🦜","Parrot"],
  ["🦅","Eagle"],["🦚","Peacock"],["🦩","Flamingo"],["🐧","Penguin"],["🦤","Dodo"],["🦃","Turkey"],["🐦","Bird"],["🪿","Goose"],["🦇","Bat"],["🐦‍⬛","Crow"],
  ["🐪","Camel"],["🦙","Llama"],["🦌","Deer"],["🫎","Moose"],["🦬","Bison"],["🐗","Boar"],["🐿️","Squirrel"],["🦔","Hedgehog"],["🦨","Skunk"],["🦡","Badger"],
  ["🦫","Beaver"],["🦎","Lizard"],["🦂","Scorpion"],["🐠","Tropical Fish"],["🐡","Pufferfish"],["🪼","Jellyfish"],["🦑","Squid"],["🦭","Seal"],["🦒","Giraffe"],["🐘","Mammoth"],
  ["🦖","T-Rex"],["🦕","Brachiosaurus"],["🦣","Woolly Mammoth"],["🦧","Orangutan"],["🦍","Gorilla"],["🦏","White Rhino"],["🐅","Leopard"],["🐆","Cheetah"],["🦓","Zebra"],["🐋","Blue Whale"],
  ["🐊","Alligator"],["🐉","Dragon"],["🦄","Unicorn"],["🐲","Dragon"],["🐙","Giant Octopus"],["🦋","Moth"],["🐛","Caterpillar"],["🪲","Beetle"],["🦗","Cricket"],["🦟","Mosquito"],
];

const WORDS = [
  ["Apple","سیب","🍎"],["Ball","گیند","⚽"],["Cat","بلی","🐱"],["Dog","کتا","🐶"],["Sun","سورج","☀️"],["Moon","چاند","🌙"],["Fish","مچھلی","🐟"],["Book","کتاب","📚"],["Car","گاڑی","🚗"],["Tree","درخت","🌳"],["Bird","پرندہ","🐦"],["Milk","دودھ","🥛"],
];

const STORIES = [
  {title:"Luna Finds a Star",text:"Luna the bunny sees a tiny star. She follows the light, helps a sleepy bird, and learns that sharing makes the night brighter."},
  {title:"The Little Train",text:"A little train counts one, two, three trees on the way home. At the station, every friend gets a happy hello."},
  {title:"Mina's Rainbow",text:"After the rain, Mina spots seven colors. She names each color and makes a rainbow picture for her family."},
  {title:"Ollie and the Blue Boat",text:"Ollie finds a blue boat and counts three waves. He learns that boats float and friends help each other."},
  {title:"Pia Plants a Seed",text:"Pia plants one seed, gives it water, and watches a little green leaf grow. She learns that plants need care."},
  {title:"Sammy's Shape Hunt",text:"Sammy looks around the room for circles, squares, and triangles. Shapes are everywhere!"},
  {title:"The Sleepy Moon",text:"The moon visits the quiet sky while stars twinkle. A little owl says good night to every friend."},
  {title:"Nora's Number Picnic",text:"Nora packs five apples and shares them with friends. Counting makes the picnic fair and fun."},
  {title:"Benny's Big Boots",text:"Benny puts on his big boots and learns opposites: big and small, fast and slow, up and down."},
  {title:"Aisha's Animal Parade",text:"Aisha sees a lion, elephant, rabbit, and duck in a pretend parade. She names each animal and its sound."},
  {title:"Toto Learns to Listen",text:"Toto closes his eyes and listens for birds, rain, and a gentle breeze. Listening helps him notice his world."},
  {title:"Rainbow Train",text:"A rainbow train carries red, yellow, green, and blue carriages. Each color has a special place."},
  {title:"Milo's Matching Game",text:"Milo matches a ball with a ball and a fish with a fish. Careful eyes help him find pairs."},
  {title:"The Tiny Cloud",text:"A tiny cloud travels across the sky and brings a soft shower. The flowers are happy for the water."},
  {title:"Zara Counts the Birds",text:"Zara counts one, two, three, four birds on a branch and learns that birds have feathers and wings."},
  {title:"The Friendly Garden",text:"Bees buzz, butterflies flutter, and flowers bloom. Every little garden friend has a job."},
  {title:"Kai's Clean-Up Song",text:"Kai sings while putting toys away. Sorting toys by type makes clean-up simple."},
  {title:"The Shape Rocket",text:"A rocket with a circle window and triangle fins zooms into pretend space. Shapes can build amazing things."},
  {title:"Maya Says Thank You",text:"Maya remembers to say please and thank you. Kind words can make a friend's day brighter."},
  {title:"The Happy Finish",text:"After a day of letters, numbers, music, and stories, the friends celebrate what they learned together."},
];

export function AdvancedPreschoolHub({age,xp,completed,premium,onSpeak}:Props){
 const [section,setSection]=useState<Section>("plan");
 const [klass,setKlass]=useState<LearningClass>(()=>getSelectedClass() ?? "Montessori");
 const [adventureStep,setAdventureStep]=useState(()=>{try{return Number(localStorage.getItem("mw-adventure-step")||0)}catch{return 0}});
 const [teacherMode,setTeacherMode]=useState(()=>{try{return localStorage.getItem("mw-teacher-mode")||"letters"}catch{return "letters"}});
 const [avatar,setAvatar]=useState(()=>{try{return localStorage.getItem("mw-avatar")||"🐼"}catch{return "🐼"}});
 const [room,setRoom]=useState(()=>{try{return JSON.parse(localStorage.getItem("mw-room")||"[]") as string[]}catch{return []}});
 const [gameScore,setGameScore]=useState(0);
 const [animalIndex,setAnimalIndex]=useState(0); const [mathStep,setMathStep]=useState(0); const [story,setStory]=useState(0);
 const plan=useMemo(()=>{
   const needsLetters=completed<3 || xp<60; const needsMath=age>=4 && (completed<6 || xp<120);
   return [needsLetters?"🔤 Phonics: A is for Apple":"🔁 Review: letter sounds",needsMath?"🔢 Count 1–10 with pictures":"🎨 Match colors & shapes", "🐾 Meet 5 new animals", "📖 Read a tiny story", "🎵 Listen & repeat 3 words"];
 },[age,xp,completed]);
 const speakWord=(word:string,urdu:string)=>onSpeak(`${word}. ${urdu}. Repeat after me: ${word}.`);
 const math=[{q:"2 + 1 = ?",a:["2","3","4"],c:"3"},{q:"Which is more? 🍎🍎🍎 or 🍎🍎",a:["3 apples","2 apples","Same"],c:"3 apples"},{q:"5 − 2 = ?",a:["2","3","4"],c:"3"},{q:"What comes after 6?",a:["5","7","8"],c:"7"}][mathStep%4];
 return <section className="grid gap-3">
  <section className="panel rounded-3xl p-4"><div className="flex items-center gap-3"><div className="rounded-2xl bg-primary/10 p-3"><Brain className="size-7 text-primary"/></div><div className="flex-1"><p className="text-xs font-black uppercase tracking-wider text-accent">Smart Learning Lab</p><h2 className="font-display text-2xl text-fg">A little plan for today 🌈</h2><p className="text-xs text-muted">Age {age} • {xp} XP • {completed} activities completed</p></div></div><div className="mt-3 grid gap-2">{plan.map((p,i)=><button key={p} onClick={()=>onSpeak(p.replace(/[🔤🔁🔢🎨🐾📖🎵]/g,""))} className="flex items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-sm"><span className="grid size-9 place-items-center rounded-full bg-primary/10 font-black">{i+1}</span><span className="flex-1 text-sm font-bold text-fg">{p}</span><Play className="size-4 text-primary"/></button>)}</div></section>
  <div className="grid grid-cols-3 gap-2">{[["plan","🧠","Plan"],["adventure","🗺️","Adventure"],["teacher","👩‍🏫","Teacher"],["classes","🎓","Classes"],...(klass==="Montessori"?[["montessori","🌱","Montessori"]]:[]),["worksheets","📝","Offline Worksheet Center"],["audio","🔊","Offline Learning Audio"],["animals","🐾","Nature"],["words","🔤","Words"],["math","🔢","Math"],["stories","📚","Stories"],["music","🎵","Music"],["games","🎮","Games"],["world","🏡","My World"],["art","🎨","Art"],["rewards","⭐","Rewards"]].map(([id,e,t])=><button key={id} onClick={()=>setSection(id as typeof section)} className={`rounded-2xl p-3 text-center text-xs font-black ${section===id?"bg-primary text-white":"bg-white text-slate-700"}`}><span className="block text-xl">{e}</span>{t}</button>)}</div>
  {section==="adventure"&&<DailyAdventure age={age} step={adventureStep} setStep={v=>{setAdventureStep(v);try{localStorage.setItem("mw-adventure-step",String(v))}catch{}}} onSpeak={onSpeak}/>}
  {section==="teacher"&&<SmartTeacher age={age} xp={xp} completed={completed} mode={teacherMode} setMode={v=>{setTeacherMode(v);try{localStorage.setItem("mw-teacher-mode",v)}catch{}}} onSpeak={onSpeak}/>}
  {section==="classes"&&<ClassPathway age={age} xp={xp} onSpeak={onSpeak}/>}
  {section==="montessori"&&klass==="Montessori"&&<MontessoriWorld age={age} onSpeak={onSpeak}/>}
  {section==="animals"&&<section className="panel rounded-3xl p-4"><div className="flex items-center justify-between"><div><h3 className="font-display text-2xl text-fg">Animal Explorer 🐾</h3><p className="text-xs text-muted">{ANIMALS.length} discovery cards in this pack.</p></div><PawPrint className="size-7 text-primary"/></div><div className="mt-3 grid grid-cols-4 gap-2">{ANIMALS.slice(animalIndex,animalIndex+40).map(([e,n],i)=><button key={`${n}-${i}`} onClick={()=>onSpeak(`${n}. This is a ${n}.`)} className="rounded-2xl bg-white p-2 shadow-sm"><img loading="eager" decoding="async" src={`/offline/preschool/animals/${n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}-${animalIndex+i+1}.svg`} alt="" className="mx-auto block h-16 w-16 rounded-xl object-cover"/><span className="text-[10px] font-bold">{n}</span></button>)}</div><button className="btn-primary mt-3 w-full" onClick={()=>setAnimalIndex(i=>(i+8)%ANIMALS.length)}>Next habitat cards →</button><p className="mt-2 text-center text-[10px] text-muted">Previewing card set {Math.floor(animalIndex/8)+1}; all discovery data is bundled for offline use.</p></section>}
  {section==="words"&&<section className="panel rounded-3xl p-4"><div className="flex items-center gap-2"><Globe2 className="size-6 text-primary"/><div><h3 className="font-display text-2xl text-fg">English + Urdu Words</h3><p className="text-xs text-muted">Picture → word → pronunciation.</p></div></div><div className="mt-3 grid grid-cols-2 gap-2">{WORDS.map(([en,ur,e])=><button key={en} onClick={()=>speakWord(en,ur)} className="rounded-2xl bg-white p-4 text-center shadow-sm"><img loading="eager" decoding="async" src={`/offline/preschool/words/${en.toLowerCase().replace(/[^a-z0-9]+/g,"-")}.svg`} alt="" className="mx-auto block h-28 w-28 rounded-2xl object-cover"/><b className="block mt-1">{en}</b><span className="text-sm text-slate-500">{ur}</span><span className="mt-1 flex items-center justify-center gap-1 text-[10px] text-primary"><Volume2 className="size-3"/> Listen</span></button>)}</div></section>}
  {section==="math"&&<section className="panel rounded-3xl p-4 text-center"><Calculator className="mx-auto size-8 text-primary"/><h3 className="mt-2 font-display text-2xl text-fg">Math Mini Quest</h3><p className="mt-1 text-sm text-muted">{math.q}</p><div className="mt-3 grid gap-2">{math.a.map(a=><button key={a} onClick={()=>{onSpeak(a===math.c?"Great job!":"Try again");if(a===math.c)setMathStep(s=>s+1)}} className="rounded-2xl bg-white p-4 text-lg font-black shadow-sm">{a}</button>)}</div></section>}
  {section==="stories"&&<section className="panel rounded-3xl p-4"><img src={`/offline/preschool/stories/story-${story+1}.svg`} alt="" className="h-40 w-full rounded-2xl object-cover"/><BookOpen className="mt-2 size-7 text-primary"/><h3 className="mt-2 font-display text-2xl text-fg">Story Time 📖</h3><h4 className="mt-2 text-lg font-bold">{STORIES[story].title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{STORIES[story].text}</p><div className="mt-3 flex gap-2"><button className="hud-chip" onClick={()=>onSpeak(STORIES[story].text)}><Volume2 className="size-4"/> Narrate</button><button className="btn-primary" onClick={()=>setStory(s=>(s+1)%STORIES.length)}>Next story</button></div></section>}
  {section==="art"&&<ArtStudio onSpeak={onSpeak}/>}
  {section==="rewards"&&<section className="panel rounded-3xl p-4"><div className="flex items-center gap-3"><Sparkles className="size-7 text-primary"/><div><h3 className="font-display text-2xl text-fg">Reward Garden ⭐</h3><p className="text-xs text-muted">Keep learning to unlock little surprises.</p></div></div><div className="mt-3 grid grid-cols-3 gap-2">{["🌱","🌷","🦋","🐝","🌈","🏡"].map((e,i)=><div key={e} className={`rounded-2xl p-4 text-center ${xp>=i*50?"bg-white":"bg-slate-100 opacity-50"}`}><span className="text-3xl">{e}</span><span className="block text-[10px] font-bold">{xp>=i*50?"Unlocked":`${i*50} XP`}</span></div>)}</div><div className="mt-3 flex items-center gap-2 rounded-2xl bg-rose-50 p-3 text-sm"><Heart className="size-5 text-rose-500"/> {premium?"Premium garden is open!":"Complete activities to grow your garden."}</div></section>}
  {section==="music"&&<MusicWorld onSpeak={onSpeak}/>}
  {section==="games"&&<MiniGames onSpeak={onSpeak} score={gameScore} setScore={setGameScore}/>}
  {section==="world"&&<MyLittleWorld avatar={avatar} setAvatar={v=>{setAvatar(v);try{localStorage.setItem("mw-avatar",v)}catch{}}} room={room} setRoom={v=>{setRoom(v);try{localStorage.setItem("mw-room",JSON.stringify(v))}catch{}}} xp={xp}/>}
  {section==="plan"&&<section className="panel rounded-3xl p-4"><div className="flex items-center gap-3"><CheckCircle2 className="size-6 text-accent"/><div><h3 className="font-semibold text-fg">Learning balance</h3><p className="text-xs text-muted">Short sessions work well for little learners. Stop when the child is tired.</p></div></div><div className="mt-3 rounded-2xl bg-white/80 p-3 text-sm font-bold">🎯 Next: {plan[0]}</div></section>}
 </section>;
}


function ClassPathway({age,xp,onSpeak}:{age:number;xp:number;onSpeak:(text:string)=>void}){
 const [klass,setKlass]=useState<LearningClass>(()=>getSelectedClass() ?? "Nursery");
 const [subject,setSubject]=useState("Language");
 const [done,setDone]=useState<string[]>(()=>{try{return JSON.parse(localStorage.getItem("mw-class-skills")||"[]") as string[]}catch{return []}});
 const curriculum={
  Montessori:{
    Language:["Letter sounds","Object vocabulary","Listening practice","Sound matching","Writing preparation","Word-picture matching"],
    Math:["Number rods","Counting practice","Quantity matching","More or less","Shape matching","Number order"],
    Creative:["Color matching","Shape grading","Free drawing","Pattern work","Music and rhythm","Sensory art"],
    Life:["Pouring practice","Care of materials","Handwashing sequence","Clean-up routine","Greeting and manners","Independent work"]
  },
  Nursery:{
    Language:["ABC picture match","Letter tracing","Beginning sounds","Picture vocabulary","Rhyming sounds","Listen and repeat"],
    Math:["Count 1–5","Count 1–10","Number recognition","Quantity matching","More or less","Big and small"],
    Creative:["Color matching","Shape coloring","Free drawing","Music and rhythm","Sticker scene","Sensory art"],
    Life:["Handwashing sequence","Brush teeth sequence","Clean-up routine","Greeting and manners","Dress-up sequence","Sort my toys"]
  },
  KG:{
    Language:["A–Z mastery","Letter sounds","CVC word building","Beginning-sound sort","Sight words","Simple sentence building"],
    Math:["Numbers 1–100","Before, after and between","Greater, less and equal","Addition within 10","Patterns and sequences","Counting practice"],
    Creative:["Guided drawing","Pattern coloring","Shape composition","Story picture order","Science drawing","Build with shapes"],
    Life:["Daily routine order","Community helpers","Time of day","Sharing and turn taking","Classroom organization","Safety basics"]
  };
 const subjects=["Language","Math","Creative","Life"] as const;
 const tasks=curriculum[klass][subject as keyof typeof curriculum.Nursery] || [];
 const select=(next:LearningClass)=>{
  setKlass(next);
  setSubject("Language");
  setSelectedClass(next);
  onSpeak(`${next} curriculum selected.`);
};
 const toggle=(task:string)=>{const key=`${klass}:${subject}:${task}`;const next=done.includes(key)?done.filter(x=>x!==key):[...done,key];setDone(next);try{localStorage.setItem("mw-class-skills",JSON.stringify(next))}catch{};onSpeak(`${task}. Great learning!`)};
 const total=Object.values(curriculum[klass]).flat().length;
 const mastered=Object.entries(curriculum[klass]).flatMap(([sub,ts])=>ts.map(t=>`${klass}:${sub}:${t}`)).filter(k=>done.includes(k)).length;
 return <section className="panel rounded-3xl p-4"><div className="text-center"><div className="text-5xl">🎓</div><h3 className="font-display text-2xl text-fg">Class Curriculum</h3><p className="mt-1 text-xs font-black text-primary">Three Learning Pathways</p><p className="text-xs text-muted">Age {age} • {xp} XP • {mastered}/{total} class skills practiced</p></div><div className="mt-3 grid grid-cols-3 gap-2">{LEARNING_CLASSES.map(c=><button key={c} onClick={()=>select(c)} className={`rounded-2xl p-3 text-xs font-black ${klass===c?"bg-primary text-white":"bg-white text-slate-700"}`}>{c}</button>)}</div><div className="mt-3 grid grid-cols-4 gap-2">{subjects.map(s=><button key={s} onClick={()=>setSubject(s)} className={`rounded-2xl p-2 text-[11px] font-black ${subject===s?"bg-slate-900 text-white":"bg-white text-slate-700"}`}>{s}</button>)}</div><div className="mt-3 grid gap-2">{tasks.map((task,i)=>{const key=`${klass}:${subject}:${task}`;const isDone=done.includes(key);return <button key={task} onClick={()=>toggle(task)} className={`rounded-2xl p-4 text-left shadow-sm ${isDone?"bg-emerald-50":"bg-white"}`}><span className="mr-2">{isDone?"✅":"○"}</span><b>{i+1}. {task}</b></button>})}</div><p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-muted">This pathway has its own curriculum and progress. Montessori, Nursery and KG are tracked separately.</p></section>
}
function MontessoriWorld({age,onSpeak}:{age:number;onSpeak:(text:string)=>void}){
 const [area,setArea]=useState("Practical Life");
 const [completed,setCompleted]=useState<string[]>(()=>{try{return JSON.parse(localStorage.getItem("mw-montessori-done-Class-1")||"[]") as string[]}catch{return []}});
 const areas={
  "Practical Life":["Pouring & transferring","Scooping & spooning","Folding cloth","Buttoning & zipping","Lacing & tying","Washing hands sequence","Table setting","Toy organization"],
  "Sensorial":["Big → small grading","Long → short grading","Color grading","Shape matching","Texture matching","Sound matching","Weight comparison","Pattern construction"],
  "Language":["Sound games","Sandpaper-style letter tracing","Object naming","Beginning-sound sort","Moveable-alphabet word building","Phonetic reading","Sight-word matching","Sentence picture order"],
  "Mathematics":["Number rods","Sandpaper numbers","Quantity matching","Spindle-box counting","Zero concept","Ten-frame counting","Tens & ones","Concrete addition"],
  "Culture & Nature":["Land & water forms","Continents","Animals by habitat","Plants & life cycles","Weather matching","Community helpers","Map puzzles","Nature observation"]
 } as const;
 const tasks=areas[area as keyof typeof areas]||areas["Practical Life"];
 const toggle=(task:string)=>{const key=`${area}:${task}`;const next=completed.includes(key)?completed.filter(x=>x!==key):[...completed,key];setCompleted(next);try{localStorage.setItem("mw-montessori-done-Class-1",JSON.stringify(next))}catch{};onSpeak(`${task}. Explore slowly and carefully.`)};
 return <section className="panel rounded-3xl p-4"><div className="rounded-3xl bg-gradient-to-r from-emerald-100 via-yellow-50 to-sky-100 p-4"><p className="text-xs font-black uppercase tracking-wider">Montessori Learning Environment</p><h3 className="mt-1 font-display text-3xl">Montessori World 🌱</h3><p className="mt-1 text-sm">Age {age} • independence, repetition, hands-on discovery and self-correction.</p></div>
  <div className="mt-3 grid grid-cols-2 gap-2">{Object.entries(areas).map(([name,tasks])=><button key={name} onClick={()=>setArea(name)} className={`rounded-2xl p-3 text-left ${area===name?"bg-primary text-white":"bg-white text-slate-700"}`}><span className="text-2xl">{name==="Practical Life"?"🧺":name==="Sensorial"?"🌈":name==="Language"?"🔤":name==="Mathematics"?"🔢":"🌎"}</span><b className="mt-1 block text-xs">{name}</b><small className="text-[10px] opacity-70">{tasks.length} activities</small></button>)}</div>
  <div className="mt-3 rounded-3xl bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><h4 className="font-display text-2xl">{area}</h4><span className="text-xs font-black">{tasks.filter(t=>completed.includes(`${area}:${t}`)).length}/{tasks.length}</span></div><div className="mt-3 grid gap-2">{tasks.map((task,i)=>{const key=`${area}:${task}`;const isDone=completed.includes(key);return <button key={task} onClick={()=>toggle(task)} className={`rounded-2xl p-4 text-left ${isDone?"bg-emerald-50":"bg-slate-50"}`}><span className="mr-2">{isDone?"✅":"○"}</span><b>{i+1}. {task}</b></button>})}</div></div>
  <div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-2xl bg-white p-3 text-xs font-bold">🌿 Observe → try → repeat</div><div className="rounded-2xl bg-white p-3 text-xs font-bold">🧩 Self-correcting practice</div></div>
 </section>
}

function DailyAdventure({age,step,setStep,onSpeak}:{age:number;step:number;setStep:(v:number)=>void;onSpeak:(text:string)=>void}){
 const quests=["🔤 Find 3 letters","🔢 Count 5 objects","🐾 Meet an animal","🎨 Name a color","🎵 Tap a rhythm","📖 Hear a story"]; const current=quests[step%quests.length];
 return <section className="panel rounded-3xl p-4"><div className="preschool-hero rounded-3xl p-4"><p className="text-xs font-black uppercase tracking-wider">Daily Adventure • Age {age}</p><h3 className="mt-1 font-display text-3xl">Mimi's Learning Map 🐼🗺️</h3><p className="mt-1 text-sm">One tiny quest at a time. Finish the path and earn a star.</p></div><div className="mt-4 journey-mini-route">{quests.map((q,i)=><span key={q} className={`journey-mini-node ${i<step%quests.length?"done":""} ${i===step%quests.length?"current":""}`}>{i<step%quests.length?"⭐":q.slice(0,2)}<small>{i+1}</small></span>)}</div><div className="mt-4 rounded-3xl bg-white p-5 text-center shadow-sm"><div className="text-5xl">{current.slice(0,2)}</div><h4 className="mt-2 text-xl font-black">{current.slice(2)}</h4><p className="mt-1 text-sm text-muted">Tap complete when the little quest is finished.</p><button className="btn-primary mt-4 w-full" onClick={()=>{onSpeak("Quest complete! You earned a star!");setStep(step+1)}}>Complete Quest ⭐</button></div><p className="mt-3 text-center text-xs text-muted">Progress is saved on this device for offline play.</p></section>
}

function SmartTeacher({age,xp,completed,mode,setMode,onSpeak}:{age:number;xp:number;completed:number;mode:string;setMode:(v:string)=>void;onSpeak:(text:string)=>void}){
 const topics={letters:{icon:"🔤",title:"Letter Coach",tip:"Practice one letter sound, then find a word that starts with it."},numbers:{icon:"🔢",title:"Number Coach",tip:"Count slowly and touch each object once."},colors:{icon:"🎨",title:"Color Coach",tip:"Name the color, then find something nearby with the same color."},animals:{icon:"🐾",title:"Animal Coach",tip:"Say the animal name and one thing it can do."}} as const;
 const t=topics[mode as keyof typeof topics]||topics.letters;
 const next=completed<3?"letters":xp<100?"numbers":completed<10?"animals":"colors";
 return <section className="panel rounded-3xl p-4"><div className="mascot-card rounded-3xl p-4"><div className="flex items-center gap-3"><div className="mascot-bubble">🐼</div><div><p className="text-xs font-black uppercase tracking-wider text-accent">Smart Teacher</p><h3 className="font-display text-2xl text-fg">Let's learn together!</h3><p className="text-xs text-muted">Suggested next: {topics[next as keyof typeof topics].title}</p></div></div></div><div className="mt-3 grid grid-cols-2 gap-2">{Object.entries(topics).map(([id,v])=><button key={id} onClick={()=>setMode(id)} className={`rounded-2xl p-3 text-left ${mode===id?"bg-primary text-white":"bg-white"}`}><span className="text-2xl">{v.icon}</span><b className="ml-2 text-sm">{v.title}</b></button>)}</div><div className="mt-3 rounded-3xl bg-white p-5 text-center shadow-sm"><div className="text-5xl">{t.icon}</div><h4 className="mt-2 text-xl font-black">{t.tip}</h4><button className="hud-chip mt-3" onClick={()=>onSpeak(t.tip)}>🔊 Teacher says</button></div><div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold"><div className="rounded-2xl bg-white p-3">⭐ {xp} XP</div><div className="rounded-2xl bg-white p-3">📚 {completed}</div><div className="rounded-2xl bg-white p-3">🎯 {age} yrs</div></div></section>
}

function ArtStudio({onSpeak}:{onSpeak:(text:string)=>void}){
 const [color,setColor]=useState("#ff6fae"); const [marks,setMarks]=useState<string[]>(()=>{try{return JSON.parse(localStorage.getItem("mw-art-marks")||"[]") as string[]}catch{return []}});
 const colors=["#ff6fae","#6c7cff","#ffbd59","#55c88a","#55b8e8","#8b5cf6"]; const add=(shape:string)=>{const next=[...marks,`${shape}:${color}`];setMarks(next);try{localStorage.setItem("mw-art-marks",JSON.stringify(next))}catch{}};
 return <section className="panel rounded-3xl p-4"><div className="text-center"><div className="text-6xl">🎨🖍️</div><h3 className="font-display text-2xl text-fg">Art Studio</h3><p className="text-xs text-muted">Make a picture with shapes, colors, and stickers.</p></div><div className="mt-3 rounded-3xl bg-white p-4 shadow-sm"><div className="grid min-h-52 grid-cols-5 place-items-center gap-3 rounded-3xl bg-gradient-to-br from-amber-50 via-sky-50 to-pink-50 p-4">{marks.length?marks.map((m,i)=>{const [shape,c]=m.split(":");return <span key={`${m}-${i}`} style={{color:c}} className="text-4xl">{shape}</span>}):<span className="col-span-5 text-center text-sm font-bold text-slate-400">Your canvas is ready ✨</span>}</div><div className="mt-3 flex flex-wrap justify-center gap-2">{colors.map(c=><button aria-label={`Choose ${c}`} key={c} onClick={()=>setColor(c)} style={{background:c}} className={`size-9 rounded-full ${color===c?"ring-4 ring-slate-300":""}`}/>)}</div><div className="mt-3 grid grid-cols-4 gap-2">{["●","▲","■","⭐","🌈","🐼","🌸","☀️"].map(x=><button key={x} onClick={()=>add(x)} className="rounded-2xl bg-slate-50 p-3 text-2xl">{x}</button>)}</div><div className="mt-3 flex gap-2"><button className="hud-chip" onClick={()=>{setMarks([]);try{localStorage.removeItem("mw-art-marks")}catch{}}}>↩ Clear</button><button className="btn-primary flex-1" onClick={()=>onSpeak("Beautiful artwork! Keep creating!")}>✨ Celebrate</button></div></div></section>
}


function MusicWorld({onSpeak}:{onSpeak:(text:string)=>void}){
 const playTone=(freq:number)=>{try{const C=window.AudioContext||(window as typeof window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;if(!C)return;const ctx=new C();const o=ctx.createOscillator();const g=ctx.createGain();o.frequency.value=freq;o.type="sine";g.gain.setValueAtTime(.001,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.18,ctx.currentTime+.03);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.45);o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+.5);setTimeout(()=>void ctx.close(),650)}catch{}};
 return <section className="panel rounded-3xl p-4"><div className="text-center"><div className="text-6xl">🎵🎹🥁</div><h3 className="mt-2 font-display text-2xl text-fg">Music World</h3><p className="text-xs text-muted">Little songs and instruments — works without internet.</p></div><div className="mt-4 grid grid-cols-4 gap-2">{[[262,"C"],[294,"D"],[330,"E"],[349,"F"],[392,"G"],[440,"A"],[494,"B"],[523,"C" ]].map(([f,n])=><button key={`${f}`} onClick={()=>playTone(Number(f))} className="rounded-2xl bg-white p-4 text-xl font-black shadow-sm active:scale-95">{n}</button>)}</div><div className="mt-3 grid gap-2"><button className="hud-chip" onClick={()=>onSpeak("Twinkle twinkle little star. ABC and numbers are fun to learn!")}>🔊 Hear a rhyme</button><button className="btn-primary" onClick={()=>onSpeak("Clap clap clap! Tap a piano key and make your own music!")}>👏 Rhythm game</button></div></section>
}

function MiniGames({onSpeak,score,setScore}:{onSpeak:(text:string)=>void;score:number;setScore:(v:number)=>void}){
 const [round,setRound]=useState(0); const rounds=[["Which animal is a bird?",["🐶 Dog","🦉 Owl","🐘 Elephant","🐟 Fish"],"🦉 Owl"],["Which is bigger?",["🐜 Ant","🐘 Elephant","🐭 Mouse","🐝 Bee"],"🐘 Elephant"],["Which matches? 🍎",["🍎 Apple","🚗 Car","🐟 Fish","📚 Book"],"🍎 Apple"]]; const r=rounds[round%rounds.length];
 return <section className="panel rounded-3xl p-4 text-center"><div className="text-5xl">🎮🧩</div><h3 className="font-display text-2xl text-fg">Mini Game Arcade</h3><p className="mt-1 text-xs text-muted">Score: {score} ⭐</p><h4 className="mt-4 text-lg font-bold text-fg">{r[0]}</h4><div className="mt-3 grid grid-cols-2 gap-2">{(r[1] as string[]).map(a=><button key={a} onClick={()=>{if(a===r[2]){setScore(score+1);onSpeak("Great job!");setRound(round+1)}else onSpeak("Almost! Try again!")}} className="rounded-2xl bg-white p-4 text-sm font-black shadow-sm">{a}</button>)}</div></section>
}

function MyLittleWorld({avatar,setAvatar,room,setRoom,xp}:{avatar:string;setAvatar:(v:string)=>void;room:string[];setRoom:(v:string[])=>void;xp:number}){
 const avatars=["🐼","🐯","🐰","🐨","🦊","🐸"]; const items=["🛏️","🧸","🌱","🪴","🎈","🪁","📚","🧩","⭐"]; const toggle=(item:string)=>setRoom(room.includes(item)?room.filter(x=>x!==item):[...room,item]);
 return <section className="panel rounded-3xl p-4"><div className="text-center"><div className="text-7xl">{avatar}</div><h3 className="font-display text-2xl text-fg">My Little World 🏡</h3><p className="text-xs text-muted">Customize your little learning room.</p></div><div className="mt-3 flex justify-center gap-2">{avatars.map(a=><button key={a} onClick={()=>setAvatar(a)} className={`rounded-2xl p-2 text-3xl ${avatar===a?"bg-primary/15 ring-2 ring-primary":"bg-white"}`}>{a}</button>)}</div><div className="mt-4 rounded-3xl bg-gradient-to-br from-sky-100 via-pink-50 to-amber-100 p-5"><div className="grid min-h-36 grid-cols-5 place-items-center gap-2 text-3xl">{room.map((x,i)=><span key={`${x}-${i}`}>{x}</span>)}</div></div><p className="mt-3 text-center text-xs text-muted">Unlocked with learning: {Math.min(items.length,Math.floor(xp/30)+1)}/{items.length}</p><div className="mt-3 grid grid-cols-3 gap-2">{items.map((item,i)=>{const unlocked=xp>=i*30;return <button disabled={!unlocked} key={item} onClick={()=>toggle(item)} className={`rounded-2xl p-3 text-2xl ${room.includes(item)?"bg-primary/15":"bg-white"} ${!unlocked?"opacity-35":""}`}>{item}</button>})}</div></section>
}
