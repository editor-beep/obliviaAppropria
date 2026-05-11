import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Privileged Eye" },
      { name: "description", content: "About Detective Oblivia Appropria: Privileged Eye." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        About the collection
      </div>
      <h1 className="mt-3 font-display text-5xl">Privileged Eye</h1>

      <div className="story-prose mt-10">
        <p>
          Detective Oblivia Appropria is a regenerative travel correspondent for Luminance. She
          crosses borders in linen and good faith. She files from retreats, summits, ecolodges, and
          listening walks. Her essays travel further than she does. She means well. She is the case.
        </p>
        <p>
          Each story is a flight. Each cover story is a destination she believes she has reached.
          Below her: a single global system — extractive finance, certification capture, narrative
          consultancy, charitable waste export, surveillance-as-care — described from twelve angles
          by twelve communities who have been there longer than she has. The reader assembles the
          underneath.
        </p>
        <h2>The frame</h2>
        <p>
          A Boeing carries her between every story. The safety card she doesn’t read. The fields
          below she doesn’t see. The frame accumulates. Final image: she boards in California, field
          journal open, and does not look down.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
        <Link
          to="/stories"
          className="rounded-sm border border-signal/60 bg-signal/15 px-5 py-3 text-signal-glow hover:bg-signal/25"
        >
          Open the manifest →
        </Link>
        <Link
          to="/subscribe"
          className="rounded-sm border border-border px-5 py-3 hover:border-signal/60"
        >
          Subscribe
        </Link>
      </div>
    </div>
  );
}
