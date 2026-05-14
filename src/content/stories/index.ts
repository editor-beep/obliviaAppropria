import type { StoryMeta, Connection } from "@/content/types";

export const storyMetas: StoryMeta[] = [
  {
    slug: "rift-silence",
    flightNumber: "OBA-001",
    number: "01",
    group: "international",
    title: "Oblivia Cracks the Case of the Missing Flamingos",
    shortTitle: "The Silence Beneath",
    origin: "JFK",
    destination: "NBO",
    location: "East African Rift Valley — lakeside town",
    industry: "Extractive impact investing / saline minerals",
    coverStory: "Regenerative mineral stewardship",
    culprit:
      "Meridian Saline Ventures (East Africa) Ltd. / Luxembourg holding company / Zurich impact fund",
    role: "Private investigator (cover: ecological detective / Luminance correspondent)",
    correspondent: "Alexandrei Harris, The Times",
    localCenter:
      "Akinyi (environmental lawyer), Omondi (fisherman), Joseph (driver), Alexandrei Harris (The Times)",
    surfaceMystery: "The flamingos have left.",
    mediaMisreading:
      "What the Flamingos Left Behind: A Journey Into Collective Grief at the Edge of the Rift",
    keyImage: "Oblivia photographs the waiver number at golden hour.",
    status: "complete",
  },
  {
    slug: "sacred-water",
    flightNumber: "OBA-002",
    number: "02",
    group: "international",
    title: "Oblivia Cracks the Case of the Sacred Water",
    shortTitle: "The Sacred Water",
    origin: "NBO",
    destination: "MEX",
    location: "Chiapas or Yucatán, Mexico",
    industry: "Beverage extraction / water privatization / plastic",
    coverStory: "Sacred water immersion retreat / ancient glacial memory",
    culprit: "Multinational beverage company extracting indigenous aquifer",
    role: "Private investigator (cover: spiritual pilgrim / wellness correspondent)",
    localCenter: "Community fighting a land tribunal case, third year (TBD)",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia drinks ceremonially from a branded plastic bottle of the water being extracted beneath her feet.",
    status: "complete",
  },
  {
    slug: "certified-forest",
    flightNumber: "OBA-003",
    number: "03",
    group: "international",
    title: "Oblivia Cracks the Case of the Certified Forest",
    shortTitle: "The Certified Forest",
    origin: "MEX",
    destination: "BPN",
    location: "Borneo or Sumatra, Indonesia",
    industry: "Palm oil",
    coverStory: "Sustainable certified / deforestation-free / biodiversity offsets",
    culprit: "Palm oil company whose certification body board member is their own representative",
    role: "Private investigator (cover: conservation witness / Luminance correspondent)",
    localCenter:
      "Former plantation worker turned orangutan trek guide — understands the certification system better than anyone at the Roundtable.",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia at an ecolodge whose kitchen uses certified sustainable palm oil; forest clearing visible from the infinity pool.",
    status: "concept",
  },
  {
    slug: "ocean-witness",
    flightNumber: "OBA-004",
    number: "04",
    group: "international",
    title: "Oblivia Cracks the Case of the Ocean Witness",
    shortTitle: "The Ocean Witness",
    origin: "BPN",
    destination: "MNL",
    location: "The Philippines",
    industry: "Plastic / beverage / waste colonialism",
    coverStory: "Ocean cleanup / circular economy / closing the loop",
    culprit: "Multinational manufacturer funding the nonprofit counting its own bottles on beaches",
    role: "Private investigator (cover: ocean plastic witness / regenerative travel correspondent)",
    localCenter:
      "Community receiving Western recycling exports; understands the supply chain with exhausting precision (TBD)",
    surfaceMystery: "TBD",
    status: "concept",
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
    coverStory: "Telluric sensitivity / ancestral earth fury / sacred land cosmology",
    culprit:
      "Auric Subsurface Solutions Ltd. (Calgary) / Soluciones del Subsuelo Aurora S.A. / Narrative Resource Group LLC (Belize)",
    role: "Private investigator / niece",
    localCenter:
      "Ixchel (community geologist, 31), Domingo (her brother, 17, guide, $180/day, saving for university)",
    surfaceMystery:
      "Montgomery Reginald Appropria — Uncle Monty — has vanished from a predawn ancestral listening walk.",
    keyImage:
      "Monty at the bottom of a subsidence crack, conscious, satellite communicator in hand, doing a calculation.",
    mediaMisreading:
      "The Ground Remembers: Grief, Ancestral Fury, and One Woman's Search for Her Uncle in the Maya Highlands",
    theMoment:
      "\u201cThe Fury has a measurement.\u201d She looks at what she wrote. For the first time, she is not sure it is enough.",
    status: "complete",
  },
  {
    slug: "poisoned-healing",
    flightNumber: "OBA-006",
    number: "06",
    group: "international",
    title: "Oblivia Cracks the Case of the Poisoned Healing",
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
    role: "Private investigator (cover: Luminance correspondent profiling retreat founder Serena)",
    localCenter:
      "Mere (elder, seventies, nine years in Waitangi Tribunal process) and Tama (her grandson, late twenties, monitoring gas seepage with a consumer air-quality monitor for four months)",
    surfaceMystery:
      "Retreat guests are getting sick — headaches at the same hour, sweetness at the back of the throat, dreams too specific to dismiss. Three guests report the same dream: a woman standing in steam, reading from a document, her back turned.",
    keyImage:
      "Oblivia, soaking in thermal pool three, inhales the gas and begins to recite the Waitangi Tribunal claim number in front of six wellness tourists and Serena's ring light.",
    mediaMisreading:
      "Serena\u2019s podcast episode about Oblivia\u2019s \u2018transmission\u2019 publishes before the gas story breaks. It becomes the retreat\u2019s most downloaded episode.",
    theMoment:
      "Mere watches the footage once. Is quiet. Then says: \u2018She got the number right.\u2019",
    status: "concept",
  },
  {
    slug: "the-loop",
    flightNumber: "OBA-007",
    number: "07",
    group: "international",
    title: "Oblivia Cracks the Case of the Loop",
    shortTitle: "The Loop",
    origin: "ROT",
    destination: "ACC",
    location: "Kantamanto Market, Accra, Ghana",
    industry: "Fast fashion / circular economy fraud / charitable donation as waste export",
    coverStory:
      "Circularity initiative / premium curated artisan-grade apparel / B Corp certification / 2% resilience fund",
    culprit:
      "Loopwear (NYC, $17M Series A) and GiveForward (Columbus sorting nonprofit) — cross-owned through the same impact fund. C-grade bales shipped as artisan-grade. Resilience fund disbursed through a Loopwear-controlled foundation with no Kantamanto representation.",
    role: "Private investigator (cover: Luminance correspondent profiling Loopwear)",
    localCenter:
      "Abena (kosekyeame / head porter, thirties, twelve years at Kantamanto, three years of bale data) and Kofi (investigative journalist, six weeks of sourcing, no international outlet will run it)",
    surfaceMystery:
      "A GiveForward internal logistics memo packed into a bale by mistake — detailing actual grading criteria and the Loopwear sign-off on C-grade offshore shipments — is in Abena\u2019s possession.",
    keyImage:
      "Oblivia photographs the dead pile without honest warmth — the first flat documentary image she has taken in the collection.",
    mediaMisreading:
      "Loopwear reposts Oblivia\u2019s profile of Madison. Goes quiet for eleven days after the second piece. Posts a sunset.",
    theMoment:
      "Madison sits very still for a long time when Oblivia tells her. That stillness is the most honest thing in the story.",
    status: "complete",
  },
  {
    slug: "the-rosewood",
    flightNumber: "OBA-008",
    number: "08",
    group: "international",
    title: "Oblivia Cracks the Case of the Rosewood",
    shortTitle: "The Rosewood",
    origin: "ACC",
    destination: "TGU",
    location: "Cop\u00e1n region, Honduras",
    industry: "Music / endangered timber / CITES fraud / cultural cover",
    coverStory: "Ancestral marimba healing / ethical instrument sourcing / cultural preservation",
    culprit:
      "Resonance & Root (Austin, TX) / Harwood & Fox Acoustic Instruments (Portland, OR) / Comunidad Resonante de Cop\u00e1n (incorporated six months ago) / Meridian Impact Partners (Luxembourg)",
    role: "Private investigator (cover: Luminance correspondent profiling retreat founder)",
    localCenter:
      "Don Aurelio Mej\u00eda (master marimba maker, seventies, 50 years of grain records) and Elena V\u00e1squez (community forest monitor, thirties, Marco Ord\u00f3\u00f1ez's supervisor)",
    surfaceMystery:
      "Marco Ord\u00f3\u00f1ez, park guard, 31, found dead in the forest three weeks ago. Officially: fell at night. Don Aurelio knew him. Don Aurelio knows he was not afraid of the forest.",
    keyImage:
      "Don Aurelio looks at a marimba key from the retreat without touching it. The retreat's founder is filming Oblivia's face for Instagram. 'That tree was alive eight months ago.'",
    mediaMisreading:
      "Finding Your Rhythm: How This Honduran Music Retreat Is Healing Visitors While Saving Ancient Traditions",
    theMoment:
      "Don Aurelio reads the grain. He is quiet for a long time. Then: 'Marco measured this grove.'",
    status: "complete",
  },
  {
    slug: "tech-tbd",
    flightNumber: "OBA-009",
    number: "09",
    group: "international",
    title: "Tech / Connectivity \u2014 Untitled",
    shortTitle: "Tech",
    origin: "TGU",
    destination: "DKR",
    location: "Southeast Asia or West Africa (TBD)",
    industry: "Tech colonialism",
    coverStory: "Connectivity as liberation / digital inclusion",
    culprit: "TBD",
    role: "Private investigator (cover: TBD)",
    localCenter: "TBD",
    surfaceMystery: "TBD",
    status: "tbd",
  },
  {
    slug: "fashion-tbd",
    flightNumber: "OBA-010",
    number: "10",
    group: "international",
    title: "Fashion \u2014 Untitled",
    shortTitle: "Fashion",
    origin: "DKR",
    destination: "DAC",
    location: "Bangladesh, Ethiopia, or Portugal (TBD)",
    industry: "Fashion / slow fashion rebrand",
    coverStory: "Slow fashion / ethical sourcing / artisan labor",
    culprit: "TBD",
    role: "Private investigator (cover: TBD)",
    localCenter: "TBD",
    surfaceMystery: "TBD",
    status: "tbd",
  },
  {
    slug: "threshold-border",
    flightNumber: "OBA-A",
    number: "A",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Threshold",
    shortTitle: "The Threshold",
    origin: "DAC",
    destination: "MFE",
    location: "Rio Grande Valley, Texas",
    industry: "Surveillance tech / humanitarian industrial complex",
    coverStory: "Data-driven dignified crisis response / case management optimization",
    culprit: "Palantir, via NGO contract",
    role: "Private investigator (cover: humanitarian innovation correspondent, Luminance)",
    localCenter:
      "Legal aid workers, food distributors \u2014 doing what they have been doing for years",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia finds the surveillance dashboard beautiful. She describes it as \u2018a map of human longing.\u2019 It is a deportation routing system.",
    status: "concept",
  },
  {
    slug: "interior-angola",
    flightNumber: "OBA-B",
    number: "B",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Interior",
    shortTitle: "The Interior",
    origin: "MFE",
    destination: "BTR",
    location: "Louisiana State Penitentiary, Angola",
    industry: "Private prison / carceral wellness / rehabilitation industrial complex",
    coverStory: "Healing-centered institution / restorative justice / faith-based rehabilitation",
    culprit: "TBD \u2014 venture-backed prison wellness startup / private corrections contract",
    role: "Private investigator (cover: restorative justice correspondent, Luminance)",
    localCenter:
      "Incarcerated lifer \u2014 legal scholar, teaches others, uses outside witnesses as a resource carefully and deliberately.",
    surfaceMystery: "TBD",
    keyImage:
      "Oblivia at the rodeo. The gift shop. The warden\u2019s TED talk playing on a monitor in the lobby.",
    mediaMisreading: "The Grace Inside: How One Louisiana Prison Found Its Humanity",
    status: "concept",
  },
  {
    slug: "fields-central-valley",
    flightNumber: "OBA-C",
    number: "C",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Fields",
    shortTitle: "The Fields",
    origin: "BTR",
    destination: "FAT",
    location: "Central Valley, California",
    industry: "Agricultural labor / ethical sourcing / regenerative farming rebrand",
    coverStory: "Ethical sourcing initiative / farm to table / regenerative agriculture",
    culprit: "Food brand whose parent company is the reason the labor conditions exist",
    role: "Private investigator (cover: embedded with ethical sourcing initiative)",
    localCenter: "Workers who have been here longer than the initiative has existed.",
    surfaceMystery: "TBD",
    keyImage: "The grain bowl at Riftward. The heritage legume paste. It came from here.",
    theMoment:
      "Oblivia boards a Boeing in California. Field journal open. Below her, the fields, the workers, the supply chain ascending into the hold. She does not look down. She is watching the light.",
    status: "concept",
  },
];

