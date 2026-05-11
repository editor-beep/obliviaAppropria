import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { storyMetaBySlug, nextStory, prevStory } from "@/content/stories/index";
import type { StoryMeta, StoryDocument } from "@/content/types";
import { StoryRenderer } from "@/components/StoryRenderer";

// Vite resolves this glob at build time — all story modules are bundled
// as separate chunks and loaded on demand per slug.
const storyModules = import.meta.glob<{ narrative: StoryDocument }>("../content/stories/*.ts", {
  eager: false,
});

export const Route = createFileRoute("/stories/$slug")({
  loader: async ({ params }) => {
    const meta = storyMetaBySlug(params.slug);
    if (!meta) throw notFound();

    const key = `../content/stories/${params.slug}.ts`;
    if (!(key in storyModules)) throw notFound();

    const { narrative } = await storyModules[key]();
    return { meta, narrative };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.meta
      ? [
          { title: `${loaderData.meta.title} — Privileged Eye` },
          { name: "description", content: loaderData.meta.surfaceMystery },
          { property: "og:title", content: loaderData.meta.title },
          {
            property: "og:description",
            content: loaderData.meta.surfaceMystery,
          },
        ]
      : [],
  }),
  component: StoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl">No such flight</h1>
      <Link
        to="/stories"
        className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.22em] text-signal-glow"
      >
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
  const { meta, narrative } = Route.useLoaderData() as {
    meta: StoryMeta;
    narrative: StoryDocument;
  };
  const next = nextStory(meta.slug);
  const prev = prevStory(meta.slug);
  const chapters = getStoryChapters(narrative);

  return (
    <article>
      <header className="border-b border-border/60 bg-seatback/40">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h1 className="font-display text-4xl leading-tight sm:text-6xl">{meta.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{meta.surfaceMystery}</p>

          <dl className="mt-8 grid gap-4 font-mono text-[11px] uppercase tracking-wider sm:grid-cols-2">
            <Meta label="Location" value={meta.location} />
            <Meta label="Local Center" value={meta.localCenter} />
          </dl>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1fr_260px]">
        <StoryRenderer doc={narrative} />

        <aside className="space-y-6 border-t border-border/60 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {chapters.length > 0 && <ChapterList chapters={chapters} />}
          {meta.theMoment && <Marginal label="The moment" body={meta.theMoment} />}
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
              <div className="mt-2 font-display text-xl group-hover:text-signal-glow">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/stories/$slug"
              params={{ slug: next.slug }}
              className="group rounded-md border border-signal/40 bg-cabin/70 p-6 text-right hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow">
                Next flight · {next.flightNumber} →
              </div>
              <div className="mt-2 font-display text-xl group-hover:text-signal-glow">
                {next.title}
              </div>
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
      <dd className="mt-1 font-sans text-sm normal-case tracking-normal text-foreground/90">
        {value}
      </dd>
    </div>
  );
}

function ChapterList({ chapters }: { chapters: Array<{ id: string; title: string }> }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow/80">
        Chapters
      </div>
      <ol className="mt-3 space-y-2">
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <a
              href={`#${chapter.id}`}
              className="block font-display text-base leading-relaxed text-foreground/90 hover:text-signal-glow"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {chapter.title}
            </a>
          </li>
        ))}
      </ol>
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

function getStoryChapters(doc: StoryDocument) {
  const chapterStartPattern = /^chapter\b/i;
  const chapterSections = doc.sections.flatMap((section) => {
    const title = section.title?.trim();
    return title && chapterStartPattern.test(title) ? [{ id: section.id, title }] : [];
  });

  if (chapterSections.length > 0) {
    return chapterSections;
  }

  return doc.sections.flatMap((section) => {
    const title = section.title?.trim();
    return title ? [{ id: section.id, title }] : [];
  });
}
