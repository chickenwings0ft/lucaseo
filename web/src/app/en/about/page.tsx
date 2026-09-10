import type { Metadata } from "next";
import ServiceNav from "../../components/ServiceNav";
import ServiceCta from "../../components/ServiceCta";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Lucas | Lucaseo",
  description: "Meet Lucas, founder of Lucaseo. Digital marketing, SEO, artificial intelligence and one obsession: growing your business.",
  alternates: { canonical: "https://lucaseo.com/en/about" },
};

export default function AboutPage() {
  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .about-hero { padding: 9rem 2rem 5rem; background: linear-gradient(168deg, #f0f5ff 0%, #ffffff 68%); border-bottom: 1px solid rgba(0,74,173,0.1); }
        .about-in { max-width: 800px; margin: 0 auto; }
        .about-eyebrow { font-size: 0.75rem; font-weight: 600; color: #004aad; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .about-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2.25rem, 5vw, 4rem); line-height: 1.06; letter-spacing: -0.03em; margin-bottom: 1.75rem; }
        .about-hero h1 em { font-style: normal; color: #004aad; }
        .about-lead { font-size: 1.125rem; color: #5a6480; line-height: 1.75; margin-bottom: 1.25rem; max-width: 640px; }
        .about-section { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
        .about-section + .about-section { border-top: 1px solid rgba(0,74,173,0.1); }
        .about-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .about-section h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -0.03em; margin-bottom: 1.25rem; }
        .about-section p { font-size: 1rem; color: #3d4661; line-height: 1.8; margin-bottom: 1.25rem; }
        .about-values { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem; }
        .about-value { padding: 1.5rem; border: 1px solid rgba(0,74,173,0.12); border-radius: 8px; }
        .about-value h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.5rem; }
        .about-value p { font-size: 0.9375rem; color: #5a6480; margin-bottom: 0; }
        .about-timeline { list-style: none; padding: 0; margin: 2rem 0 0; display: flex; flex-direction: column; gap: 1.5rem; }
        .about-timeline li { display: flex; gap: 1.25rem; align-items: flex-start; }
        .about-year { font-family: var(--font-display); font-weight: 800; font-size: 1rem; color: #004aad; flex-shrink: 0; min-width: 48px; }
        .about-timeline p { font-size: 0.9375rem; color: #3d4661; line-height: 1.7; margin: 0; }
        @media (max-width: 600px) { .about-values { grid-template-columns: 1fr; } }
      `}</style>

      <section className="about-hero">
        <div className="about-in">
          <div className="about-eyebrow">About Lucas</div>
          <h1>Digital marketing with an <em>obsession for results</em></h1>
          <p className="about-lead">
            I didn't become a marketer by accident. I started selling online at 17 and haven't stopped learning, experimenting and — most importantly — generating measurable results for real businesses.
          </p>
          <p className="about-lead">
            Lucaseo was born from a frustration: watching big agencies charge a lot, deliver little and never be held accountable. I decided to build something different: an agency where transparency, speed and results aren't slogans — they're how we work.
          </p>
        </div>
      </section>

      <div className="about-section">
        <div className="about-tag">My story</div>
        <h2>From selling online to building an agency</h2>
        <p>I started in the digital world before I knew digital marketing was a thing. At 17, I was selling products online, learning through trial and error how Google, social media and online advertising worked. Every dollar I invested from my own pocket had to generate returns — and that taught me something many big agencies never learn: the client's money is not abstract.</p>
        <p>Then came years of training, working with businesses of all sizes and specializing in SEO, SEM and artificial intelligence applied to marketing. Today I combine that practical experience with the most advanced tools in the market to give every client what they need: more clients, not more vanity metrics.</p>

        <ul className="about-timeline">
          <li><span className="about-year">2019</span><p>First online sales and discovery of digital marketing as a discipline.</p></li>
          <li><span className="about-year">2021</span><p>First SEO and SEM clients. Measurable results from the very first project.</p></li>
          <li><span className="about-year">2023</span><p>Specialization in AI applied to marketing and process automation.</p></li>
          <li><span className="about-year">2024</span><p>Founded Lucaseo as an agency. Focus on SEO, SEM, social media, web and AI.</p></li>
          <li><span className="about-year">2025</span><p>International expansion. Clients in Spain, Latin America and Australia.</p></li>
        </ul>
      </div>

      <div className="about-section">
        <div className="about-tag">How I work</div>
        <h2>Four principles I don't negotiate</h2>
        <div className="about-values">
          <div className="about-value">
            <h3>Radical transparency</h3>
            <p>You'll see every action I take, every dollar I spend and every result I get. If something isn't working, I tell you before you find out yourself.</p>
          </div>
          <div className="about-value">
            <h3>Results over activity</h3>
            <p>I don't measure my work in hours billed or reports sent. I measure it in clients won, positions gained and returns generated.</p>
          </div>
          <div className="about-value">
            <h3>Real speed</h3>
            <p>I respond in hours, not days. I execute in days, not weeks. In a world where agencies take a month to send a proposal, I have it ready the same day.</p>
          </div>
          <div className="about-value">
            <h3>No long contracts</h3>
            <p>If my work doesn't convince you this month, you leave next month. No penalties, no fine print. If I have to retain you with a contract, something is wrong.</p>
          </div>
        </div>
      </div>

      <ServiceCta
        title="Let's talk?"
        body="Tell me your situation. No commitment, no pressure, no sales pitch. Just a conversation to see if I can help."
        locale="en"
      />
      <SiteFooter locale="en" />
    </>
  );
}
