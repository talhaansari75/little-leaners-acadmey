import { useMemo, useState } from "react";
import { Screen } from "@/components/screens/chrome";
import { GAME_FEATURES, GAME_FEATURE_GROUPS } from "@/lib/game/featureSuite";

export function GameFeatureSuiteScreen() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAME_FEATURES.filter((feature) =>
      (group === "All" || feature.group === group) &&
      (!q || feature.title.toLowerCase().includes(q) || feature.detail.toLowerCase().includes(q))
    );
  }, [group, query]);
  const integrated = GAME_FEATURES.filter((f) => f.status === "integrated").length;
  const configuration = GAME_FEATURES.filter((f) => f.status === "configuration").length;

  return (
    <Screen title="Game Feature Suite">
      <div className="panel rounded-2xl p-4">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-surface-2 p-3"><p className="text-2xl font-bold text-fg">{GAME_FEATURES.length}</p><p className="text-xs text-muted">Features</p></div>
          <div className="rounded-xl bg-surface-2 p-3"><p className="text-2xl font-bold text-fg">{integrated}</p><p className="text-xs text-muted">Integrated</p></div>
          <div className="rounded-xl bg-surface-2 p-3"><p className="text-2xl font-bold text-fg">{configuration}</p><p className="text-xs text-muted">Config</p></div>
        </div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search game features" className="mt-4 w-full rounded-xl border border-border bg-surface px-3 py-3 text-fg" />
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {["All", ...GAME_FEATURE_GROUPS].map((name) => (
            <button key={name} onClick={() => setGroup(name)} className={`shrink-0 rounded-full px-3 py-2 text-xs ${group === name ? "bg-primary text-primary-foreground" : "bg-surface-2 text-fg"}`}>{name}</button>
          ))}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {filtered.map((feature) => (
          <div key={feature.id} className="panel rounded-xl p-3">
            <div className="flex items-start justify-between gap-3">
              <div><p className="text-sm font-semibold text-fg">{feature.title}</p><p className="mt-1 text-xs text-muted">{feature.group} · {feature.detail}</p></div>
              <span className="hud-chip shrink-0 text-xs text-fg">{feature.status}</span>
            </div>
          </div>
        ))}
      </div>
      {!filtered.length && <div className="panel mt-4 rounded-xl p-5 text-center text-sm text-muted">No matching features.</div>}
      <p className="mt-3 text-xs text-muted">The suite reports the shared implementation contracts. Cloud, server, voice and device-dependent behavior still requires the corresponding runtime configuration.</p>
    </Screen>
  );
}
