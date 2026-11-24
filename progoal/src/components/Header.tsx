"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Pill } from "./ui";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#method", label: "Method" },
  { href: "#coaches", label: "Coaches" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
];

/** Floating glass pill nav: translucent over the hero, solid white once scrolled. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: "-96px 0px 0px 0px", threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const light = solid || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-8 sm:pt-7">
      <nav
        className={`mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 ring-1 backdrop-blur-xl transition-[background-color,color,box-shadow] duration-300 ease-out sm:pl-6 ${
          light
            ? "bg-paper/90 text-ink shadow-[0_10px_40px_-16px_rgb(0_0_0/0.25)] ring-ink/10"
            : "bg-paper/10 text-paper ring-paper/20"
        }`}
      >
        <a href="#top" aria-label="ProGoal Academy home" onClick={() => setOpen(false)}>
          <Logo tone={light ? "dark" : "light"} />
        </a>

        <ul className="hidden items-center gap-8 text-[0.95rem] lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="opacity-85 transition-opacity duration-200 hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Pill href="#trial" variant={light ? "dark" : "light"} size="sm" className="hidden sm:inline-flex">
            Free trial
          </Pill>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`grid size-11 place-items-center rounded-full transition-transform duration-150 active:scale-95 lg:hidden ${
              light ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            <span className="relative block h-3 w-[18px]">
              <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-rise mx-auto mt-2 max-w-[1180px] rounded-[1.75rem] bg-paper p-3 shadow-xl ring-1 ring-ink/10 lg:hidden">
          <ul className="grid">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-2xl tracking-tight hover:bg-bone"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Pill href="#trial" variant="dark" className="mt-2 w-full justify-between" onClick={() => setOpen(false)}>
            Book a free trial
          </Pill>
        </div>
      )}
    </header>
  );
}
