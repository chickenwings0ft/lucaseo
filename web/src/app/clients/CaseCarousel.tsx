"use client";
import { useState } from "react";
import CaseImage, { type CaseImageData } from "./CaseImage";

interface Props {
  slides: CaseImageData[];
  ratio?: string;
}

export default function CaseCarousel({ slides, ratio = "16/10" }: Props) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((prev) => (prev + d + slides.length) % slides.length);

  if (slides.length === 0) return null;

  return (
    <div className="case-carousel">
      <style>{`
        .case-carousel__stage { position: relative; }
        .case-carousel__nav {
          position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%;
          background: rgba(4,9,26,0.55); color: #fff; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: background 0.2s;
        }
        .case-carousel__nav:hover { background: rgba(4,9,26,0.75); }
        .case-carousel__nav--prev { left: 0.75rem; }
        .case-carousel__nav--next { right: 0.75rem; }
        .case-carousel__footer { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 0.875rem; }
        .case-carousel__caption { font-size: 0.8125rem; color: var(--muted); font-weight: 500; }
        .case-carousel__dots { display: flex; gap: 0.4rem; }
        .case-carousel__dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border); border: none; cursor: pointer; padding: 0; }
        .case-carousel__dot--active { background: var(--accent); }
      `}</style>
      <div className="case-carousel__stage">
        <CaseImage {...slides[i]} ratio={ratio} />
        {slides.length > 1 && (
          <>
            <button type="button" className="case-carousel__nav case-carousel__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" className="case-carousel__nav case-carousel__nav--next" onClick={() => go(1)} aria-label="Next image">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </>
        )}
      </div>
      <div className="case-carousel__footer">
        <p className="case-carousel__caption">{slides[i].label}</p>
        {slides.length > 1 && (
          <div className="case-carousel__dots">
            {slides.map((s, idx) => (
              <button
                type="button"
                key={s.label}
                className={`case-carousel__dot${idx === i ? " case-carousel__dot--active" : ""}`}
                onClick={() => setI(idx)}
                aria-label={`Show ${s.label}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
