import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/subscribe")({
  head: () => ({
    meta: [
      { title: "Subscribe — Privileged Eye" },
      { name: "description", content: "One story a month. Boarding now." },
    ],
  }),
  component: Subscribe,
});

function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        Boarding pass
      </div>
      <h1 className="mt-3 font-display text-5xl">Subscribe</h1>
      <p className="mt-4 text-muted-foreground">
        One story a month. 18–25 pages. Delivered to your gate.
      </p>

      {done ? (
        <div className="mt-10 rounded-md border border-signal/50 bg-cabin/60 p-6 font-mono text-sm uppercase tracking-[0.18em] text-signal-glow">
          ✦ Seat reserved. Check your inbox at {email}.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@somewhere.com"
            className="flex-1 rounded-sm border border-border bg-seatback px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-signal focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-sm border border-signal/70 bg-signal/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-glow hover:bg-signal/30"
          >
            Reserve seat →
          </button>
        </form>
      )}

      <p className="mt-8 text-xs text-muted-foreground/70">
        This site is fictional. Stories are available directly in the in-app manifest.
      </p>
    </div>
  );
}
