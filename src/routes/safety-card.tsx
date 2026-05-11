import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/safety-card")({
  head: () => ({
    meta: [
      { title: "Safety Card — Privileged Eye" },
      { name: "description", content: "The safety card she never reads." },
    ],
  }),
  component: SafetyCard,
});

const emergencySteps = [
  {
    number: "01",
    title: "Emergency exits",
    detail: "Locate your linen. Confirm your good faith before opening any door.",
    icon: "door",
  },
  {
    number: "02",
    title: "Brace position",
    detail: "If the aisle narrows into a supply chain, keep your head down and follow the diagram.",
    icon: "brace",
  },
  {
    number: "03",
    title: "Leave belongings",
    detail: "Do not photograph the waiver number. Do not retrieve the beautiful dashboard.",
    icon: "bag",
  },
  {
    number: "04",
    title: "Evacuate quickly",
    detail: "Jump, slide, and run from the aircraft before the wrong piece is filed first.",
    icon: "slide",
  },
];

const cabinNotices = [
  {
    title: "No smoking",
    detail: "Do not describe the dashboard as a map of human longing.",
    icon: "no-smoking",
  },
  {
    title: "No devices",
    detail: "If you have already photographed it, do not look at the image at golden hour.",
    icon: "no-camera",
  },
  {
    title: "Seat upright",
    detail: "Your seat reclines into the investigation. Return it to the approved position.",
    icon: "seat",
  },
  {
    title: "Read the card",
    detail: "She does not look down. You will read all four panels anyway.",
    icon: "card",
  },
];

const footerWarnings = [
  "Follow crew instructions",
  "Fasten seat belt low and tight",
  "Leave high heels and heavy bags",
  "Move away from aircraft",
];

