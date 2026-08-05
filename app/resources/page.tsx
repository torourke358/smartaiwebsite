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

      <CtaBand />
    </>
  );
}
