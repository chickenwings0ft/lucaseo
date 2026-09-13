"use client";
import { useMemo, useState } from "react";

const suburbs = [
  "Advancetown", "Alberton", "Arundel", "Ashmore", "Austinville", "Benowa",
  "Biggera Waters", "Bilinga", "Bonogin", "Broadbeach", "Broadbeach Waters",
  "Bundall", "Burleigh Heads", "Burleigh Waters", "Carrara", "Cedar Creek",
  "Clagiraba", "Clear Island Waters", "Coolangatta", "Coombabah", "Coomera",
  "Currumbin", "Currumbin Waters", "Currumbin Valley", "Eagle Heights",
  "Elanora", "Gaven", "Gilberton", "Gilston", "Guanaba", "Helensvale",
  "Highland Park", "Hollywell", "Hope Island", "Illanbah", "Isle of Capri",
  "Jacobs Well", "Kingsholme", "Kirra", "Labrador", "Lamington",
  "Lower Beechmont", "Luscombe", "Main Beach", "Maudsland", "Mermaid Beach",
  "Mermaid Waters", "Merrimac", "Miami", "Molendinar", "Mount Nathan",
  "Mount Tamborine", "Mudgeeraba", "Natural Bridge", "Nerang", "Neranwood",
  "Nobbys Beach", "Norwell", "Numinbah Valley", "Ormeau", "Ormeau Hills",
  "Oxenford", "Pacific Pines", "Palm Beach", "Paradise Point", "Parkwood",
  "Pimpama", "Reedy Creek", "Robina", "Runaway Bay", "Sanctuary Cove",
  "Southport", "South Stradbroke", "Springbrook", "Stapylton", "Steiglitz",
  "Surfers Paradise", "Tabragalba", "Tallai", "Tallebudgera",
  "Tallebudgera Valley", "Tugun", "Upper Coomera", "Varsity Lakes",
  "Willowvale", "Wongawallan", "Woongoolba", "Worongary", "Yatala",
];

const featured = new Set([
  "Surfers Paradise", "Broadbeach", "Southport", "Robina", "Burleigh Heads",
  "Coolangatta", "Palm Beach", "Nerang", "Coomera", "Helensvale",
]);

