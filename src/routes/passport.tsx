import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/passport")({
  head: () => ({
    meta: [
      { title: "Passport — Oblivia Appropria — Privileged Eye" },
      {
        name: "description",
        content:
          "The official travel document of Oblivia Appropria, ecological detective, somatic witness, and high-priestess of the Narrative.",
      },
    ],
  }),
  component: PassportPage,
});

const stamps: Stamp[] = [
  {
    id: "rift-silence",
    country: "KENYA",
    city: "Nairobi",
    iata: "NBO",
    flight: "OBA-001",
    entry: "ENTRY",
    date: "14 MAR",
    purpose: "Ecological Witness",
    note: "Flamingos. Grief. Gaskets.",
    color: "#c62828",
    shape: "circle",
    status: "complete",
  },
  {
    id: "sacred-water",
    country: "SOUTH AFRICA",
    city: "Cape Town",
    iata: "CPT",
    flight: "OBA-002",
    entry: "ENTRY",
    date: "02 APR",
    purpose: "Somatic Listener",
    note: "The vine remembered.",
    color: "#1565c0",
    shape: "rect",
    status: "complete",
  },
  {
    id: "certified-forest",
    country: "BORNEO",
    city: "Balikpapan",
    iata: "BPN",
    flight: "OBA-003",
    entry: "TRANSIT",
    date: "19 APR",
    purpose: "Conservation Witness",
    note: "Drones. Carbon. Chainsaws.",
    color: "#2e7d32",
    shape: "circle",
    status: "concept",
  },
  {
    id: "ocean-witness",
    country: "PHILIPPINES",
    city: "Manila",
    iata: "MNL",
    flight: "OBA-004",
    entry: "ENTRY",
    date: "08 MAY",
    purpose: "Ocean Consciousness",
    note: "The sea withdrew its consent.",
    color: "#0277bd",
    shape: "rect",
    status: "concept",
  },
  {
    id: "mayan-fury",
    country: "GUATEMALA",
    city: "Guatemala City",
    iata: "GUA",
    flight: "OBA-005",
    entry: "ENTRY",
    date: "27 MAY",
    purpose: "Ancestral Listener",
    note: "The fury has a measurement.",
    color: "#4527a0",
    shape: "oval",
    status: "complete",
  },
  {
    id: "poisoned-healing",
    country: "AOTEAROA NZ",
    city: "Rotorua",
    iata: "ROT",
    flight: "OBA-006",
    entry: "ENTRY",
    date: "14 JUN",
    purpose: "Molecular Ascension",
    note: "pH 3.2. 12,000 likes.",
    color: "#00695c",
    shape: "circle",
    status: "concept",
  },
  {
    id: "the-loop",
    country: "GHANA",
    city: "Accra",
    iata: "ACC",
    flight: "OBA-007",
    entry: "ENTRY",
    date: "03 JUL",
    purpose: "Sacred Geometry",
    note: "Bodies becoming light.",
    color: "#e65100",
    shape: "rect",
    status: "complete",
  },
  {
    id: "the-rosewood",
    country: "HONDURAS",
    city: "Tegucigalpa",
    iata: "TGU",
    flight: "OBA-008",
    entry: "ENTRY",
    date: "22 JUL",
    purpose: "Cultural Witness",
    note: "That tree was alive eight months ago.",
    color: "#6a1520",
    shape: "oval",
    status: "complete",
  },
  {
    id: "tech-tbd",
    country: "SENEGAL",
    city: "Dakar",
    iata: "DKR",
    flight: "OBA-009",
    entry: "TRANSIT",
    date: "10 AUG",
    purpose: "Digital Skills Witness",
    note: "She memorized it.",
    color: "#1b5e20",
    shape: "circle",
    status: "concept",
  },
  {
    id: "fashion-tbd",
    country: "NEPAL",
    city: "Kathmandu",
    iata: "KTM",
    flight: "OBA-010",
    entry: "ENTRY",
    date: "01 SEP",
    purpose: "Vibrational Field Research",
    note: "Diamond-wire. Leica. Pedestal.",
    color: "#880e4f",
    shape: "rect",
    status: "concept",
  },
];

type StampShape = "circle" | "rect" | "oval";
interface Stamp {
  id: string;
  country: string;
  city: string;
  iata: string;
  flight: string;
  entry: string;
  date: string;
  purpose: string;
  note: string;
  color: string;
  shape: StampShape;
  status: "complete" | "concept";
}

function PassportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20">
      <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
        Travel Document
      </div>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Passport</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[420px_1fr]">
        <PassportBook />
        <StampsSection />
      </div>

      <BioSection />

      <div className="mt-14 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
        <Link
          to="/stories"
          className="rounded-sm border border-signal/60 bg-signal/15 px-5 py-3 text-signal-glow hover:bg-signal/25"
        >
          Open the manifest →
        </Link>
        <Link
          to="/about"
          className="rounded-sm border border-border px-5 py-3 hover:border-signal/60"
        >
          About the collection
        </Link>
      </div>
    </div>
  );
}

function PassportBook() {
  return (
    <div className="flex flex-col gap-0">
      <PassportCover />
      <PassportDataPage />
    </div>
  );
}

function PassportCover() {
  return (
    <div
      className="relative overflow-hidden rounded-t-[0.9rem] border border-b-0"
      style={{
        background: "linear-gradient(160deg, #1a3d2b 0%, #0e2419 60%, #08160e 100%)",
        borderColor: "#2d5a3d",
        minHeight: "220px",
      }}
    >
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent 0 12px, rgba(255,255,255,0.3) 12px 13px)",
        }}
      />
      <div className="relative flex flex-col items-center justify-center px-8 py-10 text-center">
        <div className="font-mono text-[9px] uppercase tracking-[0.38em] text-emerald-200/70 mb-4">
          United States of America
        </div>

        <svg viewBox="0 0 80 80" className="h-16 w-16 mb-4" aria-label="Passport seal">
          <circle cx="40" cy="40" r="36" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
          <circle cx="40" cy="40" r="30" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.6" />
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * Math.PI * 2;
            const x1 = 40 + Math.cos(angle) * 31;
            const y1 = 40 + Math.sin(angle) * 31;
            const x2 = 40 + Math.cos(angle) * 35;
            const y2 = 40 + Math.sin(angle) * 35;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c9a84c" strokeWidth="0.8" />;
          })}
          <text x="40" y="37" textAnchor="middle" fill="#c9a84c" fontSize="18" fontFamily="serif">✦</text>
          <text x="40" y="52" textAnchor="middle" fill="#c9a84c" fontSize="6.5" fontFamily="monospace" letterSpacing="1">PRIVILEG'D</text>
        </svg>

        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-emerald-50 uppercase">
          Passport
        </div>
        <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.28em] text-emerald-200/60">
          Passeport · Pasaporte
        </div>

        <div className="mt-5 font-mono text-[9px] text-emerald-200/40 uppercase tracking-[0.22em]">
          Privileged Eye · Prestige Edition
        </div>
      </div>
    </div>
  );
}

function PassportDataPage() {
  return (
    <div
      className="rounded-b-[0.9rem] border border-t-0 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #faf8f2 0%, #f5f2ea 100%)",
        borderColor: "#c8bfa8",
      }}
    >
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #1a3d2b, #2d5a3d, #c9a84c, #1a3d2b)" }}
      />

      <div className="p-5">
        <div className="font-mono text-[8px] uppercase tracking-[0.32em] text-stone-400 mb-3">
          United States of America — Official Travel Document
        </div>

        <div className="flex gap-4">
          <PhotoPlaceholder />
          <PersonalData />
        </div>

        <MrzStrip />
      </div>
    </div>
  );
}

function PhotoPlaceholder() {
  return (
    <div
      className="shrink-0 rounded-sm overflow-hidden"
      style={{
        width: 90,
        height: 112,
        border: "1px solid #c8bfa8",
        background: "linear-gradient(160deg, #e8e4da, #d6d0c4)",
      }}
    >
      <img
        src="/oblivia.jpg"
        alt="Oblivia Appropria"
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="w-full h-full flex-col items-center justify-center gap-1 text-center px-2 hidden">
        <svg viewBox="0 0 40 40" className="w-8 h-8 text-stone-400">
          <circle cx="20" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 38c0-8 6-13 14-13s14 5 14 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-stone-400 leading-tight">
          Photo<br />pending
        </div>
      </div>
    </div>
  );
}

