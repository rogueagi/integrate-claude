---
title: "Generate three distinct visual identity directions"
slug: visual-identity-direction-brief
function: design
role: brand-design
description: "Take brand strategy inputs and produce three meaningfully different visual identity directions — each with personality, typography, color, and motion notes a designer could prototype against."
useCase: "Use this at the start of identity exploration after discovery is done. Three real directions beat seven mood boards. This prompt forces the kind of meaningful differentiation that gives a founder a real choice instead of three flavors of the same idea."
prompt: |
  You are a brand designer writing a directions brief — three distinct visual identity directions that a founder will choose between. Each direction must be different in kind, not just degree.

  Context:
  - Brand: {{brand}}
  - One-sentence positioning: {{positioning}}
  - Brand attributes (3–5 words): {{attributes}}
  - Audience: {{audience}}
  - Category and what's typical there: {{category}}
  - References the founder responded to (positive or negative): {{references}}
  - Constraints (eg "must work on packaging," "no green"): {{constraints}}

  For each of three directions, produce:

  1. Name (a short evocative label, eg "Quiet Almanac," "Outpost").
  2. One-sentence thesis. The core idea this direction is making.
  3. Personality (3 adjectives — concrete, not corporate).
  4. Typography. Specific typeface families that exemplify the direction (display + body), with one line on why these fit.
  5. Color. A 5-color palette described in words and rough hex. Note the mood and which color anchors.
  6. Image and texture. What photography, illustration, or material vocabulary lives in this direction.
  7. Motion and tone. How animation feels (springy / weighted / minimal / none) and how copy sounds.
  8. Risk. The one risk of choosing this direction (eg "feels luxe and may price out core audience").
  9. Where it wins. Two contexts (a packaging unboxing, a billboard, a homepage hero) where this direction is unmistakably stronger than the others.

  After the three directions, write a comparison paragraph (4 sentences) explaining what real choice the founder is making between them — not "which one is better," but "what tradeoff each one is."

  Rules:
  - Three directions must be different in concept (eg "heritage almanac" vs. "industrial systems" vs. "warm minimalism"), not three palette variations of the same concept.
  - No direction may be "modern, clean, professional." If one of yours is, replace it.
  - Each direction should feel like a real point of view a designer could defend.

  Output: the three directions, then the comparison paragraph.
variables:
  - "{{brand}}"
  - "{{positioning}}"
  - "{{attributes}}"
  - "{{audience}}"
  - "{{category}}"
  - "{{references}}"
  - "{{constraints}}"
exampleInput: |
  brand: Greenfield Grain
  positioning: Direct-to-restaurant heritage grain from regenerative Midwest farms
  attributes: Patient, exacting, plain-spoken, generous, rooted
  audience: Chefs and bakers at independent restaurants ($1–10M revenue), the front-of-house owners adjacent to them
  category: Specialty food distribution. Typical visual: green-and-tan, wheat sheaves, "farm-to-table" script type, watercolor mid-tones
  references: Loved Anson Mills' utility; loved Aesop's restraint; rejected Bob's Red Mill as too retail; rejected anything with cursive type
  constraints: Must work on small-batch paper bags (single-color print), must read at billboard distance, no green
