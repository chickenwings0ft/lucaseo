export interface CaseImageData {
  src?: string;
  alt: string;
  label: string;
}

export interface ClientCaseStudy {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  tags: string[];
  website?: string;
  challenge: string;
  whatWeDid: string[];
  result: string;
  /** Live product embed, shown only when set (currently just Macheta's ordering system). */
  embedUrl?: string;
  embedLabel?: string;

  /** Top-of-page product/website showcase — the section people actually want to see. */
  showcaseTitle: string;
  showcaseImages: CaseImageData[];
  showcaseFrame: "browser" | "plain";
  showcaseUrl?: string;

  /** Optional supporting image next to "The challenge" (alternates side with processImage). */
  challengeImage?: CaseImageData;
  /** Optional supporting image next to "What we did". */
  processImage?: CaseImageData;
}

export const clients: ClientCaseStudy[] = [
  {
    slug: "macheta",
    name: "Macheta",
    industry: "Smash burger restaurant",
    tagline: "Their own ordering system, so delivery apps don't take the cut.",
    tags: ["Custom Software"],
    website: "https://macheta.es",
    challenge:
      "Macheta already had loyal, returning customers — that was never the problem. But every takeaway order placed through a delivery app handed over a big chunk of the sale in commission, and the orders that came by phone instead ate up staff time during the busiest part of service.",
    whatWeDid: [
      "Built a custom ordering platform from scratch: an admin dashboard, a kitchen display system (KDS), and a public ordering screen customers use directly",
      "Brought takeaway ordering in-house and online, so customers order straight from Macheta instead of a third-party app",
      "Designed the system around how their kitchen actually runs day to day, not a generic template",
    ],
    result:
      "Macheta now takes orders directly — no delivery-app commission, less time answering the phone mid-rush, and a system built entirely around their own kitchen. It's also the first project in what's now becoming one of Lucaseo's own services: custom software for businesses that need more than an off-the-shelf tool.",
    embedUrl: "https://www.macheta.es/seleccion-dia",
    embedLabel: "Macheta's live ordering system",
    showcaseTitle: "The system we built",
    showcaseFrame: "plain",
    showcaseImages: [
      { alt: "Macheta admin dashboard", label: "Admin dashboard" },
      { alt: "Macheta kitchen display system", label: "Kitchen display system (KDS)" },
      { alt: "Macheta public ordering screen", label: "Public ordering screen" },
    ],
    challengeImage: { alt: "Macheta kitchen during service", label: "Kitchen / phone-order photo" },
  },
  {
    slug: "roots",
    name: "Roots",
    industry: "Spanish restaurant — breakfast & lunch",
    tagline: "Building the visibility to justify opening for dinner.",
    tags: ["SEO", "Website"],
    challenge:
      "Roots had breakfast and lunch service running well, but wanted to add dinner to the mix. Opening extra hours only makes sense if enough people actually know to come — and their online presence wasn't built to carry that.",
    whatWeDid: [
      "Rebuilt their website to properly represent the full business, not just breakfast and lunch",
      "Local SEO strategy focused on getting Roots found for the searches that matter for each service — including the dinner crowd they wanted to reach",
    ],
    result:
      "Roots now has a website and search visibility built to support all three services — giving them the foundation to open for dinner with real visibility behind it, instead of just hoping people find out.",
    showcaseTitle: "The website we built",
    showcaseFrame: "browser",
    showcaseUrl: "rootsrestaurant.com.au",
    showcaseImages: [
      { alt: "Roots homepage", label: "Homepage" },
      { alt: "Roots menu page", label: "Menu page" },
      { alt: "Roots website on mobile", label: "Mobile view" },
    ],
    challengeImage: { alt: "Roots dining room", label: "Restaurant interior photo" },
    processImage: { alt: "Roots local search ranking", label: "Local search ranking screenshot" },
  },
  {
    slug: "brilla",
    name: "Brilla",
    industry: "Local Gold Coast business",
    tagline: "A brand-new website, paired with a paid strategy built to bring customers in from day one.",
    tags: ["Website", "SEM"],
    website: undefined,
    challenge:
      "Brilla needed a complete website built from the ground up, and a way to start bringing in new customers as soon as it launched — not wait months for organic traffic to catch up.",
    whatWeDid: [
      "Built their entire website from scratch, structured around how they actually acquire customers",
      "Designed a Google Ads (SEM) strategy focused squarely on new business, not just clicks",
    ],
    result:
      "A new website paired with a paid strategy built specifically to drive new customers from launch, rather than a site that just sits there waiting to be found.",
    showcaseTitle: "The website we built",
    showcaseFrame: "browser",
    showcaseUrl: "brilla.com.au",
    showcaseImages: [
      { alt: "Brilla homepage", label: "Homepage" },
      { alt: "Brilla service page", label: "Service page" },
      { alt: "Brilla website on mobile", label: "Mobile view" },
    ],
    challengeImage: { alt: "Brilla brand / product photo", label: "Brand / product photo" },
    processImage: { alt: "Brilla Google Ads campaign", label: "Google Ads campaign screenshot" },
  },
];

export function getClient(slug: string): ClientCaseStudy | undefined {
  return clients.find((c) => c.slug === slug);
}
