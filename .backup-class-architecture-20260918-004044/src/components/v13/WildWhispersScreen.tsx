import { useEffect, useMemo, useState } from "react";
import { Screen } from "@/components/screens/chrome";
import { WILD_ACHIEVEMENTS, WILD_ANIMALS, WILD_MODES, loadWildProgress, saveWildProgress, speakWildClue, wildAnimalArt, type WildDifficulty, type WildMode } from "@/lib/game/wildWhispers";
import { answerWildChallenge, loadWildWhispersCloud, saveWildWhispersSettings, startWildChallenge } from "@/lib/game/wildWhispersCloud";

export function WildWhispersScreen({ onBack }: { onBack: () => void }) {
  const [progress, setProgress] = useState(loadWildProgress());
  const [animalId, setAnimalId] = useState(WILD_ANIMALS[0]!.id);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [cloudRevision, setCloudRevision] = useState(0);
  const [challengePending, setChallengePending] = useState(false);
  useEffect(() => {
    void loadWildWhispersCloud().then((remote) => {
      if (!remote.ok) return;
      if (remote.progress) { saveWildProgress(remote.progress); setProgress(remote.progress); }
      else { setProgress(loadWildProgress()); }
      setCloudRevision(remote.revision);
    }).catch(() => {});
  }, []);
  useEffect(() => {
    setChallengePending(true);
    void startWildChallenge().then((r) => { if (r.ok) { setAnimalId(r.animalId); setCloudRevision(r.revision); } }).catch(() => {}).finally(() => setChallengePending(false));
  }, []);
  const animal = useMemo(() => WILD_ANIMALS.find((x) => x.id === animalId) ?? WILD_ANIMALS[0]!, [animalId]);
  const choices = useMemo(() => {
    const pool = WILD_ANIMALS.filter((x) => x.id !== animal.id).sort(() => Math.random() - 0.5).slice(0, 3);
    return [...pool, animal].sort(() => Math.random() - 0.5);
  }, [animal.id, progress.gamesPlayed]);
  const answer = (id: string) => {
    if (challengePending) return;
    setChallengePending(true);
    void answerWildChallenge({ data: { selectedAnimalId: id } }).then((r) => {
      if (!r.ok) { setFeedback(r.error || "Unable to submit answer."); return; }
      setProgress(r.progress);
      setCloudRevision(r.revision);
      const found = WILD_ANIMALS.find((x) => x.id === r.animalId) ?? animal;
      setFeedback(r.correct ? `Correct! ${found.name} discovered.` : `Not quite. The answer was ${found.name}.`);
      return startWildChallenge();
    }).then((next) => { if (next?.ok) { setAnimalId(next.animalId); setCloudRevision(next.revision); } }).catch(() => {}).finally(() => setChallengePending(false));
  };
  const setMode = (mode: WildMode) => { const next = { ...progress, mode }; setProgress(next); saveWildProgress(next); void saveWildWhispersSettings({ data: { mode, difficulty: next.difficulty, expectedRevision: cloudRevision } }).then((r) => { if (r.ok) { setCloudRevision(r.revision); if (r.progress) { setProgress(r.progress); saveWildProgress(r.progress); } } }).catch(() => {}); };
  const setDifficulty = (difficulty: WildDifficulty) => { const next = { ...progress, difficulty }; setProgress(next); saveWildProgress(next); void saveWildWhispersSettings({ data: { mode: next.mode, difficulty, expectedRevision: cloudRevision } }).then((r) => { if (r.ok) { setCloudRevision(r.revision); if (r.progress) { setProgress(r.progress); saveWildProgress(r.progress); } } }).catch(() => {}); };
  const unlocked = (id: string) => id === "wild-first" ? progress.discovered.length >= 1 : id === "wild-streak" ? progress.bestStreak >= 5 : id === "wild-scholar" ? progress.discovered.length >= 10 : new Set(WILD_ANIMALS.filter((a) => progress.discovered.includes(a.id)).map((a) => a.habitat)).size >= 5;

  return <Screen title="Wild Whispers" onBack={onBack}>
    <div className="grid gap-3">
      <section className="panel rounded-2xl p-4">
        <div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-wider text-accent">Educational mode</p><h2 className="font-display text-2xl text-fg">Animal Discovery</h2></div>{wildAnimalArt(animal.id) ? <img src={wildAnimalArt(animal.id)} alt={animal.name} className="h-16 w-16 object-contain" /> : <span className="text-4xl">{animal.emoji}</span>}</div>
        <p className="mt-3 text-sm text-muted">{progress.mode === "sound" ? "Listen to the clue, then identify the animal." : progress.mode === "silhouette" ? "Use the silhouette-style clue." : "Read the clue and identify the animal."}</p>
        <div className="mt-3 grid grid-cols-3 gap-2">{WILD_MODES.map((m) => <button key={m.id} onClick={() => setMode(m.id)} className={`hud-chip ${progress.mode === m.id ? "ring-2 ring-primary" : ""}`}>{m.title}</button>)}</div>
        {progress.mode === "sound" && <button className="btn-primary mt-3 w-full" onClick={() => speakWildClue(animal)}>🔊 Play clue</button>}
        <div className="mt-3 rounded-xl bg-surface-2 p-3"><p className="text-xs uppercase text-muted">Clue</p><p className="mt-1 text-sm text-fg">{progress.mode === "silhouette" ? <><span className="mr-2 inline-block h-16 w-16 overflow-hidden grayscale brightness-0">{wildAnimalArt(animal.id) ? <img src={wildAnimalArt(animal.id)} alt="" className="h-16 w-16 object-contain" /> : <span className="text-5xl">{animal.emoji}</span>}</span><span>A four-legged animal from the {animal.habitat}.</span></> : animal.fact}</p></div>
        <div className="mt-3 grid grid-cols-2 gap-2">{choices.map((choice) => <button key={choice.id} onClick={() => answer(choice.id)} className="panel rounded-xl p-3 text-left">{wildAnimalArt(choice.id) ? <img src={wildAnimalArt(choice.id)} alt="" className="mb-2 h-12 w-12 object-contain" /> : null}<span className="text-sm font-semibold text-fg">{choice.name}</span><span className="block text-xs text-muted">{choice.urdu}</span></button>)}</div>
        {feedback && <p className="mt-3 text-sm font-semibold text-accent">{feedback}</p>}
      </section>

      <section className="panel rounded-2xl p-4"><h3 className="font-semibold text-fg">Difficulty</h3><div className="mt-2 grid grid-cols-3 gap-2">{(["easy","medium","hard"] as WildDifficulty[]).map((d) => <button key={d} className={`hud-chip ${progress.difficulty === d ? "ring-2 ring-primary" : ""}`} onClick={() => setDifficulty(d)}>{d[0]!.toUpperCase() + d.slice(1)}</button>)}</div></section>

      <section className="grid grid-cols-3 gap-2"><div className="panel rounded-xl p-3"><p className="text-xs text-muted">Lives</p><p className="mt-1 text-xl font-bold text-fg">{"❤️".repeat(progress.lives)}{"🖤".repeat(3 - progress.lives)}</p></div><div className="panel rounded-xl p-3"><p className="text-xs text-muted">Streak</p><p className="mt-1 text-xl font-bold text-fg">{progress.streak}</p></div><div className="panel rounded-xl p-3"><p className="text-xs text-muted">Score</p><p className="mt-1 text-xl font-bold text-fg">{progress.score}</p></div><div className="panel rounded-xl p-3"><p className="text-xs text-muted">Discovered</p><p className="mt-1 text-xl font-bold text-fg">{progress.discovered.length}/{WILD_ANIMALS.length}</p></div></section>

      <section className="panel rounded-2xl p-4"><h3 className="font-semibold text-fg">Achievements & Trophies</h3><div className="mt-3 grid gap-2">{WILD_ACHIEVEMENTS.map((a) => <div key={a.id} className="flex items-center justify-between rounded-xl bg-surface-2 p-3"><div><p className="text-sm font-semibold text-fg">{a.title}</p><p className="text-xs text-muted">{a.detail}</p></div><span>{unlocked(a.id) ? "🏆" : "🔒"}</span></div>)}</div></section>

      <section className="panel rounded-2xl p-4"><h3 className="font-semibold text-fg">Nature Library</h3><p className="mt-1 text-xs text-muted">Discovered animals stay available as learning cards.</p><div className="mt-3 grid grid-cols-2 gap-2">{WILD_ANIMALS.filter((a) => progress.discovered.includes(a.id)).map((a) => <div key={a.id} className="rounded-xl bg-surface-2 p-3">{wildAnimalArt(a.id) ? <img src={wildAnimalArt(a.id)} alt={a.name} className="h-12 w-12 object-contain" /> : <span className="text-2xl">{a.emoji}</span>}<p className="mt-1 text-sm font-semibold text-fg">{a.name}</p><p className="text-xs text-muted">{a.urdu} · {a.habitat}</p></div>)}</div></section>

      <section className="panel rounded-2xl p-4"><h3 className="font-semibold text-fg">Parent Dashboard</h3><div className="mt-2 grid grid-cols-2 gap-2 text-sm"><div className="rounded-xl bg-surface-2 p-3"><span className="text-muted">Games played</span><strong className="block text-fg">{progress.gamesPlayed}</strong></div><div className="rounded-xl bg-surface-2 p-3"><span className="text-muted">Best streak</span><strong className="block text-fg">{progress.bestStreak}</strong></div><div className="rounded-xl bg-surface-2 p-3"><span className="text-muted">Animals learned</span><strong className="block text-fg">{progress.discovered.length}</strong></div><div className="rounded-xl bg-surface-2 p-3"><span className="text-muted">Mode</span><strong className="block text-fg">{progress.mode}</strong></div></div></section>
    </div>
  </Screen>;
}
