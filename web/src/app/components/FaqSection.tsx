"use client";
import { useRef, useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  topic: string;
  faqs: FaqItem[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export default function FaqSection({ topic, faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  function handleToggle(i: number) {
    if (openIndex === i) {
      setOpenIndex(null);
      return;
    }
    if (openIndex !== null && detailsRefs.current[openIndex]) {
      detailsRefs.current[openIndex]!.open = false;
    }
    setOpenIndex(i);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <style>{`
        .faq-module { max-width: 760px; margin: 0 auto; padding: 5rem 2.5rem; }
        .faq-module__title {
          font-family: var(--font-display), system-ui;
          font-weight: 700;
          font-size: clamp(1.875rem, 3vw, 2.75rem);
          letter-spacing: -0.03em;
          line-height: 1.1;
          text-align: center;
          margin-bottom: 3rem;
          text-wrap: balance;
        }
        .faq-module details {
          border-bottom: 1px solid rgba(0,74,173,0.1);
          overflow: hidden;
        }
        .faq-module summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem 0;
          cursor: pointer;
          list-style: none;
          font-family: var(--font-display), system-ui;
          font-weight: 700;
          font-size: 1.0625rem;
          color: var(--faq-question-color, #1a1a1a);
          transition: color 0.2s;
        }
        .faq-module summary::-webkit-details-marker { display: none; }
        .faq-module summary::marker { display: none; content: ""; }
        .faq-module summary:hover { color: #004aad; }
        .faq-module__chevron {
          width: 20px; height: 20px; flex-shrink: 0;
          transition: transform 0.3s ease;
          color: #004aad;
        }
        .faq-module details[open] .faq-module__chevron { transform: rotate(180deg); }
        .faq-module__answer {
          padding: 0 0 1.5rem;
          font-size: 0.9375rem;
          color: var(--faq-answer-color, #5a6480);
          line-height: 1.75;
          font-weight: 300;
          max-width: 640px;
        }
        @media (max-width: 600px) {
          .faq-module { padding: 3rem 1.25rem; }
        }
      `}</style>

      <section
        className="faq-module"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2 className="faq-module__title">
          Preguntas frecuentes sobre {topic}
        </h2>
        {faqs.map((f, i) => (
          <details
            key={i}
            id={`faq-${slugify(f.q)}`}
            ref={(el) => { detailsRefs.current[i] = el; }}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            onToggle={(e) => {
              if ((e.target as HTMLDetailsElement).open) handleToggle(i);
            }}
          >
            <summary>
              <span itemProp="name">{f.q}</span>
              <svg className="faq-module__chevron" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div
              className="faq-module__answer"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{f.a}</p>
            </div>
          </details>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
