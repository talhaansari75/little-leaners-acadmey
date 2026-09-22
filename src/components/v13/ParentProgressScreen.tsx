import { BarChart3, BookOpen, Star, Trophy } from "lucide-react";
import { useMemo } from "react";
import { useGame } from "@/lib/store";
import { Screen } from "./chrome";

export function ParentProgressScreen() {
  const save = useGame((s) => s.save);
  const level = useGame((s) => s.save.unlockedLevel);
  const completed = save.stats.levelsCompleted;
  const winRate = save.stats.gamesPlayed > 0
    ? Math.round((save.stats.gamesWon / save.stats.gamesPlayed) * 100)
    : 0;
  const recent = useMemo(
    () => Object.entries(save.results)
      .sort(([, a], [, b]) => b.timeMs - a.timeMs)
      .slice(0, 8),
    [save.results],
  );

  return (
    <Screen title="Parent Progress">
      <div className="grid grid-cols-2 gap-3">
        <article className="panel rounded-2xl p-4">
          <BookOpen className="mb-2 size-5 text-primary" />
          <p className="text-2xl font-bold text-fg">{completed}</p>
          <p className="text-xs text-muted">Levels completed</p>
        </article>
        <article className="panel rounded-2xl p-4">
          <Trophy className="mb-2 size-5 text-primary" />
          <p className="text-2xl font-bold text-fg">{save.stars}</p>
          <p className="text-xs text-muted">Stars earned</p>
        </article>
        <article className="panel rounded-2xl p-4">
          <BarChart3 className="mb-2 size-5 text-primary" />
          <p className="text-2xl font-bold text-fg">{winRate}%</p>
          <p className="text-xs text-muted">Completion rate</p>
        </article>
        <article className="panel rounded-2xl p-4">
          <Star className="mb-2 size-5 text-primary" />
          <p className="text-2xl font-bold text-fg">{save.stats.currentStreak}</p>
          <p className="text-xs text-muted">Current streak</p>
        </article>
      </div>

      <section className="panel mt-4 rounded-2xl p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Learning snapshot</p>
        <h2 className="mt-1 text-lg font-bold text-fg">{save.playerName}</h2>
        <p className="mt-1 text-sm text-muted">
          Level {level} unlocked · {save.stats.wordsFound} words found · {Math.round(save.stats.playTimeMs / 60000)} minutes played.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-sm font-bold text-fg">Recent level results</h2>
        {recent.length === 0 ? (
          <div className="panel rounded-2xl p-4 text-sm text-muted">No completed levels yet.</div>
        ) : (
          <div className="space-y-2">
            {recent.map(([id, result]) => (
              <div key={id} className="panel flex items-center justify-between rounded-xl p-3">
                <span className="text-sm text-fg">Level {id}</span>
                <span className="text-sm text-gold">{result.stars}★ · {Math.round(result.timeMs / 1000)}s</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </Screen>
  );
}
