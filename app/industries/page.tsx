import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries: Restaurants, Construction & Medical Practices",
  description:
    "Smart AI Bookkeeping automates accounting for restaurants, construction companies, medical practices, travel companies and other small businesses in the Chicago suburbs and remotely.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries we automate | Smart AI Bookkeeping",
    description:
      "Accounting automation for restaurants, construction companies, medical practices and other small businesses.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Industries we automate
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping automates the accounting departments of small
            businesses. Tim O&rsquo;Rourke&rsquo;s accounting firm served
            restaurants, construction companies, doctors and travel companies
            for 10 years, so those are the books he knows best.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-xl font-bold">{industry.name}</h2>
            <p className="mt-3 leading-relaxed text-navy/80">
              {industry.automations.slice(0, 3).join(". ")}.
            </p>
            <span className="mt-4 inline-block font-semibold text-navy">
              Read more →
            </span>
          </Link>
        ))}
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Other small businesses</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Travel companies and other owner-run businesses have the same core
            work: entering bills, matching deposits, recording payroll and
            closing the month. If your books still run on hand-typed entries
            and spreadsheets, book a free call and we&rsquo;ll look at yours.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
