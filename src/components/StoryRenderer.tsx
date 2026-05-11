import type { StoryDocument } from "@/content/types";
import { useCallback } from "react";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { DocumentScrap } from "@/components/DocumentScrap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StoryRendererProps {
  doc: StoryDocument;
}

/**
 * Renders a StoryDocument as a composable sequence of narrative sections.
 * Each section gets a stable id anchor for deep-linking (/stories/:slug#section-id).
 * Legacy scraps are placed after their corresponding section by index.
 */
export function StoryRenderer({ doc }: StoryRendererProps) {
  const chapterGroups = buildChapterGroups(doc);
  const handleChapterChange = useCallback((chapterId: string) => {
    if (!chapterId) return;

    requestAnimationFrame(() => {
      const trigger = document.getElementById(`chapter-trigger-${chapterId}`);
      if (!trigger) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      trigger.focus({ preventScroll: true });
      trigger.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <div className="story-prose mx-auto w-full max-w-2xl">
      {chapterGroups.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          defaultValue={chapterGroups[0].id}
          onValueChange={handleChapterChange}
          className="w-full border-y border-border/40"
        >
          {chapterGroups.map((group) => (
            <AccordionItem key={group.id} value={group.id}>
              <AccordionTrigger
                id={`chapter-trigger-${group.id}`}
                className="font-display text-xl hover:no-underline"
              >
                {group.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-8">
                {group.sections.map(({ section, index }, sectionIndex) =>
                  renderSection(doc, section, index, sectionIndex === 0),
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        doc.sections.map((section, i) => renderSection(doc, section, i))
      )}
    </div>
  );
}

function renderSection(
  doc: StoryDocument,
  section: StoryDocument["sections"][number],
  index: number,
  suppressTitle = false,
) {
  return (
    <section key={section.id} id={section.id}>
      {section.title && !suppressTitle && <h2>{section.title}</h2>}
      {section.blocks.map((block, j) => (
        <NarrativeBlock key={`${section.id}-${j}`} block={block} />
      ))}
      {doc.scraps?.[index] && (
        <DocumentScrap scrap={doc.scraps[index]} rotate={index % 2 === 0 ? -1.4 : 1.6} />
      )}
    </section>
  );
}

function buildChapterGroups(doc: StoryDocument) {
  const chapterStartPattern = /^chapter\b/i;
  const hasChapterTitles = doc.sections.some((section) =>
    chapterStartPattern.test(section.title?.trim() ?? ""),
  );
  if (!hasChapterTitles) return [];

  const groups: Array<{
    id: string;
    title: string;
    sections: Array<{ section: StoryDocument["sections"][number]; index: number }>;
  }> = [];
  let currentGroup:
    | {
        id: string;
        title: string;
        sections: Array<{ section: StoryDocument["sections"][number]; index: number }>;
      }
    | undefined;

  doc.sections.forEach((section, index) => {
    const sectionTitle = section.title?.trim() ?? "";
    const isChapterStart = chapterStartPattern.test(sectionTitle);

    if (isChapterStart) {
      currentGroup = { id: section.id, title: sectionTitle, sections: [] };
      groups.push(currentGroup);
    } else if (!currentGroup) {
      currentGroup = {
        id: section.id,
        title: sectionTitle || "Prologue",
        sections: [],
      };
      groups.push(currentGroup);
    }

    currentGroup.sections.push({ section, index });
  });

  return groups;
}
