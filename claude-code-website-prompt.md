# Claude Code Prompt — Smart AI Automations Website
### Save this file and give it to Claude Code as the first message. It contains all copy — no lorem ipsum anywhere.

---

You are building the production marketing website for Smart AI Automations, then pushing it to GitHub and deploying it to Vercel. Work in plan mode first: read this whole brief, ask any blocking questions BEFORE writing code, then execute. Do not expand scope beyond what is written here.

## Stack (locked — do not substitute)
- Next.js 14+ App Router, TypeScript, Tailwind CSS
- No database needed for v1. No auth. Static/SSG wherever possible.
- Forms: render MailerLite embedded form via env-configured embed code (see ENV). If embed code env var is empty, render a styled placeholder form that POSTs nowhere and shows a TODO comment.
- Booking: Cal.com inline embed on the Audit page + "Book the Free SaaS Audit" buttons sitewide linking to the Cal.com URL (env var).
- Analytics: GA4 and Meta Pixel, each loaded only if its env var is set.
- SEO: per-page metadata + OpenGraph tags, sitemap.xml, robots.txt, semantic HTML, single h1 per page.
- Performance: static images via next/image, no heavy libraries, Lighthouse 90+ on mobile is the bar.

## ENV VARS (create .env.example listing all)
NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_CAL_URL, NEXT_PUBLIC_MAILERLITE_EMBED, NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_META_PIXEL_ID

