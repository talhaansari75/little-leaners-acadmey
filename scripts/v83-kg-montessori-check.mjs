import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const hub = fs.readFileSync(path.join(root, 'src/components/v13/AdvancedPreschoolHub.tsx'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/__grok/manifest.webmanifest'), 'utf8'));
const pack = JSON.parse(fs.readFileSync(path.join(root, 'public/offline/preschool/pack.json'), 'utf8'));

test('V83 preserves class and Montessori learning tracks', () => {
  for (const marker of ['section==="classes"', 'section==="montessori"', 'function ClassPathway', 'function MontessoriWorld', 'Practical Life', 'Sensorial', 'Language', 'Mathematics', 'Culture & Nature']) {
    assert.ok(hub.includes(marker), `missing marker: ${marker}`);
  }
  assert.deepEqual(pack.curriculum, ['preschool', 'kindergarten', 'montessori']);
  assert.ok(pack.learningTracks.kindergarten.length >= 5);
  assert.ok(pack.learningTracks.montessori.length >= 5);
});

test('V83 app branding is fully English', () => {
  assert.equal(manifest.short_name, 'Little Learners Academy');
  assert.equal(manifest.name, 'Little Learners Academy — Nursery, KG & Montessori');
  assert.equal(manifest.icons[0].src, '/favicon.svg');
  assert.equal(fs.existsSync(path.join(root, 'public/favicon.svg')), true);
  for (const file of ['src/components/screens/HomeScreens.tsx', 'src/components/v13/PreschoolLearningScreen.tsx']) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(text, /Mera Kids Academy/);
    assert.match(text, /Little Learners Academy/);
  }
});
