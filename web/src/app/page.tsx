import type { Metadata } from "next";
import Link from "next/link";
import ServiceNav from "./components/ServiceNav";
import ServiceCta from "./components/ServiceCta";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Lucaseo — Digital Marketing Agency Australia | SEO, SEM, Web & AI",
  description: "Your customers are searching for you online. SEO, Google Ads, social media, web design and AI automation — everything your business needs to get found and grow. Free 24h diagnosis.",
  alternates: { canonical: "https://lucaseo.com.au" },
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
        @media (max-width: 768px) { .en-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="en-hero">
        <video className="en-hero-video" src="/hero-video.mp4" autoPlay loop muted playsInline preload="auto" />
        <div className="en-hero-overlay" />
        <div className="en-hero-in">
          <h1>Your business deserves more <em>customers.</em></h1>
          <p className="en-hero-lead">SEO, Google Ads, social media, web design and AI — everything your business needs to get found, get chosen and get more customers. Measurable results, no vanity metrics.</p>
          <div className="en-hero-actions">
            <Link href="/#contact" className="en-hero-cta">Get a free diagnosis</Link>
            <Link href="#services" className="en-hero-cta en-hero-cta--ghost">See what we do</Link>
          </div>
        </div>
      </div>

      <div className="en-concept">
        <div className="en-concept-title">
          The digital ocean is crowded.<br />
          The question isn&apos;t whether there are customers out there.<br />
          It&apos;s: <span className="en-concept-accent">who&apos;s catching them?</span>
        </div>
      </div>

      <div className="en-services" id="services">
        <div className="en-tag">What we do</div>
        <h2>Everything your business needs to grow online</h2>
        <p className="en-services-lead">No bloated retainers, no jargon, no disappearing after you sign. Just the services that move the needle — run by someone who actually does the work.</p>
        <div className="en-grid">
          <Link href="/en/seo" className="en-svc">
            <div className="en-svc-icon">🔍</div>
            <h3>Organic SEO</h3>
            <p>Rank on Google — and on ChatGPT, Perplexity and Claude too. Technical SEO, content and AI search visibility in one strategy.</p>
          </Link>
          <Link href="/en/sem" className="en-svc">
            <div className="en-svc-icon">📈</div>
            <h3>SEM &amp; Paid Ads</h3>
            <p>Google Ads, Meta Ads and TikTok Ads. Campaigns built for ROI, optimised weekly, not left on autopilot.</p>
          </Link>
          <Link href="/en/social-media" className="en-svc">
            <div className="en-svc-icon">📱</div>
            <h3>Social Media</h3>
            <p>Strategy, content and community management that turns followers into actual customers — not just likes.</p>
          </Link>
          <Link href="/en/web" className="en-svc">
            <div className="en-svc-icon">💻</div>
            <h3>Web Design</h3>
            <p>Fast, SEO-first websites built to convert. From landing pages to full e-commerce builds.</p>
          </Link>
          <Link href="/en/ai" className="en-svc">
            <div className="en-svc-icon">🤖</div>
            <h3>AI Automation</h3>
            <p>Chatbots, lead follow-up, CRM syncing and workflow automation. Your business on autopilot, without losing the personal touch.</p>
          </Link>
          <Link href="/en/about" className="en-svc">
            <div className="en-svc-icon">👤</div>
            <h3>About Lucas</h3>
            <p>Meet the person behind Lucaseo — why this agency exists, and why it works differently to the rest.</p>
          </Link>
        </div>
      </div>

      <div className="en-brand-idea">
        <h2>The ocean doesn&apos;t reward whoever waits.<br />It rewards whoever moves better.</h2>
        <p>
          Your competitors have a website too. They&apos;re on Instagram too. They run ads too. They also claim to offer &ldquo;the best service in town&rdquo;.<br /><br />
          So stop trying to look like them. Do it better. Do it faster. Do it with more intent.<br /><br />
          At Lucaseo, we build businesses a digital presence that&apos;s impossible to scroll past.
        </p>
      </div>

      <ServiceCta locale="en" />
      <SiteFooter locale="en" />
    </>
  );
}
