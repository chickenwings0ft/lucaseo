import type { Metadata } from "next";
import ServiceNav from "../components/ServiceNav";
import SiteFooter from "../components/SiteFooter";
import ServiceCta from "../components/ServiceCta";
import BlogCard from "../components/BlogCard";
import { getBlogPosts } from "@/lib/blog";
import { blogListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Digital Marketing Blog by Lucaseo",
  description: "Practical guides on SEO, Google Ads, web design and AI automation for Gold Coast businesses that want to grow.",
  alternates: { canonical: "https://lucaseo.com/blog" },
};

export const revalidate = 60;

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  const blogJsonLd = blogListSchema(posts);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: "https://lucaseo.com" },
    { name: "Blog", url: "https://lucaseo.com/blog" },
  ]);

  return (
    <>
      <ServiceNav locale="en" />
      <style>{`
        .blog-hero { padding: 8rem 2rem 3rem; max-width: var(--container-max); margin: 0 auto; text-align: center; }
        .blog-hero__tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .blog-hero h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; margin-bottom: 1rem; text-wrap: balance; }
        .blog-hero p { font-size: 1.0625rem; color: var(--muted); max-width: 560px; margin: 0 auto; line-height: 1.7; font-weight: 300; }
        .blog-grid { max-width: var(--container-max); margin: 0 auto; padding: 1rem 2rem 6rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .blog-empty { max-width: 600px; margin: 0 auto; padding: 2rem 2rem 6rem; text-align: center; color: var(--muted); }
        @media (max-width: 860px) {
          .blog-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .blog-hero { padding: 6rem 1.5rem 2.5rem; }
          .blog-grid { grid-template-columns: 1fr; padding: 1rem 1.25rem 4rem; }
        }
      `}</style>

      <section className="blog-hero">
        <p className="blog-hero__tag">Blog</p>
        <h1>Digital Marketing Blog by Lucaseo</h1>
        <p>Straight-talking guides on getting found on Google, running profitable ads, and using AI to grow your business.</p>
      </section>

      {posts.length > 0 ? (
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="blog-empty">
          <p>New articles are on their way — check back soon.</p>
        </div>
      )}

      <ServiceCta locale="en" />
      <SiteFooter locale="en" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </>
  );
}
