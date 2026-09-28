import Link from "next/link";
import Image from "next/image";
import type { BlogListItem } from "@/lib/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogCard({ post }: { post: BlogListItem }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <style>{`
        .blog-card {
          display: flex; flex-direction: column; text-decoration: none; color: inherit;
          background: #fff; border: 1px solid var(--border); border-radius: var(--radius-md);
          overflow: hidden; box-shadow: var(--shadow-sm);
          transition: transform 220ms var(--ease-out), box-shadow 220ms var(--ease-out), border-color 220ms var(--ease-out);
        }
        .blog-card__img-wrap { position: relative; aspect-ratio: 16 / 9; background: var(--surface); overflow: hidden; }
        .blog-card__img { object-fit: cover; transition: transform 400ms var(--ease-out); }
        @media (hover: hover) and (pointer: fine) {
          .blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); border-color: rgba(0,74,173,0.3); }
          .blog-card:hover .blog-card__img { transform: scale(1.04); }
        }
        .blog-card:active { transform: scale(0.99); transition-duration: 100ms; }
        .blog-card__body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
        .blog-card__date { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.75rem; }
        .blog-card__title { font-family: var(--font-display); font-weight: 700; font-size: 1.125rem; letter-spacing: -0.01em; line-height: 1.35; margin-bottom: 0.625rem; }
        .blog-card__excerpt { font-size: 0.9375rem; color: var(--muted); line-height: 1.65; font-weight: 300; flex: 1; }
      `}</style>
      <div className="blog-card__img-wrap">
        <Image
          src={post.headerImage.url}
          alt={post.headerImageAlt}
          fill
          className="blog-card__img"
          sizes="(min-width: 860px) 33vw, 100vw"
        />
      </div>
      <div className="blog-card__body">
        <p className="blog-card__date">{formatDate(post.publishedAt)}</p>
        <h2 className="blog-card__title">{post.title}</h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>
      </div>
    </Link>
  );
}
