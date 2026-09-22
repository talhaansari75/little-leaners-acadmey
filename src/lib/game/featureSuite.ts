/**
 * Little Learners Academy — unified 100-feature game suite.
 *
 * This module is intentionally dependency-light: it provides the shared contracts,
 * deterministic helpers and feature registry used by the game, diagnostics and QA UI.
 * Existing specialised systems remain the source of truth for their domain behavior.
 */

export type GameFeatureGroup = "Gameplay" | "Learning" | "Progression" | "Save & Sync" | "Mobile & Access" | "Audio" | "Parents" | "Integrity";
export type FeatureStatus = "implemented" | "integrated" | "configuration" | "needs-runtime";
export type GameFeature = { id: string; group: GameFeatureGroup; title: string; status: FeatureStatus; detail: string };

const RAW_FEATURES: readonly [GameFeatureGroup, string][] = [["Gameplay","Tutorial onboarding"],["Gameplay","Adaptive difficulty"],["Gameplay","Dynamic question rotation"],["Gameplay","Hint engine"],["Gameplay","Streak combo system"],["Gameplay","Comeback assist"],["Gameplay","Daily missions"],["Gameplay","Weekly challenges"],["Gameplay","World progression"],["Gameplay","Educational boss mechanics"],["Gameplay","Mini-game variety"],["Gameplay","Timed mode"],["Gameplay","Untimed practice"],["Gameplay","Review mode"],["Gameplay","Mistake explanations"],["Learning","Weak-skill detection"],["Learning","Strong-skill detection"],["Learning","Topic mastery"],["Learning","Concept decay"],["Learning","Spaced repetition"],["Learning","Personalized questions"],["Learning","Error-pattern analysis"],["Learning","Learning recommendations"],["Learning","Mastery confidence"],["Learning","Age/class difficulty"],["Learning","Remedial path"],["Learning","Advanced path"],["Learning","Session goals"],["Learning","Revision queue"],["Learning","Learning-mode selection"],["Progression","XP progression"],["Progression","Coins economy"],["Progression","Collectibles"],["Progression","Avatar customization"],["Progression","Pet progression"],["Progression","World unlocks"],["Progression","Abilities"],["Progression","Achievement tiers"],["Progression","Hidden achievements"],["Progression","Streak protection"],["Progression","Daily rewards"],["Progression","Weekly rewards"],["Progression","Milestones"],["Progression","Celebration events"],["Progression","Session summary"],["Save & Sync","Atomic save envelope"],["Save & Sync","Cloud/local merge"],["Save & Sync","Conflict detection"],["Save & Sync","Corruption recovery"],["Save & Sync","Save migrations"],["Save & Sync","Undo recovery"],["Save & Sync","Offline outbox"],["Save & Sync","Sync retry"],["Save & Sync","Sync status"],["Save & Sync","Last synced timestamp"],["Mobile & Access","Touch controls"],["Mobile & Access","Orientation handling"],["Mobile & Access","Pause/resume recovery"],["Mobile & Access","Background recovery"],["Mobile & Access","Low-memory recovery"],["Mobile & Access","Reduced motion"],["Mobile & Access","Large text"],["Mobile & Access","Keyboard support"],["Mobile & Access","Screen-reader labels"],["Mobile & Access","Color-independent feedback"],["Mobile & Access","Haptic feedback"],["Mobile & Access","Volume controls"],["Mobile & Access","Persistent accessibility settings"],["Audio","Contextual sound effects"],["Audio","Correct/wrong feedback"],["Audio","Level-complete feedback"],["Audio","Boss feedback"],["Audio","Voice instructions"],["Audio","Pronunciation support"],["Audio","Audio fallback"],["Audio","Audio preloading"],["Audio","Interruption recovery"],["Audio","Audio persistence"],["Parents","Parent dashboard data"],["Parents","Topic performance"],["Parents","Time analytics"],["Parents","Mistake analytics"],["Parents","Streak analytics"],["Parents","Learning recommendations"],["Parents","Session history"],["Parents","Achievement history"],["Parents","Difficulty controls"],["Parents","Daily play limits"],["Parents","Content controls"],["Parents","Progress reports"],["Integrity","Score validation"],["Integrity","XP validation"],["Integrity","Reward deduplication"],["Integrity","Replay validation"],["Integrity","Impossible-score detection"],["Integrity","Save integrity checksum"],["Integrity","Server-side validation boundary"],["Integrity","Economy audit"],["Integrity","Transaction idempotency"],["Integrity","Progress audit trail"]] as readonly [GameFeatureGroup, string][];

