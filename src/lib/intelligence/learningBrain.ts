export type LearningClass = "Playgroup" | "Nursery" | "KG-1" | "KG-2" | "Class 1";
export type LearningSignal = "picture" | "audio" | "game" | "story" | "hands-on";

export type SkillStat = {
  attempts: number;
  correct: number;
  totalMs: number;
  lastAt: number;
  signal?: LearningSignal;
  signalStats?: Partial<Record<LearningSignal, { attempts: number; correct: number }>>;
};

export type LearningProfile = {
  byClass: Record<LearningClass, Record<string, SkillStat>>;
  lastClass: LearningClass;
  updatedAt: number;
};

export type Recommendation = {
  className: LearningClass;
  skill: string;
  title: string;
  reason: string;
  mode: LearningSignal;
  difficulty: "gentle" | "steady" | "challenge";
  confidence: number;
};

export const LEARNING_BRAIN_KEY = "lla-smart-learning-brain-v1";

export const CLASS_SKILLS: Record<LearningClass, string[]> = {
  Nursery: ["letters", "numbers", "colors", "shapes", "animals", "rhymes"],
  KG: ["phonics", "words", "math", "reading", "patterns", "science"],
  Montessori: ["practical-life", "sensorial", "language", "mathematics", "sorting", "nature"],
};

const TITLES: Record<string, string> = {
  letters: "Alphabet Adventure", numbers: "Counting Fun", colors: "Color Explorer", shapes: "Shape Safari", animals: "Animal Discovery", rhymes: "Rhythm & Rhyme",
  phonics: "Phonics Builder", words: "Word Builder", math: "Math Mountain", reading: "Reading Library", patterns: "Pattern Detective", science: "Mini Science Lab",
  "practical-life": "Practical Life", sensorial: "Sensorial Discovery", language: "Language Shelf", mathematics: "Montessori Mathematics", sorting: "Sorting Station", nature: "Nature Corner",
};


function normalizeSignalStats(value: unknown): SkillStat["signalStats"] {
  if (!value || typeof value !== "object") return {};
  const out: SkillStat["signalStats"] = {};
  for (const mode of ["picture", "audio", "game", "story", "hands-on"] as LearningSignal[]) {
    const raw = (value as Record<string, unknown>)[mode];
    if (!raw || typeof raw !== "object") continue;
    const r = raw as Record<string, unknown>;
    out[mode] = { attempts: Math.max(0, Number(r.attempts) || 0), correct: Math.max(0, Number(r.correct) || 0) };
  }
  return out;
}

export function emptyLearningProfile(): LearningProfile {
  const byClass = {} as LearningProfile["byClass"];
  (Object.keys(CLASS_SKILLS) as LearningClass[]).forEach((name) => { byClass[name] = {}; });
  return { byClass, lastClass: "Nursery", updatedAt: 0 };
}

export function normalizeProfile(value: unknown): LearningProfile {
  const fallback = emptyLearningProfile();
  if (!value || typeof value !== "object") return fallback;
  const input = value as Partial<LearningProfile>;
  for (const className of Object.keys(CLASS_SKILLS) as LearningClass[]) {
    const source = input.byClass?.[className];
    if (!source || typeof source !== "object") continue;
    for (const skill of CLASS_SKILLS[className]) {
      const raw = (source as Record<string, unknown>)[skill];
      if (!raw || typeof raw !== "object") continue;
      const r = raw as Partial<SkillStat>;
      fallback.byClass[className][skill] = {
        attempts: Math.max(0, Number(r.attempts) || 0),
        correct: Math.max(0, Number(r.correct) || 0),
        totalMs: Math.max(0, Number(r.totalMs) || 0),
        lastAt: Math.max(0, Number(r.lastAt) || 0),
        signal: r.signal,
        signalStats: normalizeSignalStats(r.signalStats),
      };
    }
  }
  fallback.lastClass = input.lastClass === "KG" || input.lastClass === "Montessori" ? input.lastClass : "Nursery";
  fallback.updatedAt = Math.max(0, Number(input.updatedAt) || 0);
  return fallback;
}


export function skillForActivity(className: LearningClass, activityKind: string): string {
  const maps: Record<LearningClass, Record<string, string>> = {
    Nursery: { letters: "letters", numbers: "numbers", colors: "colors", shapes: "shapes", body: "letters", rhymes: "rhymes", listen: "animals", animals: "animals" },
    KG: { letters: "phonics", numbers: "math", patterns: "patterns", story: "reading", vehicles: "science", puzzle: "reading", math: "math", listen: "phonics" },
    Montessori: { letters: "language", numbers: "mathematics", colors: "sensorial", shapes: "sensorial", sorting: "sorting", tracing: "language", listen: "nature", math: "mathematics" },
  };
  return maps[className][activityKind] ?? CLASS_SKILLS[className][0];
}

