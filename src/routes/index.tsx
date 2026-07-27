import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/site/ProjectCard";
import { DeviceMockup } from "../components/site/DeviceMockup";
import { Screen } from "../components/site/Screen";

export const Route = createFileRoute("/")({
  component: Home,
});

const capabilities = [
  { k: "01", t: "Product design", d: "Zero-to-one surfaces, feature depth, and shipped polish across web and native." },
  { k: "02", t: "Design systems", d: "Tokenized foundations, component libraries, and governance that scale with your team." },
  { k: "03", t: "UX research", d: "Discovery, usability and diary studies that turn qualitative signal into product bets." },
  { k: "04", t: "Brand & motion", d: "Editorial identity, art direction and CSS-native motion that carries meaning." },
];

function Home() {
  const feature = projects[0];
  const second = projects[1];

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24 md:pt-56 md:pb-32">
        <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(60% 50% at 20% 20%, rgba(79,124,255,0.25), transparent 60%), radial-gradient(50% 40% at 85% 40%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(40% 30% at 60% 90%, rgba(0,212,255,0.18), transparent 60%)",
        }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Available for Q3 · Q4 2026
          </div>

          <h1 className="mt-8 font-display text-6xl sm:text-7xl md:text-[104px] font-semibold tracking-tight leading-[0.9] max-w-6xl">
            <span className="text-gradient">5+ Yrs UI/UX | SaaS, FinTech & Mobile Apps</span>
            <br />
            <span className="text-foreground/70">designs</span>{" "}
            <span className="text-gradient-brand">premium</span>
            <br />
            <span className="text-foreground/70">digital products.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Senior UI/UX designer crafting products that solve business problems and create
            unforgettable user experiences — across SaaS, FinTech, Healthcare and consumer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View projects <span aria-hidden>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Contact me
            </Link>
          </div>

          <div className="mt-20 md:mt-28 relative grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8 animate-float-slow">
              <DeviceMockup device="desktop">
                <Screen project={feature} content={feature.screens[0].content} />
              </DeviceMockup>
            </div>
            <div className="md:col-span-4 md:-mt-24 md:-ml-10 relative z-10">
              <div className="animate-float-slow" style={{ animationDelay: "0.6s" }}>
                <DeviceMockup device="mobile">
                  <Screen project={second} content={second.screens[0].content} />
                </DeviceMockup>
              </div>
            </div>
          </div>

          <div className="mt-24 border-y border-border py-6">
            <div className="flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {["SaaS", "FinTech", "Healthcare", "PropTech", "Consumer", "AI Platforms", "MarTech", "EdTech"].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Capabilities</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
                End-to-end product craft.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                I work across strategy, research, systems and interface so the product feels
                like one decision — not fifty.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {capabilities.map((c) => (
                <div key={c.k} className="rounded-2xl bg-card border border-border p-6 hover:border-white/20 transition-colors">
                  <div className="font-mono text-xs text-muted-foreground">{c.k}</div>
                  <div className="mt-3 font-display text-xl font-semibold tracking-tight">{c.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Selected work</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight">
                Ten products.<br />One obsession.
              </h2>
            </div>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-white/5 transition-colors">
              All projects <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium">
              See all 10 case studies <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Process</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            A calm, opinionated way to ship.
          </h2>
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discover", d: "Interviews, audits and framing to align on the actual problem." },
              { n: "02", t: "Define", d: "Sharp product strategy, IA and success metrics before pixels." },
              { n: "03", t: "Design", d: "Systems-first UI, motion and prototyping — critiqued weekly." },
              { n: "04", t: "Deliver", d: "Handoff, QA and post-launch instrumentation with engineering." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-card border border-border p-6 hover:border-white/20 transition-colors">
                <div className="font-mono text-xs text-muted-foreground">{s.n}</div>
                <div className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
