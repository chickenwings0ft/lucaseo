import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/pages/types";

const es = {
  services: "Servicios",
  links: [
    { href: "/seo", label: "SEO Orgánico" },
    { href: "/sem", label: "SEM & Ads" },
    { href: "/rrss", label: "Redes Sociales" },
    { href: "/web", label: "Creación Web" },
    { href: "/ia", label: "Inteligencia Artificial" },
  ],
  company: "Empresa",
  companyLinks: [
    { href: "/sobre-mi", label: "Sobre Lucas" },
    { href: "/clientes", label: "Clientes" },
  ],
  legal: "Legal",
  legalLinks: [
    { href: "/politica-privacidad", label: "Política de privacidad" },
    { href: "/aviso-legal", label: "Aviso legal" },
  ],
  rights: "Todos los derechos reservados.",
  tagline: "Marketing digital para negocios que quieren dejar de perseguir clientes.",
  sharkLine: "El océano es grande. Mejor aprender a nadar como un tiburón.",
  ctaTitle: "Hablemos",
  ctaQ: "¿Tienes un problema de marketing?",
  ctaAction: "Cuéntanos.",
  ctaLink: "Contacto →",
};

const en = {
  services: "Services",
  links: [
    { href: "/en/seo", label: "Organic SEO" },
    { href: "/en/sem", label: "SEM & Ads" },
    { href: "/en/social-media", label: "Social Media" },
    { href: "/en/web", label: "Web Design" },
    { href: "/en/ai", label: "Artificial Intelligence" },
  ],
  company: "Company",
  companyLinks: [
    { href: "/en/about", label: "About Lucas" },
    { href: "/en/clients", label: "Clients" },
  ],
  legal: "Legal",
  legalLinks: [
    { href: "/en/privacy-policy", label: "Privacy Policy" },
    { href: "/en/legal-notice", label: "Legal Notice" },
  ],
  rights: "All rights reserved.",
  tagline: "Digital marketing for businesses that want to stop chasing clients.",
  sharkLine: "The ocean is big. Better learn to swim like a shark.",
  ctaTitle: "Let's talk",
  ctaQ: "Got a marketing problem?",
  ctaAction: "Tell us.",
  ctaLink: "Contact →",
};

export default function SiteFooter({ locale = "es" }: { locale?: Locale }) {
  const t = locale === "en" ? en : es;
  const home = locale === "en" ? "/en" : "/";

  return (
    <>
      <style>{`
        .site-ft { background: #0a0f1e; color: #fff; padding: 4rem 2rem 2rem; }
        .site-ft-in { max-width: 1100px; margin: 0 auto; }
        .site-ft-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
        .site-ft-brand { display: flex; flex-direction: column; gap: 1rem; }
        .site-ft-tagline { font-size: 0.875rem; color: rgba(255,255,255,0.5); line-height: 1.65; max-width: 260px; }
        .site-ft-col-t { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
        .site-ft-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
        .site-ft-col a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.875rem; transition: color 0.18s; }
        .site-ft-col a:hover { color: #fff; }
        .site-ft-bar { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .site-ft-copy { font-size: 0.8125rem; color: rgba(255,255,255,0.35); }
        .site-ft-lang { display: flex; gap: 0.75rem; }
        .site-ft-lang a { font-size: 0.8125rem; color: rgba(255,255,255,0.45); text-decoration: none; }
        .site-ft-lang a:hover { color: #fff; }
        .site-ft-lang a.active { color: #fff; font-weight: 600; }
        @media (max-width: 768px) { .site-ft-top { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .site-ft-top { grid-template-columns: 1fr; } }
      `}</style>
      <footer className="site-ft">
        <div className="site-ft-in">
          <div className="site-ft-top">
            <div className="site-ft-brand">
              <Link href={home}>
                <Image src="/logo.png" alt="Lucaseo" width={40} height={40} style={{ width: "auto", height: 34, filter: "brightness(0) invert(1)" }} />
              </Link>
              <p className="site-ft-tagline">{t.tagline}</p>
              <p className="site-ft-tagline" style={{ fontStyle: "italic", marginTop: "0.5rem" }}>{t.sharkLine}</p>
              <p className="site-ft-tagline" style={{ marginTop: "0.25rem", fontSize: "0.75rem" }}>SEO · Ads · RRSS · Web · IA</p>
            </div>
            <div className="site-ft-col">
              <div className="site-ft-col-t">{t.services}</div>
              <ul>
                {t.links.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>
            <div className="site-ft-col">
              <div className="site-ft-col-t">{t.company}</div>
              <ul>
                {t.companyLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>
            <div className="site-ft-col">
              <div className="site-ft-col-t">{t.legal}</div>
              <ul>
                {t.legalLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
              </ul>
            </div>
            <div className="site-ft-col">
              <div className="site-ft-col-t">{t.ctaTitle}</div>
              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: 0 }}>
                {t.ctaQ}<br />{t.ctaAction}
              </p>
              <Link href="/#contacto" style={{ fontSize: "0.875rem", color: "#4d9aff", textDecoration: "none", marginTop: "0.5rem", display: "inline-block" }}>{t.ctaLink}</Link>
            </div>
          </div>
          <div className="site-ft-bar">
            <span className="site-ft-copy">&copy; {new Date().getFullYear()} Lucaseo. {t.rights}</span>
            <div className="site-ft-lang">
              <Link href="/" className={locale === "es" ? "active" : ""}>ES</Link>
              <Link href="/en" className={locale === "en" ? "active" : ""}>EN</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
