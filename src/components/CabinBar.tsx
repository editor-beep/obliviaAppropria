import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { stories, storyBySlug, nextStory } from "@/content/stories";

export function CabinBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // Detect current story slug
  const match = location.pathname.match(/^\/stories\/([^/]+)/);
  const currentSlug = match?.[1];
  const current = currentSlug ? storyBySlug(currentSlug) : null;
  const next = currentSlug ? nextStory(currentSlug) : null;

  const origin = current?.origin ?? "JFK";
  const destination = next?.destination ?? current?.destination ?? "GLB";
  const flight = current?.flightNumber ?? "OBA-000";

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, h.scrollTop / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      <header className="boeing-rule sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:gap-4 sm:text-[11px]">
          <Link
            to="/"
            className="boeing-wordmark text-lg text-signal-glow transition-colors hover:text-signal"
          >
            Privileged Eye
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="boeing-panel ml-auto flex flex-1 items-center gap-3 overflow-hidden px-3 py-2 hover:border-signal/60"
            aria-label="Open flight manifest"
          >
            <span className="text-signal-glow">[ {flight} ]</span>
            <span className="hidden text-foreground/90 sm:inline">{origin}</span>
            <FlightLine progress={progress} />
            <span className="hidden text-foreground/90 sm:inline">{destination}</span>
            <span className="ml-auto hidden text-muted-foreground/80 md:inline">
              ALT 35,000 · SEAT 2A
            </span>
          </button>
          <Link
            to="/stories"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow sm:inline"
          >
            Manifest
          </Link>
          <Link
            to="/system-map"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow md:inline"
          >
            System
          </Link>
          <Link
            to="/passport"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow md:inline"
          >
            Passport
          </Link>
          <Link
            to="/safety-card"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow md:inline"
          >
            Safety
          </Link>
          <Link
            to="/cabin"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow md:inline"
          >
            Cabin
          </Link>
          <a
            href="https://oblivia-retreats.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-border/70 bg-background/70 px-2.5 py-1.5 text-foreground/80 transition-colors hover:border-signal/60 hover:text-signal-glow md:inline"
          >
            Plan Your Retreat
          </a>
        </div>
      </header>
      {open && <ManifestDrawer onClose={() => setOpen(false)} currentSlug={currentSlug} />}
    </>
  );
}

function FlightLine({ progress }: { progress: number }) {
  return (
    <svg
      viewBox="0 0 200 10"
      className="h-2.5 w-full max-w-[260px] flex-1 text-muted-foreground"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="5" x2="200" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <line
        x1="0"
        y1="5"
        x2="200"
        y2="5"
        stroke="var(--color-signal)"
        strokeWidth="0.6"
        className="flight-line"
        opacity="0.8"
      />
      <g transform={`translate(${progress * 196 + 2} 5)`}>
        <text x="0" y="3" fontSize="8" textAnchor="middle" fill="var(--color-signal-glow)">
          ✈
        </text>
      </g>
    </svg>
  );
}

function ManifestDrawer({ onClose, currentSlug }: { onClose: () => void; currentSlug?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="boeing-overlay flex-1 backdrop-blur-sm" />
      <aside
        className="boeing-panel h-full w-full max-w-md overflow-y-auto border-l border-border/80 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.26em] text-signal-glow">
            Flight Manifest
          </h2>
          <button
            onClick={onClose}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-signal"
          >
            CLOSE ✕
          </button>
        </div>
        <ol className="space-y-1">
          {stories.map((s) => (
            <li key={s.slug}>
              <Link
                to="/stories/$slug"
                params={{ slug: s.slug }}
                onClick={onClose}
                className={`flex items-baseline gap-3 border px-3 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  s.slug === currentSlug
                    ? "boeing-active-row border-signal/60 text-signal-glow"
                    : "border-transparent hover:border-border hover:bg-background/70"
                }`}
              >
                <span className="w-8 text-muted-foreground">{s.number}</span>
                <span className="w-16 text-signal-glow/80">{s.flightNumber}</span>
                <span className="flex-1 truncate font-sans normal-case tracking-normal text-foreground">
                  {s.shortTitle}
                </span>
                <span className="text-muted-foreground/70">
                  {s.status === "complete"
                    ? "● COMPLETE"
                    : s.status === "concept"
                      ? "○ CONCEPT"
                      : "· TBD"}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
