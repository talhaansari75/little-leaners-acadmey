/** Bundled Little Learners Academy media. Paths are local and offline-safe. */

export type LearningClass = "Nursery" | "KG" | "Montessori";

export type AnimalCard = {
  id: string;
  name: string;
  src: string;
  sound?: string;
  group: "animal" | "bird" | "sea" | "bug" | "dino" | "fantasy";
};

export const ANIMAL_LIBRARY: AnimalCard[] = [
  { id: "lion", name: "Lion", src: "/offline/preschool/animals/lion-1.svg", sound: "/offline/preschool/audio/animals/lion.wav", group: "animal" },
  { id: "elephant", name: "Elephant", src: "/offline/preschool/animals/elephant-2.svg", sound: "/offline/preschool/audio/animals/elephant.wav", group: "animal" },
  { id: "tiger", name: "Tiger", src: "/offline/preschool/animals/tiger-3.svg", sound: "/offline/preschool/audio/animals/tiger.wav", group: "animal" },
  { id: "monkey", name: "Monkey", src: "/offline/preschool/animals/monkey-4.svg", sound: "/offline/preschool/audio/animals/monkey.wav", group: "animal" },
  { id: "fox", name: "Fox", src: "/offline/preschool/animals/fox-5.svg", sound: "/offline/preschool/audio/animals/fox.wav", group: "animal" },
  { id: "bear", name: "Bear", src: "/offline/preschool/animals/bear-6.svg", sound: "/offline/preschool/audio/animals/bear.wav", group: "animal" },
  { id: "panda", name: "Panda", src: "/offline/preschool/animals/panda-7.svg", sound: "/offline/preschool/audio/animals/panda.wav", group: "animal" },
  { id: "koala", name: "Koala", src: "/offline/preschool/animals/koala-8.svg", group: "animal" },
  { id: "giraffe", name: "Giraffe", src: "/offline/preschool/animals/giraffe-9.svg", group: "animal" },
  { id: "zebra", name: "Zebra", src: "/offline/preschool/animals/zebra-10.svg", group: "animal" },
  { id: "rhino", name: "Rhino", src: "/offline/preschool/animals/rhino-11.svg", group: "animal" },
  { id: "hippo", name: "Hippo", src: "/offline/preschool/animals/hippo-12.svg", group: "animal" },
  { id: "crocodile", name: "Crocodile", src: "/offline/preschool/animals/crocodile-13.svg", sound: "/offline/preschool/audio/animals/crocodile.wav", group: "animal" },
  { id: "snake", name: "Snake", src: "/offline/preschool/animals/snake-14.svg", sound: "/offline/preschool/audio/animals/snake.wav", group: "animal" },
  { id: "turtle", name: "Turtle", src: "/offline/preschool/animals/turtle-15.svg", group: "sea" },
  { id: "frog", name: "Frog", src: "/offline/preschool/animals/frog-16.svg", sound: "/offline/preschool/audio/animals/frog.wav", group: "animal" },
  { id: "octopus", name: "Octopus", src: "/offline/preschool/animals/octopus-17.svg", group: "sea" },
  { id: "shark", name: "Shark", src: "/offline/preschool/animals/shark-18.svg", group: "sea" },
  { id: "whale", name: "Whale", src: "/offline/preschool/animals/whale-19.svg", group: "sea" },
  { id: "dolphin", name: "Dolphin", src: "/offline/preschool/animals/dolphin-20.svg", group: "sea" },
  { id: "fish", name: "Fish", src: "/offline/preschool/animals/fish-21.svg", group: "sea" },
  { id: "crab", name: "Crab", src: "/offline/preschool/animals/crab-22.svg", group: "sea" },
  { id: "lobster", name: "Lobster", src: "/offline/preschool/animals/lobster-23.svg", group: "sea" },
  { id: "shrimp", name: "Shrimp", src: "/offline/preschool/animals/shrimp-24.svg", group: "sea" },
  { id: "butterfly", name: "Butterfly", src: "/offline/preschool/animals/butterfly-25.svg", group: "bug" },
  { id: "bee", name: "Bee", src: "/offline/preschool/animals/bee-26.svg", sound: "/offline/preschool/audio/animals/bee.wav", group: "bug" },
  { id: "ladybug", name: "Ladybug", src: "/offline/preschool/animals/ladybug-27.svg", group: "bug" },
  { id: "ant", name: "Ant", src: "/offline/preschool/animals/ant-28.svg", group: "bug" },
  { id: "spider", name: "Spider", src: "/offline/preschool/animals/spider-29.svg", group: "bug" },
  { id: "snail", name: "Snail", src: "/offline/preschool/animals/snail-30.svg", group: "bug" },
  { id: "rabbit", name: "Rabbit", src: "/offline/preschool/animals/rabbit-31.svg", group: "animal" },
  { id: "hamster", name: "Hamster", src: "/offline/preschool/animals/hamster-32.svg", group: "animal" },
  { id: "mouse", name: "Mouse", src: "/offline/preschool/animals/mouse-33.svg", group: "animal" },
  { id: "cat", name: "Cat", src: "/offline/preschool/animals/cat-34.svg", group: "animal" },
  { id: "dog", name: "Dog", src: "/offline/preschool/animals/dog-35.svg", group: "animal" },
  { id: "wolf", name: "Wolf", src: "/offline/preschool/animals/wolf-36.svg", sound: "/offline/preschool/audio/animals/wolf.wav", group: "animal" },
  { id: "raccoon", name: "Raccoon", src: "/offline/preschool/animals/raccoon-37.svg", group: "animal" },
  { id: "otter", name: "Otter", src: "/offline/preschool/animals/otter-38.svg", group: "animal" },
  { id: "sloth", name: "Sloth", src: "/offline/preschool/animals/sloth-39.svg", group: "animal" },
  { id: "kangaroo", name: "Kangaroo", src: "/offline/preschool/animals/kangaroo-40.svg", group: "animal" },
  { id: "horse", name: "Horse", src: "/offline/preschool/animals/horse-41.svg", group: "animal" },
  { id: "cow", name: "Cow", src: "/offline/preschool/animals/cow-42.svg", group: "animal" },
  { id: "pig", name: "Pig", src: "/offline/preschool/animals/pig-43.svg", group: "animal" },
  { id: "sheep", name: "Sheep", src: "/offline/preschool/animals/sheep-44.svg", group: "animal" },
  { id: "goat", name: "Goat", src: "/offline/preschool/animals/goat-45.svg", group: "animal" },
  { id: "rooster", name: "Rooster", src: "/offline/preschool/animals/rooster-46.svg", sound: "/offline/preschool/audio/animals/chicken.wav", group: "bird" },
  { id: "duck", name: "Duck", src: "/offline/preschool/animals/duck-47.svg", sound: "/offline/preschool/audio/animals/duck.wav", group: "bird" },
  { id: "swan", name: "Swan", src: "/offline/preschool/animals/swan-48.svg", group: "bird" },
  { id: "owl", name: "Owl", src: "/offline/preschool/animals/owl-49.svg", sound: "/offline/preschool/audio/animals/owl.wav", group: "bird" },
  { id: "parrot", name: "Parrot", src: "/offline/preschool/animals/parrot-50.svg", sound: "/offline/preschool/audio/animals/parrot.wav", group: "bird" },
  { id: "eagle", name: "Eagle", src: "/offline/preschool/animals/eagle-51.svg", sound: "/offline/preschool/audio/animals/eagle.wav", group: "bird" },
  { id: "peacock", name: "Peacock", src: "/offline/preschool/animals/peacock-52.svg", sound: "/offline/preschool/audio/animals/peacock.wav", group: "bird" },
  { id: "flamingo", name: "Flamingo", src: "/offline/preschool/animals/flamingo-53.svg", sound: "/offline/preschool/audio/animals/flamingo.wav", group: "bird" },
  { id: "penguin", name: "Penguin", src: "/offline/preschool/animals/penguin-54.svg", sound: "/offline/preschool/audio/animals/penguin.wav", group: "bird" },
  { id: "dodo", name: "Dodo", src: "/offline/preschool/animals/dodo-55.svg", group: "bird" },
  { id: "turkey", name: "Turkey", src: "/offline/preschool/animals/turkey-56.svg", group: "bird" },
  { id: "bird", name: "Bird", src: "/offline/preschool/animals/bird-57.svg", group: "bird" },
  { id: "goose", name: "Goose", src: "/offline/preschool/animals/goose-58.svg", group: "bird" },
  { id: "bat", name: "Bat", src: "/offline/preschool/animals/bat-59.svg", group: "animal" },
  { id: "crow", name: "Crow", src: "/offline/preschool/animals/crow-60.svg", group: "bird" },
  { id: "camel", name: "Camel", src: "/offline/preschool/animals/camel-61.svg", group: "animal" },
  { id: "llama", name: "Llama", src: "/offline/preschool/animals/llama-62.svg", group: "animal" },
  { id: "deer", name: "Deer", src: "/offline/preschool/animals/deer-63.svg", group: "animal" },
  { id: "moose", name: "Moose", src: "/offline/preschool/animals/moose-64.svg", group: "animal" },
  { id: "bison", name: "Bison", src: "/offline/preschool/animals/bison-65.svg", group: "animal" },
  { id: "boar", name: "Boar", src: "/offline/preschool/animals/boar-66.svg", group: "animal" },
  { id: "squirrel", name: "Squirrel", src: "/offline/preschool/animals/squirrel-67.svg", group: "animal" },
  { id: "hedgehog", name: "Hedgehog", src: "/offline/preschool/animals/hedgehog-68.svg", group: "animal" },
  { id: "skunk", name: "Skunk", src: "/offline/preschool/animals/skunk-69.svg", group: "animal" },
  { id: "badger", name: "Badger", src: "/offline/preschool/animals/badger-70.svg", group: "animal" },
  { id: "beaver", name: "Beaver", src: "/offline/preschool/animals/beaver-71.svg", group: "animal" },
  { id: "lizard", name: "Lizard", src: "/offline/preschool/animals/lizard-72.svg", group: "animal" },
  { id: "scorpion", name: "Scorpion", src: "/offline/preschool/animals/scorpion-73.svg", group: "bug" },
  { id: "tropical-fish", name: "Tropical Fish", src: "/offline/preschool/animals/tropical-fish-74.svg", group: "sea" },
  { id: "pufferfish", name: "Pufferfish", src: "/offline/preschool/animals/pufferfish-75.svg", group: "sea" },
  { id: "jellyfish", name: "Jellyfish", src: "/offline/preschool/animals/jellyfish-76.svg", group: "sea" },
  { id: "squid", name: "Squid", src: "/offline/preschool/animals/squid-77.svg", group: "sea" },
  { id: "seal", name: "Seal", src: "/offline/preschool/animals/seal-78.svg", group: "sea" },
  { id: "giraffe-tall", name: "Tall Giraffe", src: "/offline/preschool/animals/giraffe-79.svg", group: "animal" },
  { id: "mammoth", name: "Mammoth", src: "/offline/preschool/animals/mammoth-80.svg", group: "dino" },
  { id: "t-rex", name: "T-Rex", src: "/offline/preschool/animals/t-rex-81.svg", group: "dino" },
  { id: "brachiosaurus", name: "Brachiosaurus", src: "/offline/preschool/animals/brachiosaurus-82.svg", group: "dino" },
  { id: "woolly-mammoth", name: "Woolly Mammoth", src: "/offline/preschool/animals/woolly-mammoth-83.svg", group: "dino" },
  { id: "orangutan", name: "Orangutan", src: "/offline/preschool/animals/orangutan-84.svg", group: "animal" },
  { id: "gorilla", name: "Gorilla", src: "/offline/preschool/animals/gorilla-85.svg", group: "animal" },
  { id: "white-rhino", name: "White Rhino", src: "/offline/preschool/animals/white-rhino-86.svg", group: "animal" },
  { id: "leopard", name: "Leopard", src: "/offline/preschool/animals/leopard-87.svg", group: "animal" },
  { id: "cheetah", name: "Cheetah", src: "/offline/preschool/animals/cheetah-88.svg", group: "animal" },
  { id: "zebra-stripe", name: "Plains Zebra", src: "/offline/preschool/animals/zebra-89.svg", group: "animal" },
  { id: "blue-whale", name: "Blue Whale", src: "/offline/preschool/animals/blue-whale-90.svg", group: "sea" },
  { id: "alligator", name: "Alligator", src: "/offline/preschool/animals/alligator-91.svg", group: "animal" },
  { id: "dragon", name: "Dragon", src: "/offline/preschool/animals/dragon-92.svg", group: "fantasy" },
  { id: "unicorn", name: "Unicorn", src: "/offline/preschool/animals/unicorn-93.svg", group: "fantasy" },
  { id: "sky-dragon", name: "Sky Dragon", src: "/offline/preschool/animals/dragon-94.svg", group: "fantasy" },
  { id: "giant-octopus", name: "Giant Octopus", src: "/offline/preschool/animals/giant-octopus-95.svg", group: "sea" },
  { id: "moth", name: "Moth", src: "/offline/preschool/animals/moth-96.svg", group: "bug" },
  { id: "caterpillar", name: "Caterpillar", src: "/offline/preschool/animals/caterpillar-97.svg", group: "bug" },
  { id: "beetle", name: "Beetle", src: "/offline/preschool/animals/beetle-98.svg", group: "bug" },
  { id: "cricket", name: "Cricket", src: "/offline/preschool/animals/cricket-99.svg", group: "bug" },
  { id: "mosquito", name: "Mosquito", src: "/offline/preschool/animals/mosquito-100.svg", group: "bug" },
];

