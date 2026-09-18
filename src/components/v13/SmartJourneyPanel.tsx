import { LEARNING_CLASSES, getSelectedClass, setSelectedClass } from "@/lib/academy/classSelection";
import { useMemo, useState } from "react";
import { Brain, CheckCircle2, Gamepad2, Map, Radio, Sparkles, Target, WifiOff } from "lucide-react";
import { CLASS_SKILLS, getLearningProfile, recommendNext, type LearningClass, type LearningSignal } from "@/lib/intelligence/learningBrain";

const CLASS_EMOJI: Record<LearningClass, string> = {
  Playgroup: "🧸",
  Nursery: "🟢",
  "KG-1": "🔵",
  "KG-2": "🟣",
  "Class 1": "⭐",
};
const MODES: LearningSignal[] = ["picture", "audio", "game", "story", "hands-on"];
const MODE_LABEL: Record<LearningSignal, string> = { picture: "Picture", audio: "Audio", game: "Game", story: "Story", "hands-on": "Hands-on" };
const CHALLENGES: Record<string, string[]> = {
  letters: ["Find the letter", "Match letter to picture", "Letter sound hunt"], numbers: ["Count the objects", "Find the missing number", "Number order"], colors: ["Color hunt", "Match the colors", "Sort by color"], shapes: ["Shape safari", "Match the shape", "Build the pattern"], animals: ["Animal match", "Guess the animal", "Sound clue"], rhymes: ["Rhyme match", "Finish the rhyme", "Listen & choose"],
  phonics: ["Sound match", "Build a CVC word", "Beginning sound"], words: ["Word builder", "Picture to word", "Missing letter"], math: ["Count & add", "Number sequence", "Math story"], reading: ["Picture reading", "Choose the ending", "Story question"], patterns: ["Pattern detective", "What comes next?", "Sort the pattern"], science: ["Science match", "Predict what happens", "Nature discovery"],
  "practical-life": ["Put steps in order", "Daily routine", "Care for the classroom"], sensorial: ["Sound match", "Grade by size", "Color grading"], language: ["Object naming", "Sound match", "Letter tracing"], mathematics: ["Quantity match", "Number rods", "Count & compare"], sorting: ["Sort by size", "Classify objects", "Pattern sorting"], nature: ["Nature match", "Living or non-living?", "Outdoor discovery"],
};

function localProfile(): ReturnType<typeof getLearningProfile> { return getLearningProfile(); }

