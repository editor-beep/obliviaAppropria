// Re-export all types and data from the new modular structure.
// Existing imports from "@/content/stories" continue to work unchanged.
export type {
  StoryStatus,
  StoryBlock,
  StorySection,
  DocumentScrap,
  StoryMeta,
  StoryDocument,
  Story,
  Connection,
  EntityCategory,
  Entity,
  ReadingState,
} from "@/content/types";

export {
  storyMetas as stories,
  connections,
  storyMetaBySlug as storyBySlug,
  nextStory,
  prevStory,
} from "@/content/stories/index";