export const WORD_CARDS = [
  { id: "apple", word: "Apple", src: "/offline/preschool/words/apple.svg" },
  { id: "ball", word: "Ball", src: "/offline/preschool/words/ball.svg" },
  { id: "bird", word: "Bird", src: "/offline/preschool/words/bird.svg" },
  { id: "book", word: "Book", src: "/offline/preschool/words/book.svg" },
  { id: "car", word: "Car", src: "/offline/preschool/words/car.svg" },
  { id: "cat", word: "Cat", src: "/offline/preschool/words/cat.svg" },
  { id: "dog", word: "Dog", src: "/offline/preschool/words/dog.svg" },
  { id: "fish", word: "Fish", src: "/offline/preschool/words/fish.svg" },
  { id: "milk", word: "Milk", src: "/offline/preschool/words/milk.svg" },
  { id: "moon", word: "Moon", src: "/offline/preschool/words/moon.svg" },
  { id: "sun", word: "Sun", src: "/offline/preschool/words/sun.svg" },
  { id: "tree", word: "Tree", src: "/offline/preschool/words/tree.svg" },
] as const;

export const STORY_BOOKS = [
  {
    id: "garden-day",
    title: "A Day in the Garden",
    className: "Nursery" as LearningClass,
    pages: [
      { art: "/offline/preschool/stories/story-1.svg", text: "Luna woke up and saw sunshine on the flowers." },
      { art: "/offline/preschool/stories/story-2.svg", text: "She watered the plants, one little drop at a time." },
      { art: "/offline/preschool/stories/story-3.svg", text: "A butterfly landed on her hand. Hello, friend!" },
      { art: "/offline/preschool/stories/story-4.svg", text: "Luna smiled. Kind hands help gardens grow." },
    ],
    question: { prompt: "What did Luna help?", choices: ["The garden", "A rocket", "A boat"], correct: "The garden" },
  },
  {
    id: "bus-ride",
    title: "The Magic School Bus",
    className: "Nursery" as LearningClass,
    pages: [
      { art: "/offline/preschool/stories/story-5.svg", text: "The yellow bus stopped at the academy gate." },
      { art: "/offline/preschool/stories/story-6.svg", text: "Friends climbed aboard with backpacks and big smiles." },
      { art: "/offline/preschool/stories/story-7.svg", text: "They sang a counting song all the way to school." },
      { art: "/offline/preschool/stories/story-8.svg", text: "Learning is more fun with friends beside you." },
    ],
    question: { prompt: "How did the friends travel?", choices: ["By bus", "By boat", "By plane"], correct: "By bus" },
  },
  {
    id: "cvc-cat",
    title: "The Cat and the Hat",
    className: "KG" as LearningClass,
    pages: [
      { art: "/offline/preschool/stories/story-9.svg", text: "A cat sat on a mat. C-A-T, cat!" },
      { art: "/offline/preschool/stories/story-10.svg", text: "The cat found a hat. H-A-T, hat!" },
      { art: "/offline/preschool/stories/story-11.svg", text: "The hat was too big. The cat giggled." },
      { art: "/offline/preschool/stories/story-12.svg", text: "Letters make words. Words make stories." },
    ],
    question: { prompt: "Which word is a CVC word?", choices: ["Cat", "School", "Elephant"], correct: "Cat" },
  },
  {
    id: "star-night",
    title: "Counting the Stars",
    className: "KG" as LearningClass,
    pages: [
      { art: "/offline/preschool/stories/story-13.svg", text: "Mira looked up. One star, two stars, three stars." },
      { art: "/offline/preschool/stories/story-14.svg", text: "She counted to ten, then started again." },
      { art: "/offline/preschool/stories/story-15.svg", text: "A shooting star made a silver line." },
      { art: "/offline/preschool/stories/story-16.svg", text: "Numbers help us notice the world." },
    ],
    question: { prompt: "What did Mira count?", choices: ["Stars", "Cars", "Socks"], correct: "Stars" },
  },
  {
    id: "calm-shelf",
    title: "The Calm Shelf",
    className: "Montessori" as LearningClass,
    pages: [
      { art: "/offline/preschool/stories/story-17.svg", text: "Noor chose one tray and carried it carefully." },
      { art: "/offline/preschool/stories/story-18.svg", text: "She poured water from pitcher to pitcher." },
      { art: "/offline/preschool/stories/story-19.svg", text: "A drop spilled. She wiped it with a cloth." },
      { art: "/offline/preschool/stories/story-20.svg", text: "Independent hands can care for the classroom." },
    ],
    question: { prompt: "What did Noor practice?", choices: ["Careful pouring", "Running races", "Loud shouting"], correct: "Careful pouring" },
  },
];

