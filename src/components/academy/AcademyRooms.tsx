import { useEffect, useMemo, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { ChevronLeft, Pause, Play, Volume2 } from "lucide-react";
import {
  ANIMAL_LIBRARY,
  CLASS_AUDIO,
  STORY_BOOKS,
  WORD_CARDS,
  WORKSHEETS,
  animalSound,
  type LearningClass,
} from "@/lib/academy/catalog";
import { playBundledAudio, sfxPlay, unlockAudio } from "@/lib/game/audio";

export type AcademyRoomId =
  | "art"
  | "music"
  | "stories"
  | "science"
  | "feelings"
  | "daily"
  | "gallery"
  | "bus"
  | "atlas"
  | "worksheets"
  | "listen";

const GALLERY_KEY = "lla-art-gallery-v1";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.88;
  u.pitch = 1.06;
  window.speechSynthesis.speak(u);
}

function readGallery(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(GALLERY_KEY) ?? "[]");
    return Array.isArray(raw) ? raw.filter((x) => typeof x === "string").slice(-12) : [];
  } catch {
    return [];
  }
}

export function AcademyRoomShell({
  title,
  kicker,
  onBack,
  children,
}: {
  title: string;
  kicker: string;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <div className="academy-room-shell">
      <header className="academy-room-head">
        <button type="button" className="academy-icon-btn" onClick={onBack} aria-label="Back to Academy">
          <ChevronLeft className="size-5" />
        </button>
        <div>
          <p>{kicker}</p>
          <h2>{title}</h2>
        </div>
      </header>
      <div className="academy-room-body">{children}</div>
    </div>
  );
}

export function AcademyRoomView({
  room,
  klass,
  onBack,
  onSpeak,
  onComplete,
  onOpenActivity,
  onSelectClass,
}: {
  room: AcademyRoomId;
  klass: LearningClass;
  onBack: () => void;
  onSpeak: (text: string) => void;
  onComplete: () => void;
  onOpenActivity: (id: string) => void;
  onSelectClass: (next: LearningClass) => void;
}) {
  switch (room) {
    case "art":
      return <ArtStudioRoom onBack={onBack} onComplete={onComplete} />;
    case "music":
      return <MusicRoom onBack={onBack} onComplete={onComplete} />;
    case "stories":
      return <StoryTheaterRoom klass={klass} onBack={onBack} onComplete={onComplete} onSpeak={onSpeak} />;
    case "science":
      return <ScienceLabRoom klass={klass} onBack={onBack} onComplete={onComplete} onSpeak={onSpeak} />;
    case "feelings":
      return <FeelingsRoom onBack={onBack} onComplete={onComplete} onSpeak={onSpeak} />;
    case "daily":
      return <DailyLifeRoom onBack={onBack} onComplete={onComplete} onSpeak={onSpeak} />;
    case "gallery":
      return <WorkGalleryRoom onBack={onBack} />;
    case "bus":
      return (
        <SchoolBusRoom
          klass={klass}
          onBack={onBack}
          onSelectClass={onSelectClass}
          onOpenActivity={onOpenActivity}
          onSpeak={onSpeak}
        />
      );
    case "atlas":
      return <AnimalAtlasRoom onBack={onBack} onSpeak={onSpeak} />;
    case "worksheets":
      return <WorksheetRoom klass={klass} onBack={onBack} onComplete={onComplete} />;
    case "listen":
      return <ListenRoom klass={klass} onBack={onBack} onComplete={onComplete} />;
    default:
      return null;
  }
}

