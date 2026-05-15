import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Privileged Eye" },
      {
        name: "description",
        content: "About Detective Oblivia Appropria and Alexandrei Harris: Privileged Eye.",
      },
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
          The name does the work. <em>Oblivia</em>: oblivious, incurious about her own position.{" "}
          <em>Appropria</em>: she appropriates — the labour, the knowledge, the grief of communities
          she passes through. Together they describe a figure most readers will recognise from
          journalism, from NGO dispatches, from the kind of literary nonfiction that wins prizes for
          bearing witness to places it arrived at last week.
        </p>
        <p>
          The collection is not a satire of bad intentions. Oblivia means well. That is the point.
          Meaning well, arriving with credentials, having the right contacts and the correct
          politics — none of it changes what the eye takes and what it leaves. Each story follows
          her into a site of environmental harm: a dam negotiation, a corporate listening session,
          a rewilding scheme, a grief walk. In each, she solves the case. In each, the solution
          is hers, which means it is not quite right, which means it costs something she will not
          be the one to pay.
        </p>
        <p>
          Alexandrei Harris, environmental researcher writing for The Times, files alongside her.
          His pieces run in the paper. They are believed. He is the formal record of what she saw,
          which means he is the formal record of what she missed. The two of them together
          constitute a system of knowing that feels thorough precisely because it is closed.
        </p>
        <p>
          Below that system: the communities who have been there longer. Each story is told
          twice — once through Oblivia's investigation, once through the angle she couldn't hold.
          The collection asks what gets built on the gap between them.
        </p>
      </div>

      <div className="mt-12 border-t border-border/40 pt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          The author
        </div>
        <p className="mt-4 text-foreground/70 leading-relaxed">
          <em>Privileged Eye</em> is a work of fiction. Any resemblance to specific investigators,
          witnesses, or investigations is a structural coincidence, which is a different thing from
          an accidental one.
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
