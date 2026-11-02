import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing: Back Office for the Trades from $1,000/Month",
  description:
    "Smart AI Bookkeeping pricing for trades businesses: Books $1,000/month, Back Office $2,000/month, Controller $4,000/month, plus a start fee from $2,500. Fixed monthly price, no long contract.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Smart AI Bookkeeping",
    description:
      "Books $1,000/month. Back Office $2,000/month. Controller $4,000/month. Start fee from $2,500.",
    url: "/pricing",
  },
};

const tiers = [
  {
    name: "Books",
    price: "$1,000/month",
    fit: "Smaller service trades",
    items: [
      "Monthly books, closed and reviewed",
      "Bank and credit card reconciliations",
      "Job profit report every month",
    ],
    featured: false,
  },
  {
    name: "Back Office",
    price: "$2,000/month",
    fit: "Most trades businesses",
    items: [
      "Everything in Books",
      "Bill pay and vendor bills coded to jobs",
      "Customer invoicing and collections follow-up",
      "Payroll entries",
      "Project trades: pay applications, retainage and the WIP schedule",
    ],
    featured: true,
  },
  {
    name: "Controller",
    price: "$4,000/month",
    fit: "Bigger or bonded contractors",
    items: [
      "Everything in Back Office",
      "Cash forecast",
      "Over/under billing review on every job",
      "Statements ready for your bank and bonding company",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            One fixed monthly price for your back office.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping runs the books and back office for trades
            businesses. Plans start at <strong>$1,000/month</strong>. Most
            contractors pick <strong>Back Office at $2,000/month</strong>,
            less than a third of what an in-house bookkeeper costs once
            payroll taxes and benefits are added.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-xl border p-8 shadow-sm ${
                tier.featured
                  ? "border-accent bg-navy text-white"
                  : "border-navy/10 bg-white"
              }`}
            >
              <h2 className="text-xl font-bold">{tier.name}</h2>
              <p
                className={`mt-2 text-2xl font-bold ${
                  tier.featured ? "text-accent" : "text-navy"
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`mt-1 text-sm ${
                  tier.featured ? "text-white/70" : "text-navy/60"
                }`}
              >
                {tier.fit}
              </p>
              <ul
                className={`mt-6 space-y-2 leading-relaxed ${
                  tier.featured ? "text-white/85" : "text-navy/80"
                }`}
              >
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Start fee: from $2,500</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              One time, when you sign up. It covers:
            </p>
            <ul className="mt-3 space-y-2 text-lg leading-relaxed text-navy/80">
              <li>Cleaning up your books so the first month starts clean</li>
              <li>Setting up your jobs, vendors and bank feeds</li>
              <li>
                Automations built on Claude AI that take the typing out of
                the monthly work
              </li>
            </ul>
            <p className="mt-4 leading-relaxed text-navy/70">
              If your books are several months behind, the start fee is quoted
              on the free call, before you commit to anything.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What moves the price</h2>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-navy/80">
              <li>More than about 15 open jobs at once</li>
              <li>More than about 25 people on payroll</li>
              <li>More than one company</li>
              <li>Certified payroll</li>
            </ul>
            <p className="mt-4 leading-relaxed text-navy/70">
              You get one fixed monthly number in writing before you start. No
              surprise bills.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-xl border-2 border-accent bg-white p-8 text-center">
          <h2 className="text-2xl font-bold">Founding clients: $500/month off</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            The first three trades clients get $500/month off for their first
            three months, in exchange for letting us write up the results as a
            case study. You can leave after 90 days if it isn&rsquo;t working.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
