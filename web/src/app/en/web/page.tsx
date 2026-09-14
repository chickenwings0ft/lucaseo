import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "Web Design & Development Australia — Lucaseo | Websites That Sell",
  description: "Professional web design and development. Fast websites, optimised for SEO and built to convert. From landing pages to e-commerce.",
  alternates: { canonical: "https://lucaseo.com/en/web" },
};

const webFaqs = [
  { q: "How much does a professional website cost?", a: "Depends on the type. A landing page from $1500 AUD. A corporate website between $3000-6000 AUD. An e-commerce between $5000-15000 AUD. We build tailored quotes, not generic templates dressed up as custom design." },
  { q: "How long does it take to be ready?", a: "Landing page: 1-2 weeks. Corporate website: 3-6 weeks. E-commerce: 4-8 weeks. It depends on complexity, but we don't skip phases: design → development → content → testing. Rushing is the enemy of quality." },
  { q: "Are they optimised for SEO?", a: "Always. Speed, URL structure, metadata, schema markup, responsive design, Core Web Vitals. A site built with SEO in mind from day one ranks faster than one fixed up afterwards." },
  { q: "Can I update the content myself?", a: "Yes, if we use a CMS. You edit text, images, pages without touching code. We'll show you how. Or we handle the maintenance for you." },
  { q: "What's the difference vs Wix or Squarespace?", a: "Performance, flexibility, technical SEO. Wix is useful for basic projects but has limitations. A professional website is built around your business, not around how the template works." },
  { q: "How do I request a quote?", a: "Contact us. Tell us what type of website you need and your goal. We send a detailed proposal: timeline, features, fixed price. No surprises." },
];

export default function WebPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="Web Design"
        title="Your website shouldn't explain who you are."
        highlight="It should make someone want to work with you."
        lead="A good website does three things fast: it understands you, it convinces you, and it moves you to act. That's why we don't start with design. We start with thinking about how your business actually sells."
        cta1Text="I want a website that sells"
        cta1Href="/#contact"
        withVideo={true}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>The problem</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            A pretty website that doesn't convert is still an expensive website
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            There are visually stunning websites where nobody knows what to do next. Endless menus. Corporate copy. Vague buttons. A homepage that reads like a boardroom deck. We do things differently.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Speed</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>3 seconds max</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>53% of visitors leave if it takes longer. We build sites that load fast on mobile.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Conversion</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>+40% average improvement</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>With architecture and copy built to sell, not just exist.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>What we build</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            A website built to do business
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🎨</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>UX/UI Design</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>So people understand quickly and browse without overthinking.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>⚡</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Performance</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>A slow website is an elegant way to lose customers.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🔍</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>SEO-first</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Structure built for Google from the very start.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📱</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Mobile-first</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Your customer is probably visiting from their phone.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🔒</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Security</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Good code, good practices, a solid foundation.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>📈</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Conversion</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Every page has a purpose and a goal.</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Types of website</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Not every website needs the same thing
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Landing Page</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Best for: Ads, campaigns and launches</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>One goal. One message. One action.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Corporate Website</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Best for: Building trust before contact</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>Services, case studies, team, value proposition.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>E-commerce</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Best for: Online sales</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>A store that sells, not just a catalogue.</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem", color: "#004aad" }}>Website with CMS</h3>
              <p style={{ fontSize: "0.8125rem", color: "#004aad", marginBottom: "1rem", fontWeight: 500 }}>Best for: Editable content</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}>You update your website without relying on a developer.</p>
            </div>
          </div>
        </section>
      </div>

      <FaqSection topic="web design and development" faqs={webFaqs} />

      <ServiceAreaMap
        eyebrow="Service Area · Web Design"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your website covered.</>}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="Does your website represent the business you have today?"
        body="If the answer is 'kind of'... we've got work to do."
        locale="en"
      />
    </>
  );
}
