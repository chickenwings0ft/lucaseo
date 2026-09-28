import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "../components/FaqSection";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "NFC Google Review Cards Gold Coast — Get 5-Star Reviews in Seconds | Lucaseo",
  description:
    "Tap-to-review NFC cards for Gold Coast businesses. No app, no typing — customers tap the card and land straight on your Google review page. Available in white or black.",
  alternates: { canonical: "https://lucaseo.com/nfc-review-cards" },
};

const faqs = [
  {
    q: "Do my customers need to download an app?",
    a: "No. NFC is built into every modern smartphone. They just tap the card against the back of their phone — like a contactless card payment — and their Google review page opens automatically in the browser.",
  },
  {
    q: "Does it work with iPhone and Android?",
    a: "Yes, both. iPhones need iOS 14 or later (almost every iPhone still in use), and virtually every Android phone from the last several years has NFC built in and switched on by default.",
  },
  {
    q: "Is this allowed by Google's review policies?",
    a: "Yes. The card simply takes a customer to the review box faster — it doesn't offer incentives for reviews and doesn't filter or screen customers before they review, which is exactly what Google's guidelines require. You're removing friction, not manipulating outcomes.",
  },
  {
    q: "Can I point the card somewhere other than Google — like Facebook or Trustpilot?",
    a: "Yes. The chip can be programmed to open any link — Google is the default because it's what drives local search rankings, but we can set it to whatever review platform matters most to your business.",
  },
  {
    q: "What if I need to change the link later?",
    a: "No problem — the chip can be reprogrammed. If you switch locations, rebrand, or want to point it at a different page, we can update it without replacing the card.",
  },
  {
    q: "How long does it take to get mine?",
    a: "Tell us your Google Business link and pick a design, and we'll get your card programmed and sent out. Exact timing depends on your order — ask us when you get in touch and we'll give you a straight answer.",
  },
  {
    q: "Can I order more than one, for multiple staff or locations?",
    a: "Yes. Some businesses put one on the counter, one on each table, or one per staff member. Tell us what you need and we'll sort out the right number for your setup.",
  },
];

