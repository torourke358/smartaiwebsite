// MailerLite embedded form for /resources.
// TODO(env): set NEXT_PUBLIC_MAILERLITE_EMBED to the full MailerLite embed
// snippet to replace this placeholder. The placeholder form POSTs nowhere.
export default function MailerLiteForm() {
  const embed = process.env.NEXT_PUBLIC_MAILERLITE_EMBED;

  if (embed) {
    return <div dangerouslySetInnerHTML={{ __html: embed }} />;
  }

  return (
    <form
      className="mx-auto flex max-w-md flex-col gap-4 rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
      aria-label="Get the Software Bill Worksheet"
    >
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          className="rounded-md border border-navy/20 px-3 py-2 text-base text-navy outline-none focus:border-accent"
          placeholder="Your name"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium text-navy">
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="rounded-md border border-navy/20 px-3 py-2 text-base text-navy outline-none focus:border-accent"
          placeholder="you@business.com"
        />
      </label>
      <button
        type="button"
        className="rounded-md bg-accent px-4 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
      >
        Send me the worksheet
      </button>
      <p className="text-xs text-navy/50">
        Sign-ups open soon — this form isn&rsquo;t connected yet.
      </p>
    </form>
  );
}
