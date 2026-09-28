import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "../components/FaqSection";
import SiteFooter from "../components/SiteFooter";
import OrderForm from "./OrderForm";

export const metadata: Metadata = {
  title: "NFC Google Review Cards Gold Coast — Get 5-Star Reviews in Seconds | Lucaseo",
  description:
    "Tap-to-review NFC cards for Gold Coast businesses. No app, no typing — customers tap the card and land straight on your Google review page. White or black, from $25/card.",
  alternates: { canonical: "https://lucaseo.com/nfc-review-cards" },
};

const faqs = [
  {
    q: "Do my customers need an app?",
    a: "No. They tap the card on their phone — like a contactless payment — and their Google review box opens automatically.",
  },
  {
    q: "iPhone and Android both work?",
    a: "Yes. Any iPhone on iOS 14+ and virtually any Android phone from the last few years — NFC is already built in and on.",
  },
  {
    q: "Is this against Google's review policies?",
    a: "No. You're removing friction, not buying or filtering reviews — exactly what Google's guidelines allow.",
  },
  {
    q: "Can it link to Facebook or Trustpilot instead?",
    a: "Yes, the chip can be programmed to open any link. Google is the default because it drives local rankings.",
  },
  {
    q: "Can I change the link later?",
    a: "Yes, the chip can be reprogrammed any time — new location, new page, no replacement needed.",
  },
  {
    q: "How fast will I get mine?",
    a: "Send your Google review link and pick a colour — we'll confirm your exact dispatch date when you order.",
  },
];

