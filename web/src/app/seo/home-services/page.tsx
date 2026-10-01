import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";
import FaqSection from "../../components/FaqSection";
import SeoHero from "../../components/SeoHero";
import SeoVsSemGraphic from "../../components/SeoVsSemGraphic";
import AiSearchGraphic from "../../components/AiSearchGraphic";
import SeoResultsSection from "../../components/SeoResultsSection";

export const metadata: Metadata = {
  title: "SEO for Home & Trade Services Gold Coast | Lucaseo",
  description:
    "Local SEO for Gold Coast cleaners, plumbers, electricians and other home service businesses. Rank across every suburb you service, win the call, not just the click.",
  alternates: { canonical: "https://lucaseo.com/seo/home-services" },
};

const relatedIndustries = [
  { name: "Restaurants", href: "/seo/restaurants" },
  { name: "Cafes", href: "/seo/cafes" },
  { name: "Barbershops", href: "/seo/barbershops" },
];

const relatedSuburbs = [
  { name: "Nerang", href: "/seo/nerang" },
  { name: "Labrador", href: "/seo/labrador" },
  { name: "Coomera", href: "/seo/coomera" },
  { name: "Helensvale", href: "/seo/helensvale" },
  { name: "Robina", href: "/seo/robina" },
];

const faqs = [
  {
    q: "I service multiple suburbs, not just where I'm based — how does that work?",
    a: "We build your Google Business Profile and service-area pages around every suburb you actually work in, not just your home address. A cleaner based in Nerang but servicing Robina and Helensvale needs to rank in all three, and that takes a deliberate strategy, not luck.",
  },
  {
    q: "I don't have a public shopfront — can I even have a strong Google listing?",
    a: "Yes, and it's often more important for you than for a retail business. Google has a specific service-area business setup for exactly this case — your listing can rank locally without displaying a physical address customers would visit.",
  },
  {
    q: "Can SEO actually capture emergency, same-day searches?",
    a: "Yes — these are some of the highest-intent searches that exist. Someone searching 'emergency plumber near me' is calling within minutes, and a well-optimised, fast-loading, click-to-call-ready listing is what wins that call.",
  },
  {
    q: "Does a trade business really need reviews the way a restaurant does?",
    a: "Arguably more. You're asking a stranger to let you into their home or trust you with an expensive job — a wall of specific, recent reviews is often the single biggest thing standing between a nervous customer and the call.",
    citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
  },
];

