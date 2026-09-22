import { useMemo } from "react";
import { BarChart3, BookOpen, Flame, Star, Trophy } from "lucide-react";
import { useGame, playerLevel } from "@/lib/store";
import { Screen } from "@/components/screens/chrome";

export function LearningReportScreen() {
  const save = useGame((s) => s.save);
  const level = playerLevel(save.xp);
  const completed = save.stats.levelsCompleted;
  const winRate = save.stats.gamesPlayed > 0
    ? Math.round((save.stats.gamesWon / save.stats.gamesPlayed) * 100)
    : 0;
  const recentResults = useMemo(
    () => Object.entries(save.results)
      .sort(([, a], [, b]) => b.timeMs - a.timeMs)
      .slice(0, 5),
    [save.results],
  );

  return (
    <Screen title="Learning Report">
      <div className="grid grid-cols-2 gap-3">
        <Metric icon={Trophy} label="Level" value={String(level)} />
        <Metric icon={BookOpen} label="Completed" value={String(completed)} />
        <Metric icon={Flame} label="Daily streak" value={String(save.dailyStreak)} />
        <Metric icon={Star} label="Stars" value={String(save.stars)} />
      </div>

      <section className="panel mt-3 rounded-2xl p-4">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="size-5 text-primary" />
          <h2 className="font-semibold text-fg">Learning snapshot</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <Stat label="Games played" value={save.stats.gamesPlayed} />
          <Stat label="Win rate" value={`${winRate}%`} />
          <Stat label="Words found" value={save.stats.wordsFound} />
          <Stat label="Perfect clears" value={save.stats.perfectClears} />
          <Stat label="Play time" value={formatTime(save.stats.playTimeMs)} />
          <Stat label="Best streak" value={save.stats.bestStreak} />
        </div>
      </section>

      <section className="panel mt-3 rounded-2xl p-4">
        <h2 className="mb-3 font-semibold text-fg">Recent practice</h2>
        {recentResults.length === 0 ? (
          <p className="text-sm text-muted">Complete a lesson or puzzle to see progress here.</p>
        ) : (
          <div className="space-y-2">
            {recentResults.map(([id, result]) => (
              <div key={id} className="flex items-center justify-between rounded-xl bg-surface-2 p-3 text-sm">
                <span className="text-fg">Level {id}</span>
                <span className="text-gold">{"★".repeat(result.stars)}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <p className="mt-3 text-center text-xs text-muted">
        This report is calculated from the learner's local game progress.
      </p>
    </Screen>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Trophy; label: string; value: string }) {
  return (
    <div className="panel rounded-2xl p-4">
      <Icon className="mb-2 size-5 text-primary" />
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold text-fg">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-surface-2 p-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-semibold text-fg">{value}</p>
    </div>
  );
}

function formatTime(ms: number) {
  const minutes = Math.floor(Math.max(0, ms) / 60000);
  if (minutes < 60) return `${minutes}m`;
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}
