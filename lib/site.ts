// Single source of truth for the business facts. AI assistants piece together
// who we are from every page, so the name, description, price and location
// must read identically everywhere — change them here, not in page copy.
export const siteName = "Smart AI Bookkeeping";
export const tagline = "The back office for the trades";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smartaiforaccountants.com";

export const founder = "Tim O'Rourke";
export const location = "Lake Bluff, IL";
export const serviceArea = "the North Shore and Chicago suburbs, and remotely";

// Monthly back-office pricing, locked by Tim 2 Nov 2026.
export const booksPrice = "$1,000/month";
export const backOfficePrice = "$2,000/month";
export const controllerPrice = "$4,000/month";
export const startFee = "$2,500";

// One-sentence description reused in metadata, structured data and llms.txt.
export const businessDescription =
  "Smart AI Bookkeeping runs the back office for trades businesses (HVAC, plumbing, electrical, roofing, concrete, landscaping and other contractors): monthly books, job costing, billing, pay applications and WIP schedules, for a fixed monthly fee from $1,000/month. Founded by Tim O'Rourke in Lake Bluff, Illinois, serving the North Shore and Chicago suburbs in person and clients anywhere remotely.";

export const email = "torourke358@hotmail.com";
export const phone = "847-894-1056";

export const bookingUrl = "https://calendly.com/timorourke/new-meeting-1";
// Booking buttons go straight to Calendly. The /audit page keeps the contact
// form for people who'd rather write than pick a time.
export const calHref = bookingUrl;

export const linkedInUrl = "https://www.linkedin.com/in/timothyjorourke";
export const youTubeUrl = "https://www.youtube.com/@smartaiautomationstor";

export const nav = [
  { label: "Trades", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Study", href: "/case-study" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = [
  ...nav,
  { label: "Work", href: "/work" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/audit" },
];
