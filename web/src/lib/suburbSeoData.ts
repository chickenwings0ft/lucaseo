export interface SuburbFaq {
  q: string;
  a: string;
  citeLink?: { text: string; href: string };
}

export type SuburbVariant = "A" | "B" | "C";

export interface SuburbProfile {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroLead: string;
  /** Replaces the old generic "why SEO matters" boilerplate — suburb-specific opening. */
  intro: string;
  character: string;
  businessMix: string[];
  searchBehaviour: string;
  seoAngle: string;
  /** Short, punchy local-competition insight used as a callout module. */
  didYouKnow: string;
  /** Lead-in paragraph for the reviews section — the template appends a fixed closing
   * sentence that links to /nfc-review-cards, so this should read naturally into that. */
  reviewsNote: string;
  exampleQueries: string[];
  faqs: SuburbFaq[];
  lat: number;
  lng: number;
  /** Controls section order — rotated across suburbs so adjacent pages don't read as templated. */
  variant: SuburbVariant;
}

export const suburbSeoProfiles: SuburbProfile[] = [
  {
    slug: "surfers-paradise",
    name: "Surfers Paradise",
    metaTitle: "SEO for Surfers Paradise Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Surfers Paradise hospitality, tourism and retail businesses. Google Business Profile, review optimisation and AI search visibility built around how tourists actually search.",
    badge: "Local SEO · Surfers Paradise",
    heroLead:
      "Get found by the tourists and locals searching for what you do in Surfers Paradise, right now — on Google, Google Maps, and increasingly ChatGPT and Perplexity too.",
    intro:
      "Surfers Paradise is unlike any other search market on the Gold Coast, because most of the people typing into Google here have never been to the suburb before. They have no loyalty, no regular spot, no idea which rooftop bar is actually good — they're deciding in real time, from a phone, usually within a few hundred metres of wherever they already are. That's either the best or worst market to compete in, depending entirely on whether your Google presence is built for it.",
    character:
      "Surfers Paradise is the Gold Coast's tourism engine — a dense strip of high-rise apartments, hotels, restaurants and nightlife that pulls in visitors year-round, not just locals.",
    businessMix: ["Hospitality & bars", "Short-term rentals", "Restaurants & cafes", "Tourism & tours", "Retail"],
    searchBehaviour:
      "Most searches here happen in the moment — someone already standing on the esplanade typing \"best rooftop bar near me\", or asking ChatGPT where to eat tonight. Intent is immediate and almost entirely unbranded: nobody is searching your business name, because they don't know it exists yet. That means the entire fight happens inside the local pack and the AI Overview box, not further down the page where branded loyalty would normally carry you. Reviews, photos and how recently you've been active on your listing decide the click in the first three seconds.",
    seoAngle:
      "For a Surfers Paradise business, Google Business Profile and review velocity often matter more than blog content — nobody researching a last-minute dinner reads 1,500 words first. We prioritise local pack rankings, photo and review optimisation, and making sure AI tools recommend you when a tourist asks for a suggestion on the spot. The businesses that win here treat their Google listing the way a retail store treats its shopfront: updated, current, and obviously alive.",
    didYouKnow:
      "Surfers Paradise has one of the highest concentrations of near-identical hospitality listings anywhere on the Gold Coast — which means your competitor isn't the bar down the street, it's the eleven other bars Google could show instead of you in the same local pack.",
    reviewsNote:
      "In a tourist market, review velocity is almost the entire game. A guest who had a great night out has already moved on to the next bar, the next city, the next country — they're not coming back tomorrow to leave you a review once they remember.",
    exampleQueries: [
      "best breakfast Surfers Paradise",
      "rooftop bar near me Surfers Paradise",
      "things to do tonight Surfers Paradise",
      "apartment rental Surfers Paradise",
    ],
    faqs: [
      {
        q: "Do you work with hospitality and tourism businesses?",
        a: "Yes — it's one of our most common Surfers Paradise briefs. Restaurants, bars, tour operators and short-term rental managers all compete on local pack visibility and review signals, which is exactly where we focus first.",
      },
      {
        q: "Is SEO worth it if most of my customers are tourists, not locals?",
        a: "Even more so. Tourists search in real time with no brand loyalty — whoever shows up first with strong reviews wins the booking. That's a fight SEO and Google Business Profile optimisation are built for.",
      },
      {
        q: "Does getting more Google reviews actually move the needle in Surfers Paradise?",
        a: "More than almost anywhere else on the Gold Coast. With so many near-identical listings competing for the same local pack, a steady stream of recent five-star reviews is often the single biggest lever we have — bigger than most on-page changes.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0023,
    lng: 153.4145,
    variant: "A",
  },
  {
    slug: "broadbeach",
    name: "Broadbeach",
    metaTitle: "SEO for Broadbeach Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Broadbeach restaurants, entertainment and retail businesses. Stand out in one of the Gold Coast's most competitive local packs, on Google and AI search.",
    badge: "Local SEO · Broadbeach",
    heroLead:
      "Broadbeach has dozens of dining and entertainment options within a five-minute walk of each other. We make sure yours is the one Google — and your customers — pick first.",
    intro:
      "Ask Google where to eat in Broadbeach and it has to choose from dozens of genuinely good answers within a few hundred metres of each other. That's a different problem to most suburbs on this list — you're not fighting invisibility, you're fighting sameness. Everyone has a nice fit-out, a reasonable menu and a handful of reviews. The business that wins the click is the one whose listing actually looks different when it's sitting next to eleven others that look the same.",
    character:
      "Broadbeach is the Gold Coast's dining and entertainment precinct — anchored by The Star casino, Oasis shopping centre and a beachfront packed with cafes and restaurants.",
    businessMix: ["Restaurants & dining", "Entertainment & events", "Retail", "Hospitality", "Professional services"],
    searchBehaviour:
      "Broadbeach searches skew heavily toward \"best of\" comparisons — \"best restaurant Broadbeach\", \"where to eat near The Star\" — because there are dozens of dining options within walking distance of each other. People here scroll further and compare more carefully than in a suburb with fewer options, which means your third and fourth photo matter almost as much as your first, and a thin review count gets noticed against neighbours with hundreds.",
    seoAngle:
      "Standing out in Broadbeach means winning a genuinely crowded local pack, not just appearing in it. We focus on differentiating your listing — photos, unique selling points, review responses — so you're the obvious pick, not just another dot on the map. That usually means auditing what the five businesses above you are doing right, then doing it better and more consistently, rather than guessing.",
    didYouKnow:
      "Because Broadbeach's dining precinct is so dense, Google's local pack here often refreshes faster than in quieter suburbs — a few weeks of neglect on your listing is enough to slide from position two to position seven.",
    reviewsNote:
      "When ten restaurants are all within sight of each other, review count and recency become the tiebreaker Google actually uses — not your menu, not your fit-out, not how long you've been open.",
    exampleQueries: [
      "best restaurant Broadbeach",
      "where to eat near The Star casino",
      "Broadbeach cafes with parking",
      "things to do Broadbeach this weekend",
    ],
    faqs: [
      {
        q: "Can you help my restaurant rank above the other options near The Star?",
        a: "Yes — this is a genuinely competitive local pack, so it comes down to review volume, photo quality, and how well your Google Business Profile is optimised against the specific dishes and occasions people search for.",
      },
      {
        q: "Is it worth targeting AI search here too?",
        a: "Increasingly, yes. People ask ChatGPT and Perplexity for restaurant recommendations before they even open Google Maps — being cited there is becoming as important as ranking in the local pack.",
      },
      {
        q: "How many reviews do I actually need to compete in Broadbeach?",
        a: "Less about a magic number, more about pace. A restaurant with 40 reviews arriving steadily this month usually out-ranks one with 200 reviews that stopped coming in a year ago. Recency beats raw volume here.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0333,
    lng: 153.4308,
    variant: "B",
  },
  {
    slug: "southport",
    name: "Southport",
    metaTitle: "SEO for Southport Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Southport law firms, medical practices and professional services. Build the trust and authority signals that turn a comparison search into a client.",
    badge: "Local SEO · Southport",
    heroLead:
      "In Southport, customers compare their options before they call. We help your practice be the credible, well-reviewed choice they land on.",
    intro:
      "Nobody searching \"family lawyer Southport\" is planning to call the first result blind. They're building a shortlist — three or four names, a quick scan of reviews, maybe a look at the website — before picking up the phone. That research phase is where the client gets decided, often days before they ever speak to anyone, which makes Southport one of the few suburbs on the Gold Coast where SEO genuinely functions as the first stage of your sales process rather than just a visibility exercise.",
    character:
      "Southport is the Gold Coast's administrative and professional heart — home to the CBD, the Supreme Court, Gold Coast University Hospital and a growing legal, medical and education precinct.",
    businessMix: ["Legal & professional services", "Medical & allied health", "Education", "Government & corporate", "Retail"],
    searchBehaviour:
      "Searches here are less impulsive and more research-driven — someone comparing \"family lawyer Southport\" or \"GP accepting new patients Southport\" will read reviews, check credentials, and compare a handful of options before calling. Sessions are longer, bounce rates are lower, and a visitor who lands on a vague or dated service page is far more likely to quietly move to the next name on their list than they are in a suburb built on impulse decisions.",
    seoAngle:
      "For professional services in Southport, trust signals do the heavy lifting: reviews, credentials, clear service pages, and being cited as a source when someone asks Google or ChatGPT who to see for a specific problem. It's an authority game, not a foot-traffic one — which means the work is less about chasing rankings for broad terms and more about making sure every page answers the specific question a worried, comparison-shopping visitor actually came with.",
    didYouKnow:
      "Southport has one of the highest densities of legal and medical practices on the Gold Coast, which means a generic \"About Us\" page here is competing against dozens of near-identical ones — specificity is what actually separates listings.",
    reviewsNote:
      "A five-star review from a real past client does more to move a nervous, comparison-shopping searcher toward calling you than almost any other signal on the page — it's proof from someone who isn't you.",
    exampleQueries: [
      "family lawyer Southport",
      "GP accepting new patients Southport",
      "accountant near Gold Coast hospital",
      "conveyancer Southport",
    ],
    faqs: [
      {
        q: "Do you work with law firms, medical practices or other professional services?",
        a: "Yes — Southport has one of the highest concentrations of professional services on the Gold Coast, and it's a category where trust and authority signals matter more than anywhere else in the region.",
      },
      {
        q: "How is SEO different here compared to a retail or hospitality business?",
        a: "Less about \"near me\" impulse searches, more about being the credible, well-reviewed option when someone is comparing a handful of providers before making a decision that matters to them.",
      },
      {
        q: "Will a handful of strong reviews really influence someone choosing a lawyer or GP?",
        a: "More than most professionals expect. People researching a legal or medical decision are anxious and risk-averse by nature — a cluster of specific, recent reviews reassures them in a way your own marketing copy simply can't.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -27.9667,
    lng: 153.4,
    variant: "C",
  },
  {
    slug: "robina",
    name: "Robina",
    metaTitle: "SEO for Robina Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Robina retail, healthcare and business-park companies. Out-rank the big chains near Robina Town Centre with stronger local search visibility.",
    badge: "Local SEO · Robina",
    heroLead:
      "Your competitors near Robina Town Centre aren't just other local businesses — they're national chains with bigger budgets. Local SEO is how you out-rank them anyway.",
    intro:
      "Robina is one of the few places on the Gold Coast where an independent business routinely out-ranks a national chain — not because of budget, because chains almost never bother optimising the local listing for an individual store. Corporate marketing teams manage brand campaigns, not Google Business Profiles for a single Robina address. That gap is exactly where a well-run local SEO strategy does its best work.",
    character:
      "Robina is a major retail and business hub built around Robina Town Centre, with a large residential catchment stretching through Varsity Lakes and Mudgeeraba, and a business park that houses everything from clinics to corporate offices.",
    businessMix: ["Retail", "Corporate & office-based businesses", "Healthcare", "Education", "Family & residential services"],
    searchBehaviour:
      "Robina searches are mostly residents looking for something nearby — \"dentist near Robina Town Centre\", \"physio Robina\" — competing directly against large chains with bigger marketing budgets. The searcher isn't loyal to the chain, they're loyal to convenience and reassurance — whichever listing looks most current and most trusted wins, regardless of how many stores the other option has nationally.",
    seoAngle:
      "The businesses that win in Robina aren't the ones out-advertising the chains — they're the ones out-ranking them locally, with a stronger Google Business Profile, better reviews, and content that actually answers what a nearby resident is searching for. We treat the chain competitors as a local pack problem to solve, not a budget problem to match.",
    didYouKnow:
      "Because Robina Town Centre anchors so much foot traffic and search volume, a tightly optimised independent listing here can often out-rank a chain's generic location page within weeks — chains are simply slower to react at the local level.",
    reviewsNote:
      "A national chain can match your opening hours and your price, but it can't fake a wall of specific, recent, local reviews from people in your actual suburb — that's the one asset a big budget genuinely can't buy quickly.",
    exampleQueries: [
      "dentist near Robina Town Centre",
      "physio Robina",
      "childcare Robina Varsity Lakes",
      "gym near me Robina",
    ],
    faqs: [
      {
        q: "My competitors are big retail chains near Robina Town Centre — can local SEO actually compete?",
        a: "Yes, and it's usually easier than people expect. Chains often neglect local optimisation — a well-run Google Business Profile and consistent reviews regularly out-rank a national brand's generic page.",
      },
      {
        q: "Do you cover the wider Robina, Varsity Lakes and Mudgeeraba catchment?",
        a: "Yes — we treat it as one catchment, since that's how residents actually search and move between these suburbs.",
      },
      {
        q: "What's the fastest way to pull ahead of a chain competitor here?",
        a: "Reviews, almost every time. It's the one signal a corporate competitor structurally struggles to build quickly at a single-location level, and it's the one your actual local customers can give you this week.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0764,
    lng: 153.3903,
    variant: "A",
  },
  {
    slug: "burleigh-heads",
    name: "Burleigh Heads",
    metaTitle: "SEO for Burleigh Heads Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Burleigh Heads boutique retail, cafes and lifestyle brands. We connect your social media following to Google — so the search after the scroll ends with you.",
    badge: "Local SEO · Burleigh Heads",
    heroLead:
      "Someone found you on Instagram. Then they searched your name on Google before deciding to visit. We make sure that search ends with you, not a competitor two doors down.",
    intro:
      "Burleigh Heads runs on a discovery pattern most suburbs don't: someone sees your café or your store on Instagram first, then opens Google to check you're real, check your hours, and check what other people thought. That second step — the Google search after the scroll — is where a surprising number of Burleigh businesses quietly lose a customer they'd already half-won on social media, simply because their listing wasn't ready to close the deal.",
    character:
      "Burleigh Heads is a lifestyle and boutique retail precinct — known for its surf culture, Burleigh Headland National Park, and a strip of independent cafes and stores that locals are fiercely loyal to.",
    businessMix: ["Boutique retail", "Cafes & restaurants", "Surf & lifestyle brands", "Wellness & fitness", "Tourism"],
    searchBehaviour:
      "Burleigh searches often start on Instagram and end on Google — someone sees a cafe or store on social media, then searches the name or \"best coffee Burleigh Heads\" to check reviews and opening hours before visiting. It's a brand-aware search pattern, which is rarer than it sounds — most local searches are generic, but Burleigh's strong social media culture means people frequently already know your name before they type it in.",
    seoAngle:
      "For Burleigh Heads businesses, SEO isn't separate from your social presence — it's what catches the person who saw you on Instagram but does one more search before deciding to visit. We make sure that search ends with you: current hours, strong recent reviews, and photos that match the aesthetic they just saw on their feed, not a stale listing that undercuts the trust your content already built.",
    didYouKnow:
      "A huge share of Burleigh's local searches are brand-aware — people typing your actual name, not a generic category — which means a weak or outdated Google listing wastes marketing work you've already done elsewhere, not just organic traffic you never had.",
    reviewsNote:
      "Locals here are fiercely loyal once won over, and that loyalty shows up as detailed, enthusiastic reviews — the kind that do more convincing than any ad ever could, if you actually capture them.",
    exampleQueries: [
      "best coffee Burleigh Heads",
      "Burleigh Heads boutique stores",
      "yoga studio Burleigh",
      "surf shop Burleigh Heads",
    ],
    faqs: [
      {
        q: "Do you work with boutique retail and lifestyle brands?",
        a: "It's a big part of what we do in Burleigh — independent stores and cafes that have a strong social following but were invisible on Google, which is often where the actual booking or purchase decision gets made.",
      },
      {
        q: "How important is it to combine SEO with social media here?",
        a: "Very. Burleigh customers discover you on Instagram but decide on Google — reviews, opening hours, and whether you show up when they search. We make sure that final step doesn't lose the customer your social media already won.",
      },
      {
        q: "My Instagram following is strong but my Google reviews are thin — does that matter?",
        a: "It matters more than most Burleigh business owners realise. A gap that size is a red flag to a searcher doing one last check before visiting — it reads as newer or less established than your social presence suggests.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0994,
    lng: 153.4497,
    variant: "B",
  },
  {
    slug: "coolangatta",
    name: "Coolangatta",
    metaTitle: "SEO for Coolangatta Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Coolangatta tourism, accommodation and hospitality businesses. Be the listing arriving visitors and airport traffic find first.",
    badge: "Local SEO · Coolangatta",
    heroLead:
      "Coolangatta gets a constant flow of people who don't know the area yet — arriving through the airport, crossing from Tweed Heads. We make sure you're what they find first.",
    intro:
      "Every suburb on this list has some visitors, but Coolangatta is the only one where a meaningful share of your potential customers are landing at the airport with zero local knowledge, phone in hand, deciding where to go within minutes of touching down. That's a genuinely different search moment — not \"which of these options do I prefer\" but \"what even exists here\" — and it rewards a different kind of Google presence than a suburb full of regulars.",
    character:
      "Coolangatta is the Gold Coast's southernmost point — a laid-back surf town straddling the NSW border, home to Gold Coast Airport and some of the best point breaks in Australia.",
    businessMix: ["Tourism & accommodation", "Surf & beachwear", "Cafes & restaurants", "Airport-adjacent services", "Retail"],
    searchBehaviour:
      "Coolangatta searches split between travellers passing through the airport and surfers checking conditions — \"best cafe near Coolangatta airport\", \"Kirra surf report\" — plus a steady stream of holiday accommodation searches from both Australian and NSW border-town traffic. A lot of this volume is genuinely first-time, zero-context search intent — the opposite of a suburb where regulars already know exactly who they're calling.",
    seoAngle:
      "Being the border town and airport gateway means Coolangatta businesses get searched by people who don't know the area yet — arriving tourists, first-time visitors. Clear, well-optimised Google Business listings do a lot of the convincing before anyone even arrives, which makes photo quality and a complete, accurate profile more valuable here than almost anywhere else on the coast.",
    didYouKnow:
      "Because so much of Coolangatta's search traffic comes from people with zero prior local knowledge, a complete and well-photographed Google Business Profile can do the work an entire tourism brochure used to do — it's often the only information a visitor has.",
    reviewsNote:
      "A traveller with no local knowledge leans on reviews harder than almost any other searcher — they have nothing else to go on, no friend's recommendation, no past visit to draw from.",
    exampleQueries: [
      "best cafe near Coolangatta airport",
      "Kirra surf report",
      "holiday accommodation Coolangatta",
      "restaurants near Gold Coast airport",
    ],
    faqs: [
      {
        q: "Do you work with tourism and accommodation businesses right near the airport?",
        a: "Yes — Coolangatta's airport-driven traffic is a big part of the brief here. We focus on making sure you're the listing an arriving visitor finds first, not three scrolls down.",
      },
      {
        q: "Is it worth targeting Tweed Heads / NSW border searches too?",
        a: "Often, yes. Coolangatta and Tweed Heads function as one town for most search intent — we factor that catchment in rather than treating the border as a hard line.",
      },
      {
        q: "A visitor with no local knowledge trusts reviews more than usual — how do we capture that?",
        a: "Usually by making it effortless at the exact moment they're happiest — checkout, end of the surf lesson, last sip of coffee — rather than hoping they remember once they're back home.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.1667,
    lng: 153.5333,
    variant: "C",
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    metaTitle: "SEO for Palm Beach Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Palm Beach cafes, boutique retail and lifestyle brands. Rank in one of the Gold Coast's fastest-growing café strips.",
    badge: "Local SEO · Palm Beach",
    heroLead:
      "Palm Beach has grown fast — and search competition has grown with it. We make sure you're not getting out-ranked by the newer arrivals.",
    intro:
      "A few years ago, ranking well in Palm Beach was almost automatic — there simply weren't many competitors to out-rank. That window has closed. New cafes and stores keep arriving, most of them opening with a modern, well-photographed Google listing from day one, because that's just how newer operators build a business now. The suburb rewarded being early for a while; it increasingly rewards being properly optimised instead.",
    character:
      "Palm Beach is a family beachside suburb on the southern Gold Coast that's become one of the coast's most sought-after café and lifestyle strips in the last few years, without losing its residential, laid-back character.",
    businessMix: ["Cafes & brunch spots", "Boutique retail", "Family services", "Wellness & fitness", "Real estate"],
    searchBehaviour:
      "Palm Beach searches lean heavily toward quality-of-life choices — \"best brunch Palm Beach\", \"things to do with kids Palm Beach\" — from a mix of locals and the growing number of people specifically moving here for the lifestyle. A noticeable share of searchers are new residents still working out where everything is, which makes a strong first impression worth more than it would in a suburb full of long-time locals with existing habits.",
    seoAngle:
      "Palm Beach has grown fast, which means search competition has grown with it. Businesses that got here first without solid SEO are now getting out-ranked by newer arrivals doing it properly — this is a suburb where being early to rank still matters, but the window is closing. We treat every Palm Beach brief with some urgency for exactly this reason.",
    didYouKnow:
      "Palm Beach's rapid growth means its local pack reshuffles faster than in more settled suburbs — new, well-optimised competitors can and do appear within months, not years.",
    reviewsNote:
      "In a suburb this many people are actively discovering for the first time, your review count is often the only track record a new resident has to go on.",
    exampleQueries: [
      "best brunch Palm Beach",
      "things to do with kids Palm Beach",
      "Palm Beach boutique shopping",
      "personal trainer Palm Beach",
    ],
    faqs: [
      {
        q: "Palm Beach feels like it has a new cafe or store opening every month — how do you keep up?",
        a: "By treating your Google Business Profile and reviews as a living asset, not a set-and-forget listing. In a fast-growing suburb, the businesses that update and engage consistently are the ones that keep their ranking.",
      },
      {
        q: "Do you work with newer businesses that just moved to Palm Beach?",
        a: "Yes, and it's often the best time to start — a fresh, well-optimised listing can out-rank an established competitor who's neglected theirs.",
      },
      {
        q: "How do I build review count quickly against newer, faster-moving competitors?",
        a: "By removing the friction entirely rather than just asking more often — the businesses pulling ahead here are the ones that make leaving a review a ten-second action, not a favour.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.1,
    lng: 153.45,
    variant: "A",
  },
  {
    slug: "nerang",
    name: "Nerang",
    metaTitle: "SEO for Nerang Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Nerang trades, automotive and industrial businesses. Win the job with local pack visibility, not a bigger ad budget.",
    badge: "Local SEO · Nerang",
    heroLead:
      "In Nerang, the job goes to whoever is easiest to find and call — not the biggest brand. We make sure that's you.",
    intro:
      "Nobody searches \"mechanic Nerang\" looking for a brand story. They want someone close, available, and clearly reliable enough to trust with their car or their job today. That's a refreshingly honest search market compared to most — no aesthetic to maintain, no content funnel to build — just a local pack result that answers the question fast, backed by proof that you actually do good work.",
    character:
      "Nerang is the Gold Coast's original inland town — these days a trade, logistics and service hub away from the tourist strip, and the gateway to the hinterland.",
    businessMix: ["Trades & construction", "Automotive", "Industrial & logistics", "Home services", "Retail & hardware"],
    searchBehaviour:
      "Nerang searches are practical and local — \"mechanic Nerang\", \"electrician near me\", \"tile shop Nerang\" — from residents and tradies who want someone close by, not a big brand with a call centre. These are high-intent, close-to-decision searches: someone typing this has a problem right now and is choosing who to call within the next few minutes, not researching for later.",
    seoAngle:
      "Trade and service businesses in Nerang compete less on flashy branding and more on being genuinely easy to find and contact fast. We focus on local pack visibility, click-to-call optimisation, and reviews that prove reliability — the things that actually win a trade job, rather than a redesigned website nobody in a hurry is going to read properly.",
    didYouKnow:
      "Trade searches convert unusually fast compared to retail or hospitality — most Nerang searchers call within the first two or three results they look at, which makes local pack position worth more per click than almost any other category on this list.",
    reviewsNote:
      "A trade review rarely talks about ambience — it talks about whether the job was done properly, on time, for the price quoted, which is exactly the proof a nervous new customer is scanning for before they call a stranger into their home or hand over their car.",
    exampleQueries: [
      "mechanic Nerang",
      "electrician near me Nerang",
      "tile shop Nerang",
      "plumber Nerang Hinze Dam area",
    ],
    faqs: [
      {
        q: "Do you work with trades and industrial businesses, not just retail and hospitality?",
        a: "Yes — Nerang is one of our most trade-heavy suburbs. Plumbers, mechanics, electricians and builders all rank on the same fundamentals: local pack visibility, reviews, and being fast to find on a phone.",
      },
      {
        q: "My business is more B2B (I supply other trades) — does local SEO still help?",
        a: "Yes. Other trades and businesses search Google the same way consumers do when they need a supplier — being the well-reviewed, easy-to-find option still wins the call.",
      },
      {
        q: "Do reviews really matter for a trade business, or just reputation by word of mouth?",
        a: "They matter more now than word of mouth alone ever did — word of mouth doesn't show up when someone searches \"plumber near me\" at 7am with a burst pipe. A strong review count does.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0,
    lng: 153.3333,
    variant: "B",
  },
  {
    slug: "coomera",
    name: "Coomera",
    metaTitle: "SEO for Coomera Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Coomera family services, retail and trades. Become the default choice for one of the Gold Coast's fastest-growing suburbs.",
    badge: "Local SEO · Coomera",
    heroLead:
      "Thousands of new residents in Coomera are searching for a dentist, gym or trades person for the first time. Rank well now, and you become their default for years.",
    intro:
      "Most local SEO is a fight to take a customer away from someone they already use. Coomera is the rare exception — a huge share of the people searching here don't have a go-to dentist, gym or trades person yet, because they only just moved in. There's no incumbent to dislodge. The opportunity isn't winning them over, it's simply being visible at the exact moment they're choosing for the first time.",
    character:
      "Coomera is one of the Gold Coast's fastest-growing residential corridors — new housing estates, young families, and the theme park precinct all within a few minutes' drive.",
    businessMix: ["Family & childcare services", "Retail & homewares", "Real estate", "Healthcare", "Trades (new-build driven)"],
    searchBehaviour:
      "Coomera searches are dominated by new residents figuring out where everything is — \"dentist near Coomera\", \"childcare Coomera\", \"removalists Coomera\" — a suburb where a huge share of the population moved in within the last few years. Search volume here keeps climbing as the estates keep filling, which is unusual — most suburbs plateau, Coomera's local search demand is still actively growing.",
    seoAngle:
      "New residents in a growth corridor like Coomera don't have an established go-to business yet — they're actively searching and choosing for the first time. That's a genuine opportunity: rank well now, and you become their default for years, not just a one-off click. We treat early, consistent visibility here as compounding — today's new resident is a repeat customer for a decade if you get the first impression right.",
    didYouKnow:
      "Coomera's population growth means its local search volume is still rising year over year, unlike most established Gold Coast suburbs where demand has levelled off — ranking well here keeps paying off as the suburb keeps filling in.",
    reviewsNote:
      "A new resident with zero local loyalty leans almost entirely on reviews to decide who to trust first — there's no existing relationship to fall back on, for you or for your competitors.",
    exampleQueries: [
      "dentist near Coomera",
      "childcare Coomera",
      "removalists Coomera",
      "new home builder Coomera",
    ],
    faqs: [
      {
        q: "Coomera is growing so fast — does that make SEO harder or easier?",
        a: "Easier, in a real sense — thousands of new residents are searching for a dentist, gym or trades person for the first time, with no existing loyalty. Ranking well here captures customers before a competitor does.",
      },
      {
        q: "Do you work with businesses that specifically target new-build homeowners?",
        a: "Yes — furniture, landscaping, home services and trades aimed at new residents are some of the most common Coomera briefs we get.",
      },
      {
        q: "How do I earn trust from residents who've never heard of my business?",
        a: "Reviews do most of that work for you. A new resident can't ask a neighbour who's only lived there six months either — your Google rating becomes the closest thing to a recommendation they can actually find.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -27.8833,
    lng: 153.3167,
    variant: "C",
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    metaTitle: "SEO for Helensvale Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Helensvale healthcare, retail and family services. Stand out against the Westfield noise, not buried under it.",
    badge: "Local SEO · Helensvale",
    heroLead:
      "Helensvale businesses compete for huge passing search intent near the station and Westfield — and get lost in it just as easily. We make sure you don't.",
    intro:
      "Helensvale has no shortage of search volume — the station and Westfield see to that. The actual problem is getting noticed inside it. An independent business here isn't competing against silence, it's competing against a shopping centre full of recognisable chain names that Google already trusts by default, which means the bar for standing out is quietly higher than it looks.",
    character:
      "Helensvale is an established northern Gold Coast suburb built around its train and light rail station, Westfield shopping centre, and a mix of golf courses and family housing.",
    businessMix: ["Retail (Westfield-anchored)", "Healthcare & allied health", "Family services", "Real estate", "Hospitality"],
    searchBehaviour:
      "Helensvale searches often reference the station or the shopping centre as landmarks — \"physio near Helensvale station\", \"dentist Westfield Helensvale\" — because the transport hub is how most people orient themselves here. That landmark-based search pattern is worth designing content and listings around directly, rather than relying purely on the suburb name.",
    seoAngle:
      "Businesses near a major transit and shopping hub compete for a huge amount of passing search intent, but also get lost easily among big retail chains. We make sure independent businesses show up clearly against the Westfield noise, not buried under it — which usually means leaning harder into specific services and genuine local reviews than a chain store ever bothers to.",
    didYouKnow:
      "A lot of Helensvale's search volume orients around the station and Westfield as landmarks rather than the suburb name alone — a listing that doesn't account for that pattern is invisible to a meaningful slice of local demand.",
    reviewsNote:
      "Against a shopping centre full of national chains with generic, low-engagement listings, a cluster of specific, recent local reviews is often the single clearest signal that you're the better choice.",
    exampleQueries: [
      "physio near Helensvale station",
      "dentist Westfield Helensvale",
      "family lawyer Helensvale",
      "cafe near Helensvale light rail",
    ],
    faqs: [
      {
        q: "How do independent businesses compete with the shops inside Westfield Helensvale?",
        a: "By owning the local searches the mall doesn't optimise for — specific services, specific problems, and reviews. A well-run Google Business Profile regularly beats a chain store's generic page.",
      },
      {
        q: "Do you work with healthcare and allied health practices in Helensvale?",
        a: "Yes — it's a strong category here, and one where trust signals (reviews, credentials, clear service pages) make the real difference in getting the appointment booked.",
      },
      {
        q: "Can a small independent business really out-rank a chain store inside Westfield?",
        a: "Regularly, yes — chains rarely manage individual-location reviews or photos well. A handful of strong, specific recent reviews frequently beats a chain listing with hundreds of generic, years-old ones.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -27.9083,
    lng: 153.325,
    variant: "A",
  },
  {
    slug: "mermaid-beach",
    name: "Mermaid Beach",
    metaTitle: "SEO for Mermaid Beach Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Mermaid Beach fine dining, boutique retail and wellness brands. Match your online presence to your premium offering.",
    badge: "Local SEO · Mermaid Beach",
    heroLead:
      "Mermaid Beach customers research carefully and expect a premium presentation before they book. We make sure your listing matches what you actually offer.",
    intro:
      "Mermaid Beach customers don't impulse-book. They're paying a premium price and they expect to see premium proof before they commit — which means a blurry photo, a slow reply to a review, or a three-year-old listing does more damage here than it would in a suburb built on convenience rather than considered choice. The bar isn't just to be found, it's to look like you're worth what you charge the moment you're found.",
    character:
      "Mermaid Beach is a quiet, more affluent beachside strip between Broadbeach and Miami — known for its boutique dining scene along Hillcrest Parade rather than high-rise tourism.",
    businessMix: ["Fine dining & restaurants", "Boutique retail", "Real estate", "Beauty & wellness", "Professional services"],
    searchBehaviour:
      "Mermaid Beach searches skew toward considered, higher-value choices — \"best restaurant Mermaid Beach\", \"day spa near me\" — from a customer base that researches before booking rather than walking in on impulse. Expect longer research sessions, more photo scrutiny, and a searcher who reads several reviews in detail rather than just glancing at the star rating.",
    seoAngle:
      "This is a suburb where the brand experience matters as much as the ranking — customers here read reviews closely and expect a premium presentation to match a premium price point. We make sure your online presence matches the quality of what you actually offer, because in Mermaid Beach, a mismatch between your listing and your actual offering is the fastest way to lose a booking you'd otherwise have won.",
    didYouKnow:
      "Searchers in Mermaid Beach typically spend longer reading individual reviews in full rather than skimming star ratings — the content of your reviews matters here almost as much as the average score itself.",
    reviewsNote:
      "A considered buyer reads the actual words in your reviews, not just the star count — which means the detail and specificity of what past customers wrote matters as much as how many of them wrote it.",
    exampleQueries: [
      "best restaurant Mermaid Beach",
      "day spa near me Mermaid Beach",
      "Hillcrest Parade dining",
      "beachfront property Mermaid Beach",
    ],
    faqs: [
      {
        q: "Mermaid Beach customers seem to expect a premium experience online too — how do you handle that?",
        a: "We treat your Google Business Profile, photos and review presentation as part of your brand, not just a listing — for a suburb like this, the polish matters as much as the ranking.",
      },
      {
        q: "Do you work with fine dining and higher-end retail specifically?",
        a: "Yes — it's a large part of the Mermaid Beach brief, and a category where review quality and photography often matter more than raw review volume.",
      },
      {
        q: "Does review quantity matter less here than in other suburbs?",
        a: "Volume still helps, but detail matters more. A handful of specific, glowing reviews that describe the actual experience usually convinces a Mermaid Beach searcher faster than a large number of generic one-liners.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.05,
    lng: 153.435,
    variant: "B",
  },
  {
    slug: "miami",
    name: "Miami",
    metaTitle: "SEO for Miami Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Miami hospitality, market stalls and lifestyle brands. Be findable in the moment someone decides where to eat tonight.",
    badge: "Local SEO · Miami",
    heroLead:
      "Someone deciding where to eat tonight in Miami is choosing from what shows up, not what they already know. We make sure that's you.",
    intro:
      "Miami's biggest search moments happen around 5pm on a weeknight, when someone who hasn't decided what they're doing tonight opens Google with genuinely no plan yet. That's a different kind of opportunity to most suburbs on this list — you're not trying to steal a customer from a known competitor, you're trying to be the suggestion that fills a blank. Whoever shows up best in that exact moment wins a customer who had no preference five minutes earlier.",
    character:
      "Miami sits between Burleigh and Nerang Heads — a beachside suburb that's built a reputation around Miami Marketta and a growing, casual food and lifestyle scene.",
    businessMix: ["Food & hospitality", "Markets & events", "Boutique retail", "Surf & lifestyle", "Real estate"],
    searchBehaviour:
      "Miami searches often centre on food and evening plans — \"Miami Marketta food stalls\", \"best burger Miami Gold Coast\" — a suburb where a lot of intent is discovery-driven rather than someone already knowing exactly who they want. These are low-loyalty, high-opportunity searches — nobody's defending an existing favourite, which means the door is genuinely open.",
    seoAngle:
      "In a discovery-driven suburb like Miami, being findable in the moment matters more than brand recognition — someone deciding where to eat tonight is choosing from what shows up, not what they already know. That makes strong local SEO a direct revenue lever, not just a nice-to-have, because every undecided search is a customer with no existing loyalty to overcome.",
    didYouKnow:
      "A large share of Miami's food and hospitality searches happen with genuinely undecided intent — the searcher has no preferred option yet, which is rarer and more valuable than it sounds.",
    reviewsNote:
      "When someone has no preference yet, reviews are what tip an undecided search into a booking — they're doing the convincing your menu or your branding hasn't had the chance to do yet.",
    exampleQueries: [
      "Miami Marketta food stalls",
      "best burger Miami Gold Coast",
      "things to do Miami Gold Coast",
      "boutique stores Miami Gold Coast",
    ],
    faqs: [
      {
        q: "Do you work with food stalls and hospitality businesses connected to Miami Marketta?",
        a: "Yes — Marketta-adjacent hospitality is one of the most common Miami briefs, and a great example of where local SEO drives same-night decisions.",
      },
      {
        q: "Is Miami's business scene similar to Burleigh Heads?",
        a: "Similar energy, but Miami skews more casual and discovery-driven — the SEO approach leans harder into 'what's happening tonight' search behaviour rather than established brand loyalty.",
      },
      {
        q: "How do I win an undecided searcher who has no idea who I am yet?",
        a: "Reviews, almost entirely. With no brand recognition to lean on, your star rating and recent review count are doing the convincing a familiar name would normally do for you.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.08,
    lng: 153.445,
    variant: "C",
  },
  {
    slug: "currumbin",
    name: "Currumbin",
    metaTitle: "SEO for Currumbin Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Currumbin tourism, family and outdoor businesses. Speak to visitors and locals without losing either one.",
    badge: "Local SEO · Currumbin",
    heroLead:
      "Currumbin businesses often serve both Sanctuary visitors and loyal locals. We make sure your listing speaks to both, not just one.",
    intro:
      "Most suburbs on this list have one dominant type of searcher. Currumbin genuinely has two, sharing the same suburb name and often the same Google listing — a Sanctuary visitor who'll never come back, and a local who'll be a regular for years. Optimise purely for one and you quietly lose the other, which is a mistake we see a lot of Currumbin businesses make without realising it.",
    character:
      "Currumbin is a family-oriented southern Gold Coast suburb best known for Currumbin Wildlife Sanctuary and the Alley surf break — a community that values a laid-back, genuine local feel over a polished tourist strip.",
    businessMix: ["Eco-tourism & attractions", "Family services", "Surf & outdoor", "Cafes", "Healthcare"],
    searchBehaviour:
      "Currumbin searches mix visitor traffic heading to the Sanctuary with genuine local searches — \"cafe near Currumbin Wildlife Sanctuary\", \"family GP Currumbin\" — two very different intents sharing the same suburb name. A strategy built for one audience without accounting for the other tends to leave real revenue on the table from whichever group got deprioritised.",
    seoAngle:
      "Currumbin businesses often serve both a visitor audience (drawn by the Sanctuary and the Alley) and a loyal local one — we make sure your listing speaks to both, rather than optimising only for tourist traffic and losing the locals who keep you open year-round, or vice versa in the quieter months.",
    didYouKnow:
      "Currumbin is one of the few Gold Coast suburbs where tourist-driven and genuinely local search intent sit side by side in the same local pack — most suburbs lean clearly one way or the other.",
    reviewsNote:
      "A Sanctuary visitor and a local resident read your reviews for different reasons — one wants reassurance in an unfamiliar place, the other wants confirmation their regular spot is still worth it — and a healthy review mix reassures both.",
    exampleQueries: [
      "cafe near Currumbin Wildlife Sanctuary",
      "family GP Currumbin",
      "Currumbin Alley surf report",
      "things to do Currumbin with kids",
    ],
    faqs: [
      {
        q: "Do you work with businesses near Currumbin Wildlife Sanctuary that rely on visitor traffic?",
        a: "Yes — and we make sure that visitor-facing SEO doesn't come at the expense of the local searches that keep you busy outside peak tourist times.",
      },
      {
        q: "Is Currumbin more locals or tourists, from a business perspective?",
        a: "Genuinely both — which is why we build the SEO strategy around both intents rather than picking one and hoping the other follows.",
      },
      {
        q: "Should I ask visitors and locals for reviews differently?",
        a: "The ask can be identical — what matters is making it effortless for both, right at the moment they're happiest, rather than relying on a visitor to remember once they've flown home.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.1333,
    lng: 153.4833,
    variant: "A",
  },
  {
    slug: "varsity-lakes",
    name: "Varsity Lakes",
    metaTitle: "SEO for Varsity Lakes Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Varsity Lakes businesses near Bond University. Reach a highly online, research-first audience that compares before choosing.",
    badge: "Local SEO · Varsity Lakes",
    heroLead:
      "Varsity Lakes is full of people who default to searching and comparing online first. If you don't show up well here, you're invisible to an audience that converts easily.",
    intro:
      "Varsity Lakes skews younger, more online and more comparison-driven than almost any other suburb on this list — a direct consequence of sitting next to a university campus. Nobody here is calling around to ask a neighbour for a recommendation; they're opening three tabs and comparing. That's unusually good news for a business with a genuinely strong Google presence, and unusually bad news for one without it.",
    character:
      "Varsity Lakes is a master-planned lake and canal community built around Bond University — a mix of students, academics, young professionals and families in a distinctly modern, planned setting.",
    businessMix: ["Education-adjacent services", "Professional & corporate", "Cafes & dining", "Real estate", "Fitness"],
    searchBehaviour:
      "Varsity Lakes searches often reflect a highly online, research-first audience — students and professionals who compare options thoroughly before choosing — \"best cafe near Bond University\", \"physio Varsity Lakes\". Expect multiple listings compared side by side in the same session, with reviews read in detail rather than skimmed.",
    seoAngle:
      "This is a suburb full of people who default to searching and comparing online before doing anything — a university-adjacent, professional population with high digital literacy. Businesses that don't show up well here are invisible to an audience that would otherwise convert easily, because they're already primed to research, decide and book entirely online without ever needing a phone call.",
    didYouKnow:
      "Varsity Lakes' Bond University-adjacent population skews toward unusually high digital literacy for a Gold Coast suburb — comparison shopping online is the default behaviour here, not the exception.",
    reviewsNote:
      "A research-first audience treats your review count as data, not decoration — they're actively comparing it against the two or three other listings open in their other tabs.",
    exampleQueries: [
      "best cafe near Bond University",
      "physio Varsity Lakes",
      "student accommodation Varsity Lakes",
      "gym Varsity Lakes",
    ],
    faqs: [
      {
        q: "Do you work with businesses that target Bond University students and staff?",
        a: "Yes — it's a distinct, digitally-savvy audience, and one of the more search-driven customer bases on the Gold Coast.",
      },
      {
        q: "Is the Varsity Lakes market different from other Gold Coast suburbs?",
        a: "Yes — higher digital literacy and more comparison-shopping before a decision, so clear, well-reviewed listings convert unusually well here.",
      },
      {
        q: "Does a research-first audience actually read reviews in detail, or just check the star rating?",
        a: "In our experience, genuinely in detail — this is one of the few audiences on the Gold Coast where the specific wording of a review measurably affects the decision, not just the average score.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -28.0833,
    lng: 153.3917,
    variant: "B",
  },
  {
    slug: "labrador",
    name: "Labrador",
    metaTitle: "SEO for Labrador Businesses | Gold Coast SEO — Lucaseo",
    metaDescription:
      "Local SEO for Labrador marine, trade and family businesses. Win on the fundamentals: easy to find, easy to call, backed by real reviews.",
    badge: "Local SEO · Labrador",
    heroLead:
      "Labrador rewards businesses that are easy to find, easy to call, and backed by real reviews — not the flashiest brand. That's exactly where we focus.",
    intro:
      "Labrador doesn't reward polish, and that's genuinely useful to know before spending a dollar on SEO here. Searchers want to know you're real, you're close, and you'll do the job properly — a flashy brand campaign is wasted effort in a market that values straightforward proof over presentation. That makes Labrador one of the most honest, cost-efficient suburbs on this list to rank well in, if you focus on the right fundamentals instead of chasing the wrong ones.",
    character:
      "Labrador is a working, Broadwater-facing suburb next to Southport — known for its marine industry, fishing community, and more affordable, no-frills residential character.",
    businessMix: ["Marine & boating", "Fishing & tackle", "Trades", "Family services", "Retail"],
    searchBehaviour:
      "Labrador searches are practical and local, often tied to the Broadwater — \"boat repairs Labrador\", \"fishing tackle near me\" — from a community that values reliability over polish. Expect short, functional search sessions that end in a phone call rather than extended browsing.",
    seoAngle:
      "Marine and trade businesses in Labrador win on the same fundamentals as any trade: being easy to find, easy to call, and backed by real reviews. We focus there rather than over-engineering a brand presence this market doesn't need — the return on a polished rebrand is low here compared to simply being the clearly best-reviewed, easiest-to-reach option.",
    didYouKnow:
      "Labrador's smaller search volume compared to neighbouring Southport actually works in a well-optimised business's favour — less competition means a solid local pack position is both easier to win and harder for a new competitor to dislodge.",
    reviewsNote:
      "In a community that values reliability over polish, a review that simply says \"did exactly what they said, on time\" carries more weight than any amount of brand messaging could.",
    exampleQueries: [
      "boat repairs Labrador",
      "fishing tackle near me Labrador",
      "marina Labrador Broadwater",
      "boat storage Gold Coast Labrador",
    ],
    faqs: [
      {
        q: "Do you work with marine and boating businesses specifically?",
        a: "Yes — Labrador's Broadwater location makes marine services one of its defining industries, and a category we understand well.",
      },
      {
        q: "Labrador feels like a smaller market than Southport next door — is local SEO still worth it?",
        a: "Yes. Smaller search volume means less competition too — a well-optimised listing can dominate a Labrador-specific search far more easily than the same effort would in a bigger suburb.",
      },
      {
        q: "Is it worth the effort chasing reviews in a smaller, less competitive market like this?",
        a: "Arguably more worth it — with fewer competitors to begin with, even a modest, steady flow of genuine reviews is usually enough to put real distance between you and whoever's in second place.",
        citeLink: { text: "See how our NFC review cards make this effortless", href: "/nfc-review-cards" },
      },
    ],
    lat: -27.95,
    lng: 153.4083,
    variant: "C",
  },
];

export function getSuburbProfile(slug: string): SuburbProfile | undefined {
  return suburbSeoProfiles.find((s) => s.slug === slug);
}