export default function NfcReviewCardsPage() {
  return (
    <>
      <style>{`
        .nfc-page { --ink: #04091a; }

        .nfc-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; padding: 0 1.5rem;
          background: rgba(4,9,26,0.72);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nfc-header__cta {
          display: inline-flex; align-items: center; height: 38px; padding: 0 1.25rem;
          background: var(--accent); color: #fff; font-size: 0.8125rem; font-weight: 600;
          text-decoration: none; border-radius: var(--radius-pill);
          transition: background 160ms var(--ease-out), transform 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) { .nfc-header__cta:hover { background: var(--accent-hover); } }
        .nfc-header__cta:active { transform: scale(0.96); }

        /* Hero */
        .nfc-hero {
          position: relative; min-height: 92vh; display: flex; align-items: center; overflow: hidden;
          background: radial-gradient(ellipse 80% 60% at 75% 25%, rgba(0,74,173,0.4) 0%, transparent 65%), var(--ink);
          padding: 6.5rem 1.5rem 3rem;
        }
        .nfc-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .nfc-hero__in { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 2rem; align-items: center; text-align: left; }
        .nfc-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #4d9aff; background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.5rem; }
        .nfc-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #4dff9a; box-shadow: 0 0 8px #4dff9a; flex-shrink: 0; }
        .nfc-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.875rem, 3.4vw, 2.875rem); line-height: 1.15; letter-spacing: -0.03em; color: #fff; margin-bottom: 1.125rem; text-wrap: balance; }
        .nfc-hero h1 em { font-style: normal; color: #4d9aff; }
        .nfc-hero__lead { font-size: 1.0625rem; color: rgba(255,255,255,0.65); line-height: 1.6; font-weight: 300; max-width: 460px; margin-bottom: 1.75rem; }
        .nfc-hero__actions { display: flex; gap: 0.875rem; flex-wrap: wrap; }
        .nfc-hero__trust { display: flex; gap: 1.5rem; margin-top: 2rem; flex-wrap: wrap; }
        .nfc-hero__trust span { font-size: 0.8125rem; color: rgba(255,255,255,0.55); display: flex; align-items: center; gap: 0.4rem; }
        .nfc-hero__trust span::before { content: '✓'; color: #4dff9a; font-weight: 700; }
        .nfc-hero__img-wrap { position: relative; width: 100%; }
        .nfc-hero__img { width: 100%; height: auto; }

        @keyframes nfc-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @media (prefers-reduced-motion: no-preference) {
          .nfc-float { animation: nfc-float 5s ease-in-out infinite; }
          .nfc-swatch__img { animation: nfc-float 4.5s ease-in-out infinite; }
          .nfc-swatch:nth-child(2) .nfc-swatch__img { animation-delay: -2.2s; }
        }

        .nfc-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.875rem 1.75rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: var(--radius-sm); transition: transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out), background 160ms var(--ease-out); }
        @media (hover: hover) and (pointer: fine) { .nfc-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,74,173,0.45); background: var(--accent-hover); } }
        .nfc-btn:active { transform: scale(0.97); transition-duration: 100ms; }
        .nfc-btn--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; }
        @media (hover: hover) and (pointer: fine) { .nfc-btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); box-shadow: none; transform: none; } }

        /* Section shell */
        .nfc-section { max-width: 1100px; margin: 0 auto; padding: 4.5rem 2rem; }
        .nfc-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.875rem; text-align: center; }
        .nfc-h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.625rem, 3vw, 2.25rem); letter-spacing: -0.03em; line-height: 1.2; text-align: center; max-width: 700px; margin: 0 auto 0.875rem; text-wrap: balance; }
        .nfc-lead { font-size: 1rem; color: var(--muted); line-height: 1.6; font-weight: 300; text-align: center; max-width: 580px; margin: 0 auto 2.75rem; }

        /* How it works — compact icon row */
        .nfc-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .nfc-step { text-align: center; padding: 1.5rem 1rem; border: 1px solid var(--border); border-radius: var(--radius-lg); background: var(--surface); }
        .nfc-step__icon { width: 44px; height: 44px; border-radius: 50%; background: var(--accent-light); color: var(--accent); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.25rem; }
        .nfc-step h3 { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.375rem; }
        .nfc-step p { font-size: 0.875rem; color: var(--muted); line-height: 1.55; font-weight: 300; }

        /* Why reviews / SEO — stat row */
        .nfc-seo { background: var(--ink); color: #fff; }
        .nfc-seo .nfc-h2 { color: #fff; }
        .nfc-seo .nfc-tag { color: #4d9aff; }
        .nfc-seo .nfc-lead { color: rgba(255,255,255,0.6); }
        .nfc-seo__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-bottom: 2.5rem; }
        .nfc-seo__stat { text-align: center; padding: 1.5rem 1rem; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-lg); background: rgba(255,255,255,0.03); }
        .nfc-seo__stat b { display: block; font-family: var(--font-display); font-weight: 800; font-size: 2rem; color: #4d9aff; margin-bottom: 0.375rem; }
        .nfc-seo__stat p { font-size: 0.8125rem; color: rgba(255,255,255,0.6); line-height: 1.5; font-weight: 300; }
        .nfc-seo__cta { text-align: center; }
        .nfc-seo__cta a { color: #4d9aff; font-weight: 600; text-decoration: none; font-size: 0.9375rem; }
        .nfc-seo__cta a:hover { text-decoration: underline; }

        /* Products — compact swatch row */
        .nfc-swatches { display: flex; justify-content: center; gap: 2.5rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .nfc-swatch { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
        .nfc-swatch__img { width: 96px; height: 134px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem; box-shadow: 0 14px 30px rgba(0,0,0,0.15); }
        .nfc-swatch__img--white { background: #fff; border: 1px solid var(--border); }
        .nfc-swatch__img--black { background: #111319; }
        .nfc-swatch__g { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: var(--accent); }
        .nfc-swatch__stars { font-size: 0.5625rem; letter-spacing: 1px; color: #f5b301; }
        .nfc-swatch span.nfc-swatch__label { font-size: 0.875rem; font-weight: 600; color: var(--text); }

        /* Pricing tier reference strip */
        .nfc-tiers { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.75rem 1.5rem; margin-bottom: 2.5rem; }
        .nfc-tiers span { font-size: 0.875rem; color: var(--muted); }
        .nfc-tiers span b { color: var(--text); font-weight: 700; }

        /* Closing */
        .nfc-closing { background: var(--accent); text-align: center; }
        .nfc-closing .nfc-h2 { color: #fff; }
        .nfc-closing .nfc-lead { color: rgba(255,255,255,0.8); }
        .nfc-closing__actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
        .nfc-closing .nfc-btn--ghost { border-color: rgba(255,255,255,0.4); }

        @media (max-width: 900px) {
          .nfc-hero__in { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
          .nfc-hero__lead { max-width: 480px; margin-left: auto; margin-right: auto; }
          .nfc-hero__actions, .nfc-hero__trust { justify-content: center; }
          .nfc-hero__img-wrap { max-width: 420px; margin: 0 auto; order: -1; }
        }
        @media (max-width: 760px) {
          .nfc-steps, .nfc-seo__grid { grid-template-columns: 1fr; }
          .nfc-section { padding: 3.25rem 1.25rem; }
        }
      `}</style>

      <div className="nfc-page">
        <header className="nfc-header">
          <Link href="/" aria-label="Lucaseo — home">
            <Image src="/logo.png" alt="Lucaseo" width={40} height={40} priority style={{ width: "auto", height: "34px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <a href="#pricing" className="nfc-header__cta">Order now</a>
        </header>

        <section className="nfc-hero">
          <div className="nfc-hero__grid" />
          <div className="nfc-hero__in">
            <div>
              <div className="nfc-hero__badge">Gold Coast · NFC Review Cards</div>
              <h1>Turn happy customers into <em>5-star Google reviews</em> — with one tap</h1>
              <p className="nfc-hero__lead">
                No app, no typing. Tap the card, their review box opens instantly.
              </p>
              <div className="nfc-hero__actions">
                <a href="#pricing" className="nfc-btn">Order now →</a>
                <a href="#how-it-works" className="nfc-btn nfc-btn--ghost">How it works</a>
              </div>
              <div className="nfc-hero__trust">
                <span>Works on iPhone & Android</span>
                <span>Delivered by hand, Gold Coast wide, in 2 days max</span>
              </div>
            </div>
            <div className="nfc-hero__img-wrap">
              <Image
                src="/nfc-review-cards-hero.png"
                alt="White and black NFC tap cards that open a customer's Google review page instantly"
                width={1536}
                height={1024}
                className="nfc-hero__img nfc-float"
                priority
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="nfc-section">
          <p className="nfc-tag">Build your order</p>
          <h2 className="nfc-h2">White or black. Mix quantities, add stickers.</h2>
          <p className="nfc-lead">Every card is pre-configured with your business&apos;s Google review link. Hand-delivered across the Gold Coast within 2 business days.</p>

          <div className="nfc-swatches">
            <div className="nfc-swatch">
              <div className="nfc-swatch__img nfc-swatch__img--white">
                <span className="nfc-swatch__g">G</span>
                <span className="nfc-swatch__stars">★★★★★</span>
              </div>
              <span className="nfc-swatch__label">White</span>
            </div>
            <div className="nfc-swatch">
              <div className="nfc-swatch__img nfc-swatch__img--black">
                <span className="nfc-swatch__g">G</span>
                <span className="nfc-swatch__stars">★★★★★</span>
              </div>
              <span className="nfc-swatch__label">Black</span>
            </div>
          </div>

          <div className="nfc-tiers">
            <span><b>1</b> card — $39</span>
            <span><b>2</b> cards — $69</span>
            <span><b>3–9</b> cards — $30 each</span>
            <span><b>10+</b> cards — $25 each</span>
          </div>

          <OrderForm />
        </section>

        <section id="how-it-works" className="nfc-section">
          <p className="nfc-tag">How it works</p>
          <h2 className="nfc-h2">Three seconds, no app required</h2>
          <p className="nfc-lead">Happy customers rarely leave reviews — this removes every excuse.</p>
          <div className="nfc-steps">
            <div className="nfc-step">
              <div className="nfc-step__icon">①</div>
              <h3>Tap</h3>
              <p>Card touches the back of their phone.</p>
            </div>
            <div className="nfc-step">
              <div className="nfc-step__icon">②</div>
              <h3>Land</h3>
              <p>Google review box opens automatically.</p>
            </div>
            <div className="nfc-step">
              <div className="nfc-step__icon">③</div>
              <h3>Review</h3>
              <p>Written in seconds, while it&apos;s fresh.</p>
            </div>
          </div>
        </section>

        <section className="nfc-section nfc-seo">
          <p className="nfc-tag">Why it matters</p>
          <h2 className="nfc-h2">Reviews are a Google ranking factor</h2>
          <p className="nfc-lead">More (and fresher) reviews move you up the local search results and the Maps 3-pack.</p>
          <div className="nfc-seo__grid">
            <div className="nfc-seo__stat">
              <b>#1</b>
              <p>Ranking signal Google confirms it uses for local search</p>
            </div>
            <div className="nfc-seo__stat">
              <b>10s</b>
              <p>Time it takes a customer to leave a review with one tap</p>
            </div>
            <div className="nfc-seo__stat">
              <b>24/7</b>
              <p>Card keeps collecting reviews with zero effort from you</p>
            </div>
          </div>
          <p className="nfc-seo__cta"><Link href="/seo">Want the full SEO picture too? →</Link></p>
        </section>

        <FaqSection topic="NFC Google review cards" faqs={faqs} title="Frequently asked questions" />

        <section className="nfc-section nfc-closing">
          <p className="nfc-tag" style={{ color: "rgba(255,255,255,0.7)" }}>Start today</p>
          <h2 className="nfc-h2">Your next customer could be your next 5-star review</h2>
          <p className="nfc-lead">Pick a card, and we&apos;ll get it sent out.</p>
          <div className="nfc-closing__actions">
            <a href="#pricing" className="nfc-btn" style={{ background: "#fff", color: "var(--accent)" }}>Order now →</a>
            <Link href="/contact" className="nfc-btn nfc-btn--ghost">Ask us a question</Link>
          </div>
        </section>

        <SiteFooter locale="en" />
      </div>
    </>
  );
}
