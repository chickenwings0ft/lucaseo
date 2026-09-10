import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Clients | Lucaseo — Our Work Speaks",
  description: "See the projects we've worked on. Real results for real businesses.",
  alternates: { canonical: "https://lucaseo.com/en/clients" },
};

const clients = [
  { slug: "macheta", name: "Macheta", desc: "A restaurant with its own identity. Complete digital strategy: web, local SEO and social media that fill tables.", tags: ["Web", "Local SEO", "Social"] },
  { slug: "roots", name: "Roots", desc: "A brand with deep roots. Brand positioning, digital presence and content strategy that connects with its community.", tags: ["Branding", "Social", "Content"] },
  { slug: "briya", name: "Briya", desc: "An innovative project with global reach. Web development, international SEO and multi-channel acquisition campaigns.", tags: ["Web", "SEO", "SEM"] },
];

export default function ClientsPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .clients-hero { padding: 9rem 2rem 4rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .clients-in { max-width: 900px; margin: 0 auto; }
        .clients-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .clients-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 4rem); line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .clients-hero h1 em { font-style: normal; color: #004aad; }
        .clients-lead { font-size: 1.125rem; color: #5a6480; line-height: 1.75; max-width: 600px; }
        .clients-grid { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); }
        .client-card { background: #fff; padding: 2.5rem; display: flex; flex-direction: column; transition: background 0.2s; text-decoration: none; color: inherit; }
        .client-card:hover { background: #f5f8ff; }
        .client-name { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
        .client-desc { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; margin-bottom: 1.5rem; flex: 1; }
        .client-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .client-tag { font-size: 0.75rem; font-weight: 500; color: #004aad; background: rgba(0,74,173,0.07); padding: 0.25rem 0.75rem; border-radius: 999px; }
        .client-arrow { font-size: 0.875rem; color: #004aad; font-weight: 600; margin-top: 1.25rem; }
        @media (max-width: 768px) { .clients-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="clients-hero">
        <div className="clients-in">
          <div className="clients-eyebrow">Clients</div>
          <h1>Our work <em>speaks for itself</em></h1>
          <p className="clients-lead">Every project is a real case with measurable results. We don't show logos — we show what we've built.</p>
        </div>
      </section>

      <div className="clients-grid">
        {clients.map((c) => (
          <Link href={`/clientes/${c.slug}`} className="client-card" key={c.slug}>
            <div className="client-name">{c.name}</div>
            <p className="client-desc">{c.desc}</p>
            <div className="client-tags">
              {c.tags.map((t) => <span className="client-tag" key={t}>{t}</span>)}
            </div>
            <div className="client-arrow">View project &rarr;</div>
          </Link>
        ))}
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
