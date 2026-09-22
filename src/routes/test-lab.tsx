import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Circle, FlaskConical, LockKeyhole, Smartphone, WalletCards, Users, UserRound } from "lucide-react";
import { canPromote, parentLabFeatures, type LabFeature } from "@/lib/test-lab/featureGate";

export const Route = createFileRoute("/test-lab")({ component: TestLab });

type Tab = "overview" | "dashboard" | "profile" | "fees" | "login" | "mobile";

const tabMeta: Record<Exclude<Tab, "overview">, { label: string; icon: typeof Users }> = {
  dashboard: { label: "Parent Dashboard", icon: Users },
  profile: { label: "Parent Profile", icon: UserRound },
  fees: { label: "Fees & Payments", icon: WalletCards },
  login: { label: "Parent Login", icon: LockKeyhole },
  mobile: { label: "Parents Mobile", icon: Smartphone },
};

function TestLab() {
  const [tab, setTab] = useState<Tab>("overview");
  const [features, setFeatures] = useState<LabFeature[]>(parentLabFeatures);
  const [selectedFeature, setSelectedFeature] = useState("parent-dashboard");

  const selected = features.find((feature) => feature.id === selectedFeature) ?? features[0];
  const totals = useMemo(() => {
    const tests = features.flatMap((feature) => feature.tests);
    return {
      features: features.length,
      tests: tests.length,
      passed: tests.filter((test) => test.status === "passed").length,
      promoted: features.filter((feature) => feature.status === "promoted").length,
    };
  }, [features]);

  function toggleTest(testId: string) {
    setFeatures((current) => current.map((feature) => feature.id !== selected.id ? feature : {
      ...feature,
      status: "lab",
      tests: feature.tests.map((test) => test.id !== testId ? test : {
        ...test,
        status: test.status === "passed" ? "failed" : "passed",
      }),
    }));
  }

  function promote() {
    if (!canPromote(selected)) return;
    setFeatures((current) => current.map((feature) => feature.id === selected.id ? { ...feature, status: "promoted" } : feature));
  }

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"><FlaskConical className="h-4 w-4" /> TEST LAB · PRE-PRODUCTION</div>
              <h1 className="text-3xl font-bold tracking-tight">Little Leaners Test Lab</h1>
              <p className="mt-2 max-w-3xl text-muted-foreground">Every new parent-facing feature is built and tested here first. A feature cannot be promoted until every required test passes.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Features" value={totals.features} />
              <Stat label="Tests" value={totals.tests} />
              <Stat label="Passed" value={totals.passed} />
              <Stat label="Promoted" value={totals.promoted} />
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[250px_1fr]">
          <aside className="rounded-3xl border bg-card p-3 shadow-sm">
            <button onClick={() => setTab("overview")} className={`mb-1 w-full rounded-2xl px-4 py-3 text-left font-medium ${tab === "overview" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>Lab Overview</button>
            {(Object.keys(tabMeta) as Exclude<Tab, "overview">[]).map((key) => {
              const meta = tabMeta[key]; const Icon = meta.icon;
              return <button key={key} onClick={() => { setTab(key); setSelectedFeature(`parent-${key === "dashboard" ? "dashboard" : key === "profile" ? "profile" : key === "fees" ? "fees" : key === "login" ? "login" : "mobile"}`); }} className={`mb-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-medium ${tab === key ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}><Icon className="h-4 w-4" />{meta.label}</button>;
            })}
          </aside>

          <div className="rounded-3xl border bg-card p-5 shadow-sm sm:p-7">
            {tab === "overview" ? <Overview features={features} onSelect={(id) => { setSelectedFeature(id); const f = features.find((x) => x.id === id); if (f) setTab(f.area === "payments" ? "fees" : f.area); }} /> : <FeaturePanel feature={selected} onToggle={toggleTest} onPromote={promote} />}
          </div>
        </section>
      </div>
    </main>
  );
}

function Overview({ features, onSelect }: { features: LabFeature[]; onSelect: (id: string) => void }) {
  return <div className="space-y-5"><div><h2 className="text-2xl font-semibold">Parent feature pipeline</h2><p className="mt-1 text-muted-foreground">Select a feature to run its acceptance checklist. Nothing is marked production-ready by default.</p></div><div className="grid gap-4 md:grid-cols-2">{features.map((feature) => { const passed = feature.tests.filter((test) => test.status === "passed").length; return <button key={feature.id} onClick={() => onSelect(feature.id)} className="rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-center justify-between gap-3"><span className="font-semibold">{feature.name}</span><StatusBadge status={feature.status} /></div><p className="mt-2 text-sm text-muted-foreground">{passed}/{feature.tests.length} tests passed</p><div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary transition-all" style={{ width: `${(passed / feature.tests.length) * 100}%` }} /></div></button>; })}</div><div className="rounded-2xl border border-dashed p-5"><h3 className="font-semibold">Mandatory release rule</h3><p className="mt-1 text-sm text-muted-foreground">New features stay in Test Lab. Promotion is allowed only after all required acceptance tests are green. Production routes should consume only promoted features.</p></div></div>;
}

function FeaturePanel({ feature, onToggle, onPromote }: { feature: LabFeature; onToggle: (id: string) => void; onPromote: () => void }) {
  const ready = canPromote(feature);
  return <div className="space-y-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div><StatusBadge status={feature.status} /><h2 className="mt-3 text-2xl font-semibold">{feature.name}</h2><p className="mt-1 text-muted-foreground">Acceptance tests for the isolated Test Lab version.</p></div><button disabled={!ready || feature.status === "promoted"} onClick={onPromote} className="rounded-xl bg-primary px-4 py-2 font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40">{feature.status === "promoted" ? "Promoted" : "Promote after tests"}</button></div><div className="space-y-3">{feature.tests.map((test) => <button key={test.id} onClick={() => onToggle(test.id)} className="flex w-full items-start gap-3 rounded-2xl border p-4 text-left hover:bg-muted/50"><span className="mt-0.5">{test.status === "passed" ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Circle className="h-5 w-5 text-muted-foreground" />}</span><span><span className="block font-medium">{test.name}</span><span className="block text-sm text-muted-foreground">{test.description}</span></span></button>)}</div><div className={`rounded-2xl p-4 text-sm ${ready ? "bg-green-500/10 text-green-700" : "bg-muted text-muted-foreground"}`}>{ready ? "All required tests pass. This feature can leave Test Lab." : "Promotion locked: every required test must pass first."}</div></div>;
}

function Stat({ label, value }: { label: string; value: number }) { return <div className="rounded-2xl border px-4 py-3"><div className="text-2xl font-bold">{value}</div><div className="text-xs text-muted-foreground">{label}</div></div>; }
function StatusBadge({ status }: { status: LabFeature["status"] }) { return <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-semibold uppercase tracking-wide">{status}</span>; }