function SafetyCard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
          Safety Card
        </div>
        <h1 className="font-display text-4xl sm:text-5xl">The card she never reads</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Recast as a printed Boeing-style briefing card: red header, diagram grid, evacuation
          panels, and the same bad instructions hiding in plain sight.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-[#b5aea1] bg-[#ddd7cb] p-3 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.85)]">
        <div className="overflow-hidden rounded-[1.1rem] border border-[#bcb4a6] bg-[#f6f1e6] text-[#342923]">
          <div className="flex items-end justify-between gap-4 bg-[#c62828] px-5 py-4 text-[#fff8ef]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-90">
                Boeing 737-300 / 800
              </div>
              <div className="font-sans text-2xl font-semibold uppercase tracking-[0.08em] sm:text-[1.75rem]">
                Safety on Board
              </div>
            </div>
            <div className="text-right">
              <div className="font-sans text-lg font-semibold italic leading-none">
                Privileged Eye
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] opacity-90">
                Friendly low fares
              </div>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
              <section className="rounded-[0.85rem] border border-[#d4cbbb] bg-[#fbf8f1] p-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d6f5f]">
                    Emergency exits
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d6f5f]">
                    <span>B737-300</span>
                    <span className="h-3 w-3 rounded-full bg-[#c62828]" />
                    <span>B737-800</span>
                    <span className="h-3 w-3 rounded-full bg-[#3b82f6]" />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {emergencySteps.map((step) => (
                    <InstructionCard key={step.number} {...step} />
                  ))}
                </div>
              </section>

              <section className="rounded-[0.85rem] border border-[#d4cbbb] bg-[#fbf8f1] p-3">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d6f5f]">
                  Cabin reminders
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {cabinNotices.map((notice) => (
                    <NoticeCard key={notice.title} {...notice} />
                  ))}
                </div>
              </section>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <EvacuationPanel
                title="Land evacuation"
                tone="green"
                detail="If the local center is running the investigation, move away from the aircraft and let the guide manage your pace of understanding."
              />
              <EvacuationPanel
                title="Water evacuation"
                tone="blue"
                detail="The fields, the workers, the hold. She does not look down. Keep the raft clear of the story you boarded with."
              />
            </div>

            <div className="rounded-[0.85rem] border border-[#d4cbbb] bg-[#fbf8f1] px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d6f5f]">
                  Crew briefing
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d6f5f]">
                  Please do not remove the safety card from the aircraft
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {footerWarnings.map((warning) => (
                  <FooterBadge key={warning} label={warning} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InstructionCard({
  number,
  title,
  detail,
  icon,
}: {
  number: string;
  title: string;
  detail: string;
  icon: IconKind;
}) {
  return (
    <div className="rounded-[0.75rem] border border-[#ddd4c5] bg-white p-3 shadow-[0_8px_18px_-16px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b7d6d]">
        <span>{number}</span>
        <span>{title}</span>
      </div>
      <div className="mt-3 rounded-[0.65rem] border border-[#dfd7ca] bg-[#f7f3eb] p-3">
        <SafetyIcon kind={icon} />
      </div>
      <p className="mt-3 text-sm leading-snug text-[#4c4037]">{detail}</p>
    </div>
  );
}

function NoticeCard({ title, detail, icon }: { title: string; detail: string; icon: IconKind }) {
  return (
    <div className="rounded-[0.75rem] border border-[#ddd4c5] bg-white p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[0.7rem] border border-[#dfd7ca] bg-[#f7f3eb]">
          <SafetyIcon kind={icon} compact />
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b7d6d]">
            {title}
          </div>
          <p className="mt-1 text-sm leading-snug text-[#4c4037]">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function EvacuationPanel({
  title,
  detail,
  tone,
}: {
  title: string;
  detail: string;
  tone: "green" | "blue";
}) {
  const palette =
    tone === "green"
      ? {
          panel: "bg-[#49ad72]",
          border: "border-[#2f8d57]",
          line: "#fff6e9",
          accent: "#f7d046",
        }
      : {
          panel: "bg-[#2f6fbe]",
          border: "border-[#235796]",
          line: "#fff6e9",
          accent: "#f7d046",
        };

  return (
    <section
      className={`rounded-[0.95rem] border ${palette.border} ${palette.panel} p-4 text-[#fff8ef]`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-90">{title}</div>
      <div className="mt-3 rounded-[0.8rem] bg-white/10 p-3">
        <PlaneDiagram line={palette.line} accent={palette.accent} />
      </div>
      <p className="mt-3 text-sm leading-snug text-[#fff8ef]">{detail}</p>
    </section>
  );
}

function FooterBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[0.7rem] border border-[#ddd4c5] bg-white px-3 py-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#d22f2f]">
        <div className="h-[3px] w-6 rotate-[-35deg] bg-[#d22f2f]" />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5a4f46]">
        {label}
      </span>
    </div>
  );
}

type IconKind = "door" | "brace" | "bag" | "slide" | "no-smoking" | "no-camera" | "seat" | "card";

function SafetyIcon({ kind, compact = false }: { kind: IconKind; compact?: boolean }) {
  const stroke = compact ? 3 : 2.4;

  switch (kind) {
    case "door":
      return (
        <svg viewBox="0 0 120 84" className="h-auto w-full" aria-hidden>
          <rect
            x="10"
            y="10"
            width="34"
            height="60"
            rx="10"
            fill="#f4efe5"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <path
            d="M20 28c6-8 14-8 20 0"
            fill="none"
            stroke="#c62828"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          <rect
            x="60"
            y="12"
            width="22"
            height="58"
            rx="4"
            fill="#fdfbf7"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <path d="M104 18v36" stroke="#f0b432" strokeWidth={stroke + 1} strokeLinecap="round" />
          <path
            d="M92 28l12-12 12 12"
            fill="none"
            stroke="#f0b432"
            strokeWidth={stroke + 1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="94" cy="34" r="6" fill="#1f2937" />
          <path
            d="M94 40v14m0 0-9 11m9-11 11 8m-11-8-10-2"
            fill="none"
            stroke="#1f2937"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        </svg>
      );
    case "brace":
      return (
        <svg viewBox="0 0 120 84" className="h-auto w-full" aria-hidden>
          <rect
            x="18"
            y="18"
            width="24"
            height="34"
            rx="4"
            fill="#d9e7f7"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <rect
            x="22"
            y="52"
            width="20"
            height="10"
            rx="2"
            fill="#9dc3ea"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <circle cx="62" cy="28" r="7" fill="#1f2937" />
          <path
            d="M62 35 50 50m12-15 16 8m-28 7 18 0m-18 0 10 14"
            fill="none"
            stroke="#1f2937"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M94 16v40" stroke="#f0b432" strokeWidth={stroke + 1} strokeLinecap="round" />
          <path
            d="M84 46 94 56l10-10"
            fill="none"
            stroke="#f0b432"
            strokeWidth={stroke + 1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 120 84" className="h-auto w-full" aria-hidden>
          <rect
            x="20"
            y="24"
            width="32"
            height="24"
            rx="4"
            fill="#fde8d6"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <path
            d="M28 24c0-6 4-10 8-10s8 4 8 10"
            fill="none"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <circle cx="84" cy="38" r="20" fill="none" stroke="#d22f2f" strokeWidth={stroke + 2} />
          <path d="M70 52 98 24" stroke="#d22f2f" strokeWidth={stroke + 2} strokeLinecap="round" />
        </svg>
      );
    case "slide":
      return (
        <svg viewBox="0 0 120 84" className="h-auto w-full" aria-hidden>
          <path
            d="M18 60 44 60 94 18"
            fill="none"
            stroke="#f0b432"
            strokeWidth={stroke + 2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="56" cy="32" r="6" fill="#1f2937" />
          <path
            d="M56 38 50 48m6-10 10 6m-16 4 18 2m-18-2 10 13"
            fill="none"
            stroke="#1f2937"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M94 18 102 14 106 20"
            fill="none"
            stroke="#d22f2f"
            strokeWidth={stroke + 1}
            strokeLinecap="round"
          />
        </svg>
      );
    case "no-smoking":
      return (
        <svg viewBox="0 0 84 84" className="h-auto w-full" aria-hidden>
          <circle cx="42" cy="42" r="26" fill="none" stroke="#d22f2f" strokeWidth={stroke + 2} />
          <path d="M24 60 60 24" stroke="#d22f2f" strokeWidth={stroke + 2} strokeLinecap="round" />
          <rect
            x="22"
            y="40"
            width="28"
            height="10"
            rx="4"
            fill="#f4efe5"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <path
            d="M55 33c4 0 7-3 7-7"
            fill="none"
            stroke="#9e9382"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          <path
            d="M60 36c4 0 7-3 7-7"
            fill="none"
            stroke="#9e9382"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        </svg>
      );
    case "no-camera":
      return (
        <svg viewBox="0 0 84 84" className="h-auto w-full" aria-hidden>
          <circle cx="42" cy="42" r="26" fill="none" stroke="#d22f2f" strokeWidth={stroke + 2} />
          <path d="M24 60 60 24" stroke="#d22f2f" strokeWidth={stroke + 2} strokeLinecap="round" />
          <rect
            x="22"
            y="30"
            width="36"
            height="24"
            rx="6"
            fill="#f4efe5"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <circle cx="40" cy="42" r="7" fill="none" stroke="#9e9382" strokeWidth={stroke} />
          <path
            d="M30 30 36 24h8l5 6"
            fill="none"
            stroke="#9e9382"
            strokeWidth={stroke}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "seat":
      return (
        <svg viewBox="0 0 84 84" className="h-auto w-full" aria-hidden>
          <rect
            x="20"
            y="18"
            width="16"
            height="30"
            rx="4"
            fill="#d9e7f7"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <rect
            x="20"
            y="48"
            width="28"
            height="12"
            rx="3"
            fill="#9dc3ea"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <circle cx="56" cy="26" r="6" fill="#1f2937" />
          <path
            d="M56 32v16m0 0-10 8m10-8 10 10m-10-10-14-2"
            fill="none"
            stroke="#1f2937"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          <path d="M18 64h48" stroke="#f0b432" strokeWidth={stroke + 1} strokeLinecap="round" />
        </svg>
      );
    case "card":
      return (
        <svg viewBox="0 0 84 84" className="h-auto w-full" aria-hidden>
          <rect
            x="18"
            y="16"
            width="48"
            height="52"
            rx="6"
            fill="#fffdfa"
            stroke="#9e9382"
            strokeWidth={stroke}
          />
          <rect x="18" y="16" width="48" height="12" rx="6" fill="#c62828" />
          <path
            d="M26 38h32M26 48h32M26 58h20"
            stroke="#9e9382"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

function PlaneDiagram({ line, accent }: { line: string; accent: string }) {
  return (
    <svg viewBox="0 0 320 180" className="h-auto w-full" aria-hidden>
      <path
        d="M160 18 176 68l72 20v12l-72-6-16 58-16-58-72 6V88l72-20 16-50Z"
        fill="none"
        stroke={line}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path d="M158 26v126" stroke={line} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M90 90h140"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 10"
      />
      <path
        d="M68 46 112 74M252 46 208 74M64 136 108 108M256 136 212 108"
        stroke={accent}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="160" cy="90" r="18" fill="none" stroke={accent} strokeWidth="6" />
    </svg>
  );
}
