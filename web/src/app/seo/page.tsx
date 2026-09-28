import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";
import ServiceCta from "../components/ServiceCta";
import FreeConsultationCta from "../components/FreeConsultationCta";
import ServiceAreaMap from "../components/ServiceAreaMap";
import FaqSection from "../components/FaqSection";
import SeoResultsSection from "../components/SeoResultsSection";
import PrefillQuoteButton from "../components/PrefillQuoteButton";
import SeoHero from "../components/SeoHero";
import SeoVsSemGraphic from "../components/SeoVsSemGraphic";
import AiSearchGraphic from "../components/AiSearchGraphic";

export const metadata: Metadata = {
  title: "SEO Services Australia — Lucaseo | Rank on Google & AI Search",
  description: "SEO that ranks you on Google + AI search engines. From zero to page-one rankings in months. Real case studies: 30→147 customers, 5 leads/week. Free audit.",
  alternates: { canonical: "https://lucaseo.com/seo" },
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
        .sai-wrap, .seo-page, .seo-ai-ticker, .seo-vs-wrap {
          --ink: #04091a;
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
        @media (min-width: 900px) {
          .seo-vs-wrap { padding: 5.5rem 2.5rem; }
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

        @media (min-width: 700px) { .sai-terms { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 900px) {
          .sai-wrap { padding: 5.5rem 2.5rem; }
        }
      `}</style>

      {/* ── Hero ── */}
      <SeoHero
        badge="Organic SEO · Gold Coast"
        h1={<>Get found on Google.<br />Get recommended by <em>AI.</em></>}
        lead="Google is still where most of your customers start looking. We get you ranking at the top of it — and increasingly, they're also asking ChatGPT, Perplexity, and Claude. We make sure you show up there too. Real rankings. Real results."
      />

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
          <SeoVsSemGraphic
            header={
              <>
                <div className="seo-tag">SEO vs SEM</div>
                <h2 className="seo-h2">SEO or Google Ads? Most businesses get this wrong.</h2>
                <p className="seo-lead">
                  Both get you customers from Google. But they work in completely different ways — and picking the wrong one wastes months and budget.
                </p>
              </>
            }
          />
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
          <AiSearchGraphic
            header={
              <>
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
              </>
            }
          />
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
        linkedSuburbs={{
          "Surfers Paradise": "/seo/surfers-paradise",
          "Broadbeach": "/seo/broadbeach",
          "Southport": "/seo/southport",
          "Robina": "/seo/robina",
          "Burleigh Heads": "/seo/burleigh-heads",
          "Coolangatta": "/seo/coolangatta",
          "Palm Beach": "/seo/palm-beach",
          "Nerang": "/seo/nerang",
          "Coomera": "/seo/coomera",
          "Helensvale": "/seo/helensvale",
          "Mermaid Beach": "/seo/mermaid-beach",
          "Miami": "/seo/miami",
          "Currumbin": "/seo/currumbin",
          "Varsity Lakes": "/seo/varsity-lakes",
          "Labrador": "/seo/labrador",
        }}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="Ready to show up where your customers are searching?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />
      <SiteFooter locale="en" />
    </>
  );
}
