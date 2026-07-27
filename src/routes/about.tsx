import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Muhammad Waris" },
      { name: "description", content: "Senior UI/UX designer with 5+ years shipping products across SaaS, FinTech, Healthcare and consumer." },
      { property: "og:title", content: "About · Muhammad Waris" },
      { property: "og:description", content: "Senior UI/UX designer with 5+ years shipping premium digital products." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const disciplines = [
  "UI Design", "UX Research", "Design Systems", "Figma", "Wireframing", "Prototyping",
  "Responsive Design", "SaaS", "FinTech", "Healthcare", "Dashboards", "Web Apps", "Mobile Apps",
];

const timeline = [
  { year: "2025", role: "Independent Design Consultant", where: "Working with Seed → Series C teams globally" },
  { year: "2023", role: "Senior Product Designer", where: "Lead designer on 4 shipped 0→1 products" },
  { year: "2021", role: "Product Designer", where: "Shipping across SaaS and consumer" },
  { year: "2020", role: "UI/UX Designer", where: "First full-time design role" },
];

function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">About</p>
        <h1 className="mt-3 font-display text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl">
          I design products <span className="text-gradient-brand">people actually reach for.</span>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              I'm Muhammad Waris — a senior UI/UX designer with 5+ years shipping digital
              products in SaaS, FinTech, Healthcare and consumer. I work end-to-end: research,
              product strategy, systems, interface, motion and handoff.
            </p>
            <p>
              I care about the decisions users don't notice — the ones that make a product feel
              inevitable. Type that breathes. Density that respects attention. Motion that
              carries meaning. Systems that scale.
            </p>
            <p>
              Today I partner with founders, PMs and engineering leaders to take zero-to-one
              products from ambiguity to a shipped, defensible surface — and then compound
              them into a design system the team can grow into.
            </p>
          </div>

          <aside className="md:col-span-5 space-y-6">
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">At a glance</div>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Experience", "5+ years"],
                  ["Products shipped", "40+"],
                  ["Based", "Karachi · Available remote"],
                  ["Availability", "Q3 · Q4 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border/70 pb-3 last:border-none last:pb-0">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        <section className="mt-24">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Disciplines</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <span key={d} className="rounded-full border border-border px-4 py-2 text-sm text-foreground/90 hover:bg-white/5 transition-colors">
                {d}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Timeline</p>
          <div className="mt-8 space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 items-baseline border-t border-border pt-6">
                <div className="font-mono text-sm text-muted-foreground">{t.year}</div>
                <div>
                  <div className="font-display text-2xl font-semibold tracking-tight">{t.role}</div>
                  <div className="text-muted-foreground text-sm mt-1">{t.where}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-3xl border border-border p-8 md:p-12 bg-card">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">Let's build something worth remembering.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            I take on a small number of projects a year to make sure every one gets the depth it deserves.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
              Get in touch <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}