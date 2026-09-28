import type { TocItem } from "@/lib/toc";

export default function BlogToc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  const list = (
    <ul className="blog-toc__list">
      {items.map((item) => (
        <li key={item.key} className={`blog-toc__item blog-toc__item--h${item.level}`}>
          <a href={`#${item.id}`}>{item.text}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <style>{`
        .blog-toc__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.625rem; }
        .blog-toc__item a {
          color: var(--muted); text-decoration: none; font-size: 0.875rem; line-height: 1.4;
          transition: color 160ms var(--ease-out);
          display: block;
        }
        .blog-toc__item--h3 a { padding-left: 1rem; font-size: 0.8125rem; }
        @media (hover: hover) and (pointer: fine) {
          .blog-toc__item a:hover { color: var(--accent); }
        }

        /* Desktop: sticky sidebar */
        .blog-toc--desktop {
          display: none;
        }
        @media (min-width: 960px) {
          .blog-toc--desktop {
            display: block;
            position: sticky;
            top: calc(var(--nav-height) + 2rem);
            align-self: start;
            padding: 1.5rem;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius-md);
            max-height: calc(100vh - var(--nav-height) - 4rem);
            overflow-y: auto;
          }
          .blog-toc--mobile { display: none; }
        }
        .blog-toc__title {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--muted); margin-bottom: 1rem;
        }

        /* Mobile: collapsible */
        .blog-toc--mobile {
          border: 1px solid var(--border); border-radius: var(--radius-md);
          margin-bottom: 2rem; overflow: hidden;
        }
        .blog-toc--mobile summary {
          padding: 1rem 1.25rem; cursor: pointer; list-style: none;
          font-weight: 700; font-size: 0.9375rem; color: var(--text);
          display: flex; align-items: center; justify-content: space-between;
        }
        .blog-toc--mobile summary::-webkit-details-marker { display: none; }
        .blog-toc--mobile[open] summary { border-bottom: 1px solid var(--border); }
        .blog-toc--mobile .blog-toc__list { padding: 1rem 1.25rem; }
        .blog-toc__chevron { transition: transform 200ms var(--ease-in-out); color: var(--accent); }
        .blog-toc--mobile[open] .blog-toc__chevron { transform: rotate(180deg); }
      `}</style>

      <nav className="blog-toc--desktop" aria-label="Table of contents">
        <p className="blog-toc__title">On this page</p>
        {list}
      </nav>

      <details className="blog-toc--mobile">
        <summary>
          On this page
          <svg className="blog-toc__chevron" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </summary>
        {list}
      </details>
    </>
  );
}
