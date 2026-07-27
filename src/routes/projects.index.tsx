import { createFileRoute } from "@tanstack/react-router";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/site/ProjectCard";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects · Muhammad Waris" },
      { name: "description", content: "Ten in-depth case studies across AI, FinTech, Healthcare, Luxury retail, PropTech and more." },
      { property: "og:title", content: "Projects · Muhammad Waris" },
      { property: "og:description", content: "In-depth product case studies from a senior UI/UX designer." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Selected work</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-semibold tracking-tight text-gradient">
              Ten products.<br />One obsession.
            </h1>
          </div>
          <p className="hidden md:block max-w-sm text-muted-foreground">
            Each case study covers the strategy, research, design and result — as it shipped.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}