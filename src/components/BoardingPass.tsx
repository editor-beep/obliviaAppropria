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
      className="boeing-panel group relative block overflow-hidden transition-all hover:-translate-y-0.5 hover:border-signal/70 hover:shadow-[0_24px_45px_-30px_var(--color-signal)]"
    >
      <div
        className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-signal-glow via-signal to-signal/30"
        aria-hidden
      />
      <div className="grid grid-cols-[1fr_auto] gap-0">
        <div className="p-6 pl-7">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/80">
            <span>{story.flightNumber}</span>
            <span className="text-border">|</span>
            <span className="text-muted-foreground">{statusLabel[story.status]}</span>
          </div>
          <div className="mt-4 flex items-baseline gap-3 font-mono text-2xl text-foreground">
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
          <h3 className="boeing-wordmark mt-4 text-2xl leading-tight text-foreground transition-colors group-hover:text-signal-glow">
            {story.title}
          </h3>
          <p className="mt-3 line-clamp-2 max-w-md text-sm leading-6 text-muted-foreground">
            {story.surfaceMystery}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
            <span className="border border-border bg-background/75 px-2 py-0.5">
              {story.industry.split("/")[0].trim()}
            </span>
            <span className="border border-border bg-background/75 px-2 py-0.5">
              cover: {story.coverStory.split("/")[0].trim()}
            </span>
          </div>
        </div>
        <div className="flex min-w-24 flex-col items-center justify-between border-l border-dashed border-border/70 bg-[linear-gradient(180deg,oklch(0.96_0.018_245),oklch(0.9_0.03_245))] p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <div>SEAT</div>
          <div className="boeing-wordmark text-4xl text-signal-glow">{story.number}</div>
          <div>2A</div>
        </div>
      </div>
    </Link>
  );
}
