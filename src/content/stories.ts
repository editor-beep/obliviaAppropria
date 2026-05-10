export type StoryStatus = "complete" | "concept" | "tbd";

export type StorySection = {
  heading?: string;
  paragraphs: string[];
};

export type DocumentScrap = {
  label: string;
  body: string;
};

export type Story = {
  slug: string;
  flightNumber: string;
  number: string; // "01" or "A"
  group: "international" | "domestic";
  title: string;
  shortTitle: string;
  origin: string; // 3-letter
  destination: string; // 3-letter
  location: string;
  industry: string;
  coverStory: string;
  culprit: string;
  role: string;
  localCenter: string;
  surfaceMystery: string;
  keyImage?: string;
  mediaMisreading?: string;
  theMoment?: string;
  status: StoryStatus;
  sections: StorySection[];
  scraps?: DocumentScrap[];
};

// Connections between stories — drives the system map
export type Connection = {
  from: string; // slug
  to: string;
  label: string;
};

export const stories: Story[] = [
  {
    slug: "rift-silence",
    flightNumber: "OBA-001",
    number: "01",
    group: "international",
    title: "The Silence Beneath the Silence of the Rift",
    shortTitle: "The Silence Beneath",
    origin: "JFK",
    destination: "NBO",
    location: "East African Rift Valley — lakeside town",
    industry: "Extractive impact investing / saline minerals",
    coverStory: "Regenerative mineral stewardship",
    culprit:
      "Meridian Saline Ventures (East Africa) Ltd. / Luxembourg holding company / Zurich impact fund",
    role: "Regenerative travel correspondent, Luminance",
    localCenter:
      "Akinyi (environmental lawyer), Omondi (fisherman), Joseph (driver)",
    surfaceMystery: "The flamingos have left.",
    mediaMisreading:
      "What the Flamingos Left Behind: A Journey Into Collective Grief at the Edge of the Rift",
    keyImage: "Oblivia photographs the waiver number at golden hour.",
    status: "complete",
    sections: [
      {
        paragraphs: [
          "The flamingos are gone and the lodge has built a meditation around the absence. Oblivia arrives on a Tuesday, in linen, with three cameras and one question she has not yet learned to ask.",
          "Akinyi has the documents. Omondi has the lake. Joseph has the road and the patience to drive it slowly enough that the correspondent in the back seat can take the photograph she will, later, not understand she has taken.",
        ],
      },
      {
        heading: "The waiver",
        paragraphs: [
          "At golden hour the salt pans flare. The waiver — taped to the inside of the operations shed — is legible for forty seconds at a stretch. Oblivia frames it for the negative space. The number is in the negative space.",
        ],
      },
      {
        heading: "What travels",
        paragraphs: [
          "The piece publishes on a Sunday. By Monday it is the most-shared essay of the week. By Wednesday Akinyi's filing has a new exhibit and no one yet knows where it came from.",
        ],
      },
    ],
    scraps: [
      {
        label: "WAIVER NO.",
        body: "MSV-EA / 2024 / 0173-RZ\nIssued: Zurich, 14 Mar 2024\nReviewing authority: redacted",
      },
    ],
  },
  {
    slug: "sacred-water",
    flightNumber: "OBA-002",
    number: "02",
    group: "international",
    title: "The Sacred Water / The Stolen Water",
    shortTitle: "The Sacred Water",
    origin: "NBO",
    destination: "MEX",
    location: "Chiapas or Yucatán, Mexico",
    industry: "Beverage extraction / water privatization / plastic",
    coverStory: "Sacred water immersion retreat / ancient glacial memory",
    culprit:
      "Multinational beverage company extracting indigenous aquifer",
    role: "Wellness correspondent / spiritual pilgrim",
    localCenter:
      "Community fighting a land tribunal case, third year (TBD)",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia drinks ceremonially from a branded plastic bottle of the water being extracted beneath her feet.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Concept stage. The pilgrim arrives by van. The water arrives by truck, in plastic, from a spring forty meters below the courtyard where the ceremony is held.",
        ],
      },
    ],
  },
  {
    slug: "certified-forest",
    flightNumber: "OBA-003",
    number: "03",
    group: "international",
    title: "The Certified Forest / The Burning Forest",
    shortTitle: "The Certified Forest",
    origin: "MEX",
    destination: "BPN",
    location: "Borneo or Sumatra, Indonesia",
    industry: "Palm oil",
    coverStory:
      "Sustainable certified / deforestation-free / biodiversity offsets",
    culprit:
      "Palm oil company whose certification body board member is their own representative",
    role: "Conservation witness / Luminance correspondent",
    localCenter:
      "Former plantation worker turned orangutan trek guide — understands the certification system better than anyone at the Roundtable.",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia at an ecolodge whose kitchen uses certified sustainable palm oil; forest clearing visible from the infinity pool.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Concept stage. The certificate is on the wall. The clearing is in the window. The guide is in the kitchen with both.",
        ],
      },
    ],
  },
  {
    slug: "ocean-witness",
    flightNumber: "OBA-004",
    number: "04",
    group: "international",
    title: "The Ocean Witness / The Plastic Circuit",
    shortTitle: "The Ocean Witness",
    origin: "BPN",
    destination: "MNL",
    location: "The Philippines",
    industry: "Plastic / beverage / waste colonialism",
    coverStory: "Ocean cleanup / circular economy / closing the loop",
    culprit:
      "Multinational manufacturer funding the nonprofit counting its own bottles on beaches",
    role: "Ocean plastic witness / regenerative travel correspondent",
    localCenter:
      "Community receiving Western recycling exports; understands the supply chain with exhausting precision (TBD)",
    surfaceMystery: "TBD",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Concept stage. The loop is closed in the press release. On the beach the loop is a line, and the line points back across the Pacific.",
        ],
      },
    ],
  },
  {
    slug: "mayan-fury",
    flightNumber: "OBA-005",
    number: "05",
    group: "international",
    title: "Oblivia Cracks the Case of the Mayan Fury",
    shortTitle: "The Mayan Fury",
    origin: "MNL",
    destination: "GUA",
    location: "Quiché department, Guatemala — Maya K'iche' highlands",
    industry: "Hydraulic fracturing / narrative capture",
    coverStory:
      "Telluric sensitivity / ancestral earth fury / sacred land cosmology",
    culprit:
      "Auric Subsurface Solutions Ltd. (Calgary) / Soluciones del Subsuelo Aurora S.A. / Narrative Resource Group LLC (Belize)",
    role: "Niece / accidental investigator / Luminance correspondent",
    localCenter:
      "Ixchel (community geologist, 31), Domingo (her brother, 17, guide, $180/day, saving for university)",
    surfaceMystery:
      "Montgomery Reginald Appropria — Uncle Monty — has vanished from a predawn ancestral listening walk.",
    keyImage:
      "Monty at the bottom of a subsidence crack, conscious, satellite communicator in hand, doing a calculation.",
    mediaMisreading:
      "The Ground Remembers: Grief, Ancestral Fury, and One Woman's Search for Her Uncle in the Maya Highlands",
    theMoment:
      "“The Fury has a measurement.” She looks at what she wrote. For the first time, she is not sure it is enough.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Monty has been paid $4,200 a month through Narrative Resource Group LLC to keep the cosmological explanation for subsidence alive in wellness media. He has done it well. He has done it for years. He has fallen, in the literal sense, into the damage he helped conceal.",
          "Ixchel can see his signal on her monitor. The community decides — collectively, with the kind of patience that does not photograph well — not to tell Oblivia yet. Domingo manages the pace of her understanding on Ixchel's instructions.",
        ],
      },
      {
        heading: "Accidental exposure",
        paragraphs: [
          "Oblivia photographs Ixchel's monitoring data and the concession documents with her 35mm. She posts everything within four hours of Monty's rescue, despite his explicit request not to. The post is the best-performing thing she has ever written. The data is correct. The framing is wrong in a way she will not understand for another two stories.",
        ],
      },
    ],
    scraps: [
      {
        label: "CONCESSION",
        body: "AURORA-GT-2021-0044\nOperator: Soluciones del Subsuelo Aurora S.A.\nParent: Auric Subsurface Solutions Ltd. (Calgary)",
      },
      {
        label: "CONSULTANCY",
        body: "Narrative Resource Group LLC (Belize)\nMonthly retainer: USD 4,200\nDeliverable: ‘cultural framing support’",
      },
    ],
  },
  {
    slug: "poisoned-healing",
    flightNumber: "OBA-006",
    number: "06",
    group: "international",
    title: "The Poisoned Healing",
    shortTitle: "The Poisoned Healing",
    origin: "GUA",
    destination: "ROT",
    location: "Rotorua, Aotearoa New Zealand",
    industry:
      "Geothermal energy extraction / wellness industrial complex / green-energy cover story",
    coverStory:
      "100% Pure / geothermal wellness / tikanga-inspired healing / the integration experience",
    culprit:
      "Geothermal extraction company whose New Zealand subsidiary certified the retreat's non-functioning filtration system. Hydrogen sulfide and ethylene at 340% above advisory threshold in thermal pool three.",
    role:
      "Luminance correspondent profiling retreat founder Serena for ‘Rooted: One Woman's Quest to Build a Healing Space at the Edge of the World’",
    localCenter:
      "Mere (elder, seventies, nine years in Waitangi Tribunal process) and Tama (her grandson, late twenties, monitoring gas seepage with a consumer air-quality monitor for four months)",
    surfaceMystery:
      "Retreat guests are getting sick — headaches at the same hour, sweetness at the back of the throat, dreams too specific to dismiss. Three guests report the same dream: a woman standing in steam, reading from a document, her back turned.",
    keyImage:
      "Oblivia, soaking in thermal pool three, inhales the gas and begins to recite the Waitangi Tribunal claim number in front of six wellness tourists and Serena's ring light.",
    mediaMisreading:
      "Serena's podcast episode about Oblivia's ‘transmission’ publishes before the gas story breaks. It becomes the retreat's most downloaded episode.",
    theMoment:
      "Mere watches the footage once. Is quiet. Then says: ‘She got the number right.’",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "The retreat calls it the integration experience. It is in the FAQ. The FAQ was updated four months ago. Tama noticed when it changed.",
          "Brad — Māori cultural wellness consultant from Tauranga, $4,000 a day — has built a three-session integration workshop around the sickness. It is called ancestral transmission. It books out in forty minutes.",
        ],
      },
      {
        heading: "What Tama has",
        paragraphs: [
          "Four months of air-quality logs. A group chat with Mere, two cousins, and a Canadian environmental journalist Ixchel introduced him to. Footage of Oblivia, in the pool, reading a number she does not know she knows. Timestamp. Platform. Light.",
        ],
      },
    ],
    scraps: [
      {
        label: "WAITANGI CLAIM",
        body: "WAI-0934\nFiled: 2017\nClaimant: redacted\nStatus: in tribunal process — year nine",
      },
    ],
  },
  {
    slug: "the-loop",
    flightNumber: "OBA-007",
    number: "07",
    group: "international",
    title: "The Loop",
    shortTitle: "The Loop",
    origin: "ROT",
    destination: "ACC",
    location: "Kantamanto Market, Accra, Ghana",
    industry:
      "Fast fashion / circular economy fraud / charitable donation as waste export",
    coverStory:
      "Circularity initiative / premium curated artisan-grade apparel / B Corp certification / 2% resilience fund",
    culprit:
      "Loopwear (NYC, $17M Series A) and GiveForward (Columbus sorting nonprofit) — cross-owned through the same impact fund. C-grade bales shipped as artisan-grade. Resilience fund disbursed through a Loopwear-controlled foundation with no Kantamanto representation.",
    role: "Luminance correspondent profiling Loopwear's community partnership",
    localCenter:
      "Abena (kosekyeame / head porter, thirties, twelve years at Kantamanto, three years of bale data) and Kofi (investigative journalist, six weeks of sourcing, no international outlet will run it)",
    surfaceMystery:
      "A GiveForward internal logistics memo packed into a bale by mistake — detailing actual grading criteria and the Loopwear sign-off on C-grade offshore shipments — is in Abena's possession.",
    keyImage:
      "Oblivia photographs the dead pile without honest warmth — the first flat documentary image she has taken in the collection.",
    mediaMisreading:
      "Loopwear reposts Oblivia's profile of Madison. Goes quiet for eleven days after the second piece. Posts a sunset.",
    theMoment:
      "Madison sits very still for a long time when Oblivia tells her. That stillness is the most honest thing in the story.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Madison — Loopwear founder, Connecticut, same schools as Oblivia — has visited Accra four times and never been to Kantamanto. She has never asked what percentage of the Columbus container is sellable, because the answer is not a question the business model can survive.",
          "Oblivia gets lost in the market on day two and finds Abena eating rice between bale stacks. Abena has checked her follower count. She has been waiting.",
        ],
      },
      {
        heading: "Two pieces",
        paragraphs: [
          "Oblivia files the wrong one first — the Loopwear profile, already in layout. The second, co-reported with Kofi, is the best thing she has written. Gloria's mural, painted over the Loopwear mural on a weekend, is accurate in a way that takes a moment to read and longer to forget. Abena photographs it. Kofi runs it without a caption.",
        ],
      },
    ],
    scraps: [
      {
        label: "INTERNAL MEMO — GIVEFORWARD",
        body: "Container CMB-0421-OS\nGrading: 62% C, 24% D, 14% unsalvageable\nApproval: M. Castellan / Loopwear Ops",
      },
    ],
  },
  {
    slug: "music-tbd",
    flightNumber: "OBA-008",
    number: "08",
    group: "international",
    title: "Music — Untitled",
    shortTitle: "Music",
    origin: "ACC",
    destination: "KIN",
    location: "Jamaica, Mali, or Colombia (TBD)",
    industry: "Music / intellectual property / cultural extraction",
    coverStory: "Collaboration / cultural exchange / artist development",
    culprit: "TBD — who owns the copyright",
    role: "Cultural witness, possibly attending a music healing retreat",
    localCenter: "TBD",
    surfaceMystery: "TBD",
    status: "tbd",
    sections: [
      {
        paragraphs: [
          "Boarding soon. Location and culprit under consideration.",
        ],
      },
    ],
  },
  {
    slug: "tech-tbd",
    flightNumber: "OBA-009",
    number: "09",
    group: "international",
    title: "Tech / Connectivity — Untitled",
    shortTitle: "Tech",
    origin: "KIN",
    destination: "DKR",
    location: "Southeast Asia or West Africa (TBD)",
    industry: "Tech colonialism",
    coverStory: "Connectivity as liberation / digital inclusion",
    culprit: "TBD",
    role: "TBD",
    localCenter: "TBD",
    surfaceMystery: "TBD",
    status: "tbd",
    sections: [
      { paragraphs: ["Boarding soon."] },
    ],
  },
  {
    slug: "fashion-tbd",
    flightNumber: "OBA-010",
    number: "10",
    group: "international",
    title: "Fashion — Untitled",
    shortTitle: "Fashion",
    origin: "DKR",
    destination: "DAC",
    location: "Bangladesh, Ethiopia, or Portugal (TBD)",
    industry: "Fashion / slow fashion rebrand",
    coverStory: "Slow fashion / ethical sourcing / artisan labor",
    culprit: "TBD",
    role: "TBD",
    localCenter: "TBD",
    surfaceMystery: "TBD",
    status: "tbd",
    sections: [
      { paragraphs: ["Boarding soon."] },
    ],
  },
  {
    slug: "threshold-border",
    flightNumber: "OBA-A",
    number: "A",
    group: "domestic",
    title: "The Threshold",
    shortTitle: "The Threshold",
    origin: "DAC",
    destination: "MFE",
    location: "Rio Grande Valley, Texas",
    industry: "Surveillance tech / humanitarian industrial complex",
    coverStory:
      "Data-driven dignified crisis response / case management optimization",
    culprit: "Palantir, via NGO contract",
    role: "Humanitarian innovation correspondent, Luminance",
    localCenter:
      "Legal aid workers, food distributors — doing what they have been doing for years",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia finds the surveillance dashboard beautiful. She describes it as ‘a map of human longing.’ It is a deportation routing system.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Concept stage. The dashboard is beautiful in the way the industry insists beauty is a kind of clarity. The clarity routes a van.",
        ],
      },
    ],
  },
  {
    slug: "interior-angola",
    flightNumber: "OBA-B",
    number: "B",
    group: "domestic",
    title: "The Interior",
    shortTitle: "The Interior",
    origin: "MFE",
    destination: "BTR",
    location: "Louisiana State Penitentiary, Angola",
    industry:
      "Private prison / carceral wellness / rehabilitation industrial complex",
    coverStory:
      "Healing-centered institution / restorative justice / faith-based rehabilitation",
    culprit:
      "TBD — venture-backed prison wellness startup / private corrections contract",
    role: "Restorative justice correspondent, Luminance",
    localCenter:
      "Incarcerated lifer — legal scholar, teaches others, uses outside witnesses as a resource carefully and deliberately.",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia at the rodeo. The gift shop. The warden's TED talk playing on a monitor in the lobby.",
    mediaMisreading:
      "The Grace Inside: How One Louisiana Prison Found Its Humanity",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Concept stage. The chapel is renovated. The cell block is not. The TED talk loops in the lobby.",
        ],
      },
    ],
  },
  {
    slug: "fields-central-valley",
    flightNumber: "OBA-C",
    number: "C",
    group: "domestic",
    title: "The Fields",
    shortTitle: "The Fields",
    origin: "BTR",
    destination: "FAT",
    location: "Central Valley, California",
    industry:
      "Agricultural labor / ethical sourcing / regenerative farming rebrand",
    coverStory:
      "Ethical sourcing initiative / farm to table / regenerative agriculture",
    culprit:
      "Food brand whose parent company is the reason the labor conditions exist",
    role: "Embedded with the ethical sourcing initiative",
    localCenter:
      "Workers who have been here longer than the initiative has existed.",
    surfaceMystery: "TBD",
    keyImage:
      "The grain bowl at Riftward. The heritage legume paste. It came from here.",
    theMoment:
      "Oblivia boards a Boeing in California. Field journal open. Below her, the fields, the workers, the supply chain ascending into the hold. She does not look down. She is watching the light.",
    status: "concept",
    sections: [
      {
        paragraphs: [
          "Final flight. Final image. The book closes the frame.",
        ],
      },
    ],
  },
];

export const connections: Connection[] = [
  { from: "rift-silence", to: "fields-central-valley", label: "the grain bowl at Riftward" },
  { from: "fields-central-valley", to: "threshold-border", label: "the labor the surveillance tracks" },
  { from: "threshold-border", to: "interior-angola", label: "what the surveillance catches, the system processes" },
  { from: "sacred-water", to: "certified-forest", label: "same conglomerate" },
  { from: "certified-forest", to: "rift-silence", label: "same impact fund" },
  { from: "the-loop", to: "ocean-witness", label: "circularity as cover" },
  { from: "poisoned-healing", to: "mayan-fury", label: "wellness as narrative cover for extraction" },
  { from: "mayan-fury", to: "the-loop", label: "Ixchel's contact files Tama's footage" },
];

export function storyBySlug(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function nextStory(slug: string) {
  const i = stories.findIndex((s) => s.slug === slug);
  if (i === -1 || i === stories.length - 1) return null;
  return stories[i + 1];
}

export function prevStory(slug: string) {
  const i = stories.findIndex((s) => s.slug === slug);
  if (i <= 0) return null;
  return stories[i - 1];
}
