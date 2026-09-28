import type { BlogListItem, BlogPost } from "./blog";

const SITE_URL = "https://lucaseo.com";
const SITE_NAME = "Lucaseo";
const LOGO_URL = `${SITE_URL}/logo.png`;
const LOGO_SIZE = 320;

export const organizationSchema = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface PortableSpan {
  text?: string;
}
interface PortableBlock {
  _type: string;
  children?: PortableSpan[];
}

/** Rough word count from the article body, used for the wordCount schema field. */
function countWords(body: unknown): number {
  if (!Array.isArray(body)) return 0;
  const text = (body as PortableBlock[])
    .filter((b) => b._type === "block")
    .map((b) => (b.children ?? []).map((c) => c.text ?? "").join(""))
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function blogPostingSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: post.title,
    description: post.excerpt,
    image: {
      "@type": "ImageObject",
      url: post.headerImage.url,
      width: post.headerImage.w,
      height: post.headerImage.h,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    inLanguage: "en-AU",
    wordCount: countWords(post.body),
    author: {
      "@type": "Person",
      name: post.author || "Lucas",
      url: `${SITE_URL}/about`,
    },
    publisher: organizationSchema,
  };
}

export function blogListSchema(posts: BlogListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Digital Marketing Blog by Lucaseo",
    url: `${SITE_URL}/blog`,
    description:
      "Practical guides on SEO, Google Ads, web design and AI automation for Gold Coast businesses that want to grow.",
    publisher: organizationSchema,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      image: post.headerImage.url,
    })),
  };
}
