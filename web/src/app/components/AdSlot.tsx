"use client";
import { useEffect } from "react";

/**
 * Placeholder for a future Google AdSense unit.
 *
 * Renders nothing until NEXT_PUBLIC_ADSENSE_CLIENT_ID is set (once the site
 * is approved for AdSense). To go live:
 *   1. Add NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxx to .env.local
 *   2. Add the AdSense loader <Script> to layout.tsx (same pattern as the
 *      gtag/Clarity scripts already there)
 *   3. Create an ad unit in AdSense and pass its slot id as `slot` below
 * No other code changes needed — the slots are already placed in the blog
 * template (see blog/[slug]/page.tsx).
 */
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export default function AdSlot({ slot, className }: { slot: string; className?: string }) {
  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  if (!ADSENSE_CLIENT) return null;

  return (
    <ins
      className={`adsbygoogle${className ? ` ${className}` : ""}`}
      style={{ display: "block" }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
