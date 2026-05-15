import { createFileRoute, Link } from "@tanstack/react-router";
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
  return (
    <section className="mx-auto flex min-h-[calc(100vh-13rem)] max-w-6xl items-center px-4 py-12 sm:py-16">
      <div className="boeing-panel boeing-grid overflow-hidden">
        <div>
          <div className="bg-background/45 px-6 py-8 sm:px-8 sm:py-12">
            <div className="boeing-rule border-b border-border/60 pb-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
                Subscribe & support
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Open Substack for new posts, and Ko-fi to support ongoing work.
              </p>
            </div>
            <div className="mt-8 space-y-5 rounded-sm border border-signal/40 bg-cabin/75 p-6">
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-signal-glow">
                External links
              </div>
              <p className="font-editorial text-2xl leading-relaxed text-foreground">
                Follow on Substack and support on Ko-fi.
              </p>
              <div className="space-y-3">
                <a
                  href="https://themeansofproduction.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-sm border border-signal/70 bg-signal/20 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-signal-glow transition-colors hover:bg-signal/30"
                >
                  Open Substack →
                </a>
                <a
                  href="https://ko-fi.com/themeansofproduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center rounded-sm border border-border bg-background/80 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-signal/60 hover:text-signal-glow"
                >
                  Open Ko-fi →
                </a>
              </div>
              <div className="rounded-sm border border-border/60 bg-paper/65 p-4 text-sm leading-relaxed text-paper-ink">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
                  Cabin note
                </div>
                <p className="mt-2">
                  Substack is where new posts go live, and Ko-fi helps keep the project going.
                </p>
              </div>
              <Link
                to="/stories"
                className="inline-flex rounded-sm border border-border px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-signal/60 hover:text-signal-glow"
              >
                Read current flights →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
