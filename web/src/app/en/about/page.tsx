import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import FreeConsultationCta from "../../components/FreeConsultationCta";
import ServiceAreaMap from "../../components/ServiceAreaMap";
import ServiceHero from "../../components/ServiceHero";

export const metadata: Metadata = {
  title: "About Lucas — Gold Coast SEO Specialist | Lucaseo",
  description: "I'm Lucas — Gold Coast's organic SEO specialist. I built Lucaseo to help local businesses rank on Google and get recommended by AI. Honest work, real results.",
  alternates: { canonical: "https://lucaseo.com/en/about" },
};

export default function AboutPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <ServiceHero
        eyebrow="About Me"
        title="I'm Lucas."
        highlight="And I started Lucaseo because I was sick of watching agencies lie."
        lead="A few years back I was working as a freelancer. One day a client asked me why another agency was charging $5000 for what I was doing for $500. Something clicked. I decided to build a different kind of agency."
        cta1Text="Let's talk"
        cta1Href="/#contact"
        withVideo={true}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2.5rem" }}>
        <section style={{ paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            I grew up watching family run small businesses. They worked 12-hour days without understanding why their competitors sold more. Later I found out — their competitors were online, and they weren't.
          </p>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            The internet changed the game. Nobody had explained that to them.
          </p>
          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
            When I started in digital marketing, I saw the opportunity. But I also saw the problem: agencies charging $200/hour for "strategy" that was really just sitting in a meeting without actually listening.
          </p>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            How I got here
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              The breaking point
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              I thought: "This isn't right. There has to be another way." So I decided to build a different agency. One that doesn't lie with metrics. Doesn't bill for hours it didn't work. Doesn't disappear after the sale. Is honest.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Why SEO + AI, not just web design
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
              I started out building websites. Nice ones, functional ones — but just websites. Then I realised something: a beautiful website nobody can find is like a five-star restaurant in the middle of the desert.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1rem" }}>
              So I learned SEO. Ranking on Google. Driving organic traffic. That actually works.
            </p>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              But then something else happened: people started searching on ChatGPT, Claude, Perplexity. Not just Google anymore. So I had to learn to rank there too. And to use AI not as a replacement for the work, but as an amplifier — doing in 2 weeks what used to take 2 months.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            What I learned along the way
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Clients don't need a corporate agency
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              We're led to believe bigger means better. It's not true. A 50-person agency where you get passed between 5 departments is slower than one person who knows exactly what they're doing. My best clients tell me the same thing: "I don't want to talk to 'the team'. I want to talk to you."
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Most agencies still charge like it's 2015
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              15 years ago, building a website took weeks and cost thousands. Today, with AI, I can build a functional website in 1-2 weeks. What do other agencies do? Charge just as much. What do I do? Lower the price. Your business grows without going broke.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              AI changed the game. Others haven't caught on yet.
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              Plenty of agencies see AI as a threat. I see it differently: as a tool to work faster, deliver more value and charge less. But most haven't adapted yet. They're still pricing like it's 2015.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            How I work with you
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Listen first, sell second
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              I'm not going to call you with a rehearsed sales pitch. I'm going to ask questions. Most agencies do the opposite: they show you 5 options and ask which you want. I listen first. Then I propose what you actually need.
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Radical honesty
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              If I think your idea won't work, I'll tell you — even if it costs me the sale. If your budget is small but your potential is big, I'll propose a cheaper solution that works. I know it sounds odd in the agency world. But that's how I do business.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Results, not smoke and mirrors
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              I care about 3 things: leads, conversions and ROI. I don't care about impressions, reach, vanity metrics. I'll send you reports where you can see exactly what's working. If something isn't working, we fix it. If it's working, we scale it.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            What to expect from Lucaseo
          </h2>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Fast replies (no radio silence)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              I'll get back to you within 24h. Sooner if it's urgent. I'm not the type to disappear after the sale or leave messages unanswered.
            </p>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Personal service (you talk to me, not "the team")
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              When you contact Lucaseo, you're talking to me. Not a "specialist" or an "account manager". I handle everything. I decide the strategy. I look at the numbers. You always talk to me.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", color: "#0a0f1e" }}>
              Fair pricing (not the market's ceiling)
            </h3>
            <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
              I don't treat you like an open wallet. I charge what's fair. If something isn't worth it, I'll tell you. If I can do it cheaper without cutting quality, I will.
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            I'm not perfect. But I am honest.
          </h2>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            I'm someone who's just getting started. I don't have 20 years of experience (though I've been at this for several years now). I'm not a 50-person agency.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem" }}>
            What I do have:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "2.5rem" }}>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ Real results (30→147 customers in 3 months)</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ A genuine drive to do it properly</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "0.75rem" }}>✓ Pricing that makes sense</li>
            <li style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>✓ Honest dealings</li>
          </ul>

          <div style={{ background: "#f5f8ff", padding: "2.5rem", borderRadius: "8px", marginTop: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1.5rem", color: "#004aad" }}>
              What I DON'T do
            </h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ I don't promise results I can't guarantee</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ I don't lock you into endless contracts</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ I don't raise prices just because</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ I don't disappear after the sale</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7, marginBottom: "0.75rem" }}>✗ I don't pass you between 5 different people</li>
              <li style={{ fontSize: "0.9375rem", color: "#5a6480", lineHeight: 1.7 }}>✗ I don't bill for hours I didn't work</li>
            </ul>
          </div>
        </section>

        <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(0,74,173,0.1)" }}>
          <h2 style={{ fontFamily: "var(--font-display), system-ui", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2.5rem" }}>
            Why this matters
          </h2>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.5rem" }}>
            Because your business is probably your life. You spend 12 hours a day thinking about it. You put your own money into it. You take risks.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300 }}>
            You deserve someone who understands that. Not someone who sees you as a line on a spreadsheet.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginTop: "1.5rem" }}>
            At Lucaseo, when your business grows, I celebrate. When it hits a wall, it frustrates me as much as it does you.
          </p>

          <p style={{ fontSize: "1.0625rem", color: "#5a6480", lineHeight: 1.8, fontWeight: 300, marginTop: "1.5rem", fontStyle: "italic" }}>
            It's not a service. It's a partnership.
          </p>
        </section>
      </div>

      <ServiceAreaMap />

      <FreeConsultationCta />

      <ServiceCta
        title="Shall we start?"
        body="This isn't a sales pitch. It's a conversation. Let's talk about your business, what you need, and how I can help."
        locale="en"
      />
    </>
  );
}
