"use client";
import { useState } from "react";

function priceFor(qty: number): number {
  if (qty <= 0) return 0;
  if (qty === 1) return 39;
  if (qty === 2) return 69;
  if (qty <= 9) return qty * 30;
  return qty * 25;
}

export default function OrderForm() {
  const [white, setWhite] = useState(1);
  const [black, setBlack] = useState(0);
  const [sticker, setSticker] = useState(true);
  const [formState, setFormState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const totalQty = white + black;
  const total = priceFor(totalQty);
  const perUnit = totalQty > 0 ? total / totalQty : 0;

  function clamp(n: number) {
    return Math.max(0, Math.min(200, n));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (totalQty < 1) return;
    const fd = new FormData(e.currentTarget);
    setFormState("sending");

    const message = [
      `NFC Google Review Card order`,
      `White cards: ${white}`,
      `Black cards: ${black}`,
      `Countertop stickers: ${sticker ? "Yes, include one per card" : "No"}`,
      `Total: ${totalQty} card${totalQty === 1 ? "" : "s"} — $${total} AUD`,
      `Delivery address: ${fd.get("address")}`,
    ].join("\n");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          goal: "NFC Google Review Cards order",
          message,
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
        .of-card {
          background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md); max-width: 640px; margin: 0 auto; overflow: hidden;
        }
        .of-qty-section { padding: 2rem 2rem 1.5rem; border-bottom: 1px solid var(--border); }
        .of-qty-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }
        .of-qty {
          border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1.125rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
        }
        .of-qty__swatch { width: 44px; height: 60px; border-radius: 6px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 14px rgba(0,0,0,0.12); }
        .of-qty__swatch--white { background: #fff; border: 1px solid var(--border); }
        .of-qty__swatch--black { background: #111319; }
        .of-qty__swatch span { font-family: var(--font-display); font-weight: 800; font-size: 1rem; color: var(--accent); }
        .of-qty__label { font-size: 0.875rem; font-weight: 600; color: var(--text); }
        .of-qty__stepper { display: flex; align-items: center; gap: 0.75rem; }
        .of-qty__btn {
          width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--border); background: var(--surface);
          color: var(--accent); font-size: 1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 140ms var(--ease-out), transform 140ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) { .of-qty__btn:hover { background: var(--accent-light); } }
        .of-qty__btn:active { transform: scale(0.92); }
        .of-qty__count { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; min-width: 1.5rem; text-align: center; }

        .of-sticker {
          display: flex; align-items: center; gap: 0.625rem; font-size: 0.875rem; color: var(--text);
          cursor: pointer; user-select: none;
        }
        .of-sticker input { width: 17px; height: 17px; accent-color: var(--accent); cursor: pointer; }

        .of-summary {
          display: flex; align-items: center; justify-content: space-between; padding: 1.125rem 2rem;
          background: var(--accent-light); border-bottom: 1px solid var(--border);
        }
        .of-summary__label { font-size: 0.8125rem; color: var(--muted); }
        .of-summary__perunit { color: var(--accent); font-weight: 600; }
        .of-summary__amount { font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: var(--accent); }

        .of-fields { padding: 1.75rem 2rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
        .of-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .of-field { display: flex; flex-direction: column; gap: 0.375rem; }
        .of-field label { font-size: 0.8125rem; font-weight: 600; color: var(--text); }
        .of-field input, .of-field textarea {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm);
          padding: 0.75rem 1rem; color: var(--text); font-family: var(--font-body);
          font-size: 0.9375rem; width: 100%; outline: none;
          transition: border-color 160ms var(--ease-out), box-shadow 160ms var(--ease-out);
        }
        .of-field input:focus, .of-field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-light); }
        .of-field textarea { resize: vertical; min-height: 70px; }

        .of-submit {
          width: 100%; padding: 1rem; background: var(--accent); color: #fff; border: none;
          border-radius: var(--radius-sm); font-size: 0.9375rem; font-weight: 700; font-family: var(--font-body);
          cursor: pointer; transition: transform 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) { .of-submit:hover:not(:disabled) { background: var(--accent-hover); } }
        .of-submit:active:not(:disabled) { transform: scale(0.98); transition-duration: 100ms; }
        .of-submit:disabled { opacity: 0.55; cursor: default; }
        .of-note { font-size: 0.75rem; color: var(--muted); text-align: center; }
        .of-err { font-size: 0.8125rem; color: var(--error); text-align: center; }

        .of-success { text-align: center; padding: 3rem 2rem; }
        .of-success h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.375rem; color: var(--accent); margin-bottom: 0.5rem; }
        .of-success p { color: var(--muted); font-size: 0.9375rem; }

        @media (max-width: 560px) {
          .of-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="of-card">
        {formState === "done" ? (
          <div className="of-success">
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✓</div>
            <h3>Order received!</h3>
            <p>We&apos;ll confirm your delivery within 2 business days across the Gold Coast.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="of-qty-section">
              <div className="of-qty-row">
                <div className="of-qty">
                  <div className="of-qty__swatch of-qty__swatch--white"><span>G</span></div>
                  <span className="of-qty__label">White</span>
                  <div className="of-qty__stepper">
                    <button type="button" className="of-qty__btn" onClick={() => setWhite((n) => clamp(n - 1))} aria-label="Decrease white quantity">−</button>
                    <span className="of-qty__count">{white}</span>
                    <button type="button" className="of-qty__btn" onClick={() => setWhite((n) => clamp(n + 1))} aria-label="Increase white quantity">+</button>
                  </div>
                </div>
                <div className="of-qty">
                  <div className="of-qty__swatch of-qty__swatch--black"><span>G</span></div>
                  <span className="of-qty__label">Black</span>
                  <div className="of-qty__stepper">
                    <button type="button" className="of-qty__btn" onClick={() => setBlack((n) => clamp(n - 1))} aria-label="Decrease black quantity">−</button>
                    <span className="of-qty__count">{black}</span>
                    <button type="button" className="of-qty__btn" onClick={() => setBlack((n) => clamp(n + 1))} aria-label="Increase black quantity">+</button>
                  </div>
                </div>
              </div>
              <label className="of-sticker">
                <input type="checkbox" checked={sticker} onChange={(e) => setSticker(e.target.checked)} />
                Include a matching &quot;Tap to review us&quot; countertop sticker for each card (free)
              </label>
            </div>

            <div className="of-summary">
              <span className="of-summary__label">
                {totalQty} card{totalQty === 1 ? "" : "s"} {sticker && totalQty > 0 ? "+ stickers" : ""}
                {totalQty > 1 && <span className="of-summary__perunit"> · ${perUnit % 1 === 0 ? perUnit : perUnit.toFixed(2)}/card</span>}
              </span>
              <span className="of-summary__amount">${total} AUD</span>
            </div>

            <div className="of-fields">
              <div className="of-row">
                <div className="of-field">
                  <label htmlFor="of-name">Name</label>
                  <input type="text" id="of-name" name="name" placeholder="Your name" required />
                </div>
                <div className="of-field">
                  <label htmlFor="of-company">Business</label>
                  <input type="text" id="of-company" name="company" placeholder="Business name" required />
                </div>
              </div>
              <div className="of-row">
                <div className="of-field">
                  <label htmlFor="of-email">Email</label>
                  <input type="email" id="of-email" name="email" placeholder="you@email.com" required />
                </div>
                <div className="of-field">
                  <label htmlFor="of-phone">Phone</label>
                  <input type="tel" id="of-phone" name="phone" placeholder="+61 400 000 000" required />
                </div>
              </div>
              <div className="of-field">
                <label htmlFor="of-address">Delivery address (Gold Coast)</label>
                <textarea id="of-address" name="address" placeholder="Business address for hand delivery" required />
              </div>

              {formState === "error" && <p className="of-err">Something went wrong. Please try again.</p>}

              <button type="submit" className="of-submit" disabled={formState === "sending" || totalQty < 1}>
                {formState === "sending" ? "Sending…" : `Request delivery — $${total} AUD →`}
              </button>
              <p className="of-note">We&apos;ll confirm and deliver by hand within 2 business days, Gold Coast wide.</p>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
