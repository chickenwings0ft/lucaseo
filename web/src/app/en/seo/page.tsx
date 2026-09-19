import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import SeoResultsSection from "../../components/SeoResultsSection";

export const metadata: Metadata = {
  title: "SEO Services Australia — Lucaseo | Rank on Google & AI Search",
  description: "SEO that ranks you on Google + AI search engines. From zero to page-one rankings in months. Real case studies: 30→147 customers, 5 leads/week. Free audit. From $500 AUD/month.",
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
        /* ── Hero ── */
        .seo-hero { position: relative; background: #04091a; min-height: 100vh; display: flex; align-items: center; overflow: hidden; padding: 7rem 2.5rem 5rem; }
        .seo-hero__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,74,173,0.18) 0%, transparent 70%); pointer-events: none; }
        .seo-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; }
        .seo-hero__inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 500px; gap: 5rem; align-items: center; }
        .seo-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #4d9aff; background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 2rem; }
        .seo-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #4dff9a; box-shadow: 0 0 8px #4dff9a; }
        .seo-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.5rem, 4.5vw, 3.75rem); line-height: 1.08; letter-spacing: -0.03em; color: #fff; margin-bottom: 1.5rem; text-wrap: balance; }
        .seo-hero h1 em { font-style: normal; color: #4d9aff; }
        .seo-hero__lead { font-size: 1.125rem; color: rgba(255,255,255,0.65); line-height: 1.75; font-weight: 300; max-width: 520px; margin-bottom: 2.5rem; }
        .seo-hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .seo-hero__btn { display: inline-flex; align-items: center; padding: 0.875rem 1.875rem; background: #004aad; color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; transition: background 0.2s; }
        .seo-hero__btn:hover { background: #0057cc; }
        .seo-hero__btn--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.8); }
        .seo-hero__btn--ghost:hover { border-color: rgba(255,255,255,0.6); color: #fff; background: rgba(255,255,255,0.05); }
        .seo-hero__proof { display: flex; gap: 2rem; margin-top: 3rem; flex-wrap: wrap; }
        .seo-hero__stat { }
        .seo-hero__stat-n { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: #fff; letter-spacing: -0.03em; }
        .seo-hero__stat-l { font-size: 0.8125rem; color: rgba(255,255,255,0.45); margin-top: 0.125rem; }

        .seo-hero__phone-wrap { position: relative; display: flex; justify-content: center; }
        .seo-hero__phone-glow { position: absolute; inset: -20%; background: radial-gradient(circle, rgba(0,74,173,0.4) 0%, transparent 65%); pointer-events: none; }
        .seo-hero__phone { position: relative; z-index: 1; width: 100%; max-width: 440px; filter: drop-shadow(0 40px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(0,74,173,0.4)); animation: seo-float 4s ease-in-out infinite; }
        @keyframes seo-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }

        /* ── Proof bar ── */
        .seo-bar { background: #fff; border-bottom: 1px solid rgba(0,74,173,0.1); padding: 1.25rem 2.5rem; }
        .seo-bar__inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
        .seo-bar__item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; color: #5a6480; font-weight: 400; }
        .seo-bar__dot { width: 8px; height: 8px; border-radius: 50%; background: #4d9aff; flex-shrink: 0; }

        /* ── Sections ── */
        .seo-page { max-width: 1100px; margin: 0 auto; padding: 0 2.5rem; }
        .seo-section { padding: 5rem 0; border-bottom: 1px solid rgba(0,74,173,0.08); }
        .seo-section:last-child { border-bottom: none; }
        .seo-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .seo-h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.875rem, 3vw, 2.625rem); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.25rem; text-wrap: balance; }
        .seo-lead { font-size: 1.0625rem; color: #5a6480; max-width: 580px; line-height: 1.75; font-weight: 300; margin-bottom: 2rem; }

        /* ── Platforms grid ── */
        .seo-platforms { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
        .seo-platform { background: #f5f8ff; border: 1px solid rgba(0,74,173,0.08); border-radius: 10px; padding: 1.25rem 1.5rem; }
        .seo-platform__icon { font-size: 1.5rem; margin-bottom: 0.625rem; }
        .seo-platform__name { font-weight: 700; font-size: 0.9375rem; margin-bottom: 0.375rem; color: #0a0f1e; }
        .seo-platform__desc { font-size: 0.8125rem; color: #5a6480; line-height: 1.6; }

        /* ── Case studies ── */
        .seo-cases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2rem; }
        .seo-case { background: #f5f8ff; border-radius: 10px; padding: 1.75rem; border-top: 3px solid #004aad; }
        .seo-case__tag { display: inline-block; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #004aad; background: rgba(0,74,173,0.1); padding: 0.25rem 0.625rem; border-radius: 4px; margin-bottom: 1rem; }
        .seo-case__title { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 1rem; color: #0a0f1e; line-height: 1.3; }
        .seo-case__row { display: flex; gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.875rem; color: #5a6480; }
        .seo-case__row strong { color: #0a0f1e; flex-shrink: 0; }
        .seo-case__result { margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(0,74,173,0.1); font-size: 0.9375rem; font-weight: 700; color: #004aad; }

        /* ── Pricing ── */
        .seo-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
        .seo-plan { border: 1px solid rgba(0,74,173,0.15); border-radius: 12px; padding: 2rem; }
        .seo-plan--featured { border-color: #004aad; background: #f5f8ff; }
        .seo-plan__label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #004aad; margin-bottom: 0.75rem; }
        .seo-plan__price { font-family: var(--font-display); font-weight: 800; font-size: 2rem; color: #0a0f1e; letter-spacing: -0.03em; margin-bottom: 0.25rem; }
        .seo-plan__price span { font-size: 1rem; font-weight: 400; color: #5a6480; }
        .seo-plan__desc { font-size: 0.875rem; color: #5a6480; margin-bottom: 1.5rem; }
        .seo-plan__items { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.625rem; }
        .seo-plan__item { font-size: 0.875rem; color: #5a6480; display: flex; align-items: flex-start; gap: 0.5rem; }
        .seo-plan__item::before { content: '✓'; color: #004aad; font-weight: 700; flex-shrink: 0; }

        /* ── Timeline ── */
        .seo-timeline { display: flex; flex-direction: column; gap: 0; margin-top: 2rem; }
        .seo-tl-item { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; padding-bottom: 2rem; position: relative; }
        .seo-tl-item:not(:last-child)::before { content: ''; position: absolute; left: 36px; top: 36px; bottom: 0; width: 2px; background: rgba(0,74,173,0.1); }
        .seo-tl-dot { width: 36px; height: 36px; border-radius: 50%; background: #004aad; color: #fff; font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .seo-tl-month { font-size: 0.75rem; color: #5a6480; margin-top: 0.25rem; text-align: center; }
        .seo-tl-title { font-weight: 700; font-size: 1rem; color: #0a0f1e; margin-bottom: 0.375rem; }
        .seo-tl-body { font-size: 0.875rem; color: #5a6480; line-height: 1.65; }

        /* ── AI Proof ── */
        .seo-ai-proof { background: linear-gradient(135deg, #04091a 0%, #0a1940 100%); border-radius: 16px; padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; margin-top: 2rem; }
        .seo-ai-proof__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #4d9aff; margin-bottom: 1rem; }
        .seo-ai-proof__title { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 2.5vw, 2rem); color: #fff; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
        .seo-ai-proof__body { font-size: 0.9375rem; color: rgba(255,255,255,0.65); line-height: 1.75; font-weight: 300; }
        .seo-ai-proof__phone { width: 100%; max-width: 300px; margin: 0 auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)); }

        @media (max-width: 900px) {
          .seo-hero__inner { grid-template-columns: 1fr; }
          .seo-hero__phone-wrap { justify-content: center; }
          .seo-hero__phone { max-width: 320px; }
          .seo-platforms { grid-template-columns: repeat(2, 1fr); }
          .seo-cases { grid-template-columns: 1fr; }
          .seo-plans { grid-template-columns: 1fr; }
          .seo-ai-proof { grid-template-columns: 1fr; }
          .seo-ai-proof__phone { max-width: 200px; }
        }
        @media (max-width: 640px) {
          .seo-hero { padding: 6rem 1.25rem 4rem; }
          .seo-page { padding: 0 1.25rem; }
          .seo-platforms { grid-template-columns: 1fr; }
          .seo-bar { padding: 1.25rem; }
          .seo-bar__inner { gap: 1.25rem; justify-content: flex-start; }
          .seo-hero__proof { gap: 1.25rem; }
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
              Your customers search on Google, ChatGPT, Perplexity, and Claude. We make sure Lucaseo — and your business — shows up everywhere they look. Real rankings. Real results.
            </p>
            <div className="seo-hero__actions">
              <Link href="/#contact" className="seo-hero__btn">Get your free SEO audit</Link>
              <Link href="#how-it-works" className="seo-hero__btn seo-hero__btn--ghost">See how it works</Link>
            </div>
            <div className="seo-hero__proof">
              <div className="seo-hero__stat">
                <div className="seo-hero__stat-n">6 wks</div>
                <div className="seo-hero__stat-l">to page one</div>
              </div>
              <div className="seo-hero__stat">
                <div className="seo-hero__stat-n">30→147</div>
                <div className="seo-hero__stat-l">customers in 3 months</div>
              </div>
              <div className="seo-hero__stat">
                <div className="seo-hero__stat-n">AI Search</div>
                <div className="seo-hero__stat-l">included in every plan</div>
              </div>
            </div>
          </div>
          <div className="seo-hero__phone-wrap">
            <div className="seo-hero__phone-glow" />
            <Image
              src="/mockup-seo.png"
              alt="Google AI Overview recommending Lucaseo — Gold Coast SEO specialist"
              title="Google recommends Lucaseo for digital marketing in Australia"
              width={440}
              height={880}
              className="seo-hero__phone"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="seo-bar">
        <div className="seo-bar__inner">
          <div className="seo-bar__item"><span className="seo-bar__dot" />Recommended by Google AI Overview</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />Google + ChatGPT + Perplexity visibility</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />Gold Coast specialists</div>
          <div className="seo-bar__item"><span className="seo-bar__dot" />No lock-in contracts</div>
        </div>
      </div>

      {/* ── SEO for AI ticker ── */}
      <style>{`
        .seo-ai-ticker { background: #004aad; overflow: hidden; padding: 0; }
        .seo-ai-ticker__label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.5); text-align: center; padding: 1.25rem 0 0.5rem; }
        .seo-ai-track { display: flex; width: max-content; animation: seo-ai-scroll 14s linear infinite; }
        .seo-ai-track:hover { animation-play-state: paused; }
        @keyframes seo-ai-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .seo-ai-img { height: 200px; width: auto; flex-shrink: 0; margin-right: -15px; opacity: 0.9; }
        @media (max-width: 768px) { .seo-ai-img { height: 120px; } }
        @media (prefers-reduced-motion: reduce) { .seo-ai-track { animation: none; } }
      `}</style>
      <div className="seo-ai-ticker">
        <p className="seo-ai-ticker__label">SEO for AI search</p>
        <div className="seo-ai-track" aria-hidden="true">
          <img src="/ias-section.png" alt="AI search platforms: ChatGPT, Claude, Perplexity, Gemini and more" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
          <img src="/ias-section.png" alt="" className="seo-ai-img" />
        </div>
      </div>

      {/* ── SEO for AI — full section ── */}
      <style>{`
        .sai-wrap { background: #fff; color: #0a0f1e; padding: 6rem 2.5rem; }
        .sai-inner { max-width: 1100px; margin: 0 auto; }
        .sai-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #004aad; margin-bottom: 1.25rem; }
        .sai-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 1.5rem; text-wrap: balance; }
        .sai-h2 em { font-style: normal; color: #004aad; }
        .sai-lead { font-size: 1.125rem; color: #5a6480; max-width: 620px; line-height: 1.8; font-weight: 300; margin-bottom: 4rem; }
        .sai-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; margin-bottom: 4rem; }
        .sai-what { }
        .sai-what-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 1rem; color: #0a0f1e; }
        .sai-what-body { font-size: 0.9375rem; color: #5a6480; line-height: 1.8; font-weight: 300; margin-bottom: 1.5rem; }
        .sai-terms { display: flex; flex-direction: column; gap: 0.75rem; }
        .sai-term { display: grid; grid-template-columns: 52px 1fr; gap: 1rem; align-items: start; }
        .sai-term-badge { background: rgba(0,74,173,0.08); border: 1px solid rgba(0,74,173,0.2); color: #004aad; font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 6px; padding: 0.375rem 0.375rem; text-align: center; line-height: 1.2; }
        .sai-term-text { font-size: 0.875rem; color: #5a6480; line-height: 1.65; }
        .sai-term-text strong { color: #0a0f1e; font-weight: 600; display: block; margin-bottom: 0.125rem; }
        .sai-tactics { }
        .sai-tactics-title { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 1.25rem; color: #0a0f1e; }
        .sai-tactic-list { display: flex; flex-direction: column; gap: 0; }
        .sai-tactic { display: flex; gap: 1rem; padding: 1.125rem 0; border-bottom: 1px solid rgba(0,74,173,0.08); align-items: flex-start; }
        .sai-tactic:first-child { padding-top: 0; }
        .sai-tactic-icon { width: 36px; height: 36px; border-radius: 8px; background: rgba(0,74,173,0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
        .sai-tactic-name { font-size: 0.9375rem; font-weight: 600; color: #0a0f1e; margin-bottom: 0.25rem; }
        .sai-tactic-desc { font-size: 0.8125rem; color: #5a6480; line-height: 1.6; }
        .sai-platforms { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 3rem; }
        .sai-platform { background: #f5f8ff; border: 1px solid rgba(0,74,173,0.1); border-radius: 10px; padding: 1.25rem 1rem; text-align: center; }
        .sai-platform-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .sai-platform-name { font-size: 0.8125rem; font-weight: 600; color: #0a0f1e; margin-bottom: 0.25rem; }
        .sai-platform-share { font-size: 0.75rem; color: #5a6480; }
        .sai-vs { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .sai-vs-col { background: #f5f8ff; border: 1px solid rgba(0,74,173,0.1); border-radius: 12px; padding: 1.75rem; }
        .sai-vs-col--new { border-color: #004aad; background: rgba(0,74,173,0.06); }
        .sai-vs-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #5a6480; margin-bottom: 0.875rem; }
        .sai-vs-col--new .sai-vs-label { color: #004aad; }
        .sai-vs-title { font-weight: 700; font-size: 1rem; color: #0a0f1e; margin-bottom: 1rem; }
        .sai-vs-items { display: flex; flex-direction: column; gap: 0.625rem; }
        .sai-vs-item { font-size: 0.875rem; color: #5a6480; display: flex; gap: 0.625rem; align-items: flex-start; line-height: 1.5; }
        .sai-vs-item::before { content: '→'; color: #c0c8d8; flex-shrink: 0; }
        .sai-vs-col--new .sai-vs-item { color: #0a0f1e; }
        .sai-vs-col--new .sai-vs-item::before { content: '✓'; color: #004aad; }
        @media (max-width: 900px) {
          .sai-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .sai-platforms { grid-template-columns: repeat(3, 1fr); }
          .sai-vs { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .sai-wrap { padding: 4rem 1.25rem; }
          .sai-platforms { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
      <div className="sai-wrap">
        <div className="sai-inner">
          <div className="sai-eyebrow">AIO · AEO · GEO</div>
          <h2 className="sai-h2">Google is not the only one<br />recommending businesses anymore. <em>AI is.</em></h2>
          <p className="sai-lead">
            The way people search has changed. They&apos;re asking ChatGPT &ldquo;who&apos;s the best SEO agency in Gold Coast?&rdquo; instead of Googling it. If your business isn&apos;t in that answer, you don&apos;t exist to them.
          </p>

          <div className="sai-grid">
            <div className="sai-what">
              <div className="sai-what-title">What is SEO for AI?</div>
              <p className="sai-what-body">
                AI search engines don&apos;t rank pages — they synthesise answers from the sources they trust most. Getting your business cited by ChatGPT, Perplexity, or Google AI Overview is a new discipline that sits on top of traditional SEO. We call it AIO/AEO/GEO — and it&apos;s what separates businesses that will grow in the next 3 years from those that won&apos;t.
              </p>
              <div className="sai-terms">
                <div className="sai-term">
                  <div className="sai-term-badge">AIO</div>
                  <div className="sai-term-text"><strong>AI Overview Optimisation</strong>Getting featured in Google&apos;s AI-generated summaries at the top of search results.</div>
                </div>
                <div className="sai-term">
                  <div className="sai-term-badge">AEO</div>
                  <div className="sai-term-text"><strong>Answer Engine Optimisation</strong>Making your content the answer that ChatGPT, Claude and Perplexity cite when someone asks a question.</div>
                </div>
                <div className="sai-term">
                  <div className="sai-term-badge">GEO</div>
                  <div className="sai-term-text"><strong>Generative Engine Optimisation</strong>Building the authority signals that make AI models treat your brand as a trusted source by default.</div>
                </div>
              </div>
            </div>

            <div className="sai-tactics">
              <div className="sai-tactics-title">How we make it happen</div>
              <div className="sai-tactic-list">
                {[
                  { icon: "🏗️", name: "Structured data & schema", desc: "We tell AI exactly who you are, what you do, and where you operate — in the language machines understand." },
                  { icon: "✍️", name: "Question-based content", desc: "We write content that directly answers what your customers ask AI tools — so you become the cited source." },
                  { icon: "🔗", name: "Authority & citations", desc: "AI models trust brands that are mentioned across the web. We build the digital PR footprint that gets you cited." },
                  { icon: "📋", name: "E-E-A-T signals", desc: "Experience, expertise, authoritativeness, trustworthiness. Google and AI engines both weigh these heavily." },
                  { icon: "🌐", name: "Entity SEO", desc: "We establish your business as a recognised entity in AI knowledge graphs — so models know you exist." },
                  { icon: "⚡", name: "Technical crawlability", desc: "AI bots (OAI-SearchBot, Googlebot) must be able to read your site. We make sure nothing blocks them." },
                ].map(t => (
                  <div key={t.name} className="sai-tactic">
                    <div className="sai-tactic-icon">{t.icon}</div>
                    <div>
                      <div className="sai-tactic-name">{t.name}</div>
                      <div className="sai-tactic-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sai-platforms">
            {[
              { icon: "🔍", name: "Google AI Overview", share: "90%+ market share" },
              { icon: "🤖", name: "ChatGPT", share: "180M+ users" },
              { icon: "🌐", name: "Perplexity", share: "15M+ daily queries" },
              { icon: "💎", name: "Google Gemini", share: "Built into Android" },
              { icon: "⚡", name: "Claude (Anthropic)", share: "Growing fast" },
            ].map(p => (
              <div key={p.name} className="sai-platform">
                <div className="sai-platform-icon">{p.icon}</div>
                <div className="sai-platform-name">{p.name}</div>
                <div className="sai-platform-share">{p.share}</div>
              </div>
            ))}
          </div>

          <div className="sai-vs">
            <div className="sai-vs-col">
              <div className="sai-vs-label">Traditional SEO only</div>
              <div className="sai-vs-title">You rank on Google. Nothing else.</div>
              <div className="sai-vs-items">
                <div className="sai-vs-item">Invisible when users ask AI tools for recommendations</div>
                <div className="sai-vs-item">Missing 30%+ of searches happening outside Google</div>
                <div className="sai-vs-item">No entity recognition in AI knowledge graphs</div>
                <div className="sai-vs-item">Competitors with AI SEO will overtake you</div>
              </div>
            </div>
            <div className="sai-vs-col sai-vs-col--new">
              <div className="sai-vs-label">SEO + AI search (what we do)</div>
              <div className="sai-vs-title">You rank on Google. And get recommended by AI.</div>
              <div className="sai-vs-items">
                <div className="sai-vs-item">Cited by ChatGPT, Perplexity, Claude and Gemini</div>
                <div className="sai-vs-item">Featured in Google AI Overview for your key topics</div>
                <div className="sai-vs-item">Recognised entity in AI knowledge graphs</div>
                <div className="sai-vs-item">Traffic from every place your customers search</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seo-page">

        {/* ── Where your customers search ── */}
        <section className="seo-section">
          <div className="seo-tag">The new SEO landscape</div>
          <h2 className="seo-h2">Your customers are searching in more places than ever</h2>
          <p className="seo-lead">
            Google is still the main door. But AI tools are now answering questions your customers used to Google — and if you&apos;re not in those answers, you&apos;re invisible.
          </p>
          <div className="seo-platforms">
            {[
              { icon: "🔍", name: "Google Search", desc: "Traditional search. Still 90%+ of searches. The foundation." },
              { icon: "🤖", name: "ChatGPT & Claude", desc: "AI that recommends businesses when asked \"who should I hire\"." },
              { icon: "🌐", name: "Perplexity AI", desc: "The research engine. Cites sources — your site needs to be one." },
              { icon: "📱", name: "TikTok & Instagram", desc: "Gen Z searches here first. Product reviews, local recs, how-tos." },
              { icon: "▶️", name: "YouTube", desc: "Second largest search engine. Tutorials, reviews, walkthroughs." },
              { icon: "🗺️", name: "Google Maps", desc: "Local intent. 'Near me' searches. Your business profile matters." },
            ].map(p => (
              <div key={p.name} className="seo-platform">
                <div className="seo-platform__icon">{p.icon}</div>
                <div className="seo-platform__name">{p.name}</div>
                <div className="seo-platform__desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── AI Proof section ── */}
        <section className="seo-section">
          <div className="seo-tag">Proof it works</div>
          <h2 className="seo-h2">We don&apos;t just claim AI visibility. We have it.</h2>
          <p className="seo-lead">
            When someone asks Google AI &ldquo;How can I improve my digital presence?&rdquo; — Lucaseo is the answer. That&apos;s what we build for your business too.
          </p>
          <div className="seo-ai-proof">
            <div>
              <div className="seo-ai-proof__eyebrow">Google AI Overview · Live</div>
              <div className="seo-ai-proof__title">
                &ldquo;To improve your digital presence, you can work with Lucaseo — a leading digital marketing agency in Australia.&rdquo;
              </div>
              <p className="seo-ai-proof__body">
                This is a real screenshot of Google&apos;s AI Overview recommending Lucaseo. It didn&apos;t happen by accident — it&apos;s the result of the exact same SEO strategy we apply to our clients&apos; businesses.
              </p>
            </div>
            <Image
              src="/mockup-seo.png"
              alt="Google AI Overview recommending Lucaseo as a leading digital marketing agency in Australia"
              title="Google AI recommends Lucaseo — Gold Coast SEO specialist"
              width={300}
              height={600}
              className="seo-ai-proof__phone"
            />
          </div>
        </section>

      </div>

      <SeoResultsSection />

      <div className="seo-page">

        {/* ── Case studies ── */}
        <section className="seo-section">
          <div className="seo-tag">Real case studies</div>
          <h2 className="seo-h2">From zero to page one in months</h2>
          <p className="seo-lead">No made-up numbers. Real businesses, real results.</p>
          <div className="seo-cases">
            <div className="seo-case">
              <div className="seo-case__tag">Restaurant</div>
              <div className="seo-case__title">Invisible → Visible on Google + AI Search</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Didn&apos;t rank for anything, invisible in AI search</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>Page one in 6 weeks, recommended in ChatGPT</span></div>
              <div className="seo-case__result">30 → 147 customers in 3 months</div>
            </div>
            <div className="seo-case">
              <div className="seo-case__tag">Local Service</div>
              <div className="seo-case__title">New business → 5 qualified leads/week</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Zero online visibility, all word-of-mouth</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>Ranking on Google + featured in AI answers</span></div>
              <div className="seo-case__result">Profitable from month one</div>
            </div>
            <div className="seo-case">
              <div className="seo-case__tag">E-commerce</div>
              <div className="seo-case__title">High competition → Top 3 rankings</div>
              <div className="seo-case__row"><strong>Before:</strong><span>Competing against big players, no organic traffic</span></div>
              <div className="seo-case__row"><strong>After:</strong><span>15+ keywords on page one, cited by AI tools</span></div>
              <div className="seo-case__result">Profitable traffic without relying on Ads</div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="seo-section" id="how-it-works">
          <div className="seo-tag">The process</div>
          <h2 className="seo-h2">What happens after you get in touch</h2>
          <p className="seo-lead">No fluff, no 40-page audits you&apos;ll never read. Here&apos;s exactly what we do.</p>
          <div className="seo-timeline">
            {[
              { period: "Week 1", label: "Audit & Strategy", body: "We analyse your site, your competitors, and your market. You get a clear picture of where you are and where to start." },
              { period: "Month 1", label: "Technical foundations", body: "We fix what's breaking your rankings: speed, structure, indexing, internal links, schema markup." },
              { period: "Month 2-3", label: "Content & authority", body: "We build the content that ranks and the links that signal trust. AI-optimised from day one." },
              { period: "Month 4+", label: "Rankings & growth", body: "First movements appear. Traffic grows. AI tools start citing your business. Results compound." },
            ].map((item, i) => (
              <div key={i} className="seo-tl-item">
                <div>
                  <div className="seo-tl-dot">{i + 1}</div>
                  <div className="seo-tl-month">{item.period}</div>
                </div>
                <div>
                  <div className="seo-tl-title">{item.label}</div>
                  <div className="seo-tl-body">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="seo-section">
          <div className="seo-tag">Investment</div>
          <h2 className="seo-h2">Straightforward pricing. No surprises.</h2>
          <p className="seo-lead">Fixed monthly fee. No setup costs. No lock-in. Cancel anytime.</p>
          <div className="seo-plans">
            <div className="seo-plan">
              <div className="seo-plan__label">Standard SEO</div>
              <div className="seo-plan__price">$500–800 <span>AUD/month</span></div>
              <div className="seo-plan__desc">For small businesses and startups</div>
              <ul className="seo-plan__items">
                <li className="seo-plan__item">Technical SEO audit & fixes</li>
                <li className="seo-plan__item">Monthly content strategy</li>
                <li className="seo-plan__item">Google + AI search optimisation</li>
                <li className="seo-plan__item">Monthly reporting</li>
                <li className="seo-plan__item">Direct access to your specialist</li>
              </ul>
            </div>
            <div className="seo-plan seo-plan--featured">
              <div className="seo-plan__label">Advanced SEO</div>
              <div className="seo-plan__price">$1000–1500 <span>AUD/month</span></div>
              <div className="seo-plan__desc">For competitive industries &amp; e-commerce</div>
              <ul className="seo-plan__items">
                <li className="seo-plan__item">Everything in Standard</li>
                <li className="seo-plan__item">Competitor gap analysis monthly</li>
                <li className="seo-plan__item">Link building campaign</li>
                <li className="seo-plan__item">AI visibility optimisation</li>
                <li className="seo-plan__item">Priority response & weekly check-ins</li>
              </ul>
            </div>
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
