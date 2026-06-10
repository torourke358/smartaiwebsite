import Link from "next/link";
import { calHref } from "@/lib/site";

// Global CTA band — appears at the bottom of every page.
export default function CtaBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Find out what your software stack really costs.
        </h2>
        <Link
          href={calHref}
          className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
        >
          Book the Free SaaS Audit
        </Link>
      </div>
    </section>
  );
}
