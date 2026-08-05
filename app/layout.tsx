import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Custom apps for small businesses`,
    template: `%s — ${siteName}`,
  },
  description:
    "Replace the software you rent with systems you own. Custom apps for small businesses — fixed price, delivered in days, AI built in.",
  openGraph: {
    siteName,
    type: "website",
    locale: "en_US",
  },
};

// Local-search structured data: Smart AI Automations, Lake Bluff IL.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  telephone: "+1-847-894-1056",
  email: "torourke358@hotmail.com",
  founder: { "@type": "Person", name: "Tim O'Rourke" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lake Bluff",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: ["Lake Bluff IL", "Lake Forest IL", "Lake County IL", "Chicagoland"],
  description:
    "Custom apps for small businesses — fixed price, delivered in days, AI built in. Automations start in the hundreds.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