export const connections: Connection[] = [
  { from: "rift-silence", to: "fields-central-valley", label: "the grain bowl at Riftward" },
  {
    from: "fields-central-valley",
    to: "threshold-border",
    label: "the labor the surveillance tracks",
  },
  {
    from: "threshold-border",
    to: "interior-angola",
    label: "what the surveillance catches, the system processes",
  },
  { from: "sacred-water", to: "certified-forest", label: "same conglomerate" },
  { from: "certified-forest", to: "rift-silence", label: "same impact fund" },
  { from: "the-loop", to: "ocean-witness", label: "circularity as cover" },
  {
    from: "poisoned-healing",
    to: "mayan-fury",
    label: "wellness as narrative cover for extraction",
  },
  { from: "mayan-fury", to: "the-loop", label: "Ixchel's contact files Tama's footage" },
  { from: "the-rosewood", to: "the-loop", label: "Meridian Impact Partners" },
];

export function storyMetaBySlug(slug: string): StoryMeta | undefined {
  return storyMetas.find((s) => s.slug === slug);
}

export function nextStory(slug: string): StoryMeta | null {
  const i = storyMetas.findIndex((s) => s.slug === slug);
  if (i === -1 || i === storyMetas.length - 1) return null;
  return storyMetas[i + 1];
}

export function prevStory(slug: string): StoryMeta | null {
  const i = storyMetas.findIndex((s) => s.slug === slug);
  if (i <= 0) return null;
  return storyMetas[i - 1];
}
