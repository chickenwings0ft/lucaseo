import type { ServicePage } from "../types";

export const webEn: ServicePage = {
  slug: "en/web",
  metaTitle: "Web Design & Development | Lucaseo",
  metaDescription: "Fast, beautiful websites built to convert. SEO-optimized, performance-first web development that turns visitors into leads and clients.",
  eyebrow: "Web Design & Development",
  title: "A website that *works as hard as you do*",
  lead: "Your website is your best salesperson — it works 24/7, never calls in sick and handles every visitor with the same quality. But only if it's built right. We create websites that are fast, beautiful and designed to convert.",
  primaryCta: "I want a new website",
  secondaryCta: "See our approach",
  stats: [
    { n: "< 1.5s", l: "Average load time", c: "Faster than 95% of sites in your industry" },
    { n: "100", l: "PageSpeed score", c: "We build for performance, not just aesthetics" },
    { n: "+65%", l: "More conversions vs. templates", c: "Custom design converts better than generic templates" },
    { n: "0", l: "Maintenance headaches", c: "We handle updates, backups and hosting" },
  ],
  intro: {
    tag: "More than a pretty face",
    title: "A website that doesn't convert is just a digital business card",
    paragraphs: [
      "Most businesses treat their website as a box to check off. They pick a template, fill in the text, add a logo and call it done. The result is a site that looks like every other site in their industry — and converts just as poorly.",
      "We build websites with intention. Every section, every button, every word has a purpose. The design guides the visitor through a clear journey that ends where you want it to end: a form filled, a call made, a purchase completed. Performance, SEO and conversion rate optimization are baked in from the first line of code.",
    ],
  },
  cards: {
    tag: "What we build",
    title: "Websites that work, not just websites that exist",
    items: [
      { icon: "⚡", title: "Performance-first", desc: "Sub-second load times. We use modern frameworks, optimized images and efficient code. Speed is not optional — it's a ranking factor." },
      { icon: "🎯", title: "Conversion-optimized", desc: "Strategic CTAs, clear user flows and persuasive copy. Every page is designed to move the visitor closer to becoming a client." },
      { icon: "🔍", title: "SEO-ready", desc: "Semantic HTML, structured data, meta tags, sitemap, robots.txt — your site launches with everything Google needs to rank it." },
      { icon: "📱", title: "Fully responsive", desc: "Perfect on every device. Mobile-first design that adapts to phones, tablets and desktops without compromise." },
      { icon: "🛡️", title: "Secure & maintained", desc: "SSL, regular updates, automated backups. Your site is always secure, always online, always up to date." },
      { icon: "📊", title: "Analytics integrated", desc: "GA4, Search Console and conversion tracking from day one. Know exactly how your site performs and where to improve." },
    ],
  },
  steps: {
    tag: "Process",
    title: "From concept to launch in 4 weeks",
    dark: true,
    items: [
      { n: "01", t: "Discovery", d: "We understand your business, your audience and your goals. We define the site structure, content strategy and conversion flows." },
      { n: "02", t: "Design", d: "High-fidelity design mockups for every page. You see exactly what you'll get before we write a single line of code." },
      { n: "03", t: "Development", d: "We build with Next.js for maximum performance and SEO. Responsive, accessible, fast — no compromises." },
      { n: "04", t: "Launch & optimize", d: "We deploy, test on every device and start monitoring. Post-launch optimization based on real user data." },
    ],
  },
  bullets: {
    tag: "Why us",
    title: "We build websites that generate business",
    items: [
      "Custom design — not a template with your logo slapped on top",
      "Built with Next.js — the same technology used by Netflix, Nike and TikTok",
      "SEO baked in from the architecture level — not bolted on after launch",
      "Performance that puts you in the top 5% of loading speeds",
      "Content written by professional copywriters who understand conversion",
      "Post-launch support included — we don't disappear after delivery",
    ],
  },
  faqs: [
    { q: "How long does it take to build a website?", a: "A standard business website takes 3-4 weeks from discovery to launch. E-commerce sites or more complex projects may take 5-8 weeks. We always provide a clear timeline upfront." },
    { q: "Do you write the content too?", a: "Yes. Our team includes professional copywriters who write persuasive, SEO-optimized content for every page. You provide the key information about your business; we turn it into copy that converts." },
    { q: "What technology do you use?", a: "We build with Next.js (React), the most advanced framework for web performance and SEO. For CMS, we use Sanity — a headless CMS that gives you full control over your content without touching code." },
    { q: "Can I update the content myself?", a: "Absolutely. We set up a CMS (content management system) that lets you update text, images and pages without any technical knowledge. We train your team on how to use it." },
    { q: "Do you handle hosting?", a: "Yes. We host on Vercel — the same infrastructure used by some of the world's fastest websites. Hosting, SSL, CDN and automated deployments are all included." },
  ],
  ctaTitle: "Need a website that actually works?",
  ctaBody: "Tell us about your project. We'll send you a proposal with timeline, scope and cost within 48 hours.",
  related: {
    title: "Related services",
    links: [
      { href: "/en/seo", label: "Organic SEO" },
      { href: "/en/sem", label: "SEM & Ads" },
      { href: "/en/ai", label: "AI Solutions" },
      { href: "/en/social-media", label: "Social Media" },
    ],
  },
};
