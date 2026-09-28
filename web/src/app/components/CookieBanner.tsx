"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "lucaseo_cookie_consent";

type Prefs = { analytics: boolean; marketing: boolean };

function loadPrefs(): Prefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function savePrefs(prefs: Prefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    window.dispatchEvent(new CustomEvent("cookie-consent-given"));
  } catch {}
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const saved = loadPrefs();
    if (!saved) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    savePrefs({ analytics: true, marketing: true });
    setVisible(false);
  }

  function rejectAll() {
    savePrefs({ analytics: false, marketing: false });
    setVisible(false);
  }

  function saveCustom() {
    savePrefs({ analytics, marketing });
    setVisible(false);
    setManaging(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        .ck-overlay {
          position: fixed; inset: 0; z-index: 1100;
          background: rgba(4,9,26,0.55); backdrop-filter: blur(2px);
          display: flex; align-items: flex-end; justify-content: center;
          padding: 1rem; animation: ck-fade 0.2s ease;
        }
        @keyframes ck-fade { from{opacity:0} to{opacity:1} }

        .ck-banner {
          background: #fff; border-radius: 14px 14px 14px 14px;
          width: 100%; max-width: 700px; padding: 1.5rem 1.75rem;
          box-shadow: 0 -4px 40px rgba(0,0,0,0.15);
          animation: ck-rise 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes ck-rise { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }

        .ck-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; }
        .ck-icon { font-size: 1.375rem; flex-shrink: 0; margin-top: 0.1rem; }
        .ck-title { font-family: var(--font-display, system-ui); font-weight: 700; font-size: 1rem; color: #0a0f1e; margin: 0 0 0.25rem; }
        .ck-desc { font-size: 0.84rem; color: #5a6480; line-height: 1.6; margin: 0; }
        .ck-desc a { color: #004aad; text-underline-offset: 2px; }

        .ck-actions { display: flex; gap: 0.625rem; flex-wrap: wrap; align-items: center; }
        .ck-btn {
          padding: 0.6rem 1.25rem; border-radius: 7px; font-size: 0.875rem; font-weight: 600;
          font-family: var(--font-body, system-ui); cursor: pointer; border: none; transition: opacity 0.15s;
        }
        .ck-btn:hover { opacity: 0.85; }
        .ck-btn--primary { background: #004aad; color: #fff; }
        .ck-btn--ghost { background: transparent; border: 1.5px solid #d0d8e8; color: #5a6480; }
        .ck-btn--ghost:hover { border-color: #004aad; color: #004aad; opacity: 1; }
        .ck-btn--text { background: none; color: #9aa5b4; font-weight: 500; padding-left: 0; padding-right: 0; font-size: 0.8rem; }
        .ck-btn--text:hover { color: #5a6480; opacity: 1; }

        /* Manage panel */
        .ck-manage { margin-top: 1.25rem; border-top: 1px solid #eef1f8; padding-top: 1.25rem; }
        .ck-cat { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
        .ck-cat:last-child { margin-bottom: 0; }
        .ck-cat-info {}
        .ck-cat-name { font-weight: 600; font-size: 0.875rem; color: #0a0f1e; margin-bottom: 0.125rem; }
        .ck-cat-desc { font-size: 0.8rem; color: #5a6480; line-height: 1.5; }
        .ck-toggle { position: relative; width: 40px; height: 22px; flex-shrink: 0; margin-top: 0.1rem; }
        .ck-toggle input { opacity: 0; width: 0; height: 0; }
        .ck-slider {
          position: absolute; inset: 0; background: #d0d8e8; border-radius: 22px;
          cursor: pointer; transition: background 0.2s;
        }
        .ck-slider::before {
          content: ''; position: absolute; width: 16px; height: 16px;
          left: 3px; top: 3px; background: #fff; border-radius: 50%;
          transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .ck-toggle input:checked + .ck-slider { background: #004aad; }
        .ck-toggle input:checked + .ck-slider::before { transform: translateX(18px); }
        .ck-toggle input:disabled + .ck-slider { cursor: default; opacity: 0.6; }

        @media (max-width: 480px) {
          .ck-banner { padding: 1.25rem; border-radius: 12px 12px 0 0; }
          .ck-overlay { padding: 0; align-items: flex-end; }
          .ck-actions { flex-direction: column; align-items: stretch; }
          .ck-btn--text { text-align: center; }
        }
      `}</style>

      <div className="ck-overlay">
        <div className="ck-banner" role="dialog" aria-label="Cookie preferences">
          <div className="ck-top">
            <span className="ck-icon">🍪</span>
            <div>
              <p className="ck-title">We use cookies</p>
              <p className="ck-desc">
                We use cookies and similar technologies to improve your experience, analyse traffic, and support our marketing.
                By clicking &ldquo;Accept all&rdquo; you consent to their use. You can manage your preferences at any time.
                See our{" "}
                <Link href="/privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </div>

          {managing && (
            <div className="ck-manage">
              {/* Necessary */}
              <div className="ck-cat">
                <div className="ck-cat-info">
                  <div className="ck-cat-name">Strictly necessary</div>
                  <div className="ck-cat-desc">Required for the site to function. Cannot be disabled.</div>
                </div>
                <label className="ck-toggle">
                  <input type="checkbox" checked disabled readOnly />
                  <span className="ck-slider" />
                </label>
              </div>
              {/* Analytics */}
              <div className="ck-cat">
                <div className="ck-cat-info">
                  <div className="ck-cat-name">Analytics</div>
                  <div className="ck-cat-desc">Help us understand how visitors use the site (Google Analytics, Microsoft Clarity).</div>
                </div>
                <label className="ck-toggle">
                  <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                  <span className="ck-slider" />
                </label>
              </div>
              {/* Marketing */}
              <div className="ck-cat">
                <div className="ck-cat-info">
                  <div className="ck-cat-name">Marketing</div>
                  <div className="ck-cat-desc">Used to serve relevant ads and measure campaign performance.</div>
                </div>
                <label className="ck-toggle">
                  <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                  <span className="ck-slider" />
                </label>
              </div>
            </div>
          )}

          <div className="ck-actions" style={{ marginTop: "1.25rem" }}>
            <button className="ck-btn ck-btn--primary" onClick={acceptAll}>Accept all</button>
            {managing ? (
              <button className="ck-btn ck-btn--ghost" onClick={saveCustom}>Save preferences</button>
            ) : (
              <button className="ck-btn ck-btn--ghost" onClick={rejectAll}>Reject non-essential</button>
            )}
            <button className="ck-btn ck-btn--text" onClick={() => setManaging(m => !m)}>
              {managing ? "← Back" : "Manage preferences"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
