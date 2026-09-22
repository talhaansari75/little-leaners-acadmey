export type QACategory =
  | "learning"
  | "games"
  | "audio"
  | "offline"
  | "payments"
  | "auth"
  | "parents"
  | "accessibility"
  | "security"
  | "performance"
  | "pwa"
  | "data"
  | "release";

export type QAItem = {
  id: string;
  title: string;
  category: QACategory;
  description: string;
  automated?: "online" | "storage" | "indexeddb" | "service-worker" | "viewport" | "touch" | "audio" | "fullscreen";
};

const AUTOMATED_BY_TITLE: Record<string, QAItem["automated"]> = {
  "Offline startup": "online",
  "Offline learning pack": "storage",
  "Offline save": "storage",
  "IndexedDB storage": "indexeddb",
  "Network recovery": "online",
  "Touch targets": "touch",
  "Audio fallback": "audio",
  "Service worker": "service-worker",
  "Mobile viewport": "viewport",
};

export const QA_ITEMS: QAItem[] = [
  ["learning","Learning activities","All learning activities open and complete without crashes."],
  ["learning","Class selection","Changing class updates the available learning content."],
  ["learning","Age-appropriate content","Age selection changes the intended difficulty/content."],
  ["learning","Progress tracking","Completed activities update progress, stars and XP."],
  ["learning","Mission rewards","Daily mission completion grants the configured reward."],
  ["learning","Skill mastery","Learning results are reflected in skill/mastery data."],
  ["games","Game launch","Every game mode can be opened from its entry point."],
  ["games","Game completion","Successful rounds record completion exactly once."],
  ["games","Difficulty modes","Gentle, steady and challenge modes remain playable."],
  ["games","Adaptive difficulty","Difficulty can respond to recent learner performance."],
  ["games","Daily challenges","Daily challenge content is deterministic for the day."],
  ["games","Achievements","Achievement progress and rewards remain consistent."],
  ["games","Streaks","Streak state survives reload and day transitions correctly."],
  ["games","Rewards","Coins, stars and XP cannot become negative through normal play."],
  ["games","Hints","Hints deduct the correct resource and do not double-charge."],
  ["audio","Animal sounds","Bundled animal sounds play from the Sounds area."],
  ["audio","Speech","Text-to-speech fallback works when available."],
  ["audio","Music controls","Music can be turned on/off without breaking activities."],
  ["audio","SFX controls","Sound effects can be turned on/off."],
  ["audio","Haptics","Haptic preference is respected when supported."],
  ["audio","Audio fallback","Missing audio assets fail gracefully."],
  ["offline","Offline startup","The core academy remains usable without network access.","online"],
  ["offline","Offline learning pack","Offline pack can be prepared and reopened.","storage"],
  ["offline","Offline save","Local progress survives a reload.","storage"],
  ["offline","IndexedDB storage","IndexedDB is available for offline data.","indexeddb"],
  ["offline","Network recovery","Returning online does not discard local progress.","online"],
  ["offline","Sync conflict handling","Local and remote progress have a deterministic merge policy."],
  ["offline","Cache recovery","A failed cached asset does not permanently break navigation."],
  ["payments","Premium gate","Premium content remains gated until entitlement is confirmed."],
  ["payments","Checkout launch","Checkout errors show a recoverable state."],
  ["payments","Duplicate payment protection","Repeated payment requests cannot create duplicate charges."],
  ["payments","Webhook verification","Only verified payment events change entitlement."],
  ["payments","Payment history","Receipts/status remain consistent with server state."],
  ["payments","Subscription state","Active, expired and cancelled states render correctly."],
  ["payments","Offline payment safety","Offline mode never falsely confirms a payment."],
  ["auth","Parent sign-in","Valid parent credentials reach protected areas."],
  ["auth","Invalid sign-in","Invalid credentials fail without account enumeration."],
  ["auth","Session expiry","Expired sessions cannot access protected parent data."],
  ["auth","Logout","Logout removes protected access."],
  ["auth","Rate limiting","Repeated failed login attempts are throttled."],
  ["parents","Parent dashboard","Parent dashboard shows only linked child data."],
  ["parents","Child profiles","Multiple child profiles can be separated safely."],
  ["parents","Progress report","Parent report shows completed learning and trends."],
  ["parents","Learning goals","Parent goals can be viewed and updated."],
  ["parents","Time limits","Configured learning limits are enforced by the app."],
  ["parents","Quiet hours","Quiet/bedtime settings suppress intended activity modes."],
  ["parents","Content controls","Parent controls can restrict selected content."],
  ["parents","Purchase approval","Child flows cannot silently approve purchases."],
  ["parents","PIN recovery","Parent PIN reset/recovery has a safe path."],
  ["accessibility","Keyboard navigation","Interactive controls can be reached with keyboard input."],
  ["accessibility","Screen reader labels","Important controls have meaningful accessible names."],
  ["accessibility","Touch targets","Primary controls have usable touch targets.","touch"],
  ["accessibility","Reduced motion","Reduced-motion preference disables non-essential motion."],
  ["accessibility","High contrast","High-contrast mode keeps text and controls legible."],
  ["accessibility","Large text","Large-text mode does not clip core controls."],
  ["accessibility","RTL layout","RTL mode keeps navigation and content readable."],
  ["accessibility","Dyslexia-friendly option","If enabled, typography remains usable across screens."],
  ["security","Secret isolation","Production API/payment secrets are never stored in client UI."],
  ["security","Input validation","User-controlled fields are validated before persistence."],
  ["security","Save integrity","Corrupted/tampered save data is rejected or safely migrated."],
  ["security","Authorization boundary","Parent/admin endpoints enforce server-side authorization."],
  ["security","Error redaction","Production errors do not expose secrets or internal tokens."],
  ["performance","Startup performance","Initial academy screen loads without blocking the UI thread."],
  ["performance","Large catalog","Large learning catalogs remain responsive."],
  ["performance","Repeated navigation","Repeated route changes do not accumulate obvious listeners."],
  ["performance","Memory stability","Opening/closing activities does not continuously grow memory."],
  ["performance","60fps interactions","Core touch/drag interactions avoid unnecessary main-thread work."],
  ["pwa","Installability","The app exposes a valid installable PWA configuration."],
  ["pwa","Service worker","Service worker support is available in the browser.","service-worker"],
  ["pwa","App shell","The app shell can be reopened after installation/offline caching."],
  ["pwa","Update handling","A new service-worker version can be adopted safely."],
  ["data","Export save","A user can export local save data."],
  ["data","Import save","A valid exported save can be restored."],
  ["data","Invalid import","Invalid JSON/save versions fail safely."],
  ["data","Migration","Older save versions migrate without losing supported progress."],
  ["data","Reset progress","Reset requires the intended confirmation and clears supported local progress."],
  ["data","Cloud sync","Authenticated users can push/pull cloud progress."],
  ["release","Production build","Production build completes with no TypeScript errors."],
  ["release","Lint","Lint completes without errors."],
  ["release","Automated tests","The repository test suite completes successfully."],
  ["release","Mobile viewport","The primary experience works on a narrow phone viewport.","viewport"],
  ["release","Browser compatibility","Core flows work in supported Chromium/Firefox/Safari targets."],
  ["release","QA report","Test Lab can export the current QA state for release review."],
  ["release","Promotion gate","A feature cannot be marked ready while required checks are failing."],
].map(([category,title,description], i) => ({
  id: `qa-${String(i + 1).padStart(3, "0")}`,
  title,
  category: category as QACategory,
  description,
  automated: AUTOMATED_BY_TITLE[title],
} as QAItem));

export const QA_CATEGORY_META: Record<QACategory, { label: string; icon: string }> = {
  learning: { label: "Learning", icon: "📚" },
  games: { label: "Games", icon: "🎮" },
  audio: { label: "Audio", icon: "🔊" },
  offline: { label: "Offline", icon: "📴" },
  payments: { label: "Payments", icon: "💳" },
  auth: { label: "Authentication", icon: "🔐" },
  parents: { label: "Parents", icon: "👨‍👩‍👧" },
  accessibility: { label: "Accessibility", icon: "♿" },
  security: { label: "Security", icon: "🛡️" },
  performance: { label: "Performance", icon: "⚡" },
  pwa: { label: "PWA", icon: "📱" },
  data: { label: "Data", icon: "💾" },
  release: { label: "Release", icon: "🚀" },
};
