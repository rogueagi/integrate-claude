---
title: "Write the rationale narrative for a logo concept"
slug: logo-concept-rationale
function: design
role: brand-design
description: "Generate the written rationale that accompanies a logo presentation — the story that explains the mark's construction, meaning, and behavior without resorting to brand-deck cliché."
useCase: "Use this when presenting a logo concept to a founder or client. Most logo rationale slides over-explain symbolism and under-explain construction; this prompt produces the opposite. Best for decks where the rationale needs to do persuasive work because the founder isn't yet sure."
prompt: |
  You are a brand designer writing the rationale narrative for a logo concept presentation. The narrative will sit alongside the mark in a deck and be read aloud in the meeting. It needs to be specific, defensible, and free of brand-deck cliché.

  Context:
  - Brand: {{brand}}
  - Concept name: {{concept_name}}
  - One-line thesis of the broader visual direction: {{direction_thesis}}
  - Form of the mark (wordmark / monogram / pictorial / abstract / combination): {{mark_form}}
  - Description of the mark itself: {{mark_description}}
  - Construction notes (geometry, proportions, typography source): {{construction_notes}}
  - Founder's stated brand attributes: {{attributes}}
  - References they liked / disliked: {{references}}

  Produce the rationale in this structure:

  1. Headline (one sentence). The thesis of the mark in plain language.
  2. The idea (1 paragraph, 4–5 sentences). Why this form, not other forms. What the mark says without explanation.
  3. Construction (1 paragraph, 3–4 sentences). The geometry, proportions, type source, and the small decisions that make it look intentional. Specific.
  4. Behavior (1 paragraph). How the mark scales, what its smallest legible size is, how it works on dark vs. light, and the one thing it never does (eg "never tilted, never gradient-filled").
  5. What this mark is not (3 sentences). Three nearby ideas you considered and rejected, briefly, with the reason.
  6. Why now (2 sentences). Why this mark fits the brand at this stage specifically — not "for the next 100 years" but for the work in front of them.

  Rules:
  - No abstract symbolism unless the founder explicitly asked for it ("the curve represents growth" — only if growth is a stated attribute and the curve is genuinely doing the work).
  - Construction details must be specific. "The counter-spaces are tuned" is wrong; "the counters in the 'a' and 'e' are widened 4% for legibility at favicon size" is right.
  - Section 5 ("what it is not") is mandatory. It demonstrates that the chosen form was a decision, not a default.
  - Don't use the words "iconic," "timeless," "bold," or "memorable." If your draft has them, rewrite.

  Output: the full rationale, structured as above.
variables:
  - "{{brand}}"
  - "{{concept_name}}"
  - "{{direction_thesis}}"
  - "{{mark_form}}"
  - "{{mark_description}}"
  - "{{construction_notes}}"
  - "{{attributes}}"
  - "{{references}}"
exampleInput: |
  brand: Greenfield Grain
  concept_name: The Stamp
  direction_thesis: Quiet Almanac — Greenfield as a record of its growers, archival and exacting
  mark_form: Wordmark with a small ordinal stamp
  mark_description: "GREENFIELD" set in modified Söhne Breit, all caps, slightly condensed. Below it, a small stamp-like glyph reading "EST. 2024 / NO. 001" in a single line, divided by a thin rule.
  construction_notes: Letterforms hand-tuned from Söhne Breit at 80% width; counters opened 3% for legibility on kraft paper; baseline set to 0.62 of cap height; stamp glyph caps at 28% the size of the wordmark
  attributes: Patient, exacting, plain-spoken, generous, rooted
  references: Loved Anson Mills (utility), Aesop (restraint); rejected Bob's Red Mill (retail), anything with cursive
exampleOutput: |
  # The Stamp — Rationale

  ## 1. Headline
  Greenfield as a wordmark with a single working detail: a small lot stamp underneath that says, quietly, this is the first of many.

  ## 2. The idea
  The brand's whole posture is documentary — every grain has a farm, a county, a season. The mark should look like the kind of stamp you'd find at the bottom of an almanac entry or on the inside flap of a record book, not like a logo trying to charm you. A pictorial mark (a wheat sheaf, a sun) would be saying the obvious thing the category already says; an abstract mark would be saying nothing the founder believes. A wordmark, with one piece of working metadata next to it, lets the brand's behavior — keeping records — be the visual idea. The "NO. 001" is real: it increments on every print run, every special release, and on packaging it ties to the lot number on the bag.

  ## 3. Construction
  The wordmark is built on Söhne Breit, hand-tuned at 80% width — Söhne's inherited Akzidenz lineage gives the seriousness without the agriculture-supply-store flatness of a generic grotesque. Counters in the 'E', 'F', and 'D' are opened 3% to hold up at small print sizes on textured kraft paper. The stamp glyph is set at 28% of the wordmark's cap height, with a single hairline rule between "EST. 2024" and "NO. 001" — proportions chosen so the stamp reads as a label, not a sub-headline. Cap-to-baseline ratio is locked at 0.62 across both the wordmark and the stamp so they share an optical line.

  ## 4. Behavior
  The mark is built for two contexts: a 5-lb paper bag stamped in single-color iron, and a chef's screen at 200% zoom. It scales from 12px (wordmark only, stamp dropped) to 60+ inches (full lockup, stamp visible). On dark surfaces, the wordmark inverts to bone; the rule and stamp characters retain the same hairline weight. The mark is never set in colors outside the palette, never tilted, and never paired with a tagline below — the stamp does the metadata work.

  ## 5. What this mark is not
  We considered a pictorial mark with a stylized wheat head; rejected because the brand's whole point is naming specific grains, not aestheticizing the category. We considered a monogram (a "G" or "GG"); rejected because monograms imply heritage the brand hasn't earned yet. We considered a fully condensed, all-display wordmark in the style of agricultural commodity brands; rejected because the brand is the opposite of commodity.

  ## 6. Why now
  At seed stage with three farm partners and a small chef list, Greenfield needs a mark that grows up well rather than one that pretends to be older than it is. The Stamp is honest about being NO. 001 — and that honesty is the brand's whole value proposition.
tips:
  - "Read the rationale aloud in the meeting. If you stumble on a sentence, the founder will too."
  - "Specificity in the construction section converts skeptics. 'Counters opened 3%' is more persuasive than 'carefully crafted.'"
  - "Section 5 ('what it is not') often does more political work than the rest. It shows the chosen form was a decision, not a default."
  - "Avoid the trap of explaining symbolism. A mark that needs to be explained is a mark that doesn't work."
  - "If the founder asks 'what does it mean?' and you've written this rationale well, you can read section 1 verbatim and stop. Don't overtalk."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - visual-identity-direction-brief
  - brand-attributes-elicitation
  - brand-voice-tone-spectrum
tags:
  - brand
  - logo
  - rationale
  - presentation
  - identity
---
