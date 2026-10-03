// Single source of truth for the business facts. AI assistants piece together
// who we are from every page, so the name, description, price and location
// must read identically everywhere — change them here, not in page copy.
export const siteName = "Smart AI Bookkeeping";
export const tagline = "Accounting automation for small businesses";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smartaiforaccountants.com";

export const founder = "Tim O'Rourke";
export const location = "Lake Bluff, IL";
export const serviceArea = "the North Shore and Chicago suburbs, and remotely";

export const setupPrice = "$2,500";
export const upkeepPrice = "$175/month";

// One-sentence description reused in metadata, structured data and llms.txt.
export const businessDescription =
  "Smart AI Bookkeeping automates the accounting and bookkeeping departments of small businesses for a one-time $2,500 setup, with optional upkeep from $175/month. Founded by Tim O'Rourke in Lake Bluff, Illinois, serving the North Shore and Chicago suburbs in person and clients anywhere remotely.";

export const email = "torourke358@hotmail.com";
export const phone = "847-894-1056";

export const bookingUrl = "https://calendly.com/timorourke";
// Booking buttons go straight to Calendly. The /audit page keeps the contact
// form for people who'd rather write than pick a time.
export const calHref = bookingUrl;

export const linkedInUrl = "https://www.linkedin.com/in/timothyjorourke";
export const youTubeUrl = "https://www.youtube.com/@smartaiautomationstor";

export const nav = [
  { label: "Industries", href: "/industries" },
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
