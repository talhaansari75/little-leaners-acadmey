import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
  Download,
  ExternalLink,
  FlaskConical,
  History,
  Play,
  RotateCcw,
  Search,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { QA_CATEGORY_META, QA_ITEMS, type QAItem, type QACategory } from "@/lib/test-lab/qaCatalog";
import type { ScreenId } from "@/lib/game/types";

export const Route = createFileRoute("/test-lab")({ component: TestLab });

type Status = "pending" | "passed" | "failed" | "blocked" | "improvement";
type Severity = "low" | "medium" | "high" | "critical";
type Result = { status: Status; note: string; severity: Severity; updatedAt: string; durationMs?: number };
type Session = { id: string; startedAt: string; durationMs: number; passed: number; failed: number; blocked: number; pending: number };

const RESULT_KEY = "lla-test-lab-results-v2";
const HISTORY_KEY = "lla-test-lab-history-v2";

const FEATURE_HINTS: Record<string, string> = {
  learning: "Open the academy and exercise the learning flow while keeping this lab open in another tab.",
  games: "Open the academy, enter a game, complete one round and return here to record the result.",
  audio: "Open the academy and verify sound, speech, music and haptics with the device controls.",
  offline: "Use browser DevTools to simulate Offline, then exercise the academy and record what actually happens.",
  payments: "Use QA/testnet configuration only. Never use production payment secrets or real child data.",
  auth: "Verify parent authentication flows with a dedicated test account.",
  parents: "Verify parent-only flows using an account that owns the test child profile.",
  accessibility: "Use keyboard, screen reader, reduced motion and large text settings where available.",
  security: "Verify only through safe QA accounts/data; never expose production credentials.",
  performance: "Use browser performance tooling and record observed regressions as notes.",
  pwa: "Install the PWA, reload, then test the app shell and update behavior.",
  data: "Export, mutate and restore a test save; never use irreplaceable production progress.",
  release: "Run the repository's build/typecheck/test/lint commands before release review.",
};

