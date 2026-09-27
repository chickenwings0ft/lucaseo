import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import SeoResultsSection from "../../components/SeoResultsSection";
import PrefillQuoteButton from "../../components/PrefillQuoteButton";

export const metadata: Metadata = {
  title: "SEO Services Australia — Lucaseo | Rank on Google & AI Search",
  description: "SEO that ranks you on Google + AI search engines. From zero to page-one rankings in months. Real case studies: 30→147 customers, 5 leads/week. Free audit.",
  alternates: { canonical: "https://lucaseo.com/en/seo" },
};

const seoFaqs = [
  { q: "How long does SEO take to work?", a: "3–6 months for movement. 6–12 for solid results. It depends on your industry and competition. If anyone promises results in 30 days, they're lying." },
  { q: "Is SEO better than Google Ads?", a: "Both, but different. Google Ads = instant results, you pay per click. SEO = slower results, free traffic forever. Ideally you combine both: Ads for quick cash flow, SEO for long-term independence." },
  { q: "What happens if I switch agencies later?", a: "The work we did on your site is yours. We don't take it back. But it's important you find someone to keep optimising. Don't leave SEO abandoned." },
  { q: "Do you guarantee results?", a: "No. Nobody can guarantee rankings — if someone does, they're lying. What I do guarantee: professional work, transparency, and adjustments if something isn't working." },
  { q: "Does SEO actually work?", a: "Yes. But only if it's done properly and you're patient. Most agencies fail because they promise results in 30 days, don't optimise for where people actually search, or disappear after 3 months." },
  { q: "How do I get started?", a: "Grab your free audit. We analyse your current site, where you rank, where you should rank, what's failing, and where to start. No hard sell. No contracts." },
];

