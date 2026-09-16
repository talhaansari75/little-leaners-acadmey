# Mera World Preschool Complete Plus — Audit + Fix Report

## Fix pass
- Payment refunds now reconcile against remaining verified receipts for one-time products.
- Premium subscription entitlement is no longer revoked by a refunded subscription charge; subscription lifecycle events remain authoritative.
- Preschool progress now has authenticated cloud persistence with monotonic merge for completed activities, stars and XP.
- Added migration `0005_preschool.sql` and Prisma-compatible model mapping.
- Kids Lock now requires a new 6-digit PIN and adds a 5-failed-attempt / 30-second session cooldown.
- Tracing completion now requires minimum stroke count and coverage across the A template zones.
- Coloring Studio now provides a real canvas drawing workflow with colors, undo, clear and PNG local save.
- Parent/Kids Lock copy updated to the 6-digit policy.
- Added static audit coverage for the above fixes.

## Verification
- Script test suite: **249/249 PASS**.
- Preschool audit tests: **9/9 PASS**.
- Full TypeScript/build was not claimed as verified because the supplied archive does not contain `node_modules` and dependency installation was not completed in this environment.

## Remaining production considerations
- Animal/bird audio remains synthesized Web Audio, not licensed field recordings.
- Full offline media/content packs require actual bundled assets, not just catalogue metadata.
- Web Kids Lock cannot block OS Home/Recent Apps; managed kiosk/device pinning is required for that.
- Preschool cloud sync is account-scoped; the current UI still models one child profile per account rather than multiple child accounts.

## Preschool Advanced Upgrade — 2026-09-16

Added an Advanced Preschool Learning Hub with:
- adaptive-style daily learning plan using age, XP, and completed activity count
- English + Urdu picture vocabulary and speech prompts
- expanded bundled animal discovery catalogue (100+ cards)
- Math Mini Quest with counting/comparison/addition/subtraction/sequencing prompts
- three interactive short stories with narration
- reward garden progression
- dedicated Learn navigation tab
- offline-friendly static content (no network dependency for the catalogue)

Verification:
- `node --test 'scripts/**/*.test.mjs'` => 251 passed, 0 failed
- new `scripts/preschool-advanced.test.mjs` => 2 passed, 0 failed
- full TypeScript/Vite build remains environment-dependent and was not claimed as verified because dependencies are not bundled in the release archive.
