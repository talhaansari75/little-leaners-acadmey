import { useGame } from "@/lib/store";
import { Screen } from "@/components/screens/chrome";
import { CreditCard, LockKeyhole, FlaskConical, EyeOff, Image as ImageIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import { generatePicture } from "@/lib/v35/ai/creatorIdeas";

const TEST_FEATURES = [
  { id: "parental-lock", label: "Parent Lock", description: "Test the parent PIN and kids-lock flow.", icon: LockKeyhole },
  { id: "payments", label: "Payment & Subscription", description: "Test purchases, subscriptions and entitlements.", icon: CreditCard },
  { id: "hidden-features", label: "Hidden Features", description: "Open development-only and hidden feature screens.", icon: EyeOff },
] as const;

export function TestScreen() {
  const [prompt, setPrompt] = useState("A cheerful preschool learning illustration with friendly animals, colorful shapes, soft watercolor texture, no text, no logos.");
  const [image, setImage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const makePicture = async () => { setBusy(true); try { const r = await generatePicture({ data: { prompt } }); setImage(r.ok ? r.url : null); } finally { setBusy(false); } };
  return (
    <Screen title="Test Lab">
      <p className="mb-4 text-sm text-muted">
        New features should enter here first. Move them to the normal categories only after they pass testing.
      </p>
      <div className="grid gap-3">
        {TEST_FEATURES.map(({ id, label, description, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className="panel flex items-center gap-4 rounded-2xl p-4 text-left"
            onClick={() => {
              if (id === "parental-lock") useGame.getState().go("settings");
              if (id === "payments") useGame.getState().go("payments");
              if (id === "hidden-features") useGame.getState().go("admin");
            }}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-2">
              <Icon className="size-5 text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-fg">{label}</span>
              <span className="mt-1 block text-xs text-muted">{description}</span>
            </span>
          </button>
        ))}
      </div>
      <section className="panel mt-4 rounded-2xl p-4">
        <div className="flex items-center gap-2"><ImageIcon className="size-5 text-primary"/><h3 className="font-semibold text-fg">AI Picture Studio</h3></div>
        <p className="mt-1 text-xs text-muted">Generate proper preschool artwork instead of logo-style placeholder pictures. Uses server-side xAI Imagine when configured.</p>
        <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="mt-3 min-h-24 w-full rounded-xl border border-border bg-surface p-3 text-sm text-fg"/>
        <button type="button" disabled={busy} onClick={()=>void makePicture()} className="btn-primary mt-3 flex items-center gap-2"><Sparkles className="size-4"/>{busy?"Generating…":"Generate Picture"}</button>
        {image && <img src={image} alt="AI generated preschool illustration" className="mt-4 w-full rounded-2xl object-cover shadow-lg"/>}
      </section>
      <div className="panel mt-4 rounded-2xl p-4 text-xs text-muted">
        <strong className="text-fg">Release rule:</strong> a feature stays in Test Lab until its functional, security, payment and regression checks pass.
      </div>
    </Screen>
  );
}
