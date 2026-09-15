"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/pages/types";

const esLinks = [
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/seo", label: "SEO" },
  { href: "/sem", label: "SEM" },
  { href: "/rrss", label: "RRSS" },
  { href: "/web", label: "Web" },
  { href: "/ia", label: "IA" },
];

const enLinks = [
  { href: "/en/about", label: "About" },
  { href: "/en/seo", label: "SEO" },
  { href: "/en/sem", label: "SEM" },
  { href: "/en/social-media", label: "Social" },
  { href: "/en/web", label: "Web" },
  { href: "/en/ai", label: "AI" },
];

export default function ServiceNav({ locale = "es" }: { locale?: Locale }) {
  const pathname = usePathname();
  const links = locale === "en" ? enLinks : esLinks;
  const home = locale === "en" ? "/" : "/es";
  const ctaHref = locale === "en" ? "/#contact" : "/es#contacto";
  const ctaLabel = locale === "en" ? "Let's talk" : "Hablemos";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        .site-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; padding: 0 2rem;
          background: rgba(255,255,255,0.92);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(10,15,30,0.07);
        }
        .site-nav__logo { display: flex; align-items: center; flex-shrink: 0; }
        .site-nav__right { display: flex; align-items: center; gap: 2rem; }
        .site-nav__links { list-style: none; display: flex; align-items: center; gap: 1.75rem; margin: 0; padding: 0; }
        .site-nav__link {
          color: #5a6480; text-decoration: none;
          font-size: 0.875rem; font-weight: 500; letter-spacing: 0.01em;
          transition: color 0.18s ease;
        }
        .site-nav__link:hover { color: #0a0f1e; }
        .site-nav__link--active { color: #0a0f1e; }
        .site-nav__cta {
          display: inline-flex; align-items: center;
          height: 36px; padding: 0 1.125rem;
          background: #004aad; color: #fff;
          font-size: 0.8125rem; font-weight: 600; letter-spacing: 0.01em;
          text-decoration: none; border-radius: 999px;
          transition: background 0.18s ease;
        }
        .site-nav__cta:hover { background: #003c8f; }

        .site-nav__burger {
          display: none;
          flex-direction: column; justify-content: center; align-items: center;
          width: 40px; height: 40px; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 0;
        }
        .site-nav__burger span {
          display: block; width: 22px; height: 2px;
          background: #0a0f1e; border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .site-nav__burger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .site-nav__burger--open span:nth-child(2) { opacity: 0; }
        .site-nav__burger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .site-nav__mobile {
          display: none;
          position: fixed; inset: 0; top: 68px; z-index: 99;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(16px);
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 0;
          overflow-y: auto;
        }
        .site-nav__mobile--open { display: flex; }
        .site-nav__mobile-link {
          display: block; padding: 1rem 0;
          font-size: 1.25rem; font-weight: 600; color: #0a0f1e;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,74,173,0.08);
          transition: color 0.18s;
        }
        .site-nav__mobile-link:hover { color: #004aad; }
        .site-nav__mobile-link--active { color: #004aad; }
        .site-nav__mobile-cta {
          display: flex; align-items: center; justify-content: center;
          margin-top: 2rem; padding: 1rem;
          background: #004aad; color: #fff;
          font-size: 1rem; font-weight: 600;
          text-decoration: none; border-radius: 8px;
        }

        @media (max-width: 860px) {
          .site-nav { height: 60px; padding: 0 1.25rem; }
          .site-nav__links { display: none; }
          .site-nav__cta { display: none; }
          .site-nav__burger { display: flex; }
          .site-nav__mobile { top: 60px; }
        }
      `}</style>

      <nav className="site-nav">
        <Link href={home} className="site-nav__logo" aria-label="Lucaseo — inicio">
          <Image src="/logo.png" alt="Lucaseo" width={60} height={60} priority style={{ width: "auto", height: "48px" }} />
        </Link>

        <div className="site-nav__right">
          <ul className="site-nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`site-nav__link${pathname.startsWith(l.href) ? " site-nav__link--active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={ctaHref} className="site-nav__cta">{ctaLabel}</Link>

          <button
            className={`site-nav__burger${open ? " site-nav__burger--open" : ""}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`site-nav__mobile${open ? " site-nav__mobile--open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`site-nav__mobile-link${pathname.startsWith(l.href) ? " site-nav__mobile-link--active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
        <Link href={ctaHref} className="site-nav__mobile-cta">{ctaLabel}</Link>
      </div>
    </>
  );
}