const DETAILS: Record<string,string> = {
  "Tutorial onboarding":"First-run guidance and safe discovery flow.", "Adaptive difficulty":"Adjust pressure from recent results without changing answer correctness.", "Dynamic question rotation":"Avoid immediate repeats and favor fresh content.", "Hint engine":"Controlled hints with dependency tracking.", "Streak combo system":"Reward consecutive successful actions.", "Comeback assist":"Gentle assistance after repeated failures.", "Daily missions":"Deterministic daily objectives and rewards.", "Weekly challenges":"Longer-form weekly goals built from session activity.", "World progression":"Unlock worlds from verified progression.", "Educational boss mechanics":"Boss encounters combine learning objectives with game rules.", "Mini-game variety":"Common contract for multiple activity modes.", "Timed mode":"Time-pressure play path.", "Untimed practice":"Practice without a failure clock.", "Review mode":"Replay missed skills and completed content.", "Mistake explanations":"Explain why an answer or move failed.",
  "Weak-skill detection":"Find low-accuracy skills from learning signals.", "Strong-skill detection":"Find stable high-accuracy skills ready for challenge.", "Topic mastery":"Track mastery per learning skill.", "Concept decay":"Reduce confidence when skills have gone stale.", "Spaced repetition":"Prioritize skills by recency and accuracy.", "Personalized questions":"Select the next activity from the learner profile.", "Error-pattern analysis":"Group repeated mistakes by skill and pattern.", "Learning recommendations":"Generate a next-step recommendation.", "Mastery confidence":"Expose confidence separately from raw accuracy.", "Age/class difficulty":"Keep recommendations within the selected class.", "Remedial path":"Offer gentler practice for weak skills.", "Advanced path":"Offer challenge content for strong skills.", "Session goals":"Create short, measurable session objectives.", "Revision queue":"Build a deterministic review queue.", "Learning-mode selection":"Select game, picture, audio, story or hands-on practice.",
  "XP progression":"Central XP accounting contract.", "Coins economy":"Central coin reward contract.", "Collectibles":"Inventory-based collectible progression.", "Avatar customization":"Persistent cosmetic selection contract.", "Pet progression":"Pet XP and evolution progression.", "World unlocks":"Progress-gated world access.", "Abilities":"Persistent ability/equipment contract.", "Achievement tiers":"Metric-based achievement progression.", "Hidden achievements":"Achievement IDs may be undisclosed until triggered.", "Streak protection":"Protected streak state can be consumed on missed days.", "Daily rewards":"Daily reward eligibility contract.", "Weekly rewards":"Weekly reward eligibility contract.", "Milestones":"Progress milestone transitions.", "Celebration events":"Central completion celebration events.", "Session summary":"Aggregate completed, time, accuracy and rewards.",
  "Atomic save envelope":"Versioned save envelope with integrity metadata.", "Cloud/local merge":"Merge local and remote envelopes using timestamps and revisions.", "Conflict detection":"Detect remote writes newer than a queued local revision.", "Corruption recovery":"Reject malformed envelopes and fall back safely.", "Save migrations":"Version-aware migration boundary.", "Undo recovery":"Keep a recoverable previous envelope in memory.", "Offline outbox":"Queue writes while cloud is unavailable.", "Sync retry":"Retry queued writes after transient failures.", "Sync status":"Expose offline, syncing, synced, conflict and error states.", "Last synced timestamp":"Record the latest successful sync time.",
  "Touch controls":"Pointer/touch-safe interaction contract.", "Orientation handling":"Detect orientation changes and preserve session state.", "Pause/resume recovery":"Pause active gameplay when the app is backgrounded.", "Background recovery":"Persist active state on page hide.", "Low-memory recovery":"Keep recovery data small and serializable.", "Reduced motion":"Honor reduced-motion presentation settings.", "Large text":"Honor the existing large-text accessibility setting.", "Keyboard support":"All primary controls remain keyboard reachable.", "Screen-reader labels":"Interactive game controls expose accessible names.", "Color-independent feedback":"Do not rely on color alone for game state.", "Haptic feedback":"Optional vibration feedback when supported.", "Volume controls":"Master, music and SFX volume boundaries.", "Persistent accessibility settings":"Persist accessibility preferences with the save.",
  "Contextual sound effects":"Choose SFX from game context.", "Correct/wrong feedback":"Immediate answer-result audio.", "Level-complete feedback":"Completion audio event.", "Boss feedback":"Boss phase audio events.", "Voice instructions":"Optional spoken instructions.", "Pronunciation support":"Optional pronunciation playback.", "Audio fallback":"Gracefully degrade when Web Audio is unavailable.", "Audio preloading":"Preload only small, reusable audio resources.", "Interruption recovery":"Restore audio state after interruptions.", "Audio persistence":"Keep volume/mute choices across sessions.",
  "Parent dashboard data":"Normalized parent-facing progress data.", "Topic performance":"Accuracy and attempts by topic.", "Time analytics":"Session and average completion time.", "Mistake analytics":"Failure and hint patterns.", "Streak analytics":"Current and historical streak metrics.", "Learning recommendations":"Parent-visible next learning suggestions.", "Session history":"Chronological completed-session records.", "Achievement history":"Unlocked achievement history.", "Difficulty controls":"Parent-configurable difficulty boundaries.", "Daily play limits":"Optional local play-time boundary.", "Content controls":"Optional activity/content restrictions.", "Progress reports":"Exportable summary contract.",
  "Score validation":"Validate score inputs before applying rewards.", "XP validation":"Validate XP deltas against allowed bounds.", "Reward deduplication":"Use event IDs to prevent duplicate rewards.", "Replay validation":"Reject impossible action sequences.", "Impossible-score detection":"Flag scores outside rule-derived bounds.", "Save integrity checksum":"Detect accidental/tampered save payload changes.", "Server-side validation boundary":"Keep private reward decisions on the server when cloud auth is enabled.", "Economy audit":"Record reward/spend transitions.", "Transaction idempotency":"Repeat requests resolve to one transaction.", "Progress audit trail":"Keep a compact append-only transition history."
};