export function recordLearningSignal(profile: LearningProfile, className: LearningClass, skill: string, correct: boolean, elapsedMs = 0, signal?: LearningSignal, now = Date.now()): LearningProfile {
  const next = normalizeProfile(profile);
  if (!CLASS_SKILLS[className].includes(skill)) return next;
  const old = next.byClass[className][skill] ?? { attempts: 0, correct: 0, totalMs: 0, lastAt: 0 };
  next.byClass[className][skill] = {
    attempts: old.attempts + 1,
    correct: old.correct + (correct ? 1 : 0),
    totalMs: old.totalMs + Math.max(0, elapsedMs),
    lastAt: now,
    signal: signal ?? old.signal,
    signalStats: signal ? { ...(old.signalStats ?? {}), [signal]: {
      attempts: (old.signalStats?.[signal]?.attempts ?? 0) + 1,
      correct: (old.signalStats?.[signal]?.correct ?? 0) + (correct ? 1 : 0),
    } } : old.signalStats,
  };
  next.lastClass = className;
  next.updatedAt = now;
  return next;
}

function scoreSkill(stat: SkillStat | undefined, now: number): number {
  if (!stat || stat.attempts === 0) return 50; // new skills get a gentle exploration chance
  const accuracy = stat.correct / stat.attempts;
  const ageDays = Math.max(0, (now - stat.lastAt) / 86400000);
  const freshness = Math.min(30, ageDays * 4);
  const struggle = (1 - accuracy) * 70;
  const repetition = Math.max(0, 12 - stat.attempts);
  return struggle + freshness + repetition;
}

export function recommendNext(profile: LearningProfile, className: LearningClass = profile.lastClass, now = Date.now()): Recommendation {
  const stats = profile.byClass[className] ?? {};
  const skill = CLASS_SKILLS[className].slice().sort((a, b) => scoreSkill(stats[b], now) - scoreSkill(stats[a], now))[0];
  const stat = stats[skill];
  const accuracy = stat?.attempts ? stat.correct / stat.attempts : 0.5;
  const difficulty: Recommendation["difficulty"] = accuracy < 0.55 ? "gentle" : accuracy > 0.88 && stat.attempts >= 3 ? "challenge" : "steady";
  const reason = !stat || stat.attempts === 0
    ? "You have not explored this skill yet."
    : accuracy < 0.7
      ? "A little extra practice can help this skill grow."
      : "It has been a while since this skill was practiced.";
  const modeScores = (Object.entries(stat?.signalStats ?? {}) as [LearningSignal, { attempts: number; correct: number }][]).filter(([, value]) => value.attempts > 0);
  const bestMode = modeScores.sort((a, b) => {
    const aAcc = a[1].correct / a[1].attempts;
    const bAcc = b[1].correct / b[1].attempts;
    return (bAcc + Math.min(.2, b[1].attempts * .02)) - (aAcc + Math.min(.2, a[1].attempts * .02));
  })[0]?.[0];
  const mode: LearningSignal = bestMode ?? stat?.signal ?? (className === "Montessori" ? "hands-on" : "game");
  const confidence = Math.round(Math.min(98, 58 + Math.min(35, (stat?.attempts ?? 0) * 6)));
  return { className, skill, title: TITLES[skill] ?? skill, reason, mode, difficulty, confidence };
}

export function getLearningProfile(): LearningProfile {
  if (typeof window === "undefined") return emptyLearningProfile();
  try { return normalizeProfile(JSON.parse(localStorage.getItem(LEARNING_BRAIN_KEY) ?? "null")); } catch { return emptyLearningProfile(); }
}

export function saveLearningProfile(profile: LearningProfile): void {
  if (typeof window === "undefined") return;
  try { localStorage.setItem(LEARNING_BRAIN_KEY, JSON.stringify(normalizeProfile(profile))); } catch {}
}

export function recordAttempt(className: LearningClass, skill: string, correct: boolean, elapsedMs = 0, signal?: LearningSignal): LearningProfile {
  const next = recordLearningSignal(getLearningProfile(), className, skill, correct, elapsedMs, signal);
  saveLearningProfile(next);
  return next;
}
