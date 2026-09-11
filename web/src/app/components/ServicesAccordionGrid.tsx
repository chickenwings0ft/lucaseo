"use client";
import Link from "next/link";
import { useState } from "react";

export type AccordionService = {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  ctaLabel?: string;
};

export default function ServicesAccordionGrid({ services }: { services: AccordionService[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .sag-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 3rem; }
        .sag-card {
          border: 1px solid rgba(0,74,173,0.12);
          border-radius: 12px;
          background: #fff;
          overflow: hidden;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .sag-card:hover { border-color: rgba(0,74,173,0.25); }
        .sag-card--open { border-color: rgba(0,74,173,0.3); box-shadow: 0 4px 24px rgba(0,74,173,0.08); }
        .sag-card__toggle {
          width: 100%; display: flex; align-items: center; gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: none; border: none; cursor: pointer;
          text-align: left; color: inherit;
        }
        .sag-card__toggle:hover { background: rgba(0,74,173,0.03); }
        .sag-card__icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(0,74,173,0.07);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; flex-shrink: 0;
        }
        .sag-card__title {
          font-family: var(--font-display), system-ui;
          font-weight: 700; font-size: 1rem;
          flex: 1;
        }
        .sag-card__chevron {
          width: 20px; height: 20px; flex-shrink: 0;
          transition: transform 0.25s ease;
          color: #004aad;
        }
        .sag-card--open .sag-card__chevron { transform: rotate(180deg); }
        .sag-card__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .sag-card--open .sag-card__body { grid-template-rows: 1fr; }
        .sag-card__inner { overflow: hidden; }
        .sag-card__content { padding: 0 1.5rem 1.5rem; }
        .sag-card__desc {
          font-size: 0.9375rem; color: #5a6480;
          line-height: 1.7; font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .sag-card__link {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; font-weight: 600;
          color: #004aad; text-decoration: none;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0,74,173,0.25);
          border-radius: 6px;
          transition: background 0.2s, border-color 0.2s;
        }
        .sag-card__link:hover { background: rgba(0,74,173,0.05); border-color: rgba(0,74,173,0.4); }
        @media (max-width: 768px) { .sag-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="sag-grid">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <div className={`sag-card${isOpen ? " sag-card--open" : ""}`} key={i}>
              <button
                className="sag-card__toggle"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="sag-card__icon">{s.icon}</span>
                <span className="sag-card__title">{s.title}</span>
                <svg className="sag-card__chevron" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="sag-card__body">
                <div className="sag-card__inner">
                  <div className="sag-card__content">
                    <p className="sag-card__desc">{s.desc}</p>
                    {s.href && (
                      <Link href={s.href} className="sag-card__link">
                        {s.ctaLabel || "Ver servicio completo →"}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
