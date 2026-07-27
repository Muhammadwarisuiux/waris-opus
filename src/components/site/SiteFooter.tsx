import { Link } from "@tanstack/react-router";
import { CONTACT } from "../../data/contact";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Have a product<br />worth crafting?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Currently accepting projects for Q3–Q4. From zero-to-one design sprints to
              multi-quarter product engagements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                {CONTACT.email}
                <span aria-hidden>↗</span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Sitemap</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/about", label: "About" },
                { to: "/design-system", label: "Design System" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Elsewhere</p>
            <ul className="mt-4 space-y-3 text-sm">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    {s.label} <span className="opacity-60">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Waris. All rights reserved.</p>
          <p className="font-mono">Designed &amp; built with obsession.</p>
        </div>
      </div>

      {/* Enormous type flourish */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="font-display text-[22vw] leading-[0.85] font-semibold tracking-tighter text-gradient-brand opacity-[0.08] translate-y-8 px-4">
          MUHAMMAD WARIS
        </div>
      </div>
    </footer>
  );
}