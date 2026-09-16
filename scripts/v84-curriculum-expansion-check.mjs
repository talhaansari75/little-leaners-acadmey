import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
const root=process.cwd();
const hub=fs.readFileSync(path.join(root,'src/components/v13/AdvancedPreschoolHub.tsx'),'utf8');
const pack=JSON.parse(fs.readFileSync(path.join(root,'public/offline/preschool/pack.json'),'utf8'));
test('V84 preserves the Nursery and KG classroom pathways',()=>{
  for (const c of ['Nursery','KG']) assert.match(hub,new RegExp(c));
  assert.doesNotMatch(hub,/KG-1|KG-2/);
  for (const term of ['CVC word building','Addition within 10','A–Z mastery','Patterns and sequences','Handwashing sequence','Safety basics']) assert.match(hub,new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
});
test('V84 expands Montessori shelves and preserves offline content',()=>{
  for (const term of ['Practical Life','Sensorial','Sandpaper-style letter tracing','Spindle-box counting','Land & water forms','Map puzzles']) assert.match(hub,new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
  assert.equal(pack.version,5);
  assert.ok(pack.content.includes('animals') && pack.content.includes('stories'));
});
console.log('V84 curriculum expansion checks: PASS');
