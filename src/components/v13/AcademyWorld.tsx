import { useMemo, useState, type CSSProperties } from "react";
import { Sparkles, Star, Trophy, Volume2, Bus, Palette, Music2, BookOpen, FlaskConical, Heart, Sun, PawPrint, LockKeyhole } from "lucide-react";
import { SmartLearningFriend } from "./SmartLearningFriend";
import { SmartJourneyPanel } from "./SmartJourneyPanel";
import { CLASS_SKILLS, getLearningProfile } from "@/lib/intelligence/learningBrain";
import type { LearningClass } from "@/lib/academy/classSelection";

type AcademyClass = LearningClass;
type Props = { xp: number; completed: number; available: number; onSpeak: (text: string) => void; onMissionComplete?: () => void };

const CLASSES: Record<AcademyClass, { icon: string; color: string; tagline: string; subjects: string[]; rooms: string[]; mascot: string; mission: string }> = {
  Montessori: { icon: "🌱", color: "academy-montessori", tagline: "Calm hands-on discovery", subjects: ["Practical Life", "Sensorial", "Language", "Mathematics & Culture"], rooms: ["Practical Life", "Sensorial Shelf", "Language Garden", "Nature Corner"], mascot: "🐼", mission: "Sort objects by size!" },
  Nursery: { icon: "🌸", color: "academy-nursery", tagline: "Playful first steps", subjects: ["Alphabet", "Counting", "Colors & Shapes", "Music & Animals"], rooms: ["Alphabet Garden", "Counting Park", "Color Room", "Music Corner"], mascot: "🐰", mission: "Find 3 colorful things!" },
  KG: { icon: "🔵", color: "academy-kg", tagline: "Curious school readiness", subjects: ["Reading", "Math", "Science", "Phonics & Words"], rooms: ["Reading Library", "Math Mountain", "Science Lab", "Phonics Studio"], mascot: "🦊", mission: "Build 3 simple words!" },
};
const REWARDS: Record<AcademyClass, string[]> = {
  Montessori: ["🌿 Practical Life Star", "🧩 Sensorial Star", "🔤 Language Star", "🔢 Mathematics Star"],
  Nursery: ["🌸 Alphabet Star", "🔢 Counting Star", "🎨 Color Star", "🎵 Music Star"],
  KG: ["📖 Reading Star", "🔢 Math Star", "🔬 Science Star", "🔤 Phonics Star"],
};

const QUICK = [
  ["🎨", "Art Studio", "Draw, color & save"], ["🎵", "Music Room", "Tap a rhythm"], ["📖", "Story Theater", "Listen & explore"],
  ["🔬", "Mini Science Lab", "Discover why"], ["❤️", "Feelings Corner", "Learn emotions"], ["🧼", "Daily Life", "Practice routines"],
];
const PETS = ["🐶", "🐱", "🐰", "🐼", "🐥", "🦊"];

