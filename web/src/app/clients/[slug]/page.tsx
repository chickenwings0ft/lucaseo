import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";
import CaseImage from "../CaseImage";
import BrowserMockup from "../BrowserMockup";
import CaseCarousel from "../CaseCarousel";
import { clients, getClient } from "@/lib/clientsData";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return {};
  return {
    title: `${client.name} | Lucaseo Client Case Study`,
    description: client.tagline,
    alternates: { canonical: `https://lucaseo.com/clients/${client.slug}` },
  };
}

export default async function ClientCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) notFound();

  const others = clients.filter((c) => c.slug !== client.slug);

  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .cs-page, .cs-embed {
          --ink: #04091a;
          --surface: #f5f8ff;
          --card-border: rgba(0,74,173,0.12);
          --hairline: rgba(0,74,173,0.08);
        }

        .cs-hero { padding: 9rem 2rem 4rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid var(--hairline); }
        .cs-hero-in { max-width: 800px; margin: 0 auto; }
        .cs-eyebrow { font-size: 0.75rem; font-weight: 600; color: var(--accent); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .cs-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .cs-tagline { font-size: 1.125rem; color: var(--muted); line-height: 1.7; max-width: 620px; margin-bottom: 1.5rem; }
        .cs-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .cs-tag { font-size: 0.75rem; font-weight: 600; color: var(--accent); background: rgba(0,74,173,0.08); padding: 0.3rem 0.875rem; border-radius: 999px; }
        .cs-website { font-size: 0.9375rem; font-weight: 600; color: var(--accent); text-decoration: none; }
        .cs-website:hover { text-decoration: underline; }

        /* ── Showcase (top-of-page product/website proof) ── */
        .cs-showcase { max-width: 1000px; margin: 0 auto; padding: 3.5rem 2rem 1rem; }
        .cs-showcase-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; text-align: center; }
        .cs-showcase h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 3vw, 2.125rem); letter-spacing: -0.03em; text-align: center; margin-bottom: 2rem; }

        /* ── Body sections ── */
        .cs-page { max-width: 1000px; margin: 0 auto; padding: 0 2rem; }
        .cs-section { padding: 3.5rem 0; border-bottom: 1px solid var(--hairline); }
        .cs-section:last-child { border-bottom: none; }
        .cs-tag-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .cs-h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 3.4vw, 2.125rem); letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 1.125rem; }
        .cs-p { font-size: 1.0625rem; color: var(--muted); line-height: 1.8; font-weight: 300; }
        .cs-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; }
        .cs-list-item { display: flex; gap: 0.875rem; align-items: flex-start; font-size: 1.0625rem; color: var(--text); line-height: 1.7; }
        .cs-list-item::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; margin-top: 0.15rem; }
        .cs-result { background: var(--surface); border: 1px solid var(--card-border); border-radius: 14px; padding: 1.75rem; }

        /* ── Zig-zag feature (text + image side by side) ── */
        .cs-feature { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center; }
        .cs-feature__img { order: -1; }
        @media (min-width: 800px) {
          .cs-feature { grid-template-columns: 1fr 1fr; gap: 3rem; }
          .cs-feature--img-right .cs-feature__img { order: 2; }
          .cs-feature--img-right .cs-feature__text { order: 1; }
          .cs-feature--img-left .cs-feature__img { order: 1; }
          .cs-feature--img-left .cs-feature__text { order: 2; }
          .cs-feature__img { order: 0; }
        }

        .cs-embed { background: var(--ink); padding: 4rem 2rem; }
        .cs-embed-in { max-width: 900px; margin: 0 auto; }
        .cs-embed-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #4d9aff; margin-bottom: 1rem; }
        .cs-embed h2 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 3vw, 2rem); color: #fff; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .cs-embed p { font-size: 0.9375rem; color: rgba(255,255,255,0.65); margin-bottom: 1.5rem; line-height: 1.7; }
        .cs-embed-frame-wrap { border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); background: #fff; }
        .cs-embed-frame-wrap iframe { display: block; width: 100%; height: 640px; border: 0; }
        .cs-embed-fallback { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 1.25rem; color: #4d9aff; font-weight: 600; text-decoration: none; font-size: 0.9375rem; }
        .cs-embed-fallback:hover { text-decoration: underline; }

        .cs-others { max-width: 1000px; margin: 0 auto; padding: 3.5rem 2rem 5rem; }
        .cs-others-tag { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.25rem; }
        .cs-others-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .cs-other-card { display: block; border: 1px solid var(--card-border); border-radius: 10px; padding: 1.25rem 1.5rem; text-decoration: none; color: inherit; transition: border-color 0.2s, transform 0.2s; }
        .cs-other-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .cs-other-name { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.25rem; color: var(--text); }
        .cs-other-industry { font-size: 0.8125rem; color: var(--muted); }

        @media (max-width: 640px) {
          .cs-hero { padding: 7rem 1.25rem 3rem; }
          .cs-page, .cs-embed, .cs-others, .cs-showcase { padding-left: 1.25rem; padding-right: 1.25rem; }
          .cs-embed-frame-wrap iframe { height: 520px; }
          .cs-others-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="cs-hero">
        <div className="cs-hero-in">
          <div className="cs-eyebrow">Client · {client.industry}</div>
          <h1>{client.name}</h1>
          <p className="cs-tagline">{client.tagline}</p>
          <div className="cs-tags">
            {client.tags.map((t) => <span className="cs-tag" key={t}>{t}</span>)}
          </div>
          {client.website && (
            <a href={client.website} target="_blank" rel="noopener noreferrer" className="cs-website">
              Visit {client.name} →
            </a>
          )}
        </div>
      </section>

      {/* ── Showcase: the actual product/website, front and centre ── */}
      <section className="cs-showcase">
        <p className="cs-showcase-tag">{client.showcaseFrame === "browser" ? "See it in action" : "The build"}</p>
        <h2>{client.showcaseTitle}</h2>
        {client.showcaseFrame === "browser" ? (
          <BrowserMockup url={client.showcaseUrl ?? client.name}>
            <CaseCarousel slides={client.showcaseImages} ratio="16/10" />
          </BrowserMockup>
        ) : (
          <CaseCarousel slides={client.showcaseImages} ratio="16/10" />
        )}
      </section>

      <div className="cs-page">
        <section className="cs-section">
          <div className={`cs-feature${client.challengeImage ? " cs-feature--img-left" : ""}`}>
            {client.challengeImage && (
              <div className="cs-feature__img">
                <CaseImage {...client.challengeImage} ratio="4/3" />
              </div>
            )}
            <div className="cs-feature__text">
              <p className="cs-tag-label">The challenge</p>
              <h2 className="cs-h2">Where things stood</h2>
              <p className="cs-p">{client.challenge}</p>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <div className={`cs-feature${client.processImage ? " cs-feature--img-right" : ""}`}>
            <div className="cs-feature__text">
              <p className="cs-tag-label">What we did</p>
              <h2 className="cs-h2">The strategy</h2>
              <div className="cs-list">
                {client.whatWeDid.map((item) => (
                  <div className="cs-list-item" key={item}>{item}</div>
                ))}
              </div>
            </div>
            {client.processImage && (
              <div className="cs-feature__img">
                <CaseImage {...client.processImage} ratio="4/3" />
              </div>
            )}
          </div>
        </section>

        <section className="cs-section">
          <p className="cs-tag-label">The result</p>
          <h2 className="cs-h2">Where things stand now</h2>
          <div className="cs-result">
            <p className="cs-p" style={{ margin: 0 }}>{client.result}</p>
          </div>
        </section>
      </div>

      {client.embedUrl && (
        <section className="cs-embed">
          <div className="cs-embed-in">
            <p className="cs-embed-tag">See it live</p>
            <h2>{client.embedLabel ?? `${client.name}'s live product`}</h2>
            <p>This is the actual system customers use — not a mockup.</p>
            <div className="cs-embed-frame-wrap">
              <iframe src={client.embedUrl} title={client.embedLabel ?? client.name} loading="lazy" />
            </div>
            <a href={client.embedUrl} target="_blank" rel="noopener noreferrer" className="cs-embed-fallback">
              Open it in a new tab →
            </a>
          </div>
        </section>
      )}

      <div className="cs-others">
        <p className="cs-others-tag">More client work</p>
        <div className="cs-others-grid">
          {others.map((o) => (
            <Link href={`/clients/${o.slug}`} className="cs-other-card" key={o.slug}>
              <div className="cs-other-name">{o.name}</div>
              <div className="cs-other-industry">{o.industry}</div>
            </Link>
          ))}
        </div>
      </div>

      <ServiceCta
        title="Want to be the next success story?"
        body="Tell us your situation. In less than 24h we'll respond with a no-commitment diagnosis."
        locale="en"
      />
      <SiteFooter locale="en" />
    </>
  );
}
