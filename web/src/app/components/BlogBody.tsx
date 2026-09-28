import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanityImage";

interface BlogImageValue {
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
}

export default function BlogBody({ body, idByKey }: { body: PortableTextBlock[]; idByKey: Map<string, string> }) {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children, value }) => <h2 id={value._key ? idByKey.get(value._key) : undefined}>{children}</h2>,
      h3: ({ children, value }) => <h3 id={value._key ? idByKey.get(value._key) : undefined}>{children}</h3>,
      h4: ({ children, value }) => <h4 id={value._key ? idByKey.get(value._key) : undefined}>{children}</h4>,
      h5: ({ children, value }) => <h5 id={value._key ? idByKey.get(value._key) : undefined}>{children}</h5>,
      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
      normal: ({ children }) => <p>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const href = value?.href ?? "#";
        const external = /^https?:\/\//.test(href);
        return external ? (
          <a href={href} target={value?.newTab ? "_blank" : undefined} rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
    types: {
      image: ({ value }: { value: BlogImageValue }) => {
        // An image block can exist with no file attached yet (e.g. saved
        // mid-upload in the Studio) — skip it instead of crashing the page.
        if (!value?.asset?._ref) return null;
        const url = urlForImage(value)?.width(1400).fit("max").auto("format").url();
        if (!url) return null;
        return (
          <figure className="blog-body__figure">
            <Image src={url} alt={value.alt ?? ""} width={1400} height={900} sizes="(min-width: 960px) 720px, 100vw" />
            {value.caption && <figcaption>{value.caption}</figcaption>}
          </figure>
        );
      },
    },
  };

  return (
    <div className="blog-body">
      <style>{`
        .blog-body { font-size: 1.0625rem; line-height: 1.6; color: var(--text); font-weight: 300; }
        .blog-body h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.5rem, 3vw, 1.875rem); letter-spacing: -0.02em; line-height: 1.25; margin: 2.5rem 0 1.25rem; scroll-margin-top: calc(var(--nav-height) + 1.5rem); }
        .blog-body h3 { font-family: var(--font-display); font-weight: 700; font-size: 1.25rem; letter-spacing: -0.01em; line-height: 1.3; margin: 2rem 0 1rem; scroll-margin-top: calc(var(--nav-height) + 1.5rem); }
        .blog-body h4 { font-family: var(--font-display); font-weight: 700; font-size: 1.0625rem; letter-spacing: -0.01em; line-height: 1.35; margin: 1.5rem 0 0.75rem; scroll-margin-top: calc(var(--nav-height) + 1.5rem); }
        .blog-body h5 { font-weight: 700; font-size: 0.9375rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); margin: 1.25rem 0 0.625rem; scroll-margin-top: calc(var(--nav-height) + 1.5rem); }
        .blog-body p { margin-bottom: 1.25rem; }
        .blog-body ul, .blog-body ol { margin: 0 0 1.5rem 1.25rem; }
        .blog-body li { margin-bottom: 0.5rem; }
        .blog-body a { color: var(--accent); text-underline-offset: 2px; }
        .blog-body strong { font-weight: 700; }
        .blog-body blockquote { border-left: 3px solid var(--accent); padding-left: 1.25rem; margin: 1.75rem 0; font-style: italic; color: var(--muted); }
        .blog-body__figure { margin: 2rem 0; }
        .blog-body__figure img { width: 100%; height: auto; border-radius: var(--radius-md); }
        .blog-body__figure figcaption { font-size: 0.8125rem; color: var(--muted); text-align: center; margin-top: 0.625rem; }
      `}</style>
      <PortableText value={body} components={components} />
    </div>
  );
}
