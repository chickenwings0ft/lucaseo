import Link from "next/link";
import BlogCard from "./BlogCard";
import { getBlogPostsByCategory, type BlogCategory } from "@/lib/blog";

interface Props {
  category: BlogCategory;
  title?: string;
}

/** Renders nothing if there are no published posts in this category yet. */
export default async function BlogArticlesSection({ category, title = "Articles" }: Props) {
  const posts = await getBlogPostsByCategory(category);
  if (posts.length === 0) return null;

  return (
    <section className="blog-articles">
      <style>{`
        .blog-articles { max-width: var(--container-max); margin: 0 auto; padding: 5rem 2rem; }
        .blog-articles__head { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
        .blog-articles__tag { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
        .blog-articles h2 { font-family: var(--font-display); font-weight: 700; font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.03em; }
        .blog-articles__all { color: var(--accent); text-decoration: none; font-weight: 600; font-size: 0.9375rem; white-space: nowrap; }
        .blog-articles__all:hover { text-decoration: underline; }
        .blog-articles__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media (max-width: 860px) {
          .blog-articles__grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .blog-articles { padding: 3.5rem 1.25rem; }
          .blog-articles__grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div className="blog-articles__head">
        <div>
          <p className="blog-articles__tag">From the blog</p>
          <h2>{title}</h2>
        </div>
        <Link href="/blog" className="blog-articles__all">See all articles →</Link>
      </div>
      <div className="blog-articles__grid">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
