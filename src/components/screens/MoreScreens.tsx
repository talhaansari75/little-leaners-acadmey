import { useEffect, useMemo, useState } from "react";
import { useGame } from "@/lib/store";
import { Screen, useT } from "./chrome";
import { CHAPTERS, WORD_OF_DAY } from "@/lib/game/story";
import { CATEGORIES, CATEGORY_IDS, ALL_WORDS, categoryOf } from "@/lib/game/words";
import { getDailyBoard, getLeaderboard } from "@/lib/server/leaderboard";
import { todayKey } from "@/lib/game/levels";
import { PawPrint, BookOpen, BarChart3, Languages, Map, Scale, Sparkles, Swords, Trophy, User, Wrench, Home, Hammer, MessageCircle, Flag, ScrollText, Users, CalendarDays, Activity, ShieldCheck, CreditCard, Globe2, HardDrive, PenTool, Crown, CalendarRange, LineChart, Accessibility, Smartphone, Bell, BrainCircuit, Gauge, Route, Mic, WandSparkles, Eye, ClipboardCheck, PackageCheck, FileCheck2, Archive } from "lucide-react";

export function MoreScreen() {
  const go = useGame.getState().go;
  const categories = [
    { id:"learning", title:"Learning Hub", description:"Classes, activities and daily learning", icon:"📚", target:"preschool" as const },
    { id:"literacy", title:"Literacy & Phonics", description:"Letters, sounds, words and writing", icon:"🔤", target:"preschool" as const },
    { id:"math", title:"Math & Logic", description:"Counting, numbers, shapes and patterns", icon:"🔢", target:"preschool" as const },
    { id:"creative", title:"Creative Studio", description:"Coloring, drawing, music and rhythm", icon:"🎨", target:"preschool" as const },
    { id:"discovery", title:"Discovery", description:"Animals, nature, body and vehicles", icon:"🔎", target:"preschool" as const },
    { id:"stories", title:"Stories", description:"Picture stories, narration and questions", icon:"📖", target:"preschool" as const },
    { id:"progress", title:"Progress", description:"Stars, XP, class progress and learning history", icon:"⭐", target:"preschool" as const },
    { id:"accessibility", title:"Accessibility", description:"Large text, contrast, motion and RTL", icon:"♿", target:"accessibility" as const },
    { id:"offline", title:"Offline Learning", description:"PWA, offline pack and recovery", icon:"📴", target:"pwa" as const },
    { id:"settings", title:"Settings", description:"Language, audio and learning preferences", icon:"⚙️", target:"settings" as const },
    { id:"admin", title:"Admin Dashboard", description:"Protected aggregate operations and usage metrics", icon:"🛡️", target:"admin" as const },
    { id:"test-lab", title:"Test Lab", description:"Mobile-first feature QA and release evidence", icon:"🧪", route:true },
    { id:"legal", title:"Privacy & Legal", description:"Terms and privacy information", icon:"⚖️", target:"legal" as const },
  ];
  return (
    <Screen title="Little Learners">
      <div className="grid grid-cols-2 gap-3">
        {categories.map((item) => (
          <button key={item.id} type="button" onClick={() => item.route ? (window.location.href="/test-lab") : go(item.target)} className="panel min-h-[138px] rounded-2xl p-4 text-left active:scale-[0.98]">
            <span className="text-3xl">{item.icon}</span>
            <span className="mt-3 block text-sm font-black text-fg">{item.title}</span>
            <span className="mt-1 block text-[11px] leading-snug text-muted">{item.description}</span>
            <span className="mt-3 block text-xs font-bold text-primary">Open →</span>
          </button>
        ))}
      </div>
    </Screen>
  );
}

export function StoryScreen() {
  const t = useT();
  const unlocked = useGame((s) => s.save.unlockedLevel);
  return (
    <Screen title={t("story.title")}>
      <div className="flex flex-col gap-3">
        {CHAPTERS.map((c) => {
          const open = unlocked >= c.unlock;
          return (
            <article key={c.id} className="panel rounded-2xl p-4" style={{ opacity: open ? 1 : 0.45 }}>
              <p className="text-xs uppercase tracking-wider text-gold">Chapter {c.id + 1}</p>
              <h2 className="font-display mt-1 text-xl text-fg">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{open ? c.body : "The page is still bound."}</p>
            </article>
          );
        })}
      </div>
    </Screen>
  );
}

