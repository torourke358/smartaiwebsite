import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import { bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Accounting Automation Call",
  description:
    "Book a free call with Tim O'Rourke of Smart AI Bookkeeping on Calendly, or send a message. Walk through your accounting department and see what can be automated for a $2,500 setup.",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Book a Free Call | Smart AI Bookkeeping",
    description:
      "Walk through your accounting department with Tim O'Rourke and see which parts can be automated.",
    url: "/audit",
  },
};

const steps = [
  {
    title: "How it runs today",
    body: "Who enters what, which software you use, and where the month-end gets stuck.",
  },
  {
    title: "What can be automated",
    body: "The repetitive entry, coding and matching work that Claude AI can take over.",
  },
  {
    title: "What it costs",
    body: "A one-time $2,500 setup, optional upkeep from $175/month, and bookkeeping work from $175/month if you want it.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Book a free call.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Pick a time on Calendly and we&rsquo;ll walk through your
            accounting department together: what&rsquo;s done by hand today,
            what can be automated, and what it would cost. Rather write? Use
            the form below.
          </p>
          <a
            href={bookingUrl}
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Pick a time on Calendly
          </a>
        </div>
      </section>

      {/* Three steps */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          What we cover on the call
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

      {/* Contact form — emailed straight to Tim */}
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6" id="book">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Or send a message
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center leading-relaxed text-navy/70">
          Tell me how to reach you and a couple of sentences about what
          you&rsquo;d like to talk about. It lands in my inbox right away and I
          reply within one business day.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <p className="text-lg leading-relaxed text-navy/80">
            Questions first? Read the{" "}
            <Link href="/faq" className="font-semibold underline-offset-4 hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
