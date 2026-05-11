import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/subscribe")({
  head: () => ({
    meta: [
      { title: "Subscribe — Privileged Eye" },
      {
        name: "description",
        content: "In-app reading updates for new Privileged Eye departures.",
      },
    ],
  }),
  component: Subscribe,
});

function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto flex min-h-[calc(100vh-13rem)] max-w-6xl items-center px-4 py-12 sm:py-16">
      <div className="boeing-panel boeing-grid overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-border/60 px-6 py-8 sm:px-10 sm:py-12 lg:border-r lg:border-b-0">
            <div className="boeing-badge">In-app reading updates · boarding list open</div>
            <div className="mt-8 max-w-3xl">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
                Subscribe
              </div>
              <h1 className="mt-4 text-4xl leading-[0.95] text-foreground sm:text-6xl">
                Keep your place in the
                <span className="boeing-wordmark ml-3 inline-block text-signal-glow">manifest</span>
              </h1>
              <p className="mt-8 max-w-2xl font-editorial text-xl leading-relaxed text-foreground/88 sm:text-2xl">
                When the next flight opens, you should hear it before Oblivia finishes filing the
                wrong story. Leave an address for reading updates, new departures, and the next
                route through the hidden system each story exposes.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-sm border border-border/60 bg-paper/60 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
                  Frequency
                </div>
                <p className="mt-3 font-editorial text-lg text-paper-ink">One story a month.</p>
              </div>
              <div className="rounded-sm border border-border/60 bg-paper/60 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
                  Format
                </div>
                <p className="mt-3 font-editorial text-lg text-paper-ink">
                  In-app reading, manifest notes, route changes.
                </p>
              </div>
              <div className="rounded-sm border border-border/60 bg-paper/60 p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
                  Access
                </div>
                <p className="mt-3 font-editorial text-lg text-paper-ink">
                  Read live in the cabin, no paywall.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
              <Link
                to="/stories"
                className="rounded-sm border border-signal/70 bg-signal px-5 py-3 text-primary-foreground transition-colors hover:bg-signal-glow"
              >
                Open manifest →
              </Link>
              <Link
                to="/about"
                className="rounded-sm border border-border bg-background/80 px-5 py-3 text-foreground transition-colors hover:border-signal/60 hover:text-signal-glow"
              >
                About the collection
              </Link>
            </div>
          </div>

          <div className="bg-background/45 px-6 py-8 sm:px-8 sm:py-12">
            <div className="boeing-rule border-b border-border/60 pb-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
                Boarding list
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Reserve a seat for updates on upcoming stories and quiet manifest changes.
              </p>
            </div>

            {done ? (
              <div className="mt-8 space-y-5 rounded-sm border border-signal/40 bg-cabin/75 p-6">
                <div className="font-mono text-xs uppercase tracking-[0.28em] text-signal-glow">
                  Seat reserved
                </div>
                <p className="font-editorial text-2xl leading-relaxed text-foreground">
                  {email} is on the list for the next departure.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This confirmation is currently a local mock-up only — no email is being sent yet,
                  and the stories are already readable in the app manifest.
                </p>
                <Link
                  to="/stories"
                  className="inline-flex rounded-sm border border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-signal/60 hover:text-signal-glow"
                >
                  Read current flights →
                </Link>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setDone(true);
                }}
                className="mt-8 space-y-5"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="subscribe-email"
                    className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="subscribe-email"
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@somewhere.com"
                    className="w-full rounded-sm border border-border bg-seatback px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-signal focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm border border-signal/70 bg-signal/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-glow transition-colors hover:bg-signal/30"
                >
                  Reserve seat →
                </button>

                <div className="rounded-sm border border-border/60 bg-paper/65 p-4 text-sm leading-relaxed text-paper-ink">
                  <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
                    Cabin note
                  </div>
                  <p className="mt-2">
                    This is an in-app mock boarding list for now, not a live newsletter service. If
                    you want a story today, the manifest is already open.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
