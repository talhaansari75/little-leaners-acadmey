import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import test from 'node:test';

const root = process.cwd();
const hub = fs.readFileSync(path.join(root,'src/components/v13/AdvancedPreschoolHub.tsx'),'utf8');

test('V80 preschool world includes avatar, room, music and arcade systems',()=>{
  for (const token of ['MyLittleWorld','MusicWorld','MiniGames','mw-avatar','mw-room','AudioContext']) assert.ok(hub.includes(token), token);
});

test('V80 offline pack contains the complete local preschool asset groups',()=>{
  const base=path.join(root,'public/offline/preschool');
  assert.equal(fs.readdirSync(path.join(base,'animals')).filter(x=>x.endsWith('.svg')).length,100);
  assert.equal(fs.readdirSync(path.join(base,'audio/animals')).filter(x=>x.endsWith('.wav')).length,20);
  assert.equal(fs.readdirSync(path.join(base,'stories')).filter(x=>x.endsWith('.svg')).length,20);
  assert.equal(fs.existsSync(path.join(base,'pack.json')),true);
});
