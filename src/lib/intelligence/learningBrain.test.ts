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
      "Montessori",
      "Nursery",
      "KG",
      "KG",
      "Montessori",
    ]);
  });

  test("skills stay isolated between classes", () => {
    let profile = emptyLearningProfile();

    profile = recordLearningSignal(
      profile,
      "KG",
      "phonics",
      true,
      500,
      "picture",
    );

    expect(profile.byClass["KG"].phonics.attempts).toBe(1);
    expect(profile.byClass.Nursery.phonics).toBeUndefined();
  });

  test("activity skills map to the selected class", () => {
    expect(
      CLASS_SKILLS["KG"].includes(
        skillForActivity("KG", "letters"),
      ),
    ).toBe(true);

    expect(
      CLASS_SKILLS["KG"].includes(
        skillForActivity("KG", "math"),
      ),
    ).toBe(true);

    expect(
      CLASS_SKILLS["Montessori"].includes(
        skillForActivity("Montessori", "tracing"),
      ),
    ).toBe(true);
  });

  test("recommendation belongs to requested class", () => {
    const profile = emptyLearningProfile();
    const recommendation = recommendNext(profile, "Montessori");

    expect(recommendation.className).toBe("Montessori");
    expect(CLASS_SKILLS.Montessori).toContain(recommendation.skill);
  });
});
