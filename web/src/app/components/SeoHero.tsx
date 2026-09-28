import PrefillQuoteButton from "./PrefillQuoteButton";
import { TiltCard } from "./TiltCard";

interface Props {
  badge: string;
  h1: React.ReactNode;
  lead: string;
  ctaLabel?: string;
  ctaMessage?: string;
}

export default function SeoHero({ badge, h1, lead, ctaLabel = "Get your free SEO audit", ctaMessage = "" }: Props) {
  return (
    <section className="seo-hero">
      <style>{`
        .seo-hero {
          --ink: #04091a;
          --accent-hover: #0057cc;
          --accent-light: #4d9aff;
          --success: #4dff9a;
        }
        .seo-hero { position: relative; background: var(--ink); min-height: 100svh; display: flex; align-items: center; overflow: hidden; padding: 6.5rem 1.25rem 4rem; }
        .seo-hero__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 60% 50%, rgba(0,74,173,0.18) 0%, transparent 70%); pointer-events: none; }
        .seo-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .seo-hero__inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 3rem; align-items: center; }
        .seo-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-light); background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.5rem; }
        .seo-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--success); box-shadow: 0 0 8px var(--success); flex-shrink: 0; }
        .seo-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 7vw, 3.75rem); line-height: 1.1; letter-spacing: -0.03em; color: #fff; margin-bottom: 1.25rem; text-wrap: balance; }
        .seo-hero h1 em { font-style: normal; color: var(--accent-light); }
        .seo-hero__lead { font-size: clamp(1rem, 2.5vw, 1.125rem); color: rgba(255,255,255,0.65); line-height: 1.7; font-weight: 300; max-width: 520px; margin-bottom: 2rem; }
        .seo-hero__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; }
        .seo-hero__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 1.75rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s; }
        .seo-hero__btn:hover { background: var(--accent-hover); }

        .seo-hero__phone-wrap { position: relative; display: flex; justify-content: center; width: 100%; }
        .seo-hero__phone-glow { position: absolute; inset: -20%; background: radial-gradient(circle, rgba(0,74,173,0.4) 0%, transparent 65%); pointer-events: none; }
        .seo-hero__phone { position: relative; z-index: 1; width: 100%; height: auto; max-width: 300px; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(0,74,173,0.4)); animation: seo-float 4s ease-in-out infinite; }
        @keyframes seo-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        @media (min-width: 1024px) {
          .seo-hero { padding: 7rem 2.5rem 5rem; }
          .seo-hero__inner { flex-direction: row; gap: 5rem; text-align: left; }
          .seo-hero__inner > div:first-child { flex: 1; }
          .seo-hero__phone-wrap { flex: 0 0 440px; }
          .seo-hero__phone { max-width: 440px; }
        }
      `}</style>

      <div className="seo-hero__bg" />
      <div className="seo-hero__grid" />
      <div className="seo-hero__inner">
        <div>
          <div className="seo-hero__badge">{badge}</div>
          <h1>{h1}</h1>
          <p className="seo-hero__lead">{lead}</p>
          <div className="seo-hero__actions">
            <PrefillQuoteButton message={ctaMessage} className="seo-hero__btn">{ctaLabel}</PrefillQuoteButton>
          </div>
        </div>
        <div className="seo-hero__phone-wrap">
          <div className="seo-hero__phone-glow" />
          <TiltCard
            image="/mockup-seo.png"
            alt="Google AI Overview recommending Lucaseo — Gold Coast SEO specialist"
            width={1024}
            height={1536}
            className="seo-hero__phone"
            priority
          />
        </div>
      </div>
    </section>
  );
}
