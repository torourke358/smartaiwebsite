# GEO / AEO research and site audit — Smart AI for Accountants

Prepared 2026-10-03 on branch `geo-optimization`. Phase 1 (research only). Nothing on the site has changed yet.

Goal: when a small business owner asks ChatGPT, Claude AI, Gemini, Perplexity or a Google AI Overview something like "who can automate my bookkeeping near Chicago?", the answer should name Tim O'Rourke and this site.

---

## (a) Key best practices, with sources

Each source is tagged by how much it can be trusted:

- **official** means vendor documentation.
- **study** means a third-party data study.
- **weak** means a blog roundup that couldn't be traced to a primary source.

### 1. Your own website is still the main thing AI engines cite
- For local queries, 93% of the unique domains AI engines cited were business websites, and those sites made up 42% of all citations. **study**, BrightLocal: https://www.brightlocal.com/research/local-ai-visibility-study/
- Google says optimizing for AI Overviews and AI Mode "is still SEO". A page only needs to be indexed and eligible for a snippet. No special AI markup or "AI text files" are required. **official**:
  - Google AI features doc (updated 2025-12-10): https://developers.google.com/search/docs/appearance/ai-features
  - Google's May 2026 guide, as summarized by Search Engine Journal (2026-05-15): https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/
- **What this means here:** have one clear page per service and per industry, written with real specifics such as the price, the process, the software involved and who it's for. Generic filler is what Google calls "commodity" content.

### 2. Answer-first FAQ writing
- Put the question in a heading and answer it in the first sentence. Use short, definite sentences and real numbers. **weak**, but every source agrees, e.g. AirOps data via https://thedigitalbloom.com/learn/ai-citation-position-revenue-report-2026/ (April 2026).
- Google says you don't need to "chunk" pages for AI. Its systems can pull the right paragraph out of a long page. **official**, SEJ 2026-05-15 (above).

### 3. Structured data (schema.org JSON-LD)
- Google supports Organization, LocalBusiness and Breadcrumb markup for rich results. **official**: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- **FAQ rich results are gone.** Google stopped showing them on 2026-05-07 and removed them from its testing tools in June 2026. FAQPage markup is harmless but produces nothing visible in Google. Source: https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/
- Ahrefs ran a matched test on 1,885 pages (May 2026). Adding JSON-LD did **not** measurably raise citations in AI Overviews, AI Mode or ChatGPT. **study**, summarized at https://authoritytech.io/curated/schema-markup-ai-citations-ahrefs-study-2026
- **What this means here:** add Organization, ProfessionalService and Person schema because it's nearly free and tells machines exactly who the business is. Don't expect it to get the site cited on its own merits.

