import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "SEO Services Australia — Lucaseo | Rank on Google & AI Search",
  description: "SEO that ranks you on Google + AI search engines. From zero to page-one rankings in months. Real case studies: 30→147 customers, 5 leads/week. Free audit. From $500 AUD/month.",
  alternates: { canonical: "https://lucaseo.com/en/seo" },
};

const seoFaqs = [
  { q: "How long does SEO take to work?", a: "3–6 months for movement. 6–12 for solid results. It depends on your industry and competition. If anyone promises results in 30 days, they're lying." },
  { q: "Is SEO better than Google Ads?", a: "Both, but different. Google Ads = instant results, you pay per click. SEO = slower results, free traffic forever. Ideally you combine both: Ads for quick cash flow, SEO for long-term independence." },
  { q: "What happens if I switch agencies later?", a: "The work we did on your site is yours. We don't take it back. But it's important you find someone to keep optimising. Don't leave SEO abandoned." },
  { q: "Do you guarantee results?", a: "No. Nobody can guarantee rankings — if someone does, they're lying. What I do guarantee: professional work, transparency, and adjustments if something isn't working." },
  { q: "Does SEO actually work?", a: "Yes. But only if it's done properly and you're patient. Most agencies fail because they promise results in 30 days, don't optimise for where people actually search, or disappear after 3 months." },
  { q: "How do I get started?", a: "Grab your free audit. We analyse your current site, where you rank, where you should rank, what's failing, and where to start. No hard sell. No contracts." },
];

export default function SeoPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="Organic SEO"
        title="SEO changed. Your competitors already know."
        highlight="Do you?"
        lead="Three years ago, ranking on Google was enough. Today, your customer searches on ChatGPT, Claude, Perplexity, TikTok, YouTube. If you're only on Google, you're missing 60% of searches. Your competitors are everywhere. Where are you?"
        cta1Text="Get your free SEO audit"
        cta1Href="/#contact"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>The old SEO problem</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Ranking on Google alone isn&apos;t enough anymore
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Google is still the main door. But it&apos;s no longer the only one.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Your customers are searching on:</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Google (obviously)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ ChatGPT (asking "best cafes near me")</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Perplexity (researching before they buy)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Claude (looking for specific solutions)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ TikTok, Instagram (reviews, recommendations)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ YouTube (tutorials, reviews)</li>
            </ul>
          </div>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginTop: "2rem" }}>
            If you&apos;re not showing up everywhere, your competitors are getting ahead — and you won&apos;t even know it.
          </p>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Real case studies</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            From zero to page-one in months
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Restaurant</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Invisible → Visible on Google + AI</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> Didn&apos;t rank for anything, wasn&apos;t showing up in ChatGPT</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> Page one in 6 weeks, recommended in AI search</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginTop: "0.5rem" }}><strong>Result:</strong> 30 → 147 customers in 3 months</p>
            </div>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Local Service</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>New business → 5 leads/week</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> Zero visibility</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> Ranking on Google + Ads</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginTop: "0.5rem" }}><strong>Result:</strong> Profitable from month one</p>
            </div>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>E-commerce</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>High competition → Top rankings</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> Competing against big sites</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> 15+ keywords on page one</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginTop: "0.5rem" }}><strong>Result:</strong> Profitable traffic without relying on Ads</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Investment &amp; timeline</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            How much does it cost? When will I see results?
          </h2>

          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Pricing</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}><strong>Standard SEO: $500-800 AUD/month</strong> — For small businesses, startups</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Advanced SEO: $1000-1500 AUD/month</strong> — For high competition, e-commerce</li>
            </ul>
            <h3 style={{ marginTop: "2rem", fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Timeline</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}><strong>Month 1-2:</strong> Implementation (no visible changes yet)</li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}><strong>Month 3:</strong> First ranking movements</li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}><strong>Month 6:</strong> Solid, predictable results</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>Year 1+:</strong> Compounding growth</li>
            </ul>
          </div>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginTop: "2rem" }}>
            I don&apos;t promise miracles in 30 days. That&apos;s a lie. SEO takes time. But it works.
          </p>
        </section>
      </div>

      <FaqSection topic="SEO and search ranking" faqs={seoFaqs} />

      <ServiceAreaMap
        eyebrow="Service Area · SEO"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your SEO covered.</>}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="What happens next?"
        body="Get your free audit. We analyse your current site, where you rank, where you should rank, what's failing, and where to start. No hard sell. No contracts."
        locale="en"
      />
    </>
  );
}
