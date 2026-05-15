import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";

// ─── axis definitions ─────────────────────────────────────────────────────────

const PRIMARY_AXES = [
  {
    key: "consensus",
    code: "CNS",
    label: "Consensus",
    num: "01",
    description:
      "How aligned the public reading is across critic, audience, and diaristic record. High = stable, agreed-upon object. Low = no shared account exists.",
    warning:
      "High consensus is not endorsement — it often marks a work that has been settled, perhaps prematurely.",
  },
  {
    key: "friction",
    code: "FRC",
    label: "Friction",
    num: "02",
    description:
      "The width and durability of disagreement around the work. High = interpretive war that is still open years later. Low = no lasting dispute.",
    warning: "Distinct from controversy at release — friction means the gap is still open.",
  },
  {
    key: "obsession",
    code: "OBS",
    label: "Obsession",
    num: "03",
    description:
      "Mention density across time, with the recency curve inverted: older works that keep being discussed score higher.",
    warning: "Volume alone doesn't produce this. A film can be famous and unobsessed-over.",
  },
  {
    key: "haunting",
    code: "HNT",
    label: "Residual Haunting",
    num: "04",
    description:
      "Frequency of language indicating the work returns to viewers without invitation: dreams, intrusive memory, unease.",
    warning: "The most superstitious axis — also the most consistent across genres.",
  },
  {
    key: "symbolic",
    code: "SYM",
    label: "Symbolic Density",
    num: "05",
    description:
      "Density of interpretive activity: theory threads, motif-tracking, disagreement about meaning.",
    warning: "High consensus and near-zero symbolic density can coexist. They are independent.",
  },
  {
    key: "cult",
    code: "CLT",
    label: "Cult Formation",
    num: "06",
    description:
      "The slope of devotion-formation, especially after institutional rejection. High = a reclamation arc; a community that chose the work against its initial reception.",
    warning:
      "Some works are born cult; others become cult after abandonment. The system does not distinguish.",
  },
  {
    key: "formal",
    code: "FRM",
    label: "Formal Risk",
    num: "07",
    description:
      "Risk taken in form, structure, sound, image — independent of how that risk lands. High = the film refused a known shape and chose another.",
    warning:
      "A film can be formally radical and emotionally inert. This axis says nothing about love.",
  },
  {
    key: "voltage",
    code: "VLT",
    label: "Emotional Voltage",
    num: "08",
    description:
      "Sustained intensity of reaction, regardless of polarity. Crying, panic, awe, nausea. High = the artifact moves bodies; discussion language is physiological.",
    warning:
      "Voltage is not quality. A bad film can be high-voltage. We measure the current, not the source.",
  },
  {
    key: "accessibility",
    code: "ACC",
    label: "Accessibility",
    num: "09",
    description:
      "How available the work is to a viewer arriving without context. High = easy to enter, no glossary required. Low = requires prior knowledge or tolerance for difficulty.",
    warning: "Inversely correlated with most other axes. This is a feature, not a defect.",
  },
] as const;

const EXTRA_AXES = [
  {
    key: "reach",
    num: "10",
    label: "Reach",
    description: "Geographic and demographic spread of the film's audience.",
  },
  {
    key: "progeny",
    num: "11",
    label: "Progeny",
    description: "Number and significance of films demonstrably influenced by this one.",
  },
  {
    key: "arc",
    num: "12",
    label: "Arc",
    description:
      "Direction of reputational change since release. 50 = flat. >50 = rising. <50 = declining.",
  },
  {
    key: "transgression",
    num: "13",
    label: "Transgression",
    description:
      "How far the film pushes against the social, moral, or formal norms of its moment.",
  },
] as const;

// ─── types ────────────────────────────────────────────────────────────────────

type PrimaryAxisKey = (typeof PRIMARY_AXES)[number]["key"];
type ExtraAxisKey = (typeof EXTRA_AXES)[number]["key"];
type MetricKey = PrimaryAxisKey | ExtraAxisKey;

interface AfterlifeEvent {
  year: number;
  kind: string;
  label: string;
}

interface Faction {
  name: string;
  share: number;
  voice: string;
}

interface GreenReading {
  slug: string;
  title: string;
  year: number;
  director: string;
  runtime: number;
  catalogue: string;
  epigraph: string;
  reading: string;
  metrics: Record<MetricKey, number | null>;
  notes: Partial<Record<MetricKey, string>>;
  afterlife: AfterlifeEvent[];
  factions: Faction[];
  symbols: string[];
  pos: { x: number; y: number };
}

// ─── prompt constants ─────────────────────────────────────────────────────────

