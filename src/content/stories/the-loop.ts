import type { StoryDocument } from "@/content/types";

export const narrative: StoryDocument = {
  sections: [
    {
      id: "title",
      title: "The Loop",
      blocks: [
        {
          type: "heading",
          text: "A Detective Oblivia Appropria Mystery",
        },
        {
          type: "paragraph",
          text: "Published in Luminance as: “Worn Again: How West Africa's Most Extraordinary Market Is Reinventing What We Owe Each Other.” Loopwear's impact report calls Kantamanto “a living laboratory of circular abundance.” Abena's unsent note reads: “340 kg unsellable this week. Burning Thursday.”",
        },
      ],
    },
    {
      id: "location",
      title: "Location",
      blocks: [
        {
          type: "paragraph",
          text: "Kantamanto Market in Accra receives roughly 15 million garments per week from sorting facilities in the US, UK, Canada, and EU, and employs about 30,000 workers across traders, porters, sorters, tailors, and adjacent trades.",
        },
        {
          type: "paragraph",
          text: "When burning is full or rain makes it impractical, unsellable garments move toward the Korle Lagoon, one of West Africa's most polluted water bodies, where fast-fashion labels tied to circularity campaigns remain visible in the waste stream.",
        },
      ],
    },
    {
      id: "surface-mystery",
      title: "Surface mystery",
      blocks: [
        {
          type: "paragraph",
          text: "A GiveForward container from Columbus arrived labeled “premium curated secondhand apparel, artisan-grade, hand-selected for quality.” Traders found it approximately 23% sellable.",
        },
        {
          type: "paragraph",
          text: "Inside one bale was a mistakenly packed internal memo documenting grading criteria and pre-shipment unsellable percentages. Cover note: “Columbus is sending the C-grade offshore again. Loopwear signed off.” Abena photographed it and sent it to Kofi.",
        },
      ],
    },
    {
      id: "what-locals-know",
      title: "What locals already know",
      blocks: [
        {
          type: "paragraph",
          text: "Loopwear's market partnership is understood locally as performance: periodic founder visits, polished imagery, and a resilience fund that produced a water station and an imported mural, but little structural change.",
        },
        {
          type: "paragraph",
          text: "Abena tracks bale quality by city and season and has logged three years of content data shared with a University of Ghana researcher. Kofi has memo evidence, filings, and Columbus sources, but has struggled to place the story internationally.",
        },
      ],
    },
    {
      id: "what-oblivia-thinks",
      title: "What Oblivia thinks is happening",
      blocks: [
        {
          type: "paragraph",
          text: "Oblivia arrives with a thesis about circular renaissance and profiles pre-selected by Loopwear. Day two, she gets lost in Kantamanto and meets Abena between bale stacks.",
        },
        {
          type: "quote",
          text: "Sit down.",
          attribution: "Abena",
        },
      ],
    },
    {
      id: "actual-culprit",
      title: "Actual culprit",
      blocks: [
        {
          type: "paragraph",
          text: "Loopwear and GiveForward, linked through shared impact capital, run a two-layer system: authentic upcycling aesthetics in public, offshore dumping economics in logistics. C-grade bales move to Kantamanto under premium language while disposal costs are externalized locally.",
        },
        {
          type: "paragraph",
          text: "Madison is not framed as cartoon villainy; she built a model that depends on not asking a fatal operational question. When confronted, her stillness becomes the story's most honest beat.",
        },
      ],
    },
    {
      id: "accidental-exposure",
      title: "Accidental exposure",
      blocks: [
        {
          type: "paragraph",
          text: "Abena shows Oblivia the memo and the data, then takes her to the dead pile. Oblivia takes one flat documentary photograph and posts: “I came to write about what gets remade. I should also write about what doesn't. More soon.”",
        },
        {
          type: "paragraph",
          text: "Kofi sees the post, contacts her, and they combine visual evidence with sourcing depth. Together, the reporting becomes exportable.",
        },
      ],
    },
    {
      id: "final-media-misreading",
      title: "Final media misreading",
      blocks: [
        {
          type: "paragraph",
          text: "Luminance runs two pieces: first the polished profile already in layout, then the corrective investigation. Kofi's piece lands with additional ownership and filings detail and drives institutional response.",
        },
        {
          type: "paragraph",
          text: "Loopwear posts a transparency statement, then silence, then sunset imagery. The London-painted mural is eventually covered and replaced by Gloria's accurate local mural, photographed by Abena and published by Kofi without caption.",
        },
      ],
    },
    {
      id: "running-gags",
      title: "Best recurring jokes",
      blocks: [
        {
          type: "paragraph",
          text: "The manifest phrase repeats across documents and statements while Abena's spreadsheet never uses it. Madison has made four Accra trips and mastered the Volta House rooftop menu but not Kantamanto's core. Kofi's six-week call list includes Luminance as an omission that needs no explanation.",
        },
        {
          type: "paragraph",
          text: "Oblivia files the wrong piece first; the better one arrives too late to prevent marketing reuse. The mural motif tracks who gets to represent whom, and getting lost is the method that breaks the script.",
        },
      ],
    },
    {
      id: "sample-opening",
      title: "Sample opening paragraph",
      blocks: [
        {
          type: "paragraph",
          text: "The bale arrived from Columbus on a Tuesday, ordinary except as logistics: 490 kilograms, twenty-two days in transit, one stale phrase on the manifest, one better label glimpsed through wrapping, one expensive gamble. Abena logged each item beside cooling rice and reached the same split verdict as always — instinct right, instinct wrong — as sellable percentage settled into the low twenties and disposal cost marched toward Thursday. She heard the visitor before she saw her: hesitation at junctions, camera adjustments, notebook friction, the acoustics of someone moving through a market without knowing how to move through it. “It's like opening a time capsule,” the visitor said. Abena looked at 340 kilograms of unsellable polyester and answered: “Sit down.”",
        },
      ],
    },
  ],
  scraps: [
    {
      label: "INTERNAL MEMO — GIVEFORWARD",
      body: "Container: Columbus to Kantamanto\nInternal grade: C-grade offshore allocation confirmed\nCover note: “Columbus is sending the C-grade offshore again. Loopwear signed off.”",
    },
    {
      label: "UNSENT NOTE — ABENA",
      body: "340 kg unsellable this week.\nBurning Thursday.",
    },
    {
      label: "MANIFEST LANGUAGE",
      body: "“premium curated secondhand apparel, artisan-grade, hand-selected for quality.”",
    },
  ],
};