function ArtStudioRoom({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [colour, setColour] = useState("#ff7a59");
  const [drawing, setDrawing] = useState(false);
  const [hasArt, setHasArt] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [prompt] = useState(() => WORD_CARDS[Math.floor(Math.random() * WORD_CARDS.length)]!);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    ctx.fillStyle = "#fffdf8";
    ctx.fillRect(0, 0, c.width, c.height);
  }, []);

  const point = (e: PointerEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current;
    if (!c) return null;
    const r = c.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (c.width / r.width), y: (e.clientY - r.top) * (c.height / r.height) };
  };
  const down = (e: PointerEvent<HTMLCanvasElement>) => {
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
  const move = (e: PointerEvent<HTMLCanvasElement>) => {
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
    } catch {
      /* ignore */
    }
    sfxPlay.win();
    onComplete();
  };

  return (
    <AcademyRoomShell title="Art Studio" kicker="Create" onBack={onBack}>
      <p className="academy-room-lead">Draw a {prompt.word.toLowerCase()}. Your picture stays on this device.</p>
      <img src={prompt.src} alt={prompt.word} className="academy-prompt-art" />
      <canvas
        ref={canvasRef}
        width={720}
        height={460}
        className="academy-canvas"
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={() => setDrawing(false)}
        onPointerCancel={() => setDrawing(false)}
      />
      <div className="academy-swatches">
        {["#ff7a59", "#4da6ff", "#43c77a", "#ffd24d", "#7b61ff", "#2b2a32"].map((c) => (
          <button key={c} type="button" aria-label="Choose color" className="academy-swatch" style={{ background: c }} onClick={() => setColour(c)} />
        ))}
      </div>
      <div className="academy-row-actions">
        <button type="button" className="academy-ghost" disabled={!history.length} onClick={() => {
          const c = canvasRef.current;
          const ctx = c?.getContext("2d");
          const last = history.at(-1);
          if (!c || !ctx || !last) return;
          ctx.putImageData(last, 0, 0);
          setHistory((h) => h.slice(0, -1));
        }}>Undo</button>
        <button type="button" className="academy-ghost" onClick={() => {
          const c = canvasRef.current;
          const ctx = c?.getContext("2d");
          if (!c || !ctx) return;
          ctx.fillStyle = "#fffdf8";
          ctx.fillRect(0, 0, c.width, c.height);
          setHasArt(false);
        }}>Clear</button>
        <button type="button" className="academy-primary" disabled={!hasArt} onClick={save}>Save to Gallery</button>
      </div>
    </AcademyRoomShell>
  );
}

function MusicRoom({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const notes = [
    { name: "C", freq: 261.63 },
    { name: "D", freq: 293.66 },
    { name: "E", freq: 329.63 },
    { name: "F", freq: 349.23 },
    { name: "G", freq: 392.0 },
    { name: "A", freq: 440.0 },
    { name: "B", freq: 493.88 },
    { name: "C", freq: 523.25 },
  ];
  const [played, setPlayed] = useState(0);
  const play = (freq: number) => {
    unlockAudio();
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.value = 0.08;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.28);
    setPlayed((n) => {
      const next = n + 1;
      if (next === 5) onComplete();
      return next;
    });
  };
  return (
    <AcademyRoomShell title="Music Room" kicker="Listen" onBack={onBack}>
      <p className="academy-room-lead">Tap the keys. Play five notes to earn a star.</p>
      <div className="academy-piano" role="group" aria-label="Piano keys">
        {notes.map((note, i) => (
          <button key={`${note.name}-${i}`} type="button" className="academy-key" onClick={() => play(note.freq)}>
            {note.name}
          </button>
        ))}
      </div>
      <p className="academy-meta">{played} notes played</p>
    </AcademyRoomShell>
  );
}