export default function SeoPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        /* ══════════════════════════════════════════════
           Design tokens — shared across every section
           ══════════════════════════════════════════════ */
        .seo-hero, .sai-wrap, .seo-page, .seo-ai-ticker, .seo-vs-wrap {
          --ink: #04091a;
          --text: #0a0f1e;
          --muted: #5a6480;
          --accent: #004aad;
          --accent-hover: #0057cc;
          --accent-light: #4d9aff;
          --success: #4dff9a;
          --surface: #f5f8ff;
          --card-border: rgba(0,74,173,0.12);
          --card-border-hover: rgba(0,74,173,0.32);
          --hairline: rgba(0,74,173,0.08);
        }

        /* ── Shared type scale & primitives ── */
        .seo-tag {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 1rem;
        }
        .seo-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.625rem, 5vw, 2.75rem); letter-spacing: -0.03em;
          line-height: 1.14; margin-bottom: 1.125rem; text-wrap: balance;
          color: var(--text);
        }
        .seo-lead {
          font-size: clamp(0.9375rem, 2vw, 1.0625rem); color: var(--muted);
          max-width: 600px; line-height: 1.75; font-weight: 300; margin-bottom: 2rem;
        }

        /* ── Tile — one card style reused by every grid on this page ── */
        .seo-tile {
          background: var(--surface); border: 1px solid var(--card-border);
          border-radius: 12px; transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }
        .seo-tile:hover {
          transform: translateY(-3px); border-color: var(--card-border-hover);
          box-shadow: 0 12px 28px rgba(0,74,173,0.1);
        }

        /* ══════════════════════════════════════════════
           Hero
           ══════════════════════════════════════════════ */
        .seo-hero { position: relative; background: var(--ink); min-height: 100svh; display: flex; align-items: center; overflow: hidden; padding: 6.5rem 1.25rem 4rem; }
        .seo-hero__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,74,173,0.18) 0%, transparent 70%); pointer-events: none; }
        .seo-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .seo-hero__inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 3rem; align-items: center; }
        .seo-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-light); background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.5rem; }
        .seo-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--success); box-shadow: 0 0 8px var(--success); flex-shrink: 0; }
        .seo-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 7vw, 3.75rem); line-height: 1.1; letter-spacing: -0.03em; color: #fff; margin-bottom: 1.25rem; text-wrap: balance; }
        .seo-hero h1 em { font-style: normal; color: var(--accent-light); }
        .seo-hero__lead { font-size: clamp(1rem, 2.5vw, 1.125rem); color: rgba(255,255,255,0.65); line-height: 1.7; font-weight: 300; max-width: 520px; margin-bottom: 2rem; }
        .seo-hero__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; }
        .seo-hero__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 1.75rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s; }
        .seo-hero__btn:hover { background: var(--accent-hover); }

        .seo-hero__phone-wrap { position: relative; display: flex; justify-content: center; width: 100%; }
        .seo-hero__phone-glow { position: absolute; inset: -20%; background: radial-gradient(circle, rgba(0,74,173,0.4) 0%, transparent 65%); pointer-events: none; }
        .seo-hero__phone { position: relative; z-index: 1; width: 100%; height: auto; max-width: 300px; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(0,74,173,0.4)); animation: seo-float 4s ease-in-out infinite; }
        @keyframes seo-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        @media (min-width: 1024px) {
          .seo-hero { padding: 7rem 2.5rem 5rem; }
          .seo-hero__inner { flex-direction: row; gap: 5rem; text-align: left; }
          .seo-hero__inner > div:first-child { flex: 1; }
          .seo-hero__phone-wrap { flex: 0 0 440px; }
          .seo-hero__phone { max-width: 440px; }
        }

        /* ── Intro: SEO & getting more customers ── */
        .seo-contact-cta { margin-top: 2.5rem; border-radius: 16px; background: linear-gradient(135deg, var(--ink) 0%, #0a1940 100%); padding: 2rem 1.5rem; text-align: center; }
        .seo-contact-cta__tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--success); margin-bottom: 0.875rem; }
        .seo-contact-cta__title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.25rem, 3.5vw, 1.75rem); color: #fff; letter-spacing: -0.02em; line-height: 1.3; margin: 0 auto 1rem; text-wrap: balance; max-width: 640px; }
        .seo-contact-cta__body { font-size: 0.9375rem; color: rgba(255,255,255,0.65); line-height: 1.75; font-weight: 300; max-width: 560px; margin: 0 auto 1.75rem; }
        .seo-contact-cta__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: #fff; color: var(--ink); font-weight: 700; font-size: 0.9375rem; border-radius: 8px; border: none; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .seo-contact-cta__btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.3); }
        @media (min-width: 900px) { .seo-contact-cta { padding: 3rem; } }

        /* ── Trust bar ── */
        .seo-bar { background: #fff; border-bottom: 1px solid var(--hairline); padding: 1.125rem 1.25rem; }
        .seo-bar__inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: flex-start; gap: 1.25rem; flex-wrap: wrap; }
        .seo-bar__item { display: flex; align-items: center; gap: 0.625rem; font-size: 0.8125rem; color: var(--muted); font-weight: 400; }
        .seo-bar__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-light); flex-shrink: 0; }
        @media (min-width: 900px) {
          .seo-bar { padding: 1.25rem 2.5rem; }
          .seo-bar__inner { justify-content: center; gap: 3rem; }
          .seo-bar__item { font-size: 0.875rem; }
        }

        /* ── Sections (max-width content column) ── */
        .seo-page { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }
        .seo-section { padding: 3.5rem 0; border-bottom: 1px solid var(--hairline); }
        .seo-section:last-child { border-bottom: none; }
        @media (min-width: 900px) {
          .seo-page { padding: 0 2.5rem; }
          .seo-section { padding: 5.5rem 0; }
        }

        /* ── Case studies ── */
        .seo-cases { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2rem; }
        .seo-case { padding: 1.625rem; border-top: 3px solid var(--accent); }
        .seo-case__tag { display: inline-block; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); background: rgba(0,74,173,0.1); padding: 0.25rem 0.625rem; border-radius: 4px; margin-bottom: 1rem; }
        .seo-case__title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 1rem; color: var(--text); line-height: 1.3; }
        .seo-case__row { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--muted); }
        .seo-case__row strong { color: var(--text); flex-shrink: 0; }
        .seo-case__result { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--card-border); font-size: 0.9375rem; font-weight: 700; color: var(--accent); }
        @media (min-width: 700px) { .seo-cases { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .seo-cases { grid-template-columns: repeat(3, 1fr); } }

        /* ── Our Methodology ── */
        .seo-meth-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
        .seo-meth-tactic { display: flex; gap: 1rem; align-items: flex-start; }
        .seo-meth-tactic-icon {
          font-size: 1.125rem; flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px;
          background: var(--surface); border: 1px solid var(--card-border);
          display: flex; align-items: center; justify-content: center;
        }
        .seo-meth-tactic-name { font-weight: 700; font-size: 0.9375rem; color: var(--text); margin-bottom: 0.25rem; }
        .seo-meth-tactic-desc { font-size: 0.8375rem; color: var(--muted); line-height: 1.6; }
        @media (min-width: 700px) { .seo-meth-grid { grid-template-columns: repeat(2, 1fr); column-gap: 2rem; row-gap: 2rem; } }

        /* ══════════════════════════════════════════════
           SEO vs SEM
           ══════════════════════════════════════════════ */
        .seo-vs-wrap { background: #fff; padding: 3.5rem 1.25rem; }
        .seo-vs-inner { max-width: 1100px; margin: 0 auto; }
        .seo-vs-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2.5rem; }
        .seo-vs-card { border-radius: 14px; padding: 1.75rem; border: 1px solid var(--card-border); }
        .seo-vs-card--seo { border-color: rgba(0,74,173,0.28); background: linear-gradient(180deg, rgba(0,74,173,0.06) 0%, rgba(0,74,173,0.02) 100%); }
        .seo-vs-card--sem { border-color: var(--card-border); background: #fafbfd; }
        .seo-vs-card__head { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem; }
        .seo-vs-card__icon { font-size: 1.375rem; width: 44px; height: 44px; border-radius: 10px; background: #fff; border: 1px solid var(--card-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .seo-vs-card__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.25rem; }
        .seo-vs-card--sem .seo-vs-card__label { color: var(--muted); }
        .seo-vs-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; color: var(--text); letter-spacing: -0.01em; line-height: 1.25; }
        .seo-vs-card__intro { font-size: 0.875rem; color: var(--muted); line-height: 1.65; margin-bottom: 1.25rem; }
        .seo-vs-card__list { list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.625rem; }
        .seo-vs-card__list li { font-size: 0.8375rem; color: var(--text); line-height: 1.55; padding-left: 1.375rem; position: relative; }
        .seo-vs-card--seo .seo-vs-card__list li::before { content: '✓'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .seo-vs-card--sem .seo-vs-card__list li::before { content: '–'; position: absolute; left: 0; color: var(--muted); font-weight: 700; }
        .seo-vs-chart { border-top: 1px solid var(--card-border); padding-top: 1.25rem; }
        .seo-vs-chart svg { width: 100%; height: auto; display: block; overflow: visible; }
        .seo-vs-chart__caption { font-size: 0.75rem; color: var(--muted); text-align: center; margin-top: 0.625rem; }

        .seo-vs-combo { margin-top: 1.5rem; border-radius: 16px; background: linear-gradient(135deg, var(--ink) 0%, #0a1940 100%); padding: 2rem 1.5rem; text-align: center; }
        .seo-vs-combo__tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--success); margin-bottom: 0.875rem; }
        .seo-vs-combo__title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.25rem, 3.5vw, 1.75rem); color: #fff; letter-spacing: -0.02em; line-height: 1.3; margin: 0 auto 1rem; text-wrap: balance; max-width: 640px; }
        .seo-vs-combo__body { font-size: 0.9375rem; color: rgba(255,255,255,0.65); line-height: 1.75; font-weight: 300; max-width: 560px; margin: 0 auto 1.75rem; }
        .seo-vs-combo__cta { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: #fff; color: var(--ink); font-weight: 700; font-size: 0.9375rem; border-radius: 8px; border: none; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .seo-vs-combo__cta:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(0,0,0,0.3); }

        @media (min-width: 700px) { .seo-vs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) {
          .seo-vs-wrap { padding: 5.5rem 2.5rem; }
          .seo-vs-combo { padding: 3rem; }
        }

        /* ══════════════════════════════════════════════
           SEO for AI search — ticker
           ══════════════════════════════════════════════ */
        .seo-ai-ticker { background: var(--accent); overflow: hidden; padding: 0; }
        .seo-ai-ticker__label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.5); text-align: center; padding: 1.25rem 0 0.5rem; }
        .seo-ai-track { display: flex; width: max-content; animation: seo-ai-scroll 14s linear infinite; }
        .seo-ai-track:hover { animation-play-state: paused; }
        @keyframes seo-ai-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .seo-ai-img { height: 120px; width: auto; flex-shrink: 0; margin-right: -15px; opacity: 0.9; }
        @media (min-width: 768px) { .seo-ai-img { height: 200px; } }
        @media (prefers-reduced-motion: reduce) { .seo-ai-track { animation: none; } }

        /* ══════════════════════════════════════════════
           SEO for AI search — compact explainer
           ══════════════════════════════════════════════ */
        .sai-wrap { background: #fff; color: var(--text); padding: 3.5rem 1.25rem; }
        .sai-inner { max-width: 1100px; margin: 0 auto; }
        .sai-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.125rem; }
        .sai-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.625rem, 5vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.16; margin-bottom: 1rem; text-wrap: balance; }
        .sai-lead { font-size: clamp(0.9375rem, 2vw, 1.0625rem); color: var(--muted); max-width: 600px; line-height: 1.7; font-weight: 300; margin-bottom: 2.5rem; }

        .sai-terms { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 2.5rem; }
        .sai-term { display: flex; gap: 0.875rem; align-items: flex-start; }
        .sai-term-badge { flex-shrink: 0; background: rgba(0,74,173,0.08); border: 1px solid rgba(0,74,173,0.2); color: var(--accent); font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.08em; border-radius: 6px; padding: 0.3rem 0.5rem; line-height: 1.2; }
        .sai-term-text { font-size: 0.8375rem; color: var(--muted); line-height: 1.55; padding-top: 0.2rem; }
        .sai-term-text strong { color: var(--text); font-weight: 600; }

        .sai-platforms { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.875rem; }
        .sai-platform { padding: 1.125rem 0.875rem; text-align: center; }
        .sai-platform-icon { font-size: 1.375rem; margin-bottom: 0.5rem; }
        .sai-platform-name { font-size: 0.8125rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
        .sai-platform-share { font-size: 0.75rem; color: var(--muted); }

        @media (min-width: 560px) { .sai-platforms { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 700px) { .sai-terms { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 900px) {
          .sai-wrap { padding: 5.5rem 2.5rem; }
          .sai-platforms { grid-template-columns: repeat(6, 1fr); }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="seo-hero">
        <div className="seo-hero__bg" />
        <div className="seo-hero__grid" />
        <div className="seo-hero__inner">
          <div>
            <div className="seo-hero__badge">Organic SEO · Gold Coast</div>
            <h1>
              Get found on Google.<br />
              Get recommended by <em>AI.</em>
            </h1>
            <p className="seo-hero__lead">
              Google is still where most of your customers start looking. We get you ranking at the top of it — and increasingly, they&apos;re also asking ChatGPT, Perplexity, and Claude. We make sure you show up there too. Real rankings. Real results.
            </p>
            <div className="seo-hero__actions">
              <PrefillQuoteButton message="" className="seo-hero__btn">Get your free SEO audit</PrefillQuoteButton>
            </div>
          </div>
          <div className="seo-hero__phone-wrap">
            <div className="seo-hero__phone-glow" />
            <Image
              src="/mockup-seo.png"
              alt="Google AI Overview recommending Lucaseo — Gold Coast SEO specialist"
              title="Google recommends Lucaseo for digital marketing in Australia"
              width={440}
              height={660}
              className="seo-hero__phone"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Intro: SEO & getting more customers ── */}
      <div className="seo-page">
        <section className="seo-section">
          <div className="seo-tag">Why SEO matters</div>
          <h2 className="seo-h2">More people are searching for what you sell online — right now.</h2>
          <p className="seo-lead">
            Every day, potential customers in Gold Coast search Google (and increasingly ChatGPT and Perplexity) for businesses like yours. SEO is how you show up in those searches, again and again, without paying for every single click. It&apos;s not a trick — it&apos;s being visible, being useful, and earning the kind of trust that turns a search into a customer.
          </p>
          <div className="seo-contact-cta">
            <div className="seo-contact-cta__tag">No fixed packages</div>
            <h3 className="seo-contact-cta__title">Every business is different, so your quote should be too.</h3>
            <p className="seo-contact-cta__body">
              We don&apos;t sell generic plans off a price list. Tell us about your business — what you do, who your customers are, where you&apos;re getting stuck — and we&apos;ll put together a quote built specifically around that. No guesswork, no hard sell.
            </p>
            <PrefillQuoteButton message="" className="seo-contact-cta__btn">
              Get your personalised quote →
            </PrefillQuoteButton>
          </div>
        </section>
      </div>

      {/* ── Trust bar ── */}
      <div className="seo-bar">
        <div className="seo-bar__inner">
          <div className="seo-bar__item"><span className="seo-bar__dot" />Page-one Google rankings</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />Recommended by Google AI Overview</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />Gold Coast specialists</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />No lock-in contracts</div>
        </div>
      </div>

      {/* ── SEO vs SEM ── */}
      <div className="seo-vs-wrap">
        <div className="seo-vs-inner">
          <div className="seo-tag">SEO vs SEM</div>
          <h2 className="seo-h2">SEO or Google Ads? Most businesses get this wrong.</h2>
          <p className="seo-lead">
            Both get you customers from Google. But they work in completely different ways — and picking the wrong one wastes months and budget.
          </p>

          <div className="seo-vs-grid">
            {/* SEO card */}
            <div className="seo-vs-card seo-vs-card--seo">
              <div className="seo-vs-card__head">
                <span className="seo-vs-card__icon">📈</span>
                <div>
                  <div className="seo-vs-card__label">SEO · Organic ranking</div>
                  <div className="seo-vs-card__title">Build it once. It works for years.</div>
                </div>
              </div>
              <p className="seo-vs-card__intro">SEO earns your spot on Google through relevance and authority. Nobody can outbid you for it.</p>
              <ul className="seo-vs-card__list">
                <li>No cost per click, no matter how much traffic you get</li>
                <li>Compounds over time — the longer you rank, the harder you are to displace</li>
                <li>An asset you own. Stop paying us and your rankings don&apos;t vanish</li>
                <li>Takes 3–6 months to build momentum</li>
              </ul>
              <div className="seo-vs-chart">
                <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="70" width="24" height="10" fill="var(--accent)" opacity="0.45" />
                  <rect x="42" y="62" width="24" height="18" fill="var(--accent)" opacity="0.55" />
                  <rect x="74" y="53" width="24" height="27" fill="var(--accent)" opacity="0.65" />
                  <rect x="106" y="42" width="24" height="38" fill="var(--accent)" opacity="0.78" />
                  <rect x="138" y="30" width="24" height="50" fill="var(--accent)" opacity="0.9" />
                  <rect x="170" y="16" width="24" height="64" fill="var(--accent)" opacity="1" />
                  <text x="22" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 1</text>
                  <text x="182" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 12</text>
                </svg>
                <div className="seo-vs-chart__caption">Traffic keeps climbing, month after month</div>
              </div>
            </div>

            {/* SEM card */}
            <div className="seo-vs-card seo-vs-card--sem">
              <div className="seo-vs-card__head">
                <span className="seo-vs-card__icon">⚡</span>
                <div>
                  <div className="seo-vs-card__label">SEM · Google Ads</div>
                  <div className="seo-vs-card__title">Pay for the spot. Lose it when you stop.</div>
                </div>
              </div>
              <p className="seo-vs-card__intro">SEM buys your spot at the top of Google, instantly. The moment your budget stops, so does your traffic.</p>
              <ul className="seo-vs-card__list">
                <li>Live on page one from day one</li>
                <li>You pay for every single click, indefinitely</li>
                <li>Cancel your budget and traffic drops to zero — same day</li>
                <li>Best for fast wins, launches, and testing what converts</li>
              </ul>
              <div className="seo-vs-chart">
                <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
                  <rect x="42" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
                  <rect x="74" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
                  <rect x="106" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
                  <line x1="132" y1="4" x2="132" y2="80" stroke="var(--muted)" strokeWidth="1" strokeDasharray="3,3" />
                  <rect x="138" y="74" width="24" height="6" fill="var(--muted)" opacity="0.35" />
                  <rect x="170" y="74" width="24" height="6" fill="var(--muted)" opacity="0.35" />
                  <text x="132" y="10" fontSize="8" fill="var(--muted)" textAnchor="middle">Budget stops</text>
                  <text x="22" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 1</text>
                  <text x="182" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 12</text>
                </svg>
                <div className="seo-vs-chart__caption">Traffic stops the day you stop paying</div>
              </div>
            </div>
          </div>

          <div className="seo-vs-combo">
            <div className="seo-vs-combo__tag">The smart move</div>
            <h3 className="seo-vs-combo__title">Don&apos;t choose. Run both, and let each one do its job.</h3>
            <p className="seo-vs-combo__body">
              Use SEM to get customers today, while SEO builds in the background. Once you&apos;re ranking organically, SEO does the heavy lifting for free — and you keep Ads only for the handful of keywords worth bidding on. Short-term traffic now. A long-term asset for later.
            </p>
            <PrefillQuoteButton message="10% SEO+SEM discount" className="seo-vs-combo__cta">
              Claim 10% off SEO + SEM →
            </PrefillQuoteButton>
          </div>
        </div>
      </div>

      {/* ── SEO for AI ticker ── */}
      <div className="seo-ai-ticker">
        <p className="seo-ai-ticker__label">SEO for AI search</p>
        <div className="seo-ai-track" aria-hidden="true">
          <img src="/ias-section.png" alt="AI search platforms: ChatGPT, Claude, Perplexity, Gemini and more" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
        </div>
      </div>

      {/* ── SEO for AI — compact section ── */}
      <div className="sai-wrap">
        <div className="sai-inner">
          <div className="sai-eyebrow">AIO · AEO · GEO</div>
          <h2 className="sai-h2">Your customers now also ask AI.</h2>
          <p className="sai-lead">
            ChatGPT, Perplexity and Google&apos;s own AI Overview now answer questions people used to Google. We make sure you&apos;re in those answers too.
          </p>

          <div className="sai-terms">
            <div className="sai-term">
              <div className="sai-term-badge">AIO</div>
              <div className="sai-term-text"><strong>AI Overview Optimisation.</strong> Featured in Google&apos;s AI-generated summaries.</div>
            </div>
            <div className="sai-term">
              <div className="sai-term-badge">AEO</div>
              <div className="sai-term-text"><strong>Answer Engine Optimisation.</strong> The answer ChatGPT and Perplexity cite.</div>
            </div>
            <div className="sai-term">
              <div className="sai-term-badge">GEO</div>
              <div className="sai-term-text"><strong>Generative Engine Optimisation.</strong> The authority signals AI models trust.</div>
            </div>
          </div>

          <div className="sai-platforms">
            {[
              { icon: "🔵", name: "Google Search", share: "8.5B searches/day" },
              { icon: "🔍", name: "Google AI Overview", share: "90%+ market share" },
              { icon: "🤖", name: "ChatGPT", share: "180M+ users" },
              { icon: "🌐", name: "Perplexity", share: "15M+ daily queries" },
              { icon: "🗺️", name: "Google Maps", share: "\"Near me\" local search" },
              { icon: "💎", name: "Google Gemini", share: "Built into Android" },
            ].map(p => (
              <div key={p.name} className="seo-tile sai-platform">
                <div className="sai-platform-icon">{p.icon}</div>
                <div className="sai-platform-name">{p.name}</div>
                <div className="sai-platform-share">{p.share}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SeoResultsSection />

      <div className="seo-page">

        {/* ── Case studies ── */}
        <section className="seo-section">
          <div className="seo-tag">Real case studies</div>
          <h2 className="seo-h2">From zero to page one in months</h2>
          <p className="seo-lead">No made-up numbers. Real businesses, real results.</p>
          <div className="seo-cases">
            <div className="seo-tile seo-case">
              <div className="seo-case__tag">Restaurant</div>
              <div className="seo-case__title">Invisible → Visible on Google + AI Search</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Didn&apos;t rank for anything, invisible in AI search</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>Page one in 6 weeks, recommended in ChatGPT</span></div>
              <div className="seo-case__result">30 → 147 customers in 3 months</div>
            </div>
            <div className="seo-tile seo-case">
              <div className="seo-case__tag">Local Service</div>
              <div className="seo-case__title">New business → 5 qualified leads/week</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Zero online visibility, all word-of-mouth</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>Ranking on Google + featured in AI answers</span></div>
              <div className="seo-case__result">Profitable from month one</div>
            </div>
            <div className="seo-tile seo-case">
              <div className="seo-case__tag">E-commerce</div>
              <div className="seo-case__title">High competition → Top 3 rankings</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Competing against big players, no organic traffic</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>15+ keywords on page one, cited by AI tools</span></div>
              <div className="seo-case__result">Profitable traffic without relying on Ads</div>
            </div>
          </div>
        </section>

        {/* ── Our Methodology ── */}
        <section className="seo-section" id="methodology">
          <div className="seo-tag">Our methodology</div>
          <h2 className="seo-h2">How we get you ranking — on Google and AI.</h2>
          <p className="seo-lead">A clear process. No 40-page audits you&apos;ll never read. No vague promises.</p>

          <div className="seo-meth-grid">
            {[
              { icon: "🏗️", name: "Structured data & schema", desc: "We tell AI exactly who you are, what you do, and where you operate — in the language machines understand." },
              { icon: "✍️", name: "Question-based content", desc: "We write content that directly answers what your customers ask AI tools — so you become the cited source." },
              { icon: "🔗", name: "Authority & citations", desc: "AI models trust brands mentioned across the web. We build the digital PR footprint that gets you cited." },
              { icon: "📋", name: "E-E-A-T signals", desc: "Experience, expertise, authoritativeness, trustworthiness. Google and AI engines both weigh these heavily." },
              { icon: "🌐", name: "Entity SEO", desc: "We establish your business as a recognised entity in AI knowledge graphs — so models know you exist." },
              { icon: "⚡", name: "Technical crawlability", desc: "AI bots (OAI-SearchBot, Googlebot) must be able to read your site. We make sure nothing blocks them." },
            ].map(t => (
              <div key={t.name} className="seo-meth-tactic">
                <div className="seo-meth-tactic-icon">{t.icon}</div>
                <div>
                  <div className="seo-meth-tactic-name">{t.name}</div>
                  <div className="seo-meth-tactic-desc">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <FaqSection topic="SEO and search ranking" faqs={seoFaqs} title="Frequently asked questions about SEO" />

      <ServiceAreaMap
        eyebrow="Service Area · SEO"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your SEO covered.</>}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="Ready to show up where your customers are searching?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />
    </>
  );
}
