# Little Learners Academy V91 — Audit Fix Pass

## Fixed
- Offline Service Worker no longer fails installation because of individual missing assets; each bundled asset is cached independently.
- Removed stale/missing word-audio precache entries and precached the actual bundled preschool asset inventory.
- Parent PIN gate is required before starting a Premium checkout from the child learning screen.
- Nursery, KG, and Montessori now filter the main activity launcher through class-specific activity allowlists.
- Class completion keys are namespaced by class to prevent cross-class progress leakage.
- Class curriculum hub now has three explicit pathways and Montessori has its own curriculum data.
- Smart Journey can dispatch a class-valid activity launcher event into the main learning screen.
- Academy mission reward callback now grants persistent stars/XP and prevents duplicate reward taps.
- Academy progress shown in the class world is scoped to the selected class.
- Offline Pack action now signals the Service Worker to cache the complete bundled preschool asset shell.

## Verification
- 287/287 static/project tests passed.
- V91 audit-fix checks: 5/5 passed.
- V84/V85/V86/V90 regression checks passed.
- Full npm test was attempted, but the repository has no installed `node_modules`; the TypeScript test phase therefore cannot be treated as a production build verification in this environment.
