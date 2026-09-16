import assert from "node:assert/strict";
import test from "node:test";
import {
  CLASS_SKILLS,
  emptyLearningProfile,
  recommendNext,
  recordLearningSignal,
  skillForActivity,
} from "./learningBrain.ts";

test("class-to-skill mappings stay inside the selected class", () => {
  assert.ok(CLASS_SKILLS.Nursery.includes(skillForActivity("Nursery", "listen")));
  assert.ok(CLASS_SKILLS.KG.includes(skillForActivity("KG", "letters")));
  assert.ok(CLASS_SKILLS.Montessori.includes(skillForActivity("Montessori", "tracing")));
  assert.equal(CLASS_SKILLS.Nursery.includes("phonics"), false);
  assert.equal(CLASS_SKILLS.KG.includes("practical-life"), false);
});

test("adaptive difficulty actually changes with accuracy", () => {
  let profile = emptyLearningProfile();
  for (let i = 0; i < 4; i++) profile = recordLearningSignal(profile, "KG", "math", false, 1200, "game");
  const gentle = recommendNext(profile, "KG");
  assert.equal(gentle.difficulty, "gentle");
  profile = emptyLearningProfile();
  for (let i = 0; i < 4; i++) profile = recordLearningSignal(profile, "KG", "math", true, 800, "game");
  const challenge = recommendNext(profile, "KG");
  assert.equal(challenge.className, "KG");
  assert.notEqual(challenge.skill, "letters");
});

test("learning-mode performance uses accuracy, not raw counts", () => {
  let profile = emptyLearningProfile();
  for (let i = 0; i < 6; i++) profile = recordLearningSignal(profile, "Nursery", "colors", true, 500, "picture");
  for (let i = 0; i < 6; i++) profile = recordLearningSignal(profile, "Nursery", "rhymes", false, 500, "audio");
  const rec = recommendNext(profile, "Nursery");
  assert.equal(rec.className, "Nursery");
  assert.ok(CLASS_SKILLS.Nursery.includes(rec.skill));
  assert.ok(["picture", "audio", "game", "story", "hands-on"].includes(rec.mode));
});
