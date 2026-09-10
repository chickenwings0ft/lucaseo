import type { ServicePage } from "../types";

export const semEn: ServicePage = {
  slug: "en/sem",
  metaTitle: "SEM & Paid Ads | Lucaseo — Google Ads, Meta, TikTok",
  metaDescription: "Paid advertising campaigns that generate real ROI. Google Ads, Meta Ads, TikTok Ads and ChatGPT Ads with daily optimization and transparent reporting.",
  eyebrow: "SEM & Paid Advertising",
  title: "Put your business in front of *the right people, right now*",
  lead: "Paid ads are the fastest way to generate leads and sales. But without strategy, segmentation and constant optimization, it's like burning cash. We make sure every dollar works.",
  primaryCta: "I want campaigns that sell",
  secondaryCta: "See platforms",
  stats: [
    { n: "5.1x", l: "Average ROAS across all platforms", c: "For every dollar invested, $5.10 in return" },
    { n: "-40%", l: "Average CPA reduction", c: "Vs. campaigns managed internally by the client" },
    { n: "< 7d", l: "Time to first results", c: "Leads and sales from the first week" },
    { n: "24h", l: "Daily optimization", c: "We adjust bids, audiences and budgets every single day" },
  ],
  intro: {
    tag: "Beyond boosting posts",
    title: "There's a difference between spending on ads and investing in ads",
    paragraphs: [
      "Boosting a post from Instagram is not advertising. It's giving money to Meta without strategy, without advanced segmentation and without optimization. The result: you reach a lot of people who will never buy from you.",
      "A professional paid ads campaign starts by understanding who you want to reach, what you want them to do and how much you're willing to pay for that action. Then comes the scroll-stopping creative, the click-generating copy and the daily optimization that lowers cost per result week after week.",
    ],
  },
  cards: {
    tag: "Platforms",
    title: "Where your audience is, we are",
    items: [
      { icon: "🔍", title: "Google Ads", desc: "Search, Display, Shopping and YouTube. Capture active purchase intent at the exact moment someone searches for what you sell." },
      { icon: "📸", title: "Meta Ads", desc: "Facebook and Instagram. The most powerful segmentation platform in the market. Perfect for awareness, leads and remarketing." },
      { icon: "🎵", title: "TikTok Ads", desc: "The highest engagement channel with the lowest CPM. Native video creatives that generate virality and conversion." },
      { icon: "💬", title: "ChatGPT Ads", desc: "The next frontier. Position your brand in AI-generated answers. Early adopter advantage at historically low costs." },
      { icon: "💼", title: "LinkedIn Ads", desc: "B2B precision advertising. Segment by job title, company, industry and professional interests." },
      { icon: "🔄", title: "Cross-platform remarketing", desc: "Re-engage visitors across all platforms with sequential messaging that closes the funnel." },
    ],
  },
  steps: {
    tag: "Methodology",
    title: "From strategy to positive ROAS",
    dark: true,
    items: [
      { n: "01", t: "Strategy & setup", d: "Define objectives, audiences, budget and funnel. Set up pixel, conversions API and custom audiences." },
      { n: "02", t: "Creatives & testing", d: "Launch 3-5 ad variations per audience. A/B test creatives, copy, formats and CTAs." },
      { n: "03", t: "Daily optimization", d: "Analyze metrics every day. Pause what doesn't work, scale what does, adjust bids to maximize ROAS." },
      { n: "04", t: "Reporting & scale", d: "Weekly report with results, learnings and next steps. Scale winning campaigns to new audiences." },
    ],
  },
  bullets: {
    tag: "Our advantage",
    title: "We don't manage budgets. We generate returns",
    items: [
      "Complete measurement setup: Google Tag Manager, GA4, offline conversions and attribution",
      "Creatives designed to stop the scroll — not repurposed material",
      "Scientific testing: every decision is based on data, never on intuition",
      "Transparent reports showing the real impact on your business",
      "Flat fee, no percentage on your ad spend — our incentive is your ROAS",
      "No lock-in contracts — if we don't deliver, you leave",
    ],
  },
  faqs: [
    { q: "How much budget do I need to start?", a: "We recommend a minimum of $500-1,000/month in ad spend to test, optimize and get significant data. Our management fee is independent of the budget." },
    { q: "How quickly will I see results?", a: "First conversions usually come in the first week. The algorithm learning period is 7-14 days. From week three, campaigns start stabilizing and improving progressively. Optimal ROAS is usually reached between months 2 and 3." },
    { q: "Do you create the ads or do I?", a: "We create everything: static ads, carousels, videos and motion graphics. Adapted to each platform format and designed to convert. You approve before anything goes live." },
    { q: "Can I pause campaigns anytime?", a: "Yes. Campaigns can be paused at any time. No lock-ins, no penalties. If you need to stop for any reason, just let us know." },
    { q: "Do you also do SEO?", a: "Yes. We recommend combining SEO (long-term, organic) with SEM (immediate, paid). Together they cover the entire funnel. We manage both in an integrated way to maximize overall return." },
  ],
  ctaTitle: "Your ads not generating ROI?",
  ctaBody: "We audit your current campaigns for free. We'll tell you exactly what's failing and how to improve your ROAS.",
  related: {
    title: "Related services",
    links: [
      { href: "/en/seo", label: "Organic SEO" },
      { href: "/en/social-media", label: "Social Media" },
      { href: "/en/web", label: "Web Design" },
      { href: "/en/ai", label: "AI Solutions" },
    ],
  },
};
