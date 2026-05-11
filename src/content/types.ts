export type StoryStatus = "complete" | "concept" | "tbd";

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "document"; label: string; body: string }
  | { type: "casefile"; label: string; body: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "divider" };

export type StorySection = {
  id: string;
  title?: string;
  blocks: StoryBlock[];
};

export type DocumentScrap = {
  label: string;
  body: string;
};

export type StoryMeta = {
  slug: string;
  flightNumber: string;
  number: string;
  group: "international" | "domestic";
  title: string;
  shortTitle: string;
  origin: string;
  destination: string;
  location: string;
  industry: string;
  coverStory: string;
  culprit: string;
  role: string;
  correspondent?: string;
  localCenter: string;
  surfaceMystery: string;
  keyImage?: string;
  mediaMisreading?: string;
  theMoment?: string;
  status: StoryStatus;
};

export type StoryDocument = {
  sections: StorySection[];
  scraps?: DocumentScrap[];
};

/** Full story — metadata merged with its narrative body. Used on the story page. */
export type Story = StoryMeta & StoryDocument;

export type Connection = {
  from: string;
  to: string;
  label: string;
};

export type EntityCategory = "corporation" | "person" | "initiative" | "ngo" | "fund";

export type Entity = {
  id: string;
  name: string;
  category: EntityCategory;
  description?: string;
  /** Slugs of stories that reference this entity */
  stories?: string[];
};

export type ReadingState = {
  /** Keys are "slug#section-id" */
  completedSections: string[];
  /** Keys are "slug#scrap-label" */
  discoveredScraps: string[];
  notesUnlocked: string[];
};
