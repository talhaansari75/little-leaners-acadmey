import { describe, expect, test } from "vitest";
import {
  LEARNING_PATHWAYS,
  CLASS_AUDIO,
  WORKSHEETS,
  STORY_BOOKS,
} from "./catalog";

describe("academy catalog", () => {
  test("has exactly five learning pathways", () => {
    expect(LEARNING_PATHWAYS).toEqual([
      "Montessori",
      "Nursery",
      "KG",
      "KG",
      "Montessori",
    ]);
  });

  test("audio is separated by every class", () => {
    for (const className of LEARNING_PATHWAYS) {
      expect(Array.isArray(CLASS_AUDIO[className])).toBe(true);
    }
  });

  test("worksheets are separated by every class", () => {
    for (const className of LEARNING_PATHWAYS) {
      expect(Array.isArray(WORKSHEETS[className])).toBe(true);
    }
  });

  test("stories only use valid classes", () => {
    for (const story of STORY_BOOKS) {
      expect(LEARNING_PATHWAYS).toContain(story.className);
    }
  });
});
