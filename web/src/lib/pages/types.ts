export type Locale = "es" | "en";

export type Faq = { q: string; a: string };
export type Card = { icon?: string; title: string; desc: string };
export type Step = { n: string; t: string; d: string };
export type Stat = { n: string; l: string; c: string };
export type RelatedLink = { href: string; label: string };

export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** El texto entre *asteriscos* se pinta en color de acento. */
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta?: string;
  stats?: Stat[];
  intro?: { tag: string; title: string; paragraphs: string[] };
  cards?: { tag: string; title: string; lead?: string; items: Card[] };
  steps?: { tag: string; title: string; lead?: string; items: Step[]; dark?: boolean };
  bullets?: { tag: string; title: string; lead?: string; items: string[] };
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  related?: { title: string; links: RelatedLink[] };
};

export type Dictionary = {
  nav: { links: { href: string; label: string }[]; cta: string };
  cta: { eyebrow: string; primary: string; secondary: string; bullets: string[] };
  faqHeading: string;
  relatedHeading: string;
  footer: { legal: string; privacy: string; rights: string };
};
