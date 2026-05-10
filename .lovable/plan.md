
# Detective Oblivia Appropria — Privileged Eye

A reading-first website for the collection. Each story has a full reading page. A persistent "Boeing frame" connects them: the act of moving between stories *is* a flight, complete with a safety card Oblivia never reads, and the fields below she never sees.

## Design direction

- **Palette (Midnight Indigo):** `#0a0a1a` background, `#141432` cards/seatback, `#1e1e5a` mid-air horizon, `#4f46e5` signal/electric accent, plus `#f5f3ee` paper for in-flight document scraps.
- **Type:** Libre Baskerville for titles, pull quotes, story bodies. IBM Plex Sans for nav, captions, metadata, and "instrument panel" UI. IBM Plex Mono for document numbers, coordinates, timestamps.
- **Mood:** Cabin-at-night. Long-form, generous line-height, narrow measure (~64ch). Subtle film grain. A blinking indigo cursor on the masthead like an FMS waypoint.

## Site map (TanStack routes)

```
/                       Cabin home — masthead, current "flight" status, story index as a flight manifest
/about                  About the collection + author note + system thesis
/stories                Manifest: all 12 stories as boarding passes, grouped International / American Skeleton
/stories/$slug          Reading page for one story
/system-map             Lightweight cross-reference: how stories share culprits, supply chains, characters
/safety-card            The safety card Oblivia never reads — a real interactive card, dark joke included
/subscribe              Substack CTA + email capture
```

Slugs: `rift-silence`, `sacred-water`, `certified-forest`, `ocean-witness`, `mayan-fury`, `poisoned-healing`, `the-loop`, `music-tbd`, `tech-tbd`, `fashion-tbd`, `threshold-border`, `interior-angola`, `fields-central-valley`.

## The Boeing frame (signature interaction)

A persistent, slim **CabinBar** docks at the top of every page:

```
[ FLT OBA-006 ]  RIFT VALLEY  ──✈──────────  KANTAMANTO   ALT 35,000  ·  SEAT 2A
```

- Shows previous story → next story as origin → destination, with a small plane gliding along the route as you scroll the current story (scroll-linked via Framer Motion).
- Click the bar to open the **Manifest drawer** — every story listed as a boarding pass; current one highlighted.
- Between stories (on `/stories` and on story-end), a full-screen **transit interstitial** plays: dim cabin, window oval, fields drifting below, the safety card icon pulsing. "Continue reading" advances to the next story. This is the frame paying off.
- The **safety card** (link in the CabinBar and footer) is a 4-panel interactive card. Each panel is a quietly damning instruction ("In the event of accidental exposure, do not photograph the waiver number"). It is the collection's thesis disguised as cabin furniture.

## Page designs

**Home (`/`)**
- Hero: title set in Libre Baskerville, oversized; subtitle in Plex; a slow indigo horizon gradient with a tiny plane crossing once on load.
- "Now boarding" — three featured stories as boarding-pass cards (status badges: COMPLETE / CONCEPT / TBD).
- "The collection in one sentence" pull quote: *"The book describes a single system from twelve different angles."*
- Manifest preview → link to `/stories`.

**Stories index (`/stories`)**
- Two sections: **International Departures** (1–8) and **Domestic Connections** (A–C).
- Each story = boarding pass card: flight number, route (e.g. `JFK → BKO`), industry tag, cover-story tag, status pill, one-line surface mystery. Hover lifts the card; click opens reading page.

**Story reading page (`/stories/$slug`)**
- Header strip: flight number, location, industry, cover story, Oblivia's role, status — laid out like a ticket stub in Plex Mono.
- Long-form body in Libre Baskerville, narrow column. Drop cap on first paragraph.
- **Marginalia rail** (desktop): small Plex Sans notes pulled from the doc — "Local center", "Key image", "Media misreading", "The moment". On mobile these collapse inline.
- **Document scraps**: occasional inline cards on cream paper (waiver numbers, tribunal claim numbers, internal memos) in Plex Mono, slightly rotated, with a paperclip shadow.
- Scroll-linked plane progresses across the CabinBar route.
- Footer of page: "Next flight →" card with the transit interstitial.

For Season-One stories with full concept text (Mayan Fury, Poisoned Healing, The Loop, Rift Silence) the reading page renders the rich concept doc as structured prose. For TBD stories it shows a "Boarding soon" state with the concept skeleton and a subscribe CTA.

**About (`/about`)**
- The thesis. The frame device explained (lightly — the reader should still discover it). Author note. Substack link.

**System map (`/system-map`)**
- Static SVG/HTML diagram, no heavy graph lib. Stories as nodes positioned around a central "one system" hub. Edges labeled with the shared thread (e.g. *same impact fund*, *same conglomerate*, *labor → surveillance → carceral*).
- Clicking a node routes to that story.
- Header note: "Oblivia travels the surface. The reader assembles the underneath."

**Safety card (`/safety-card`)**
- Four flippable panels, each a single instruction in dry pictogram + Plex caption.
- Last panel: "Below you, the fields." A still illustration of fields seen from above. No CTA.

**Subscribe (`/subscribe`)**
- One-screen page, Substack embed or external link, plus a brief pitch in Libre Baskerville.

## Content sourcing

All story metadata and concept text from the working document goes into a single typed file `src/content/stories.ts` exporting an array of `Story` objects (slug, flightNumber, route, location, industry, coverStory, culprit, role, localCenter, surfaceMystery, keyImage, mediaMisreading, status, body sections). Reading pages and the manifest both consume this. This keeps copy editable in one place and avoids hard-coding inside components.

## Components to build

- `CabinBar` (persistent header, scroll-linked plane)
- `ManifestDrawer`
- `BoardingPassCard`
- `TransitInterstitial`
- `StoryHeaderStrip`
- `MarginaliaRail`
- `DocumentScrap`
- `SafetyCard`
- `SystemMap`
- `Footer` (gate info, Substack link, safety card link)

Tokens added to `src/styles.css`: cabin background, horizon gradient, signal indigo, paper cream, document-scrap shadow, grain overlay. Fonts loaded via Google Fonts in `__root.tsx` head.

## Out of scope (v1)

- No CMS, no auth, no comments — content lives in the codebase.
- No audio/video (can add later for a Music story).
- No Substack API integration — link out only.
- TBD stories ship as "Boarding soon" placeholders with the concept skeleton; we do not invent missing plot.

## Build order

1. Tokens + fonts + global cabin shell (`__root` updates, CabinBar, Footer).
2. `stories.ts` content file from the working doc.
3. Home + Stories manifest + Story reading page (the reading hub core).
4. TransitInterstitial + scroll-linked plane.
5. About, System map, Safety card, Subscribe.
6. Polish: grain, motion timings, mobile layout for marginalia.
