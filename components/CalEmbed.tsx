import Link from "next/link";
import { calUrl } from "@/lib/site";

// Cal.com inline embed for the /audit page.
// TODO(env): set NEXT_PUBLIC_CAL_URL to render the live scheduler.
export default function CalEmbed() {
  if (!calUrl) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-navy/20 bg-navy/5 p-8 text-center">
        <p className="text-lg font-semibold text-navy/60">Scheduler coming soon</p>
        <p className="max-w-sm text-sm text-navy/50">
          The Cal.com booking calendar appears here once NEXT_PUBLIC_CAL_URL is
          configured. In the meantime, reach out directly.
        </p>
        <Link href="/" className="text-sm font-semibold text-navy underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <iframe
      src={`${calUrl}?embed=true&layout=month_view`}
      className="min-h-[640px] w-full rounded-xl border border-navy/10"
      title="Book the Free SaaS Audit"
      loading="lazy"
    />
  );
}