export function SmartJourneyPanel({ className, onSpeak }: { className?: string; onSpeak: (text: string) => void }) {
  const [tick, setTick] = useState(0);
  const [tab, setTab] = useState<"adventure" | "skills" | "style" | "offline">("adventure");
  const [klass, setKlass] = useState<LearningClass>(() => getSelectedClass() ?? "Nursery");
  const profile = useMemo(() => { void tick; return localProfile(); }, [tick]);
  const recommendation = useMemo(() => recommendNext(profile, klass), [profile, klass]);
  const skills = CLASS_SKILLS[klass];
  const stat = profile.byClass[klass];
  const explored = skills.filter((s) => (stat[s]?.attempts ?? 0) > 0).length;
  const challenge = (CHALLENGES[recommendation.skill] ?? ["Try a new activity", "Match & discover", "Play a quick challenge"])[Math.min(2, Math.max(0, (stat[recommendation.skill]?.attempts ?? 0) % 3))];
  const mode = MODE_LABEL[recommendation.mode];
  const refresh = () => { setTick((v) => v + 1); onSpeak(`${klass} smart journey refreshed. Next activity: ${recommendation.title}.`); };
  const changeClass = (next: LearningClass) => { setKlass(next); setSelectedClass(next); setTick((v) => v + 1); onSpeak(`${next} smart journey selected.`); };
  return <section className={`smart-journey ${className ?? ""}`} aria-label="Smart Learning Journey">
    <div className="smart-journey-head"><div className="smart-journey-icon"><Brain className="size-5"/></div><div className="min-w-0 flex-1"><p>SMART LEARNING JOURNEY</p><h3>Your path can change as you learn ✨</h3><small>Local-first personalization • no internet needed</small></div><button type="button" className="smart-refresh" onClick={refresh} aria-label="Refresh smart plan"><Sparkles className="size-4"/></button></div>
    <div className="smart-tabs" role="tablist" aria-label="Smart journey sections">{([["adventure","🎯 Adventure"],["skills","🗺️ Skill Map"],["style","🎨 Learning Style"],["offline","📡 Offline"]] as const).map(([id,label]) => <button key={id} type="button" className={tab === id ? "is-active" : ""} onClick={() => setTab(id)} role="tab" aria-selected={tab === id}>{label}</button>)}</div>
    {tab === "adventure" && <div className="smart-adventure"><div className="smart-class-picker">{LEARNING_CLASSES.map((name) => <button key={name} type="button" onClick={() => changeClass(name)} className={klass === name ? "is-active" : ""}>{CLASS_EMOJI[name]} {name}</button>)}</div><div className="smart-daily"><div className="smart-daily-icon">{recommendation.mode === "audio" ? "🔊" : recommendation.mode === "story" ? "📖" : recommendation.mode === "hands-on" ? "👐" : "🎮"}</div><div className="min-w-0 flex-1"><span>Today’s smart challenge</span><b>{challenge}</b><small>{recommendation.title} • {recommendation.difficulty} • {mode}</small></div><button type="button" onClick={() => { const map: Record<LearningClass, Record<string,string>> = {
  Playgroup: {
    alphabets: "pg-abc",
    colors: "pg-colors",
    shapes: "pg-shapes",
    numbers: "pg-numbers",
  },
  Nursery: {
    letters: "letters",
    numbers: "numbers",
    colors: "colors",
    shapes: "shapes",
    animals: "animals",
    rhymes: "rhymes",
  },
  "KG-1": {
    phonics: "kg1-phonics",
    counting: "kg1-math",
    patterns: "kg1-patterns",
  },
  "KG-2": {
    phonics: "kg2-phonics",
    spelling: "kg2-words",
    reading: "kg2-reading",
    addition: "kg2-math",
    subtraction: "kg2-math",
  },
  "Class 1": {
    reading: "class1-writing",
    writing: "class1-writing",
    mathematics: "class1-math",
    science: "class1-science",
  },
};

const id=map[klass][recommendation.skill]; if(id) window.dispatchEvent(new CustomEvent("lla-open-activity", { detail: { id, difficulty: recommendation.difficulty } })); onSpeak(`${challenge}. ${recommendation.title}. ${recommendation.reason}`); }}><Gamepad2 className="size-4"/> Start</button></div><div className="smart-mini-stats"><span><Target className="size-3.5"/> {explored}/{skills.length} skills explored</span><span><CheckCircle2 className="size-3.5"/> {recommendation.confidence}% guidance</span></div></div>}
    {tab === "skills" && <div className="smart-skill-map"><div className="smart-class-picker">{LEARNING_CLASSES.map((name) => <button key={name} type="button" onClick={() => changeClass(name)} className={klass === name ? "is-active" : ""}>{CLASS_EMOJI[name]} {name}</button>)}</div><div className="smart-skill-grid">{skills.map((skill) => { const s = stat[skill]; const accuracy = s?.attempts ? Math.round((s.correct / s.attempts) * 100) : 0; const state = !s?.attempts ? "New" : accuracy >= 88 ? "Strong" : accuracy >= 65 ? "Growing" : "Practice"; return <div key={skill} className={`smart-skill ${state.toLowerCase()}`}><div><b>{skill.replaceAll("-", " ")}</b><span>{state}</span></div><div className="smart-skill-bar"><i style={{ width: `${s?.attempts ? Math.max(8, accuracy) : 6}%` }}/></div></div>; })}</div><p className="smart-note"><Map className="size-4"/> The map uses only this class’s learning signals, so pathways stay separate.</p></div>}
    {tab === "style" && <LearningStyle profile={profile} klass={klass}/>} 
    {tab === "offline" && <div className="smart-offline"><div className="smart-offline-hero"><WifiOff className="size-6"/><div><b>Offline Smart Mode</b><p>Recommendations, progress and challenge selection stay on this device.</p></div></div><div className="smart-offline-grid"><span>🧠 Local brain</span><span>🎮 Adaptive games</span><span>📊 Local progress</span><span>🔊 Bundled audio</span><span>🖼️ Local artwork</span><span>📝 Local worksheets</span></div><p className="smart-note"><Radio className="size-4"/> Cloud sync and account features can wait until a connection is available.</p></div>}
  </section>;
}

function LearningStyle({ profile, klass }: { profile: ReturnType<typeof getLearningProfile>; klass: LearningClass }) {
  const rows = MODES.map((mode) => {
    let attempts = 0;
    let correct = 0;
    for (const stat of Object.values(profile.byClass[klass])) {
      const item = stat.signalStats?.[mode];
      attempts += item?.attempts ?? 0;
      correct += item?.correct ?? 0;
    }
    return { mode, attempts, accuracy: attempts ? correct / attempts : 0 };
  }).sort((a,b) => (b.accuracy - a.accuracy) || (b.attempts - a.attempts));
  const observed = rows.filter(row => row.attempts >= 2);
  const top = observed[0];
  const emoji: Record<LearningSignal,string> = {picture:"🖼️",audio:"🔊",game:"🎮",story:"📖","hands-on":"👐"};
  return <div className="smart-style"><div className="smart-style-main"><span className="smart-style-emoji">{top ? emoji[top.mode] : "✨"}</span><div><span>Learning patterns</span><b>{top ? `${MODE_LABEL[top.mode]} is currently working well` : "Learning patterns are still forming"}</b><small>Based on repeated attempts and accuracy in this pathway; it is guidance, not a fixed label.</small></div></div><div className="smart-style-bars">{rows.map(row => <div key={row.mode}><span>{MODE_LABEL[row.mode]}</span><i><em style={{width:`${Math.round(row.accuracy*100)}%`}}/></i><b>{row.attempts ? `${Math.round(row.accuracy*100)}%` : "—"}</b></div>)}</div></div>;
}