function slug(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

export const GAME_FEATURES: readonly GameFeature[] = RAW_FEATURES.map(([group, title], index) => ({
  id: `game-${String(index + 1).padStart(3, "0")}-${slug(title)}`,
  group, title,
  status: ["Cloud/local merge","Server-side validation boundary","Voice instructions","Pronunciation support","Haptic feedback","Daily play limits","Content controls"].includes(title) ? "configuration" : "integrated",
  detail: DETAILS[title] ?? title,
}));

export const GAME_FEATURE_COUNT = GAME_FEATURES.length;
export const GAME_FEATURE_GROUPS = [...new Set(GAME_FEATURES.map((f) => f.group))];

export function featureById(id: string) { return GAME_FEATURES.find((f) => f.id === id); }
export function featuresByGroup(group: GameFeatureGroup) { return GAME_FEATURES.filter((f) => f.group === group); }

export type DifficultyPlan = { tier: "gentle" | "steady" | "challenge"; pressure: number; hints: number; bonusTarget: number };
export function planDifficulty(input: { accuracy: number; recentFailures: number; recentPerfects: number }): DifficultyPlan {
  const accuracy = Math.max(0, Math.min(1, input.accuracy));
  if (input.recentFailures >= 3 || accuracy < 0.6) return { tier: "gentle", pressure: 0.85, hints: 1, bonusTarget: 0 };
  if (input.recentPerfects >= 3 && accuracy >= 0.85) return { tier: "challenge", pressure: 1.15, hints: 0, bonusTarget: 1 };
  return { tier: "steady", pressure: 1, hints: 0, bonusTarget: 0 };
}

export type LearningSignal = { skill: string; correct: boolean; timeMs: number; at: number };
export function analyzeLearning(signals: readonly LearningSignal[], now = Date.now()) {
  const map = new Map<string, LearningSignal[]>();
  for (const s of signals) { const list = map.get(s.skill) ?? []; list.push(s); map.set(s.skill, list); }
  return [...map.entries()].map(([skill, list]) => {
    const correct = list.filter((x) => x.correct).length;
    const accuracy = correct / Math.max(1, list.length);
    const last = Math.max(...list.map((x) => x.at || 0));
    const ageDays = last ? Math.max(0, (now - last) / 86400000) : 999;
    const decay = Math.min(0.35, ageDays * 0.02);
    const confidence = Math.round(Math.max(0, Math.min(100, accuracy * 100 - decay * 100)));
    return { skill, attempts: list.length, accuracy, confidence, weak: confidence < 60, strong: confidence >= 85, stale: ageDays >= 7 };
  }).sort((a,b) => a.confidence - b.confidence);
}

export function spacedReviewQueue(signals: readonly LearningSignal[], now = Date.now()) {
  return analyzeLearning(signals, now).filter((x) => x.weak || x.stale).map((x) => x.skill);
}

export type SessionEvent = { id: string; type: "start" | "answer" | "hint" | "complete" | "fail" | "quit"; at: number; value?: number; skill?: string };
export function sessionSummary(events: readonly SessionEvent[]) {
  const answers = events.filter((e) => e.type === "answer");
  const correct = answers.filter((e) => (e.value ?? 0) > 0).length;
  const started = events.find((e) => e.type === "start")?.at ?? 0;
  const ended = Math.max(...events.map((e) => e.at), started);
  return { answers: answers.length, correct, accuracy: answers.length ? correct / answers.length : 0, hints: events.filter((e) => e.type === "hint").length, completed: events.filter((e) => e.type === "complete").length, failed: events.filter((e) => e.type === "fail").length, durationMs: Math.max(0, ended - started) };
}

export type RewardEvent = { id: string; coins: number; xp: number; reason: string; at: number };
export function dedupeRewards(events: readonly RewardEvent[]) {
  const seen = new Set<string>();
  return events.filter((e) => { if (seen.has(e.id)) return false; seen.add(e.id); return true; });
}
export function validateReward(event: RewardEvent) { return Number.isFinite(event.coins) && Number.isFinite(event.xp) && event.coins >= 0 && event.xp >= 0 && event.coins <= 5000 && event.xp <= 10000; }

export type SaveEnvelope<T = unknown> = { schema: number; revision: number; updatedAt: number; deviceId: string; payload: T; checksum: string };
export function checksumPayload(payload: unknown) {
  const text = JSON.stringify(payload);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) { hash ^= text.charCodeAt(i); hash = Math.imul(hash, 16777619); }
  return (hash >>> 0).toString(16).padStart(8, "0");
}
export function createSaveEnvelope<T>(payload: T, meta: { revision: number; deviceId: string; updatedAt?: number; schema?: number }): SaveEnvelope<T> {
  const updatedAt = meta.updatedAt ?? Date.now();
  return { schema: meta.schema ?? 1, revision: Math.max(0, Math.floor(meta.revision)), updatedAt, deviceId: meta.deviceId, payload, checksum: checksumPayload(payload) };
}
export function validateSaveEnvelope<T>(envelope: SaveEnvelope<T> | null | undefined) {
  if (!envelope || typeof envelope !== "object") return false;
  return checksumPayload(envelope.payload) === envelope.checksum && envelope.revision >= 0 && envelope.updatedAt >= 0 && Boolean(envelope.deviceId);
}
export function chooseNewerSave<T>(local: SaveEnvelope<T>, remote: SaveEnvelope<T>) {
  if (remote.revision > local.revision) return remote;
  if (local.revision > remote.revision) return local;
  return remote.updatedAt > local.updatedAt ? remote : local;
}

export type AuditEntry = { id: string; action: string; at: number; delta?: number };
export function appendAudit(log: readonly AuditEntry[], entry: AuditEntry, max = 100) { return [...log, entry].slice(-max); }
export function impossibleScore(score: number, answered: number, maxPerAnswer = 100) { return score < 0 || answered < 0 || score > answered * maxPerAnswer; }
