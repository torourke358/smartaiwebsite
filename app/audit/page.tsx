import type { Metadata } from "next";
import CalEmbed from "@/components/CalEmbed";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "The Free SaaS Audit — 45 minutes, no pitch, just the math",
  description:
    "Bring your software bills and your most annoying manual process. Leave with a one-page memo: the real annual cost of your setup, what we'd build instead, and one fixed price.",
  openGraph: {
    title: "The Free SaaS Audit — 45 minutes, no pitch, just the math",
    description:
      "List every subscription and manual process, see what one custom system would replace, and keep the memo either way.",
    url: "/audit",
  },
};

const steps = [
  {
    title: "The inventory",
    body: "Subscriptions, spreadsheets, manual steps.",
  },
  {
    title: "The math",
    body: "True annual cost of the status quo.",
  },
  {
    title: "The memo",
    body: "What to build, what it costs, what it saves — in writing within 48 hours.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "First ten each quarter, yes — it's how we earn the right to quote.",
  },
  {
    q: "Will you try to sell me?",
    a: "We'll show you the math; the memo is yours regardless.",
  },
  {
    q: "What if my process is weird?",
    a: "Weird is the specialty — our flagship client is a yacht.",
  },
  {
    q: "Who builds the app?",
    a: "Tim, with AI-assisted tooling — that's why it's days, not months.",
  },
  {
    q: "Who maintains it after?",
    a: "Optional monthly support plan, or we hand you the keys.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The Free SaaS Audit — 45 minutes, no pitch, just the math.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Bring your software bills and your most annoying manual process.
            We&rsquo;ll list every subscription you pay for, every hour of
            hand-work, and what one custom system would replace. You leave with
            a one-page memo: the real annual cost of your current setup, what
            we&rsquo;d build instead, and one fixed price. Keep the memo either
            way.
          </p>
        </div>
      </section>

      {/* Three steps */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What happens in 45 minutes
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-navy">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/80">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Who it's for / not for */}
      <section className="bg-navy/5">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Who it&rsquo;s for</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              Owner-run businesses doing real volume through manual processes
              or almost-fits software.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Who it&rsquo;s not for</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              Businesses happy with their stack (genuinely — keep it), or
              anyone shopping for the cheapest possible hourly dev.
            </p>
          </div>
        </div>
      </section>

      {/* Cal.com inline embed */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6" id="book">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Pick a time
        </h2>
        <div className="mt-8">
          <CalEmbed />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-navy/10 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.q}
                    <span className="text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-navy/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