function StoryTheaterRoom({
  klass,
  onBack,
  onComplete,
  onSpeak,
}: {
  klass: LearningClass;
  onBack: () => void;
  onComplete: () => void;
  onSpeak: (text: string) => void;
}) {
  const books = STORY_BOOKS.filter((b) => b.className === klass);
  const [bookId, setBookId] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const book = books.find((b) => b.id === bookId) ?? null;
  if (!book) {
    return (
      <AcademyRoomShell title="Story Theater" kicker={`${klass} stories`} onBack={onBack}>
        <div className="academy-story-grid">
          {books.map((item) => (
            <button key={item.id} type="button" className="academy-story-card" onClick={() => { setBookId(item.id); setPage(0); setAnswer(null); onSpeak(item.title); }}>
              <img src={item.pages[0]!.art} alt="" />
              <b>{item.title}</b>
            </button>
          ))}
        </div>
      </AcademyRoomShell>
    );
  }
  const atQuestion = page >= book.pages.length;
  const scene = book.pages[Math.min(page, book.pages.length - 1)]!;
  return (
    <AcademyRoomShell title={book.title} kicker="Story Theater" onBack={() => setBookId(null)}>
      <img src={scene.art} alt="" className="academy-story-art" />
      {!atQuestion ? (
        <>
          <p className="academy-story-text">{scene.text}</p>
          <button type="button" className="academy-ghost" onClick={() => onSpeak(scene.text)}>
            <Volume2 className="size-4" /> Listen
          </button>
          <button type="button" className="academy-primary" onClick={() => setPage((p) => p + 1)}>Next page</button>
        </>
      ) : (
        <>
          <p className="academy-story-text">{book.question.prompt}</p>
          <div className="academy-choice-grid">
            {book.question.choices.map((choice) => (
              <button key={choice} type="button" className={`academy-choice ${answer === choice ? (choice === book.question.correct ? "is-right" : "is-wrong") : ""}`} onClick={() => {
                setAnswer(choice);
                if (choice === book.question.correct) {
                  sfxPlay.win();
                  onComplete();
                }
              }}>{choice}</button>
            ))}
          </div>
        </>
      )}
    </AcademyRoomShell>
  );
}

function ScienceLabRoom({ klass, onBack, onComplete, onSpeak }: { klass: LearningClass; onBack: () => void; onComplete: () => void; onSpeak: (text: string) => void }) {
  const items = klass === "Nursery"
    ? [{ prompt: "What needs water to grow?", art: "/offline/preschool/words/tree.svg", choices: ["A tree", "A rock", "A spoon"], correct: "A tree" }]
    : klass === "KG"
      ? [{ prompt: "Which vehicle can fly?", art: "/offline/preschool/words/car.svg", choices: ["A plane", "A bus", "A train"], correct: "A plane" }]
      : [{ prompt: "Living or non-living: a cat?", art: "/offline/preschool/words/cat.svg", choices: ["Living", "Non-living", "A color"], correct: "Living" }];
  const item = items[0]!;
  const [answer, setAnswer] = useState<string | null>(null);
  return (
    <AcademyRoomShell title="Mini Science Lab" kicker={klass} onBack={onBack}>
      <img src={item.art} alt="" className="academy-prompt-art" />
      <p className="academy-room-lead">{item.prompt}</p>
      <button type="button" className="academy-ghost" onClick={() => onSpeak(item.prompt)}><Volume2 className="size-4" /> Listen</button>
      <div className="academy-choice-grid">
        {item.choices.map((choice) => (
          <button key={choice} type="button" className={`academy-choice ${answer === choice ? (choice === item.correct ? "is-right" : "is-wrong") : ""}`} onClick={() => {
            setAnswer(choice);
            if (choice === item.correct) { sfxPlay.win(); onComplete(); }
          }}>{choice}</button>
        ))}
      </div>
    </AcademyRoomShell>
  );
}

function FeelingsRoom({ onBack, onComplete, onSpeak }: { onBack: () => void; onComplete: () => void; onSpeak: (text: string) => void }) {
  const prompt = "Which face looks happy?";
  const [answer, setAnswer] = useState<string | null>(null);
  const choices = [
    { id: "happy", label: "Happy", art: "/offline/preschool/animals/panda-7.svg" },
    { id: "sleepy", label: "Sleepy", art: "/offline/preschool/animals/sloth-39.svg" },
    { id: "fierce", label: "Fierce", art: "/offline/preschool/animals/lion-1.svg" },
  ];
  return (
    <AcademyRoomShell title="Feelings Corner" kicker="Care" onBack={onBack}>
      <p className="academy-room-lead">{prompt}</p>
      <button type="button" className="academy-ghost" onClick={() => onSpeak(prompt)}><Volume2 className="size-4" /> Listen</button>
      <div className="academy-choice-grid">
        {choices.map((c) => (
          <button key={c.id} type="button" className={`academy-choice ${answer === c.id ? (c.id === "happy" ? "is-right" : "is-wrong") : ""}`} onClick={() => {
            setAnswer(c.id);
            if (c.id === "happy") { sfxPlay.win(); onComplete(); }
          }}>
            <img src={c.art} alt="" />
            {c.label}
          </button>
        ))}
      </div>
    </AcademyRoomShell>
  );
}

