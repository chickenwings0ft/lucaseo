// Editable content for the /ai-automation-gold-coast landing page.
// Pricing in particular is a proposed Lucaseo offer, not historical pricing —
// change the numbers/inclusions here whenever the offer changes.

export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  includes: string[];
  cta: string;
  highlight?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "A$1,500",
    priceNote: "from, one-off build",
    description: "One workflow, fully automated. The fastest way to prove AI automation works for your business.",
    includes: [
      "One automated workflow (e.g. lead response or quote follow-up)",
      "Connected to your existing CRM or inbox",
      "Tested with your real data before go-live",
      "30 days of support after launch",
    ],
    cta: "Start with one workflow",
  },
  {
    name: "Growth",
    price: "A$3,500",
    priceNote: "from, one-off build",
    description: "Multiple workflows working together across your sales and admin process.",
    includes: [
      "Everything in Starter",
      "Up to 3 connected workflows (leads, follow-up, admin or bookings)",
      "AI receptionist or chatbot setup",
      "Integration across CRM, calendar and email",
      "90 days of support and adjustments after launch",
    ],
    cta: "Automate multiple workflows",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Quoted",
    priceNote: "based on scope",
    description: "Full back-office automation, voice agents, or anything beyond a standard build.",
    includes: [
      "Everything in Growth",
      "AI voice agents and complex approval chains",
      "Custom integrations (Xero, MYOB, bespoke systems)",
      "Ongoing optimisation as your business changes",
    ],
    cta: "Get a custom quote",
  },
];

export const INTEGRATIONS = [
  "HubSpot", "Pipedrive", "Xero", "MYOB", "Google Workspace", "Slack",
  "WhatsApp Business", "Airtable", "Notion", "Zapier", "Make", "n8n",
  "OpenAI", "Claude",
];

export interface ServiceItem {
  name: string;
  problem: string;
  whatHappens: string;
  example: string;
  whoBenefits: string;
}

export const SERVICES: ServiceItem[] = [
  {
    name: "Lead Response",
    problem: "A web enquiry or missed call sits unanswered for hours. By the time someone replies, the customer has already called your competitor.",
    whatHappens: "AI replies within seconds — by text, email or chat — collects the details you need, and pushes a qualified lead straight into your CRM.",
    example: "New enquiry → AI responds in under 60 seconds → lead qualified → added to CRM → notification to your team",
    whoBenefits: "Trades, real estate, clinics — any business where the first response wins the job.",
  },
  {
    name: "Quote Follow-Up",
    problem: "Quotes go out and then get forgotten. Nobody has time to chase every one, so jobs quietly go cold.",
    whatHappens: "AI follows up automatically on a schedule you set, answers basic questions, and flags anyone genuinely interested so your team only chases warm leads.",
    example: "Quote sent → no reply in 3 days → AI follow-up sent → customer replies → team notified to close",
    whoBenefits: "Construction, trades and any quote-based business with a long sales cycle.",
  },
  {
    name: "AI Receptionist & Voice Agents",
    problem: "Calls come in outside business hours, during jobs, or all at once — and a missed call is a missed customer.",
    whatHappens: "An AI voice agent answers, understands what the caller needs, books appointments or takes messages, and only escalates to a human when it should.",
    example: "Call comes in after hours → AI receptionist answers → books appointment in calendar → confirmation sent",
    whoBenefits: "Trades, hospitality, health and beauty — businesses where the phone doesn't stop.",
  },
  {
    name: "Inbox & Email Automation",
    problem: "Inboxes fill up with invoices, enquiries, complaints and spam, all mixed together, and someone has to sort it manually.",
    whatHappens: "AI reads and classifies incoming email, drafts replies for the routine ones, and routes anything sensitive to the right person.",
    example: "Email arrives → AI classifies (enquiry, invoice, complaint) → routine reply drafted → sensitive items flagged for review",
    whoBenefits: "Professional services and any business drowning in email.",
  },
  {
    name: "Booking & Customer Communication",
    problem: "Appointment changes, reminders and review requests are all manual admin that eats into a team's day.",
    whatHappens: "AI handles bookings end-to-end: confirmations, reschedules, reminders, and a review request once the job's done.",
    example: "Appointment booked → automatic reminder 24h before → job completed → review request sent",
    whoBenefits: "Health, beauty, hospitality and tourism businesses running a daily booking calendar.",
  },
  {
    name: "Back Office Automation",
    problem: "Invoices, data entry and reporting get done manually, late at night, by whoever has time.",
    whatHappens: "AI extracts data from invoices and documents, pushes it into your accounting software, and routes anything unusual for a human to approve.",
    example: "Invoice received → AI extracts line items → pushed to Xero → flagged for approval if outside normal range",
    whoBenefits: "Any business tired of manual data entry between systems.",
  },
];

export interface IndustryItem {
  name: string;
  workflow: string;
}