export default function NfcReviewCardsPage() {
  return (
    <>
      <style>{`
        .nfc-page { --ink: #04091a; }

        /* Minimal header — no distracting nav on a conversion page */
        .nfc-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px; padding: 0 1.5rem;
          background: rgba(4,9,26,0.72);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .nfc-header__logo { display: flex; align-items: center; }
        .nfc-header__cta {
          display: inline-flex; align-items: center; height: 38px; padding: 0 1.25rem;
          background: var(--accent); color: #fff; font-size: 0.8125rem; font-weight: 600;
          text-decoration: none; border-radius: var(--radius-pill);
          transition: background 160ms var(--ease-out), transform 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) {
          .nfc-header__cta:hover { background: var(--accent-hover); }
        }
        .nfc-header__cta:active { transform: scale(0.96); }

        /* Hero */
        .nfc-hero {
          position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden;
          background: radial-gradient(ellipse 90% 70% at 70% 30%, rgba(0,74,173,0.35) 0%, transparent 65%), var(--ink);
          padding: 7rem 1.5rem 4rem;
        }
        .nfc-hero__grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 44px 44px; pointer-events: none; }
        .nfc-hero__in { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; width: 100%; display: flex; flex-direction: column; gap: 3rem; align-items: center; text-align: center; }
        .nfc-hero__badge { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #4d9aff; background: rgba(77,154,255,0.1); border: 1px solid rgba(77,154,255,0.25); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.5rem; }
        .nfc-hero__badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #4dff9a; box-shadow: 0 0 8px #4dff9a; flex-shrink: 0; }
        .nfc-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.12; letter-spacing: -0.03em; color: #fff; margin-bottom: 1.25rem; text-wrap: balance; max-width: 820px; }
        .nfc-hero h1 em { font-style: normal; color: #4d9aff; }
        .nfc-hero__lead { font-size: 1.125rem; color: rgba(255,255,255,0.7); line-height: 1.7; font-weight: 300; max-width: 560px; margin-bottom: 2rem; }
        .nfc-hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        .nfc-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem; text-decoration: none; border-radius: var(--radius-sm); transition: transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out), background 160ms var(--ease-out); }
        @media (hover: hover) and (pointer: fine) {
          .nfc-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,74,173,0.45); background: var(--accent-hover); }
        }
        .nfc-btn:active { transform: scale(0.97); transition-duration: 100ms; }
        .nfc-btn--ghost { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: #fff; }
        @media (hover: hover) and (pointer: fine) {
          .nfc-btn--ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); box-shadow: none; transform: none; }
        }
        .nfc-hero__img-wrap { position: relative; width: 100%; max-width: 760px; }
        .nfc-hero__img { width: 100%; height: auto; }

        /* Generic section shell */
        .nfc-section { max-width: 1100px; margin: 0 auto; padding: 5.5rem 2rem; }
        .nfc-tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; text-align: center; }
        .nfc-h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3.4vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.2; text-align: center; max-width: 760px; margin: 0 auto 1.25rem; text-wrap: balance; }
        .nfc-lead { font-size: 1.0625rem; color: var(--muted); line-height: 1.75; font-weight: 300; text-align: center; max-width: 640px; margin: 0 auto 3rem; }

        /* Problem section */
        .nfc-problem { background: var(--surface); }
        .nfc-problem__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 880px; margin: 0 auto; }
        .nfc-problem__card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.75rem; }
        .nfc-problem__card h3 { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin-bottom: 0.625rem; }
        .nfc-problem__card p { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }
        .nfc-problem__card--bad { border-color: rgba(192,57,43,0.25); }
        .nfc-problem__card--bad h3 { color: var(--error); }
        .nfc-problem__card--good h3 { color: var(--success); }

        /* How it works */
        .nfc-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .nfc-step { text-align: center; padding: 2rem 1.5rem; }
        .nfc-step__num { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--accent); color: #fff; font-family: var(--font-display); font-weight: 700; margin-bottom: 1.25rem; }
        .nfc-step h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; margin-bottom: 0.625rem; }
        .nfc-step p { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; }

        /* SEO tie-in */
        .nfc-seo { background: var(--ink); color: #fff; }
        .nfc-seo .nfc-h2 { color: #fff; }
        .nfc-seo .nfc-tag { color: #4d9aff; }
        .nfc-seo__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; max-width: 900px; margin: 0 auto; }
        .nfc-seo__list { display: flex; flex-direction: column; gap: 1.25rem; }
        .nfc-seo__item { display: flex; gap: 0.875rem; }
        .nfc-seo__item-icon { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: rgba(77,154,255,0.15); display: flex; align-items: center; justify-content: center; color: #4d9aff; font-size: 0.875rem; font-weight: 700; }
        .nfc-seo__item p { font-size: 0.9375rem; color: rgba(255,255,255,0.72); line-height: 1.65; font-weight: 300; }
        .nfc-seo__item strong { color: #fff; font-weight: 600; }
        .nfc-seo__card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-lg); padding: 2rem; }
        .nfc-seo__card p { font-size: 0.9375rem; color: rgba(255,255,255,0.72); line-height: 1.7; font-weight: 300; margin-bottom: 1.5rem; }
        .nfc-seo__card a { color: #4d9aff; font-weight: 600; text-decoration: none; }
        .nfc-seo__card a:hover { text-decoration: underline; }

        /* Products */
        .nfc-products { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; }
        .nfc-product { border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); transition: transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out); display: flex; flex-direction: column; }
        @media (hover: hover) and (pointer: fine) {
          .nfc-product:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
        }
        .nfc-product__swatch { height: 140px; display: flex; align-items: center; justify-content: center; }
        .nfc-product__swatch--white { background: linear-gradient(160deg, #fdfdff 0%, #eef2fb 100%); border-bottom: 1px solid var(--border); }
        .nfc-product__swatch--black { background: linear-gradient(160deg, #14161f 0%, #04091a 100%); }
        .nfc-product__card {
          width: 84px; height: 118px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.375rem;
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }
        .nfc-product__card--white { background: #fff; }
        .nfc-product__card--black { background: #111319; }
        .nfc-product__g { font-family: var(--font-display); font-weight: 800; font-size: 1.375rem; color: var(--accent); }
        .nfc-product__stars { font-size: 0.5rem; letter-spacing: 1px; color: #f5b301; }
        .nfc-product__body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; }
        .nfc-product__body h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; }
        .nfc-product__body p { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; margin-bottom: 1.25rem; }
        .nfc-product__features { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
        .nfc-product__features li { font-size: 0.875rem; color: var(--text); display: flex; align-items: flex-start; gap: 0.5rem; }
        .nfc-product__features li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .nfc-product__cta {
          margin-top: auto; display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 1.5rem; background: var(--accent); color: #fff; font-weight: 600; font-size: 0.9375rem;
          text-decoration: none; border-radius: var(--radius-sm); transition: transform 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) {
          .nfc-product__cta:hover { background: var(--accent-hover); }
        }
        .nfc-product__cta:active { transform: scale(0.97); transition-duration: 100ms; }

        /* Closing CTA */
        .nfc-closing { background: var(--accent); text-align: center; }
        .nfc-closing .nfc-h2 { color: #fff; }
        .nfc-closing__lead { color: rgba(255,255,255,0.8); }
        .nfc-closing__actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
        .nfc-closing .nfc-btn--ghost { border-color: rgba(255,255,255,0.4); }

        @media (max-width: 760px) {
          .nfc-problem__grid, .nfc-seo__grid, .nfc-products, .nfc-steps { grid-template-columns: 1fr; }
          .nfc-section { padding: 3.5rem 1.25rem; }
        }
      `}</style>

      <div className="nfc-page">
        <header className="nfc-header">
          <Link href="/" className="nfc-header__logo" aria-label="Lucaseo — home">
            <Image src="/logo.png" alt="Lucaseo" width={40} height={40} priority style={{ width: "auto", height: "34px", filter: "brightness(0) invert(1)" }} />
          </Link>
          <Link href="/contact?product=nfc-white" className="nfc-header__cta">Get my card</Link>
        </header>

        <section className="nfc-hero">
          <div className="nfc-hero__grid" />
          <div className="nfc-hero__in">
            <div>
              <div className="nfc-hero__badge">Gold Coast · NFC Google Review Cards</div>
              <h1>Turn every happy customer into a <em>5-star Google review</em> — with one tap</h1>
              <p className="nfc-hero__lead">
                No app. No searching for your business on Google. Your customer taps the card against their phone and their review box opens instantly — while the good experience is still fresh.
              </p>
              <div className="nfc-hero__actions">
                <Link href="/contact?product=nfc-white" className="nfc-btn">Get my NFC card →</Link>
                <a href="#how-it-works" className="nfc-btn nfc-btn--ghost">See how it works</a>
              </div>
            </div>
            <div className="nfc-hero__img-wrap">
              <Image
                src="/nfc-review-cards-hero.png"
                alt="White and black NFC tap cards that open a customer's Google review page instantly"
                width={1536}
                height={1024}
                className="nfc-hero__img"
                priority
              />
            </div>
          </div>
        </section>

        <section className="nfc-section nfc-problem">
          <p className="nfc-tag">The problem</p>
          <h2 className="nfc-h2">Happy customers rarely leave reviews. Upset ones always find the time.</h2>
          <p className="nfc-lead">
            It&apos;s not that your customers don&apos;t like you — it&apos;s that leaving a review takes effort, and only strong emotion overcomes effort. That imbalance quietly drags your rating down and buries you under competitors with more (and more recent) reviews.
          </p>
          <div className="nfc-problem__grid">
            <div className="nfc-problem__card nfc-problem__card--bad">
              <h3>Without a system</h3>
              <p>A customer has a great experience, means to leave a review, gets home, forgets. Meanwhile one bad day gets a review the same night.</p>
            </div>
            <div className="nfc-problem__card nfc-problem__card--good">
              <h3>With an NFC card</h3>
              <p>You hand them the card, or leave it on the counter or table. One tap, ten seconds, done — while they&apos;re still standing in front of you, still happy.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="nfc-section">
          <p className="nfc-tag">How it works</p>
          <h2 className="nfc-h2">From tap to 5-star review in under 10 seconds</h2>
          <p className="nfc-lead">No app to download. No account to create. It works exactly like tapping a contactless card at checkout.</p>
          <div className="nfc-steps">
            <div className="nfc-step">
              <div className="nfc-step__num">1</div>
              <h3>Tap</h3>
              <p>Your customer taps the card against the back of their phone — iPhone or Android, no app required.</p>
            </div>
            <div className="nfc-step">
              <div className="nfc-step__num">2</div>
              <h3>Land</h3>
              <p>Their phone opens straight to your Google Business review box. No searching, no scrolling.</p>
            </div>
            <div className="nfc-step">
              <div className="nfc-step__num">3</div>
              <h3>Review</h3>
              <p>They write it in seconds, while the experience — and the good mood — is still fresh.</p>
            </div>
          </div>
        </section>

        <section className="nfc-section nfc-seo">
          <p className="nfc-tag">Why this matters for your SEO</p>
          <h2 className="nfc-h2">Reviews aren&apos;t just for show — Google uses them to rank you</h2>
          <div className="nfc-seo__grid">
            <div className="nfc-seo__list">
              <div className="nfc-seo__item">
                <div className="nfc-seo__item-icon">1</div>
                <p><strong>Prominence is a ranking factor.</strong> Google has confirmed that the number and quality of your reviews directly influence your position in local search and the Google Maps 3-pack.</p>
              </div>
              <div className="nfc-seo__item">
                <div className="nfc-seo__item-icon">2</div>
                <p><strong>Fresh reviews signal an active business.</strong> A steady stream of recent reviews tells Google&apos;s algorithm — and your customers — that you&apos;re open, trusted, and worth choosing today.</p>
              </div>
              <div className="nfc-seo__item">
                <div className="nfc-seo__item-icon">3</div>
                <p><strong>Reviews close the deal once you&apos;re found.</strong> Ranking well gets you seen. Reviews are what convince someone to actually pick up the phone or walk through your door.</p>
              </div>
            </div>
            <div className="nfc-seo__card">
              <p>
                An NFC review card is a simple, honest way to fix the review side of local SEO — but it&apos;s one piece of a bigger picture. If you want your Google Business Profile, keywords and rankings working together, that&apos;s the full service.
              </p>
              <Link href="/seo">See our full SEO service →</Link>
            </div>
          </div>
        </section>

        <section className="nfc-section">
          <p className="nfc-tag">Choose your card</p>
          <h2 className="nfc-h2">Two finishes. Same instant tap-to-review technology.</h2>
          <p className="nfc-lead">Both cards are pre-programmed with your own Google review link, ready to use the moment they arrive.</p>
          <div className="nfc-products">
            <div className="nfc-product">
              <div className="nfc-product__swatch nfc-product__swatch--white">
                <div className="nfc-product__card nfc-product__card--white">
                  <span className="nfc-product__g">G</span>
                  <span className="nfc-product__stars">★★★★★</span>
                </div>
              </div>
              <div className="nfc-product__body">
                <h3>White NFC Card</h3>
                <p>Clean and minimal — blends naturally with light counters, reception desks and menus.</p>
                <ul className="nfc-product__features">
                  <li>Tap-to-review NFC chip, no app needed</li>
                  <li>Works with iPhone &amp; Android</li>
                  <li>Durable, credit-card-sized PVC</li>
                  <li>Pre-programmed with your Google review link</li>
                </ul>
                <Link href="/contact?product=nfc-white" className="nfc-product__cta">Choose White →</Link>
              </div>
            </div>
            <div className="nfc-product">
              <div className="nfc-product__swatch nfc-product__swatch--black">
                <div className="nfc-product__card nfc-product__card--black">
                  <span className="nfc-product__g">G</span>
                  <span className="nfc-product__stars">★★★★★</span>
                </div>
              </div>
              <div className="nfc-product__body">
                <h3>Black NFC Card</h3>
                <p>Sleek and premium — stands out on dark surfaces and gives a boutique, high-end feel.</p>
                <ul className="nfc-product__features">
                  <li>Tap-to-review NFC chip, no app needed</li>
                  <li>Works with iPhone &amp; Android</li>
                  <li>Durable, credit-card-sized PVC</li>
                  <li>Pre-programmed with your Google review link</li>
                </ul>
                <Link href="/contact?product=nfc-black" className="nfc-product__cta">Choose Black →</Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection topic="NFC Google review cards" faqs={faqs} title="Frequently asked questions" />

        <section className="nfc-section nfc-closing">
          <p className="nfc-tag" style={{ color: "rgba(255,255,255,0.7)" }}>Start collecting more reviews</p>
          <h2 className="nfc-h2">Your next customer could be your next 5-star review</h2>
          <p className="nfc-lead nfc-closing__lead">Tell us a bit about your business and we&apos;ll get your card set up — white or black, ready to tap.</p>
          <div className="nfc-closing__actions">
            <Link href="/contact?product=nfc-white" className="nfc-btn" style={{ background: "#fff", color: "var(--accent)" }}>Get my NFC card →</Link>
            <Link href="/contact" className="nfc-btn nfc-btn--ghost">Ask us a question</Link>
          </div>
        </section>

        <SiteFooter locale="en" />
      </div>
    </>
  );
}
