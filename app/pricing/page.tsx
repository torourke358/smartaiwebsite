import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing: $2,500 Setup, Optional Upkeep from $175/Month",
  description:
    "Smart AI Bookkeeping pricing: a one-time $2,500 setup to automate your accounting department, optional upkeep from $175/month, and bookkeeping work from $175/month.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Smart AI Bookkeeping",
    description:
      "One-time $2,500 setup. Optional upkeep from $175/month. Bookkeeping work from $175/month.",
    url: "/pricing",
  },
};

const tiers = [
  {
    name: "Setup",
    price: "$2,500 one time",
    body: "We automate your accounting department: the repetitive entry, coding, matching and month-end steps that fit your business. Fixed price per business.",
    featured: true,
  },
  {
    name: "Upkeep",
    price: "From $175/month",
    body: "Optional. Keeps your automations running, with about an hour of upkeep a month for fixes and small changes when a bank, vendor or app changes something.",
    featured: false,
  },
  {
    name: "Bookkeeping work",
    price: "Starting at $175/month",
    body: "Optional. If you'd rather not run the books yourself, Tim does the ongoing accounting work as well.",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            $2,500 to automate your accounting department.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping charges a one-time <strong>$2,500</strong>{" "}
            setup per business. Upkeep is optional and starts at{" "}
            <strong>$175/month</strong>. If you want the bookkeeping done for
            you too, that starts at <strong>$175/month</strong>.
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
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">What the $2,500 setup includes</h2>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-navy/80">
              <li>One business and the accounting system you already use</li>
              <li>Up to 3 automated workflows, chosen on the free call</li>
              <li>Up to 5 bank and credit-card accounts connected</li>
              <li>Testing on your own data and a 1-hour handoff walkthrough</li>
              <li>30 days of fixes after handoff</li>
              <li>About 2–4 weeks from the day access is granted</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Quoted separately</h2>
            <ul className="mt-4 space-y-2 text-lg leading-relaxed text-navy/80">
              <li>Catching up or cleaning up past months</li>
              <li>Additional businesses, or more than 3 workflows</li>
              <li>Ongoing bookkeeping work</li>
            </ul>
            <p className="mt-4 leading-relaxed text-navy/70">
              Payment is 50% at signing and 50% at handoff. Time beyond the
              included upkeep hour is $175/hour, only with your OK first.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-navy/80">
          Upkeep is optional. You own what gets built, and you can keep it
          running yourself if you prefer. The first step is a free call.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
