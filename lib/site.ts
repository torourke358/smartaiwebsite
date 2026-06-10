export const siteName = "Smart AI Automations";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://smartaiautomations.com";

// TODO(env): set NEXT_PUBLIC_CAL_URL so booking buttons go straight to Cal.com.
// Until then, "Book the Free SaaS Audit" buttons route to the /audit page.
export const calUrl = process.env.NEXT_PUBLIC_CAL_URL || "";
export const calHref = calUrl || "/audit";

export const nav = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Study", href: "/case-study" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];
