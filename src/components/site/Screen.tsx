import type { Project, ScreenContent } from "../../data/projects";

type Props = { project: Project; content: ScreenContent };

function Bar({ style }: { style?: React.CSSProperties }) {
  return <div className="h-1.5 rounded-full bg-white/10" style={style} />;
}

function Chip({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
      style={{ background: color ? `${color}22` : "rgba(255,255,255,0.08)", color: color ?? "#fff" }}
    >
      {children}
    </span>
  );
}

const PEOPLE = [
  { name: "Ayesha Khan", initials: "AK", hue: "#F0A8A8" },
  { name: "Daniel Reyes", initials: "DR", hue: "#8FD3C4" },
  { name: "Mina Okafor", initials: "MO", hue: "#B4A7F5" },
  { name: "Tomás Silva", initials: "TS", hue: "#F5CE7A" },
  { name: "Hana Ito", initials: "HI", hue: "#9CC5F7" },
  { name: "Omar Haddad", initials: "OH", hue: "#E8A0D0" },
];

function Avatar({ i, size = 24 }: { i: number; size?: number }) {
  const p = PEOPLE[i % PEOPLE.length]!;
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-semibold shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.38),
        background: `linear-gradient(135deg, ${p.hue}, ${p.hue}99)`,
        color: "#101114",
      }}
      title={p.name}
    >
      {p.initials}
    </span>
  );
}

const TIMES = ["2m", "14m", "1h", "3h", "yesterday", "2d"];

