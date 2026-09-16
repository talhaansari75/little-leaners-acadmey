# Mera World Systems Audit

This release uses the SQL migration source in `migrations/`, the custom Prisma-compatible data layer in `src/lib/prisma.ts`, and TanStack Start server functions. The former Prisma migration fixture directory is intentionally not part of this architecture.

## Verified systems
- Auth and user-scoped server functions
- Cloud saves and conflict checks
- Server-authoritative gameplay settlement
- Idempotent payment events and entitlements
- PWA/service-worker shell
- Preschool learning, Kids Lock, offline catalogue and Premium gating

## Known platform limitation
A normal web/PWA app cannot prevent OS-level Home/Recent Apps navigation. Android Screen Pinning or managed kiosk mode is required for device lockdown.
