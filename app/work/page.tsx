import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";

export const metadata: Metadata = {
  title: "Work — Running the Close for a Ten-Company Group, and Client Apps",
  description:
    "Real back-office work: month-end close, company-to-company billing and eliminations, payroll uploads, a QuickBooks to NetSuite move and audit support for a ten-company group. Plus AI receipt capture and vessel operations apps for a charter yacht.",
  openGraph: {
    title: "Work | Smart AI Bookkeeping",
    description:
      "Month-end close, payroll, eliminations and audit support for a ten-company group, plus client apps. Sample numbers, real work.",
    url: "/work",
  },
};

const clientBuilds = [
  {
    title: "Petty Cash — AI receipt capture",
    price: "$750",
    body: "Crew photographs a receipt; AI extracts vendor, date, and amount, files it by department, and exports to Excel. Killed two full days a month of data entry.",
    shot: { file: "petty-cash-fields.png", alt: "AI-extracted receipt fields" },
  },
  {
    title: "Vessel Operations + AI Dry-Dock Planner",
    price: "$6,500 across two phases",
    body: "Inventory with per-item alert thresholds, maintenance by calendar date or engine hours with full history, and — phase two — photograph the engine room and get an AI disassembly plan that knows the AC contractor has to be booked first. Replaced a $2,400/year subscription.",
    shot: { file: "vessel-dashboard.png", alt: "Yard-period dashboard" },
  },
];

const ownBuilds = [
  {
    title: "The Archive — Civil War research AI",
    href: "https://civil-war-ai-frontend.vercel.app",
    stat: "4.7M words · 2,100+ primary sources",
    body: "Ask any question about the Civil War and it writes a cited, multi-act story from memoirs, newspapers, official records, and slave narratives — every quote traceable to its source. Try it: it's the clearest demo of what modern AI can do with a business's own documents.",
  },
  {
    title: "Lemon Lyman — a fan community",
    href: "https://lemonlyman.app",
    stat: "600+ members, growing every week",
    body: "A social community for West Wing fans — real accounts, real photos, real traffic. Built, launched, and operated by us: when launch-week load got expensive, we re-engineered image delivery and cut page weight ~99%. Running a production app with hundreds of daily users is different from demo-ware — this is that proof.",
  },
  {
    title: "Plate Check — AI nutrition coach",
    href: "https://plate-check-seven.vercel.app",
    stat: "Photo → calories, automatically",
    body: "Photograph your plate and AI estimates the meal and logs the calories — the same capture-and-extract pattern as the receipt app, pointed at dinner. Includes an AI coach that plans training and reads progress photos.",
  },
  {
    title: "The Tavern — for D&D players",
    href: "https://the-tavern-kappa.vercel.app",
    stat: "Full community platform, themed end-to-end",
    body: "The community platform re-themed for a completely different audience — proof the systems we build are reusable engines, not one-offs.",
  },
];

// ---------------------------------------------------------------------------
// Group case study. The work is real (Tim's 2026 engagement, client
// confidential). Every name and number below is SAMPLE data: never put the
// client's real company codes, people, account numbers or amounts here.
// ---------------------------------------------------------------------------

const groupWork = [
  {
    title: "Month-end close, two months running",
    body: "Closed August and September for the whole group. Built the company-to-company bill-backs and the eliminations, so the group's numbers tie out to zero between companies. Built monthly entries for health benefits, net revenue, inventory and accruals, and cleaned up prepaid expenses nobody had touched.",
  },
  {
    title: "Payroll entries that post the first time",
    body: "The payroll system's upload files kept failing. We built a nine-point check that catches wrong IDs, wrong offset accounts, wrong dates and entries mixing companies, before anything is posted. Then we caught up four companies on four months of payroll: 48 entries.",
  },
  {
    title: "Credit cards and company-to-company charges",
    body: "Built the monthly card entries using the controller's location rules, and found the missing company-to-company entries behind them. Every card month now includes them.",
  },
  {
    title: "QuickBooks to NetSuite",
    body: "Moved one company's books from QuickBooks into NetSuite: reviewed the months already moved, then built and posted the rest, plus the lease accounting entries.",
  },
  {
    title: "Audit support",
    body: "Pulled the support for the auditors' related-party and repair expense selections: hundreds of pages of bills and card statements, with every difference explained and the remaining gaps listed for the controller.",
  },
  {
    title: "A close checklist and a toolkit",
    body: "Mined two years of journal entries to build a month-end checklist, which found recurring entries that had quietly stopped when an accountant left. Built a set of simple tools the in-house team can run without us.",
  },
];

