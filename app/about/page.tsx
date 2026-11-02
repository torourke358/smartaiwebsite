import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";
import { calHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tim O'Rourke, Founder",
  description:
    "Tim O'Rourke ran his own accounting firm for 10 years, was a Senior Accountant at Martin Brower, and holds an MS in Accounting from DePaul. He founded Smart AI Bookkeeping in Lake Bluff, IL.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tim O'Rourke | Smart AI Bookkeeping",
    description:
      "10 years running an accounting firm, Senior Accountant at Martin Brower, MS in Accounting from DePaul. Now running the back office for trades businesses.",
    url: "/about",
  },
};

const facts = [
  {
    title: "Order Up Profits, 10 years",
    body: "Ran his own accounting firm for a decade. Clients were mostly restaurants, plus construction companies, doctors and travel companies.",
  },
  {
    title: "Martin Brower, Senior Accountant",
    body: "At McDonald's global distributor, booked $500M+ a month in cash transactions, led unclaimed property audit prep that recovered $100k+, and built Alteryx automations.",
  },
  {
    title: "Restaurant365, daily for years",
    body: "Years of daily, hands-on use of the restaurant accounting platform.",
  },
  {
    title: "Construction job costing",
    body: "Full job costing experience: WIP schedules, progress billing, retainage and lien waivers.",
  },
  {
    title: "MS in Accounting, DePaul University",
    body: "His work is bookkeeping, accounting operations and automation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Tim O&rsquo;Rourke, founder of Smart AI Bookkeeping
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping runs the back office for trades businesses.
            It&rsquo;s based in Lake Bluff,
            Illinois, and serves the North Shore and Chicago suburbs in person
            and clients anywhere remotely.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-start gap-12 px-4 py-16 sm:px-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-navy/80">
          <p>
            I&rsquo;m Tim O&rsquo;Rourke. For 10 years I ran my own accounting
            firm, Order Up Profits. Most of my clients were restaurants, along
            with construction companies, doctors and travel companies. I know
            what their books look like at month-end, because I was the one
            closing them.
          </p>
          <p>
            Before that, I was a Senior Accountant at Martin Brower,
            McDonald&rsquo;s global distributor. There I booked more than $500
            million a month in cash transactions, led the prep for an unclaimed
            property audit that recovered more than $100,000, and built Alteryx
            automations to take manual steps out of the work.
          </p>
          <p>
            Smart AI Bookkeeping puts those two things together for trades
            businesses: the job costing, WIP and month-end work I know, with
            Claude AI taking the typing out. Plans start at $1,000/month. I
            hold an MS in Accounting from DePaul University.
          </p>
        </div>
        <Screenshot file="tim-portrait.jpg" alt="Tim O'Rourke in his backyard holding a chicken" aspect="square" />
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Background at a glance</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold">{fact.title}</h3>
                <p className="mt-3 leading-relaxed text-navy/80">{fact.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg leading-relaxed text-navy/80">
            Industry pages:{" "}
            <Link href="/industries/restaurants" className="font-semibold underline-offset-4 hover:underline">
              restaurants
            </Link>
            ,{" "}
            <Link href="/industries/construction" className="font-semibold underline-offset-4 hover:underline">
              construction
            </Link>
            . Or{" "}
            <Link href={calHref} className="font-semibold underline-offset-4 hover:underline">
              book a free call
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
