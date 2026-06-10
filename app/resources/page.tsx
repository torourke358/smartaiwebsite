import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import MailerLiteForm from "@/components/MailerLiteForm";

export const metadata: Metadata = {
  title: "Resources — The Software Bill Worksheet",
  description:
    "Find out what your software stack really costs in 10 minutes: every subscription, every manual hour, totaled into one honest annual number. Free.",
  openGraph: {
    title: "The Software Bill Worksheet — Smart AI Automations",
    description:
      "Every subscription, every manual hour, totaled into one honest annual number. Free — we'll email it to you.",
    url: "/resources",
  },
};

const upcomingPosts = [
  "Custom App vs. SaaS: the 3-Year Math",
  "What a Custom App Actually Costs in 2026 (Real Prices)",
  "How a Yacht Captain Cancelled His Software Subscription",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The Software Bill Worksheet
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Find out what your stack really costs in 10 minutes: every
            subscription, every manual hour, totaled into one honest annual
            number. Free — we&rsquo;ll email it to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <MailerLiteForm />
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Articles coming soon
          </h2>
          <ul className="mt-8 space-y-4">
            {upcomingPosts.map((title) => (
              <li
                key={title}
                className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold">{title}</p>
                <p className="mt-1 text-sm text-navy/50">Coming soon</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
