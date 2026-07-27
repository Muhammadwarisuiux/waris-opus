import { Link } from "@tanstack/react-router";
import type { Project } from "../../data/projects";
import { BrandMark } from "./BrandMark";
import { DeviceMockup } from "./DeviceMockup";
import { Screen } from "./Screen";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featureScreen = project.screens[0];
  const device = featureScreen?.type ?? "desktop";
  const reverse = index % 2 === 1;

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block rounded-3xl overflow-hidden border border-border bg-card hover:border-white/20 transition-colors"
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div
          className={`p-8 md:p-12 flex flex-col justify-between min-h-[420px] ${reverse ? "md:order-2" : ""}`}
          style={{ background: `linear-gradient(140deg, ${project.brand.from}22, ${project.brand.to}11)` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandMark project={project} size={40} />
              <div>
                <div className="font-display font-semibold tracking-tight">{project.name}</div>
                <div className="text-xs text-muted-foreground">{project.category}</div>
              </div>
            </div>
            <div className="font-mono text-xs text-muted-foreground">{project.number}</div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              {project.tagline}
            </h3>
            <p className="mt-4 text-muted-foreground text-sm max-w-md line-clamp-3">{project.summary}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
            <span className="px-2.5 py-1 rounded-full border border-border">{project.industry}</span>
            <span className="px-2.5 py-1 rounded-full border border-border">{project.year}</span>
            <span className="ml-auto text-foreground/80 flex items-center gap-1 normal-case tracking-normal">
              Read case study
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        </div>

        <div
          className={`relative flex items-center justify-center p-8 md:p-12 overflow-hidden min-h-[420px] ${reverse ? "md:order-1" : ""}`}
          style={{
            background: `radial-gradient(circle at 50% 40%, ${project.brand.from}55, transparent 65%), ${project.brand.surface}`,
          }}
        >
          <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative w-full max-w-md transition-transform duration-500 group-hover:-translate-y-1">
            {featureScreen ? (
              <DeviceMockup device={device}>
                <Screen project={project} content={featureScreen.content} />
              </DeviceMockup>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}