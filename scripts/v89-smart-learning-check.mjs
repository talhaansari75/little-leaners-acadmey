import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const brain = await readFile(new URL("../src/lib/intelligence/learningBrain.ts", import.meta.url), "utf8");
const friend = await readFile(new URL("../src/components/v13/SmartLearningFriend.tsx", import.meta.url), "utf8");
const screen = await readFile(new URL("../src/components/v13/PreschoolLearningScreen.tsx", import.meta.url), "utf8");
const sw = await readFile(new URL("../public/sw.js", import.meta.url), "utf8");

test("V89 has an offline local adaptive learning brain", () => {
  assert.match(brain, /LEARNING_BRAIN_KEY/);
  assert.match(brain, /recordLearningSignal/);
  assert.match(brain, /recommendNext/);
  assert.match(brain, /CLASS_SKILLS/);
  assert.match(brain, /skillForActivity/);
  assert.match(brain, /Nursery/);
  assert.match(brain, /KG/);
  assert.match(brain, /Montessori/);
});

test("V89 Smart Learning Friend is surfaced in the academy", () => {
  assert.match(friend, /Offline Brain/);
  assert.match(friend, /Next best practice/);
  assert.match(friend, /local/);
  assert.match(screen, /SmartLearningFriend|AcademyWorld/);
});

test("V89 keeps offline academy assets cacheable", () => {
  assert.match(sw, /offline\/preschool/);
  assert.match(sw, /academy-magic-ai\.png/);
});

test("V89 does not introduce split KG class labels", () => {
  for (const text of [brain, friend, screen]) {
    assert.doesNotMatch(text, /KG-1|KG-2/);
  }
});
