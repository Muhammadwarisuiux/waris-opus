import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projectsBySlug, projects } from "../data/projects";
import { BrandMark } from "../components/site/BrandMark";
import { DeviceMockup } from "../components/site/DeviceMockup";
import { Screen } from "../components/site/Screen";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectsBySlug[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.name} — ${p.category} · Case study`;
    const desc = p.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.name,
            headline: title,
            about: p.category,
            creator: { "@type": "Person", name: "Muhammad Waris" },
            datePublished: p.year,
          }),
        },
      ],
    };
  },
  component: ProjectDetail,
});

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <article className="pt-24">
      <header
        className="relative overflow-hidden"
        style={{ background: `radial-gradient(circle at 20% 20%, ${project.brand.from}66, transparent 55%), radial-gradient(circle at 80% 40%, ${project.brand.to}55, transparent 55%), ${project.brand.surface}` }}
      >
        <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="flex items-center gap-3">
            <BrandMark project={project} size={44} />
            <div>
              <div className="font-display font-semibold tracking-tight text-lg" style={{ color: project.brand.text }}>{project.name}</div>
              <div className="text-xs" style={{ color: project.brand.text, opacity: 0.6 }}>{project.category}</div>
            </div>
            <div className="ml-auto font-mono text-xs" style={{ color: project.brand.text, opacity: 0.6 }}>{project.number} / 10</div>
          </div>

          <h1 className="mt-10 font-display text-5xl md:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl" style={{ color: project.brand.text }}>
            {project.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg" style={{ color: project.brand.text, opacity: 0.75 }}>
            {project.summary}
          </p>

          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              ["Role", project.role],
              ["Duration", project.duration],
              ["Platform", project.platform],
              ["Year", project.year],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.2em]" style={{ color: project.brand.text, opacity: 0.55 }}>{k}</dt>
                <dd className="mt-2 text-sm font-medium" style={{ color: project.brand.text }}>{v}</dd>
              </div>
            ))}
          </dl>

          {project.screens[0] && (
            <div className="mt-16 md:mt-20">
              <DeviceMockup device={project.screens[0].type}>
                <Screen project={project} content={project.screens[0].content} />
              </DeviceMockup>
            </div>
          )}
        </div>
      </header>

      <Section eyebrow="Overview" title="What we built">
        <p className="text-lg text-foreground/90 leading-relaxed">{project.overview}</p>
      </Section>

      <Section eyebrow="Business goals" title="What success looked like">
        <ul className="space-y-4">
          {project.businessGoals.map((g, i) => (
            <li key={i} className="flex gap-4 rounded-2xl bg-card border border-border p-5">
              <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
              <span className="text-base text-foreground/90">{g}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Problem · Solution" title="The tension">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Problem</div>
            <p className="mt-3 text-foreground/90 leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-2xl border p-6" style={{ background: `linear-gradient(135deg, ${project.brand.from}22, ${project.brand.to}11)`, borderColor: `${project.brand.accent}33` }}>
            <div className="text-xs uppercase tracking-[0.2em]" style={{ color: project.brand.accent }}>Solution</div>
            <p className="mt-3 text-foreground/90 leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Research" title="How we listened">
        <p className="text-foreground/90 leading-relaxed">{project.research}</p>

        <h3 className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">Competitor analysis</h3>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Competitor</th>
                <th className="text-left px-4 py-3 font-medium">Strength</th>
                <th className="text-left px-4 py-3 font-medium">Weakness</th>
              </tr>
            </thead>
            <tbody>
              {project.competitors.map((c) => (
                <tr key={c.name} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{c.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.strength}</td>
                  <td className="px-4 py-3 text-muted-foreground">{c.weakness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">Personas</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {project.personas.map((p) => (
            <div key={p.name} className="rounded-2xl bg-card border border-border p-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                  style={{ background: `linear-gradient(135deg, ${project.brand.from}, ${project.brand.to})` }}
                >
                  {p.name[0]}
                </span>
                <div>
                  <div className="font-medium">{p.name}, {p.age}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/80">{p.bio}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground mb-1">Goals</div>
                  <ul className="space-y-1">{p.goals.map((g) => <li key={g}>· {g}</li>)}</ul>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Pains</div>
                  <ul className="space-y-1">{p.pains.map((g) => <li key={g}>· {g}</li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">User flow</h3>
        <ol className="mt-4 flex flex-wrap items-center gap-2">
          {project.userFlow.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="rounded-full border border-border px-3 py-1.5 text-xs">{s}</span>
              {i < project.userFlow.length - 1 && <span className="text-muted-foreground">→</span>}
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Design process" title="From wire to ship">
        <div className="space-y-4">
          {[
            { k: "Wireframes", v: project.wireframes },
            { k: "Low-fidelity", v: project.lowFi },
            { k: "High-fidelity", v: project.hiFi },
            { k: "Prototype", v: project.prototype },
            { k: "Final UI", v: project.finalUI },
          ].map((row) => (
            <div key={row.k} className="grid md:grid-cols-4 gap-4 rounded-2xl bg-card border border-border p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{row.k}</div>
              <div className="md:col-span-3 text-foreground/90">{row.v}</div>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Screens</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">Selected surfaces</h2>
            </div>
            <p className="hidden md:block max-w-sm text-muted-foreground">
              A curated cut from {20 + currentIdx * 2}+ shipped screens.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {project.screens.map((s, i) => (
              <div
                key={i}
                className="relative rounded-3xl p-6 md:p-10 overflow-hidden border border-border"
                style={{ background: `radial-gradient(circle at 30% 20%, ${project.brand.from}33, transparent 60%), ${project.brand.surface}` }}
              >
                <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6 text-xs uppercase tracking-[0.2em]" style={{ color: project.brand.text, opacity: 0.7 }}>
                    <span>{s.title}</span>
                    <span>{s.type}</span>
                  </div>
                  <DeviceMockup device={s.type}>
                    <Screen project={project} content={s.content} />
                  </DeviceMockup>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Responsive · Handoff · A11y" title="Craft under the hood">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Responsive</div>
            <p className="mt-3 text-sm text-foreground/90">{project.responsive}</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Handoff</div>
            <p className="mt-3 text-sm text-foreground/90">{project.handoff}</p>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Accessibility</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              {project.accessibility.map((a) => <li key={a}>· {a}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Results" title="What shipped, what moved">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.results.map((r) => (
            <div key={r.label} className="rounded-2xl p-6 border" style={{ background: `linear-gradient(135deg, ${project.brand.from}22, ${project.brand.to}11)`, borderColor: `${project.brand.accent}33` }}>
              <div className="text-xs uppercase tracking-[0.2em]" style={{ color: project.brand.accent }}>{r.label}</div>
              <div className="mt-4 font-display text-5xl font-semibold tracking-tight">{r.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{r.caption}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Lessons" title="What I'd carry forward">
        <ul className="space-y-3">
          {project.lessons.map((l, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-display text-2xl text-muted-foreground/50">{`0${i + 1}`}</span>
              <span className="text-lg text-foreground/90">{l}</span>
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-t border-border">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${next.brand.from}, ${next.brand.to})` }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style={{ color: next.brand.text }}>
            <div>
              <div className="text-xs uppercase tracking-[0.24em]" style={{ opacity: 0.7 }}>Next case study</div>
              <div className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight">{next.name}</div>
              <div className="mt-2 text-base" style={{ opacity: 0.8 }}>{next.category}</div>
            </div>
            <span className="inline-flex items-center gap-3 rounded-full bg-black/30 backdrop-blur px-6 py-3 text-sm font-medium transition-transform group-hover:translate-x-1">
              View project <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </section>
    </article>
  );
}