import { createFileRoute, Link } from "@tanstack/react-router";
import { stories } from "@/content/stories";
import { BoardingPass } from "@/components/BoardingPass";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Detective Oblivia Appropria — Privileged Eye" },
      {
        name: "description",
        content:
          "A short story collection. Thirteen investigations. Two investigators. One system seen most clearly from underneath.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = [
    stories.find((s) => s.slug === "mayan-fury")!,
    stories.find((s) => s.slug === "the-loop")!,
    stories.find((s) => s.slug === "poisoned-healing")!,
  ];

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 cabin-window opacity-90" aria-hidden />
        <Plane />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <div className="boeing-panel boeing-grid overflow-hidden px-6 py-8 sm:px-10 sm:py-12">
            <div className="grid gap-10">
              <div>
                <div className="boeing-badge">
                  Flight deck edition · 13 stories · one system
                  <span className="cursor-blink" />
                </div>
                <h1 className="mt-8 max-w-4xl text-5xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
                  Detective Oblivia
                  <br />
                  <span className="boeing-wordmark text-signal-glow">Appropria</span>
                </h1>
                <div className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
                  Privileged Eye
                </div>
                <div className="mt-10 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/88 sm:text-xl">
                  <p>
                    Detective Oblivia Appropria crosses borders in linen and good faith. She arrives
                    at retreats, summits, ecolodges, and listening walks. She solves the case. She
                    is the case.
                  </p>
                  <p>
                    Alexandrei Harris, environmental researcher writing for The Times, recommends
                    each investigation and files alongside her. His pieces run. They are wrong in
                    the way she is wrong, which is a specific and well-documented way.
                  </p>
                  <p className="text-foreground/60">
                    Below them both: one system, described from thirteen angles by thirteen
                    communities who have been there longer.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
                  <Link
                    to="/stories"
                    className="border border-signal/70 bg-signal px-5 py-3 text-primary-foreground transition-colors hover:bg-signal-glow"
                  >
                    Open the manifest →
                  </Link>
                  <Link
                    to="/about"
                    className="border border-border bg-background/80 px-5 py-3 text-foreground transition-colors hover:border-signal/60 hover:text-signal-glow"
                  >
                    About the collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="boeing-rule mb-8 flex items-baseline justify-between border-b border-border/60 pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
            Featured Departures
          </h2>
          <Link
            to="/stories"
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal-glow"
          >
            All 13 →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <BoardingPass key={s.slug} story={s} />
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="border-y border-border/70 py-10 text-3xl leading-snug text-foreground/95 sm:text-4xl md:text-5xl">
          She solves the case.
          <br />
          <span className="text-signal-glow">She is the case.</span>
        </p>
      </section>
    </div>
  );
}

function Plane() {
  return (
    <svg
      viewBox="0 0 1200 300"
      className="absolute inset-x-0 top-1/3 z-0 h-32 w-full opacity-55"
      aria-hidden
    >
      <line
        x1="0"
        y1="150"
        x2="1200"
        y2="150"
        stroke="var(--color-signal)"
        strokeWidth="0.4"
        strokeDasharray="3 9"
        opacity="0.45"
      />
      <text x="600" y="146" fontSize="18" textAnchor="middle" fill="var(--color-signal-glow)">
        ✈
      </text>
    </svg>
  );
}
