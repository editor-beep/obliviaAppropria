import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { storyBySlug, nextStory, prevStory, type Story } from "@/content/stories";
import { DocumentScrap } from "@/components/DocumentScrap";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = storyBySlug(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.story
      ? [
          { title: `${loaderData.story.title} — Privileged Eye` },
          { name: "description", content: loaderData.story.surfaceMystery },
          { property: "og:title", content: loaderData.story.title },
          { property: "og:description", content: loaderData.story.surfaceMystery },
        ]
      : [],
  }),
  component: StoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl">No such flight</h1>
      <Link to="/stories" className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.22em] text-signal-glow">
        ← Return to manifest
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl">Turbulence</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const next = nextStory(story.slug);
  const prev = prevStory(story.slug);

  return (
    <article>
      {/* Header strip — boarding ticket */}
      <header className="border-b border-border/60 bg-seatback/40">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/90">
            <span className="rounded-sm border border-signal/40 px-2 py-1">
              {story.flightNumber}
            </span>
            <span>{story.origin}</span>
            <span className="text-border">→</span>
            <span>{story.destination}</span>
            <span className="text-border">·</span>
            <span className="text-muted-foreground">SEAT {story.number}A</span>
            <span className="ml-auto text-muted-foreground">
              {story.status === "complete" ? "● COMPLETE" : story.status === "concept" ? "○ CONCEPT" : "· BOARDING SOON"}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-6xl">
            {story.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {story.surfaceMystery}
          </p>

          <dl className="mt-8 grid gap-4 font-mono text-[11px] uppercase tracking-wider sm:grid-cols-2">
            <Meta label="Location" value={story.location} />
            <Meta label="Industry" value={story.industry} />
            <Meta label="Cover Story" value={story.coverStory} />
            <Meta label="Oblivia's Role" value={story.role} />
            <Meta label="Local Center" value={story.localCenter} />
            <Meta label="Corporate Culprit" value={story.culprit} />
          </dl>
        </div>
      </header>

      {/* Body + marginalia */}
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1fr_260px]">
        <div className="story-prose mx-auto w-full max-w-2xl">
          {story.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {/* sprinkle a scrap after first/second section */}
              {story.scraps && story.scraps[i] && (
                <DocumentScrap scrap={story.scraps[i]} rotate={i % 2 === 0 ? -1.4 : 1.6} />
              )}
            </div>
          ))}
        </div>

        <aside className="space-y-6 border-t border-border/60 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {story.keyImage && <Marginal label="Key image" body={story.keyImage} />}
          {story.theMoment && <Marginal label="The moment" body={story.theMoment} />}
          {story.mediaMisreading && <Marginal label="Media misreading" body={story.mediaMisreading} />}
        </aside>
      </div>

      {/* Transit interstitial / next flight */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/stories/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-md border border-border/60 bg-seatback/60 p-6 hover:border-signal/60"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                ← Previous flight
              </div>
              <div className="mt-2 font-display text-xl group-hover:text-signal-glow">{prev.title}</div>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/stories/$slug"
              params={{ slug: next.slug }}
              className="group rounded-md border border-signal/40 bg-cabin/70 p-6 text-right hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow">
                Next flight · {next.flightNumber} →
              </div>
              <div className="mt-2 font-display text-xl group-hover:text-signal-glow">{next.title}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {next.origin} → {next.destination}
              </div>
            </Link>
          ) : (
            <div className="rounded-md border border-border/60 bg-seatback/40 p-6 text-right">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow">
                Final image
              </div>
              <div className="mt-2 font-display text-xl">She is watching the light.</div>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-signal-glow/80">{label}</dt>
      <dd className="mt-1 font-sans text-sm normal-case tracking-normal text-foreground/90">{value}</dd>
    </div>
  );
}

function Marginal({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/80">
        {label}
      </div>
      <p className="mt-2 font-display text-base italic leading-relaxed text-foreground/90">
        {body}
      </p>
    </div>
  );
}
