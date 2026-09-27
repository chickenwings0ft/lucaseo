"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "qp_dismissed";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [prefillMessage, setPrefillMessage] = useState("");
  const pathname = usePathname();

  // Open straight to the form, pre-filled — used by promo CTAs (e.g. "10% off" buttons)
  useEffect(() => {
    const onPrefillOpen = (e: Event) => {
      const detail = (e as CustomEvent<{ message?: string }>).detail;
      setPrefillMessage(detail?.message ?? "");
      setShowForm(true);
      setOpen(true);
    };
    window.addEventListener("open-quote-popup-prefill", onPrefillOpen as EventListener);
    return () => window.removeEventListener("open-quote-popup-prefill", onPrefillOpen as EventListener);
  }, []);

  // Auto-open after 6s — but only after cookie consent (so banner doesn't block popup)
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let timer: ReturnType<typeof setTimeout>;

    const startTimer = () => {
      timer = setTimeout(() => setOpen(true), 6000);
    };

    if (localStorage.getItem("lucaseo_cookie_consent")) {
      // Already consented — start timer straight away
      startTimer();
    } else {
      // Wait until the user interacts with the cookie banner
      window.addEventListener("cookie-consent-given", startTimer, { once: true });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("cookie-consent-given", startTimer);
    };
  }, []);

  // Also open on /en/contact or hash
  useEffect(() => {
    if (pathname === "/en/contact") setOpen(true);
  }, [pathname]);

  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#contact-popup") setOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function close() {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setFormState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          goal: fd.get("goal"),
          message: fd.get("message"),
        }),
      });
      if (res.ok) { setFormState("done"); }
      else setFormState("error");
    } catch { setFormState("error"); }
  }

  return (
    <>
      <style>{`
        .qp-btn {
          position: fixed; bottom: 2rem; right: 2rem; z-index: 900;
          background: #004aad; color: #fff; border: none; border-radius: 50px;
          padding: 0.8rem 1.375rem; font-size: 0.9rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,74,173,0.4);
          display: flex; align-items: center; gap: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .qp-btn:hover { transform: translateY(-2px); }
        .qp-dot { width: 7px; height: 7px; background: #4dffb0; border-radius: 50%; animation: qp-pulse 2s ease-in-out infinite; }
        @keyframes qp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }

        .qp-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(4,9,26,0.65); backdrop-filter: blur(3px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem; animation: qp-fade 0.25s ease;
        }
        @keyframes qp-fade { from{opacity:0} to{opacity:1} }

        .qp-modal {
          background: #fff; border-radius: 14px; width: 100%; max-width: 480px;
          overflow: hidden; animation: qp-rise 0.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 24px 80px rgba(0,0,0,0.25);
        }
        @keyframes qp-rise { from{transform:translateY(24px);opacity:0} to{transform:translateY(0);opacity:1} }

        /* — Hook screen — */
        .qp-hook {
          background: linear-gradient(135deg, #002e6d 0%, #004aad 100%);
          padding: 2.5rem 2rem 2rem; position: relative; text-align: center;
        }
        .qp-hook-close {
          position: absolute; top: 1rem; right: 1rem;
          background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
          width: 30px; height: 30px; cursor: pointer; color: #fff;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .qp-hook-close:hover { background: rgba(255,255,255,0.25); }
        .qp-hook-badge {
          display: inline-flex; align-items: center; gap: 0.375rem;
          background: rgba(77,255,176,0.15); border: 1px solid rgba(77,255,176,0.3);
          border-radius: 50px; padding: 0.3rem 0.75rem;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #4dffb0; margin-bottom: 1.25rem;
        }
        .qp-hook h2 {
          font-family: var(--font-display), system-ui; font-weight: 800;
          font-size: clamp(1.375rem, 3vw, 1.75rem); letter-spacing: -0.03em;
          line-height: 1.15; color: #fff; margin: 0 0 0.875rem;
        }
        .qp-hook p {
          font-size: 0.9375rem; color: rgba(255,255,255,0.72);
          line-height: 1.6; margin: 0 0 1.5rem;
        }
        .qp-hook-cta {
          background: #fff; color: #004aad; border: none; border-radius: 8px;
          padding: 0.875rem 2rem; font-size: 1rem; font-weight: 700;
          font-family: var(--font-body); cursor: pointer; width: 100%;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .qp-hook-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }
        .qp-hook-skip {
          margin-top: 0.875rem; font-size: 0.8rem; color: rgba(255,255,255,0.45);
          background: none; border: none; cursor: pointer; font-family: var(--font-body);
          text-decoration: underline;
        }
        .qp-hook-skip:hover { color: rgba(255,255,255,0.7); }

        /* — Form screen — */
        .qp-form-head {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: 1.5rem 1.5rem 0;
        }
        .qp-form-head h3 {
          font-family: var(--font-display), system-ui; font-weight: 700;
          font-size: 1.125rem; letter-spacing: -0.02em; margin: 0; color: #0a0f1e;
        }
        .qp-form-head p { font-size: 0.8375rem; color: #5a6480; margin: 0.2rem 0 0; }
        .qp-fclose {
          background: #f5f8ff; border: none; border-radius: 50%;
          width: 30px; height: 30px; cursor: pointer; flex-shrink: 0; margin-left: 1rem;
          display: flex; align-items: center; justify-content: center; color: #5a6480;
          transition: background 0.15s;
        }
        .qp-fclose:hover { background: #e8eef8; }
        .qp-form-body { padding: 1.125rem 1.5rem 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .qp-field { display: flex; flex-direction: column; gap: 0.25rem; }
        .qp-field label { font-size: 0.78rem; font-weight: 500; color: #5a6480; }
        .qp-field input, .qp-field textarea, .qp-field select {
          background: #f5f8ff; border: 1px solid rgba(0,74,173,0.15); border-radius: 6px;
          padding: 0.65rem 0.875rem; color: #0a0f1e; font-family: var(--font-body);
          font-size: 0.9375rem; width: 100%; outline: none; appearance: none;
          transition: border-color 0.15s;
        }
        .qp-field input:focus, .qp-field textarea:focus, .qp-field select:focus {
          border-color: #004aad; box-shadow: 0 0 0 3px rgba(0,74,173,0.1);
        }
        .qp-field textarea { resize: vertical; min-height: 80px; }
        .qp-submit {
          width: 100%; padding: 0.875rem; background: #004aad; color: #fff;
          border: none; border-radius: 8px; font-size: 0.9375rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer; transition: opacity 0.2s;
        }
        .qp-submit:hover { opacity: 0.88; }
        .qp-submit:disabled { opacity: 0.55; cursor: default; }
        .qp-note { font-size: 0.75rem; color: #9aa5b4; text-align: center; }
        .qp-err { font-size: 0.8rem; color: #c0392b; }
        .qp-success { padding: 2.5rem 2rem; text-align: center; }
        .qp-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; color: #004aad; margin-bottom: 0.5rem; }
        .qp-success p { color: #5a6480; font-size: 0.9375rem; }
        @media (max-width: 480px) { .qp-btn { bottom: 1rem; right: 1rem; } }
      `}</style>

      {/* Sticky manual trigger */}
      <button className="qp-btn" onClick={() => { setShowForm(true); setOpen(true); }}>
        <span className="qp-dot" aria-hidden="true" />
        Free quote
      </button>

      {open && (
        <div className="qp-overlay" onClick={(e) => { if (e.target === e.currentTarget) close(); }} role="dialog" aria-modal="true">
          <div className="qp-modal">

            {/* Screen 1 — hook */}
            {!showForm && formState !== "done" && (
              <div className="qp-hook">
                <button className="qp-hook-close" onClick={close} aria-label="Close">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
                <div className="qp-hook-badge">⚡ Free analysis</div>
                <h2>Find out how many customers you&apos;re losing online — right now.</h2>
                <p>
                  Most businesses don&apos;t know where they&apos;re leaking customers. We&apos;ll show you exactly where — and what to do about it.
                </p>
                <button className="qp-hook-cta" onClick={() => setShowForm(true)}>
                  Yes, I want my free analysis →
                </button>
                <br />
                <button className="qp-hook-skip" onClick={close}>No thanks, I don&apos;t want more customers</button>
              </div>
            )}

            {/* Screen 2 — form */}
            {showForm && formState !== "done" && (
              <>
                <div className="qp-form-head">
                  <div>
                    <h3>Tell us about your business</h3>
                    <p>We&apos;ll get back to you within 24h.</p>
                  </div>
                  <button className="qp-fclose" onClick={close} aria-label="Close">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div className="qp-form-body">
                  <form onSubmit={handleSubmit} style={{ display: "contents" }}>
                    <div className="qp-field">
                      <label htmlFor="qp-name">Name</label>
                      <input type="text" id="qp-name" name="name" placeholder="Your name" required />
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
                      <label htmlFor="qp-goal">What do you need?</label>
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
                      <label htmlFor="qp-message">Biggest challenge?</label>
                      <textarea id="qp-message" name="message" placeholder="What's stopping you from getting more customers?" defaultValue={prefillMessage} />
                    </div>
                    {formState === "error" && <p className="qp-err">Something went wrong. Please try again.</p>}
                    <button type="submit" className="qp-submit" disabled={formState === "sending"}>
                      {formState === "sending" ? "Sending…" : "Get my free analysis →"}
                    </button>
                    <p className="qp-note">We don&apos;t sell or share your details.</p>
                  </form>
                </div>
              </>
            )}

            {/* Screen 3 — success */}
            {formState === "done" && (
              <div className="qp-success">
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
                <h3>We&apos;ll be in touch!</h3>
                <p>We&apos;ll have your free analysis ready within 24h.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
