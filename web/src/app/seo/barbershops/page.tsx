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
  title: "SEO for Barbershops Gold Coast | Lucaseo",
  description:
    "Local SEO for Gold Coast barbershops. Rank above the chains, make booking effortless from the Google listing, and keep your reviews fresher than theirs.",
  alternates: { canonical: "https://lucaseo.com/seo/barbershops" },
};

const relatedIndustries = [
  { name: "Restaurants", href: "/seo/restaurants" },
  { name: "Cafes", href: "/seo/cafes" },
  { name: "Home & Trade Services", href: "/seo/home-services" },
];

const relatedSuburbs = [
  { name: "Southport", href: "/seo/southport" },
  { name: "Robina", href: "/seo/robina" },
  { name: "Burleigh Heads", href: "/seo/burleigh-heads" },
  { name: "Palm Beach", href: "/seo/palm-beach" },
  { name: "Helensvale", href: "/seo/helensvale" },
];

const faqs = [
  {
    q: "How do I compete with national chains like Just Cuts in the local pack?",
    a: "Independent barbershops win this more often than you'd expect. Chains rarely manage individual-location listings well — photos, review replies, booking links — which leaves plenty of room for a well-optimised independent shop to rank above them locally.",
  },
  {
    q: "Does having a booking link in my Google listing really matter?",
    a: "Yes — it removes the entire gap between someone deciding they need a haircut and actually locking one in. A listing without a direct booking link loses customers to the next result that has one, even with a better reputation.",
  },
  {
    q: "Should I be worried about 'walk-ins welcome' vs appointment-only for SEO?",
    a: "Both work, as long as your listing is explicit about it. A lot of lost bookings simply come from ambiguity — someone unsure if they can walk in moves on to a shop that makes it obvious.",
  },
  {
    q: "Do fresh reviews really outrank a shop with hundreds of older ones?",
    a: "Often, yes. Recency is a real factor Google weighs — a shop with five reviews from the last fortnight can out-rank one with 300 reviews that stopped coming in two years ago.",
    citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
  },
];

export default function BarbershopSeoPage() {
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
        badge="Local SEO · Barbershops"
        h1={<>Full chairs start with<br />a full Google listing, backed by <em>AI.</em></>}
        lead="Someone needing a haircut this week is choosing between you and whoever Google shows next to you. We make sure that's a fight you win."
        ctaMessage="Interested in SEO for my barbershop"
      />

      <div className="sub-page">
        <div style={{ fontSize: "0.8125rem", color: "var(--muted)", padding: "1rem 0 0" }}>
          <Link href="/seo" style={{ color: "var(--accent)", textDecoration: "none" }}>SEO</Link> · Barbershops
        </div>

        <section className="sub-section">
          <div className="sub-tag">Why SEO matters for barbershops</div>
          <p className="sub-intro">
            Barbershop searches sit in an unusual middle ground — not as urgent as a burst pipe, not as impulsive as a coffee craving, but still decided mostly in one sitting: a search, a quick scan of reviews and recent photos, maybe a look at the booking link, then a decision. Chains with national marketing budgets compete in the same local pack as independent barbers, which means the shops that win aren&apos;t necessarily the biggest — they&apos;re the ones whose Google listing makes booking effortless and makes the last haircut look good enough to trust with the next one.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">What actually moves the needle</div>
          <h2 className="sub-h2">Four things we prioritise for every barbershop client</h2>
          <div className="sub-factors">
            <div className="sub-factor">
              <div className="sub-factor__icon">📅</div>
              <h3>Booking link in the listing</h3>
              <p>Removing every step between &quot;I need a haircut&quot; and a locked-in time slot — a missing booking link loses customers to whoever has one.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">🚶</div>
              <h3>&quot;Open now&quot; visibility</h3>
              <p>Clear, explicit hours and walk-in status remove the ambiguity that sends an undecided searcher to the next result instead.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">💈</div>
              <h3>Real, current photos</h3>
              <p>Actual recent cuts, not stock images — this is what makes someone trust you with their own hair before they&apos;ve even called.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">⭐</div>
              <h3>Review recency</h3>
              <p>A shop with reviews from last week beats one with reviews from last year — recency is the tiebreaker against bigger, older competitors.</p>
            </div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-tag">Why reviews matter here</div>
          <h2 className="sub-h2">The fastest ranking signal you can actually control</h2>
          <p className="sub-p">
            A fresh haircut is the best advertising a barbershop has, and it lasts about as long as the walk back to the car before the moment to ask for a review disappears. That&apos;s exactly the gap our{" "}
            <Link href="/nfc-review-cards">tap-to-review NFC cards</Link> are built to close — a tap at the chair while they&apos;re still admiring the cut in the mirror.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">How customers search</div>
          <p className="sub-p">These searches are decided within a single session — someone compares a handful of nearby options, checks recent reviews and photos, then books or calls.</p>
          <div className="sub-queries">
            <div className="sub-query">best barbershop near me</div>
            <div className="sub-query">walk-in haircut [suburb] Gold Coast</div>
            <div className="sub-query">barber open now</div>
            <div className="sub-query">kids haircut near me</div>
          </div>
        </section>
      </div>

      <div className="sub-vs-wrap">
        <div className="sub-vs-inner">
          <SeoVsSemGraphic ctaMessage="Interested in SEO + SEM for my barbershop" />
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
          <div className="sub-tag">Suburbs we work in</div>
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

      <FaqSection topic="SEO for barbershops" faqs={faqs} title="Frequently asked questions — Barbershop SEO" />

      <ServiceCta
        title="Ready to keep every chair full?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO for Barbershops",
            provider: { "@type": "Organization", name: "Lucaseo", url: "https://lucaseo.com" },
            areaServed: { "@type": "Place", name: "Gold Coast, Queensland, Australia" },
            description: "Local SEO for Gold Coast barbershops — Google Business Profile, booking visibility and AI search.",
          }),
        }}
      />

      <SiteFooter locale="en" />
    </>
  );
}