## Design direction
Clean, confident, small-business-trustworthy — NOT startup-glossy, NOT template-y. Light background, one strong accent color (deep navy #0F2A43 with a warm accent #E8A33D — adjust shades for contrast, keep the two-color discipline). Generous whitespace, large readable type, real screenshots over illustrations. Mobile-first. Every page ends with the same CTA band: "Find out what your software stack really costs." + [Book the Free SaaS Audit] button.

Placeholder images: create an /public/images folder with named placeholder files (petty-cash-home.png, runa-inventory.png, etc.) rendered via a gray "screenshot coming" component so Tim can drop real screenshots in without code changes.

## Global elements
- Header: wordmark "Smart AI Automations" (text is fine for v1), nav: How It Works · Case Study · Pricing · About · Resources, CTA button "Free SaaS Audit"
- Footer: tagline, nav repeat, "Tim O'Rourke · Lake Bluff, IL · Serving Chicagoland and beyond", email placeholder, LinkedIn icon link (env or '#'), "Built by Smart AI Automations on the same stack we ship to clients."

---

# PAGES & COPY (use this copy verbatim; light edits for flow allowed, no rewrites)

## 1. HOME — `/`

**Hero h1:** Replace the software you rent with systems you own.
**Hero sub:** Custom apps for small businesses — fixed price, delivered in days, AI built in. One client cut a $200/month subscription and got back two days a month of manual work for under $4,000, one time.
**Hero CTAs:** [Book the Free SaaS Audit] (primary) · [See the case study] (secondary)
**Hero visual:** placeholder phone-mockup screenshot of the petty cash app.

**Section — "The math most owners never do":** Most small businesses pay for 5–10 software subscriptions that each do part of the job — and still run the important things by hand. Add up the subscriptions. Add the hours of manual work at what your time is worth. That number, every year, forever, is what "we'll just keep using what we have" actually costs. We build one custom system that replaces the stack — and you own it.

**Section — three cards:**
- **Kill a manual process.** A crew was hand-typing receipts for two days a month. Now they photograph them, AI does the rest, and the report exports itself. From $1,995.
- **Replace a subscription.** Enterprise software that almost fits, $200 every month, forever — replaced by an app built around how the business actually runs. Paid for itself in 15 months.
- **One database, not ten logins.** Expenses, inventory, maintenance — one system that knows your business, instead of three products that don't talk.

**Section — proof strip:** "Two apps. $3,750 one-time. Replaced $2,400/year in subscriptions and ~24 days/year of manual work." → link to case study. (TODO comment: add Craig Rutkai's name + testimonial quote after written permission.)

**Section — embedded demo video:** responsive video embed, env-free, src placeholder with TODO for YouTube ID.

**Section — "Who this is for":** Owner-operated businesses, roughly 3–50 people, with at least one process that runs on spreadsheets, paper, or software that almost fits. Trades, charter & marine, professional practices, logistics, specialty retail — if you can describe the problem, we can usually show you working software the same week.

**CTA band** (global).

## 2. CASE STUDY — `/case-study` (full copy below — use verbatim)

**h1:** How a charter yacht captain got two days a month back — and cancelled a $2,400/year subscription.
**Sub:** Two custom apps. One database. $3,750, one time. *(// TODO(craig-permission): add "Craig Rutkai, M/Y Anne-Marie" and vessel hero photo after written OK.)*

**Section — The Client:** A working charter yacht captain runs a small business like any other owner — except his office moves, his crew pays cash for everything from fuel to dayworkers, and his "back office" was whatever tools he could find: an enterprise software subscription, Apple Numbers spreadsheets, and a lot of manual effort squeezed in around actually running the vessel. *(// TODO(craig-permission): name him.)*

**Section — The Problem (two problems, actually):**
**Petty cash ate two days every month.** Crew members spend cash constantly — fuel, provisions, dayworkers, parts. The captain recorded every dollar by hand: collecting receipts, reviewing invoices and backup, typing everything into spreadsheets, then building charts to compare actual spend against the yearly budget. Two full days, every month, of a captain's time spent on data entry.
**His software subscription didn't fit his boat.** He paid $200/month — $2,400 a year — for enterprise yacht-management software built for superyachts. Good software, wrong fit: it didn't handle inventory or maintenance the way his operation actually ran, and it didn't talk to his expense tracking. Enterprise prices for a partial fit, forever.

**Section — The Build (two app cards):**
**App 1 — Petty Cash ($750).** A phone app on every crew member's home screen, branded with the vessel. A crew member photographs a receipt; AI reads it and extracts the vendor, amount, and details automatically. Expenses file by department — Interior, Exterior, F&B, Engineering, Tips. Paying a dayworker with no receipt? One tap for a manual entry. Everything searchable, every change logged, and the whole thing exports to Excel formatted the way the captain reports against budget. *(Placeholder screenshots: capture flow, extracted fields, export.)*
**App 2 — Vessel Operations ($3,000).** Inventory with a critical threshold on every item — when the varnish runs low, he gets an alert before it's a problem. An equipment registry with maintenance scheduled by calendar date or engine hours, whichever each task needs. A yard-period dashboard organized the way he actually plans. Reports. And his existing data migrated in, so day one wasn't a blank screen. *(Placeholder screenshots: inventory alert, maintenance view, quad dashboard.)*
**Callout — the part no subscription offers:** It's one database. When a yard task says "varnish the brightwork," the same system shows how much varnish is in inventory and what he paid for it last time. Expenses, inventory, and maintenance aren't three products with three logins — they're one system that knows his boat.

**Section — The Results (render as a before/after table):**
| | Before | After |
|---|---|---|
| Monthly expense reporting | 2 days of manual entry and chart-building | Crew photographs receipts; Excel report on demand |
| Captain's time recovered | — | ~24 days per year |
| Software subscription | $200/month, partial fit | $0/month — he owns the system |
| Inventory alerts | Not handled | Automatic, per-item thresholds he set himself |
| Maintenance tracking | Not handled by his subscription | Calendar- and engine-hours-based, with history |
| Total investment | $2,400 every year, forever | $3,750 one time |

**Below table:** The operations app pays for itself against the cancelled subscription in about 15 months. Every month after that is $200 back in his pocket — for software that does more than what it replaced. The petty cash app paid for itself in roughly the first month of recovered time. And it didn't end at delivery: his third app is already scoped. That's how this works — solve one problem, earn the next one.

**Pull-quote block:** *(// TODO(craig-permission): testimonial quote. Until then render the stat as the quote: "Two days a month, back. $2,400 a year, cancelled.")*

**Closing section — "Could this work for your business?":** If you're paying monthly for software that almost fits — or burning days on a process you do by hand — the first step is the free SaaS Audit: 45 minutes, we list every subscription and manual process, and you see what one custom system would replace. No pitch deck. Just the math. → CTA band.

## 3. THE SAAS AUDIT — `/audit` (the conversion page; ads will land here)

**h1:** The Free SaaS Audit — 45 minutes, no pitch, just the math.
**Intro:** Bring your software bills and your most annoying manual process. We'll list every subscription you pay for, every hour of hand-work, and what one custom system would replace. You leave with a one-page memo: the real annual cost of your current setup, what we'd build instead, and one fixed price. Keep the memo either way.
**"What happens in 45 minutes" — three steps:** (1) The inventory: subscriptions, spreadsheets, manual steps. (2) The math: true annual cost of the status quo. (3) The memo: what to build, what it costs, what it saves — in writing within 48 hours.
**Who it's for / not for:** For owner-run businesses doing real volume through manual processes or almost-fits software. Not for: businesses happy with their stack (genuinely — keep it), or anyone shopping for the cheapest possible hourly dev.
**Cal.com inline embed** here.
**FAQ (accordion, 5 items):** Is it really free? (First ten each quarter, yes — it's how we earn the right to quote.) · Will you try to sell me? (We'll show you the math; the memo is yours regardless.) · What if my process is weird? (Weird is the specialty — our flagship client is a yacht.) · Who builds the app? (Tim, with AI-assisted tooling — that's why it's days, not months.) · Who maintains it after? (Optional monthly support plan, or we hand you the keys.)

## 4. PRICING — `/pricing`

**h1:** Pricing you can see before you call.
**Intro:** Agencies hide pricing because their projects start at $10,000 and run for months. Ours don't, so here it is.
**Three tier cards:**
- **Single-Problem App — from $1,995 fixed.** One app that kills one manual process. Written scope, one price, working software in days. Example: AI receipt capture that ended two days a month of data entry.
- **Operations System — $5,000–$8,000 fixed.** Multiple modules, one database — your back office in one system you own. Example: inventory + maintenance + dashboards that replaced a $2,400/year subscription.
- **Support Plan — $150–$500/month, optional.** Hosting, monitoring, fixes, small improvements. Or take the keys and run it yourself — your code, your data, either way.
**Below cards:** Every project is fixed price, agreed in writing before work starts. If scope grows, we re-quote — you'll never get a surprise invoice. Consulting at $175/hr available when a fixed price doesn't fit.
**CTA band.**

## 5. HOW IT WORKS — `/how-it-works`

**h1:** Days, not months. Here's how.
**Four steps (numbered, generous spacing):**
1. **The Audit (free, 45 min).** We find the highest-ROI problem and put real numbers on it.
2. **The Scope (within 48 hours).** What v1 does — and doesn't do — in plain English, with one fixed price. You sign off before anything is built.
3. **The Build (days, not months).** Modern stack plus AI-assisted development is why we're fast. You see working software early, on your phone, with your data.
4. **The Handoff.** Your team starts using it. We fix what real use reveals. Then: support plan, or the keys. You own the code and the data either way.
**Section — "Why we're fast and agencies aren't":** Traditional shops quote $25,000+ and 4–10 months because they're paying teams to hand-write everything. We build with AI-assisted tooling on a proven stack (Next.js, Supabase, Claude) and keep scope honest. Same quality bar — our flagship client's crew uses these apps every single day — a fraction of the timeline and price.
**CTA band.**

## 6. ABOUT — `/about`

**h1:** The bookkeeper who got tired of typing.
**Body:** I'm Tim O'Rourke. I spent 15 years doing small-business bookkeeping — my own fractional practice, plus office-manager and accountant roles before that. MBA in Accountancy from DePaul. U.S. Army veteran. I know what a shoebox of receipts looks like in February, because I was the one typing it in.
A year ago I taught myself to build software to automate the work I hated, and discovered the thing this whole business is built on: AI-assisted development has made custom software cheap enough and fast enough for ordinary small businesses — and almost nobody is building it for them. The agencies start at $10,000. The freelancer marketplaces are a lottery. The SaaS products almost fit.
So that's the niche: real custom software, fixed prices a small business can say yes to, delivered in days, built by someone who's actually kept your kind of books.
I live in Lake Bluff, Illinois. First client was a charter yacht captain — his crew uses the apps every day. Yours could be next.
**Photo placeholder + CTA band.**

## 7. RESOURCES — `/resources`

**h1:** The Software Bill Worksheet
**Body:** Find out what your stack really costs in 10 minutes: every subscription, every manual hour, totaled into one honest annual number. Free — we'll email it to you.
**MailerLite embed** (env) or placeholder form (name + email + button "Send me the worksheet").
**Below:** "Articles coming soon" section with three planned-post title stubs: "Custom App vs. SaaS: the 3-Year Math" · "What a Custom App Actually Costs in 2026 (Real Prices)" · "How a Yacht Captain Cancelled His Software Subscription." (Static stubs, no CMS in v1.)

---

# DEPLOYMENT (do this after the build passes locally)

1. `git init`, sensible .gitignore, conventional commits as you go.
2. Create a GitHub repo named `smart-ai-automations-site` using the `gh` CLI (`gh repo create --private --source=. --push`). If `gh` isn't authenticated, STOP and tell Tim exactly what to run (`gh auth login`) — do not attempt workarounds.
3. Vercel: if `vercel` CLI is available and authenticated, deploy with `vercel --prod` and link the project; otherwise, print step-by-step instructions for Tim to import the GitHub repo at vercel.com/new, set the env vars from .env.example, and attach his custom domain (Vercel dashboard → Domains → add domain → update DNS at his registrar with the records Vercel shows).
4. Verify: list every route and confirm 200s, confirm sitemap.xml renders, confirm the build has zero TypeScript errors.

# ACCEPTANCE CHECKLIST (print this filled-in when done)
☐ 7 routes live and linked in nav ☐ all copy above present, no lorem ipsum ☐ CTA band on every page ☐ Cal embed renders (or placeholder w/ TODO) ☐ email form renders (or placeholder w/ TODO) ☐ GA4/Pixel load only when env set ☐ metadata + OG on every page ☐ sitemap + robots ☐ mobile layout checked at 375px ☐ images via placeholder component ☐ repo pushed ☐ deployed or exact deploy instructions printed ☐ .env.example complete

# RULES
- This brief is fully self-contained — every page's copy is above. Do not ask for external files.
- Ask before assuming on anything ambiguous. Refuse scope creep (no blog CMS, no dark mode, no animations beyond subtle hover/fade).
- TODO comments at every spot awaiting Craig's permission (name, testimonial, unblurred screenshots) so they're greppable: `// TODO(craig-permission)`.
- TODO comments at every env-dependent embed: `// TODO(env)`.
