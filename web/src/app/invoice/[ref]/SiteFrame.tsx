"use client";
import { useEffect, useRef, useState } from "react";

/* Renders a live desktop-width preview of a site, scaled down to fit its
   container. The iframe is sandboxed without top-navigation so a frame-busting
   script on the embedded site can't hijack the invoice, and it's non-interactive
   so scrolling the invoice never gets trapped inside it. */
const DESKTOP_W = 1280;
const DESKTOP_H = 800;

export default function SiteFrame({ url, title }: { url: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / DESKTOP_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={box} className="inv-frame" style={{ height: DESKTOP_H * scale }}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin"
        tabIndex={-1}
        style={{ width: DESKTOP_W, height: DESKTOP_H, transform: `scale(${scale})` }}
      />
    </div>
  );
}
