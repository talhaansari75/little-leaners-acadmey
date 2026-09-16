import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const animalDir=path.join(root,'public','offline','preschool','audio','animals');
test('preschool animal sounds are bundled locally',()=>{
 const ids=['lion','elephant','tiger','fox','wolf','monkey','frog','snake','crocodile','bear','panda','parrot','owl','eagle','penguin','flamingo','duck','peacock','chicken','bee'];
 for(const id of ids){ const p=path.join(animalDir,`${id}.wav`); assert.ok(fs.existsSync(p),`missing ${id}`); assert.ok(fs.statSync(p).size>1000); }
});
test('audio code points animal playback at the local offline asset path',()=>{
 const src=fs.readFileSync(path.join(root,'src/lib/game/audio.ts'),'utf8');
 assert.match(src,/\/offline\/preschool\/audio\/animals\/\$\{id\}\.wav/);
});

test('service worker precaches every bundled preschool audio file',()=>{
 const sw=fs.readFileSync(path.join(root,'public','sw.js'),'utf8');
 const ids=['lion','elephant','tiger','fox','wolf','monkey','frog','snake','crocodile','bear','panda','parrot','owl','eagle','penguin','flamingo','duck','peacock','chicken','bee'];
 for(const id of ids) assert.match(sw,new RegExp(`/offline/preschool/audio/animals/${id}\\.wav`));
});
