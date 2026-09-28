"use client";
import Link from "next/link";
import type { Locale } from "@/lib/pages/types";

interface Props {
  title?: string;
  body?: string;
  locale?: Locale;
}

const i18n = {
  es: {
    eyebrow: "Empieza hoy",
    primary: "Cuéntanos qué necesitas →",
    secondary: "Ver todos los servicios",
    bullets: ["Te respondemos en menos de 24h", "Primera conversación sin coste", "Sin compromisos ni contratos eternos"],
    ctaHref: "/es#contacto",
    homeHref: "/es",
    defaultTitle: "¿Tu negocio necesita más clientes?",
    defaultBody: "Cuéntanos qué tienes, dónde estás y qué quieres conseguir. Te diremos qué vemos y por dónde empezaríamos.",
  },
  en: {
    eyebrow: "Start today",
    primary: "I want more clients",
    secondary: "See all services",
    bullets: ["Response in less than 24h", "Free first consultation", "No long contracts"],
    ctaHref: "/#contact",
    homeHref: "/",
    defaultTitle: "Ready to get more clients?",
    defaultBody: "Tell us your situation. In less than 24h we'll respond with a no-commitment diagnosis.",
  },
};

export default function ServiceCta({ title, body, locale = "en" }: Props) {
  const t = i18n[locale];
  const heading = title ?? t.defaultTitle;
  const desc = body ?? t.defaultBody;

  return (
    <>
      <style>{`
        .svc-cta { background: var(--accent); padding: clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 2.5rem); text-align: center; }
        .svc-cta__in { max-width: 700px; margin: 0 auto; }
        .svc-cta__eyebrow { font-size: 0.8125rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-bottom: 1.25rem; }
        .svc-cta__title { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem,4vw,3.25rem); color: #fff; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.25rem; text-wrap: balance; }
        .svc-cta__body { font-size: 1.125rem; color: rgba(255,255,255,0.8); margin-bottom: 2.5rem; line-height: 1.7; font-weight: 300; }
        .svc-cta__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .svc-cta__btn { display: inline-block; padding: 0.875rem 2rem; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: var(--radius-sm); transition: transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out), background 160ms var(--ease-out), border-color 160ms var(--ease-out); }
        .svc-cta__btn--primary { background: #fff; color: var(--accent); }
        .svc-cta__btn--ghost { background: transparent; color: #fff; font-weight: 500; border: 1px solid rgba(255,255,255,0.4); }
        @media (hover: hover) and (pointer: fine) {
          .svc-cta__btn--primary:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
          .svc-cta__btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
        }
        .svc-cta__btn:active { transform: scale(0.97); transition-duration: 100ms; }
        .svc-cta__bullets { margin-top: 3rem; display: flex; gap: 2.5rem; justify-content: center; flex-wrap: wrap; }
        .svc-cta__bullet { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.75); font-size: 0.875rem; }
        .svc-cta__bullet-check { color: #fff; font-weight: 700; }
        @media (max-width: 480px) {
          .svc-cta__actions { flex-direction: column; align-items: stretch; }
          .svc-cta__bullets { gap: 1rem 1.5rem; }
        }
      `}</style>
      <section className="svc-cta">
        <div className="svc-cta__in">
          <p className="svc-cta__eyebrow">{t.eyebrow}</p>
          <h2 className="svc-cta__title">{heading}</h2>
          <p className="svc-cta__body">{desc}</p>
          <div className="svc-cta__actions">
            <Link href={t.ctaHref} className="svc-cta__btn svc-cta__btn--primary">{t.primary}</Link>
            <Link href={t.homeHref} className="svc-cta__btn svc-cta__btn--ghost">{t.secondary}</Link>
          </div>
          <div className="svc-cta__bullets">
            {t.bullets.map(b => (
              <div key={b} className="svc-cta__bullet">
                <span className="svc-cta__bullet-check" aria-hidden="true">&#10003;</span> {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
