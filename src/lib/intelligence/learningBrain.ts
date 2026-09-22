import {
  LEARNING_CLASSES,
  type LearningClass,
} from "@/lib/academy/classSelection";

export { LEARNING_CLASSES };
export type { LearningClass };

export type LearningSignal =
  | "game"
  | "picture"
  | "audio"
  | "story"
  | "hands-on";

export type SkillStat = {
  attempts: number;
  correct: number;
  totalTimeMs: number;
  lastAttemptAt: number;
  signal?: LearningSignal;\n  signalStats?: Partial<Record<LearningSignal, { attempts: number; correct: number }>>;
};

export type LearningProfile = {
  byClass: Record<LearningClass, Record<string, SkillStat>>;
  lastClass: LearningClass;
  updatedAt: number;
};

export type Recommendation = {
  className: LearningClass;
  skill: string;
  difficulty: "gentle" | "steady" | "challenge";
  mode: LearningSignal;
  title: string;
  reason: string;
  confidence: number;
};

const CLASS_SKILL_MAP: Record<LearningClass, Record<string, string>> = {
  Montessori: {
    letters: "writing",
    numbers: "mathematics",
    math: "mathematics",
    patterns: "mathematics",
    story: "reading",
    listen: "science",
    animals: "animals",
    vehicles: "science",
    puzzle: "general-knowledge",
    tracing: "writing",
  },
  Nursery: {
    letters: "letters",
    numbers: "numbers",
    colors: "colors",
    shapes: "shapes",
    body: "letters",
    rhymes: "rhymes",
    listen: "animals",
    animals: "animals",
    vehicles: "animals",
    puzzle: "numbers",
  },
  KG: {
    letters: "phonics",
    numbers: "counting",
    math: "addition",
    patterns: "patterns",
    story: "reading",
    listen: "science",
    vehicles: "science",
    puzzle: "words",
    spelling: "spelling",
  },
};
export const CLASS_SKILLS: Record<LearningClass, string[]> = {
  Montessori: [
    "alphabets",
    "colors",
    "shapes",
    "numbers",
    "animals",
    "rhymes",
    "writing",
    "mathematics",
    "science",
    "general-knowledge",
  ],
  Nursery: [
    "letters",
    "numbers",
    "colors",
    "shapes",
    "animals",
    "rhymes",
  ],
  KG: [
    "phonics",
    "words",
    "counting",
    "reading",
    "patterns",
    "science",
    "spelling",
    "addition",
    "subtraction",
  ],
};

const EMPTY_STAT = (): SkillStat => ({
  attempts: 0,
  correct: 0,
  totalTimeMs: 0,
  lastAttemptAt: 0,
});

export function emptyLearningProfile(): LearningProfile {
  const byClass = {} as Record<LearningClass, Record<string, SkillStat>>;

  for (const name of LEARNING_CLASSES) {
    byClass[name] = {};
  }

  return {
    byClass,
    lastClass: "Nursery",
    updatedAt: 0,
  };
}

export function normalizeProfile(input: unknown): LearningProfile {
  const fallback = emptyLearningProfile();

  if (!input || typeof input !== "object") {
    return fallback;
  }

  const source = input as Partial<LearningProfile>;

  for (const className of LEARNING_CLASSES) {
    const sourceStats =
      source.byClass &&
      typeof source.byClass === "object" &&
      source.byClass[className] &&
      typeof source.byClass[className] === "object"
        ? source.byClass[className]
        : {};

    fallback.byClass[className] = {};

    for (const skill of CLASS_SKILLS[className]) {
      const raw = (sourceStats as Record<string, unknown>)[skill];

      if (raw && typeof raw === "object") {
        const stat = raw as Partial<SkillStat>;

        fallback.byClass[className][skill] = {
          attempts: Number(stat.attempts) || 0,
          correct: Number(stat.correct) || 0,
          totalTimeMs: Number(stat.totalTimeMs) || 0,
          lastAttemptAt: Number(stat.lastAttemptAt) || 0,
          signal:
            stat.signal === "game" ||
            stat.signal === "picture" ||
            stat.signal === "audio" ||
            stat.signal === "story" ||
            stat.signal === "hands-on"
              ? stat.signal
              : undefined,
        };
      }
    }
  }

  if (
    typeof source.lastClass === "string" &&
    LEARNING_CLASSES.includes(source.lastClass as LearningClass)
  ) {
    fallback.lastClass = source.lastClass as LearningClass;
  }

  fallback.updatedAt = Number(source.updatedAt) || 0;

  return fallback;
}

