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
    role: "Private investigator (cover: ecological detective)",
    correspondent: "Alexandrei Harris, The Times",
    localCenter:
      "Akinyi (environmental lawyer), Omondi (fisherman), Joseph (driver), Alexandrei Harris (The Times)",
    surfaceMystery: "The flamingos have left.",
    mediaMisreading:
      "The Woman Who Heard the Water: A Journey Into Collective Grief at the Edge of the Rift",
    keyImage:
      "Oblivia livestreams the leaking gasket to 400,000 followers. Henderson screams. The Zurich board is watching.",
    status: "complete",
  },
  {
    slug: "sacred-water",
    flightNumber: "OBA-002",
    number: "02",
    group: "international",
    title: "Oblivia Cracks the Case of Sacred Water",
    shortTitle: "Sacred Water",
    origin: "NBO",
    destination: "CPT",
    location: "Stellenbosch, South Africa",
    industry: "Luxury wine / wellness branding / industrial waste concealment",
    coverStory: "The Resonant Vine: A Sanctuary of Liquid Consciousness",
    culprit: "Lithium-Logic Holdings",
    role: "Private investigator (cover: ecological detective / somatic listener)",
    localCenter: "Vineyard workers and local viticulturists tracking toxic runoff",
    surfaceMystery:
      "Flagship Chenin Blanc has turned metallic and an influencer vanished in silvering vines.",
    keyImage:
      "Oblivia kneels in silvered vineyard mud as tactical scanners and black SUVs close in.",
    mediaMisreading:
      "The Atlantic: 'The Architecture of Silence: How One Woman's Bare Feet Exposed the Toxic Infrastructure of the Global South'",
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
    location: "Danum Valley buffer zone, Sabah, Borneo",
    industry: "Old-growth timber / carbon credit fraud / NGO laundering",
    coverStory:
      "Restoration Credits / Carbon-Neutral certification / biodiversity offsets (The Green Shield NGO)",
    culprit:
      "Global Timber Corp (parent) / The Green Shield (front NGO) — selling Restoration Credits while logging the same old-growth plot at night; GPS-spoofing devices used to mask activity",
    role: "Private investigator (cover: conservation witness)",
    localCenter:
      "Sulastri Widiasari (ranger, 11 years service, 8 months of satellite thermal anomaly documentation) and Ahmad Rifai (ranger, detained by logging crew, documented 12 additional device coordinates from memory)",
    surfaceMystery:
      "A local park ranger has vanished after discovering GPS-spoofing devices in the protected forest. The Green Shield's Restoration Credits are selling briskly. The chainsaws are audible from camp.",
    keyImage:
      "Convinced she is removing a 'synthetic implant disrupting the canopy's nervous system,' Oblivia cuts a GPS-spoofing device off its relay pole on camera and carries it out wrapped in silk — hand-delivering the case's central exhibit, internal offset log still powered, into evidence.",
    mediaMisreading:
      "Nature runs a piece on 'intuitive site sensing' as a new conservation methodology, crediting Oblivia's 'somatic decontamination' approach — Sulastri's eight months of documentation appears in the ninth paragraph.",
    status: "complete",
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
    industry: "Deep-sea mining / maritime observer murder / ocean extraction",
    coverStory: "Ocean consciousness research / the sea 'withdrawing its consent to be seen'",
    culprit:
      "Oceanic Mining Ltd — conducting deep-sea dredging operations; a maritime observer assigned to monitor the operation has been murdered",
    role: "Private investigator (cover: ocean consciousness witness / regenerative travel researcher)",
    localCenter: "Maritime observer community and local fishers tracking the disappearance (TBD)",
    surfaceMystery:
      "A maritime observer assigned to monitor Oceanic Mining Ltd's deep-sea dredging operations has been murdered. The ocean, Oblivia insists, is 'withdrawing its consent to be seen.'",
    status: "complete",
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
    title: "Oblivia Cracks the Case of the Weeping Sulfur",
    shortTitle: "The Weeping Sulfur",
    origin: "GUA",
    destination: "ROT",
    location: "Rotorua, Aotearoa New Zealand — Te Waiora Ancestral Spa",
    industry: "Pulp and paper / industrial pollution / wellness cover story / geothermal tourism",
    coverStory:
      "Molecular Ascension / ancestral indigo wisdom / ‘the Earth bleeding indigo for a high-vibration human’",
    culprit:
      "Whakatane Pulp & Paper Mill (catastrophic dye-vat failure; three weeks of industrial indigo-6 and concentrated sulfuric acid in groundwater) / Spa management (kickback agreement with Mill’s PR firm to call the effluent ‘Ancestral Tears’ and retain insurance) / Ministry of Tourism (covered up the homicide to protect regional visitor revenue)",
    role: "Patron-Detective (self-funded; no assignment; soul ‘felt a tug from the Pacific’; 500k followers on own platforms)",
    correspondent: "Alexandrei Harris",
    localCenter:
      "Tama Whitiora (Ngāti Tūwharetoa rangatira / kaitiaki, six-generation customary eel-migration record) and Dr. Hana Petera (iwi freshwater ecologist) reading the tuna die-off as the ecological trigger the council cannot refuse",
    surfaceMystery:
      "Extreme-wellness influencer Finnian Frost has ‘vanished into the blue’ during a midnight immersion at Te Waiora. The lower pools glow electric indigo. Downriver, the ancient longfin eels are coming up belly-pale at dawn and the dawn chorus has gone silent.",
    keyImage:
      "Oblivia films a mass die-off of taonga longfin eels at the outflow plume, narrating it as ‘the ancient eels ascending, giving their bodies back to the awa.’ The timestamp, laid against a six-generation catch log, fixes the contamination window the mill cannot explain.",
    mediaMisreading:
      "Some disappearances are just appearances in another dimension. The eels chose my lens for their last teaching. Standing at the edge of the Sacred Awa in Aotearoa. 🇳🇿 #TheAscent #TunaHeke #Rotorua #EcologicalDetective #SacredAwa",
    theMoment:
      "She thinks the eels ascended. Tama Whitiora counted them. The river kept its own log; the iwi simply read it back.",
    status: "complete",
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
    location: "Accra, Ghana",
    industry: "Labor trafficking / gig economy exploitation / app-based predatory recruitment",
    coverStory:
      "'Sacred geometry of movement' / Seamless Life optimization / bodies becoming light",
    culprit:
      "Consolidated Logistics — running a predatory labor-trafficking ring disguised as a 'Seamless Life' productivity and work-placement app",
    role: "Private investigator (cover: profiling Seamless Life initiative)",
    localCenter:
      "Abena (kosekyeame / head porter, thirties, twelve years at Kantamanto, three years of bale data) and Kofi (investigative researcher, six weeks of sourcing, no international outlet will run it)",
    surfaceMystery:
      "Workers recruited through the Seamless Life app have been disappearing into a logistics network with no legal employment records. Consolidated Logistics calls it 'frictionless placement.' Oblivia calls it 'a sacred geometry of movement where bodies become light.'",
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
    role: "Private investigator (cover: profiling retreat founder)",
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
    title: "Oblivia Cracks the Case of the Digital Skills Pipeline",
    shortTitle: "The Pipeline",
    origin: "TGU",
    destination: "DKR",
    location: "Dakar, Senegal \u2014 HLM district and Plateau tech hub",
    industry: "AI / content moderation / impact-washed labor extraction",
    coverStory:
      "Digital skills pipeline / responsible AI workforce development / closing the global talent gap",
    culprit:
      "Aperture AI (San Francisco) / Soleil Digital Services SARL (Dakar subsidiary) / Meridian Impact Partners (Luxembourg) \u2014 content moderation at ~$2.40/hour classified as 'AI trainer' roles, workers exposed to graphic violence and CSAM with inadequate mental health support, NDAs preventing disclosure, World Bank digital skills grant fraudulently reclassifying the work",
    role: "Private investigator (cover: profiling Aperture's Africa expansion)",
    localCenter:
      "Fatou (former Aperture moderator, mid-thirties, runs informal peer support network; has the notebook) and Ibrahima (labor investigator, Le Quotidien, six weeks of sourcing; three international outlets declined the story)",
    surfaceMystery:
      "Aminata Diallo, 27, Soleil Digital Services content reviewer, found dead at the base of a footbridge in the HLM district fourteen days ago. Officially: a fall, at night. The night before, she sent Fatou a message that read: I have something. Come Sunday.",
    keyImage:
      "Oblivia completes the Aperture 'responsible AI' orientation \u2014 ninety minutes of slides about closing the global talent gap \u2014 while forty workers review flagged content behind unmarked doors three floors below in the same building. She is given a branded tote bag on the way out.",
    mediaMisreading:
      "The Future Is African: How One AI Company Is Building a Continent's Digital Workforce \u2014 and What It Means for the Global Economy",
    theMoment:
      "Fatou shows Oblivia not the internal memo but Aminata's handwritten notes about what the memo said. 'She didn't take it home. She knew they would check. She memorized it.'",
    status: "complete",
  },
  {
    slug: "fashion-tbd",
    flightNumber: "OBA-010",
    number: "10",
    group: "international",
    title: "Oblivia Cracks the Case of the Saffron Mask",
    shortTitle: "The Saffron Mask",
    origin: "DKR",
    destination: "KTM",
    location: "Kathmandu, Nepal",
    industry: "Cultural heritage theft / pharmaceutical crime / NGO fraud",
    coverStory:
      "'The Gilded Silence' — the Buddha chose to walk into the void; the comatose monk is a 'Guru of the Pause'",
    culprit:
      "The Global Heritage Trust — stole a 12th-century gilded Buddha to use as collateral for high-interest loans; employed a pharmaceutical neurotoxin to put the head monk into a coma",
    role: "Private investigator (cover: spiritual heritage witness / vibrational field researcher)",
    localCenter:
      "Head monk (pharmaceutical-induced coma — Oblivia treats him as a 'Guru of the Pause') / monastery staff and local Buddhist scholars",
    surfaceMystery:
      "A 12th-century gilded Buddha has vanished from its pedestal. The head monk who reported the theft is in an unexplained coma. The Global Heritage Trust's restoration team was on-site the week before.",
    keyImage:
      "Oblivia insists on a 'Vibrational Scan' of the empty pedestal; her Leica captures the microscopic diamond-wire saw marks — a tool unique to the Heritage Trust's restoration kit.",
    status: "complete",
  },
  {
    slug: "salt-crust-protocol",
    flightNumber: "OBA-011",
    number: "11",
    group: "international",
    title: "Oblivia Cracks the Case of the Salt-Crust Protocol",
    shortTitle: "The Salt-Crust Protocol",
    origin: "KTM",
    destination: "LPB",
    location: "Salar de Uyuni, Bolivia — high-altitude luxury glamping retreat",
    industry: "Water rights / lithium-brine extraction / environmental permit fraud",
    coverStory: "Crystalline transcendence / the salt flat as traumatized mirror / digital karma",
    culprit:
      "Neo-Flux Logistics (Netherlands) — Dutch-owned green-tech conglomerate using the wellness retreat as a regulatory front to bypass local environmental water-usage laws via illegal brine diversion, misclassified in permits as 'geothermal breath-work site management'",
    role: "Private investigator (cover: crystalline consciousness witness / grief cartographer)",
    localCenter:
      "Doña Carmen Mamani (Colchani irrigation cooperative chair) and Felipe Quispe (regional water authority hydro-engineer, twenty-two years, eight months of extraction data)",
    surfaceMystery:
      "The retreat's Chief Mindfulness Architect, known only as Zephyr, has vanished from a sealed geodesic dome. Left behind: a puddle of hyper-oxygenated water and a single, vibrating tuning fork.",
    keyImage:
      "Oblivia hangs her silk scarf on the master override lever. The illegal brine diversion shuts off. Rotterdam's servers alert Dutch authorities to a catastrophic pressure loss. The water council arrives with police. Zephyr is sitting on the ledger.",
    mediaMisreading:
      "The New Yorker: The Quiet Witness: How One Woman's Radical Presence Exposed the Dehydration of the Global South",
    theMoment:
      "They were looking for data, poor souls, while she was looking for the frequency of the disappearance.",
    status: "complete",
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
    industry: "Weapons testing / border surveillance / migrant exploitation",
    coverStory:
      "'Vibrational deterrence' / the border as a spiritual liminal filter / dignified non-lethal crisis response",
    culprit:
      "Border-Sec Tech — covertly tested a lethal 'Non-Lethal' sonic weapon on migrants at the border",
    role: "Private investigator (cover: humanitarian innovation analyst)",
    localCenter:
      "Dr. Lupe Reyes (Hidalgo County clinic, 74 documented impact cases) and Rosa Villanueva (border-aid coordinator with the FOIA'd DHS buffer-zone memo), alongside the families harmed \u2014 Ana Castillo, Roberto Esparza, eight-year-old Fernanda G\u00e1lvez",
    surfaceMystery:
      "Migrants at a crossing point are suffering unexplained hemorrhaging and neurological damage. Border-Sec Tech is on-site conducting what their contract calls 'acoustic deterrence trials.'",
    keyImage:
      "Oblivia finds the sonic emitter array beautiful. She describes it as \u2018a tuning fork for the soul\u2019s migration.\u2019 It is a prototype weapons system.",
    status: "complete",
  },
  {
    slug: "interior-iowa",
    flightNumber: "OBA-B",
    number: "B",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Interior",
    shortTitle: "The Interior",
    origin: "MFE",
    destination: "BTR",
    location: "Larkin, Iowa — privatized municipal water system",
    industry: "Private equity / water rights acquisition / community displacement",
    coverStory:
      "'State of Hydro-Stillness' / water as soul-restructuring medium / venture-backed community transformation",
    culprit:
      "Venture-Capital Spirits — purchased the entire town's water rights under a 'community wellness restructuring' initiative, leaving residents without legal access to their own water supply",
    role: "Private investigator (cover: wellness community researcher)",
    localCenter:
      "Carmen Vásquez (forensic auditor tracking the meter-fraud diversion valve) and Tommy Wren (neighbor), carrying the case of Glenn Haarstad, 78, who died after switching to jugged water he could afford",
    surfaceMystery:
      "An entire town's water rights have been acquired by Venture-Capital Spirits. The taps still run — for now. Oblivia believes the town has achieved a 'State of Hydro-Stillness.' The residents know they have been bought.",
    keyImage:
      "Oblivia holds a glass of the town's water up to the light. She calls it 'the liquid architecture of surrender.' A resident holds up a notice of rate increase.",
    status: "complete",
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
    industry:
      "Agricultural labor / pesticide poisoning / ethical sourcing rebrand / corporate cover-up",
    coverStory: "Ethical sourcing initiative / farm to table / regenerative agriculture",
    culprit:
      "Agro-Global Corp — applied unlisted, acutely toxic pesticides to fields with workers present; officially attributed the resulting illness and deaths to 'heat exhaustion'",
    role: "Private investigator (cover: embedded with ethical sourcing initiative)",
    localCenter: "Workers who have been here longer than the initiative has existed.",
    surfaceMystery:
      "Pickers are falling ill across multiple fields. The official explanation is heat exhaustion. The pattern is wrong for heat. Agro-Global's pesticide application logs have a three-week gap.",
    keyImage: "The grain bowl at Riftward. The heritage legume paste. It came from here.",
    mediaMisreading:
      "Vogue: 'The Witness in the Rows: How Oblivia Appropria Learned to Stop Observing and Start Participating in the Healing of the American Harvest.'",
    theMoment:
      "What actually happened is that she dialed three numbers and read a label aloud. It is the most useful thing she has ever done — and the only time she did a useful thing without first deciding what it meant.",
    status: "complete",
  },
  {
    slug: "gilded-conduit",
    flightNumber: "OBA-D",
    number: "D",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Gilded Conduit",
    shortTitle: "The Gilded Conduit",
    origin: "FAT",
    destination: "BIS",
    location: "The Dakota Plains / Standing Rock Corridor",
    industry:
      "Oil pipeline / state-sanctioned extraction / private security homicide / whistleblower suppression",
    coverStory:
      "'The Pulse of the Great Mother' / pipeline as earth meridian / 'Black Honey' somatic release of ancient carbon wisdom",
    culprit:
      "North-Star Midstream Corp, in collusion with the Department of Energy — suppressed a structural failure report beneath a tribal burial ground; deployed a Thermal-Vibration pulse to collapse a tunnel section, burying whistleblower engineer Elias alive; officially listed as 'AWOL'",
    role: "Private investigator (cover: earth-frequency researcher / sonic cartographer)",
    correspondent: "Alexandrei Harris",
    localCenter:
      "Tribal community living above the compromised burial ground; pipeline safety engineers who reviewed the suppressed report",
    surfaceMystery:
      "Indigenous engineer Elias has been listed as 'AWOL' after reporting a structural failure in the pipeline beneath a tribal burial ground. Crude oil is leaking into the groundwater. North-Star calls it a 'minor seismic anomaly.' Oblivia believes the earth is offering its 'Black Honey.'",
    keyImage:
      "Oblivia lowers a gold-plated hydrophone into a maintenance hatch she calls a 'Chakra Point.' The 96kHz recording — processed by Alexandrei — captures the rhythmic mechanical failure of a North-Star pressure valve and the muffled, rhythmic SOS signal Elias tapped on the pipe before his oxygen failed.",
    theMoment:
      '"Infrastructure is just the skeleton of our collective desire, Alexandrei. If the oil is leaking, it\'s only because the Earth has something it can no longer contain. I am not here to find the body in the pipe; I am here to find the music in the pressure."',
    status: "complete",
  },
  {
    slug: "photonic-purge",
    flightNumber: "OBA-E",
    number: "E",
    group: "domestic",
    title: "Oblivia Cracks the Case of the Photonic Purge",
    shortTitle: "The Photonic Purge",
    origin: "BIS",
    destination: "OGG",
    location: "Lahaina, Maui, Hawaii — the Aegis-Oasis tech-commune",
    industry:
      "Directed-energy weapons / indigenous land dispossession / tech-commune land grab",
    coverStory:
      "'Photonic fire' / Madam Pele's digital avatar / 'decolonizing energy' / subterranean portal for ancestral alignment",
    culprit:
      "Apex-Stratum Logistics (directed-energy weapons contractor) — operating under shell company 'Kupuna-Forward Eco-Ventures' in tandem with a venture-capital land trust",
    role: "Private investigator (cover: eco-spiritual commune researcher / photonic resonance witness)",
    localCenter:
      "Kai (site foreman, six-generation farming family), local indigenous tech-activists, Hawaiian sovereignty activists, and utility whistleblowers",
    surfaceMystery:
      "A historic cultural center — the last native-owned land on a coveted coastal block — is incinerated in what witnesses describe as 'a blue pillar of light descending from a clear sky.' The kupuna who refused every buyout has vanished, leaving a perfectly circular patch of vitrified glass where his heirloom taro patch stood.",
    keyImage:
      "Oblivia's $4,000 Italian silk cape snags a cooling fan rack inside the restricted drone-hangar. As she yanks it free, she disconnects the satellite-linked C2 server. The encrypted target logs dump into a public weather-monitoring server.",
    mediaMisreading:
      "Prestige Journal: 'The Lightning Catcher: How Oblivia Appropria Channeled the Wrath of Maui to Protect the Soil.'",
    status: "complete",
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
    to: "interior-iowa",
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
  { from: "the-rosewood", to: "tech-tbd", label: "Meridian Impact Partners" },
  { from: "fields-central-valley", to: "gilded-conduit", label: "the land the pipeline crosses" },
  { from: "salt-crust-protocol", to: "interior-iowa", label: "the water the wellness sold" },
  { from: "sacred-water", to: "salt-crust-protocol", label: "lithium, second movement" },
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
