export type Project = {
  slug: string;
  number: string;
  name: string;
  logoMark: string; // 1-2 char monogram
  category: string;
  industry: string;
  year: string;
  role: string;
  duration: string;
  platform: string;
  tagline: string;
  summary: string;
  brand: {
    from: string;
    to: string;
    accent: string;
    surface: string; // hex for hero surface
    text: string;
    font: string;
    iconStyle: string;
  };
  overview: string;
  businessGoals: string[];
  problem: string;
  solution: string;
  research: string;
  competitors: { name: string; strength: string; weakness: string }[];
  personas: { name: string; role: string; age: number; bio: string; goals: string[]; pains: string[] }[];
  userFlow: string[];
  wireframes: string;
  lowFi: string;
  hiFi: string;
  prototype: string;
  finalUI: string;
  responsive: string;
  handoff: string;
  accessibility: string[];
  results: { label: string; value: string; caption: string }[];
  lessons: string[];
  screens: { title: string; type: "desktop" | "mobile" | "tablet"; tone: "light" | "dark"; content: ScreenContent }[];
};

export type ScreenContent =
  | { kind: "dashboard"; metrics: { label: string; value: string; delta?: string }[]; sections: string[] }
  | { kind: "auth"; title: string; fields: string[] }
  | { kind: "landing"; headline: string; sub: string; cta: string }
  | { kind: "list"; title: string; items: { title: string; sub: string; meta?: string }[] }
  | { kind: "detail"; title: string; sub: string; sections: string[] }
  | { kind: "checkout"; title: string; lines: { label: string; value: string }[]; total: string }
  | { kind: "profile"; name: string; role: string; stats: { label: string; value: string }[] }
  | { kind: "settings"; groups: { title: string; items: string[] }[] }
  | { kind: "analytics"; title: string; kpis: { label: string; value: string }[] }
  | { kind: "chat"; title: string; messages: { from: "me" | "them"; text: string }[] }
  | { kind: "map"; title: string; markers: string[] }
  | { kind: "chart"; title: string; series: number[] };

const makeScreens = (
  seeds: { title: string; type: "desktop" | "mobile" | "tablet"; tone: "light" | "dark"; content: ScreenContent }[],
) => seeds;

