import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";
import VideoEmbed from "@/components/VideoEmbed";
import { calHref } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Smart AI Bookkeeping — Bookkeeping & Accounting Automation, Lake Bluff IL",
  },
  description:
    "Smart AI Bookkeeping automates small-business accounting departments: a one-time $2,500 setup, optional upkeep from $175/month. Tim O'Rourke, Lake Bluff IL, serving the North Shore, Chicago suburbs and remote clients.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Smart AI Bookkeeping — Accounting automation for small businesses",
    description:
      "Automate the repetitive work in your accounting department. $2,500 setup, optional upkeep from $175/month.",
    url: "/",
  },
};

const cards = [
  {
    title: "Restaurants",
    href: "/industries/restaurants",
    body: "Daily sales entries, vendor invoices and deposit matching, from someone who used Restaurant365 daily for years.",
  },
  {
    title: "Construction",
    href: "/industries/construction",
    body: "Job costing, WIP schedules, progress billing, retainage and lien waivers.",
  },
  {
    title: "Medical practices",
    href: "/industries/medical-practices",
    body: "Deposit matching, expense coding, payroll entries and a faster month-end close.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Automate your accounting department.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Smart AI Bookkeeping uses Claude AI to take the repetitive work out
            of small-business accounting: data entry, invoice coding, deposit
            matching and the month-end close. One-time $2,500 setup, optional
            upkeep from $175/month. Based in Lake Bluff, IL, serving the North
            Shore, the Chicago suburbs and remote clients.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={calHref}
              className="rounded-md bg-accent px-6 py-3 text-center text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
            >
              Book a Free Call
            </Link>
            <Link
              href="/case-study"
              className="rounded-md border-2 border-navy px-6 py-3 text-center text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              See the case study
            </Link>
          </div>
        </div>
        <Screenshot
          file="petty-cash-home.png"
          alt="Petty cash app home screen on a phone"
          aspect="phone"
        />
      </section>

      {/* The math most owners never do */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold">
            Built by someone who&rsquo;s closed the books
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Tim O&rsquo;Rourke ran his own accounting firm, Order Up Profits,
            for 10 years, serving restaurants, construction companies, doctors
            and travel companies. He was a Senior Accountant at Martin Brower,
            McDonald&rsquo;s global distributor, and holds an MS in Accounting
            from DePaul. Now he automates the same work he used to do by hand.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-navy underline-offset-4 hover:underline"
          >
            More about Tim →
          </Link>
        </div>
      </section>

      {/* Industry cards */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-navy/80">{card.body}</p>
            <span className="mt-4 inline-block font-semibold text-navy">
              Read more →
            </span>
          </Link>
        ))}
      </section>

      {/* Testimonial — Craig Rutkai (name, photo, quote, vessel used with permission) */}
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <figure>
            <blockquote className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              &ldquo;No more shoebox of receipts — and it gives me back 24 hours
              a month I used to spend building spreadsheets and graphs. I love
              using it.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <Image
                src="/images/craig.png"
                alt="Craig Rutkai, Captain of the Anne Marie"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/25"
              />
              <div className="text-left">
                <div className="font-bold text-white">Craig Rutkai</div>
                <div className="text-sm text-white/70">
                  Captain of the Anne Marie
                </div>
              </div>
            </figcaption>
          </figure>
          <Link
            href="/case-study"
            className="mt-8 inline-block font-semibold text-accent underline-offset-4 hover:underline"
          >
            Read the full case study →
          </Link>
        </div>
      </section>

      {/* Demo video */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-bold">See it in action</h2>
        <div className="mt-8">
          <VideoEmbed />
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Who this is for</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Owner-run small businesses whose books still depend on
            hand-typed entries, spreadsheets and a month-end that drags.
            Restaurants, construction companies, medical practices, travel
            companies and other small businesses, on the North Shore, in the
            Chicago suburbs, or anywhere remotely.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
