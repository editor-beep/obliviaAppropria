import type { Entity } from "@/content/types";

/**
 * Canonical registry of recurring entities across the collection.
 * Stories reference these by id. Used to generate thematic overlays,
 * conspiracy maps, recurring-entity indexes, and future investigation modes.
 */
export const entities: Entity[] = [
  {
    id: "meridian-saline",
    name: "Meridian Saline Ventures (East Africa) Ltd.",
    category: "corporation",
    description:
      "Luxembourg-registered holding company with a Zurich impact fund parent. Operates saline mineral extraction in the East African Rift Valley under a regenerative stewardship cover story.",
    stories: ["rift-silence"],
  },
  {
    id: "auric-subsurface",
    name: "Auric Subsurface Solutions Ltd.",
    category: "corporation",
    description:
      "Calgary-based hydraulic fracturing company operating in Guatemala as Soluciones del Subsuelo Aurora S.A.",
    stories: ["mayan-fury"],
  },
  {
    id: "soluciones-aurora",
    name: "Soluciones del Subsuelo Aurora S.A.",
    category: "corporation",
    description:
      "Guatemalan subsidiary of Auric Subsurface Solutions. Holds concession AURORA-GT-2021-0044.",
    stories: ["mayan-fury"],
  },
  {
    id: "narrative-resource-group",
    name: "Narrative Resource Group LLC",
    category: "corporation",
    description:
      "Belize-registered consultancy. Monthly retainer: USD 4,200. Deliverable: 'cultural framing support.' Hired to maintain cosmological explanations for subsidence in wellness media.",
    stories: ["mayan-fury"],
  },
  {
    id: "loopwear",
    name: "Loopwear",
    category: "corporation",
    description:
      "NYC-based circular-economy apparel startup ($17M Series A). Cross-owned with GiveForward through a shared impact fund. Ships C-grade bales to Kantamanto Market as artisan-grade.",
    stories: ["the-loop"],
  },
  {
    id: "giveforward",
    name: "GiveForward",
    category: "ngo",
    description:
      "Columbus-based sorting nonprofit. Cross-owned with Loopwear. Internal memos confirm C- and D-grade offshore shipments approved by Loopwear operations.",
    stories: ["the-loop"],
  },
  {
    id: "palantir",
    name: "Palantir Technologies",
    category: "corporation",
    description:
      "Data analytics company contracting with humanitarian NGOs. Its case-management platform is a deportation routing system described by Oblivia as 'a map of human longing.'",
    stories: ["threshold-border"],
  },
  {
    id: "luminance",
    name: "Luminance",
    category: "initiative",
    description:
      "The magazine / platform for which Oblivia Appropria works as a regenerative travel correspondent. Publishes her dispatches across the collection.",
    stories: [
      "rift-silence",
      "certified-forest",
      "poisoned-healing",
      "the-loop",
      "the-rosewood",
      "threshold-border",
      "interior-angola",
    ],
  },
  {
    id: "montgomery-appropria",
    name: "Montgomery Reginald Appropria",
    category: "person",
    description:
      "Oblivia's uncle. Paid USD 4,200/month by Narrative Resource Group to sustain cosmological framing in wellness media. Falls literally into the subsidence he helped conceal.",
    stories: ["mayan-fury"],
  },
  {
    id: "ixchel",
    name: "Ixchel",
    category: "person",
    description:
      "Community geologist, 31, Quiché department. Monitors seismic and subsidence data. Manages the pace of Oblivia's understanding through her brother Domingo.",
    stories: ["mayan-fury"],
  },
  {
    id: "akinyi",
    name: "Akinyi",
    category: "person",
    description:
      "Environmental lawyer at the Rift Valley. Has the documents. Oblivia's photograph unknowingly adds a new exhibit to her filing.",
    stories: ["rift-silence"],
  },
  {
    id: "resonance-root",
    name: "Resonance & Root",
    category: "corporation",
    description:
      "Austin, TX music wellness company operating Casa del Ritmo retreat, Copán region, Honduras. Partnership with Harwood & Fox provided cultural cover for fraudulent CITES rosewood sourcing documentation.",
    stories: ["the-rosewood"],
  },
  {
    id: "harwood-fox",
    name: "Harwood & Fox Acoustic Instruments",
    category: "corporation",
    description:
      "Portland, OR premium guitar brand. Sourced Honduran rosewood fretboards via the Comunidad Resonante de Copán, a shell organization whose registered agent was the Harwood & Fox law firm.",
    stories: ["the-rosewood"],
  },
  {
    id: "comunidad-resonante-copan",
    name: "Comunidad Resonante de Copán",
    category: "ngo",
    description:
      "Incorporated 11 months before its first CITES export permit. Four members, two Austin addresses. Certifying signatory: a valley citrus operator with no forestry background. Registered agent: Harwood & Fox Legal Partners LLC.",
    stories: ["the-rosewood"],
  },
];

export function entityById(id: string): Entity | undefined {
  return entities.find((e) => e.id === id);
}

export function entitiesForStory(slug: string): Entity[] {
  return entities.filter((e) => e.stories?.includes(slug));
}
