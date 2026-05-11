import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Privileged Eye" },
      { name: "description", content: "About Detective Oblivia Appropria and Alexandrei Harris: Privileged Eye." },
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
          Detective Oblivia Appropria crosses borders in linen and good faith. She arrives at
          retreats, summits, ecolodges, and listening walks. She solves the case. She is the case.
        </p>
        <p>
          Alexandrei Harris, environmental correspondent for The Times, recommends each investigation
          and files alongside her. His pieces run. They are believed. They are wrong in the way she
          is wrong, which is a specific and well-documented way.
        </p>
        <p>
          Below them both: one system, described from twelve angles by twelve communities who have
          been there longer.
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
