import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How It Works: Free Call, Fixed Quote, Cleanup, Monthly Close",
  description:
    "How Smart AI Bookkeeping takes over the back office for a trades business: a free call, a fixed monthly quote, a cleanup and setup, then closed books and job profit reports every month.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Smart AI Bookkeeping",
    description:
      "Free call, fixed monthly quote, cleanup and setup, then your books closed every month.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    title: "The free call.",
    body: "Twenty minutes. How your books run today, how many jobs and people you have, and where things fall behind.",
  },
  {
    title: "A fixed quote (within 48 hours).",
    body: "One monthly price and one start fee, in writing, in plain English. Nothing starts until you sign off.",
  },
  {
    title: "Cleanup and setup.",
    body: "We clean up your books, set up your jobs, vendors and bank feeds, and build the automations that take the typing out of the monthly work.",
  },
  {
    title: "Every month after.",
    body: "Your books get closed, your bills and invoices handled, and you get a job profit report you can read in five minutes. Project trades also get pay apps and the WIP schedule. You can leave after 90 days if it isn't working.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            How it works.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="space-y-14">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-navy">
                {i + 1}
              </span>
              <div>
                <h2 className="text-2xl font-bold">{step.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-navy/80">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            An accountant, with Claude AI doing the typing
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Tim O&rsquo;Rourke spent 10 years running his own accounting firm
            and built Alteryx automations as a Senior Accountant at Martin
            Brower. Claude AI handles the repetitive entry and matching. Tim
            reviews the numbers and is the person you call.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
