// Content for /industries/[slug]. Experience lines must come only from Tim's
// stated background (see docs/geo-research.md) — never invent clients or results.
export type Industry = {
  slug: string;
  name: string; // used in nav cards, e.g. "Restaurants"
  title: string; // <title>
  description: string; // meta description
  h1: string;
  intro: string;
  painPoints: { title: string; body: string }[];
  automations: string[];
  experience: string[];
  testimonialTodo: string;
};

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    title: "Restaurant Bookkeeping Automation near Chicago",
    description:
      "Automate your restaurant's bookkeeping: daily sales entries, vendor invoices, deposit matching and month-end close. $2,500 setup by Tim O'Rourke, a daily Restaurant365 user. Lake Bluff, IL.",
    h1: "Restaurant bookkeeping automation",
    intro:
      "Smart AI Bookkeeping automates the repetitive accounting work in a restaurant: daily sales entries, vendor invoices, deposit matching and the month-end close. Setup is a one-time $2,500. Tim O'Rourke ran an accounting firm whose clients were mostly restaurants and used Restaurant365 daily for years.",
    painPoints: [
      {
        title: "Daily sales entries",
        body: "Every day of POS sales, comps, tips and payment types has to land in the books. Done by hand, it's the first thing that falls behind.",
      },
      {
        title: "A stack of vendor invoices",
        body: "Food, beverage, paper and repair invoices arrive from many vendors every week, and each one needs to be entered and coded to the right account.",
      },
      {
        title: "Deposits that don't match sales",
        body: "Card processors and delivery apps settle on their own schedule, net of fees, so bank deposits rarely line up with a single day's sales.",
      },
      {
        title: "Food cost you see too late",
        body: "If the books close weeks after month-end, food and labor cost numbers arrive too late to act on.",
      },
    ],
    automations: [
      "Daily sales journal entries from your POS reports",
      "Vendor invoice capture and coding",
      "Matching card and delivery-app deposits to sales",
      "Recurring entries and the month-end close checklist",
      "Month-end reports the owner can actually read",
    ],
    experience: [
      "Ran his own accounting firm, Order Up Profits, for 10 years. Most clients were restaurants.",
      "Daily Restaurant365 user for years.",
      "Senior Accountant at Martin Brower, McDonald's global distributor, booking $500M+ a month in cash transactions.",
    ],
    testimonialTodo:
      "Add a real restaurant client quote or result here, or delete this box.",
  },
  {
    slug: "construction",
    name: "Construction",
    title: "Construction Accounting Automation: Job Costing & WIP",
    description:
      "Automate construction accounting: job costing, WIP schedules, progress billing, retainage and lien waiver tracking. $2,500 setup by Tim O'Rourke. Lake Bluff, IL, serving Chicago suburbs.",
    h1: "Construction accounting automation",
    intro:
      "Smart AI Bookkeeping automates the accounting work that slows down small construction companies: job costing, WIP schedules, progress billing, retainage and lien waiver tracking. Setup is a one-time $2,500. Tim O'Rourke has full construction job costing experience.",
    painPoints: [
      {
        title: "Job costing that lags the job",
        body: "Costs have to be coded to the right job and phase as they come in. When that's done in a batch at month-end, nobody knows which jobs are making money until it's too late.",
      },
      {
        title: "The WIP schedule",
        body: "A work-in-progress schedule pulls together contract values, costs to date and billings to show over- and under-billing. Rebuilt by hand in a spreadsheet, it eats days every month.",
      },
      {
        title: "Progress billing and retainage",
        body: "Each pay application has to tie to the schedule of values, and retainage held by customers, and held from subs, has to be tracked until it's released.",
      },
      {
        title: "Lien waivers",
        body: "Collecting the right waivers from subs and suppliers before paying them is easy to miss when it lives in email.",
      },
    ],
    automations: [
      "Coding incoming bills and costs to jobs",
      "Building the monthly WIP schedule from your books",
      "Progress billing support and retainage tracking",
      "Lien waiver tracking before payments go out",
      "Month-end close and job profitability reports",
    ],
    experience: [
      "Full construction job costing experience: WIP schedules, progress billing, retainage and lien waivers.",
      "Ran his own accounting firm, Order Up Profits, for 10 years, with construction clients.",
      "MS in Accounting, DePaul University.",
    ],
    testimonialTodo:
      "Add a real construction client quote or result here, or delete this box.",
  },
  {
    slug: "medical-practices",
    name: "Medical practices",
    title: "Medical Practice Bookkeeping Automation near Chicago",
    description:
      "Automate a medical practice's bookkeeping: deposit matching, expense coding, payroll entries and month-end close. $2,500 setup by Tim O'Rourke. Lake Bluff, IL, serving the North Shore.",
    h1: "Medical practice bookkeeping automation",
    intro:
      "Smart AI Bookkeeping automates the routine bookkeeping in a small medical practice: matching deposits, coding expenses, recording payroll and closing the month. Setup is a one-time $2,500. Tim O'Rourke's accounting firm, Order Up Profits, served doctors among its clients.",
    painPoints: [
      {
        title: "Deposits from many sources",
        body: "Insurance payments, patient card payments and other receipts land in the bank in lumps that have to be matched and recorded correctly.",
      },
      {
        title: "Expense coding",
        body: "Medical supplies, rent, software and staffing costs need consistent coding so the practice can see what it really costs to run.",
      },
      {
        title: "Payroll entries",
        body: "Provider and staff payroll has to be recorded accurately every pay period.",
      },
      {
        title: "A slow month-end",
        body: "When the close drags, owners make decisions on numbers that are weeks old.",
      },
    ],
    automations: [
      "Matching bank deposits to the right income accounts",
      "Expense capture and coding",
      "Payroll journal entries",
      "Recurring entries and the month-end close checklist",
      "Monthly reports for the owners",
    ],
    experience: [
      "Ran his own accounting firm, Order Up Profits, for 10 years. Clients included doctors.",
      "Senior Accountant at Martin Brower, where he led unclaimed property audit prep that recovered $100k+.",
      "MS in Accounting, DePaul University.",
    ],
    testimonialTodo:
      "Add a real medical-practice client quote or result here, or delete this box. Also confirm how patient information is kept out of the automations (HIPAA) before this page goes live.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