const AXIS_DOC = `The thirteen axes — each scored 0 to 100 (integers only):

01 consensus  (CNS) — alignment across critic/audience/diaristic record. High = settled object. Low = no shared account exists. ⚠ High consensus ≠ endorsement.
02 friction   (FRC) — durability of disagreement. High = interpretive war still open years later. ⚠ Distinct from release controversy.
03 obsession  (OBS) — mention density over time, recency curve inverted. Older works that keep being discussed score higher. ⚠ Fame ≠ obsession.
04 haunting   (HNT) — language of involuntary return: dreams, intrusive memory, unease. ⚠ Most superstitious axis; most consistent across genres.
05 symbolic   (SYM) — density of interpretive activity: theory threads, motif-tracking, meaning disputes. ⚠ Independent of consensus.
06 cult       (CLT) — slope of devotion-formation especially after institutional rejection. ⚠ Born-cult and became-cult are not distinguished.
07 formal     (FRM) — risk taken in form/structure/sound/image, independent of reception. ⚠ Formal radicalism ≠ emotional resonance.
08 voltage    (VLT) — sustained intensity of reaction regardless of polarity (crying, panic, awe, nausea). ⚠ We measure the current, not the source.
09 accessibility (ACC) — ease of entry without prior context. ⚠ Inversely correlated with most other axes.
10 reach      — geographic and demographic spread of the audience.
11 progeny    — number and significance of films demonstrably influenced.
12 arc        — reputational direction since release. 50 = flat. >50 = rising. <50 = declining.
13 transgression — distance from the social/moral/formal norms of its moment.`;

const JSON_SCHEMA = `{
  "slug": "kebab-case-title-year",
  "title": "Full Title",
  "year": 1997,
  "director": "Director Name",
  "runtime": 90,
  "catalogue": "ARTX-001",
  "epigraph": "A single line — quote, phrase, or fragment acting as the film's keynote.",
  "reading": "One long paragraph of cultural-critical prose: the film's position in discourse, what has happened to it since release, what its mention volume looks like now.",
  "metrics": {
    "consensus": 0, "friction": 0, "obsession": 0, "haunting": 0, "symbolic": 0,
    "cult": 0, "formal": 0, "voltage": 0, "accessibility": 0,
    "reach": 0, "progeny": 0, "arc": 0, "transgression": 0
  },
  "notes": {
    "consensus": "Only include a note when the score is surprising or requires a gloss."
  },
  "afterlife": [
    { "year": 1997, "kind": "release",     "label": "Original release event." },
    { "year": 1998, "kind": "rejection",   "label": "Critical or audience rejection, if applicable." },
    { "year": 2002, "kind": "rediscovery", "label": "First wave of critical reappraisal." },
    { "year": 2006, "kind": "criterion",   "label": "Criterion or prestige release, if applicable." },
    { "year": 2010, "kind": "academic",    "label": "Entry into syllabi or scholarly discourse." },
    { "year": 2015, "kind": "meme",        "label": "Viral or meme moment, if applicable." },
    { "year": 2020, "kind": "reissue",     "label": "Reissue or restoration, if applicable." },
    { "year": 2018, "kind": "wound",       "label": "Controversy or cultural wound, if applicable." }
  ],
  "factions": [
    { "name": "Faction Name", "share": 0.45, "voice": "A representative quote or paraphrase." },
    { "name": "Faction Name", "share": 0.35, "voice": "A representative quote or paraphrase." },
    { "name": "Faction Name", "share": 0.20, "voice": "A representative quote or paraphrase." }
  ],
  "symbols": ["symbol one", "symbol two", "symbol three", "symbol four", "symbol five"],
  "pos": { "x": 0.3, "y": 0.8 }
}`;

// ─── server function ──────────────────────────────────────────────────────────

