import { BookOpen, Gift, Map, PawPrint, Settings, ShoppingBag, Sparkles, Swords, Trophy, User, Baby } from "lucide-react";
import { useGame, playerLevel } from "@/lib/store";
import { useEffect, useState } from "react";
import { HudChips, TileButton, useT } from "./chrome";
import { unlockAudio, startMusic } from "@/lib/game/audio";
import { todayKey, worldOf } from "@/lib/game/levels";
import { WORD_COUNT } from "@/lib/game/words";
import { DAILY_REWARD_COINS } from "@/lib/game/constants";
import { DailyRewardPopup, JourneyHero } from "./JourneyPolish";
import { recommendFor } from "@/lib/intelligence/playerIntelligence";
import { recommendLiveEvent } from "@/lib/intelligence/liveEventPersonalization";
import { AdBanner } from "@/lib/ads/AdBanner";
import { ACADEMY_ART, MASCOT_ART } from "@/lib/academy/catalog";

export function SplashScreen() {
  const [entered, setEntered] = useState(false);
  const enterAcademy = () => {
    if (entered) return;
    setEntered(true);
    unlockAudio();
    const save = useGame.getState().save;
    if (save.settings.music) startMusic();
    window.setTimeout(() => useGame.getState().go("preschool"), 260);
  };

  useEffect(() => {
    const timer = window.setTimeout(enterAcademy, 4200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={`academy-opening ${entered ? "is-entering" : ""}`}>
      <div className="academy-opening-art" aria-hidden="true" style={{ backgroundImage: `url(${ACADEMY_ART})` }} />
      <div className="academy-opening-sky" aria-hidden="true" />
      <div className="academy-opening-sparkles" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <button type="button" className="academy-opening-touch" onClick={enterAcademy} aria-label="Enter Little Learners Academy">
        <div className="academy-opening-content">
          <div className="academy-opening-mascot" aria-hidden="true">
            <img src={MASCOT_ART} alt="" className="academy-opening-mascot-art" />
            <span className="academy-opening-star">★</span>
          </div>

          <div className="academy-opening-brand">
            <span className="academy-opening-kicker">WELCOME, LITTLE LEARNER</span>
            <h1>Little Learners</h1>
            <strong>ACADEMY</strong>
            <p>Learn <b>•</b> Play <b>•</b> Grow</p>
          </div>

          <div className="academy-opening-enter">
            <span className="academy-opening-enter-icon">▶</span>
            <span><b>Enter the Academy</b><small>Tap anywhere to begin</small></span>
          </div>
        </div>
      </button>

      <div className="academy-opening-bottom" aria-hidden="true">
        <span>Nursery</span><span>KG</span><span>Montessori</span>
      </div>
      <div className="academy-opening-loader" aria-hidden="true"><span /></div>
    </main>
  );
}

export function HomeScreen() {
  const t = useT();
  const save = useGame((s) => s.save);
  const world = worldOf(save.unlockedLevel);
  const claimed = save.lastLoginReward === todayKey();
  return (
    <div className="app-shell starfield safe-pad flex h-dvh flex-col gap-4 overflow-y-auto">
      <header className="flex items-center justify-between gap-3">
        <div><p className="text-xs uppercase tracking-[0.2em] text-accent">{save.playerName}</p><h1 className="font-display text-2xl text-fg">{t("app.title")}</h1></div>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl panel" onClick={() => useGame.getState().go("profile")} aria-label={t("cta.profile")}><User className="size-5" /></button>
      </header>
      <HudChips />
      <button type="button" className="journey-continue btn-primary animate-pop" onClick={() => useGame.getState().go("preschool")}>
        <span><span className="block text-xs uppercase tracking-[0.2em] opacity-80">Little Learners Academy</span><strong className="block text-lg">Enter Montessori, Nursery or KG</strong></span><span className="text-2xl">→</span>
      </button>
      <JourneyHero />
      <AdBanner />
      {(() => {
        const rec = recommendFor(save);
        const live = recommendLiveEvent(save);
        return <div className="grid gap-2" aria-label="Personalized recommendations"><div className="panel rounded-2xl p-4"><div className="flex items-center justify-between gap-3"><div><p className="text-[10px] uppercase tracking-[0.2em] text-accent">For You</p><p className="font-semibold text-fg">{rec.title}</p><p className="text-xs text-muted">{rec.detail}</p></div><span className="text-lg">✦</span></div></div><div className="panel rounded-2xl p-4"><p className="text-[10px] uppercase tracking-[0.2em] text-gold">Live Now</p><p className="font-semibold text-fg">{live.title}</p><p className="text-xs text-muted">{live.detail}</p></div></div>;
      })()}
      <button type="button" className="journey-continue btn-primary animate-pop" onClick={() => useGame.getState().startLevel(save.unlockedLevel)}>
        <span><span className="block text-xs uppercase tracking-[0.2em] opacity-80">Continue Journey</span><strong className="block text-lg">Level {save.unlockedLevel} · {world.name}</strong></span><span className="text-2xl">→</span>
      </button>
      {!claimed && <button type="button" className="panel flex items-center justify-between rounded-2xl p-4 text-left" onClick={() => useGame.getState().claimLogin()}><span><span className="flex items-center gap-2 text-sm font-semibold text-fg"><Gift className="size-4 text-gold" /> Daily reward ready</span><span className="text-xs text-muted">Day {(save.loginDays % 7) + 1} · +{DAILY_REWARD_COINS[save.loginDays % 7]} coins</span></span><span className="text-sm font-semibold text-primary">Claim</span></button>}
      <div className="grid grid-cols-3 gap-2">
        <TileButton icon={<Baby className="size-5" />} label="Academy" onClick={() => useGame.getState().go("preschool")} />
        <TileButton icon={<Map className="size-5" />} label={t("cta.worlds")} onClick={() => useGame.getState().go("worlds")} />
        <TileButton icon={<Sparkles className="size-5" />} label={t("cta.daily")} onClick={() => useGame.getState().go("daily")} />
        <TileButton icon={<Swords className="size-5" />} label={t("cta.modes")} onClick={() => useGame.getState().go("modes")} />
        <TileButton icon={<ShoppingBag className="size-5" />} label={t("cta.shop")} onClick={() => useGame.getState().go("shop")} />
        <TileButton icon={<PawPrint className="size-5" />} label={t("cta.pets")} onClick={() => useGame.getState().go("pets")} />
        <TileButton icon={<Trophy className="size-5" />} label={t("cta.achievements")} onClick={() => useGame.getState().go("achievements")} />
        <TileButton icon={<PawPrint className="size-5" />} label="Wild Whispers" onClick={() => useGame.getState().go("wildWhispers")} />
        <TileButton icon={<Gift className="size-5" />} label={t("cta.spin")} onClick={() => useGame.getState().go("spin")} />
        <TileButton icon={<BookOpen className="size-5" />} label={t("cta.story")} onClick={() => useGame.getState().go("story")} />
        <TileButton icon={<Settings className="size-5" />} label={t("cta.more")} onClick={() => useGame.getState().go("more")} />
      </div>
      <DailyRewardPopup />
      <p className="sr-only">{playerLevel(save.xp)} {WORD_COUNT}</p>
    </div>
  );
}
