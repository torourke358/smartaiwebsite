import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Todo from "@/components/Todo";
import { allFaqItems, faqSections } from "@/lib/faq";
import { faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trades Bookkeeping FAQ: Cost, Trades, Process",
  description:
    "Straight answers about Smart AI Bookkeeping: what the back office covers, monthly pricing from $1,000/month, which trades we serve, and who Tim O'Rourke is.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Smart AI Bookkeeping",
    description:
      "What's covered, what it costs, which trades, and who does the work.",
    url: "/faq",
  },
};

// Plain lowercase-hyphen anchors so each answer can be linked to directly.
function anchor(q: string) {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(allFaqItems)} />

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Straight answers about having Smart AI Bookkeeping run your back
            office.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6">
        {faqSections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold sm:text-3xl">{section.heading}</h2>
            <div className="mt-8 space-y-10">
              {section.items.map((item) => (
                <div key={item.q} id={anchor(item.q)}>
                  <h3 className="text-xl font-bold">{item.q}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-navy/80">
                    {item.a}
                  </p>
                  {item.todo && (
                    <div className="mt-4">
                      <Todo>{item.todo}</Todo>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
