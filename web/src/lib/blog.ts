import { groq } from "next-sanity";
import { client } from "./sanity";

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
  headerImage: BlogImage;
  headerImageAlt: string;
}

export interface BlogPost extends BlogListItem {
  body: unknown[];
  cta1Label?: string;
  cta1Href?: string;
  cta2Label?: string;
  cta2Href?: string;
  seoTitle?: string;
  seoDescription?: string;
}

const headerImageProjection = `
  "headerImage": headerImage.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height},
  "headerImageAlt": headerImage.alt,
`;

export const postListQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id, title, "slug": slug.current, excerpt, publishedAt, "updatedAt": _updatedAt, author,
  ${headerImageProjection}
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt, "updatedAt": _updatedAt, author, body,
  cta1Label, cta1Href, cta2Label, cta2Href, seoTitle, seoDescription,
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
