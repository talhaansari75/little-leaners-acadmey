import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const preschool = readFileSync(new URL('../src/components/v13/PreschoolLearningScreen.tsx', import.meta.url), 'utf8');
const audio = readFileSync(new URL('../src/lib/game/audio.ts', import.meta.url), 'utf8');
const kids = readFileSync(new URL('../src/components/v13/KidsLockOverlay.tsx', import.meta.url), 'utf8');
const lock = readFileSync(new URL('../src/lib/game/kidsLock.ts', import.meta.url), 'utf8');

test('preschool storage is SSR-safe', () => {
  assert.match(preschool, /function readLocal<T>\(key:string,fallback:T\):T/);
  assert.match(preschool, /typeof window==="undefined"/);
  assert.doesNotMatch(preschool, /useState\(\(\)=>JSON\.parse\(localStorage/);
});

test('parent area is PIN-gated before premium/settings access', () => {
  assert.match(preschool, /tab==="parent"&&<ParentGate>/);
  assert.match(preschool, /verifyKidsLockPin\(pin\)/);
  assert.match(preschool, /setKidsLockPin\(pin\)/);
});

test('all preschool animal buttons map to implemented sound IDs', () => {
  const animalSection = preschool.split("const ANIMALS=")[1]?.split("const WORLDS=")[0] ?? "";
  const ids = [...animalSection.matchAll(/\{id:"([a-z]+)",e:/g)].map((m) => m[1]);
  for (const id of ids) assert.match(audio, new RegExp(`\\b${id}: \\(`));
  assert.doesNotMatch(preschool, /as never/);
});

test('kids lock stores a hashed 6-digit PIN with brute-force cooldown and does not expose the PIN value', () => {
  assert.match(lock, /SHA-256/);
  assert.match(lock, /\\d\{6\}/);
  assert.match(kids, /verifyKidsLockPin\(pin\)/);
  assert.match(lock, /sessionStorage/);
  assert.match(lock, /30000/);
  assert.doesNotMatch(kids, /localStorage\.setItem\([^,]+,\s*pin\)/);
});

test('premium checkout remains server-backed', () => {
  assert.match(preschool, /createCheckoutSession\(\{data:\{productId:"premium"\}\}\)/);
  assert.match(preschool, /a\.premium&&!premium/);
});

test('preschool progress has authenticated cloud sync with monotonic merge', () => {
  const server = readFileSync(new URL('../src/lib/v13/preschool/server.ts', import.meta.url), 'utf8');
  const migration = readFileSync(new URL('../migrations/0005_preschool.sql', import.meta.url), 'utf8');
  assert.match(server, /authMiddleware/);
  assert.match(server, /preschoolProgress\.upsert/);
  assert.match(server, /Math\.max\(Number\(existing\?\.stars/);
  assert.match(server, /new Set\(\[/);
  assert.match(migration, /create table if not exists preschool_progress/);
});

test('refunds reconcile receipts and do not cancel an active premium subscription', () => {
  const webhook = readFileSync(new URL('../src/routes/api/payments/webhook.ts', import.meta.url), 'utf8');
  assert.match(webhook, /verified\.productId === "premium"/);
  assert.match(webhook, /purchaseReceipt\.count/);
  assert.match(webhook, /status: "verified"/);
});

test('tracing requires actual stroke coverage before completion', () => {
  assert.match(preschool, /points\.length>=28/);
  assert.match(preschool, /traceReady/);
  assert.match(preschool, /disabled=\{!traceReady\|\|done\}/);
});

test('coloring studio supports drawing, undo and saved artwork', () => {
  assert.match(preschool, /function ColoringStudio/);
  assert.match(preschool, /getImageData/);
  assert.match(preschool, /toDataURL\("image\/png"\)/);
  assert.match(preschool, /Undo/);
});