const analyzeFilm = createServerFn({ method: "POST" })
  .validator(z.object({ title: z.string().min(1, "Film title is required") }))
  .handler(async ({ data }): Promise<GreenReading> => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const prompt = `You are a cultural analytics engine obsessed with how films are actually received, remembered, and lived with across time. Your scores are derived from evidence, not taste.

Research the film "${data.title}" thoroughly using web search. Gather evidence from:
- Professional criticism (Sight & Sound, RogerEbert.com, IndieWire, Village Voice, Cahiers du cinéma, Time Out)
- Letterboxd reviews, diary entries, and lists (pay attention to recurring language patterns)
- Reddit (r/TrueFilm, r/movies, r/criterion, r/horror, r/fantheories and relevant subreddits)
- Film forums (MUBI, Criterion Forum, IMDb message boards)
- Academic writing, syllabi, and retrospective essays
- Box office history and reception at release
- Subsequent reappraisals, restorations, reissues
- Any viral/meme moments or cultural wounds

Score the film on all thirteen axes using the evidence you find:

${AXIS_DOC}

Then produce a structured reading in the exact JSON format below. Rules:
- All metric values must be integers 0–100
- Only include afterlife events that are real and documentable; omit inapplicable kinds
- Faction shares must sum to exactly 1.0
- Include a note only when a score is surprising or needs a gloss
- pos.x = accessibility score / 100 (0 = very difficult, 1 = very easy)
- pos.y = cult intensity (0 = mainstream, 1 = deep cult)
- Return ONLY the JSON object — no markdown fences, no commentary before or after

${JSON_SCHEMA}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ google_search: {} }],
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error ${response.status}: ${errText}`);
    }

    const result = await response.json();

    const parts: Array<{ text?: string }> = result?.candidates?.[0]?.content?.parts ?? [];
    const rawText = parts
      .map((p) => p.text ?? "")
      .join("")
      .trim();

    if (!rawText) {
      throw new Error("No content returned from Gemini");
    }

    // Strip markdown fences if present, then extract the JSON object
    const jsonMatch =
      rawText.match(/```json\s*([\s\S]*?)```/) ??
      rawText.match(/```\s*([\s\S]*?)```/) ??
      rawText.match(/(\{[\s\S]*\})/);

    const jsonText = jsonMatch ? jsonMatch[1].trim() : rawText;

    let reading: GreenReading;
    try {
      reading = JSON.parse(jsonText);
    } catch {
      throw new Error("Gemini returned malformed JSON — try again or refine the title.");
    }

    return reading;
  });

// ─── route ────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/green")({
  head: () => ({
    meta: [
      { title: "The Green — Privileged Eye" },
      {
        name: "description",
        content: "Send a film to the green. Returns a reading across thirteen axes.",
      },
    ],
  }),
  component: GreenPage,
});

// ─── page ─────────────────────────────────────────────────────────────────────

function GreenPage() {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState<GreenReading | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await analyzeFilm({ data: { title: title.trim() } });
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl">
        Send a film <span className="italic text-signal-glow">to the green.</span>
      </h1>

      <p className="mt-6 text-lg italic leading-relaxed text-foreground/80">
        The green scrapes the open record of how a film is actually held — critic prose, audience
        admissions, diaristic residue — and returns a reading across the thirteen axes.
      </p>

      {/* Metadata strip */}
      <div className="mt-10 border-t border-border/60 pt-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.28em]">
          <div>
            <span className="text-muted-foreground">Method</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground/90">Green V1</span>
          </div>
          <div>
            <span className="text-muted-foreground">Model</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground/90">Gemini 2.5 Pro</span>
          </div>
          <div>
            <span className="text-muted-foreground">Output</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground/90">Thirteen Axes</span>
          </div>
          <div>
            <span className="text-muted-foreground">Storage</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-foreground/90">User-Movies.json</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mt-10 border-t border-border/60 pt-8">
        <form onSubmit={handleSubmit}>
          <label className="block font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Film Title
          </label>
          <div className="mt-3 flex gap-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter film title"
              className="flex-1 border border-border bg-background/80 px-4 py-3 font-sans text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-signal/60 focus:outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !title.trim()}
              className="border border-signal/70 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow transition-colors hover:bg-signal/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Reading\u2026" : "Submit"}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            <span>Error</span>
            <span className="mx-2 text-border">·</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      {result && <ReadingPanel reading={result} />}

      {/* Footer note */}
      <div className="mt-20 border-t border-border/40 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
        <span>Reading dated {new Date().toISOString().slice(0, 10).replace(/-/g, ".")}</span>
        <span className="mx-3">·</span>
        <span>Catalogue in revision</span>
        <span className="mx-3">·</span>
        <span>Not a score</span>
      </div>
      <p className="mt-4 font-sans text-sm italic text-muted-foreground/70">
        &ldquo;Some works are not consumed. They are inhabited.&rdquo;
      </p>
    </div>
  );
}

// ─── reading panel ────────────────────────────────────────────────────────────

