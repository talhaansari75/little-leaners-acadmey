import { useEffect, useRef } from "react";
import { adsEnabled } from "./h5GamesAds";
import { useAdFree } from "./useAdFree";

type AdBannerProps = {
  slot?: string;
  className?: string;
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/** Responsive AdSense display unit. It stays hidden until an AdSense publisher id and slot are configured. */
export function AdBanner({ slot, className = "", label = "Advertisement" }: AdBannerProps) {
  const adFree = useAdFree();
  const ref = useRef<HTMLModElement | null>(null);
  const publisherId = import.meta.env.VITE_ADSENSE_PUBLISHER_ID?.trim();
  const adSlot = slot?.trim() || import.meta.env.VITE_ADSENSE_SLOT?.trim();

  useEffect(() => {
    if (adFree || !adsEnabled() || !publisherId || !adSlot || !ref.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers or an unavailable AdSense script should never break gameplay.
    }
  }, [adFree, adSlot, publisherId]);

  if (adFree || !adsEnabled() || !publisherId || !adSlot) return null;

  return (
    <section className={`w-full overflow-hidden rounded-2xl panel p-2 ${className}`} aria-label={label}>
      <p className="px-2 pb-1 text-center text-[9px] uppercase tracking-[0.18em] text-muted">{label}</p>
      <ins
        ref={ref}
        className="adsbygoogle block min-h-[90px] w-full"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}
