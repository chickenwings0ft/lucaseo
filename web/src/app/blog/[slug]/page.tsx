import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceNav from "../../components/ServiceNav";
import SiteFooter from "../../components/SiteFooter";
import BlogToc from "../../components/BlogToc";
import BlogBody from "../../components/BlogBody";
import BlogCta from "../../components/BlogCta";
import BlogClosing from "../../components/BlogClosing";
import AdSlot from "../../components/AdSlot";
import FaqSection from "../../components/FaqSection";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { extractToc } from "@/lib/toc";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import type { PortableTextBlock } from "@portabletext/react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const title = post.seoTitle || `${post.title} — Lucaseo Blog`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `https://lucaseo.com/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || "Lucas"],
      images: [{ url: post.headerImage.url, width: post.headerImage.w, height: post.headerImage.h }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.headerImage.url],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const toc = extractToc(post.body);
  const idByKey = new Map(toc.map((t) => [t.key, t.id]));

  const articleJsonLd = blogPostingSchema(post);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://lucaseo.com" },
    { name: "Blog", url: "https://lucaseo.com/blog" },
    { name: post.title, url: `https://lucaseo.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .blog-post-header { max-width: 1000px; margin: 0 auto; padding: 8rem 1.5rem 2rem; }
        .blog-post-header__meta { display: flex; align-items: center; gap: 0.625rem; font-size: 0.8125rem; color: var(--muted); margin-bottom: 1.25rem; }
        .blog-post-header__back { color: var(--accent); text-decoration: none; font-weight: 600; font-size: 0.875rem; display: inline-block; margin-bottom: 1.5rem; }
        .blog-post-header h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.5rem, 2.6vw, 2rem); letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; text-wrap: balance; }
        .blog-post-header__excerpt { font-size: 1.125rem; color: var(--muted); line-height: 1.7; font-weight: 300; max-width: 780px; }

        .blog-post-cover { max-width: 1000px; margin: 0 auto; padding: 0 1.5rem 2.5rem; }
        .blog-post-cover__img-wrap { position: relative; width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); }
        .blog-post-cover__img { object-fit: cover; }

        .blog-post-layout { max-width: 1000px; margin: 0 auto; padding: 0 1.5rem 5rem; display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        .blog-post-main { min-width: 0; }
        .blog-post-ad { margin: 2.5rem 0; }

        @media (min-width: 960px) {
          .blog-post-layout { grid-template-columns: 220px 1fr; align-items: start; }
        }
      `}</style>

      <header className="blog-post-header">
        <Link href="/blog" className="blog-post-header__back">← Back to blog</Link>
        <div className="blog-post-header__meta">
          <span>{post.author || "Lucas"}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>
        <h1>{post.title}</h1>
        <p className="blog-post-header__excerpt">{post.excerpt}</p>
      </header>

      <div className="blog-post-cover">
        <div className="blog-post-cover__img-wrap">
          <Image
            src={post.headerImage.url}
            alt={post.headerImageAlt}
            fill
            className="blog-post-cover__img"
            sizes="1000px"
            priority
          />
        </div>
      </div>

      <div className="blog-post-layout">
        <BlogToc items={toc} />

        <main className="blog-post-main">
          {(post.cta1Label || post.cta2Label) && (
            <BlogCta
              cta1={{ label: post.cta1Label ?? "", href: post.cta1Href ?? "" }}
              cta2={{ label: post.cta2Label ?? "", href: post.cta2Href ?? "" }}
            />
          )}

          <BlogBody body={post.body as PortableTextBlock[]} idByKey={idByKey} />

          <div className="blog-post-ad">
            <AdSlot slot="blog-in-article" />
          </div>

          {post.faqs && post.faqs.length > 0 && (
            <FaqSection topic={post.title} faqs={post.faqs} title="Frequently asked questions" />
          )}

          <BlogClosing cta={{ label: post.cta1Label ?? "", href: post.cta1Href ?? "" }} />
        </main>
      </div>

      <SiteFooter locale="en" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
