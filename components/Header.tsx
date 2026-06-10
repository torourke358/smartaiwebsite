"use client";

import Link from "next/link";
import { useState } from "react";
import { calHref, nav, siteName } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-navy"
          onClick={() => setOpen(false)}
        >
          {siteName}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={calHref}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Free SaaS Audit
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md border border-navy/20 p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white px-4 pb-4 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-base font-medium text-navy/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={calHref}
            className="mt-2 block rounded-md bg-accent px-4 py-3 text-center text-base font-semibold text-navy"
            onClick={() => setOpen(false)}
          >
            Free SaaS Audit
          </Link>
        </nav>
      )}
    </header>
  );
}
