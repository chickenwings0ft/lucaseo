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
  title: "SEO for Restaurants Gold Coast | Lucaseo",
  description:
    "Local SEO for Gold Coast restaurants. Google Business Profile, Maps visibility, menu SEO and AI search — built around how hungry people actually decide where to eat.",
  alternates: { canonical: "https://lucaseo.com/seo/restaurants" },
};

const relatedIndustries = [
  { name: "Cafes", href: "/seo/cafes" },
  { name: "Barbershops", href: "/seo/barbershops" },
  { name: "Home & Trade Services", href: "/seo/home-services" },
];

const relatedSuburbs = [
  { name: "Broadbeach", href: "/seo/broadbeach" },
  { name: "Mermaid Beach", href: "/seo/mermaid-beach" },
  { name: "Miami", href: "/seo/miami" },
  { name: "Surfers Paradise", href: "/seo/surfers-paradise" },
  { name: "Burleigh Heads", href: "/seo/burleigh-heads" },
];

const faqs = [
  {
    q: "Do you work with restaurants across the whole Gold Coast, not just one suburb?",
    a: "Yes — most of our restaurant clients serve one neighbourhood, so we build the strategy around that specific local pack, wherever on the Gold Coast you are. The fundamentals are the same from Coolangatta to Coomera; what changes is who you're actually competing against.",
  },
  {
    q: "Does my online menu actually affect my Google ranking?",
    a: "More than most owners expect. A menu locked inside a PDF or an image is invisible to Google — it can't read dish names, prices or dietary info to match against what people search. A menu built as real, crawlable text on your site or your Google Business Profile gets you found for the exact dishes people are searching for.",
  },
  {
    q: "How important are food photos for ranking, not just for looking good?",
    a: "Genuinely important. Google Business Profile listings with frequent, high-quality photos get more engagement and visibility in the local pack — it's treated as a signal that the business is active and current, not just a nicer-looking listing.",
  },
  {
    q: "Does getting more reviews right after a great service actually help ranking?",
    a: "Yes — review count and recency are confirmed local ranking factors, and a diner who loved their meal is your easiest possible review. The problem is almost always timing: by the time they're home, the moment's gone.",
    citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
  },
];

export default function RestaurantSeoPage() {
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
        badge="Local SEO · Restaurants"
        h1={<>Get found at dinner time.<br />Get recommended by <em>AI.</em></>}
        lead="Diners decide where to eat in the thirty minutes before they eat. We make sure your restaurant is what Google — and ChatGPT — suggest in that window, across every Gold Coast suburb you serve."
        ctaMessage="Interested in SEO for my restaurant"
      />

      <div className="sub-page">
        <div style={{ fontSize: "0.8125rem", color: "var(--muted)", padding: "1rem 0 0" }}>
          <Link href="/seo" style={{ color: "var(--accent)", textDecoration: "none" }}>SEO</Link> · Restaurants
        </div>

        <section className="sub-section">
          <div className="sub-tag">Why SEO matters for restaurants</div>
          <p className="sub-intro">
            A restaurant&apos;s busiest search moment isn&apos;t a Tuesday afternoon browsing session — it&apos;s 6:40pm on a Friday, someone already hungry, already near you, asking Google or ChatGPT where to eat right now. That&apos;s a different kind of search behaviour to almost any other industry: short, urgent, and decided within seconds. The restaurants that win it aren&apos;t necessarily the best kitchens — they&apos;re the ones whose Google Business Profile answers the question fastest: open now, good reviews, a menu Google can actually read, and photos that make the decision for someone standing on the footpath.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">How diners search</div>
          <p className="sub-p">Restaurant searches are overwhelmingly immediate and local — someone isn&apos;t researching for next month, they&apos;re deciding for tonight, usually within walking or driving distance of wherever they already are.</p>
          <div className="sub-queries">
            <div className="sub-query">best [cuisine] restaurant near me</div>
            <div className="sub-query">restaurants open now Gold Coast</div>
            <div className="sub-query">[suburb] restaurant bookings</div>
            <div className="sub-query">is [restaurant] open on Mondays</div>
          </div>
          <p className="sub-p">We build restaurant SEO around that urgency — Google Business Profile, Maps visibility and AI search recommendations matter more here than long-form blog content, because nobody deciding where to eat in the next ten minutes is reading 1,500 words first.</p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">What actually moves the needle</div>
          <h2 className="sub-h2">Four things we prioritise for every restaurant client</h2>
          <div className="sub-factors">
            <div className="sub-factor">
              <div className="sub-factor__icon">📍</div>
              <h3>Google Business Profile &amp; Maps</h3>
              <p>Most restaurant discovery happens in the local pack and Maps, not the main search results — this is where the fight actually happens.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">📋</div>
              <h3>A menu Google can read</h3>
              <p>A menu locked in a PDF or an image is invisible to search. Real, crawlable text gets you found for the exact dishes people search for.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">📸</div>
              <h3>Photos that sell the dish</h3>
              <p>Frequent, high-quality photos signal an active, trustworthy listing — and they do a lot of the convincing before anyone reads a review.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">⭐</div>
              <h3>Review velocity</h3>
              <p>Recent, frequent reviews outrank a bigger pile of old ones — recency is the signal Google actually weighs most heavily.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="sub-vs-wrap">
        <div className="sub-vs-inner">
          <SeoVsSemGraphic ctaMessage="Interested in SEO + SEM for my restaurant" />
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
          <div className="sub-tag">Why reviews matter here</div>
          <h2 className="sub-h2">The fastest ranking signal you can actually control</h2>
          <p className="sub-p">
            A great meal is forgotten fast — by the time the bill&apos;s paid and the car&apos;s found, the moment to ask for a review has usually passed. That&apos;s exactly the gap our{" "}
            <Link href="/nfc-review-cards">tap-to-review NFC cards</Link> are built to close — hand someone the card at the table while the meal is still the best part of their night, and the review happens before they&apos;ve left.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">Restaurant-heavy suburbs we work in</div>
          <h2 className="sub-h2">Local SEO for your specific Gold Coast neighbourhood</h2>
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

      <FaqSection topic="SEO for restaurants" faqs={faqs} title="Frequently asked questions — Restaurant SEO" />

      <ServiceCta
        title="Ready to be the restaurant Google suggests tonight?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO for Restaurants",
            provider: { "@type": "Organization", name: "Lucaseo", url: "https://lucaseo.com" },
            areaServed: { "@type": "Place", name: "Gold Coast, Queensland, Australia" },
            description: "Local SEO for Gold Coast restaurants — Google Business Profile, Maps visibility, menu SEO and AI search.",
          }),
        }}
      />

      <SiteFooter locale="en" />
    </>
  );
}
