/** Local preschool audio + procedural UI SFX. Unlocks on first gesture. */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let sfx: GainNode | null = null;
let music: GainNode | null = null;
let musicTimer: number | null = null;
let unlocked = false;

type Vol = { master: number; sfx: number; music: number; sfxOn: boolean; musicOn: boolean };
const vol: Vol = { master: 0.8, sfx: 0.7, music: 0.45, sfxOn: true, musicOn: true };

function curve(v: number) {
  return v * v;
}

export function applyVolumes(next: Partial<Vol>) {
  Object.assign(vol, next);
  if (master) master.gain.setTargetAtTime(curve(vol.master), ctx!.currentTime, 0.03);
  if (sfx) sfx.gain.setTargetAtTime(vol.sfxOn ? curve(vol.sfx) : 0, ctx!.currentTime, 0.03);
  if (music) music.gain.setTargetAtTime(vol.musicOn ? curve(vol.music) : 0, ctx!.currentTime, 0.05);
}

export function unlockAudio() {
  if (typeof window === "undefined") return;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
  if (ctx.state === "suspended") void ctx.resume();
  unlocked = true;
}

function beep(freq: number, dur: number, type: OscillatorType, gain = 0.08, slide = 0) {
  if (!ctx || !sfx || !vol.sfxOn) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  g.connect(sfx);
  o.start(t);
  o.stop(t + dur + 0.02);
}

export const sfxPlay = {
  tap: () => beep(620, 0.05, "triangle", 0.04),
  select: () => beep(480, 0.07, "sine", 0.05),
  found: (combo = 1) => {
    const base = combo >= 5 ? 660 : combo >= 3 ? 587 : 523;
    beep(base, 0.09, "triangle", 0.07);
    setTimeout(() => beep(base * 1.5, 0.12, "triangle", 0.06), 70);
  },
  miss: () => beep(180, 0.16, "sawtooth", 0.04, -80),
  win: () => {
    [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 0.16, "triangle", 0.07), i * 90));
  },
  coin: () => beep(980, 0.1, "square", 0.035, 200),
  hint: () => beep(440, 0.14, "sine", 0.05, 120),
  spin: () => beep(360, 0.08, "square", 0.04),
};

export function startMusic(worldIndex = 0) {
  if (!ctx || !music || !vol.musicOn) return;
  stopMusic();
  const worlds = [[196,247,294,330,392,330,294,247],[220,277,330,370,440,370,330,277],[146,185,220,277,330,277,220,185],[174,220,261,329,392,329,261,220],[196,233,293,349,440,349,293,233],[247,294,370,440,554,440,370,294]];
  const notes = worlds[Math.max(0, Math.min(5, worldIndex))]!;
  let i = 0;
  const step = () => {
    if (!ctx || !music || !vol.musicOn) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = notes[i % notes.length]!;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.035, t + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    o.connect(g);
    g.connect(music);
    o.start(t);
    o.stop(t + 0.75);
    i++;
    musicTimer = window.setTimeout(step, 780);
  };
  step();
}

export function stopMusic() {
  if (musicTimer != null) {
    clearTimeout(musicTimer);
    musicTimer = null;
  }
}

export function playBundledAudio(src: string) {
  unlockAudio();
  if (typeof window === "undefined") return null;
  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = Math.min(1, curve(vol.master) * curve(vol.sfx));
  if (!vol.sfxOn) {
    audio.volume = 0;
  }
  void audio.play().catch(() => {
    /* Browser may block autoplay; caller can fall back to speech. */
  });
  return audio;
}

/** Kid-friendly bundled animal/bird sounds. Files live under public/offline/preschool/audio.
 * A procedural fallback remains available if a browser blocks local media playback. */
export type AnimalSoundId =
  | "lion" | "elephant" | "tiger" | "fox" | "wolf" | "monkey" | "frog" | "snake" | "crocodile" | "bear" | "panda"
  | "parrot" | "owl" | "eagle" | "penguin" | "flamingo" | "duck" | "peacock" | "chicken" | "bee";

