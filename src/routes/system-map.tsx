import { createFileRoute, Link } from "@tanstack/react-router";
import { stories, connections } from "@/content/stories";
import type { StoryMeta } from "@/content/types";

const STATUS_STYLE: Record<
  StoryMeta["status"],
  {
    fill: string;
    stroke: string;
    strokeDasharray?: string;
    numberFill: string;
    labelFill: string;
    opacity: number;
  }
> = {
  complete: {
    fill: "var(--color-signal)",
    stroke: "var(--color-signal-glow)",
    numberFill: "var(--color-background)",
    labelFill: "var(--color-foreground)",
    opacity: 1,
  },
  concept: {
    fill: "var(--color-cabin)",
    stroke: "var(--color-signal)",
    numberFill: "var(--color-signal-glow)",
    labelFill: "var(--color-foreground)",
    opacity: 0.8,
  },
  tbd: {
    fill: "var(--color-seatback)",
    stroke: "var(--color-border)",
    strokeDasharray: "3 2",
    numberFill: "var(--color-muted-foreground)",
    labelFill: "var(--color-muted-foreground)",
    opacity: 0.45,
  },
};

export const Route = createFileRoute("/system-map")({
  head: () => ({
    meta: [
      { title: "System Map — Privileged Eye" },
      { name: "description", content: "How twelve stories describe a single system." },
    ],
  }),
  component: SystemMap,
});

function SystemMap() {
  // Lay out stories in a circle
  const W = 900,
    H = 900,
    cx = W / 2,
    cy = H / 2,
    R = 360;
  const positions = new Map<string, { x: number; y: number }>();
  stories.forEach((s, i) => {
    const a = (i / stories.length) * Math.PI * 2 - Math.PI / 2;
    positions.set(s.slug, { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R });
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        System Map
      </div>
      <h1 className="mt-3 font-display text-5xl">One system. Twelve angles.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Oblivia travels the surface. The reader assembles the underneath. Hover a node to read the
        story.
      </p>

      <div className="mt-12 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto block w-full max-w-3xl">
          {/* concentric rings */}
          <circle
            cx={cx}
            cy={cy}
            r={R}
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="2 6"
          />
          <circle
            cx={cx}
            cy={cy}
            r={R * 0.55}
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="2 6"
            opacity="0.5"
          />
          {/* hub */}
          <circle
            cx={cx}
            cy={cy}
            r="80"
            fill="var(--color-seatback)"
            stroke="var(--color-signal)"
          />
          <text
            x={cx}
            y={cy - 6}
            fontSize="14"
            textAnchor="middle"
            fill="var(--color-signal-glow)"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
          >
            ONE SYSTEM
          </text>
          <text
            x={cx}
            y={cy + 14}
            fontSize="9"
            textAnchor="middle"
            fill="var(--color-muted-foreground)"
            fontFamily="var(--font-mono)"
            letterSpacing="2"
          >
            EXTRACT · CERTIFY · ABSORB
          </text>

          {/* connections */}
          {connections.map((c, i) => {
            const a = positions.get(c.from);
            const b = positions.get(c.to);
            if (!a || !b) return null;
            return (
              <g key={i}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="var(--color-signal)"
                  strokeWidth="0.6"
                  opacity="0.45"
                  strokeDasharray="3 5"
                />
              </g>
            );
          })}

          {/* spokes from hub */}
          {stories.map((s) => {
            const p = positions.get(s.slug)!;
            return (
              <line
                key={s.slug + "-spoke"}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="var(--color-border)"
                strokeWidth="0.4"
                opacity="0.5"
              />
            );
          })}

          {/* nodes */}
          {stories.map((s) => {
            const p = positions.get(s.slug)!;
            const ang = Math.atan2(p.y - cy, p.x - cx);
            const labelX = p.x + Math.cos(ang) * 28;
            const labelY = p.y + Math.sin(ang) * 28;
            const anchor = labelX > cx + 10 ? "start" : labelX < cx - 10 ? "end" : "middle";
            const st = STATUS_STYLE[s.status];
            return (
              <Link key={s.slug} to="/stories/$slug" params={{ slug: s.slug }}>
                <g className="cursor-pointer" opacity={st.opacity}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="14"
                    fill={st.fill}
                    stroke={st.stroke}
                    strokeDasharray={st.strokeDasharray}
                  />
                  <text
                    x={p.x}
                    y={p.y + 4}
                    fontSize="11"
                    textAnchor="middle"
                    fill={st.numberFill}
                    fontFamily="var(--font-mono)"
                  >
                    {s.number}
                  </text>
                  <text
                    x={labelX}
                    y={labelY + 3}
                    fontSize="11"
                    textAnchor={anchor}
                    fill={st.labelFill}
                    fontFamily="var(--font-sans)"
                  >
                    {s.shortTitle}
                  </text>
                </g>
              </Link>
            );
          })}
        </svg>
      </div>

      <div className="mx-auto mt-6 flex flex-wrap gap-6 max-w-3xl font-mono text-[10px] uppercase tracking-[0.22em]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-signal" />
          <span className="text-signal-glow">Complete</span>
        </div>
        <div className="flex items-center gap-2 opacity-80">
          <div className="h-3 w-3 rounded-full bg-cabin border border-signal" />
          <span className="text-muted-foreground">Concept</span>
        </div>
        <div className="flex items-center gap-2 opacity-45">
          <div className="h-3 w-3 rounded-full bg-seatback border border-border border-dashed" />
          <span className="text-muted-foreground">Boarding soon</span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl space-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <div className="text-signal-glow">Threads</div>
        {connections.map((c, i) => {
          const a = stories.find((s) => s.slug === c.from)!;
          const b = stories.find((s) => s.slug === c.to)!;
          return (
            <div
              key={i}
              className="flex flex-wrap items-baseline gap-2 border-b border-border/40 py-2"
            >
              <Link
                to="/stories/$slug"
                params={{ slug: a.slug }}
                className="text-foreground/90 hover:text-signal-glow"
              >
                {a.shortTitle}
              </Link>
              <span>↔</span>
              <Link
                to="/stories/$slug"
                params={{ slug: b.slug }}
                className="text-foreground/90 hover:text-signal-glow"
              >
                {b.shortTitle}
              </Link>
              <span className="ml-auto font-sans normal-case tracking-normal text-muted-foreground/80">
                {c.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