export default function HomeServicesSeoPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .sub-page, .sub-vs-wrap, .sub-ai-wrap {
          --ink: #04091a;
          --accent-hover: #0057cc;
          --accent-light: #4d9aff;
          --success: #4dff9a;
          --surface: #f5f8ff;
          --card-border: rgba(0,74,173,0.12);
          --hairline: rgba(0,74,173,0.08);
        }
        .sub-page { max-width: 900px; margin: 0 auto; padding: 0 1.25rem; }
        .sub-section { padding: 3rem 0; border-bottom: 1px solid var(--hairline); }
        .sub-section:last-child { border-bottom: none; }
        .sub-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .sub-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.375rem, 3.5vw, 1.875rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; text-wrap: balance; color: var(--text); }
        .sub-p { font-size: 0.9375rem; color: var(--muted); line-height: 1.75; font-weight: 300; max-width: 680px; }
        .sub-p + .sub-p { margin-top: 1rem; }
        .sub-p a, .sub-section a { color: var(--accent); font-weight: 600; text-decoration: none; }
        .sub-p a:hover, .sub-section a:hover { text-decoration: underline; }
        .sub-intro { font-size: 1.0625rem; color: var(--text); line-height: 1.8; font-weight: 300; max-width: 720px; }
        .sub-queries { display: flex; flex-direction: column; gap: 0.625rem; margin: 1.5rem 0; }
        .sub-query { font-size: 0.875rem; color: var(--text); background: var(--surface); border: 1px solid var(--card-border); border-radius: 8px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.625rem; }
        .sub-query::before { content: '🔍'; font-size: 0.8125rem; flex-shrink: 0; }
        .sub-nearby { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }
        .sub-nearby a { display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: 8px; background: var(--surface); border: 1px solid var(--card-border); color: var(--accent); font-size: 0.875rem; font-weight: 600; text-decoration: none; transition: border-color 0.2s, transform 0.2s; }
        .sub-nearby a:hover { border-color: var(--accent); transform: translateY(-2px); }
        .sub-factors { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 1.5rem; }
        .sub-factor { background: var(--surface); border: 1px solid var(--card-border); border-radius: 12px; padding: 1.5rem; }
        .sub-factor__icon { font-size: 1.25rem; margin-bottom: 0.75rem; }
        .sub-factor h3 { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem; color: var(--text); }
        .sub-factor p { font-size: 0.875rem; color: var(--muted); line-height: 1.6; font-weight: 300; }
        .sub-vs-wrap { background: #fff; padding: 3rem 1.25rem; border-bottom: 1px solid var(--hairline); }
        .sub-vs-inner { max-width: 1100px; margin: 0 auto; }
        .sub-ai-wrap { background: #fff; padding: 3rem 1.25rem; border-bottom: 1px solid var(--hairline); }
        .sub-ai-inner { max-width: 1100px; margin: 0 auto; }
        @media (min-width: 700px) {
          .sub-page { padding: 0 2.5rem; }
          .sub-section { padding: 4rem 0; }
          .sub-vs-wrap, .sub-ai-wrap { padding: 4rem 2.5rem; }
          .sub-factors { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      <SeoHero
        badge="Local SEO · Home & Trade Services"
        h1={<>Be the call that gets<br />answered first, with <em>AI search.</em></>}
        lead="No shopfront, no foot traffic — your Google Business Profile is the only storefront a plumber, cleaner or electrician has. We make sure it's the one that gets the call."
        ctaMessage="Interested in SEO for my home service business"
      />

      <div className="sub-page">
        <div style={{ fontSize: "0.8125rem", color: "var(--muted)", padding: "1rem 0 0" }}>
          <Link href="/seo" style={{ color: "var(--accent)", textDecoration: "none" }}>SEO</Link> · Home &amp; Trade Services
        </div>

        <section className="sub-section">
          <div className="sub-tag">Why SEO matters for home services</div>
          <p className="sub-intro">
            Home service businesses — cleaners, plumbers, electricians, pest control, handymen — don&apos;t get walked past. Nobody discovers you browsing a high street. Every single customer finds you through a search, almost always with some urgency behind it: a burst pipe, a bond clean due tomorrow, power that&apos;s just gone out. That makes local SEO not a marketing nice-to-have for this industry but the entire front door of the business.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">How customers search</div>
          <p className="sub-p">These searches are practical, local and close to a decision — someone typing this has a problem now and is choosing who to call within minutes, often from a phone, often from wherever the problem actually is.</p>
          <div className="sub-queries">
            <div className="sub-query">emergency plumber near me</div>
            <div className="sub-query">bond cleaner [suburb] Gold Coast</div>
            <div className="sub-query">electrician near me today</div>
            <div className="sub-query">pest control Gold Coast quote</div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-tag">Why reviews matter here</div>
          <h2 className="sub-h2">The fastest ranking signal you can actually control</h2>
          <p className="sub-p">
            A trade review rarely talks about ambience — it talks about whether the job was done properly, on time, for the price quoted. That&apos;s exactly the proof a nervous customer is scanning for before they let a stranger into their home, and exactly what our{" "}
            <Link href="/nfc-review-cards">tap-to-review NFC cards</Link> are built to capture, right at the moment the job&apos;s done and the customer&apos;s happiest.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">What actually moves the needle</div>
          <h2 className="sub-h2">Four things we prioritise for every trade client</h2>
          <div className="sub-factors">
            <div className="sub-factor">
              <div className="sub-factor__icon">🗺️</div>
              <h3>Service-area coverage</h3>
              <p>Ranking across every suburb you actually service, not just the one you&apos;re based in — most trades leave this on the table entirely.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">📞</div>
              <h3>Click-to-call optimisation</h3>
              <p>These searches end in a phone call, not a browse — your listing should make that one tap away, not buried behind a contact form.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">🚨</div>
              <h3>Urgency capture</h3>
              <p>&quot;Near me now&quot; and emergency searches convert fast — being visible and fast to load wins jobs a slow competitor simply never sees.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">🤝</div>
              <h3>Trust signals</h3>
              <p>Letting a stranger into your home or car is a leap — reviews, licensing and clear credentials are what make that leap feel safe.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="sub-vs-wrap">
        <div className="sub-vs-inner">
          <SeoVsSemGraphic ctaMessage="Interested in SEO + SEM for my home service business" />
        </div>
      </div>

      <div className="sub-ai-wrap">
        <div className="sub-ai-inner">
          <AiSearchGraphic />
        </div>
      </div>

      <SeoResultsSection />

      <div className="sub-page">
        <section className="sub-section">
          <div className="sub-tag">Trade-heavy suburbs we work in</div>
          <h2 className="sub-h2">Local SEO for your specific Gold Coast service area</h2>
          <div className="sub-nearby">
            {relatedSuburbs.map((s) => (
              <Link key={s.href} href={s.href}>{s.name}</Link>
            ))}
            <Link href="/seo">All suburbs →</Link>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-tag">Also serving</div>
          <h2 className="sub-h2">SEO for other Gold Coast industries</h2>
          <div className="sub-nearby">
            {relatedIndustries.map((i) => (
              <Link key={i.href} href={i.href}>{i.name}</Link>
            ))}
          </div>
        </section>
      </div>

      <FaqSection topic="SEO for home and trade services" faqs={faqs} title="Frequently asked questions — Home &amp; Trade Services SEO" />

      <ServiceCta
        title="Ready to be the call that gets answered first?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO for Home and Trade Services",
            provider: { "@type": "Organization", name: "Lucaseo", url: "https://lucaseo.com" },
            areaServed: { "@type": "Place", name: "Gold Coast, Queensland, Australia" },
            description: "Local SEO for Gold Coast home and trade service businesses — service-area visibility, click-to-call optimisation and AI search.",
          }),
        }}
      />

      <SiteFooter locale="en" />
    </>
  );
}