function ReadingPanel({ reading }: { reading: GreenReading }) {
  return (
    <div className="mt-12 space-y-12 border-t border-border/60 pt-10">
      {/* Film header */}
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
          {reading.catalogue}
        </div>
        <h2 className="mt-2 font-display text-4xl leading-tight">{reading.title}</h2>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {reading.year > 0 && <span>{reading.year}</span>}
          {reading.director && <span>{reading.director}</span>}
          {reading.runtime > 0 && <span>{reading.runtime} min</span>}
        </div>
        {reading.epigraph && (
          <p className="mt-5 border-l-2 border-signal/40 pl-4 font-sans text-base italic text-foreground/70">
            {reading.epigraph}
          </p>
        )}
      </div>

      {/* Reading paragraph */}
      {reading.reading && (
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Reading
          </div>
          <p className="leading-relaxed text-foreground/80">{reading.reading}</p>
        </div>
      )}

      {/* Nine primary axes */}
      <div>
        <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Primary Axes · 01–09 · 0–100
        </div>
        <div className="space-y-6">
          {PRIMARY_AXES.map((axis) => {
            const val = reading.metrics?.[axis.key] ?? null;
            const note = reading.notes?.[axis.key];
            return (
              <AxisRow
                key={axis.key}
                num={axis.num}
                code={axis.code}
                label={axis.label}
                description={axis.description}
                warning={axis.warning}
                value={val}
                note={note}
              />
            );
          })}
        </div>
      </div>

      {/* Four additional metrics */}
      <div>
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Four Additional
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {EXTRA_AXES.map((axis) => {
            const val = reading.metrics?.[axis.key] ?? null;
            const note = reading.notes?.[axis.key];
            return (
              <div key={axis.key} className="border border-border/50 p-3">
                <div className="flex items-baseline justify-between gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {axis.num} · {axis.label}
                  </span>
                </div>
                <div className="mt-1 font-mono text-2xl text-foreground/90">{val ?? "—"}</div>
                {val != null && (
                  <div className="mt-1.5 h-[2px] bg-border/40">
                    <div
                      className="h-full bg-signal/50"
                      style={{ width: `${Math.min(100, Math.max(0, val))}%` }}
                    />
                  </div>
                )}
                <p className="mt-2 text-[10px] leading-snug text-muted-foreground/55">
                  {axis.description}
                </p>
                {note && <p className="mt-1 text-[10px] italic text-foreground/50">{note}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Afterlife timeline */}
      {reading.afterlife?.length > 0 && (
        <div>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Afterlife
          </div>
          <ol className="relative space-y-4 border-l border-border/50 pl-6">
            {reading.afterlife.map((ev, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[1.625rem] top-[3px] h-3 w-3 rounded-full border border-signal/60 bg-background" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="shrink-0 font-mono text-[11px] text-signal-glow/80">
                    {ev.year}
                  </span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                    {ev.kind}
                  </span>
                  <span className="text-sm text-foreground/75">{ev.label}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Factions */}
      {reading.factions?.length > 0 && (
        <div>
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Factions
          </div>
          <div className="space-y-4">
            {reading.factions.map((f, i) => (
              <div key={i} className="border border-border/40 p-4">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                    {f.name}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-signal-glow/80">
                    {Math.round(f.share * 100)}%
                  </span>
                </div>
                <div className="mb-3 h-[2px] bg-border/40">
                  <div
                    className="h-full bg-signal/60"
                    style={{ width: `${Math.min(100, f.share * 100)}%` }}
                  />
                </div>
                <p className="text-sm italic text-foreground/65">{f.voice}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Symbols */}
      {reading.symbols?.length > 0 && (
        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Symbols
          </div>
          <div className="flex flex-wrap gap-2">
            {reading.symbols.map((s, i) => (
              <span
                key={i}
                className="border border-border/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── axis row ──────────────────────────────────────────────────────────────────

function AxisRow({
  num,
  code,
  label,
  description,
  warning,
  value,
  note,
}: {
  num: string;
  code: string;
  label: string;
  description: string;
  warning: string;
  value: number | null;
  note?: string;
}) {
  const pct = value != null ? Math.min(100, Math.max(0, value)) : 0;
  return (
    <div className="grid gap-2 sm:grid-cols-[2.5rem_1fr]">
      <div className="shrink-0 pt-0.5 font-mono text-[11px] text-muted-foreground/50">{num}</div>
      <div>
        <div className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
              {code}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80">
              {label}
            </span>
          </div>
          {value != null && (
            <span className="shrink-0 font-mono text-sm text-signal-glow">{value}</span>
          )}
        </div>
        <div className="mb-2 mt-1.5 h-[2px] bg-border/40">
          <div className="h-full bg-signal/70 transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-xs leading-snug text-muted-foreground/60">{description}</p>
        <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground/40">⚠ {warning}</p>
        {note && <p className="mt-1 text-xs italic text-foreground/55">{note}</p>}
      </div>
    </div>
  );
}
