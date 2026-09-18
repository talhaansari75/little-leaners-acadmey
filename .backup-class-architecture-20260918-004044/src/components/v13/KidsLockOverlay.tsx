import { useEffect, useState } from "react";
import { LockKeyhole, Maximize2, ShieldCheck } from "lucide-react";
import { useGame } from "@/lib/store";
import { exitKidsFullscreen, hasKidsLockPin, requestKidsFullscreen, setKidsLockPin, verifyKidsLockPin } from "@/lib/game/kidsLock";

export function KidsLockOverlay() {
  const locked = useGame((s) => s.save.settings.parentalLock);
  const [active, setActive] = useState(false);
  const [pin, setPin] = useState("");
  const [setup, setSetup] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!locked) {
      setActive(false);
      return;
    }
    let cancelled = false;
    void hasKidsLockPin().then((hasPin) => {
      if (cancelled) return;
      setSetup(!hasPin);
      setActive(true);
      if (hasPin) void requestKidsFullscreen();
    });
    return () => { cancelled = true; };
  }, [locked]);

  useEffect(() => {
    if (!active || !locked) return;
    const onFullscreen = () => setActive(Boolean(locked));
    document.addEventListener("fullscreenchange", onFullscreen);
    const onVisibility = () => { if (document.visibilityState === "visible") void requestKidsFullscreen(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [active, locked]);

  if (!locked || !active) return null;

  const unlock = async () => {
    setError("");
    if (setup) {
      if (!(await setKidsLockPin(pin))) {
        setError("Choose a 6-digit parent PIN.");
        return;
      }
      setSetup(false);
      setPin("");
      await requestKidsFullscreen();
      return;
    }
    if (!(await verifyKidsLockPin(pin))) {
      setError("Wrong parent PIN.");
      setPin("");
      return;
    }
    useGame.getState().setSetting("parentalLock", false);
    setActive(false);
    await exitKidsFullscreen();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6 text-white">
      <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-xl">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-white/10">
          {setup ? <ShieldCheck className="size-8" /> : <LockKeyhole className="size-8" />}
        </div>
        <h2 className="mt-4 text-2xl font-bold">{setup ? "Parent PIN" : "Kids Lock"}</h2>
        <p className="mt-2 text-sm text-white/70">
          {setup ? "Create a PIN only a parent knows. Kids cannot leave the learning area through the app." : "Parent PIN is required to leave Kids Lock."}
        </p>
        <input
          inputMode="numeric"
          type="password"
          maxLength={6}
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          onKeyDown={(e) => { if (e.key === "Enter") void unlock(); }}
          placeholder="6-digit PIN"
          className="mt-5 w-full rounded-2xl bg-white px-4 py-4 text-center text-xl tracking-[0.4em] text-black outline-none"
          autoFocus
        />
        {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
        <button type="button" onClick={() => void unlock()} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 font-bold text-black">
          {setup ? "Save PIN & Start" : "Unlock for Parent"}
        </button>
        <button type="button" onClick={() => void requestKidsFullscreen()} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-sm">
          <Maximize2 className="size-4" /> Keep Fullscreen
        </button>
        <p className="mt-4 text-[11px] leading-4 text-white/45">Kids Lock is an in-app safety layer. Android/iOS system navigation and other apps cannot be blocked by a normal website; for full device lockdown use Android Screen Pinning/App Pinning or a managed kiosk mode.</p>
      </div>
    </div>
  );
}