const checklist = [
  { task: "Bank reconciliations, all companies", day: "Day 2", status: "Done" },
  { task: "Payroll entries, checked and posted", day: "Day 3", status: "Done" },
  { task: "Credit card entries + company-to-company", day: "Day 4", status: "Done" },
  { task: "Bill-backs between companies", day: "Day 5", status: "Done" },
  { task: "Accruals and prepaid expenses", day: "Day 5", status: "Done" },
  { task: "Inventory entry", day: "Day 6", status: "Waiting on vendor bills" },
  { task: "Eliminations + tie-out", day: "Day 7", status: "Done" },
];

const elim = [
  { line: "Management fees billed", a: "48,500.00", b: "", e: "(48,500.00)" },
  { line: "Management fees paid", a: "", b: "(48,500.00)", e: "48,500.00" },
  { line: "Shared payroll billed back", a: "21,300.00", b: "", e: "(21,300.00)" },
  { line: "Shared payroll expense", a: "", b: "(21,300.00)", e: "21,300.00" },
];

const checks = [
  "Every company ID matches the system",
  "Every account exists and is active",
  "Offset account is the right one",
  "Entry date is in an open period",
  "Accrual reverses on the right date",
  "One company per entry, no mixing",
  "Debits equal credits",
  "Locations match the company's rules",
  "No duplicate of an entry already posted",
];

const entryMix = [
  { label: "Bank deposits", pct: 88 },
  { label: "Payroll", pct: 5 },
  { label: "Accruals", pct: 4 },
  { label: "Everything else", pct: 3 },
];

function SampleTag() {
  return (
    <span className="ml-2 rounded bg-accent/20 px-2 py-0.5 align-middle text-xs font-semibold uppercase tracking-wide text-navy">
      Sample data
    </span>
  );
}

