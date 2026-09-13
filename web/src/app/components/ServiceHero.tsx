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
}: ServiceHeroProps) {
  return (
    <>
      <style>{`
        .service-hero {
          padding: 8rem 2.5rem 5rem;
          background: linear-gradient(160deg, #f0f5ff 0%, #ffffff 60%);
          border-bottom: 1px solid rgba(0,74,173,0.1);
        }
        .service-hero__inner {
          max-width: 900px;
          margin: 0 auto;
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
        .service-hero__eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #004aad;
        }
        .service-hero__title {
          font-family: var(--font-display), system-ui;
          font-weight: 800;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.75rem;
          text-wrap: balance;
        }
        .service-hero__title em {
          font-style: normal;
          color: #004aad;
        }
        .service-hero__lead {
          font-size: 1.0625rem;
          color: #5a6480;
          max-width: 600px;
          line-height: 1.75;
          margin-bottom: 2.5rem;
          font-weight: 300;
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

      <section className="service-hero">
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
