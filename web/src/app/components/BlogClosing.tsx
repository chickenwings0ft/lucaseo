import Link from "next/link";

interface CtaConfig {
  label: string;
  href: string;
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

/** A plain, low-key sign-off for the end of an article — just a line and a button. */
export default function BlogClosing({ cta }: { cta: CtaConfig }) {
  if (!cta.label || !cta.href) return null;
  const external = isExternal(cta.href);

  return (
    <div className="blog-closing">
      <style>{`
        .blog-closing { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; }
        .blog-closing p { font-size: 1rem; color: var(--text); font-weight: 500; margin: 0; }
        .blog-closing__btn {
          display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
          padding: 0.75rem 1.5rem; font-weight: 600; font-size: 0.9375rem;
          background: var(--accent); color: #fff; text-decoration: none; border-radius: var(--radius-sm);
          transition: transform 160ms var(--ease-out), background 160ms var(--ease-out);
        }
        @media (hover: hover) and (pointer: fine) {
          .blog-closing__btn:hover { background: var(--accent-hover); }
        }
        .blog-closing__btn:active { transform: scale(0.97); transition-duration: 100ms; }
        @media (max-width: 480px) {
          .blog-closing { flex-direction: column; align-items: stretch; text-align: center; }
        }
      `}</style>
      <p>Want help putting this into practice?</p>
      {external ? (
        <a href={cta.href} className="blog-closing__btn" target="_blank" rel="noopener noreferrer">{cta.label}</a>
      ) : (
        <Link href={cta.href} className="blog-closing__btn">{cta.label}</Link>
      )}
    </div>
  );
}
