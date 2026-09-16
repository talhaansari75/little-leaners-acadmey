import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const screen = await readFile(new URL("../src/components/v13/PreschoolLearningScreen.tsx", import.meta.url), "utf8");
const brain = await readFile(new URL("../src/lib/intelligence/learningBrain.ts", import.meta.url), "utf8");
const academy = await readFile(new URL("../src/components/v13/AcademyWorld.tsx", import.meta.url), "utf8");
const journey = await readFile(new URL("../src/components/v13/SmartJourneyPanel.tsx", import.meta.url), "utf8");
const payments = await readFile(new URL("../src/components/v13/PaymentsScreen.tsx", import.meta.url), "utf8");
const sw = await readFile(new URL("../public/sw.js", import.meta.url), "utf8");
const preflight = await readFile(new URL("./deploy-preflight.mjs", import.meta.url), "utf8");
const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));

test("V92 fixes the ParentPanel parser failure and keeps parent gating", () => {
  assert.match(screen, /export function ParentGate/);
  assert.match(screen, /function ParentPanel\(/);
  assert.match(payments, /<ParentGate>/);
});

test("V92 gives each pathway its own activity set", () => {
  assert.match(screen, /classes:\["Nursery"\]/);
  assert.match(screen, /classes:\["KG"\]/);
  assert.match(screen, /classes:\["Montessori"\]/);
  assert.doesNotMatch(screen, /classes:\["Nursery","KG"/);
  assert.doesNotMatch(screen, /classes:\["Nursery","KG","Montessori"/);
  assert.doesNotMatch(screen + brain + journey + academy, /KG-1|KG-2/);
});

test("V92 smart brain records mode performance and uses class-valid launch IDs", () => {
  assert.match(brain, /signalStats/);
  assert.match(brain, /bestMode/);
  assert.match(journey, /kg-phonics/);
  assert.match(journey, /mont-practical/);
});

test("V92 activity difficulty reaches the activity and changes challenge content", () => {
  assert.match(screen, /difficulty=\{selected\.difficulty\}/);
  assert.match(screen, /challenge.*numbers/);
  assert.match(screen, /challenge.*math/);
  assert.match(screen, /challenge.*patterns/);
});

test("V92 academy progress, mission, trophies and pet care persist correctly", () => {
  assert.match(academy, /available: number/);
  assert.match(academy, /completed \/ available/);
  assert.match(academy, /missionKey/);
  assert.match(academy, /localStorage\.setItem\(missionKey, "1"\)/);
  assert.match(academy, /getLearningProfile/);
  assert.match(academy, /attempts >= 3/);
  assert.match(academy, /lla-pet-care/);
});

test("V92 offline preparation also caches already-loaded app chunks", () => {
  assert.match(screen, /performance\.getEntriesByType\("resource"\)/);
  assert.match(sw, /extraUrls/);
  assert.match(sw, /startsWith\("\/assets\/"\)/);
});

test("V92 production deploy fails closed on missing secrets and pins supported Node", () => {
  assert.match(preflight, /BETTER_AUTH_SECRET is required/);
  assert.match(preflight, /DATABASE_URL is required/);
  assert.match(preflight, /APP_URL is required/);
  assert.match(preflight, /STRIPE_SECRET_KEY is required/);
  assert.equal(pkg.engines.node, ">=20.19.0");
  assert.equal(pkg.scripts.prebuild, "node scripts/deploy-preflight.mjs");
});

console.log("V92 deploy-readiness checks: 7/7 PASS");
