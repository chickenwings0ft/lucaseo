import PrefillQuoteButton from "./PrefillQuoteButton";

interface Props {
  header?: React.ReactNode;
  ctaMessage?: string;
}

export default function SeoVsSemGraphic({ header, ctaMessage = "" }: Props) {
  return (
    <div className="svs-wrap">
      <style>{`
        .svs-wrap {
          --text: #0a0f1e;
          --muted: #5a6480;
          --accent: #004aad;
          --accent-hover: #0057cc;
          --card-border: rgba(0,74,173,0.12);
        }
        .svs-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
        .svs-card { border-radius: 14px; padding: 1.75rem; border: 1px solid var(--card-border); }
        .svs-card--seo { border-color: rgba(0,74,173,0.28); background: linear-gradient(180deg, rgba(0,74,173,0.06) 0%, rgba(0,74,173,0.02) 100%); }
        .svs-card--sem { border-color: var(--card-border); background: #fafbfd; }
        .svs-card__head { display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 1rem; }
        .svs-card__icon { font-size: 1.375rem; width: 44px; height: 44px; border-radius: 10px; background: #fff; border: 1px solid var(--card-border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .svs-card__label { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.25rem; }
        .svs-card--sem .svs-card__label { color: var(--muted); }
        .svs-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; color: var(--text); letter-spacing: -0.01em; line-height: 1.25; }
        .svs-card__intro { font-size: 0.875rem; color: var(--muted); line-height: 1.65; margin-bottom: 1.25rem; }
        .svs-card__list { list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.625rem; }
        .svs-card__list li { font-size: 0.8375rem; color: var(--text); line-height: 1.55; padding-left: 1.375rem; position: relative; }
        .svs-card--seo .svs-card__list li::before { content: '✓'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }
        .svs-card--sem .svs-card__list li::before { content: '–'; position: absolute; left: 0; color: var(--muted); font-weight: 700; }
        .svs-chart { border-top: 1px solid var(--card-border); padding-top: 1.25rem; }
        .svs-chart svg { width: 100%; height: auto; display: block; overflow: visible; }
        .svs-chart__caption { font-size: 0.75rem; color: var(--muted); text-align: center; margin-top: 0.625rem; }

        .svs-cta { margin-top: 2.5rem; text-align: center; }
        .svs-cta__btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.9375rem 2rem; background: var(--accent); color: #fff; font-weight: 700; font-size: 0.9375rem; border-radius: 8px; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .svs-cta__btn:hover { background: var(--accent-hover); transform: translateY(-2px); }

        @media (min-width: 700px) { .svs-grid { grid-template-columns: repeat(2, 1fr); } }
      `}</style>

      {header}

      <div className="svs-grid">
        {/* SEO card */}
        <div className="svs-card svs-card--seo">
          <div className="svs-card__head">
            <span className="svs-card__icon">📈</span>
            <div>
              <div className="svs-card__label">SEO · Organic ranking</div>
              <div className="svs-card__title">Build it once. It works for years.</div>
            </div>
          </div>
          <p className="svs-card__intro">SEO earns your spot on Google through relevance and authority. Nobody can outbid you for it.</p>
          <ul className="svs-card__list">
            <li>No cost per click, no matter how much traffic you get</li>
            <li>Compounds over time — the longer you rank, the harder you are to displace</li>
            <li>An asset you own. Stop paying us and your rankings don&apos;t vanish</li>
            <li>Takes 3–6 months to build momentum</li>
          </ul>
          <div className="svs-chart">
            <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="70" width="24" height="10" fill="var(--accent)" opacity="0.45" />
              <rect x="42" y="62" width="24" height="18" fill="var(--accent)" opacity="0.55" />
              <rect x="74" y="53" width="24" height="27" fill="var(--accent)" opacity="0.65" />
              <rect x="106" y="42" width="24" height="38" fill="var(--accent)" opacity="0.78" />
              <rect x="138" y="30" width="24" height="50" fill="var(--accent)" opacity="0.9" />
              <rect x="170" y="16" width="24" height="64" fill="var(--accent)" opacity="1" />
              <text x="22" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 1</text>
              <text x="182" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 12</text>
            </svg>
            <div className="svs-chart__caption">Traffic keeps climbing, month after month</div>
          </div>
        </div>

        {/* SEM card */}
        <div className="svs-card svs-card--sem">
          <div className="svs-card__head">
            <span className="svs-card__icon">⚡</span>
            <div>
              <div className="svs-card__label">SEM · Google Ads</div>
              <div className="svs-card__title">Pay for the spot. Lose it when you stop.</div>
            </div>
          </div>
          <p className="svs-card__intro">SEM buys your spot at the top of Google, instantly. The moment your budget stops, so does your traffic.</p>
          <ul className="svs-card__list">
            <li>Live on page one from day one</li>
            <li>You pay for every single click, indefinitely</li>
            <li>Cancel your budget and traffic drops to zero — same day</li>
            <li>Best for fast wins, launches, and testing what converts</li>
          </ul>
          <div className="svs-chart">
            <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
              <rect x="42" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
              <rect x="74" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
              <rect x="106" y="30" width="24" height="50" fill="var(--accent)" opacity="0.85" />
              <line x1="132" y1="4" x2="132" y2="80" stroke="var(--muted)" strokeWidth="1" strokeDasharray="3,3" />
              <rect x="138" y="74" width="24" height="6" fill="var(--muted)" opacity="0.35" />
              <rect x="170" y="74" width="24" height="6" fill="var(--muted)" opacity="0.35" />
              <text x="132" y="10" fontSize="8" fill="var(--muted)" textAnchor="middle">Budget stops</text>
              <text x="22" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 1</text>
              <text x="182" y="94" fontSize="9" fill="var(--muted)" textAnchor="middle">Month 12</text>
            </svg>
            <div className="svs-chart__caption">Traffic stops the day you stop paying</div>
          </div>
        </div>
      </div>

      <div className="svs-cta">
        <PrefillQuoteButton message={ctaMessage} className="svs-cta__btn">
          Get SEO + SEM together →
        </PrefillQuoteButton>
      </div>
    </div>
  );
}
