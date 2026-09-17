import { LEARNING_CLASSES, getSelectedClass } from "@/lib/academy/classSelection";
import { useEffect, useMemo, useState } from "react";
import { Brain, ChevronRight, Sparkles, Target, Zap } from "lucide-react";
import { getLearningProfile, recommendNext, type LearningClass, type Recommendation } from "@/lib/intelligence/learningBrain";

const CLASS_COPY: Record<LearningClass, { emoji: string; line: string }> = {
  Playgroup: { emoji: "🧸", line: "play, pictures and happy first steps" },

  "KG-1": { emoji: "🔵", line: "phonics, words and early reading" },
  "KG-2": { emoji: "🟣", line: "stronger reading, spelling and maths" },
  "Class 1": { emoji: "⭐", line: "reading, writing, maths and discovery" },

  KG: { emoji: "🔵", line: "curious practice with growing challenges" },
  Montessori: { emoji: "🌱", line: "calm, hands-on discovery" },
};

export function SmartLearningFriend({ className }: { className?: string }) {
  const [profileVersion, setProfileVersion] = useState(0);
  const [klass, setKlass] = useState<LearningClass>(() => {
    try {
      const value = localStorage.getItem("lla-class");
      return value === "KG" || value === "Montessori" ? value : "Nursery";
    } catch { return "Nursery"; }
  });
  useEffect(() => {
    const onStorage = () => {
      try {
        const value = localStorage.getItem("lla-class");
        if (LEARNING_CLASSES.includes(value as LearningClass)) setKlass(value as LearningClass);
      } catch {}
      setProfileVersion((v) => v + 1);
    };
    addEventListener("storage", onStorage);
    const timer = window.setInterval(() => {
      try {
        const value = localStorage.getItem("lla-class");
        if (LEARNING_CLASSES.includes(value as LearningClass)) setKlass(value as LearningClass);
      } catch {}
      setProfileVersion((v) => v + 1);
    }, 1200);
    return () => { removeEventListener("storage", onStorage); clearInterval(timer); };
  }, []);
  const recommendation: Recommendation = useMemo(() => recommendNext(getLearningProfile(), klass), [klass, profileVersion]);
  const copy = CLASS_COPY[klass];
  const modeText = recommendation.mode === "hands-on" ? "hands-on activity" : recommendation.mode === "audio" ? "listen & repeat" : recommendation.mode === "story" ? "story practice" : recommendation.mode === "picture" ? "picture practice" : "game practice";
  return <section className={`smart-brain-card ${className ?? ""}`} aria-label="Smart Learning Friend">
    <div className="smart-brain-head"><div className="smart-brain-avatar">🤖✨</div><div className="min-w-0 flex-1"><p className="smart-eyebrow"><Brain className="size-3.5"/> Smart Learning Friend</p><h3>“I’ll help choose what comes next!”</h3><p>{copy.emoji} {klass} • {copy.line}</p></div><div className="smart-brain-chip"><Zap className="size-3.5"/> Offline Brain</div></div>
    <div className="smart-recommendation"><div className="smart-rec-icon"><Target className="size-5"/></div><div className="min-w-0 flex-1"><span>Next best practice</span><strong>{recommendation.title}</strong><p>{recommendation.reason}</p><div className="smart-meta"><span>{recommendation.difficulty}</span><span>•</span><span>{modeText}</span><span>•</span><span>{recommendation.confidence}% confidence</span></div></div><ChevronRight className="size-5 opacity-50"/></div>
    <div className="smart-brain-footer"><Sparkles className="size-4"/><span>It watches learning signals locally — no internet needed for recommendations.</span></div>
  </section>;
}
