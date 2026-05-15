import type { StoryBlock } from "@/content/types";
import { DocumentScrap } from "@/components/DocumentScrap";

export function NarrativeBlock({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;

    case "heading":
      return <h2>{block.text}</h2>;

    case "quote":
      return (
        <blockquote>
          <p>{block.text}</p>
          {block.attribution && <cite>{block.attribution}</cite>}
        </blockquote>
      );

    case "document":
    case "casefile": {
      const { label, body } = block;
      return <DocumentScrap scrap={{ label, body }} />;
    }

    case "image":
      return (
        <figure>
          <img src={block.src} alt={block.caption ?? ""} />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "divider":
      return <hr />;

    default:
      return null;
  }
}
