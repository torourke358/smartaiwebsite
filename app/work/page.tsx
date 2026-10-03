import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";

export const metadata: Metadata = {
  title: "Work — Client builds and our own products",
  description:
    "Client apps: AI receipt capture, vessel operations, an AI dry-dock planner, a trading journal with an AI coach. Our own products: a 4.7-million-word AI research archive and a live community app with 600+ members.",
  openGraph: {
    title: "Work | Smart AI Bookkeeping",
    description:
      "Client builds and our own production apps — including a live community with 600+ members. We ship on the same stack we sell.",
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
  {
    title: "Futures trading journal + AI coach",
    price: null,
    body: "A P&L calendar built from real fills, AI analysis that diagnoses what's going wrong in plain language, and trading rules mined from the trader's own journal — human-approved before the system enforces them.",
    shot: null,
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

export default function WorkPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            We ship on the same stack we sell.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            Client builds you can read about, and our own production apps you
            can click into right now — including a live community with 600+
            members. Nothing here is a mockup.
          </p>
        </div>
      </section>

      {/* Client builds */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Client builds</h2>
        <p className="mt-3 max-w-3xl text-navy/70">
          Four apps for one repeat client — a charter yacht captain who came
          back three times.{" "}
          <Link
            href="/case-study"
            className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Read the full case study
          </Link>
          .
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
            The strongest proof we can offer: apps we built for ourselves,
            running in production, that you can open in another tab.
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
