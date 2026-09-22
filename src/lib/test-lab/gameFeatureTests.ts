import { GAME_FEATURES, type GameFeature } from "@/lib/game/featureSuite";

export type GameFeatureTestKind = "automated" | "manual" | "configuration";
export type GameFeatureTestSpec = GameFeature & {
  kind: GameFeatureTestKind;
  target?: string;
  steps: string[];
  expected: string;
};

const TARGETS: Record<string, string> = {
  "g-play": "home",
  "g-learn": "skills",
  "g-progress": "progression",
  "g-save": "saveSlots",
  "g-access": "accessibility",
  "g-audio": "voice",
  "g-parent": "profile",
  "g-integrity": "systems",
};

const STEPS_BY_GROUP: Record<string, string[]> = {
  Gameplay: ["Open the academy.", "Start the relevant game/activity.", "Perform one complete round.", "Verify the expected gameplay behavior and recovery from pause/retry."],
  Learning: ["Open Skills or the relevant learning activity.", "Complete at least 3 questions with a mix of correct and incorrect answers.", "Review mastery/feedback.", "Verify the feature changes or recommends content as described."],
  Progression: ["Open Progression/Missions.", "Complete the smallest available qualifying action.", "Return to the progression screen.", "Verify XP, reward, streak, milestone or collection behavior without refreshing away the evidence."],
  "Save & Sync": ["Open Save & Recovery.", "Create or change a test save.", "Reload or use the available recovery/sync action.", "Verify the newest valid state is retained and corruption/conflicts are handled safely."],
  "Mobile & Access": ["Open Settings → Accessibility or the relevant mobile control.", "Change the relevant device/browser condition.", "Repeat the target interaction.", "Verify the UI remains usable and the requested accessibility behavior is applied."],
  Audio: ["Open Voice Command Center or the relevant game.", "Enable sound/voice/haptics as applicable.", "Trigger the relevant interaction.", "Verify correct audio feedback, interruption recovery and controls."],
  Parents: ["Use a dedicated QA parent account.", "Open the parent/progress area.", "Complete or inspect a test-child activity.", "Verify only the intended parent-facing data and controls are shown."],
  Integrity: ["Use QA/test data only.", "Perform the target reward/score/save action.", "Repeat or tamper with the input where the feature explicitly covers integrity.", "Verify duplicates, impossible values and invalid writes are rejected or safely ignored."],
};

function kindFor(feature: GameFeature): GameFeatureTestKind {
  if (feature.status === "configuration") return "configuration";
  const auto = new Set(["difficulty-adaptation", "learning-analysis", "spaced-review", "reward-deduplication", "score-integrity", "save-integrity", "save-conflict", "audit-trail"]);
  return auto.has(feature.id) ? "automated" : "manual";
}

export const GAME_FEATURE_TESTS: GameFeatureTestSpec[] = GAME_FEATURES.map((feature) => ({
  ...feature,
  kind: kindFor(feature),
  target: TARGETS[feature.group],
  steps: STEPS_BY_GROUP[feature.group] ?? ["Open the academy.", "Open the feature's target screen.", "Perform the documented action.", "Verify the expected result."],
  expected: feature.detail,
}));

export const GAME_FEATURE_TEST_COUNT = GAME_FEATURE_TESTS.length;

export function gameFeatureTest(id: string) {
  return GAME_FEATURE_TESTS.find((x) => x.id === id);
}

import {
  analyzeLearning,
  appendAudit,
  chooseNewerSave,
  checksumPayload,
  createSaveEnvelope,
  dedupeRewards,
  impossibleScore,
  planDifficulty,
  spacedReviewQueue,
  validateSaveEnvelope,
} from "@/lib/game/featureSuite";

export function runGameFeatureAutomation(id: string): { passed: boolean; note: string } | null {
  const feature = gameFeatureTest(id);
  if (!feature || feature.kind !== "automated") return null;
  const now = 1_800_000_000_000;
  try {
    switch (feature.title) {
      case "Adaptive difficulty": {
        const gentle = planDifficulty({ accuracy: 0.4, recentFailures: 3, recentPerfects: 0 });
        const challenge = planDifficulty({ accuracy: 0.95, recentFailures: 0, recentPerfects: 3 });
        return { passed: gentle.tier === "gentle" && challenge.tier === "challenge", note: "Adaptive difficulty contract produced both expected boundary tiers." };
      }
      case "Weak-skill detection":
      case "Strong-skill detection":
      case "Topic mastery":
      case "Concept decay":
      case "Error-pattern analysis":
      case "Mastery confidence": {
        const signals = [{ skill: "letters", correct: false, timeMs: 1000, at: now - 10 * 86400000 }, { skill: "letters", correct: false, timeMs: 1000, at: now - 9 * 86400000 }, { skill: "numbers", correct: true, timeMs: 900, at: now }];
        const result = analyzeLearning(signals, now);
        return { passed: result.length === 2 && result[0]?.weak === true && result.some((x) => x.strong), note: "Learning analysis classified weak/stale and strong signals from deterministic test data." };
      }
      case "Spaced repetition":
      case "Revision queue": {
        const signals = [{ skill: "review-me", correct: false, timeMs: 1000, at: now - 8 * 86400000 }, { skill: "ready", correct: true, timeMs: 900, at: now }];
        const queue = spacedReviewQueue(signals, now);
        return { passed: queue.includes("review-me") && !queue.includes("ready"), note: "Spaced-review queue selected weak/stale skills and excluded a fresh strong skill." };
      }
      case "Reward deduplication": {
        const events = [{ id: "r1", coins: 10, xp: 20, reason: "test", at: now }, { id: "r1", coins: 10, xp: 20, reason: "duplicate", at: now + 1 }];
        const unique = dedupeRewards(events);
        return { passed: unique.length === 1, note: "Duplicate reward event IDs were reduced to one transaction." };
      }
      case "Score validation":
      case "Impossible-score detection": {
        return { passed: impossibleScore(101, 1) && !impossibleScore(100, 1), note: "Score boundary validation rejected an impossible score and accepted the valid boundary." };
      }
      case "Save integrity checksum": {
        const payload = { progress: 42 };
        const envelope = createSaveEnvelope(payload, { revision: 2, deviceId: "qa-device", updatedAt: now });
        const valid = validateSaveEnvelope(envelope);
        const corrupted = { ...envelope, checksum: checksumPayload({ progress: 43 }) };
        return { passed: valid && !validateSaveEnvelope(corrupted), note: "Save checksum detected a modified payload." };
      }
      case "Conflict detection": {
        const local = createSaveEnvelope({ x: 1 }, { revision: 1, deviceId: "local", updatedAt: now });
        const remote = createSaveEnvelope({ x: 2 }, { revision: 2, deviceId: "remote", updatedAt: now });
        return { passed: chooseNewerSave(local, remote) === remote, note: "Newer save revision won the deterministic conflict test." };
      }
      case "Progress audit trail": {
        const next = appendAudit([], { id: "a1", action: "test", at: now });
        return { passed: next.length === 1 && next[0]?.id === "a1", note: "Audit trail appended a bounded transition event." };
      }
      default:
        return null;
    }
  } catch (error) {
    return { passed: false, note: `Automation threw: ${error instanceof Error ? error.message : "unknown error"}` };
  }
}
