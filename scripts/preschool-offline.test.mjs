import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const animalDir = path.join(root, 'public', 'offline', 'preschool', 'animals');
const wordDir = path.join(root, 'public', 'offline', 'preschool', 'words');
const storyDir = path.join(root, 'public', 'offline', 'preschool', 'stories');

test('preschool offline pack bundles 100 animal pictures', () => {
  const files = fs.readdirSync(animalDir).filter((f) => f.endsWith('.svg'));
  assert.equal(files.length, 100);
});

test('preschool offline pack bundles word and story pictures', () => {
  assert.equal(fs.readdirSync(wordDir).filter((f) => f.endsWith('.svg')).length, 12);
  assert.equal(fs.readdirSync(storyDir).filter((f) => f.endsWith('.svg')).length, 20);
  assert.ok(fs.existsSync(path.join(root, 'public', 'offline', 'preschool', 'pack.json')));
});

test('service worker has dedicated offline preschool cache and offline asset routing', () => {
  const sw = fs.readFileSync(path.join(root, 'public', 'sw.js'), 'utf8');
  assert.match(sw, /little-learners-preschool-v5-offline/);
  assert.match(sw, /\/offline\/preschool\//);
  assert.match(sw, /mode === "navigate"/);
  assert.match(sw, /Never turn a failed API request into an HTML document/);
});

test('PWA manifest is locally bundled', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public', '__grok', 'manifest.webmanifest'), 'utf8'));
  assert.equal(manifest.start_url, '/');
  assert.equal(manifest.display, 'standalone');
  assert.ok(manifest.icons?.length);
});

test('service worker caches bundled preschool audio', () => {
  const sw = fs.readFileSync(path.join(root, 'public', 'sw.js'), 'utf8');
  assert.match(sw, /preschool.*audio|audio.*preschool/);
});