function PersonalData() {
  const fields = [
    { label: "Surname", value: "APPROPRIA" },
    { label: "Given names", value: "OBLIVIA MARGARET" },
    { label: "Nationality", value: "AMERICAN" },
    { label: "Date of birth", value: "redacted" },
    { label: "Sex", value: "F" },
    { label: "Place of birth", value: "CONNECTICUT" },
    { label: "Date of issue", value: "see cover story" },
    { label: "Authority", value: "THE ATLANTIC / SELF" },
  ];

  return (
    <div className="flex-1 min-w-0 space-y-2">
      {fields.map((f) => (
        <div key={f.label}>
          <div className="font-mono text-[7.5px] uppercase tracking-[0.22em] text-stone-400 leading-none">
            {f.label}
          </div>
          <div
            className="font-mono text-[10px] uppercase tracking-[0.12em] truncate mt-0.5"
            style={{ color: "#1a1208", fontWeight: 600 }}
          >
            {f.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function MrzStrip() {
  return (
    <div
      className="mt-4 rounded-sm px-3 py-2 font-mono text-[8.5px] tracking-[0.08em] select-none"
      style={{ background: "#ede8dc", color: "#6b5d4a", letterSpacing: "0.06em" }}
    >
      <div>P&lt;USAAPPROPRIA&lt;&lt;OBLIVIA&lt;MARGARET&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>
      <div>OBA000001&lt;0USA0000000F0000000&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;THE&lt;NARRATIVE</div>
    </div>
  );
}

function StampsSection() {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow mb-5">
        Visas &amp; Entry Stamps
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {stamps.map((stamp) => (
          <StampCard key={stamp.id} stamp={stamp} />
        ))}
      </div>
    </div>
  );
}

function StampCard({ stamp }: { stamp: Stamp }) {
  const isComplete = stamp.status === "complete";
  const opacity = isComplete ? 1 : 0.52;

  return (
    <Link
      to="/stories/$slug"
      params={{ slug: stamp.id }}
      className="block group"
      style={{ opacity }}
      title={isComplete ? stamp.id : `${stamp.id} — concept`}
    >
      <div
        className="relative overflow-hidden rounded-sm border transition-all group-hover:shadow-md"
        style={{
          background: "linear-gradient(160deg, #faf8f2, #f0ece0)",
          borderColor: "#c8bfa8",
          minHeight: 120,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0 5px, rgba(0,0,0,0.5) 5px 6px)",
          }}
        />

        <div className="relative flex gap-3 p-3.5">
          <StampSeal stamp={stamp} />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.22em] font-bold leading-none"
                  style={{ color: stamp.color }}
                >
                  {stamp.country}
                </div>
                <div className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.15em] text-stone-500">
                  {stamp.city} · {stamp.iata}
                </div>
              </div>
              <div
                className="shrink-0 font-mono text-[8px] uppercase tracking-[0.12em] rounded-full px-2 py-0.5 border"
                style={{
                  color: stamp.color,
                  borderColor: stamp.color + "55",
                  background: stamp.color + "11",
                }}
              >
                {stamp.entry}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
              <DataPair label="Flight" value={stamp.flight} />
              <DataPair label="Date" value={stamp.date} />
              <DataPair label="Purpose" value={stamp.purpose} />
              <DataPair label="Status" value={isComplete ? "● COMPLETE" : "○ CONCEPT"} />
            </div>

            <div
              className="mt-2 font-editorial text-[10.5px] italic leading-tight"
              style={{ color: "#5c4f3d" }}
            >
              "{stamp.note}"
            </div>
          </div>
        </div>

        {!isComplete && (
          <div
            className="absolute top-2 right-2 font-mono text-[7.5px] uppercase tracking-[0.22em] px-1.5 py-0.5 rounded-full"
            style={{ background: "#e8e0d0", color: "#8b7d6d" }}
          >
            Forthcoming
          </div>
        )}
      </div>
    </Link>
  );
}

function StampSeal({ stamp }: { stamp: Stamp }) {
  const size = 56;
  const { color, shape, iata } = stamp;

  if (shape === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" className="shrink-0" aria-hidden>
        <circle cx="28" cy="28" r="24" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <circle cx="28" cy="28" r="19" fill="none" stroke={color} strokeWidth="0.5" opacity="0.4" />
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={28 + Math.cos(a) * 20}
              y1={28 + Math.sin(a) * 20}
              x2={28 + Math.cos(a) * 23}
              y2={28 + Math.sin(a) * 23}
              stroke={color}
              strokeWidth="0.8"
              opacity="0.7"
            />
          );
        })}
        <text x="28" y="31" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.9">
          {iata}
        </text>
      </svg>
    );
  }

  if (shape === "oval") {
    return (
      <svg width={size} height={size} viewBox="0 0 56 56" className="shrink-0" aria-hidden>
        <ellipse cx="28" cy="28" rx="22" ry="16" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
        <ellipse cx="28" cy="28" rx="18" ry="12" fill="none" stroke={color} strokeWidth="0.5" opacity="0.35" />
        <text x="28" y="31" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.9">
          {iata}
        </text>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 56 56" className="shrink-0" aria-hidden>
      <rect x="4" y="12" width="48" height="32" rx="2" fill="none" stroke={color} strokeWidth="1.5" opacity="0.8" />
      <rect x="7" y="15" width="42" height="26" rx="1" fill="none" stroke={color} strokeWidth="0.5" opacity="0.35" />
      <text x="28" y="31" textAnchor="middle" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold" opacity="0.9">
        {iata}
      </text>
    </svg>
  );
}

