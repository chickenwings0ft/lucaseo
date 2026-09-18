import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import FaqSection from "../../components/FaqSection";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "AI Automation Australia — Lucaseo | Work Less, Close More",
  description: "We automate repetitive processes with AI. CRM, leads, emails, customer service on autopilot. Integrates with the tools you already use.",
  alternates: { canonical: "https://lucaseo.com/en/ai" },
};

const aiFaqs = [
  { q: "What processes can I automate with AI?", a: "Lead response, sales follow-up, chatbots, email classification, reporting, lead scoring, automated WhatsApp and any repetitive task. AI takes away what your team shouldn't be doing manually." },
  { q: "Do I need technical knowledge?", a: "No. We handle everything: development, integration, setup. You get a working system connected to your tools: CRM, email, WhatsApp. AI for business needs to be easy to use." },
  { q: "How much does an AI chatbot cost?", a: "Depends on complexity. A basic chatbot doesn't cost the same as an assistant connected to your CRM. We do fixed-price proposals, no surprises." },
  { q: "Does it replace people on my team?", a: "No. It automates repetitive tasks: answering FAQs, qualifying leads, sending follow-ups. Your team focuses on closing sales and solving the complex stuff." },
  { q: "Does it integrate with HubSpot, Slack, WhatsApp?", a: "Yes. We use APIs and native integrations to connect AI with your CRM, email, WhatsApp Business, Slack. You don't change what you have; we connect everything." },
  { q: "How do I get started?", a: "Tell us what processes take up most of your time. We analyse and propose what to automate first so you see results quickly. No technical jargon." },
];

export default function AiPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="AI · Automation"
        title="Your team shouldn't spend the day doing things"
        highlight="a machine can do in seconds."
        lead="Answering the same questions. Copying data. Updating the CRM. Chasing leads. Reminders. Reports. Sorting emails. That doesn't need more hours — it needs a better system."
        cta1Text="I want to automate my business"
        cta1Href="/#contact"
        withVideo={true}
      />

      <style>{`
        .ias-tools-section {
          background: #04091a;
          padding: 2rem 0;
          overflow: hidden;
        }
        .ias-ticker-track {
          display: flex;
          width: max-content;
          animation: ias-scroll 14s linear infinite;
        }
        .ias-ticker-track:hover { animation-play-state: paused; }
        @keyframes ias-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ias-tools-img {
          height: 220px;
          width: auto;
          opacity: 0.9;
          flex-shrink: 0;
          margin-right: -60px;
        }
        @media (max-width: 768px) {
          .ias-tools-img { height: 130px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ias-ticker-track { animation: none; }
        }
      `}</style>

      <div className="ias-tools-section">
        <div className="ias-ticker-track" aria-hidden="true">
          <img src="/ias-section.png" alt="AI automation tools" className="ias-tools-img" />
          <img src="/ias-section.png" alt="" className="ias-tools-img" />
          <img src="/ias-section.png" alt="" className="ias-tools-img" />
          <img src="/ias-section.png" alt="" className="ias-tools-img" />
        </div>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>The idea</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            AI isn't here to take your work away. It's here to take away the work you never wanted to do.
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", maxWidth: "580px", lineHeight: 1.75, fontWeight: 300, marginBottom: "2rem" }}>
            We combine AI with automation, CRM and the tools you already use to build systems that keep running even when your team is busy. Or on holiday.
          </p>
          <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "1rem" }}>What we automate</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Lead response and automatic qualification</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Sales follow-up and reminders</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Smart chatbots for web and WhatsApp</li>
              <li style={{ marginBottom: "0.875rem", fontSize: "0.9375rem", color: "#5a6480" }}>→ Email classification and automatic reporting</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)", paddingBottom: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Real case studies</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            How AI frees up time
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>Clinic</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Before vs After</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> 20 minutes of manual work per request</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> AI collects info, qualifies, books and sends confirmation</p>
            </div>

            <div style={{ background: "#f5f8ff", padding: "2rem", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#004aad", background: "rgba(0,74,173,0.08)", padding: "0.375rem 0.75rem", borderRadius: "4px", marginBottom: "1rem", display: "inline-block" }}>E-commerce</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: "#004aad" }}>Cart recovery</h3>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480", marginBottom: "0.875rem" }}><strong>Before:</strong> Abandoned carts that just disappear</p>
              <p style={{ fontSize: "0.9375rem", color: "#5a6480" }}><strong>After:</strong> Recovery automation with no manual work</p>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "5rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#004aad", marginBottom: "1rem" }}>Integration</div>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            We connect with what you already use
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
            {["HubSpot", "Pipedrive", "ActiveCampaign", "WhatsApp Business", "Notion", "Airtable", "Google Sheets", "Slack", "OpenAI", "Zapier", "Make", "n8n"].map(tool => (
              <div key={tool} style={{ background: "#f5f8ff", padding: "0.75rem 1.5rem", borderRadius: "8px", fontSize: "0.9375rem", fontWeight: 500, color: "#004aad" }}>
                {tool}
              </div>
            ))}
          </div>
        </section>
      </div>

      <FaqSection topic="AI and automation" faqs={aiFaqs} />

      <ServiceAreaMap
        eyebrow="Service Area · AI Automation"
        title={<>Wherever you are on the <em>Gold Coast</em>, we&apos;ve got your automation covered.</>}
      />

      <FreeConsultationCta />

      <ServiceCta
        title="How many hours does your team lose to repetitive tasks?"
        body="AI can free up those hours. We start with a free analysis."
        locale="en"
      />
    </>
  );
}
