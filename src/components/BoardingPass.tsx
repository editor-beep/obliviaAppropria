import { Link } from "@tanstack/react-router";
import type { StoryMeta } from "@/content/types";

const statusLabel: Record<StoryMeta["status"], string> = {
  complete: "● COMPLETE",
  concept: "○ CONCEPT",
  tbd: "· BOARDING SOON",
};

export function BoardingPass({ story }: { story: StoryMeta }) {
  return (
    <Link
      to="/stories/$slug"
      params={{ slug: story.slug }}
      className="group relative block overflow-hidden rounded-md border border-border/70 bg-seatback/80 transition-all hover:-translate-y-0.5 hover:border-signal/70 hover:shadow-[0_0_40px_-10px_var(--color-signal)]"
    >
      <div className="grid grid-cols-[1fr_auto] gap-0">
        <div className="p-5">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/80">
            <span>{story.flightNumber}</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">{statusLabel[story.status]}</span>
          </div>
          <div className="mt-3 flex items-baseline gap-3 font-mono text-2xl text-foreground">
            <span>{story.origin}</span>
            <svg viewBox="0 0 60 8" className="h-2 w-16 text-signal/60">
              <line
                x1="0"
                y1="4"
                x2="60"
                y2="4"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="3 3"
              />
              <text x="30" y="6" fontSize="7" textAnchor="middle" fill="currentColor">
                ✈
              </text>
            </svg>
            <span>{story.destination}</span>
          </div>
          <h3 className="mt-3 font-display text-xl leading-tight text-foreground group-hover:text-signal-glow">
            {story.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{story.surfaceMystery}</p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
            <span className="rounded-sm border border-border px-2 py-0.5">
              {story.industry.split("/")[0].trim()}
            </span>
            <span className="rounded-sm border border-border px-2 py-0.5">
              cover: {story.coverStory.split("/")[0].trim()}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-l border-dashed border-border/70 bg-cabin/50 p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <div>SEAT</div>
          <div className="font-display text-3xl text-signal-glow">{story.number}</div>
          <div>2A</div>
        </div>
      </div>
    </Link>
  );
}
