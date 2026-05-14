import { useEffect, useRef } from "react";
import type { StoryDocument } from "@/content/types";
import { NarrativeBlock } from "@/components/NarrativeBlock";
import { DocumentScrap } from "@/components/DocumentScrap";
import { useReadingState } from "@/hooks/use-reading-state";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StoryRendererProps {
  doc: StoryDocument;
  slug: string;
}

/**
 * Renders a StoryDocument as a composable sequence of narrative sections.
 * Each section gets a stable id anchor for deep-linking (/stories/:slug#section-id).
 * Legacy scraps are placed after their corresponding section by index.
 */
export function StoryRenderer({ doc, slug }: StoryRendererProps) {
  const chapterGroups = buildChapterGroups(doc);
  const { markSectionComplete, discoverScrap } = useReadingState();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            markSectionComplete(slug, entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );
    container.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug, markSectionComplete]);

  return (
    <div ref={containerRef} className="story-prose mx-auto w-full max-w-2xl">
      {chapterGroups.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          defaultValue={chapterGroups[0].id}
          className="w-full border-y border-border/40"
        >
          {chapterGroups.map((group) => (
            <AccordionItem key={group.id} value={group.id}>
              <AccordionTrigger className="font-display text-xl hover:no-underline">
                {group.title}
              </AccordionTrigger>
              <AccordionContent className="space-y-8">
                {group.sections.map(({ section, index }, sectionIndex) =>
                  renderSection(doc, section, index, sectionIndex === 0, slug, discoverScrap),
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        doc.sections.map((section, i) => renderSection(doc, section, i, false, slug, discoverScrap))
      )}
    </div>
  );
}

function renderSection(
  doc: StoryDocument,
  section: StoryDocument["sections"][number],
  index: number,
  suppressTitle = false,
  slug = "",
  discoverScrap?: (slug: string, label: string) => void,
) {
  const scrap = doc.scraps?.[index];
  return (
    <section key={section.id} id={section.id}>
      {section.title && !suppressTitle && <h2>{section.title}</h2>}
      {section.blocks.map((block, j) => (
        <NarrativeBlock key={`${section.id}-${j}`} block={block} />
      ))}
      {scrap && (
        <ScrapWithDiscovery
          scrap={scrap}
          rotate={index % 2 === 0 ? -1.4 : 1.6}
          slug={slug}
          onDiscover={discoverScrap}
        />
      )}
    </section>
  );
}

function ScrapWithDiscovery({
  scrap,
  rotate,
  slug,
  onDiscover,
}: {
  scrap: NonNullable<StoryDocument["scraps"]>[number];
  rotate: number;
  slug: string;
  onDiscover?: (slug: string, label: string) => void;
}) {
  useEffect(() => {
    onDiscover?.(slug, scrap.label);
  }, [slug, scrap.label, onDiscover]);
  return <DocumentScrap scrap={scrap} rotate={rotate} />;
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
