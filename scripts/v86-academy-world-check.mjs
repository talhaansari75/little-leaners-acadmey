import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
const root=process.cwd();
const world=fs.readFileSync(path.join(root,'src/components/v13/AcademyWorld.tsx'),'utf8');
const hub=fs.readFileSync(path.join(root,'src/components/v13/AdvancedPreschoolHub.tsx'),'utf8');
const screen=fs.readFileSync(path.join(root,'src/components/v13/PreschoolLearningScreen.tsx'),'utf8');
test('V86 academy has exactly three pathways',()=>{
 assert.match(world,/"Nursery"/); assert.match(world,/"KG"/); assert.match(world,/"Montessori"/);
 assert.doesNotMatch(world,/KG-1|KG-2/); assert.match(world,/Three separate pathways/);
});
test('V86 academy keeps class-specific rooms and subjects',()=>{
 assert.match(world,/Rainbow Garden/); assert.match(world,/KG Classroom/); assert.match(world,/Montessori Garden/);
 assert.match(world,/Practical Life/); assert.match(world,/Phonics & CVC/); assert.match(world,/Counting 1–10/);
});
test('V86 academy UI is wired into preschool home and class hub',()=>{
 assert.match(screen,/AcademyWorld/); assert.match(world,/My Academy/);
 assert.match(hub,/Three Learning Pathways/); assert.match(hub,/\["Nursery","KG","Montessori"\]/);
});
console.log('V86 academy world checks: PASS');