export function AcademyWorld({ xp, completed, available, onSpeak, onMissionComplete }: Props) {
  const [klass, setKlass] = useState<AcademyClass>(() => {
    try {
      const value = localStorage.getItem("lla-class");
      return (["Montessori", "Nursery", "KG"] as AcademyClass[]).includes(value as AcademyClass)
        ? value as AcademyClass
        : "Montessori";
    } catch {
      return "Nursery";
    }
  });
  const [pet, setPet] = useState(() => { try { return localStorage.getItem("lla-pet") || "🐰"; } catch { return "🐰"; } });
  const missionKey = `lla-academy-mission-${klass}-${new Date().toISOString().slice(0, 10)}`;
  const [missionDone, setMissionDone] = useState(() => { try { return localStorage.getItem(missionKey) === "1"; } catch { return false; } });
  const [petCare, setPetCare] = useState(() => { try { return JSON.parse(localStorage.getItem("lla-pet-care") ?? "null") ?? { happiness: 60, energy: 70, hunger: 60 }; } catch { return { happiness: 60, energy: 70, hunger: 60 }; } });
  const data = CLASSES[klass];
  const progress = available > 0 ? Math.min(100, Math.round((completed / available) * 100)) : 0;
  const mastered = useMemo(() => {
    const profile = getLearningProfile();
    return CLASS_SKILLS[klass].filter(skill => { const stat = profile.byClass[klass][skill]; return !!stat && stat.attempts >= 3 && stat.correct / stat.attempts >= 0.88; }).length;
  }, [klass, completed, xp]);
  const rewards = REWARDS[klass];
  const unlocked = Math.min(rewards.length, mastered);
  const roomCount = data.rooms.length;
  const select = (next: AcademyClass) => { setKlass(next); try { localStorage.setItem("lla-class", next); } catch {} try { setMissionDone(localStorage.getItem(`lla-academy-mission-${next}-${new Date().toISOString().slice(0, 10)}`) === "1"); } catch { setMissionDone(false); } window.dispatchEvent(new Event("lla-class-change")); onSpeak(`${next} pathway selected. Let's learn, play and grow!`); };
  const choosePet = (next: string) => { setPet(next); try { localStorage.setItem("lla-pet", next); } catch {} onSpeak(`Your new academy friend is ${next}.`); };
  const updatePet = (delta: Partial<typeof petCare>, message: string) => { const next = { ...petCare, ...Object.fromEntries(Object.entries(delta).map(([k,v]) => [k, Math.max(0, Math.min(100, (petCare as Record<string,number>)[k] + Number(v)))])) }; setPetCare(next); try { localStorage.setItem("lla-pet-care", JSON.stringify(next)); } catch {} onSpeak(message); };
  const action = (title: string) => onSpeak(`${title}. Let's learn and have fun!`);
  const openActivity = (id: string) => window.dispatchEvent(new CustomEvent("lla-open-activity", { detail: { id } }));
  const completeMission = () => { if (missionDone) return; setMissionDone(true); try { localStorage.setItem(missionKey, "1"); } catch {} onMissionComplete?.(); action(`${klass} mission complete. You earned a star!`); };

  return <section className={`academy-world ${data.color} rounded-[2rem] p-4 shadow-lg`}>
    <div className="academy-world-glow" aria-hidden="true" />
    <div className="relative z-10">
      <div className="academy-ai-art" aria-label="Little Learners Academy illustrated learning world">
        <img src="/offline/preschool/academy-magic-ai.png" alt="Little Learners Academy colorful illustrated learning world" loading="eager" decoding="async" />
        <div className="academy-ai-badge">✨ Offline Academy Art</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="academy-mascot">{data.mascot}</div>
        <div className="min-w-0 flex-1"><p className="text-[10px] font-black uppercase tracking-[.16em] opacity-70">Welcome to your school</p><h2 className="font-display text-2xl text-slate-800">My Academy 🏫 • Little Learners Academy</h2><p className="text-xs text-slate-600">Three class pathways • {progress}% journey</p></div>
        <button type="button" className="academy-sound" aria-label="Hear classroom message" onClick={() => onSpeak(`${klass}. ${data.tagline}. ${data.subjects.join(", ")}.`)}><Volume2 className="size-5" /></button>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">{(Object.keys(CLASSES) as AcademyClass[]).map(name => <button key={name} type="button" onClick={() => select(name)} className={`academy-class-card ${klass === name ? "is-selected" : ""}`}><span className="text-3xl">{CLASSES[name].icon}</span><b>{name}</b><small>{CLASSES[name].tagline}</small></button>)}</div>

      <div className="academy-mission mt-3"><div className="flex items-center gap-3"><div className="academy-mission-icon">🎯</div><div className="flex-1"><p className="text-[10px] font-black uppercase tracking-wider opacity-60">Today's {klass} mission</p><b>{data.mission}</b></div><button className="academy-check" onClick={completeMission}> {missionDone ? "⭐" : "✓"}</button></div></div>

      <div className="mt-3 rounded-3xl bg-white/80 p-4 backdrop-blur-sm"><div className="flex items-center justify-between gap-2"><div><p className="text-[10px] font-black uppercase tracking-wider text-slate-500">{klass} classroom</p><h3 className="font-display text-xl text-slate-800">{data.tagline} {data.icon}</h3></div><div className="academy-progress-ring" style={{ "--progress": `${progress * 3.6}deg` } as CSSProperties}><span>{progress}%</span></div></div><div className="mt-3 grid grid-cols-2 gap-2">{data.subjects.map((subject, i) => <button key={subject} type="button" onClick={() => action(`${klass}. ${subject}`)} className="academy-subject"><span>{["🔤", "🔢", "🎨", "📚"][i]}</span><b>{subject}</b><small>{"Room ready"}</small></button>)}</div></div>

      <SmartLearningFriend className="mt-3" />
      <SmartJourneyPanel className="mt-3" onSpeak={onSpeak} />

      <div className="academy-section-title"><span>🏫</span><b>Explore Academy</b><small>Tap a room to visit</small></div>
      <div className="mt-2 grid grid-cols-2 gap-2">{data.rooms.map((room, i) => <button key={room} type="button" onClick={() => { const ids: Record<AcademyClass,string[]> = {
  Montessori:["montessori-practical","montessori-sensorial","montessori-language","montessori-culture"],
  Nursery:["nursery-abc","nursery-count","nursery-colors","nursery-music"],
  KG:["kg-reading","kg-math","kg-science","kg-phonics"]
}; openActivity(ids[klass][i]); }} className={`academy-room ${i < roomCount ? "" : "is-locked"}`}><span>{["🌈", "🔤", "🔢", "🎵"][i]}</span><b>{room}</b><small>Tap to explore</small></button>)}</div>

      <div className="academy-section-title"><span>✨</span><b>Magic Rooms</b><small>Creative discoveries</small></div>
      <div className="academy-quick-grid">{QUICK.map(([icon, title, sub], i) => <button key={title} type="button" onClick={() => { const rooms = ["art","music","stories","science","feelings","daily"] as const; window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room: rooms[i] } })); }} className="academy-quick"><span>{icon}</span><b>{title}</b><small>{sub}</small></button>)}</div>

      <div className="academy-pet-card mt-3"><div className="academy-pet-avatar">{pet}</div><div className="flex-1"><p className="text-[10px] font-black uppercase tracking-wider opacity-60">My Little Friend</p><b>Pick a learning buddy</b><div className="mt-2 flex gap-1.5">{PETS.map(p => <button key={p} type="button" onClick={() => choosePet(p)} className={`academy-pet-choice ${pet === p ? "is-selected" : ""}`}>{p}</button>)}</div><div className="mt-2 flex flex-wrap gap-1.5"><button className="hud-chip" onClick={() => updatePet({hunger: 18, happiness: 4}, "Yum! Your pet is fed.")}>🍎 Feed</button><button className="hud-chip" onClick={() => updatePet({happiness: 15, energy: -8}, "Play time! Your pet is happy.")}>🎾 Play</button><button className="hud-chip" onClick={() => updatePet({energy: 20, hunger: -5}, "Your pet had a little rest.")}>😴 Rest</button></div><small>Happy {petCare.happiness}% • Energy {petCare.energy}% • Full {petCare.hunger}%</small></div><PawPrint className="size-5 opacity-50"/></div>

      <div className="academy-bus mt-3"><div className="academy-bus-icon"><Bus className="size-6"/></div><div className="flex-1"><b>Magic School Bus 🚌</b><small>Playgroup • Nursery • KG-1 • KG-2 • Class 1</small></div><button onClick={() => window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room: "bus" } }))}>Ride!</button></div>

      <div className="mt-3 rounded-3xl bg-slate-900/90 p-3 text-white"><div className="flex items-center gap-2"><Trophy className="size-5 text-amber-300"/><b className="flex-1">Trophy Garden</b><span className="text-xs">{unlocked}/{rewards.length}</span></div><div className="mt-2 grid grid-cols-4 gap-2">{rewards.map((reward, i) => <div key={reward} className={`academy-trophy ${i < unlocked ? "is-unlocked" : ""}`}>{i < unlocked ? <Star className="mx-auto size-4" /> : <LockKeyhole className="mx-auto size-4 opacity-30" />}<small>{reward.replace(/^\S+ /, "")}</small></div>)}</div></div>

      <div className="academy-bottom-links mt-3">{[[Palette,"Art","Create","art"],[Music2,"Music","Play","music"],[BookOpen,"Stories","Read","stories"],[FlaskConical,"Science","Explore","science"],[Heart,"Feelings","Care","feelings"],[Sun,"Nature","Discover","atlas"]].map(([Icon,title,sub,room]) => { const C = Icon as typeof Palette; return <button key={title as string} onClick={() => window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room } }))}><C className="size-5"/><b>{title as string}</b><small>{sub as string}</small></button>; })}</div>
      <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-600"><Sparkles className="size-3"/> Learn • Play • Create • Discover • Grow <Sparkles className="size-3"/></div>
    </div>
  </section>;
}