export const CLASS_AUDIO: Record<LearningClass, Array<{ id: string; title: string; src: string }>> = {
  Nursery: [
    { id: "abc-sounds", title: "ABC Sounds", src: "/offline/preschool/audio/nursery/abc-sounds.wav" },
    { id: "colors", title: "Colors", src: "/offline/preschool/audio/nursery/colors.wav" },
    { id: "count-1-10", title: "Count 1–10", src: "/offline/preschool/audio/nursery/count-1-10.wav" },
    { id: "manners", title: "Manners", src: "/offline/preschool/audio/nursery/manners.wav" },
  ],
  KG: [
    { id: "reading", title: "Reading", src: "/offline/preschool/audio/kg/reading.wav" },
    { id: "phonics", title: "Phonics", src: "/offline/preschool/audio/kg/phonics.wav" },
    { id: "counting", title: "Counting", src: "/offline/preschool/audio/kg/counting.wav" },
    { id: "cvc-words", title: "CVC Words", src: "/offline/preschool/audio/kg/cvc-words.wav" },
  ],
  Montessori: [
    { id: "language", title: "Language", src: "/offline/preschool/audio/montessori/language.wav" },
    { id: "math", title: "Mathematics", src: "/offline/preschool/audio/montessori/math.wav" },
    { id: "practical-life", title: "Practical Life", src: "/offline/preschool/audio/montessori/practical-life.wav" },
    { id: "sensorial", title: "Sensorial", src: "/offline/preschool/audio/montessori/sensorial.wav" },
  ],
};

