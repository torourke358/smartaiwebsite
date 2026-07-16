import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Screenshot from "@/components/Screenshot";

export const metadata: Metadata = {
  title: "About — The bookkeeper who got tired of typing",
  description:
    "Tim O'Rourke: 15 years of small-business bookkeeping, MBA in Accountancy from DePaul, U.S. Army veteran — now building custom software small businesses can say yes to.",
  openGraph: {
    title: "About Tim O'Rourke — Smart AI Automations",
    description:
      "Real custom software, fixed prices a small business can say yes to, delivered in days, built by someone who's actually kept your kind of books.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-24">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The bookkeeper who got tired of typing.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-start gap-12 px-4 py-16 sm:px-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-navy/80">
          <p>
            I&rsquo;m Tim O&rsquo;Rourke. I spent 15 years doing small-business
            bookkeeping — my own fractional practice, plus office-manager and
            accountant roles before that. MBA in Accountancy from DePaul. U.S.
            Army veteran. I know what a shoebox of receipts looks like in
            February, because I was the one typing it in.
          </p>
          <p>
            A year ago I taught myself to build software to automate the work I
            hated, and discovered the thing this whole business is built on:
            AI-assisted development has made custom software cheap enough and
            fast enough for ordinary small businesses — and almost nobody is
            building it for them. The agencies start at $10,000. The freelancer
            marketplaces are a lottery. The SaaS products almost fit.
          </p>
          <p>
            So that&rsquo;s the niche: real custom software, fixed prices a
            small business can say yes to, delivered in days, built by someone
            who&rsquo;s actually kept your kind of books.
          </p>
          <p>
            I live in Lake Bluff, Illinois. First client was a charter yacht
            captain — his crew uses the apps every day. Yours could be next.
          </p>
        </div>
        <Screenshot file="tim-portrait.png" alt="Photo of Tim O'Rourke" aspect="square" />
      </section>

      <CtaBand />
    </>
  );
}
