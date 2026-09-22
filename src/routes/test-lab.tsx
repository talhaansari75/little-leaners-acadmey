import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Download, FlaskConical, Play, RotateCcw, Search, Wifi, WifiOff } from "lucide-react";
import { QA_CATEGORY_META, QA_ITEMS, type QAItem, type QACategory } from "@/lib/test-lab/qaCatalog";
import { canPromote, parentLabFeatures, type LabFeature } from "@/lib/test-lab/featureGate";

export const Route = createFileRoute("/test-lab")({ component: TestLab });

type Status = "pending" | "passed" | "failed";
const STORE_KEY = "lla-test-lab-results-v1";

function TestLab() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [category, setCategory] = useState<QACategory | "all">("all");
  const [query, setQuery] = useState("");
  const [running, setRunning] = useState(false);
  const [online, setOnline] = useState(typeof navigator === "undefined" ? true : navigator.onLine);

  useEffect(() => {
    try { const raw = localStorage.getItem(STORE_KEY); if (raw) setStatuses(JSON.parse(raw) as Record<string, Status>); } catch {}
    const on = () => setOnline(true), off = () => setOnline(false);
    addEventListener("online", on); addEventListener("offline", off);
    return () => { removeEventListener("online", on); removeEventListener("offline", off); };
  }, []);

  useEffect(() => { try { localStorage.setItem(STORE_KEY, JSON.stringify(statuses)); } catch {} }, [statuses]);

  const filtered = useMemo(() => QA_ITEMS.filter((item) =>
    (category === "all" || item.category === category) &&
    (!query || `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase()))
  ), [category, query]);

  const passed = QA_ITEMS.filter((x) => statuses[x.id] === "passed").length;
  const failed = QA_ITEMS.filter((x) => statuses[x.id] === "failed").length;
  const pending = QA_ITEMS.length - passed - failed;
  const releaseReady = failed === 0 && pending === 0;

  function setStatus(id: string, status: Status) { setStatuses((s) => ({ ...s, [id]: status })); }

  async function runAutomated() {
    setRunning(true);
    const next = { ...statuses };
    for (const item of QA_ITEMS) {
      if (!item.automated) continue;
      let ok = true;
      switch (item.automated) {
        case "online": ok = navigator.onLine; break;
        case "storage": ok = (() => { try { const k="__lla_test__"; localStorage.setItem(k,"1"); localStorage.removeItem(k); return true; } catch { return false; } })(); break;
        case "indexeddb": ok = "indexedDB" in window; break;
        case "service-worker": ok = "serviceWorker" in navigator; break;
        case "viewport": ok = window.innerWidth >= 320; break;
        case "touch": ok = "ontouchstart" in window || navigator.maxTouchPoints > 0; break;
        case "audio": ok = "AudioContext" in window || "webkitAudioContext" in window; break;
        case "fullscreen": ok = "fullscreenEnabled" in document; break;
      }
      next[item.id] = ok ? "passed" : "failed";
    }
    setStatuses(next);
    setRunning(false);
  }

  function reset() { setStatuses({}); }

  function exportReport() {
    const report = { generatedAt: new Date().toISOString(), online, totals: { total: QA_ITEMS.length, passed, failed, pending }, checks: QA_ITEMS.map((x) => ({ ...x, status: statuses[x.id] ?? "pending" })) };
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: "application/json" }));
    a.download = "little-learners-test-lab-report.json"; a.click(); URL.revokeObjectURL(a.href);
  }

  return <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-7xl space-y-5">
      <header className="rounded-3xl border bg-card p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary"><FlaskConical className="h-4 w-4"/> TEST LAB · PRE-PRODUCTION</div>
            <h1 className="mt-1 text-3xl font-bold">Little Learners QA Lab</h1>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Central feature, safety, offline, performance and release checklist. Manual checks can be marked here; supported browser checks can be run automatically.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn-primary inline-flex items-center gap-2" onClick={() => void runAutomated()} disabled={running}><Play className="h-4 w-4"/>{running ? "Running…" : "Run browser checks"}</button>
            <button className="hud-chip inline-flex items-center gap-2" onClick={exportReport}><Download className="h-4 w-4"/>Export report</button>
            <button className="hud-chip inline-flex items-center gap-2" onClick={reset}><RotateCcw className="h-4 w-4"/>Reset</button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
          <Stat label="Total" value={QA_ITEMS.length}/>
          <Stat label="Passed" value={passed}/>
          <Stat label="Failed" value={failed}/>
          <Stat label="Pending" value={pending}/>
          <div className="rounded-2xl border px-4 py-3"><div className="flex items-center gap-2 text-sm font-bold">{online ? <Wifi className="h-4 w-4"/> : <WifiOff className="h-4 w-4"/>}{online ? "Online" : "Offline"}</div><div className="text-xs text-muted-foreground">Network</div></div>
        </div>
        <div className={`mt-4 rounded-2xl p-4 text-sm font-semibold ${releaseReady ? "bg-green-500/10 text-green-700" : "bg-muted text-muted-foreground"}`}>
          {releaseReady ? "All QA items are marked passed." : `${pending} pending · ${failed} failed · complete the required checks before release.`}
        </div>
      </header>

      <section className="grid gap-5 lg:grid-cols-[230px_1fr]">
        <aside className="rounded-3xl border bg-card p-3 shadow-sm">
          <button className={`mb-1 w-full rounded-2xl px-3 py-2 text-left text-sm font-semibold ${category==="all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`} onClick={() => setCategory("all")}>🧪 All checks ({QA_ITEMS.length})</button>
          {(Object.entries(QA_CATEGORY_META) as [QACategory,{label:string;icon:string}][]).map(([id,meta]) => {
            const count=QA_ITEMS.filter(x=>x.category===id).length;
            const done=QA_ITEMS.filter(x=>x.category===id && statuses[x.id]==="passed").length;
            return <button key={id} className={`mb-1 flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left text-sm ${category===id ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`} onClick={()=>setCategory(id)}><span>{meta.icon} {meta.label}</span><span>{done}/{count}</span></button>;
          })}
        </aside>

        <div className="rounded-3xl border bg-card p-4 shadow-sm sm:p-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search QA checks…" className="w-full rounded-2xl border bg-background py-3 pl-10 pr-4 text-sm"/>
          </div>
          <div className="space-y-2">
            {filtered.map(item => <QARow key={item.id} item={item} status={statuses[item.id] ?? "pending"} onStatus={setStatus}/>)}
            {filtered.length===0 && <p className="py-10 text-center text-sm text-muted-foreground">No checks match your search.</p>}
          </div>
        </div>
      </section>

      <ParentFeatureGate />
    </div>
  </main>;
}

function QARow({item,status,onStatus}:{item:QAItem;status:Status;onStatus:(id:string,s:Status)=>void}) {
  return <div className="rounded-2xl border p-4">
    <div className="flex items-start gap-3">
      <button aria-label={`Mark ${item.title} passed`} onClick={()=>onStatus(item.id,status==="passed"?"pending":"passed")} className="mt-0.5 shrink-0">{status==="passed" ? <CheckCircle2 className="h-5 w-5 text-green-600"/> : status==="failed" ? <Circle className="h-5 w-5 text-red-600"/> : <Circle className="h-5 w-5 text-muted-foreground"/>}</button>
      <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><b>{item.title}</b>{item.automated && <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">AUTO</span>}<span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase">{status}</span></div><p className="mt-1 text-sm text-muted-foreground">{item.description}</p></div>
      <div className="flex gap-1"><button className="hud-chip text-xs" onClick={()=>onStatus(item.id,"passed")}>Pass</button><button className="hud-chip text-xs" onClick={()=>onStatus(item.id,"failed")}>Fail</button></div>
    </div>
  </div>;
}

function ParentFeatureGate() {
  const [features, setFeatures] = useState<LabFeature[]>(parentLabFeatures);
  const ready = features.filter(canPromote).length;
  return <section className="rounded-3xl border bg-card p-5 shadow-sm"><h2 className="text-xl font-bold">Feature Promotion Gate</h2><p className="mt-1 text-sm text-muted-foreground">Existing parent-facing feature acceptance tests remain isolated from production until their required checks pass.</p><div className="mt-4 grid gap-2 md:grid-cols-2">{features.map(f => { const ok=canPromote(f); return <div key={f.id} className="rounded-2xl border p-4"><div className="flex items-center justify-between gap-2"><b>{f.name}</b><span className="text-xs uppercase">{f.status}</span></div><p className="mt-1 text-xs text-muted-foreground">{f.tests.filter(t=>t.status==="passed").length}/{f.tests.length} acceptance tests passed</p><button disabled={!ok || f.status==="promoted"} className="hud-chip mt-3 disabled:opacity-40" onClick={()=>setFeatures(xs=>xs.map(x=>x.id===f.id?{...x,status:"promoted"}:x))}>{f.status==="promoted"?"Promoted":"Promote when green"}</button></div>})}</div><p className="mt-3 text-xs text-muted-foreground">{ready}/{features.length} parent features currently satisfy their acceptance gate.</p></section>;
}

function Stat({label,value}:{label:string;value:number}) { return <div className="rounded-2xl border px-4 py-3"><div className="text-2xl font-bold">{value}</div><div className="text-xs text-muted-foreground">{label}</div></div>; }
