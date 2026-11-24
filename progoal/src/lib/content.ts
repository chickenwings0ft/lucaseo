// Placeholder content — replace with real academy details before launch.
export const academy = {
  name: "ProGoal Academy",
  tagline: "Where future footballers are made",
  city: "Gold Coast",
  region: "QLD",
  country: "Australia",
  phone: "+61 400 000 000",
  email: "hello@progoalacademy.com.au",
  url: "https://progoalacademy.com.au",
  instagram: "https://instagram.com/progoalacademy",
} as const;

export const stats = [
  { value: "600+", label: "Players trained" },
  { value: "12", label: "Qualified coaches" },
  { value: "4–18", label: "Ages welcome" },
  { value: "35", label: "Players into NPL & rep teams" },
] as const;

export type Program = {
  slug: string;
  name: string;
  ages: string;
  blurb: string;
  points: string[];
  price: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    slug: "mini-kickers",
    name: "Mini Kickers",
    ages: "Ages 4–6",
    blurb: "Fun-first sessions that build coordination, confidence and a love of the ball.",
    points: ["45-min weekly sessions", "Small groups (max 8)", "Games-based learning"],
    price: "From $25 / session",
  },
  {
    slug: "junior-development",
    name: "Junior Development",
    ages: "Ages 7–12",
    blurb: "Technical foundations: first touch, 1v1, passing patterns and game understanding.",
    points: ["2 sessions per week", "Termly skills report", "Internal match days"],
    price: "From $220 / term",
    featured: true,
  },
  {
    slug: "elite-pathway",
    name: "Elite Pathway",
    ages: "Ages 13–18",
    blurb: "High-performance training for players targeting NPL, rep and scholarship football.",
    points: ["3 sessions per week", "Video analysis & S&C", "Trial preparation"],
    price: "From $390 / term",
  },
];

export const extras = [
  {
    name: "School Holiday Camps",
    text: "Full-day camps every school holidays with themed skill days and tournaments.",
  },
  {
    name: "Private Coaching",
    text: "1-on-1 or small-group sessions tailored to a player's position and goals.",
  },
  {
    name: "Goalkeeper Academy",
    text: "Specialist keeper training: handling, distribution, footwork and diving.",
  },
] as const;

export const pillars = [
  {
    title: "Ball mastery first",
    text: "Every player gets hundreds of touches per session. Technique under pressure is the foundation of everything.",
  },
  {
    title: "Game-real training",
    text: "Small-sided games and decision-making drills that mirror what actually happens on match day.",
  },
  {
    title: "Character on and off the pitch",
    text: "Respect, resilience and teamwork are coached as deliberately as passing and shooting.",
  },
  {
    title: "Measured progress",
    text: "Clear development goals and termly feedback, so parents always know how their child is tracking.",
  },
] as const;

export const coaches = [
  { name: "Head Coach", role: "Academy Director", cred: "UEFA B Licence", initials: "HC" },
  { name: "Technical Lead", role: "Junior Development", cred: "FA Advanced Licence", initials: "TL" },
  { name: "Pathway Coach", role: "Elite Pathway", cred: "Former NPL player", initials: "PC" },
  { name: "Keeper Coach", role: "Goalkeeper Academy", cred: "Football Australia GK Licence", initials: "GK" },
] as const;

export const schedule = [
  { day: "Monday", sessions: ["4:00 Mini Kickers", "5:00 Junior Dev"] },
  { day: "Tuesday", sessions: ["4:30 Junior Dev", "6:00 Elite Pathway"] },
  { day: "Wednesday", sessions: ["4:00 Mini Kickers", "5:00 Goalkeepers"] },
  { day: "Thursday", sessions: ["4:30 Junior Dev", "6:00 Elite Pathway"] },
  { day: "Saturday", sessions: ["8:00 Mini Kickers", "9:00 Junior Dev", "10:30 Elite Pathway"] },
] as const;

export const testimonials = [
  {
    quote:
      "My son went from hiding from the ball to asking for it every game. The coaches genuinely care about each kid.",
    name: "Parent",
    detail: "Junior Development, U10",
  },
  {
    quote:
      "The Elite Pathway got me ready for NPL trials — the video sessions completely changed how I read the game.",
    name: "Player",
    detail: "Elite Pathway, U16",
  },
  {
    quote:
      "Organised, professional and so much fun. Holiday camps are now the highlight of our school breaks.",
    name: "Parent",
    detail: "Holiday Camps",
  },
] as const;

export const faqs = [
  {
    q: "Does my child need experience to join?",
    a: "Not at all. We group players by age and ability, so complete beginners and experienced club players both get the right level of challenge.",
  },
  {
    q: "How does the free trial work?",
    a: "Book a trial below and we'll match your child to a session that suits their age and level. There's no cost and no obligation to sign up.",
  },
  {
    q: "What should players bring?",
    a: "Boots or runners, shin pads, a water bottle and a hat for sunny days. We provide balls, bibs and all training equipment.",
  },
  {
    q: "Are your coaches accredited?",
    a: "Yes. All coaches hold recognised coaching licences, a current Working with Children (Blue Card) check and first-aid certification.",
  },
  {
    q: "Can I use Active Kids or Fair Play vouchers?",
    a: "Where eligible, yes — get in touch and we'll help you apply your voucher to your enrolment.",
  },
] as const;
