"use client";

const row1 = [
  "Surfers Paradise", "Broadbeach", "Southport", "Robina", "Burleigh Heads",
  "Coolangatta", "Palm Beach", "Nerang", "Coomera", "Helensvale",
  "Mermaid Beach", "Miami", "Currumbin", "Varsity Lakes", "Labrador",
  "Main Beach", "Ashmore", "Carrara", "Runaway Bay", "Pacific Pines",
  "Hope Island", "Oxenford", "Upper Coomera", "Pimpama", "Ormeau",
];

const row2 = [
  "Advancetown", "Alberton", "Arundel", "Austinville", "Benowa",
  "Biggera Waters", "Bilinga", "Bonogin", "Broadbeach Waters", "Bundall",
  "Burleigh Waters", "Cedar Creek", "Clagiraba", "Clear Island Waters",
  "Coombabah", "Currumbin Waters", "Currumbin Valley", "Eagle Heights",
  "Elanora", "Gaven", "Gilberton", "Gilston", "Guanaba", "Highland Park",
  "Hollywell", "Illanbah", "Isle of Capri", "Jacobs Well", "Kingsholme",
  "Kirra", "Lamington", "Lower Beechmont", "Luscombe", "Maudsland",
];

const row3 = [
  "Mermaid Waters", "Merrimac", "Molendinar", "Mount Nathan",
  "Mount Tamborine", "Mudgeeraba", "Natural Bridge", "Neranwood",
  "Nobbys Beach", "Norwell", "Numinbah Valley", "Ormeau Hills",
  "Paradise Point", "Parkwood", "Reedy Creek", "Sanctuary Cove",
  "South Stradbroke", "Springbrook", "Stapylton", "Steiglitz",
  "Tabragalba", "Tallai", "Tallebudgera", "Tallebudgera Valley", "Tugun",
  "Willowvale", "Wongawallan", "Woongoolba", "Worongary", "Yatala",
];

const featured = new Set([
  "Surfers Paradise", "Broadbeach", "Southport", "Robina", "Burleigh Heads",
  "Coolangatta", "Palm Beach", "Nerang", "Coomera", "Helensvale",
]);

