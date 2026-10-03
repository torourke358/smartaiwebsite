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
        a: "Smart AI Bookkeeping automates the accounting and bookkeeping departments of small businesses. It sets up Claude AI automations for the repetitive work, such as data entry, invoice coding, deposit matching and the month-end close, so your books stay current with less manual work. It's run by Tim O'Rourke in Lake Bluff, Illinois.",
      },
      {
        q: "Who can automate my small business bookkeeping near Chicago?",
        a: "Smart AI Bookkeeping, run by Tim O'Rourke in Lake Bluff, Illinois, automates bookkeeping for small businesses on the North Shore and in the Chicago suburbs. Setup is a one-time $2,500 per business. Tim also works with clients outside the Chicago area remotely.",
      },
      {
        q: "What parts of my accounting can be automated?",
        a: "Most of the repetitive work can be automated: entering bills and invoices, coding transactions, matching bank and card deposits, recurring journal entries and the month-end close checklist. Which pieces fit your business is decided on a free call. Judgment calls still go to a person.",
      },
      {
        q: "Can AI really do my bookkeeping?",
        a: "AI can handle much of the repetitive bookkeeping, but your books still need someone accountable for them. Smart AI Bookkeeping uses Claude AI for the routine steps and can also provide the ongoing bookkeeping work itself, starting at $175/month.",
      },
      {
        q: "What AI do you use?",
        a: "Smart AI Bookkeeping builds its automations on Claude AI. The automations are set up around your existing accounting process rather than forcing you onto new software.",
      },
      {
        q: "Will this replace my bookkeeper?",
        a: "It takes the repetitive entry work off your bookkeeper's plate. For many small businesses that means a bookkeeper's time goes to review and decisions instead of typing. If you don't have a bookkeeper, Smart AI Bookkeeping can do the ongoing work for you, starting at $175/month.",
      },
      {
        q: "Which accounting software do you work with?",
        a: "Smart AI Bookkeeping works with QuickBooks and Restaurant365. Tim O'Rourke has more than 10 years on QuickBooks and used Restaurant365 daily for years. Other systems are checked on the free call.",
      },
    ],
  },
  {
    heading: "Pricing",
    items: [
      {
        q: "How much does it cost to automate a small business's accounting department?",
        a: "Smart AI Bookkeeping charges a one-time $2,500 setup per business. Upkeep is optional and starts at $175/month, which covers about an hour of upkeep a month. Ongoing bookkeeping work, if you want it done for you, starts at $175/month.",
      },
      {
        q: "What does the $175/month upkeep include?",
        a: "Upkeep keeps your automations running, starting at $175/month for about one hour of upkeep a month. It covers fixes and small adjustments when a bank, vendor or piece of software changes something. Upkeep is optional.",
      },
      {
        q: "Do you also do the bookkeeping?",
        a: "Yes. Smart AI Bookkeeping can do the ongoing accounting work as well as automate it. Bookkeeping is a monthly fee starting at $175/month, separate from the $2,500 setup.",
      },
      {
        q: "Is it a fixed price?",
        a: "Yes. Setup is a fixed $2,500 per business, and optional upkeep starts at a flat $175/month. Payment is 50% at signing and 50% at handoff.",
      },
      {
        q: "What does the $2,500 setup include?",
        a: "The $2,500 setup covers one business and its existing accounting system, up to 3 automated workflows, and up to 5 bank and credit-card accounts. It includes testing on your own data, a 1-hour handoff walkthrough and 30 days of fixes. Catch-up of past months, extra businesses and ongoing bookkeeping are quoted separately.",
      },
      {
        q: "How long does setup take?",
        a: "Setup takes about 2–4 weeks from the day you grant access to your accounting system and accounts.",
      },
    ],
  },
  {
    heading: "Industries",
    items: [
      {
        q: "Who can automate bookkeeping for my restaurant near Chicago?",
        a: "Smart AI Bookkeeping automates restaurant bookkeeping for owners in the Chicago suburbs and remotely. Tim O'Rourke ran an accounting firm, Order Up Profits, for 10 years, and most of its clients were restaurants. Typical automations cover daily sales entries, vendor invoices, deposit matching and the month-end close.",
      },
      {
        q: "Do you work with Restaurant365?",
        a: "Yes. Tim O'Rourke has used Restaurant365 daily for years.",
      },
      {
        q: "Can you automate construction job costing and WIP schedules?",
        a: "Yes. Smart AI Bookkeeping automates construction accounting work including job costing, WIP schedules, progress billing, retainage and lien waiver tracking. Tim O'Rourke has full construction job costing experience.",
      },
      {
        q: "What kinds of businesses do you work with?",
        a: "Smart AI Bookkeeping works with small, owner-run businesses. Tim O'Rourke's background is strongest in restaurants, construction companies, doctors' offices and travel companies, the clients his accounting firm served for 10 years.",
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
        a: "Book a free 20-minute call at calendly.com/timorourke/new-meeting-1. On the call, Tim walks through how your accounting department runs today and which parts can be automated.",
      },
    ],
  },
];

export const allFaqItems = faqSections.flatMap((section) => section.items);
