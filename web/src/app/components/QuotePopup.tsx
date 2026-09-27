"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const pathname = usePathname();

  // Fires on every client-side navigation (layout never remounts)
  useEffect(() => {
    if (pathname === "/en/contact") setOpen(true);
  }, [pathname]);

  // Hash trigger — only needs to register once
  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#contact-popup") setOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      window.history.replaceState(null, "", "#contact-popup");
    } else {
      document.body.style.overflow = "";
      if (window.location.hash === "#contact-popup") {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      preference: fd.get("preference"),
      goal: fd.get("goal"),
      message: fd.get("message"),
    };
    setFormState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) { setFormState("done"); form.reset(); }
      else setFormState("error");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <style>{`
        .qp-btn {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 900;
          background: #004aad; color: #fff; border: none; border-radius: 50px;
          padding: 0.875rem 1.5rem; font-size: 0.9375rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer; box-shadow: 0 4px 24px rgba(0,74,173,0.4);
          display: flex; align-items: center; gap: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
          text-decoration: none; white-space: nowrap;
        }
        .qp-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,74,173,0.5); }
        .qp-btn-pulse { width: 8px; height: 8px; background: #4dffb0; border-radius: 50%; animation: qp-pulse 2s ease-in-out infinite; flex-shrink: 0; }
        @keyframes qp-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:0.7} }

        .qp-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(4,9,26,0.75); backdrop-filter: blur(4px);
          display: flex; align-items: flex-end; justify-content: flex-end;
          padding: 0;
          animation: qp-fade-in 0.25s ease;
        }
        @keyframes qp-fade-in { from{opacity:0} to{opacity:1} }

        .qp-panel {
          background: #fff; width: min(560px, 100%); height: 100dvh;
          overflow-y: auto; padding: 0;
          display: flex; flex-direction: column;
          animation: qp-slide-in 0.35s cubic-bezier(0.32,0,0.08,1);
          position: relative;
        }
        @keyframes qp-slide-in { from{transform:translateX(100%)} to{transform:translateX(0)} }

        .qp-header {
          background: #004aad; padding: 2rem 2rem 1.5rem;
          position: sticky; top: 0; z-index: 10;
        }
        .qp-header-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .qp-offer-tag {
          font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #4dffb0; margin-bottom: 0.5rem;
          display: flex; align-items: center; gap: 0.375rem;
        }
        .qp-header h2 {
          font-family: var(--font-display), system-ui; font-weight: 800;
          font-size: clamp(1.375rem, 2.5vw, 1.75rem); letter-spacing: -0.03em;
          line-height: 1.1; color: #fff; margin: 0 0 0.5rem;
        }
        .qp-header p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin: 0; line-height: 1.5; }
        .qp-close {
          background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
          width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; flex-shrink: 0; transition: background 0.15s;
        }
        .qp-close:hover { background: rgba(255,255,255,0.25); }

        .qp-body { padding: 2rem; flex: 1; }
        .qp-form { display: flex; flex-direction: column; gap: 1rem; }
        .qp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .qp-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .qp-field label { font-size: 0.8125rem; font-weight: 500; color: #5a6480; letter-spacing: 0.02em; }
        .qp-field input, .qp-field textarea, .qp-field select {
          background: #f5f8ff; border: 1px solid rgba(0,74,173,0.15); border-radius: 6px;
          padding: 0.75rem 1rem; color: #0a0f1e; font-family: var(--font-body); font-size: 0.9375rem;
          font-weight: 400; width: 100%; transition: border-color 0.2s; outline: none; appearance: none;
        }
        .qp-field input:focus, .qp-field textarea:focus, .qp-field select:focus {
          border-color: #004aad; box-shadow: 0 0 0 3px rgba(0,74,173,0.12);
        }
        .qp-pref-group { display: flex; gap: 0.625rem; }
        .qp-pref {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          background: #f5f8ff; border: 1px solid rgba(0,74,173,0.15); border-radius: 6px;
          padding: 0.75rem 1rem; cursor: pointer; font-size: 0.9375rem; color: #0a0f1e;
          font-weight: 400; transition: border-color 0.2s, background 0.2s;
        }
        .qp-pref input { position: absolute; opacity: 0; width: 0; height: 0; }
        .qp-pref:hover { border-color: #004aad; }
        .qp-pref:has(input:checked) { border-color: #004aad; background: rgba(0,74,173,0.08); color: #004aad; font-weight: 500; }
        .qp-field textarea { resize: vertical; min-height: 100px; }
        .qp-note { font-size: 0.8125rem; color: #5a6480; line-height: 1.5; }
        .qp-err { font-size: 0.8125rem; color: #c0392b; }
        .qp-submit {
          width: 100%; justify-content: center; display: flex; padding: 1rem;
          font-size: 1rem; background: #004aad; color: #fff; font-family: var(--font-body);
          font-weight: 600; border-radius: 6px; border: none; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s; letter-spacing: 0.01em;
        }
        .qp-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .qp-submit:disabled { opacity: 0.6; cursor: default; transform: none; }
        .qp-success { padding: 2rem; border: 1px solid #16a06a; border-radius: 8px; background: rgba(22,160,106,0.08); text-align: center; }
        .qp-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; color: #004aad; }
        .qp-success p { color: #5a6480; font-size: 0.9375rem; }
        .qp-checks { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.875rem; }
        .qp-check { font-size: 0.8125rem; color: rgba(255,255,255,0.8); display: flex; align-items: center; gap: 0.375rem; }
        .qp-check-dot { color: #4dffb0; }
        @media (max-width: 480px) {
          .qp-btn { bottom: 1.25rem; right: 1.25rem; padding: 0.75rem 1.125rem; font-size: 0.875rem; }
          .qp-panel { width: 100%; }
          .qp-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Sticky floating button */}
      <button className="qp-btn" onClick={() => setOpen(true)} aria-label="Get a free quote">
        <span className="qp-btn-pulse" aria-hidden="true" />
        Claim your free quote
      </button>

      {/* Modal overlay */}
      {open && (
        <div className="qp-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }} role="dialog" aria-modal="true" aria-labelledby="qp-title">
          <div className="qp-panel">
            <div className="qp-header">
              <div className="qp-header-top">
                <div>
                  <div className="qp-offer-tag"><span className="qp-check-dot">★</span> Limited spots this month</div>
                  <h2 id="qp-title">Get your free marketing audit</h2>
                  <p>We&apos;ll analyse your business and tell you exactly where you&apos;re losing customers online.</p>
                  <div className="qp-checks">
                    <span className="qp-check"><span className="qp-check-dot">✓</span> 100% free, no strings</span>
                    <span className="qp-check"><span className="qp-check-dot">✓</span> Reply within 24h</span>
                    <span className="qp-check"><span className="qp-check-dot">✓</span> No long contracts</span>
                  </div>
                </div>
                <button className="qp-close" onClick={() => setOpen(false)} aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>

            <div className="qp-body">
              {formState === "done" ? (
                <div className="qp-success">
                  <h3>Message received!</h3>
                  <p>We&apos;ll get back to you within 24h with a diagnosis of your online presence.</p>
                </div>
              ) : (
                <form className="qp-form" onSubmit={handleSubmit}>
                  <div className="qp-row">
                    <div className="qp-field">
                      <label htmlFor="qp-name">Name</label>
                      <input type="text" id="qp-name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="qp-field">
                      <label htmlFor="qp-company">Business</label>
                      <input type="text" id="qp-company" name="company" placeholder="Business name" />
                    </div>
                  </div>
                  <div className="qp-field">
                    <label htmlFor="qp-email">Email</label>
                    <input type="email" id="qp-email" name="email" placeholder="you@email.com" required />
                  </div>
                  <div className="qp-field">
                    <label htmlFor="qp-phone">Phone</label>
                    <input type="tel" id="qp-phone" name="phone" placeholder="+61 400 000 000" />
                  </div>
                  <div className="qp-field">
                    <label>How would you prefer we contact you?</label>
                    <div className="qp-pref-group">
                      <label className="qp-pref">
                        <input type="radio" name="preference" value="Email" defaultChecked />
                        <span>By email</span>
                      </label>
                      <label className="qp-pref">
                        <input type="radio" name="preference" value="Phone" />
                        <span>By phone</span>
                      </label>
                    </div>
                  </div>
                  <div className="qp-field">
                    <label htmlFor="qp-goal">What do you want to achieve?</label>
                    <select id="qp-goal" name="goal" defaultValue="">
                      <option value="">Select an option</option>
                      <option>Rank higher on Google</option>
                      <option>Get customers with Ads</option>
                      <option>Improve my social media</option>
                      <option>Build a new website</option>
                      <option>Automate processes with AI</option>
                      <option>Not sure yet. Need guidance</option>
                    </select>
                  </div>
                  <div className="qp-field">
                    <label htmlFor="qp-message">Tell us about your business</label>
                    <textarea id="qp-message" name="message" placeholder="What do you do? What&apos;s your biggest challenge online?" />
                  </div>
                  {formState === "error" && (
                    <p className="qp-err">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <p className="qp-note">Your details are yours. We don&apos;t sell them, rent them, or spam you.</p>
                  <button type="submit" className="qp-submit" disabled={formState === "sending"}>
                    {formState === "sending" ? "Sending…" : "Claim your free audit →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
