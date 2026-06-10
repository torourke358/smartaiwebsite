import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";
import { calHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Study — Two days a month back, $2,400/year cancelled",
  description:
    "How a charter yacht captain got two days a month back and cancelled a $2,400/year subscription. Two custom apps. One database. $3,750, one time.",
  openGraph: {
    title: "Case Study — How a charter yacht captain got two days a month back",
    description:
      "Two custom apps. One database. $3,750, one time. Replaced a $2,400/year subscription and ~24 days/year of manual work.",
    url: "/case-study",
  },
};

const results = [
  {
    metric: "Monthly expense reporting",
    before: "2 days of manual entry and chart-building",
    after: "Crew photographs receipts; Excel report on demand",
  },
  {
    metric: "Captain's time recovered",
    before: "—",
    after: "~24 days per year",
  },
  {
    metric: "Software subscription",
    before: "$200/month, partial fit",
    after: "$0/month — he owns the system",
  },
  {
    metric: "Inventory alerts",
    before: "Not handled",
    after: "Automatic, per-item thresholds he set himself",
  },
  {
    metric: "Maintenance tracking",
    before: "Not handled by his subscription",
    after: "Calendar- and engine-hours-based, with history",
  },
  {
    metric: "Total investment",
    before: "$2,400 every year, forever",
    after: "$3,750 one time",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      {/* TODO(craig-permission): add "Craig Rutkai, M/Y Anne-Marie" and vessel hero photo after written OK. */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            How a charter yacht captain got two days a month back — and
            cancelled a $2,400/year subscription.
          </h1>
          <p className="mt-6 text-xl text-navy/80">
            Two custom apps. One database. $3,750, one time.
          </p>
        </div>
      </section>

      {/* The Client */}
      {/* TODO(craig-permission): name him. */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">The Client</h2>
        <p className="mt-6 text-lg leading-relaxed text-navy/80">
          A working charter yacht captain runs a small business like any other
          owner — except his office moves, his crew pays cash for everything
          from fuel to dayworkers, and his &ldquo;back office&rdquo; was
          whatever tools he could find: an enterprise software subscription,
          Apple Numbers spreadsheets, and a lot of manual effort squeezed in
          around actually running the vessel.
        </p>
      </section>

      {/* The Problem */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The Problem (two problems, actually)
          </h2>
          <h3 className="mt-8 text-xl font-bold">
            Petty cash ate two days every month.
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-navy/80">
            Crew members spend cash constantly — fuel, provisions, dayworkers,
            parts. The captain recorded every dollar by hand: collecting
            receipts, reviewing invoices and backup, typing everything into
            spreadsheets, then building charts to compare actual spend against
            the yearly budget. Two full days, every month, of a captain&rsquo;s
            time spent on data entry.
          </p>
          <h3 className="mt-8 text-xl font-bold">
            His software subscription didn&rsquo;t fit his boat.
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-navy/80">
            He paid $200/month — $2,400 a year — for enterprise yacht-management
            software built for superyachts. Good software, wrong fit: it
            didn&rsquo;t handle inventory or maintenance the way his operation
            actually ran, and it didn&rsquo;t talk to his expense tracking.
            Enterprise prices for a partial fit, forever.
          </p>
        </div>
      </section>

      {/* The Build */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">The Build</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">App 1 — Petty Cash ($750)</h3>
            <p className="mt-3 leading-relaxed text-navy/80">
              A phone app on every crew member&rsquo;s home screen, branded with
              the vessel. A crew member photographs a receipt; AI reads it and
              extracts the vendor, amount, and details automatically. Expenses
              file by department — Interior, Exterior, F&amp;B, Engineering,
              Tips. Paying a dayworker with no receipt? One tap for a manual
              entry. Everything searchable, every change logged, and the whole
              thing exports to Excel formatted the way the captain reports
              against budget.
            </p>
            <div className="mt-6 grid gap-4">
              <Screenshot file="petty-cash-capture.png" alt="Receipt capture flow" />
              <Screenshot file="petty-cash-fields.png" alt="AI-extracted receipt fields" />
              <Screenshot file="petty-cash-export.png" alt="Excel export view" />
            </div>
          </div>
          <div className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">App 2 — Vessel Operations ($3,000)</h3>
            <p className="mt-3 leading-relaxed text-navy/80">
              Inventory with a critical threshold on every item — when the
              varnish runs low, he gets an alert before it&rsquo;s a problem. An
              equipment registry with maintenance scheduled by calendar date or
              engine hours, whichever each task needs. A yard-period dashboard
              organized the way he actually plans. Reports. And his existing
              data migrated in, so day one wasn&rsquo;t a blank screen.
            </p>
            <div className="mt-6 grid gap-4">
              <Screenshot file="runa-inventory.png" alt="Inventory alert view" />
              <Screenshot file="vessel-maintenance.png" alt="Maintenance schedule view" />
              <Screenshot file="vessel-dashboard.png" alt="Yard-period quad dashboard" />
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="mt-10 rounded-xl border-l-4 border-accent bg-navy/5 p-8">
          <h3 className="text-xl font-bold">
            The part no subscription offers
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-navy/80">
            It&rsquo;s one database. When a yard task says &ldquo;varnish the
            brightwork,&rdquo; the same system shows how much varnish is in
            inventory and what he paid for it last time. Expenses, inventory,
            and maintenance aren&rsquo;t three products with three logins —
            they&rsquo;re one system that knows his boat.
          </p>
        </div>
      </section>

      {/* The Results */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">The Results</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-navy/20">
                  <th className="py-3 pr-4 text-sm font-semibold uppercase tracking-wide text-navy/60"></th>
                  <th className="py-3 pr-4 text-sm font-semibold uppercase tracking-wide text-navy/60">
                    Before
                  </th>
                  <th className="py-3 text-sm font-semibold uppercase tracking-wide text-navy/60">
                    After
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((row) => (
                  <tr key={row.metric} className="border-b border-navy/10">
                    <th scope="row" className="py-4 pr-4 align-top font-semibold">
                      {row.metric}
                    </th>
                    <td className="py-4 pr-4 align-top text-navy/70">{row.before}</td>
                    <td className="py-4 align-top font-medium">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-lg leading-relaxed text-navy/80">
            The operations app pays for itself against the cancelled
            subscription in about 15 months. Every month after that is $200
            back in his pocket — for software that does more than what it
            replaced. The petty cash app paid for itself in roughly the first
            month of recovered time. And it didn&rsquo;t end at delivery: his
            third app is already scoped. That&rsquo;s how this works — solve
            one problem, earn the next one.
          </p>
        </div>
      </section>

      {/* Pull quote */}
      {/* TODO(craig-permission): testimonial quote. Until then render the stat as the quote. */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <blockquote className="text-2xl font-bold leading-snug sm:text-3xl">
          &ldquo;Two days a month, back. $2,400 a year, cancelled.&rdquo;
        </blockquote>
      </section>

      {/* Closing */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Could this work for your business?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            If you&rsquo;re paying monthly for software that almost fits — or
            burning days on a process you do by hand — the first step is the
            free SaaS Audit: 45 minutes, we list every subscription and manual
            process, and you see what one custom system would replace. No pitch
            deck. Just the math.
          </p>
          <Link
            href={calHref}
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Book the Free SaaS Audit
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
