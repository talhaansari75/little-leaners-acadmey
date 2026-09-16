import assert from "node:assert/strict";
import test from "node:test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import {
  ANIMAL_LIBRARY,
  CLASS_AUDIO,
  LEARNING_PATHWAYS,
  STORY_BOOKS,
  WORD_CARDS,
  WORKSHEETS,
} from "./catalog.ts";

const publicRoot = resolve(process.cwd(), "public");

function onDisk(urlPath: string) {
  return existsSync(resolve(publicRoot, urlPath.replace(/^\//, "")));
}

test("exactly three learning pathways and no KG-1/KG-2", () => {
  assert.deepEqual(LEARNING_PATHWAYS, ["Nursery", "KG", "Montessori"]);
  assert.equal(LEARNING_PATHWAYS.length, 3);
  assert.equal(JSON.stringify(LEARNING_PATHWAYS).includes("KG-1"), false);
  assert.equal(JSON.stringify(LEARNING_PATHWAYS).includes("KG-2"), false);
});

test("every bundled animal, word, story, worksheet and class audio file exists", () => {
  assert.equal(ANIMAL_LIBRARY.length, 100);
  for (const animal of ANIMAL_LIBRARY) assert.equal(onDisk(animal.src), true, animal.src);
  for (const animal of ANIMAL_LIBRARY.filter((a) => a.sound)) assert.equal(onDisk(animal.sound!), true, animal.sound);
  assert.equal(WORD_CARDS.length, 12);
  for (const word of WORD_CARDS) assert.equal(onDisk(word.src), true, word.src);
  assert.equal(STORY_BOOKS.flatMap((b) => b.pages).length, 20);
  for (const book of STORY_BOOKS) {
    for (const page of book.pages) assert.equal(onDisk(page.art), true, page.art);
  }
  for (const klass of LEARNING_PATHWAYS) {
    assert.equal(CLASS_AUDIO[klass].length, 4);
    for (const track of CLASS_AUDIO[klass]) assert.equal(onDisk(track.src), true, track.src);
    assert.equal(WORKSHEETS[klass].length, 3);
    for (const sheet of WORKSHEETS[klass]) assert.equal(onDisk(sheet.src), true, sheet.src);
  }
});

test("stories stay inside a single class pathway", () => {
  for (const book of STORY_BOOKS) {
    assert.ok(LEARNING_PATHWAYS.includes(book.className));
  }
  assert.equal(STORY_BOOKS.filter((b) => b.className === "Nursery").length, 2);
  assert.equal(STORY_BOOKS.filter((b) => b.className === "KG").length, 2);
  assert.equal(STORY_BOOKS.filter((b) => b.className === "Montessori").length, 1);
});
