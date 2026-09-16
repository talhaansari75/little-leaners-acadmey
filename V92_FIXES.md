# Little Learners Academy V92

## Fixed
- Repaired the malformed `ParentPanel` JSX/parser error in `PreschoolLearningScreen.tsx`.
- Kept exactly three pathways: Nursery, KG, Montessori; no KG-1/KG-2.
- Made the main activity library class-specific: each activity belongs to exactly one pathway.
- Updated Smart Learning Brain activity-to-skill mappings so recorded skills are valid for the selected class.
- Added per-mode attempt/accuracy tracking and use of that data for learning-mode guidance.
- Smart Journey now launches the correct activity for the selected class and passes adaptive difficulty into the activity.
- Added gentle/steady/challenge content handling for key numeric/math/pattern activities.
- Fixed Academy progress to use the actual number of activities available in the selected class.
- Made daily Academy mission rewards idempotent per class/day using local storage.
- Added persistent virtual-pet care state: Feed, Play, Rest, with happiness/energy/fullness.
- Made Academy trophies class-specific and tied unlocks to demonstrated skill mastery.
- Wired Academy rooms and Magic Rooms to real class-valid learning activities.
- Wrapped the standalone Purchases & Entitlements screen in the parent PIN gate.
- Offline preparation now also asks the service worker to cache already-loaded app chunks, improving offline continuation after an online setup pass.
- Added V92 regression tests.

## Verification
- Static/regression suite: 293/293 PASS.
- TypeScript source syntax transpilation: changed TS/TSX files PASS.
- Full `tsc --noEmit` could not be completed in this environment because project dependencies/type packages were unavailable; `npm ci` timed out. No production build is claimed as verified.
