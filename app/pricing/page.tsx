import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing you can see before you call",
  description:
    "Single-problem apps from $1,995 fixed. Operations systems $5,000–$8,000 fixed. Optional support from $150/month. Every project fixed price, agreed in writing.",
  openGraph: {
    title: "Pricing you can see before you call — Smart AI Automations",
    description:
      "Fixed prices, in writing, before work starts. Apps from $1,995; operations systems $5,000–$8,000.",
    url: "/pricing",
  },
};

const tiers = [
  {
    name: "Single-Problem App",
    price: "from $1,995 fixed",
    body: "One app that kills one manual process. Written scope, one price, working software in days.",
    example:
      "Example: AI receipt capture that ended two days a month of data entry.",
    featured: false,
  },
  {
    name: "Operations System",
    price: "$5,000–$8,000 fixed",
    body: "Multiple modules, one database — your back office in one system you own.",
    example:
      "Example: inventory + maintenance + dashboards that replaced a $2,400/year subscription.",
    featured: true,
  },
  {
    name: "Support Plan",
    price: "$150–$500/month, optional",
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
            Pricing you can see before you call.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Agencies hide pricing because their projects start at $10,000 and
            run for months. Ours don&rsquo;t, so here it is.
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
          invoice. Consulting at $175/hr available when a fixed price
          doesn&rsquo;t fit.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