function TestLab() {
  const [results, setResults] = useState<Record<string, Result>>({});
  const [history, setHistory] = useState<Session[]>([]);
  const [category, setCategory] = useState<QACategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [online, setOnline] = useState(typeof navigator === "undefined" ? true : navigator.onLine);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RESULT_KEY);
      if (raw) setResults(JSON.parse(raw) as Record<string, Result>);
      const oldHistory = localStorage.getItem(HISTORY_KEY);
      if (oldHistory) setHistory(JSON.parse(oldHistory) as Session[]);
    } catch {}
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    addEventListener("online", on);
    addEventListener("offline", off);
    return () => {
      removeEventListener("online", on);
      removeEventListener("offline", off);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(RESULT_KEY, JSON.stringify(results));
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
    } catch {}
  }, [results, history]);

  const counts = useMemo(() => {
    const values = QA_ITEMS.map((x) => results[x.id]?.status ?? "pending");
    return {
      total: QA_ITEMS.length,
      passed: values.filter((x) => x === "passed").length,
      failed: values.filter((x) => x === "failed").length,
      blocked: values.filter((x) => x === "blocked").length,
      pending: values.filter((x) => x === "pending").length,
    };
  }, [results]);

  const filtered = useMemo(
    () =>
      QA_ITEMS.filter(
        (item) =>
          (category === "all" || item.category === category) &&
          (!query ||
            `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase())),
      ),
    [category, query],
  );

  const selectedItem = selected ? QA_ITEMS.find((x) => x.id === selected) ?? null : null;
  const selectedResult = selected ? results[selected] : undefined;
  const coverage = Math.round(((counts.total - counts.pending) / counts.total) * 100);
  const ready = counts.failed === 0 && counts.blocked === 0 && counts.pending === 0;

  function saveResult(id: string, status: Status, note = results[id]?.note ?? "", severity: Severity = results[id]?.severity ?? "medium", durationMs?: number) {
    setResults((current) => ({
      ...current,
      [id]: { status, note, severity, updatedAt: new Date().toISOString(), durationMs },
    }));
  }

  async function runAutomated() {
    setRunning(true);
    const started = performance.now();
    setStartedAt(Date.now());
    const next = { ...results };
    for (const item of QA_ITEMS) {
      if (!item.automated) continue;
      let ok = true;
      switch (item.automated) {
        case "online": ok = navigator.onLine; break;
        case "storage": ok = (() => { try { const k = "__lla_test__"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; } catch { return false; } })(); break;
        case "indexeddb": ok = "indexedDB" in window; break;
        case "service-worker": ok = "serviceWorker" in navigator; break;
        case "viewport": ok = window.innerWidth >= 320; break;
        case "touch": ok = "ontouchstart" in window || navigator.maxTouchPoints > 0; break;
        case "audio": ok = "AudioContext" in window || "webkitAudioContext" in window; break;
        case "fullscreen": ok = "fullscreenEnabled" in document; break;
      }
      next[item.id] = {
        status: ok ? "passed" : "failed",
        note: ok ? "Automated browser assertion passed." : "Automated browser assertion failed.",
        severity: ok ? "low" : "high",
        updatedAt: new Date().toISOString(),
        durationMs: Math.round(performance.now() - started),
      };
    }
    setResults(next);
    const durationMs = Date.now() - (startedAt ?? Date.now());
    setHistory((items) => [
      {
        id: crypto.randomUUID(),
        startedAt: new Date().toISOString(),
        durationMs: durationMs || Math.round(performance.now() - started),
        passed: Object.values(next).filter((x) => x.status === "passed").length,
        failed: Object.values(next).filter((x) => x.status === "failed").length,
        blocked: Object.values(next).filter((x) => x.status === "blocked").length,
        pending: QA_ITEMS.length - Object.keys(next).length,
      },
      ...items,
    ].slice(0, 20));
    setRunning(false);
    setStartedAt(null);
  }

  function reset() {
    setResults({});
    setSelected(null);
    setHistory([]);
    setStartedAt(null);
  }

  function exportReport() {
    const report = {
      product: "Little Learners Academy",
      generatedAt: new Date().toISOString(),
      network: online ? "online" : "offline",
      coverage: `${coverage}%`,
      totals: counts,
      checks: QA_ITEMS.map((item) => ({
        ...item,
        result: results[item.id] ?? { status: "pending", note: "", severity: "medium" },
      })),
      history,
    };
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: "application/json" }));
    a.download = `little-learners-test-lab-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function openAcademy() {
    window.open("/", "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-5">
        <header className="rounded-3xl border bg-card p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <FlaskConical className="h-4 w-4" /> TEST LAB · ADVANCED QA
              </div>
              <h1 className="mt-1 text-3xl font-black tracking-tight">Little Learners Test Lab</h1>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                Feature-level manual testing, browser assertions, failure notes, test history and release evidence.
                Automated checks never pretend that a real user interaction passed.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="btn-primary inline-flex items-center gap-2" onClick={() => void runAutomated()} disabled={running}>
                <Play className="h-4 w-4" /> {running ? "Running…" : "Run automated"}
              </button>
              <button className="hud-chip inline-flex items-center gap-2" onClick={openAcademy}>
                <ExternalLink className="h-4 w-4" /> Open academy
              </button>
              <button className="hud-chip inline-flex items-center gap-2" onClick={exportReport}>
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="hud-chip inline-flex items-center gap-2" onClick={reset}>
                <RotateCcw className="h-4 w-4" /> Reset
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-6">
            <Stat label="Total" value={counts.total} />
            <Stat label="Passed" value={counts.passed} good />
            <Stat label="Failed" value={counts.failed} bad />
            <Stat label="Blocked" value={counts.blocked} warn />
            <Stat label="Pending" value={counts.pending} />
            <Stat label="Coverage" value={`${coverage}%`} />
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${coverage}%` }} />
          </div>

          <div className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${ready ? "bg-green-500/10 text-green-700" : "bg-muted text-muted-foreground"}`}>
            {ready
              ? "Release gate is green: every QA item has a non-failed result."
              : `${counts.pending} pending · ${counts.failed} failed · ${counts.blocked} blocked. Complete the required checks before release.`}
          </div>
        </header>

        <SuiteAccordion />


        {selectedItem && (
          <TestDetail
            item={selectedItem}
            result={selectedResult}
            onStatus={(status, note, severity) => saveResult(selectedItem.id, status, note, severity)}
            onOpen={openAcademy}
          />
        )}

        <section className="rounded-3xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-2 text-lg font-bold"><History className="h-5 w-5" /> Test history</div>
          <p className="mt-1 text-sm text-muted-foreground">The latest 20 local test runs are retained on this device.</p>
          {history.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed p-6 text-center text-sm text-muted-foreground">No test runs yet. Run automated checks to create the first run.</div>
          ) : (
            <div className="mt-4 space-y-2">
              {history.map((run) => (
                <div key={run.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3 text-sm">
                  <span><b>{new Date(run.startedAt).toLocaleString()}</b> · {Math.round(run.durationMs)}ms</span>
                  <span className="flex gap-3"><b className="text-green-600">✓ {run.passed}</b><b className="text-red-600">✕ {run.failed}</b><b>⚠ {run.blocked}</b><b>○ {run.pending}</b></span>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="flex flex-wrap items-center gap-3 rounded-3xl border bg-card p-4 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4" />
          <span>QA state is stored locally on this browser.</span>
          <span>•</span>
          <span>{online ? "Online" : "Offline"} network</span>
          <span>•</span>
          <span>Test data should never contain production secrets.</span>
        </footer>
      </div>
    </main>
  );
}

function SuiteAccordion() {
  const [openSuite, setOpenSuite] = useState<QACategory | "all">("learning");
  const [results, setResults] = useState<Record<string, Result>>({});
  const [expandedTest, setExpandedTest] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RESULT_KEY);
      if (raw) setResults(JSON.parse(raw) as Record<string, Result>);
    } catch {}
  }, []);

  const save = (item: QAItem, status: Status, note: string) => {
    const result: Result = {
      status,
      note,
      severity:
        status === "failed" ? "high" : status === "improvement" ? "medium" : status === "blocked" ? "medium" : "low",
      updatedAt: new Date().toISOString(),
    };
    setResults((current) => ({ ...current, [item.id]: result }));
    try {
      const all = JSON.parse(localStorage.getItem(RESULT_KEY) || "{}") as Record<string, Result>;
      all[item.id] = result;
      localStorage.setItem(RESULT_KEY, JSON.stringify(all));
    } catch {}
  };

  const openTarget = (item: QAItem) => {
    const target = qaTarget(item.category);
    if (!target) return;
    try {
      localStorage.setItem("lla-test-lab-target-screen", target);
    } catch {}
    window.open("/", "_blank", "noopener,noreferrer");
  };

  const run = (item: QAItem) => {
    if (!item.automated) return;
    let ok = false;
    try {
      switch (item.automated) {
        case "online": ok = navigator.onLine; break;
        case "storage": {
          const key = "__lla_feature_test__";
          localStorage.setItem(key, "1");
          ok = localStorage.getItem(key) === "1";
          localStorage.removeItem(key);
          break;
        }
        case "indexeddb": ok = "indexedDB" in window; break;
        case "service-worker": ok = "serviceWorker" in navigator; break;
        case "viewport": ok = window.innerWidth >= 320; break;
        case "touch": ok = "ontouchstart" in window || navigator.maxTouchPoints > 0; break;
        case "audio": ok = "AudioContext" in window || "webkitAudioContext" in window; break;
        case "fullscreen": ok = "fullscreenEnabled" in document; break;
      }
      save(item, ok ? "passed" : "failed", ok ? "Automated check passed." : "Automated check failed.");
    } catch {
      save(item, "failed", "Automated check threw an error.");
    }
  };

  const statusLabel = (status?: Status) =>
    status === "passed" ? "PASSED" :
    status === "failed" ? "FAILED" :
    status === "improvement" ? "NEEDS IMPROVEMENT" :
    status === "blocked" ? "BLOCKED" : "PENDING";

  return (
    <section className="rounded-3xl border bg-card p-4 shadow-sm sm:p-6">
      <div className="mb-4">
        <div className="text-xs font-bold uppercase tracking-wider text-primary">TEST SUITES</div>
        <h2 className="mt-1 text-2xl font-black">Feature QA</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Tap a suite to open its features. Every feature has developer actions: Open, Run, Pass, Failed, Needs Improvement and Blocked.
        </p>
      </div>

      <div className="space-y-2">
        {(Object.entries(QA_CATEGORY_META) as [QACategory, { label: string; icon: string }][]).map(([category, meta]) => {
          const items = QA_ITEMS.filter((item) => item.category === category);
          const done = items.filter((item) => results[item.id]?.status && results[item.id]?.status !== "pending").length;
          const isOpen = openSuite === category;
          return (
            <div key={category} className="overflow-hidden rounded-2xl border">
              <button
                type="button"
                onClick={() => setOpenSuite(isOpen ? "all" : category)}
                className="flex min-h-14 w-full items-center gap-3 p-3 text-left sm:p-4"
                aria-expanded={isOpen}
              >
                <span className="text-xl">{meta.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-black">{meta.label}</span>
                  <span className="text-[11px] text-muted-foreground">{done}/{items.length} tested</span>
                </span>
                <span className="hidden text-[10px] font-bold text-muted-foreground sm:block">
                  {items.filter((x) => results[x.id]?.status === "passed").length} passed · {items.filter((x) => results[x.id]?.status === "failed").length} failed
                </span>
                <span className="text-lg">{isOpen ? "⌃" : "⌄"}</span>
              </button>

              {isOpen && (
                <div className="border-t bg-muted/20 p-2 sm:p-3">
                  <div className="space-y-2">
                    {items.map((item) => {
                      const result = results[item.id];
                      const status = result?.status ?? "pending";
                      const expanded = expandedTest === item.id;
                      return (
                        <article key={item.id} className="overflow-hidden rounded-2xl border bg-background">
                          <button
                            type="button"
                            onClick={() => setExpandedTest(expanded ? null : item.id)}
                            className="flex w-full items-start gap-3 p-3 text-left sm:p-4"
                          >
                            <StatusIcon status={status} />
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-2">
                                <b>{item.title}</b>
                                {item.automated && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-black text-primary">AUTO</span>}
                                <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-black uppercase">{statusLabel(status)}</span>
                              </span>
                              <span className="mt-1 block text-xs text-muted-foreground">{item.description}</span>
                            </span>
                            <span className="text-muted-foreground">{expanded ? "⌃" : "⌄"}</span>
                          </button>

                          {expanded && (
                            <div className="border-t p-3 sm:p-4">
                              <div className="mb-3 rounded-xl bg-muted p-3 text-xs">
                                <b>Developer test:</b> {FEATURE_HINTS[item.category] ?? "Open the Academy, exercise the feature, and record the observed result."}
                              </div>
                              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                                <button type="button" onClick={() => openTarget(item)} className="min-h-11 rounded-xl border px-2 py-2 text-xs font-black uppercase hover:bg-muted">
                                  <ExternalLink className="mx-auto mb-1 h-4 w-4" /> Open
                                </button>
                                {item.automated && (
                                  <button type="button" onClick={() => run(item)} className="min-h-11 rounded-xl border border-primary px-2 py-2 text-xs font-black uppercase text-primary hover:bg-primary/10">
                                    <Play className="mx-auto mb-1 h-4 w-4" /> Run
                                  </button>
                                )}
                                <button type="button" onClick={() => save(item, "passed", "Tester confirmed the expected behavior.")} className="min-h-11 rounded-xl border px-2 py-2 text-xs font-black uppercase hover:bg-green-500/10">✓ Pass</button>
                                <button type="button" onClick={() => save(item, "failed", "Tester observed unexpected behavior.")} className="min-h-11 rounded-xl border px-2 py-2 text-xs font-black uppercase hover:bg-red-500/10">✕ Failed</button>
                                <button type="button" onClick={() => save(item, "improvement", "Feature works but needs improvement.")} className="col-span-2 min-h-11 rounded-xl border px-2 py-2 text-xs font-black uppercase hover:bg-orange-500/10 sm:col-span-1">⚠ Improve</button>
                                <button type="button" onClick={() => save(item, "blocked", "Test could not run because a dependency was unavailable.")} className="col-span-2 min-h-11 rounded-xl border px-2 py-2 text-xs font-black uppercase hover:bg-amber-500/10 sm:col-span-1">⛔ Blocked</button>
                              </div>
                              {result && (
                                <div className="mt-3 rounded-xl bg-muted px-3 py-2 text-[11px] text-muted-foreground">
                                  <b>{statusLabel(status)}</b> · {new Date(result.updatedAt).toLocaleString()} · {result.note}
                                </div>
                              )}
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function qaTarget(category: QACategory): ScreenId | null {
  const targets: Partial<Record<QACategory, ScreenId>> = {
    learning: "preschool", literacy: "preschool", math: "preschool", creative: "preschool",
    discovery: "preschool", stories: "preschool", audio: "preschool", progress: "preschool",
    offline: "pwa", accessibility: "accessibility", mobile: "preschool", data: "saveSlots", release: "releaseVerifier",
    ads: "preschool", admin: "admin",
  };
  return targets[category] ?? null;
}

function MiniMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone?: "good" | "bad" | "warn";
}) {
  return (
    <div className={`rounded-2xl border px-3 py-2 ${tone === "good" ? "bg-green-500/5" : tone === "bad" ? "bg-red-500/5" : tone === "warn" ? "bg-orange-500/5" : ""}`}>
      <div className="text-lg font-black">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function TestDetail({
  item,
  result,
  onStatus,
  onOpen,
}: {
  item: QAItem;
  result?: Result;
  onStatus: (status: Status, note: string, severity: Severity) => void;
  onOpen: () => void;
}) {
  const [note, setNote] = useState(result?.note ?? "");
  const [severity, setSeverity] = useState<Severity>(result?.severity ?? "medium");

  useEffect(() => {
    setNote(result?.note ?? "");
    setSeverity(result?.severity ?? "medium");
  }, [item.id, result?.note, result?.severity]);

  return (
    <section className="rounded-3xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-primary">{QA_CATEGORY_META[item.category].icon} {QA_CATEGORY_META[item.category].label} · {item.id}</div>
          <h2 className="mt-1 text-2xl font-black">{item.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          <div className="mt-3 rounded-2xl bg-muted p-3 text-sm">
            <b>Tester guidance:</b> {FEATURE_HINTS[item.category]}
          </div>
        </div>
        <button className="btn-primary inline-flex items-center justify-center gap-2" onClick={onOpen}><ExternalLink className="h-4 w-4" /> Open academy</button>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        <button onClick={() => onStatus("passed", note, severity)} className="rounded-2xl border p-4 text-left transition hover:bg-green-500/10"><CheckCircle2 className="h-5 w-5 text-green-600" /><b className="mt-2 block">PASS</b><span className="text-xs text-muted-foreground">Observed expected behavior.</span></button>
        <button onClick={() => onStatus("failed", note, severity)} className="rounded-2xl border p-4 text-left transition hover:bg-red-500/10"><XCircle className="h-5 w-5 text-red-600" /><b className="mt-2 block">FAIL</b><span className="text-xs text-muted-foreground">Expected behavior did not occur.</span></button>
        <button onClick={() => onStatus("blocked", note, severity)} className="rounded-2xl border p-4 text-left transition hover:bg-amber-500/10"><AlertTriangle className="h-5 w-5 text-amber-600" /><b className="mt-2 block">BLOCKED</b><span className="text-xs text-muted-foreground">Cannot test because a dependency is unavailable.</span></button>
        <button onClick={() => onStatus("pending", note, severity)} className="rounded-2xl border p-4 text-left transition hover:bg-muted"><Circle className="h-5 w-5 text-muted-foreground" /><b className="mt-2 block">RESET</b><span className="text-xs text-muted-foreground">Return this check to pending.</span></button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_180px]">
        <label className="text-sm font-semibold">Tester notes<textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="What did you observe? Include reproduction steps for a failure." className="mt-2 min-h-28 w-full rounded-2xl border bg-background p-3 text-sm font-normal" /></label>
        <label className="text-sm font-semibold">Severity<select value={severity} onChange={(e) => setSeverity(e.target.value as Severity)} className="mt-2 w-full rounded-2xl border bg-background p-3 text-sm font-normal">{(["low", "medium", "high", "critical"] as Severity[]).map((x) => <option key={x}>{x}</option>)}</select></label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        {item.automated && <span className="rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">AUTO: {item.automated}</span>}
        {result && <span>Last result: <b>{result.status}</b> · {new Date(result.updatedAt).toLocaleString()}</span>}
        {item.category === "pwa" && <span className="inline-flex items-center gap-1"><Smartphone className="h-3 w-3" /> Device/PWA check</span>}
        <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> Manual result is timestamped</span>
      </div>
    </section>
  );
}

function TestRow({ item, result, selected, onSelect }: { item: QAItem; result?: Result; selected: boolean; onSelect: () => void }) {
  const status = result?.status ?? "pending";
  return (
    <button onClick={onSelect} className={`w-full rounded-2xl border p-4 text-left transition ${selected ? "border-primary bg-primary/5" : "hover:bg-muted"}`}>
      <div className="flex items-start gap-3">
        <StatusIcon status={status} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <b>{item.title}</b>
            {item.automated && <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">AUTO</span>}
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase">{status}</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
      </div>
    </button>
  );
}

function StatusIcon({ status }: { status: Status }) {
  if (status === "passed") return <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />;
  if (status === "failed") return <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />;
  if (status === "blocked") return <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />;
  if (status === "improvement") return <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />;
  return <Circle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />;
}

function navClass(active: boolean) {
  return `mb-1 flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm font-semibold ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`;
}

function Stat({ label, value, good, bad, warn }: { label: string; value: number | string; good?: boolean; bad?: boolean; warn?: boolean }) {
  return <div className={`rounded-2xl border px-4 py-3 ${good ? "bg-green-500/5" : bad ? "bg-red-500/5" : warn ? "bg-amber-500/5" : ""}`}><div className="text-2xl font-black">{value}</div><div className="text-xs text-muted-foreground">{label}</div></div>;
}