export function DictionaryScreen() {
  const t = useT();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const wod = WORD_OF_DAY[new Date().getDate() % WORD_OF_DAY.length]!;
  const list = useMemo(() => {
    const pool = cat === "all" ? ALL_WORDS : (CATEGORIES[cat] ?? ALL_WORDS);
    const qq = q.trim().toUpperCase();
    return (qq ? pool.filter((w) => w.includes(qq)) : pool).slice(0, 80);
  }, [q, cat]);
  return (
    <Screen title={t("cta.dictionary")}>
      <div className="panel mb-4 rounded-2xl p-4">
        <p className="text-xs uppercase tracking-wider text-gold">Word of the day</p>
        <p className="font-display text-2xl text-fg">{wod.word}</p>
        <p className="text-sm text-muted">{wod.meaning}</p>
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search the atlas"
        className="mb-2 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg"
      />
      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        <button type="button" className="hud-chip text-fg" onClick={() => setCat("all")}>
          all
        </button>
        {CATEGORY_IDS.slice(0, 12).map((id) => (
          <button key={id} type="button" className="hud-chip shrink-0 text-fg" onClick={() => setCat(id)}>
            {id}
          </button>
        ))}
      </div>
      <ul className="columns-2 gap-3 text-sm text-fg">
        {list.map((w) => (
          <li key={w} className="mb-1">
            {w}
            <span className="text-muted"> {categoryOf(w)}</span>
          </li>
        ))}
      </ul>
    </Screen>
  );
}

export function LeaderboardScreen() {
  const t = useT();
  const [board, setBoard] = useState<"stars" | "words" | "daily">("stars");
  const [rows, setRows] = useState<Array<{ display_name: string; score: number }>>([]);
  useEffect(() => {
    let live = true;
    (async () => {
      try {
        if (board === "daily") {
          const data = await getDailyBoard({ data: todayKey() });
          if (live) setRows(data.map((r: { display_name: string; score: number }) => ({ display_name: r.display_name, score: r.score })));
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
  return (
    <Screen title={t("cta.leaderboard")}>
      <div className="mb-3 flex gap-2">
        {(["stars", "words", "daily"] as const).map((b) => (
          <button key={b} type="button" className="hud-chip capitalize text-fg" onClick={() => setBoard(b)}>
            {b}
          </button>
        ))}
      </div>
      {rows.length === 0 ? (
        <p className="text-muted">The hall is still quiet. Sign in after a clear to leave a mark.</p>
      ) : (
        <ol className="flex flex-col gap-2">
          {rows.map((r, i) => (
            <li key={`${r.display_name}-${i}`} className="panel flex items-center justify-between rounded-xl p-3">
              <span className="text-fg">
                {i + 1}. {r.display_name}
              </span>
              <span className="text-gold">{r.score}</span>
            </li>
          ))}
        </ol>
      )}
    </Screen>
  );
}

export function LegalScreen() {
  const t = useT();
  return (
    <Screen title={t("cta.legal")}>
      <article className="prose-like space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="font-display text-xl text-fg">Terms of travel</h2>
        <p>
          Mera Word Search Journey is a free, ad-free atlas. An account is required to enter the game and
          enables cloud save and account-based game features. You may manage or delete your account through
          the available account tools.
        </p>
        <h2 className="font-display text-xl text-fg">Quiet ledger (privacy)</h2>
        <p>
          Offline play stays on this device. If you sign in, we store your save blob, display name, and leaderboard
          scores, scoped to your account. We do not sell data. Optional AI riddles are user-initiated and sent without
          your full save. Account deletion is available through your signed-in profile tools.
        </p>
        <p>No ads. Your account data is used to provide the game's account-based features.</p>
      </article>
    </Screen>
  );
}
