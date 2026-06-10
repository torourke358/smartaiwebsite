import Link from "next/link";
import { nav, siteName } from "@/lib/site";

// TODO(env): replace '#' with a real LinkedIn URL and the email placeholder
// with the real address when ready.
const linkedInUrl = "#";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{siteName}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Replace the software you rent with systems you own.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-white/70">
          <p>Tim O&rsquo;Rourke &middot; Lake Bluff, IL</p>
          <p>Serving Chicagoland and beyond</p>
          <p className="mt-2">hello@smartaiautomations.com</p>
          <a
            href={linkedInUrl}
            className="mt-3 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 sm:px-6">
          Built by Smart AI Automations on the same stack we ship to clients.
        </p>
      </div>
    </footer>
  );
}
