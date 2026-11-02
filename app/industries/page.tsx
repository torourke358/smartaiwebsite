import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Trades We Serve: HVAC, Plumbing, Electrical, Roofing, Concrete & More",
  description:
    "Smart AI Bookkeeping runs the back office for trades businesses: HVAC, plumbing, electrical, roofing, concrete, landscaping, general contractors and other trades, in the Chicago suburbs and remotely.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Trades we serve | Smart AI Bookkeeping",
    description:
      "The back office for service trades and project trades.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Trades we serve
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping runs the back office for trades businesses.
            Every trade has the same problem: jobs, crews, materials and
            getting paid, with books that fall behind while the owner is out
            on the job.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
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
          <h2 className="text-2xl font-bold sm:text-3xl">Don&rsquo;t see your trade?</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Painters, flooring, fencing, pool, garage door, cleaning,
            remodelers: if you run crews on jobs and the books are behind,
            book a free call and we&rsquo;ll look at yours.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
