import type { StoryDocument } from "@/content/types";

export const narrative: StoryDocument = {
  sections: [
    {
      id: "concealment",
      blocks: [
        {
          type: "paragraph",
          text: "Monty has been paid $4,200 a month through Narrative Resource Group LLC to keep the cosmological explanation for subsidence alive in wellness media. He has done it well. He has done it for years. He has fallen, in the literal sense, into the damage he helped conceal.",
        },
        {
          type: "paragraph",
          text: "Ixchel can see his signal on her monitor. The community decides — collectively, with the kind of patience that does not photograph well — not to tell Oblivia yet. Domingo manages the pace of her understanding on Ixchel's instructions.",
        },
      ],
    },
    {
      id: "accidental-exposure",
      title: "Accidental exposure",
      blocks: [
        {
          type: "paragraph",
          text: "Oblivia photographs Ixchel's monitoring data and the concession documents with her 35mm. She posts everything within four hours of Monty's rescue, despite his explicit request not to. The post is the best-performing thing she has ever written. The data is correct. The framing is wrong in a way she will not understand for another two stories.",
        },
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
      body: "Narrative Resource Group LLC (Belize)\nMonthly retainer: USD 4,200\nDeliverable: 'cultural framing support'",
    },
  ],
};
