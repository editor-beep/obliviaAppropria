import type { StoryDocument } from "@/content/types";

export const narrative: StoryDocument = {
  sections: [
    {
      id: "arrival",
      blocks: [
        {
          type: "paragraph",
          text: "The flamingos are gone and the lodge has built a meditation around the absence. Oblivia arrives on a Tuesday, in linen, with three cameras and one question she has not yet learned to ask.",
        },
        {
          type: "paragraph",
          text: "Akinyi has the documents. Omondi has the lake. Joseph has the road and the patience to drive it slowly enough that the correspondent in the back seat can take the photograph she will, later, not understand she has taken.",
        },
      ],
    },
    {
      id: "the-waiver",
      title: "The waiver",
      blocks: [
        {
          type: "paragraph",
          text: "At golden hour the salt pans flare. The waiver — taped to the inside of the operations shed — is legible for forty seconds at a stretch. Oblivia frames it for the negative space. The number is in the negative space.",
        },
      ],
    },
    {
      id: "what-travels",
      title: "What travels",
      blocks: [
        {
          type: "paragraph",
          text: "The piece publishes on a Sunday. By Monday it is the most-shared essay of the week. By Wednesday Akinyi's filing has a new exhibit and no one yet knows where it came from.",
        },
      ],
    },
  ],
  scraps: [
    {
      label: "WAIVER NO.",
      body: "MSV-EA / 2024 / 0173-RZ\nIssued: Zurich, 14 Mar 2024\nReviewing authority: redacted",
    },
  ],
};
