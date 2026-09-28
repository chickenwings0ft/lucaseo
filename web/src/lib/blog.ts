import { groq } from "next-sanity";
import { client } from "./sanity";

export type BlogCategory = "seo" | "sem" | "ai" | "social" | "marketing";

export interface BlogImage {
  url: string;
  w: number;
  h: number;
}

export interface BlogListItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author?: string;
  category?: BlogCategory;
  headerImage: BlogImage;
  headerImageAlt: string;
}

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPost extends BlogListItem {
  body: unknown[];
  cta1Label?: string;
  cta1Href?: string;
  cta2Label?: string;
  cta2Href?: string;
  faqs?: BlogFaqItem[];
  seoTitle?: string;
  seoDescription?: string;
}

const headerImageProjection = `
  "headerImage": headerImage.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height},
  "headerImageAlt": headerImage.alt,
`;

export const postListQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, "updatedAt": _updatedAt, author, category,
  ${headerImageProjection}
}`;

export const postsByCategoryQuery = groq`*[_type == "post" && defined(slug.current) && category == $category] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, "updatedAt": _updatedAt, author, category,
  ${headerImageProjection}
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, "updatedAt": _updatedAt, author, body, category,
  cta1Label, cta1Href, cta2Label, cta2Href, seoTitle, seoDescription,
  "faqs": faqs[]{"q": question, "a": answer},
  ${headerImageProjection}
}`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;

export async function getBlogPosts(): Promise<BlogListItem[]> {
  if (!client) return [];
  try {
    return await client.fetch(postListQuery);
  } catch {
    return [];
  }
}

export async function getBlogPostsByCategory(category: BlogCategory): Promise<BlogListItem[]> {
  if (!client) return [];
  try {
    return await client.fetch(postsByCategoryQuery, { category });
  } catch {
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!client) return null;
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  if (!client) return [];
  try {
    const rows: { slug: string }[] = await client.fetch(postSlugsQuery);
    return rows.map((r) => r.slug);
  } catch {
    return [];
  }
}
