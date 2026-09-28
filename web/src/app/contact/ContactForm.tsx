"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [preference, setPreference] = useState<"Email" | "Phone">("Email");

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
          company: fd.get("company"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          preference: fd.get("preference"),
          goal: fd.get("goal"),
          message: fd.get("message"),
        }),
      });
      setFormState(res.ok ? "done" : "error");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <style>{`
        .cf-card {
          background: #fff; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
          padding: clamp(1.75rem, 4vw, 2.75rem); max-width: 560px; width: 100%;
          text-align: left;
        }
        .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .cf-field { display: flex; flex-direction: column; gap: 0.375rem; margin-bottom: 1.125rem; }
        .cf-field label { font-size: 0.8125rem; font-weight: 600; color: var(--text); }
        .cf-field input, .cf-field textarea, .cf-field select {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm);
          padding: 0.75rem 1rem; color: var(--text); font-family: var(--font-body);
          font-size: 0.9375rem; width: 100%; outline: none; appearance: none;
          transition: border-color 160ms var(--ease-out), box-shadow 160ms var(--ease-out);
        }
        .cf-field input:focus, .cf-field textarea:focus, .cf-field select:focus {
          border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-light);
        }
        .cf-field textarea { resize: vertical; min-height: 100px; }

        .cf-pref { display: flex; gap: 0.75rem; }
        .cf-pref-opt {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 0.75rem 1rem; border: 1.5px solid var(--border); border-radius: var(--radius-sm);
          cursor: pointer; font-size: 0.9375rem; font-weight: 600; color: var(--muted);
          transition: border-color 160ms var(--ease-out), color 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        .cf-pref-opt input { position: absolute; opacity: 0; width: 0; height: 0; }
        .cf-pref-opt--active { border-color: var(--accent); color: var(--accent); background: var(--accent-light); }

        .cf-submit {
          width: 100%; padding: 0.9375rem; background: var(--accent); color: #fff;
          border: none; border-radius: var(--radius-sm); font-size: 0.9375rem; font-weight: 600;
          font-family: var(--font-body); cursor: pointer;
          transition: transform 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) {
          .cf-submit:hover:not(:disabled) { background: var(--accent-hover); }
        }
        .cf-submit:active:not(:disabled) { transform: scale(0.98); transition-duration: 100ms; }
        .cf-submit:disabled { opacity: 0.55; cursor: default; }
        .cf-note { font-size: 0.75rem; color: var(--muted); text-align: center; margin-top: 0.875rem; }
        .cf-err { font-size: 0.8125rem; color: var(--error); margin-bottom: 1rem; }

        .cf-success { text-align: center; padding: 1.5rem 0; }
        .cf-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.375rem; color: var(--accent); margin-bottom: 0.5rem; }
        .cf-success p { color: var(--muted); font-size: 0.9375rem; }

        @media (max-width: 480px) {
          .cf-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cf-card">
        {formState === "done" ? (
          <div className="cf-success">
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
            <h3>We&apos;ll be in touch!</h3>
            <p>We&apos;ll have your free analysis ready within 24h.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="c-name">Name</label>
                <input type="text" id="c-name" name="name" placeholder="Your name" required />
              </div>
              <div className="cf-field">
                <label htmlFor="c-company">Business</label>
                <input type="text" id="c-company" name="company" placeholder="Business name" />
              </div>
            </div>

            <div className="cf-row">
              <div className="cf-field">
                <label htmlFor="c-email">Email</label>
                <input type="email" id="c-email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="cf-field">
                <label htmlFor="c-phone">Phone</label>
                <input type="tel" id="c-phone" name="phone" placeholder="+61 400 000 000" />
              </div>
            </div>

            <div className="cf-field">
              <label id="c-pref-label">Where would you like us to contact you?</label>
              <div className="cf-pref" role="radiogroup" aria-labelledby="c-pref-label">
                {(["Email", "Phone"] as const).map((opt) => (
                  <label key={opt} className={`cf-pref-opt${preference === opt ? " cf-pref-opt--active" : ""}`}>
                    <input
                      type="radio"
                      name="preference"
                      value={opt}
                      checked={preference === opt}
                      onChange={() => setPreference(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="cf-field">
              <label htmlFor="c-goal">What do you need?</label>
              <select id="c-goal" name="goal" defaultValue="">
                <option value="">Select an option</option>
                <option>Rank higher on Google</option>
                <option>Get customers with Ads</option>
                <option>Improve my social media</option>
                <option>Build a new website</option>
                <option>Automate processes with AI</option>
                <option>Get more Google reviews (NFC cards)</option>
                <option>Not sure yet. Need guidance</option>
              </select>
            </div>

            <div className="cf-field">
              <label htmlFor="c-message">Tell us about your situation</label>
              <textarea id="c-message" name="message" placeholder="What's stopping you from getting more customers?" />
            </div>

            {formState === "error" && <p className="cf-err">Something went wrong. Please try again.</p>}

            <button type="submit" className="cf-submit" disabled={formState === "sending"}>
              {formState === "sending" ? "Sending…" : "Get my free analysis →"}
            </button>
            <p className="cf-note">We don&apos;t sell or share your details.</p>
          </form>
        )}
      </div>
    </>
  );
}
