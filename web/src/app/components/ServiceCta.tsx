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
    ctaHref: "/#contacto",
    homeHref: "/",
    defaultTitle: "¿Tu negocio necesita más clientes?",
    defaultBody: "Cuéntanos qué tienes, dónde estás y qué quieres conseguir. Te diremos qué vemos y por dónde empezaríamos.",
  },
  en: {
    eyebrow: "Start today",
    primary: "I want more clients",
    secondary: "See all services",
    bullets: ["Response in less than 24h", "Free first consultation", "No long contracts"],
    ctaHref: "/en#contact",
    homeHref: "/en",
    defaultTitle: "Ready to get more clients?",
    defaultBody: "Tell us your situation. In less than 24h we'll respond with a no-commitment diagnosis.",
  },
};

export default function ServiceCta({ title, body, locale = "es" }: Props) {
  const t = i18n[locale];
  const heading = title ?? t.defaultTitle;
  const desc = body ?? t.defaultBody;

  return (
    <section style={{ background: "#004aad", padding: "6rem 2.5rem", textAlign: "center" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.8125rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem" }}>{t.eyebrow}</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem,4vw,3.25rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>{heading}</h2>
        <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", lineHeight: 1.7, fontWeight: 300 }}>{desc}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={t.ctaHref} style={{
            display: "inline-block", padding: "0.875rem 2rem", background: "#fff", color: "#004aad",
            fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", borderRadius: "6px"
          }}>{t.primary}</Link>
          <Link href={t.homeHref} style={{
            display: "inline-block", padding: "0.875rem 2rem", background: "transparent", color: "#fff",
            fontWeight: 500, fontSize: "0.9375rem", textDecoration: "none", borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.35)"
          }}>{t.secondary}</Link>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {t.bullets.map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
              <span style={{ color: "#fff", fontWeight: 700 }}>&#10003;</span> {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
