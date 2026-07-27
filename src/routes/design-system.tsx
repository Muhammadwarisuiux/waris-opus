import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/design-system")({
  head: () => ({
    meta: [
      { title: "Design System · Muhammad Waris" },
      { name: "description", content: "The living design system behind the portfolio — tokens, components, and patterns." },
      { property: "og:title", content: "Design System · Muhammad Waris" },
      { property: "og:description", content: "Tokens, components and patterns used across shipped products." },
      { property: "og:url", content: "/design-system" },
    ],
    links: [{ rel: "canonical", href: "/design-system" }],
  }),
  component: DesignSystemPage,
});

const palette = [
  { name: "Background", value: "#050505" },
  { name: "Surface", value: "#101114" },
  { name: "Card", value: "#181A1F" },
  { name: "Border", value: "#282B33" },
  { name: "Primary", value: "#4F7CFF" },
  { name: "Secondary", value: "#00D4FF" },
  { name: "Accent", value: "#8B5CF6" },
  { name: "Success", value: "#00E676" },
  { name: "White", value: "#FFFFFF" },
  { name: "Gray", value: "#9CA3AF" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function DesignSystemPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Design System</p>
        <h1 className="mt-3 font-display text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl text-gradient">
          The system<br />behind the work.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          Every project ships with a tokenized foundation. Below is the system that scaffolds
          this portfolio — colors, type, spacing, and the primitives that compound into product.
        </p>
      </div>

      <Section id="identity" eyebrow="Identity" title="Brand mark & wordmark">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-card border border-border p-10 flex items-center justify-center">
            <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-primary via-brand-cyan to-brand-violet flex items-center justify-center text-4xl font-display font-semibold shadow-[0_0_60px_-10px_var(--primary)]">
              M
            </div>
          </div>
          <div className="rounded-3xl bg-card border border-border p-10 flex items-center justify-center">
            <div className="font-display text-6xl font-semibold tracking-tight">MW.</div>
          </div>
          <div className="rounded-3xl bg-card border border-border p-10 flex flex-col justify-center gap-2">
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="aspect-square rounded" style={{ background: i === 5 ? "var(--primary)" : "rgba(255,255,255,0.06)" }} />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-3">Logo grid · 4×4 baseline</div>
          </div>
        </div>
      </Section>

      <Section id="color" eyebrow="Color" title="Palette">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {palette.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-24" style={{ background: c.value }} />
              <div className="p-4">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="type" eyebrow="Typography" title="Type scale">
        <div className="space-y-6">
          {[
            { size: "72px", name: "Hero", cls: "text-[72px] leading-[0.95]" },
            { size: "56px", name: "Section", cls: "text-[56px] leading-[1]" },
            { size: "32px", name: "Card", cls: "text-[32px] leading-[1.1]" },
            { size: "18px", name: "Body", cls: "text-[18px] leading-[1.6]" },
            { size: "16px", name: "Button", cls: "text-[16px] font-medium" },
          ].map((t) => (
            <div key={t.name} className="grid grid-cols-[100px_80px_1fr] items-baseline gap-6 border-b border-border pb-6">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{t.size}</div>
              <div className={`font-display font-semibold tracking-tight ${t.cls}`}>The quick brown fox</div>
            </div>
          ))}
          <div className="pt-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Body · Inter</div>
            <p className="text-lg text-foreground/90 max-w-2xl leading-relaxed">
              I design premium digital products that solve business problems and create
              unforgettable user experiences. Type carries the product's tone before pixels do.
            </p>
          </div>
        </div>
      </Section>

      <Section id="spacing" eyebrow="Spacing" title="4-point scale">
        <div className="flex flex-wrap items-end gap-4">
          {spacing.map((s) => (
            <div key={s} className="text-center">
              <div className="mx-auto rounded-lg bg-primary/80" style={{ width: s, height: s }} />
              <div className="text-xs text-muted-foreground mt-2 font-mono">{s}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="components" eyebrow="Components" title="Primitives">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Buttons</div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium">Primary</button>
              <button className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium">Brand</button>
              <button className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">Secondary</button>
              <button className="rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">Ghost</button>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Inputs</div>
            <div className="space-y-3">
              <input placeholder="Your email" className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary" />
              <select className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm">
                <option>Choose a project</option>
                <option>SaaS · Zero-to-one</option>
              </select>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked className="accent-primary" /> Checkbox</label>
                <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name="r" defaultChecked className="accent-primary" /> Radio</label>
                <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name="r" className="accent-primary" /> Radio</label>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Tabs</div>
            <div className="inline-flex rounded-full border border-border p-1">
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm">Overview</span>
              <span className="px-4 py-1.5 text-sm text-muted-foreground">Analytics</span>
              <span className="px-4 py-1.5 text-sm text-muted-foreground">Settings</span>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Badges</div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-success/15 text-success px-3 py-1 text-xs font-medium">Live</span>
              <span className="rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-medium">Beta</span>
              <span className="rounded-full bg-brand-violet/15 text-brand-violet px-3 py-1 text-xs font-medium">Pro</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Draft</span>
              <span className="rounded-full bg-destructive/15 text-destructive px-3 py-1 text-xs font-medium">Alert</span>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Avatars</div>
            <div className="flex -space-x-2">
              {["MW", "AR", "PN", "SK", "JL"].map((initials, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-card flex items-center justify-center text-xs font-medium"
                  style={{ background: ["#4F7CFF", "#00D4FF", "#8B5CF6", "#00E676", "#F2E86D"][i], color: "#000" }}>
                  {initials}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-card bg-white/10 flex items-center justify-center text-xs">+8</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Alerts</div>
            <div className="space-y-2 text-sm">
              <div className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3">All systems operational.</div>
              <div className="rounded-lg border border-success/30 bg-success/10 px-4 py-3">Payment received.</div>
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3">Something needs your attention.</div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Progress</div>
            <div className="space-y-4">
              {[24, 52, 76, 92].map((v) => (
                <div key={v}>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-brand-cyan" style={{ width: `${v}%` }} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-mono">{v}%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Toast</div>
            <div className="glass-strong rounded-2xl p-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center text-success">✓</div>
              <div>
                <div className="text-sm font-medium">Case study saved</div>
                <div className="text-xs text-muted-foreground">You can find it in Drafts</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Tooltip</div>
            <div className="relative inline-block mt-6">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm">Hover target</span>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-white text-black text-xs px-2 py-1 whitespace-nowrap">Tooltip label</span>
            </div>
          </div>

          <div className="rounded-3xl bg-card border border-border p-8 md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Empty state</div>
            <div className="rounded-2xl border border-dashed border-border p-10 text-center">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/30 to-brand-violet/30 flex items-center justify-center text-lg">✦</div>
              <div className="mt-4 font-display text-xl font-semibold tracking-tight">Nothing here yet</div>
              <div className="mt-2 text-sm text-muted-foreground">Create your first case study to see it live.</div>
              <button className="mt-6 rounded-full bg-white text-black px-4 py-2 text-sm font-medium">New case study</button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}