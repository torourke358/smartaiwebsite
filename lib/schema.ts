import {
  businessDescription,
  email,
  founder,
  linkedInUrl,
  siteName,
  siteUrl,
  youTubeUrl,
} from "@/lib/site";

const orgId = `${siteUrl}/#organization`;
const businessId = `${siteUrl}/#business`;
const founderId = `${siteUrl}/#tim-orourke`;

// Site-wide entity graph: the Organization, the local ProfessionalService it
// operates, and Tim as founder. Every fact here comes from lib/site.ts.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteName,
      url: siteUrl,
      description: businessDescription,
      email,
      founder: { "@id": founderId },
      sameAs: [linkedInUrl, youTubeUrl],
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: siteName,
      url: siteUrl,
      description: businessDescription,
      email,
      telephone: "+1-847-894-1056",
      parentOrganization: { "@id": orgId },
      founder: { "@id": founderId },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lake Bluff",
        addressRegion: "IL",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Lake Bluff, IL" },
        { "@type": "City", name: "Lake Forest, IL" },
        { "@type": "AdministrativeArea", name: "Lake County, IL" },
        { "@type": "AdministrativeArea", name: "North Shore, Chicago" },
        { "@type": "AdministrativeArea", name: "Chicago metropolitan area" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Bookkeeping for contractors",
        "Bookkeeping for trades businesses",
        "Construction job costing",
        "Pay applications",
        "WIP schedules",
        "Progress billing and retainage",
        "QuickBooks",
        "Claude AI",
      ],
      makesOffer: {
        "@type": "Offer",
        name: "Back Office for trades businesses",
        price: "2000",
        priceCurrency: "USD",
        description:
          "Monthly back office for trades businesses: books, bill pay, invoicing and collections, payroll entries, pay applications and WIP. $2,000/month; Books plan $1,000/month; Controller $4,000/month; start fee from $2,500.",
      },
      sameAs: [linkedInUrl, youTubeUrl],
    },
    {
      "@type": "Person",
      "@id": founderId,
      name: founder,
      jobTitle: "Founder",
      worksFor: { "@id": orgId },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "DePaul University",
      },
      sameAs: [linkedInUrl, youTubeUrl],
    },
  ],
};

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
