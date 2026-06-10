import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "How It Works — Days, not months",
  description:
    "The Audit, the Scope, the Build, the Handoff. Modern stack plus AI-assisted development is why we deliver custom software in days, not months.",
  openGraph: {
    title: "How It Works — Days, not months. Here's how.",
    description:
      "Free audit, fixed-price scope in 48 hours, working software in days, then the keys are yours.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    title: "The Audit (free, 45 min).",
    body: "We find the highest-ROI problem and put real numbers on it.",
  },
  {
    title: "The Scope (within 48 hours).",
    body: "What v1 does — and doesn't do — in plain English, with one fixed price. You sign off before anything is built.",
  },
  {
    title: "The Build (days, not months).",
    body: "Modern stack plus AI-assisted development is why we're fast. You see working software early, on your phone, with your data.",
  },
  {
    title: "The Handoff.",
    body: "Your team starts using it. We fix what real use reveals. Then: support plan, or the keys. You own the code and the data either way.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Days, not months. Here&rsquo;s how.
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
            Why we&rsquo;re fast and agencies aren&rsquo;t
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Traditional shops quote $25,000+ and 4–10 months because
            they&rsquo;re paying teams to hand-write everything. We build with
            AI-assisted tooling on a proven stack (Next.js, Supabase, Claude)
            and keep scope honest. Same quality bar — our flagship
            client&rsquo;s crew uses these apps every single day — a fraction
            of the timeline and price.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
