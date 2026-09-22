import test from "node:test";
import assert from "node:assert/strict";
import {
  GAME_FEATURE_COUNT,
  GAME_FEATURES,
  analyzeLearning,
  checksumPayload,
  createSaveEnvelope,
  dedupeRewards,
  impossibleScore,
  planDifficulty,
  spacedReviewQueue,
  validateSaveEnvelope,
} from "./featureSuite.ts";

test("game feature suite contains exactly 100 registered capabilities", () => {
  assert.equal(GAME_FEATURE_COUNT, 100);
  assert.equal(new Set(GAME_FEATURES.map((f) => f.id)).size, 100);
});

test("difficulty adapts to weak and strong recent performance", () => {
  assert.equal(planDifficulty({ accuracy: 0.4, recentFailures: 3, recentPerfects: 0 }).tier, "gentle");
  assert.equal(planDifficulty({ accuracy: 0.95, recentFailures: 0, recentPerfects: 3 }).tier, "challenge");
});

test("learning analysis exposes weak, strong and stale skills", () => {
  const now = 2_000_000_000;
  const signals = [
    { skill: "letters", correct: false, timeMs: 1000, at: now - 8 * 86400000 },
    { skill: "letters", correct: false, timeMs: 1000, at: now - 7 * 86400000 },
    { skill: "math", correct: true, timeMs: 1000, at: now - 1000 },
    { skill: "math", correct: true, timeMs: 1000, at: now - 2000 },
  ];
  const report = analyzeLearning(signals, now);
  assert.equal(report.find((x) => x.skill === "letters")?.weak, true);
  assert.equal(report.find((x) => x.skill === "math")?.strong, true);
  assert.deepEqual(spacedReviewQueue(signals, now), ["letters"]);
});

test("save envelopes detect payload changes", () => {
  const envelope = createSaveEnvelope({ level: 4 }, { revision: 2, deviceId: "device-a", updatedAt: 10 });
  assert.equal(validateSaveEnvelope(envelope), true);
  assert.equal(validateSaveEnvelope({ ...envelope, payload: { level: 9 } }), false);
  assert.notEqual(checksumPayload({ level: 4 }), checksumPayload({ level: 9 }));
});

test("reward and score integrity helpers reject duplicates and impossible values", () => {
  const rewards = dedupeRewards([
    { id: "a", coins: 10, xp: 20, reason: "clear", at: 1 },
    { id: "a", coins: 10, xp: 20, reason: "clear", at: 2 },
  ]);
  assert.equal(rewards.length, 1);
  assert.equal(impossibleScore(101, 1), true);
  assert.equal(impossibleScore(100, 1), false);
});
