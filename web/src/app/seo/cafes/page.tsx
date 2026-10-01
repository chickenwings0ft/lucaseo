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
  title: "SEO for Cafes Gold Coast | Lucaseo",
  description:
    "Local SEO for Gold Coast cafes. Win the morning 'coffee near me' search, connect your Instagram following to Google, and keep ranking as reviews roll in daily.",
  alternates: { canonical: "https://lucaseo.com/seo/cafes" },
};

const relatedIndustries = [
  { name: "Restaurants", href: "/seo/restaurants" },
  { name: "Barbershops", href: "/seo/barbershops" },
  { name: "Home & Trade Services", href: "/seo/home-services" },
];

const relatedSuburbs = [
  { name: "Burleigh Heads", href: "/seo/burleigh-heads" },
  { name: "Palm Beach", href: "/seo/palm-beach" },
  { name: "Miami", href: "/seo/miami" },
  { name: "Mermaid Beach", href: "/seo/mermaid-beach" },
  { name: "Currumbin", href: "/seo/currumbin" },
];

const faqs = [
  {
    q: "Does ranking for 'coffee near me' actually matter if people already know my cafe?",
    a: "It matters for every customer who doesn't know you yet — which, on the Gold Coast, is a constant stream of new residents, visitors and people just outside your existing regulars. 'Near me' searches capture exactly that audience, every single morning.",
  },
  {
    q: "My Instagram following is strong — do I still need SEO?",
    a: "Yes, and it compounds rather than competes. A strong Instagram gets someone curious; a strong Google listing is what confirms you're open, well-reviewed and worth the walk once they search your name to check.",
  },
  {
    q: "How often should I be posting new photos to my Google Business Profile?",
    a: "More often than most cafe owners think. A listing that looks actively maintained — recent photos, replied-to reviews, accurate hours — is treated as a stronger, more trustworthy signal than one that hasn't changed in a year.",
  },
  {
    q: "Reviews feel hard to keep up with daily — is there a faster way?",
    a: "Yes — the businesses that keep review counts climbing aren't asking harder, they're removing the friction entirely. A happy customer at the counter is the easiest review you'll ever get, if you make it a ten-second action.",
    citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
  },
];

export default function CafeSeoPage() {
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
        badge="Local SEO · Cafes"
        h1={<>Win the morning search.<br />Keep winning it by lunch, with <em>AI.</em></>}
        lead="Coffee decisions happen fast and close to home — if your cafe doesn't show up in the first three results, it doesn't exist to that search. We make sure it does, suburb by suburb."
        ctaMessage="Interested in SEO for my cafe"
      />

      <div className="sub-page">
        <div style={{ fontSize: "0.8125rem", color: "var(--muted)", padding: "1rem 0 0" }}>
          <Link href="/seo" style={{ color: "var(--accent)", textDecoration: "none" }}>SEO</Link> · Cafes
        </div>

        <section className="sub-section">
          <div className="sub-tag">Why SEO matters for cafes</div>
          <p className="sub-intro">
            Cafes live and die by a search pattern that repeats every single morning: someone a few minutes from home or the office, wanting coffee now, typing &quot;coffee near me&quot; or &quot;best brunch [suburb]&quot; into a phone they&apos;re already holding. Unlike a restaurant booking made a day ahead, this decision is made and acted on inside two or three minutes — there&apos;s no time for a second thought, which means ranking in the top three local results isn&apos;t a nice-to-have, it&apos;s the entire game.
          </p>
        </section>

        <section className="sub-section">
          <div className="sub-tag">What actually moves the needle</div>
          <h2 className="sub-h2">Four things we prioritise for every cafe client</h2>
          <div className="sub-factors">
            <div className="sub-factor">
              <div className="sub-factor__icon">📍</div>
              <h3>&quot;Near me&quot; dominance</h3>
              <p>Most cafe searches are hyper-local and immediate — the local pack, not the wider search results, is where this is won or lost.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">📱</div>
              <h3>Instagram-to-Google handoff</h3>
              <p>A lot of cafe discovery starts on social media and ends with a Google search to confirm hours and reviews — we make sure that search ends with you.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">🥐</div>
              <h3>Weekend brunch spikes</h3>
              <p>Brunch searches surge on weekends — we make sure your listing is ready for that spike, not just an average Tuesday.</p>
            </div>
            <div className="sub-factor">
              <div className="sub-factor__icon">⭐</div>
              <h3>Daily review churn</h3>
              <p>With dozens of customers through the door daily, review momentum should be constant — most cafes barely capture a fraction of it.</p>
            </div>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-tag">How customers search</div>
          <p className="sub-p">Cafe searches are brand-aware more often than most local categories — people frequently already know your name from social media, and search it directly to check you&apos;re open and well-reviewed before visiting.</p>
          <div className="sub-queries">
            <div className="sub-query">best coffee near me</div>
            <div className="sub-query">best brunch [suburb] Gold Coast</div>
            <div className="sub-query">cafes with parking near me</div>
            <div className="sub-query">[cafe name] opening hours</div>
          </div>
        </section>
      </div>

      <div className="sub-vs-wrap">
        <div className="sub-vs-inner">
          <SeoVsSemGraphic ctaMessage="Interested in SEO + SEM for my cafe" />
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
          <div className="sub-tag">Cafe strips we work in</div>
          <h2 className="sub-h2">Local SEO for your specific Gold Coast neighbourhood</h2>
          <div className="sub-nearby">
            {relatedSuburbs.map((s) => (
              <Link key={s.href} href={s.href}>{s.name}</Link>
            ))}
            <Link href="/seo">All suburbs →</Link>
          </div>
        </section>

        <section className="sub-section">
          <div className="sub-tag">Why reviews matter here</div>
          <h2 className="sub-h2">The fastest ranking signal you can actually control</h2>
          <p className="sub-p">
            Dozens of customers pass through your doors every single day, and almost none of them think to leave a review once they&apos;ve left with their coffee. That&apos;s exactly the gap our{" "}
            <Link href="/nfc-review-cards">tap-to-review NFC cards</Link> are built to close — a tap at the counter while they&apos;re still there, and the review&apos;s done before they&apos;re out the door.
          </p>
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

      <FaqSection topic="SEO for cafes" faqs={faqs} title="Frequently asked questions — Cafe SEO" />

      <ServiceCta
        title="Ready to win the morning search, every morning?"
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Local SEO for Cafes",
            provider: { "@type": "Organization", name: "Lucaseo", url: "https://lucaseo.com" },
            areaServed: { "@type": "Place", name: "Gold Coast, Queensland, Australia" },
            description: "Local SEO for Gold Coast cafes — Google Business Profile, Maps visibility and AI search.",
          }),
        }}
      />

      <SiteFooter locale="en" />
    </>
  );
}
