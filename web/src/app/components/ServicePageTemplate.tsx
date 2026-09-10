import Link from "next/link";
import ServiceNav from "./ServiceNav";
import ServiceCta from "./ServiceCta";
import SiteFooter from "./SiteFooter";
import type { Locale, ServicePage } from "@/lib/pages/types";

function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).filter(Boolean).map((p, i) =>
        p.startsWith("*") && p.endsWith("*") ? (
          <em key={i} style={{ fontStyle: "normal", color: "var(--accent)" }}>{p.slice(1, -1)}</em>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function ServicePageTemplate({ page, locale }: { page: ServicePage; locale: Locale }) {
  const faqHeading = locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions";

  return (
    <>
      <ServiceNav locale={locale} />
      <style>{`
        .sp-hero { padding: 9rem 2rem 4.5rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .sp-in { max-width: 880px; margin: 0 auto; }
        .sp-eyebrow { font-size: 0.75rem; font-weight: 600; color: var(--accent); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .sp-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 4.25rem); line-height: 1.04; letter-spacing: -0.03em; margin-bottom: 1.5rem; text-wrap: balance; }
        .sp-lead { font-size: 1.125rem; color: var(--muted); max-width: 620px; line-height: 1.72; margin-bottom: 2.25rem; }
        .sp-actions { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; }
        .sp-btn { display: inline-block; padding: 0.75rem 1.75rem; background: var(--accent); color: #fff; font-weight: 500; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; }
        .sp-btn:hover { opacity: 0.88; }
        .sp-ghost { color: var(--text); font-size: 0.9375rem; font-weight: 500; text-decoration: none; }
        .sp-ghost:hover { color: var(--accent); }
        .sp-wrap { max-width: 1100px; margin: 0 auto; padding: 4.5rem 2rem; }
        .sp-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .sp-h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.12; margin-bottom: 1.25rem; text-wrap: balance; }
        .sp-body { font-size: 1.0625rem; color: var(--muted); max-width: 620px; line-height: 1.75; }
        .sp-body + .sp-body { margin-top: 1.25rem; }
        .sp-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .sp-stat { background: #fafbff; padding: 2.25rem 1.75rem; }
        .sp-stat-n { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3.2vw, 2.75rem); color: var(--accent); letter-spacing: -0.04em; margin-bottom: 0.35rem; }
        .sp-stat-l { font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem; }
        .sp-stat-c { font-size: 0.8125rem; color: var(--muted); }
        .sp-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); margin-top: 3rem; }
        .sp-card { background: #fff; padding: 2.25rem; transition: background 0.2s; }
        .sp-card:hover { background: #f5f8ff; }
        .sp-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,74,173,0.07); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: 1.25rem; }
        .sp-card-t { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.6rem; }
        .sp-card-d { font-size: 0.9375rem; color: var(--muted); line-height: 1.7; }
        .sp-steps-sec { border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .sp-steps-sec.dark { background: #0a0f1e; }
        .sp-steps-sec.dark .sp-h2 { color: #fff; }
        .sp-steps-sec.dark .sp-body { color: rgba(255,255,255,0.6); }
        .sp-steps-sec.dark .sp-step-t { color: #fff; }
        .sp-steps-sec.dark .sp-step-d { color: rgba(255,255,255,0.55); }
        .sp-steps-sec.dark .sp-step-n { color: rgba(0,74,173,0.75); }
        .sp-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 3rem; }
        .sp-step-n { font-family: var(--font-display); font-weight: 800; font-size: 1.75rem; color: rgba(0,74,173,0.2); letter-spacing: -0.04em; margin-bottom: 0.75rem; }
        .sp-step-t { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; }
        .sp-step-d { font-size: 0.9rem; color: var(--muted); line-height: 1.65; }
        .sp-bullets { background: #0a0f1e; color: #fff; }
        .sp-bullets .sp-h2 { color: #fff; }
        .sp-bullets .sp-body { color: rgba(255,255,255,0.6); }
        .sp-bl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .sp-bl { list-style: none; display: flex; flex-direction: column; gap: 1.1rem; margin: 0; padding: 0; }
        .sp-bl li { display: flex; gap: 0.875rem; font-size: 0.9375rem; line-height: 1.65; color: rgba(255,255,255,0.8); }
        .sp-bl li::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .sp-faq { max-width: 780px; margin: 0 auto; padding: 4.5rem 2rem; }
        .sp-faq-h { text-align: center; margin-bottom: 2.5rem; }
        .sp-faq-item { border-bottom: 1px solid rgba(0,74,173,0.1); padding: 1.75rem 0; }
        .sp-faq-q { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.75rem; }
        .sp-faq-a { font-size: 0.9375rem; color: var(--muted); line-height: 1.75; }
        .sp-rel { background: #f5f8ff; border-top: 1px solid rgba(0,74,173,0.1); padding: 3.5rem 2rem; }
        .sp-rel-in { max-width: 1100px; margin: 0 auto; }
        .sp-rel-t { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 1.5rem; }
        .sp-rel-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .sp-rel-link { background: #fff; border: 1px solid rgba(0,74,173,0.15); border-radius: 999px; padding: 0.5rem 1.25rem; font-size: 0.875rem; font-weight: 500; color: var(--text); text-decoration: none; transition: border-color 0.18s, color 0.18s; }
        .sp-rel-link:hover { border-color: var(--accent); color: var(--accent); }
        @media (max-width: 900px) {
          .sp-cards { grid-template-columns: 1fr; }
          .sp-stats { grid-template-columns: 1fr 1fr; }
          .sp-steps { grid-template-columns: 1fr 1fr; }
          .sp-bl-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <section className="sp-hero">
        <div className="sp-in">
          <div className="sp-eyebrow">{page.eyebrow}</div>
          <h1><Emphasis text={page.title} /></h1>
          <p className="sp-lead">{page.lead}</p>
          <div className="sp-actions">
            <Link href={locale === "es" ? "/#contacto" : "/en#contact"} className="sp-btn">{page.primaryCta}</Link>
            {page.secondaryCta && <a href="#detalle" className="sp-ghost">{page.secondaryCta} →</a>}
          </div>
        </div>
      </section>

      {page.stats && (
        <div className="sp-stats">
          {page.stats.map((s) => (
            <div className="sp-stat" key={s.n + s.l}>
              <div className="sp-stat-n">{s.n}</div>
              <div className="sp-stat-l">{s.l}</div>
              <div className="sp-stat-c">{s.c}</div>
            </div>
          ))}
        </div>
      )}

      {page.intro && (
        <div className="sp-wrap" style={{ borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <div className="sp-tag">{page.intro.tag}</div>
          <h2 className="sp-h2">{page.intro.title}</h2>
          {page.intro.paragraphs.map((p, i) => <p className="sp-body" key={i}>{p}</p>)}
        </div>
      )}

      {page.cards && (
        <div className="sp-wrap" id="detalle">
          <div className="sp-tag">{page.cards.tag}</div>
          <h2 className="sp-h2">{page.cards.title}</h2>
          {page.cards.lead && <p className="sp-body">{page.cards.lead}</p>}
          <div className="sp-cards">
            {page.cards.items.map((c) => (
              <div className="sp-card" key={c.title}>
                {c.icon && <div className="sp-icon">{c.icon}</div>}
                <div className="sp-card-t">{c.title}</div>
                <p className="sp-card-d">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {page.steps && (
        <div className={`sp-steps-sec${page.steps.dark ? " dark" : ""}`}>
          <div className="sp-wrap">
            <div className="sp-tag" style={page.steps.dark ? { color: "rgba(255,255,255,0.45)" } : undefined}>{page.steps.tag}</div>
            <h2 className="sp-h2">{page.steps.title}</h2>
            {page.steps.lead && <p className="sp-body">{page.steps.lead}</p>}
            <div className="sp-steps">
              {page.steps.items.map((s) => (
                <div key={s.n}>
                  <div className="sp-step-n">{s.n}</div>
                  <div className="sp-step-t">{s.t}</div>
                  <p className="sp-step-d">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page.bullets && (
        <div className="sp-bullets">
          <div className="sp-wrap">
            <div className="sp-bl-grid">
              <div>
                <div className="sp-tag" style={{ color: "rgba(255,255,255,0.45)" }}>{page.bullets.tag}</div>
                <h2 className="sp-h2">{page.bullets.title}</h2>
                {page.bullets.lead && <p className="sp-body">{page.bullets.lead}</p>}
              </div>
              <ul className="sp-bl">
                {page.bullets.items.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="sp-faq">
        <div className="sp-faq-h">
          <div className="sp-tag">FAQ</div>
          <h2 className="sp-h2">{faqHeading}</h2>
        </div>
        {page.faqs.map((f) => (
          <div className="sp-faq-item" key={f.q}>
            <div className="sp-faq-q">{f.q}</div>
            <p className="sp-faq-a">{f.a}</p>
          </div>
        ))}
      </div>

      {page.related && (
        <div className="sp-rel">
          <div className="sp-rel-in">
            <div className="sp-rel-t">{page.related.title}</div>
            <div className="sp-rel-links">
              {page.related.links.map((l) => (
                <Link href={l.href} className="sp-rel-link" key={l.href}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <ServiceCta title={page.ctaTitle} body={page.ctaBody} locale={locale} />
      <SiteFooter locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
