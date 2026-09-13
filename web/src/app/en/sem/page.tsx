import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "Google Ads & SEM Australia — Lucaseo | Fast Results",
  description: "Optimised Google Ads. Same budget, 3x more customers. Real case studies: $2000/month → 45 leads. From $500 AUD/month management. Free audit.",
  alternates: { canonical: "https://lucaseo.com.au/en/sem" },
};

const semFaqs = [
  { q: "How much does Google Ads cost?", a: "There's no fixed minimum. It depends on your industry, keywords and how much each customer is worth to you. We calculate the budget that makes sense before switching anything on. Some businesses start at $500/month, others need more. What matters is that every dollar spent has a measurable return." },
  { q: "When do I start seeing results with SEM campaigns?", a: "You can get traffic and conversions within the first 24-48 hours. Profitability and cost-per-lead stability improve with optimisation over the first few weeks. In 2-3 months the account is usually at its optimal performance." },
  { q: "Does Google Ads work for any business?", a: "It works especially well when there's active demand — people searching for what you sell. If your product or service gets searched on Google, Ads can put you in front of those people. For new products with no search demand, we combine with Meta Ads or TikTok Ads to create that demand." },
  { q: "What's the difference between running Google Ads myself vs with an agency?", a: "You can open an account and launch campaigns yourself. The problem is Google is designed for you to spend more, not sell more. An experienced Google Ads agency knows which structures, bids and targeting work for your case, saving you the cost of learning by trial and error with your own money." },
  { q: "Do you also run Meta Ads and TikTok Ads campaigns?", a: "Yes. We don't marry ourselves to one platform. We choose where to put your budget based on where your customer is and what kind of demand you want to generate. Google for capturing existing demand, Meta and TikTok for creating new demand and remarketing." },
  { q: "How can I request an audit of my campaigns?", a: "Contact us through the form or by email. We review your account, analyse what's working and what isn't, and propose a concrete action plan. No obligation, no fine print." },
];

export default function SemPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="SEM · Paid Ads"
        title="You're spending money on Ads."
        highlight="But is it actually working?"
        lead="While you read this, your ad budget is burning on Google Ads. Do you know exactly how much each customer costs you? Do you know your real ROI? At Lucaseo we do the opposite: we cut what doesn't work and scale what does."
        cta1Text="Audit your ad budget"
        cta1Href="/#contact"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>The problem</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            It's not Google Ads. It's how it's being used.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Google Ads works. 90% of businesses that use it properly generate positive ROI. The problem: most don't use it properly.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Why does most campaigns fail?</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Generic keywords (spending on clicks that don't convert)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ No conversion tracking (they don't know what's working)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Weak ads (no clear offer)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ No targeting (reaching people who aren't customers)</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Case studies</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Same budget, 3x the results
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Restaurant</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Before vs After</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> $2000/month → 15 leads/month ($133 per lead)</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> $2000/month → 45 leads/month ($44 per lead)</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Local Service</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>ROI transformed</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> $1500/month → 1.2x ROI</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> $1500/month → 4.5x ROI</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Investment</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            How much does it cost?
          </h2>

          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Options</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Standard Google Ads: $500 AUD/month</strong> + your ad budget<br />
                For small businesses, budgets $500-2000 AUD/month
              </li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Advanced Google Ads: $1000 AUD/month</strong> + your ad budget<br />
                For mid-size businesses, e-commerce, multiple campaigns
              </li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Multi-platform: $1500 AUD/month</strong> + ad budget<br />
                Google + Meta + TikTok Ads
              </li>
            </ul>
          </div>
        </section>
      </div>

      <FaqSection topic="SEM and Google Ads" faqs={semFaqs} />

      <ServiceAreaMap
        eyebrow="Service Area · SEM & Ads"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your ad spend covered.</>}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="What if my budget is small?"
        body="Even better. Small budgets require PERFECT optimisation. That's what we do: squeeze every dollar to bring the maximum return."
        locale="en"
      />
    </>
  );
}
