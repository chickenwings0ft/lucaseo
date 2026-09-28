import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "./components/ServiceNav";
import ServiceCta from "./components/ServiceCta";
import ServiceAreaMap from "./components/ServiceAreaMap";
import FreeConsultationCta from "./components/FreeConsultationCta";
import EnContactSection from "./components/EnContactSection";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Lucaseo — Digital Marketing Agency Gold Coast | SEO, Ads, Web & AI",
  description: "Gold Coast digital marketing agency. SEO, Google Ads, social media, web design and AI automation that gets your business found, chosen and growing. Free on-site visit.",
  alternates: { canonical: "https://lucaseo.com" },
};

export default function HomePage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .en-hero { position: relative; display: flex; align-items: center; justify-content: center; text-align: center; min-height: 100vh; overflow: hidden; }
        .en-hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; object-position: 70% center; }
        .en-hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); z-index: 1; }
        .en-hero-in { position: relative; z-index: 2; max-width: 800px; margin: 0 auto; padding: 2rem; }
        .en-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 2rem; text-wrap: balance; color: #fff; }
        .en-hero h1 em { font-style: normal; color: #4d9aff; text-shadow: 0 0 20px rgba(0,74,173,0.8), 0 0 40px rgba(0,74,173,0.5); }
        .en-hero-lead { font-size: 1.125rem; color: rgba(255,255,255,0.8); max-width: 600px; margin: 0 auto 2.5rem; line-height: 1.75; font-weight: 300; }
        .en-hero-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .en-hero-cta { display: inline-block; padding: 0.875rem 2rem; background: #004aad; color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 6px; transition: opacity 0.2s; }
        .en-hero-cta:hover { opacity: 0.88; }
        .en-hero-cta--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.4); color: #fff; }
        .en-hero-cta--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.1); }
        .en-concept { text-align: center; padding: 5rem 2.5rem; }
        .en-concept-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.3; max-width: 620px; margin: 0 auto; }
        .en-concept-accent { color: #004aad; }
        .en-services { max-width: 1100px; margin: 0 auto; padding: 5rem 2rem; border-top: 1px solid rgba(0,74,173,0.1); }
        .en-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .en-services h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; margin-bottom: 1rem; text-wrap: balance; }
        .en-services-lead { font-size: 1.0625rem; color: #5a6480; max-width: 560px; line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem; }
        .en-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(0,74,173,0.1); border: 1px solid rgba(0,74,173,0.1); }
        .en-svc { background: #fff; padding: 2.25rem; text-decoration: none; color: inherit; transition: background 0.2s; display: block; }
        .en-svc:hover { background: #f5f8ff; }
        .en-svc-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(0,74,173,0.07); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: 1.25rem; }
        .en-svc h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .en-svc p { font-size: 0.9375rem; color: #5a6480; line-height: 1.7; font-weight: 300; }
        .en-brand-idea { text-align: center; padding: 5rem 2.5rem; border-top: 1px solid rgba(0,74,173,0.1); border-bottom: 1px solid rgba(0,74,173,0.1); background: #f5f8ff; }
        .en-brand-idea h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 1.5rem; text-wrap: balance; }
        .en-brand-idea p { font-size: 1.0625rem; color: #5a6480; max-width: 580px; margin: 0 auto; line-height: 1.75; font-weight: 300; }
        @media (max-width: 768px) {
          .en-grid { grid-template-columns: 1fr; }
          .en-services h2 { font-size: 1.5rem; }
          .en-services-lead { font-size: 1rem; }
        }
      `}</style>
      <section className="en-hero">
        <video className="en-hero-video" autoPlay muted loop>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="en-hero-overlay"></div>
        <div className="en-hero-in">
          <h1>Get Your Business <em>Found</em>, <em>Chosen</em> & <em>Growing</em></h1>
          <p className="en-hero-lead">Digital marketing that actually works. From SEO and Google Ads to web design and AI automation.</p>
          <div className="en-hero-actions">
            <a href="https://calendly.com/lucaseo/30min?back=1" className="en-hero-cta">Free consultation</a>
            <a href="#contact" className="en-hero-cta en-hero-cta--ghost">Get in touch</a>
          </div>
        </div>
      </section>
      <section className="en-concept">
        <h2 className="en-concept-title">Digital marketing for businesses that <span className="en-concept-accent">want to scale</span></h2>
      </section>
      <section className="en-services">
        <p className="en-tag">What we do</p>
        <h2>Digital marketing services</h2>
        <p className="en-services-lead">Proven strategies that get your business in front of the right people at the right time</p>
        <div className="en-grid">
          <Link href="/seo" className="en-svc">
            <div className="en-svc-icon">🔍</div>
            <h3>SEO</h3>
            <p>Organic traffic that converts. Long-term growth through technical excellence and content strategy.</p>
          </Link>
          <Link href="/sem" className="en-svc">
            <div className="en-svc-icon">💰</div>
            <h3>Paid Ads</h3>
            <p>Google Ads, Meta, TikTok & more. Precise targeting that turns clicks into customers.</p>
          </Link>
          <Link href="/web" className="en-svc">
            <div className="en-svc-icon">🌐</div>
            <h3>Web Design</h3>
            <p>Fast, modern sites built for conversions. Your website is your #1 sales tool.</p>
          </Link>
          <Link href="/ai" className="en-svc">
            <div className="en-svc-icon">🤖</div>
            <h3>AI Automation</h3>
            <p>Email, chat, voice & workflows. Save time, serve customers better, scale faster.</p>
          </Link>
          <Link href="/social-media" className="en-svc">
            <div className="en-svc-icon">📱</div>
            <h3>Social Media</h3>
            <p>Strategy, content & paid management. Build community and amplify your message.</p>
          </Link>
          <a href="https://calendly.com/lucaseo/30min?back=1" className="en-svc">
            <div className="en-svc-icon">💬</div>
            <h3>Free consultation</h3>
            <p>Let's discuss your business goals and find the perfect solution for you.</p>
          </a>
        </div>
      </section>
      <ServiceAreaMap />
      <ServiceCta locale="en" />
      <section className="en-brand-idea">
        <h2>What makes us different?</h2>
        <p>We don't do templated solutions. Every strategy is built for your specific business, goals, and audience. You get a partner who understands your market and isn't satisfied until you're thriving.</p>
      </section>
      <FreeConsultationCta />
      <EnContactSection />
      <SiteFooter locale="en" />
    </>
  );
}
