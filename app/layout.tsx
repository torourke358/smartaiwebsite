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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-navy antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
