"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/pages/types";

const esLinks = [
  { href: "/seo", label: "SEO" },
  { href: "/sem", label: "SEM" },
  { href: "/rrss", label: "RRSS" },
  { href: "/web", label: "Web" },
  { href: "/ia", label: "IA" },
];

const enLinks = [
  { href: "/en/seo", label: "SEO" },
  { href: "/en/sem", label: "SEM" },
  { href: "/en/social-media", label: "Social" },
  { href: "/en/web", label: "Web" },
  { href: "/en/ai", label: "AI" },
];

export default function ServiceNav({ locale = "es" }: { locale?: Locale }) {
  const pathname = usePathname();
  const links = locale === "en" ? enLinks : esLinks;
  const home = locale === "en" ? "/en" : "/";
  const ctaHref = locale === "en" ? "/en#contact" : "/#contacto";
  const ctaLabel = locale === "en" ? "Let's talk" : "Hablemos";

  return (
    <>
      <style>{`
        .site-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; padding: 0 2rem;
          background: rgba(255,255,255,0.82);
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
        @media (max-width: 860px) {
          .site-nav { height: 60px; padding: 0 1.25rem; }
          .site-nav__links { display: none; }
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
        </div>
      </nav>
    </>
  );
}
