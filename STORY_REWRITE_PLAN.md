# Story Rewrite Plan — Originality & Satire

*Action plan derived from `STORY_ANALYSIS.md`. Covers what has already been done and the
concrete rewrite direction for the less-original stories and the two stories that read as
"not at all satirical."*

---

## Context

The originality pass in `STORY_ANALYSIS.md` found that the collection's quality is high and
consistent, but a handful of stories lean hard on the **house formula** (corp crime behind
wellness branding → "accidental" whistleblower death → Oblivia obliviously surfaces the evidence
→ a competent local woman weaponizes it → A. Harris casefile + $95-souvenir gag +
`CASE CLOSED (SUBJECTIVE)/(MATERIAL)`), and two stories had switched the satirical engine off
entirely. The goal of this plan is to **increase inter-story variety** (without diluting the
shared world) and to **restore satire** to the two earnest outliers — while protecting the rule
that the satire targets Oblivia and the perpetrators, never the victims.

## Already done (committed with this plan)
- **Deleted the near-duplicate:** `src/content/stories/frequency-falling.ts` (Sedona) — the
  redundant half of the EM-meter twin pair (it shared `threshold-border`'s reveal beat-for-beat:
  vortex EM meter livestreams an infra/seismic signal → expert-in-audience IDs it → geotagged
  permit violation → "fall" victim). It had **no** `connections` or `entities.ts` references, so
  removal was clean. The `import.meta.glob` loader in `src/routes/stories.$slug.tsx` drops it
  automatically.
- **Renumbered** `photonic-purge` OBA-F → OBA-E so the domestic manifest stays contiguous
  (A–E). Updated `src/content/stories/index.ts` and `STORY_OUTLINE.md` to match.
- Result: **16 stories**, no dangling references.

---

## House DNA every rewrite must preserve

Do not "fix" the formula away — these elements are the brand and must survive every rewrite:
- The **`StoryDocument` block structure** (`paragraph` / `heading` / `quote` / `document` /
  `casefile` / `divider`) from `src/content/types.ts`, exported as `const narrative`.
