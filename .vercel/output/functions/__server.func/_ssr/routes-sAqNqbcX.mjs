import { o as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-CYOSum86.mjs";
import { i as signOut, t as authClient } from "./client-Cd2ghEeK.mjs";
import { c as PLAY_KEY, o as HINT_COST, s as MAX_LEVEL, t as DAILY_REWARD_COINS } from "./constants-Dk3tQPVz.mjs";
import { c as isWord, n as CATEGORIES, o as WORD_COUNT, r as CATEGORY_IDS, s as categoryOf, t as ALL_WORDS } from "./words-CMOl5cGA.mjs";
import { a as nativeWordCount, c as validatePuzzle, i as mulberry32, l as validatePuzzleQuality, n as generatePuzzle, r as hashSeed, s as snapDir, t as cellsAlong } from "./generator-BwkHdlid.mjs";
import { a as mergeSaves, c as writeSave, i as loadSave, n as exportSave, o as migrateSave, r as importSave, s as observeCompletion, t as defaultSave } from "./persist-g9i-8HXf.mjs";
import { A as petXpFor, B as rewardCoins, C as personalizedRewardMultiplier, D as petProfile, F as puzzleForDaily, G as starsFor, H as specFor, I as puzzleForLevel, J as worldOf, K as targetTimeMs, L as recommendFor, M as playerLevel, N as profileFor, O as petUpgradeCost, P as puzzleEndless, Q as xpForLevel, R as recordLevelResult, S as personalizationEnabled, T as petEvolutionName, V as shortTermGoals, W as specialTilesForPuzzle, X as xpForClear, Y as worldRestoration, _ as journeyWorldProgress, a as WORLDS$1, b as movingPositions, d as dailyChallengeRewardMultiplier, f as energyEta, g as journeyWorldForLevel, h as isJourneyBoss, i as SPIN_TABLE, j as petXpProgress, k as petXpEarned, l as dailyChallengeFor, m as isBoss, n as JOURNEY_WORLDS, o as applyIntelligenceEvent, p as intelligenceAdaptivePlan, q as todayKey, r as SHOP, s as chestClaimed, t as ADVANCED_MODE_CATALOG, u as dailyChallengeObjective, w as petEffect, x as nextChallengePreview, y as modeRules, z as refillEnergy } from "./rewardPersonalization-vLhSEhhM.mjs";
import { a as hasGateSessionMarker } from "./server-CaehjQPx.mjs";
import { $ as LockKeyhole, A as Save, At as ChartLine, B as PawPrint$1, Bt as Baby, C as ShieldCheck, Ct as ClipboardCheck, D as ScrollText, Dt as ChevronLeft, E as Settings, Et as ChevronRight, F as Puzzle, Ft as Bus, G as Mic, H as Palette, Ht as Activity, I as Plus, It as Brain, J as Maximize2, K as MicOff, L as Play, Lt as BrainCircuit, M as RotateCcw, Mt as CalendarRange, N as RefreshCw, Nt as CalendarDays, O as ScanSearch, Ot as Check, P as Radio, Pt as Calculator, Q as Lock, R as Pencil, Rt as BookOpen, S as Shield, St as Clock3, T as Shapes, Tt as CircleAlert, U as PackageCheck, Ut as Accessibility, V as Pause, Vt as Archive, W as Music2, X as MapPin, Y as Map$1, Z as LogIn, _ as Sun, _t as Crown, a as WandSparkles, at as HardDrive, b as Smartphone, bt as Coins, c as User, ct as Gem, d as Trophy, dt as FlaskConical, et as Lightbulb, ft as Flag, g as Swords, gt as Download, h as Target, ht as Earth, i as WifiOff, it as Hash, j as Route, jt as Car, k as Scale, kt as ChartColumn, l as UserPlus, lt as Gauge, m as Timer, mt as Eye, n as X, nt as House, o as Volume2, ot as Hammer, p as Trash2, pt as FileCheck2, q as MessageCircle, r as Wrench, rt as Heart, s as Users, st as Gift, t as Zap, tt as Languages, u as Upload, ut as Gamepad2, v as Star, vt as CreditCard, w as ShieldAlert, wt as CircleCheck, x as ShoppingBag, xt as CloudOff, y as Sparkles, yt as Copy, z as PenTool, zt as Bell } from "../_libs/lucide-react.mjs";
import { a as STORY_BOOKS, c as WILD_MODES, d as animalArt, f as animalSound, g as wildAnimalArt, h as speakWildClue, i as MASCOT_ART, l as WORD_CARDS, m as saveWildProgress, n as ANIMAL_LIBRARY, o as WILD_ACHIEVEMENTS, p as loadWildProgress, r as CLASS_AUDIO, s as WILD_ANIMALS, t as ACADEMY_ART, u as WORKSHEETS } from "./wildWhispers-SLpIxgj3.mjs";
import { a as periodKey, c as unlockedAchievements, i as achievementProgress, n as MISSIONS$1, o as seasonKey$2, t as ACHIEVEMENTS } from "./seasonRules-DJspMrVl.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-sAqNqbcX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PETS$1 = [
	{
		id: "dog",
		name: "Inkhound",
		role: "Hints",
		blurb: "Noses the first letter once per puzzle.",
		coins: 0,
		diamonds: 0,
		perk: "hint"
	},
	{
		id: "cat",
		name: "Margin Cat",
		role: "Speed",
		blurb: "Trims a few seconds off the clock.",
		coins: 240,
		diamonds: 0,
		perk: "speed"
	},
	{
		id: "eagle",
		name: "Ridge Eagle",
		role: "Vision",
		blurb: "Reveals a distant cell at the start.",
		coins: 280,
		diamonds: 0,
		perk: "vision"
	},
	{
		id: "dragon",
		name: "Ember Drake",
		role: "Fire",
		blurb: "Bonus coins on perfect clears.",
		coins: 0,
		diamonds: 4,
		perk: "coins"
	},
	{
		id: "unicorn",
		name: "Luckhorn",
		role: "Luck",
		blurb: "Richer lucky-spin table.",
		coins: 360,
		diamonds: 0,
		perk: "luck"
	},
	{
		id: "wolf",
		name: "Pack Wolf",
		role: "Streak",
		blurb: "Streaks last through one miss.",
		coins: 300,
		diamonds: 0,
		perk: "streak"
	},
	{
		id: "fox",
		name: "Cipher Fox",
		role: "Smart",
		blurb: "Cheaper letter hints.",
		coins: 320,
		diamonds: 0,
		perk: "cheap"
	},
	{
		id: "turtle",
		name: "Quiet Turtle",
		role: "Zen",
		blurb: "Extra time in timed modes.",
		coins: 200,
		diamonds: 0,
		perk: "time"
	},
	{
		id: "owl",
		name: "Night Owl",
		role: "Night",
		blurb: "Fog mode is a little clearer.",
		coins: 260,
		diamonds: 0,
		perk: "fog"
	},
	{
		id: "dolphin",
		name: "Tide Dolphin",
		role: "Flow",
		blurb: "Energy refills a touch faster.",
		coins: 0,
		diamonds: 3,
		perk: "energy"
	}
];
function petById(id) {
	return PETS$1.find((p) => p.id === id);
}
/** Local preschool audio + procedural UI SFX. Unlocks on first gesture. */
var ctx = null;
var master = null;
var sfx = null;
var music = null;
var musicTimer = null;
var vol = {
	master: .8,
	sfx: .7,
	music: .45,
	sfxOn: true,
	musicOn: true
};
function curve(v) {
	return v * v;
}
function applyVolumes(next) {
	Object.assign(vol, next);
	if (master) master.gain.setTargetAtTime(curve(vol.master), ctx.currentTime, .03);
	if (sfx) sfx.gain.setTargetAtTime(vol.sfxOn ? curve(vol.sfx) : 0, ctx.currentTime, .03);
	if (music) music.gain.setTargetAtTime(vol.musicOn ? curve(vol.music) : 0, ctx.currentTime, .05);
}
function unlockAudio() {
	if (typeof window === "undefined") return;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return;
	if (!ctx) {
		ctx = new AC({ latencyHint: "interactive" });
		master = ctx.createGain();
		sfx = ctx.createGain();
		music = ctx.createGain();
		sfx.connect(master);
		music.connect(master);
		master.connect(ctx.destination);
		applyVolumes({});
	}
	if (ctx.state === "suspended") ctx.resume();
}
function beep(freq, dur, type, gain = .08, slide = 0) {
	if (!ctx || !sfx || !vol.sfxOn) return;
	const t = ctx.currentTime;
	const o = ctx.createOscillator();
	const g = ctx.createGain();
	o.type = type;
	o.frequency.setValueAtTime(freq, t);
	if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
	g.gain.setValueAtTime(gain, t);
	g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
	o.connect(g);
	g.connect(sfx);
	o.start(t);
	o.stop(t + dur + .02);
}
var sfxPlay = {
	tap: () => beep(620, .05, "triangle", .04),
	select: () => beep(480, .07, "sine", .05),
	found: (combo = 1) => {
		const base = combo >= 5 ? 660 : combo >= 3 ? 587 : 523;
		beep(base, .09, "triangle", .07);
		setTimeout(() => beep(base * 1.5, .12, "triangle", .06), 70);
	},
	miss: () => beep(180, .16, "sawtooth", .04, -80),
	win: () => {
		[
			523,
			659,
			784,
			1046
		].forEach((f, i) => setTimeout(() => beep(f, .16, "triangle", .07), i * 90));
	},
	coin: () => beep(980, .1, "square", .035, 200),
	hint: () => beep(440, .14, "sine", .05, 120),
	spin: () => beep(360, .08, "square", .04)
};
function startMusic(worldIndex = 0) {
	if (!ctx || !music || !vol.musicOn) return;
	stopMusic();
	const notes = [
		[
			196,
			247,
			294,
			330,
			392,
			330,
			294,
			247
		],
		[
			220,
			277,
			330,
			370,
			440,
			370,
			330,
			277
		],
		[
			146,
			185,
			220,
			277,
			330,
			277,
			220,
			185
		],
		[
			174,
			220,
			261,
			329,
			392,
			329,
			261,
			220
		],
		[
			196,
			233,
			293,
			349,
			440,
			349,
			293,
			233
		],
		[
			247,
			294,
			370,
			440,
			554,
			440,
			370,
			294
		]
	][Math.max(0, Math.min(5, worldIndex))];
	let i = 0;
	const step = () => {
		if (!ctx || !music || !vol.musicOn) return;
		const t = ctx.currentTime;
		const o = ctx.createOscillator();
		const g = ctx.createGain();
		o.type = "sine";
		o.frequency.value = notes[i % notes.length];
		g.gain.setValueAtTime(1e-4, t);
		g.gain.exponentialRampToValueAtTime(.035, t + .04);
		g.gain.exponentialRampToValueAtTime(1e-4, t + .7);
		o.connect(g);
		g.connect(music);
		o.start(t);
		o.stop(t + .75);
		i++;
		musicTimer = window.setTimeout(step, 780);
	};
	step();
}
function stopMusic() {
	if (musicTimer != null) {
		clearTimeout(musicTimer);
		musicTimer = null;
	}
}
function playBundledAudio(src) {
	unlockAudio();
	if (typeof window === "undefined") return null;
	const audio = new Audio(src);
	audio.preload = "auto";
	audio.volume = Math.min(1, curve(vol.master) * curve(vol.sfx));
	if (!vol.sfxOn) audio.volume = 0;
	audio.play().catch(() => {});
	return audio;
}
function playAnimalSound(id) {
	unlockAudio();
	if (typeof window !== "undefined") {
		const audio = new Audio(`/offline/preschool/audio/animals/${id}.wav`);
		audio.preload = "auto";
		audio.volume = Math.min(1, curve(vol.master) * curve(vol.sfx));
		audio.play().catch(() => {
			playProceduralAnimalSound(id);
		});
		return;
	}
	playProceduralAnimalSound(id);
}
function playProceduralAnimalSound(id) {
	unlockAudio();
	if (!ctx || !sfx || !vol.sfxOn) return;
	const now = ctx.currentTime;
	const tone = (frequency, duration, gain = .09, type = "sine", offset = 0) => {
		const o = ctx.createOscillator();
		const g = ctx.createGain();
		o.type = type;
		o.frequency.setValueAtTime(frequency, now + offset);
		g.gain.setValueAtTime(1e-4, now + offset);
		g.gain.exponentialRampToValueAtTime(gain, now + offset + .025);
		g.gain.exponentialRampToValueAtTime(1e-4, now + offset + duration);
		o.connect(g);
		g.connect(sfx);
		o.start(now + offset);
		o.stop(now + offset + duration + .03);
	};
	({
		lion: () => {
			tone(120, .45, .12, "sawtooth");
			tone(95, .5, .1, "sawtooth", .22);
		},
		elephant: () => {
			tone(180, .28, .1, "triangle");
			tone(330, .42, .08, "triangle", .18);
		},
		tiger: () => {
			tone(145, .35, .11, "sawtooth");
			tone(115, .35, .1, "sawtooth", .2);
		},
		fox: () => {
			tone(650, .12, .07, "square");
			tone(780, .15, .06, "square", .15);
		},
		wolf: () => {
			tone(310, .65, .1);
			tone(430, .5, .07, "sine", .25);
		},
		monkey: () => {
			tone(500, .12, .08, "square");
			tone(680, .12, .07, "square", .14);
			tone(520, .14, .07, "square", .29);
		},
		frog: () => {
			tone(230, .12, .08, "square");
			tone(160, .16, .07, "square", .15);
		},
		snake: () => {
			tone(900, .55, .035, "sawtooth");
			tone(700, .35, .025, "sawtooth", .22);
		},
		crocodile: () => {
			tone(105, .2, .1, "sawtooth");
			tone(85, .25, .08, "sawtooth", .18);
		},
		bear: () => {
			tone(135, .28, .1, "sawtooth");
			tone(105, .34, .08, "sawtooth", .2);
		},
		panda: () => {
			tone(210, .2, .07, "triangle");
			tone(260, .24, .06, "triangle", .16);
		},
		parrot: () => {
			tone(950, .12, .07, "square");
			tone(1250, .1, .06, "square", .13);
			tone(800, .14, .06, "square", .25);
		},
		owl: () => {
			tone(430, .28, .08);
			tone(330, .38, .07, "sine", .27);
		},
		eagle: () => {
			tone(1e3, .2, .055);
			tone(760, .3, .05, "sine", .18);
		},
		penguin: () => {
			tone(520, .12, .06, "triangle");
			tone(700, .16, .06, "triangle", .14);
		},
		flamingo: () => {
			tone(900, .08, .06, "square");
			tone(760, .08, .05, "square", .1);
			tone(900, .08, .05, "square", .2);
		},
		duck: () => {
			tone(520, .14, .07, "square");
			tone(410, .16, .06, "square", .16);
		},
		peacock: () => {
			tone(720, .12, .06, "triangle");
			tone(980, .18, .06, "triangle", .14);
			tone(820, .15, .05, "triangle", .32);
		},
		chicken: () => {
			tone(760, .1, .06, "square");
			tone(900, .08, .05, "square", .11);
			tone(680, .12, .05, "square", .22);
		},
		bee: () => {
			tone(170, .65, .055, "sawtooth");
			tone(205, .55, .035, "sawtooth", .08);
		}
	})[id]();
}
function sameCells(a, b) {
	if (a.length !== b.length) return false;
	return a.every(([r, c], i) => r === b[i]?.[0] && c === b[i]?.[1]);
}
function directionOf(cells) {
	if (cells.length < 2) return [0, 0];
	return [Math.sign(cells[1][0] - cells[0][0]), Math.sign(cells[1][1] - cells[0][1])];
}
function placementForPath(cells, placements) {
	return placements.find((p) => sameCells(cells, p.cells) || sameCells(cells, [...p.cells].reverse()));
}
function validateModePath(mode, cells, placements) {
	const placement = placementForPath(cells, placements);
	if (!placement) return { ok: true };
	const [dr, dc] = directionOf(cells);
	if (mode === "diagonal" && (Math.abs(dr) !== 1 || Math.abs(dc) !== 1)) return {
		ok: false,
		reason: "Diagonal paths only"
	};
	if (mode === "orthogonal" && !(dr === 0 || dc === 0)) return {
		ok: false,
		reason: "Horizontal/vertical paths only"
	};
	if (mode === "reverse_only") {
		if (sameCells(cells, placement.cells)) return {
			ok: false,
			reason: "Reverse direction required"
		};
	}
	return { ok: true };
}
var DIALOGUES = {
	ch1_intro: {
		id: "ch1_intro",
		speaker: "Mira the Archivist",
		text: "The meadow is waking. Every hidden word is part of an ancient map.",
		choices: [{
			id: "help",
			text: "I'll help you find the map.",
			next: "ch1_help",
			affinity: 2
		}, {
			id: "ask",
			text: "What happened here?",
			next: "ch1_help",
			affinity: 1
		}]
	},
	ch1_help: {
		id: "ch1_help",
		speaker: "Mira the Archivist",
		text: "Then begin with the first trail. Bring me your discoveries.",
		choices: [{
			id: "accept",
			text: "Quest accepted.",
			next: "end",
			reward: 50
		}]
	},
	ch2_intro: {
		id: "ch2_intro",
		speaker: "Rowan the Ranger",
		text: "The cedar forest changes when the wrong words are spoken.",
		choices: [{
			id: "careful",
			text: "I'll tread carefully.",
			next: "end",
			affinity: 2,
			reward: 60
		}, {
			id: "brave",
			text: "Let the forest test me.",
			next: "end",
			affinity: 1,
			reward: 40
		}]
	},
	ch3_intro: {
		id: "ch3_intro",
		speaker: "Orin the Climber",
		text: "The mountain keeps its oath to those who solve its inscriptions.",
		choices: [{
			id: "climb",
			text: "Show me the path.",
			next: "end",
			affinity: 2,
			reward: 80
		}]
	},
	ch4_intro: {
		id: "ch4_intro",
		speaker: "Safa the Cartographer",
		text: "The dunes erased my route. Your word trail can restore it.",
		choices: [{
			id: "map",
			text: "I'll restore the route.",
			next: "end",
			affinity: 2,
			reward: 100
		}]
	},
	ch5_intro: {
		id: "ch5_intro",
		speaker: "Lyra the Stargazer",
		text: "Look beyond the grid. The stars are spelling something.",
		choices: [{
			id: "stars",
			text: "I'll follow the stars.",
			next: "end",
			affinity: 2,
			reward: 120
		}]
	},
	ch6_intro: {
		id: "ch6_intro",
		speaker: "Aero the Keeper",
		text: "The Sky Archives are full of doors that open only to knowledge.",
		choices: [{
			id: "learn",
			text: "Knowledge is my key.",
			next: "end",
			affinity: 2,
			reward: 150
		}]
	},
	ch7_intro: {
		id: "ch7_intro",
		speaker: "Nyx the Warden",
		text: "The abyss feeds on forgotten words. Do not let it win.",
		choices: [{
			id: "stand",
			text: "I will stand against it.",
			next: "end",
			affinity: 3,
			reward: 200
		}]
	},
	ch8_intro: {
		id: "ch8_intro",
		speaker: "Atlas Prime",
		text: "You reached the final atlas. Now discover why this journey began.",
		choices: [{
			id: "final",
			text: "Reveal the truth.",
			next: "end",
			affinity: 5,
			reward: 500
		}]
	}
};
function dialogueForChapter(chapter) {
	return DIALOGUES[`ch${chapter}_intro`] ?? DIALOGUES.ch1_intro;
}
var MATERIALS = [
	{
		id: "wood",
		name: "Wood",
		baseValue: 2
	},
	{
		id: "stone",
		name: "Stone",
		baseValue: 3
	},
	{
		id: "crystal",
		name: "Crystal",
		baseValue: 8
	},
	{
		id: "iron",
		name: "Iron",
		baseValue: 10
	},
	{
		id: "gold",
		name: "Gold",
		baseValue: 20
	}
];
var BUILDINGS = {
	camp: {
		name: "Journey Camp",
		maxLevel: 10,
		baseCost: 100,
		effect: "Increases base energy capacity."
	},
	workshop: {
		name: "Workshop",
		maxLevel: 10,
		baseCost: 140,
		effect: "Improves crafting efficiency."
	},
	forge: {
		name: "Forge",
		maxLevel: 10,
		baseCost: 180,
		effect: "Unlocks stronger equipment."
	},
	library: {
		name: "Word Library",
		maxLevel: 10,
		baseCost: 160,
		effect: "Improves word discovery rewards."
	},
	treasury: {
		name: "Treasury",
		maxLevel: 10,
		baseCost: 220,
		effect: "Improves bonus coin rewards."
	}
};
function buildingUpgradeCost(id, level) {
	const b = BUILDINGS[id];
	if (level >= b.maxLevel) return null;
	return Math.floor(b.baseCost * Math.pow(1.35, level));
}
function materialValue(id, amount) {
	return (MATERIALS.find((x) => x.id === id)?.baseValue ?? 0) * Math.max(0, amount);
}
function craftEquipment(slot, level, materials) {
	const total = Object.entries(materials).reduce((sum, [id, amount]) => sum + materialValue(id, Number(amount)), 0);
	if (total < 30 + level * 15) return null;
	const rarity = total >= 500 ? "legendary" : total >= 250 ? "epic" : total >= 120 ? "rare" : "common";
	const multiplier = {
		common: 1,
		rare: 1.35,
		epic: 1.8,
		legendary: 2.5
	}[rarity];
	return {
		id: `crafted-${slot}-${Date.now()}`,
		name: `${rarity[0].toUpperCase() + rarity.slice(1)} ${slot}`,
		slot,
		level,
		power: Math.floor((10 + level * 7) * multiplier),
		rarity
	};
}
var EventBus = class {
	listeners = /* @__PURE__ */ new Map();
	on(event, listener) {
		let set = this.listeners.get(event);
		if (!set) {
			set = /* @__PURE__ */ new Set();
			this.listeners.set(event, set);
		}
		set.add(listener);
		return () => this.off(event, listener);
	}
	off(event, listener) {
		this.listeners.get(event)?.delete(listener);
	}
	emit(event, payload) {
		for (const listener of this.listeners.get(event) ?? []) listener(payload);
	}
	clear() {
		this.listeners.clear();
	}
};
var gameEvents = new EventBus();
var TelemetryBuffer = class {
	max;
	events = [];
	constructor(max = 500) {
		this.max = max;
	}
	track(name, props, context) {
		if (!name) return;
		this.events.push({
			name,
			at: Date.now(),
			props,
			...context
		});
		if (this.events.length > this.max) this.events.splice(0, this.events.length - this.max);
	}
	drain() {
		return this.events.splice(0);
	}
	snapshot() {
		return this.events.slice();
	}
};
var telemetry = new TelemetryBuffer();
var wired = false;
function wireGameTelemetry() {
	if (wired) return;
	wired = true;
	gameEvents.on("level:start", (e) => telemetry.track("level_start", e));
	gameEvents.on("word:found", (e) => telemetry.track("word_found", e));
	gameEvents.on("word:miss", (e) => telemetry.track("word_miss", e));
	gameEvents.on("level:complete", (e) => telemetry.track("level_complete", e));
	gameEvents.on("level:fail", (e) => telemetry.track("level_fail", e));
	gameEvents.on("save:changed", (e) => telemetry.track("save_changed", e));
}
var FixedWindowRateLimiter = class {
	buckets = /* @__PURE__ */ new Map();
	limit;
	windowMs;
	constructor(limit, windowMs) {
		this.limit = limit;
		this.windowMs = windowMs;
	}
	allow(key, now = Date.now()) {
		const current = this.buckets.get(key);
		if (!current || now >= current.resetAt) {
			this.buckets.set(key, {
				count: 1,
				resetAt: now + this.windowMs
			});
			return true;
		}
		if (current.count >= this.limit) return false;
		current.count += 1;
		return true;
	}
	retryAfter(key, now = Date.now()) {
		return Math.max(0, (this.buckets.get(key)?.resetAt ?? now) - now);
	}
};
function normalizeText(value, max = 200) {
	return typeof value === "string" ? value.normalize("NFKC").trim().slice(0, max) : "";
}
function safeId(value, max = 80) {
	const s = normalizeText(value, max);
	return /^[A-Za-z0-9._:-]+$/.test(s) ? s : null;
}
var gameplayLimiter = new FixedWindowRateLimiter(240, 6e4);
function validatePlayerAction(playerId, action) {
	const id = safeId(playerId);
	if (!id || !action || action.length > 64) throw new Error("invalid_action");
	if (!gameplayLimiter.allow(`${id}:${action}`)) throw new Error("rate_limited");
	return id;
}
var active = null;
function id$1() {
	return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function installGameplayBridge() {
	const unsubs = [
		gameEvents.on("level:start", (p) => {
			active = {
				sessionId: id$1(),
				startedAt: Date.now(),
				wordsFound: 0,
				wordsMissed: 0,
				completed: false
			};
			telemetry.track("v9_level_start", {
				level: p.level,
				mode: p.mode,
				seed: p.seed,
				sessionId: active.sessionId
			});
		}),
		gameEvents.on("word:found", (p) => {
			if (!active) return;
			active.wordsFound++;
			telemetry.track("v9_word_found", {
				word: p.word,
				index: p.index,
				combo: p.combo,
				sessionId: active.sessionId
			});
		}),
		gameEvents.on("word:miss", (p) => {
			if (!active) return;
			active.wordsMissed++;
			telemetry.track("v9_word_miss", {
				letters: p.letters,
				sessionId: active.sessionId
			});
		}),
		gameEvents.on("level:complete", (p) => {
			if (!active) return;
			active.completed = true;
			telemetry.track("v9_level_complete", {
				level: p.level,
				stars: p.stars,
				timeMs: p.timeMs,
				sessionId: active.sessionId,
				durationMs: Date.now() - active.startedAt,
				wordsFound: active.wordsFound,
				wordsMissed: active.wordsMissed
			});
			active = null;
		}),
		gameEvents.on("level:fail", (p) => {
			if (!active) return;
			telemetry.track("v9_level_fail", {
				level: p.level,
				reason: p.reason,
				sessionId: active.sessionId,
				durationMs: Date.now() - active.startedAt,
				wordsFound: active.wordsFound,
				wordsMissed: active.wordsMissed
			});
			active = null;
		})
	];
	return () => unsubs.forEach((u) => u());
}
var cleanup$2 = null;
function installV9Integrations() {
	if (!cleanup$2) cleanup$2 = installGameplayBridge();
	return cleanup$2;
}
var base = () => "http://localhost:8787";
var tokenKey = "mwsj.online.token";
var getToken = () => localStorage.getItem(tokenKey);
async function call(path, init = {}) {
	const headers = new Headers(init.headers);
	headers.set("content-type", "application/json");
	const t = getToken();
	if (t) headers.set("authorization", `Bearer ${t}`);
	const r = await fetch(base() + path, {
		...init,
		headers
	});
	const data = await r.json().catch(() => ({}));
	if (!r.ok) throw new Error(data.error || `HTTP ${r.status}`);
	return data;
}
async function apiLoadSave() {
	return call("/save");
}
async function apiSave(payload, version = 1, baseUpdatedAt = null, deviceId) {
	return call("/save", {
		method: "PUT",
		body: JSON.stringify({
			version,
			payload,
			baseUpdatedAt,
			deviceId
		})
	});
}
var META_KEY = "mwsj.cloud.meta";
var OUTBOX_KEY = "mwsj.cloud.outbox";
var deviceId = () => {
	const k = "mwsj.device.id";
	let id = localStorage.getItem(k);
	if (!id) {
		id = crypto.randomUUID();
		localStorage.setItem(k, id);
	}
	return id;
};
function readSyncMeta() {
	try {
		return JSON.parse(localStorage.getItem(META_KEY) || "") || {
			revision: 0,
			deviceId: deviceId(),
			updatedAt: 0
		};
	} catch {
		return {
			revision: 0,
			deviceId: deviceId(),
			updatedAt: 0
		};
	}
}
function writeMeta(m) {
	localStorage.setItem(META_KEY, JSON.stringify(m));
}
function queue() {
	try {
		return JSON.parse(localStorage.getItem(OUTBOX_KEY) || "[]");
	} catch {
		return [];
	}
}
function writeQueue(q) {
	localStorage.setItem(OUTBOX_KEY, JSON.stringify(q.slice(-10)));
}
function queueSave(payload, version = 1) {
	const m = readSyncMeta(), now = Date.now();
	const item = {
		payload,
		version,
		deviceId: m.deviceId,
		clientUpdatedAt: now,
		revision: m.revision + 1
	};
	writeMeta({
		revision: item.revision,
		deviceId: m.deviceId,
		updatedAt: now
	});
	const q = queue();
	q.push(item);
	writeQueue(q);
	return item;
}
async function syncCloud() {
	if (!getToken()) return {
		status: "offline",
		message: "Login required for cloud sync."
	};
	const q = queue();
	try {
		const remote = await apiLoadSave();
		if (!q.length) return {
			status: "synced",
			remote
		};
		const item = q[q.length - 1];
		if ((remote.updatedAt || 0) > item.clientUpdatedAt) return {
			status: "conflict",
			remote,
			message: "Remote save is newer. Local queued save was kept for review."
		};
		await apiSave(item.payload, item.version);
		writeQueue([]);
		return {
			status: "synced",
			remote: {
				version: item.version,
				payload: item.payload,
				updatedAt: Date.now()
			}
		};
	} catch (e) {
		return {
			status: "error",
			message: e?.message || "Cloud sync failed."
		};
	}
}
var KEY$6 = "mwsj.v18.mutations";
var read$2 = () => {
	try {
		return JSON.parse(localStorage.getItem(KEY$6) || "[]");
	} catch {
		return [];
	}
};
var write$2 = (q) => localStorage.setItem(KEY$6, JSON.stringify(q.slice(-100)));
function enqueueMutation(kind, payload) {
	const q = read$2();
	if (kind === "save") {
		const i = q.findIndex((x) => x.kind === "save");
		const item = {
			id: i >= 0 ? q[i].id : crypto.randomUUID(),
			kind,
			payload,
			createdAt: Date.now(),
			attempts: i >= 0 ? q[i].attempts : 0
		};
		if (i >= 0) q[i] = item;
		else q.push(item);
	} else q.push({
		id: crypto.randomUUID(),
		kind,
		payload,
		createdAt: Date.now(),
		attempts: 0
	});
	write$2(q);
	return q.length;
}
async function flushMutations() {
	if (!navigator.onLine) return {
		ok: false,
		flushed: 0,
		remaining: read$2().length,
		reason: "offline"
	};
	const q = read$2();
	let flushed = 0;
	const remain = [];
	for (const item of q) try {
		if (item.kind === "save") queueSave(item.payload);
		else remain.push(item);
		flushed++;
	} catch {
		item.attempts++;
		remain.push(item);
	}
	write$2(remain);
	const cloud = await syncCloud().catch(() => ({ status: "error" }));
	return {
		ok: true,
		flushed,
		remaining: remain.length,
		cloud
	};
}
function installOfflineMutationBridge() {
	const onOnline = () => void flushMutations();
	window.addEventListener("online", onOnline);
	return () => window.removeEventListener("online", onOnline);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var BOARDS = /* @__PURE__ */ new Set([
	"stars",
	"daily",
	"words"
]);
var getLeaderboard = createServerFn({ method: "GET" }).validator((board) => BOARDS.has(board) ? board : "stars").handler(createSsrRpc("da7c811256b020c57ac9eb1f7f3cc8354790bb23df3df0e1b611c40f89c82d3f"));
var submitScore = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	sessionId: String(d.sessionId ?? "").slice(0, 64),
	board: BOARDS.has(d.board) ? d.board : "stars"
})).handler(createSsrRpc("386132aadfcf0d2dd473368107b506023d01c0217383a58a7358f4f1a586b5d3"));
var submitDaily = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ sessionId: String(d.sessionId ?? "").slice(0, 64) })).handler(createSsrRpc("e595fb0c1f64001fbf0c680adcac401918332ca64da5f83bfc9edc5a8b9ba42c"));
var getDailyBoard = createServerFn({ method: "GET" }).validator((day) => String(day ?? "").slice(0, 16)).handler(createSsrRpc("e201e4b1ab6c9d61fd78aacea19e6952286bf36c09959c57d9131b0180866b0b"));
var KEY$5 = "mwsj.v18.leaderboard.outbox";
var read$1 = () => {
	try {
		return JSON.parse(localStorage.getItem(KEY$5) || "[]");
	} catch {
		return [];
	}
};
var write$1 = (q) => localStorage.setItem(KEY$5, JSON.stringify(q.slice(-50)));
async function flushLeaderboard() {
	if (!navigator.onLine) return {
		flushed: 0,
		remaining: read$1().length
	};
	const remain = [];
	let flushed = 0;
	for (const item of read$1()) try {
		if (item.kind === "score") await submitScore({ data: item.payload });
		else await submitDaily({ data: item.payload });
		flushed++;
	} catch {
		item.attempts++;
		remain.push(item);
	}
	write$1(remain);
	return {
		flushed,
		remaining: remain.length
	};
}
var cleanup$1;
function installV18Offline() {
	if (typeof window === "undefined") return;
	cleanup$1?.();
	cleanup$1 = installOfflineMutationBridge();
	const off = gameEvents.on("save:changed", () => {
		try {
			enqueueMutation("save", JSON.parse(useGame.getState().exportJson()));
		} catch {}
	});
	const onOnline = () => void flushLeaderboard();
	window.addEventListener("online", onOnline);
	flushLeaderboard();
	const old = cleanup$1;
	cleanup$1 = () => {
		old();
		off();
		window.removeEventListener("online", onOnline);
	};
}
var DEFAULT_ACTION_GUARD = {
	maxString: 64,
	maxCells: 64,
	maxFutureMs: 1e4
};
function validatePathInput(letters, cells, now = Date.now(), config = DEFAULT_ACTION_GUARD) {
	if (typeof letters !== "string" || letters.length < 1 || letters.length > config.maxString) return false;
	if (!Array.isArray(cells) || cells.length > config.maxCells) return false;
	return cells.every((c) => Array.isArray(c) && c.length === 2 && Number.isInteger(c[0]) && Number.isInteger(c[1]) && Math.abs(c[0]) < 100 && Math.abs(c[1]) < 100 && now + config.maxFutureMs >= now);
}
var seen = /* @__PURE__ */ new Map();
function acceptAction(sessionId, action, now = Date.now(), windowMs = 250) {
	const key = `${sessionId}:${action}`;
	const previous = seen.get(key);
	if (previous != null && now - previous < windowMs) return false;
	seen.set(key, now);
	if (seen.size > 2e3) {
		for (const [k, t] of seen) if (now - t > windowMs * 8) seen.delete(k);
	}
	return true;
}
var id = (v) => String(v ?? "").trim().slice(0, 80);
var claimAchievementServer = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ id: id(d.id) })).handler(createSsrRpc("7ae21670f29b43c4b05cda9c5c6f331d95cf456f0895a4826a9327833e181260"));
var claimMissionServer = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ id: id(d.id) })).handler(createSsrRpc("991382a8b9b94b821719d4689f497ab4ae6539243f9e3e2e9a844d4d39e9641c"));
var claimSeasonTierServer = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ level: Math.max(1, Math.min(10, Math.floor(Number(d.level)))) })).handler(createSsrRpc("686333f9fe67899be5e4be9c3f38c555f92744235274bc367fe0245589b6fc12"));
var modes$1 = /* @__PURE__ */ new Set([
	"classic",
	"timed",
	"survival",
	"blitz",
	"zen",
	"daily",
	"endless",
	"fog",
	"mirror",
	"category",
	"boss",
	"rush",
	"precision",
	"hardcore",
	"double_reward",
	"no_hints",
	"small_grid",
	"giant_grid",
	"reverse_only",
	"diagonal",
	"orthogonal",
	"chaos",
	"streak",
	"treasure",
	"nightmare",
	"focus",
	"speedrun",
	"marathon",
	"random_rules"
]);
var langs = /* @__PURE__ */ new Set([
	"en",
	"ur",
	"ur-Latn",
	"hi",
	"ar",
	"bn",
	"pa",
	"sd",
	"ps",
	"tr",
	"es",
	"fr",
	"de",
	"zh",
	"ja"
]);
var cleanWords$1 = (v) => Array.isArray(v) ? [...new Set(v.map((x) => String(x).toUpperCase().replace(/[^A-Z]/g, "")).filter(Boolean))].slice(0, 32) : [];
var startGameplaySession = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	kind: d.kind === "daily" ? "daily" : "level",
	level: Math.max(1, Math.min(2e3, Math.floor(Number(d.level) || 1))),
	day: String(d.day ?? "").slice(0, 10),
	mode: modes$1.has(d.mode) ? d.mode : "classic",
	language: langs.has(d.language) ? d.language : "en",
	dailyChallengeId: d.dailyChallengeId ? String(d.dailyChallengeId).slice(0, 20) : void 0
})).handler(createSsrRpc("581036f0ddac4f83c74303356201bde69336ff04faae772693ddc0b401a4ba0e"));
var recordGameplayAction = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => {
	if (!(/* @__PURE__ */ new Set([
		"found",
		"bonus",
		"miss",
		"hint",
		"pause",
		"resume"
	])).has(d.type)) throw new Error("Invalid gameplay action type.");
	if (d.type === "hint" && d.hintKind !== "first" && d.hintKind !== "letter" && d.hintKind !== "word") throw new Error("Invalid hint kind.");
	return {
		sessionId: String(d.sessionId ?? "").trim().slice(0, 64),
		actionId: String(d.actionId ?? "").trim(),
		type: d.type,
		word: d.word ? String(d.word).toUpperCase().slice(0, 32) : void 0,
		cells: Array.isArray(d.cells) ? d.cells.slice(0, 32).map((c) => [Number(c[0]), Number(c[1])]) : void 0,
		hintKind: d.hintKind === "first" || d.hintKind === "letter" || d.hintKind === "word" ? d.hintKind : void 0
	};
}).handler(createSsrRpc("214e532389d4fd7ac3cf461df51fff915809883bdd8511b99ca25efe6e2ab785"));
var startBossSession = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ level: Math.max(1, Math.min(2e3, Math.floor(Number(d.level) || 1))) })).handler(createSsrRpc("fd192289e010307ddc29c0d3356f5cf89a2c58c0870229aede772f099b006e42"));
var bossCombatAction = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	sessionId: String(d.sessionId ?? "").slice(0, 64),
	action: d.action === "word" || d.action === "guard" || d.action === "power" ? d.action : "word",
	perfect: Boolean(d.perfect)
})).handler(createSsrRpc("403e31a54a9929edc37b91d05a6133aff673762c683d5ce96d16f6b4f985050f"));
var verifyGameplayCompletion = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	sessionId: String(d.sessionId ?? "").slice(0, 64),
	found: cleanWords$1(d.found),
	paths: Array.isArray(d.paths) ? d.paths.slice(0, 32).map((p) => ({
		word: String(p.word ?? "").toUpperCase().slice(0, 32),
		cells: Array.isArray(p.cells) ? p.cells.slice(0, 32).map((c) => [Number(c[0]), Number(c[1])]) : []
	})) : []
})).handler(createSsrRpc("d3ab841e529e3cf0bd7975521fcd65744b8d750609f24fd7cc8415e46578552e"));
var toastN = 1;
var serverActionQueues = /* @__PURE__ */ new Map();
var newActionId = () => {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	const bytes = /* @__PURE__ */ new Uint8Array(16);
	if (typeof crypto !== "undefined" && "getRandomValues" in crypto) crypto.getRandomValues(bytes);
	else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
	bytes[6] = bytes[6] & 15 | 64;
	bytes[8] = bytes[8] & 63 | 128;
	const h = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
	return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
};
function flushPendingPlayActions(sessionId, play) {
	for (const action of play.actions) {
		if (!action.id) action.id = newActionId();
		queueServerGameplayAction({
			sessionId,
			actionId: action.id,
			type: action.type,
			word: action.word,
			cells: action.cells,
			hintKind: action.hintKind
		});
	}
}
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function queueServerGameplayAction(data) {
	const run = async () => {
		let last;
		for (let attempt = 0; attempt < 3; attempt++) try {
			const result = await recordGameplayAction({ data });
			if (!result.ok) throw new Error(result.error ?? "Gameplay action rejected by server");
			if (result.save) get().applyServerSave(result.save);
			if (result.hintEconomy) get().patchSave((s) => ({
				...s,
				coins: result.hintEconomy.coins,
				stats: {
					...s.stats,
					hintsUsed: result.hintEconomy.hintsUsed
				}
			}));
			return result;
		} catch (error) {
			last = error;
			if (attempt < 2) await sleep(75 * 2 ** attempt);
		}
		return {
			ok: false,
			error: last instanceof Error ? last.message : "Gameplay action delivery failed"
		};
	};
	const next = (serverActionQueues.get(data.sessionId) ?? Promise.resolve()).catch(() => void 0).then(run);
	serverActionQueues.set(data.sessionId, next);
	next.then(() => {
		if (serverActionQueues.get(data.sessionId) === next) serverActionQueues.delete(data.sessionId);
	}, () => {
		if (serverActionQueues.get(data.sessionId) === next) serverActionQueues.delete(data.sessionId);
	});
	return next;
}
var pendingServerStarts = /* @__PURE__ */ new Map();
function flash(set, text) {
	const id = toastN++;
	set({ toast: {
		id,
		text
	} });
	setTimeout(() => {
		useGame.setState((s) => s.toast?.id === id ? { toast: null } : s);
	}, 2200);
}
function withAchievements(save) {
	const extra = unlockedAchievements(save).filter((id) => !save.achievements.includes(id));
	if (!extra.length) return save;
	return {
		...save,
		achievements: [...save.achievements, ...extra]
	};
}
function haptic(ms = 12) {
	try {
		if (useGame.getState().save.settings.haptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(ms);
	} catch {}
}
function persistPlay(play) {
	if (typeof sessionStorage === "undefined") return;
	try {
		if (!play) sessionStorage.removeItem(PLAY_KEY);
		else sessionStorage.setItem(PLAY_KEY, JSON.stringify(play));
	} catch {}
}
var useGame = create((set, get) => ({
	ready: false,
	save: defaultSave(),
	screen: "splash",
	prevScreen: "home",
	play: null,
	toast: null,
	overlay: null,
	lastReward: null,
	combat: null,
	dialogue: null,
	npcAffinity: {},
	hydrate: () => {
		wireGameTelemetry();
		installV9Integrations();
		installV18Offline();
		let save = refillEnergy(loadSave());
		save = withAchievements(save);
		let play = null;
		try {
			const raw = sessionStorage.getItem(PLAY_KEY);
			if (raw) play = JSON.parse(raw);
		} catch {
			play = null;
		}
		set({
			ready: true,
			save,
			play,
			screen: play ? "play" : "splash",
			overlay: play?.pausedAt ? "pause" : null
		});
	},
	persist: () => writeSave(get().save),
	patchSave: (fn) => {
		const save = withAchievements(refillEnergy(fn(get().save)));
		writeSave(save);
		set({ save });
		gameEvents.emit("save:changed", { version: save.version });
	},
	go: (screen) => set((s) => ({
		prevScreen: s.screen === "play" ? s.prevScreen : s.screen,
		screen,
		overlay: screen === "play" ? s.overlay : null
	})),
	setScreen: (screen) => {
		get().go(screen);
	},
	back: () => set((s) => ({
		screen: s.screen === "play" ? s.prevScreen : s.prevScreen === s.screen ? "home" : s.prevScreen,
		overlay: null
	})),
	now: () => Date.now(),
	startLevel: (level, mode = "classic") => {
		const { save } = get();
		const filled = refillEnergy(save);
		const rules = modeRules(mode);
		const free = rules.free;
		const petFx = petEffect(filled.equippedPet, filled.equippedPet ? filled.petLevels[filled.equippedPet] ?? 1 : 1);
		const energyCost = Math.max(1, Math.ceil(1 * rules.energyMultiplier * (1 - (petFx.energyReductionPercent ?? 0) / 100)));
		if (!free && filled.energy < energyCost) {
			flash(set, "Need energy");
			set({
				save: filled,
				screen: "shop"
			});
			return false;
		}
		if (level > filled.unlockedLevel) return false;
		const puzzle = puzzleForLevel(level, mode, filled.language);
		const spec = specFor(level);
		intelligenceAdaptivePlan(filled, level);
		const vision = filled.skills.vision + (petFx.startingReveals ?? 0);
		const revealed = [];
		if (vision > 0 && puzzle.placements[0]) revealed.push(puzzle.placements[0].cells[0]);
		const play = {
			kind: "level",
			level,
			mode,
			puzzle,
			found: [],
			bonus: [],
			startAt: Date.now(),
			pausedAt: null,
			pausedMs: 0,
			hints: 0,
			revealed,
			mistakes: 0,
			combo: 0,
			round: 0,
			timeLimit: mode === "zen" || spec.timeLimit == null ? void 0 : Math.max(20, Math.floor(spec.timeLimit * rules.timeMultiplier * (1 + (petFx.timeBonusPercent ?? 0) / 100))),
			actions: []
		};
		const next = typeof navigator !== "undefined" && navigator.onLine || free ? filled : {
			...filled,
			energy: filled.energy - energyCost,
			energyAt: Date.now()
		};
		writeSave(next);
		persistPlay(play);
		const intelligenceStarted = personalizationEnabled(filled) ? applyIntelligenceEvent(next, {
			type: "level_start",
			level,
			mode
		}) : next;
		writeSave(intelligenceStarted);
		set({
			save: intelligenceStarted,
			play,
			screen: "play",
			overlay: null
		});
		if (typeof navigator !== "undefined" && navigator.onLine) {
			const startPromise = startGameplaySession({ data: {
				kind: "level",
				level,
				mode,
				language: filled.language
			} }).then((result) => {
				const current = get().play;
				if (result.ok && current?.kind === "level" && current.level === level) {
					const updated = {
						...current,
						serverSessionId: result.sessionId,
						timeLimit: result.timeLimitMs / 1e3,
						adaptiveTier: result.adaptiveTier
					};
					persistPlay(updated);
					set({ play: updated });
					flushPendingPlayActions(result.sessionId, updated);
					if (!free) get().applyServerSave(result.save);
				} else if (!result.ok && current?.kind === "level" && current.level === level) {
					persistPlay(null);
					set({
						play: null,
						overlay: null,
						screen: get().prevScreen === "play" ? "home" : get().prevScreen
					});
					flash(set, result.error);
				}
				return result;
			});
			pendingServerStarts.set(`${level}:${mode}`, startPromise);
			startPromise.then(() => void 0, () => void 0).finally(() => pendingServerStarts.delete(`${level}:${mode}`)).catch(() => void 0);
		}
		gameEvents.emit("level:start", {
			level,
			mode,
			seed: puzzle.seed
		});
		startMusic(journeyWorldForLevel(level).world - 1);
		return true;
	},
	startDaily: () => {
		const day = todayKey();
		const { save } = get();
		const challenge = dailyChallengeFor(day);
		const puzzle = puzzleForDaily(day, save.language, challenge.id);
		const play = {
			kind: "daily",
			level: 0,
			mode: "daily",
			puzzle,
			found: [],
			bonus: [],
			startAt: Date.now(),
			pausedAt: null,
			pausedMs: 0,
			hints: 0,
			revealed: [],
			mistakes: 0,
			combo: 0,
			round: 0,
			timeLimit: challenge.id === "speed" ? 90 : 150,
			actions: [],
			dailyChallenge: challenge
		};
		persistPlay(play);
		set({
			play,
			screen: "play",
			overlay: null,
			save
		});
		if (typeof navigator !== "undefined" && navigator.onLine) {
			const startPromise = startGameplaySession({ data: {
				kind: "daily",
				level: 0,
				day,
				mode: "daily",
				language: save.language,
				dailyChallengeId: challenge.id
			} }).then((result) => {
				const current = get().play;
				if (result.ok && current?.kind === "daily") {
					const updated = {
						...current,
						serverSessionId: result.sessionId,
						timeLimit: result.timeLimitMs / 1e3,
						adaptiveTier: result.adaptiveTier
					};
					persistPlay(updated);
					set({ play: updated });
					flushPendingPlayActions(result.sessionId, updated);
				}
				return result;
			});
			pendingServerStarts.set(`daily:${day}`, startPromise);
			startPromise.then(() => void 0, () => void 0).finally(() => pendingServerStarts.delete(`daily:${day}`)).catch(() => void 0);
		}
		gameEvents.emit("level:start", {
			level: 0,
			mode: "daily",
			seed: puzzle.seed
		});
		return true;
	},
	startEndless: () => {
		const seed = hashSeed("end", get().save.playerName, Date.now() % 99991);
		const puzzle = puzzleEndless(0, seed, get().save.language);
		const play = {
			kind: "endless",
			level: seed,
			mode: "endless",
			puzzle,
			found: [],
			bonus: [],
			startAt: Date.now(),
			pausedAt: null,
			pausedMs: 0,
			hints: 0,
			revealed: [],
			mistakes: 0,
			combo: 0,
			round: 0,
			actions: []
		};
		persistPlay(play);
		set({
			play,
			screen: "play",
			overlay: null
		});
		gameEvents.emit("level:start", {
			level: 0,
			mode: "endless",
			seed: puzzle.seed
		});
	},
	pausePlay: () => {
		const play = get().play;
		if (!play || play.pausedAt) return;
		if (play.kind === "daily" && play.dailyChallenge?.id === "speed") {
			flash(set, "Speed Day cannot be paused.");
			return;
		}
		const actionId = newActionId();
		const next = {
			...play,
			pausedAt: Date.now(),
			actions: [...play.actions, {
				id: actionId,
				type: "pause"
			}]
		};
		persistPlay(next);
		set({
			play: next,
			overlay: "pause"
		});
		if (next.serverSessionId) queueServerGameplayAction({
			sessionId: next.serverSessionId,
			actionId,
			type: "pause"
		});
	},
	resumePlay: () => {
		const play = get().play;
		if (!play?.pausedAt) {
			set({ overlay: null });
			return;
		}
		const actionId = newActionId();
		const next = {
			...play,
			pausedMs: play.pausedMs + (Date.now() - play.pausedAt),
			pausedAt: null,
			actions: [...play.actions, {
				id: actionId,
				type: "resume"
			}]
		};
		persistPlay(next);
		set({
			play: next,
			overlay: null
		});
		if (next.serverSessionId) queueServerGameplayAction({
			sessionId: next.serverSessionId,
			actionId,
			type: "resume"
		});
	},
	quitPlay: () => {
		const play = get().play;
		if (play) get().patchSave((s) => applyIntelligenceEvent(s, {
			type: "session_end",
			level: play.level,
			completedLevels: play.found.length ? 1 : 0
		}));
		persistPlay(null);
		set({
			play: null,
			overlay: null,
			screen: get().prevScreen === "play" ? "home" : get().prevScreen
		});
	},
	submitPath: (letters, cells) => {
		const play = get().play;
		if (!play || play.pausedAt) return "miss";
		try {
			validatePlayerAction(`local:${play.level}`, "submitPath");
		} catch {
			return "miss";
		}
		if (!validatePathInput(letters, cells) || !acceptAction(`local:${play.level}`, "submitPath")) return "miss";
		const rules = modeRules(play.mode);
		const modeCheck = validateModePath(play.mode, cells, play.puzzle.placements);
		if (!modeCheck.ok) {
			flash(set, modeCheck.reason ?? "Rule not allowed");
			return "miss";
		}
		const forward = letters.toUpperCase();
		const backward = [...forward].reverse().join("");
		const targets = play.puzzle.words;
		const match = targets.find((w) => w === forward || w === backward);
		if (match) {
			if (play.found.includes(match)) return "repeat";
			sfxPlay.found(play.combo + 1);
			haptic(18);
			const found = [...play.found, match];
			const extraCells = play.puzzle.placements.find((p) => p.word === match)?.cells ?? cells;
			const revealed = [...play.revealed, ...extraCells];
			const next = {
				...play,
				found,
				revealed,
				combo: play.combo + 1,
				actions: [...play.actions, {
					id: newActionId(),
					type: "found",
					word: match,
					cells
				}]
			};
			persistPlay(next);
			set({ play: next });
			if (next.serverSessionId) queueServerGameplayAction({
				sessionId: next.serverSessionId,
				actionId: next.actions[next.actions.length - 1].id,
				type: "found",
				word: match,
				cells
			});
			gameEvents.emit("word:found", {
				word: match,
				index: found.length - 1,
				combo: next.combo
			});
			get().patchSave((s) => ({
				...s,
				stats: {
					...s.stats,
					wordsFound: s.stats.wordsFound + 1
				}
			}));
			if (found.length >= targets.length) {
				const challenge = next.dailyChallenge;
				if (dailyChallengeObjective(challenge, {
					perfect: next.hints === 0 && next.mistakes === 0,
					combo: next.combo,
					bonusWords: next.bonus.length
				}).met) setTimeout(() => get().completePlay(), 280);
			}
			return "found";
		}
		if (forward.length >= 4 && isWord(forward) && !play.bonus.includes(forward)) {
			sfxPlay.coin();
			const next = {
				...play,
				bonus: [...play.bonus, forward],
				combo: play.combo + 1,
				actions: [...play.actions, {
					id: newActionId(),
					type: "bonus",
					word: forward,
					cells
				}]
			};
			persistPlay(next);
			set({ play: next });
			if (next.serverSessionId) queueServerGameplayAction({
				sessionId: next.serverSessionId,
				actionId: next.actions[next.actions.length - 1].id,
				type: "bonus",
				word: forward,
				cells
			});
			get().patchSave((s) => ({
				...s,
				coins: s.coins + 4,
				stats: {
					...s.stats,
					coinsEarned: s.stats.coinsEarned + 4
				}
			}));
			if (next.dailyChallenge && next.found.length >= next.puzzle.words.length) {
				if (dailyChallengeObjective(next.dailyChallenge, {
					perfect: next.hints === 0 && next.mistakes === 0,
					combo: next.combo,
					bonusWords: next.bonus.length
				}).met) setTimeout(() => get().completePlay(), 280);
			}
			return "bonus";
		}
		sfxPlay.miss();
		haptic(8);
		const next = {
			...play,
			mistakes: play.mistakes + 1,
			combo: 0,
			actions: [...play.actions, {
				id: newActionId(),
				type: "miss",
				word: forward,
				cells
			}]
		};
		persistPlay(next);
		set({ play: next });
		if (next.serverSessionId) queueServerGameplayAction({
			sessionId: next.serverSessionId,
			actionId: next.actions[next.actions.length - 1].id,
			type: "miss",
			word: forward,
			cells
		});
		gameEvents.emit("word:miss", { letters: forward });
		if (rules.maxMistakes != null && next.mistakes >= rules.maxMistakes) setTimeout(() => get().failPlay(), 200);
		return "miss";
	},
	useHint: (kind) => {
		const play = get().play;
		if (!play) return false;
		if (modeRules(play.mode).noHints) {
			flash(set, "Hints are disabled in this mode");
			return false;
		}
		const target = play.puzzle.placements.filter((p) => !play.found.includes(p.word))[0];
		if (!target) return false;
		const fox = get().save.equippedPet === "fox";
		const cost = Math.max(5, HINT_COST[kind] - (fox && kind !== "word" ? 8 : 0));
		const next = play;
		const online = typeof navigator !== "undefined" && navigator.onLine && Boolean(next.serverSessionId);
		if (!online && get().save.coins < cost) {
			flash(set, "Need coins");
			return false;
		}
		const actionId = newActionId();
		const revealCells = () => {
			let revealed = get().play?.revealed.slice() ?? [];
			if (kind === "first") revealed.push(target.cells[0]);
			else if (kind === "letter") {
				const idx = Math.min(target.cells.length - 1, 1 + Math.floor(Math.random() * Math.max(1, target.cells.length - 1)));
				revealed.push(target.cells[idx]);
			} else revealed = [...revealed, ...target.cells];
			const current = get().play;
			if (!current) return;
			const next = {
				...current,
				hints: current.hints + 1,
				revealed,
				actions: [...current.actions, {
					id: actionId,
					type: "hint",
					hintKind: kind
				}]
			};
			persistPlay(next);
			set({ play: next });
			if (personalizationEnabled(get().save)) get().patchSave((s) => applyIntelligenceEvent(s, {
				type: "hint_used",
				level: current.level
			}));
			sfxPlay.hint();
		};
		if (online && play.serverSessionId) {
			queueServerGameplayAction({
				sessionId: play.serverSessionId,
				actionId,
				type: "hint",
				hintKind: kind
			}).then((result) => {
				if (!result?.ok) {
					flash(set, result?.error ?? "Hint was rejected by the server.");
					return;
				}
				if (result.hintEconomy) get().patchSave((s) => ({
					...s,
					coins: result.hintEconomy.coins,
					stats: {
						...s.stats,
						hintsUsed: result.hintEconomy.hintsUsed
					}
				}));
				revealCells();
			}).catch(() => flash(set, "Hint could not be verified. Please retry."));
			return true;
		}
		if (get().save.coins < cost) {
			flash(set, "Need coins");
			return false;
		}
		revealCells();
		get().patchSave((s) => ({
			...s,
			coins: s.coins - cost,
			stats: {
				...s.stats,
				hintsUsed: s.stats.hintsUsed + 1
			}
		}));
		return true;
	},
	completePlay: async () => {
		let play = get().play;
		if (!play) return;
		if ((play.kind === "level" || play.kind === "daily") && typeof navigator !== "undefined" && navigator.onLine && !play.serverSessionId) {
			const pending = pendingServerStarts.get(play.kind === "daily" ? `daily:${todayKey()}` : `${play.level}:${play.mode}`);
			if (pending) await pending;
			play = get().play;
			if (!play?.serverSessionId) {
				flash(set, "Secure game session could not be started. Please retry.");
				return;
			}
		}
		const elapsed = Date.now() - play.startAt - play.pausedMs;
		const target = targetTimeMs(play.level || 1, play.puzzle.words.length, play.puzzle.size);
		const stars = starsFor({
			hints: play.hints,
			timeMs: elapsed,
			targetMs: target,
			mistakes: play.mistakes
		});
		const perfect = play.hints === 0 && play.mistakes === 0;
		const boss = play.kind === "level" && isBoss(play.level);
		const key = play.kind === "daily" ? `daily-${todayKey()}` : play.kind === "endless" ? `end-${play.round}` : String(play.level);
		const firstClear = play.kind === "level" && !get().save.results[key];
		const rules = modeRules(play.mode);
		const fastBonus = elapsed <= target * .72 ? 18 : 0;
		const goldenBonus = Math.floor(play.found.length / 5) * 10;
		const dailyClaimed = play.kind === "daily" && get().save.lastDaily === todayKey();
		const dailyMultiplier = dailyChallengeRewardMultiplier(play.dailyChallenge, {
			perfect,
			combo: play.combo,
			bonusWords: play.bonus.length
		});
		const rewardKind = play.kind === "daily" ? "challenge" : play.combo >= 5 ? "speed" : get().save.equippedPet ? "pet" : boss ? "collection" : "standard";
		const personalizationMultiplier = personalizedRewardMultiplier(get().save, rewardKind);
		const coins = dailyClaimed ? 0 : Math.max(1, Math.floor(rewardCoins({
			mode: play.mode,
			stars,
			combo: play.combo,
			hints: play.hints,
			mistakes: play.mistakes,
			wordCount: play.puzzle.words.length + play.bonus.length,
			boss,
			firstClear
		}) * rules.rewardMultiplier * dailyMultiplier * personalizationMultiplier * (1 + (petEffect(get().save.equippedPet, get().save.equippedPet ? get().save.petLevels[get().save.equippedPet] ?? 1 : 1).coinBonusPercent ?? 0) / 100)) + fastBonus + goldenBonus);
		const xp = Math.floor(xpForClear({
			size: play.puzzle.size,
			stars,
			boss
		}) * (1 + (petEffect(get().save.equippedPet, get().save.equippedPet ? get().save.petLevels[get().save.equippedPet] ?? 1 : 1).xpBonusPercent ?? 0) / 100));
		const dragon = get().save.equippedPet === "dragon" && perfect ? 20 : 0;
		const petId = get().save.equippedPet;
		const petXp = petId && !dailyClaimed ? petXpEarned({
			perfect,
			boss
		}) : 0;
		if (play.kind === "endless") {
			const round = play.round + 1;
			const puzzle = puzzleEndless(round, play.level, get().save.language);
			const next = {
				...play,
				puzzle,
				found: [],
				bonus: [],
				startAt: Date.now(),
				pausedAt: null,
				pausedMs: 0,
				hints: 0,
				revealed: [],
				mistakes: 0,
				combo: 0,
				round,
				actions: []
			};
			persistPlay(next);
			get().patchSave((s) => ({
				...observeCompletion(s, {
					level: play.level,
					world: 1,
					category: play.puzzle.category,
					mode: play.mode,
					timeMs: elapsed,
					hints: play.hints,
					combo: play.combo,
					perfect,
					stars,
					pet: petId,
					rewardCoins: coins + dragon
				}),
				coins: s.coins + coins + dragon,
				xp: s.xp + xp,
				stats: {
					...s.stats,
					gamesWon: s.stats.gamesWon + 1,
					wordsFound: s.stats.wordsFound,
					coinsEarned: s.stats.coinsEarned + coins + dragon,
					currentStreak: s.stats.currentStreak + 1,
					bestStreak: Math.max(s.stats.bestStreak, s.stats.currentStreak + 1)
				}
			}));
			set({
				play: next,
				overlay: null
			});
			sfxPlay.coin();
			return;
		}
		if (play.serverSessionId) try {
			const queued = serverActionQueues.get(play.serverSessionId);
			if (queued) {
				const delivery = await queued;
				if (delivery.ok === false) {
					flash(set, delivery.error ?? "Gameplay action delivery failed. Please retry.");
					return;
				}
			}
			const verified = await verifyGameplayCompletion({ data: {
				sessionId: play.serverSessionId,
				found: play.found,
				paths: play.actions.filter((a) => a.type === "found").map((a) => ({
					word: a.word ?? "",
					cells: a.cells ?? []
				}))
			} });
			if (!verified.ok) {
				flash(set, verified.error);
				return;
			}
			if (verified.save) get().applyServerSave(verified.save);
			persistPlay(null);
			sfxPlay.win();
			set({
				overlay: "win",
				lastReward: {
					coins: verified.coins ?? 0,
					xp: verified.xp ?? 0,
					stars: verified.stars ?? 0,
					title: play.puzzle.title
				},
				play: {
					...play,
					found: play.puzzle.words.slice()
				}
			});
			gameEvents.emit("level:complete", {
				level: play.level,
				stars: verified.stars ?? 0,
				timeMs: elapsed
			});
			return;
		} catch {
			flash(set, "Secure result verification failed. Please retry.");
			return;
		}
		persistPlay(null);
		sfxPlay.win();
		if (petId && petXp > 0) get().patchSave((s) => ({
			...s,
			petXp: {
				...s.petXp,
				[petId]: (s.petXp[petId] ?? 0) + petXp
			}
		}));
		if (play.kind === "level") {
			const world = journeyWorldForLevel(play.level);
			const collectibleIds = [...isBoss(play.level) ? [`guardian-trophy-${world.world}`] : [], ...JOURNEY_WORLDS.some((w) => w.to === play.level) ? [`world-artifact-${world.world}`] : []];
			if (collectibleIds.length) get().patchSave((s) => ({
				...s,
				inventory: Array.from(/* @__PURE__ */ new Set([...s.inventory, ...collectibleIds]))
			}));
		}
		if (!play.serverSessionId) get().patchSave((s) => {
			const prev = playerLevel(s.xp);
			const nextXp = s.xp + xp;
			const nextLv = playerLevel(nextXp);
			const skillGain = Math.max(0, nextLv - prev);
			const unlockedLevel = play.kind === "level" ? Math.min(MAX_LEVEL, Math.max(s.unlockedLevel, play.level + 1)) : s.unlockedLevel;
			const result = {
				stars,
				timeMs: elapsed,
				found: play.found.length,
				hints: play.hints,
				perfect
			};
			const behaviorized = applyIntelligenceEvent(s, {
				type: "level_complete",
				level: play.level,
				world: journeyWorldForLevel(Math.max(1, play.level)).world,
				category: play.puzzle.category,
				mode: play.mode,
				timeMs: elapsed,
				hints: play.hints,
				combo: play.combo,
				perfect,
				stars,
				pet: petId,
				rewardCoins: coins + dragon,
				daily: play.kind === "daily"
			});
			const progressed = play.kind === "level" ? recordLevelResult(behaviorized, play.level, result) : behaviorized;
			const results = progressed.results;
			const finalUnlocked = play.kind === "level" ? progressed.unlockedLevel : unlockedLevel;
			const storyChapter = Math.max(s.storyChapter, Math.floor((finalUnlocked - 1) / 100));
			return {
				...s,
				coins: s.coins + coins + dragon,
				xp: nextXp,
				stars: s.stars + stars,
				unlockedLevel: finalUnlocked,
				results,
				skillPoints: s.skillPoints + skillGain,
				storyChapter,
				lastDaily: play.kind === "daily" && !dailyClaimed ? todayKey() : s.lastDaily,
				dailyStreak: play.kind === "daily" && !dailyClaimed ? s.lastDaily === (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString().slice(0, 10) ? s.dailyStreak + 1 : 1 : s.dailyStreak,
				stats: {
					...s.stats,
					gamesPlayed: s.stats.gamesPlayed + 1,
					gamesWon: s.stats.gamesWon + 1,
					playTimeMs: s.stats.playTimeMs + elapsed,
					coinsEarned: s.stats.coinsEarned + coins + dragon,
					currentStreak: s.stats.currentStreak + 1,
					bestStreak: Math.max(s.stats.bestStreak, s.stats.currentStreak + 1),
					perfectClears: s.stats.perfectClears + (perfect ? 1 : 0),
					dailyCompleted: s.stats.dailyCompleted + (play.kind === "daily" && !dailyClaimed ? 1 : 0),
					bossesDefeated: s.stats.bossesDefeated + (boss ? 1 : 0),
					levelsCompleted: s.stats.levelsCompleted + (play.kind === "level" ? 1 : 0)
				},
				inventory: Array.from(/* @__PURE__ */ new Set([
					...s.inventory,
					...play.kind === "level" && play.level > 0 && isBoss(play.level) ? [`guardian-trophy-${journeyWorldForLevel(play.level).world}`] : [],
					...play.kind === "level" && JOURNEY_WORLDS.some((w) => w.to === play.level) ? [`world-artifact-${journeyWorldForLevel(play.level).world}`] : []
				])),
				materials: {
					...s.materials,
					wood: s.materials.wood + 1 + (boss ? 2 : 0),
					stone: s.materials.stone + (stars >= 2 ? 1 : 0),
					crystal: s.materials.crystal + (perfect ? 1 : 0)
				}
			};
		});
		gameEvents.emit("level:complete", {
			level: play.level,
			stars,
			timeMs: elapsed
		});
		set({
			overlay: "win",
			lastReward: {
				coins: coins + dragon,
				xp,
				stars,
				title: play.puzzle.title
			},
			play: {
				...play,
				found: play.puzzle.words.slice()
			}
		});
	},
	failPlay: () => {
		const play = get().play;
		if (!play) return;
		persistPlay(null);
		get().patchSave((s) => ({
			...applyIntelligenceEvent(s, {
				type: "level_fail",
				level: play.level,
				reason: "rule_or_timeout"
			}),
			stats: {
				...s.stats,
				gamesPlayed: s.stats.gamesPlayed + 1,
				currentStreak: 0,
				playTimeMs: s.stats.playTimeMs + (Date.now() - play.startAt - play.pausedMs)
			}
		}));
		gameEvents.emit("level:fail", {
			level: play.level,
			reason: "rule_or_timeout"
		});
		set({ overlay: "fail" });
	},
	buy: (id) => {
		const item = SHOP.find((x) => x.id === id);
		if (!item) return false;
		const save = get().save;
		if ("theme" in item && item.theme && save.ownedThemes.includes(item.theme)) {
			flash(set, "Already owned");
			return false;
		}
		if (save.coins < item.coins || save.diamonds < item.diamonds) {
			flash(set, item.coins && save.coins < item.coins ? "Need coins" : "Need diamonds");
			return false;
		}
		get().patchSave((s) => {
			let next = {
				...s,
				coins: s.coins - item.coins,
				diamonds: s.diamonds - item.diamonds
			};
			if (item.kind === "energy") next = {
				...next,
				energy: Math.min(20, next.energy + item.amount)
			};
			if (item.kind === "coins") next = {
				...next,
				coins: next.coins + item.amount
			};
			if (item.kind === "item") next = {
				...next,
				inventory: [...next.inventory, String(item.item)]
			};
			if ("theme" in item && item.theme) next = {
				...next,
				ownedThemes: [.../* @__PURE__ */ new Set([...next.ownedThemes, item.theme])]
			};
			return next;
		});
		sfxPlay.coin();
		flash(set, "Purchased");
		return true;
	},
	buyPet: (id) => {
		const pet = PETS$1.find((p) => p.id === id);
		if (!pet) return false;
		const save = get().save;
		if (save.ownedPets.includes(id)) return false;
		if (save.coins < pet.coins || save.diamonds < pet.diamonds) {
			flash(set, "Need currency");
			return false;
		}
		get().patchSave((s) => ({
			...s,
			coins: s.coins - pet.coins,
			diamonds: s.diamonds - pet.diamonds,
			ownedPets: [...s.ownedPets, id],
			petLevels: {
				...s.petLevels,
				[id]: 1
			}
		}));
		sfxPlay.coin();
		return true;
	},
	upgradePet: (id) => {
		const save = get().save;
		if (!save.ownedPets.includes(id)) return false;
		const profile = petProfile(id);
		const level = save.petLevels[id] ?? 1;
		if (!profile || level >= profile.maxLevel) return false;
		const cost = petUpgradeCost(id, level);
		if (save.coins < cost) {
			flash(set, "Need coins");
			return false;
		}
		get().patchSave((s) => ({
			...s,
			coins: s.coins - cost,
			petLevels: {
				...s.petLevels,
				[id]: level + 1
			}
		}));
		flash(set, `${profile.name} reached level ${level + 1}`);
		return true;
	},
	equipPet: (id) => get().patchSave((s) => s.ownedPets.includes(id) ? {
		...s,
		equippedPet: id
	} : s),
	equipTheme: (id) => get().patchSave((s) => s.ownedThemes.includes(id) ? {
		...s,
		equippedTheme: id
	} : s),
	setAvatar: (id) => get().patchSave((s) => ({
		...s,
		avatarId: id
	})),
	setName: (name) => get().patchSave((s) => ({
		...s,
		playerName: name.slice(0, 24) || s.playerName
	})),
	setSetting: (k, v) => get().patchSave((s) => ({
		...s,
		settings: {
			...s.settings,
			[k]: v
		}
	})),
	setLang: (language) => get().patchSave((s) => ({
		...s,
		language
	})),
	claimLogin: () => {
		const day = todayKey();
		if (get().save.lastLoginReward === day) return false;
		const dayIndex = get().save.loginDays % 7;
		const coins = [
			10,
			20,
			35,
			50,
			75,
			100,
			150
		][dayIndex];
		get().patchSave((s) => ({
			...s,
			coins: s.coins + coins,
			lastLoginReward: day,
			loginDays: s.loginDays + 1,
			diamonds: s.diamonds + (dayIndex === 6 ? 1 : 0),
			stats: {
				...s.stats,
				coinsEarned: s.stats.coinsEarned + coins
			}
		}));
		sfxPlay.coin();
		flash(set, `+${coins} coins`);
		return true;
	},
	spin: () => {
		const save = refillEnergy(get().save);
		const day = todayKey();
		const paid = save.lastSpin === day;
		if (paid && save.coins < 25) {
			flash(set, "Need coins");
			return null;
		}
		const luck = save.skills.luck + (save.equippedPet === "unicorn" ? 2 : 0);
		const rng = mulberry32(hashSeed("spin", day, save.loginDays, Date.now() % 997));
		const table = SPIN_TABLE.map((row, i) => i >= 5 ? {
			...row,
			w: row.w + luck
		} : row);
		const total = table.reduce((a, r) => a + r.w, 0);
		let roll = rng() * total;
		let hit = table[0];
		for (const row of table) {
			roll -= row.w;
			if (roll <= 0) {
				hit = row;
				break;
			}
		}
		get().patchSave((s) => ({
			...s,
			coins: s.coins - (paid ? 25 : 0) + hit.coins,
			diamonds: s.diamonds + hit.diamonds,
			energy: Math.min(20, s.energy + hit.energy),
			lastSpin: day,
			stats: {
				...s.stats,
				coinsEarned: s.stats.coinsEarned + hit.coins
			}
		}));
		sfxPlay.spin();
		return hit.label;
	},
	upgradeBuilding: (id) => {
		const save = get().save;
		const level = save.baseBuildings[id] ?? 1;
		const cost = buildingUpgradeCost(id, level);
		if (cost == null) return false;
		if (save.coins < cost) {
			flash(set, "Not enough coins");
			return false;
		}
		get().patchSave((s) => ({
			...s,
			coins: s.coins - cost,
			baseBuildings: {
				...s.baseBuildings,
				[id]: level + 1
			}
		}));
		flash(set, `${BUILDINGS[id].name} upgraded`);
		return true;
	},
	craft: (slot) => {
		const save = get().save;
		const level = Math.max(1, save.baseBuildings.workshop ?? 1);
		const item = craftEquipment(slot, level, save.materials);
		if (!item) {
			flash(set, "Need more crafting materials");
			return false;
		}
		const spend = {
			wood: 5 + level,
			stone: 4 + level,
			crystal: 2,
			iron: 2,
			gold: 0
		};
		get().patchSave((s) => {
			const materials = { ...s.materials };
			for (const [k, v] of Object.entries(spend)) materials[k] = Math.max(0, (materials[k] ?? 0) - Number(v));
			return {
				...s,
				materials,
				equipment: [...s.equipment, item]
			};
		});
		flash(set, `Crafted ${item.name}`);
		return true;
	},
	equipEquipment: (id) => {
		get().patchSave((s) => {
			const item = s.equipment.find((e) => e.id === id);
			if (!item) return s;
			return {
				...s,
				equippedEquipment: {
					...s.equippedEquipment,
					[item.slot]: id
				}
			};
		});
	},
	spendSkill: (k) => {
		get().patchSave((s) => {
			if (s.skillPoints < 1 || s.skills[k] >= 10) return s;
			return {
				...s,
				skillPoints: s.skillPoints - 1,
				skills: {
					...s.skills,
					[k]: s.skills[k] + 1
				}
			};
		});
	},
	applyCloud: (remote) => {
		const merged = mergeSaves(get().save, remote);
		writeSave(merged);
		set({ save: merged });
		flash(set, "Cloud save merged");
	},
	applyServerSave: (remote) => {
		const merged = { ...remote };
		writeSave(merged);
		set({ save: merged });
	},
	startBossCombat: async (level) => {
		const save = get().save;
		if (!isJourneyBoss(level) || level > save.unlockedLevel) {
			flash(set, "Reach an unlocked Boss Gate first");
			return;
		}
		try {
			const result = await startBossSession({ data: { level } });
			if (!result.ok) {
				flash(set, result.error);
				return;
			}
			set({
				combat: {
					...result.combat,
					sessionId: result.sessionId
				},
				screen: "combat"
			});
		} catch {
			flash(set, "Guardian connection failed");
		}
	},
	combatAction: async (action, perfect) => {
		const combat = get().combat;
		if (!combat || combat.victory || combat.defeated) return;
		const sessionId = combat.sessionId;
		if (!sessionId) {
			flash(set, "Guardian session missing");
			return;
		}
		try {
			const result = await bossCombatAction({ data: {
				sessionId,
				action,
				perfect
			} });
			if (!result.ok) {
				flash(set, result.error);
				return;
			}
			set({ combat: {
				...result.combat,
				sessionId
			} });
			if (result.combat.victory) {
				if (result.save) {
					writeSave(result.save);
					set({ save: result.save });
				}
				flash(set, `Victory · +${result.combat.enemy.reward} coins`);
				sfxPlay.win();
			}
		} catch {
			flash(set, "Guardian action failed");
		}
	},
	clearCombat: () => set({
		combat: null,
		screen: "home"
	}),
	openDialogue: (chapter) => {
		set({
			dialogue: dialogueForChapter(chapter),
			screen: "dialogue"
		});
	},
	chooseDialogue: (choiceId) => {
		const node = get().dialogue;
		if (!node) return;
		const choice = node.choices.find((c) => c.id === choiceId);
		if (!choice) return;
		if (choice.affinity) set({ npcAffinity: {
			...get().npcAffinity,
			[node.speaker]: (get().npcAffinity[node.speaker] ?? 0) + choice.affinity
		} });
		if (choice.reward) {
			get().patchSave((s) => ({
				...s,
				coins: s.coins + choice.reward
			}));
			flash(set, `+${choice.reward} coins`);
		}
		if (!choice.next || choice.next === "end") {
			set({
				dialogue: null,
				screen: "npcs"
			});
			return;
		}
		const next = DIALOGUES[choice.next];
		set({
			dialogue: next ?? null,
			screen: next ? "dialogue" : "npcs"
		});
	},
	closeDialogue: () => set({
		dialogue: null,
		screen: "npcs"
	}),
	claimAchievement: async (id) => {
		const a = ACHIEVEMENTS.find((x) => x.id === id);
		if (!a) return false;
		const save = get().save;
		if (save.claimedAchievements.includes(id) || !achievementProgress(a, save.stats).done) return false;
		try {
			const remote = await claimAchievementServer({ data: { id } });
			if (!remote.ok) {
				flash(set, remote.error ?? "Achievement claim failed");
				return false;
			}
			if (remote.reward > 0) {
				get().patchSave((s) => ({
					...s,
					claimedAchievements: [...s.claimedAchievements, id],
					coins: s.coins + remote.reward,
					stats: {
						...s.stats,
						coinsEarned: s.stats.coinsEarned + remote.reward
					}
				}));
				flash(set, `+${remote.reward} coins`);
				sfxPlay.coin();
			}
			return true;
		} catch {
			get().patchSave((s) => ({
				...s,
				claimedAchievements: [...s.claimedAchievements, id],
				coins: s.coins + a.reward,
				stats: {
					...s.stats,
					coinsEarned: s.stats.coinsEarned + a.reward
				}
			}));
			flash(set, `+${a.reward} coins`);
			sfxPlay.coin();
			return true;
		}
	},
	claimMission: async (id) => {
		const m = MISSIONS$1.find((x) => x.id === id);
		if (!m) return false;
		const save = get().save;
		const ck = `${m.id}:${periodKey(m.period)}`;
		const k = m.metric === "levels" ? "levelsCompleted" : m.metric === "words" ? "wordsFound" : "coinsEarned";
		if (save.claimedMissions.includes(ck) || (save.stats[k] ?? 0) < m.target) return false;
		try {
			const remote = await claimMissionServer({ data: { id } });
			if (!remote.ok) {
				flash(set, remote.error ?? "Mission claim failed");
				return false;
			}
			if (remote.reward > 0) {
				get().patchSave((s) => ({
					...s,
					claimedMissions: [...s.claimedMissions, ck],
					coins: s.coins + remote.reward,
					stats: {
						...s.stats,
						coinsEarned: s.stats.coinsEarned + remote.reward
					}
				}));
				flash(set, `+${remote.reward} coins`);
				sfxPlay.coin();
			}
			return true;
		} catch {
			get().patchSave((s) => ({
				...s,
				claimedMissions: [...s.claimedMissions, ck],
				coins: s.coins + m.reward,
				stats: {
					...s.stats,
					coinsEarned: s.stats.coinsEarned + m.reward
				}
			}));
			flash(set, `+${m.reward} coins`);
			sfxPlay.coin();
			return true;
		}
	},
	claimSeasonTier: async (level) => {
		const tier = Math.max(1, Math.min(10, Math.floor(level)));
		const save = get().save;
		const key = `${seasonKey$2()}:${tier}`;
		if (save.claimedSeasonTiers.includes(key)) return false;
		try {
			const remote = await claimSeasonTierServer({ data: { level: tier } });
			if (!remote.ok) {
				flash(set, remote.error ?? "Season claim failed");
				return false;
			}
			if (remote.reward > 0) {
				get().patchSave((s) => ({
					...s,
					claimedSeasonTiers: [...s.claimedSeasonTiers, key],
					coins: s.coins + remote.reward,
					stats: {
						...s.stats,
						coinsEarned: s.stats.coinsEarned + remote.reward
					}
				}));
				flash(set, `+${remote.reward} coins`);
				sfxPlay.coin();
			}
			return true;
		} catch {
			flash(set, "Sign in with a cloud save to claim season rewards");
			return false;
		}
	},
	exportJson: () => exportSave(get().save),
	importJson: (text) => {
		try {
			const next = importSave(text);
			writeSave(next);
			set({ save: next });
			flash(set, "Save imported");
			return true;
		} catch {
			flash(set, "Import failed");
			return false;
		}
	},
	resetProgress: () => {
		const keep = get().save.settings;
		const lang = get().save.language;
		const next = {
			...defaultSave(),
			settings: keep,
			language: lang
		};
		writeSave(next);
		persistPlay(null);
		set({
			save: next,
			play: null,
			overlay: null,
			screen: "home"
		});
	}
}));
var EN = {
	"app.title": "Mera Word Search Journey",
	"app.tag": "A quiet atlas of hidden words",
	"cta.play": "Continue the journey",
	"cta.start": "Begin",
	"cta.daily": "Daily challenge",
	"cta.worlds": "World map",
	"cta.modes": "Modes",
	"cta.shop": "Bazaar",
	"cta.pets": "Companions",
	"cta.profile": "Profile",
	"cta.settings": "Settings",
	"cta.achievements": "Seals",
	"cta.stats": "Ledger",
	"cta.spin": "Lucky wheel",
	"cta.story": "Chronicle",
	"cta.dictionary": "Lexicon",
	"cta.leaderboard": "Hall",
	"cta.inventory": "Satchel",
	"cta.skills": "Craft",
	"cta.legal": "Charter",
	"cta.more": "More",
	"cta.back": "Back",
	"cta.home": "Home",
	"cta.pause": "Pause",
	"cta.resume": "Resume",
	"cta.quit": "Leave puzzle",
	"cta.next": "Next level",
	"cta.retry": "Try again",
	"cta.hint": "Hint",
	"cta.claim": "Claim",
	"cta.spinNow": "Spin",
	"cta.signIn": "Sign in",
	"cta.guest": "Continue as guest",
	"cta.sync": "Save to cloud",
	"cta.export": "Export save",
	"cta.import": "Import save",
	"hud.coins": "Coins",
	"hud.diamonds": "Diamonds",
	"hud.energy": "Energy",
	"hud.stars": "Stars",
	"play.find": "Find these words",
	"play.found": "Found",
	"play.bonus": "Bonus word",
	"play.complete": "The page is complete",
	"play.failed": "The ink ran dry",
	"play.time": "Time",
	"play.paused": "Paused",
	"play.needEnergy": "Rest a while — energy refills every five minutes.",
	"shop.title": "Traveler's bazaar",
	"pets.title": "Companions",
	"settings.title": "Preferences",
	"profile.title": "Traveler",
	"daily.title": "Today's page",
	"spin.title": "Wheel of chance",
	"story.title": "Chronicle",
	"legal.tos": "Terms of travel",
	"legal.privacy": "Quiet ledger",
	"toast.saved": "Progress kept",
	"toast.needCoins": "Not enough coins",
	"toast.needDiamonds": "Not enough diamonds",
	"toast.owned": "Already owned",
	"toast.energy": "Energy restored",
	"toast.synced": "Cloud save merged",
	"lang.en": "English",
	"lang.ur": "اردو",
	"lang.ur-Latn": "Roman Urdu",
	"lang.hi": "हिन्दी",
	"lang.ar": "العربية",
	"lang.es": "Español",
	"lang.fr": "Français",
	"lang.de": "Deutsch",
	"lang.tr": "Türkçe",
	"lang.zh": "中文",
	"lang.ja": "日本語",
	"lang.bn": "বাংলা",
	"lang.pa": "ਪੰਜਾਬੀ",
	"lang.sd": "سنڌي",
	"lang.ps": "پښتو"
};
var UR = {
	"app.title": "میرا ورڈ سرچ سفر",
	"app.tag": "پوشیدہ الفاظ کا خاموش اطلس",
	"cta.play": "سفر جاری رکھیں",
	"cta.start": "شروع",
	"cta.daily": "آج کا چیلنج",
	"cta.worlds": "دنیا کا نقشہ",
	"cta.modes": "انداز",
	"cta.shop": "بازار",
	"cta.pets": "ساتھی",
	"cta.profile": "پروفائل",
	"cta.settings": "ترتیبات",
	"cta.achievements": "مہریں",
	"cta.stats": "کھاتہ",
	"cta.spin": "قسمت کا پہیہ",
	"cta.story": "سفرنامہ",
	"cta.dictionary": "لغت",
	"cta.leaderboard": "ہال",
	"cta.back": "واپس",
	"cta.home": "گھر",
	"cta.pause": "توقف",
	"cta.resume": "جاری",
	"cta.quit": "پہیلی چھوڑیں",
	"cta.next": "اگلا درجہ",
	"cta.retry": "دوبارہ",
	"cta.hint": "اشارہ",
	"cta.claim": "حاصل کریں",
	"cta.spinNow": "گھمائیں",
	"cta.signIn": "داخل ہوں",
	"cta.guest": "مہمان کے طور پر کھیلیں",
	"cta.sync": "بادل میں محفوظ",
	"play.find": "یہ الفاظ تلاش کریں",
	"play.found": "مل گیا",
	"play.complete": "صفحہ مکمل ہوا",
	"play.failed": "روشنی ختم ہو گئی",
	"play.time": "وقت",
	"play.paused": "توقف",
	"play.needEnergy": "ذرا آرام — توانائی ہر پانچ منٹ میں بھرتی ہے۔",
	"shop.title": "مسافر کا بازار",
	"pets.title": "ساتھی",
	"settings.title": "ترجیحات",
	"profile.title": "مسافر",
	"daily.title": "آج کا صفحہ",
	"spin.title": "قسمت کا پہیہ",
	"story.title": "سفرنامہ",
	"toast.saved": "پیشرفت محفوظ",
	"toast.needCoins": "سکے کم ہیں",
	"hud.coins": "سکے",
	"hud.diamonds": "ہیرے",
	"hud.energy": "توانائی",
	"hud.stars": "ستارے"
};
var ES = {
	"app.title": "Mera Word Search Journey",
	"app.tag": "Un atlas silencioso de palabras ocultas",
	"cta.play": "Seguir el viaje",
	"cta.start": "Empezar",
	"cta.daily": "Reto del día",
	"cta.worlds": "Mapa",
	"cta.shop": "Bazar",
	"cta.pets": "Compañeros",
	"cta.settings": "Ajustes",
	"cta.back": "Volver",
	"play.find": "Encuentra estas palabras",
	"play.complete": "La página está completa"
};
var AR = {
	"app.title": "رحلة البحث عن الكلمات",
	"app.tag": "أطلس هادئ للكلمات المخفية",
	"cta.play": "واصل الرحلة",
	"cta.start": "ابدأ",
	"cta.daily": "تحدي اليوم",
	"cta.worlds": "الخريطة",
	"cta.back": "رجوع",
	"play.find": "ابحث عن هذه الكلمات"
};
var PACKS = {
	en: EN,
	ur: UR,
	"ur-Latn": {
		...EN,
		"app.title": "Mera Word Search Safar",
		"app.tag": "Posheeda alfaaz ka khamosh atlas",
		"cta.play": "Safar jari rakhein",
		"cta.daily": "Aaj ka challenge",
		"cta.worlds": "Dunya ka naqsha"
	},
	es: ES,
	ar: AR,
	hi: {
		...EN,
		"cta.play": "यात्रा जारी रखें",
		"cta.daily": "आज की चुनौती"
	},
	fr: {
		...EN,
		"cta.play": "Continuer le voyage",
		"cta.daily": "Défi du jour"
	},
	de: {
		...EN,
		"cta.play": "Reise fortsetzen",
		"cta.daily": "Tagesaufgabe"
	},
	tr: {
		...EN,
		"cta.play": "Yolculuğa devam",
		"cta.daily": "Günün görevi"
	},
	zh: {
		...EN,
		"cta.play": "继续旅程",
		"cta.daily": "每日挑战"
	},
	ja: {
		...EN,
		"cta.play": "旅を続ける",
		"cta.daily": "今日の挑戦"
	},
	bn: EN,
	pa: EN,
	sd: UR,
	ps: UR
};
var LANGS = [
	"en",
	"ur",
	"ur-Latn",
	"hi",
	"ar",
	"es",
	"fr",
	"de",
	"tr",
	"zh",
	"ja",
	"bn",
	"pa",
	"sd",
	"ps"
];
var RTL_LANGS = /* @__PURE__ */ new Set([
	"ur",
	"ar",
	"sd",
	"ps"
]);
function t(lang, key) {
	return PACKS[lang]?.[key] ?? EN[key] ?? key;
}
function isRtl(lang, force) {
	return Boolean(force) || RTL_LANGS.has(lang);
}
function Screen({ title, children, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell safe-pad flex h-dvh flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-3 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
				onClick: onBack ?? (() => useGame.getState().back()),
				"aria-label": "Back",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl text-fg",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto pb-8",
			children
		})]
	});
}
function HudChips() {
	const save = useGame((s) => s.save);
	const refilledSave = refillEnergy(save);
	const eta = energyEta(refilledSave);
	const m = Math.floor(eta / 6e4);
	const sec = Math.floor(eta % 6e4 / 1e3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hud-chip text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "size-3.5 text-gold" }), refilledSave.coins]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hud-chip text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gem, { className: "size-3.5 text-accent" }), refilledSave.diamonds]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hud-chip text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 text-gold" }), refilledSave.stars]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "hud-chip text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5 text-warning" }),
					refilledSave.energy,
					"/",
					20,
					refilledSave.energy < 20 ? ` · ${m}:${String(sec).padStart(2, "0")}` : ""
				]
			})
		]
	});
}
function TileButton({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "panel flex min-h-20 flex-col items-start justify-between rounded-2xl p-3 text-left transition-transform active:scale-[0.98]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold text-fg",
			children: label
		})]
	});
}
function useT() {
	const lang = useGame((s) => s.save.language);
	return (key) => t(lang, key);
}
function buildCoachInsights(stats, unlockedLevel) {
	const out = [];
	const winRate = stats.gamesPlayed ? stats.gamesWon / stats.gamesPlayed : 0;
	const hintRate = stats.gamesPlayed ? stats.hintsUsed / stats.gamesPlayed : 0;
	if (!stats.gamesPlayed) out.push({
		id: "start",
		title: "Start with Classic",
		body: "Play a few Classic boards so the coach can learn your pace.",
		action: "Classic",
		priority: "medium"
	});
	else if (winRate < .65) out.push({
		id: "steady",
		title: "Build consistency",
		body: "Your clears are below 65%. Try Classic or Focus mode and avoid spending hints early.",
		action: "Focus",
		priority: "high"
	});
	else if (winRate > .9) out.push({
		id: "challenge",
		title: "Ready for a challenge",
		body: "Your clear rate is above 90%. Timed, Blitz, or diagonal rules should stretch your pace.",
		action: "Blitz",
		priority: "medium"
	});
	if (hintRate > 1.5) out.push({
		id: "hints",
		title: "Train your scanning",
		body: "You average more than 1.5 hints per game. Try a no-hints board to sharpen pattern recognition.",
		action: "No Hints",
		priority: "medium"
	});
	if (stats.currentStreak >= 7) out.push({
		id: "streak",
		title: "Protect the streak",
		body: `You are on a ${stats.currentStreak}-day streak. A Daily board is the safest way to keep momentum.`,
		action: "Daily",
		priority: "low"
	});
	if (stats.perfectClears > 0 && stats.perfectClears >= Math.max(3, Math.floor(stats.gamesPlayed * .2))) out.push({
		id: "mastery",
		title: "Mastery opportunity",
		body: "Perfect clears are a strong share of your games. Push the next unlocked level for higher mastery value.",
		action: `Level ${Math.min(unlockedLevel + 1, 2e3)}`,
		priority: "low"
	});
	if (stats.bestStreak >= 10) out.push({
		id: "survival",
		title: "Streak specialist",
		body: "Your best streak is already double digits. Survival mode is a natural next challenge.",
		action: "Survival",
		priority: "medium"
	});
	return out.slice(0, 5);
}
function recommendedModes(stats) {
	const winRate = stats.gamesPlayed ? stats.gamesWon / stats.gamesPlayed : 0;
	if (!stats.gamesPlayed) return [
		"classic",
		"daily",
		"zen"
	];
	if (winRate < .65) return [
		"classic",
		"focus",
		"zen"
	];
	if (winRate > .9) return [
		"blitz",
		"timed",
		"diagonal"
	];
	return [
		"classic",
		"timed",
		"no_hints"
	];
}
function CoachScreen() {
	const stats = useGame((s) => s.save.stats);
	const unlocked = useGame((s) => s.save.unlockedLevel);
	const go = useGame.getState().go;
	const insights = (0, import_react.useMemo)(() => buildCoachInsights(stats, unlocked), [stats, unlocked]);
	const modes = (0, import_react.useMemo)(() => recommendedModes(stats), [stats]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Smart Coach",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "Personalized"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Your next best move"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Recommendations are generated locally from your gameplay stats. No extra profile data is sent anywhere."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "grid gap-3 sm:grid-cols-3",
					children: modes.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "panel rounded-2xl p-4 text-left",
						onClick: () => go("modes"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted",
							children: "Recommended"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-semibold text-fg",
							children: mode.replaceAll("_", " ")
						})]
					}, mode))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "flex flex-col gap-3",
					children: insights.length ? insights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "panel rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-fg",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider text-primary",
									children: item.priority
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: item.body
							}),
							item.action && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs font-semibold text-fg",
								children: ["Suggested: ", item.action]
							})
						]
					}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
						className: "panel rounded-2xl p-4 text-sm text-muted",
						children: "Play a few boards and your personalized coaching insights will appear here."
					})
				})
			]
		})
	});
}
function buildAdaptiveProfile(stats, unlockedLevel) {
	const played = Math.max(0, stats.gamesPlayed);
	const win = played ? stats.gamesWon / played : 0;
	const hints = played ? stats.hintsUsed / played : 0;
	const perfect = played ? stats.perfectClears / played : 0;
	let score = 50 + (win - .7) * 70 - Math.max(0, hints - 1) * 8 + perfect * 25 + Math.min(stats.currentStreak, 10);
	score = Math.max(0, Math.min(100, Math.round(score)));
	const band = score < 40 ? "gentle" : score < 65 ? "steady" : score < 85 ? "challenge" : "expert";
	const recommendedLevel = Math.max(1, Math.min(2e3, unlockedLevel + (band === "gentle" ? -2 : band === "steady" ? 0 : band === "challenge" ? 1 : 2)));
	return {
		score,
		band,
		recommendedLevel,
		recommendedModes: band === "gentle" ? [
			"classic",
			"focus",
			"zen"
		] : band === "steady" ? [
			"classic",
			"timed",
			"no_hints"
		] : band === "challenge" ? [
			"blitz",
			"diagonal",
			"timed"
		] : [
			"speedrun",
			"survival",
			"nightmare"
		],
		reason: !played ? "Play a few boards first; the profile will adapt as results arrive." : band === "gentle" ? "Lower pressure will help you rebuild consistency." : band === "steady" ? "Your pace is stable; mix familiar boards with one training constraint." : band === "challenge" ? "Your clears are strong enough to increase pressure gradually." : "Your recent results support an expert-level challenge."
	};
}
function AdaptiveScreen() {
	const stats = useGame((s) => s.save.stats), unlocked = useGame((s) => s.save.unlockedLevel), go = useGame.getState().go;
	const p = (0, import_react.useMemo)(() => buildAdaptiveProfile(stats, unlocked), [stats, unlocked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Adaptive Challenge",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "Local adaptive engine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: [
								"Challenge score: ",
								p.score,
								"/100"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: p.reason
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Current band"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "capitalize text-fg",
							children: p.band
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Suggested level"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: p.recommendedLevel
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 font-semibold text-fg",
					children: "Recommended training"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-3",
					children: p.recommendedModes.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "panel rounded-xl p-3 text-left text-fg",
						onClick: () => go("modes"),
						children: m.replaceAll("_", " ")
					}, m))
				})] })
			]
		})
	});
}
function buildJourneyPlan(stats, unlockedLevel, results) {
	const p = buildAdaptiveProfile(stats, unlockedLevel);
	const recent = Object.values(results).slice(-12);
	const recentPerfect = recent.length ? recent.filter((r) => r.perfect).length / recent.length : 0;
	const recentHints = recent.length ? recent.reduce((n, r) => n + r.hints, 0) / recent.length : 0;
	const focus = p.band === "gentle" ? "recovery" : p.band === "steady" ? "consistency" : p.band === "challenge" ? "growth" : "mastery";
	const level = p.recommendedLevel;
	const modeA = p.recommendedModes[0] ?? "classic";
	const modeB = p.recommendedModes[1] ?? "timed";
	const modeC = p.recommendedModes[2] ?? "no_hints";
	const hintGoal = recentHints > 1.5 ? "Finish with one fewer hint than your recent average." : "Keep hints at zero or one.";
	const perfectGoal = recentPerfect < .35 ? "Aim for a clean clear with every target found." : "Protect your perfect-clear streak.";
	return {
		score: p.score,
		focus,
		summary: focus === "recovery" ? "Lower pressure first, then rebuild speed." : focus === "consistency" ? "Stabilize your pace before adding pressure." : focus === "growth" ? "Stretch one skill at a time without overloading the session." : "You are ready for a high-pressure mastery run.",
		steps: [
			{
				title: "Warm-up",
				mode: modeA,
				level: Math.max(1, level - 1),
				minutes: 5,
				goal: "Settle into the board and scan accurately."
			},
			{
				title: "Skill push",
				mode: modeB,
				level,
				minutes: 8,
				goal: hintGoal
			},
			{
				title: "Finish strong",
				mode: modeC,
				level: Math.min(2e3, level + 1),
				minutes: 7,
				goal: perfectGoal
			}
		]
	};
}
function JourneyPlannerScreen() {
	const stats = useGame((s) => s.save.stats);
	const unlocked = useGame((s) => s.save.unlockedLevel);
	const results = useGame((s) => s.save.results);
	const go = useGame.getState().go;
	const plan = (0, import_react.useMemo)(() => buildJourneyPlan(stats, unlocked, results), [
		stats,
		unlocked,
		results
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Journey Planner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-primary",
						children: "Personal session plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display mt-1 text-2xl text-fg",
						children: [
							plan.focus,
							" · ",
							plan.score,
							"/100"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: plan.summary
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-3",
				children: plan.steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-wider text-primary",
								children: [
									"Step ",
									i + 1,
									" · ",
									step.minutes,
									" min"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-semibold text-fg",
								children: step.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-surface px-3 py-1 text-xs text-muted",
								children: ["Lv ", step.level]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm capitalize text-fg",
							children: step.mode.replaceAll("_", " ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: step.goal
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "mt-3 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
							onClick: () => go("modes"),
							children: "Choose mode"
						})
					]
				}, step.title))
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function key$1(r, c) {
	return `${r},${c}`;
}
function GridBoard({ puzzle, found, revealed, fog, mirror, tileStyle, disabled, onPath }) {
	const wrapRef = (0, import_react.useRef)(null);
	const [hot, setHot] = (0, import_react.useState)([]);
	const [miss, setMiss] = (0, import_react.useState)([]);
	const drag = (0, import_react.useRef)(null);
	const tap = (0, import_react.useRef)(null);
	const [keyboardCell, setKeyboardCell] = (0, import_react.useState)([0, 0]);
	const [frozenUntil, setFrozenUntil] = (0, import_react.useState)(0);
	const [blast, setBlast] = (0, import_react.useState)([]);
	const onKeyDown = (e) => {
		if (disabled) return;
		const [r, c] = keyboardCell;
		let nr = r, nc = c;
		if (e.key === "ArrowUp") nr = Math.max(0, r - 1);
		else if (e.key === "ArrowDown") nr = Math.min(puzzle.size - 1, r + 1);
		else if (e.key === "ArrowLeft") nc = Math.max(0, c - 1);
		else if (e.key === "ArrowRight") nc = Math.min(puzzle.size - 1, c + 1);
		else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (tap.current) {
				const line = cellsAlong(tap.current[0], tap.current[1], r, c);
				tap.current = null;
				finish(line ?? [[r, c]]);
			} else {
				if (specialMap.get(key$1(r, c)) === "locked") {
					setMiss([[r, c]]);
					setTimeout(() => setMiss([]), 280);
					return;
				}
				tap.current = [r, c];
				setHot([[r, c]]);
			}
			return;
		} else return;
		e.preventDefault();
		setKeyboardCell([nr, nc]);
		setHot(tap.current ? [tap.current, [nr, nc]] : [[nr, nc]]);
	};
	const [mechanicTick, setMechanicTick] = (0, import_react.useState)(0);
	const specialTiles = (0, import_react.useMemo)(() => specialTilesForPuzzle(puzzle), [puzzle]);
	(0, import_react.useEffect)(() => {
		if (!specialTiles.some((t) => t.kind === "moving")) return;
		const id = window.setInterval(() => setMechanicTick((v) => v + 1), 1400);
		return () => window.clearInterval(id);
	}, [specialTiles]);
	const specialMap = (0, import_react.useMemo)(() => movingPositions(specialTiles, mechanicTick), [specialTiles, mechanicTick]);
	const foundSet = (0, import_react.useMemo)(() => {
		const s = /* @__PURE__ */ new Set();
		for (const p of puzzle.placements) {
			if (!found.includes(p.word)) continue;
			for (const [r, c] of p.cells) s.add(key$1(r, c));
		}
		return s;
	}, [puzzle, found]);
	const foundPaths = (0, import_react.useMemo)(() => puzzle.placements.filter((p) => found.includes(p.word)), [puzzle, found]);
	const revealedSet = (0, import_react.useMemo)(() => {
		const s = /* @__PURE__ */ new Set();
		for (const [r, c] of revealed) s.add(key$1(r, c));
		return s;
	}, [revealed]);
	const missSet = (0, import_react.useMemo)(() => new Set(miss.map(([r, c]) => key$1(r, c))), [miss]);
	const hotSet = (0, import_react.useMemo)(() => new Set(hot.map(([r, c]) => key$1(r, c))), [hot]);
	const cellAt = (0, import_react.useCallback)((clientX, clientY) => {
		const el = wrapRef.current;
		if (!el) return null;
		const rect = el.getBoundingClientRect();
		const n = puzzle.size;
		let col = Math.floor((clientX - rect.left) / rect.width * n);
		let row = Math.floor((clientY - rect.top) / rect.height * n);
		if (mirror) col = n - 1 - col;
		if (row < 0 || col < 0 || row >= n || col >= n) return null;
		return [row, col];
	}, [puzzle.size, mirror]);
	const lettersOf = (cells) => cells.map(([r, c]) => puzzle.grid[r][c]).join("");
	const finish = (rawCells) => {
		if (Date.now() < frozenUntil) return;
		const cells = rawCells;
		if (cells.length < 2) {
			setHot([]);
			return;
		}
		const lockedIndex = cells.findIndex(([r, c]) => specialMap.get(key$1(r, c)) === "locked");
		const usable = lockedIndex >= 0 ? cells.slice(0, lockedIndex) : cells;
		if (usable.length < 2) {
			setMiss(cells.slice(0, Math.min(2, cells.length)));
			setTimeout(() => setMiss([]), 280);
			setHot([]);
			return;
		}
		const result = onPath(lettersOf(usable), usable);
		const kinds = new Set(usable.map(([r, c]) => specialMap.get(key$1(r, c))).filter(Boolean));
		if (result === "miss") {
			setMiss(usable);
			setTimeout(() => setMiss([]), 280);
		}
		if (kinds.has("bomb")) {
			const [cr, cc] = usable.find(([r, c]) => specialMap.get(key$1(r, c)) === "bomb");
			const cellsAround = [];
			for (let r = Math.max(0, cr - 1); r <= Math.min(puzzle.size - 1, cr + 1); r++) for (let c = Math.max(0, cc - 1); c <= Math.min(puzzle.size - 1, cc + 1); c++) cellsAround.push([r, c]);
			setBlast(cellsAround);
			setTimeout(() => setBlast([]), 420);
		}
		if (kinds.has("ice")) {
			const until = Date.now() + 900;
			setFrozenUntil(until);
			setTimeout(() => setFrozenUntil((v) => v === until ? 0 : v), 920);
		}
		setHot([]);
	};
	const onDown = (e) => {
		if (disabled || Date.now() < frozenUntil) return;
		const cell = cellAt(e.clientX, e.clientY);
		if (!cell) return;
		e.currentTarget.setPointerCapture(e.pointerId);
		drag.current = {
			id: e.pointerId,
			start: cell,
			cells: [cell],
			moved: false
		};
		setHot([cell]);
		e.preventDefault();
	};
	const onMove = (e) => {
		const d = drag.current;
		if (!d || d.id !== e.pointerId) return;
		const cell = cellAt(e.clientX, e.clientY);
		if (!cell) return;
		if (cell[0] === d.start[0] && cell[1] === d.start[1]) {
			d.cells = [d.start];
			setHot(d.cells);
			return;
		}
		d.moved = true;
		const [sr, sc] = d.start;
		const [er, ec] = cell;
		const [dr, dc] = snapDir(er - sr, ec - sc);
		if (dr === 0 && dc === 0) return;
		const steps = Math.max(Math.abs(er - sr), Math.abs(ec - sc));
		const endR = sr + dr * steps;
		const endC = sc + dc * steps;
		const line = cellsAlong(sr, sc, endR, endC);
		if (!line) return;
		const clipped = line.filter(([r, c]) => r >= 0 && c >= 0 && r < puzzle.size && c < puzzle.size);
		const lockedIndex = clipped.findIndex(([r, c]) => specialMap.get(key$1(r, c)) === "locked");
		d.cells = lockedIndex >= 0 ? clipped.slice(0, lockedIndex) : clipped;
		setHot(clipped);
	};
	const onUp = (e) => {
		const d = drag.current;
		if (!d || d.id !== e.pointerId) return;
		drag.current = null;
		if (!d.moved) {
			if (tap.current) {
				const line = cellsAlong(tap.current[0], tap.current[1], d.start[0], d.start[1]);
				tap.current = null;
				finish(line ?? [d.start]);
			} else {
				tap.current = d.start;
				setHot([d.start]);
			}
			return;
		}
		tap.current = null;
		finish(d.cells);
	};
	const onCancel = (e) => {
		if (drag.current?.id === e.pointerId) {
			drag.current = null;
			setHot(tap.current ? [tap.current] : []);
		}
	};
	const n = puzzle.size;
	const font = n >= 16 ? "text-[11px] sm:text-sm" : n >= 12 ? "text-sm sm:text-base" : "text-base sm:text-lg";
	const pt = (r, c) => {
		return `${(mirror ? n - 1 - c : c) + .5},${r + .5}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrapRef,
		className: "grid-board relative aspect-square w-full max-w-[min(100%,72dvh)]",
		onPointerDown: onDown,
		onPointerMove: onMove,
		onPointerUp: onUp,
		onPointerCancel: onCancel,
		onKeyDown,
		tabIndex: 0,
		role: "grid",
		"aria-label": "Word search grid. Use arrow keys to move and Enter to select cells.",
		"aria-activedescendant": `cell-${keyboardCell[0]}-${keyboardCell[1]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full w-full gap-[3px] sm:gap-1",
			style: { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` },
			children: puzzle.grid.map((row, r) => row.map((ch, cRaw) => {
				const c = mirror ? n - 1 - cRaw : cRaw;
				const letter = puzzle.grid[r][c];
				const k = key$1(r, c);
				const isFound = foundSet.has(k);
				const isHot = hotSet.has(k);
				const isMiss = missSet.has(k);
				const isBlast = blast.some(([br, bc]) => br === r && bc === c);
				const isRev = revealedSet.has(k);
				const special = specialMap.get(k);
				const hide = Boolean(fog) && !isFound && !isHot && !isRev;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: `cell-${r}-${c}`,
					role: "gridcell",
					"data-hot": isHot ? "1" : void 0,
					"data-found": isFound ? "1" : void 0,
					"data-miss": isMiss ? "1" : void 0,
					"data-blast": isBlast ? "1" : void 0,
					"data-frozen": Date.now() < frozenUntil ? "1" : void 0,
					"data-rev": isRev && !isFound ? "1" : void 0,
					"data-special": special,
					"data-style": tileStyle,
					className: cn("letter-tile", font),
					"aria-label": hide ? "hidden letter" : `${letter}${special ? `, ${special} tile` : ""}`,
					children: [hide ? "" : letter, special && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "special-tile-mark",
						"aria-hidden": "true",
						children: special === "ice" ? "❄" : special === "bomb" ? "✦" : special === "locked" ? "🔒" : "↝"
					})]
				}, `${r}-${cRaw}`);
			}))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "pointer-events-none absolute inset-0 h-full w-full",
			viewBox: `0 0 ${n} ${n}`,
			children: [foundPaths.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				stroke: "color-mix(in oklab, var(--color-success) 72%, white)",
				strokeWidth: "0.18",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				opacity: "0.7",
				points: p.cells.map(([r, c]) => pt(r, c)).join(" ")
			}, p.word)), hot.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
				fill: "none",
				stroke: "color-mix(in oklab, var(--color-primary) 88%, white)",
				strokeWidth: "0.22",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				points: hot.map(([r, c]) => pt(r, c)).join(" ")
			})]
		})]
	});
}
var askSmartHint = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	word: String(d.word ?? "").slice(0, 24),
	category: String(d.category ?? "mixed").slice(0, 32)
})).handler(createSsrRpc("654744ea20b062d2b60f2f278bae3afff117b661a98239f16be07de3cbbc8a19"));
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var POWER_UPS = [
	{
		id: "reveal",
		name: "Reveal",
		description: "Reveal the first tile of an unfound word.",
		cost: 18,
		cooldownMs: 0
	},
	{
		id: "scan",
		name: "Word Scan",
		description: "Reveal every tile of the next target word.",
		cost: 45,
		cooldownMs: 0
	},
	{
		id: "focus",
		name: "Focus",
		description: "A short focus boost for difficult rounds.",
		cost: 30,
		cooldownMs: 3e4
	},
	{
		id: "streak",
		name: "Streak Shield",
		description: "Protect your current combo from the next miss.",
		cost: 55,
		cooldownMs: 6e4
	}
];
var DAILY_QUESTS = [
	{
		id: "q_words_10",
		title: "Word Hunter",
		description: "Find 10 words.",
		metric: "wordsFound",
		target: 10,
		rewardCoins: 60,
		rewardXp: 35
	},
	{
		id: "q_win_2",
		title: "Journey Forward",
		description: "Complete 2 rounds.",
		metric: "gamesWon",
		target: 2,
		rewardCoins: 75,
		rewardXp: 45
	},
	{
		id: "q_perfect",
		title: "Flawless",
		description: "Get 1 perfect clear.",
		metric: "perfectClears",
		target: 1,
		rewardCoins: 120,
		rewardXp: 80
	}
];
function questProgress(quest, stats) {
	const value = stats[quest.metric];
	return Math.min(quest.target, Math.max(0, value));
}
function playerXpLevel(xp) {
	return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 40)) + 1);
}
function xpIntoLevel(xp) {
	const level = playerXpLevel(xp);
	const previous = Math.max(0, (level - 1) * (level - 1) * 40);
	const next = level * level * 40;
	return {
		level,
		current: Math.max(0, xp - previous),
		needed: Math.max(1, next - previous)
	};
}
var AD_COOLDOWN_MS = 12e4;
var LAST_AD_KEY = "mwsj:last-h5-ad";
function adsEnabled() {
	return Boolean(void 0);
}
function canShowH5Ad() {
	if (typeof window === "undefined" || !adsEnabled() || typeof window.adBreak !== "function") return false;
	const last = Number(window.localStorage.getItem(LAST_AD_KEY) ?? 0);
	return !Number.isFinite(last) || Date.now() - last >= AD_COOLDOWN_MS;
}
function showH5Interstitial(name, onDone) {
	if (!canShowH5Ad()) return false;
	try {
		window.localStorage.setItem(LAST_AD_KEY, String(Date.now()));
		window.adBreak?.({
			type: "next",
			name,
			adBreakDone: () => onDone?.()
		});
		return true;
	} catch {
		return false;
	}
}
var getMyEntitlements = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("a529758e2663cf4082de79d1fe57edd20a44ee9b3cd6924baf895bc007150042"));
createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	provider: String(d.provider ?? "").slice(0, 32),
	externalId: String(d.externalId ?? "").slice(0, 128)
})).handler(createSsrRpc("d38b308059b70858a9ce92cfceeaa8a429c738b32064fb7cdc0b6429e186b301"));
var createCheckoutSession = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ productId: String(d.productId ?? "").slice(0, 64) })).handler(createSsrRpc("4fffa5a0f63ea41e3ee685646e66e22669d938d88b5e688dbcd2825af9159c32"));
function useAdFree() {
	const [adFree, setAdFree] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let alive = true;
		getMyEntitlements().then((rows) => {
			if (!alive) return;
			setAdFree(rows.some((row) => row.productId === "ad_free" && row.active && (!row.expiresAt || new Date(row.expiresAt).getTime() > Date.now())));
		}).catch(() => {
			if (alive) setAdFree(false);
		});
		return () => {
			alive = false;
		};
	}, []);
	return adFree;
}
var WORLD_ART = [
	"🌿",
	"💎",
	"🏜️",
	"❄️",
	"🌲",
	"☁️"
];
function JourneyLoading() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setProgress((p) => Math.min(100, p + 8)), 70);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "journey-loading app-shell starfield safe-pad grid h-dvh place-items-center text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "journey-orb mx-auto mb-5",
					children: "✦"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.35em] text-accent",
					children: "Ink & Starlight"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl text-fg",
					children: "Mera Word Search Journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-[30ch] text-sm text-muted",
					children: "Words become paths. Paths become adventures."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 h-2 overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary transition-all",
						style: { width: `${progress}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [
						"Preparing your journey… ",
						progress,
						"%"
					]
				})
			]
		})
	});
}
function DailyRewardPopup() {
	const save = useGame((s) => s.save);
	const [open, setOpen] = (0, import_react.useState)(false);
	const claimed = save.lastLoginReward === todayKey();
	(0, import_react.useEffect)(() => {
		if (!claimed) setOpen(true);
	}, [claimed]);
	if (!open || claimed) return null;
	const day = save.loginDays % 7;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-black/65 p-5 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "reward-modal panel w-full max-w-sm rounded-3xl p-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute right-5 top-5 text-muted",
					onClick: () => setOpen(false),
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid size-16 place-items-center rounded-full bg-gold/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-8 text-gold" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs uppercase tracking-[0.25em] text-gold",
					children: "Daily Journey Reward"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-1 font-display text-3xl text-fg",
					children: [
						"Day ",
						day % 7 + 1,
						" Chest"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Keep your streak alive. Your next reward gets better."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reward-pill",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto size-5 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: DAILY_REWARD_COINS[day % 7] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coins" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reward-pill",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "mx-auto size-5 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: Math.min(7, day + 1) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Streak" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reward-pill",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mx-auto size-5 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: day === 6 ? "CHEST" : "+XP" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bonus" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-primary",
					onClick: () => {
						unlockAudio();
						if (save.settings.music) startMusic();
						useGame.getState().claimLogin();
						setOpen(false);
					},
					children: "Claim Reward"
				})
			]
		})
	});
}
function JourneyHero() {
	const save = useGame((s) => s.save);
	const world = worldOf(save.unlockedLevel);
	const journeyWorld = journeyWorldForLevel(save.unlockedLevel);
	const lv = playerLevel(save.xp);
	const restoration = worldRestoration(save, journeyWorld);
	const progress = restoration.percent;
	const pet = save.equippedPet ? petById(save.equippedPet) : null;
	const petProgress = petXpProgress(petXpFor(save.equippedPet, save));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "journey-hero panel overflow-hidden rounded-[28px] p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "journey-hero-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-accent",
						children: "Your adventure"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl text-fg",
						children: world.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"Level ",
							save.unlockedLevel,
							" · Rank ",
							lv
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pet-hero",
					title: pet?.name ?? "Companion",
					children: [pet ? "🐾" : "✦", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "journey-route mt-5",
				children: WORLDS$1.slice(0, 6).map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `journey-node ${w.id === world.id ? "is-current" : ""} ${save.unlockedLevel >= w.from ? "is-open" : "is-locked"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: save.unlockedLevel >= w.from ? WORLD_ART[i] : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: w.name.split(" ")[0] })]
				}, w.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-end justify-between text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted",
					children: ["World restoration · ", restoration.stage]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
					className: "text-fg",
					children: [Math.round(progress), "%"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 h-2 overflow-hidden rounded-full bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary transition-all",
					style: { width: `${progress}%` }
				})
			}),
			pet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-2xl bg-surface-2/80 p-3 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-4 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "Companion:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-fg",
								children: pet.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-auto text-accent",
								children: petEvolutionName(petProgress.level)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-between text-[11px] text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pet XP · Lv. ", petProgress.level] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: petProgress.next == null ? "MAX" : `${petProgress.next - (petProgress.current + (petXpFor(save.equippedPet, save) - petProgress.current))} to evolve` })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-1.5 overflow-hidden rounded-full bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-accent transition-all",
							style: { width: `${petProgress.percent}%` }
						})
					})
				]
			})
		]
	});
}
function GameplayFeedback({ combo, found, total }) {
	const multiplier = combo >= 5 ? 3 : combo >= 3 ? 2 : 1;
	const remaining = Math.max(0, total - found);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "gameplay-hud",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hud-chip text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5 text-gold" }),
					" Combo ",
					combo
				]
			}),
			multiplier > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "combo-burst",
				children: ["x", multiplier]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hud-chip text-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3.5 text-accent" }),
					" ",
					remaining,
					" left"
				]
			})
		]
	});
}
/** Responsive AdSense display unit. It stays hidden until an AdSense publisher id and slot are configured. */
function AdBanner({ slot, className = "", label = "Advertisement" }) {
	const adFree = useAdFree();
	const ref = (0, import_react.useRef)(null);
	const publisherId = void 0;
	const adSlot = slot?.trim() || void 0;
	(0, import_react.useEffect)(() => {
		if (adFree || !adsEnabled() || true) return;
		try {
			window.adsbygoogle = window.adsbygoogle || [];
			window.adsbygoogle.push({});
		} catch {}
	}, [
		adFree,
		adSlot,
		publisherId
	]);
	if (adFree || !adsEnabled() || true) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `w-full overflow-hidden rounded-2xl panel p-2 ${className}`,
		"aria-label": label,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-2 pb-1 text-center text-[9px] uppercase tracking-[0.18em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ins", {
			ref,
			className: "adsbygoogle block min-h-[90px] w-full",
			style: { display: "block" },
			"data-ad-client": publisherId,
			"data-ad-slot": adSlot,
			"data-ad-format": "auto",
			"data-full-width-responsive": "true"
		})]
	});
}
function fmt(ms) {
	const s = Math.max(0, Math.floor(ms / 1e3));
	return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}
function PlayScreen() {
	const play = useGame((s) => s.play);
	const save = useGame((s) => s.save);
	const overlay = useGame((s) => s.overlay);
	const lastReward = useGame((s) => s.lastReward);
	const lang = save.language;
	const user = useCurrentUser();
	const [tick, setTick] = (0, import_react.useState)(0);
	const [aiHint, setAiHint] = (0, import_react.useState)(null);
	const [aiBusy, setAiBusy] = (0, import_react.useState)(false);
	const [powerCooldowns, setPowerCooldowns] = (0, import_react.useState)({});
	const [showSystems, setShowSystems] = (0, import_react.useState)(false);
	const [feedbackKey, setFeedbackKey] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (play?.found.length) setFeedbackKey((n) => n + 1);
	}, [play?.found.length]);
	const adFree = useAdFree();
	(0, import_react.useEffect)(() => {
		if (!play || !user || play.serverSessionId) return;
		startGameplaySession({ data: {
			kind: play.kind === "daily" ? "daily" : "level",
			level: play.level || 1,
			day: play.kind === "daily" ? todayKey() : void 0,
			mode: play.mode,
			language: save.language,
			dailyChallengeId: play.dailyChallenge?.id
		} }).then((res) => {
			if (res.ok && useGame.getState().play?.serverSessionId == null) {
				const current = useGame.getState().play;
				if (current) {
					const next = {
						...current,
						serverSessionId: res.sessionId,
						timeLimit: Math.floor(res.timeLimitMs / 1e3),
						adaptiveTier: res.adaptiveTier ?? current.adaptiveTier
					};
					sessionStorage.setItem("mwsj.play.v1", JSON.stringify(next));
					useGame.setState({ play: next });
				}
			}
		}).catch(() => void 0);
	}, [
		play?.serverSessionId,
		play?.level,
		play?.kind,
		play?.mode,
		save.language,
		user
	]);
	(0, import_react.useEffect)(() => {
		if (!play || play.pausedAt || overlay) return;
		const id = window.setInterval(() => setTick((n) => n + 1), 250);
		return () => clearInterval(id);
	}, [
		play,
		overlay,
		play?.pausedAt
	]);
	const elapsed = play ? (play.pausedAt ? play.pausedAt : Date.now()) - play.startAt - play.pausedMs : 0;
	const remaining = play?.timeLimit != null ? play.timeLimit * 1e3 - elapsed : null;
	(0, import_react.useEffect)(() => {
		if (remaining != null && remaining <= 0 && play && !overlay) useGame.getState().failPlay();
	}, [
		remaining,
		play,
		overlay,
		tick
	]);
	(0, import_react.useEffect)(() => {
		if (overlay !== "win" || !play || !user) return;
		if (!play.serverSessionId) return;
		const sessionId = play.serverSessionId;
		window.setTimeout(() => {
			verifyGameplayCompletion({ data: {
				sessionId,
				found: play.found,
				paths: play.actions.filter((a) => a.type === "found").map((a) => ({
					word: a.word ?? "",
					cells: a.cells ?? []
				}))
			} }).then((res) => {
				if (res.ok && !res.duplicate && res.save) useGame.getState().applyServerSave(res.save);
			}).catch(() => void 0);
		}, 700);
	}, [overlay, play?.serverSessionId]);
	const remainingWords = (0, import_react.useMemo)(() => {
		if (!play) return [];
		return play.puzzle.words.filter((w) => !play.found.includes(w));
	}, [play]);
	if (!play) return null;
	const fog = play.mode === "fog" || play.dailyChallenge?.id === "hidden";
	const mirror = play.mode === "mirror";
	const onAi = async () => {
		const w = remainingWords[0];
		if (!w || aiBusy) return;
		setAiBusy(true);
		try {
			const res = await askSmartHint({ data: {
				word: w,
				category: play.puzzle.category
			} });
			setAiHint(res.ok ? res.text : res.error);
		} catch {
			setAiHint("Sign in to ask the scribe for a riddle.");
		} finally {
			setAiBusy(false);
		}
	};
	const usePowerUp = (id) => {
		const power = POWER_UPS.find((p) => p.id === id);
		if (!power) return;
		const now = Date.now();
		if ((powerCooldowns[id] ?? 0) > now) return;
		if (save.coins < power.cost) return;
		if (id === "reveal") {
			if (!useGame.getState().useHint("first")) return;
		} else if (id === "scan") {
			if (!useGame.getState().useHint("word")) return;
		} else if (id === "focus") useGame.getState().patchSave((x) => ({
			...x,
			coins: x.coins - power.cost,
			stats: {
				...x.stats,
				coinsEarned: x.stats.coinsEarned
			}
		}));
		else useGame.getState().patchSave((x) => ({
			...x,
			coins: x.coins - power.cost,
			inventory: x.inventory.includes("streak-shield") ? x.inventory : [...x.inventory, "streak-shield"]
		}));
		setPowerCooldowns((x) => ({
			...x,
			[id]: power.cooldownMs ? now + power.cooldownMs : now + 800
		}));
	};
	const xpBar = xpIntoLevel(save.xp);
	const questCards = DAILY_QUESTS.map((q) => ({
		...q,
		progress: questProgress(q, save.stats)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell safe-pad flex h-dvh flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
						onClick: () => useGame.getState().pausePlay(),
						"aria-label": t(lang, "cta.pause"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-display text-sm text-fg",
							children: play.puzzle.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								play.found.length,
								"/",
								play.puzzle.words.length,
								play.bonus.length ? ` · +${play.bonus.length}` : ""
							]
						})]
					}),
					save.settings.showTimer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hud-chip text-fg",
						children: remaining != null ? fmt(remaining) : fmt(elapsed)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
						onClick: () => useGame.getState().pausePlay(),
						"aria-label": t(lang, "cta.pause"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameplayFeedback, {
				combo: play.combo,
				found: play.found.length,
				total: play.puzzle.words.length
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdBanner, { className: "shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoalStrip, { goals: shortTermGoals({
				level: play.level || 1,
				combo: play.combo,
				found: play.found.length,
				total: play.puzzle.words.length,
				bonus: play.bonus.length,
				daily: play.kind === "daily",
				adaptiveTier: play.adaptiveTier
			}) }),
			play.dailyChallenge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-xl rounded-xl border border-white/10 bg-surface-2 px-3 py-2 text-xs text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
					play.dailyChallenge.icon,
					" ",
					play.dailyChallenge.title
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-muted",
					children: play.dailyChallenge.description
				})]
			}),
			play.kind === "level" && play.adaptiveTier === "assist" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xl rounded-xl bg-accent/10 px-3 py-1.5 text-center text-[10px] font-semibold text-accent",
				children: "Smart Assist · the journey is giving you a little breathing room"
			}),
			play.kind === "level" && play.adaptiveTier === "expert" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xl rounded-xl bg-gold/10 px-3 py-1.5 text-center text-[10px] font-semibold text-gold",
				children: "Expert Pace · bonus-word mastery challenge active"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid min-h-0 flex-1 place-items-center gameplay-board-pop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBoard, {
					puzzle: play.puzzle,
					found: play.found,
					revealed: play.revealed,
					fog,
					mirror,
					tileStyle: save.settings.tileStyle,
					disabled: Boolean(overlay),
					onPath: (letters, cells) => useGame.getState().submitPath(letters, cells)
				})
			}, feedbackKey),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex max-h-28 flex-wrap gap-1.5 overflow-y-auto py-1",
				children: play.puzzle.words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "word-chip text-fg",
					"data-found": play.found.includes(w) ? "1" : void 0,
					children: mirror ? [...w].reverse().join("") : w
				}, w))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "panel rounded-xl px-3 py-2 text-left text-xs font-semibold text-fg",
				onClick: () => setShowSystems((v) => !v),
				children: ["Power-ups · Daily quests · Rank ", xpBar.level]
			}),
			showSystems && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-gold",
							children: "Power-ups"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] text-muted tabular-nums",
							children: [
								xpBar.current,
								"/",
								xpBar.needed,
								" xp"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-1.5",
						children: POWER_UPS.map((p) => {
							const locked = (powerCooldowns[p.id] ?? 0) > Date.now();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: locked || save.coins < p.cost,
								onClick: () => usePowerUp(p.id),
								className: "rounded-xl border border-border px-1 py-2 text-center text-[10px] font-semibold text-fg disabled:opacity-40",
								title: p.description,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-gold",
									children: [p.cost, "c"]
								})]
							}, p.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 mb-1 text-xs font-semibold uppercase tracking-wider text-gold",
						children: "Daily quests"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5",
						children: questCards.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-surface-2 px-2 py-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[11px] text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [
										q.progress,
										"/",
										q.target
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1 overflow-hidden rounded-full bg-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-accent",
									style: { width: `${q.progress / q.target * 100}%` }
								})
							})]
						}, q.id))
					})
				]
			}),
			aiHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted",
				children: aiHint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 pb-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HintBtn, {
						label: "First",
						cost: HINT_COST.first,
						onClick: () => useGame.getState().useHint("first")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HintBtn, {
						label: "Letter",
						cost: HINT_COST.letter,
						onClick: () => useGame.getState().useHint("letter")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HintBtn, {
						label: "Word",
						cost: HINT_COST.word,
						onClick: () => useGame.getState().useHint("word")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void onAi(),
						className: "inline-flex h-11 flex-1 items-center justify-center gap-1 rounded-xl panel text-xs font-semibold text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), aiBusy ? "…" : "Riddle"]
					})
				]
			}),
			overlay === "pause" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PauseModal, { lang }),
			overlay === "win" && lastReward && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WinModal, {
				lang,
				playKind: play.kind,
				level: play.level,
				reward: lastReward,
				adFree,
				save
			}),
			overlay === "fail" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FailModal, { lang })
		]
	});
}
function GoalStrip({ goals }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto flex w-full max-w-xl gap-1.5 overflow-x-auto pb-0.5",
		"aria-label": "Short term goals",
		children: goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${goal.done ? "border-success/40 bg-success/10 text-success" : "border-white/10 bg-surface-2 text-muted"}`,
			children: [
				goal.done ? "✓" : "○",
				" ",
				goal.label
			]
		}, goal.id))
	});
}
function HintBtn({ label, cost, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "inline-flex h-11 flex-1 flex-col items-center justify-center rounded-xl panel text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 text-xs font-semibold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-3.5" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-gold",
			children: cost
		})]
	});
}
function PauseModal({ lang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl text-fg",
		children: t(lang, "play.paused")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn-primary",
			onClick: () => useGame.getState().resumePlay(),
			children: t(lang, "cta.resume")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn-ghost",
			onClick: () => useGame.getState().quitPlay(),
			children: t(lang, "cta.quit")
		})]
	})] });
}
function WinModal({ lang, playKind, level, reward, adFree, save }) {
	const petXp = petXpFor(save.equippedPet, save);
	const result = playKind === "level" ? save.results[String(level)] : null;
	const earnedPetXp = save.equippedPet ? petXpEarned({
		perfect: Boolean(result?.perfect),
		boss: playKind === "level" && level > 0 && isJourneyBoss(level)
	}) : 0;
	const petProgress = petXpProgress(petXp);
	const isFinal = level >= MAX_LEVEL;
	const next = !isFinal && playKind === "level" ? puzzleForLevel(level + 1, "classic", save.language) : null;
	const preview = next ? nextChallengePreview(level + 1, next) : null;
	const world = journeyWorldForLevel(level);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.18em] text-gold",
			children: reward.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-3xl text-fg",
			children: t(lang, "play.complete")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "celebration-fireworks",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-lg text-gold",
			children: ["★".repeat(reward.stars), "☆".repeat(3 - reward.stars)]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [
				"+",
				reward.coins,
				" coins · +",
				reward.xp,
				" xp"
			]
		}),
		save.equippedPet && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-2xl bg-surface-2 p-3 text-left text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "🐾 Pet progress"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
					className: "text-fg",
					children: [
						petEvolutionName(petProgress.level),
						" · Lv. ",
						petProgress.level
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 text-muted",
				children: [
					"+",
					earnedPetXp,
					" Pet XP · ",
					petProgress.next == null ? "Evolution maxed" : `${Math.max(0, petProgress.next - petXp)} XP to next evolution`
				]
			})]
		}),
		preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-2xl border border-white/10 bg-surface-2 p-3 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.18em] text-accent",
					children: "Next challenge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm font-semibold text-fg",
					children: [
						preview.icon,
						" ",
						preview.label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 text-xs text-muted",
					children: [
						"Level ",
						level + 1,
						" · ",
						preview.detail
					]
				})
			]
		}),
		isFinal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-2xl bg-gold/10 p-3 text-sm text-gold",
			children: [
				"🏆 ",
				world.name,
				" campaign complete. The final archive is restored."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-col gap-2",
			children: [
				playKind === "level" && level > 0 && isJourneyBoss(level) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: () => useGame.getState().startBossCombat(level),
					children: "Enter Guardian Battle"
				}),
				playKind === "level" && !isFinal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: () => {
						const nextLevel = () => useGame.getState().startLevel(level + 1);
						if (!adFree && showH5Interstitial("level-complete", nextLevel)) return;
						nextLevel();
					},
					children: t(lang, "cta.next")
				}),
				isFinal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: () => useGame.getState().go("worldMap"),
					children: "Journey Map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-ghost",
					onClick: () => useGame.getState().quitPlay(),
					children: t(lang, "cta.home")
				})
			]
		})
	] });
}
function FailModal({ lang }) {
	const play = useGame((s) => s.play);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-display text-2xl text-fg",
		children: t(lang, "play.failed")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn-primary",
			onClick: () => {
				if (!play) return;
				if (play.kind === "daily") useGame.getState().startDaily();
				else if (play.kind === "endless") useGame.getState().startEndless();
				else useGame.getState().startLevel(play.level, play.mode);
			},
			children: t(lang, "cta.retry")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn-ghost",
			onClick: () => useGame.getState().quitPlay(),
			children: t(lang, "cta.home")
		})]
	})] });
}
function Modal({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-20 grid place-items-center bg-bg/70 p-6 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel animate-pop w-full max-w-sm rounded-2xl p-6 text-center",
			children
		})
	});
}
function recommendLiveEvent(save) {
	if (!personalizationEnabled(save)) return {
		id: "standard-daily",
		title: "Daily Challenge",
		detail: "Today's short puzzle is ready.",
		kind: "daily"
	};
	const p = profileFor(save);
	if (p.speed_preference >= 72 && p.skill_score >= 68) return {
		id: "speed-pulse",
		title: "60-Second Speed Pulse",
		detail: "Beat the clock without changing your normal journey.",
		kind: "speed"
	};
	if (p.pet_affinity >= 68) return {
		id: "pet-trail",
		title: "Pet Trail",
		detail: "A short pet-focused objective is live.",
		kind: "pet"
	};
	if (p.collection_affinity >= 68) return {
		id: "artifact-hunt",
		title: "Artifact Hunt",
		detail: "Find a collectible on your next few clears.",
		kind: "collection"
	};
	if (p.difficulty_preference >= 72 && p.skill_score >= 68) return {
		id: "mastery-window",
		title: "Mastery Window",
		detail: "Try one harder bonus objective today.",
		kind: "mastery"
	};
	return {
		id: "daily-pulse",
		title: "Daily Discovery",
		detail: "A small fresh objective is waiting.",
		kind: "daily"
	};
}
function SplashScreen() {
	const [entered, setEntered] = (0, import_react.useState)(false);
	const enterAcademy = () => {
		if (entered) return;
		setEntered(true);
		unlockAudio();
		if (useGame.getState().save.settings.music) startMusic();
		window.setTimeout(() => useGame.getState().go("preschool"), 260);
	};
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(enterAcademy, 4200);
		return () => window.clearTimeout(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `academy-opening ${entered ? "is-entering" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-opening-art",
				"aria-hidden": "true",
				style: { backgroundImage: `url(${ACADEMY_ART})` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-opening-sky",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "academy-opening-sparkles",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "academy-opening-touch",
				onClick: enterAcademy,
				"aria-label": "Enter Little Learners Academy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-opening-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "academy-opening-mascot",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: MASCOT_ART,
								alt: "",
								className: "academy-opening-mascot-art"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "academy-opening-star",
								children: "★"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "academy-opening-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "academy-opening-kicker",
									children: "WELCOME, LITTLE LEARNER"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Little Learners" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ACADEMY" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Learn ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "•" }),
									" Play ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "•" }),
									" Grow"
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "academy-opening-enter",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "academy-opening-enter-icon",
								children: "▶"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Enter the Academy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Tap anywhere to begin" })] })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "academy-opening-bottom",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nursery" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "KG" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Montessori" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-opening-loader",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
			})
		]
	});
}
function HomeScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	const world = worldOf(save.unlockedLevel);
	const claimed = save.lastLoginReward === todayKey();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell starfield safe-pad flex h-dvh flex-col gap-4 overflow-y-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-accent",
					children: save.playerName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl text-fg",
					children: t("app.title")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
					onClick: () => useGame.getState().go("profile"),
					"aria-label": t("cta.profile"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudChips, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "journey-continue btn-primary animate-pop",
				onClick: () => useGame.getState().go("preschool"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs uppercase tracking-[0.2em] opacity-80",
					children: "Little Learners Academy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "block text-lg",
					children: "Enter Nursery, KG or Montessori"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl",
					children: "→"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyHero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdBanner, {}),
			(() => {
				const rec = recommendFor(save);
				const live = recommendLiveEvent(save);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					"aria-label": "Personalized recommendations",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel rounded-2xl p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.2em] text-accent",
									children: "For You"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-fg",
									children: rec.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: rec.detail
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "✦"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.2em] text-gold",
								children: "Live Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-fg",
								children: live.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: live.detail
							})
						]
					})]
				});
			})(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "journey-continue btn-primary animate-pop",
				onClick: () => useGame.getState().startLevel(save.unlockedLevel),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs uppercase tracking-[0.2em] opacity-80",
					children: "Continue Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "block text-lg",
					children: [
						"Level ",
						save.unlockedLevel,
						" · ",
						world.name
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-2xl",
					children: "→"
				})]
			}),
			!claimed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "panel flex items-center justify-between rounded-2xl p-4 text-left",
				onClick: () => useGame.getState().claimLogin(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 text-sm font-semibold text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-4 text-gold" }), " Daily reward ready"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [
						"Day ",
						save.loginDays % 7 + 1,
						" · +",
						DAILY_REWARD_COINS[save.loginDays % 7],
						" coins"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold text-primary",
					children: "Claim"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Baby, { className: "size-5" }),
						label: "Academy",
						onClick: () => useGame.getState().go("preschool")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-5" }),
						label: t("cta.worlds"),
						onClick: () => useGame.getState().go("worlds")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" }),
						label: t("cta.daily"),
						onClick: () => useGame.getState().go("daily")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-5" }),
						label: t("cta.modes"),
						onClick: () => useGame.getState().go("modes")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" }),
						label: t("cta.shop"),
						onClick: () => useGame.getState().go("shop")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-5" }),
						label: t("cta.pets"),
						onClick: () => useGame.getState().go("pets")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-5" }),
						label: t("cta.achievements"),
						onClick: () => useGame.getState().go("achievements")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-5" }),
						label: "Wild Whispers",
						onClick: () => useGame.getState().go("wildWhispers")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-5" }),
						label: t("cta.spin"),
						onClick: () => useGame.getState().go("spin")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5" }),
						label: t("cta.story"),
						onClick: () => useGame.getState().go("story")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileButton, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" }),
						label: t("cta.more"),
						onClick: () => useGame.getState().go("more")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyRewardPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "sr-only",
				children: [
					playerLevel(save.xp),
					" ",
					WORD_COUNT
				]
			})
		]
	});
}
var PAGE = 40;
function WorldsScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	const [worldId, setWorldId] = (0, import_react.useState)(() => worldOf(save.unlockedLevel).id);
	const [page, setPage] = (0, import_react.useState)(0);
	const world = WORLDS$1.find((w) => w.id === worldId) ?? WORLDS$1[0];
	const levels = (0, import_react.useMemo)(() => {
		const all = [];
		for (let i = world.from; i <= world.to; i++) all.push(i);
		return all;
	}, [world]);
	const pages = Math.max(1, Math.ceil(levels.length / PAGE));
	const safePage = Math.min(page, pages - 1);
	const slice = levels.slice(safePage * PAGE, safePage * PAGE + PAGE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("cta.worlds"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex gap-2 overflow-x-auto pb-1",
				children: WORLDS$1.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setWorldId(w.id);
						setPage(0);
					},
					className: "hud-chip shrink-0 text-fg",
					style: w.id === worldId ? { borderColor: "var(--color-primary)" } : void 0,
					children: w.name
				}, w.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-muted",
				children: world.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-2 sm:grid-cols-8",
				children: slice.map((n) => {
					const locked = n > save.unlockedLevel;
					const res = save.results[String(n)];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: locked,
						onClick: () => useGame.getState().startLevel(n),
						className: "panel relative flex aspect-square flex-col items-center justify-center rounded-xl text-xs font-semibold text-fg disabled:opacity-40",
						children: [
							locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5 text-muted" }) : n,
							isBoss(n) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-1 top-1 size-1.5 rounded-full bg-gold" }),
							res && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] text-gold",
								children: [res.stars, "★"]
							})
						]
					}, n);
				})
			}),
			pages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
						disabled: safePage === 0,
						onClick: () => setPage((p) => Math.max(0, p - 1)),
						"aria-label": "Previous page",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted",
						children: [
							safePage + 1,
							" / ",
							pages
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center rounded-xl panel",
						disabled: safePage >= pages - 1,
						onClick: () => setPage((p) => Math.min(pages - 1, p + 1)),
						"aria-label": "Next page",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			})
		]
	});
}
function ModesScreen() {
	const t = useT();
	const level = useGame((s) => s.save.unlockedLevel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.modes"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2",
			children: ADVANCED_MODE_CATALOG.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "panel rounded-2xl p-4 text-left transition-transform active:scale-[0.99]",
				onClick: () => {
					if (m.id === "endless") useGame.getState().startEndless();
					else useGame.getState().startLevel(level, m.id);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-fg",
						children: m.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hud-chip text-[10px] text-gold",
						children: m.difficulty === 0 ? "FREE" : `★ ${m.difficulty}`
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: m.description
				})]
			}, m.id))
		})
	});
}
var THEMES = [
	{
		id: "midnight",
		name: "Midnight Ink",
		bg: "#0b0f18",
		fg: "#ece8dc",
		tile: "#1c2436",
		accent: "#667eea"
	},
	{
		id: "parchment",
		name: "Parchment",
		bg: "#e8dcc8",
		fg: "#2a2418",
		tile: "#f4efe2",
		accent: "#6b4f2a"
	},
	{
		id: "ocean",
		name: "Tidepool",
		bg: "#07161c",
		fg: "#d7f0ea",
		tile: "#123039",
		accent: "#3dba9a"
	},
	{
		id: "forest",
		name: "Canopy",
		bg: "#10160f",
		fg: "#e6edd8",
		tile: "#1c2a18",
		accent: "#7aa35a"
	},
	{
		id: "ember",
		name: "Hearth",
		bg: "#1a0f0c",
		fg: "#f3e2d4",
		tile: "#2c1812",
		accent: "#e07a4c"
	},
	{
		id: "orchid",
		name: "Orchid",
		bg: "#140e18",
		fg: "#f0e4f2",
		tile: "#26182c",
		accent: "#b07ad4"
	},
	{
		id: "arctic",
		name: "Arctic",
		bg: "#0e1418",
		fg: "#e8eef3",
		tile: "#1a2630",
		accent: "#8eb4d4"
	},
	{
		id: "sakura",
		name: "Sakura",
		bg: "#181014",
		fg: "#f6e8ea",
		tile: "#2a1820",
		accent: "#e08aa0"
	}
];
var AVATARS = [
	{
		id: "ink-1",
		label: "Quill"
	},
	{
		id: "ink-2",
		label: "Lantern"
	},
	{
		id: "ink-3",
		label: "Compass"
	},
	{
		id: "ink-4",
		label: "Anchor"
	},
	{
		id: "ink-5",
		label: "Falcon"
	},
	{
		id: "ink-6",
		label: "Lotus"
	},
	{
		id: "ink-7",
		label: "Crescent"
	},
	{
		id: "ink-8",
		label: "Mountain"
	},
	{
		id: "ink-9",
		label: "Wave"
	},
	{
		id: "ink-10",
		label: "Star"
	},
	{
		id: "ink-11",
		label: "Leaf"
	},
	{
		id: "ink-12",
		label: "Flame"
	}
];
var CLASSES$1 = [
	{
		id: "detective",
		name: "Detective",
		blurb: "Sees one extra first-letter hint."
	},
	{
		id: "scholar",
		name: "Scholar",
		blurb: "Dictionary entries unlock earlier."
	},
	{
		id: "explorer",
		name: "Explorer",
		blurb: "Starts with the Inkhound companion."
	},
	{
		id: "warrior",
		name: "Warrior",
		blurb: "Boss timers are a little kinder."
	}
];
var loadCloudSave = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("605d10bea64093ac377846d67f1811a2ce1286719d2ee61be6bb04960c9bd8b7"));
var pushCloudSave = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	json: String(d.json ?? "").slice(0, 25e4),
	expectedRevision: Number.isFinite(d.expectedRevision) ? Math.max(0, Math.floor(Number(d.expectedRevision))) : void 0
})).handler(createSsrRpc("5d21986f1c0a9295dd8f4b064e16a8fc28368c3eff1b4beaea29cffc1442ec44"));
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/** Render children only when a user is present (real session, or the disabled-auth dev user). */
function SignedIn({ children }) {
	const { user } = useCurrentUserState();
	return user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }) : null;
}
/**
* Render children only once we KNOW the visitor is signed out (`isPending` has
* cleared and there is no user). Hidden while the session is still loading.
*/
function SignedOut({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending || user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
function ShopScreen() {
	const t = useT();
	const owned = useGame((s) => s.save.ownedThemes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("shop.title"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudChips, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-col gap-2",
			children: SHOP.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "panel flex items-center justify-between rounded-2xl p-4 text-left",
				onClick: () => useGame.getState().buy(item.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold text-fg",
					children: item.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: "theme" in item && item.theme && owned.includes(item.theme) ? "Owned" : item.kind
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-semibold text-gold",
					children: [item.coins ? `${item.coins}c` : "", item.diamonds ? `${item.diamonds}d` : ""]
				})]
			}, item.id))
		})]
	});
}
function PetsScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("pets.title"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2",
			children: PETS$1.map((p) => {
				const owned = save.ownedPets.includes(p.id);
				const on = save.equippedPet === p.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel rounded-2xl p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-fg",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-accent",
								children: p.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: p.blurb
							})
						] }), owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hud-chip text-fg",
								onClick: () => useGame.getState().equipPet(p.id),
								children: on ? "With you" : "Travel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "hud-chip text-gold",
								onClick: () => useGame.getState().upgradePet(p.id),
								children: [
									"Lv ",
									save.petLevels[p.id] ?? 1,
									" · Upgrade"
								]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hud-chip text-gold",
							onClick: () => useGame.getState().buyPet(p.id),
							children: p.coins ? `${p.coins}c` : `${p.diamonds}d`
						})]
					})
				}, p.id);
			})
		})
	});
}
function ProfileScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	const lv = playerLevel(save.xp);
	const next = xpForLevel(lv + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("profile.title"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs text-muted",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 w-full rounded-xl border border-border bg-surface-2 px-3 py-2 text-fg",
						value: save.playerName,
						maxLength: 24,
						onChange: (e) => useGame.getState().setName(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Rank ",
							lv,
							" · ",
							save.xp,
							" xp · next ",
							next
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 overflow-hidden rounded-full bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-primary",
							style: { width: `${Math.min(100, save.xp / Math.max(1, next) * 100)}%` }
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs uppercase tracking-wider text-muted",
				children: "Class"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid grid-cols-2 gap-2",
				children: CLASSES$1.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "panel rounded-2xl p-3 text-left",
					onClick: () => useGame.getState().patchSave((s) => ({
						...s,
						classId: c.id
					})),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-fg",
						children: c.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: c.blurb
					})]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs uppercase tracking-wider text-muted",
				children: "Avatar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid grid-cols-4 gap-2",
				children: AVATARS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => useGame.getState().setAvatar(a.id),
					className: "panel aspect-square rounded-xl text-xs font-semibold text-fg",
					style: save.avatarId === a.id ? { outline: "2px solid var(--color-primary)" } : void 0,
					children: a.label
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "btn-primary max-w-xs",
					children: t("cta.signIn")
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRow, {})
		]
	});
}
function CloudRow() {
	const [msg, setMsg] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn-ghost",
				onClick: async () => {
					try {
						const remote = await loadCloudSave();
						if (!remote.ok) {
							setMsg(remote.error);
							return;
						}
						if (remote.save && typeof remote.save === "object") useGame.getState().applyCloud(remote.save);
						else setMsg("No cloud save yet.");
					} catch {
						setMsg("Sign in to sync.");
					}
				},
				children: "Pull cloud save"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn-ghost",
				onClick: async () => {
					try {
						await pushCloudSave({ data: { json: useGame.getState().exportJson() } });
						setMsg("Saved to cloud.");
					} catch {
						setMsg("Sign in to sync.");
					}
				},
				children: "Push cloud save"
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: msg
			})
		]
	});
}
function SettingsScreen() {
	const t$1 = useT();
	const s = useGame((s) => s.save.settings);
	const lang = useGame((s) => s.save.language);
	const set = useGame.getState().setSetting;
	const [category, setCategory] = (0, import_react.useState)(null);
	const toggle = (k) => {
		const next = !s[k];
		set(k, next);
		if (k === "music") {
			applyVolumes({ musicOn: next });
			if (next) startMusic();
			else stopMusic();
		}
		if (k === "sfx") applyVolumes({ sfxOn: next });
	};
	const categories = [
		{
			id: "gameplay",
			icon: "🎮",
			title: "Gameplay",
			description: "Game behavior and play options"
		},
		{
			id: "audio",
			icon: "🔊",
			title: "Audio",
			description: "Music, sound effects and haptics"
		},
		{
			id: "appearance",
			icon: "🎨",
			title: "Appearance",
			description: "Theme and tile style"
		},
		{
			id: "accessibility",
			icon: "♿",
			title: "Accessibility",
			description: "Display, motion and reading options"
		},
		{
			id: "language",
			icon: "🌐",
			title: "Language",
			description: "Choose your language"
		},
		{
			id: "safety",
			icon: "🔒",
			title: "Kids Safety",
			description: "Lock the learning app for children"
		},
		{
			id: "data",
			icon: "💾",
			title: "Data",
			description: "Export, import or reset your save"
		}
	];
	const renderCategory = () => {
		switch (category) {
			case "gameplay": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Gameplay",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Personalized gameplay",
					on: s.personalization,
					onClick: () => toggle("personalization")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "-mt-1 mb-3 text-xs text-muted",
					children: "Uses only in-game behavior such as pace, hints, combos, pets and challenges."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Show timer",
					on: s.showTimer,
					onClick: () => toggle("showTimer")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Grid lines",
					on: s.gridLines,
					onClick: () => toggle("gridLines")
				})
			] });
			case "audio": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Audio",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Sound effects",
					on: s.sfx,
					onClick: () => toggle("sfx")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Music",
					on: s.music,
					onClick: () => toggle("music")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Haptics",
					on: s.haptics,
					onClick: () => toggle("haptics")
				})
			] });
			case "appearance": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Appearance",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Tile style"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-3 gap-2",
					children: [
						"carved",
						"ink",
						"neon"
					].map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "hud-chip text-fg capitalize",
						onClick: () => set("tileStyle", st),
						children: st
					}, st))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs text-muted",
					children: "Theme"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: THEMES.map((th) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "panel rounded-xl p-3 text-left",
						onClick: () => useGame.getState().equipTheme(th.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold text-fg",
							children: th.name
						})
					}, th.id))
				})
			] });
			case "accessibility": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Accessibility",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Reduced motion",
					on: s.reducedMotion,
					onClick: () => toggle("reducedMotion")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "High contrast",
					on: s.highContrast,
					onClick: () => toggle("highContrast")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Larger type",
					on: s.largeText,
					onClick: () => toggle("largeText")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Force RTL",
					on: s.rtlForce,
					onClick: () => toggle("rtlForce")
				})
			] });
			case "language": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Language",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs text-muted",
					children: "App language"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "mt-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg",
					value: lang,
					onChange: (e) => useGame.getState().setLang(e.target.value),
					children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: l,
						children: t(l, `lang.${l}`)
					}, l))
				})
			] });
			case "safety": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Kids Safety",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					label: "Kids Lock",
					on: s.parentalLock,
					onClick: () => toggle("parentalLock")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-5 text-muted",
					children: "When enabled, the app enters a child-safe fullscreen lock and asks for a parent PIN before leaving. The browser cannot block Android/iOS system navigation or other apps; use Android Screen Pinning/App Pinning or managed kiosk mode for full device lockdown."
				})
			] });
			case "data": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingHeader, {
					title: "Data",
					onBack: () => setCategory(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-ghost",
					onClick: () => {
						const blob = new Blob([useGame.getState().exportJson()], { type: "application/json" });
						const a = document.createElement("a");
						a.href = URL.createObjectURL(blob);
						a.download = "mera-word-search.json";
						a.click();
					},
					children: "Export save"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "btn-ghost mt-2",
					children: ["Import save", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "application/json",
						className: "hidden",
						onChange: async (e) => {
							const file = e.target.files?.[0];
							if (!file) return;
							useGame.getState().importJson(await file.text());
						}
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-ghost mt-2 text-danger",
					onClick: () => useGame.getState().resetProgress(),
					children: "Reset progress"
				})
			] });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-col gap-3",
				children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCategory(item.id),
					className: "panel flex items-center gap-4 rounded-2xl p-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							children: item.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-semibold text-fg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted",
								children: item.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg text-muted",
							children: "›"
						})
					]
				}, item.id))
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t$1("settings.title"),
		children: renderCategory()
	});
}
function SettingHeader({ title, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "hud-chip text-fg",
			onClick: onBack,
			children: "←"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-semibold text-fg",
			children: title
		})]
	});
}
function ToggleRow({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex w-full items-center justify-between py-3 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hud-chip",
			children: on ? "On" : "Off"
		})]
	});
}
function AchievementsScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.achievements"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-2",
			children: ACHIEVEMENTS.map((a) => {
				const p = achievementProgress(a, save.stats);
				const claimed = save.claimedAchievements.includes(a.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-4",
					style: { opacity: p.done ? 1 : .55 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-fg",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: a.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								p.value,
								"/",
								a.target,
								" · +",
								a.reward,
								" coins"
							]
						}),
						p.done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hud-chip mt-2 text-fg",
							disabled: claimed,
							onClick: () => useGame.getState().claimAchievement(a.id),
							children: claimed ? "Claimed" : "Claim reward"
						})
					]
				}, a.id);
			})
		})
	});
}
function StatsScreen() {
	const t = useT();
	const st = useGame((s) => s.save.stats);
	const rows = [
		["Clears", st.gamesWon],
		["Played", st.gamesPlayed],
		["Words", st.wordsFound],
		["Hints", st.hintsUsed],
		["Streak", st.currentStreak],
		["Best streak", st.bestStreak],
		["Perfect", st.perfectClears],
		["Coins earned", st.coinsEarned],
		["Dailies", st.dailyCompleted],
		["Bosses", st.bossesDefeated],
		["Hours", (st.playTimeMs / 36e5).toFixed(1)]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.stats"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-2",
			children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg",
					children: v
				})]
			}, k))
		})
	});
}
function SkillsScreen() {
	const t = useT();
	const save = useGame((s) => s.save);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("cta.skills"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-3 text-sm text-muted",
			children: [save.skillPoints, " points to spend"]
		}), [
			"speed",
			"vision",
			"luck"
		].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel mb-2 flex items-center justify-between rounded-2xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "capitalize font-semibold text-fg",
				children: k
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [save.skills[k], " / 10"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "hud-chip text-fg",
				onClick: () => useGame.getState().spendSkill(k),
				children: "Train"
			})]
		}, k))]
	});
}
function InventoryScreen() {
	const t = useT();
	const inv = useGame((s) => s.save.inventory);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.inventory"),
		children: inv.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "The satchel is light."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: inv.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "panel rounded-xl p-3 text-fg",
				children: id
			}, id))
		})
	});
}
function SpinScreen() {
	const t = useT();
	const last = useGame((s) => s.save.lastSpin);
	const [result, setResult] = (0, import_react.useState)(null);
	const free = last !== todayKey();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("spin.title"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: free ? "First spin today is free." : "Further spins cost 25 coins."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn-primary mt-6",
				onClick: () => setResult(useGame.getState().spin()),
				children: t("cta.spinNow")
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center font-display text-2xl text-gold",
				children: result
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-1 text-sm text-muted",
				children: SPIN_TABLE.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					r.label,
					" · weight ",
					r.w
				] }, r.label))
			})
		]
	});
}
function DailyScreen() {
	const t = useT();
	const day = todayKey();
	const done = useGame((s) => s.save.lastDaily === day);
	const challenge = dailyChallengeFor(day);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("daily.title"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"A seeded 12×12 for ",
					day,
					". One proud clear per day."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-4 rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.16em] text-gold",
						children: "Today’s variation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-lg font-semibold text-fg",
						children: [
							challenge.icon,
							" ",
							challenge.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: challenge.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-xs text-accent",
						children: [
							"Reward boost up to +",
							Math.round((challenge.rewardMultiplier - 1) * 100),
							"%"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn-primary mt-6",
				disabled: done,
				onClick: () => useGame.getState().startDaily(),
				children: done ? "Already inked" : t("cta.start")
			})
		]
	});
}
function BaseScreen() {
	const save = useGame((s) => s.save);
	const upgrade = useGame((s) => s.upgradeBuilding);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Journey Base",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HudChips, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: Object.entries(BUILDINGS).map(([id, b]) => {
					const key = id;
					const level = save.baseBuildings[key] ?? 1;
					const cost = buildingUpgradeCost(key, level);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel rounded-2xl p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold text-fg",
								children: [
									b.name,
									" · Lv ",
									level
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: b.effect
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hud-chip text-gold",
								disabled: cost == null,
								onClick: () => upgrade(key),
								children: cost == null ? "MAX" : `${cost}c`
							})]
						})
					}, id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-3 rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-fg",
					children: "Materials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: Object.entries(save.materials).map(([k, v]) => `${k}: ${v}`).join(" · ")
				})]
			})
		]
	});
}
function EquipmentScreen() {
	const save = useGame((s) => s.save);
	const craft = useGame((s) => s.craft);
	const equip = useGame((s) => s.equipEquipment);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Forge & Equipment",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				"weapon",
				"armor",
				"charm"
			].map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "hud-chip",
				onClick: () => craft(slot),
				children: ["Craft ", slot]
			}, slot))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-2",
			children: save.equipment.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel rounded-2xl p-4 text-sm text-muted",
				children: "No equipment yet. Craft your first item."
			}) : save.equipment.map((e) => {
				const active = save.equippedEquipment[e.slot] === e.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "panel flex items-center justify-between rounded-2xl p-4 text-left",
					onClick: () => equip(e.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold text-fg",
						children: e.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [
							e.slot,
							" · Power ",
							e.power,
							" · Lv ",
							e.level
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-accent",
						children: active ? "EQUIPPED" : e.rarity.toUpperCase()
					})]
				}, e.id);
			})
		})]
	});
}
var CHAPTERS = [
	{
		id: 0,
		title: "The first margin",
		unlock: 1,
		body: "A blank atlas washes ashore at Ink Meadow. Every word you find is a coastline returning to the map."
	},
	{
		id: 1,
		title: "Letters in the grass",
		unlock: 20,
		body: "The meadow keeps a ledger of names. Follow the paths the wind already knows."
	},
	{
		id: 2,
		title: "Cedar archive",
		unlock: 101,
		body: "Under the forest the trees store older alphabets. Diagonals are just roots seen from above."
	},
	{
		id: 3,
		title: "The granite library",
		unlock: 301,
		body: "Peaks do not hide words. They press them thin, until a single line can hold a valley."
	},
	{
		id: 4,
		title: "Saffron wind",
		unlock: 601,
		body: "Dunes rewrite themselves each dusk. Reverse a trail and the oasis is still there."
	},
	{
		id: 5,
		title: "Cavern of lamps",
		unlock: 901,
		body: "Crystals keep starlight the way paper keeps ink. Dense. Patient. Almost humming."
	},
	{
		id: 6,
		title: "The atlas without edge",
		unlock: 1001,
		body: "Legend is not a place. It is what remains when every margin has been read."
	},
	{
		id: 7,
		title: "Coda",
		unlock: 1200,
		body: "You close the book and it is still open. The next traveler will find your notes in the grain."
	}
];
var WORD_OF_DAY = [
	{
		word: "SAFAR",
		meaning: "A journey; the act of setting out."
	},
	{
		word: "QALAM",
		meaning: "A reed pen; the tool that makes a page remember."
	},
	{
		word: "UFAQ",
		meaning: "The horizon, where maps grow shy."
	},
	{
		word: "NOOR",
		meaning: "Light that does not burn the paper."
	},
	{
		word: "RAAH",
		meaning: "A path, even when it is only implied."
	}
];
function MoreScreen() {
	const t = useT();
	const go = useGame.getState().go;
	const [category, setCategory] = (0, import_react.useState)(null);
	const categories = [
		{
			id: "profile",
			title: "Profile",
			description: "Your identity and personal progress",
			icon: User,
			items: [
				{
					id: "profile",
					label: t("cta.profile"),
					icon: User
				},
				{
					id: "stats",
					label: t("cta.stats"),
					icon: ChartColumn
				},
				{
					id: "skills",
					label: t("cta.skills"),
					icon: Sparkles
				}
			]
		},
		{
			id: "journey",
			title: "Journey",
			description: "Explore, battle and continue your adventure",
			icon: Map$1,
			items: [
				{
					id: "base",
					label: "Camp",
					icon: House
				},
				{
					id: "worldMap",
					label: "Atlas",
					icon: Map$1
				},
				{
					id: "missions",
					label: "Missions",
					icon: Flag
				},
				{
					id: "storyQuests",
					label: "Story Quests",
					icon: ScrollText
				},
				{
					id: "npcs",
					label: "Travelers",
					icon: MessageCircle
				},
				{
					id: "combat",
					label: "Guardians",
					icon: Swords
				},
				{
					id: "equipment",
					label: "Forge",
					icon: Hammer
				},
				{
					id: "dictionary",
					label: t("cta.dictionary"),
					icon: Languages
				}
			]
		},
		{
			id: "progress",
			title: "Progress",
			description: "Achievements, mastery, seasons and rankings",
			icon: Trophy,
			items: [
				{
					id: "achievements",
					label: "Achievements",
					icon: Trophy
				},
				{
					id: "progression",
					label: "Mastery & Progression",
					icon: Crown
				},
				{
					id: "seasonProgress",
					label: "Season Progress",
					icon: CalendarRange
				},
				{
					id: "liveOps",
					label: "Events & Challenges",
					icon: CalendarDays
				},
				{
					id: "leaderboard",
					label: t("cta.leaderboard"),
					icon: Trophy
				}
			]
		},
		{
			id: "collection",
			title: "Collection",
			description: "Items, pets and your in-game resources",
			icon: BookOpen,
			items: [
				{
					id: "inventory",
					label: t("cta.inventory"),
					icon: BookOpen
				},
				{
					id: "pets",
					label: "Pets",
					icon: Sparkles
				},
				{
					id: "shop",
					label: "Shop",
					icon: CreditCard
				}
			]
		},
		{
			id: "social",
			title: "Social",
			description: "Connect, compete and play together",
			icon: Users,
			items: [{
				id: "social",
				label: "Friends & Clans",
				icon: Users
			}, {
				id: "multiplayer",
				label: "Online Multiplayer",
				icon: Swords
			}]
		},
		{
			id: "smart",
			title: "Smart",
			description: "Personalized tools and intelligent gameplay",
			icon: BrainCircuit,
			items: [
				{
					id: "coach",
					label: "Smart Coach",
					icon: BrainCircuit
				},
				{
					id: "adaptive",
					label: "Adaptive Challenge",
					icon: Gauge
				},
				{
					id: "journeyPlanner",
					label: "Journey Planner",
					icon: Route
				},
				{
					id: "voice",
					label: "Voice Command Center",
					icon: Mic
				}
			]
		},
		{
			id: "creator",
			title: "Creator",
			description: "Create, test and manage game content",
			icon: PenTool,
			items: [
				{
					id: "creator",
					label: "Creator Studio",
					icon: PenTool
				},
				{
					id: "creatorCommunity",
					label: "Creator Community",
					icon: Users
				},
				{
					id: "aiPuzzleLab",
					label: "AI Puzzle Lab",
					icon: WandSparkles
				},
				{
					id: "puzzleAudit",
					label: "Puzzle QA Lab",
					icon: ShieldCheck
				},
				{
					id: "playablePreview",
					label: "Playable Preview",
					icon: Eye
				},
				{
					id: "creatorPlaytest",
					label: "Creator Playtest",
					icon: Trophy
				}
			]
		},
		{
			id: "release",
			title: "Release",
			description: "Prepare and verify your releases",
			icon: PackageCheck,
			items: [
				{
					id: "publishReadiness",
					label: "Publish Readiness",
					icon: ClipboardCheck
				},
				{
					id: "releasePackage",
					label: "Release Package",
					icon: PackageCheck
				},
				{
					id: "releaseVerifier",
					label: "Release Verifier",
					icon: FileCheck2
				},
				{
					id: "releaseArchive",
					label: "Release Archive",
					icon: Archive
				}
			]
		},
		{
			id: "settings",
			title: "Settings",
			description: "Customize your game experience",
			icon: Wrench,
			items: [
				{
					id: "settings",
					label: t("cta.settings"),
					icon: Wrench
				},
				{
					id: "accessibility",
					label: "Accessibility",
					icon: Accessibility
				},
				{
					id: "content",
					label: "Languages & Content",
					icon: Earth
				},
				{
					id: "pwa",
					label: "Offline & Updates",
					icon: Smartphone
				},
				{
					id: "pushSettings",
					label: "Push Notifications",
					icon: Bell
				}
			]
		},
		{
			id: "account",
			title: "Account",
			description: "Saves, purchases and account data",
			icon: HardDrive,
			items: [
				{
					id: "saveSlots",
					label: "Save & Recovery",
					icon: HardDrive
				},
				{
					id: "payments",
					label: "Purchases & Entitlements",
					icon: CreditCard
				},
				{
					id: "wildWhispers",
					label: "Wild Whispers",
					icon: PawPrint
				}
			]
		},
		{
			id: "system",
			title: "System",
			description: "Diagnostics, analytics and administration",
			icon: Activity,
			items: [
				{
					id: "systems",
					label: "Systems & Diagnostics",
					icon: Activity
				},
				{
					id: "analytics",
					label: "Player Analytics",
					icon: ChartLine
				},
				{
					id: "admin",
					label: "Admin Control",
					icon: ShieldCheck
				}
			]
		},
		{
			id: "help",
			title: "Help & Legal",
			description: "Terms, privacy and important information",
			icon: Scale,
			items: [{
				id: "legal",
				label: t("cta.legal"),
				icon: Scale
			}]
		}
	];
	const activeCategory = categories.find((c) => c.id === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.more"),
		children: !activeCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3",
			children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setCategory(item.id),
				className: "panel group flex min-h-[128px] flex-col items-start justify-between rounded-2xl p-4 text-left transition-transform active:scale-[0.97]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 items-center justify-center rounded-xl bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-3 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-bold text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[11px] leading-snug text-muted",
							children: item.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-2 text-xs text-muted",
						children: [item.items.length, " features →"]
					})
				]
			}, item.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "hud-chip flex size-10 items-center justify-center p-0 text-lg text-fg",
				onClick: () => setCategory(null),
				"aria-label": "Back to More categories",
				children: "←"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(activeCategory.icon, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-bold text-fg",
						children: activeCategory.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: activeCategory.description
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-2",
			children: activeCategory.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "panel flex items-center gap-3 rounded-2xl p-3.5 text-left transition-transform active:scale-[0.98]",
				onClick: () => go(item.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5 text-primary" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold text-fg",
							children: item.label
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg text-muted",
						children: "›"
					})
				]
			}, item.id))
		})] })
	});
}
function StoryScreen() {
	const t = useT();
	const unlocked = useGame((s) => s.save.unlockedLevel);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("story.title"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3",
			children: CHAPTERS.map((c) => {
				const open = unlocked >= c.unlock;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel rounded-2xl p-4",
					style: { opacity: open ? 1 : .45 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: ["Chapter ", c.id + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-xl text-fg",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: open ? c.body : "The page is still bound."
						})
					]
				}, c.id);
			})
		})
	});
}
function DictionaryScreen() {
	const t = useT();
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const wod = WORD_OF_DAY[(/* @__PURE__ */ new Date()).getDate() % WORD_OF_DAY.length];
	const list = (0, import_react.useMemo)(() => {
		const pool = cat === "all" ? ALL_WORDS : CATEGORIES[cat] ?? ALL_WORDS;
		const qq = q.trim().toUpperCase();
		return (qq ? pool.filter((w) => w.includes(qq)) : pool).slice(0, 80);
	}, [q, cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("cta.dictionary"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mb-4 rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-gold",
						children: "Word of the day"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-fg",
						children: wod.word
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: wod.meaning
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search the atlas",
				className: "mb-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex gap-2 overflow-x-auto pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hud-chip text-fg",
					onClick: () => setCat("all"),
					children: "all"
				}), CATEGORY_IDS.slice(0, 12).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "hud-chip shrink-0 text-fg",
					onClick: () => setCat(id),
					children: id
				}, id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "columns-2 gap-3 text-sm text-fg",
				children: list.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "mb-1",
					children: [w, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [" ", categoryOf(w)]
					})]
				}, w))
			})
		]
	});
}
function LeaderboardScreen() {
	const t = useT();
	const [board, setBoard] = (0, import_react.useState)("stars");
	const [rows, setRows] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let live = true;
		(async () => {
			try {
				if (board === "daily") {
					const data = await getDailyBoard({ data: todayKey() });
					if (live) setRows(data.map((r) => ({
						display_name: r.display_name,
						score: r.score
					})));
				} else {
					const data = await getLeaderboard({ data: board });
					if (live) setRows(data);
				}
			} catch {
				if (live) setRows([]);
			}
		})();
		return () => {
			live = false;
		};
	}, [board]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: t("cta.leaderboard"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex gap-2",
			children: [
				"stars",
				"words",
				"daily"
			].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "hud-chip capitalize text-fg",
				onClick: () => setBoard(b),
				children: b
			}, b))
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "The hall is still quiet. Sign in after a clear to leave a mark."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-2",
			children: rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "panel flex items-center justify-between rounded-xl p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-fg",
					children: [
						i + 1,
						". ",
						r.display_name
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: r.score
				})]
			}, `${r.display_name}-${i}`))
		})]
	});
}
function LegalScreen() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: t("cta.legal"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "prose-like space-y-4 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: "Terms of travel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mera Word Search Journey is a free, ad-free atlas. An account is required to enter the game and enables cloud save and account-based game features. You may manage or delete your account through the available account tools." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: "Quiet ledger (privacy)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Offline play stays on this device. If you sign in, we store your save blob, display name, and leaderboard scores, scoped to your account. We do not sell data. Optional AI riddles are user-initiated and sent without your full save. Account deletion is available through your signed-in profile tools." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No ads. Your account data is used to provide the game's account-based features." })
			]
		})
	});
}
function CombatScreen() {
	const combat = useGame((s) => s.combat);
	const action = useGame((s) => s.combatAction);
	const clear = useGame((s) => s.clearCombat);
	if (!combat) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Boss Battle",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel rounded-2xl p-5 text-muted",
			children: "No active guardian. Clear a boss level first."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "btn-primary mt-4",
			onClick: () => {
				let n = useGame.getState().save.unlockedLevel;
				while (n > 1 && !isJourneyBoss(n)) n--;
				useGame.getState().startBossCombat(n);
			},
			children: "Challenge the nearest guardian"
		})]
	});
	const enemy = combat.enemy;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: enemy.name,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between font-semibold text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: enemy.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							"Phase ",
							enemy.phase,
							" · Turn ",
							combat.turn
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-xs uppercase tracking-[0.16em] text-gold",
					children: enemy.phase === 1 ? "Awakened" : enemy.phase === 2 ? "Enraged" : "Final Stand"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-sm text-muted",
					children: [
						"Boss HP ",
						enemy.hp,
						" / ",
						enemy.maxHp
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-3 overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-danger",
						style: { width: `${Math.max(0, enemy.hp / enemy.maxHp * 100)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 text-sm text-muted",
					children: [
						"Your HP ",
						combat.playerHp,
						" / ",
						combat.maxPlayerHp
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-3 overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-success",
						style: { width: `${Math.max(0, combat.playerHp / combat.maxPlayerHp * 100)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-xl bg-surface-2/60 p-3 text-sm text-muted",
					children: combat.lastEvent
				}),
				combat.victory && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 font-semibold text-success",
					children: [
						"Victory! +",
						enemy.reward,
						" coins"
					]
				}),
				combat.defeated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 font-semibold text-danger",
					children: "Defeated. Try again."
				}),
				!combat.victory && !combat.defeated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hud-chip text-fg",
							onClick: () => action("word", true),
							children: "Word"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hud-chip text-fg",
							onClick: () => action("power"),
							children: "Power"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hud-chip text-fg",
							onClick: () => action("guard"),
							children: "Guard"
						})
					]
				}),
				(combat.victory || combat.defeated) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary mt-4",
					onClick: clear,
					children: "Return"
				})
			]
		})
	});
}
var STORY_CHAPTERS = JOURNEY_WORLDS.map((w) => ({
	id: `ch${w.world}`,
	world: w.world,
	title: w.name,
	summary: w.story,
	npc: w.hero,
	levels: [w.from, w.to],
	reward: w.chestCoins,
	boss: w.boss,
	bossTitle: w.bossTitle
}));
function worldNodes(maxUnlocked) {
	return STORY_CHAPTERS.flatMap((c) => {
		const span = c.levels[1] - c.levels[0];
		const step = Math.max(1, Math.floor(span / 4));
		return [
			c.levels[0],
			c.levels[0] + step,
			c.levels[0] + step * 2,
			c.levels[0] + step * 3,
			c.levels[1]
		].map((level, i) => ({
			id: `${c.id}-${i}`,
			world: c.world,
			level,
			title: i === 4 ? "Boss Gate" : `Stage ${i + 1}`,
			chapter: c.id,
			unlocked: level <= maxUnlocked,
			boss: i === 4
		}));
	});
}
function WorldMapScreen() {
	const save = useGame((s) => s.save);
	const maxUnlocked = Math.max(1, save.unlockedLevel ?? 1);
	const nodes = worldNodes(maxUnlocked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Journey Map",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 rounded-3xl panel p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-accent",
						children: "The Great Word Journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-fg",
						children: "6 worlds. One complete adventure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Explore each realm, defeat its guardian, then open its completion chest."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 size-7 text-gold" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-7 top-7 bottom-7 w-px bg-white/10" }), JOURNEY_WORLDS.map((w) => {
				const progress = journeyWorldProgress(save, w);
				const restoration = worldRestoration(save, w);
				const unlocked = maxUnlocked >= w.from;
				const defeated = Boolean(save.results[String(w.to)]);
				const opened = chestClaimed(save, w.world);
				const ns = nodes.filter((n) => n.chapter === `ch${w.world}`);
				const bossUnlocked = maxUnlocked >= w.to;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `relative rounded-3xl panel p-4 ${!unlocked ? "opacity-55" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/20 font-display text-xl text-gold",
								children: defeated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" }) : w.world
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs uppercase tracking-[0.18em] text-accent",
												children: ["World ", w.world]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl text-fg",
												children: w.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: w.subtitle
											})
										] }), !unlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 text-muted" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 h-2 overflow-hidden rounded-full bg-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full bg-primary transition-all",
											style: { width: `${progress}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex justify-between text-[11px] text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											progress,
											"% explored · ",
											restoration.stage
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Lv ",
											w.from,
											"–",
											w.to
										] })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: w.story
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-1.5",
							children: w.mechanics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-chip text-[10px] text-fg",
								children: m
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-5 gap-1.5",
							children: ns.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: !n.unlocked,
								onClick: () => n.unlocked && useGame.getState().startLevel(n.level),
								className: `relative aspect-square rounded-xl p-1 text-center text-xs ${n.unlocked ? "panel text-fg" : "bg-white/5 text-muted"}`,
								children: [n.unlocked ? n.boss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "mx-auto size-4 text-gold" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: n.level
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mx-auto size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[9px] text-muted",
									children: n.title
								})]
							}, n.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-white/10 bg-black/15 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.16em] text-gold",
										children: "Boss Gate"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-fg",
										children: w.boss
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: [
										w.bossTitle,
										" · Level ",
										w.to
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: !bossUnlocked,
									onClick: () => useGame.getState().startLevel(w.to, "boss"),
									className: "mt-3 w-full rounded-xl btn-primary disabled:opacity-40",
									children: bossUnlocked ? "Challenge Boss" : `Reach Level ${w.to}`
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between rounded-2xl border border-white/10 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-fg",
									children: "World Completion Chest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										"+",
										w.chestCoins,
										" coins · +",
										w.chestDiamonds,
										" diamonds"
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: !defeated || opened,
								onClick: () => useGame.getState().claimWorldChest(w.world),
								className: "rounded-xl px-3 py-2 text-xs font-bold btn-primary disabled:opacity-40",
								children: opened ? "Opened" : defeated ? "Open" : "Locked"
							})]
						})
					]
				}, w.id);
			})]
		})]
	});
}
var STORY_QUESTS = [
	{
		id: "q-levels-5",
		title: "First Steps",
		description: "Complete 5 levels.",
		target: 5,
		metric: "levels",
		reward: 100
	},
	{
		id: "q-words-50",
		title: "Word Collector",
		description: "Find 50 words.",
		target: 50,
		metric: "words",
		reward: 150
	},
	{
		id: "q-boss-1",
		title: "Guardian Breaker",
		description: "Defeat 1 guardian.",
		target: 1,
		metric: "bosses",
		reward: 250
	},
	{
		id: "q-levels-25",
		title: "Journeyer",
		description: "Complete 25 levels.",
		target: 25,
		metric: "levels",
		reward: 500
	}
];
function StoryQuestScreen() {
	const stats = useGame((s) => s.save).stats;
	const levels = stats.levelsCompleted ?? 0, words = stats.wordsFound ?? 0, bosses = stats.bossesDefeated ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Story Quests",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: STORY_QUESTS.map((q) => {
				const value = q.metric === "levels" ? levels : q.metric === "words" ? words : bosses;
				const pct = Math.min(100, value / q.target * 100);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-fg",
								children: q.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-accent",
								children: [
									"+",
									q.reward,
									"c"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: q.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-2 rounded-full bg-black/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-accent",
								style: { width: `${pct}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted",
							children: [
								Math.min(value, q.target),
								" / ",
								q.target
							]
						})
					]
				}, q.id);
			})
		})
	});
}
function DialogueScreen() {
	const dialogue = useGame((s) => s.dialogue);
	const choose = useGame((s) => s.chooseDialogue);
	const close = useGame((s) => s.closeDialogue);
	if (!dialogue) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "NPCs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel rounded-2xl p-5 text-muted",
			children: "No conversation active."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Conversation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel rounded-2xl p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-accent",
					children: dialogue.speaker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg font-semibold text-fg",
					children: dialogue.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-2",
					children: dialogue.choices.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "hud-chip text-left",
						onClick: () => choose(c.id),
						children: [c.text, c.reward ? `  (+${c.reward}c)` : ``]
					}, c.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "mt-4 text-xs text-muted",
					onClick: close,
					children: "Close"
				})
			]
		})
	});
}
function NPCScreen() {
	const open = useGame((s) => s.openDialogue);
	const affinity = useGame((s) => s.npcAffinity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "NPCs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: STORY_CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel rounded-2xl p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-fg",
						children: c.npc
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"World ",
							c.world,
							" · Affinity ",
							affinity[c.npc] ?? 0
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip",
						onClick: () => open(c.world),
						children: "Talk"
					})]
				})
			}, c.id))
		})
	});
}
function MissionsScreen() {
	const save = useGame((s) => s.save);
	const claim = useGame((s) => s.claimMission);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Missions",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: MISSIONS$1.map((m) => {
				const k = m.metric === "levels" ? "levelsCompleted" : m.metric === "words" ? "wordsFound" : "coinsEarned";
				const v = Math.min(Number(save.stats[k] ?? 0), m.target);
				const ck = `${m.id}:${periodKey(m.period)}`;
				const done = v >= m.target;
				const c = save.claimedMissions.includes(ck);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-fg",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: m.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								v,
								"/",
								m.target,
								" · +",
								m.reward,
								"c"
							]
						}),
						done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "hud-chip mt-2 text-fg",
							disabled: c,
							onClick: () => claim(m.id),
							children: c ? "Claimed" : "Claim reward"
						})
					]
				}, m.id);
			})
		})
	});
}
var PREFIX$1 = "mwsj:v9:";
function readJson(key) {
	try {
		const raw = localStorage.getItem(PREFIX$1 + key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function writeJson(key, value) {
	try {
		localStorage.setItem(PREFIX$1 + key, JSON.stringify(value));
	} catch {}
}
function V9Status() {
	const [status, setStatus] = (0, import_react.useState)(() => readJson("status") ?? {
		lastOpen: 0,
		opens: 0
	});
	(0, import_react.useEffect)(() => {
		const next = {
			lastOpen: Date.now(),
			opens: status.opens + 1
		};
		writeJson("status", next);
		setStatus(next);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "sr-only",
		"aria-hidden": "true",
		children: ["V9 session ", status.opens]
	});
}
var FRIENDS_KEY = "mwjs:v10:friends";
var CLAN_KEY = "mwjs:v10:clan";
var defaultFriends = [
	{
		id: "atlas",
		name: "Atlas",
		online: true,
		score: 12840
	},
	{
		id: "noor",
		name: "Noor",
		online: false,
		score: 10420
	},
	{
		id: "mika",
		name: "Mika",
		online: true,
		score: 8730
	}
];
function load$2(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function save$2(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function listFriends() {
	return load$2(FRIENDS_KEY, defaultFriends);
}
function addFriend(name) {
	const clean = name.trim().replace(/[^\p{L}\p{N} _-]/gu, "").slice(0, 24);
	if (!clean) return null;
	const friends = listFriends();
	if (friends.some((f) => f.name.toLowerCase() === clean.toLowerCase())) return null;
	const friend = {
		id: `${Date.now()}`,
		name: clean,
		online: false,
		score: 0
	};
	save$2(FRIENDS_KEY, [friend, ...friends]);
	return friend;
}
function removeFriend(id) {
	save$2(FRIENDS_KEY, listFriends().filter((f) => f.id !== id));
}
function getClan() {
	return load$2(CLAN_KEY, null);
}
function joinClan(name) {
	const clean = name.trim().slice(0, 32);
	if (!clean) return null;
	const clan = {
		id: `clan-${Date.now()}`,
		name: clean,
		members: 1,
		weeklyScore: 0
	};
	save$2(CLAN_KEY, clan);
	return clan;
}
function leaveClan() {
	try {
		localStorage.removeItem(CLAN_KEY);
	} catch {}
}
function validDisplayName(value) {
	return /^[\p{L}\p{N} _-]{2,24}$/u.test(value.trim());
}
function validClanName(value) {
	return /^[\p{L}\p{N} _-]{2,32}$/u.test(value.trim());
}
function SocialScreen() {
	const [friends, setFriends] = (0, import_react.useState)(listFriends);
	const [clan, setClan] = (0, import_react.useState)(getClan);
	const [name, setName] = (0, import_react.useState)("");
	const [clanName, setClanName] = (0, import_react.useState)("");
	const refresh = () => setFriends(listFriends());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Friends & Clans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel rounded-2xl p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-fg",
						children: "Friends"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value.slice(0, 24)),
						placeholder: "Player name",
						className: "min-w-0 flex-1 rounded-xl border border-border bg-surface px-3 py-2 text-fg"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "hud-chip text-fg",
						onClick: () => {
							if (!validDisplayName(name)) return;
							if (addFriend(name)) {
								setName("");
								refresh();
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mr-1 inline size-4" }), "Add"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-col gap-2",
					children: friends.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl border border-border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg",
							children: [
								f.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "text-muted",
									children: f.online ? "online" : "offline"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Remove ${f.name}`,
							onClick: () => {
								removeFriend(f.id);
								refresh();
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4 text-muted" })
						})]
					}, f.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel mt-3 rounded-2xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: "Clan"
				})]
			}), clan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-fg",
					children: clan.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						clan.members,
						" member · ",
						clan.weeklyScore,
						" weekly points"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "hud-chip text-fg",
					onClick: () => {
						leaveClan();
						setClan(null);
					},
					children: "Leave"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: clanName,
					onChange: (e) => setClanName(e.target.value.slice(0, 32)),
					placeholder: "Clan name",
					className: "min-w-0 flex-1 rounded-xl border border-border bg-surface px-3 py-2 text-fg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "hud-chip text-fg",
					onClick: () => {
						if (!validClanName(clanName)) return;
						const next = joinClan(clanName);
						if (next) {
							setClan(next);
							setClanName("");
						}
					},
					children: "Create"
				})]
			})]
		})]
	});
}
var KEY$4 = "mwjs:v10:liveops";
function dayKey$1() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function load$1() {
	try {
		const raw = localStorage.getItem(KEY$4);
		const s = raw ? JSON.parse(raw) : null;
		if (s?.day === dayKey$1()) return s;
	} catch {}
	return {
		day: dayKey$1(),
		progress: {},
		claimed: []
	};
}
function save$1(s) {
	try {
		localStorage.setItem(KEY$4, JSON.stringify(s));
	} catch {}
}
function incrementLiveProgress(id, amount = 1) {
	const s = load$1();
	s.progress[id] = (s.progress[id] ?? 0) + Math.max(0, Math.floor(amount));
	save$1(s);
	return s;
}
var cleanup = null;
var activeMode = "";
function installLiveOpsBridge() {
	if (cleanup) return cleanup;
	const unsubs = [
		gameEvents.on("level:start", (p) => {
			activeMode = p.mode;
		}),
		gameEvents.on("word:found", () => {
			incrementLiveProgress("first-words");
		}),
		gameEvents.on("level:complete", () => {
			incrementLiveProgress("three-clears");
			if (activeMode === "daily") incrementLiveProgress("daily-clear");
			activeMode = "";
		}),
		gameEvents.on("level:fail", () => {
			activeMode = "";
		})
	];
	cleanup = () => {
		unsubs.forEach((u) => u());
		cleanup = null;
	};
	return cleanup;
}
function getPlatformHealth() {
	return [
		{
			id: "game",
			label: "Local gameplay engine",
			status: "ready"
		},
		{
			id: "save",
			label: "Local save storage",
			status: "ready"
		},
		{
			id: "offline",
			label: "Offline queue",
			status: "ready"
		},
		{
			id: "cloud",
			label: "Cloud sync provider",
			status: "needs-config"
		},
		{
			id: "payments",
			label: "Payment provider",
			status: "needs-config"
		},
		{
			id: "push",
			label: "Push notifications",
			status: "needs-config"
		},
		{
			id: "multiplayer",
			label: "Multiplayer transport",
			status: "needs-config"
		}
	];
}
var categories = [
	"General",
	"Graphics",
	"Gameplay",
	"Audio",
	"Controls",
	"Accessibility",
	"Theme",
	"Data",
	"Account",
	"Notifications",
	"Privacy",
	"Parental",
	"Cloud & Sync",
	"Time & Region",
	"Developer",
	"Streaming",
	"AI Settings",
	"AI Deep Settings",
	"Performance",
	"Network",
	"Security",
	"Analytics",
	"Modding",
	"AI-Powered",
	"Social Advanced",
	"Economy",
	"Content",
	"Experimental",
	"Hardware",
	"Legal",
	"Special Modes"
];
var ULTIMATE_SETTINGS = Array.from({ length: 485 }, (_, i) => {
	const category = categories[i % categories.length];
	return {
		id: `setting.${i + 1}`,
		category,
		type: i % 3 === 0 ? "boolean" : i % 3 === 1 ? "number" : "select",
		defaultValue: i % 3 === 0 ? false : i % 3 === 1 ? 0 : "default",
		...i % 3 === 1 ? {
			min: 0,
			max: 100
		} : {},
		...i % 3 === 2 ? { options: [
			"default",
			"on",
			"off"
		] } : {}
	};
});
function SystemsScreen() {
	const save = useGame((s) => s.save);
	const [query, setQuery] = (0, import_react.useState)("");
	const health = (0, import_react.useMemo)(() => getPlatformHealth(), []);
	const settings = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return ULTIMATE_SETTINGS.filter((x) => !q || x.id.toLowerCase().includes(q) || x.category.toLowerCase().includes(q)).slice(0, 30);
	}, [query]);
	const ready = health.filter((x) => x.status === "ready").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Systems & Diagnostics",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: "Platform health"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl text-fg",
						children: [
							ready,
							"/",
							health.length,
							" ready"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hud-chip text-fg",
						children: "Local-first"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: health.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: h.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: h.status
						})]
					}, h.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-4 rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-muted",
					children: "Save diagnostics"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2 text-sm",
					children: [
						["Level", save.unlockedLevel],
						["XP", save.xp],
						["Coins", save.coins],
						["Words", save.stats.wordsFound]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface-2 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-fg",
							children: v
						})]
					}, String(k)))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-4 rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted",
						children: "485-setting registry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search settings or category",
						className: "mt-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-1 gap-2",
						children: settings.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl bg-surface-2 px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: x.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [
									x.category,
									" · ",
									x.type
								]
							})]
						}, x.id))
					}),
					!settings.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No matching registry entries."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: "Cloud, payments, push and multiplayer remain configuration-dependent; this screen reports current local status."
			})
		]
	});
}
var GAME_MODES = /* @__PURE__ */ new Set([
	"classic",
	"timed",
	"survival",
	"blitz",
	"zen",
	"daily",
	"endless",
	"fog",
	"mirror",
	"category",
	"boss",
	"rush",
	"precision",
	"hardcore",
	"double_reward",
	"no_hints",
	"small_grid",
	"giant_grid",
	"reverse_only",
	"diagonal",
	"orthogonal",
	"chaos",
	"streak",
	"treasure",
	"nightmare",
	"focus",
	"speedrun",
	"marathon",
	"random_rules"
]);
var clean$5 = (v, max) => String(v ?? "").trim().slice(0, max);
var createMultiplayerRoom = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	displayName: clean$5(d.displayName || "Traveler", 40) || "Traveler",
	mode: (() => {
		const m = clean$5(d.mode || "classic", 40);
		return GAME_MODES.has(m) ? m : "classic";
	})(),
	maxPlayers: Math.max(2, Math.min(8, Math.floor(Number(d.maxPlayers) || 4)))
})).handler(createSsrRpc("cd09e5b6c0789d2b1cfcd03514df492467c7b0106c65aa45b71bfb259de1dae1"));
var joinMultiplayerRoom = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	roomId: clean$5(d.roomId, 80),
	displayName: clean$5(d.displayName || "Traveler", 40) || "Traveler"
})).handler(createSsrRpc("8e4309aecef59284eab42dbc5b72ae7a718dad8d24fd17bbe3811a78adf5749a"));
var getMultiplayerRoom = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((d) => ({ roomId: clean$5(d.roomId, 80) })).handler(createSsrRpc("8791a086e1c78691cc5308a94779250d350215fe138b257f1849f5bcdbb4ac19"));
function MultiplayerScreen({ onBack }) {
	const save = useGame((s) => s.save);
	const user = useCurrentUser();
	const [name, setName] = (0, import_react.useState)(save.playerName || "Traveler");
	const [roomId, setRoomId] = (0, import_react.useState)("");
	const [room, setRoom] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [msg, setMsg] = (0, import_react.useState)("Sign in to create or join an online room.");
	const refresh = async (id = room?.room_id || roomId) => {
		if (!id) return;
		setBusy(true);
		try {
			const r = await getMultiplayerRoom({ data: { roomId: id } });
			if (r.ok) {
				setRoom(r.room);
				setRoomId(id);
				setMsg("Room is live. Share the room ID with your friends.");
			} else setMsg(r.error);
		} catch {
			setMsg("Unable to reach the multiplayer service.");
		} finally {
			setBusy(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!room?.room_id) return;
		const t = window.setInterval(() => void refresh(room.room_id), 4e3);
		return () => clearInterval(t);
	}, [room?.room_id]);
	const create = async () => {
		setBusy(true);
		try {
			const r = await createMultiplayerRoom({ data: {
				displayName: name,
				mode: "classic",
				maxPlayers: 4
			} });
			if (r.ok) {
				const next = r.room;
				setRoom(next);
				setRoomId(next.room_id);
				setMsg("Room created successfully.");
			} else setMsg(r.error);
		} catch {
			setMsg("Sign in to use online multiplayer.");
		} finally {
			setBusy(false);
		}
	};
	const join = async () => {
		setBusy(true);
		try {
			const r = await joinMultiplayerRoom({ data: {
				roomId: roomId.trim(),
				displayName: name
			} });
			if (r.ok) {
				setRoom(r.room);
				setMsg("Joined room successfully.");
			} else setMsg(r.error);
		} catch {
			setMsg("Sign in to use online multiplayer.");
		} finally {
			setBusy(false);
		}
	};
	const copy = async () => {
		if (roomId) {
			await navigator.clipboard?.writeText(roomId);
			setMsg("Room ID copied.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold",
						children: "Online Multiplayer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-70",
						children: "Real room service + live member roster"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: ["Display name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 w-full rounded-xl border bg-transparent p-3",
						value: name,
						onChange: (e) => setName(e.target.value),
						maxLength: 40
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: busy || !user,
						onClick: () => void create(),
						className: "rounded-xl border px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "mr-1 inline",
							size: 16
						}), "Create room"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: busy || !user,
						onClick: () => void join(),
						className: "rounded-xl border px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, {
							className: "mr-1 inline",
							size: 16
						}), "Join room"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "min-w-0 flex-1 rounded-xl border bg-transparent p-3",
						placeholder: "Paste room ID",
						value: roomId,
						onChange: (e) => setRoomId(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => void copy(),
						className: "rounded-xl border px-3",
						"aria-label": "Copy room ID",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 17 })
					})]
				}),
				room && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border p-4 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
								"Room ",
								room.room_id.slice(0, 8),
								"…"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => void refresh(),
								disabled: busy,
								className: "rounded-lg border p-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { size: 16 })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm opacity-70",
							children: [
								"Mode: ",
								room.mode,
								" · ",
								room.members.length,
								"/",
								room.max_players,
								" players · ",
								room.status
							]
						}),
						room.members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-black/5 p-2 text-sm",
							children: [
								m.display_name,
								" ",
								m.role === "host" ? "• Host" : ""
							]
						}, m.user_id))
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm opacity-70",
					children: msg
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onBack,
					className: "rounded-xl border px-4 py-2",
					children: "Back"
				})
			]
		})
	});
}
var getAdminSnapshot = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("df8e182953a1453434fc96e92b9eb2990c822c06cd70838a29ccffcf929d5f91"));
createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	action: String(d.action ?? "").slice(0, 64),
	target: String(d.target ?? "").slice(0, 128),
	note: String(d.note ?? "").slice(0, 1e3)
})).handler(createSsrRpc("bbfde54225dc5379dc6f998dc9488ae59460377cdf96575a81edf78aadd14a8e"));
function AdminScreen({ onBack }) {
	const [data, setData] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		getAdminSnapshot().then(setData).catch((e) => setError(e?.message || "Admin access unavailable"));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Admin Control",
		onBack,
		children: [error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel rounded-2xl p-4 text-sm text-muted",
			children: error
		}) : !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Loading protected metrics…"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-2",
			children: [
				["Users seen", data.usersSeen],
				["Events / 24h", data.events24h],
				["Open rooms", data.openRooms],
				["Open reports", data.openReports],
				["Verified purchases", data.verifiedPurchases],
				["Entitlements", data.activeEntitlements]
			].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl text-fg",
					children: v
				})]
			}, String(k)))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-xs text-muted",
			children: "Admin access is enforced server-side with ADMIN_USER_IDS. No admin secret is shipped to the client."
		})]
	});
}
var PIN_KEY = "mera-world.kids-lock.pin.v1";
async function hashPin(pin) {
	const data = new TextEncoder().encode(pin);
	const digest = await crypto.subtle.digest("SHA-256", data);
	return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function hasKidsLockPin() {
	return typeof localStorage !== "undefined" && Boolean(localStorage.getItem(PIN_KEY));
}
async function setKidsLockPin(pin) {
	if (!/^\d{6}$/.test(pin)) return false;
	localStorage.setItem(PIN_KEY, await hashPin(pin));
	return true;
}
async function verifyKidsLockPin(pin) {
	if (typeof localStorage === "undefined") return false;
	const lockKey = "mera-world.kids-lock.attempts";
	const now = Date.now();
	try {
		const state = JSON.parse(sessionStorage.getItem(lockKey) ?? "{}");
		if (Number(state.until ?? 0) > now) return false;
		const stored = localStorage.getItem(PIN_KEY);
		if (Boolean(stored) && stored === await hashPin(pin)) {
			sessionStorage.removeItem(lockKey);
			return true;
		}
		const count = Number(state.count ?? 0) + 1;
		sessionStorage.setItem(lockKey, JSON.stringify(count >= 5 ? {
			count: 0,
			until: now + 3e4
		} : { count }));
		return false;
	} catch {
		const stored = localStorage.getItem(PIN_KEY);
		return Boolean(stored) && stored === await hashPin(pin);
	}
}
async function requestKidsFullscreen() {
	try {
		if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
		return true;
	} catch {
		return false;
	}
}
async function exitKidsFullscreen() {
	try {
		if (document.fullscreenElement) await document.exitFullscreen();
	} catch {}
}
var clean$4 = (value) => {
	if (!value || typeof value !== "object" || Array.isArray(value)) return {};
	const input = value;
	const profile = input.profile && typeof input.profile === "object" ? input.profile : {};
	const completed = Array.isArray(input.completed) ? input.completed.filter((x) => typeof x === "string").slice(0, 500) : [];
	return {
		profile: {
			name: String(profile.name ?? "Little Learner").slice(0, 40),
			age: Math.max(2, Math.min(6, Math.floor(Number(profile.age ?? 4))))
		},
		completed,
		stars: Math.max(0, Math.min(5e3, Math.floor(Number(input.stars ?? 0)))),
		xp: Math.max(0, Math.min(1e5, Math.floor(Number(input.xp ?? 0)))),
		mission: Math.max(0, Math.min(4, Math.floor(Number(input.mission ?? 0)))),
		level: [
			"Beginner",
			"Learner",
			"Explorer",
			"Super Star"
		].includes(String(input.level)) ? String(input.level) : "Beginner",
		localUpdatedAt: Math.max(0, Math.floor(Number(input.localUpdatedAt ?? 0)))
	};
};
var getPreschoolProgress = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("745803ee6870b98c25bb612258c2b3215e6e5970b367075a611042f805886df6"));
var savePreschoolProgress = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ progress: clean$4(d?.progress) })).handler(createSsrRpc("69bb05f6452eb114df02fca9b55c22197ca185b117bc2d0c035c84e5b74db4c1"));
var ANIMALS$1 = [
	["🦁", "Lion"],
	["🐘", "Elephant"],
	["🐯", "Tiger"],
	["🐒", "Monkey"],
	["🦊", "Fox"],
	["🐻", "Bear"],
	["🐼", "Panda"],
	["🐨", "Koala"],
	["🦒", "Giraffe"],
	["🦓", "Zebra"],
	["🦏", "Rhino"],
	["🦛", "Hippo"],
	["🐊", "Crocodile"],
	["🐍", "Snake"],
	["🐢", "Turtle"],
	["🐸", "Frog"],
	["🐙", "Octopus"],
	["🦈", "Shark"],
	["🐋", "Whale"],
	["🐬", "Dolphin"],
	["🐟", "Fish"],
	["🦀", "Crab"],
	["🦞", "Lobster"],
	["🦐", "Shrimp"],
	["🦋", "Butterfly"],
	["🐝", "Bee"],
	["🐞", "Ladybug"],
	["🐜", "Ant"],
	["🕷️", "Spider"],
	["🐌", "Snail"],
	["🐰", "Rabbit"],
	["🐹", "Hamster"],
	["🐭", "Mouse"],
	["🐱", "Cat"],
	["🐶", "Dog"],
	["🐺", "Wolf"],
	["🦝", "Raccoon"],
	["🦦", "Otter"],
	["🦥", "Sloth"],
	["🦘", "Kangaroo"],
	["🐎", "Horse"],
	["🐄", "Cow"],
	["🐖", "Pig"],
	["🐑", "Sheep"],
	["🐐", "Goat"],
	["🐓", "Rooster"],
	["🦆", "Duck"],
	["🦢", "Swan"],
	["🦉", "Owl"],
	["🦜", "Parrot"],
	["🦅", "Eagle"],
	["🦚", "Peacock"],
	["🦩", "Flamingo"],
	["🐧", "Penguin"],
	["🦤", "Dodo"],
	["🦃", "Turkey"],
	["🐦", "Bird"],
	["🪿", "Goose"],
	["🦇", "Bat"],
	["🐦‍⬛", "Crow"],
	["🐪", "Camel"],
	["🦙", "Llama"],
	["🦌", "Deer"],
	["🫎", "Moose"],
	["🦬", "Bison"],
	["🐗", "Boar"],
	["🐿️", "Squirrel"],
	["🦔", "Hedgehog"],
	["🦨", "Skunk"],
	["🦡", "Badger"],
	["🦫", "Beaver"],
	["🦎", "Lizard"],
	["🦂", "Scorpion"],
	["🐠", "Tropical Fish"],
	["🐡", "Pufferfish"],
	["🪼", "Jellyfish"],
	["🦑", "Squid"],
	["🦭", "Seal"],
	["🦒", "Giraffe"],
	["🐘", "Mammoth"],
	["🦖", "T-Rex"],
	["🦕", "Brachiosaurus"],
	["🦣", "Woolly Mammoth"],
	["🦧", "Orangutan"],
	["🦍", "Gorilla"],
	["🦏", "White Rhino"],
	["🐅", "Leopard"],
	["🐆", "Cheetah"],
	["🦓", "Zebra"],
	["🐋", "Blue Whale"],
	["🐊", "Alligator"],
	["🐉", "Dragon"],
	["🦄", "Unicorn"],
	["🐲", "Dragon"],
	["🐙", "Giant Octopus"],
	["🦋", "Moth"],
	["🐛", "Caterpillar"],
	["🪲", "Beetle"],
	["🦗", "Cricket"],
	["🦟", "Mosquito"]
];
var WORDS = [
	[
		"Apple",
		"سیب",
		"🍎"
	],
	[
		"Ball",
		"گیند",
		"⚽"
	],
	[
		"Cat",
		"بلی",
		"🐱"
	],
	[
		"Dog",
		"کتا",
		"🐶"
	],
	[
		"Sun",
		"سورج",
		"☀️"
	],
	[
		"Moon",
		"چاند",
		"🌙"
	],
	[
		"Fish",
		"مچھلی",
		"🐟"
	],
	[
		"Book",
		"کتاب",
		"📚"
	],
	[
		"Car",
		"گاڑی",
		"🚗"
	],
	[
		"Tree",
		"درخت",
		"🌳"
	],
	[
		"Bird",
		"پرندہ",
		"🐦"
	],
	[
		"Milk",
		"دودھ",
		"🥛"
	]
];
var STORIES = [
	{
		title: "Luna Finds a Star",
		text: "Luna the bunny sees a tiny star. She follows the light, helps a sleepy bird, and learns that sharing makes the night brighter."
	},
	{
		title: "The Little Train",
		text: "A little train counts one, two, three trees on the way home. At the station, every friend gets a happy hello."
	},
	{
		title: "Mina's Rainbow",
		text: "After the rain, Mina spots seven colors. She names each color and makes a rainbow picture for her family."
	},
	{
		title: "Ollie and the Blue Boat",
		text: "Ollie finds a blue boat and counts three waves. He learns that boats float and friends help each other."
	},
	{
		title: "Pia Plants a Seed",
		text: "Pia plants one seed, gives it water, and watches a little green leaf grow. She learns that plants need care."
	},
	{
		title: "Sammy's Shape Hunt",
		text: "Sammy looks around the room for circles, squares, and triangles. Shapes are everywhere!"
	},
	{
		title: "The Sleepy Moon",
		text: "The moon visits the quiet sky while stars twinkle. A little owl says good night to every friend."
	},
	{
		title: "Nora's Number Picnic",
		text: "Nora packs five apples and shares them with friends. Counting makes the picnic fair and fun."
	},
	{
		title: "Benny's Big Boots",
		text: "Benny puts on his big boots and learns opposites: big and small, fast and slow, up and down."
	},
	{
		title: "Aisha's Animal Parade",
		text: "Aisha sees a lion, elephant, rabbit, and duck in a pretend parade. She names each animal and its sound."
	},
	{
		title: "Toto Learns to Listen",
		text: "Toto closes his eyes and listens for birds, rain, and a gentle breeze. Listening helps him notice his world."
	},
	{
		title: "Rainbow Train",
		text: "A rainbow train carries red, yellow, green, and blue carriages. Each color has a special place."
	},
	{
		title: "Milo's Matching Game",
		text: "Milo matches a ball with a ball and a fish with a fish. Careful eyes help him find pairs."
	},
	{
		title: "The Tiny Cloud",
		text: "A tiny cloud travels across the sky and brings a soft shower. The flowers are happy for the water."
	},
	{
		title: "Zara Counts the Birds",
		text: "Zara counts one, two, three, four birds on a branch and learns that birds have feathers and wings."
	},
	{
		title: "The Friendly Garden",
		text: "Bees buzz, butterflies flutter, and flowers bloom. Every little garden friend has a job."
	},
	{
		title: "Kai's Clean-Up Song",
		text: "Kai sings while putting toys away. Sorting toys by type makes clean-up simple."
	},
	{
		title: "The Shape Rocket",
		text: "A rocket with a circle window and triangle fins zooms into pretend space. Shapes can build amazing things."
	},
	{
		title: "Maya Says Thank You",
		text: "Maya remembers to say please and thank you. Kind words can make a friend's day brighter."
	},
	{
		title: "The Happy Finish",
		text: "After a day of letters, numbers, music, and stories, the friends celebrate what they learned together."
	}
];
function AdvancedPreschoolHub({ age, xp, completed, premium, onSpeak }) {
	const [section, setSection] = (0, import_react.useState)("plan");
	const [adventureStep, setAdventureStep] = (0, import_react.useState)(() => {
		try {
			return Number(localStorage.getItem("mw-adventure-step") || 0);
		} catch {
			return 0;
		}
	});
	const [teacherMode, setTeacherMode] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem("mw-teacher-mode") || "letters";
		} catch {
			return "letters";
		}
	});
	const [avatar, setAvatar] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem("mw-avatar") || "🐼";
		} catch {
			return "🐼";
		}
	});
	const [room, setRoom] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("mw-room") || "[]");
		} catch {
			return [];
		}
	});
	const [gameScore, setGameScore] = (0, import_react.useState)(0);
	const [animalIndex, setAnimalIndex] = (0, import_react.useState)(0);
	const [mathStep, setMathStep] = (0, import_react.useState)(0);
	const [story, setStory] = (0, import_react.useState)(0);
	const plan = (0, import_react.useMemo)(() => {
		return [
			completed < 3 || xp < 60 ? "🔤 Phonics: A is for Apple" : "🔁 Review: letter sounds",
			age >= 4 && (completed < 6 || xp < 120) ? "🔢 Count 1–10 with pictures" : "🎨 Match colors & shapes",
			"🐾 Meet 5 new animals",
			"📖 Read a tiny story",
			"🎵 Listen & repeat 3 words"
		];
	}, [
		age,
		xp,
		completed
	]);
	const speakWord = (word, urdu) => onSpeak(`${word}. ${urdu}. Repeat after me: ${word}.`);
	const math = [
		{
			q: "2 + 1 = ?",
			a: [
				"2",
				"3",
				"4"
			],
			c: "3"
		},
		{
			q: "Which is more? 🍎🍎🍎 or 🍎🍎",
			a: [
				"3 apples",
				"2 apples",
				"Same"
			],
			c: "3 apples"
		},
		{
			q: "5 − 2 = ?",
			a: [
				"2",
				"3",
				"4"
			],
			c: "3"
		},
		{
			q: "What comes after 6?",
			a: [
				"5",
				"7",
				"8"
			],
			c: "7"
		}
	][mathStep % 4];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-primary/10 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-7 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-black uppercase tracking-wider text-accent",
								children: "Smart Learning Lab"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: "A little plan for today 🌈"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									"Age ",
									age,
									" • ",
									xp,
									" XP • ",
									completed,
									" activities completed"
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: plan.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onSpeak(p.replace(/[🔤🔁🔢🎨🐾📖🎵]/g, "")),
						className: "flex items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-full bg-primary/10 font-black",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-sm font-bold text-fg",
								children: p
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 text-primary" })
						]
					}, p))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					[
						"plan",
						"🧠",
						"Plan"
					],
					[
						"adventure",
						"🗺️",
						"Adventure"
					],
					[
						"teacher",
						"👩‍🏫",
						"Teacher"
					],
					[
						"classes",
						"🎓",
						"Classes"
					],
					[
						"montessori",
						"🌱",
						"Montessori"
					],
					[
						"worksheets",
						"📝",
						"Offline Worksheet Center"
					],
					[
						"audio",
						"🔊",
						"Offline Learning Audio"
					],
					[
						"animals",
						"🐾",
						"Nature"
					],
					[
						"words",
						"🔤",
						"Words"
					],
					[
						"math",
						"🔢",
						"Math"
					],
					[
						"stories",
						"📚",
						"Stories"
					],
					[
						"music",
						"🎵",
						"Music"
					],
					[
						"games",
						"🎮",
						"Games"
					],
					[
						"world",
						"🏡",
						"My World"
					],
					[
						"art",
						"🎨",
						"Art"
					],
					[
						"rewards",
						"⭐",
						"Rewards"
					]
				].map(([id, e, t]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSection(id),
					className: `rounded-2xl p-3 text-center text-xs font-black ${section === id ? "bg-primary text-white" : "bg-white text-slate-700"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xl",
						children: e
					}), t]
				}, id))
			}),
			section === "adventure" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyAdventure, {
				age,
				step: adventureStep,
				setStep: (v) => {
					setAdventureStep(v);
					try {
						localStorage.setItem("mw-adventure-step", String(v));
					} catch {}
				},
				onSpeak
			}),
			section === "teacher" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartTeacher, {
				age,
				xp,
				completed,
				mode: teacherMode,
				setMode: (v) => {
					setTeacherMode(v);
					try {
						localStorage.setItem("mw-teacher-mode", v);
					} catch {}
				},
				onSpeak
			}),
			section === "classes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassPathway, {
				age,
				xp,
				onSpeak
			}),
			section === "montessori" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MontessoriWorld, {
				age,
				onSpeak
			}),
			section === "animals" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: "Animal Explorer 🐾"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [ANIMALS$1.length, " discovery cards in this pack."]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-7 text-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-4 gap-2",
						children: ANIMALS$1.slice(animalIndex, animalIndex + 40).map(([e, n], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onSpeak(`${n}. This is a ${n}.`),
							className: "rounded-2xl bg-white p-2 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "eager",
								decoding: "async",
								src: `/offline/preschool/animals/${n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${animalIndex + i + 1}.svg`,
								alt: "",
								className: "mx-auto block h-16 w-16 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold",
								children: n
							})]
						}, `${n}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary mt-3 w-full",
						onClick: () => setAnimalIndex((i) => (i + 8) % ANIMALS$1.length),
						children: "Next habitat cards →"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-center text-[10px] text-muted",
						children: [
							"Previewing card set ",
							Math.floor(animalIndex / 8) + 1,
							"; all discovery data is bundled for offline use."
						]
					})
				]
			}),
			section === "words" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-fg",
						children: "English + Urdu Words"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Picture → word → pronunciation."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-2",
					children: WORDS.map(([en, ur, e]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => speakWord(en, ur),
						className: "rounded-2xl bg-white p-4 text-center shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "eager",
								decoding: "async",
								src: `/offline/preschool/words/${en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.svg`,
								alt: "",
								className: "mx-auto block h-28 w-28 rounded-2xl object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block mt-1",
								children: en
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-slate-500",
								children: ur
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 flex items-center justify-center gap-1 text-[10px] text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3" }), " Listen"]
							})
						]
					}, en))
				})]
			}),
			section === "math" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "mx-auto size-8 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl text-fg",
						children: "Math Mini Quest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: math.q
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: math.a.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								onSpeak(a === math.c ? "Great job!" : "Try again");
								if (a === math.c) setMathStep((s) => s + 1);
							},
							className: "rounded-2xl bg-white p-4 text-lg font-black shadow-sm",
							children: a
						}, a))
					})
				]
			}),
			section === "stories" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/offline/preschool/stories/story-${story + 1}.svg`,
						alt: "",
						className: "h-40 w-full rounded-2xl object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mt-2 size-7 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl text-fg",
						children: "Story Time 📖"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-2 text-lg font-bold",
						children: STORIES[story].title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-6 text-slate-600",
						children: STORIES[story].text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "hud-chip",
							onClick: () => onSpeak(STORIES[story].text),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Narrate"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary",
							onClick: () => setStory((s) => (s + 1) % STORIES.length),
							children: "Next story"
						})]
					})
				]
			}),
			section === "art" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtStudio, { onSpeak }),
			section === "rewards" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-7 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: "Reward Garden ⭐"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Keep learning to unlock little surprises."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-3 gap-2",
						children: [
							"🌱",
							"🌷",
							"🦋",
							"🐝",
							"🌈",
							"🏡"
						].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl p-4 text-center ${xp >= i * 50 ? "bg-white" : "bg-slate-100 opacity-50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: e
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-bold",
								children: xp >= i * 50 ? "Unlocked" : `${i * 50} XP`
							})]
						}, e))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 rounded-2xl bg-rose-50 p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5 text-rose-500" }),
							" ",
							premium ? "Premium garden is open!" : "Complete activities to grow your garden."
						]
					})
				]
			}),
			section === "music" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicWorld, { onSpeak }),
			section === "games" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniGames, {
				onSpeak,
				score: gameScore,
				setScore: setGameScore
			}),
			section === "world" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyLittleWorld, {
				avatar,
				setAvatar: (v) => {
					setAvatar(v);
					try {
						localStorage.setItem("mw-avatar", v);
					} catch {}
				},
				room,
				setRoom: (v) => {
					setRoom(v);
					try {
						localStorage.setItem("mw-room", JSON.stringify(v));
					} catch {}
				},
				xp
			}),
			section === "plan" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-6 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Learning balance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Short sessions work well for little learners. Stop when the child is tired."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-2xl bg-white/80 p-3 text-sm font-bold",
					children: ["🎯 Next: ", plan[0]]
				})]
			})
		]
	});
}
function ClassPathway({ age, xp, onSpeak }) {
	const [klass, setKlass] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("lla-class");
			return v === "KG" || v === "Montessori" ? v : "Nursery";
		} catch {
			return "Nursery";
		}
	});
	const [subject, setSubject] = (0, import_react.useState)("Language");
	const [done, setDone] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("mw-class-skills") || "[]");
		} catch {
			return [];
		}
	});
	const curriculum = {
		Nursery: {
			Language: [
				"ABC picture match",
				"Letter tracing",
				"Beginning sounds",
				"Picture vocabulary",
				"Rhyming sounds",
				"Listen and repeat"
			],
			Math: [
				"Count 1–5",
				"Count 1–10",
				"Number recognition",
				"Quantity matching",
				"More or less",
				"Big and small"
			],
			Creative: [
				"Color matching",
				"Shape coloring",
				"Free drawing",
				"Sticker scene",
				"Music and rhythm",
				"Sensory art"
			],
			Life: [
				"Handwashing sequence",
				"Brush teeth sequence",
				"Clean-up routine",
				"Greeting and manners",
				"Dress-up sequence",
				"Sort my toys"
			]
		},
		KG: {
			Language: [
				"A–Z mastery",
				"Phonics sounds",
				"CVC word building",
				"Vowel and consonant sort",
				"Sight words",
				"Simple sentence building"
			],
			Math: [
				"Numbers 1–100",
				"Before, after and between",
				"Greater, less and equal",
				"Addition within 10",
				"Subtraction within 10",
				"Patterns and sequences"
			],
			Creative: [
				"Guided drawing",
				"Pattern coloring",
				"Shape composition",
				"Rhythm tapping",
				"Story picture order",
				"Build with shapes"
			],
			Life: [
				"Daily routine order",
				"Community helpers",
				"Time of day",
				"Sharing and turn taking",
				"Classroom organization",
				"Safety basics"
			]
		},
		Montessori: {
			Language: [
				"Sound games",
				"Object naming",
				"Sandpaper-style letter tracing",
				"Beginning-sound sort",
				"Moveable-alphabet word building",
				"Phonetic reading"
			],
			Math: [
				"Number rods",
				"Quantity matching",
				"Spindle-box counting",
				"Zero concept",
				"Ten-frame counting",
				"Concrete addition"
			],
			Creative: [
				"Color grading",
				"Shape matching",
				"Texture matching",
				"Pattern construction",
				"Nature art",
				"Careful drawing"
			],
			Life: [
				"Pouring & transferring",
				"Scooping & spooning",
				"Folding cloth",
				"Buttoning & zipping",
				"Table setting",
				"Toy organization"
			]
		}
	};
	const subjects = [
		"Language",
		"Math",
		"Creative",
		"Life"
	];
	const tasks = curriculum[klass][subject] || [];
	const select = (next) => {
		setKlass(next);
		setSubject("Language");
		try {
			localStorage.setItem("lla-class", next);
		} catch {}
		window.dispatchEvent(new Event("lla-class-change"));
		onSpeak(`${next} curriculum selected.`);
	};
	const toggle = (task) => {
		const key = `${klass}:${subject}:${task}`;
		const next = done.includes(key) ? done.filter((x) => x !== key) : [...done, key];
		setDone(next);
		try {
			localStorage.setItem("mw-class-skills", JSON.stringify(next));
		} catch {}
		onSpeak(`${task}. Great learning!`);
	};
	const total = Object.values(curriculum[klass]).flat().length;
	const mastered = Object.entries(curriculum[klass]).flatMap(([sub, ts]) => ts.map((t) => `${klass}:${sub}:${t}`)).filter((k) => done.includes(k)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: "🎓"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-fg",
						children: "Class Curriculum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs font-black text-primary",
						children: "Three Learning Pathways"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Age ",
							age,
							" • ",
							xp,
							" XP • ",
							mastered,
							"/",
							total,
							" class skills practiced"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-3 gap-2",
				children: [
					"Nursery",
					"KG",
					"Montessori"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => select(c),
					className: `rounded-2xl p-3 text-xs font-black ${klass === c ? "bg-primary text-white" : "bg-white text-slate-700"}`,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSubject(s),
					className: `rounded-2xl p-2 text-[11px] font-black ${subject === s ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`,
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: tasks.map((task, i) => {
					const key = `${klass}:${subject}:${task}`;
					const isDone = done.includes(key);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggle(task),
						className: `rounded-2xl p-4 text-left shadow-sm ${isDone ? "bg-emerald-50" : "bg-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2",
							children: isDone ? "✅" : "○"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							i + 1,
							". ",
							task
						] })]
					}, task);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-muted",
				children: "This pathway has its own curriculum and progress. Nursery, KG and Montessori are tracked separately."
			})
		]
	});
}
function MontessoriWorld({ age, onSpeak }) {
	const [area, setArea] = (0, import_react.useState)("Practical Life");
	const [completed, setCompleted] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("mw-montessori-done") || "[]");
		} catch {
			return [];
		}
	});
	const areas = {
		"Practical Life": [
			"Pouring & transferring",
			"Scooping & spooning",
			"Folding cloth",
			"Buttoning & zipping",
			"Lacing & tying",
			"Washing hands sequence",
			"Table setting",
			"Toy organization"
		],
		"Sensorial": [
			"Big → small grading",
			"Long → short grading",
			"Color grading",
			"Shape matching",
			"Texture matching",
			"Sound matching",
			"Weight comparison",
			"Pattern construction"
		],
		"Language": [
			"Sound games",
			"Sandpaper-style letter tracing",
			"Object naming",
			"Beginning-sound sort",
			"Moveable-alphabet word building",
			"Phonetic reading",
			"Sight-word matching",
			"Sentence picture order"
		],
		"Mathematics": [
			"Number rods",
			"Sandpaper numbers",
			"Quantity matching",
			"Spindle-box counting",
			"Zero concept",
			"Ten-frame counting",
			"Tens & ones",
			"Concrete addition"
		],
		"Culture & Nature": [
			"Land & water forms",
			"Continents",
			"Animals by habitat",
			"Plants & life cycles",
			"Weather matching",
			"Community helpers",
			"Map puzzles",
			"Nature observation"
		]
	};
	const tasks = areas[area] || areas["Practical Life"];
	const toggle = (task) => {
		const key = `${area}:${task}`;
		const next = completed.includes(key) ? completed.filter((x) => x !== key) : [...completed, key];
		setCompleted(next);
		try {
			localStorage.setItem("mw-montessori-done", JSON.stringify(next));
		} catch {}
		onSpeak(`${task}. Explore slowly and carefully.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-gradient-to-r from-emerald-100 via-yellow-50 to-sky-100 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-black uppercase tracking-wider",
						children: "Montessori Learning Environment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-3xl",
						children: "Montessori World 🌱"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm",
						children: [
							"Age ",
							age,
							" • independence, repetition, hands-on discovery and self-correction."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: Object.entries(areas).map(([name, tasks]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setArea(name),
					className: `rounded-2xl p-3 text-left ${area === name ? "bg-primary text-white" : "bg-white text-slate-700"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							children: name === "Practical Life" ? "🧺" : name === "Sensorial" ? "🌈" : name === "Language" ? "🔤" : name === "Mathematics" ? "🔢" : "🌎"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "mt-1 block text-xs",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
							className: "text-[10px] opacity-70",
							children: [tasks.length, " activities"]
						})
					]
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-3xl bg-white p-4 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-2xl",
						children: area
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-black",
						children: [
							tasks.filter((t) => completed.includes(`${area}:${t}`)).length,
							"/",
							tasks.length
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2",
					children: tasks.map((task, i) => {
						const key = `${area}:${task}`;
						const isDone = completed.includes(key);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => toggle(task),
							className: `rounded-2xl p-4 text-left ${isDone ? "bg-emerald-50" : "bg-slate-50"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2",
								children: isDone ? "✅" : "○"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
								i + 1,
								". ",
								task
							] })]
						}, task);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-white p-3 text-xs font-bold",
					children: "🌿 Observe → try → repeat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-white p-3 text-xs font-bold",
					children: "🧩 Self-correcting practice"
				})]
			})
		]
	});
}
function DailyAdventure({ age, step, setStep, onSpeak }) {
	const quests = [
		"🔤 Find 3 letters",
		"🔢 Count 5 objects",
		"🐾 Meet an animal",
		"🎨 Name a color",
		"🎵 Tap a rhythm",
		"📖 Hear a story"
	];
	const current = quests[step % quests.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preschool-hero rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-black uppercase tracking-wider",
						children: ["Daily Adventure • Age ", age]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-3xl",
						children: "Mimi's Learning Map 🐼🗺️"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: "One tiny quest at a time. Finish the path and earn a star."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 journey-mini-route",
				children: quests.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `journey-mini-node ${i < step % quests.length ? "done" : ""} ${i === step % quests.length ? "current" : ""}`,
					children: [i < step % quests.length ? "⭐" : q.slice(0, 2), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: i + 1 })]
				}, q))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-3xl bg-white p-5 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: current.slice(0, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-2 text-xl font-black",
						children: current.slice(2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Tap complete when the little quest is finished."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary mt-4 w-full",
						onClick: () => {
							onSpeak("Quest complete! You earned a star!");
							setStep(step + 1);
						},
						children: "Complete Quest ⭐"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs text-muted",
				children: "Progress is saved on this device for offline play."
			})
		]
	});
}
function SmartTeacher({ age, xp, completed, mode, setMode, onSpeak }) {
	const topics = {
		letters: {
			icon: "🔤",
			title: "Letter Coach",
			tip: "Practice one letter sound, then find a word that starts with it."
		},
		numbers: {
			icon: "🔢",
			title: "Number Coach",
			tip: "Count slowly and touch each object once."
		},
		colors: {
			icon: "🎨",
			title: "Color Coach",
			tip: "Name the color, then find something nearby with the same color."
		},
		animals: {
			icon: "🐾",
			title: "Animal Coach",
			tip: "Say the animal name and one thing it can do."
		}
	};
	const t = topics[mode] || topics.letters;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mascot-card rounded-3xl p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mascot-bubble",
						children: "🐼"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-black uppercase tracking-wider text-accent",
							children: "Smart Teacher"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: "Let's learn together!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: ["Suggested next: ", topics[completed < 3 ? "letters" : xp < 100 ? "numbers" : completed < 10 ? "animals" : "colors"].title]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: Object.entries(topics).map(([id, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode(id),
					className: `rounded-2xl p-3 text-left ${mode === id ? "bg-primary text-white" : "bg-white"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						children: v.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "ml-2 text-sm",
						children: v.title
					})]
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-3xl bg-white p-5 text-center shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: t.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-2 text-xl font-black",
						children: t.tip
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip mt-3",
						onClick: () => onSpeak(t.tip),
						children: "🔊 Teacher says"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-3 gap-2 text-center text-xs font-bold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white p-3",
						children: [
							"⭐ ",
							xp,
							" XP"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white p-3",
						children: ["📚 ", completed]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white p-3",
						children: [
							"🎯 ",
							age,
							" yrs"
						]
					})
				]
			})
		]
	});
}
function ArtStudio({ onSpeak }) {
	const [color, setColor] = (0, import_react.useState)("#ff6fae");
	const [marks, setMarks] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("mw-art-marks") || "[]");
		} catch {
			return [];
		}
	});
	const colors = [
		"#ff6fae",
		"#6c7cff",
		"#ffbd59",
		"#55c88a",
		"#55b8e8",
		"#8b5cf6"
	];
	const add = (shape) => {
		const next = [...marks, `${shape}:${color}`];
		setMarks(next);
		try {
			localStorage.setItem("mw-art-marks", JSON.stringify(next));
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-6xl",
					children: "🎨🖍️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl text-fg",
					children: "Art Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Make a picture with shapes, colors, and stickers."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-3xl bg-white p-4 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid min-h-52 grid-cols-5 place-items-center gap-3 rounded-3xl bg-gradient-to-br from-amber-50 via-sky-50 to-pink-50 p-4",
					children: marks.length ? marks.map((m, i) => {
						const [shape, c] = m.split(":");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: c },
							className: "text-4xl",
							children: shape
						}, `${m}-${i}`);
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "col-span-5 text-center text-sm font-bold text-slate-400",
						children: "Your canvas is ready ✨"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap justify-center gap-2",
					children: colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": `Choose ${c}`,
						onClick: () => setColor(c),
						style: { background: c },
						className: `size-9 rounded-full ${color === c ? "ring-4 ring-slate-300" : ""}`
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: [
						"●",
						"▲",
						"■",
						"⭐",
						"🌈",
						"🐼",
						"🌸",
						"☀️"
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => add(x),
						className: "rounded-2xl bg-slate-50 p-3 text-2xl",
						children: x
					}, x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip",
						onClick: () => {
							setMarks([]);
							try {
								localStorage.removeItem("mw-art-marks");
							} catch {}
						},
						children: "↩ Clear"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary flex-1",
						onClick: () => onSpeak("Beautiful artwork! Keep creating!"),
						children: "✨ Celebrate"
					})]
				})
			]
		})]
	});
}
function MusicWorld({ onSpeak }) {
	const playTone = (freq) => {
		try {
			const C = window.AudioContext || window.webkitAudioContext;
			if (!C) return;
			const ctx = new C();
			const o = ctx.createOscillator();
			const g = ctx.createGain();
			o.frequency.value = freq;
			o.type = "sine";
			g.gain.setValueAtTime(.001, ctx.currentTime);
			g.gain.exponentialRampToValueAtTime(.18, ctx.currentTime + .03);
			g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .45);
			o.connect(g).connect(ctx.destination);
			o.start();
			o.stop(ctx.currentTime + .5);
			setTimeout(() => void ctx.close(), 650);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-6xl",
						children: "🎵🎹🥁"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl text-fg",
						children: "Music World"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Little songs and instruments — works without internet."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-4 gap-2",
				children: [
					[262, "C"],
					[294, "D"],
					[330, "E"],
					[349, "F"],
					[392, "G"],
					[440, "A"],
					[494, "B"],
					[523, "C"]
				].map(([f, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => playTone(Number(f)),
					className: "rounded-2xl bg-white p-4 text-xl font-black shadow-sm active:scale-95",
					children: n
				}, `${f}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "hud-chip",
					onClick: () => onSpeak("Twinkle twinkle little star. ABC and numbers are fun to learn!"),
					children: "🔊 Hear a rhyme"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-primary",
					onClick: () => onSpeak("Clap clap clap! Tap a piano key and make your own music!"),
					children: "👏 Rhythm game"
				})]
			})
		]
	});
}
function MiniGames({ onSpeak, score, setScore }) {
	const [round, setRound] = (0, import_react.useState)(0);
	const rounds = [
		[
			"Which animal is a bird?",
			[
				"🐶 Dog",
				"🦉 Owl",
				"🐘 Elephant",
				"🐟 Fish"
			],
			"🦉 Owl"
		],
		[
			"Which is bigger?",
			[
				"🐜 Ant",
				"🐘 Elephant",
				"🐭 Mouse",
				"🐝 Bee"
			],
			"🐘 Elephant"
		],
		[
			"Which matches? 🍎",
			[
				"🍎 Apple",
				"🚗 Car",
				"🐟 Fish",
				"📚 Book"
			],
			"🍎 Apple"
		]
	];
	const r = rounds[round % rounds.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-5xl",
				children: "🎮🧩"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl text-fg",
				children: "Mini Game Arcade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted",
				children: [
					"Score: ",
					score,
					" ⭐"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-4 text-lg font-bold text-fg",
				children: r[0]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: r[1].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						if (a === r[2]) {
							setScore(score + 1);
							onSpeak("Great job!");
							setRound(round + 1);
						} else onSpeak("Almost! Try again!");
					},
					className: "rounded-2xl bg-white p-4 text-sm font-black shadow-sm",
					children: a
				}, a))
			})
		]
	});
}
function MyLittleWorld({ avatar, setAvatar, room, setRoom, xp }) {
	const avatars = [
		"🐼",
		"🐯",
		"🐰",
		"🐨",
		"🦊",
		"🐸"
	];
	const items = [
		"🛏️",
		"🧸",
		"🌱",
		"🪴",
		"🎈",
		"🪁",
		"📚",
		"🧩",
		"⭐"
	];
	const toggle = (item) => setRoom(room.includes(item) ? room.filter((x) => x !== item) : [...room, item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-7xl",
						children: avatar
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-fg",
						children: "My Little World 🏡"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Customize your little learning room."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex justify-center gap-2",
				children: avatars.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setAvatar(a),
					className: `rounded-2xl p-2 text-3xl ${avatar === a ? "bg-primary/15 ring-2 ring-primary" : "bg-white"}`,
					children: a
				}, a))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 rounded-3xl bg-gradient-to-br from-sky-100 via-pink-50 to-amber-100 p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid min-h-36 grid-cols-5 place-items-center gap-2 text-3xl",
					children: room.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x }, `${x}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-center text-xs text-muted",
				children: [
					"Unlocked with learning: ",
					Math.min(items.length, Math.floor(xp / 30) + 1),
					"/",
					items.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-3 gap-2",
				children: items.map((item, i) => {
					const unlocked = xp >= i * 30;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: !unlocked,
						onClick: () => toggle(item),
						className: `rounded-2xl p-3 text-2xl ${room.includes(item) ? "bg-primary/15" : "bg-white"} ${!unlocked ? "opacity-35" : ""}`,
						children: item
					}, item);
				})
			})
		]
	});
}
var LEARNING_BRAIN_KEY = "lla-smart-learning-brain-v1";
var CLASS_SKILLS = {
	Nursery: [
		"letters",
		"numbers",
		"colors",
		"shapes",
		"animals",
		"rhymes"
	],
	KG: [
		"phonics",
		"words",
		"math",
		"reading",
		"patterns",
		"science"
	],
	Montessori: [
		"practical-life",
		"sensorial",
		"language",
		"mathematics",
		"sorting",
		"nature"
	]
};
var TITLES = {
	letters: "Alphabet Adventure",
	numbers: "Counting Fun",
	colors: "Color Explorer",
	shapes: "Shape Safari",
	animals: "Animal Discovery",
	rhymes: "Rhythm & Rhyme",
	phonics: "Phonics Builder",
	words: "Word Builder",
	math: "Math Mountain",
	reading: "Reading Library",
	patterns: "Pattern Detective",
	science: "Mini Science Lab",
	"practical-life": "Practical Life",
	sensorial: "Sensorial Discovery",
	language: "Language Shelf",
	mathematics: "Montessori Mathematics",
	sorting: "Sorting Station",
	nature: "Nature Corner"
};
function normalizeSignalStats(value) {
	if (!value || typeof value !== "object") return {};
	const out = {};
	for (const mode of [
		"picture",
		"audio",
		"game",
		"story",
		"hands-on"
	]) {
		const raw = value[mode];
		if (!raw || typeof raw !== "object") continue;
		const r = raw;
		out[mode] = {
			attempts: Math.max(0, Number(r.attempts) || 0),
			correct: Math.max(0, Number(r.correct) || 0)
		};
	}
	return out;
}
function emptyLearningProfile() {
	const byClass = {};
	Object.keys(CLASS_SKILLS).forEach((name) => {
		byClass[name] = {};
	});
	return {
		byClass,
		lastClass: "Nursery",
		updatedAt: 0
	};
}
function normalizeProfile(value) {
	const fallback = emptyLearningProfile();
	if (!value || typeof value !== "object") return fallback;
	const input = value;
	for (const className of Object.keys(CLASS_SKILLS)) {
		const source = input.byClass?.[className];
		if (!source || typeof source !== "object") continue;
		for (const skill of CLASS_SKILLS[className]) {
			const raw = source[skill];
			if (!raw || typeof raw !== "object") continue;
			const r = raw;
			fallback.byClass[className][skill] = {
				attempts: Math.max(0, Number(r.attempts) || 0),
				correct: Math.max(0, Number(r.correct) || 0),
				totalMs: Math.max(0, Number(r.totalMs) || 0),
				lastAt: Math.max(0, Number(r.lastAt) || 0),
				signal: r.signal,
				signalStats: normalizeSignalStats(r.signalStats)
			};
		}
	}
	fallback.lastClass = input.lastClass === "KG" || input.lastClass === "Montessori" ? input.lastClass : "Nursery";
	fallback.updatedAt = Math.max(0, Number(input.updatedAt) || 0);
	return fallback;
}
function skillForActivity(className, activityKind) {
	return {
		Nursery: {
			letters: "letters",
			numbers: "numbers",
			colors: "colors",
			shapes: "shapes",
			body: "letters",
			rhymes: "rhymes",
			listen: "animals",
			animals: "animals"
		},
		KG: {
			letters: "phonics",
			numbers: "math",
			patterns: "patterns",
			story: "reading",
			vehicles: "science",
			puzzle: "reading",
			math: "math",
			listen: "phonics"
		},
		Montessori: {
			letters: "language",
			numbers: "mathematics",
			colors: "sensorial",
			shapes: "sensorial",
			sorting: "sorting",
			tracing: "language",
			listen: "nature",
			math: "mathematics"
		}
	}[className][activityKind] ?? CLASS_SKILLS[className][0];
}
function recordLearningSignal(profile, className, skill, correct, elapsedMs = 0, signal, now = Date.now()) {
	const next = normalizeProfile(profile);
	if (!CLASS_SKILLS[className].includes(skill)) return next;
	const old = next.byClass[className][skill] ?? {
		attempts: 0,
		correct: 0,
		totalMs: 0,
		lastAt: 0
	};
	next.byClass[className][skill] = {
		attempts: old.attempts + 1,
		correct: old.correct + (correct ? 1 : 0),
		totalMs: old.totalMs + Math.max(0, elapsedMs),
		lastAt: now,
		signal: signal ?? old.signal,
		signalStats: signal ? {
			...old.signalStats ?? {},
			[signal]: {
				attempts: (old.signalStats?.[signal]?.attempts ?? 0) + 1,
				correct: (old.signalStats?.[signal]?.correct ?? 0) + (correct ? 1 : 0)
			}
		} : old.signalStats
	};
	next.lastClass = className;
	next.updatedAt = now;
	return next;
}
function scoreSkill(stat, now) {
	if (!stat || stat.attempts === 0) return 50;
	const accuracy = stat.correct / stat.attempts;
	const ageDays = Math.max(0, (now - stat.lastAt) / 864e5);
	const freshness = Math.min(30, ageDays * 4);
	const struggle = (1 - accuracy) * 70;
	const repetition = Math.max(0, 12 - stat.attempts);
	return struggle + freshness + repetition;
}
function recommendNext(profile, className = profile.lastClass, now = Date.now()) {
	const stats = profile.byClass[className] ?? {};
	const skill = CLASS_SKILLS[className].slice().sort((a, b) => scoreSkill(stats[b], now) - scoreSkill(stats[a], now))[0];
	const stat = stats[skill];
	const accuracy = stat?.attempts ? stat.correct / stat.attempts : .5;
	const difficulty = accuracy < .55 ? "gentle" : accuracy > .88 && stat.attempts >= 3 ? "challenge" : "steady";
	const reason = !stat || stat.attempts === 0 ? "You have not explored this skill yet." : accuracy < .7 ? "A little extra practice can help this skill grow." : "It has been a while since this skill was practiced.";
	const mode = Object.entries(stat?.signalStats ?? {}).filter(([, value]) => value.attempts > 0).sort((a, b) => {
		const aAcc = a[1].correct / a[1].attempts;
		return b[1].correct / b[1].attempts + Math.min(.2, b[1].attempts * .02) - (aAcc + Math.min(.2, a[1].attempts * .02));
	})[0]?.[0] ?? stat?.signal ?? (className === "Montessori" ? "hands-on" : "game");
	const confidence = Math.round(Math.min(98, 58 + Math.min(35, (stat?.attempts ?? 0) * 6)));
	return {
		className,
		skill,
		title: TITLES[skill] ?? skill,
		reason,
		mode,
		difficulty,
		confidence
	};
}
function getLearningProfile() {
	if (typeof window === "undefined") return emptyLearningProfile();
	try {
		return normalizeProfile(JSON.parse(localStorage.getItem("lla-smart-learning-brain-v1") ?? "null"));
	} catch {
		return emptyLearningProfile();
	}
}
function saveLearningProfile(profile) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(LEARNING_BRAIN_KEY, JSON.stringify(normalizeProfile(profile)));
	} catch {}
}
function recordAttempt(className, skill, correct, elapsedMs = 0, signal) {
	const next = recordLearningSignal(getLearningProfile(), className, skill, correct, elapsedMs, signal);
	saveLearningProfile(next);
	return next;
}
var CLASS_COPY = {
	Nursery: {
		emoji: "🟢",
		line: "small steps, lots of playful practice"
	},
	KG: {
		emoji: "🔵",
		line: "curious practice with growing challenges"
	},
	Montessori: {
		emoji: "🌱",
		line: "calm, hands-on discovery"
	}
};
function SmartLearningFriend({ className }) {
	const [profileVersion, setProfileVersion] = (0, import_react.useState)(0);
	const [klass, setKlass] = (0, import_react.useState)(() => {
		try {
			const value = localStorage.getItem("lla-class");
			return value === "KG" || value === "Montessori" ? value : "Nursery";
		} catch {
			return "Nursery";
		}
	});
	(0, import_react.useEffect)(() => {
		const onStorage = () => {
			try {
				const value = localStorage.getItem("lla-class");
				if (value === "Nursery" || value === "KG" || value === "Montessori") setKlass(value);
			} catch {}
			setProfileVersion((v) => v + 1);
		};
		addEventListener("storage", onStorage);
		const timer = window.setInterval(() => {
			try {
				const value = localStorage.getItem("lla-class");
				if (value === "Nursery" || value === "KG" || value === "Montessori") setKlass(value);
			} catch {}
			setProfileVersion((v) => v + 1);
		}, 1200);
		return () => {
			removeEventListener("storage", onStorage);
			clearInterval(timer);
		};
	}, []);
	const recommendation = (0, import_react.useMemo)(() => recommendNext(getLearningProfile(), klass), [klass, profileVersion]);
	const copy = CLASS_COPY[klass];
	const modeText = recommendation.mode === "hands-on" ? "hands-on activity" : recommendation.mode === "audio" ? "listen & repeat" : recommendation.mode === "story" ? "story practice" : recommendation.mode === "picture" ? "picture practice" : "game practice";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `smart-brain-card ${className ?? ""}`,
		"aria-label": "Smart Learning Friend",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-brain-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-brain-avatar",
						children: "🤖✨"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "smart-eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-3.5" }), " Smart Learning Friend"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "“I’ll help choose what comes next!”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								copy.emoji,
								" ",
								klass,
								" • ",
								copy.line
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "smart-brain-chip",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), " Offline Brain"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-recommendation",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-rec-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next best practice" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: recommendation.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: recommendation.reason }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "smart-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: recommendation.difficulty }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: modeText }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [recommendation.confidence, "% confidence"] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5 opacity-50" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-brain-footer",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "It watches learning signals locally — no internet needed for recommendations." })]
			})
		]
	});
}
var CLASS_EMOJI = {
	Nursery: "🟢",
	KG: "🔵",
	Montessori: "🌱"
};
var MODES = [
	"picture",
	"audio",
	"game",
	"story",
	"hands-on"
];
var MODE_LABEL = {
	picture: "Picture",
	audio: "Audio",
	game: "Game",
	story: "Story",
	"hands-on": "Hands-on"
};
var CHALLENGES = {
	letters: [
		"Find the letter",
		"Match letter to picture",
		"Letter sound hunt"
	],
	numbers: [
		"Count the objects",
		"Find the missing number",
		"Number order"
	],
	colors: [
		"Color hunt",
		"Match the colors",
		"Sort by color"
	],
	shapes: [
		"Shape safari",
		"Match the shape",
		"Build the pattern"
	],
	animals: [
		"Animal match",
		"Guess the animal",
		"Sound clue"
	],
	rhymes: [
		"Rhyme match",
		"Finish the rhyme",
		"Listen & choose"
	],
	phonics: [
		"Sound match",
		"Build a CVC word",
		"Beginning sound"
	],
	words: [
		"Word builder",
		"Picture to word",
		"Missing letter"
	],
	math: [
		"Count & add",
		"Number sequence",
		"Math story"
	],
	reading: [
		"Picture reading",
		"Choose the ending",
		"Story question"
	],
	patterns: [
		"Pattern detective",
		"What comes next?",
		"Sort the pattern"
	],
	science: [
		"Science match",
		"Predict what happens",
		"Nature discovery"
	],
	"practical-life": [
		"Put steps in order",
		"Daily routine",
		"Care for the classroom"
	],
	sensorial: [
		"Sound match",
		"Grade by size",
		"Color grading"
	],
	language: [
		"Object naming",
		"Sound match",
		"Letter tracing"
	],
	mathematics: [
		"Quantity match",
		"Number rods",
		"Count & compare"
	],
	sorting: [
		"Sort by size",
		"Classify objects",
		"Pattern sorting"
	],
	nature: [
		"Nature match",
		"Living or non-living?",
		"Outdoor discovery"
	]
};
function localProfile() {
	return getLearningProfile();
}
function SmartJourneyPanel({ className, onSpeak }) {
	const [tick, setTick] = (0, import_react.useState)(0);
	const [tab, setTab] = (0, import_react.useState)("adventure");
	const [klass, setKlass] = (0, import_react.useState)(() => {
		try {
			const value = localStorage.getItem("lla-class");
			return value === "KG" || value === "Montessori" ? value : "Nursery";
		} catch {
			return "Nursery";
		}
	});
	const profile = (0, import_react.useMemo)(() => {
		return localProfile();
	}, [tick]);
	const recommendation = (0, import_react.useMemo)(() => recommendNext(profile, klass), [profile, klass]);
	const skills = CLASS_SKILLS[klass];
	const stat = profile.byClass[klass];
	const explored = skills.filter((s) => (stat[s]?.attempts ?? 0) > 0).length;
	const challenge = (CHALLENGES[recommendation.skill] ?? [
		"Try a new activity",
		"Match & discover",
		"Play a quick challenge"
	])[Math.min(2, Math.max(0, (stat[recommendation.skill]?.attempts ?? 0) % 3))];
	const mode = MODE_LABEL[recommendation.mode];
	const refresh = () => {
		setTick((v) => v + 1);
		onSpeak(`${klass} smart journey refreshed. Next activity: ${recommendation.title}.`);
	};
	const changeClass = (next) => {
		setKlass(next);
		try {
			localStorage.setItem("lla-class", next);
		} catch {}
		window.dispatchEvent(new Event("lla-class-change"));
		setTick((v) => v + 1);
		onSpeak(`${next} smart journey selected.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `smart-journey ${className ?? ""}`,
		"aria-label": "Smart Learning Journey",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-journey-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-journey-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SMART LEARNING JOURNEY" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Your path can change as you learn ✨" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Local-first personalization • no internet needed" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "smart-refresh",
						onClick: refresh,
						"aria-label": "Refresh smart plan",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "smart-tabs",
				role: "tablist",
				"aria-label": "Smart journey sections",
				children: [
					["adventure", "🎯 Adventure"],
					["skills", "🗺️ Skill Map"],
					["style", "🎨 Learning Style"],
					["offline", "📡 Offline"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: tab === id ? "is-active" : "",
					onClick: () => setTab(id),
					role: "tab",
					"aria-selected": tab === id,
					children: label
				}, id))
			}),
			tab === "adventure" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-adventure",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-class-picker",
						children: [
							"Nursery",
							"KG",
							"Montessori"
						].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => changeClass(name),
							className: klass === name ? "is-active" : "",
							children: [
								CLASS_EMOJI[name],
								" ",
								name
							]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "smart-daily",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "smart-daily-icon",
								children: recommendation.mode === "audio" ? "🔊" : recommendation.mode === "story" ? "📖" : recommendation.mode === "hands-on" ? "👐" : "🎮"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Today’s smart challenge" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: challenge }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
										recommendation.title,
										" • ",
										recommendation.difficulty,
										" • ",
										mode
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									const id = {
										Nursery: {
											letters: "letters",
											numbers: "numbers",
											colors: "colors",
											shapes: "shapes",
											animals: "animals",
											rhymes: "rhymes"
										},
										KG: {
											phonics: "kg-phonics",
											words: "kg-reading",
											math: "kg-math",
											reading: "kg-reading",
											patterns: "kg-patterns",
											science: "kg-vehicles"
										},
										Montessori: {
											"practical-life": "mont-practical",
											sensorial: "mont-sensorial",
											language: "mont-language",
											mathematics: "mont-math",
											sorting: "mont-sorting",
											nature: "mont-nature"
										}
									}[klass][recommendation.skill];
									if (id) window.dispatchEvent(new CustomEvent("lla-open-activity", { detail: {
										id,
										difficulty: recommendation.difficulty
									} }));
									onSpeak(`${challenge}. ${recommendation.title}. ${recommendation.reason}`);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "size-4" }), " Start"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "smart-mini-stats",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-3.5" }),
							" ",
							explored,
							"/",
							skills.length,
							" skills explored"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }),
							" ",
							recommendation.confidence,
							"% guidance"
						] })]
					})
				]
			}),
			tab === "skills" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-skill-map",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-class-picker",
						children: [
							"Nursery",
							"KG",
							"Montessori"
						].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => changeClass(name),
							className: klass === name ? "is-active" : "",
							children: [
								CLASS_EMOJI[name],
								" ",
								name
							]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "smart-skill-grid",
						children: skills.map((skill) => {
							const s = stat[skill];
							const accuracy = s?.attempts ? Math.round(s.correct / s.attempts * 100) : 0;
							const state = !s?.attempts ? "New" : accuracy >= 88 ? "Strong" : accuracy >= 65 ? "Growing" : "Practice";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `smart-skill ${state.toLowerCase()}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: skill.replaceAll("-", " ") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: state })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "smart-skill-bar",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${s?.attempts ? Math.max(8, accuracy) : 6}%` } })
								})]
							}, skill);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "smart-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-4" }), " The map uses only this class’s learning signals, so pathways stay separate."]
					})
				]
			}),
			tab === "style" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LearningStyle, {
				profile,
				klass
			}),
			tab === "offline" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "smart-offline",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "smart-offline-hero",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Offline Smart Mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Recommendations, progress and challenge selection stay on this device." })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "smart-offline-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧠 Local brain" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎮 Adaptive games" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📊 Local progress" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔊 Bundled audio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🖼️ Local artwork" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📝 Local worksheets" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "smart-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-4" }), " Cloud sync and account features can wait until a connection is available."]
					})
				]
			})
		]
	});
}
function LearningStyle({ profile, klass }) {
	const rows = MODES.map((mode) => {
		let attempts = 0;
		let correct = 0;
		for (const stat of Object.values(profile.byClass[klass])) {
			const item = stat.signalStats?.[mode];
			attempts += item?.attempts ?? 0;
			correct += item?.correct ?? 0;
		}
		return {
			mode,
			attempts,
			accuracy: attempts ? correct / attempts : 0
		};
	}).sort((a, b) => b.accuracy - a.accuracy || b.attempts - a.attempts);
	const top = rows.filter((row) => row.attempts >= 2)[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "smart-style",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "smart-style-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "smart-style-emoji",
				children: top ? {
					picture: "🖼️",
					audio: "🔊",
					game: "🎮",
					story: "📖",
					"hands-on": "👐"
				}[top.mode] : "✨"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Learning patterns" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: top ? `${MODE_LABEL[top.mode]} is currently working well` : "Learning patterns are still forming" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Based on repeated attempts and accuracy in this pathway; it is guidance, not a fixed label." })
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "smart-style-bars",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: MODE_LABEL[row.mode] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { style: { width: `${Math.round(row.accuracy * 100)}%` } }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: row.attempts ? `${Math.round(row.accuracy * 100)}%` : "—" })
			] }, row.mode))
		})]
	});
}
var CLASSES = {
	Nursery: {
		icon: "🟢",
		color: "academy-nursery",
		tagline: "Playful first steps",
		subjects: [
			"ABC & phonics",
			"Counting 1–10",
			"Colors & shapes",
			"Rhymes & listening"
		],
		rooms: [
			"Rainbow Garden",
			"Alphabet Garden",
			"Counting Park",
			"Music Corner"
		],
		mascot: "🐰",
		mission: "Find 3 colorful things!"
	},
	KG: {
		icon: "🔵",
		color: "academy-kg",
		tagline: "Curious school readiness",
		subjects: [
			"Phonics & CVC",
			"Numbers to 100",
			"Early maths",
			"Reading & science"
		],
		rooms: [
			"KG Classroom",
			"Math Mountain",
			"Reading Library",
			"Mini Science Lab"
		],
		mascot: "🦊",
		mission: "Build 3 simple words!"
	},
	Montessori: {
		icon: "🌱",
		color: "academy-montessori",
		tagline: "Calm hands-on discovery",
		subjects: [
			"Practical Life",
			"Sensorial",
			"Language",
			"Mathematics & Culture"
		],
		rooms: [
			"Montessori Garden",
			"Practical Life Table",
			"Sensorial Shelf",
			"Nature Corner"
		],
		mascot: "🐼",
		mission: "Sort objects by size!"
	}
};
var REWARDS$1 = {
	Nursery: [
		"🏅 ABC Star",
		"🔢 Counting Star",
		"🎨 Color Star",
		"🎵 Rhyme Star"
	],
	KG: [
		"🔤 Phonics Star",
		"🔢 Math Star",
		"📖 Reading Star",
		"🔬 Discovery Star"
	],
	Montessori: [
		"🌱 Practical Life",
		"🖐️ Sensorial Star",
		"🔤 Language Star",
		"🌿 Nature Explorer"
	]
};
var QUICK = [
	[
		"🎨",
		"Art Studio",
		"Draw, color & save"
	],
	[
		"🎵",
		"Music Room",
		"Tap a rhythm"
	],
	[
		"📖",
		"Story Theater",
		"Listen & explore"
	],
	[
		"🔬",
		"Mini Science Lab",
		"Discover why"
	],
	[
		"❤️",
		"Feelings Corner",
		"Learn emotions"
	],
	[
		"🧼",
		"Daily Life",
		"Practice routines"
	]
];
var PETS = [
	"🐶",
	"🐱",
	"🐰",
	"🐼",
	"🐥",
	"🦊"
];
function AcademyWorld({ xp, completed, available, onSpeak, onMissionComplete }) {
	const [klass, setKlass] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem("lla-class") || "Nursery";
		} catch {
			return "Nursery";
		}
	});
	const [pet, setPet] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem("lla-pet") || "🐰";
		} catch {
			return "🐰";
		}
	});
	const missionKey = `lla-academy-mission-${klass}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
	const [missionDone, setMissionDone] = (0, import_react.useState)(() => {
		try {
			return localStorage.getItem(missionKey) === "1";
		} catch {
			return false;
		}
	});
	const [petCare, setPetCare] = (0, import_react.useState)(() => {
		try {
			return JSON.parse(localStorage.getItem("lla-pet-care") ?? "null") ?? {
				happiness: 60,
				energy: 70,
				hunger: 60
			};
		} catch {
			return {
				happiness: 60,
				energy: 70,
				hunger: 60
			};
		}
	});
	const data = CLASSES[klass];
	const progress = available > 0 ? Math.min(100, Math.round(completed / available * 100)) : 0;
	const mastered = (0, import_react.useMemo)(() => {
		const profile = getLearningProfile();
		return CLASS_SKILLS[klass].filter((skill) => {
			const stat = profile.byClass[klass][skill];
			return !!stat && stat.attempts >= 3 && stat.correct / stat.attempts >= .88;
		}).length;
	}, [
		klass,
		completed,
		xp
	]);
	const rewards = REWARDS$1[klass];
	const unlocked = Math.min(rewards.length, mastered);
	const roomCount = (0, import_react.useMemo)(() => Math.min(data.rooms.length, 2 + Math.floor(xp / 100)), [data.rooms.length, xp]);
	const select = (next) => {
		setKlass(next);
		try {
			localStorage.setItem("lla-class", next);
		} catch {}
		try {
			setMissionDone(localStorage.getItem(`lla-academy-mission-${next}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`) === "1");
		} catch {
			setMissionDone(false);
		}
		window.dispatchEvent(new Event("lla-class-change"));
		onSpeak(`${next} pathway selected. Let's learn, play and grow!`);
	};
	const choosePet = (next) => {
		setPet(next);
		try {
			localStorage.setItem("lla-pet", next);
		} catch {}
		onSpeak(`Your new academy friend is ${next}.`);
	};
	const updatePet = (delta, message) => {
		const next = {
			...petCare,
			...Object.fromEntries(Object.entries(delta).map(([k, v]) => [k, Math.max(0, Math.min(100, petCare[k] + Number(v)))]))
		};
		setPetCare(next);
		try {
			localStorage.setItem("lla-pet-care", JSON.stringify(next));
		} catch {}
		onSpeak(message);
	};
	const action = (title) => onSpeak(`${title}. Let's learn and have fun!`);
	const openActivity = (id) => window.dispatchEvent(new CustomEvent("lla-open-activity", { detail: { id } }));
	const completeMission = () => {
		if (missionDone) return;
		setMissionDone(true);
		try {
			localStorage.setItem(missionKey, "1");
		} catch {}
		onMissionComplete?.();
		action(`${klass} mission complete. You earned a star!`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `academy-world ${data.color} rounded-[2rem] p-4 shadow-lg`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-world-glow",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-ai-art",
					"aria-label": "Little Learners Academy illustrated learning world",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/offline/preschool/academy-magic-ai.png",
						alt: "Little Learners Academy colorful illustrated learning world",
						loading: "eager",
						decoding: "async"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "academy-ai-badge",
						children: "✨ Offline Academy Art"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "academy-mascot",
							children: data.mascot
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[.16em] opacity-70",
									children: "Welcome to your school"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-slate-800",
									children: "My Academy 🏫 • Little Learners Academy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-slate-600",
									children: [
										"Three separate pathways • ",
										progress,
										"% journey"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "academy-sound",
							"aria-label": "Hear classroom message",
							onClick: () => onSpeak(`${klass}. ${data.tagline}. ${data.subjects.join(", ")}.`),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-5" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: Object.keys(CLASSES).map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => select(name),
						className: `academy-class-card ${klass === name ? "is-selected" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl",
								children: CLASSES[name].icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: CLASSES[name].tagline })
						]
					}, name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "academy-mission mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "academy-mission-icon",
								children: "🎯"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] font-black uppercase tracking-wider opacity-60",
									children: [
										"Today's ",
										klass,
										" mission"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: data.mission })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "academy-check",
								onClick: completeMission,
								children: [" ", missionDone ? "⭐" : "✓"]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-3xl bg-white/80 p-4 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] font-black uppercase tracking-wider text-slate-500",
							children: [klass, " classroom"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-xl text-slate-800",
							children: [
								data.tagline,
								" ",
								data.icon
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "academy-progress-ring",
							style: { "--progress": `${progress * 3.6}deg` },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [progress, "%"] })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-2",
						children: data.subjects.map((subject, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => action(`${klass}. ${subject}`),
							className: "academy-subject",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: [
									"🔤",
									"🔢",
									"🎨",
									"📚"
								][i] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: subject }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: i < roomCount ? "Room ready" : "Unlock with more XP" })
							]
						}, subject))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartLearningFriend, { className: "mt-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartJourneyPanel, {
					className: "mt-3",
					onSpeak
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-section-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏫" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Explore Academy" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Tap a room to visit" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: data.rooms.map((room, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: i >= roomCount,
						onClick: () => {
							openActivity({
								Nursery: [
									"colors",
									"letters",
									"numbers",
									"rhymes"
								],
								KG: [
									"kg-phonics",
									"kg-math",
									"kg-reading",
									"kg-vehicles"
								],
								Montessori: [
									"mont-sensorial",
									"mont-practical",
									"mont-sorting",
									"mont-nature"
								]
							}[klass][i]);
						},
						className: `academy-room ${i < roomCount ? "" : "is-locked"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: [
								"🌈",
								"🔤",
								"🔢",
								"🎵"
							][i] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: room }),
							i >= roomCount && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								"🔒 ",
								100 * (i + 1),
								" XP"
							] })
						]
					}, room))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-section-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✨" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Magic Rooms" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Creative discoveries" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "academy-quick-grid",
					children: QUICK.map(([icon, title, sub], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room: [
								"art",
								"music",
								"stories",
								"science",
								"feelings",
								"daily"
							][i] } }));
						},
						className: "academy-quick",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: icon }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: sub })
						]
					}, title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-pet-card mt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "academy-pet-avatar",
							children: pet
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-wider opacity-60",
									children: "My Little Friend"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Pick a learning buddy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex gap-1.5",
									children: PETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => choosePet(p),
										className: `academy-pet-choice ${pet === p ? "is-selected" : ""}`,
										children: p
									}, p))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "hud-chip",
											onClick: () => updatePet({
												hunger: 18,
												happiness: 4
											}, "Yum! Your pet is fed."),
											children: "🍎 Feed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "hud-chip",
											onClick: () => updatePet({
												happiness: 15,
												energy: -8
											}, "Play time! Your pet is happy."),
											children: "🎾 Play"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "hud-chip",
											onClick: () => updatePet({
												energy: 20,
												hunger: -5
											}, "Your pet had a little rest."),
											children: "😴 Rest"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
									"Happy ",
									petCare.happiness,
									"% • Energy ",
									petCare.energy,
									"% • Full ",
									petCare.hunger,
									"%"
								] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-5 opacity-50" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-bus mt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "academy-bus-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Magic School Bus 🚌" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Nursery • KG • Montessori • Art • Music • Stories" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room: "bus" } })),
							children: "Ride!"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-3xl bg-slate-900/90 p-3 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-5 text-amber-300" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "flex-1",
								children: "Trophy Garden"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs",
								children: [
									unlocked,
									"/",
									rewards.length
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-4 gap-2",
						children: rewards.map((reward, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `academy-trophy ${i < unlocked ? "is-unlocked" : ""}`,
							children: [i < unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mx-auto size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "mx-auto size-4 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: reward.replace(/^\S+ /, "") })]
						}, reward))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "academy-bottom-links mt-3",
					children: [
						[
							Palette,
							"Art",
							"Create",
							"art"
						],
						[
							Music2,
							"Music",
							"Play",
							"music"
						],
						[
							BookOpen,
							"Stories",
							"Read",
							"stories"
						],
						[
							FlaskConical,
							"Science",
							"Explore",
							"science"
						],
						[
							Heart,
							"Feelings",
							"Care",
							"feelings"
						],
						[
							Sun,
							"Nature",
							"Discover",
							"atlas"
						]
					].map(([Icon, title, sub, room]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room } })),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: sub })
							]
						}, title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-600",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }),
						" Learn • Play • Create • Discover • Grow ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" })
					]
				})
			]
		})]
	});
}
var GALLERY_KEY = "lla-art-gallery-v1";
function speak$1(text) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
	const u = new SpeechSynthesisUtterance(text);
	u.rate = .88;
	u.pitch = 1.06;
	window.speechSynthesis.speak(u);
}
function readGallery() {
	try {
		const raw = JSON.parse(localStorage.getItem(GALLERY_KEY) ?? "[]");
		return Array.isArray(raw) ? raw.filter((x) => typeof x === "string").slice(-12) : [];
	} catch {
		return [];
	}
}
function AcademyRoomShell({ title, kicker, onBack, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "academy-room-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "academy-room-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "academy-icon-btn",
				onClick: onBack,
				"aria-label": "Back to Academy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: kicker }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-room-body",
			children
		})]
	});
}
function AcademyRoomView({ room, klass, onBack, onSpeak, onComplete, onOpenActivity, onSelectClass }) {
	switch (room) {
		case "art": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtStudioRoom, {
			onBack,
			onComplete
		});
		case "music": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicRoom, {
			onBack,
			onComplete
		});
		case "stories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryTheaterRoom, {
			klass,
			onBack,
			onComplete,
			onSpeak
		});
		case "science": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScienceLabRoom, {
			klass,
			onBack,
			onComplete,
			onSpeak
		});
		case "feelings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeelingsRoom, {
			onBack,
			onComplete,
			onSpeak
		});
		case "daily": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyLifeRoom, {
			onBack,
			onComplete,
			onSpeak
		});
		case "gallery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkGalleryRoom, { onBack });
		case "bus": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchoolBusRoom, {
			klass,
			onBack,
			onSelectClass,
			onOpenActivity,
			onSpeak
		});
		case "atlas": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimalAtlasRoom, {
			onBack,
			onSpeak
		});
		case "worksheets": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorksheetRoom, {
			klass,
			onBack,
			onComplete
		});
		case "listen": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListenRoom, {
			klass,
			onBack,
			onComplete
		});
		default: return null;
	}
}
function ArtStudioRoom({ onBack, onComplete }) {
	const canvasRef = (0, import_react.useRef)(null);
	const [colour, setColour] = (0, import_react.useState)("#ff7a59");
	const [drawing, setDrawing] = (0, import_react.useState)(false);
	const [hasArt, setHasArt] = (0, import_react.useState)(false);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [prompt] = (0, import_react.useState)(() => WORD_CARDS[Math.floor(Math.random() * WORD_CARDS.length)]);
	(0, import_react.useEffect)(() => {
		const c = canvasRef.current;
		const ctx = c?.getContext("2d");
		if (!c || !ctx) return;
		ctx.fillStyle = "#fffdf8";
		ctx.fillRect(0, 0, c.width, c.height);
	}, []);
	const point = (e) => {
		const c = canvasRef.current;
		if (!c) return null;
		const r = c.getBoundingClientRect();
		return {
			x: (e.clientX - r.left) * (c.width / r.width),
			y: (e.clientY - r.top) * (c.height / r.height)
		};
	};
	const down = (e) => {
		const c = canvasRef.current;
		const ctx = c?.getContext("2d");
		if (!c || !ctx) return;
		c.setPointerCapture(e.pointerId);
		setHistory((h) => [...h.slice(-9), ctx.getImageData(0, 0, c.width, c.height)]);
		setDrawing(true);
		const p = point(e);
		if (p) {
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
		}
	};
	const move = (e) => {
		if (!drawing) return;
		const ctx = canvasRef.current?.getContext("2d");
		const p = point(e);
		if (!ctx || !p) return;
		ctx.strokeStyle = colour;
		ctx.lineWidth = 16;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineTo(p.x, p.y);
		ctx.stroke();
		setHasArt(true);
	};
	const save = () => {
		try {
			const c = canvasRef.current;
			if (!c) return;
			const next = [...readGallery(), c.toDataURL("image/png")].slice(-12);
			localStorage.setItem(GALLERY_KEY, JSON.stringify(next));
		} catch {}
		sfxPlay.win();
		onComplete();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Art Studio",
		kicker: "Create",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "academy-room-lead",
				children: [
					"Draw a ",
					prompt.word.toLowerCase(),
					". Your picture stays on this device."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: prompt.src,
				alt: prompt.word,
				className: "academy-prompt-art"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 720,
				height: 460,
				className: "academy-canvas",
				onPointerDown: down,
				onPointerMove: move,
				onPointerUp: () => setDrawing(false),
				onPointerCancel: () => setDrawing(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-swatches",
				children: [
					"#ff7a59",
					"#4da6ff",
					"#43c77a",
					"#ffd24d",
					"#7b61ff",
					"#2b2a32"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Choose color",
					className: "academy-swatch",
					style: { background: c },
					onClick: () => setColour(c)
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "academy-row-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "academy-ghost",
						disabled: !history.length,
						onClick: () => {
							const c = canvasRef.current;
							const ctx = c?.getContext("2d");
							const last = history.at(-1);
							if (!c || !ctx || !last) return;
							ctx.putImageData(last, 0, 0);
							setHistory((h) => h.slice(0, -1));
						},
						children: "Undo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "academy-ghost",
						onClick: () => {
							const c = canvasRef.current;
							const ctx = c?.getContext("2d");
							if (!c || !ctx) return;
							ctx.fillStyle = "#fffdf8";
							ctx.fillRect(0, 0, c.width, c.height);
							setHasArt(false);
						},
						children: "Clear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "academy-primary",
						disabled: !hasArt,
						onClick: save,
						children: "Save to Gallery"
					})
				]
			})
		]
	});
}
function MusicRoom({ onBack, onComplete }) {
	const notes = [
		{
			name: "C",
			freq: 261.63
		},
		{
			name: "D",
			freq: 293.66
		},
		{
			name: "E",
			freq: 329.63
		},
		{
			name: "F",
			freq: 349.23
		},
		{
			name: "G",
			freq: 392
		},
		{
			name: "A",
			freq: 440
		},
		{
			name: "B",
			freq: 493.88
		},
		{
			name: "C",
			freq: 523.25
		}
	];
	const [played, setPlayed] = (0, import_react.useState)(0);
	const play = (freq) => {
		unlockAudio();
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return;
		const ctx = new AC();
		const o = ctx.createOscillator();
		const g = ctx.createGain();
		o.type = "sine";
		o.frequency.value = freq;
		g.gain.value = .08;
		o.connect(g);
		g.connect(ctx.destination);
		o.start();
		o.stop(ctx.currentTime + .28);
		setPlayed((n) => {
			const next = n + 1;
			if (next === 5) onComplete();
			return next;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Music Room",
		kicker: "Listen",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-room-lead",
				children: "Tap the keys. Play five notes to earn a star."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-piano",
				role: "group",
				"aria-label": "Piano keys",
				children: notes.map((note, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "academy-key",
					onClick: () => play(note.freq),
					children: note.name
				}, `${note.name}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "academy-meta",
				children: [played, " notes played"]
			})
		]
	});
}
function StoryTheaterRoom({ klass, onBack, onComplete, onSpeak }) {
	const books = STORY_BOOKS.filter((b) => b.className === klass);
	const [bookId, setBookId] = (0, import_react.useState)(null);
	const [page, setPage] = (0, import_react.useState)(0);
	const [answer, setAnswer] = (0, import_react.useState)(null);
	const book = books.find((b) => b.id === bookId) ?? null;
	if (!book) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademyRoomShell, {
		title: "Story Theater",
		kicker: `${klass} stories`,
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-story-grid",
			children: books.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-story-card",
				onClick: () => {
					setBookId(item.id);
					setPage(0);
					setAnswer(null);
					onSpeak(item.title);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.pages[0].art,
					alt: ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.title })]
			}, item.id))
		})
	});
	const atQuestion = page >= book.pages.length;
	const scene = book.pages[Math.min(page, book.pages.length - 1)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: book.title,
		kicker: "Story Theater",
		onBack: () => setBookId(null),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: scene.art,
			alt: "",
			className: "academy-story-art"
		}), !atQuestion ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-story-text",
				children: scene.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-ghost",
				onClick: () => onSpeak(scene.text),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "academy-primary",
				onClick: () => setPage((p) => p + 1),
				children: "Next page"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "academy-story-text",
			children: book.question.prompt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-choice-grid",
			children: book.question.choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `academy-choice ${answer === choice ? choice === book.question.correct ? "is-right" : "is-wrong" : ""}`,
				onClick: () => {
					setAnswer(choice);
					if (choice === book.question.correct) {
						sfxPlay.win();
						onComplete();
					}
				},
				children: choice
			}, choice))
		})] })]
	});
}
function ScienceLabRoom({ klass, onBack, onComplete, onSpeak }) {
	const item = (klass === "Nursery" ? [{
		prompt: "What needs water to grow?",
		art: "/offline/preschool/words/tree.svg",
		choices: [
			"A tree",
			"A rock",
			"A spoon"
		],
		correct: "A tree"
	}] : klass === "KG" ? [{
		prompt: "Which vehicle can fly?",
		art: "/offline/preschool/words/car.svg",
		choices: [
			"A plane",
			"A bus",
			"A train"
		],
		correct: "A plane"
	}] : [{
		prompt: "Living or non-living: a cat?",
		art: "/offline/preschool/words/cat.svg",
		choices: [
			"Living",
			"Non-living",
			"A color"
		],
		correct: "Living"
	}])[0];
	const [answer, setAnswer] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Mini Science Lab",
		kicker: klass,
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.art,
				alt: "",
				className: "academy-prompt-art"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-room-lead",
				children: item.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-ghost",
				onClick: () => onSpeak(item.prompt),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-choice-grid",
				children: item.choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `academy-choice ${answer === choice ? choice === item.correct ? "is-right" : "is-wrong" : ""}`,
					onClick: () => {
						setAnswer(choice);
						if (choice === item.correct) {
							sfxPlay.win();
							onComplete();
						}
					},
					children: choice
				}, choice))
			})
		]
	});
}
function FeelingsRoom({ onBack, onComplete, onSpeak }) {
	const prompt = "Which face looks happy?";
	const [answer, setAnswer] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Feelings Corner",
		kicker: "Care",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-room-lead",
				children: prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-ghost",
				onClick: () => onSpeak(prompt),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-choice-grid",
				children: [
					{
						id: "happy",
						label: "Happy",
						art: "/offline/preschool/animals/panda-7.svg"
					},
					{
						id: "sleepy",
						label: "Sleepy",
						art: "/offline/preschool/animals/sloth-39.svg"
					},
					{
						id: "fierce",
						label: "Fierce",
						art: "/offline/preschool/animals/lion-1.svg"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `academy-choice ${answer === c.id ? c.id === "happy" ? "is-right" : "is-wrong" : ""}`,
					onClick: () => {
						setAnswer(c.id);
						if (c.id === "happy") {
							sfxPlay.win();
							onComplete();
						}
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.art,
						alt: ""
					}), c.label]
				}, c.id))
			})
		]
	});
}
function DailyLifeRoom({ onBack, onComplete, onSpeak }) {
	const steps = [
		"Wash hands",
		"Sit at the table",
		"Say please",
		"Eat"
	];
	const [order, setOrder] = (0, import_react.useState)([]);
	const remaining = steps.filter((s) => !order.includes(s));
	const correct = order.join("|") === steps.join("|");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Daily Life",
		kicker: "Practical life",
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-room-lead",
				children: "Tap the steps in order."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-ghost",
				onClick: () => onSpeak(steps.join(". ")),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-seq",
				children: order.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					i + 1,
					". ",
					s
				] }, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-choice-grid",
				children: remaining.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "academy-choice",
					onClick: () => {
						const next = [...order, s];
						setOrder(next);
						if (next.join("|") === steps.join("|")) {
							sfxPlay.win();
							onComplete();
						}
					},
					children: s
				}, s))
			}),
			order.length > 0 && !correct && remaining.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-meta",
				children: "Try a calmer order next time."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "academy-ghost",
				onClick: () => setOrder([]),
				children: "Start again"
			})
		]
	});
}
function WorkGalleryRoom({ onBack }) {
	const [items, setItems] = (0, import_react.useState)(readGallery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "My Work Gallery",
		kicker: "Saved on this device",
		onBack,
		children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "academy-room-lead",
			children: "Draw in the Art Studio to fill this wall."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-gallery",
			children: items.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: `Artwork ${i + 1}`
			}, i))
		}), items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "academy-ghost",
			onClick: () => {
				localStorage.removeItem(GALLERY_KEY);
				setItems([]);
			},
			children: "Clear gallery"
		})]
	});
}
function SchoolBusRoom({ klass, onBack, onSelectClass, onOpenActivity, onSpeak }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Magic School Bus",
		kicker: `Now visiting ${klass}`,
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "academy-room-lead",
				children: "Choose a class, then hop off at a lesson."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-class-row",
				children: [
					"Playgroup",
					"Nursery",
					"KG-1",
					"KG-2",
					"Class 1"
				].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `academy-class-pill ${klass === name ? "is-on" : ""}`,
					onClick: () => {
						onSelectClass(name);
						onSpeak(`${name} stop`);
					},
					children: name
				}, name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-choice-grid",
				children: {
					Nursery: [
						{
							label: "ABC Fun",
							id: "letters"
						},
						{
							label: "Color Garden",
							id: "colors"
						},
						{
							label: "Count & Learn",
							id: "numbers"
						}
					],
					KG: [
						{
							label: "Phonics Builder",
							id: "kg-phonics"
						},
						{
							label: "Math Mountain",
							id: "kg-math"
						},
						{
							label: "Reading Library",
							id: "kg-reading"
						}
					],
					Montessori: [
						{
							label: "Sensorial Studio",
							id: "mont-sensorial"
						},
						{
							label: "Practical Life",
							id: "mont-practical"
						},
						{
							label: "Nature Corner",
							id: "mont-nature"
						}
					]
				}[klass].map((stop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "academy-choice",
					onClick: () => onOpenActivity(stop.id),
					children: stop.label
				}, stop.id))
			})
		]
	});
}
function AnimalAtlasRoom({ onBack, onSpeak }) {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => ANIMAL_LIBRARY.filter((a) => filter === "all" || a.group === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Nature Atlas",
		kicker: `${ANIMAL_LIBRARY.length} illustrated animals`,
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-class-row",
			children: [
				"all",
				"animal",
				"bird",
				"sea",
				"bug",
				"dino",
				"fantasy"
			].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `academy-class-pill ${filter === g ? "is-on" : ""}`,
				onClick: () => setFilter(g),
				children: g
			}, g))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-atlas",
			children: list.map((animal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "academy-atlas-card",
				onClick: () => {
					onSpeak(animal.name);
					const src = animal.sound ?? animalSound(animal.id);
					if (src) playBundledAudio(src);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: animal.src,
					alt: animal.name,
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: animal.name })]
			}, animal.id))
		})]
	});
}
function WorksheetRoom({ klass, onBack, onComplete }) {
	const sheets = WORKSHEETS[klass];
	const [current, setCurrent] = (0, import_react.useState)(sheets[0].id);
	const sheet = sheets.find((s) => s.id === current) ?? sheets[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Worksheet Table",
		kicker: `${klass} practice`,
		onBack,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-class-row",
				children: sheets.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `academy-class-pill ${current === s.id ? "is-on" : ""}`,
					onClick: () => setCurrent(s.id),
					children: s.title
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: sheet.src,
				alt: sheet.title,
				className: "academy-worksheet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "academy-primary",
				onClick: () => {
					sfxPlay.win();
					onComplete();
				},
				children: "I finished this page"
			})
		]
	});
}
function ListenRoom({ klass, onBack, onComplete }) {
	const tracks = CLASS_AUDIO[klass];
	const [current, setCurrent] = (0, import_react.useState)(tracks[0].id);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	const track = tracks.find((t) => t.id === current) ?? tracks[0];
	(0, import_react.useEffect)(() => () => {
		audioRef.current?.pause();
	}, []);
	const toggle = () => {
		unlockAudio();
		if (!audioRef.current || audioRef.current.src !== new URL(track.src, window.location.origin).href) {
			audioRef.current?.pause();
			audioRef.current = new Audio(track.src);
			audioRef.current.addEventListener("ended", () => {
				setPlaying(false);
				onComplete();
			});
		}
		if (playing) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play().catch(() => speak$1(track.title));
			setPlaying(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AcademyRoomShell, {
		title: "Listening Corner",
		kicker: `${klass} audio`,
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "academy-choice-grid",
			children: tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `academy-choice ${current === t.id ? "is-right" : ""}`,
				onClick: () => {
					setCurrent(t.id);
					setPlaying(false);
					audioRef.current?.pause();
				},
				children: t.title
			}, t.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "academy-primary",
			onClick: toggle,
			children: [
				playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }),
				" ",
				playing ? "Pause" : "Play lesson"
			]
		})]
	});
}
var ACTIVITIES = [
	{
		id: "letters",
		title: "ABC Fun",
		subtitle: "Letters & first sounds",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-6" }),
		kind: "letters",
		world: "abc",
		classes: ["Nursery"]
	},
	{
		id: "numbers",
		title: "Count & Learn",
		subtitle: "Numbers 1–10",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "size-6" }),
		kind: "numbers",
		world: "math",
		classes: ["Nursery"]
	},
	{
		id: "colors",
		title: "Color Garden",
		subtitle: "Match bright colors",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-6" }),
		kind: "colors",
		world: "creative",
		classes: ["Nursery"]
	},
	{
		id: "shapes",
		title: "Shape Safari",
		subtitle: "Circle, square & more",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shapes, { className: "size-6" }),
		kind: "shapes",
		world: "math",
		classes: ["Nursery"]
	},
	{
		id: "body",
		title: "My Body",
		subtitle: "Learn body parts",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-6" }),
		kind: "body",
		world: "abc",
		classes: ["Nursery"]
	},
	{
		id: "animals",
		title: "Animal Friends",
		subtitle: "Pictures, names & sounds",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-6" }),
		kind: "listen",
		world: "nature",
		classes: ["Nursery"]
	},
	{
		id: "rhymes",
		title: "Rhythm Garden",
		subtitle: "Sing, clap & listen",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-6" }),
		kind: "rhymes",
		premium: true,
		world: "stories",
		classes: ["Nursery"]
	},
	{
		id: "kg-phonics",
		title: "Phonics Builder",
		subtitle: "Sounds, letters & CVC",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-6" }),
		kind: "letters",
		world: "abc",
		classes: ["KG"]
	},
	{
		id: "kg-math",
		title: "Math Mountain",
		subtitle: "Add, compare & count",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-6" }),
		kind: "math",
		premium: true,
		world: "math",
		classes: ["KG"]
	},
	{
		id: "kg-patterns",
		title: "Pattern Detective",
		subtitle: "Find what comes next",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6" }),
		kind: "patterns",
		premium: true,
		world: "math",
		classes: ["KG"]
	},
	{
		id: "kg-reading",
		title: "Reading Library",
		subtitle: "Stories & questions",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-6" }),
		kind: "story",
		premium: true,
		world: "stories",
		classes: ["KG"]
	},
	{
		id: "kg-vehicles",
		title: "Vehicle Science",
		subtitle: "Cars, buses & motion",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "size-6" }),
		kind: "vehicles",
		world: "nature",
		classes: ["KG"]
	},
	{
		id: "kg-puzzle",
		title: "Picture Puzzles",
		subtitle: "Match and reason",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Puzzle, { className: "size-6" }),
		kind: "puzzle",
		premium: true,
		world: "games",
		classes: ["KG"]
	},
	{
		id: "mont-language",
		title: "Language Shelf",
		subtitle: "Objects, sounds & tracing",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-6" }),
		kind: "tracing",
		world: "abc",
		classes: ["Montessori"]
	},
	{
		id: "mont-math",
		title: "Montessori Mathematics",
		subtitle: "Quantity & number sense",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-6" }),
		kind: "math",
		premium: true,
		world: "math",
		classes: ["Montessori"]
	},
	{
		id: "mont-sensorial",
		title: "Sensorial Studio",
		subtitle: "Color & shape grading",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shapes, { className: "size-6" }),
		kind: "shapes",
		world: "creative",
		classes: ["Montessori"]
	},
	{
		id: "mont-sorting",
		title: "Sorting Station",
		subtitle: "Classify, order & compare",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-6" }),
		kind: "sorting",
		world: "games",
		classes: ["Montessori"]
	},
	{
		id: "mont-practical",
		title: "Practical Life",
		subtitle: "Hands-on daily routines",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-6" }),
		kind: "sorting",
		world: "games",
		classes: ["Montessori"]
	},
	{
		id: "mont-nature",
		title: "Nature Corner",
		subtitle: "Listen and discover nature",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6" }),
		kind: "listen",
		premium: true,
		world: "nature",
		classes: ["Montessori"]
	},
	{
		id: "mont-worksheets",
		title: "Worksheet Table",
		subtitle: "Calm independent practice",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-6" }),
		kind: "tracing",
		world: "abc",
		classes: ["Montessori"]
	}
];
var COLORS = [
	"Red",
	"Blue",
	"Yellow",
	"Green"
];
var SHAPES = [
	"Circle",
	"Square",
	"Triangle",
	"Star"
];
var BODY = [
	"Eyes 👀",
	"Nose 👃",
	"Ears 👂",
	"Hands 👐"
];
var ANIMALS = [
	{
		id: "lion",
		e: "🦁",
		n: "Lion",
		group: "Animal"
	},
	{
		id: "elephant",
		e: "🐘",
		n: "Elephant",
		group: "Animal"
	},
	{
		id: "tiger",
		e: "🐯",
		n: "Tiger",
		group: "Animal"
	},
	{
		id: "monkey",
		e: "🐒",
		n: "Monkey",
		group: "Animal"
	},
	{
		id: "frog",
		e: "🐸",
		n: "Frog",
		group: "Animal"
	},
	{
		id: "fox",
		e: "🦊",
		n: "Fox",
		group: "Animal"
	},
	{
		id: "bear",
		e: "🐻",
		n: "Bear",
		group: "Animal"
	},
	{
		id: "panda",
		e: "🐼",
		n: "Panda",
		group: "Animal"
	},
	{
		id: "owl",
		e: "🦉",
		n: "Owl",
		group: "Bird"
	},
	{
		id: "parrot",
		e: "🦜",
		n: "Parrot",
		group: "Bird"
	},
	{
		id: "eagle",
		e: "🦅",
		n: "Eagle",
		group: "Bird"
	},
	{
		id: "penguin",
		e: "🐧",
		n: "Penguin",
		group: "Bird"
	},
	{
		id: "flamingo",
		e: "🦩",
		n: "Flamingo",
		group: "Bird"
	},
	{
		id: "duck",
		e: "🦆",
		n: "Duck",
		group: "Bird"
	},
	{
		id: "peacock",
		e: "🦚",
		n: "Peacock",
		group: "Bird"
	},
	{
		id: "chicken",
		e: "🐔",
		n: "Chicken",
		group: "Bird"
	}
];
var WORLDS = [
	{
		id: "abc",
		e: "🔤",
		title: "ABC World",
		text: "Letters, phonics & words",
		tone: "pink"
	},
	{
		id: "math",
		e: "🔢",
		title: "Numbers World",
		text: "Counting, shapes & maths",
		tone: "blue"
	},
	{
		id: "creative",
		e: "🎨",
		title: "Creative World",
		text: "Coloring, drawing & tracing",
		tone: "yellow"
	},
	{
		id: "nature",
		e: "🐾",
		title: "Nature World",
		text: "Animals, birds & sounds",
		tone: "green"
	},
	{
		id: "stories",
		e: "📚",
		title: "Story World",
		text: "Stories, rhymes & listening",
		tone: "purple"
	},
	{
		id: "games",
		e: "🧩",
		title: "Game World",
		text: "Memory, puzzles & sorting",
		tone: "orange"
	}
];
var MISSIONS = [
	"ABC Explorer 🔤",
	"Count 10 Things 🔢",
	"Meet an Animal 🐾",
	"Create Something 🎨",
	"Listen & Repeat 🔊"
];
var PROFILE_KEY = "mw-preschool-profile";
var DONE_KEY = "mw-preschool-completed";
var STARS_KEY = "mw-preschool-stars";
var XP_KEY = "mw-preschool-xp";
var UPDATED_KEY = "mw-preschool-updated";
function readLocal(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw == null ? fallback : JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeLocal(key, value) {
	if (typeof window !== "undefined") try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function speak(text) {
	if (typeof window !== "undefined" && "speechSynthesis" in window) {
		window.speechSynthesis.cancel();
		const u = new SpeechSynthesisUtterance(text);
		u.rate = .86;
		u.pitch = 1.08;
		window.speechSynthesis.speak(u);
	}
}
async function prepareOfflinePack() {
	try {
		const cache = await caches.open("little-learners-preschool-v6-offline");
		const payload = JSON.stringify({
			version: 6,
			activities: ACTIVITIES.map((a) => a.id),
			worlds: WORLDS,
			animals: ANIMALS,
			savedAt: Date.now()
		});
		await cache.put("/preschool-learning-pack.json", new Response(payload, { headers: { "Content-Type": "application/json" } }));
		(await navigator.serviceWorker?.ready)?.active?.postMessage({
			type: "CACHE_PRESCHOOL_PACK",
			urls: typeof performance !== "undefined" ? performance.getEntriesByType("resource").map((entry) => entry.name).filter((url) => url.includes("/assets/")) : []
		});
		if (typeof window !== "undefined") localStorage.setItem("mw-preschool-offline-pack", "6");
		return true;
	} catch {
		return false;
	}
}
function PreschoolLearningScreen({ onBack }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("home");
	const [room, setRoom] = (0, import_react.useState)(null);
	const [klass, setKlass] = (0, import_react.useState)(() => {
		try {
			const v = localStorage.getItem("lla-class");
			return v === "KG" || v === "Montessori" ? v : "Nursery";
		} catch {
			return "Nursery";
		}
	});
	const availableActivities = (0, import_react.useMemo)(() => ACTIVITIES.filter((a) => a.classes.includes(klass)), [klass]);
	const [completed, setCompleted] = (0, import_react.useState)(() => readLocal(DONE_KEY, []));
	const [stars, setStars] = (0, import_react.useState)(() => readLocal(STARS_KEY, 0));
	const [xp, setXp] = (0, import_react.useState)(() => readLocal(XP_KEY, 0));
	const [online, setOnline] = (0, import_react.useState)(() => typeof navigator === "undefined" ? true : navigator.onLine);
	const [premium, setPremium] = (0, import_react.useState)(false);
	const [buying, setBuying] = (0, import_react.useState)(false);
	const [purchaseGate, setPurchaseGate] = (0, import_react.useState)(false);
	const [offlinePack, setOfflinePack] = (0, import_react.useState)(() => typeof window !== "undefined" && localStorage.getItem("mw-preschool-offline-pack") === "6");
	const [packing, setPacking] = (0, import_react.useState)(false);
	const [profile, setProfile] = (0, import_react.useState)(() => readLocal(PROFILE_KEY, {
		name: "Little Learner",
		age: 4
	}));
	const [mission, setMission] = (0, import_react.useState)(() => readLocal("mw-preschool-mission", 0));
	const [level, setLevel] = (0, import_react.useState)(() => readLocal("mw-preschool-level", "Beginner"));
	(0, import_react.useEffect)(() => {
		const on = () => setOnline(true), off = () => setOnline(false);
		addEventListener("online", on);
		addEventListener("offline", off);
		return () => {
			removeEventListener("online", on);
			removeEventListener("offline", off);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const onClass = () => {
			try {
				const v = localStorage.getItem("lla-class");
				setKlass(v === "KG" || v === "Montessori" ? v : "Nursery");
			} catch {}
		};
		addEventListener("lla-class-change", onClass);
		return () => removeEventListener("lla-class-change", onClass);
	}, []);
	(0, import_react.useEffect)(() => {
		const onOpen = (e) => {
			const detail = e.detail;
			if (!detail.id) return;
			const activity = availableActivities.find((a) => a.id === detail.id);
			if (activity) {
				setRoom(null);
				setSelected({
					...activity,
					difficulty: detail.difficulty
				});
			}
		};
		addEventListener("lla-open-activity", onOpen);
		const onRoom = (e) => {
			const detail = e.detail;
			if (!detail.room) return;
			setSelected(null);
			setRoom(detail.room);
		};
		addEventListener("lla-open-room", onRoom);
		return () => {
			removeEventListener("lla-open-activity", onOpen);
			removeEventListener("lla-open-room", onRoom);
		};
	}, [availableActivities]);
	(0, import_react.useEffect)(() => {
		getMyEntitlements().then((rows) => setPremium(rows.some((r) => r.productId === "premium"))).catch(() => setPremium(false));
	}, []);
	(0, import_react.useEffect)(() => {
		let alive = true;
		getPreschoolProgress().then((result) => {
			if (!alive || !result.progress) return;
			const remote = result.progress;
			const mergedCompleted = Array.from(/* @__PURE__ */ new Set([...completed, ...Array.isArray(remote.completed) ? remote.completed.filter((x) => typeof x === "string") : []]));
			const mergedStars = Math.max(stars, Number(remote.stars ?? 0));
			const mergedXp = Math.max(xp, Number(remote.xp ?? 0));
			const mergedMission = Number(remote.mission ?? mission);
			const mergedProfile = remote.profile && typeof remote.profile === "object" ? remote.profile : profile;
			setCompleted(mergedCompleted);
			setStars(mergedStars);
			setXp(mergedXp);
			setMission(Math.max(0, Math.min(4, Math.floor(mergedMission))));
			if (mergedProfile.name) setProfile({
				name: String(mergedProfile.name).slice(0, 40),
				age: Math.max(2, Math.min(6, Number(mergedProfile.age ?? 4)))
			});
			writeLocal(DONE_KEY, mergedCompleted);
			writeLocal(STARS_KEY, mergedStars);
			writeLocal(XP_KEY, mergedXp);
			writeLocal("mw-preschool-mission", mergedMission);
			writeLocal(PROFILE_KEY, {
				name: String(mergedProfile.name ?? profile.name),
				age: Number(mergedProfile.age ?? profile.age)
			});
		}).catch(() => {});
		return () => {
			alive = false;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!online) return;
		const timer = window.setTimeout(() => {
			savePreschoolProgress({ data: { progress: {
				profile,
				completed,
				stars,
				xp,
				mission,
				level,
				localUpdatedAt: Number(localStorage.getItem(UPDATED_KEY) ?? 0)
			} } }).catch(() => {});
		}, 1200);
		return () => window.clearTimeout(timer);
	}, [
		online,
		profile,
		completed,
		stars,
		xp,
		mission,
		level
	]);
	const buyPremium = async () => {
		setBuying(true);
		try {
			const r = await createCheckoutSession({ data: { productId: "premium" } });
			if (r.ok) location.href = r.url;
		} finally {
			setBuying(false);
		}
	};
	const requestPremium = () => setPurchaseGate(true);
	const complete = (id, kind) => {
		const rawClass = localStorage.getItem("lla-class");
		const className = rawClass === "KG" ? "KG" : rawClass === "Montessori" ? "Montessori" : "Nursery";
		recordAttempt(className, skillForActivity(className, kind), true, 0, kind === "listen" || kind === "rhymes" ? "audio" : kind === "tracing" || kind === "sorting" ? "hands-on" : kind === "story" ? "story" : kind === "letters" || kind === "colors" || kind === "shapes" ? "picture" : "game");
		setCompleted((old) => {
			const key = `${className}:${id}`;
			const first = !old.includes(key);
			const n = first ? [...old, key] : old;
			writeLocal(DONE_KEY, n);
			if (first) setStars((v) => {
				const next = v + 1;
				writeLocal(STARS_KEY, next);
				return next;
			});
			setXp((v) => {
				const next = v + 10;
				writeLocal(XP_KEY, next);
				const nextLevel = next >= 500 ? "Super Star" : next >= 250 ? "Explorer" : next >= 100 ? "Learner" : "Beginner";
				setLevel(nextLevel);
				writeLocal("mw-preschool-level", nextLevel);
				return next;
			});
			setMission((m) => {
				const n = (m + 1) % MISSIONS.length;
				writeLocal("mw-preschool-mission", n);
				return n;
			});
			try {
				localStorage.setItem(UPDATED_KEY, String(Date.now()));
			} catch {}
			return n;
		});
	};
	const open = (a) => {
		if (a.premium && !premium) {
			requestPremium();
			return;
		}
		if (a.id === "animals") {
			setRoom("atlas");
			return;
		}
		if (a.id === "mont-worksheets") {
			setRoom("worksheets");
			return;
		}
		if (a.id === "rhymes") {
			setRoom("listen");
			return;
		}
		setSelected(a);
	};
	const saveProfile = (name, age) => {
		const p = {
			name: name.trim().slice(0, 40) || "Little Learner",
			age: Math.max(2, Math.min(6, Math.floor(age)))
		};
		writeLocal(PROFILE_KEY, p);
		try {
			localStorage.setItem(UPDATED_KEY, String(Date.now()));
		} catch {}
		setProfile(p);
	};
	if (purchaseGate) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Parent Approval",
		onBack: () => setPurchaseGate(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "preschool-bg min-h-full rounded-3xl p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-5xl",
						children: "👑"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl text-fg",
						children: "Parent approval required"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Premium learning is for parents to approve."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn-primary mt-4 w-full",
						disabled: buying,
						onClick: () => void buyPremium(),
						children: buying ? "Opening checkout…" : "Continue to Premium"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip mt-2",
						onClick: () => setPurchaseGate(false),
						children: "Cancel"
					})
				]
			}) })
		})
	});
	if (room) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademyRoomView, {
		room,
		klass,
		onBack: () => setRoom(null),
		onSpeak: speak,
		onComplete: () => complete(room, room === "stories" ? "story" : room === "listen" || room === "atlas" ? "listen" : room === "art" || room === "worksheets" ? "tracing" : "sorting"),
		onOpenActivity: (id) => {
			const activity = availableActivities.find((a) => a.id === id);
			setRoom(null);
			if (activity) setSelected(activity);
		},
		onSelectClass: (next) => {
			setKlass(next);
			try {
				localStorage.setItem("lla-class", next);
			} catch {}
			window.dispatchEvent(new Event("lla-class-change"));
		}
	});
	if (selected) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityScreen, {
		activity: selected,
		difficulty: selected.difficulty,
		onBack: () => setSelected(null),
		onComplete: () => complete(selected.id, selected.kind)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Little Learners Academy",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "preschool-bg -mx-1 min-h-full rounded-3xl p-2 pb-24 grid gap-3 overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "preschool-hero preschool-hero-premium rounded-[2rem] p-5 shadow-xl text-white relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "preschool-sparkles",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "✦" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "✧" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "✦" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 relative z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black uppercase tracking-widest opacity-90",
									children: "Little Learners Academy • Learn • Play • Grow 🌈"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-3xl",
									children: "Learn • Play • Grow"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm opacity-90",
									children: [
										"Hi ",
										profile.name,
										"! Let's have fun today."
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl bg-white/20 p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Baby, { className: "size-8" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-3 gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/20 p-2 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "mx-auto size-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block",
											children: stars
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px]",
											children: "Stars"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/20 p-2 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "mx-auto size-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block",
											children: xp
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px]",
											children: "XP"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-white/20 p-2 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "mx-auto size-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "block",
											children: level
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px]",
											children: "Level"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mascot-card rounded-3xl p-4 shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mascot-bubble",
								"aria-hidden": "true",
								children: "🐼"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black uppercase tracking-wider text-violet-600",
										children: "Mimi's Magic Tip ✨"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl text-slate-800",
										children: "Ready for a tiny adventure?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-600",
										children: "Learn one thing, play one game, then grow your reward garden."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mascot-listen",
								"aria-label": "Hear Mimi's tip",
								onClick: () => speak("Hi little learner! Let's learn, play and grow!"),
								children: "🔊"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-mini-route mt-3",
						"aria-label": "Learning journey",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "journey-mini-node done",
								children: ["🏡", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Start" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "journey-mini-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "journey-mini-node current",
								children: ["🔤", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Learn" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "journey-mini-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "journey-mini-node",
								children: ["⭐", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Reward" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "journey-mini-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "journey-mini-node",
								children: ["🌈", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Unlock" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white/90 px-3 py-3 text-sm font-bold shadow-sm",
						children: [online ? "🟢 Online" : "🟠 Offline", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-normal text-slate-500",
							children: online ? "Sync ready" : "Learning continues"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-white/90 px-3 py-3 text-sm font-bold shadow-sm",
						children: [premium ? "👑 Premium" : "🆓 Free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-normal text-slate-500",
							children: premium ? "All learning unlocked" : "Basic library"
						})]
					})]
				}),
				tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademyWorld, {
						xp,
						completed: completed.filter((id) => id.startsWith(`${klass}:`)).length,
						available: availableActivities.length,
						onSpeak: speak,
						onMissionComplete: () => {
							setStars((v) => {
								const n = v + 1;
								writeLocal(STARS_KEY, n);
								return n;
							});
							setXp((v) => {
								const n = v + 10;
								writeLocal(XP_KEY, n);
								return n;
							});
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "academy-quick",
								onClick: () => setRoom("atlas"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🐾" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Nature Atlas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "100 animals" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "academy-quick",
								onClick: () => setRoom("worksheets"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📝" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Worksheets" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [klass, " pages"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "academy-quick",
								onClick: () => setRoom("gallery"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🖼️" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "My Gallery" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Saved art" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "academy-quick",
								onClick: () => setRoom("listen"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🔊" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Class Audio" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Offline lessons" })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mission-card rounded-3xl p-4 shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl bg-white/70 p-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-black uppercase tracking-wider",
											children: "Today's Mission"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl",
											children: MISSIONS[mission]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs opacity-75",
											children: "Complete activities to earn stars and XP."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/70 px-2 py-1 text-xs font-black",
									children: [
										completed.filter((id) => id.startsWith(`${klass}:`)).length,
										"/$",
										availableActivities.length
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-3xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-wider text-accent",
								children: "Learning path"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: "Six Little Worlds 🌍"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5 text-muted" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: WORLDS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab(w.id === "nature" ? "sounds" : "worlds"),
								className: `world-card world-${w.tone} rounded-2xl p-3 text-left shadow-sm`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl",
										children: w.e
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "mt-1 block",
										children: w.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] opacity-70",
										children: w.text
									})
								]
							}, w.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-3xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-fg",
								children: "Activities 🎮"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [completed.length, " completed"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: availableActivities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => open(a),
								className: "preschool-card panel relative min-h-28 rounded-2xl p-3 text-left active:scale-[.98]",
								children: [
									a.premium && !premium && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-2 top-2 rounded-full bg-amber-200 px-2 py-1 text-[10px] font-black text-amber-900",
										children: "👑"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex rounded-xl bg-white/75 p-2 text-primary",
										children: a.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block font-bold text-fg",
										children: a.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: a.subtitle
									}),
									completed.includes(`${klass}:${a.id}`) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Done"]
									})
								]
							}, a.id))
						})]
					})
				] }),
				tab === "worlds" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldsPanel, {
					onOpen: open,
					klass
				}),
				tab === "discover" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvancedPreschoolHub, {
					age: profile.age,
					xp,
					completed: completed.length,
					premium,
					onSpeak: speak
				}),
				tab === "sounds" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoundsPanel, {}),
				tab === "parent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParentPanel, {
					profile,
					saveProfile,
					premium,
					buying,
					buyPremium,
					offlinePack,
					packing,
					setPacking,
					setOfflinePack,
					online
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed bottom-3 left-1/2 z-40 flex w-[calc(100%-24px)] max-w-lg -translate-x-1/2 rounded-3xl border border-white/50 bg-white/90 p-2 shadow-2xl backdrop-blur",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "home",
							icon: "🏠",
							text: "Home",
							onClick: () => setTab("home")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "worlds",
							icon: "🌍",
							text: "Worlds",
							onClick: () => setTab("worlds")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "discover",
							icon: "🧠",
							text: "Learn",
							onClick: () => setTab("discover")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "sounds",
							icon: "🔊",
							text: "Sounds",
							onClick: () => setTab("sounds")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "parent",
							icon: "🔒",
							text: "Parent",
							onClick: () => setTab("parent")
						})
					]
				})
			]
		})
	});
}
function NavButton({ active, icon, text, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex flex-1 flex-col items-center rounded-2xl px-2 py-2 text-[10px] font-black ${active ? "bg-primary text-white" : "text-slate-600"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg",
			children: icon
		}), text]
	});
}
function WorldsPanel({ onOpen, klass }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid gap-3",
		children: WORLDS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `world-card world-${w.tone} rounded-3xl p-4`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-5xl",
					children: w.e
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: w.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs opacity-70",
					children: w.text
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: ACTIVITIES.filter((a) => a.world === w.id && a.classes.includes(klass)).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onOpen(a),
					className: "rounded-2xl bg-white/80 px-3 py-2 text-xs font-bold shadow-sm",
					children: [a.title, a.premium ? " 👑" : ""]
				}, a.id))
			})]
		}, w.id))
	});
}
function SoundsPanel() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = ANIMAL_LIBRARY.filter((a) => filter === "All" ? true : filter === "Bird" ? a.group === "bird" : a.group === "animal").slice(0, 48);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-fg",
					children: "Animal & Bird Sounds"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Tap an animal to see its picture and hear its sound."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint$1, { className: "size-7 text-primary" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex gap-2",
				children: [
					"All",
					"Animal",
					"Bird"
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(x),
					className: `rounded-full px-3 py-2 text-xs font-bold ${filter === x ? "bg-primary text-white" : "bg-slate-100 text-slate-600"}`,
					children: x
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-4 gap-2",
				children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						if (a.sound) playBundledAudio(a.sound);
						else if ([
							"lion",
							"elephant",
							"tiger",
							"fox",
							"wolf",
							"monkey",
							"frog",
							"snake",
							"crocodile",
							"bear",
							"panda",
							"parrot",
							"owl",
							"eagle",
							"penguin",
							"flamingo",
							"duck",
							"peacock",
							"chicken",
							"bee"
						].includes(a.id)) playAnimalSound(a.id);
						speak(a.name);
					},
					className: "rounded-2xl bg-white p-2 text-center shadow-sm active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.src,
						alt: a.name,
						className: "mx-auto h-12 w-12 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold text-slate-700",
						children: a.name
					})]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "btn-primary mt-4 w-full",
				onClick: () => window.dispatchEvent(new CustomEvent("lla-open-room", { detail: { room: "atlas" } })),
				children: "Open full Nature Atlas"
			})
		]
	});
}
function ParentGate({ children }) {
	const [allowed, setAllowed] = (0, import_react.useState)(false);
	const [setup, setSetup] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		hasKidsLockPin().then((has) => setSetup(!has));
	}, []);
	const submit = async () => {
		setError("");
		if (setup) {
			if (!await setKidsLockPin(pin)) {
				setError("Use a 6-digit parent PIN.");
				return;
			}
			setSetup(false);
			setAllowed(true);
			setPin("");
			return;
		}
		if (!await verifyKidsLockPin(pin)) {
			setError("Wrong parent PIN.");
			setPin("");
			return;
		}
		setAllowed(true);
		setPin("");
	};
	if (allowed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "mx-auto size-9 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl text-fg",
				children: "Parent Area"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: setup ? "Create a parent PIN before opening settings." : "Enter the parent PIN to continue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				inputMode: "numeric",
				type: "password",
				maxLength: 6,
				value: pin,
				onChange: (e) => setPin(e.target.value.replace(/\D/g, "")),
				onKeyDown: (e) => {
					if (e.key === "Enter") submit();
				},
				placeholder: "6-digit PIN",
				className: "mt-4 w-full rounded-2xl bg-white px-4 py-4 text-center text-xl tracking-[0.4em] text-slate-900",
				autoFocus: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-primary mt-3 w-full",
				onClick: () => void submit(),
				children: setup ? "Create PIN" : "Unlock Parent Area"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-red-600",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[11px] text-muted",
				children: "Keep this PIN private. Device-level app exit cannot be blocked by a normal website."
			})
		]
	});
}
function ParentPanel({ profile, saveProfile, premium, buying, buyPremium, offlinePack, packing, setPacking, setOfflinePack, online }) {
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [age, setAge] = (0, import_react.useState)(String(profile.age));
	const [saved, setSaved] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel rounded-3xl p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-primary/10 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-fg",
						children: "Parent Area"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Settings, progress, offline learning and Premium."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-fg",
					children: "Child Profile 👶"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "rounded-2xl bg-white px-4 py-3 text-slate-800",
							placeholder: "Child name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: age,
							onChange: (e) => setAge(e.target.value),
							className: "rounded-2xl bg-white px-4 py-3 text-slate-800",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "2",
									children: "Age 2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "3",
									children: "Age 3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "4",
									children: "Age 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "5",
									children: "Age 5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "6",
									children: "Age 6"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary",
							onClick: () => {
								saveProfile(name, Number(age));
								setSaved(true);
								setTimeout(() => setSaved(false), 1500);
							},
							children: saved ? "Saved ✓" : "Save profile"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Learning report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"This device: ",
							readLocal(DONE_KEY, []).length,
							" completed class activities • Stars are saved locally."
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-2xl bg-slate-50 p-3 text-xs text-slate-600",
					children: "For a full parent report and multi-device sync, sign in and use the account/cloud systems already included in the app."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "panel rounded-3xl p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudOff, { className: "size-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-fg",
								children: "Offline Learning Pack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Prepare the complete local learning pack for this device."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "hud-chip",
							disabled: packing,
							onClick: async () => {
								setPacking(true);
								if (await prepareOfflinePack()) setOfflinePack(true);
								setPacking(false);
							},
							children: offlinePack ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4" }), " Ready"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), packing ? "Preparing…" : "Prepare Offline"] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Kids Safety"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Use Kids Lock to keep the child inside the learning area. Purchases/settings remain parent-controlled."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "hud-chip mt-3",
					onClick: () => useGame.getState().setSetting("parentalLock", true),
					children: "Turn Kids Lock ON"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel rounded-3xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Parent account"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Sign in to sync progress and approve purchases. Children can keep learning offline without an account."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/login",
						className: "btn-primary mt-3 inline-flex w-full items-center justify-center",
						children: "Parent sign in"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip mt-2 w-full",
						onClick: () => useGame.getState().go("home"),
						children: "Open Journey Hall"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "premium-box rounded-3xl p-4 text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-white/20 p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: "Premium Kids Club 👑"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-85",
							children: "Advanced maths, tracing, coloring, puzzles, stories, rhymes and premium listening activities."
						})]
					})]
				}), premium ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 rounded-2xl bg-white/20 px-3 py-2 text-sm font-bold",
					children: "Active subscription ✓"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: buying,
					className: "mt-3 w-full rounded-2xl bg-white px-4 py-3 font-black text-slate-800",
					onClick: () => void buyPremium(),
					children: buying ? "Opening checkout…" : "Subscribe to Premium"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-white/80 p-3 text-xs text-slate-500",
				children: online ? "🟢 Online: account sync and checkout can work." : "🟠 Offline: local learning remains available; subscription verification waits until online."
			})
		]
	});
}
function ActivityScreen({ activity, difficulty = "steady", onBack, onComplete }) {
	const [answer, setAnswer] = (0, import_react.useState)(null);
	const [round, setRound] = (0, import_react.useState)(0);
	const data = (0, import_react.useMemo)(() => {
		switch (activity.kind) {
			case "letters": return {
				prompt: "Which letter starts Apple?",
				choices: [
					"A",
					"B",
					"C",
					"D"
				],
				correct: "A",
				helper: "A is for Apple!",
				art: WORD_CARDS.find((w) => w.id === "apple")?.src
			};
			case "numbers": return {
				prompt: "How many apples?",
				choices: [
					"3",
					"4",
					"5",
					"6"
				],
				correct: "4",
				helper: "Four apples!",
				art: WORD_CARDS.find((w) => w.id === "apple")?.src
			};
			case "colors": return {
				prompt: "What color is the sky?",
				choices: COLORS,
				correct: "Blue",
				helper: "Blue like the sky!"
			};
			case "shapes": return {
				prompt: "Which shape has 3 sides?",
				choices: SHAPES,
				correct: "Triangle",
				helper: "Triangle has three sides!"
			};
			case "sorting": return {
				prompt: "Which one is BIG?",
				choices: [
					"Elephant",
					"Ant",
					"Mouse",
					"Ladybug"
				],
				correct: "Elephant",
				helper: "The elephant is big!",
				art: animalArt("elephant")
			};
			case "body": return {
				prompt: "What do we use to see?",
				choices: BODY,
				correct: "Eyes 👀",
				helper: "We see with our eyes!"
			};
			case "vehicles": return {
				prompt: "Which picture is a car?",
				choices: [
					"Car",
					"Cat",
					"Tree",
					"Moon"
				],
				correct: "Car",
				helper: "A car is a vehicle.",
				art: WORD_CARDS.find((w) => w.id === "car")?.src
			};
			case "math": return {
				prompt: "What is 2 + 1?",
				choices: [
					"2",
					"3",
					"4",
					"5"
				],
				correct: "3",
				helper: "Two plus one makes three!"
			};
			case "opposites": return {
				prompt: "What is the opposite of BIG?",
				choices: [
					"Small",
					"Fast",
					"Up",
					"Hot"
				],
				correct: "Small",
				helper: "Big ↔ Small"
			};
			case "patterns": return {
				prompt: "What comes next? 🔴 🔵 🔴 🔵 ?",
				choices: [
					"🔴 Red",
					"🟢 Green",
					"🟡 Yellow",
					"🟣 Purple"
				],
				correct: "🔴 Red",
				helper: "The pattern repeats red, blue."
			};
			case "listen": return {
				prompt: "Which animal did you hear?",
				choices: [
					"Lion",
					"Frog",
					"Bee",
					"Duck"
				],
				correct: "Lion",
				helper: "That was a lion.",
				art: animalArt("lion"),
				listenSrc: CLASS_AUDIO.Nursery[0]?.src,
				listenText: "Lion"
			};
			case "puzzle": return {
				prompt: "Which picture matches the cat?",
				choices: [
					"Cat",
					"Fish",
					"Apple",
					"Car"
				],
				correct: "Cat",
				helper: "Same animal!",
				art: WORD_CARDS.find((w) => w.id === "cat")?.src
			};
			default: return {
				prompt: "What comes next in the story?",
				choices: [
					"Park",
					"Moon",
					"Sea",
					"Home"
				],
				correct: "Park",
				helper: "Great storytelling!"
			};
		}
	}, [activity.kind]);
	const difficultyHint = difficulty === "gentle" ? "Gentle step" : difficulty === "challenge" ? "Challenge step" : "Steady step";
	const tuned = (0, import_react.useMemo)(() => {
		if (difficulty === "challenge" && activity.kind === "numbers") return {
			...data,
			prompt: "How many stars? ⭐⭐⭐⭐⭐⭐",
			choices: [
				"5",
				"6",
				"7",
				"8"
			],
			correct: "6",
			helper: "Six stars! 🚀"
		};
		if (difficulty === "challenge" && activity.kind === "math") return {
			...data,
			prompt: "What is 4 + 3?",
			choices: [
				"6",
				"7",
				"8",
				"9"
			],
			correct: "7",
			helper: "Four plus three makes seven! 🚀"
		};
		if (difficulty === "challenge" && activity.kind === "patterns") return {
			...data,
			prompt: "What comes next? 🔴 🔵 🟢 🔴 🔵 ?",
			choices: [
				"🟢 Green",
				"🔴 Red",
				"🟡 Yellow",
				"🟣 Purple"
			],
			correct: "🟢 Green",
			helper: "The pattern repeats red, blue, green."
		};
		if (difficulty === "gentle") {
			const rest = data.choices.filter((c) => c !== data.correct).slice(0, 1);
			return {
				...data,
				choices: [data.correct, ...rest]
			};
		}
		return data;
	}, [
		data,
		difficulty,
		activity.kind
	]);
	const choose = (v) => {
		setAnswer(v);
		const rawClass = localStorage.getItem("lla-class");
		const className = rawClass === "KG" ? "KG" : rawClass === "Montessori" ? "Montessori" : "Nursery";
		recordAttempt(className, skillForActivity(className, activity.kind), v === tuned.correct, 0, activity.kind === "listen" ? "audio" : activity.kind === "story" ? "story" : activity.kind === "tracing" || activity.kind === "sorting" ? "hands-on" : activity.kind === "letters" || activity.kind === "colors" || activity.kind === "shapes" ? "picture" : "game");
		if (v === tuned.correct) onComplete();
	};
	const special = [
		"tracing",
		"coloring",
		"rhymes"
	].includes(activity.kind);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: activity.title,
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: special ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialActivity, {
				kind: activity.kind,
				onComplete
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-3xl p-5 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mb-3 inline-flex rounded-2xl bg-surface-2 p-3 text-primary",
							children: activity.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"Question ",
								round + 1,
								" • ",
								difficultyHint
							]
						}),
						tuned.art && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: tuned.art,
							alt: "",
							className: "mx-auto my-3 h-28 w-28 object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl text-fg",
							children: tuned.prompt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "hud-chip mx-auto mt-3",
							onClick: () => {
								if (tuned.listenSrc) playBundledAudio(tuned.listenSrc);
								speak(tuned.listenText ?? data.prompt);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: tuned.choices.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => choose(c),
						className: `panel min-h-20 rounded-2xl p-3 text-lg font-bold text-fg ${answer === c ? c === tuned.correct ? "ring-2 ring-accent" : "ring-2 ring-warning" : ""}`,
						children: c
					}, c))
				}),
				answer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold text-fg",
							children: answer === tuned.correct ? "Great job!" : "Try again"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: tuned.helper
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary mt-3",
							onClick: () => {
								setAnswer(null);
								setRound((r) => r + 1);
							},
							children: "Next"
						})
					]
				})
			] })
		})
	});
}
function SpecialActivity({ kind, onComplete }) {
	const [done, setDone] = (0, import_react.useState)(false);
	const finish = () => {
		if (!done) {
			setDone(true);
			onComplete();
		}
	};
	const [colour, setColour] = (0, import_react.useState)("#ff6fae");
	const [strokes, setStrokes] = (0, import_react.useState)([]);
	const [drawing, setDrawing] = (0, import_react.useState)(false);
	const points = strokes.flat();
	const traceReady = points.length >= 28 && points.some((p) => p.x > 105 && p.x < 180 && p.y > 45 && p.y < 245) && points.some((p) => p.x > 180 && p.x < 255 && p.y > 45 && p.y < 245) && points.some((p) => p.y > 130 && p.y < 190 && p.x > 120 && p.x < 245);
	if (kind === "tracing") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Trace the letter A with your finger"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto my-4 h-72 max-w-sm overflow-hidden rounded-3xl bg-white shadow-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 grid place-items-center text-[10rem] font-black text-primary/15",
					children: "A"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 360 280",
					className: "absolute inset-0 h-full w-full touch-none",
					onPointerDown: (e) => {
						e.currentTarget.setPointerCapture(e.pointerId);
						setDrawing(true);
						setStrokes((old) => [...old, []]);
					},
					onPointerMove: (e) => {
						if (!drawing) return;
						const r = e.currentTarget.getBoundingClientRect();
						setStrokes((old) => {
							const n = old.slice();
							const last = n[n.length - 1] ?? [];
							n[n.length - 1] = [...last, {
								x: (e.clientX - r.left) / r.width * 360,
								y: (e.clientY - r.top) / r.height * 280
							}];
							return n;
						});
					},
					onPointerUp: () => setDrawing(false),
					onPointerCancel: () => setDrawing(false),
					children: strokes.map((pts, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: pts.map((p) => `${p.x},${p.y}`).join(" "),
						fill: "none",
						stroke: colour,
						strokeWidth: "8",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-2",
				children: [
					"#ff6fae",
					"#5c8dff",
					"#43c77a",
					"#ffb52e",
					"#9b6cff"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Choose color",
					onClick: () => setColour(c),
					className: "size-9 rounded-full border-4 border-white shadow",
					style: { background: c }
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "hud-chip mt-4",
					onClick: () => setStrokes([]),
					children: "Clear"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: !traceReady || done,
					className: "btn-primary mt-4 disabled:opacity-50",
					onClick: finish,
					children: done ? "⭐ Completed" : traceReady ? "Finish tracing" : "Keep tracing"
				})]
			})
		]
	});
	if (kind === "coloring") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColoringStudio, { onComplete: finish });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-6xl",
				children: "🎵 🎶"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-display text-2xl text-fg",
				children: "Sing & Learn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Listen, repeat, and learn new words."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "hud-chip mx-auto mt-4",
				onClick: () => speak("Twinkle twinkle little star. Let's learn and play! ABC, numbers, colors and shapes are fun!"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }), " Listen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: done,
				className: "btn-primary mt-4 disabled:opacity-50",
				onClick: finish,
				children: done ? "⭐ Completed" : "I learned it"
			})
		]
	});
}
function ColoringStudio({ onComplete }) {
	const canvasRef = (0, import_react.useRef)(null);
	const [colour, setColour] = (0, import_react.useState)("#ff6fae");
	const [drawing, setDrawing] = (0, import_react.useState)(false);
	const [hasArt, setHasArt] = (0, import_react.useState)(false);
	const [history, setHistory] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const c = canvasRef.current;
		if (!c) return;
		const ctx = c.getContext("2d");
		if (!ctx) return;
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.font = "120px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#e9e7f5";
		ctx.fillText("🦋", c.width / 2, c.height / 2);
	}, []);
	const point = (e) => {
		const c = canvasRef.current;
		if (!c) return;
		const r = c.getBoundingClientRect();
		return {
			x: (e.clientX - r.left) * c.width / r.width,
			y: (e.clientY - r.top) * c.height / r.height
		};
	};
	const down = (e) => {
		const c = canvasRef.current, ctx = c?.getContext("2d");
		if (!c || !ctx) return;
		c.setPointerCapture(e.pointerId);
		setHistory((h) => [...h.slice(-9), ctx.getImageData(0, 0, c.width, c.height)]);
		setDrawing(true);
		const p = point(e);
		if (p) {
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
		}
	};
	const move = (e) => {
		if (!drawing) return;
		const ctx = canvasRef.current?.getContext("2d"), p = point(e);
		if (!ctx || !p) return;
		ctx.strokeStyle = colour;
		ctx.lineWidth = 14;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		ctx.lineTo(p.x, p.y);
		ctx.stroke();
		setHasArt(true);
	};
	const up = () => setDrawing(false);
	const undo = () => {
		const c = canvasRef.current, ctx = c?.getContext("2d");
		const last = history.at(-1);
		if (!c || !ctx || !last) return;
		ctx.putImageData(last, 0, 0);
		setHistory((h) => h.slice(0, -1));
	};
	const save = () => {
		try {
			const c = canvasRef.current;
			if (c) localStorage.setItem("mw-preschool-artwork", c.toDataURL("image/png"));
		} catch {}
		onComplete();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel rounded-3xl p-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Color, draw, undo and save your picture."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				width: 360,
				height: 280,
				className: "mx-auto my-4 w-full max-w-sm touch-none rounded-3xl bg-white shadow-inner",
				onPointerDown: down,
				onPointerMove: move,
				onPointerUp: up,
				onPointerCancel: up
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center gap-2",
				children: [
					"#ff6fae",
					"#5c8dff",
					"#43c77a",
					"#ffb52e",
					"#9b6cff"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Choose color",
					onClick: () => setColour(c),
					className: "size-10 rounded-full border-4 border-white shadow",
					style: { background: c }
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip",
						disabled: !history.length,
						onClick: undo,
						children: "Undo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "hud-chip",
						onClick: () => {
							const c = canvasRef.current, ctx = c?.getContext("2d");
							if (c && ctx) {
								ctx.clearRect(0, 0, c.width, c.height);
								ctx.fillStyle = "#fff";
								ctx.fillRect(0, 0, c.width, c.height);
							}
							setHasArt(false);
						},
						children: "Clear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: !hasArt,
						className: "btn-primary disabled:opacity-50",
						onClick: save,
						children: "Save picture"
					})
				]
			})
		]
	});
}
var PRODUCTS = [
	{
		id: "ad_free",
		title: "Ad-Free Journey",
		detail: "Remove supported game ads from the journey."
	},
	{
		id: "premium",
		title: "Journey Premium",
		detail: "Premium access through a recurring subscription price configured by the provider."
	},
	{
		id: "starter_pack",
		title: "Starter Pack",
		detail: "A one-time starter purchase for configured game content."
	}
];
function PaymentsScreen({ onBack }) {
	const [rows, setRows] = (0, import_react.useState)([]), [error, setError] = (0, import_react.useState)(""), [busy, setBusy] = (0, import_react.useState)(null);
	const refresh = () => void getMyEntitlements().then(setRows).catch(() => setError("Sign in to view account entitlements."));
	(0, import_react.useEffect)(refresh, []);
	const buy = async (productId) => {
		setBusy(productId);
		setError("");
		try {
			const result = await createCheckoutSession({ data: { productId } });
			if (!result.ok) throw new Error(result.error);
			window.location.href = result.url;
		} catch (e) {
			setError(e instanceof Error ? e.message : "Checkout could not be started.");
			setBusy(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Purchases & Entitlements",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ParentGate, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-fg",
					children: "Secure checkout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Checkout is created server-side. Card/payment secrets never enter the game client, and access is granted only after a verified provider webhook."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel rounded-2xl p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-fg",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: p.detail
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary shrink-0",
							disabled: busy !== null,
							onClick: () => void buy(p.id),
							children: busy === p.id ? "Opening…" : "Buy"
						})]
					})
				}, p.id))
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-danger",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-sm font-semibold text-fg",
					children: "Your active entitlements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel flex justify-between rounded-xl p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: r.productId
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: r.active ? "Active" : "Inactive"
						})]
					}, r.productId)), !rows.length && !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No active entitlements."
					})]
				})]
			})
		] })
	});
}
var LANGUAGE_PACKS = [
	{
		code: "en",
		nativeName: "English",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"WORD",
			"SEARCH",
			"GAME",
			"JOURNEY",
			"PUZZLE"
		]
	},
	{
		code: "ur",
		nativeName: "اردو",
		direction: "rtl",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"لفظ",
			"تلاش",
			"کھیل",
			"سفر",
			"پہیلی"
		]
	},
	{
		code: "ur-Latn",
		nativeName: "Roman Urdu",
		direction: "rtl",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"LAFZ",
			"TALAASH",
			"KHEL",
			"SAFAR",
			"PAHELI"
		]
	},
	{
		code: "hi",
		nativeName: "हिन्दी",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"शब्द",
			"खोज",
			"खेल",
			"यात्रा",
			"पहेली"
		]
	},
	{
		code: "ar",
		nativeName: "العربية",
		direction: "rtl",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"كلمة",
			"بحث",
			"لعبة",
			"رحلة",
			"لغز"
		]
	},
	{
		code: "bn",
		nativeName: "বাংলা",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"শব্দ",
			"খোঁজ",
			"খেলা",
			"যাত্রা",
			"ধাঁধা"
		]
	},
	{
		code: "pa",
		nativeName: "ਪੰਜਾਬੀ",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"ਸ਼ਬਦ",
			"ਖੋਜ",
			"ਖੇਡ",
			"ਸਫ਼ਰ",
			"ਬੁਝਾਰਤ"
		]
	},
	{
		code: "sd",
		nativeName: "سنڌي",
		direction: "rtl",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"لفظ",
			"ڳولا",
			"راند",
			"سفر",
			"ڳجهارت"
		]
	},
	{
		code: "ps",
		nativeName: "پښتو",
		direction: "rtl",
		uiCoverage: "full",
		contentMode: "native",
		sampleWords: [
			"کلمه",
			"لټون",
			"لوبه",
			"سفر",
			"معما"
		]
	},
	{
		code: "tr",
		nativeName: "Türkçe",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"KELİME",
			"ARAMA",
			"OYUN",
			"YOLCULUK",
			"BULMACA"
		]
	},
	{
		code: "es",
		nativeName: "Español",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"PALABRA",
			"BUSCAR",
			"JUEGO",
			"VIAJE",
			"ROMPECABEZAS"
		]
	},
	{
		code: "fr",
		nativeName: "Français",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"MOT",
			"CHERCHE",
			"JEU",
			"VOYAGE",
			"ÉNIGME"
		]
	},
	{
		code: "de",
		nativeName: "Deutsch",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"WORT",
			"SUCHE",
			"SPIEL",
			"REISE",
			"RÄTSEL"
		]
	},
	{
		code: "zh",
		nativeName: "中文",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"词语",
			"搜索",
			"游戏",
			"旅程",
			"谜题"
		]
	},
	{
		code: "ja",
		nativeName: "日本語",
		direction: "ltr",
		uiCoverage: "full",
		contentMode: "native-starter",
		sampleWords: [
			"言葉",
			"検索",
			"ゲーム",
			"旅",
			"パズル"
		]
	}
];
function getLanguagePack(code) {
	return LANGUAGE_PACKS.find((pack) => pack.code === code) ?? LANGUAGE_PACKS[0];
}
function ContentLanguagesScreen() {
	const lang = useGame((s) => s.save.language);
	const current = getLanguagePack(lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Languages & Content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-fg",
							children: "15-language content matrix"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "UI localization is available across all 15 supported languages. Word-grid content uses native packs where available and a shared offline fallback elsewhere."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2 text-sm text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "size-4" }),
							" Current: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: current.nativeName })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-2",
				children: LANGUAGE_PACKS.map((pack) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "panel flex items-center justify-between rounded-2xl p-3 text-left",
					onClick: () => useGame.getState().setLang(pack.code),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-semibold text-fg",
						children: pack.nativeName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [
							pack.code,
							" · ",
							pack.direction.toUpperCase(),
							" · ",
							nativeWordCount(pack.code),
							" native words · ",
							pack.contentMode === "native" ? "native bank" : "native starter + offline fallback"
						]
					})] }), lang === pack.code && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" })]
				}, pack.code))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-3 rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-gold",
					children: "Sample vocabulary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-fg",
					children: current.sampleWords.join(" · ")
				})]
			})
		]
	});
}
function dayKey(date = /* @__PURE__ */ new Date()) {
	return date.toLocaleDateString("en-CA");
}
function weekKey(date = /* @__PURE__ */ new Date()) {
	const d = new Date(date);
	const day = d.getDay() || 7;
	d.setDate(d.getDate() - day + 1);
	return `week-${dayKey(d)}`;
}
function seasonKey$1(date = /* @__PURE__ */ new Date()) {
	const month = date.getMonth() + 1;
	const quarter = Math.floor((month - 1) / 3) + 1;
	return `${date.getFullYear()}-Q${quarter}`;
}
function getV14Challenges(date = /* @__PURE__ */ new Date()) {
	const week = weekKey(date);
	const season = seasonKey$1(date);
	return [
		{
			id: `v14-daily-words-${dayKey(date)}`,
			cycle: "daily",
			title: "Ink Warm-up",
			description: "Find 5 words today.",
			target: 5,
			reward: 75
		},
		{
			id: `v14-daily-clears-${dayKey(date)}`,
			cycle: "daily",
			title: "Trailblazer",
			description: "Clear 3 levels today.",
			target: 3,
			reward: 120
		},
		{
			id: `v14-weekly-words-${week}`,
			cycle: "weekly",
			title: "Weekly Cartographer",
			description: "Find 35 words this week.",
			target: 35,
			reward: 450
		},
		{
			id: `v14-weekly-clears-${week}`,
			cycle: "weekly",
			title: "Seven Pages",
			description: "Clear 7 levels this week.",
			target: 7,
			reward: 600
		},
		{
			id: `v14-seasonal-clears-${season}`,
			cycle: "seasonal",
			title: "Season of Discovery",
			description: "Clear 25 levels this season.",
			target: 25,
			reward: 1500
		}
	];
}
var KEY$3 = "mwjs:v14:liveops";
function fresh() {
	return {
		day: {
			key: dayKey(),
			progress: {},
			claimed: []
		},
		week: {
			key: weekKey(),
			progress: {},
			claimed: []
		},
		season: {
			key: seasonKey$1(),
			progress: {},
			claimed: []
		}
	};
}
function load() {
	const base = fresh();
	try {
		const parsed = JSON.parse(localStorage.getItem(KEY$3) ?? "null");
		for (const cycle of [
			"day",
			"week",
			"season"
		]) {
			const key = base[cycle].key;
			if (parsed?.[cycle]?.key === key) base[cycle] = {
				...base[cycle],
				...parsed[cycle]
			};
		}
	} catch {}
	return base;
}
function save(state) {
	try {
		localStorage.setItem(KEY$3, JSON.stringify(state));
	} catch {}
}
function cycleOf(c) {
	return c.cycle === "daily" ? "day" : c.cycle === "weekly" ? "week" : "season";
}
function getV14State() {
	return load();
}
function getV14ChallengesNow() {
	return getV14Challenges();
}
function incrementV14Progress(kind, amount = 1) {
	const state = load();
	const challenges = getV14Challenges();
	const add = Math.max(0, Math.floor(amount));
	for (const challenge of challenges) {
		if (!(kind === "words" ? challenge.id.includes("words") : challenge.id.includes("clears"))) continue;
		const cycle = cycleOf(challenge);
		state[cycle].progress[challenge.id] = (state[cycle].progress[challenge.id] ?? 0) + add;
	}
	save(state);
	return state;
}
function claimV14Challenge(id) {
	const state = load();
	const challenge = getV14Challenges().find((x) => x.id === id);
	if (!challenge) return 0;
	const bucket = state[cycleOf(challenge)];
	if (bucket.claimed.includes(id) || (bucket.progress[id] ?? 0) < challenge.target) return 0;
	bucket.claimed.push(id);
	save(state);
	return challenge.reward;
}
function V14LiveOpsScreen() {
	const [state, setState] = (0, import_react.useState)(getV14State());
	const lang = useGame((s) => s.save.language);
	const patchSave = useGame((s) => s.patchSave);
	const challenges = getV14ChallengesNow();
	const refresh = () => setState(getV14State());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Events & Challenges",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel rounded-2xl p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-fg",
						children: "Daily · Weekly · Seasonal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Challenges progress offline and reset automatically at the start of each local cycle."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-1 inline size-3" }),
						"Content locale: ",
						getLanguagePack(lang).nativeName
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex flex-col gap-3",
			children: challenges.map((c) => {
				const bucket = c.cycle === "daily" ? state.day : c.cycle === "weekly" ? state.week : state.season;
				const progress = Math.min(c.target, bucket.progress[c.id] ?? 0);
				const claimed = bucket.claimed.includes(c.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wider text-gold",
									children: c.cycle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-lg text-fg",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: c.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-gold",
								children: ["+", c.reward]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-2 overflow-hidden rounded-full bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${progress / c.target * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								progress,
								"/",
								c.target
							] }), claimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 inline size-4" }), "Claimed"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: progress < c.target,
								className: "hud-chip text-fg disabled:opacity-40",
								onClick: () => {
									const reward = claimV14Challenge(c.id);
									if (reward) patchSave((s) => ({
										...s,
										coins: s.coins + reward,
										stats: {
											...s.stats,
											coinsEarned: s.stats.coinsEarned + reward
										}
									}));
									refresh();
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "mr-1 inline size-4" }), "Claim"]
							})]
						})
					]
				}, c.id);
			})
		})]
	});
}
var PREFIX = "mwsj:v16:slot:";
function checksum(value) {
	let h = 2166136261;
	for (let i = 0; i < value.length; i++) {
		h ^= value.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return (h >>> 0).toString(16).padStart(8, "0");
}
function key(slot) {
	return `${PREFIX}${slot}`;
}
function listSaveSlots() {
	if (typeof localStorage === "undefined") return Array.from({ length: 3 }, (_, i) => ({
		slot: i + 1,
		savedAt: null,
		valid: false
	}));
	return Array.from({ length: 3 }, (_, i) => {
		try {
			const raw = localStorage.getItem(key(i + 1));
			if (!raw) return {
				slot: i + 1,
				savedAt: null,
				valid: false
			};
			const record = JSON.parse(raw);
			const body = JSON.stringify(record.save);
			return {
				slot: i + 1,
				savedAt: Number(record.savedAt) || null,
				valid: record.checksum === checksum(body)
			};
		} catch {
			return {
				slot: i + 1,
				savedAt: null,
				valid: false
			};
		}
	});
}
function saveToSlot(slot, save) {
	if (slot < 1 || slot > 3 || typeof localStorage === "undefined") return false;
	try {
		const body = JSON.stringify(save);
		const record = {
			version: 1,
			savedAt: Date.now(),
			checksum: checksum(body),
			save: migrateSave(save)
		};
		localStorage.setItem(`${key(slot)}.bak`, localStorage.getItem(key(slot)) ?? "");
		localStorage.setItem(key(slot), JSON.stringify(record));
		return true;
	} catch {
		return false;
	}
}
function loadFromSlot(slot) {
	if (slot < 1 || slot > 3 || typeof localStorage === "undefined") return null;
	const candidates = [key(slot), `${key(slot)}.bak`];
	for (const k of candidates) try {
		const raw = localStorage.getItem(k);
		if (!raw) continue;
		const record = JSON.parse(raw);
		const save = migrateSave(record.save);
		if (record.checksum === checksum(JSON.stringify(record.save))) return save;
	} catch {}
	return null;
}
function deleteSlot(slot) {
	if (typeof localStorage === "undefined") return;
	localStorage.removeItem(key(slot));
	localStorage.removeItem(`${key(slot)}.bak`);
}
function SaveSlotsScreen({ onBack }) {
	const save = useGame((s) => s.save);
	const [refresh, setRefresh] = (0, import_react.useState)(0);
	const slots = (0, import_react.useMemo)(() => listSaveSlots(), [refresh]);
	const [message, setMessage] = (0, import_react.useState)("");
	const saveSlot = (slot) => {
		setMessage(saveToSlot(slot, save) ? `Saved to slot ${slot}.` : "Could not save this slot.");
		setRefresh((x) => x + 1);
	};
	const loadSlot = (slot) => {
		const next = loadFromSlot(slot);
		if (!next) {
			setMessage(`Slot ${slot} is empty or corrupted.`);
			return;
		}
		useGame.getState().applyCloud(next);
		useGame.getState().persist();
		setMessage(`Loaded slot ${slot}.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.2em] text-accent",
						children: "Recovery vault"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-bold",
						children: "Save Slots"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Three local slots with checksums and rotating backups."
					})
				] }),
				Array.from({ length: 3 }, (_, i) => i + 1).map((slot) => {
					const meta = slots[slot - 1];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel rounded-2xl p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-semibold",
								children: ["Slot ", slot]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									meta.savedAt ? new Date(meta.savedAt).toLocaleString() : "Empty",
									" · ",
									meta.valid ? "Checksum OK" : meta.savedAt ? "Needs recovery" : ""
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "hud-chip text-fg",
										onClick: () => saveSlot(slot),
										children: "Save"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "hud-chip text-fg",
										onClick: () => loadSlot(slot),
										disabled: !meta.valid,
										children: "Load"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "hud-chip text-fg",
										onClick: () => {
											deleteSlot(slot);
											setRefresh((x) => x + 1);
										},
										children: "Clear"
									})
								]
							})]
						})
					}, slot);
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl border px-4 py-2",
					onClick: onBack,
					children: "Back"
				})
			]
		})
	});
}
function installV14LiveOpsBridge() {
	const offFound = gameEvents.on("word:found", () => incrementV14Progress("words"));
	const offComplete = gameEvents.on("level:complete", () => incrementV14Progress("clears"));
	return () => {
		offFound();
		offComplete();
	};
}
var KEY$2 = "mwsv24.creator.drafts";
var cleanWord = (w) => w.trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0, 14);
function sanitizeWords(input) {
	return Array.from(new Set(input.split(/[\n,]+/).map(cleanWord).filter((w) => w.length >= 3))).slice(0, 12);
}
function validateCreatorWords(words) {
	if (words.length < 3) return {
		ok: false,
		reason: "Add at least 3 words."
	};
	if (words.some((w) => w.length < 3 || w.length > 14)) return {
		ok: false,
		reason: "Words must be 3–14 letters."
	};
	const puzzle = generatePuzzle({
		seed: 7001 + words.length,
		size: 12,
		wordCount: words.length,
		minLen: 3,
		maxLen: 14,
		dirs: [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1]
		],
		category: "creator",
		title: "Creator Puzzle"
	});
	const q = validatePuzzleQuality(puzzle);
	return q.valid ? {
		ok: true,
		reason: "Puzzle is solvable and quality-checked."
	} : {
		ok: false,
		reason: q.errors.join(", ") || "Puzzle quality check failed."
	};
}
function listDrafts() {
	try {
		return JSON.parse(localStorage.getItem(KEY$2) || "[]");
	} catch {
		return [];
	}
}
function saveDraft(d) {
	const all = listDrafts().filter((x) => x.id !== d.id);
	localStorage.setItem(KEY$2, JSON.stringify([d, ...all].slice(0, 30)));
}
function publishDraft(id) {
	const d = listDrafts().find((x) => x.id === id);
	if (!d) return false;
	saveDraft({
		...d,
		status: "published",
		updatedAt: Date.now()
	});
	return true;
}
function newDraft(title, words, category) {
	const now = Date.now();
	return {
		id: crypto.randomUUID(),
		title: title.trim().slice(0, 48) || "Untitled Journey",
		words,
		category: category.trim().slice(0, 32) || "creator",
		createdAt: now,
		updatedAt: now,
		status: "draft"
	};
}
var clean$3 = (v, max) => String(v ?? "").trim().slice(0, max);
var words = (v) => Array.isArray(v) ? [...new Set(v.map((x) => String(x).toUpperCase().replace(/[^A-Z]/g, "").slice(0, 14)).filter((x) => x.length >= 3))].slice(0, 12) : [];
var publishCreatorPuzzle = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	id: clean$3(d.id, 80),
	title: clean$3(d.title, 48) || "Untitled Journey",
	category: clean$3(d.category, 32) || "creator",
	words: words(d.words)
})).handler(createSsrRpc("2fcbaf9992b048b4a9641146bb0a1ab015eaacaa981e3cef2df4f6ea6d6c62e2"));
var listMyCreatorPuzzles = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("adf009bd7fca1657bec39f10ee8e2477aab4c64658c15d7a46bbabd378f0526f"));
var clean$2 = (v, n) => String(v ?? "").trim().slice(0, n);
var submitCreatorForReview = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ id: clean$2(d.id, 80) })).handler(createSsrRpc("67149de935c30b8a832e9370dbbd95a9cdb67c895d0139455cc3801e197a2bc8"));
var listCreatorCommunity = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("2c1eb34d1747c85c3d16be4a8636f912a529c75181983bae486088f7e804c7ae"));
var reviewCreatorPuzzle = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	puzzleId: clean$2(d.puzzleId, 80),
	rating: Math.max(1, Math.min(5, Math.floor(Number(d.rating)))),
	body: clean$2(d.body, 500)
})).handler(createSsrRpc("6f946c4b3878bb182fab248ddf22fb25f68bd588653acd9fa65d6b32bc5cafae"));
createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	id: clean$2(d.id, 80),
	status: d.status
})).handler(createSsrRpc("4821dc6e1cde3e66d023ae86f3ff84317a9d0a30a67a55d491f75ad19ecc0cf4"));
function CreatorScreen() {
	const go = useGame.getState().go;
	const [drafts, setDrafts] = (0, import_react.useState)([]);
	const [title, setTitle] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("adventure");
	const [raw, setRaw] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setDrafts(listDrafts());
		listMyCreatorPuzzles().then((r) => {
			if (r.ok) setMsg(`${r.puzzles.length} cloud-published puzzle(s) loaded.`);
		}).catch(() => {});
	}, []);
	const create = () => {
		const words = sanitizeWords(raw);
		const v = validateCreatorWords(words);
		setMsg(v.reason);
		if (!v.ok) return;
		saveDraft(newDraft(title, words, category));
		setDrafts(listDrafts());
		setTitle("");
		setRaw("");
		setMsg("Draft saved and puzzle-checked.");
	};
	const publish = async (id) => {
		if (!publishDraft(id)) return;
		const d = listDrafts().find((x) => x.id === id);
		if (!d) return;
		setDrafts(listDrafts());
		try {
			const r = await publishCreatorPuzzle({ data: {
				id: d.id,
				title: d.title,
				category: d.category,
				words: d.words
			} });
			setMsg(r.ok ? "Saved locally and submitted for cloud moderation review." : `Local draft saved. Cloud: ${r.error}`);
		} catch {
			setMsg("Saved locally. Sign in to submit to cloud moderation.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Creator Studio",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Build your own word-search journey. Drafts are stored offline on this device."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "Journey title",
							className: "mt-3 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							placeholder: "Category",
							className: "mt-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: raw,
							onChange: (e) => setRaw(e.target.value),
							placeholder: "One word per line (3–14 letters)",
							rows: 7,
							className: "mt-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: create,
							className: "hud-chip mt-3 text-fg",
							children: "Validate & Save Draft"
						}),
						msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: msg
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [drafts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel rounded-2xl p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-fg",
									children: d.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: d.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									d.words.length,
									" words · ",
									d.category
								]
							}),
							d.status === "draft" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => publish(d.id),
								className: "hud-chip mt-2 text-fg",
								children: "Publish"
							}),
							d.status === "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: async () => {
									try {
										const r = await submitCreatorForReview({ data: { id: d.id } });
										setMsg(r.ok ? "Submitted for moderation review." : "Could not submit for review.");
									} catch {
										setMsg("Sign in to submit for moderation.");
									}
								},
								className: "hud-chip mt-2 ml-2 text-fg",
								children: "Submit for Review"
							})
						]
					}, d.id)), !drafts.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "No creator drafts yet."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go("creatorCommunity"),
					className: "text-sm text-primary",
					children: "Browse Creator Community"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go("more"),
					className: "text-sm text-muted",
					children: "Back to More"
				})
			]
		})
	});
}
function CreatorCommunityScreen() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [msg, setMsg] = (0, import_react.useState)("");
	const load = () => void listCreatorCommunity().then(setRows).catch(() => setRows([]));
	(0, import_react.useEffect)(load, []);
	const review = async (id) => {
		const raw = window.prompt("Rating 1–5 and optional comment, separated by |", "5|");
		if (raw === null) return;
		const [r, b = ""] = raw.split("|", 2);
		const rating = Number(r);
		if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
			setMsg("Rating must be 1–5.");
			return;
		}
		try {
			const x = await reviewCreatorPuzzle({ data: {
				puzzleId: id,
				rating,
				body: b
			} });
			setMsg(x.ok ? "Review saved." : x.error);
			load();
		} catch {
			setMsg("Sign in to review community puzzles.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Creator Community",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Approved creator journeys are moderated before appearing here. Ratings are account-scoped and one review per puzzle."
				}),
				msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: msg
				}),
				rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-fg",
								children: r.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [
									r.rating.toFixed(1),
									" ★ · ",
									r.review_count,
									" reviews"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								r.category,
								" · v",
								r.version
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "hud-chip mt-2 text-fg",
							onClick: () => review(r.id),
							children: "Rate"
						})
					]
				}, r.id)),
				!rows.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "No approved creator journeys yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-sm text-muted",
					onClick: () => useGame.getState().go("more"),
					children: "Back to More"
				})
			]
		})
	});
}
function levelMastery(save, level) {
	const r = save.results[String(level)];
	if (!r) return 0;
	return r.perfect ? 3 : Math.max(1, Math.min(2, r.stars));
}
function masterySummary(save, max = 200) {
	let cleared = 0, perfect = 0, stars = 0;
	for (let i = 1; i <= max; i++) {
		const m = levelMastery(save, i);
		if (m) {
			cleared++;
			stars += m;
			if (m === 3) perfect++;
		}
	}
	return {
		cleared,
		perfect,
		stars,
		percent: Math.round(cleared / max * 100)
	};
}
function masteryTier(stars) {
	if (stars >= 450) return "Legend";
	if (stars >= 300) return "Master";
	if (stars >= 150) return "Veteran";
	if (stars >= 50) return "Pathfinder";
	return "Apprentice";
}
function ProgressionHubScreen() {
	const save = useGame((s) => s.save);
	const m = masterySummary(save, Math.max(200, save.unlockedLevel));
	const next = Math.ceil((m.stars + 1) / 50) * 50;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Mastery & Progression",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: "Current tier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-3xl text-fg",
							children: masteryTier(m.stars)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: [
								m.stars,
								" mastery stars · ",
								m.cleared,
								" cleared · ",
								m.perfect,
								" perfect"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-2 overflow-hidden rounded-full bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${Math.min(100, m.stars % 50 / 50 * 100)}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [next - m.stars, " stars to the next milestone"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						["Cleared", m.cleared],
						["Perfect", m.perfect],
						["Stars", m.stars],
						["Coverage", `${m.percent}%`]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-2xl text-fg",
							children: v
						})]
					}, String(k)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "Replay levels to improve mastery. A perfect clear earns 3 stars; other clears preserve their earned stars. This progression is derived from your existing level results, so it works offline without a new save schema."
				})
			]
		})
	});
}
var REWARDS = [
	50,
	75,
	100,
	150,
	200,
	300,
	400,
	500,
	750,
	1e3
];
function seasonKey(now = /* @__PURE__ */ new Date()) {
	return `${now.getUTCFullYear()}-S${Math.floor(now.getUTCMonth() / 3) + 1}`;
}
function seasonPoints(save) {
	return save.stats.levelsCompleted * 10 + save.stats.wordsFound * 2 + save.stats.perfectClears * 15 + save.stats.bossesDefeated * 30;
}
function seasonTiers(save) {
	const p = seasonPoints(save);
	return REWARDS.map((reward, i) => {
		const level = i + 1;
		const need = level * 100;
		return {
			level,
			points: need,
			reward,
			claimed: p >= need
		};
	});
}
function SeasonProgressScreen() {
	const save = useGame((s) => s.save), claim = useGame((s) => s.claimSeasonTier);
	const p = seasonPoints(save), tiers = seasonTiers(save);
	const next = tiers.find((t) => p < t.points);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Season Progress",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: [seasonKey(), " · Adventure Pass"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-1 text-3xl text-fg",
							children: [p, " points"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-2 overflow-hidden rounded-full bg-surface",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${Math.min(100, p % 100)}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: next ? `${next.points - p} points to Tier ${next.level}` : "Season track complete"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: tiers.map((t) => {
						const key = `${seasonKey()}:${t.level}`;
						const claimed = save.claimedSeasonTiers.includes(key);
						const ready = p >= t.points;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel flex items-center justify-between rounded-2xl p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
								className: "text-fg",
								children: ["Tier ", t.level]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									t.points,
									" points · ",
									t.reward,
									" coins"
								]
							})] }), claimed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: "Claimed"
							}) : ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "hud-chip text-fg",
								onClick: () => void claim(t.level),
								children: "Claim"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: "Locked"
							})]
						}, t.level);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Season rewards require a signed-in cloud save for server-authoritative claiming. Your progress remains local-first."
				})
			]
		})
	});
}
var safe = (n) => Number.isFinite(n) ? Math.max(0, n) : 0;
function buildAnalytics(save) {
	const s = save.stats;
	const games = safe(s.gamesPlayed);
	return {
		gamesPlayed: games,
		winRate: games ? Math.round(safe(s.gamesWon) / games * 1e3) / 10 : 0,
		perfectRate: games ? Math.round(safe(s.perfectClears) / games * 1e3) / 10 : 0,
		wordsPerGame: games ? Math.round(safe(s.wordsFound) / games * 10) / 10 : 0,
		averagePlayMinutes: games ? Math.round(safe(s.playTimeMs) / games / 6e4 * 10) / 10 : 0,
		hintsPerGame: games ? Math.round(safe(s.hintsUsed) / games * 10) / 10 : 0,
		bossWins: safe(s.bossesDefeated),
		dailyCompletions: safe(s.dailyCompleted),
		currentStreak: safe(s.currentStreak),
		bestStreak: safe(s.bestStreak),
		levelsCompleted: safe(s.levelsCompleted)
	};
}
function analyticsCsv(snapshot) {
	return [
		["metric", "value"],
		["games_played", snapshot.gamesPlayed],
		["win_rate_percent", snapshot.winRate],
		["perfect_clear_rate_percent", snapshot.perfectRate],
		["words_per_game", snapshot.wordsPerGame],
		["average_play_minutes", snapshot.averagePlayMinutes],
		["hints_per_game", snapshot.hintsPerGame],
		["bosses_defeated", snapshot.bossWins],
		["daily_completions", snapshot.dailyCompletions],
		["current_streak", snapshot.currentStreak],
		["best_streak", snapshot.bestStreak],
		["levels_completed", snapshot.levelsCompleted]
	].map((r) => r.map((v) => `"${String(v).replaceAll("\"", "\"\"")}"`).join(",")).join("\n");
}
function AnalyticsScreen() {
	const save = useGame((s) => s.save);
	const snapshot = (0, import_react.useMemo)(() => buildAnalytics(save), [save]);
	const exportCsv = () => {
		const blob = new Blob([analyticsCsv(snapshot)], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "mera-word-search-analytics.csv";
		a.click();
		URL.revokeObjectURL(url);
	};
	const cards = [
		["Win rate", `${snapshot.winRate}%`],
		["Perfect clears", `${snapshot.perfectRate}%`],
		["Words / game", snapshot.wordsPerGame],
		["Avg. session", `${snapshot.averagePlayMinutes} min`],
		["Hints / game", snapshot.hintsPerGame],
		["Levels", snapshot.levelsCompleted],
		["Bosses", snapshot.bossWins],
		["Best streak", snapshot.bestStreak]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Player Analytics",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mb-4 rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Private by default" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "These insights are calculated from your local save. No raw gameplay history is uploaded by this dashboard."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: cards.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel rounded-2xl p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-xl text-fg",
						children: value
					})]
				}, String(label)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-3 rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Journey signals" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"• ",
							snapshot.gamesPlayed,
							" recorded game sessions"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"• ",
							snapshot.dailyCompletions,
							" daily challenges completed"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"• Current streak: ",
							snapshot.currentStreak,
							" days"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"• Average session: ",
							snapshot.averagePlayMinutes,
							" minutes"
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: exportCsv,
				className: "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-semibold text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export analytics CSV"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-start gap-2 rounded-2xl border border-border p-3 text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-4 shrink-0" }), " Export contains aggregated counters only, not puzzle text, account credentials, or secrets."]
			})
		]
	});
}
function applyAccessibilityPreset(settings, preset) {
	if (preset === "low-motion") return {
		...settings,
		reducedMotion: true,
		shake: false,
		particles: false
	};
	if (preset === "high-clarity") return {
		...settings,
		highContrast: true,
		largeText: true,
		gridLines: true,
		showDirections: true
	};
	if (preset === "focus") return {
		...settings,
		reducedMotion: true,
		shake: false,
		particles: false,
		showDirections: false,
		autoHint: false
	};
	return settings;
}
function accessibilitySummary(s) {
	return [
		s.highContrast && "high contrast",
		s.largeText && "large text",
		s.reducedMotion && "reduced motion",
		s.colorBlind && "color-blind support",
		s.dyslexiaFriendly && "dyslexia-friendly text",
		s.focusMode && "focus mode"
	].filter(Boolean);
}
async function requestNotificationPermission() {
	if (typeof Notification === "undefined") return "unsupported";
	if (Notification.permission === "granted" || Notification.permission === "denied") return Notification.permission;
	return Notification.requestPermission();
}
function AccessibilityScreen() {
	const settings = useGame((s) => s.save.settings);
	const setSetting = useGame.getState().setSetting;
	const [permission, setPermission] = (0, import_react.useState)(typeof Notification === "undefined" ? "unsupported" : Notification.permission);
	const summary = (0, import_react.useMemo)(() => accessibilitySummary(settings), [settings]);
	const toggle = (key) => setSetting(key, !settings[key]);
	const preset = (p) => {
		const next = applyAccessibilityPreset(settings, p);
		Object.keys(next).forEach((key) => {
			if (next[key] !== settings[key]) setSetting(key, next[key]);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		title: "Accessibility Pro",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel rounded-2xl p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-fg",
					children: "Your current profile"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: summary.length ? summary.join(" · ") : "Standard presentation"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-2",
				children: [
					"default",
					"low-motion",
					"high-clarity",
					"focus"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "panel rounded-xl p-3 text-left text-sm font-semibold text-fg",
					onClick: () => preset(p),
					children: p.replace("-", " ")
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-col gap-2",
				children: [
					["screenReader", "Screen-reader optimized labels"],
					["dyslexiaFriendly", "Dyslexia-friendly text spacing"],
					["focusMode", "Focus mode"],
					["highContrast", "High contrast"],
					["largeText", "Large text"],
					["reducedMotion", "Reduced motion"],
					["colorBlind", "Color-blind support"]
				].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": Boolean(settings[key]),
					className: "panel flex items-center justify-between rounded-xl p-4 text-left",
					onClick: () => toggle(key),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-fg",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hud-chip text-xs text-fg",
						children: settings[key] ? "On" : "Off"
					})]
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-3 rounded-2xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-fg",
						children: "Smart reminders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Daily puzzle, low-energy and streak reminders. Notifications stay off until you opt in."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-3 hud-chip text-fg",
						onClick: async () => setPermission(await requestNotificationPermission()),
						children: permission === "granted" ? "Notifications enabled" : permission === "denied" ? "Notifications blocked" : "Enable notifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-3 ml-2 hud-chip text-fg",
						onClick: () => toggle("notificationReminders"),
						children: settings.notificationReminders ? "Reminders on" : "Reminders off"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-3 block text-xs text-muted",
						children: "Preferred reminder time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "time",
						value: settings.notificationTime,
						onChange: (e) => setSetting("notificationTime", e.target.value),
						className: "mt-1 rounded-xl border border-border bg-surface px-3 py-2 text-fg"
					})
				]
			})
		]
	});
}
var deferredPrompt = null;
var registration = null;
function registerPwa(onUpdate) {
	if (typeof window === "undefined" || !("serviceWorker" in navigator)) return () => {};
	const onInstallPrompt = (event) => {
		event.preventDefault();
		deferredPrompt = event;
	};
	const onController = () => onUpdate?.();
	window.addEventListener("beforeinstallprompt", onInstallPrompt);
	navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((r) => {
		registration = r;
		if (r.waiting) onUpdate?.();
		r.addEventListener("updatefound", () => {
			const worker = r.installing;
			worker?.addEventListener("statechange", () => {
				if (worker.state === "installed" && navigator.serviceWorker.controller) onUpdate?.();
			});
		});
	}).catch(() => {});
	navigator.serviceWorker.addEventListener("controllerchange", onController);
	return () => {
		window.removeEventListener("beforeinstallprompt", onInstallPrompt);
		navigator.serviceWorker.removeEventListener("controllerchange", onController);
	};
}
function canInstallPwa() {
	return Boolean(deferredPrompt);
}
async function installPwa() {
	if (!deferredPrompt?.prompt) return false;
	await deferredPrompt.prompt();
	const outcome = await deferredPrompt.userChoice;
	deferredPrompt = null;
	return outcome?.outcome === "accepted";
}
function hasWaitingUpdate() {
	return Boolean(registration?.waiting);
}
function applyPwaUpdate() {
	registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
}
function pwaStatus() {
	return {
		installed: typeof window !== "undefined" && window.matchMedia?.("(display-mode: standalone)").matches === true,
		updateAvailable: hasWaitingUpdate(),
		online: typeof navigator !== "undefined" ? navigator.onLine : true
	};
}
function PwaScreen() {
	const [status, setStatus] = (0, import_react.useState)(pwaStatus());
	const refresh = () => setStatus(pwaStatus());
	(0, import_react.useEffect)(() => {
		window.addEventListener("online", refresh);
		window.addEventListener("offline", refresh);
		const id = window.setInterval(refresh, 1500);
		return () => {
			window.removeEventListener("online", refresh);
			window.removeEventListener("offline", refresh);
			window.clearInterval(id);
		};
	}, []);
	const install = async () => {
		await installPwa();
		refresh();
	};
	const update = () => {
		applyPwaUpdate();
		window.setTimeout(() => window.location.reload(), 250);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Offline & Install",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: "PWA status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl text-fg",
							children: status.online ? "Online" : "Offline mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Core game data stays local-first. Network-backed features reconnect when service is restored."
						})
					]
				}),
				canInstallPwa() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: install,
					children: "Install app"
				}),
				hasWaitingUpdate() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					onClick: update,
					children: "Apply available update"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-fg",
							children: "Accessibility keyboard mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "On the puzzle board, focus the grid and use arrow keys to move. Enter selects the first cell and Enter again submits the line."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [
								"Installed: ",
								status.installed ? "yes" : "not yet",
								" · Update: ",
								status.updateAvailable ? "ready" : "none"
							]
						})
					]
				})
			]
		})
	});
}
var getPushConfig = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("08b32a5b08cabef43341ce3a0393eab95860097817416874dd9ac873c8e912d8"));
var savePushSubscription = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ subscription: d.subscription })).handler(createSsrRpc("60a8743cc7963260bb7bfac40b759c7a41b2ad34317f722a0a7156f1020aa795"));
var removePushSubscription = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ endpoint: String(d.endpoint ?? "").slice(0, 2048) })).handler(createSsrRpc("c1d68e648bc087ed6bc39d33acec72f03d184b5f9a16e8ecbf0c757755d98d6f"));
async function enablePushNotifications() {
	if (typeof window === "undefined" || !("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) return {
		ok: false,
		message: "This browser does not support web push."
	};
	if (await Notification.requestPermission() !== "granted") return {
		ok: false,
		message: "Notification permission was not granted."
	};
	const config = await getPushConfig();
	if (!config.publicKey) return {
		ok: false,
		message: "Push delivery is not configured on this deployment yet."
	};
	const registration = await navigator.serviceWorker.ready;
	const result = await savePushSubscription({ data: { subscription: (await registration.pushManager.getSubscription() ?? await registration.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToBytes(config.publicKey)
	})).toJSON() } });
	return result.ok ? {
		ok: true,
		message: "Push notifications are enabled."
	} : {
		ok: false,
		message: result.error
	};
}
async function disablePushNotifications() {
	if (!("serviceWorker" in navigator)) return {
		ok: false,
		message: "Service workers are unavailable."
	};
	const subscription = await (await navigator.serviceWorker.ready).pushManager.getSubscription();
	if (!subscription) return {
		ok: true,
		message: "No push subscription is active."
	};
	const endpoint = subscription.endpoint;
	await subscription.unsubscribe();
	await removePushSubscription({ data: { endpoint } });
	return {
		ok: true,
		message: "Push notifications are disabled."
	};
}
async function pushState() {
	if (typeof navigator === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window)) return "unsupported";
	return await (await navigator.serviceWorker.ready).pushManager.getSubscription() ? "enabled" : "disabled";
}
function urlBase64ToBytes(base64String) {
	const padding = "=".repeat((4 - base64String.length % 4) % 4);
	const rawData = atob((base64String + padding).replace(/-/g, "+").replace(/_/g, "/"));
	return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
function PushSettingsScreen() {
	const user = useGame((s) => s.save.playerName);
	const [state, setState] = (0, import_react.useState)("loading");
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		pushState().then(setState);
	}, []);
	const run = async (fn, next) => {
		const result = await fn();
		setMessage(result.message);
		if (result.ok) setState(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Push Notifications",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-gold",
							children: "Delivery status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl text-fg",
							children: state === "enabled" ? "Enabled" : state === "unsupported" ? "Unsupported" : state === "loading" ? "Checking…" : "Not enabled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: user ? "Push subscriptions are scoped to your signed-in account." : "Sign in to save a push subscription to the server."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-primary",
					disabled: !user || state === "enabled" || state === "unsupported",
					onClick: () => void run(enablePushNotifications, "enabled"),
					children: "Enable push"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn-ghost",
					disabled: state !== "enabled",
					onClick: () => void run(disablePushNotifications, "disabled"),
					children: "Disable push"
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					role: "status",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "A deployment must provide a public VAPID key and a server-side push sender before notifications can be delivered while the app is closed."
				})
			]
		})
	});
}
var routes = [
	[/\b(play|game|start)\b/, "play"],
	[/\b(home|main)\b/, "home"],
	[/\b(settings?|options?)\b/, "settings"],
	[/\b(stats?|statistics|analytics)\b/, "analytics"],
	[/\b(achievements?|trophies)\b/, "achievements"],
	[/\b(missions?|quests?)\b/, "missions"],
	[/\b(story)\b/, "story"],
	[/\b(dictionary|words?)\b/, "dictionary"],
	[/\b(leaderboard|rankings?)\b/, "leaderboard"],
	[/\b(pets?|animals?)\b/, "pets"],
	[/\b(combat|fight|battle)\b/, "combat"],
	[/\b(multiplayer|online)\b/, "multiplayer"],
	[/\b(creator|create puzzle)\b/, "creator"],
	[/\b(community|creators)\b/, "creatorCommunity"],
	[/\b(coach|smart coach)\b/, "coach"],
	[/\b(adaptive|challenge)\b/, "adaptive"],
	[/\b(planner|journey plan)\b/, "journeyPlanner"],
	[/\b(accessibility|accessible)\b/, "accessibility"],
	[/\b(offline|install|updates?)\b/, "pwa"],
	[/\b(notifications?|push)\b/, "pushSettings"],
	[/\b(more|menu)\b/, "more"]
];
function parseVoiceCommand(input) {
	const text = input.trim().toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ");
	if (!text) return {
		text,
		action: "unknown"
	};
	if (/\b(back|go back|previous)\b/.test(text)) return {
		text,
		action: "back"
	};
	if (/\b(home|go home|main menu)\b/.test(text)) return {
		text,
		action: "home",
		screen: "home"
	};
	for (const [pattern, screen] of routes) if (pattern.test(text)) return {
		text,
		action: "navigate",
		screen
	};
	return {
		text,
		action: "unknown"
	};
}
function speechLocale(lang) {
	return {
		en: "en-US",
		ur: "ur-PK",
		"ur-Latn": "ur-PK",
		hi: "hi-IN",
		ar: "ar-SA",
		bn: "bn-BD",
		pa: "pa-IN",
		sd: "sd-PK",
		ps: "ps-AF",
		tr: "tr-TR",
		es: "es-ES",
		fr: "fr-FR",
		de: "de-DE",
		zh: "zh-CN",
		ja: "ja-JP"
	}[lang] ?? "en-US";
}
function VoiceCommandScreen() {
	const language = useGame((s) => s.save.language);
	const go = useGame.getState().go;
	const [listening, setListening] = (0, import_react.useState)(false);
	const [heard, setHeard] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Ready");
	const recognition = (0, import_react.useRef)(null);
	const supported = (0, import_react.useMemo)(() => typeof window !== "undefined" && !!(window.SpeechRecognition || window.webkitSpeechRecognition), []);
	const speak = (text) => {
		if ("speechSynthesis" in window) {
			window.speechSynthesis.cancel();
			window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
		}
	};
	const run = (text) => {
		setHeard(text);
		const command = parseVoiceCommand(text);
		if (command.action === "navigate" || command.action === "home") {
			setStatus(`Opening ${command.screen}`);
			speak(`Opening ${command.screen}`);
			if (command.screen) go(command.screen);
		} else if (command.action === "back") {
			setStatus("Going back");
			speak("Going back");
			go("more");
		} else {
			setStatus("Command not recognized");
			speak("I did not recognize that command");
		}
	};
	const start = () => {
		if (!supported) {
			setStatus("Speech recognition is not supported in this browser");
			return;
		}
		const r = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
		r.lang = speechLocale(language);
		r.continuous = false;
		r.interimResults = false;
		r.onresult = (e) => run(e.results?.[0]?.[0]?.transcript ?? "");
		r.onerror = () => {
			setListening(false);
			setStatus("Microphone or speech recognition error");
		};
		r.onend = () => setListening(false);
		recognition.current = r;
		setListening(true);
		setStatus(`Listening in ${r.lang}`);
		r.start();
	};
	const stop = () => {
		recognition.current?.stop();
		setListening(false);
		setStatus("Stopped");
	};
	(0, import_react.useEffect)(() => () => recognition.current?.stop(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Voice Command Center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "Voice + NLP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: "Hands-free controls"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Speak a simple command to navigate the game. Recognition stays in your browser; no audio is uploaded by this feature."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: !supported,
					onClick: listening ? stop : start,
					className: "flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground disabled:opacity-50",
					children: [listening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" }), listening ? "Stop listening" : "Start listening"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-semibold text-fg",
							children: status
						}),
						heard && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted",
							children: [
								"Heard: “",
								heard,
								"”"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Try saying"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Open achievements”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Go to settings”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Show analytics”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Open creator”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Start multiplayer”" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Go home”" })
						]
					})]
				})
			]
		})
	});
}
var clean$1 = (v, max) => String(v ?? "").trim().slice(0, max);
var generateCreatorIdeas = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	category: clean$1(d.category, 32) || "adventure",
	difficulty: clean$1(d.difficulty, 16) || "medium",
	count: Math.max(3, Math.min(12, Math.floor(Number(d.count) || 8)))
})).handler(createSsrRpc("05bb3f90a6df201c3b09534d8e0fc44c18be09c7e497530b564ec724860913c1"));
function AIPuzzleLabScreen() {
	const go = useGame.getState().go;
	const [category, setCategory] = (0, import_react.useState)("adventure");
	const [difficulty, setDifficulty] = (0, import_react.useState)("medium");
	const [count, setCount] = (0, import_react.useState)(8);
	const [words, setWords] = (0, import_react.useState)([]);
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const run = async () => {
		setBusy(true);
		setNote("");
		try {
			const r = await generateCreatorIdeas({ data: {
				category,
				difficulty,
				count
			} });
			setWords(r.ok ? r.words : []);
			setNote(r.ok ? `${r.source === "ai" ? "AI" : "Local"} suggestions ready. ${r.note}` : r.error);
		} catch {
			setNote("Sign in or enable the server AI boundary to generate suggestions.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "AI Puzzle Lab",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "Creator intelligence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: "Build a word set faster"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Generate a validated word list for Creator Studio. The AI key stays server-side; when AI is unavailable, the app falls back to local vocabulary."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel grid gap-3 rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							placeholder: "Category",
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: difficulty,
							onChange: (e) => setDifficulty(e.target.value),
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "easy" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "medium" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "hard" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "expert" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-sm text-muted",
							children: [
								"Words: ",
								count,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 3,
									max: 12,
									value: count,
									onChange: (e) => setCount(Number(e.target.value)),
									className: "mt-2 w-full"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: busy,
							onClick: run,
							className: "flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-5" }), busy ? "Generating…" : "Generate word set"]
						}),
						note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: note
						})
					]
				}),
				words.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-fg",
							children: "Validated words"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-chip text-fg",
								children: w
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("creator"),
								className: "text-sm text-primary",
								children: "Open Creator Studio →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go("puzzleAudit"),
								className: "text-sm text-primary",
								children: "Run Puzzle QA →"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => go("more"),
					className: "text-sm text-muted",
					children: "Back to More"
				})
			]
		})
	});
}
var cleanWords = (input) => {
	if (!Array.isArray(input)) return [];
	return [...new Set(input.map((v) => String(v).trim().toUpperCase()).filter((v) => /^[A-Z]{3,14}$/.test(v)))].slice(0, 20);
};
function auditPuzzleWordsLocal(words) {
	const issues = [];
	const suggestions = [];
	if (words.length < 3) issues.push("Add at least 3 valid words.");
	const short = words.filter((w) => w.length <= 3);
	const long = words.filter((w) => w.length >= 10);
	const uniqueLengths = new Set(words.map((w) => w.length)).size;
	const vowelSparse = words.filter((w) => !/[AEIOU]/.test(w));
	if (short.length > Math.ceil(words.length * .5)) issues.push("The set is dominated by very short words.");
	if (uniqueLengths < 2 && words.length >= 5) issues.push("Word lengths lack variety.");
	if (vowelSparse.length > 0) suggestions.push("Consider replacing vowel-sparse words with more recognizable vocabulary.");
	if (long.length === 0 && words.length >= 6) suggestions.push("Add one or two longer words for challenge variety.");
	if (words.length >= 8 && uniqueLengths >= 3) suggestions.push("Length distribution looks suitable for a mixed-difficulty puzzle.");
	if (!issues.length) suggestions.push("No structural issues detected. Generate a puzzle and run gameplay QA next.");
	const balance = Math.min(100, Math.max(0, 55 + words.length * 4 + uniqueLengths * 7 - short.length * 5 - issues.length * 10));
	return {
		score: Math.round(balance),
		words,
		issues,
		suggestions,
		source: "local"
	};
}
var auditPuzzleWords = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ words: cleanWords(d.words) })).handler(createSsrRpc("e9e6ac6cc851f2f412a9132465e703eec6b80defe607249b8d462594edb381a7"));
function PuzzleAuditScreen() {
	const go = useGame.getState().go;
	const [input, setInput] = (0, import_react.useState)("ADVENTURE, DISCOVER, JOURNEY, TREASURE, COMPASS, MYSTERY");
	const [result, setResult] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const run = async () => {
		setBusy(true);
		try {
			const words = input.split(/[\s,;]+/).filter(Boolean);
			setResult(await auditPuzzleWords({ data: { words } }));
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Puzzle QA Lab",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V36 quality gate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: "Audit before publishing"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Check a Creator word set for structural balance before turning it into a playable puzzle. AI review is server-side optional; deterministic QA remains available offline."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel grid gap-3 rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-medium text-fg",
							children: "Words"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							rows: 5,
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: busy,
							onClick: run,
							className: "flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-5" }), busy ? "Auditing…" : "Run quality audit"]
						})
					]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted",
								children: "Quality score"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-4xl text-fg",
								children: [result.score, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base text-muted",
									children: "/100"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-chip text-fg",
								children: result.source === "ai" ? "AI + QA" : "Local QA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm font-semibold text-fg",
							children: [result.words.length, " validated words"]
						}),
						result.issues.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-fg",
								children: "Issues"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc pl-5 text-sm text-muted",
								children: result.issues.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-fg",
								children: "Suggestions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc pl-5 text-sm text-muted",
								children: result.suggestions.map((x, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, i))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("aiPuzzleLab"),
						className: "text-sm text-primary",
						children: "← Back to AI Puzzle Lab"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("playablePreview"),
						className: "text-sm text-primary",
						children: "Build Playable Preview →"
					})]
				})
			]
		})
	});
}
var clean = (input) => [...new Set(input.map((w) => w.trim().toUpperCase().replace(/[^A-Z]/g, "")).filter((w) => /^[A-Z]{3,14}$/.test(w)))].slice(0, 12);
function buildPlayablePreview(input) {
	const words = clean(input.words);
	const size = Math.max(10, Math.min(16, Math.max(10, ...words.map((w) => w.length))));
	const puzzle = generatePuzzle({
		seed: Number.isFinite(input.seed) ? Number(input.seed) : 37001 + words.length,
		size,
		wordCount: words.length,
		minLen: 3,
		maxLen: Math.min(14, size),
		dirs: [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1]
		],
		category: input.category?.trim().slice(0, 32) || "creator",
		title: input.title?.trim().slice(0, 48) || "Creator Preview"
	});
	const structural = validatePuzzle(puzzle);
	const quality = validatePuzzleQuality(puzzle, true);
	const score = Math.max(0, Math.min(100, Math.round((quality.solvable ? 65 : 20) + (quality.unique ? 25 : 0) + (structural.valid ? 10 : 0))));
	return {
		puzzle,
		valid: structural.valid && quality.solvable,
		quality: score,
		errors: [...structural.errors, ...quality.errors].slice(0, 8)
	};
}
function PlayablePreviewScreen() {
	const go = useGame.getState().go;
	const [raw, setRaw] = (0, import_react.useState)("ADVENTURE, DISCOVER, JOURNEY, TREASURE, COMPASS, MYSTERY");
	const [title, setTitle] = (0, import_react.useState)("My Journey Preview");
	const [category, setCategory] = (0, import_react.useState)("adventure");
	const [result, setResult] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)("");
	const run = () => {
		setMessage("");
		const r = buildPlayablePreview({
			words: raw.split(/[\s,;\n]+/).filter(Boolean),
			title,
			category,
			seed: Date.now() & 4294967295
		});
		setResult(r);
		if (!r.valid) setMessage(r.errors[0] || "Preview needs more work.");
	};
	const save = () => {
		if (!result?.valid) return;
		saveDraft(newDraft(title, result.puzzle.words, category));
		setMessage("Playable preview saved as a Creator draft.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Playable Preview Studio",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V37 creator pipeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: "Turn words into a playable puzzle"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Generate a deterministic local grid from your word set, validate it, preview the board, and save a playable Creator draft."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel grid gap-3 rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "Puzzle title",
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							placeholder: "Category",
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: raw,
							onChange: (e) => setRaw(e.target.value),
							rows: 5,
							className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: run,
							className: "flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 font-semibold text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-5" }), "Generate playable preview"]
						})
					]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted",
								children: "Quality gate"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl text-fg",
								children: [result.quality, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: "/100"
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-chip text-fg",
								children: result.valid ? "Playable" : "Needs fixes"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-4 w-fit overflow-hidden rounded-xl border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid",
								style: { gridTemplateColumns: `repeat(${result.puzzle.size}, minmax(20px, 1fr))` },
								children: result.puzzle.grid.flatMap((row, r) => row.map((cell, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-7 w-7 items-center justify-center border border-border/40 text-[10px] font-bold text-fg",
									children: cell
								}, `${r}-${c}`)))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: result.puzzle.words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hud-chip text-fg",
								children: w
							}, w))
						}),
						result.valid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: save,
							className: "mt-4 flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), "Save as Creator draft"]
						}),
						message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: message
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("puzzleAudit"),
						className: "text-sm text-primary",
						children: "← Puzzle QA Lab"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("creator"),
						className: "text-sm text-primary",
						children: "Creator Studio →"
					})]
				})
			]
		})
	});
}
var KEY$1 = "mera-word-search-v38-playtests";
function matchPlaytestPath(puzzle, letters, cells, found) {
	const normalized = letters.replace(/[^A-Z]/g, "").toUpperCase();
	if (!normalized || cells.length < 2) return null;
	const already = new Set(found);
	for (const placement of puzzle.placements) {
		if (already.has(placement.word)) continue;
		const sameCells = placement.cells.length === cells.length && placement.cells.every(([r, c], i) => r === cells[i][0] && c === cells[i][1]);
		const reverseCells = placement.cells.length === cells.length && placement.cells.every(([r, c], i) => r === cells[cells.length - 1 - i][0] && c === cells[cells.length - 1 - i][1]);
		if ((sameCells || reverseCells) && (normalized === placement.word || normalized === placement.word.split("").reverse().join(""))) return placement.word;
	}
	return null;
}
function scorePlaytest(total, elapsedMs, mistakes) {
	const speedBonus = Math.max(0, 40 - Math.floor(elapsedMs / 15e3));
	const accuracyBonus = Math.max(0, 40 - mistakes * 5);
	return Math.max(0, Math.min(100, Math.round((total ? 20 : 0) + speedBonus + accuracyBonus)));
}
function savePlaytestResult(result) {
	try {
		const current = JSON.parse(localStorage.getItem(KEY$1) || "[]");
		localStorage.setItem(KEY$1, JSON.stringify([result, ...current].slice(0, 50)));
	} catch {}
}
function listPlaytestResults() {
	try {
		const value = JSON.parse(localStorage.getItem(KEY$1) || "[]");
		return Array.isArray(value) ? value : [];
	} catch {
		return [];
	}
}
function CreatorPlaytestScreen() {
	const go = useGame.getState().go;
	const [drafts] = (0, import_react.useState)(() => listDrafts().filter((d) => d.status !== "archived"));
	const [selected, setSelected] = (0, import_react.useState)(drafts[0]?.id || "");
	const draft = (0, import_react.useMemo)(() => drafts.find((d) => d.id === selected), [drafts, selected]);
	const [puzzle, setPuzzle] = (0, import_react.useState)(() => draft ? buildPlayablePreview({
		words: draft.words,
		title: draft.title,
		category: draft.category,
		seed: hash(draft.id)
	}).puzzle : null);
	const [found, setFound] = (0, import_react.useState)([]);
	const [mistakes, setMistakes] = (0, import_react.useState)(0);
	const [startedAt, setStartedAt] = (0, import_react.useState)(() => Date.now());
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!draft) return;
		const result = buildPlayablePreview({
			words: draft.words,
			title: draft.title,
			category: draft.category,
			seed: hash(draft.id)
		});
		setPuzzle(result.puzzle);
		setFound([]);
		setMistakes(0);
		setDone(false);
		setStartedAt(Date.now());
		setElapsed(0);
	}, [selected]);
	(0, import_react.useEffect)(() => {
		if (done || !puzzle) return;
		const id = window.setInterval(() => setElapsed(Date.now() - startedAt), 1e3);
		return () => window.clearInterval(id);
	}, [
		done,
		puzzle,
		startedAt
	]);
	const restart = () => {
		setFound([]);
		setMistakes(0);
		setDone(false);
		setStartedAt(Date.now());
		setElapsed(0);
	};
	const onPath = (letters, cells) => {
		if (!puzzle) return "miss";
		const word = matchPlaytestPath(puzzle, letters, cells, found);
		if (!word) {
			setMistakes((x) => x + 1);
			return "miss";
		}
		const next = [...found, word];
		setFound(next);
		if (next.length === puzzle.placements.length) {
			const totalMs = Date.now() - startedAt;
			setElapsed(totalMs);
			setDone(true);
			savePlaytestResult({
				puzzleId: selected,
				title: draft?.title || "Creator puzzle",
				completed: true,
				elapsedMs: totalMs,
				mistakes,
				found: next,
				score: scorePlaytest(next.length, totalMs, mistakes),
				testedAt: Date.now()
			});
		}
		return "found";
	};
	const remaining = puzzle ? Math.max(0, puzzle.placements.length - found.length) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Creator Playtest",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V38 creator QA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Play your puzzle before publishing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "This is a real interaction test: solve every placed word, measure time and mistakes, and keep a local playtest result."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: selected,
						onChange: (e) => setSelected(e.target.value),
						className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Choose a Creator draft"
						}), drafts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: d.id,
							children: [
								d.title,
								" · ",
								d.words.length,
								" words"
							]
						}, d.id))]
					}), !draft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Create a playable draft in Creator Studio first."
					})]
				}),
				puzzle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-fg",
								children: draft?.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									remaining,
									" words remaining · ",
									mistakes,
									" mistakes"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hud-chip flex items-center gap-2 text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, { className: "size-4" }),
									Math.floor(elapsed / 6e4),
									":",
									String(Math.floor(elapsed / 1e3) % 60).padStart(2, "0")
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBoard, {
							puzzle,
							found,
							revealed: [],
							tileStyle: "carved",
							disabled: done,
							onPath
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: puzzle.words.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `hud-chip ${found.includes(w) ? "opacity-50 line-through" : ""} text-fg`,
								children: w
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: restart,
							className: "mt-4 flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Restart test"]
						}),
						done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Playtest complete" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-muted",
								children: [
									"Score: ",
									scorePlaytest(found.length, elapsed, mistakes),
									"/100 · ",
									mistakes,
									" mistakes · ",
									Math.round(elapsed / 1e3),
									" seconds"
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("playablePreview"),
						className: "text-sm text-primary",
						children: "← Playable Preview Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go("creator"),
						className: "text-sm text-primary",
						children: "Creator Studio →"
					})]
				})
			]
		})
	});
}
function hash(s) {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
	return h >>> 0;
}
function evaluatePublishReadiness(draftId) {
	const draft = listDrafts().find((d) => d.id === draftId);
	if (!draft) return null;
	const audit = auditPuzzleWordsLocal(draft.words);
	const playtests = listPlaytestResults().filter((r) => r.puzzleId === draftId);
	const latest = playtests[0];
	const blockers = [];
	const recommendations = [];
	if (!audit.ok) blockers.push("Puzzle QA audit is below the publish threshold.");
	if (!latest?.completed) blockers.push("Complete at least one full creator playtest.");
	if (latest && latest.score < 60) blockers.push("Latest playtest score is below 60.");
	if (draft.words.length < 5) recommendations.push("Add more target words for a richer puzzle.");
	if (audit.score < 80) recommendations.push("Improve word-length variety and vocabulary quality.");
	if (latest && latest.mistakes > Math.max(2, Math.ceil(draft.words.length * .25))) recommendations.push("Retest after checking ambiguous or hard-to-find placements.");
	return {
		draft,
		audit,
		playtests,
		latest,
		score: Math.round(Math.min(100, audit.score) * .6 + (latest ? latest.score * .4 : 0)),
		ready: blockers.length === 0,
		blockers,
		recommendations
	};
}
function listPublishCandidates() {
	return listDrafts().filter((d) => d.status !== "archived").map((d) => evaluatePublishReadiness(d.id)).filter((x) => Boolean(x));
}
function canonicalReleaseData(draft, readiness) {
	return JSON.stringify({
		id: draft.id,
		title: draft.title,
		words: draft.words,
		category: draft.category,
		createdAt: draft.createdAt,
		updatedAt: draft.updatedAt,
		status: draft.status,
		readiness: {
			score: readiness.score,
			ready: readiness.ready,
			blockers: readiness.blockers,
			recommendations: readiness.recommendations,
			auditScore: readiness.audit.score,
			latestPlaytestScore: readiness.latest?.score ?? null
		}
	});
}
function fnv1a(input) {
	let h = 2166136261;
	for (let i = 0; i < input.length; i++) h = Math.imul(h ^ input.charCodeAt(i), 16777619);
	return (h >>> 0).toString(16).padStart(8, "0");
}
async function digestFor(input) {
	try {
		if (globalThis.crypto?.subtle) {
			const bytes = new TextEncoder().encode(input);
			const hash = await crypto.subtle.digest("SHA-256", bytes);
			return {
				algorithm: "SHA-256",
				digest: Array.from(new Uint8Array(hash)).map((x) => x.toString(16).padStart(2, "0")).join("")
			};
		}
	} catch {}
	return {
		algorithm: "FNV-1a",
		digest: fnv1a(input)
	};
}
async function buildReleasePackage(draftId) {
	const draft = listDrafts().find((d) => d.id === draftId);
	if (!draft) return null;
	const readiness = evaluatePublishReadiness(draftId);
	if (!readiness) return null;
	const data = canonicalReleaseData(draft, readiness);
	return {
		schema: "mera-word-search-journey.creator-release",
		version: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		appVersion: "v40",
		draft,
		readiness: {
			score: readiness.score,
			ready: readiness.ready,
			blockers: readiness.blockers,
			recommendations: readiness.recommendations,
			auditScore: readiness.audit.score,
			latestPlaytestScore: readiness.latest?.score ?? null
		},
		integrity: await digestFor(data)
	};
}
function listReleaseCandidates() {
	return listDrafts().filter((d) => d.status !== "archived").map((d) => ({
		draft: d,
		readiness: evaluatePublishReadiness(d.id)
	})).filter((x) => x.readiness);
}
function downloadReleasePackage(pkg) {
	const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${pkg.draft.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "creator-puzzle"}-release-v40.json`;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 0);
}
function ReleasePackageScreen() {
	const go = useGame.getState().go;
	const candidates = (0, import_react.useMemo)(() => listReleaseCandidates(), []);
	const [selected, setSelected] = (0, import_react.useState)(candidates[0]?.draft.id || "");
	const [pkg, setPkg] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const build = async () => {
		setBusy(true);
		try {
			setPkg(await buildReleasePackage(selected));
		} finally {
			setBusy(false);
		}
	};
	const item = candidates.find((x) => x.draft.id === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Release Package",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V40 creator delivery"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Package a verified puzzle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Creates a portable JSON release artifact containing the draft, publish-readiness snapshot and an integrity digest. It never publishes automatically."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: selected,
						onChange: (e) => {
							setSelected(e.target.value);
							setPkg(null);
						},
						className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Choose a Creator draft"
						}), candidates.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: x.draft.id,
							children: [
								x.draft.title,
								" · ",
								x.readiness?.score ?? 0,
								"/100"
							]
						}, x.draft.id))]
					}), item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Readiness: ",
							item.readiness?.ready ? "Ready" : "Needs another pass",
							" · QA ",
							item.readiness?.audit.score,
							"/100"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					disabled: !selected || busy,
					onClick: build,
					className: "flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-fg disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheck2, { className: "size-4" }), busy ? "Building package…" : "Build verified release package"]
				}),
				pkg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Release artifact ready" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Puzzle:"
									}),
									" ",
									pkg.draft.title
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Readiness:"
									}),
									" ",
									pkg.readiness.score,
									"/100 · ",
									pkg.readiness.ready ? "ready" : "blocked"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Integrity:"
									}),
									" ",
									pkg.integrity.algorithm
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "break-all",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											className: "text-fg",
											children: "Digest:"
										}),
										" ",
										pkg.integrity.digest
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => downloadReleasePackage(pkg),
							className: "flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export JSON package"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("publishReadiness"),
							className: "text-sm text-primary",
							children: "← Publish Readiness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("creator"),
							className: "text-sm text-primary",
							children: "Creator Studio →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("more"),
							className: "text-sm text-muted",
							children: "More"
						})
					]
				})
			]
		})
	});
}
function isObject(value) {
	return typeof value === "object" && value !== null;
}
async function verifyReleasePackage(input) {
	const issues = [];
	if (!isObject(input)) return {
		validSchema: false,
		digestMatches: false,
		readinessConsistent: false,
		verified: false,
		issues: ["Package must be a JSON object."]
	};
	const pkg = input;
	const validSchema = pkg.schema === "mera-word-search-journey.creator-release" && pkg.version === 1 && !!pkg.draft && !!pkg.readiness && !!pkg.integrity;
	if (!validSchema) issues.push("Unsupported or incomplete release-package schema.");
	let digestMatches = false;
	if (validSchema && pkg.draft && pkg.readiness && pkg.integrity) {
		const readiness = pkg.readiness;
		digestMatches = (await digestFor(JSON.stringify({
			id: pkg.draft.id,
			title: pkg.draft.title,
			words: pkg.draft.words,
			category: pkg.draft.category,
			createdAt: pkg.draft.createdAt,
			updatedAt: pkg.draft.updatedAt,
			status: pkg.draft.status,
			readiness: {
				score: readiness.score,
				ready: readiness.ready,
				blockers: readiness.blockers,
				recommendations: readiness.recommendations,
				auditScore: readiness.auditScore,
				latestPlaytestScore: readiness.latestPlaytestScore
			}
		}))).digest === pkg.integrity.digest;
		if (!digestMatches) issues.push("Integrity digest does not match the package contents.");
	}
	const readinessConsistent = validSchema && typeof pkg.readiness?.score === "number" && pkg.readiness.score >= 0 && pkg.readiness.score <= 100 && typeof pkg.readiness.ready === "boolean";
	if (!readinessConsistent) issues.push("Publish-readiness data is invalid.");
	return {
		validSchema,
		digestMatches,
		readinessConsistent,
		verified: validSchema && digestMatches && readinessConsistent,
		issues
	};
}
function parseReleasePackage(text) {
	return JSON.parse(text);
}
function ReleaseVerifierScreen() {
	const go = useGame.getState().go;
	const [result, setResult] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const inspect = async (file) => {
		setBusy(true);
		setName(file.name);
		setResult(null);
		try {
			const text = await file.text();
			setResult(await verifyReleasePackage(parseReleasePackage(text)));
		} catch (error) {
			setResult({
				validSchema: false,
				digestMatches: false,
				readinessConsistent: false,
				verified: false,
				issues: [error instanceof Error ? `Invalid JSON: ${error.message}` : "Could not read this package."]
			});
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Release Verifier",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V41 creator verification"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Verify a release package"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Import a V40 release JSON and independently check its schema, readiness data and integrity digest. Verification is local and never uploads the file."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "panel flex cursor-pointer items-center justify-center gap-3 rounded-2xl p-5 text-sm font-semibold text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: busy ? "Verifying…" : name || "Choose release JSON" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json,.json",
							className: "sr-only",
							disabled: busy,
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (file) inspect(file);
							}
						})
					]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-fg",
							children: [result.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: result.verified ? "Package verified" : "Verification failed" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Schema:"
									}),
									" ",
									result.validSchema ? "valid" : "invalid"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Integrity:"
									}),
									" ",
									result.digestMatches ? "matches" : "does not match"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "text-fg",
										children: "Readiness:"
									}),
									" ",
									result.readinessConsistent ? "valid" : "invalid"
								] })
							]
						}),
						result.issues.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-2",
							children: result.issues.map((issue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-xl border border-border p-3 text-sm text-muted",
								children: issue
							}, issue))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("releasePackage"),
							className: "text-sm text-primary",
							children: "← Release Package"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("creator"),
							className: "text-sm text-primary",
							children: "Creator Studio →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("more"),
							className: "text-sm text-muted",
							children: "More"
						})
					]
				})
			]
		})
	});
}
var KEY = "mera-word-search.release-archive.v1";
function read() {
	try {
		const raw = localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function write(items) {
	localStorage.setItem(KEY, JSON.stringify(items.slice(0, 100)));
}
async function archiveRelease(input, fileName = "release.json") {
	const check = await verifyReleasePackage(input);
	if (!check.verified) throw new Error(check.issues[0] ?? "Release package is not verified.");
	const pkg = input;
	const items = read().filter((x) => x.package.integrity.digest !== pkg.integrity.digest);
	const entry = {
		archiveId: `${pkg.draft.id}:${pkg.integrity.digest.slice(0, 12)}`,
		importedAt: (/* @__PURE__ */ new Date()).toISOString(),
		fileName,
		package: pkg,
		verifiedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	write([entry, ...items]);
	return entry;
}
function listArchivedReleases() {
	return read();
}
function removeArchivedRelease(archiveId) {
	write(read().filter((x) => x.archiveId !== archiveId));
}
function exportArchiveManifest(items = read()) {
	return JSON.stringify({
		schema: "mera-word-search.creator-release-archive",
		version: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		count: items.length,
		releases: items.map((x) => ({
			archiveId: x.archiveId,
			importedAt: x.importedAt,
			fileName: x.fileName,
			draftId: x.package.draft.id,
			title: x.package.draft.title,
			status: x.package.draft.status,
			readinessScore: x.package.readiness.score,
			ready: x.package.readiness.ready,
			algorithm: x.package.integrity.algorithm,
			digest: x.package.integrity.digest
		}))
	}, null, 2);
}
function download(text, name) {
	const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 0);
}
function ReleaseArchiveScreen() {
	const go = useGame.getState().go;
	const [items, setItems] = (0, import_react.useState)(listArchivedReleases());
	const [message, setMessage] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const refresh = () => setItems(listArchivedReleases());
	const readyCount = (0, import_react.useMemo)(() => items.filter((x) => x.package.readiness.ready).length, [items]);
	const inspect = async (file) => {
		setBusy(true);
		setMessage("");
		try {
			const entry = await archiveRelease(parseReleasePackage(await file.text()), file.name);
			refresh();
			setMessage(`Archived “${entry.package.draft.title}” after local verification.`);
		} catch (e) {
			setMessage(e instanceof Error ? e.message : "Could not archive package.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Release Archive",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V42 local release catalog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Verified release archive"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Keep verified Creator release packages on this device, deduplicate by integrity digest, and export a lightweight catalog manifest. Files remain local."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "panel flex cursor-pointer items-center justify-center gap-3 rounded-2xl p-5 text-sm font-semibold text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: busy ? "Verifying & archiving…" : "Import verified release JSON" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json,.json",
							className: "sr-only",
							disabled: busy,
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) inspect(f);
							}
						})
					]
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-border p-3 text-sm text-muted",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
								items.length,
								" archived release",
								items.length === 1 ? "" : "s"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-auto text-xs text-muted",
								children: [readyCount, " ready"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3",
						children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "No releases archived yet. Import a verified JSON package."
						}) : items.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "rounded-xl border border-border p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: "text-fg",
												children: x.package.draft.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-xs text-muted",
												children: [
													x.fileName,
													" · readiness ",
													x.package.readiness.score,
													"/100 · ",
													x.package.readiness.ready ? "ready" : "blocked"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 break-all font-mono text-[10px] text-muted",
												children: [
													x.package.integrity.algorithm,
													": ",
													x.package.integrity.digest
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": `Remove ${x.package.draft.title}`,
										onClick: () => {
											removeArchivedRelease(x.archiveId);
											refresh();
										},
										className: "text-muted hover:text-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})
								]
							})
						}, x.archiveId))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: !items.length,
							onClick: () => download(exportArchiveManifest(items), "creator-release-archive-v42.json"),
							className: "flex items-center gap-2 text-sm text-primary disabled:opacity-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export archive manifest"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("releaseVerifier"),
							className: "text-sm text-primary",
							children: "← Release Verifier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("releasePackage"),
							className: "text-sm text-primary",
							children: "Release Package →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("more"),
							className: "text-sm text-muted",
							children: "More"
						})
					]
				})
			]
		})
	});
}
function PublishReadinessScreen() {
	const go = useGame.getState().go;
	const candidates = (0, import_react.useMemo)(() => listPublishCandidates(), []);
	const [selected, setSelected] = (0, import_react.useState)(candidates[0]?.draft.id || "");
	const [refresh, setRefresh] = (0, import_react.useState)(0);
	const result = (0, import_react.useMemo)(() => evaluatePublishReadiness(selected), [selected, refresh]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Publish Readiness",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-primary",
							children: "V39 creator release gate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-1 text-2xl text-fg",
							children: "Know when your puzzle is ready"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Combines Puzzle QA and real creator playtest results into one offline release check. This gate does not publish anything automatically."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: selected,
						onChange: (e) => setSelected(e.target.value),
						className: "w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Choose a Creator draft"
						}), candidates.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: x.draft.id,
							children: [
								x.draft.title,
								" · ",
								x.score,
								"/100"
							]
						}, x.draft.id))]
					}), !result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Create a Creator draft first."
					})]
				}),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									result.draft.category,
									" · ",
									result.draft.words.length,
									" words"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-fg",
								children: result.draft.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hud-chip text-fg",
								children: [result.score, "/100"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-2 text-fg",
							children: [result.ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: result.ready ? "Ready for publish" : "Needs another pass" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-2xl p-4 grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Quality gate" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-auto text-sm text-muted",
										children: [result.audit.score, "/100"]
									})
								]
							}),
							result.audit.issues.length ? result.audit.issues.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: ["• ", x]
							}, x)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "No structural blockers from the local QA audit."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-fg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "size-5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Playtest" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-sm text-muted",
										children: result.latest ? `${result.latest.score}/100 · ${result.latest.mistakes} mistakes` : "Not completed"
									})
								]
							})
						]
					}),
					result.blockers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-fg",
							children: "Blockers"
						}), result.blockers.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: ["• ", x]
						}, x))]
					}),
					result.recommendations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "panel rounded-2xl p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-fg",
							children: "Recommendations"
						}), result.recommendations.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted",
							children: ["• ", x]
						}, x))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setRefresh((x) => x + 1),
						className: "flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Re-check readiness"]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("creatorPlaytest"),
							className: "text-sm text-primary",
							children: "Creator Playtest →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("creator"),
							className: "text-sm text-primary",
							children: "Creator Studio →"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => go("more"),
							className: "text-sm text-muted",
							children: "Back to More"
						})
					]
				})
			]
		})
	});
}
var modes = [
	"normal",
	"silhouette",
	"sound"
];
var difficulties = [
	"easy",
	"medium",
	"hard"
];
var loadWildWhispersCloud = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("dc6a5ac3b5925cbe7409cef2efa22a0ded7ffd9d5e2556b40074f0ec48438c85"));
/** Starts an opaque server-authoritative round. The client never submits score/lives/streak. */
var startWildChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("0328babf9660aaa036016c133766138b68d9d0f900cb36a43cfcc81496f73b70"));
/** Awards Wild Whispers progress from the server-side challenge only. */
var answerWildChallenge = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({ selectedAnimalId: String(d.selectedAnimalId ?? "").slice(0, 64) })).handler(createSsrRpc("2203e48f7602778cc77be4e403a6a8e45240de39af38f6d276347092d28ea440"));
/** Only settings are client-controlled. Scores, lives, streaks and discoveries are server-controlled. */
var saveWildWhispersSettings = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => ({
	mode: modes.includes(d.mode) ? d.mode : "medium",
	difficulty: difficulties.includes(d.difficulty) ? d.difficulty : "medium",
	expectedRevision: Number.isFinite(d.expectedRevision) ? Math.max(0, Math.floor(Number(d.expectedRevision))) : void 0
})).handler(createSsrRpc("7761324f2c4e6e34bb46d73aabe8f79fcb19cfdcce72bfe959eafd043f87179e"));
function WildWhispersScreen({ onBack }) {
	const [progress, setProgress] = (0, import_react.useState)(loadWildProgress());
	const [animalId, setAnimalId] = (0, import_react.useState)(WILD_ANIMALS[0].id);
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const [cloudRevision, setCloudRevision] = (0, import_react.useState)(0);
	const [challengePending, setChallengePending] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadWildWhispersCloud().then((remote) => {
			if (!remote.ok) return;
			if (remote.progress) {
				saveWildProgress(remote.progress);
				setProgress(remote.progress);
			} else setProgress(loadWildProgress());
			setCloudRevision(remote.revision);
		}).catch(() => {});
	}, []);
	(0, import_react.useEffect)(() => {
		setChallengePending(true);
		startWildChallenge().then((r) => {
			if (r.ok) {
				setAnimalId(r.animalId);
				setCloudRevision(r.revision);
			}
		}).catch(() => {}).finally(() => setChallengePending(false));
	}, []);
	const animal = (0, import_react.useMemo)(() => WILD_ANIMALS.find((x) => x.id === animalId) ?? WILD_ANIMALS[0], [animalId]);
	const choices = (0, import_react.useMemo)(() => {
		return [...WILD_ANIMALS.filter((x) => x.id !== animal.id).sort(() => Math.random() - .5).slice(0, 3), animal].sort(() => Math.random() - .5);
	}, [animal.id, progress.gamesPlayed]);
	const answer = (id) => {
		if (challengePending) return;
		setChallengePending(true);
		answerWildChallenge({ data: { selectedAnimalId: id } }).then((r) => {
			if (!r.ok) {
				setFeedback(r.error || "Unable to submit answer.");
				return;
			}
			setProgress(r.progress);
			setCloudRevision(r.revision);
			const found = WILD_ANIMALS.find((x) => x.id === r.animalId) ?? animal;
			setFeedback(r.correct ? `Correct! ${found.name} discovered.` : `Not quite. The answer was ${found.name}.`);
			return startWildChallenge();
		}).then((next) => {
			if (next?.ok) {
				setAnimalId(next.animalId);
				setCloudRevision(next.revision);
			}
		}).catch(() => {}).finally(() => setChallengePending(false));
	};
	const setMode = (mode) => {
		const next = {
			...progress,
			mode
		};
		setProgress(next);
		saveWildProgress(next);
		saveWildWhispersSettings({ data: {
			mode,
			difficulty: next.difficulty,
			expectedRevision: cloudRevision
		} }).then((r) => {
			if (r.ok) {
				setCloudRevision(r.revision);
				if (r.progress) {
					setProgress(r.progress);
					saveWildProgress(r.progress);
				}
			}
		}).catch(() => {});
	};
	const setDifficulty = (difficulty) => {
		const next = {
			...progress,
			difficulty
		};
		setProgress(next);
		saveWildProgress(next);
		saveWildWhispersSettings({ data: {
			mode: next.mode,
			difficulty,
			expectedRevision: cloudRevision
		} }).then((r) => {
			if (r.ok) {
				setCloudRevision(r.revision);
				if (r.progress) {
					setProgress(r.progress);
					saveWildProgress(r.progress);
				}
			}
		}).catch(() => {});
	};
	const unlocked = (id) => id === "wild-first" ? progress.discovered.length >= 1 : id === "wild-streak" ? progress.bestStreak >= 5 : id === "wild-scholar" ? progress.discovered.length >= 10 : new Set(WILD_ANIMALS.filter((a) => progress.discovered.includes(a.id)).map((a) => a.habitat)).size >= 5;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		title: "Wild Whispers",
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-accent",
								children: "Educational mode"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-fg",
								children: "Animal Discovery"
							})] }), wildAnimalArt(animal.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: wildAnimalArt(animal.id),
								alt: animal.name,
								className: "h-16 w-16 object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								children: animal.emoji
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: progress.mode === "sound" ? "Listen to the clue, then identify the animal." : progress.mode === "silhouette" ? "Use the silhouette-style clue." : "Read the clue and identify the animal."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-3 gap-2",
							children: WILD_MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMode(m.id),
								className: `hud-chip ${progress.mode === m.id ? "ring-2 ring-primary" : ""}`,
								children: m.title
							}, m.id))
						}),
						progress.mode === "sound" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn-primary mt-3 w-full",
							onClick: () => speakWildClue(animal),
							children: "🔊 Play clue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-xl bg-surface-2 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase text-muted",
								children: "Clue"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: progress.mode === "silhouette" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 inline-block h-16 w-16 overflow-hidden grayscale brightness-0",
									children: wildAnimalArt(animal.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: wildAnimalArt(animal.id),
										alt: "",
										className: "h-16 w-16 object-contain"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-5xl",
										children: animal.emoji
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"A four-legged animal from the ",
									animal.habitat,
									"."
								] })] }) : animal.fact
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: choices.map((choice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => answer(choice.id),
								className: "panel rounded-xl p-3 text-left",
								children: [
									wildAnimalArt(choice.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: wildAnimalArt(choice.id),
										alt: "",
										className: "mb-2 h-12 w-12 object-contain"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-fg",
										children: choice.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted",
										children: choice.urdu
									})
								]
							}, choice.id))
						}),
						feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold text-accent",
							children: feedback
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Difficulty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-3 gap-2",
						children: [
							"easy",
							"medium",
							"hard"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `hud-chip ${progress.difficulty === d ? "ring-2 ring-primary" : ""}`,
							onClick: () => setDifficulty(d),
							children: d[0].toUpperCase() + d.slice(1)
						}, d))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Lives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xl font-bold text-fg",
								children: ["❤️".repeat(progress.lives), "🖤".repeat(3 - progress.lives)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Streak"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl font-bold text-fg",
								children: progress.streak
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Score"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl font-bold text-fg",
								children: progress.score
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "Discovered"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xl font-bold text-fg",
								children: [
									progress.discovered.length,
									"/",
									WILD_ANIMALS.length
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Achievements & Trophies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: WILD_ACHIEVEMENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl bg-surface-2 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-fg",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: a.detail
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: unlocked(a.id) ? "🏆" : "🔒" })]
						}, a.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-fg",
							children: "Nature Library"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: "Discovered animals stay available as learning cards."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-2",
							children: WILD_ANIMALS.filter((a) => progress.discovered.includes(a.id)).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface-2 p-3",
								children: [
									wildAnimalArt(a.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: wildAnimalArt(a.id),
										alt: a.name,
										className: "h-12 w-12 object-contain"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: a.emoji
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-semibold text-fg",
										children: a.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											a.urdu,
											" · ",
											a.habitat
										]
									})
								]
							}, a.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "panel rounded-2xl p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-fg",
						children: "Parent Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2 gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Games played"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-fg",
									children: progress.gamesPlayed
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Best streak"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-fg",
									children: progress.bestStreak
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Animals learned"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-fg",
									children: progress.discovered.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface-2 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Mode"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block text-fg",
									children: progress.mode
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function KidsLockOverlay() {
	const locked = useGame((s) => s.save.settings.parentalLock);
	const [active, setActive] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [setup, setSetup] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!locked) {
			setActive(false);
			return;
		}
		let cancelled = false;
		hasKidsLockPin().then((hasPin) => {
			if (cancelled) return;
			setSetup(!hasPin);
			setActive(true);
			if (hasPin) requestKidsFullscreen();
		});
		return () => {
			cancelled = true;
		};
	}, [locked]);
	(0, import_react.useEffect)(() => {
		if (!active || !locked) return;
		const onFullscreen = () => setActive(Boolean(locked));
		document.addEventListener("fullscreenchange", onFullscreen);
		const onVisibility = () => {
			if (document.visibilityState === "visible") requestKidsFullscreen();
		};
		document.addEventListener("visibilitychange", onVisibility);
		return () => {
			document.removeEventListener("fullscreenchange", onFullscreen);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, [active, locked]);
	if (!locked || !active) return null;
	const unlock = async () => {
		setError("");
		if (setup) {
			if (!await setKidsLockPin(pin)) {
				setError("Choose a 6-digit parent PIN.");
				return;
			}
			setSetup(false);
			setPin("");
			await requestKidsFullscreen();
			return;
		}
		if (!await verifyKidsLockPin(pin)) {
			setError("Wrong parent PIN.");
			setPin("");
			return;
		}
		useGame.getState().setSetting("parentalLock", false);
		setActive(false);
		await exitKidsFullscreen();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6 text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex size-16 items-center justify-center rounded-full bg-white/10",
					children: setup ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "size-8" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-2xl font-bold",
					children: setup ? "Parent PIN" : "Kids Lock"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: setup ? "Create a PIN only a parent knows. Kids cannot leave the learning area through the app." : "Parent PIN is required to leave Kids Lock."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					inputMode: "numeric",
					type: "password",
					maxLength: 6,
					value: pin,
					onChange: (e) => setPin(e.target.value.replace(/\D/g, "")),
					onKeyDown: (e) => {
						if (e.key === "Enter") unlock();
					},
					placeholder: "6-digit PIN",
					className: "mt-5 w-full rounded-2xl bg-white px-4 py-4 text-center text-xl tracking-[0.4em] text-black outline-none",
					autoFocus: true
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-red-300",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => void unlock(),
					className: "mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-bold text-black",
					children: setup ? "Save PIN & Start" : "Unlock for Parent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void requestKidsFullscreen(),
					className: "mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-4" }), " Keep Fullscreen"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-[11px] leading-4 text-white/45",
					children: "Kids Lock is an in-app safety layer. Android/iOS system navigation and other apps cannot be blocked by a normal website; for full device lockdown use Android Screen Pinning/App Pinning or a managed kiosk mode."
				})
			]
		})
	});
}
function GameApp() {
	const ready = useGame((s) => s.ready);
	const screen = useGame((s) => s.screen);
	const save = useGame((s) => s.save);
	const toast = useGame((s) => s.toast);
	(0, import_react.useEffect)(() => {
		useGame.getState().hydrate();
		const offV10 = installLiveOpsBridge();
		const offV14 = installV14LiveOpsBridge();
		const offPwa = registerPwa(() => {
			const id = Date.now();
			useGame.setState({ toast: {
				id,
				text: "A new app update is ready."
			} });
		});
		return () => {
			offV10();
			offV14();
			offPwa();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			const cur = useGame.getState().save;
			const next = refillEnergy(cur);
			if (next.energy !== cur.energy || next.energyAt !== cur.energyAt) {
				writeSave(next);
				useGame.setState({ save: next });
			}
		}, 15e3);
		const onHide = () => {
			if (document.visibilityState === "hidden") useGame.getState().persist();
		};
		document.addEventListener("visibilitychange", onHide);
		window.addEventListener("pagehide", () => useGame.getState().persist());
		return () => {
			clearInterval(id);
			document.removeEventListener("visibilitychange", onHide);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		const root = document.documentElement;
		root.dataset.theme = save.equippedTheme;
		root.dataset.contrast = save.settings.highContrast ? "high" : "";
		root.dataset.large = save.settings.largeText ? "1" : "";
		root.dir = isRtl(save.language, save.settings.rtlForce) ? "rtl" : "ltr";
		root.lang = save.language.startsWith("ur") ? "ur" : save.language;
		root.classList.toggle("no-scroll", true);
		root.dataset.dyslexia = save.settings.dyslexiaFriendly ? "1" : "";
		root.dataset.focus = save.settings.focusMode ? "1" : "";
		applyVolumes({
			master: save.settings.masterVol,
			sfx: save.settings.sfxVol,
			music: save.settings.musicVol,
			sfxOn: save.settings.sfx,
			musicOn: save.settings.music
		});
	}, [
		ready,
		save.equippedTheme,
		save.settings,
		save.language
	]);
	(0, import_react.useEffect)(() => {
		const onFirst = () => {
			unlockAudio();
			if (useGame.getState().save.settings.music) startMusic();
		};
		window.addEventListener("pointerdown", onFirst, { once: true });
		return () => window.removeEventListener("pointerdown", onFirst);
	}, []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyLoading, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V9Status, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenView, { screen }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KidsLockOverlay, {}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel animate-pop rounded-full px-4 py-2 text-sm font-semibold text-fg",
					children: toast.text
				})
			})
		]
	});
}
function ScreenView({ screen }) {
	switch (screen) {
		case "splash": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashScreen, {});
		case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {});
		case "worlds": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldsScreen, {});
		case "modes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModesScreen, {});
		case "play": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {});
		case "shop": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopScreen, {});
		case "pets": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetsScreen, {});
		case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {});
		case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsScreen, {});
		case "achievements": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementsScreen, {});
		case "stats": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsScreen, {});
		case "daily": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyScreen, {});
		case "spin": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpinScreen, {});
		case "story": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryScreen, {});
		case "dictionary": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DictionaryScreen, {});
		case "leaderboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderboardScreen, {});
		case "inventory": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryScreen, {});
		case "skills": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsScreen, {});
		case "base": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseScreen, {});
		case "equipment": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentScreen, {});
		case "combat": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatScreen, {});
		case "worldMap": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMapScreen, {});
		case "storyQuests": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryQuestScreen, {});
		case "dialogue": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogueScreen, {});
		case "npcs": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NPCScreen, {});
		case "missions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionsScreen, {});
		case "legal": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalScreen, {});
		case "social": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialScreen, {});
		case "liveOps": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(V14LiveOpsScreen, {});
		case "systems": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemsScreen, {});
		case "multiplayer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiplayerScreen, { onBack: () => useGame.getState().setScreen("more") });
		case "admin": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminScreen, { onBack: () => useGame.getState().setScreen("more") });
		case "payments": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsScreen, { onBack: () => useGame.getState().setScreen("more") });
		case "content": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentLanguagesScreen, {});
		case "saveSlots": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveSlotsScreen, { onBack: () => useGame.getState().setScreen("more") });
		case "creator": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatorScreen, {});
		case "progression": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressionHubScreen, {});
		case "seasonProgress": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonProgressScreen, {});
		case "analytics": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsScreen, {});
		case "accessibility": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibilityScreen, {});
		case "pwa": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PwaScreen, {});
		case "pushSettings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PushSettingsScreen, {});
		case "coach": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoachScreen, {});
		case "adaptive": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdaptiveScreen, {});
		case "journeyPlanner": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyPlannerScreen, {});
		case "voice": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceCommandScreen, {});
		case "aiPuzzleLab": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIPuzzleLabScreen, {});
		case "puzzleAudit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuzzleAuditScreen, {});
		case "playablePreview": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayablePreviewScreen, {});
		case "creatorPlaytest": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatorPlaytestScreen, {});
		case "publishReadiness": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishReadinessScreen, {});
		case "releasePackage": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleasePackageScreen, {});
		case "releaseVerifier": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseVerifierScreen, {});
		case "releaseArchive": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReleaseArchiveScreen, {});
		case "wildWhispers": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WildWhispersScreen, { onBack: () => useGame.getState().setScreen("more") });
		case "preschool": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreschoolLearningScreen, { onBack: () => useGame.getState().go("splash") });
		case "creatorCommunity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatorCommunityScreen, {});
		case "more": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreScreen, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {});
	}
}
var GameErrorBoundary = class extends import_react.Component {
	state = {
		hasError: false,
		message: ""
	};
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			message: error instanceof Error ? error.message : "Unknown application error"
		};
	}
	componentDidCatch(error, info) {
		console.error("[Mera Word Search Journey] UI error:", error, info);
	}
	reload = () => {
		window.location.reload();
	};
	render() {
		if (!this.state.hasError) return this.props.children;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "app-shell safe-pad grid min-h-dvh place-items-center p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel w-full max-w-md rounded-3xl p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl text-fg",
						children: "Mera Word Search Journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Something unexpected happened. Reload to keep your local progress."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mt-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer text-xs font-semibold text-muted",
							children: "Technical details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-2 max-h-32 overflow-auto whitespace-pre-wrap text-xs text-muted",
							children: this.state.message
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: this.reload,
						className: "mt-5 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white",
						children: "Reload Game"
					})
				]
			})
		});
	}
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameApp, {}) });
}
//#endregion
export { Home as component };
