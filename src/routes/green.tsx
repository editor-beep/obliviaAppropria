import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";

const AXES = [
  "Critical prose",
  "Audience admissions",
  "Diaristic residue",
  "Formal composition",
  "Narrative architecture",
  "Cult formation",
  "Cultural coordinates",
  "Power and surveillance",
  "Environmental threads",
  "Knowledge extraction",
  "Media misreading",
  "Lateral inheritance",
  "The return",
] as const;

type Axis = (typeof AXES)[number];

interface FilmAnalysis {
  title: string;
  analysis: Record<Axis, string>;
}

const analyzeFilm = createServerFn({ method: "POST" })
  .validator(z.object({ title: z.string().min(1, "Film title is required") }))
  .handler(async ({ data }): Promise<FilmAnalysis> => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const axesList = AXES.map((a, i) => `${i + 1}. ${a}`).join("\n");
    const prompt = [
      `Analyze the film "${data.title}" across the following thirteen axes.`,
      `For each axis, write one concise paragraph of cultural and critical analysis.`,
      `Return your response as a JSON object where each key is the exact axis name`,
      `and each value is the analysis paragraph. Return only valid JSON, no markdown fences.\n`,
      `Axes:\n${axesList}`,
    ].join(" ");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
      },
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error ${response.status}: ${errText}`);
    }

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text as string | undefined;

    if (!text) {
      throw new Error("No content returned from Gemini");
    }

    let analysis: Record<string, string>;
    try {
      analysis = JSON.parse(text);
    } catch {
      throw new Error("Gemini returned malformed JSON");
    }

    return { title: data.title, analysis: analysis as Record<Axis, string> };
  });

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

function GreenPage() {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState<FilmAnalysis | null>(null);
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
      {/* Header */}
      <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl">
        Send a film <span className="text-signal-glow italic">to the green.</span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-foreground/80 italic">
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
            <span className="text-foreground/90">Session</span>
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
              {loading ? "Reading…" : "Submit"}
            </button>
          </div>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            <span className="text-signal">Error</span>
            <span className="mx-2 text-border">·</span>
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="mt-12 border-t border-border/60 pt-10">
          <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow">
            Reading · {result.title}
          </div>
          <ol className="space-y-8">
            {AXES.map((axis, i) => (
              <li key={axis} className="grid gap-2 sm:grid-cols-[2rem_1fr]">
                <span className="font-mono text-[11px] text-muted-foreground/60 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                    {axis}
                  </div>
                  <p className="leading-relaxed text-foreground/75">
                    {result.analysis[axis] ?? "—"}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

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