### 4. llms.txt
- llms.txt is a proposal (https://llmstxt.org), not a standard. No major AI search product documents that it reads the file.
- Ahrefs looked at 137,210 domains (May 2026). 97% of llms.txt files got zero requests, and the top fetcher was a coding tool, not a search engine. **study**: https://ahrefs.com/blog/llmstxt-study/
- **What this means here:** it takes an hour and does no harm, so we'll add it. It's the lowest-impact item on the list.

### 5. robots.txt and AI crawlers (from each vendor's docs)

| Bot | What it does | Matters for being recommended? |
|---|---|---|
| OAI-SearchBot | Builds ChatGPT search results | **Yes** |
| GPTBot | OpenAI model training | Separate choice |
| ChatGPT-User | Fetches a page when a user asks | Yes |
| Claude-SearchBot | Builds Claude AI search results | **Yes** |
| ClaudeBot | Anthropic model training | Separate choice |
| Claude-User | Fetches a page when a user asks | Yes |
| PerplexityBot | Builds Perplexity search results | **Yes** |
| Google-Extended | Not a crawler. A switch for Gemini training and grounding; doesn't affect Google Search or AI Overviews | Yes, for Gemini |
| Applebot-Extended | Not a crawler. A switch for Apple AI training | Optional |

Sources (all **official**):
- https://developers.openai.com/api/docs/bots
- https://support.claude.com/en/articles/8896518
- https://docs.perplexity.ai/guides/bots
- https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- https://support.apple.com/en-us/119829

The claim that "ChatGPT uses Bing" is widely repeated but not confirmed in OpenAI's docs. Verifying the site in Bing Webmaster Tools is still cheap insurance, and Bing powers Microsoft Copilot.

### 6. Entity consistency
- Google says to keep your Business Profile current for AI answers. **official**, SEJ 2026-05-15.
- No primary study proves that consistent name, address and phone (NAP) raises AI citations. The case is logical rather than proven: an AI answer merges many sources, and mismatched names and descriptions make it less sure which business is which.
- **What this means here:** the site currently uses a different business name and offer from the ones in the brief, so this matters right now (see section b).

### 7. What AI engines cite, and "near Chicago" queries
- Only 38% of AI Overview citations come from top-10 Google results, down from 76% in July 2025. YouTube makes up 5.6% of them. **study**, Ahrefs via SEJ: https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/
- Reddit, YouTube, Wikipedia and LinkedIn are among the most-cited sites overall. ChatGPT and Perplexity cite very different sites, with about 11% overlap. **weak**
- BrightLocal: most AI local recommendations fall within 5 km of the searcher, but ChatGPT reaches much farther (up to ~287 km). Repeat searches overlap only 20–33%. So a Lake Bluff business **can** show up in ChatGPT for "Chicago suburbs" questions, but inconsistently. Track the same prompts every month rather than reading one result. **study**, same BrightLocal URL.
- 45% of consumers now use AI for local recommendations. **study**: https://www.brightlocal.com/research/lcrs-ai-trust/

---

## (b) Audit of the current codebase

Stack: Next.js 14 (App Router), TypeScript, Tailwind. Business name in code: `lib/site.ts` → **"Smart AI Automations"**.

### Pages

| Route | Title (what Google shows) | Meta description (short) |
|---|---|---|
| `/` | Smart AI Automations — Replace the software you rent with systems you own | Custom apps for small businesses… Automations start in the hundreds… |
| `/how-it-works` | How It Works — Days, not months | The Audit, the Scope, the Build, the Handoff… |
| `/case-study` | Case Study — Two days a month back, $2,400/year cancelled | Charter yacht captain… $7,250, one time… |
| `/work` | Work — Client builds and our own products | Client apps: AI receipt capture, vessel operations… |
| `/pricing` | Automations start in the hundreds | Smallest app was $750… |
| `/about` | About — The bookkeeper who got tired of typing | 15 years of small-business bookkeeping, MBA in Accountancy from DePaul… |
| `/resources` | Resources — The Software Bill Worksheet | Free worksheet… |
| `/audit` | The Free SaaS Audit — 45 minutes, no pitch, just the math | Contact form that emails Tim through Resend |

Every page already has a unique title and description. All of them are about custom software and SaaS replacement, **not** accounting automation.

### Structured data
- One block site-wide in `app/layout.tsx`: `ProfessionalService` with:
  - name "Smart AI Automations"
  - phone 847-894-1056 and the hotmail address
  - founder Tim O'Rourke
  - Lake Bluff, IL
  - areaServed: Lake Bluff, Lake Forest, Lake County, Chicagoland
  - description "…Automations start in the hundreds."
- It has **no** `sameAs` links (LinkedIn, YouTube) and no separate Organization or Person entry.
- There is no FAQ, breadcrumb or service schema anywhere.

### robots.txt, sitemap and llms.txt (checked live today)
- `https://smartaiforaccountants.com/robots.txt` contains only `User-agent: * / Allow: /`. Every AI crawler is **allowed** by default and none is blocked, but none is named explicitly.
- `sitemap.xml` exists, is generated by `app/sitemap.ts`, and lists all 8 pages. Its lastmod is 2026-08-05.
- `llms.txt` doesn't exist (404).

### Other findings
- The footer LinkedIn link is a placeholder (`#`), and the site has no YouTube link anywhere.
- Every "book" button goes to the `/audit` contact form. calendly.com/timorourke is not used anywhere. I checked just now that it loads (HTTP 200), along with the LinkedIn and YouTube URLs.
- **There is no lint setup.** `package.json` has no `lint` script and ESLint isn't installed. `npm run build` does type-check. I can add Next's standard ESLint config in Phase 2 if you want a real lint step.
- Real proof that already exists, with permission on file: the Craig Rutkai testimonial and the charter-yacht case study. No other testimonials exist.

### ⚠ Conflicts with the facts in the brief (need Tim's decision before Phase 2)
1. **Business name.** The site says "Smart AI Automations" everywhere: header, footer, titles and schema. The brief says "Smart AI for Accountants (Smart AI for Small Business)". For entity consistency, every page should use one name.
2. **Offer and price.** The site sells custom apps and SaaS replacement: "Automations start in the hundreds", a $750 smallest app, $6,500 and $7,250 project figures, and a three-tier pricing page. The brief says "automating a small business's accounting department, $2,500 per business."
3. **Tim's background.** The About page says "15 years of small-business bookkeeping… office-manager and accountant roles… **MBA in Accountancy** from DePaul". The brief says 10 years running Order Up Profits, Senior Accountant at Martin Brower, and **MS Accounting**, DePaul.
4. **Booking.** The site uses the `/audit` contact form, and the brief says calendly.com/timorourke. Should the new pages use Calendly, the form, or both?
5. **Phone number.** 847-894-1056 is on the site and in the schema but not in the brief. Should it stay?
6. **Service area wording.** The site says "Lake County and Chicagoland", and the brief says "North Shore / Chicago suburbs (also remote)". These are compatible. I'd merge them.

---

## (c) Prioritized change list (plain English)

1. **Settle the name, offer and bio first.** AI engines piece together who you are from every page. If the homepage says "custom apps, from the hundreds" and the new pages say "$2,500 accounting automation", the AI may describe you wrong or skip you. This is the single biggest item.
2. **Write the new pages AI actually quotes:**
   - an `/faq` page with direct, answer-first replies
   - three industry pages (restaurants, construction, medical practices)
   - a corrected `/about` page

   These pages carry real specifics: Restaurant365, WIP schedules, retainage, $2,500, Lake Bluff.
3. **Give every page a specific title and description** that names the service and place, e.g. "Restaurant Bookkeeping Automation — Lake Bluff & Chicago Suburbs".
4. **Name the AI search bots explicitly in robots.txt** (OAI-SearchBot, Claude-SearchBot, PerplexityBot, the user-fetch bots, Google-Extended, and the training bots if you're OK with that). Also add the new pages to the sitemap.
5. **Add structured data:** Organization + ProfessionalService + Person (Tim), with `sameAs` links to LinkedIn and YouTube, plus FAQPage on `/faq`. This is cheap clarity, not a citation magic trick.
6. **Fix the footer** with the real LinkedIn link, and add YouTube and the Calendly booking link.
7. **Add `/llms.txt`.** It's low impact, but cheap.

Off-site work: Claude can't do these in code, but they matter as much as everything above.

8. Claim and complete a **Google Business Profile**, using the same name, description and service area, and start collecting Google reviews.
9. Make the **LinkedIn** headline and About section, the YouTube channel description, and any directory listings (Bing Places, Apple Business Connect, local chamber) use the same name and one-line description.
10. Verify the site in **Google Search Console** and **Bing Webmaster Tools** and submit the sitemap.
11. **Track** the prompts in `docs/ai-prompts-to-track.md` monthly in Otterly (or by hand). Results are volatile, so look at trends, not single answers.

---

## (d) Questions an owner would ask an AI that should lead to us

These are also saved separately as `docs/ai-prompts-to-track.md` (to be created in Phase 2, per the brief).

**Restaurants**
1. Who can automate bookkeeping for my restaurant near Chicago?
2. Is there someone who can connect Restaurant365 to my bank and POS so I stop doing manual entries?
3. How can I automate daily sales and invoice entry for a restaurant?
4. What does it cost to automate a restaurant's accounting?

**Construction**

5. Who can automate job costing and WIP schedules for a small construction company in Illinois?
6. How do I automate progress billing, retainage and lien waiver tracking?
7. Is there a bookkeeper near Lake Forest IL who understands construction job costing?

**Medical practices**

8. Who can automate the accounting for a small medical practice in the Chicago suburbs?
9. How can a doctor's office automate bookkeeping and month-end close?

**General small business**

10. Who can automate my small business bookkeeping near Chicago?
11. Bookkeeping automation consultant near Lake Bluff, IL / the North Shore
12. How much does it cost to automate a small business accounting department?
13. Can AI automate my bookkeeping, and who can set that up for me?
14. Who uses Claude AI to automate small business accounting?
15. Alternatives to hiring a full-time bookkeeper for a small business in the Chicago suburbs
16. How do I stop doing manual data entry in QuickBooks?
17. Is there a fixed-price bookkeeping automation service for small businesses?
18. Who can automate month-end close for a small company?
19. Accounting automation for a travel company
20. Best way to automate accounts payable for a small business near Chicago

---

## Decisions (Tim, 2026-10-03) and Phase 2 status

- **Name:** "Smart AI Bookkeeping". Tagline: "Accounting automation for small businesses". **Domain: keep smartaiforaccountants.com** (Tim's final decision, 2026-10-03). No new domain.
- **Pricing:**
  - $2,500 one-time setup per business.
  - **Optional** upkeep from $175/month, for about 1 hour of upkeep a month.
  - Bookkeeping work priced separately (the amount is still a TODO).
- **Booking:** Calendly (calendly.com/timorourke). The `/audit` page keeps the contact form as the "rather write" option.
- **About page:** rewritten from the facts in the brief.
- **Craig testimonial:** kept.
- **Phone:** 847-894-1056 kept. Tim didn't say to remove it.
- Phase 2 implemented on branch `geo-optimization`. See the commit for the full list.
