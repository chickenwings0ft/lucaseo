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

function Ticker({ items, direction, speed }: { items: string[]; direction: "left" | "right"; speed: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="sam-track-wrap">
      <div
        className={`sam-track sam-track--${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((s, i) => (
          <span key={`${s}-${i}`} className="sam-chip">{s}</span>
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

        .sam-chip { display: inline-flex; align-items: center; padding: 0.4rem 0.85rem; border-radius: 999px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.65); white-space: nowrap; }

        @media (max-width: 640px) {
          .sam-head { padding: 0 1.25rem; }
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
    </section>
  );
}