export const projects: Project[] = [
  {
    slug: "nexus-ai",
    number: "01",
    name: "Nexus AI",
    logoMark: "N",
    category: "Enterprise AI Dashboard",
    industry: "Artificial Intelligence · SaaS",
    year: "2025",
    role: "Lead Product Designer",
    duration: "14 weeks",
    platform: "Web · Desktop",
    tagline: "The command center for enterprise AI orchestration.",
    summary:
      "A control plane that lets enterprise teams orchestrate, observe and govern hundreds of AI agents across their stack — with real-time cost and safety guardrails.",
    brand: {
      from: "#4F7CFF",
      to: "#8B5CF6",
      accent: "#00D4FF",
      surface: "#0B0F1F",
      text: "#F8FAFF",
      font: "Space Grotesk",
      iconStyle: "Duotone geometric",
    },
    overview:
      "Nexus AI is a control plane for Fortune 500 teams running production LLM workloads. The product unifies model routing, evaluation, cost, safety and observability into a single, decisive interface.",
    businessGoals: [
      "Cut time-to-first-deployment from 6 weeks to under 5 days.",
      "Reduce inference cost by 30% via intelligent routing.",
      "Position Nexus as the default AIOps layer for the enterprise.",
    ],
    problem:
      "Ops teams were juggling 8+ dashboards to run a single agent — one for keys, one for evals, one for logs. Incident response took hours; safety violations were caught days late.",
    solution:
      "A unified command surface with a live topology view, incident-first inbox, and inline policy editing. Every action collapses to one keystroke.",
    research:
      "17 discovery interviews across ML platform, SRE and compliance. Contextual inquiries with 4 lighthouse customers. Diary studies over 3 weeks to surface after-hours pain.",
    competitors: [
      { name: "LangSmith", strength: "Deep tracing", weakness: "No policy layer" },
      { name: "Datadog LLM", strength: "Metrics maturity", weakness: "Weak agent model" },
      { name: "Arize", strength: "Evaluation depth", weakness: "Cluttered IA" },
    ],
    personas: [
      {
        name: "Priya Nair",
        role: "Head of ML Platform",
        age: 34,
        bio: "Runs the platform team at a top-3 US bank. Reports to the CTO on AI risk quarterly.",
        goals: ["Prove ROI of AI spend", "Ship without waking up SRE"],
        pains: ["Fragmented tools", "Compliance ambiguity"],
      },
      {
        name: "Marcus Chen",
        role: "Staff SRE",
        age: 31,
        bio: "First responder for every LLM incident. Lives in dashboards.",
        goals: ["Sub-5 min MTTR", "Preventable incidents caught early"],
        pains: ["Alert fatigue", "No blast-radius view"],
      },
    ],
    userFlow: ["Sign in via SSO", "Land on Command Center", "Triage active incident", "Roll back model", "File postmortem"],
    wireframes: "42 low-fi screens shaped in FigJam over three rounds of team critique.",
    lowFi: "Grayscale wireframes exploring the incident-first inbox and topology view.",
    hiFi: "Full hi-fi across 60+ screens, native dark theme with cyan accents.",
    prototype: "Two lighthouse prototypes tested with 6 platform engineers. Task success went from 62% to 94%.",
    finalUI: "Shipped as the default surface for all 400 internal ops users at pilot customers.",
    responsive: "Fluid layout from 1280 → 2560px. Tablet view for on-call engineers.",
    handoff: "Design tokens shipped to Storybook. Redlines auto-generated via a custom Figma plugin.",
    accessibility: ["WCAG 2.2 AA", "Full keyboard nav", "Prefers-reduced-motion respected", "12:1 contrast on critical states"],
    results: [
      { label: "MTTR", value: "-72%", caption: "Median incident resolution" },
      { label: "Inference cost", value: "-34%", caption: "After smart routing rollout" },
      { label: "Adoption", value: "94%", caption: "Weekly active ops users" },
    ],
    lessons: [
      "Ship one decisive surface, not five clever ones.",
      "Incident-first > metric-first for ops products.",
      "Design tokens save the last 20% of the timeline.",
    ],
    screens: makeScreens([
      { title: "Command Center", type: "desktop", tone: "dark", content: { kind: "dashboard", metrics: [
        { label: "Active agents", value: "1,284", delta: "+12%" },
        { label: "Cost / day", value: "$8,412", delta: "-9%" },
        { label: "P95 latency", value: "312ms", delta: "-4%" },
        { label: "Safety score", value: "98.4", delta: "+1.1" },
      ], sections: ["Live topology", "Incident inbox", "Cost trend", "Policy audits"] } },
      { title: "Model routing", type: "desktop", tone: "dark", content: { kind: "chart", title: "Requests per model (7d)", series: [12, 24, 18, 32, 40, 28, 44] } },
      { title: "Incident detail", type: "desktop", tone: "dark", content: { kind: "detail", title: "INC-2438 · Latency spike on gpt-4o", sub: "Started 12 min ago · Owner: Priya", sections: ["Timeline", "Blast radius", "Related deploys", "Suggested actions"] } },
      { title: "SSO login", type: "desktop", tone: "dark", content: { kind: "auth", title: "Sign in to Nexus", fields: ["Work email", "Continue with SSO"] } },
      { title: "Mobile on-call", type: "mobile", tone: "dark", content: { kind: "list", title: "Incidents", items: [
        { title: "INC-2438", sub: "Latency spike", meta: "12m" },
        { title: "INC-2437", sub: "Cost anomaly", meta: "1h" },
        { title: "INC-2436", sub: "Policy violation", meta: "3h" },
      ] } },
      { title: "Settings", type: "desktop", tone: "dark", content: { kind: "settings", groups: [
        { title: "Workspace", items: ["Members", "SSO", "Billing", "Audit log"] },
        { title: "Policies", items: ["Content safety", "PII redaction", "Rate limits"] },
      ] } },
    ]),
  },
  {
    slug: "vault",
    number: "02",
    name: "Vault",
    logoMark: "V",
    category: "FinTech Banking App",
    industry: "Consumer FinTech",
    year: "2024",
    role: "Product & Brand Design",
    duration: "16 weeks",
    platform: "iOS · Android",
    tagline: "Banking that respects your attention.",
    summary:
      "A neobank experience for high-income millennials. Zero clutter, one-tap money moves, and a private-by-default posture.",
    brand: { from: "#0B3D2E", to: "#0E5C46", accent: "#B8FF5A", surface: "#0A1512", text: "#F2FFF7", font: "Söhne / Space Grotesk", iconStyle: "Sharp outline, 1.5px" },
    overview:
      "Vault re-imagines the mobile bank around a single question: 'What should I do with my money right now?' — surfacing intelligent nudges instead of endless statements.",
    businessGoals: [
      "Reach 250k activated users in year one.",
      "Increase deposits per user by 40% vs. category baseline.",
      "Rank top 5 in the US finance category.",
    ],
    problem: "Legacy banking apps treat every user like a treasurer. New users want clarity, not chartjunk.",
    solution: "A card-based feed of decisions, not data. Every screen has one primary action and a strong point of view.",
    research: "22 usability sessions, 3 concept tests, and a 400-person quantitative preference study.",
    competitors: [
      { name: "Revolut", strength: "Feature breadth", weakness: "Overwhelming IA" },
      { name: "Monzo", strength: "Brand warmth", weakness: "Weak wealth story" },
      { name: "Chime", strength: "Simplicity", weakness: "Design feels dated" },
    ],
    personas: [
      { name: "Sam Ortega", role: "Product Manager", age: 29, bio: "Earns well, saves inconsistently, wants to feel in control.", goals: ["Automate savings", "Track subscriptions"], pains: ["Info overload", "Anxiety around money"] },
    ],
    userFlow: ["Open app", "Biometric unlock", "See 'Today' brief", "Approve suggested transfer", "Done in 6s"],
    wireframes: "Explored 5 IA models; converged on a two-tab shell.",
    lowFi: "Grayscale flows for onboarding, transfers and disputes.",
    hiFi: "Deep-forest theme with a signature electric-lime accent.",
    prototype: "Motion prototype in native code, tested with 12 users.",
    finalUI: "Shipped iOS first, Android two weeks later.",
    responsive: "Optimized for 6.1\" and 6.7\" iPhones and pixel-perfect on Pixel 8.",
    handoff: "Native tokens exported to Swift and Compose.",
    accessibility: ["Dynamic type", "VoiceOver labels on every card", "Reduce-motion animation set", "Colorblind-safe accent"],
    results: [
      { label: "Activation", value: "68%", caption: "vs 41% category avg" },
      { label: "NPS", value: "72", caption: "Beta cohort, week 6" },
      { label: "Deposits / user", value: "+46%", caption: "vs prior product" },
    ],
    lessons: ["Reduce, then reduce again.", "Trust is a UI feature.", "Motion should carry meaning, not decoration."],
    screens: makeScreens([
      { title: "Today", type: "mobile", tone: "dark", content: { kind: "list", title: "Today", items: [
        { title: "Move $420 to Savings", sub: "You spent less than usual this week", meta: "Suggested" },
        { title: "Netflix renews Fri", sub: "$15.99 · Cancel in 1 tap", meta: "Sub" },
        { title: "Payday +$4,800", sub: "Auto-split queued", meta: "Wed" },
      ] } },
      { title: "Send money", type: "mobile", tone: "dark", content: { kind: "checkout", title: "Send", lines: [
        { label: "To", value: "Alex Rivera" },
        { label: "Amount", value: "$120.00" },
        { label: "Fee", value: "Free" },
      ], total: "$120.00" } },
      { title: "Card", type: "mobile", tone: "dark", content: { kind: "profile", name: "Vault Metal", role: "•••• 4821", stats: [
        { label: "This month", value: "$2,340" },
        { label: "Cashback", value: "$46" },
        { label: "Limit", value: "$15,000" },
      ] } },
      { title: "Marketing site", type: "desktop", tone: "dark", content: { kind: "landing", headline: "Banking that respects your attention.", sub: "Zero clutter. One-tap moves. Private by default.", cta: "Get early access" } },
      { title: "KYC onboarding", type: "mobile", tone: "dark", content: { kind: "auth", title: "Verify identity", fields: ["Legal name", "Date of birth", "Scan ID"] } },
    ]),
  },
  {
    slug: "meridian",
    number: "03",
    name: "Meridian",
    logoMark: "M",
    category: "Healthcare Platform",
    industry: "Digital Health",
    year: "2024",
    role: "Lead Designer",
    duration: "20 weeks",
    platform: "Web · Tablet",
    tagline: "Where clinicians and patients meet — with dignity.",
    summary: "A HIPAA-native platform connecting primary care providers with chronic-care patients over video, chat and asynchronous check-ins.",
    brand: { from: "#0E7C7B", to: "#17BEBB", accent: "#FFC857", surface: "#0A1919", text: "#F1FBFA", font: "Söhne / Inter", iconStyle: "Rounded outline" },
    overview: "Meridian consolidates telehealth, RPM data and patient education into one calm surface for both sides of the exam room.",
    businessGoals: ["Reduce no-shows by 25%", "Cut clinician documentation time by 40%", "Meet SOC 2 + HIPAA on launch"],
    problem: "Providers were burning out on 4 tabs of EHR + a separate video tool + faxed labs.",
    solution: "A single visit surface with AI scribe, live vitals and a patient-facing companion app that mirrors context.",
    research: "Shadowed 14 clinicians across 3 clinics. 30 patient interviews with a bias toward 65+ users.",
    competitors: [{ name: "Teladoc", strength: "Scale", weakness: "Enterprise UX" }, { name: "Doximity", strength: "Provider trust", weakness: "Fragmented workflows" }],
    personas: [
      { name: "Dr. Elena Ruiz", role: "Family Physician", age: 42, bio: "Sees 24 patients a day. Documents in the evenings.", goals: ["Get home by 6", "Fewer clicks per visit"], pains: ["EHR fatigue", "Interruptive tools"] },
      { name: "Marion Baker", role: "Patient, 68", age: 68, bio: "Manages hypertension and mild diabetes.", goals: ["Feel heard", "Understand plan"], pains: ["Confusing portals", "Tiny type"] },
    ],
    userFlow: ["Provider opens schedule", "Joins visit", "AI scribe drafts note", "Reviews & signs", "Patient gets plain-language summary"],
    wireframes: "Two-panel visit console explored in 6 rounds.",
    lowFi: "Grayscale visit console and patient timeline.",
    hiFi: "Teal-forward system, generous line-height, medical-grade contrast.",
    prototype: "High-fi clickable tested with 8 providers and 12 patients.",
    finalUI: "Deployed at 3 clinics; expanded to 14 in Q2.",
    responsive: "Provider view targets 13\" laptop → 27\" clinic monitor. Patient view is mobile-first.",
    handoff: "Component library shipped in React + Storybook, WCAG-audited.",
    accessibility: ["Large-type mode", "High-contrast palette", "Captions on every video", "Screen-reader tested end-to-end"],
    results: [
      { label: "No-shows", value: "-31%", caption: "Across pilot clinics" },
      { label: "Doc time", value: "-46%", caption: "Per encounter" },
      { label: "Patient CSAT", value: "4.8/5", caption: "First 3 months" },
    ],
    lessons: ["Design for the tired user.", "Accessibility is the product, not a checklist."],
    screens: makeScreens([
      { title: "Visit console", type: "desktop", tone: "dark", content: { kind: "detail", title: "Marion Baker · Follow-up", sub: "Hypertension · 10:20 AM", sections: ["Video", "Vitals live feed", "AI scribe draft", "Plan"] } },
      { title: "Schedule", type: "desktop", tone: "dark", content: { kind: "list", title: "Today · 24 visits", items: [
        { title: "10:00 · Marion Baker", sub: "Follow-up", meta: "Video" },
        { title: "10:20 · James Nguyen", sub: "New patient", meta: "In-clinic" },
        { title: "10:40 · Ada Cole", sub: "Rx renewal", meta: "Async" },
      ] } },
      { title: "Patient app", type: "mobile", tone: "light", content: { kind: "list", title: "Your care", items: [
        { title: "Next: Follow-up", sub: "Tue 10:00 · Dr. Ruiz", meta: "Join" },
        { title: "Take Lisinopril", sub: "1 tab · Evening", meta: "Today" },
      ] } },
    ]),
  },
  {
    slug: "atelier",
    number: "04",
    name: "Atelier",
    logoMark: "A",
    category: "Luxury Fashion Ecommerce",
    industry: "Retail · Luxury",
    year: "2025",
    role: "Design Director (contract)",
    duration: "10 weeks",
    platform: "Web · Mobile",
    tagline: "An editorial storefront for a modern maison.",
    summary: "A cinematic ecommerce experience for a Parisian atelier, blending editorial storytelling with a frictionless checkout.",
    brand: { from: "#111111", to: "#3B2A2A", accent: "#C8A472", surface: "#0B0B0B", text: "#F6F1EA", font: "Editorial New / Inter", iconStyle: "Hairline, 1px" },
    overview: "A digital flagship for a 40-year-old maison entering DTC. The site had to feel like walking into the boutique on Rue Saint-Honoré.",
    businessGoals: ["Grow DTC revenue to 35% of total", "Achieve <1.2s LCP on product pages", "Elevate brand perception in the US market"],
    problem: "The prior site was a generic template. Bounce rate on product pages was 71%.",
    solution: "An editorial IA with story-led collection pages, a fabric-forward PDP, and a bespoke checkout with in-line concierge chat.",
    research: "Store observation in Paris and NYC. 12 client interviews. Analytics deep-dive on 18 months of data.",
    competitors: [{ name: "The Row", strength: "Editorial poise", weakness: "Weak search" }, { name: "Loro Piana", strength: "Craft narrative", weakness: "Sluggish PDPs" }],
    personas: [{ name: "Camille Laurent", role: "Client, Paris", age: 38, bio: "Buys 4-6 pieces a year, values provenance.", goals: ["Discover craft", "Buy with ease"], pains: ["Generic sites", "Poor visual hierarchy"] }],
    userFlow: ["Land on editorial", "Explore collection", "Read craft story", "Add to bag", "1-page checkout"],
    wireframes: "Two directional wires — 'editorial magazine' vs 'gallery grid'. Editorial won.",
    lowFi: "Grayscale editorial flow across desktop and mobile.",
    hiFi: "Ivory + noir palette with a single champagne accent. Serif display.",
    prototype: "Motion-heavy protos with CSS-only transitions.",
    finalUI: "Shipped in 4 languages. Featured on Awwwards.",
    responsive: "Art-directed at 3 breakpoints for maximum control.",
    handoff: "Storybook with per-collection theme tokens.",
    accessibility: ["Focus rings preserved on all interactive elements", "Alt copy written editorially"],
    results: [
      { label: "Bounce", value: "-42%", caption: "Product page" },
      { label: "AOV", value: "+28%", caption: "Post-launch quarter" },
      { label: "LCP", value: "1.1s", caption: "P75 mobile" },
    ],
    lessons: ["Luxury is silence.", "Type does the heavy lifting."],
    screens: makeScreens([
      { title: "Editorial home", type: "desktop", tone: "dark", content: { kind: "landing", headline: "A quiet obsession with craft.", sub: "Fall / Winter 2025 — the Cashmere Series.", cta: "Enter the collection" } },
      { title: "Product detail", type: "desktop", tone: "dark", content: { kind: "detail", title: "The Astoria Coat", sub: "Handloomed cashmere · Made in Biella", sections: ["Craft story", "Fit & fabric", "Care", "Ships in 3 days"] } },
      { title: "Checkout", type: "mobile", tone: "dark", content: { kind: "checkout", title: "Checkout", lines: [
        { label: "The Astoria Coat", value: "$3,400" },
        { label: "Concierge tailoring", value: "Included" },
      ], total: "$3,400" } },
    ]),
  },
  {
    slug: "haven",
    number: "05",
    name: "Haven",
    logoMark: "H",
    category: "Real Estate Platform",
    industry: "PropTech",
    year: "2024",
    role: "Lead Product Designer",
    duration: "18 weeks",
    platform: "Web · iOS",
    tagline: "Find the place that feels like you.",
    summary: "A search-driven real estate platform that treats listings as stories, with map, saved-view and agent-collab in one shell.",
    brand: { from: "#2E4C3B", to: "#4E7B60", accent: "#F4B860", surface: "#0F1614", text: "#F6FBF7", font: "GT America / Inter", iconStyle: "Two-tone rounded" },
    overview: "Haven blends a map-first search with editorial neighborhood guides and a collaborative shortlist between buyers and their agent.",
    businessGoals: ["Grow qualified leads by 3×", "Reduce time-to-shortlist from weeks to days", "Launch in 5 US metros"],
    problem: "Buyers used 4 apps + a spreadsheet + WhatsApp to make one decision.",
    solution: "A single shared board with map, notes, and agent replies inline.",
    research: "Ride-alongs with agents. Diary study across 3 metros.",
    competitors: [{ name: "Zillow", strength: "Scale", weakness: "Ad-heavy" }, { name: "Compass", strength: "Agent tools", weakness: "Weak buyer UX" }],
    personas: [{ name: "Priya & Alex", role: "Buyers, first home", age: 33, bio: "Relocating for a new job in Austin.", goals: ["Feel confident", "Not miss the one"], pains: ["Information overload"] }],
    userFlow: ["Draw search area", "Save to shortlist", "Invite agent", "Tour flow", "Offer draft"],
    wireframes: "3-column shortlist explored with 6 wire variants.",
    lowFi: "Map + list + notes wires.",
    hiFi: "Warm sage system with a marigold accent.",
    prototype: "Prototype with real MLS data across 200 listings.",
    finalUI: "Launched in Austin, Phoenix, Miami, Denver, Nashville.",
    responsive: "Map-first at desktop, list-first on mobile.",
    handoff: "Map component API + tokens shipped to eng.",
    accessibility: ["Keyboard-accessible map", "Text-mode listing view", "Adjustable text sizing"],
    results: [
      { label: "Qualified leads", value: "+312%", caption: "vs prior site" },
      { label: "Time-to-shortlist", value: "-64%", caption: "Median" },
      { label: "Agent NPS", value: "+41", caption: "Pre → post" },
    ],
    lessons: ["Real estate is a group activity.", "Map ≠ product; context is."],
    screens: makeScreens([
      { title: "Search map", type: "desktop", tone: "dark", content: { kind: "map", title: "Austin · East Side", markers: ["$680k · 3BR", "$740k · 4BR", "$525k · 2BR", "$1.1M · 4BR", "$610k · 3BR"] } },
      { title: "Shortlist", type: "desktop", tone: "dark", content: { kind: "list", title: "Priya & Alex — Shared", items: [
        { title: "1234 Cesar Chavez", sub: "3BR · 2BA · $680k", meta: "Loved" },
        { title: "88 Manor Rd", sub: "4BR · 3BA · $740k", meta: "Maybe" },
      ] } },
      { title: "Agent chat", type: "mobile", tone: "dark", content: { kind: "chat", title: "Agent · Renee", messages: [
        { from: "them", text: "The Cesar Chavez tour is confirmed for Sat 11am." },
        { from: "me", text: "Perfect — can we also see the Manor one?" },
      ] } },
    ]),
  },
  {
    slug: "wander",
    number: "06",
    name: "Wander",
    logoMark: "W",
    category: "Travel Booking",
    industry: "Travel · Consumer",
    year: "2025",
    role: "Product Designer",
    duration: "12 weeks",
    platform: "iOS · Web",
    tagline: "Trips, not itineraries.",
    summary: "An AI-assisted trip planner that turns a paragraph of intent into a booked, editable itinerary.",
    brand: { from: "#0F3D3E", to: "#1A6E70", accent: "#FF7A59", surface: "#0A1F20", text: "#F1FBFB", font: "General Sans / Inter", iconStyle: "Soft rounded" },
    overview: "Wander removes the tab-hell of trip planning. You describe the trip; Wander drafts a schedule, prices it, and books it.",
    businessGoals: ["10k activated planners in 6 months", "40% conversion on drafted trips", "Direct hotel margin > 12%"],
    problem: "Users open 40+ tabs to plan one week away. Decision fatigue kills conversion.",
    solution: "A single conversation surface that outputs a shareable, editable trip card.",
    research: "12 planning-in-progress interviews and a 200-person survey.",
    competitors: [{ name: "Booking", strength: "Inventory", weakness: "Zero taste" }, { name: "Kayak", strength: "Compare", weakness: "No planning story" }],
    personas: [{ name: "Jules Park", role: "Traveler", age: 30, bio: "3-4 trips a year, half solo.", goals: ["Feel excited, not exhausted"], pains: ["Analysis paralysis"] }],
    userFlow: ["Describe trip", "Review draft", "Swap picks", "Book in one flow", "Share with friends"],
    wireframes: "Chat-first vs card-first — cards won.",
    lowFi: "Trip card, day view, swap sheet.",
    hiFi: "Deep teal with coral CTAs.",
    prototype: "Interactive prototype tested with 8 travelers.",
    finalUI: "iOS beta launched to 800 users.",
    responsive: "Universal iOS + iPadOS + web sync.",
    handoff: "SwiftUI components + tokens.",
    accessibility: ["Dynamic type", "VoiceOver on trip card", "Colorblind-safe day markers"],
    results: [
      { label: "Drafts → book", value: "42%", caption: "Beta cohort" },
      { label: "Planning time", value: "-78%", caption: "vs self-reported baseline" },
      { label: "Beta NPS", value: "68", caption: "Week 4" },
    ],
    lessons: ["Taste is a feature.", "Confidence beats options."],
    screens: makeScreens([
      { title: "Trip draft", type: "mobile", tone: "dark", content: { kind: "detail", title: "Lisbon · 5 days", sub: "For Jules · $1,840 est.", sections: ["Day 1 — Alfama", "Day 2 — Sintra", "Day 3 — Comporta", "Flights + Hotel"] } },
      { title: "Compose", type: "mobile", tone: "dark", content: { kind: "chat", title: "New trip", messages: [
        { from: "me", text: "5 days in Lisbon, mid-October, love pastries and design." },
        { from: "them", text: "Drafting a slow-paced trip with a day in Sintra. One sec." },
      ] } },
      { title: "Web dashboard", type: "desktop", tone: "dark", content: { kind: "list", title: "Your trips", items: [
        { title: "Lisbon · Oct", sub: "5 days · Drafted", meta: "Continue" },
        { title: "Tokyo · Feb", sub: "10 days · Booked", meta: "Confirmed" },
      ] } },
    ]),
  },
  {
    slug: "pulse",
    number: "07",
    name: "Pulse",
    logoMark: "P",
    category: "Fitness Mobile App",
    industry: "Health & Fitness",
    year: "2024",
    role: "Product Designer",
    duration: "9 weeks",
    platform: "iOS · watchOS",
    tagline: "Train like you mean it.",
    summary: "A strength-training app for lifters, with velocity-based programming and Apple Watch autopilot.",
    brand: { from: "#131313", to: "#2A2A2A", accent: "#FF3366", surface: "#0A0A0A", text: "#F5F5F5", font: "Söhne Mono / Inter", iconStyle: "Bold filled" },
    overview: "Pulse listens to your set on the watch, adjusts weight and rest, and gives one honest metric per session.",
    businessGoals: ["30k paid subs in year one", "80% D7 retention", "Best-in-class Watch experience"],
    problem: "Existing lifting apps are spreadsheets in disguise.",
    solution: "Big type, one primary action, and a watch companion that runs the session hands-free.",
    research: "Gym observation with 12 lifters. Diary study on 20 users for 4 weeks.",
    competitors: [{ name: "Strong", strength: "Depth", weakness: "Dated UX" }, { name: "Hevy", strength: "Community", weakness: "Weak Watch" }],
    personas: [{ name: "Diego M.", role: "Powerlifter", age: 27, bio: "Trains 5 days a week.", goals: ["Progress reliably"], pains: ["Fiddly logging"] }],
    userFlow: ["Start session", "Watch reads set", "Confirm reps", "Auto-progress next"],
    wireframes: "Set → set → set with a single confirm gesture.",
    lowFi: "Timer, set card, rest ring.",
    hiFi: "Near-black system with crimson accent.",
    prototype: "SwiftUI prototype in real gym conditions.",
    finalUI: "Shipped to iOS + watchOS.",
    responsive: "iPhone + Watch synchronized.",
    handoff: "Direct-to-eng in SwiftUI.",
    accessibility: ["High-contrast", "VoiceOver on set cards", "Haptics-only mode"],
    results: [
      { label: "D7 retention", value: "83%", caption: "Beta cohort" },
      { label: "Subs", value: "18k", caption: "First 90 days" },
      { label: "Watch adoption", value: "71%", caption: "of paid users" },
    ],
    lessons: ["Type is the interface at 5am.", "One number beats ten."],
    screens: makeScreens([
      { title: "Session", type: "mobile", tone: "dark", content: { kind: "detail", title: "Squat · 5×3", sub: "Working set · 315 lb", sections: ["Set 3 of 5", "RPE 8", "Rest 2:30"] } },
      { title: "Weekly plan", type: "mobile", tone: "dark", content: { kind: "list", title: "This week", items: [
        { title: "Mon · Squat", sub: "Heavy", meta: "Done" },
        { title: "Wed · Bench", sub: "Volume", meta: "Today" },
        { title: "Fri · Deadlift", sub: "Peak", meta: "Fri" },
      ] } },
      { title: "Insights", type: "mobile", tone: "dark", content: { kind: "chart", title: "Squat 1RM (12wk)", series: [325, 330, 335, 335, 340, 345, 350, 350, 355, 360, 365, 365] } },
    ]),
  },
  {
    slug: "lumina",
    number: "08",
    name: "Lumina",
    logoMark: "L",
    category: "EdTech Learning Platform",
    industry: "Education · SaaS",
    year: "2024",
    role: "Design Lead",
    duration: "22 weeks",
    platform: "Web · iPad",
    tagline: "Deep learning for grown-ups.",
    summary: "A cohort-based learning platform for professionals, with live sessions, project labs and mentor feedback in one place.",
    brand: { from: "#3B1FFF", to: "#6E4CFF", accent: "#FFD166", surface: "#0B0A1F", text: "#F4F1FF", font: "GT Alpina / Inter", iconStyle: "Duotone soft" },
    overview: "Lumina replaces the LMS with a studio: cohorts move together through live sessions, hands-on labs and portfolio-worthy projects.",
    businessGoals: ["Grow cohort completion to 82%", "Increase NPS above 60", "Ship 5 flagship programs"],
    problem: "Traditional LMSes are content warehouses. Adults need momentum.",
    solution: "A calendar-first shell that keeps the cohort in sync, with a project studio at the center.",
    research: "Interviews with 20 learners across 4 programs. Instructor shadowing over 3 cohorts.",
    competitors: [{ name: "Maven", strength: "Cohorts", weakness: "Fragmented experience" }, { name: "Coursera", strength: "Breadth", weakness: "Low completion" }],
    personas: [{ name: "Anya R.", role: "Learner", age: 31, bio: "Mid-career designer upskilling in research.", goals: ["Ship a portfolio project"], pains: ["Falling behind"] }],
    userFlow: ["Onboard to cohort", "Attend live", "Submit project", "Get feedback", "Ship"],
    wireframes: "Studio-shell IA explored across 6 rounds.",
    lowFi: "Calendar, lab, feedback wires.",
    hiFi: "Deep indigo with a gold accent.",
    prototype: "Live-session prototype tested with 3 cohorts.",
    finalUI: "Shipped to 8 flagship programs.",
    responsive: "iPad-first, web synchronized.",
    handoff: "Design system in React + tokens.",
    accessibility: ["Captions on all live", "Transcripts", "Keyboard-first lab UI"],
    results: [
      { label: "Completion", value: "84%", caption: "Cohort avg" },
      { label: "NPS", value: "71", caption: "12-mo trailing" },
      { label: "Time-in-app", value: "+3.4×", caption: "vs prior LMS" },
    ],
    lessons: ["Momentum > content.", "Show, don't tell, in every lesson."],
    screens: makeScreens([
      { title: "Cohort home", type: "desktop", tone: "dark", content: { kind: "dashboard", metrics: [
        { label: "Progress", value: "62%" }, { label: "Next live", value: "Tue 6PM" }, { label: "Mentor", value: "Sara" }, { label: "Cohort", value: "204" },
      ], sections: ["This week", "Studio project", "Feedback", "Community"] } },
      { title: "Studio", type: "desktop", tone: "dark", content: { kind: "detail", title: "Project · Zero-to-one research", sub: "Draft v3 · Due Fri", sections: ["Brief", "Method", "Findings", "Deliverable"] } },
      { title: "iPad lesson", type: "tablet", tone: "dark", content: { kind: "list", title: "Week 4 · Interviews", items: [
        { title: "Live · Tue 6PM", sub: "60 min", meta: "Add to cal" },
        { title: "Lab · Draft your guide", sub: "45 min", meta: "Start" },
      ] } },
    ]),
  },
  {
    slug: "aether",
    number: "09",
    name: "Aether",
    logoMark: "Æ",
    category: "Cloud Security Dashboard",
    industry: "Security · SaaS",
    year: "2025",
    role: "Principal Designer",
    duration: "16 weeks",
    platform: "Web",
    tagline: "See the risk. Fix it now.",
    summary: "A cloud security posture platform that ranks risk by real blast-radius and lets teams fix in-flow with PR-native remediations.",
    brand: { from: "#0B1D2A", to: "#123B58", accent: "#00E1B4", surface: "#08131A", text: "#EAF7FA", font: "Söhne / Inter", iconStyle: "Precise line, 1.25px" },
    overview: "Aether reframes CSPM around action — not lists — surfacing the top 5 risks a team can fix today.",
    businessGoals: ["Reduce customer TTR by 50%", "Land 20 enterprise logos in year one", "Achieve top-quartile G2 ratings"],
    problem: "Security teams drown in 40k findings. Nothing gets fixed.",
    solution: "Blast-radius scoring + PR-native fixes + one queue that resembles a Linear inbox.",
    research: "18 CISO interviews, 6 field studies at F1000 SOCs.",
    competitors: [{ name: "Wiz", strength: "Coverage", weakness: "Alert fatigue" }, { name: "Orca", strength: "Discovery", weakness: "Weak remediation" }],
    personas: [{ name: "Nina K.", role: "Security Engineer", age: 34, bio: "Lives in Slack and GitHub.", goals: ["Close top risks weekly"], pains: ["Noise", "Handoff friction"] }],
    userFlow: ["Open queue", "Pick top risk", "Review PR", "Merge fix"],
    wireframes: "Queue-first vs asset-first — queue won.",
    lowFi: "Queue, risk detail, PR review wires.",
    hiFi: "Ink-blue system with mint accent for safety.",
    prototype: "Prototype tested with 6 SOCs.",
    finalUI: "GA with 12 launch design partners.",
    responsive: "Optimized 1440 → 2560 for SOC monitors.",
    handoff: "Design tokens + Storybook + accessibility notes.",
    accessibility: ["High contrast on state colors", "Full keyboard queue nav"],
    results: [
      { label: "TTR", value: "-58%", caption: "Median" },
      { label: "Fix rate", value: "3.1×", caption: "vs prior tool" },
      { label: "G2", value: "4.8", caption: "Leader Winter '25" },
    ],
    lessons: ["A queue is a product.", "Fix > find."],
    screens: makeScreens([
      { title: "Risk queue", type: "desktop", tone: "dark", content: { kind: "list", title: "Top risks · today", items: [
        { title: "Public S3 with PII", sub: "Blast: 3 services · 42 users", meta: "Critical" },
        { title: "Over-permissive IAM", sub: "Blast: 12 services", meta: "High" },
        { title: "Unpatched EKS node", sub: "Blast: 1 service", meta: "Med" },
      ] } },
      { title: "Risk detail", type: "desktop", tone: "dark", content: { kind: "detail", title: "Public S3 bucket · analytics-raw", sub: "Blast radius: 3 services, 42 users, 1.2TB data", sections: ["Evidence", "Root cause", "Suggested PR", "Owner"] } },
      { title: "Analytics", type: "desktop", tone: "dark", content: { kind: "analytics", title: "Posture over time", kpis: [
        { label: "Open critical", value: "12" }, { label: "Fixed / wk", value: "38" }, { label: "MTTR", value: "1.4d" },
      ] } },
    ]),
  },
  {
    slug: "nova",
    number: "10",
    name: "Nova",
    logoMark: "◎",
    category: "Marketing Analytics Platform",
    industry: "MarTech · SaaS",
    year: "2025",
    role: "Product & Systems Design",
    duration: "14 weeks",
    platform: "Web",
    tagline: "Attribution you can actually explain.",
    summary: "A marketing analytics platform that replaces last-click charts with plain-English answers — and shows its work.",
    brand: { from: "#1D1B4B", to: "#4737FF", accent: "#F2E86D", surface: "#0A0925", text: "#F2F0FF", font: "Söhne / Inter", iconStyle: "Playful geometric" },
    overview: "Nova reframes MMM + MTA as a conversation. Marketers ask a question; Nova returns a chart, a caveat and a next step.",
    businessGoals: ["Cut time-to-insight by 10×", "Sell into non-technical marketing teams", "Grow ARR to $12M in year one"],
    problem: "Dashboards drown teams in numbers without answering the actual question.",
    solution: "A question-first interface with citation-quality provenance under every chart.",
    research: "22 CMO/analyst interviews. 3 concept tests with A/B/C variants.",
    competitors: [{ name: "Amplitude", strength: "Product analytics", weakness: "MTA is bolted on" }, { name: "Northbeam", strength: "Attribution depth", weakness: "Too technical" }],
    personas: [{ name: "Jen H.", role: "CMO", age: 40, bio: "Reports revenue impact to the CEO weekly.", goals: ["Prove ROI", "Reallocate fast"], pains: ["Opaque models"] }],
    userFlow: ["Ask a question", "Review chart + caveats", "Save to report", "Share to Slack"],
    wireframes: "Prompt-first vs dashboard-first — prompt won.",
    lowFi: "Prompt, chart, caveat, share wires.",
    hiFi: "Deep indigo with a signature lemon accent.",
    prototype: "Interactive prototype with 8 CMOs, 12 analysts.",
    finalUI: "GA with 40 launch customers.",
    responsive: "1280 → 2560, plus a read-only mobile.",
    handoff: "Design system with 320 tokens.",
    accessibility: ["Colorblind-safe chart palette", "Screen-reader chart summaries"],
    results: [
      { label: "Time-to-insight", value: "-92%", caption: "Median" },
      { label: "ARR", value: "$14.2M", caption: "Year one" },
      { label: "CSAT", value: "4.9/5", caption: "Launch cohort" },
    ],
    lessons: ["Answers > dashboards.", "Show the math — always."],
    screens: makeScreens([
      { title: "Ask", type: "desktop", tone: "dark", content: { kind: "chat", title: "Ask Nova", messages: [
        { from: "me", text: "Which channel drove new revenue in EMEA last quarter?" },
        { from: "them", text: "Paid social — $2.1M, +42% QoQ. Confidence: high. Caveat: 8% attribution uncertainty on IG." },
      ] } },
      { title: "Report", type: "desktop", tone: "dark", content: { kind: "analytics", title: "EMEA · Q2", kpis: [
        { label: "Revenue", value: "$5.8M" }, { label: "New logos", value: "312" }, { label: "CAC", value: "$1,240" },
      ] } },
      { title: "Trend", type: "desktop", tone: "dark", content: { kind: "chart", title: "Weekly revenue · 12w", series: [420, 460, 510, 490, 540, 610, 640, 700, 720, 760, 810, 880] } },
    ]),
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p] as const),
);