"use client";
import { useState } from "react";

export default function EnContactSection() {
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");

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
      if (res.ok) {
        setFormState("done");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="ec">
      <style>{`
        .ec { padding: 6rem 2.5rem; max-width: 1200px; margin: 0 auto; }
        .ec-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .ec-tag { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #004aad; margin-bottom: 1rem; }
        .ec-title { font-family: var(--font-display); font-weight: 700; font-size: clamp(2rem, 3.5vw, 3rem); letter-spacing: -0.03em; line-height: 1.1; text-wrap: balance; margin-bottom: 1.25rem; }
        .ec-body { font-size: 1.0625rem; color: #5a6480; max-width: 480px; line-height: 1.7; font-weight: 300; margin-bottom: 2rem; }
        .ec-check-item { display: flex; gap: 0.875rem; align-items: center; font-size: 0.9375rem; color: #5a6480; margin-bottom: 0.875rem; }
        .ec-check-icon { color: #16a06a; font-size: 1rem; }
        .ec-form { display: flex; flex-direction: column; gap: 1rem; }
        .ec-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .ec-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .ec-field label { font-size: 0.8125rem; font-weight: 500; color: #5a6480; letter-spacing: 0.02em; }
        .ec-field input, .ec-field textarea, .ec-field select {
          background: #f5f8ff; border: 1px solid rgba(0,74,173,0.15); border-radius: 6px;
          padding: 0.75rem 1rem; color: #0a0f1e; font-family: var(--font-body); font-size: 0.9375rem;
          font-weight: 400; width: 100%; transition: border-color 0.2s; outline: none; appearance: none;
        }
        .ec-field input:focus, .ec-field textarea:focus, .ec-field select:focus { border-color: #004aad; box-shadow: 0 0 0 3px rgba(0,74,173,0.12); }
        .ec-pref-group { display: flex; gap: 0.625rem; }
        .ec-pref { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #f5f8ff; border: 1px solid rgba(0,74,173,0.15); border-radius: 6px; padding: 0.75rem 1rem; cursor: pointer; font-size: 0.9375rem; color: #0a0f1e; font-weight: 400; transition: border-color 0.2s, background 0.2s; }
        .ec-pref input { position: absolute; opacity: 0; width: 0; height: 0; }
        .ec-pref:hover { border-color: #004aad; }
        .ec-pref:has(input:checked) { border-color: #004aad; background: rgba(0,74,173,0.08); color: #004aad; font-weight: 500; }
        .ec-field textarea { resize: vertical; min-height: 120px; }
        .ec-note { font-size: 0.8125rem; color: #5a6480; line-height: 1.5; }
        .ec-err { font-size: 0.8125rem; color: #c0392b; }
        .ec-btn { width: 100%; justify-content: center; display: flex; padding: 0.875rem; font-size: 1rem; background: #004aad; color: #fff; font-family: var(--font-body); font-weight: 500; text-decoration: none; border-radius: 6px; border: none; cursor: pointer; transition: opacity 0.2s, transform 0.15s; letter-spacing: 0.01em; }
        .ec-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .ec-btn:disabled { opacity: 0.6; cursor: default; }
        .ec-success { padding: 2rem; border: 1px solid #16a06a; border-radius: 8px; background: rgba(22,160,106,0.08); text-align: center; }
        .ec-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; margin-bottom: 0.5rem; color: #004aad; }
        .ec-success p { color: #5a6480; font-size: 0.9375rem; }
        @media (max-width: 900px) {
          .ec-wrap { grid-template-columns: 1fr; gap: 3rem; }
          .ec-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .ec { padding: 4rem 1.25rem; }
        }
      `}</style>

      <div className="ec-wrap">
        <div>
          <div className="ec-tag">Contact</div>
          <h2 className="ec-title">Ready to get more customers?</h2>
          <p className="ec-body">Tell us your situation, where you are and what you want to achieve. We&apos;ll tell you what we see and where we&apos;d start.</p>
          <div>
            <div className="ec-check-item"><span className="ec-check-icon">✓</span> Response in less than 24h</div>
            <div className="ec-check-item"><span className="ec-check-icon">✓</span> Free first consultation</div>
            <div className="ec-check-item"><span className="ec-check-icon">✓</span> No long contracts</div>
          </div>
        </div>

        <div>
          {formState === "done" ? (
            <div className="ec-success">
              <h3>Message received!</h3>
              <p>We&apos;ll get back to you within 24h with an initial diagnosis of your situation.</p>
            </div>
          ) : (
            <form className="ec-form" onSubmit={handleSubmit}>
              <div className="ec-row">
                <div className="ec-field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="ec-field">
                  <label htmlFor="company">Business</label>
                  <input type="text" id="company" name="company" placeholder="Business name" />
                </div>
              </div>
              <div className="ec-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@email.com" required />
              </div>
              <div className="ec-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+61 400 000 000" />
              </div>
              <div className="ec-field">
                <label>How would you prefer we contact you?</label>
                <div className="ec-pref-group">
                  <label className="ec-pref">
                    <input type="radio" name="preference" value="Email" defaultChecked />
                    <span>By email</span>
                  </label>
                  <label className="ec-pref">
                    <input type="radio" name="preference" value="Phone" />
                    <span>By phone</span>
                  </label>
                </div>
              </div>
              <div className="ec-field">
                <label htmlFor="goal">What do you want to achieve?</label>
                <select id="goal" name="goal" defaultValue="">
                  <option value="">Select an option</option>
                  <option>Rank higher on Google</option>
                  <option>Get customers with Ads</option>
                  <option>Improve my social media</option>
                  <option>Build a new website</option>
                  <option>Automate processes with AI</option>
                  <option>Not sure yet. Need guidance</option>
                </select>
              </div>
              <div className="ec-field">
                <label htmlFor="message">Tell us a bit about your business</label>
                <textarea id="message" name="message" placeholder="What do you do? What's your biggest challenge? What would you like to achieve?" />
              </div>
              {formState === "error" && (
                <p className="ec-err">Something went wrong. Please try again or email us directly.</p>
              )}
              <p className="ec-note">Your details are yours. We don&apos;t sell them, we don&apos;t rent them, and we won&apos;t spam your inbox.</p>
              <button type="submit" className="ec-btn" disabled={formState === "sending"}>
                {formState === "sending" ? "Sending…" : "Talk to Lucaseo →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