function Ticker({ items, direction, speed }: { items: string[]; direction: "left" | "right"; speed: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="sam-track-wrap">
      <div
        className={`sam-track sam-track--${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className={`sam-chip${featured.has(s) ? " sam-chip--featured" : ""}`}>
            {featured.has(s) && <span className="sam-pin">📍</span>}
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ServiceAreaMap() {
  const total = row1.length + row2.length + row3.length;

  return (
    <section className="sam" id="service-area">
      <style>{`
        .sam { position: relative; padding: 5.5rem 0; background: #0a0f1e; overflow: hidden; }
        .sam-glow { position: absolute; top: -20%; right: -10%; width: 60%; height: 140%; background: radial-gradient(circle, rgba(0,74,173,0.25) 0%, transparent 70%); pointer-events: none; }
        .sam-head { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto 3rem; padding: 0 2.5rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .sam-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #4d9aff; margin-bottom: 1.25rem; }
        .sam-tag::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #4d9aff; box-shadow: 0 0 0 0 rgba(77,154,255,0.6); animation: sam-pulse 2s infinite; }
        @keyframes sam-pulse { 0% { box-shadow: 0 0 0 0 rgba(77,154,255,0.5); } 70% { box-shadow: 0 0 0 10px rgba(77,154,255,0); } 100% { box-shadow: 0 0 0 0 rgba(77,154,255,0); } }
        .sam-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3.2vw, 2.5rem); letter-spacing: -0.03em; line-height: 1.1; color: #fff; text-wrap: balance; max-width: 560px; }
        .sam-title em { font-style: normal; color: #4d9aff; }
        .sam-stat { text-align: right; flex-shrink: 0; }
        .sam-stat-n { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3vw, 2.5rem); color: #4d9aff; letter-spacing: -0.03em; line-height: 1; }
        .sam-stat-l { font-size: 0.8125rem; color: rgba(255,255,255,0.5); margin-top: 0.25rem; }

        .sam-tracks { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 0.75rem; mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
        .sam-track-wrap { overflow: hidden; width: 100%; }
        .sam-track { display: flex; gap: 0.625rem; width: max-content; }
        .sam-track--left { animation: sam-scroll-left linear infinite; }
        .sam-track--right { animation: sam-scroll-right linear infinite; }
        .sam-tracks:hover .sam-track { animation-play-state: paused; }
        @keyframes sam-scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sam-scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }

        .sam-chip { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.4rem 0.85rem; border-radius: 999px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); white-space: nowrap; transition: border-color 0.18s, color 0.18s; }
        .sam-chip--featured { border-color: rgba(77,154,255,0.4); background: rgba(77,154,255,0.1); color: #fff; font-weight: 600; }
        .sam-pin { font-size: 0.6875rem; }

        .sam-cta { position: relative; z-index: 1; max-width: 1100px; margin: 3.5rem auto 0; padding: 0 2.5rem; }
        .sam-cta-card { background: linear-gradient(135deg, #004aad 0%, #00337a 100%); border-radius: 16px; padding: 2.75rem; display: grid; grid-template-columns: 1.3fr 1fr; gap: 2.5rem; align-items: center; }
        .sam-cta-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: rgba(255,255,255,0.15); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.25rem; }
        .sam-cta-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 2.6vw, 2.125rem); color: #fff; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1rem; text-wrap: balance; }
        .sam-cta-body { font-size: 1rem; color: rgba(255,255,255,0.8); line-height: 1.7; font-weight: 300; margin-bottom: 1.5rem; max-width: 480px; }
        .sam-cta-list { display: flex; flex-direction: column; gap: 0.625rem; }
        .sam-cta-item { display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.9375rem; color: rgba(255,255,255,0.9); }
        .sam-cta-item svg { flex-shrink: 0; margin-top: 0.15rem; }
        .sam-cta-right { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 2rem; text-align: center; }
        .sam-cta-price-was { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-decoration: line-through; }
        .sam-cta-price { font-family: var(--font-display); font-weight: 800; font-size: 2.5rem; color: #fff; letter-spacing: -0.03em; margin: 0.25rem 0 0.25rem; }
        .sam-cta-price span { font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.6); }
        .sam-cta-sub { font-size: 0.8125rem; color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; }
        .sam-cta-btn { display: block; width: 100%; padding: 0.9rem; background: #fff; color: #004aad; font-weight: 700; font-size: 0.9375rem; text-decoration: none; border-radius: 8px; transition: opacity 0.2s, transform 0.15s; }
        .sam-cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .sam-cta-note { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 0.875rem; }

        @media (max-width: 860px) {
          .sam-cta-card { grid-template-columns: 1fr; padding: 2rem; }
        }
        @media (max-width: 640px) {
          .sam-head { padding: 0 1.25rem; }
          .sam-cta { padding: 0 1.25rem; }
        }
      `}</style>

      <div className="sam-glow" />

      <div className="sam-head">
        <div>
          <div className="sam-tag">Service Area</div>
          <h2 className="sam-title">Wherever you are on the <em>Gold Coast</em>, we&apos;ve got you covered.</h2>
        </div>
        <div className="sam-stat">
          <div className="sam-stat-n">{total}+</div>
          <div className="sam-stat-l">Gold Coast suburbs served</div>
        </div>
      </div>

      <div className="sam-tracks">
        <Ticker items={row1} direction="left" speed={38} />
        <Ticker items={row2} direction="right" speed={46} />
        <Ticker items={row3} direction="left" speed={42} />
      </div>

      <div className="sam-cta">
        <div className="sam-cta-card">
          <div>
            <div className="sam-cta-eyebrow">🎯 Free for a limited time</div>
            <h3 className="sam-cta-title">Get a free 30-minute strategy call with a specialist</h3>
            <p className="sam-cta-body">
              No generic advice. We look at your business, your website, your current marketing and your goals — then tell you exactly where you&apos;re losing customers and what to fix first.
            </p>
            <div className="sam-cta-list">
              <div className="sam-cta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A real audit of your website, SEO and ads — not a sales script
              </div>
              <div className="sam-cta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A clear list of what&apos;s costing you customers right now
              </div>
              <div className="sam-cta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A straight answer on whether we can actually help — no pressure
              </div>
            </div>
          </div>
          <div className="sam-cta-right">
            <div className="sam-cta-price-was">Usually $150 AUD</div>
            <div className="sam-cta-price">$0<span>/consultation</span></div>
            <div className="sam-cta-sub">Only a few free spots released each week</div>
            <a href="#contact" className="sam-cta-btn">Claim my free consultation</a>
            <div className="sam-cta-note">No card required · No obligation · 24h response</div>
          </div>
        </div>
      </div>
    </section>
  );
}