function DailyLifeRoom({ onBack, onComplete, onSpeak }: { onBack: () => void; onComplete: () => void; onSpeak: (text: string) => void }) {
  const steps = ["Wash hands", "Sit at the table", "Say please", "Eat"];
  const [order, setOrder] = useState<string[]>([]);
  const remaining = steps.filter((s) => !order.includes(s));
  const correct = order.join("|") === steps.join("|");
  return (
    <AcademyRoomShell title="Daily Life" kicker="Practical life" onBack={onBack}>
      <p className="academy-room-lead">Tap the steps in order.</p>
      <button type="button" className="academy-ghost" onClick={() => onSpeak(steps.join(". "))}><Volume2 className="size-4" /> Listen</button>
      <div className="academy-seq">{order.map((s, i) => <span key={s}>{i + 1}. {s}</span>)}</div>
      <div className="academy-choice-grid">
        {remaining.map((s) => (
          <button key={s} type="button" className="academy-choice" onClick={() => {
            const next = [...order, s];
            setOrder(next);
            if (next.join("|") === steps.join("|")) { sfxPlay.win(); onComplete(); }
          }}>{s}</button>
        ))}
      </div>
      {order.length > 0 && !correct && remaining.length === 0 && <p className="academy-meta">Try a calmer order next time.</p>}
      <button type="button" className="academy-ghost" onClick={() => setOrder([])}>Start again</button>
    </AcademyRoomShell>
  );
}

function WorkGalleryRoom({ onBack }: { onBack: () => void }) {
  const [items, setItems] = useState(readGallery);
  return (
    <AcademyRoomShell title="My Work Gallery" kicker="Saved on this device" onBack={onBack}>
      {items.length === 0 ? <p className="academy-room-lead">Draw in the Art Studio to fill this wall.</p> : (
        <div className="academy-gallery">
          {items.map((src, i) => <img key={i} src={src} alt={`Artwork ${i + 1}`} />)}
        </div>
      )}
      {items.length > 0 && <button type="button" className="academy-ghost" onClick={() => { localStorage.removeItem(GALLERY_KEY); setItems([]); }}>Clear gallery</button>}
    </AcademyRoomShell>
  );
}

function SchoolBusRoom({
  klass,
  onBack,
  onSelectClass,
  onOpenActivity,
  onSpeak,
}: {
  klass: LearningClass;
  onBack: () => void;
  onSelectClass: (next: LearningClass) => void;
  onOpenActivity: (id: string) => void;
  onSpeak: (text: string) => void;
}) {
  const stops: Record<LearningClass, Array<{ label: string; id: string }>> = {
    Nursery: [{ label: "ABC Fun", id: "letters" }, { label: "Color Garden", id: "colors" }, { label: "Count & Learn", id: "numbers" }],
    KG: [{ label: "Phonics Builder", id: "kg-phonics" }, { label: "Math Mountain", id: "kg-math" }, { label: "Reading Library", id: "kg-reading" }],
    Montessori: [{ label: "Sensorial Studio", id: "mont-sensorial" }, { label: "Practical Life", id: "mont-practical" }, { label: "Nature Corner", id: "mont-nature" }],
  };
  return (
    <AcademyRoomShell title="Magic School Bus" kicker={`Now visiting ${klass}`} onBack={onBack}>
      <p className="academy-room-lead">Choose a class, then hop off at a lesson.</p>
      <div className="academy-class-row">
        {(["Playgroup", "Nursery", "KG-1", "KG-2", "Class 1"] as LearningClass[]).map((name) => (
          <button key={name} type="button" className={`academy-class-pill ${klass === name ? "is-on" : ""}`} onClick={() => { onSelectClass(name); onSpeak(`${name} stop`); }}>{name}</button>
        ))}
      </div>
      <div className="academy-choice-grid">
        {stops[klass].map((stop) => (
          <button key={stop.id} type="button" className="academy-choice" onClick={() => onOpenActivity(stop.id)}>{stop.label}</button>
        ))}
      </div>
    </AcademyRoomShell>
  );
}

