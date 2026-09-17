import { describe, expect, test } from "vitest";
import {
  CLASS_SKILLS,
  emptyLearningProfile,
  recordLearningSignal,
  recommendNext,
  skillForActivity,
} from "./learningBrain";

describe("learning brain", () => {
  test("has five independent class skill maps", () => {
    expect(Object.keys(CLASS_SKILLS)).toEqual([
      "Playgroup",
      "Nursery",
      "KG-1",
      "KG-2",
      "Class 1",
    ]);
  });

  test("skills stay isolated between classes", () => {
    let profile = emptyLearningProfile();

    profile = recordLearningSignal(
      profile,
      "KG-1",
      "phonics",
      true,
      500,
      "picture",
    );

    expect(profile.byClass["KG-1"].phonics.attempts).toBe(1);
    expect(profile.byClass.Nursery.phonics).toBeUndefined();
  });

  test("activity skills map to the selected class", () => {
    expect(
      CLASS_SKILLS["KG-1"].includes(
        skillForActivity("KG-1", "letters"),
      ),
    ).toBe(true);

    expect(
      CLASS_SKILLS["KG-2"].includes(
        skillForActivity("KG-2", "math"),
      ),
    ).toBe(true);

    expect(
      CLASS_SKILLS["Class 1"].includes(
        skillForActivity("Class 1", "tracing"),
      ),
    ).toBe(true);
  });

  test("recommendation belongs to requested class", () => {
    const profile = emptyLearningProfile();
    const recommendation = recommendNext(profile, "Playgroup");

    expect(recommendation.className).toBe("Playgroup");
    expect(CLASS_SKILLS.Playgroup).toContain(recommendation.skill);
  });
});