function DataPair({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-stone-400 leading-none">
        {label}
      </div>
      <div className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-stone-600 mt-0.5 leading-none">
        {value}
      </div>
    </div>
  );
}

function BioSection() {
  const toolkit = [
    {
      term: "Symbolic Overconfidence",
      def: "The belief that a semester in Prague and a weekend in Tulum have equipped her to understand the soul of any geography better than the people who pay taxes there.",
    },
    {
      term: "Material Incompetence",
      def: "A charming, persistent inability to comprehend how things — electricity, logistics, labor — actually function.",
    },
    {
      term: "The Atlantic-Ready Lens",
      def: "She doesn't just travel; she witnesses. She doesn't just witness; she curates the silence.",
    },
  ];

  return (
    <div className="mt-16 border-t border-border/40 pt-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-signal-glow">
            Field Dossier
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            The Privileged Eye
          </h2>

          <div className="story-prose mt-8">
            <p>
              In a world increasingly cluttered by the inconveniently material, <strong>Oblivia Appropria</strong> offers
              a more luminous alternative: the purely symbolic.
            </p>
            <p>
              Oblivia is an American woman of profound means and even profounder certainties. To the uninitiated,
              she might appear to be a detective; in reality, she is a high-priestess of the Narrative. Where a civil
              engineer sees a crumbling retaining wall, Oblivia sees "the mountain's refusal to be held." Where a local
              magistrate sees a straightforward case of industrial embezzlement, Oblivia sees "an ancestral fracture in
              the collective subconscious."
            </p>
            <p>
              She does not solve mysteries so much as she colonizes them with meaning.
            </p>
            <p>
              The tragedy of Oblivia is not that she is malicious — she is, in fact, devastatingly sincere. The tragedy
              is that she is <strong>institutionally rewarded</strong> for her blindness. Her ability to convert systemic
              corporate extraction into "a journey of healing" is her greatest superpower.
            </p>
            <p>
              In every investigation, the local experts — the pragmatic mechanics, the exhausted doctors, the
              sharp-eyed grandmothers — tell her exactly what is happening within the first five minutes. Oblivia
              smiles at them patiently, convinced that their proximity to the truth has blinded them to its
              "vibrational essence."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal-glow mb-4">
              The Methodology of Meaning
            </div>
            <div className="space-y-3">
              {toolkit.map((item) => (
                <div
                  key={item.term}
                  className="boeing-panel rounded-sm px-4 py-3"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-signal-glow">
                    {item.term}
                  </div>
                  <p className="mt-1.5 text-sm leading-snug text-foreground/70">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-sm border px-4 py-4"
            style={{ borderColor: "oklch(0.8 0.03 246 / 0.65)" }}
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground mb-2">
              A note on the atmosphere
            </div>
            <p className="font-editorial text-sm italic leading-relaxed text-foreground/75">
              The prose of an Oblivia mystery is not a caricature; it is an invitation into a specific, gilded
              delusion. It is deadpan, elegant, and restrained. The humor lies in the sharp, tectonic grinding
              of Oblivia's poetic projections against the cold, hard floor of reality.
            </p>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-signal-glow">
              The truth is out there. The metaphor is much more marketable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
