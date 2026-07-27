import type { Project } from "../../data/projects";

export function BrandMark({ project, size = 44 }: { project: Project; size?: number }) {
  const style = {
    background: `linear-gradient(135deg, ${project.brand.from}, ${project.brand.to})`,
    color: project.brand.text,
    width: size,
    height: size,
    fontFamily: project.brand.font,
  } as const;
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center rounded-2xl font-semibold shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
      style={style}
    >
      <span style={{ fontSize: Math.round(size * 0.45) }}>{project.logoMark}</span>
    </span>
  );
}