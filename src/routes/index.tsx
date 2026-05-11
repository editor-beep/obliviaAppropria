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
          "A short story collection. Twelve flights. Twelve cover stories. One system she does not see.",
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
                  Flight deck edition · 12 stories · one system
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
                <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/88 sm:text-xl">
                  A regenerative travel correspondent crosses twelve borders in linen and good
                  faith. Below her, the system she will not see. The reader sees it. That is the
                  trick.
                </p>
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
          &ldquo;The book describes a single system from twelve different angles.
          <br />
          <span className="text-signal-glow">
            Oblivia travels the surface. The reader assembles the underneath.&rdquo;
          </span>
        </p>
      </section>

      {/* Frame teaser */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="boeing-panel grid gap-8 p-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
              Frame Device
            </div>
            <h3 className="mt-3 text-3xl text-foreground">The Boeing</h3>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Oblivia is in transit between every story. The safety card she never reads. The fields
              below she never sees. Accumulates across the collection. Pays off in the final image.
            </p>
            <Link
              to="/safety-card"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.22em] text-signal-glow hover:underline"
            >
              The safety card she never reads →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-border/50 cabin-window">
            <svg viewBox="0 0 400 300" className="h-full w-full">
              <defs>
                <radialGradient id="g" cx="0.5" cy="0.4">
                  <stop offset="0%" stopColor="oklch(0.99 0.005 245)" />
                  <stop offset="65%" stopColor="oklch(0.78 0.1 245)" />
                  <stop offset="100%" stopColor="oklch(0.42 0.16 255)" />
                </radialGradient>
              </defs>
              <ellipse cx="200" cy="150" rx="140" ry="110" fill="url(#g)" />
              <line
                x1="60"
                y1="240"
                x2="340"
                y2="240"
                stroke="oklch(0.42 0.09 250 / 0.35)"
                strokeWidth="0.5"
              />
              <line
                x1="60"
                y1="250"
                x2="340"
                y2="250"
                stroke="oklch(0.42 0.09 250 / 0.25)"
                strokeWidth="0.5"
              />
              <line
                x1="60"
                y1="260"
                x2="340"
                y2="260"
                stroke="oklch(0.42 0.09 250 / 0.16)"
                strokeWidth="0.5"
              />
              <text
                x="200"
                y="290"
                fontSize="9"
                textAnchor="middle"
                fill="var(--color-muted-foreground)"
                fontFamily="var(--font-mono)"
                letterSpacing="2"
              >
                BELOW: THE FIELDS
              </text>
            </svg>
          </div>
        </div>
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