export function Screen({ project, content }: Props) {
  const { brand } = project;
  const surface = brand.surface;
  const text = brand.text;
  const accent = brand.accent;

  const wrap: React.CSSProperties = {
    background: surface,
    color: text,
    fontFamily: brand.font,
  };

  switch (content.kind) {
    case "dashboard":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg" style={{ background: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }} />
              <span className="text-xs opacity-70">{project.name} · Command</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5 mr-1">
                {[0, 1, 2].map((i) => (
                  <Avatar key={i} i={i} size={18} />
                ))}
              </div>
              <span className="text-[10px] opacity-60">3 online</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {content.metrics.map((m) => (
              <div key={m.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[10px] opacity-60">{m.label}</div>
                <div className="text-lg font-semibold mt-1">{m.value}</div>
                {m.delta && <div className="text-[10px] mt-1" style={{ color: accent }}>{m.delta}</div>}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 h-[calc(100%-9.5rem)]">
            <div className="col-span-2 rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[11px] opacity-70">{content.sections[0]}</div>
              <div className="flex-1 flex items-end gap-1.5">
                {[42, 68, 30, 88, 54, 72, 46, 90, 62, 78, 40, 58].map((v, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${v}%`, background: `linear-gradient(180deg, ${brand.from}, ${brand.to})`, opacity: 0.85 }} />
                ))}
              </div>
            </div>
            <div className="rounded-lg p-3 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[11px] opacity-70">{content.sections[1] ?? "Inbox"}</div>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <Avatar i={i + 1} size={20} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-medium truncate">{PEOPLE[(i + 1) % PEOPLE.length]!.name}</div>
                    <Bar style={{ width: `${70 - i * 8}%`, marginTop: 3 }} />
                  </div>
                  <span className="text-[9px] opacity-50">{TIMES[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "list":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60 mb-3">{project.name}</div>
          <div className="text-lg font-semibold mb-4">{content.title}</div>
          <div className="space-y-2">
            {content.items.map((it, i) => (
              <div key={it.title} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Avatar i={i} size={32} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{it.title}</div>
                  <div className="text-[11px] opacity-60 truncate">
                    {PEOPLE[i % PEOPLE.length]!.name} · {it.sub}
                  </div>
                </div>
                {it.meta && <Chip color={accent}>{it.meta}</Chip>}
              </div>
            ))}
          </div>
        </div>
      );

    case "detail":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60">{project.name}</div>
          <div className="mt-1 text-lg font-semibold">{content.title}</div>
          <div className="text-xs opacity-60 mt-1">{content.sub}</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {content.sections.map((s) => (
              <div key={s} className="rounded-lg p-3 min-h-20" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[10px] opacity-60">{s}</div>
                <div className="mt-2 space-y-1.5"><Bar /><Bar style={{ width: "70%" }} /><Bar style={{ width: "40%" }} /></div>
              </div>
            ))}
          </div>
        </div>
      );

    case "auth":
      return (
        <div style={wrap} className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <span className="h-7 w-7 rounded-lg" style={{ background: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }} />
            <span className="text-sm font-semibold">{project.name}</span>
          </div>
          <div className="my-auto max-w-sm">
            <div className="text-xl font-semibold mb-6">{content.title}</div>
            <div className="space-y-3">
              {content.fields.map((f) => (
                <div key={f} className="rounded-lg px-3 py-3 text-xs" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {f}
                </div>
              ))}
              <button className="w-full rounded-lg py-3 text-sm font-medium mt-2" style={{ background: accent, color: "#000" }}>Continue</button>
            </div>
          </div>
        </div>
      );

    case "landing":
      return (
        <div style={wrap} className="p-8 h-full flex flex-col justify-center">
          <div className="text-xs opacity-60 mb-3">{project.name}</div>
          <div className="text-3xl md:text-4xl font-semibold leading-tight max-w-[80%]">{content.headline}</div>
          <div className="text-sm opacity-70 mt-3 max-w-[70%]">{content.sub}</div>
          <div className="mt-6 flex gap-2">
            <button className="rounded-full px-4 py-2 text-sm font-medium" style={{ background: accent, color: "#000" }}>{content.cta}</button>
            <button className="rounded-full px-4 py-2 text-sm font-medium" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>Learn more</button>
          </div>
        </div>
      );

    case "checkout":
      return (
        <div style={wrap} className="p-5 h-full flex flex-col">
          <div className="text-xs opacity-60">{project.name}</div>
          <div className="text-lg font-semibold mt-1">{content.title}</div>
          <div className="mt-4 space-y-2 flex-1">
            {content.lines.map((l) => (
              <div key={l.label} className="flex items-center justify-between rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                <span className="text-xs opacity-70">{l.label}</span>
                <span className="text-sm font-medium">{l.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <span className="text-xs opacity-70">Total</span>
            <span className="text-lg font-semibold">{content.total}</span>
          </div>
          <button className="mt-4 w-full rounded-lg py-3 text-sm font-medium" style={{ background: accent, color: "#000" }}>Confirm</button>
        </div>
      );

    case "profile":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60">{project.name}</div>
          <div className="mt-4 rounded-2xl p-4" style={{ background: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}>
            <div className="flex items-center gap-3">
              <Avatar i={0} size={36} />
              <div>
                <div className="text-[10px] opacity-80">{content.role}</div>
                <div className="text-xl font-semibold">{content.name}</div>
              </div>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div className="text-[10px] opacity-80">Valid thru 12/28</div>
              <div className="h-5 w-8 rounded" style={{ background: "rgba(255,255,255,0.3)" }} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {content.stats.map((s) => (
              <div key={s.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-[10px] opacity-60">{s.label}</div>
                <div className="text-sm font-semibold mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "settings":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60">{project.name} · Settings</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {content.groups.map((g) => (
              <div key={g.title} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-[11px] opacity-60 mb-2">{g.title}</div>
                <div className="space-y-1.5">
                  {g.items.map((i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span>{i}</span>
                      <span className="h-3 w-5 rounded-full" style={{ background: accent, opacity: 0.7 }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "analytics":
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60">{project.name}</div>
          <div className="text-lg font-semibold mt-1">{content.title}</div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {content.kpis.map((k) => (
              <div key={k.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="text-[10px] opacity-60">{k.label}</div>
                <div className="text-lg font-semibold mt-1">{k.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-end gap-1 h-24">
              {[30, 55, 42, 70, 60, 85, 72, 90, 78, 96, 88, 100].map((v, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${v}%`, background: `linear-gradient(180deg, ${brand.from}, ${brand.to})` }} />
              ))}
            </div>
          </div>
        </div>
      );

    case "chart": {
      const max = Math.max(...content.series);
      const min = Math.min(...content.series);
      const range = max - min || 1;
      const points = content.series
        .map((v, i) => {
          const x = (i / (content.series.length - 1)) * 100;
          const y = 100 - ((v - min) / range) * 80 - 10;
          return `${x},${y}`;
        })
        .join(" ");
      return (
        <div style={wrap} className="p-5 h-full">
          <div className="text-xs opacity-60">{project.name}</div>
          <div className="text-lg font-semibold mt-1">{content.title}</div>
          <div className="mt-4 rounded-lg p-3 h-[calc(100%-4rem)]" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
              <defs>
                <linearGradient id={`g-${project.slug}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline points={points} fill="none" stroke={accent} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <polygon points={`0,100 ${points} 100,100`} fill={`url(#g-${project.slug})`} />
            </svg>
          </div>
        </div>
      );
    }

    case "chat":
      return (
        <div style={wrap} className="p-5 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Avatar i={2} size={22} />
            <div className="min-w-0">
              <div className="text-xs font-medium truncate">{content.title}</div>
              <div className="text-[9px] opacity-60">Active now</div>
            </div>
          </div>
          <div className="flex-1 space-y-2 overflow-hidden">
            {content.messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs ${m.from === "me" ? "ml-auto rounded-br-md" : "rounded-bl-md"}`} style={{
                background: m.from === "me" ? accent : "rgba(255,255,255,0.06)",
                color: m.from === "me" ? "#000" : text,
              }}>
                {m.text}
              </div>
            ))}
            <div className="max-w-[40%] rounded-2xl rounded-bl-md px-3 py-2.5 flex gap-1" style={{ background: "rgba(255,255,255,0.06)" }}>
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 rounded-full bg-current opacity-40" />
              ))}
            </div>
          </div>
          <div className="mt-3 rounded-full px-3 py-2 text-xs opacity-60" style={{ background: "rgba(255,255,255,0.05)" }}>
            Message…
          </div>
        </div>
      );

    case "map":
      return (
        <div style={wrap} className="p-0 h-full relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 40%, ${brand.from}44, transparent 60%), radial-gradient(circle at 70% 60%, ${brand.to}33, transparent 60%)` }} />
          <div className="relative p-5">
            <div className="text-xs opacity-70">{project.name}</div>
            <div className="text-lg font-semibold mt-1">{content.title}</div>
          </div>
          {content.markers.map((m, i) => (
            <div key={i} className="absolute rounded-full px-2.5 py-1 text-[10px] font-medium shadow-lg"
              style={{
                background: accent,
                color: "#000",
                top: `${25 + (i * 13) % 55}%`,
                left: `${15 + (i * 17) % 65}%`,
              }}>
              {m}
            </div>
          ))}
        </div>
      );
  }
}