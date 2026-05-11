import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/safety-card")({
  head: () => ({
    meta: [
      { title: "Safety Card — Privileged Eye" },
      { name: "description", content: "The safety card she never reads." },
    ],
  }),
  component: SafetyCard,
});

const panels = [
  {
    title: "01 · Before departure",
    pictogram: "✦",
    front: "Locate your linen. Confirm your good faith.",
    back: "In the event of accidental exposure, do not photograph the waiver number. If you have already photographed it, do not look at the image at golden hour.",
  },
  {
    title: "02 · In the cabin",
    pictogram: "◐",
    front: "Your seat reclines into the supply chain.",
    back: "The grain bowl was harvested by the labor the surveillance dashboard tracks. The dashboard is beautiful. Do not describe it as a map of human longing.",
  },
  {
    title: "03 · In an emergency",
    pictogram: "✈",
    front: "If the local center is running the investigation, you are the case.",
    back: "Allow the guide to manage your pace of understanding. Do not file the wrong piece first. If you have already filed the wrong piece first, post a sunset.",
  },
  {
    title: "04 · Below you",
    pictogram: "▼",
    front: "The fields. The workers. The hold.",
    back: "She does not look down. She is watching the light.",
  },
];

function SafetyCard() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        Safety Card
      </div>
      <h1 className="mt-3 font-display text-5xl">The card she never reads</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tap a panel to flip it. Do not read all four. (You will read all four.)
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {panels.map((p, i) => (
          <Panel key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

function Panel({ title, pictogram, front, back }: (typeof panels)[number]) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((v) => !v)}
      className="relative aspect-[4/3] w-full text-left"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "none",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-md border border-paper/40 bg-paper p-6 text-paper-ink shadow-xl"
          style={{ backfaceVisibility: "hidden", color: "var(--paper-ink)" }}
        >
          <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">
            <span>{title}</span>
            <span>SAFETY</span>
          </div>
          <div className="text-center text-7xl text-signal-glow">{pictogram}</div>
          <p className="font-display text-base italic leading-snug">{front}</p>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-md border border-signal/40 bg-seatback p-6 text-foreground shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/80">
            <span>{title}</span>
            <span>WARNING</span>
          </div>
          <p className="font-display text-base leading-relaxed text-foreground">{back}</p>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Tap to return →
          </div>
        </div>
      </div>
    </button>
  );
}
