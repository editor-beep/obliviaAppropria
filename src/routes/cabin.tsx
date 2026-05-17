import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { stories, connections } from "@/content/stories";
import type { StoryMeta } from "@/content/types";

// ─── Geometry constants ────────────────────────────────────────────────────────

const SW = 22; // seat width
const SH = 16; // seat height
const PITCH = 36; // row pitch (px)

const COL_X: Record<"A" | "B" | "C" | "D" | "E" | "F", number> = {
  A: 267,
  B: 296,
  C: 325,
  D: 375,
  E: 404,
  F: 433,
};

const ALL_COLS = ["A", "B", "C", "D", "E", "F"] as const;
const BACK_COLS = ["B", "C", "D", "E", "F"] as const;

const DOMESTIC_Y = 658;

function intlY(num: string): number {
  return 215 + (parseInt(num, 10) - 1) * PITCH;
}

function seatCenter(slug: string): { x: number; y: number } | null {
  const s = stories.find((m) => m.slug === slug);
  if (!s) return null;
  if (s.group === "international") {
    return { x: COL_X.A + SW / 2, y: intlY(s.number) + SH / 2 };
  }
  const col = s.number as "A" | "B" | "C" | "D" | "E" | "F";
  const cx = COL_X[col];
  if (cx === undefined) return null;
  return { x: cx + SW / 2, y: DOMESTIC_Y + SH / 2 };
}

// ─── Status styling ────────────────────────────────────────────────────────────

const SEAT_FILL: Record<StoryMeta["status"], string> = {
  complete: "var(--color-signal-glow)",
  concept: "var(--color-seatback)",
  tbd: "var(--color-muted)",
};
const SEAT_STROKE: Record<StoryMeta["status"], string> = {
  complete: "var(--color-signal-glow)",
  concept: "var(--color-signal)",
  tbd: "var(--color-border)",
};
const SEAT_TEXT: Record<StoryMeta["status"], string> = {
  complete: "var(--color-paper)",
  concept: "var(--color-signal-glow)",
  tbd: "var(--color-muted-foreground)",
};
const SEAT_DASH: Partial<Record<StoryMeta["status"], string>> = {
  concept: "3 2",
};

// ─── Route ────────────────────────────────────────────────────────────────────

export const Route = createFileRoute("/cabin")({
  head: () => ({
    meta: [
      { title: "Cabin — Privileged Eye" },
      {
        name: "description",
        content: "Boeing 737-800 · OBA Fleet Configuration. Seat-by-seat case manifest.",
      },
    ],
  }),
  component: Cabin,
});

// ─── Component ────────────────────────────────────────────────────────────────

