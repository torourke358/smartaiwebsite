import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Automations start in the hundreds",
  description:
    "The audit is free. Automations start in the hundreds — the smallest app I've built and handed over was $750. Every project fixed price, agreed in writing before work starts.",
  openGraph: {
    title: "Automations start in the hundreds — Smart AI Automations",
    description:
      "Free audit, fixed price in writing before work starts, and you own what gets built. The smallest app I've delivered was $750.",
    url: "/pricing",
  },
};

const tiers = [
  {
    name: "Single-Problem App",
    price: "Starts in the hundreds",
    body: "One app that kills one manual process. Written scope, one price, working software in days.",
    example:
      "Example: the AI receipt capture that ended two days a month of data entry was $750.",
    featured: false,
  },
  {
    name: "Operations System",
    price: "Quoted after the audit",
    body: "Multiple modules, one database — your back office in one system you own. Priced against what the manual version is costing you today.",
    example:
      "Example: inventory + maintenance + dashboards that replaced a $2,400/year subscription.",
    featured: true,
  },
  {
    name: "Support Plan",
    price: "Optional, always",
    body: "Hosting, monitoring, fixes, small improvements. Or take the keys and run it yourself — your code, your data, either way.",
    example: "",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Automations start in the hundreds.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Agencies open at $10,000 and run for months. The smallest app
            I&rsquo;ve built and handed over was <strong>$750</strong> &mdash;
            and it&rsquo;s the one that gave a captain back two days a month.
            The audit is free, and you get one fixed price in writing before
            anything starts.
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
                className={`mt-4 leading-relaxed ${
                  tier.featured ? "text-white/80" : "text-navy/80"
                }`}
              >
                {tier.body}
              </p>
              {tier.example && (
                <p
                  className={`mt-4 text-sm italic ${
                    tier.featured ? "text-white/60" : "text-navy/60"
                  }`}
                >
                  {tier.example}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
          Every project is fixed price, agreed in writing before work starts.
          If scope grows, we re-quote — you&rsquo;ll never get a surprise
          invoice. The price comes from what the manual version costs you, so
          the only way to know it is the free 45-minute audit.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
