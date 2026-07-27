import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "../data/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Muhammad Waris" },
      { name: "description", content: "Get in touch with Muhammad Waris — Senior UI/UX designer. Email, WhatsApp, Behance, LinkedIn, Upwork or GitHub." },
      { property: "og:title", content: "Contact · Muhammad Waris" },
      { property: "og:description", content: "Say hello. All channels open." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl text-gradient">
          Say hello.<br />Pick a channel.
        </h1>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group block rounded-3xl border border-border p-8 md:p-12 bg-card hover:border-white/20 transition-colors"
            >
              <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Preferred</div>
              <div className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight break-words text-gradient-brand">
                {CONTACT.email}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80">
                Compose email <span className="transition-transform group-hover:translate-x-0.5">↗</span>
              </div>
            </a>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-border p-5 bg-card hover:border-white/20 transition-colors"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</div>
                    <div className="mt-1 font-display text-xl font-semibold tracking-tight">{s.label}</div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Working hours</div>
              <p className="mt-3 text-foreground/90">Mon – Fri · 09:00 → 19:00 <span className="text-muted-foreground">(PKT · UTC+5)</span></p>
              <p className="mt-2 text-sm text-muted-foreground">Typical response within 12 hours on weekdays.</p>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Good fit for</div>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                <li>· Zero-to-one product design sprints (4–8 wks)</li>
                <li>· Design systems &amp; component libraries</li>
                <li>· Full-scope product engagements (SaaS, FinTech, Health)</li>
                <li>· Design leadership for growing teams</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}