import { groq } from "next-sanity";

export const landingQuery = groq`{
  "settings": *[_type == "siteSettings"][0],
  "services": *[_type == "service"] | order(order asc){ _id, icon, name, description },
  "steps": *[_type == "processStep"] | order(order asc){ _id, label, title, description },
  "cases": *[_type == "caseStudy"] | order(order asc){ _id, result, context, sector },
  "stats": *[_type == "stat"] | order(order asc){ _id, value, suffix, decimal, label },
  "clients": *[_type == "client"] | order(order asc){ _id, name, url, darkBackground, "logo": logo.asset->{url, "w": metadata.dimensions.width, "h": metadata.dimensions.height} }
}`;
