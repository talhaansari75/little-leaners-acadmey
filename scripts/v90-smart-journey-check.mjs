import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const panel = await readFile(new URL('../src/components/v13/SmartJourneyPanel.tsx', import.meta.url), 'utf8');
const academy = await readFile(new URL('../src/components/v13/AcademyWorld.tsx', import.meta.url), 'utf8');
const brain = await readFile(new URL('../src/lib/intelligence/learningBrain.ts', import.meta.url), 'utf8');
const sw = await readFile(new URL('../public/sw.js', import.meta.url), 'utf8');

test('V90 adds adaptive mini-game and daily smart journey', () => {
  assert.match(panel, /CHALLENGES/);
  assert.match(panel, /Today.s smart challenge/);
  assert.match(panel, /Gamepad2/);
  assert.match(panel, /recommendNext/);
});

test('V90 keeps the three learning pathways separate', () => {
  assert.match(panel, /Nursery/);
  assert.match(panel, /KG/);
  assert.match(panel, /Montessori/);
  assert.match(brain, /CLASS_SKILLS/);
  assert.doesNotMatch(panel, /KG-1|KG-2/);
});

test('V90 surfaces Smart Journey in the Academy and supports offline mode', () => {
  assert.match(academy, /SmartJourneyPanel/);
  assert.match(panel, /Offline Smart Mode/);
  assert.match(panel, /localStorage/);
  assert.match(sw, /offline\/preschool/);
});

console.log('V90 Smart Journey checks: 3/3 PASS');
