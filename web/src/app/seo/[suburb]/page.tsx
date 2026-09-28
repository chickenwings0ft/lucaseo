import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceNav from "../../../components/ServiceNav";
import ServiceCta from "../../../components/ServiceCta";
import FaqSection from "../../../components/FaqSection";
import SeoHero from "../../../components/SeoHero";
import SeoVsSemGraphic from "../../../components/SeoVsSemGraphic";
import AiSearchGraphic from "../../../components/AiSearchGraphic";
import SeoResultsSection from "../../../components/SeoResultsSection";
import { suburbSeoProfiles, getSuburbProfile } from "@/lib/suburbSeoData";

type Props = {
  params: Promise<{ suburb: string }>;
};

export async function generateStaticParams() {
  return suburbSeoProfiles.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params;
  const profile = getSuburbProfile(suburb);
  if (!profile) return {};
  return {
    title: profile.metaTitle,
    description: profile.metaDescription,
    alternates: { canonical: `https://lucaseo.com/seo/${profile.slug}` },
  };
}

export default async function SuburbSeoPage({ params }: Props) {
  const { suburb } = await params;
  const profile = getSuburbProfile(suburb);
  if (!profile) notFound();

  const nearby = suburbSeoProfiles.filter((s) => s.slug !== profile.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Local SEO",
    provider: { "@type": "Organization", name: "Lucaseo", url: "https://lucaseo.com" },
    areaServed: {
      "@type": "Place",
      name: profile.name,
      geo: { "@type": "GeoCoordinates", latitude: profile.lat, longitude: profile.lng },
    },
    description: profile.metaDescription,
  };

  const mapSrc = `https://www.google.com/maps?q=${profile.lat},${profile.lng}&z=14&output=embed`;

  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .sub-page, .sub-vs-wrap, .sub-ai-wrap {
          --ink: #04091a;
          --text: #0a0f1e;
          --muted: #5a6480;
          --accent: #004aad;
          --accent-hover: #0057cc;
          --accent-light: #4d9aff;
          --success: #4dff9a;
          --surface: #f5f8ff;
          --card-border: rgba(0,74,173,0.12);
          --hairline: rgba(0,74,173,0.08);
        }

        /* ── Sections ── */
        .sub-page { max-width: 900px; margin: 0 auto; padding: 0 1.25rem; }
        .sub-section { padding: 3rem 0; border-bottom: 1px solid var(--hairline); }
        .sub-section:last-child { border-bottom: none; }
        .sub-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .sub-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.375rem, 3.5vw, 1.875rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; text-wrap: balance; color: var(--text); }
        .sub-p { font-size: 0.9375rem; color: var(--muted); line-height: 1.75; font-weight: 300; max-width: 680px; }

        .sub-chips { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.5rem; }
        .sub-chip { display: inline-flex; align-items: center; padding: 0.45rem 0.875rem; border-radius: 999px; font-size: 0.8125rem; font-weight: 500; background: var(--surface); border: 1px solid var(--card-border); color: var(--text); }

        .sub-queries { display: flex; flex-direction: column; gap: 0.625rem; margin: 1.5rem 0; }
        .sub-query { font-size: 0.875rem; color: var(--text); background: var(--surface); border: 1px solid var(--card-border); border-radius: 8px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.625rem; }
        .sub-query::before { content: '🔍'; font-size: 0.8125rem; flex-shrink: 0; }

        .sub-map-wrap { border-radius: 14px; overflow: hidden; border: 1px solid var(--card-border); margin-top: 1.5rem; }
        .sub-map-wrap iframe { display: block; width: 100%; height: 280px; border: 0; }

        .sub-proof { background: var(--surface); border: 1px solid var(--card-border); border-radius: 14px; padding: 1.75rem; display: flex; gap: 2rem; flex-wrap: wrap; margin-top: 1.5rem; }
        .sub-proof__stat-n { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: var(--accent); letter-spacing: -0.02em; }
        .sub-proof__stat-l { font-size: 0.8125rem; color: var(--muted); margin-top: 0.125rem; }

        .sub-nearby { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }
        .sub-nearby a { display: inline-flex; align-items: center; padding: 0.5rem 1rem; border-radius: 8px; background: var(--surface); border: 1px solid var(--card-border); color: var(--accent); font-size: 0.875rem; font-weight: 600; text-decoration: none; transition: border-color 0.2s, transform 0.2s; }
        .sub-nearby a:hover { border-color: var(--accent); transform: translateY(-2px); }

        /* ── Shared-graphic wrappers (visual parity with /seo) ── */
        .sub-vs-wrap { background: #fff; padding: 3rem 1.25rem; border-bottom: 1px solid var(--hairline); }
        .sub-vs-inner { max-width: 1100px; margin: 0 auto; }
        .sub-ai-wrap { background: #fff; padding: 3rem 1.25rem; border-bottom: 1px solid var(--hairline); }
        .sub-ai-inner { max-width: 1100px; margin: 0 auto; }

        @media (min-width: 700px) {
          .sub-page { padding: 0 2.5rem; }
          .sub-section { padding: 4rem 0; }
          .sub-vs-wrap, .sub-ai-wrap { padding: 4rem 2.5rem; }
        }
      `}</style>

      {/* ── Hero (shared with /seo, text customised) ── */}
      <SeoHero
        badge={profile.badge}
        h1={<>Get found in {profile.name}.<br />Get recommended by <em>AI.</em></>}
        lead={profile.heroLead}
        ctaMessage={`Interested in SEO for my ${profile.name} business`}
      />

      <div className="sub-page">
        <div className="sub-hero-crumb" style={{ fontSize: "0.8125rem", color: "var(--muted)", padding: "1rem 0 0" }}>
          <Link href="/seo" style={{ color: "var(--accent)", textDecoration: "none" }}>SEO</Link> · {profile.name}
        </div>

        {/* ── Why SEO matters (short) ── */}
        <section className="sub-section">
          <div className="sub-tag">Why SEO matters</div>
          <h2 className="sub-h2">More people are searching for what you sell online — right now.</h2>
          <p className="sub-p">Every day, potential customers in {profile.name} are searching for businesses like yours — on Google, and increasingly on AI tools too.</p>
        </section>

        {/* ── How people search here ── */}
        <section className="sub-section">
          <div className="sub-tag">How people search in {profile.name}</div>
          <p className="sub-p">{profile.searchBehaviour}</p>
          <div className="sub-queries">
            {profile.exampleQueries.map((q) => (
              <div key={q} className="sub-query">{q}</div>
            ))}
          </div>
          <p className="sub-p">{profile.seoAngle}</p>
        </section>
      </div>

      {/* ── SEO vs SEM (graphic + button only) ── */}
      <div className="sub-vs-wrap">
        <div className="sub-vs-inner">
          <SeoVsSemGraphic ctaMessage={`Interested in SEO + SEM for my ${profile.name} business`} />
        </div>
      </div>

      {/* ── AI search (graphic only) ── */}
      <div className="sub-ai-wrap">
        <div className="sub-ai-inner">
          <AiSearchGraphic />
        </div>
      </div>

      <SeoResultsSection />

      <div className="sub-page">
        {/* ── Map + proof ── */}
        <section className="sub-section">
          <div className="sub-tag">Where we&apos;re working from</div>
          <h2 className="sub-h2">Local, not outsourced.</h2>
          <p className="sub-p">We&apos;re based on the Gold Coast and work with {profile.name} businesses directly — no offshore account managers, no call centre.</p>
          <div className="sub-map-wrap">
            <iframe src={mapSrc} loading="lazy" title={`Map of ${profile.name}, Gold Coast`} />
          </div>
          <div className="sub-proof">
            <div>
              <div className="sub-proof__stat-n">6 wks</div>
              <div className="sub-proof__stat-l">to page one, on average</div>
            </div>
            <div>
              <div className="sub-proof__stat-n">30→147</div>
              <div className="sub-proof__stat-l">customers in 3 months</div>
            </div>
            <div>
              <div className="sub-proof__stat-n">AI Search</div>
              <div className="sub-proof__stat-l">included in every plan</div>
            </div>
          </div>
        </section>

        {/* ── Nearby ── */}
        <section className="sub-section">
          <div className="sub-tag">Also serving nearby</div>
          <h2 className="sub-h2">SEO for other Gold Coast suburbs</h2>
          <div className="sub-nearby">
            {nearby.map((s) => (
              <Link key={s.slug} href={`/seo/${s.slug}`}>{s.name}</Link>
            ))}
            <Link href="/seo">All suburbs →</Link>
          </div>
        </section>

        {/* ── Business landscape ── */}
        <section className="sub-section">
          <div className="sub-tag">The {profile.name} business landscape</div>
          <h2 className="sub-h2">{profile.character}</h2>
          <div className="sub-chips">
            {profile.businessMix.map((b) => (
              <span key={b} className="sub-chip">{b}</span>
            ))}
          </div>
        </section>
      </div>

      <FaqSection
        topic={`SEO in ${profile.name}`}
        faqs={profile.faqs}
        title={`Frequently asked questions — ${profile.name} SEO`}
      />

      <ServiceCta
        title={`Ready to show up when ${profile.name} searches for you?`}
        body="Get your free SEO audit. We'll tell you where you rank, where you should rank, and where to start. No hard sell. No contracts."
        locale="en"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
