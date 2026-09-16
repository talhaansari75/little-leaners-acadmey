import assert from 'node:assert/strict';
import fs from 'node:fs';

const component = fs.readFileSync('src/components/v13/AcademyWorld.tsx','utf8');
const sw = fs.readFileSync('public/sw.js','utf8');
const pack = JSON.parse(fs.readFileSync('public/offline/preschool/pack.json','utf8'));

assert.ok(fs.existsSync('public/offline/preschool/academy-magic-ai.png'), 'AI artwork must be bundled locally');
assert.match(component, /\/offline\/preschool\/academy-magic-ai\.png/);
assert.match(sw, /\/offline\/preschool\/academy-magic-ai\.png/);
assert.equal(pack.images?.offline, true);
assert.match(component, /type AcademyClass = "Nursery" \| "KG" \| "Montessori"/);
assert.match(component, /const CLASSES:[\s\S]*Nursery:[\s\S]*KG:[\s\S]*Montessori:/);
assert.doesNotMatch(component, /KG-1|KG-2/);
console.log('V88 AI artwork/offline checks: 5/5 PASS');
