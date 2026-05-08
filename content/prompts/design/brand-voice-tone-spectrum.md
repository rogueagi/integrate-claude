---
title: "Define a brand voice and tone spectrum"
slug: brand-voice-tone-spectrum
function: design
role: brand-design
description: "Produce a voice-and-tone document with a fixed voice, a tone spectrum across emotional contexts, and side-by-side examples that writers can copy from."
useCase: "Use this when establishing voice for a new brand or fixing inconsistency across an existing one. Voice docs without examples are useless; this prompt produces a doc whose examples do the actual teaching. Best for marketing teams, content designers, and support teams that need to write in a unified voice."
prompt: |
  You are a brand strategist defining voice and tone for a content team. The output should be a working document that a junior writer can apply to a new piece of copy in 5 minutes.

  Context:
  - Brand: {{brand}}
  - One-sentence positioning: {{positioning}}
  - Brand attributes: {{attributes}}
  - Audience: {{audience}}
  - Surfaces where voice will appear (eg homepage, product UI, support replies, social): {{surfaces}}
  - Existing voice problems or inconsistencies: {{existing_problems}}
  - Adjacent brand voices to differentiate from: {{competitor_voices}}

  Produce the doc in this structure:

  1. Voice principles (3 — no more). Each: a one-line statement, 2 sentences explaining what it means in practice, and a "this not that" pair of phrasing examples.
  2. Tone spectrum. A 5-row table with these contexts: announcing good news, explaining a problem, asking for action, delivering bad news, and being playful. For each: tone descriptor (eg "matter-of-fact, warm"), what to dial up, what to dial down, and a one-line example.
  3. Vocabulary. Words/phrases the brand uses (4–6) and explicitly avoids (4–6). Each entry has one line of reasoning. Include any category clichés you're banning.
  4. Format and rhythm. Sentence length, paragraph rhythm, contractions, emoji policy, exclamation policy, and how the brand handles humor.
  5. Worked examples. Three short pieces of copy (a homepage headline, an empty-state message, a support reply for a billing error), shown two ways: "off-voice draft" and "on-voice rewrite," with a one-sentence note on what changed.
  6. Edge cases. How to write when: the brand is the bearer of bad news, a customer is angry, the topic is technically dense, the audience is a new persona outside the core.

  Rules:
  - Principles must be subtractive — naming what the brand doesn't do is at least as important as what it does.
  - Avoid abstract personality words ("authentic," "approachable," "human") unless paired with a phrasing example that proves it.
  - The "this not that" examples carry the doc. They should be the most polished part.
  - Worked examples are mandatory. A voice doc without rewrites is theory.

  Output: the full doc.
variables:
  - "{{brand}}"
  - "{{positioning}}"
  - "{{attributes}}"
  - "{{audience}}"
  - "{{surfaces}}"
  - "{{existing_problems}}"
  - "{{competitor_voices}}"
exampleInput: |
  brand: Lumen Billing — invoicing for freelancers and small agencies
  positioning: The simplest way for service businesses to send invoices and get paid
  attributes: Calm, capable, non-finance-jargon, slightly dry humor
  audience: Freelance designers, photographers, small agency owners — busy, finance-averse, time-starved
  surfaces: Marketing site, product UI microcopy, billing emails, support replies, X/social
  existing_problems: Marketing site sounds startup-cheery; product UI sounds clinical; support replies are inconsistent — sometimes apologetic, sometimes blunt
  competitor_voices: QuickBooks (legacy, jargon-heavy), Stripe (engineer-coded, dense), HoneyBook (warm but veers cute)
