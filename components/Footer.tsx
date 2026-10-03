import Link from "next/link";
import {
  bookingUrl,
  email,
  footerNav,
  linkedInUrl,
  phone,
  siteName,
  tagline,
  youTubeUrl,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{siteName}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {tagline}. One-time $2,500 setup, optional upkeep from $175/month, bookkeeping from $175/month.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2">
            {footerNav.map((item) => (
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
          <p>Serving the North Shore, the Chicago suburbs, and remote clients</p>
          <p className="mt-2">{phone}</p>
          <p>
            <a href={`mailto:${email}`} className="hover:text-accent">
              {email}
            </a>
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            <a href={bookingUrl} className="text-white/80 transition-colors hover:text-accent">
              Book a call
            </a>
            <a href={linkedInUrl} className="text-white/80 transition-colors hover:text-accent">
              LinkedIn
            </a>
            <a href={youTubeUrl} className="text-white/80 transition-colors hover:text-accent">
              YouTube
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50 sm:px-6">
          &copy; {siteName}. Built with Claude AI on the same stack we ship to
          clients.
        </p>
      </div>
    </footer>
  );
}
