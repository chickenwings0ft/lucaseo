export default function FreeConsultationCta() {
  return (
    <section className="fcc">
      <style>{`
        .fcc { background: #0a0f1e; padding: 0 2.5rem 5.5rem; }
        .fcc-in { max-width: 1100px; margin: 0 auto; }
        .fcc-card { background: linear-gradient(135deg, #004aad 0%, #00337a 100%); border-radius: 16px; padding: 2.75rem; display: grid; grid-template-columns: 1.3fr 1fr; gap: 2.5rem; align-items: center; }
        .fcc-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #fff; background: rgba(255,255,255,0.15); padding: 0.375rem 0.875rem; border-radius: 999px; margin-bottom: 1.25rem; }
        .fcc-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 2.6vw, 2.125rem); color: #fff; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 1rem; text-wrap: balance; }
        .fcc-body { font-size: 1rem; color: rgba(255,255,255,0.8); line-height: 1.7; font-weight: 300; margin-bottom: 1.5rem; max-width: 480px; }
        .fcc-list { display: flex; flex-direction: column; gap: 0.625rem; }
        .fcc-item { display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.9375rem; color: rgba(255,255,255,0.9); }
        .fcc-item svg { flex-shrink: 0; margin-top: 0.15rem; }
        .fcc-right { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 2rem; text-align: center; }
        .fcc-price-was { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-decoration: line-through; }
        .fcc-price { font-family: var(--font-display); font-weight: 800; font-size: 2.5rem; color: #fff; letter-spacing: -0.03em; margin: 0.25rem 0 0.25rem; }
        .fcc-price span { font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.6); }
        .fcc-sub { font-size: 0.8125rem; color: rgba(255,255,255,0.6); margin-bottom: 1.5rem; }
        .fcc-btn { display: block; width: 100%; padding: 0.9rem; background: #fff; color: #004aad; font-weight: 700; font-size: 0.9375rem; text-decoration: none; border-radius: 8px; transition: opacity 0.2s, transform 0.15s; }
        .fcc-btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .fcc-note { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 0.875rem; }
        @media (max-width: 860px) {
          .fcc-card { grid-template-columns: 1fr; padding: 2rem; }
        }
        @media (max-width: 640px) {
          .fcc { padding: 0 1.25rem 4rem; }
        }
      `}</style>

      <div className="fcc-in">
        <div className="fcc-card">
          <div>
            <div className="fcc-eyebrow">🎯 Free for Gold Coast businesses</div>
            <h3 className="fcc-title">Get a free on-site visit from a specialist</h3>
            <p className="fcc-body">
              No generic advice over email. We come to your business in person, walk through your website, your current marketing and your goals — then tell you exactly where you&apos;re losing customers and what to fix first.
            </p>
            <div className="fcc-list">
              <div className="fcc-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A real, in-person audit of your website, SEO and ads — not a sales script
              </div>
              <div className="fcc-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A clear list of what&apos;s costing you customers right now
              </div>
              <div className="fcc-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6 12L2.5 8.5" stroke="#4dff9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                A straight answer on whether we can actually help — no pressure
              </div>
            </div>
          </div>
          <div className="fcc-right">
            <div className="fcc-price-was">Usually $150 AUD</div>
            <div className="fcc-price">$0<span>/visit</span></div>
            <div className="fcc-sub">Only a few free spots released each week</div>
            <a href="#contact" className="fcc-btn">Claim my free visit</a>
            <div className="fcc-note">No card required · No obligation · Gold Coast businesses only</div>
          </div>
        </div>
      </div>
    </section>
  );
}
