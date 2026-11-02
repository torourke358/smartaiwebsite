// FAQ content for /faq and its FAQPage structured data. First sentence answers
// the question; the rest is detail. Facts only — anything Tim hasn't confirmed
// is marked with `todo` and rendered as a visible placeholder.
export type FaqItem = { q: string; a: string; todo?: string };

export const faqSections: { heading: string; items: FaqItem[] }[] = [
  {
    heading: "About the service",
    items: [
      {
        q: "What does Smart AI Bookkeeping do?",
        a: "Smart AI Bookkeeping runs the back office for trades businesses: monthly books, bank reconciliations, job costing, bill pay, invoicing and collections, payroll entries, and for project trades, pay applications and WIP schedules. Claude AI takes the typing out and Tim O'Rourke reviews the numbers. It's based in Lake Bluff, Illinois.",
      },
      {
        q: "Who does bookkeeping for contractors near Chicago?",
        a: "Smart AI Bookkeeping, run by Tim O'Rourke in Lake Bluff, Illinois, does the books and back office for HVAC, plumbing, electrical, roofing, concrete, landscaping and other trades businesses on the North Shore and in the Chicago suburbs. Plans start at $1,000/month. Tim also works with contractors outside the Chicago area remotely.",
      },
      {
        q: "Which trades do you work with?",
        a: "All trades. Service trades such as HVAC, plumbing, electrical service, landscaping and pest control, and project trades such as concrete, roofing, framing, electrical and mechanical subs and general contractors.",
      },
      {
        q: "Do you know WIP schedules and pay applications?",
        a: "Yes. Tim O'Rourke has full construction job costing experience: WIP schedules with over/under billing, progress billing and pay applications, retainage and lien waivers.",
      },
      {
        q: "Will this replace my bookkeeper?",
        a: "It can. Back Office at $2,000/month covers what most small trades businesses hire a bookkeeper for, for less than a third of what an in-house bookkeeper costs once payroll taxes and benefits are added. If you'd rather keep your bookkeeper, the Controller plan sits above them.",
      },
      {
        q: "What AI do you use?",
        a: "Smart AI Bookkeeping uses Claude AI for the repetitive entry, coding and matching. A person reviews the numbers every month.",
      },
      {
        q: "Which accounting software do you work with?",
        a: "Smart AI Bookkeeping works in QuickBooks. Tim O'Rourke has more than 10 years on QuickBooks. Other systems are checked on the free call.",
      },
    ],
  },
  {
    heading: "Pricing",
    items: [
      {
        q: "How much does bookkeeping for a trades business cost?",
        a: "Smart AI Bookkeeping charges one fixed monthly price: Books $1,000/month, Back Office $2,000/month, or Controller $4,000/month. There's a one-time start fee from $2,500 to clean up and set up your books.",
      },
      {
        q: "What's the difference between the plans?",
        a: "Books covers monthly books, bank and card reconciliations and a job profit report. Back Office adds bill pay, invoicing and collections, payroll entries, and for project trades, pay applications, retainage and the WIP schedule. Controller adds a cash forecast, an over/under billing review and statements ready for your bank and bonding company.",
      },
      {
        q: "What does the start fee cover?",
        a: "The start fee, from $2,500, covers cleaning up your books, setting up your jobs, vendors and bank feeds, and building the automations. If your books are several months behind, it's quoted on the free call before you commit.",
      },
      {
        q: "What makes the price go up?",
        a: "More than about 15 open jobs at once, more than about 25 people on payroll, more than one company, or certified payroll. You get one fixed monthly number in writing before you start.",
      },
      {
        q: "Is there a long contract?",
        a: "No. You can leave after 90 days if it isn't working.",
      },
      {
        q: "Do you have a founding client offer?",
        a: "Yes. The first three trades clients get $500/month off for their first three months, in exchange for letting us write up the results as a case study.",
      },
    ],
  },
  {
    heading: "About Tim",
    items: [
      {
        q: "Who is Tim O'Rourke?",
        a: "Tim O'Rourke is the founder of Smart AI Bookkeeping in Lake Bluff, Illinois. He ran his own accounting firm, Order Up Profits, for 10 years, was a Senior Accountant at Martin Brower (McDonald's global distributor), and holds an MS in Accounting from DePaul University.",
      },
      {
        q: "Is Tim O'Rourke a CPA?",
        a: "No. Tim O'Rourke is not a CPA. He holds an MS in Accounting from DePaul University and has more than 10 years of hands-on accounting and bookkeeping experience.",
      },
      {
        q: "Where are you located?",
        a: "Smart AI Bookkeeping is based in Lake Bluff, Illinois. It serves the North Shore and the Chicago suburbs in person, and clients anywhere remotely.",
      },
      {
        q: "How do I get started?",
        a: "Book a free 20-minute call at calendly.com/timorourke/new-meeting-1. On the call, Tim walks through how your books run today and gives you a fixed monthly quote within 48 hours.",
      },
    ],
  },
];

export const allFaqItems = faqSections.flatMap((section) => section.items);
