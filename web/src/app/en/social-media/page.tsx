import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import FaqSection from "../../components/FaqSection";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "Social Media Management Australia — Lucaseo | Social Strategy",
  description: "Complete social media management. Content, community management, Meta Ads. From $400 AUD/month. Real clients, visible results.",
  alternates: { canonical: "https://lucaseo.com.au/en/social-media" },
};

const socialFaqs = [
  { q: "What's included in social media management?", a: "Everything. Content strategy, post creation, community management in replies, Meta Ads advertising if you need it, analytics and reports. It's not just posting nice photos: it's turning followers into customers." },
  { q: "Which social networks do you manage?", a: "Instagram, TikTok, LinkedIn, Facebook, YouTube. We choose where your customer is and focus there. It doesn't make sense to be on 6 platforms if your people are only on 2." },
  { q: "Do you create content or use what I provide?", a: "Both. We can create original content, repurpose yours, or a mix. It depends on what you need and your budget." },
  { q: "What about TikTok and younger audiences?", a: "TikTok is the strongest channel today for growth if your audience is under 35. We know what works: trends, vertical format, authenticity. It's different to Instagram but profitable with the right strategy." },
  { q: "Can you help if I already have social accounts and want to improve them?", a: "Of course. We analyse what's working, what isn't, and design a new strategy to scale it. Sometimes small changes have a massive impact." },
  { q: "How do I hire social media management?", a: "We start with a call to understand your business, audience and goal. We put together a proposal, you approve, and we start. No long contracts; month to month." },
];

export default function SocialMediaPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="Social Media"
        title="Your social media is a sales channel."
        highlight="Or are you just using it to post photos?"
        lead="Instagram, TikTok, LinkedIn: that's where your customers spend 2-3 hours a day. If you're not there generating leads, your competitors are. Most small businesses abandon their socials halfway through. So there's room for whoever does it properly."
        cta1Text="Get a free social media consult"
        cta1Href="/#contact"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>The problem</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Most businesses don't know how to sell through social media
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            Instagram and TikTok are powerful. The problem: most people post without a strategy.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Why do small business socials fail?</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Posting without a plan (no clear goal or audience)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Inconsistency (post for 2 months, disappear for 3)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Not replying to comments (losing connection)</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Not knowing how to convert to sales (just vanity metrics)</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>What we do</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Social media that sells
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Strategy</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>A clear plan from day one</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}>We define your audience, your tone, which platforms to use, and what type of content converts. No guesswork.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Content</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Content that generates leads</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Not just nice photos. Educational, entertaining content with a CTA. Every post is a sales opportunity.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Community</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Replying to comments</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Every comment is a potential customer. We reply, we build relationships, we convert.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Advertising</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Optimised Meta Ads</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>If you need to accelerate, we run Meta/TikTok advertising with measurable ROI.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Investment</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            How much does it cost?
          </h2>

          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>Plans</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Basic Management: $400 AUD/month</strong><br />
                1 social network, 8 posts/month, replies
              </li>
              <li style={{ marginBottom: "1rem", fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Standard Management: $700 AUD/month</strong><br />
                2-3 networks, 20 posts/month, community, reports
              </li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480" }}>
                <strong>Premium Management: $1200 AUD/month</strong><br />
                4 networks, original content, Meta Ads, strategy calls
              </li>
            </ul>
          </div>
        </section>
      </div>

      <FaqSection topic="social media management" faqs={socialFaqs} />

      <FreeConsultationCta />

      <ServiceCta
        title="Let's talk about your strategy?"
        body="Tell us what you want to achieve with your social media. We do a no-obligation consult and propose a plan specific to your case."
        locale="en"
      />
    </>
  );
}
