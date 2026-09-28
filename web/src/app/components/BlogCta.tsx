import Link from "next/link";

interface CtaConfig {
  label: string;
  href: string;
}

interface Props {
  cta1: CtaConfig;
  cta2?: CtaConfig;
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function CtaLink({ label, href, className }: CtaConfig & { className: string }) {
  if (isExternal(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

/** The two CTA buttons an author sets on every post, shown together as one row. */
export default function BlogCta({ cta1, cta2 }: Props) {
  return (
    <div className="blog-cta">
      <style>{`
        .blog-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin: 2.5rem 0; }
        .blog-cta__btn {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.875rem 1.75rem; font-weight: 600; font-size: 0.9375rem;
          text-decoration: none; border-radius: var(--radius-sm);
          transition: transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out), background 160ms var(--ease-out), border-color 160ms var(--ease-out);
        }
        .blog-cta__btn--primary { background: var(--accent); color: #fff; }
        .blog-cta__btn--secondary { background: transparent; color: var(--accent); border: 1px solid rgba(0,74,173,0.3); }
        @media (hover: hover) and (pointer: fine) {
          .blog-cta__btn--primary:hover { background: var(--accent-hover); box-shadow: var(--shadow-md); transform: translateY(-1px); }
          .blog-cta__btn--secondary:hover { border-color: var(--accent); background: var(--accent-light); }
        }
        .blog-cta__btn:active { transform: scale(0.97); transition-duration: 100ms; }
        @media (max-width: 480px) {
          .blog-cta { flex-direction: column; }
          .blog-cta__btn { width: 100%; }
        }
      `}</style>
      {cta1.label && cta1.href && <CtaLink {...cta1} className="blog-cta__btn blog-cta__btn--primary" />}
      {cta2?.label && cta2?.href && <CtaLink {...cta2} className="blog-cta__btn blog-cta__btn--secondary" />}
    </div>
  );
}
