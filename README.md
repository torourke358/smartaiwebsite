# Smart AI Automations — Marketing Site

Production marketing website for Smart AI Automations. Next.js 14 (App
Router) + TypeScript + Tailwind CSS. Fully static — no database, no auth.

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have. Everything is
optional — the site renders styled placeholders for anything unset.

| Var | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata/sitemap/robots |
| `NEXT_PUBLIC_CAL_URL` | Cal.com booking URL (audit embed + all CTA buttons) |
| `NEXT_PUBLIC_MAILERLITE_EMBED` | MailerLite embed snippet for /resources |
| `NEXT_PUBLIC_GA4_ID` | GA4 measurement ID (loads only if set) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (loads only if set) |

## Deploy (Vercel)

1. Import the GitHub repo at vercel.com/new (framework auto-detected).
2. Add the env vars above in Project Settings → Environment Variables.
3. Deploy. Attach the custom domain under Settings → Domains and update DNS
   at the registrar with the records Vercel shows.

## TODO markers

- `TODO(craig-permission)` — spots awaiting Craig's written OK (name,
  testimonial, vessel photo, unblurred screenshots).
- `TODO(env)` — embeds/IDs that go live once the env var is set.

Real screenshots: drop PNGs over the placeholder files in `public/images/`
(see the README there) — no code changes needed.