- The **engagement `document`** (the euphemistic retainer — "$50,000," "atmospheric/spiritual in
  nature… no legally discoverable findings").
- The closing **`casefile` "Field Notes, A. Harris — Final Disposition"**, including the running
  **$95 airport-souvenir gag** and the final **`CASE CLOSED (SUBJECTIVE) / … (MATERIAL)`** line.
- A **competent local protagonist** who does the real work — but vary the archetype (see below).
- Keep the metadata in `src/content/stories/index.ts` (`storyMetas`) and the slug **in sync**
  with any narrative change; if a culprit/locale changes, update `surfaceMystery`, `culprit`,
  `keyImage`, `mediaMisreading`, etc. Keep the `connections` graph valid.

## The reveal-mechanism budget (the core originality lever)

Most redundancy is in *how Oblivia surfaces the evidence*. The existing families are:
1. **Metadata/geotag** of a livestream or photo (overused: Borneo, Guatemala, Honduras, Iowa,
   Texas, Bolivia, Hawai'i).
2. **Body/fabric as chemical test-strip** + remote expert diagnoses on social media
   (Kenya, South Africa, **New Zealand** — the redundant third).
3. **Hidden physical document/message** (Ghana jacket, Nepal drive, Standing Rock SOS).
4. **Oblivia directly acts / becomes the instrument** (California 911 call, Bolivia accidental
   shut-off) — the rarest and most original; expand its share.

**Rule of thumb for rewrites:** move a redundant story *out* of family (1)/(2) into a fresh
sub-variant of (3)/(4), or invent a genuinely new mechanism.

---

# Workstream A — Originality rewrites

Priority order. Each entry = problem → keep → change.

### A1 (highest) · Poisoned Healing — `poisoned-healing.ts` (NZ)
- **Problem:** The **third** "substance stains the body on camera → a chemist tweets the
  diagnosis" story. Mechanically the most redundant in the set.
- **Keep:** Rotorua geothermal locale, the indigo-6/pulp-mill crime, kaitiaki **Tama Whitiora**,
  the Ministry-of-Tourism dispensation corruption, Finnian Frost's death.
- **Change the reveal away from family (2).** Proposed new mechanism (family 4 + ecological):
  the contamination is exposed through a **bioindicator die-off read via mātauranga Māori** rather
  than a Twitter chemist. Oblivia, filming a "communion with the sacred eels," documents floating
  **dead longfin eels / tuna** and the absence of birdsong; Tama and a local freshwater ecologist
  use the species die-off pattern and a customary monitoring record (a generations-long catch
  log) to fix the contamination timeline and force the test. This differentiates NZ from
  Kenya/South Africa, foregrounds Indigenous science over a stranger-on-Twitter, and keeps the
  "Oblivia documents the wrong thing for the right reason" engine.
- **Knock-on:** retains the `poisoned-healing → mayan-fury` connection (still "wellness as cover
  for extraction").

### A2 · Certified Forest — `certified-forest.ts` (Borneo)
- **Problem:** The **purest template instance** (lowest originality, 12/25). Reveal is family (1):
  oblivious geotagged livestream + expert in chat.
- **Keep:** Danum Valley locale, the GPS-spoofing-the-satellite crime, ranger **Ahmad Rifai**'s
  death, ranger **Sulastri**.
- **Change the reveal to family (3) with a comedic ownership twist:** Oblivia **pockets one of the
  spoofing devices** off a relay pole, convinced it is a "forest-energy resonator / a node of the
  canopy's nervous system," and carries it out — mailing it to a follower or declaring it through
  customs as a "sacred mineral instrument." The physical device (with its firmware/serials) thus
  lands in investigators' hands as the chain-of-custody object Sulastri could never recover —
  funnier, more distinctive, and it gets the murder weapon into evidence rather than just a
  livestream still.
- Optionally lock the locale (the metadata still says "Borneo / Amazon (TBD)" in `index.ts`).

### A3 · Threshold — `threshold-border.ts` (Texas)
- **Problem:** Its EM-meter twin is now gone (good), but it still **shares the "doctor with
  numbered clinical intake forms" device** with `fields-central-valley`.
- **Resolution:** Differentiate the *clinical-tracking device* between the two. Since `fields` is
  being rewritten anyway (Workstream B), **change `fields`' device and keep Dr. Reyes's numbered
  forms here** as Threshold's signature. Threshold then needs only a **light pass**: deepen the
  migrant/aid-worker supporting cast (currently thin — "legal aid workers… doing what they have
  been doing for years") into named, distinct characters so it doesn't read as archetype filler.
- **Keep:** the infrasonic-weapon crime, the ignored DHS buffer-zone memo, the congressional arc.

### A4 (light / optional) · Interior — `interior-angola.ts` (Iowa)
- **Problem:** Family (1) geotag reveal — but the **class satire is among the strongest in the
  collection** (the 0000 default padlock, the unseated $12 lock bolt), so this is low priority.
- **Change:** Mostly leave. Two small cleanups: (a) the slug/filename `interior-angola` is a
  **misnomer** (the story is set in Iowa) — consider renaming to `interior-iowa` (note: a slug
  change touches the file name, the `slug` field, and the `connections`
  `salt-crust-protocol → interior-angola`); (b) if desired, give the valve-photo reveal a small
  family-(4) beat so it isn't a pure geotag.

> Chemical-stain trio note: with NZ (A1) moved off the mechanism, **`rift-silence` (Kenya)** and
> **`sacred-water` (South Africa)** can stay — two instances read as a deliberate motif; three
> read as a rut. No rewrite needed for those two.

---

# Workstream B — Satire injection (the two ①-rated stories)

Both were rated **① Muted** in the analysis because the dramatic-irony engine was switched off.
The fix is to **re-engage the four satirical instruments around Oblivia and the perpetrators**
while keeping the victims' material gravity intact.

**The four instruments to restore in each:**
- **(A) Retainer-document euphemism** — the absurd engagement `document`.
- **(B) Oblivia's mystical misreadings** as dramatic irony (she narrates the crime as a blessing).
- **(C) A. Harris casefile deadpan** — barbs, the **$95-souvenir gag**, the SUBJECTIVE/MATERIAL line.
- **(D) Influencer-culture + parody media headline** (`mediaMisreading` in `storyMetas`).

**Tonal rule (non-negotiable):** satire punches **up** (at Oblivia, the corporations, the
credulous press) and **never at the victims** (Miguel Ramos; Aminata Diallo). The earnest pivot
each story already has should remain as the story's still center, with the satire built around it.

### B1 · The Fields — `fields-central-valley.ts` (California)
- **Why it reads earnest:** Oblivia drops the performance and sincerely calls 911; there's almost
  no retainer-doc absurdity, no A. Harris needling, minimal influencer mockery.
- **Keep (the heart):** the **911 call** and the genuine "crack between her performed self and her
  actual self" — this is the collection's best character beat; do **not** satirize Miguel's
  collapse.
- **Add satire around it:**
  - **(A)** Open with an Agro-Global / "ethical sourcing initiative" engagement document full of
    "farm-to-chakra," "regenerative storytelling residency," "no findings of a regulatory nature."
  - **(B)** Before the collapse, lean hard into Oblivia's misreadings — rose-quartz "soil
    alignment," "the earth stewards of the table," reading the *organophosphate drift* as "the
    valley's mineral perfume." The irony lands harder if she's at peak oblivious *just* before the
    real emergency punctures it.
  - **(C)** Restore A. Harris's deadpan to the final casefile (it currently ends earnestly) — the
    $95 Fresno-artisan-bowl gag plus a barb about her one genuinely useful act being involuntary.
  - **(D)** Add a parody `mediaMisreading` headline to its `storyMeta` (it has none).
  - **Originality knock-on (per A3):** change Dr. Kim's tracking device off "41 numbered intake
    forms" (keep that as Threshold's) — e.g., a **cholinesterase blood-test ledger** or the
    workers' own WhatsApp voice-note chain that Esperanza maintains.

### B2 · The Pipeline — `tech-tbd.ts` (Senegal)
- **Why it reads earnest:** The digital-labor trauma rightly dominates; satire is faint (only the
  $180 notebook, the orientation tote).
- **Keep (the heart):** Aminata's notebook, Fatou, the NDA-as-weapon, the read-aloud broadcast —
  treat these with the same restraint; **no jokes at Aminata's or the moderators' expense.**
- **Add satire around Oblivia and Aperture AI:**
  - **(A)** Sharpen the engagement document: Aperture's "digital healing ceremonies for
    tech-disrupted communities," "responsible-AI wellness facilitation," "closing the global
    talent gap" — euphemism for $2.40/item trauma labor.
  - **(B)** Push Oblivia's misreadings: "the original digital village," "ancestral bandwidth of
    West Africa," calling the moderators "digital griots" and their PTSD "a sacred download" — the
    obliviousness is the satire, set against what the work actually is.
  - **(C)** Give A. Harris a sharper casefile: the **$95 hand-carved pen** gag is present — extend
    the barbs (the branded tote on the way out of the orientation; Meridian quietly scrubbing
    Soleil Digital from its portfolio).
  - **(D)** It already has a strong parody `mediaMisreading` ("The Future Is African…") — make
    sure the narrative body *earns* that headline with a scene of the credulous press lionizing her.

---

## Suggested execution order
1. **A1 Poisoned Healing** (biggest originality win) — full reveal-mechanism rewrite.
2. **B1 Fields** + **B2 Pipeline** (satire injection; B1 also resolves the A3 device clash).
3. **A2 Certified Forest** (reveal-mechanism rewrite + lock locale metadata).
4. **A3 Threshold** (light cast pass) and **A4 Interior** (optional slug rename / small beat).

## Verification (per rewritten story)
- **Build/typecheck:** the app loads narratives via `import.meta.glob`; after editing, run the
  dev server / build and open `/stories/<slug>` to confirm the chapters and blocks render
  (`StoryRenderer`). Confirm `npm run build` (or `tsc`) is clean — note the container currently
  lacks installed deps (`vite/client` types), so run `npm install` first.
- **Metadata sync:** `storyMetaBySlug(slug)` must still resolve; `surfaceMystery`, `culprit`,
  `keyImage`, `mediaMisreading`, `localCenter` updated to match any plot change; `connections`
  endpoints all still exist (`storyMetas` slugs).
- **DNA check:** every rewritten story still has (1) an engagement `document`, (2) a closing
  `A. Harris` casefile with the $95 gag, (3) the `CASE CLOSED (SUBJECTIVE)/(MATERIAL)` line.
- **Satire check (B1/B2):** all four instruments present; re-read to confirm no joke lands on a
  victim.
- **Originality check (A):** each rewritten reveal sits in a *different* mechanism family than its
  former siblings; no two stories share both reveal-family and clinical-tracking device.
- **Docs:** update `STORY_ANALYSIS.md` ratings and the ranking table to reflect the rewrites.