export default function ServiceAreaMap() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return suburbs;
    return suburbs.filter((s) => s.toLowerCase().includes(q));
  }, [query]);

  return (
    <section className="sam" id="service-area">
      <style>{`
        .sam { position: relative; padding: 6rem 2.5rem; background: #0a0f1e; overflow: hidden; }
        .sam-glow { position: absolute; top: -20%; right: -10%; width: 60%; height: 140%; background: radial-gradient(circle, rgba(0,74,173,0.25) 0%, transparent 70%); pointer-events: none; }
        .sam-in { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }
        .sam-head { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: end; margin-bottom: 3rem; }
        .sam-tag { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #4d9aff; margin-bottom: 1.25rem; }
        .sam-tag::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #4d9aff; box-shadow: 0 0 0 0 rgba(77,154,255,0.6); animation: sam-pulse 2s infinite; }
        @keyframes sam-pulse { 0% { box-shadow: 0 0 0 0 rgba(77,154,255,0.5); } 70% { box-shadow: 0 0 0 10px rgba(77,154,255,0); } 100% { box-shadow: 0 0 0 0 rgba(77,154,255,0); } }
        .sam-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.875rem, 3.5vw, 2.75rem); letter-spacing: -0.03em; line-height: 1.1; color: #fff; text-wrap: balance; }
        .sam-title em { font-style: normal; color: #4d9aff; }
        .sam-stats { display: flex; gap: 2rem; justify-content: flex-end; }
        .sam-stat { text-align: right; }
        .sam-stat-n { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3vw, 2.5rem); color: #4d9aff; letter-spacing: -0.03em; line-height: 1; }
        .sam-stat-l { font-size: 0.8125rem; color: rgba(255,255,255,0.5); margin-top: 0.25rem; }
        .sam-lead { font-size: 1.0625rem; color: rgba(255,255,255,0.6); max-width: 600px; line-height: 1.75; font-weight: 300; margin-bottom: 2.5rem; }
        .sam-search { position: relative; margin-bottom: 2rem; max-width: 420px; }
        .sam-search input { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 8px; padding: 0.875rem 1.125rem 0.875rem 2.75rem; color: #fff; font-size: 0.9375rem; font-family: var(--font-body); outline: none; transition: border-color 0.2s, background 0.2s; }
        .sam-search input::placeholder { color: rgba(255,255,255,0.35); }
        .sam-search input:focus { border-color: #4d9aff; background: rgba(255,255,255,0.09); }
        .sam-search-icon { position: absolute; left: 0.9rem; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: rgba(255,255,255,0.4); pointer-events: none; }
        .sam-count { font-size: 0.8125rem; color: rgba(255,255,255,0.4); margin-bottom: 1.5rem; }
        .sam-count strong { color: #4d9aff; font-weight: 600; }
        .sam-grid { display: flex; flex-wrap: wrap; gap: 0.625rem; }
        .sam-chip { display: inline-flex; align-items: center; gap: 0.375rem; padding: 0.5rem 1rem; border-radius: 999px; font-size: 0.8125rem; font-weight: 500; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.7); transition: border-color 0.18s, background 0.18s, color 0.18s, transform 0.18s; }
        .sam-chip:hover { border-color: #4d9aff; background: rgba(77,154,255,0.1); color: #fff; transform: translateY(-1px); }
        .sam-chip--featured { border-color: rgba(77,154,255,0.4); background: rgba(77,154,255,0.08); color: #fff; font-weight: 600; }
        .sam-chip--featured::before { content: '📍'; font-size: 0.75rem; }
        .sam-empty { padding: 2.5rem; text-align: center; border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px; color: rgba(255,255,255,0.5); font-size: 0.9375rem; }
        .sam-empty strong { color: #fff; }
        .sam-footer { margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .sam-footer-text { font-size: 0.875rem; color: rgba(255,255,255,0.5); }
        .sam-footer-cta { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: #fff; color: #0a0f1e; font-weight: 600; font-size: 0.875rem; text-decoration: none; border-radius: 6px; transition: opacity 0.2s; }
        .sam-footer-cta:hover { opacity: 0.88; }
        @media (max-width: 768px) {
          .sam-head { grid-template-columns: 1fr; gap: 1.5rem; }
          .sam-stats { justify-content: flex-start; }
          .sam-stat { text-align: left; }
          .sam-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="sam-glow" />
      <div className="sam-in">
        <div className="sam-head">
          <div>
            <div className="sam-tag">Service Area</div>
            <h2 className="sam-title">Wherever you are on the <em>Gold Coast</em>, we&apos;ve got you covered.</h2>
          </div>
          <div className="sam-stats">
            <div className="sam-stat">
              <div className="sam-stat-n">{suburbs.length}+</div>
              <div className="sam-stat-l">suburbs served</div>
            </div>
            <div className="sam-stat">
              <div className="sam-stat-n">100%</div>
              <div className="sam-stat-l">remote-friendly</div>
            </div>
          </div>
        </div>

        <p className="sam-lead">
          From Coolangatta to Ormeau, we work with local businesses across the entire Gold Coast region — plus clients further afield who we serve remotely. Search your suburb below.
        </p>

        <div className="sam-search">
          <svg className="sam-search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search your suburb…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search suburbs we service"
          />
        </div>

        <div className="sam-count">
          {query ? (
            <>Showing <strong>{filtered.length}</strong> of {suburbs.length} suburbs</>
          ) : (
            <>All <strong>{suburbs.length}</strong> suburbs — 📍 marks the ones we work in most</>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="sam-grid">
            {filtered.map((s) => (
              <span key={s} className={`sam-chip${featured.has(s) ? " sam-chip--featured" : ""}`}>
                {s}
              </span>
            ))}
          </div>
        ) : (
          <div className="sam-empty">
            Can&apos;t find <strong>&ldquo;{query}&rdquo;</strong> on the list? We probably still cover it —{" "}
            <a href="#contact" style={{ color: "#4d9aff" }}>get in touch</a> and let&apos;s check.
          </div>
        )}

        <div className="sam-footer">
          <div className="sam-footer-text">Not on the Gold Coast? We work with remote clients across Australia too.</div>
          <a href="#contact" className="sam-footer-cta">Get a free diagnosis →</a>
        </div>
      </div>
    </section>
  );
}
