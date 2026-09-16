import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
const root=process.cwd();
const hub=fs.readFileSync(path.join(root,'src/components/v13/AdvancedPreschoolHub.tsx'),'utf8');
const pack=JSON.parse(fs.readFileSync(path.join(root,'public/offline/preschool/pack.json'),'utf8'));
const sw=fs.readFileSync(path.join(root,'public/sw.js'),'utf8');
const requiredAudio={nursery:4,kg:4,montessori:4};
const requiredSheets={nursery:3,kg:3,montessori:3};
test('V85 keeps only Nursery and KG classroom pathways',()=>{
 assert.match(hub,/Nursery/); assert.match(hub,/KG/); assert.doesNotMatch(hub,/KG-1|KG-2/);
 assert.match(hub,/mw-class-skills/); assert.match(hub,/Offline Worksheet Center/); assert.match(hub,/Offline Learning Audio/);
});
test('V85 has separate offline class audio and worksheets',()=>{
 for(const [group,count] of Object.entries(requiredAudio)){const files=fs.readdirSync(path.join(root,'public/offline/preschool/audio',group)).filter(x=>x.endsWith('.wav'));assert.equal(files.length,count,group)}
 for(const [group,count] of Object.entries(requiredSheets)){const files=fs.readdirSync(path.join(root,'public/offline/preschool/worksheets',group)).filter(x=>x.endsWith('.svg'));assert.equal(files.length,count,group)}
 assert.equal(pack.version,5); assert.deepEqual(Object.keys(pack.classes).sort(),['KG','Montessori','Nursery']);
 assert.match(sw,/little-learners-preschool-v5-offline/);
 for(const group of ['nursery','kg','montessori']) { assert.match(sw,new RegExp(`/offline/preschool/audio/${group}/`)); assert.match(sw,new RegExp(`/offline/preschool/worksheets/${group}/`)); }
});
console.log('V85 class-specific curriculum checks: PASS');
