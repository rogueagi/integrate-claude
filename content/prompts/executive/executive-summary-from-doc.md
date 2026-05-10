---
title: "Executive summary from a long document"
slug: executive-summary-from-doc
function: executive
role: comms
description: "Compress a long document into a structured executive summary with explicit decisions, action items, and open questions — not a paraphrase."
useCase: "Use this when a busy executive needs to act on a 30-page document in 3 minutes. The structure pushes Claude past summary into synthesis: what does the reader need to decide, who owns what, what is missing."
prompt: |
  You are preparing a one-page executive summary of a long document. Your reader has 3 minutes and needs to act, not be entertained. The summary must hold up if it is the only part the reader sees.

  <context>
  Source document:
  <<<
  {{document}}
  >>>

  Reader: {{reader}} (e.g., CEO, board chair, head of product)
  What the reader will do with this: {{reader_goal}}
  Length target: {{length}} (e.g., 250 words, half a page)
  </context>

  <task>
  Step 1 — Identify the decisions.
  Read the document and list every decision the reader is being asked to make, even implicitly. If there are none, say so explicitly.

  Step 2 — Pull the load-bearing facts.
  Extract the 5 to 8 facts in the document that would change a decision if they were different. Quote or paraphrase precisely. Cite the section or page.

  Step 3 — Surface the open questions.
  List anything the document treats as settled but that you, reading it cold, think the reader should push back on. Be specific.

  Step 4 — Write the summary.
  Produce a one-page executive summary in this exact structure:
  - **Bottom line** (1 to 2 sentences: what the reader needs to know if they read nothing else)
  - **What is being asked** (the decision or no-decision)
  - **Key facts** (3 to 5 bullets, each one fact)
  - **Risks and open questions** (2 to 4 bullets)
  - **Recommended next step** (one specific action with owner and timing if available)

  Step 5 — Honesty check.
  Note anything in the source document that you could not summarize confidently (ambiguous, contradictory, or missing context). One bullet each.
  </task>

  <output_format>
  ## Decisions identified
  ## Load-bearing facts (with citation)
  ## Open questions
  ## Executive summary (the deliverable)
  ## Confidence notes
  </output_format>

  <constraints>
  - Do not invent facts not in the source. If the source omits something the reader needs, name the gap in "Open questions."
  - Do not soften. If the document is making a weak case, the summary should reflect that without editorializing.
  - The "Bottom line" must be a claim, not a topic. "Q3 results" is a topic. "Q3 missed plan by 12% on a single deal slipping" is a claim.
  - US English, no em-dashes.
  </constraints>
variables:
  - "{{document}}"
  - "{{reader}}"
  - "{{reader_goal}}"
  - "{{length}}"
exampleInput: |
  document: [40-page board pre-read on Q3 results, including financials, product update, hiring report, and a proposed pivot in pricing model]
  reader: Board chair
  reader_goal: Decide whether to support the pricing pivot at next week's board meeting
  length: 300 words
exampleOutput: |
  ## Decisions identified
  - Approve or defer the pricing pivot from per-seat to consumption
  - Approve Q4 hiring plan (15 net new)

  ## Load-bearing facts
  - Q3 revenue $4.2M, 8% below plan; miss attributed to one enterprise deal slipping (p.4)
  - Net retention 104%, down from 118% YoY; downsell concentrated in 50-200 seat tier (p.7)
  - Pricing pilot with 12 customers showed 22% ARR uplift on consumption pricing (p.18)
  - Cash runway 14 months at current burn; pivot adds ~$400k of one-time cost (p.31)

  ## Open questions
  - The 22% uplift figure excludes 2 customers who churned mid-pilot. Including them, the picture is more mixed.
  - Hiring plan assumes pricing pivot lifts pipeline, but the model linking the two is not in the deck.

  ## Executive summary

  **Bottom line:** Q3 missed plan by 8% on one deal, not on a trend; the proposed pricing pivot has promising but incomplete pilot data, and approving it next week without seeing the churn-adjusted numbers is premature.

  **What is being asked:** Board approval of the pricing pivot and Q4 hiring plan.

  **Key facts:**
  - Q3 revenue $4.2M, 8% below plan, driven by single deal slip
  - Net retention down 14 points YoY, concentrated in mid-market
  - Pricing pilot: +22% ARR but excludes 2 churned pilots
  - 14 months cash; pivot adds $400k one-time

  **Risks and open questions:**
  - Pilot data not churn-adjusted; ask for the corrected number
  - Hiring plan depends on pricing pivot lifting pipeline; the causal link is asserted, not modeled
  - Mid-market downsell may be a product issue, not a pricing one — the deck does not test this

  **Recommended next step:** Ask for the churn-adjusted pilot number and the pricing-to-pipeline model in writing before the meeting. Defer hiring plan vote one week if the pivot is deferred.

  ## Confidence notes
  - "One deal slip" framing for the Q3 miss is the company's narrative. The deck does not show whether other deals shrank.
tips:
  - "The 'load-bearing facts' step is what makes this stronger than the typical summary prompt — it forces Claude to identify which 5 facts actually matter, not paraphrase every section equally."
  - "Always specify the reader's goal. A summary for 'decide on the pivot' looks completely different from one for 'absorb context for next quarter.' Without it, you get a generic recap."
  - "Confidence notes catch hallucination. If Claude has high confidence on every point, push back: 'reread paragraph 4 and tell me what is actually said versus implied.'"
  - "For very long documents (50+ pages), pre-process: ask Claude first to list the document's section structure, then run this prompt with the structure as context."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - hemingway-rewrite
  - strategic-narrative-test
  - devils-advocate
tags:
  - framework
  - methodology
  - executive-comms
  - summarization
  - synthesis
---
