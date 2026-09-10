import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "../components/ServiceNav";
import ServiceCta from "../components/ServiceCta";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Lucaseo — Digital Marketing Agency",
  description: "SEO, SEM and digital presence to grow your business and generate more clients. Free diagnosis in 24h.",
  alternates: { canonical: "https://lucaseo.com/en" },
};

export default function EnHomePage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .en-hero { padding: 10rem 2rem 6rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); text-align: center; }
        .en-hero-in { max-width: 800px; margin: 0 auto; }
        .en-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.5rem, 5.5vw, 5rem); line-height: 1.04; letter-spacing: -0.03em; margin-bottom: 1.5rem; text-wrap: balance; }
        .en-hero h1 em { font-style: normal; color: #004aad; }
        .en-hero-lead { font-size: 1.125rem; color: #5a6480; max-width: 600px; margin: 0 auto 2.5rem; line-height: 1.75; }
        .en-hero-cta { display: inline-block; padding: 0.875rem 2rem; background: #004aad; color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; }
        .en-hero-cta:hover { opacity: 0.88; }
        .en-services { max-width: 1100px; margin: 0 auto; padding: 5rem 2rem; }
        .en-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .en-services h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; margin-bottom: 2.5rem; }
        .en-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); }
        .en-svc { background: #fff; padding: 2.25rem; text-decoration: none; color: inherit; transition: background 0.2s; display: block; }
        .en-svc:hover { background: #f5f8ff; }
        .en-svc-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,74,173,0.07); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: 1.25rem; }
        .en-svc h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .en-svc p { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; }
        @media (max-width: 768px) { .en-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="en-hero">
        <div className="en-hero-in">
          <h1>Your client is searching for you.<br /><em>Are you showing up?</em></h1>
          <p className="en-hero-lead">SEO, SEM, social media, web development and AI — everything your business needs to attract, convert and retain more clients. Measurable results, no vanity metrics.</p>
          <Link href="/en#contact" className="en-hero-cta">Get a free diagnosis</Link>
        </div>
      </section>

      <div className="en-services" id="services">
        <div className="en-tag">Our services</div>
        <h2>Everything you need to grow online</h2>
        <div className="en-grid">
          <Link href="/en/seo" className="en-svc">
            <div className="en-svc-icon">🔍</div>
            <h3>Organic SEO</h3>
            <p>Rank on Google for the searches that matter. Technical SEO, content strategy, link building and local SEO — all in one integrated approach.</p>
          </Link>
          <Link href="/en/sem" className="en-svc">
            <div className="en-svc-icon">📈</div>
            <h3>SEM &amp; Paid Ads</h3>
            <p>Google Ads, Meta Ads, TikTok Ads and ChatGPT Ads. Campaigns that generate ROI from day one, with daily optimization.</p>
          </Link>
          <Link href="/en/social-media" className="en-svc">
            <div className="en-svc-icon">📱</div>
            <h3>Social Media</h3>
            <p>Strategy, content, publishing and community management. Turn followers into real customers with consistent, purposeful content.</p>
          </Link>
          <Link href="/en/web" className="en-svc">
            <div className="en-svc-icon">💻</div>
            <h3>Web Design</h3>
            <p>Fast, beautiful websites built to convert. Performance-optimized, SEO-ready and designed to turn visitors into leads.</p>
          </Link>
          <Link href="/en/ai" className="en-svc">
            <div className="en-svc-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>AI agents, voice bots, process automation and custom AI solutions. Technology that works for your business 24/7.</p>
          </Link>
          <Link href="/en/about" className="en-svc">
            <div className="en-svc-icon">👤</div>
            <h3>About Lucas</h3>
            <p>A digital marketer obsessed with results, not metrics. Learn about the person behind Lucaseo and why this agency is different.</p>
          </Link>
        </div>
      </div>

      <ServiceCta locale="en" />
      <SiteFooter locale="en" />
    </>
  );
}