export const WORKSHEETS: Record<LearningClass, Array<{ id: string; title: string; src: string }>> = {
  Nursery: [
    { id: "abc-trace", title: "ABC Trace", src: "/offline/preschool/worksheets/nursery/abc-trace.svg" },
    { id: "colors-shapes", title: "Colors & Shapes", src: "/offline/preschool/worksheets/nursery/colors-shapes.svg" },
    { id: "count-1-10", title: "Count 1–10", src: "/offline/preschool/worksheets/nursery/count-1-10.svg" },
  ],
  KG: [
    { id: "phonics-cvc", title: "Phonics CVC", src: "/offline/preschool/worksheets/kg/phonics-cvc.svg" },
    { id: "patterns-shapes", title: "Patterns & Shapes", src: "/offline/preschool/worksheets/kg/patterns-shapes.svg" },
    { id: "math-practice", title: "Math Practice", src: "/offline/preschool/worksheets/kg/math-practice.svg" },
  ],
  Montessori: [
    { id: "practical-life", title: "Practical Life", src: "/offline/preschool/worksheets/montessori/practical-life.svg" },
    { id: "montessori-numbers", title: "Number Rods", src: "/offline/preschool/worksheets/montessori/montessori-numbers.svg" },
    { id: "sensorial-sorting", title: "Sensorial Sorting", src: "/offline/preschool/worksheets/montessori/sensorial-sorting.svg" },
  ],
};

export const ACADEMY_ART = "/offline/preschool/academy-magic-ai.png";
export const MASCOT_ART = "/offline/preschool/animals/panda-7.svg";

export const LEARNING_PATHWAYS: LearningClass[] = ["Nursery", "KG", "Montessori"];

export function animalArt(id: string): string | undefined {
  return ANIMAL_LIBRARY.find((a) => a.id === id)?.src;
}

export function animalSound(id: string): string | undefined {
  return ANIMAL_LIBRARY.find((a) => a.id === id)?.sound;
}
