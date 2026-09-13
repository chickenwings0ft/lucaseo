"use client";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead: string;
  cta1Text: string;
  cta1Href: string;
  cta2Text?: string;
  cta2Href?: string;
  withVideo?: boolean;
}

export default function ServiceHero({
  eyebrow,
  title,
  highlight,
  lead,
  cta1Text,
  cta1Href,
  cta2Text,
  cta2Href,
  withVideo = true,
}: ServiceHeroProps) {
  return (
    <>
      <style>{`
        .service-hero {
          position: relative;
          padding: 8rem 2.5rem 5rem;
          border-bottom: 1px solid rgba(0,74,173,0.1);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, #f0f5ff 0%, #ffffff 60%);
        }
        .service-hero--video {
          background: #000;
        }
        .service-hero--video::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 1;
        }
        .service-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          object-position: 70% center;
        }
        .service-hero__inner {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .service-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #004aad;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1.75rem;
        }
        .service-hero--video .service-hero__eyebrow {
          color: #fff;
        }
        .service-hero__eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #004aad;
        }
        .service-hero--video .service-hero__eyebrow::before {
          background: #fff;
        }
        .service-hero__title {
          font-family: var(--font-display), system-ui;
          font-weight: 800;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.75rem;
          text-wrap: balance;
          color: #0a0f1e;
        }
        .service-hero--video .service-hero__title {
          color: #fff;
        }
        .service-hero__title em {
          font-style: normal;
          color: #004aad;
        }
        .service-hero--video .service-hero__title em {
          color: #4d9aff;
          text-shadow: 0 0 20px rgba(0,74,173,0.8), 0 0 40px rgba(0,74,173,0.5);
        }
        .service-hero__lead {
          font-size: 1.0625rem;
          color: #5a6480;
          max-width: 600px;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }
        .service-hero--video .service-hero__lead {
          color: rgba(255,255,255,0.75);
        }
        .service-hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .service-hero__btn {
          display: inline-block;
          padding: 0.75rem 1.75rem;
          background: #004aad;
          color: #fff;
          font-weight: 500;
          font-size: 0.9375rem;
          text-decoration: none;
          border-radius: 6px;
          transition: opacity 0.2s;
        }
        .service-hero__btn:hover {
          opacity: 0.87;
        }
        .service-hero__btn--ghost {
          background: transparent;
          color: #004aad;
          border: 1px solid rgba(0,74,173,0.3);
        }
        .service-hero__btn--ghost:hover {
          border-color: #004aad;
          opacity: 1;
        }
        @media (max-width: 768px) {
          .service-hero {
            padding: 6rem 2.5rem 4rem;
          }
        }
      `}</style>

      <section className={`service-hero${withVideo ? ' service-hero--video' : ''}`}>
        {withVideo && <video className="service-hero-video" src="/hero-video.mp4" autoPlay muted loop playsInline />}
        <div className="service-hero__inner">
          <div className="service-hero__eyebrow">{eyebrow}</div>
          <h1 className="service-hero__title">
            {title}
            {highlight && <><br /><em>{highlight}</em></>}
          </h1>
          <p className="service-hero__lead">{lead}</p>
          <div className="service-hero__actions">
            <a href={cta1Href} className="service-hero__btn">
              {cta1Text}
            </a>
            {cta2Text && cta2Href && (
              <a href={cta2Href} className="service-hero__btn service-hero__btn--ghost">
                {cta2Text}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
