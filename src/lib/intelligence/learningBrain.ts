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
  signal?: LearningSignal;
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

export const CLASS_SKILLS: Record<LearningClass, string[]> = {
  Playgroup: [
    "alphabets",
    "colors",
    "shapes",
    "numbers",
    "animals",
    "rhymes",
  ],
  Nursery: [
    "letters",
    "numbers",
    "colors",
    "shapes",
    "animals",
    "rhymes",
  ],
  "KG-1": [
    "phonics",
    "words",
    "counting",
    "reading",
    "patterns",
    "science",
  ],
  "KG-2": [
    "phonics",
    "spelling",
    "addition",
    "subtraction",
    "reading",
    "science",
  ],
  "Class 1": [
    "reading",
    "writing",
    "grammar",
    "mathematics",
    "science",
    "general-knowledge",
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
    Playgroup: {
      letters: "alphabets",
      numbers: "numbers",
      colors: "colors",
      shapes: "shapes",
      body: "alphabets",
      rhymes: "rhymes",
      listen: "animals",
      animals: "animals",
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
    },
    "KG-1": {
      letters: "phonics",
      numbers: "counting",
      math: "counting",
      patterns: "patterns",
      story: "reading",
      listen: "science",
      vehicles: "science",
      puzzle: "words",
    },
    "KG-2": {
      letters: "phonics",
      numbers: "addition",
      math: "addition",
      patterns: "spelling",
      story: "reading",
      listen: "science",
      vehicles: "science",
      puzzle: "reading",
    },
    "Class 1": {
      letters: "writing",
      numbers: "mathematics",
      math: "mathematics",
      patterns: "mathematics",
      story: "reading",
      listen: "science",
      vehicles: "science",
      puzzle: "general-knowledge",
      tracing: "writing",
    },
  };

  return (
    maps[className][activityKind] ??
    CLASS_SKILLS[className][0]
  );
}

function profileForClass(
  profile: LearningProfile,
  className: LearningClass,
): Record<string, SkillStat> {
  if (!profile.byClass[className]) {
    profile.byClass[className] = {};
  }

  return profile.byClass[className];
}

export function recordLearningSignal(
  profile: LearningProfile,
  className: LearningClass,
  skill: string,
  correct: boolean,
  elapsedMs = 0,
  signal?: LearningSignal,
  now = Date.now(),
): LearningProfile {
  const next = normalizeProfile(profile);
  const stats = profileForClass(next, className);

  const old = stats[skill] ?? EMPTY_STAT();

  stats[skill] = {
    attempts: old.attempts + 1,
    correct: old.correct + (correct ? 1 : 0),
    totalTimeMs: old.totalTimeMs + Math.max(0, elapsedMs),
    lastAttemptAt: now,
    signal: signal ?? old.signal,
  };

  next.lastClass = className;
  next.updatedAt = now;

  return next;
}

export function recommendNext(
  profile: LearningProfile,
  className: LearningClass = profile.lastClass,
  now = Date.now(),
): Recommendation {
  const normalized = normalizeProfile(profile);
  const skills = CLASS_SKILLS[className];
  const stats = profileForClass(normalized, className);

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
    (className === "Playgroup"
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
  className: LearningClass,
  skill: string,
  correct: boolean,
  elapsedMs = 0,
  signal?: LearningSignal,
): LearningProfile {
  const next = recordLearningSignal(
    getLearningProfile(),
    className,
    skill,
    correct,
    elapsedMs,
    signal,
  );

  saveLearningProfile(next);
  return next;
}