type AnimalCardGroup = "animal" | "bird" | "sea" | "bug" | "dino" | "fantasy";

function AnimalAtlasRoom({ onBack, onSpeak }: { onBack: () => void; onSpeak: (text: string) => void }) {
  const [filter, setFilter] = useState<"all" | AnimalCardGroup>("all");
  const list = useMemo(() => ANIMAL_LIBRARY.filter((a) => filter === "all" || a.group === filter), [filter]);
  return (
    <AcademyRoomShell title="Nature Atlas" kicker={`${ANIMAL_LIBRARY.length} illustrated animals`} onBack={onBack}>
      <div className="academy-class-row">
        {(["all", "animal", "bird", "sea", "bug", "dino", "fantasy"] as const).map((g) => (
          <button key={g} type="button" className={`academy-class-pill ${filter === g ? "is-on" : ""}`} onClick={() => setFilter(g)}>{g}</button>
        ))}
      </div>
      <div className="academy-atlas">
        {list.map((animal) => (
          <button key={animal.id} type="button" className="academy-atlas-card" onClick={() => {
            onSpeak(animal.name);
            const src = animal.sound ?? animalSound(animal.id);
            if (src) playBundledAudio(src);
          }}>
            <img src={animal.src} alt={animal.name} loading="lazy" />
            <b>{animal.name}</b>
          </button>
        ))}
      </div>
    </AcademyRoomShell>
  );
}


function WorksheetRoom({ klass, onBack, onComplete }: { klass: LearningClass; onBack: () => void; onComplete: () => void }) {
  const sheets = WORKSHEETS[klass];
  const [current, setCurrent] = useState(sheets[0]!.id);
  const sheet = sheets.find((s) => s.id === current) ?? sheets[0]!;
  return (
    <AcademyRoomShell title="Worksheet Table" kicker={`${klass} practice`} onBack={onBack}>
      <div className="academy-class-row">
        {sheets.map((s) => (
          <button key={s.id} type="button" className={`academy-class-pill ${current === s.id ? "is-on" : ""}`} onClick={() => setCurrent(s.id)}>{s.title}</button>
        ))}
      </div>
      <img src={sheet.src} alt={sheet.title} className="academy-worksheet" />
      <button type="button" className="academy-primary" onClick={() => { sfxPlay.win(); onComplete(); }}>I finished this page</button>
    </AcademyRoomShell>
  );
}

function ListenRoom({ klass, onBack, onComplete }: { klass: LearningClass; onBack: () => void; onComplete: () => void }) {
  const tracks = CLASS_AUDIO[klass];
  const [current, setCurrent] = useState(tracks[0]!.id);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const track = tracks.find((t) => t.id === current) ?? tracks[0]!;
  useEffect(() => () => { audioRef.current?.pause(); }, []);
  const toggle = () => {
    unlockAudio();
    if (!audioRef.current || audioRef.current.src !== new URL(track.src, window.location.origin).href) {
      audioRef.current?.pause();
      audioRef.current = new Audio(track.src);
      audioRef.current.addEventListener("ended", () => { setPlaying(false); onComplete(); });
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      void audioRef.current.play().catch(() => speak(track.title));
      setPlaying(true);
    }
  };
  return (
    <AcademyRoomShell title="Listening Corner" kicker={`${klass} audio`} onBack={onBack}>
      <div className="academy-choice-grid">
        {tracks.map((t) => (
          <button key={t.id} type="button" className={`academy-choice ${current === t.id ? "is-right" : ""}`} onClick={() => { setCurrent(t.id); setPlaying(false); audioRef.current?.pause(); }}>{t.title}</button>
        ))}
      </div>
      <button type="button" className="academy-primary" onClick={toggle}>
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />} {playing ? "Pause" : "Play lesson"}
      </button>
    </AcademyRoomShell>
  );
}
