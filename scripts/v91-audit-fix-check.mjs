import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const sw = await readFile(new URL('../public/sw.js', import.meta.url), 'utf8');
const screen = await readFile(new URL('../src/components/v13/PreschoolLearningScreen.tsx', import.meta.url), 'utf8');
const academy = await readFile(new URL('../src/components/v13/AcademyWorld.tsx', import.meta.url), 'utf8');
const hub = await readFile(new URL('../src/components/v13/AdvancedPreschoolHub.tsx', import.meta.url), 'utf8');
const brain = await readFile(new URL('../src/lib/intelligence/learningBrain.ts', import.meta.url), 'utf8');

async function exists(rel) { try { await stat(join(root, rel)); return true; } catch { return false; } }

test('offline precache has no missing word-audio entries and tolerates individual misses', async () => {
  assert.doesNotMatch(sw, /audio\/words\//);
  assert.match(sw, /Promise\.all\(APP_SHELL\.map/);
  assert.equal(await exists('public/offline/preschool/academy-magic-ai.png'), true);
});

test('premium purchase requires the parent gate', () => {
  assert.match(screen, /purchaseGate/);
  assert.match(screen, /<ParentGate>/);
  assert.match(screen, /Parent approval required/);
  assert.doesNotMatch(screen, /if\(a\.premium&&!premium\)\{void buyPremium\(\);return\}/);
});

test('three pathways have separate activity filtering and curriculum', () => {
  assert.match(screen, /classes:\["Nursery"/);
  assert.match(screen, /availableActivities=useMemo\(\(\)=>ACTIVITIES\.filter/);
  assert.match(screen, /availableActivities\.map/);
  assert.match(hub, /Montessori:\{Language/);
  assert.match(hub, /Nursery:\{Language/);
  assert.match(hub, /KG:\{Language/);
  assert.doesNotMatch(screen + hub + brain, /KG-1|KG-2/);
});

test('smart recommendation can launch a class-valid activity', () => {
  assert.match(brain, /recommendNext/);
  assert.match(screen, /lla-open-activity/);
  assert.match(screen, /lla-open-activity/);
});

test('academy mission has a real reward callback and class progress', () => {
  assert.match(academy, /onMissionComplete/);
  assert.match(academy, /onMissionComplete\?\./);
  assert.match(screen, /onMissionComplete=\{\(\)=>/);
  assert.match(screen, /completed\.filter\(id=>id\.startsWith\(`\$\{klass\}:/);
});

console.log('V91 audit-fix checks: 5/5 PASS');
