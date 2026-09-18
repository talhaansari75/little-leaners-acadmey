import { animalArt } from "@/lib/academy/catalog";

export type WildMode = "normal" | "silhouette" | "sound";
export type WildDifficulty = "easy" | "medium" | "hard";

export type WildAnimal = {
  id: string;
  name: string;
  urdu: string;
  category: string;
  habitat: string;
  fact: string;
  emoji: string;
};

export const WILD_ANIMALS: WildAnimal[] = [
  { id: "lion", name: "Lion", urdu: "شیر", category: "Wild", habitat: "Savanna", fact: "Lions live in social groups called prides.", emoji: "🦁" },
  { id: "elephant", name: "Elephant", urdu: "ہاتھی", category: "Wild", habitat: "Savanna", fact: "Elephants use their trunks for breathing, smelling, drinking and touching.", emoji: "🐘" },
  { id: "tiger", name: "Tiger", urdu: "ببر شیر", category: "Wild", habitat: "Forest", fact: "Every tiger has a unique stripe pattern.", emoji: "🐅" },
  { id: "dolphin", name: "Dolphin", urdu: "ڈولفن", category: "Sea", habitat: "Ocean", fact: "Dolphins communicate with clicks, whistles and body movements.", emoji: "🐬" },
  { id: "eagle", name: "Eagle", urdu: "عقاب", category: "Birds", habitat: "Mountains", fact: "Many eagles have excellent eyesight for spotting prey from far away.", emoji: "🦅" },
  { id: "penguin", name: "Penguin", urdu: "پینگوئن", category: "Birds", habitat: "Antarctica", fact: "Penguins are birds that cannot fly but are strong swimmers.", emoji: "🐧" },
  { id: "fox", name: "Fox", urdu: "لومڑی", category: "Wild", habitat: "Forest", fact: "Foxes use sound, scent and body language to communicate.", emoji: "🦊" },
  { id: "owl", name: "Owl", urdu: "الو", category: "Birds", habitat: "Forest", fact: "Owls can rotate their heads far more than humans can.", emoji: "🦉" },
  { id: "turtle", name: "Turtle", urdu: "کچھوا", category: "Reptiles", habitat: "Ocean", fact: "Sea turtles can travel long distances between feeding and nesting areas.", emoji: "🐢" },
  { id: "wolf", name: "Wolf", urdu: "بھیڑیا", category: "Wild", habitat: "Forest", fact: "Wolves cooperate in family groups to hunt and raise young.", emoji: "🐺" },
  { id: "giraffe", name: "Giraffe", urdu: "زرافہ", category: "Wild", habitat: "Savanna", fact: "Giraffes have long necks that help them reach leaves high in trees.", emoji: "🦒" },
  { id: "panda", name: "Panda", urdu: "پانڈا", category: "Wild", habitat: "Bamboo Forest", fact: "Giant pandas spend many hours each day eating bamboo.", emoji: "🐼" },
  { id: "zebra", name: "Zebra", urdu: "زیبرا", category: "Wild", habitat: "Savanna", fact: "Every zebra has a unique stripe pattern.", emoji: "🦓" },
  { id: "kangaroo", name: "Kangaroo", urdu: "کینگرو", category: "Wild", habitat: "Grassland", fact: "Kangaroos use their powerful hind legs for hopping.", emoji: "🦘" },
  { id: "monkey", name: "Monkey", urdu: "بندر", category: "Wild", habitat: "Rainforest", fact: "Many monkeys use calls and body language to communicate.", emoji: "🐒" },
  { id: "polar-bear", name: "Polar Bear", urdu: "قطبی ریچھ", category: "Wild", habitat: "Arctic", fact: "Polar bears are excellent swimmers and are adapted to cold climates.", emoji: "🐻‍❄️" },
  { id: "seal", name: "Seal", urdu: "سیل", category: "Sea", habitat: "Ocean", fact: "Seals use their whiskers to sense movement in water.", emoji: "🦭" },
  { id: "whale", name: "Whale", urdu: "وہیل", category: "Sea", habitat: "Ocean", fact: "Whales communicate using a variety of sounds.", emoji: "🐋" },
  { id: "parrot", name: "Parrot", urdu: "طوطا", category: "Birds", habitat: "Rainforest", fact: "Some parrots can imitate sounds they hear around them.", emoji: "🦜" },
  { id: "flamingo", name: "Flamingo", urdu: "فلیمنگو", category: "Birds", habitat: "Wetlands", fact: "Flamingos often stand on one leg while resting.", emoji: "🦩" },
  { id: "snake", name: "Snake", urdu: "سانپ", category: "Reptiles", habitat: "Grassland", fact: "Snakes use their tongues to collect scent particles from the air.", emoji: "🐍" },
  { id: "frog", name: "Frog", urdu: "مینڈک", category: "Amphibians", habitat: "Wetlands", fact: "Frogs can absorb water through their skin.", emoji: "🐸" },
  { id: "bee", name: "Bee", urdu: "شہد کی مکھی", category: "Insects", habitat: "Meadow", fact: "Bees help pollinate many flowering plants.", emoji: "🐝" },
  { id: "crocodile", name: "Crocodile", urdu: "مگرمچھ", category: "Reptiles", habitat: "Wetlands", fact: "Crocodiles can remain very still while waiting for prey.", emoji: "🐊" },
];

export const WILD_MODES: Array<{ id: WildMode; title: string; detail: string }> = [
  { id: "normal", title: "Normal", detail: "Identify the animal from its clue." },
  { id: "silhouette", title: "Silhouette", detail: "Use the shadow-style clue and choose the animal." },
  { id: "sound", title: "Sound", detail: "Listen to a spoken animal clue and identify it." },
];

export const WILD_ACHIEVEMENTS = [
  { id: "wild-first", title: "First Discovery", detail: "Discover your first animal." },
  { id: "wild-streak", title: "Wild Streak", detail: "Reach a 5-answer streak." },
  { id: "wild-scholar", title: "Nature Scholar", detail: "Discover 10 animals." },
  { id: "wild-explorer", title: "Habitat Explorer", detail: "Discover animals from 5 habitats." },
];

const KEY = "mwsj.wild-whispers.v1";
export type WildProgress = { discovered: string[]; bestStreak: number; streak: number; gamesPlayed: number; score: number; lives: number; difficulty: WildDifficulty; mode: WildMode };
const fallback: WildProgress = { discovered: [], bestStreak: 0, streak: 0, gamesPlayed: 0, score: 0, lives: 3, difficulty: "medium", mode: "normal" };

export function loadWildProgress(): WildProgress {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null") as Partial<WildProgress> | null;
    return { ...fallback, ...(raw || {}), discovered: Array.isArray(raw?.discovered) ? raw!.discovered : [], score: Math.max(0, Number(raw?.score) || 0), lives: Math.max(0, Math.min(3, Number(raw?.lives ?? 3) || 0)) };
  } catch { return fallback; }
}

export function saveWildProgress(progress: WildProgress) {
  try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch { /* storage unavailable */ }
}

export function wildAnimalArt(id: string): string | undefined {
  return animalArt(id);
}

export function speakWildClue(animal: WildAnimal) {
  if (typeof window === "undefined") return;
  const sound = animalArt(animal.id) ? `/offline/preschool/audio/animals/${animal.id}.wav` : undefined;
  if (sound) {
    const audio = new Audio(sound);
    audio.volume = 0.8;
    void audio.play().catch(() => {});
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`${animal.name}. ${animal.fact}`);
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}