exampleOutput: |
  ## Direction 1 — "Quiet Almanac"
  Thesis: Greenfield is a record of its growers — every variety, season, and field documented with a librarian's care, not a marketer's flourish.
  Personality: archival, exacting, calm.
  Typography: Display in Söhne or Inter Display (cool, plain-spoken sans). Body in Lyon Text (warm, readable serif). Pairing reads like a contemporary library catalog rather than a farmstand sign.
  Color: bone (#F4EFE6), iron (#1B1C1F), ochre (#B8853B), oxblood (#7A2A23), parchment (#E5D9C2). Bone anchors. Mood is paper-and-ink.
  Image and texture: photography of grain heads on plain backgrounds; varietal labels printed letterpress-style; numerical lot codes on every bag like a weather almanac.
  Motion and tone: motion is minimal — type fades in, no springs. Copy is informational ("Lot 412. Rouge de Bordeaux. Stearns County, MN. Harvested Sept 8.").
  Risk: at billboard distance the restraint may read as institutional rather than warm.
  Where it wins: on a 5-lb paper bag with a single-color stamp, where every other brand is shouting. On a chef's pantry shelf, where it sits next to Diamond Crystal and Maldon and looks like it belongs.

  ## Direction 2 — "Outpost"
  Thesis: Greenfield is a working depot — utility hardware with no decoration, designed to ship and unpack at 5am on a restaurant's loading dock.
  Personality: practical, weighted, unsentimental.
  Typography: Display in ABC Diatype Mono (industrial monospace, reads like a shipping label). Body in IBM Plex Sans (utilitarian, machine-friendly).
  Color: kraft (#C9B68F), graphite (#2A2A2A), signal red (#C8331F), creamline (#F2EDE3), steel (#7A8089). Kraft anchors.
  Image and texture: photography of crates and pallets, grease-pencil annotations, stenciled type on burlap. Layouts feel like a logistics document, not a recipe card.
  Motion and tone: motion is mechanical — slides and counters, no easing. Copy is direct, almost terse ("Ships Tuesdays. Whole grain. 50 lb sacks.").
  Risk: skews masculine and may feel cold to front-of-house buyers who want warmth from a food brand.
  Where it wins: on the side of a delivery truck. On a printed invoice that doubles as marketing because every detail of how the brand operates is on the page.

  ## Direction 3 — "Common Table"
  Thesis: Greenfield is a generous neighbor — the brand of food that gets passed around a table, sharing the credit with growers, chefs, and bakers equally.
  Personality: warm, plainspoken, communal.
  Typography: Display in Reckless (warm contemporary serif with character). Body in Söhne Buch (sturdy, friendly sans).
  Color: butter (#F0DDA0), brick (#9C3B2A), spruce (#264338) [allowed because it's spruce, not "green"], cream (#F8F2E2), umber (#5C3A21). Butter anchors.
  Image and texture: documentary photography of farmers and chefs together, hands-and-bread shots, hand-lettered menu cards. Feels editorial, not promotional.
  Motion and tone: motion is gentle — soft fades and easings, never bouncy. Copy is generous and crediting ("Grown by Mike Sturm in Stearns County. Milled this week. Eat soon.").
  Risk: dangerously close to category clichés (farm-to-table) — execution must be more disciplined than the references suggest, or it lands as generic.
  Where it wins: on a restaurant menu mention, where the brand's name carries social proof. On a printed seasonal newsletter that chefs actually keep.

  ## Comparison
  The choice isn't between three palettes — it's between three theories of the brand's relationship to its audience. Quiet Almanac asks chefs to trust Greenfield because of its discipline; Outpost asks them to trust it because of its competence; Common Table asks them to trust it because of its generosity. All three are honest readings of the discovery inputs, but only one can be the lead — the others can show up downstream as supporting voices, not primary identities.
tips:
  - "Three directions that are real choices beat seven mood boards every time. The hardest part of this work is making the directions different in kind, not degree."
  - "The 'risk' line for each direction prevents founders from picking the safest option without seeing its cost. Make the risk real."
  - "Always identify where each direction wins. Founders can't pick between abstract directions — they can pick between 'the bag' and 'the truck' and 'the menu mention.'"
  - "If you can swap the names of two directions and the descriptions still work, they're not different enough."
  - "Use the founder's own forced-choice answers to anchor each direction. If they said 'Bon Appétit over Modern Farmer,' one direction should clearly serve that, and one should challenge it."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - brand-attributes-elicitation
  - logo-concept-rationale
  - brand-voice-tone-spectrum
tags:
  - brand
  - visual-identity
  - direction
  - art-direction
  - presentation
---
