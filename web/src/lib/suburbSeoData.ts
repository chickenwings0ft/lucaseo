export interface SuburbFaq {
  q: string;
  a: string;
}

export interface SuburbProfile {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroLead: string;
  character: string;
  businessMix: string[];
  searchBehaviour: string;
  seoAngle: string;
  exampleQueries: string[];
  faqs: SuburbFaq[];
  lat: number;
  lng: number;
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
    character:
      "Surfers Paradise is the Gold Coast's tourism engine — a dense strip of high-rise apartments, hotels, restaurants and nightlife that pulls in visitors year-round, not just locals.",
    businessMix: ["Hospitality & bars", "Short-term rentals", "Restaurants & cafes", "Tourism & tours", "Retail"],
    searchBehaviour:
      "Most searches here happen in the moment — someone already standing on the esplanade typing \"best rooftop bar near me\", or asking ChatGPT where to eat tonight. Intent is immediate, and reviews decide the click.",
    seoAngle:
      "For a Surfers Paradise business, Google Business Profile and review velocity often matter more than blog content. We prioritise local pack rankings, photo and review optimisation, and making sure AI tools recommend you when a tourist asks for a suggestion on the spot.",
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
    ],
    lat: -28.0023,
    lng: 153.4145,
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
    character:
      "Broadbeach is the Gold Coast's dining and entertainment precinct — anchored by The Star casino, Oasis shopping centre and a beachfront packed with cafes and restaurants.",
    businessMix: ["Restaurants & dining", "Entertainment & events", "Retail", "Hospitality", "Professional services"],
    searchBehaviour:
      "Broadbeach searches skew heavily toward \"best of\" comparisons — \"best restaurant Broadbeach\", \"where to eat near The Star\" — because there are dozens of dining options within walking distance of each other.",
    seoAngle:
      "Standing out in Broadbeach means winning a genuinely crowded local pack. We focus on differentiating your listing — photos, unique selling points, review responses — so you're the obvious pick, not just another dot on the map.",
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
    ],
    lat: -28.0333,
    lng: 153.4308,
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
    character:
      "Southport is the Gold Coast's administrative and professional heart — home to the CBD, the Supreme Court, Gold Coast University Hospital and a growing legal, medical and education precinct.",
    businessMix: ["Legal & professional services", "Medical & allied health", "Education", "Government & corporate", "Retail"],
    searchBehaviour:
      "Searches here are less impulsive and more research-driven — someone comparing \"family lawyer Southport\" or \"GP accepting new patients Southport\" will read reviews, check credentials, and compare a handful of options before calling.",
    seoAngle:
      "For professional services in Southport, trust signals do the heavy lifting: reviews, credentials, clear service pages, and being cited as a source when someone asks Google or ChatGPT who to see for a specific problem. It's an authority game, not a foot-traffic one.",
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
    ],
    lat: -27.9667,
    lng: 153.4,
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
    character:
      "Robina is a major retail and business hub built around Robina Town Centre, with a large residential catchment stretching through Varsity Lakes and Mudgeeraba, and a business park that houses everything from clinics to corporate offices.",
    businessMix: ["Retail", "Corporate & office-based businesses", "Healthcare", "Education", "Family & residential services"],
    searchBehaviour:
      "Robina searches are mostly residents looking for something nearby — \"dentist near Robina Town Centre\", \"physio Robina\" — competing directly against large chains with bigger marketing budgets.",
    seoAngle:
      "The businesses that win in Robina aren't the ones out-advertising the chains — they're the ones out-ranking them locally, with a stronger Google Business Profile, better reviews, and content that actually answers what a nearby resident is searching for.",
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
    ],
    lat: -28.0764,
    lng: 153.3903,
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
    character:
      "Burleigh Heads is a lifestyle and boutique retail precinct — known for its surf culture, Burleigh Headland National Park, and a strip of independent cafes and stores that locals are fiercely loyal to.",
    businessMix: ["Boutique retail", "Cafes & restaurants", "Surf & lifestyle brands", "Wellness & fitness", "Tourism"],
    searchBehaviour:
      "Burleigh searches often start on Instagram and end on Google — someone sees a cafe or store on social media, then searches the name or \"best coffee Burleigh Heads\" to check reviews and opening hours before visiting.",
    seoAngle:
      "For Burleigh Heads businesses, SEO isn't separate from your social presence — it's what catches the person who saw you on Instagram but does one more search before deciding to visit. We make sure that search ends with you.",
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
    ],
    lat: -28.0994,
    lng: 153.4497,
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
    character:
      "Coolangatta is the Gold Coast's southernmost point — a laid-back surf town straddling the NSW border, home to Gold Coast Airport and some of the best point breaks in Australia.",
    businessMix: ["Tourism & accommodation", "Surf & beachwear", "Cafes & restaurants", "Airport-adjacent services", "Retail"],
    searchBehaviour:
      "Coolangatta searches split between travellers passing through the airport and surfers checking conditions — \"best cafe near Coolangatta airport\", \"Kirra surf report\" — plus a steady stream of holiday accommodation searches from both Australian and NSW border-town traffic.",
    seoAngle:
      "Being the border town and airport gateway means Coolangatta businesses get searched by people who don't know the area yet — arriving tourists, first-time visitors. Clear, well-optimised Google Business listings do a lot of the convincing before anyone even arrives.",
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
    ],
    lat: -28.1667,
    lng: 153.5333,
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
    character:
      "Palm Beach is a family beachside suburb on the southern Gold Coast that's become one of the coast's most sought-after café and lifestyle strips in the last few years, without losing its residential, laid-back character.",
    businessMix: ["Cafes & brunch spots", "Boutique retail", "Family services", "Wellness & fitness", "Real estate"],
    searchBehaviour:
      "Palm Beach searches lean heavily toward quality-of-life choices — \"best brunch Palm Beach\", \"things to do with kids Palm Beach\" — from a mix of locals and the growing number of people specifically moving here for the lifestyle.",
    seoAngle:
      "Palm Beach has grown fast, which means search competition has grown with it. Businesses that got here first without solid SEO are now getting out-ranked by newer arrivals doing it properly — this is a suburb where being early to rank still matters, but the window is closing.",
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
    ],
    lat: -28.1,
    lng: 153.45,
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
    character:
      "Nerang is the Gold Coast's original inland town — these days a trade, logistics and service hub away from the tourist strip, and the gateway to the hinterland.",
    businessMix: ["Trades & construction", "Automotive", "Industrial & logistics", "Home services", "Retail & hardware"],
    searchBehaviour:
      "Nerang searches are practical and local — \"mechanic Nerang\", \"electrician near me\", \"tile shop Nerang\" — from residents and tradies who want someone close by, not a big brand with a call centre.",
    seoAngle:
      "Trade and service businesses in Nerang compete less on flashy branding and more on being genuinely easy to find and contact fast. We focus on local pack visibility, click-to-call optimisation, and reviews that prove reliability — the things that actually win a trade job.",
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
    ],
    lat: -28.0,
    lng: 153.3333,
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
    character:
      "Coomera is one of the Gold Coast's fastest-growing residential corridors — new housing estates, young families, and the theme park precinct all within a few minutes' drive.",
    businessMix: ["Family & childcare services", "Retail & homewares", "Real estate", "Healthcare", "Trades (new-build driven)"],
    searchBehaviour:
      "Coomera searches are dominated by new residents figuring out where everything is — \"dentist near Coomera\", \"childcare Coomera\", \"removalists Coomera\" — a suburb where a huge share of the population moved in within the last few years.",
    seoAngle:
      "New residents in a growth corridor like Coomera don't have an established go-to business yet — they're actively searching and choosing for the first time. That's a genuine opportunity: rank well now, and you become their default for years, not just a one-off click.",
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
    ],
    lat: -27.8833,
    lng: 153.3167,
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
    character:
      "Helensvale is an established northern Gold Coast suburb built around its train and light rail station, Westfield shopping centre, and a mix of golf courses and family housing.",
    businessMix: ["Retail (Westfield-anchored)", "Healthcare & allied health", "Family services", "Real estate", "Hospitality"],
    searchBehaviour:
      "Helensvale searches often reference the station or the shopping centre as landmarks — \"physio near Helensvale station\", \"dentist Westfield Helensvale\" — because the transport hub is how most people orient themselves here.",
    seoAngle:
      "Businesses near a major transit and shopping hub compete for a huge amount of passing search intent, but also get lost easily among big retail chains. We make sure independent businesses show up clearly against the Westfield noise, not buried under it.",
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
    ],
    lat: -27.9083,
    lng: 153.325,
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
    character:
      "Mermaid Beach is a quiet, more affluent beachside strip between Broadbeach and Miami — known for its boutique dining scene along Hillcrest Parade rather than high-rise tourism.",
    businessMix: ["Fine dining & restaurants", "Boutique retail", "Real estate", "Beauty & wellness", "Professional services"],
    searchBehaviour:
      "Mermaid Beach searches skew toward considered, higher-value choices — \"best restaurant Mermaid Beach\", \"day spa near me\" — from a customer base that researches before booking rather than walking in on impulse.",
    seoAngle:
      "This is a suburb where the brand experience matters as much as the ranking — customers here read reviews closely and expect a premium presentation to match a premium price point. We make sure your online presence matches the quality of what you actually offer.",
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
    ],
    lat: -28.05,
    lng: 153.435,
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
    character:
      "Miami sits between Burleigh and Nerang Heads — a beachside suburb that's built a reputation around Miami Marketta and a growing, casual food and lifestyle scene.",
    businessMix: ["Food & hospitality", "Markets & events", "Boutique retail", "Surf & lifestyle", "Real estate"],
    searchBehaviour:
      "Miami searches often centre on food and evening plans — \"Miami Marketta food stalls\", \"best burger Miami Gold Coast\" — a suburb where a lot of intent is discovery-driven rather than someone already knowing exactly who they want.",
    seoAngle:
      "In a discovery-driven suburb like Miami, being findable in the moment matters more than brand recognition — someone deciding where to eat tonight is choosing from what shows up, not what they already know. That makes strong local SEO a direct revenue lever, not just a nice-to-have.",
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
    ],
    lat: -28.08,
    lng: 153.445,
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
    character:
      "Currumbin is a family-oriented southern Gold Coast suburb best known for Currumbin Wildlife Sanctuary and the Alley surf break — a community that values a laid-back, genuine local feel over a polished tourist strip.",
    businessMix: ["Eco-tourism & attractions", "Family services", "Surf & outdoor", "Cafes", "Healthcare"],
    searchBehaviour:
      "Currumbin searches mix visitor traffic heading to the Sanctuary with genuine local searches — \"cafe near Currumbin Wildlife Sanctuary\", \"family GP Currumbin\" — two very different intents sharing the same suburb name.",
    seoAngle:
      "Currumbin businesses often serve both a visitor audience (drawn by the Sanctuary and the Alley) and a loyal local one — we make sure your listing speaks to both, rather than optimising only for tourist traffic and losing the locals who keep you open year-round.",
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
    ],
    lat: -28.1333,
    lng: 153.4833,
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
    character:
      "Varsity Lakes is a master-planned lake and canal community built around Bond University — a mix of students, academics, young professionals and families in a distinctly modern, planned setting.",
    businessMix: ["Education-adjacent services", "Professional & corporate", "Cafes & dining", "Real estate", "Fitness"],
    searchBehaviour:
      "Varsity Lakes searches often reflect a highly online, research-first audience — students and professionals who compare options thoroughly before choosing — \"best cafe near Bond University\", \"physio Varsity Lakes\".",
    seoAngle:
      "This is a suburb full of people who default to searching and comparing online before doing anything — a university-adjacent, professional population with high digital literacy. Businesses that don't show up well here are invisible to an audience that would otherwise convert easily.",
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
    ],
    lat: -28.0833,
    lng: 153.3917,
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
    character:
      "Labrador is a working, Broadwater-facing suburb next to Southport — known for its marine industry, fishing community, and more affordable, no-frills residential character.",
    businessMix: ["Marine & boating", "Fishing & tackle", "Trades", "Family services", "Retail"],
    searchBehaviour:
      "Labrador searches are practical and local, often tied to the Broadwater — \"boat repairs Labrador\", \"fishing tackle near me\" — from a community that values reliability over polish.",
    seoAngle:
      "Marine and trade businesses in Labrador win on the same fundamentals as any trade: being easy to find, easy to call, and backed by real reviews. We focus there rather than over-engineering a brand presence this market doesn't need.",
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
    ],
    lat: -27.95,
    lng: 153.4083,
  },
];

export function getSuburbProfile(slug: string): SuburbProfile | undefined {
  return suburbSeoProfiles.find((s) => s.slug === slug);
}
