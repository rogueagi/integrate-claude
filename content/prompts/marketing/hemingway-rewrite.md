---
title: "Hemingway rewrite — clarity and force without flattening"
slug: hemingway-rewrite
function: marketing
role: content
description: "Rewrite prose for clarity and force, cutting hedges and noise without losing the nuance that made the original worth reading."
useCase: "Use this on copy that is technically correct but flabby: blog drafts, exec emails, landing page sections, internal memos. The structure pushes Claude past 'shorten it' into actually identifying what carries weight in the original and what is filler."
prompt: |
  You are editing prose for clarity and force. The goal is not to make it short — it is to make every sentence carry its weight. Cut what dilutes; keep what informs.

  <context>
  Original draft:
  <<<
  {{draft}}
  >>>

  Audience: {{audience}}
  Purpose of the piece: {{purpose}}
  Tone target: {{tone}} (e.g., direct and warm, sober and authoritative, plainspoken)
  Constraints: {{constraints}} (e.g., must keep section headers, must hit a specific word count)
  </context>

  <task>
  Step 1 — Diagnose.
  Read the draft and list its specific weaknesses. Not generic ("too long") but specific ("paragraph 2 has three hedges in a row," "the verb in sentence 4 is a noun in disguise"). Aim for 5 to 10 diagnoses.

  Step 2 — Identify the load-bearing claims.
  Pull out the 3 to 5 sentences or ideas that, if removed, would empty the piece. These are protected — the rewrite must keep them, possibly sharpened.

  Step 3 — Rewrite.
  Produce the edited version. Match {{tone}} and {{constraints}}. Cut to taste. Where the original used a vague verb (utilize, leverage, drive), replace with a specific one or remove the sentence.

  Step 4 — Show the cuts.
  List the top 5 things you removed and why. If you removed a load-bearing claim, justify it.

  Step 5 — Word-count delta.
  Report original word count, new word count, percent reduction.
  </task>

  <output_format>
  ## Diagnoses
  ## Load-bearing claims
  ## Rewritten draft
  ## Top cuts (with reason)
  ## Word count: original / new / delta
  </output_format>

  <constraints>
  - Do not flatten voice. If the original has a distinctive cadence and {{tone}} allows it, keep the cadence and cut around it.
  - Do not invent claims to make a sentence punchier. If the source is vague, keep it vague but shorter.
  - Use US English. No em-dashes. Replace with periods, commas, or colons as the sentence demands.
  - Avoid corporate buzzwords (synergy, leverage, holistic, robust, seamless). If the original uses one, replace with a concrete word.
  </constraints>
variables:
  - "{{draft}}"
  - "{{audience}}"
  - "{{purpose}}"
  - "{{tone}}"
  - "{{constraints}}"
exampleInput: |
  draft: "We are extremely excited to announce that our team has been working tirelessly on a brand new and innovative solution that we believe will fundamentally transform the way our customers approach their workflow management challenges. By leveraging cutting-edge AI capabilities, we have built a holistic platform..."
  audience: existing customers, mostly ops leaders
  purpose: launch announcement for a new feature
  tone: direct and warm
  constraints: keep under 120 words, lead with what changed for the customer
exampleOutput: |
  ## Diagnoses
  - Opens with the company's emotion, not the customer's outcome
  - "Tirelessly," "fundamentally," "holistic" all carry no information
  - Two adjectives where one would do (brand new and innovative)
  - Sentence 1 is 38 words and contains no facts

  ## Load-bearing claims
  - There is a new feature
  - It uses AI
  - It addresses workflow management for the existing audience

  ## Rewritten draft
  Today we are shipping a new way to handle your workflows. If you have ever spent an afternoon stitching together approvals across three tools, this is the release for you. The new feature reads your existing workflow rules, identifies the bottlenecks, and proposes a simpler version you can accept or edit. It uses AI under the hood, but the output is plain English you can read and trust. It is on for every customer starting today. We would rather you tried it than read about it, so the link is at the bottom.

  ## Top cuts
  - "Extremely excited" — sentiment without information
  - "Working tirelessly" — about the team, not the reader
  - "Cutting-edge AI capabilities" — adjectives stacked on a noun phrase that means nothing

  ## Word count
  Original 67 / new 99 / delta +32 (the original was actually under-specific; the rewrite added concrete detail rather than cutting).
tips:
  - "The 'load-bearing claims' step is what makes this stronger than the typical 'rewrite for clarity' prompt — without it, models will cheerfully cut the substantive sentence and keep the throat-clearing one."
  - "Force a tone target. 'More clear' is not a tone. 'Direct and warm' is — it tells Claude which words to keep and which to drop."
  - "If the rewrite is shorter but feels generic, the original had voice and Claude flattened it. Re-run with 'preserve cadence' added to the constraints."
  - "Run twice on important pieces: once for cuts, then a second pass on the cut version for verb strength. Two narrow passes beats one wide one."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - executive-summary-from-doc
  - feynman-explainer
  - strategic-narrative-test
tags:
  - framework
  - methodology
  - editing
  - writing
  - copyediting
---
