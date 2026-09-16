import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const p='src/components/v13/AdvancedPreschoolHub.tsx';
const s=fs.readFileSync(p,'utf8');
test('advanced preschool hub contains smart learning, bilingual words, stories, maths and rewards',()=>{
  for (const token of ['Smart Learning Lab','English + Urdu Words','Animal Explorer','Math Mini Quest','Story Time','Reward Garden']) assert.ok(s.includes(token), token);
});
test('advanced preschool hub bundles a large discovery catalogue',()=>{
  const entries=(s.match(/\["[^\"]+","[^\"]+"\]/g)||[]).length;
  assert.ok(entries>=100, `expected >=100 catalogue pairs, got ${entries}`);
});