export function skillForActivity(
  className: LearningClass,
  activityKind: string,
): string {
  const maps: Record<LearningClass, Record<string, string>> = {
    Montessori: {
      letters: "alphabets",
      numbers: "numbers",
      colors: "colors",
      shapes: "shapes",
      body: "alphabets",
      rhymes: "rhymes",
      listen: "animals",
      animals: "animals",
      vehicles: "animals",
      puzzle: "general-knowledge",
      tracing: "writing",
      math: "mathematics",
      patterns: "mathematics",
      story: "reading",
    },
    Nursery: {
      letters: "letters",
      numbers: "numbers",
      colors: "colors",
      shapes: "shapes",
      body: "letters",
      rhymes: "rhymes",
      listen: "animals",
      animals: "animals",
      vehicles: "animals",
      puzzle: "numbers",
      tracing: "letters",
      math: "numbers",
      patterns: "shapes",
      story: "rhymes",
    },
    KG: {
      letters: "phonics",
      numbers: "counting",
      math: "addition",
      patterns: "patterns",
      story: "reading",
      listen: "science",
      animals: "science",
      vehicles: "science",
      puzzle: "words",
      tracing: "writing",
      spelling: "spelling",
    },
  };

  return (
    maps[className][activityKind] ??
    CLASS_SKILLS[className][0]
  );
}

export function recommendNext(
  profile: LearningProfile,
  className: LearningClass = profile.lastClass,
  now = Date.now(),
): Recommendation {
  const normalized = normalizeProfile(profile);
  const skills = CLASS_SKILLS[className];
  const stats = normalized.byClass[className];

  let bestSkill = skills[0];
  let lowestScore = Number.POSITIVE_INFINITY;

  for (const skill of skills) {
    const stat = stats[skill];

    if (!stat || stat.attempts === 0) {
      bestSkill = skill;
      break;
    }

    const accuracy = stat.correct / Math.max(1, stat.attempts);
    const recentPenalty =
      stat.lastAttemptAt > 0 &&
      now - stat.lastAttemptAt < 24 * 60 * 60 * 1000
        ? 0.1
        : 0;

    const score = accuracy - recentPenalty;

    if (score < lowestScore) {
      lowestScore = score;
      bestSkill = skill;
    }
  }

  const stat = stats[bestSkill];
  const accuracy = stat?.attempts
    ? stat.correct / stat.attempts
    : 0;

  const difficulty =
    !stat || stat.attempts < 2
      ? "gentle"
      : accuracy >= 0.85
        ? "challenge"
        : accuracy < 0.6
          ? "gentle"
          : "steady";

  const mode: LearningSignal =
    stat?.signal ??
    (className === "Montessori"
      ? "picture"
      : className === "Nursery"
        ? "game"
        : "hands-on");

  return {
    className,
    skill: bestSkill,
    difficulty,
    mode,
    title: `${bestSkill.replaceAll("-", " ")} practice`,
    reason:
      !stat || stat.attempts === 0
        ? "This is a fresh skill for this class."
        : accuracy < 0.6
          ? "A little more practice will help this skill grow."
          : accuracy >= 0.85
            ? "This skill is going well, so a small challenge is ready."
            : "Keep building this skill with another practice round.",
    confidence: stat?.attempts
      ? Math.min(99, 60 + Math.min(35, stat.attempts * 5))
      : 60,
  };
}

const PROFILE_KEY = "lla-learning-profile";

export function getLearningProfile(): LearningProfile {
  if (typeof window === "undefined") {
    return emptyLearningProfile();
  }

  try {
    const raw = window.localStorage.getItem(PROFILE_KEY);
    return raw ? normalizeProfile(JSON.parse(raw)) : emptyLearningProfile();
  } catch {
    return emptyLearningProfile();
  }
}

function saveLearningProfile(profile: LearningProfile) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(profile),
    );
  } catch {
    // Ignore storage failures.
  }
}

export function recordAttempt(
  profile: LearningProfile,
  skill: string,
  correct: boolean,
  signal?: LearningSignal,
  now = Date.now(),
): LearningProfile {
  const className = profile.lastClass;
  const classStats = profile.byClass[className] ?? {};
  const current = classStats[skill] ?? EMPTY_STAT();

  return {
    ...profile,
    byClass: {
      ...profile.byClass,
      [className]: {
        ...classStats,
        [skill]: {
          ...current,
          attempts: current.attempts + 1,
          correct: current.correct + (correct ? 1 : 0),
          lastAttemptAt: now,
          ...(signal ? { signal, signalStats: { ...current.signalStats, [signal]: { attempts: (current.signalStats?.[signal]?.attempts ?? 0) + 1, correct: (current.signalStats?.[signal]?.correct ?? 0) + (correct ? 1 : 0) } } } : {}),
        },
      },
    },
    updatedAt: now,
  };
}

export function recordLearningSignal(
  profile: LearningProfile,
  skill: string,
  signal: LearningSignal,
  correct = false,
  now = Date.now(),
): LearningProfile {
  return recordAttempt(profile, skill, correct, signal, now);
}
