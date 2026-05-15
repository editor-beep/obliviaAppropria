import { createFileRoute } from "@tanstack/react-router";
import { stories } from "@/content/stories";
import { BoardingPass } from "@/components/BoardingPass";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Manifest — Privileged Eye" },
      { name: "description", content: "All thirteen flights in the collection." },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  const intl = stories.filter((s) => s.group === "international");
  const dom = stories.filter((s) => s.group === "domestic");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        Flight Manifest
      </div>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl">All departures</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Each story is a flight. Each cover story is a destination Oblivia thinks she has arrived at.
        Choose a seat.
      </p>

      <Section title="International Departures" subtitle="Stories 01 — 10" items={intl} />
      <Section title="Domestic Connections" subtitle="The American skeleton · A — C" items={dom} />
    </div>
  );
}

function Section({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof stories;
}) {
  return (
    <section className="mt-16">
      <div className="mb-6 flex items-baseline justify-between border-b border-border/60 pb-3">
        <h2 className="font-display text-2xl">{title}</h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          {subtitle}
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <BoardingPass key={s.slug} story={s} />
        ))}
      </div>
    </section>
  );
}