function Exhibit({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-bold">
        {title}
        <SampleTag />
      </h4>
      <p className="mt-1 text-sm text-navy/60">{note}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The work.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Running the month-end close for a ten-company group, and building
            apps for a charter yacht captain who came back three times.
          </p>
        </div>
      </section>

      {/* Group case study */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
          Case study · 2026
        </p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          Running the close for a ten-company group
        </h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold">The client</h3>
            <p className="mt-2 leading-relaxed text-navy/80">
              A group of about ten related companies on NetSuite, sharing one
              small accounting team. One company was still on QuickBooks.
            </p>
          </div>
          <div>
            <h3 className="font-bold">The problem</h3>
            <p className="mt-2 leading-relaxed text-navy/80">
              An accountant had left. Monthly entries had stopped, payroll
              uploads kept failing, some companies were months behind, and the
              audit was coming.
            </p>
          </div>
          <div>
            <h3 className="font-bold">The result</h3>
            <p className="mt-2 leading-relaxed text-navy/80">
              August and September closed for the whole group. Payroll caught
              up. Audit support delivered. A checklist and tools the team can
              run themselves.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-navy/60">
          The client is confidential. Names are changed and every number shown
          below is sample data. The work is real.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groupWork.map((w) => (
            <div key={w.title} className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/80">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibits */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">What the work looks like</h2>
          <p className="mt-3 max-w-3xl text-navy/70">
            Sample versions of the schedules and checks we built. Company names
            and amounts are made up.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Exhibit title="Month-end close checklist" note="September close, all companies.">
              <ul className="divide-y divide-navy/10">
                {checklist.map((c) => (
                  <li key={c.task} className="flex items-start justify-between gap-4 py-2 text-sm">
                    <span>
                      <span className="mr-2 text-navy/50">{c.day}</span>
                      {c.task}
                    </span>
                    <span
                      className={`shrink-0 font-semibold ${
                        c.status === "Done" ? "text-green-700" : "text-amber-700"
                      }`}
                    >
                      {c.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Exhibit>

            <Exhibit
              title="Elimination between companies"
              note="What one company bills another has to cancel out for the group."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-sm">
                  <thead>
                    <tr className="border-b border-navy/20 text-left text-navy/60">
                      <th className="py-2 pr-2 font-semibold">Line</th>
                      <th className="py-2 pr-2 text-right font-semibold">Alder Co.</th>
                      <th className="py-2 pr-2 text-right font-semibold">Birch Co.</th>
                      <th className="py-2 text-right font-semibold">Elimination</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    {elim.map((r) => (
                      <tr key={r.line} className="border-b border-navy/10">
                        <td className="py-2 pr-2 font-sans">{r.line}</td>
                        <td className="py-2 pr-2 text-right">{r.a}</td>
                        <td className="py-2 pr-2 text-right">{r.b}</td>
                        <td className="py-2 text-right">{r.e}</td>
                      </tr>
                    ))}
                    <tr className="font-bold">
                      <td className="py-2 pr-2 font-sans">Group net effect</td>
                      <td className="py-2 pr-2 text-right">69,800.00</td>
                      <td className="py-2 pr-2 text-right">(69,800.00)</td>
                      <td className="py-2 text-right text-green-700">0.00 ✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Exhibit>

            <Exhibit
              title="Payroll upload check"
              note="Nine checks run on every file before it's posted."
            >
              <ul className="grid gap-1 text-sm sm:grid-cols-2">
                {checks.map((c, i) => (
                  <li key={c} className="flex gap-2">
                    <span className="font-mono text-navy/50">{i + 1}.</span>
                    <span className="text-green-700" aria-hidden="true">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded bg-navy/5 p-3 text-sm">
                <strong>Sample result:</strong> 212 lines checked. 3 wrong
                offset accounts and 1 entry mixing two companies, fixed before
                posting.
              </p>
            </Exhibit>

            <Exhibit
              title="Where the hand-typed entries come from"
              note="Two years of journal entries, sorted. The biggest bar is the first thing to automate."
            >
              <ul className="space-y-3">
                {entryMix.map((m) => (
                  <li key={m.label} className="text-sm">
                    <div className="flex justify-between">
                      <span>{m.label}</span>
                      <span className="font-mono">{m.pct}%</span>
                    </div>
                    <div className="mt-1 h-3 rounded bg-navy/10">
                      <div className="h-3 rounded bg-accent" style={{ width: `${m.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </Exhibit>

            <Exhibit
              title="Payroll catch-up"
              note="Four companies, four months behind."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] text-center text-sm">
                  <thead>
                    <tr className="border-b border-navy/20 text-navy/60">
                      <th className="py-2 text-left font-semibold">Company</th>
                      {["Apr", "May", "Jun", "Jul"].map((m) => (
                        <th key={m} className="py-2 font-semibold">{m}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {["Alder Co.", "Birch Co.", "Cedar Co.", "Dogwood Co."].map((co) => (
                      <tr key={co} className="border-b border-navy/10">
                        <td className="py-2 text-left">{co}</td>
                        {[1, 2, 3, 4].map((m) => (
                          <td key={m} className="py-2 text-green-700">3 ✓</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm font-semibold">48 entries, all posted.</p>
            </Exhibit>

            <Exhibit
              title="Audit support package"
              note="Repair expense items the auditors picked."
            >
              <dl className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-navy/60">Items picked</dt>
                  <dd className="mt-1 font-mono text-2xl font-bold">64</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-navy/60">Supported</dt>
                  <dd className="mt-1 font-mono text-2xl font-bold text-green-700">58</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-navy/60">Open, listed</dt>
                  <dd className="mt-1 font-mono text-2xl font-bold text-amber-700">6</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-navy/70">
                Every open item comes with what&rsquo;s missing and who has it,
                so the controller can close it in one pass.
              </p>
            </Exhibit>
          </div>

          <div className="mt-12 rounded-xl border-2 border-accent bg-white p-8">
            <h3 className="text-xl font-bold">What this means for a trades business</h3>
            <ul className="mt-4 space-y-2 leading-relaxed text-navy/80">
              <li>• More than one company? We tie them together so nothing is counted twice.</li>
              <li>• Payroll entries that post right the first time.</li>
              <li>• Books months behind? We&rsquo;ve caught up a lot worse.</li>
              <li>• A close checklist, so the same entries happen every month.</li>
              <li>• Ready for your bank, bonding company or auditor when they ask.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client builds */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Apps for a charter yacht</h2>
        <p className="mt-3 max-w-3xl text-navy/70">
          Built for one repeat client, a charter yacht captain who came back
          for more.{" "}
          <Link
            href="/case-study"
            className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Read the full case study
          </Link>
          .
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {clientBuilds.map((b) => (
            <div
              key={b.title}
              className="flex flex-col rounded-xl border border-navy/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">{b.title}</h3>
              {b.price && (
                <p className="mt-1 font-semibold text-accent-dark">{b.price}</p>
              )}
              <p className="mt-3 leading-relaxed text-navy/80">{b.body}</p>
              {b.shot && (
                <div className="mt-6">
                  <Screenshot file={b.shot.file} alt={b.shot.alt} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our own products */}
      <section className="bg-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Our own products — live right now
          </h2>
          <p className="mt-3 max-w-3xl text-navy/70">
            Apps we built for ourselves, running in production, that you can
            open in another tab.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ownBuilds.map((b) => (
              <a
                key={b.title}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-xl font-bold group-hover:text-accent-dark">
                  {b.title} <span aria-hidden>↗</span>
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-navy/50">
                  {b.stat}
                </p>
                <p className="mt-3 leading-relaxed text-navy/80">{b.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
