import assert from "node:assert/strict";
import test from "node:test";
import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url);
const screen = await readFile(new URL("../src/components/v13/PreschoolLearningScreen.tsx", import.meta.url), "utf8");
const academy = await readFile(new URL("../src/components/v13/AcademyWorld.tsx", import.meta.url), "utf8");
const journey = await readFile(new URL("../src/components/v13/SmartJourneyPanel.tsx", import.meta.url), "utf8");
const rooms = await readFile(new URL("../src/components/academy/AcademyRooms.tsx", import.meta.url), "utf8");
const splash = await readFile(new URL("../src/components/screens/HomeScreens.tsx", import.meta.url), "utf8");
const app = await readFile(new URL("../src/components/app/GameApp.tsx", import.meta.url), "utf8");
const payments = await readFile(new URL("../src/components/v13/PaymentsScreen.tsx", import.meta.url), "utf8");
const catalog = await readFile(new URL("../src/lib/academy/catalog.ts", import.meta.url), "utf8");
const sw = await readFile(new URL("../public/sw.js", import.meta.url), "utf8");

test("opening enters the Academy, not the word-search hall", () => {
  assert.match(splash, /go\("preschool"\)/);
  assert.match(app, /PreschoolLearningScreen/);
  assert.match(splash, /Little Learners/);
  assert.match(splash, /LEARN|Learn/);
});

test("exactly three pathways with no KG-1/KG-2", () => {
  const blob = screen + academy + journey + catalog;
  assert.match(blob, /Nursery/);
  assert.match(blob, /Montessori/);
  assert.doesNotMatch(blob, /KG-1|KG-2|KG1|KG2/);
});

test("academy rooms are real destinations", () => {
  assert.match(academy, /lla-open-room/);
  assert.match(rooms, /ArtStudioRoom|Art Studio/);
  assert.match(rooms, /MusicRoom/);
  assert.match(rooms, /StoryTheaterRoom|Story Theater/);
  assert.match(rooms, /ScienceLabRoom|Mini Science Lab/);
  assert.match(rooms, /FeelingsRoom|Feelings Corner/);
  assert.match(rooms, /DailyLifeRoom|Daily Life/);
  assert.match(rooms, /WorkGalleryRoom|Work Gallery/);
  assert.match(rooms, /SchoolBusRoom|Magic School Bus/);
});

test("Smart Journey launches a class-valid activity with difficulty", () => {
  assert.match(journey, /difficulty: recommendation\.difficulty/);
  assert.match(journey, /kg-phonics/);
  assert.match(journey, /mont-practical/);
  assert.match(journey, /animals:"animals"/);
});

test("child-visible purchases stay parent-gated", () => {
  assert.match(payments, /<ParentGate>/);
  assert.match(screen, /Parent approval required/);
});

test("pet care and mission identity persist", () => {
  assert.match(academy, /lla-pet-care/);
  assert.match(academy, /missionKey/);
  assert.match(academy, /localStorage\.setItem\(missionKey, "1"\)/);
});

test("service worker caches preschool assets", () => {
  assert.match(sw, /offline\/preschool\/animals/);
  assert.match(sw, /offline\/preschool\/audio/);
  assert.match(sw, /offline\/preschool\/stories/);
});

async function collect(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await collect(path, acc);
    else acc.push(path);
  }
  return acc;
}

test("source asset counts match the bundled preschool pack", async () => {
  const files = await collect(new URL("../public/offline/preschool", import.meta.url).pathname);
  const svgs = files.filter((f) => extname(f) === ".svg");
  const wavs = files.filter((f) => extname(f) === ".wav");
  assert.equal(svgs.filter((f) => f.includes("/animals/")).length, 100);
  assert.equal(svgs.filter((f) => f.includes("/stories/")).length, 20);
  assert.equal(svgs.filter((f) => f.includes("/words/")).length, 12);
  assert.equal(wavs.length, 32);
});

console.log("V95 academy complete checks: PASS");