export function playAnimalSound(id: AnimalSoundId) {
  unlockAudio();
  if (typeof window !== "undefined") {
    // Local WAVs are bundled with the preschool offline pack. No network request is made.
    const audio = new Audio(`/offline/preschool/audio/animals/${id}.wav`);
    audio.preload = "auto";
    audio.volume = Math.min(1, curve(vol.master) * curve(vol.sfx));
    void audio.play().catch(() => {
      // If a browser blocks media playback, keep the existing synthesized fallback.
      playProceduralAnimalSound(id);
    });
    return;
  }
  playProceduralAnimalSound(id);
}

function playProceduralAnimalSound(id: AnimalSoundId) {
  unlockAudio();
  if (!ctx || !sfx || !vol.sfxOn) return;
  const now = ctx.currentTime;
  const tone = (frequency: number, duration: number, gain = 0.09, type: OscillatorType = "sine", offset = 0) => {
    const o = ctx!.createOscillator(); const g = ctx!.createGain();
    o.type = type; o.frequency.setValueAtTime(frequency, now + offset);
    g.gain.setValueAtTime(0.0001, now + offset);
    g.gain.exponentialRampToValueAtTime(gain, now + offset + 0.025);
    g.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
    o.connect(g); g.connect(sfx!); o.start(now + offset); o.stop(now + offset + duration + 0.03);
  };
  const pattern: Record<AnimalSoundId, () => void> = {
    lion: () => { tone(120, .45, .12, "sawtooth"); tone(95, .5, .1, "sawtooth", .22); }, elephant: () => { tone(180, .28, .1, "triangle"); tone(330, .42, .08, "triangle", .18); }, tiger: () => { tone(145, .35, .11, "sawtooth"); tone(115, .35, .1, "sawtooth", .2); }, fox: () => { tone(650, .12, .07, "square"); tone(780, .15, .06, "square", .15); }, wolf: () => { tone(310, .65, .1); tone(430, .5, .07, "sine", .25); }, monkey: () => { tone(500,.12,.08,"square"); tone(680,.12,.07,"square",.14); tone(520,.14,.07,"square",.29); }, frog: () => { tone(230,.12,.08,"square"); tone(160,.16,.07,"square",.15); }, snake: () => { tone(900,.55,.035,"sawtooth"); tone(700,.35,.025,"sawtooth",.22); }, crocodile: () => { tone(105,.2,.1,"sawtooth"); tone(85,.25,.08,"sawtooth",.18); }, bear: () => { tone(135,.28,.1,"sawtooth"); tone(105,.34,.08,"sawtooth",.2); }, panda: () => { tone(210,.2,.07,"triangle"); tone(260,.24,.06,"triangle",.16); }, parrot: () => { tone(950,.12,.07,"square"); tone(1250,.1,.06,"square",.13); tone(800,.14,.06,"square",.25); }, owl: () => { tone(430,.28,.08); tone(330,.38,.07,"sine",.27); }, eagle: () => { tone(1000,.2,.055); tone(760,.3,.05,"sine",.18); }, penguin: () => { tone(520,.12,.06,"triangle"); tone(700,.16,.06,"triangle",.14); }, flamingo: () => { tone(900,.08,.06,"square"); tone(760,.08,.05,"square",.1); tone(900,.08,.05,"square",.2); }, duck: () => { tone(520,.14,.07,"square"); tone(410,.16,.06,"square",.16); }, peacock: () => { tone(720,.12,.06,"triangle"); tone(980,.18,.06,"triangle",.14); tone(820,.15,.05,"triangle",.32); }, chicken: () => { tone(760,.1,.06,"square"); tone(900,.08,.05,"square",.11); tone(680,.12,.05,"square",.22); }, bee: () => { tone(170,.65,.055,"sawtooth"); tone(205,.55,.035,"sawtooth",.08); }
  };
  pattern[id]();
}


export function playRhymeSound(text = "Twinkle twinkle little star. Let's learn and play!") {
  unlockAudio();
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.82;
    u.pitch = 1.12;
    window.speechSynthesis.speak(u);
  }
  const melody = [523, 523, 784, 784, 880, 880, 784, 698, 698, 659, 659, 587, 587, 523];
  melody.forEach((freq, i) => window.setTimeout(() => beep(freq, 0.22, "triangle", 0.055), i * 180));
}