function Cabin() {
  const navigate = useNavigate();
  const [tip, setTip] = useState<{ story: StoryMeta; x: number; y: number } | null>(null);

  const hoveredSlug = tip?.story.slug ?? null;
  const connectedSlugs = hoveredSlug
    ? connections
        .filter((c) => c.from === hoveredSlug || c.to === hoveredSlug)
        .map((c) => (c.from === hoveredSlug ? c.to : c.from))
    : [];

  const intlStories = stories.filter((s) => s.group === "international");
  const domStories = stories.filter((s) => s.group === "domestic");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
      {/* ── Page header ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
          Cabin View
        </div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Cabin</h1>
        <p className="mt-3 max-w-lg text-sm text-muted-foreground">
          Boeing 737-800 · OBA Fleet Configuration. Each occupied seat is a case. Hover for the
          manifest. Click to board.
        </p>
      </div>

      {/* ── Diagram ──────────────────────────────────────────────────── */}
      <div className="relative mt-10">
        <svg
          viewBox="0 0 700 1250"
          className="mx-auto block w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          {/* ── Fuselage ─────────────────────────────────────────────── */}
          <path
            d="M 350 40 C 388 68,449 112,450 168 L 450 1082 C 450 1122,420 1152,392 1165 L 308 1165 C 280 1152,250 1122,250 1082 L 250 168 C 251 112,312 68,350 40 Z"
            fill="#ede9e2"
            stroke="#a9a19a"
            strokeWidth="1.5"
          />

          {/* ── Wings ────────────────────────────────────────────────── */}
          <polygon points="250,468 22,592 22,652 250,555" fill="#cdc6be" stroke="#a9a19a" strokeWidth="1" />
          <polygon points="450,468 678,592 678,652 450,555" fill="#cdc6be" stroke="#a9a19a" strokeWidth="1" />

          {/* ── Engine nacelles ──────────────────────────────────────── */}
          <ellipse cx="126" cy="622" rx="17" ry="45" fill="#2d2824" stroke="#18140f" strokeWidth="1" />
          <ellipse cx="574" cy="622" rx="17" ry="45" fill="#2d2824" stroke="#18140f" strokeWidth="1" />
          {/* Intake rings */}
          <ellipse cx="126" cy="577" rx="15" ry="8" fill="#4e443e" stroke="#18140f" strokeWidth="0.8" />
          <ellipse cx="574" cy="577" rx="15" ry="8" fill="#4e443e" stroke="#18140f" strokeWidth="0.8" />
          {/* Exhaust cones */}
          <ellipse cx="126" cy="667" rx="11" ry="5.5" fill="#181410" />
          <ellipse cx="574" cy="667" rx="11" ry="5.5" fill="#181410" />

          {/* ── Horizontal tail stabilizers ───────────────────────── */}
          <polygon points="250,1082 104,1122 104,1146 250,1108" fill="#cdc6be" stroke="#a9a19a" strokeWidth="1" />
          <polygon points="450,1082 596,1122 596,1146 450,1108" fill="#cdc6be" stroke="#a9a19a" strokeWidth="1" />

          {/* ── Cockpit ──────────────────────────────────────────────── */}
          {/* Windshields */}
          <polygon points="316,126 340,91 350,91 345,129" fill="#1d2c40" opacity="0.9" />
          <polygon points="350,91 360,91 384,126 355,129" fill="#1d2c40" opacity="0.9" />
          {/* Glare highlight */}
          <polygon points="322,123 341,94 346,94 341,126" fill="white" opacity="0.05" />
          <polygon points="354,94 362,94 379,122 360,125" fill="white" opacity="0.05" />
          {/* Instrument panel hint */}
          <rect x="296" y="132" width="108" height="26" rx="4" fill="#1d2c40" opacity="0.11" />
          {[308, 323, 338, 362, 377, 392].map((gx) => (
            <circle
              key={gx}
              cx={gx}
              cy={146}
              r="3.5"
              fill="none"
              stroke="#1d2c40"
              strokeWidth="0.6"
              opacity="0.18"
            />
          ))}
          {/* Radar nose dome */}
          <ellipse cx="350" cy="72" rx="19" ry="11" fill="none" stroke="#8e8880" strokeWidth="0.8" opacity="0.45" />

          {/* ── Cabin interior walls ──────────────────────────────── */}
          <line x1="258" y1="168" x2="258" y2="1082" stroke="#b6aea6" strokeWidth="0.7" />
          <line x1="442" y1="168" x2="442" y2="1082" stroke="#b6aea6" strokeWidth="0.7" />

          {/* ── Forward galley ───────────────────────────────────── */}
          <rect x="258" y="170" width="184" height="38" fill="#d9d3c9" stroke="#b6aea6" strokeWidth="0.7" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line
              key={`fh-${i}`}
              x1={264 + i * 20}
              y1="170"
              x2={256 + i * 20}
              y2="208"
              stroke="#b2aaa2"
              strokeWidth="0.4"
              opacity="0.65"
            />
          ))}
          <text
            x="350"
            y="192"
            fontSize="7.5"
            textAnchor="middle"
            fill="#7a7068"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
          >
            GALLEY · FWD
          </text>

          {/* ── Aisle center line ────────────────────────────────── */}
          <line x1="350" y1="213" x2="350" y2="602" stroke="#c6bfb8" strokeWidth="0.5" strokeDasharray="4 7" />
          <line x1="350" y1="648" x2="350" y2="833" stroke="#c6bfb8" strokeWidth="0.5" strokeDasharray="4 7" />

          {/* ── Column headers ───────────────────────────────────── */}
          {ALL_COLS.map((col) => (
            <text
              key={`ch-${col}`}
              x={COL_X[col] + SW / 2}
              y="213"
              fontSize="7"
              textAnchor="middle"
              fill="var(--color-muted-foreground)"
              fontFamily="var(--font-mono)"
              letterSpacing="1"
            >
              {col}
            </text>
          ))}

          {/* ── Window ovals ─────────────────────────────────────── */}
          {intlStories.map((s) => {
            const wy = intlY(s.number) + SH / 2;
            return (
              <g key={`win-${s.slug}`}>
                <ellipse cx="253" cy={wy} rx="4" ry="6.5" fill="white" fillOpacity="0.78" stroke="#b6aea6" strokeWidth="0.6" />
                <ellipse cx="447" cy={wy} rx="4" ry="6.5" fill="white" fillOpacity="0.78" stroke="#b6aea6" strokeWidth="0.6" />
              </g>
            );
          })}
          {/* Domestic row windows */}
          <ellipse cx="253" cy={DOMESTIC_Y + SH / 2} rx="4" ry="6.5" fill="white" fillOpacity="0.78" stroke="#b6aea6" strokeWidth="0.6" />
          <ellipse cx="447" cy={DOMESTIC_Y + SH / 2} rx="4" ry="6.5" fill="white" fillOpacity="0.78" stroke="#b6aea6" strokeWidth="0.6" />
          {/* Empty row windows */}
          {[0, 1, 2, 3].map((i) => {
            const wy = 694 + i * PITCH + SH / 2;
            return (
              <g key={`win-ex-${i}`}>
                <ellipse cx="253" cy={wy} rx="4" ry="6.5" fill="white" fillOpacity="0.5" stroke="#b6aea6" strokeWidth="0.5" opacity="0.6" />
                <ellipse cx="447" cy={wy} rx="4" ry="6.5" fill="white" fillOpacity="0.5" stroke="#b6aea6" strokeWidth="0.5" opacity="0.6" />
              </g>
            );
          })}

          {/* ── Exit row markers ─────────────────────────────────── */}
          <line x1="258" y1="382" x2="442" y2="382" stroke="#3c8c5e" strokeWidth="1.2" opacity="0.7" />
          <rect x="260" y="374" width="24" height="10" rx="2" fill="#3c8c5e" />
          <text x="272" y="381" fontSize="5.5" textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="var(--font-mono)" fontWeight="bold">
            EXIT
          </text>
          <rect x="416" y="374" width="24" height="10" rx="2" fill="#3c8c5e" />
          <text x="428" y="381" fontSize="5.5" textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="var(--font-mono)" fontWeight="bold">
            EXIT
          </text>

          {/* ── Empty seat grid ──────────────────────────────────── */}
          {/* Intl rows: columns B-F (col A is the story seat) */}
          {intlStories.flatMap((s) =>
            BACK_COLS.map((col) => (
              <rect
                key={`empty-${s.number}-${col}`}
                x={COL_X[col]}
                y={intlY(s.number)}
                width={SW}
                height={SH}
                rx={3}
                fill="oklch(0.908 0.016 246)"
                stroke="oklch(0.838 0.024 246)"
                strokeWidth={0.6}
              />
            )),
          )}
          {/* Extra empty rows 13-16 */}
          {[0, 1, 2, 3].flatMap((i) =>
            ALL_COLS.map((col) => (
              <rect
                key={`empty-ex-${i}-${col}`}
                x={COL_X[col]}
                y={694 + i * PITCH}
                width={SW}
                height={SH}
                rx={3}
                fill="oklch(0.908 0.016 246)"
                stroke="oklch(0.838 0.024 246)"
                strokeWidth={0.6}
                opacity={0.42}
              />
            )),
          )}

          {/* ── Connection lines (rendered below story seats) ─────── */}
          {hoveredSlug &&
            connectedSlugs.map((targetSlug) => {
              const a = seatCenter(hoveredSlug);
              const b = seatCenter(targetSlug);
              if (!a || !b) return null;
              return (
                <line
                  key={`conn-${targetSlug}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="var(--color-signal)"
                  strokeWidth={1.1}
                  strokeDasharray="4 3"
                  opacity={0.62}
                />
              );
            })}

          {/* ── International story seats (rows 1–11, col A) ──────── */}
          {intlStories.map((s, i) => {
            const x = COL_X.A;
            const y = intlY(s.number);
            const isHov = hoveredSlug === s.slug;
            const isCon = connectedSlugs.includes(s.slug);
            const fill = isHov ? "var(--color-signal)" : SEAT_FILL[s.status];
            const stroke =
              isHov || isCon ? "var(--color-signal)" : SEAT_STROKE[s.status];

            return (
              <g
                key={s.slug}
                className="cursor-pointer"
                onClick={() => void navigate({ to: "/stories/$slug", params: { slug: s.slug } })}
                onMouseEnter={(e) => setTip({ story: s, x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setTip(null)}
                style={{ animation: `cabinSeatIn 0.45s ease-out ${(i * 0.055).toFixed(2)}s both` }}
              >
                <rect
                  x={x}
                  y={y}
                  width={SW}
                  height={SH}
                  rx={3}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isHov ? 1.6 : 0.9}
                  strokeDasharray={SEAT_DASH[s.status]}
                />
                <text
                  x={x + SW / 2}
                  y={y + SH / 2 + 3.5}
                  fontSize="8"
                  textAnchor="middle"
                  fill={SEAT_TEXT[s.status]}
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  style={{ pointerEvents: "none" }}
                >
                  {s.number}
                </text>
              </g>
            );
          })}

          {/* ── Mid-cabin galley ──────────────────────────────────── */}
          <rect x="258" y="606" width="184" height="38" fill="#d9d3c9" stroke="#b6aea6" strokeWidth="0.7" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line
              key={`mh-${i}`}
              x1={264 + i * 20}
              y1="606"
              x2={256 + i * 20}
              y2="644"
              stroke="#b2aaa2"
              strokeWidth="0.4"
              opacity="0.65"
            />
          ))}
          <text
            x="350"
            y="628"
            fontSize="7.5"
            textAnchor="middle"
            fill="#7a7068"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
          >
            GALLEY · MID
          </text>

          {/* ── Domestic section label ───────────────────────────── */}
          <text
            x="350"
            y="652"
            fontSize="6.5"
            textAnchor="middle"
            fill="var(--color-muted-foreground)"
            fontFamily="var(--font-mono)"
            letterSpacing="2.5"
            opacity="0.7"
          >
            DOMESTIC CONNECTIONS
          </text>

          {/* ── Domestic story seats (row 12, cols A–F) ───────────── */}
          {domStories.map((s, i) => {
            const col = s.number as "A" | "B" | "C" | "D" | "E" | "F";
            const x = COL_X[col];
            const y = DOMESTIC_Y;
            const isHov = hoveredSlug === s.slug;
            const isCon = connectedSlugs.includes(s.slug);
            const fill = isHov ? "var(--color-signal)" : SEAT_FILL[s.status];
            const stroke =
              isHov || isCon ? "var(--color-signal)" : SEAT_STROKE[s.status];

            return (
              <g
                key={s.slug}
                className="cursor-pointer"
                onClick={() => void navigate({ to: "/stories/$slug", params: { slug: s.slug } })}
                onMouseEnter={(e) => setTip({ story: s, x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setTip(null)}
                style={{
                  animation: `cabinSeatIn 0.45s ease-out ${((11 + i) * 0.055).toFixed(2)}s both`,
                }}
              >
                <rect
                  x={x}
                  y={y}
                  width={SW}
                  height={SH}
                  rx={3}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isHov ? 1.6 : 0.9}
                />
                <text
                  x={x + SW / 2}
                  y={y + SH / 2 + 3.5}
                  fontSize="8"
                  textAnchor="middle"
                  fill={SEAT_TEXT[s.status]}
                  fontFamily="var(--font-mono)"
                  fontWeight="600"
                  style={{ pointerEvents: "none" }}
                >
                  {s.number}
                </text>
              </g>
            );
          })}

          {/* ── Rear galley / lav ────────────────────────────────── */}
          <rect x="258" y="838" width="184" height="38" fill="#d9d3c9" stroke="#b6aea6" strokeWidth="0.7" />
          <text
            x="350"
            y="859"
            fontSize="7.5"
            textAnchor="middle"
            fill="#7a7068"
            fontFamily="var(--font-mono)"
            letterSpacing="3"
          >
            GALLEY · AFT
          </text>
          <rect x="268" y="844" width="28" height="14" rx="3" fill="#cac2ba" stroke="#b6aea6" strokeWidth="0.5" />
          <text x="282" y="854" fontSize="6" textAnchor="middle" fill="#7a7068" fontFamily="var(--font-mono)">
            LAV
          </text>
          <rect x="404" y="844" width="28" height="14" rx="3" fill="#cac2ba" stroke="#b6aea6" strokeWidth="0.5" />
          <text x="418" y="854" fontSize="6" textAnchor="middle" fill="#7a7068" fontFamily="var(--font-mono)">
            LAV
          </text>

          {/* ── Drink cart (animated) ────────────────────────────── */}
          <g className="cabin-drink-cart">
            {/* Cart body */}
            <rect x="340" y="432" width="20" height="44" rx="3" fill="#c88e52" stroke="#9a6b3c" strokeWidth="0.8" />
            {/* Shelf dividers */}
            <line x1="340" y1="448" x2="360" y2="448" stroke="#9a6b3c" strokeWidth="0.6" />
            <line x1="340" y1="462" x2="360" y2="462" stroke="#9a6b3c" strokeWidth="0.6" />
            {/* Handle bar */}
            <rect x="339" y="427" width="22" height="6" rx="2.5" fill="#7e5430" />
            {/* Bottles on top shelf */}
            <rect x="341" y="434" width="4" height="12" rx="1" fill="#4a80a4" opacity="0.75" />
            <rect x="347" y="434" width="4" height="12" rx="1" fill="#c04040" opacity="0.75" />
            <rect x="353" y="434" width="4" height="12" rx="1" fill="#4a80a4" opacity="0.75" />
            {/* Wheels */}
            <circle cx="344" cy="478" r="3.5" fill="#38302a" />
            <circle cx="356" cy="478" r="3.5" fill="#38302a" />
            <circle cx="344" cy="478" r="1.5" fill="#6a5e56" />
            <circle cx="356" cy="478" r="1.5" fill="#6a5e56" />
          </g>

          {/* ── OA badge — Oblivia's seat 2A ─────────────────────── */}
          <circle
            cx={COL_X.A + SW / 2}
            cy={intlY("02") - 7}
            r={5.5}
            fill="var(--color-signal-glow)"
            stroke="white"
            strokeWidth="0.9"
          />
          <text
            x={COL_X.A + SW / 2}
            y={intlY("02") - 4}
            fontSize="5"
            textAnchor="middle"
            fill="white"
            fontFamily="var(--font-mono)"
            fontWeight="bold"
            style={{ pointerEvents: "none" }}
          >
            OA
          </text>

          {/* ── Technical annotations ────────────────────────────── */}
          <text x="84" y="172" fontSize="7.5" fill="#9e9690" fontFamily="var(--font-mono)" letterSpacing="1.5">
            BOEING 737-800
          </text>
          <text x="84" y="184" fontSize="6" fill="#b4aca4" fontFamily="var(--font-mono)" letterSpacing="1.5">
            OBA FLEET · PRIVILEGED EYE
          </text>

          {/* Intl section bracket */}
          <line x1="242" y1="215" x2="242" y2="591" stroke="#c4bcb4" strokeWidth="0.5" />
          <line x1="240" y1="215" x2="244" y2="215" stroke="#c4bcb4" strokeWidth="0.5" />
          <line x1="240" y1="591" x2="244" y2="591" stroke="#c4bcb4" strokeWidth="0.5" />
          <text
            x="238"
            y="403"
            fontSize="6"
            textAnchor="middle"
            fill="#b4aca4"
            fontFamily="var(--font-mono)"
            letterSpacing="1.5"
            transform="rotate(-90 238 403)"
          >
            INTL ×11
          </text>

          {/* Domestic section bracket */}
          <line x1="242" y1="658" x2="242" y2="674" stroke="#c4bcb4" strokeWidth="0.5" />
          <line x1="240" y1="658" x2="244" y2="658" stroke="#c4bcb4" strokeWidth="0.5" />
          <line x1="240" y1="674" x2="244" y2="674" stroke="#c4bcb4" strokeWidth="0.5" />
          <text
            x="233"
            y="666"
            fontSize="5.5"
            textAnchor="middle"
            fill="#b4aca4"
            fontFamily="var(--font-mono)"
          >
            DOM
          </text>

          {/* Seat 2A annotation */}
          <text
            x={COL_X.A + SW + 5}
            y={intlY("02") + SH / 2 + 2}
            fontSize="6"
            fill="var(--color-signal)"
            fontFamily="var(--font-mono)"
            letterSpacing="1"
            opacity="0.65"
          >
            ← 2A
          </text>
        </svg>

        {/* ── Hover tooltip ────────────────────────────────────────── */}
        {tip && (
          <div
            className="boeing-panel pointer-events-none fixed z-50 px-3 py-2.5 shadow-xl"
            style={{ top: tip.y - 10, left: tip.x + 18, maxWidth: 244 }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal-glow">
              {tip.story.flightNumber}
            </div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {tip.story.origin} → {tip.story.destination}
            </div>
            <div className="mt-1.5 font-sans text-xs font-semibold text-foreground">
              {tip.story.shortTitle}
            </div>
            <div className="mt-0.5 font-sans text-[10px] leading-snug text-muted-foreground/80">
              {tip.story.location}
            </div>
            <div
              className={`mt-2 font-mono text-[9px] uppercase tracking-[0.18em] ${
                tip.story.status === "complete"
                  ? "text-signal-glow"
                  : "text-muted-foreground/60"
              }`}
            >
              {tip.story.status === "complete"
                ? "● COMPLETE"
                : tip.story.status === "concept"
                  ? "○ CONCEPT"
                  : "· TBD"}
            </div>
          </div>
        )}
      </div>

      {/* ── Legend ──────────────────────────────────────────────────── */}
      <div className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-3 w-5 rounded-[3px]" style={{ background: "var(--color-signal-glow)" }} />
          <span>Complete</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-5 rounded-[3px] border"
            style={{
              background: "var(--color-seatback)",
              borderColor: "var(--color-signal)",
              borderStyle: "dashed",
            }}
          />
          <span>Concept</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-5 rounded-[3px]" style={{ background: "oklch(0.908 0.016 246)" }} />
          <span>Unoccupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-4 rounded-[2px]" style={{ background: "#c88e52" }} />
          <span>Drink cart</span>
        </div>
      </div>

      {/* ── Manifest stats ──────────────────────────────────────────── */}
      <div className="mx-auto mt-5 max-w-lg text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/55">
        {intlStories.length} International · {domStories.length} Domestic · {stories.length} Flights
        Total
      </div>
    </div>
  );
}