exampleOutput: |
  # Lumen Billing — Voice and Tone

  ## 1. Voice principles

  **1. Plain over impressive.**
  Use the words a designer or photographer would use over coffee, not the words a fintech VP uses on stage. Finance is intimidating enough; our job is to remove the vocabulary tax.
  - This: "Add the line items you billed for."
  - Not that: "Configure your invoice line-item entities."

  **2. Confident, not cheery.**
  We sound like a competent friend who's done this a hundred times — calm, helpful, never excitable. We don't need exclamation points to seem friendly.
  - This: "Your invoice is on its way to Anita."
  - Not that: "Yay! Invoice sent! 🎉"

  **3. Brief, with one moment of warmth.**
  Most copy is instructional. We earn one human beat per surface — a small turn of phrase, a dry joke, a bit of acknowledgment — and then we get out of the user's way.
  - This: "We charged you $19. That's the whole email."
  - Not that: "Hi there! Just a quick heads up that your subscription renewed today, which means..."

  ## 2. Tone spectrum

  | Context | Tone | Dial up | Dial down | Example |
  |---|---|---|---|---|
  | Good news | Matter-of-fact, warm | Specifics | Celebration | "Anita paid your invoice. $1,400 will land Tuesday." |
  | Explaining a problem | Calm, plain | Clarity | Apology theater | "The bank rejected the transfer. We're not sure why yet — looking into it." |
  | Asking for action | Direct, respectful | Clarity of next step | Urgency theater | "Add a payment method to send your next invoice." |
  | Delivering bad news | Honest, brief | Ownership | Hedging | "We charged your card twice. We refunded one charge — it'll show within 3 business days." |
  | Playful | Dry, sparing | Restraint | Volume | "Spreadsheet successfully demoted." |

  ## 3. Vocabulary

  Use:
  - "send an invoice" (the user's action)
  - "get paid" (the user's outcome)
  - "client" (their language for the relationship)
  - "we'll handle the rest" (only when we actually will)
  - "heads up" (preferred over "important notice")

  Avoid:
  - "platform" — every product is a platform; the word means nothing
  - "solution" — sounds like a sales deck
  - "seamless" — we don't promise frictionlessness; we promise plain
  - "hassle-free" / "easy-peasy" — too cheery
  - "leverage" as a verb — finance jargon, banned
  - "💸" or "💰" emoji on financial copy — undermines the calm

  ## 4. Format and rhythm
  - Sentence length: short. Average 12–14 words; one long sentence per paragraph max.
  - Paragraphs: 1–3 sentences. Whitespace is part of the voice.
  - Contractions: yes (we're, you'll, it's). They're how people talk.
  - Exclamation points: one per email max, and only when the news is genuinely good for the user. Never in error states.
  - Emoji: rare. Allowed in social. Banned in financial confirmation copy.
  - Humor: dry, observational, never about the user. If a joke would land badly when someone's invoice is late, cut it.

  ## 5. Worked examples

  **Homepage headline**
  Off-voice: "Empower your freelance business with seamless invoicing."
  On-voice: "Send an invoice. Get paid. That's most of it."
  What changed: removed "empower" and "seamless"; replaced abstraction with the actual two-step user benefit.

  **Empty state — no invoices yet**
  Off-voice: "You haven't created any invoices yet! Click here to create your first invoice and start getting paid faster!"
  On-voice: "No invoices yet. Make one and we'll send it out."
  What changed: dropped exclamation points and "faster" (an unkept promise); used active voice; one sentence shorter.

  **Support reply — billing error**
  Off-voice: "Hi! So sorry for any inconvenience this may have caused! We're looking into your issue and will get back to you as soon as possible. Thanks for your patience!"
  On-voice: "We charged you twice. One refund is on its way — should land in 3 business days. We're figuring out how it happened so it doesn't again."
  What changed: replaced apology theater with ownership; led with the fact, then the fix, then the cause.

  ## 6. Edge cases
  - Bearer of bad news: lead with the fact, then the fix, then the cause. Don't bury or hedge.
  - Angry customer: drop principle 3 (the warmth beat). Match their seriousness; deliver the resolution.
  - Technical density: explain the mechanism in one short paragraph, then offer the user the one decision they need to make. Don't show the engineering.
  - New persona (eg an accountant integrating Lumen): match their vocabulary, not ours. "Reconciliation" is fine in copy aimed at accountants; banned in copy aimed at freelancers.
tips:
  - "The 'this not that' pairs do the actual teaching. Spend more time on those than on the principles."
  - "Three principles is the right number. Five is too many to remember; one is too vague."
  - "Always include a 'words to avoid' list. Without it, category clichés sneak back in within a quarter."
  - "Stress-test the voice on the worst day — angry customer, billing failure, outage. Voice docs that only work for happy paths fail in production."
  - "Have one writer not on the brand team write copy using only this doc. Where they get it wrong is where the doc has gaps."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - brand-attributes-elicitation
  - error-message-rewrite
  - cta-variant-generator
tags:
  - brand
  - voice-and-tone
  - content-design
  - copywriting
  - guidelines
---
