import type { StoryDocument } from "@/content/types";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { DocumentScrap } from "@/components/DocumentScrap";

interface StoryRendererProps {
  doc: StoryDocument;
}

/**
 * Renders a StoryDocument as a composable sequence of narrative sections.
 * Each section gets a stable id anchor for deep-linking (/stories/:slug#section-id).
 * Legacy scraps are placed after their corresponding section by index.
 */
export function StoryRenderer({ doc }: StoryRendererProps) {
  return (
    <div className="story-prose mx-auto w-full max-w-2xl">
      {doc.sections.map((section, i) => (
        <section key={section.id} id={section.id}>
          {section.title && <h2>{section.title}</h2>}
          {section.blocks.map((block, j) => (
            <NarrativeBlock key={`${section.id}-${j}`} block={block} />
          ))}
          {doc.scraps?.[i] && (
            <DocumentScrap scrap={doc.scraps[i]} rotate={i % 2 === 0 ? -1.4 : 1.6} />
          )}
        </section>
      ))}
    </div>
  );
}
