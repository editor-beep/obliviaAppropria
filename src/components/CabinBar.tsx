import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { stories, storyBySlug, nextStory } from "@/content/stories";

export function CabinBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // Detect current story slug
  const match = location.pathname.match(/^\/stories\/([^\/]+)/);
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
      <header className="sticky top-0 z-40 border-b border-border/60 bg-cabin/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
          <Link to="/" className="text-signal-glow hover:text-signal">
            ◇ Privileged Eye
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="ml-auto flex flex-1 items-center gap-3 rounded-sm border border-border/60 bg-seatback/60 px-3 py-1.5 hover:border-signal/60"
            aria-label="Open flight manifest"
          >
            <span className="text-signal-glow">[ {flight} ]</span>
            <span className="hidden sm:inline">{origin}</span>
            <FlightLine progress={progress} />
            <span className="hidden sm:inline">{destination}</span>
            <span className="ml-auto hidden text-muted-foreground/70 md:inline">
              ALT 35,000 · SEAT 2A
            </span>
          </button>
          <Link
            to="/stories"
            className="hidden rounded-sm border border-border/60 px-2 py-1 hover:border-signal/60 sm:inline"
          >
            Manifest
          </Link>
          <Link
            to="/system-map"
            className="hidden rounded-sm border border-border/60 px-2 py-1 hover:border-signal/60 md:inline"
          >
            System
          </Link>
          <Link
            to="/safety-card"
            className="hidden rounded-sm border border-border/60 px-2 py-1 hover:border-signal/60 md:inline"
          >
            Safety
          </Link>
        </div>
      </header>
      {open && <ManifestDrawer onClose={() => setOpen(false)} currentSlug={currentSlug} />}
    </>
  );
}

function FlightLine({ progress }: { progress: number }) {
  return (
    <svg viewBox="0 0 200 10" className="h-2.5 w-full max-w-[260px] flex-1" preserveAspectRatio="none">
      <line x1="0" y1="5" x2="200" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="0" y1="5" x2="200" y2="5" stroke="var(--color-signal)" strokeWidth="0.6" className="flight-line" opacity="0.7" />
      <g transform={`translate(${progress * 196 + 2} 5)`}>
        <text x="0" y="3" fontSize="8" textAnchor="middle" fill="var(--color-signal-glow)">✈</text>
      </g>
    </svg>
  );
}

function ManifestDrawer({ onClose, currentSlug }: { onClose: () => void; currentSlug?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-cabin/80 backdrop-blur-sm" />
      <aside
        className="h-full w-full max-w-md overflow-y-auto border-l border-border bg-seatback p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-signal-glow">
            Flight Manifest
          </h2>
          <button onClick={onClose} className="font-mono text-xs hover:text-signal">CLOSE ✕</button>
        </div>
        <ol className="space-y-1">
          {stories.map((s) => (
            <li key={s.slug}>
              <Link
                to="/stories/$slug"
                params={{ slug: s.slug }}
                onClick={onClose}
                className={`flex items-baseline gap-3 rounded-sm border px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  s.slug === currentSlug
                    ? "border-signal/60 bg-cabin/70 text-signal-glow"
                    : "border-transparent hover:border-border hover:bg-cabin/40"
                }`}
              >
                <span className="w-8 text-muted-foreground">{s.number}</span>
                <span className="w-16 text-signal-glow/80">{s.flightNumber}</span>
                <span className="flex-1 truncate font-sans normal-case tracking-normal text-foreground">
                  {s.shortTitle}
                </span>
                <span className="text-muted-foreground/70">{s.status === "complete" ? "● COMPLETE" : s.status === "concept" ? "○ CONCEPT" : "· TBD"}</span>
              </Link>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
