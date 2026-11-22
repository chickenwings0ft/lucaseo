"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export interface Slide {
  id: string;
  label: string;
  content: ReactNode;
}

interface Props {
  slides: Slide[];
  ui: { prev: string; next: string; start: string; scrollHint: string };
}

/**
 * Full-screen slide deck. Desktop: vertical scroll that snaps section by section, with side dots.
 * Mobile (< 900px): horizontal swipe between slides, each slide scrolls on its own, with a bottom bar.
 * Content is fully rendered on the server, so it prints and works without JS.
 */
export default function Deck({ slides, ui }: Props) {
  const deck = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<ReadonlySet<number>>(() => new Set([0]));

  const slideEls = () =>
    Array.from(deck.current?.children ?? []).filter((c): c is HTMLElement => c.classList.contains("slide"));

  const goTo = useCallback((i: number) => {
    const el = deck.current;
    const kids = slideEls();
    const k = kids[Math.max(0, Math.min(kids.length - 1, i))];
    if (!el || !k) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ top: k.offsetTop, left: k.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const el = deck.current;
    if (!el) return;
    el.classList.add("is-ready");
    el.focus({ preventScroll: true });

    let raf = 0;
    const measure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const kids = slideEls();
        const horizontal = getComputedStyle(el).scrollSnapType.includes("x");
        let idx = 0;
        if (horizontal) {
          idx = Math.round(el.scrollLeft / Math.max(1, el.clientWidth));
        } else {
          const probe = el.scrollTop + el.clientHeight * 0.45;
          kids.forEach((k, i) => {
            if (k.offsetTop <= probe) idx = i;
          });
        }
        idx = Math.max(0, Math.min(kids.length - 1, idx));
        activeRef.current = idx;
        setActive(idx);
        setSeen((prev) => (prev.has(idx) ? prev : new Set(prev).add(idx)));
      });
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(activeRef.current + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
    };

    // Desktop: one wheel/trackpad gesture = one slide. A slide taller than the screen
    // scrolls natively until its edge, then the next gesture pages.
    let jumpedAt = -Infinity;
    let lastWheel = -Infinity;
    const onWheel = (e: WheelEvent) => {
      if (getComputedStyle(el).scrollSnapType.includes("x")) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const cur = slideEls()[activeRef.current];
      if (!cur) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const now = performance.now();
      const gap = now - lastWheel;
      lastWheel = now;
      const animating = now - jumpedAt < 750;
      if (!animating) {
        if (dir > 0 && el.scrollTop + el.clientHeight < cur.offsetTop + cur.offsetHeight - 2) return;
        if (dir < 0 && el.scrollTop > cur.offsetTop + 2) return;
      }
      e.preventDefault();
      if (animating) return;
      if (gap < 200 && now - jumpedAt < 1600) return; // inertia tail of the same gesture
      if (Math.abs(e.deltaY) < 4) return;
      jumpedAt = now;
      goTo(activeRef.current + dir);
    };

    measure();
    el.addEventListener("scroll", measure, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", measure);
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      window.removeEventListener("keydown", onKey);
    };
  }, [goTo]);

  const total = slides.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
      <div className="deck-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${(active + 1) / total})` }} />
      </div>

      <div ref={deck} className="deck" tabIndex={-1}>
        {slides.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            aria-label={s.label}
            className={`slide${seen.has(i) ? " is-seen" : ""}${i === active ? " is-active" : ""}`}
          >
            <div className="slide__in">{s.content}</div>
          </section>
        ))}
      </div>

      <nav className="deck-dots" aria-label="Secciones">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={i === active ? "is-on" : undefined}
            aria-label={s.label}
            aria-current={i === active ? "step" : undefined}
            onClick={() => goTo(i)}
          >
            <span className="deck-dots__label">{s.label}</span>
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={`deck-hint${active === 0 ? "" : " is-gone"}`}
        onClick={() => goTo(1)}
        tabIndex={active === 0 ? 0 : -1}
      >
        {ui.scrollHint}
        <span aria-hidden="true">↓</span>
      </button>

      <div className="deck-bar">
        <button type="button" className="deck-bar__btn" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={ui.prev}>
          ‹
        </button>
        <div className="deck-bar__mid">
          <div className="deck-bar__label">
            <span>
              {pad(active + 1)}/{pad(total)}
            </span>
            {slides[active]?.label}
          </div>
          <div className="deck-bar__segs" aria-hidden="true">
            {slides.map((s, i) => (
              <span key={s.id} className={i <= active ? "is-on" : undefined} />
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`deck-bar__btn deck-bar__btn--next${active === 0 ? " is-wide" : ""}`}
          onClick={() => goTo(active + 1)}
          disabled={active === total - 1}
          aria-label={ui.next}
        >
          {active === 0 ? `${ui.start} ›` : "›"}
        </button>
      </div>
    </>
  );
}
