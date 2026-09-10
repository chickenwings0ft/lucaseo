import type { ServicePage } from "../types";

export const aiEn: ServicePage = {
  slug: "en/ai",
  metaTitle: "AI Solutions for Business | Lucaseo",
  metaDescription: "AI agents, voice bots, process automation and custom AI development. Technology that works for your business 24/7, reducing costs and multiplying results.",
  eyebrow: "Artificial Intelligence",
  title: "AI that *works for your business, not against it*",
  lead: "From automating repetitive tasks to deploying AI agents that handle customer service 24/7 — we build AI solutions that save time, reduce errors and scale your operations without scaling your team.",
  primaryCta: "I want AI in my business",
  secondaryCta: "See solutions",
  stats: [
    { n: "73%", l: "Reduction in manual tasks", c: "In the first 30 days of implementation" },
    { n: "24/7", l: "Full availability", c: "AI agents that never sleep, never get sick" },
    { n: "89%", l: "Autonomous resolution rate", c: "Only escalates to humans when necessary" },
    { n: "14d", l: "Average implementation time", c: "From first meeting to go-live" },
  ],
  intro: {
    tag: "The practical side of AI",
    title: "Not hype. Not theory. Real AI that solves real problems",
    paragraphs: [
      "The AI conversation is full of noise. Everyone talks about ChatGPT, but very few are actually using AI to solve real business problems. We bridge that gap — we take proven AI technology and apply it to the specific challenges your business faces.",
      "Whether it's automating the 4 hours per day your team spends on repetitive tasks, deploying a voice bot that answers every phone call at the first ring, or building a custom AI model trained on your own data — we focus on measurable impact, not impressive demos.",
    ],
  },
  cards: {
    tag: "Solutions",
    title: "Four ways AI can transform your business",
    items: [
      { icon: "⚙️", title: "Process automation", desc: "Connect your tools and eliminate manual tasks. Email classification, report generation, data sync — all running automatically." },
      { icon: "🤖", title: "AI agents", desc: "Digital employees that qualify leads, schedule meetings, handle support tickets and execute workflows — 24/7 with full context." },
      { icon: "🎙️", title: "Voice agents", desc: "AI-powered phone agents that answer calls, book appointments and handle inquiries with a natural voice indistinguishable from a human." },
      { icon: "🧠", title: "Custom AI", desc: "Bespoke AI solutions: predictive models, document processing, intelligent search, recommendation systems — built for your specific needs." },
      { icon: "📊", title: "AI analytics", desc: "Ask questions about your business in natural language and get instant answers. Sales this month, open tickets, campaign performance — no dashboards needed." },
      { icon: "🔄", title: "AI integration", desc: "We connect AI capabilities to your existing tools: CRM, ERP, website, WhatsApp. No migration needed — AI works with what you already have." },
    ],
  },
  steps: {
    tag: "Process",
    title: "From idea to impact in weeks, not months",
    dark: true,
    items: [
      { n: "01", t: "Discovery", d: "We map your processes, identify bottlenecks and quantify the time and money lost on tasks AI can handle." },
      { n: "02", t: "Solution design", d: "We define the architecture, tools and integrations. You know exactly what we'll build, how it'll work and what it'll cost." },
      { n: "03", t: "Build & integrate", d: "We implement the solution using your existing tools. No disruptions, no migrations, no learning curves for your team." },
      { n: "04", t: "Optimize & evolve", d: "We monitor performance, refine the AI and add new capabilities as your team discovers more opportunities." },
    ],
  },
  bullets: {
    tag: "Our philosophy",
    title: "Technology with purpose, not for the sake of it",
    items: [
      "We start with the business problem, not the technology — if you don't need AI, we tell you",
      "Working prototype in 1-2 weeks — validate before you commit",
      "All code, models and data are your property — no vendor lock-in",
      "We work with your existing tools — no forced migrations",
      "Complete documentation so your team can maintain and evolve the solution",
      "We measure real business impact, not technical metrics",
    ],
  },
  faqs: [
    { q: "Does my business really need AI?", a: "Maybe, maybe not. That's what the discovery phase is for. If your team spends significant time on repetitive tasks, if you miss calls or leads outside business hours, or if you need to scale operations without hiring — AI can help. If your challenge is better solved with simpler tools, we'll tell you." },
    { q: "How much does an AI solution cost?", a: "It varies by complexity. A basic automation setup starts around $3,000. An AI agent with CRM integration is typically $8,000-15,000. A fully custom AI system can range from $15,000 to $50,000. We always do a free discovery session to give you a fixed quote before starting." },
    { q: "Is it secure?", a: "We implement the same security measures you'd use with an employee: granular permissions, audit logs, encryption in transit and at rest, and the ability to revoke access at any time. The AI only sees and does what you allow." },
    { q: "What languages does it support?", a: "Our AI solutions work in 50+ languages natively, including English, Spanish, French, German, Portuguese and more. Language detection is automatic — the AI responds in the user's language without additional configuration." },
    { q: "What happens after delivery?", a: "We offer maintenance and evolution plans. AI models need periodic retraining with new data to maintain accuracy. We include performance monitoring, updates and technical support." },
  ],
  ctaTitle: "Ready to put AI to work?",
  ctaBody: "We do a free discovery of your business. If AI is the right solution, we present a plan with a fixed budget. If it's not, we tell you.",
  related: {
    title: "Related services",
    links: [
      { href: "/en/web", label: "Web Design" },
      { href: "/en/seo", label: "Organic SEO" },
      { href: "/en/sem", label: "SEM & Ads" },
      { href: "/en/social-media", label: "Social Media" },
    ],
  },
};