export const INDUSTRIES: IndustryItem[] = [
  { name: "Trades & Construction", workflow: "Missed call → AI texts back and books a quote time → reminder sent the day before" },
  { name: "Real Estate & Property", workflow: "Website enquiry → AI qualifies buyer/renter intent → matched listings sent → agent notified" },
  { name: "Tourism & Hospitality", workflow: "Booking enquiry → AI checks availability → confirms booking → sends arrival details automatically" },
  { name: "Health & Beauty", workflow: "Appointment request → AI books into calendar → reminder 24h before → review request after" },
  { name: "Professional Services", workflow: "New enquiry email → AI qualifies and drafts a reply → meeting booked directly into calendar" },
  { name: "Technology & Startups", workflow: "Support request → AI triages by urgency → routine issues resolved → complex ones escalated" },
];

export interface ExampleWorkflow {
  tag: string;
  title: string;
  before: string;
  after: string;
}

export const EXAMPLE_WORKFLOWS: ExampleWorkflow[] = [
  {
    tag: "Example workflow — Gold Coast plumbing",
    title: "After-hours calls stop going to voicemail",
    before: "Calls after 5pm went to voicemail. Most callers hung up and rang the next plumber on Google.",
    after: "An AI receptionist answers every call, books urgent jobs straight into the calendar, and texts a confirmation — day or night.",
  },
  {
    tag: "Example workflow — Gold Coast clinic",
    title: "Reminders and reviews stop being a manual job",
    before: "Reception staff spent an hour a day on appointment reminders and chasing reviews after each visit.",
    after: "Reminders go out automatically 24 hours before each appointment, and a review request is sent the moment a visit is marked complete.",
  },
  {
    tag: "Example workflow — Gold Coast real estate business",
    title: "Website enquiries get a same-minute reply",
    before: "Weekend and evening enquiries sat unread until Monday morning, by which point buyers had already spoken to another agent.",
    after: "AI replies within a minute with matching listings, qualifies serious interest, and hands the agent a warm lead instead of a cold enquiry.",
  },
];

export interface MethodologyStep {
  number: string;
  name: string;
  desc: string;
}

export const METHODOLOGY: MethodologyStep[] = [
  { number: "01", name: "Find the bottleneck", desc: "We look at where your team actually loses time — not where we assume it is." },
  { number: "02", name: "Design the workflow", desc: "We map out exactly what should happen automatically, step by step, before building anything." },
  { number: "03", name: "Build & integrate", desc: "We connect the workflow to the tools you already use — no need to switch software." },
  { number: "04", name: "Test", desc: "We run it against real scenarios from your business before it ever touches a live customer." },
  { number: "05", name: "Launch", desc: "The workflow goes live, running quietly in the background of your business." },
  { number: "06", name: "Improve", desc: "We monitor how it performs and refine it as your business and volume change." },
];

export const FAQS = [
  { q: "What is AI automation?", a: "Software that handles repetitive tasks — replying to enquiries, following up quotes, booking appointments — automatically, using AI to understand context instead of rigid rules." },
  { q: "What can I automate?", a: "Most repetitive, rules-based work: lead response, follow-ups, bookings, email sorting, invoice data entry, and answering common questions by phone or chat." },
  { q: "How much does it cost?", a: "Builds start from A$1,500 for a single workflow, up to A$3,500+ for multiple connected workflows. Full custom builds are quoted based on scope. See the pricing section above for what's included." },
  { q: "Do I need to replace my CRM?", a: "No. We build automation on top of the tools you already use — HubSpot, Pipedrive, Google Workspace, Xero, MYOB and others — rather than asking you to switch systems." },
  { q: "Can AI answer my phone?", a: "Yes. An AI voice agent can answer calls, understand what the caller needs, book appointments, and escalate to a human whenever the situation calls for it." },
  { q: "Will AI replace staff?", a: "No. It takes over repetitive admin — data entry, follow-ups, routine replies — so your team spends their time on the parts of the job that actually need a person." },
  { q: "Is AI automation secure?", a: "Yes. We build on top of your existing, secure tools rather than storing sensitive data in new systems, and sensitive or uncertain tasks are always routed to a human for approval." },
  { q: "Can you integrate Xero, MYOB, HubSpot and similar tools?", a: "Yes. Xero, MYOB, HubSpot, Pipedrive, Google Workspace, Slack, WhatsApp Business, Airtable, Notion, Zapier, Make, n8n and more — if it has an API, we can usually connect it." },
  { q: "How long does it take?", a: "A single workflow typically takes a few weeks from scoping to launch. Multi-workflow builds take longer depending on complexity — we'll give you a clear timeline before starting." },
  { q: "Do I need a monthly fee?", a: "No ongoing fee is required to use what we build. Builds are quoted as one-off projects; ongoing support or new workflows are quoted separately as needed." },
  { q: "Do you work outside Gold Coast?", a: "Yes. We're based on the Gold Coast and know it well, but automation is built remotely and works for businesses anywhere in Australia." },
  { q: "What Gold Coast areas do you cover?", a: "All of it — Southport, Surfers Paradise, Broadbeach, Robina, Burleigh Heads, Varsity Lakes, Nerang, Coolangatta, Palm Beach, Coomera, Helensvale, Hope Island, Mermaid Beach, Miami, Carrara, Labrador and everywhere in between." },
];
