import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How Accounting Automation Works: Call, Scope, Build, Handoff",
  description:
    "How Smart AI Bookkeeping automates your accounting department in four steps: a free call, a written scope, the $2,500 build on Claude AI, and a handoff with optional upkeep from $175/month.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Smart AI Bookkeeping",
    description:
      "Free call, written scope, $2,500 build on Claude AI, then optional upkeep from $175/month.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    title: "The free call.",
    body: "Book a time on Calendly. We walk through how your accounting department runs today and find the work that eats the most hours.",
  },
  {
    title: "The Scope (within 48 hours).",
    body: "What gets automated — and what doesn't — in plain English. Setup is a fixed $2,500 per business. You sign off before anything is built.",
  },
  {
    title: "The Build.",
    body: "The automations are built on Claude AI around your existing books and process. You see them working on your own data before handoff.",
  },
  {
    title: "The Handoff.",
    body: "Your team starts using it and we fix what real use reveals. Then choose optional upkeep from $175/month, or take the keys. You own what was built either way. If you want the bookkeeping done for you too, that's priced separately.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            How accounting automation works.
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
            Built by an accountant, on Claude AI
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Tim O&rsquo;Rourke spent 10 years running his own accounting firm
            and built Alteryx automations as a Senior Accountant at Martin
            Brower. The automations are built on Claude AI and shaped around
            how your books actually work. Our first client&rsquo;s crew uses
            what we built every day.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
