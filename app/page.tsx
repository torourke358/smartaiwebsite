import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";
import VideoEmbed from "@/components/VideoEmbed";
import { calHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart AI Automations — Replace the software you rent with systems you own",
  description:
    "Custom apps for small businesses — fixed price, delivered in days, AI built in. One client cut a $200/month subscription and got back two days a month for under $4,000, one time.",
  openGraph: {
    title: "Smart AI Automations — Custom apps for small businesses",
    description:
      "Replace the software you rent with systems you own. Fixed price, delivered in days, AI built in.",
    url: "/",
  },
};

const cards = [
  {
    title: "Kill a manual process.",
    body: "A crew was hand-typing receipts for two days a month. Now they photograph them, AI does the rest, and the report exports itself. From $1,995.",
  },
  {
    title: "Replace a subscription.",
    body: "Enterprise software that almost fits, $200 every month, forever — replaced by an app built around how the business actually runs. Paid for itself in 15 months.",
  },
  {
    title: "One database, not ten logins.",
    body: "Expenses, inventory, maintenance — one system that knows your business, instead of three products that don't talk.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Replace the software you rent with systems you own.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Custom apps for small businesses — fixed price, delivered in days,
            AI built in. One client cut a $200/month subscription and got back
            two days a month of manual work for under $4,000, one time.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={calHref}
              className="rounded-md bg-accent px-6 py-3 text-center text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
            >
              Book the Free SaaS Audit
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
          <h2 className="text-3xl font-bold">The math most owners never do</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Most small businesses pay for 5–10 software subscriptions that each
            do part of the job — and still run the important things by hand.
            Add up the subscriptions. Add the hours of manual work at what your
            time is worth. That number, every year, forever, is what
            &ldquo;we&rsquo;ll just keep using what we have&rdquo; actually
            costs. We build one custom system that replaces the stack — and you
            own it.
          </p>
        </div>
      </section>

      {/* Three cards */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-navy/80">{card.body}</p>
          </div>
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
            Owner-operated businesses, roughly 3–50 people, with at least one
            process that runs on spreadsheets, paper, or software that almost
            fits. Trades, charter &amp; marine, professional practices,
            logistics, specialty retail — if you can describe the problem, we
            can usually show you working software the same week.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
