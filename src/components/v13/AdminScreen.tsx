import { useEffect, useState } from "react";
import { Activity, BarChart3, ShieldCheck, Users, Wifi, Megaphone, BookOpen, Database } from "lucide-react";
import { Screen } from "@/components/screens/chrome";
import { getAdminSnapshot } from "@/lib/v13/admin/server";

export function AdminScreen({ onBack }: { onBack: () => void }) {
  const [data, setData] = useState<Awaited<ReturnType<typeof getAdminSnapshot>> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    void getAdminSnapshot().then(setData).catch((e) => setError(e?.message || "Admin access unavailable"));
  }, []);

  if (error) {
    return <Screen title="Academy Admin" onBack={onBack}><div className="panel rounded-2xl p-4 text-sm text-muted">{error}</div></Screen>;
  }
  if (!data) {
    return <Screen title="Academy Admin" onBack={onBack}><p className="text-muted">Loading protected Academy metrics…</p></Screen>;
  }

  const metrics = [
    ["Total users", data.totalUsers, Users],
    ["Learning users", data.learningUsers, BookOpen],
    ["Active today", data.activeToday, Activity],
    ["Learning events / 24h", data.events24h, BarChart3],
    ["Progress updates / 7d", data.recentLearningUpdates, Database],
    ["Audit events / 24h", data.auditEvents24h, ShieldCheck],
  ] as const;

  return (
    <Screen title="Academy Admin" onBack={onBack}>
      <div className="grid gap-3">
        <section className="rounded-3xl border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-3"><ShieldCheck className="size-6 text-primary" /></div>
            <div><h2 className="font-display text-2xl text-fg">Operations Dashboard</h2><p className="text-xs text-muted">Protected, aggregate Academy telemetry.</p></div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-2">
          {metrics.map(([label, value, Icon]) => (
            <article key={label} className="panel rounded-2xl p-4">
              <Icon className="size-5 text-primary" />
              <p className="mt-3 text-[11px] text-muted">{label}</p>
              <p className="mt-1 text-2xl font-black text-fg">{value}</p>
            </article>
          ))}
        </div>

        <section className="panel rounded-3xl p-4">
          <div className="flex items-center gap-2"><Wifi className="size-5 text-primary" /><h3 className="font-bold text-fg">Platform health</h3></div>
          <div className="mt-3 grid gap-2 text-sm">
            <div className="flex items-center justify-between rounded-xl bg-surface-2 p-3"><span>Analytics collection</span><b>Protected</b></div>
            <div className="flex items-center justify-between rounded-xl bg-surface-2 p-3"><span>Child data view</span><b>Aggregate only</b></div>
            <div className="flex items-center justify-between rounded-xl bg-surface-2 p-3"><span>Targeted advertising</span><b>Disabled</b></div>
          </div>
        </section>

        <section className="panel rounded-3xl p-4">
          <div className="flex items-center gap-2"><Megaphone className="size-5 text-primary" /><h3 className="font-bold text-fg">Ads</h3></div>
          <p className="mt-2 text-sm text-muted">{data.ads.configured ? "AdSense configuration detected. Ads can appear only in the labeled, non-activity placement." : "No ad publisher configured; learning remains clean and ad-free until a publisher is configured."}</p>
        </section>

        <section className="rounded-2xl border border-dashed p-4 text-xs text-muted">
          Admin access is enforced server-side. The dashboard deliberately avoids displaying child names, emails, raw profiles or individualized learning records.
        </section>
      </div>
    </Screen>
  );
}
