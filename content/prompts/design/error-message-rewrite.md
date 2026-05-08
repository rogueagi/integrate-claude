---
title: "Rewrite error messages to be human and actionable"
slug: error-message-rewrite
function: design
role: content-design
description: "Take a list of system error messages and rewrite each one to be plainspoken, blame-free, and actionable — with the structure: what happened, why, what to do next."
useCase: "Use this when auditing error messages across a product or cleaning up a backlog of badly-written validation copy. Most error messages are written by engineers under pressure; this prompt produces the version a content designer would have written if they'd had time."
prompt: |
  You are a senior content designer rewriting error messages for a product. Each rewrite should follow the structure: what happened, why (when useful), what to do next.

  Context:
  - Product: {{product}}
  - Brand voice notes (1–2 sentences): {{voice}}
  - Audience: {{audience}}
  - Surface (in-product modal, inline form error, banner, email): {{surface}}
  - List of original error messages and a one-line context for each: {{errors}}
  - Constraints (eg "must fit 60 characters for inline errors"): {{constraints}}

  For each error, produce:

  1. Original. Quote verbatim.
  2. Diagnosis. One sentence on what's wrong with the original (eg "blames the user," "vague," "uses internal terminology").
  3. Rewrite. The new message. Keep to length budget if specified.
  4. Why it works. One sentence.

  Rules for every rewrite:
  - Lead with what happened in plain language. No "Oops!" or "Uh oh!"
  - Explain why only when it helps the user act. Skip the why for purely cosmetic causes.
  - End with the next step the user can take. If there's no action, say so explicitly ("Nothing you need to do — we'll retry") rather than leaving it open.
  - Don't blame the user for things that aren't their fault.
  - Don't apologize for things that are routine.
  - Never say "an error occurred." Say what occurred.
  - Match the tone budget for the surface — inline errors are short and dry; emails can have one sentence of warmth.

  After all rewrites, write a 2-sentence summary: the dominant pattern in the originals and the one rule that, applied broadly, would prevent most of them.

  Output: a numbered list of rewrites in the structure above, then the summary.
variables:
  - "{{product}}"
  - "{{voice}}"
  - "{{audience}}"
  - "{{surface}}"
  - "{{errors}}"
  - "{{constraints}}"
exampleInput: |
  product: Helix Analytics — self-serve BI tool
  voice: Calm, capable, non-finance-jargon, slightly dry
  audience: Marketing analysts at SMBs (10–200 employees), evaluating self-serve BI
  surface: Mix — inline form errors and modal-level errors during data source connection
  errors: |
    - "Invalid input. Please check your data and try again." (inline error when user enters a malformed Stripe API key)
    - "Oops! Something went wrong. Please try again later." (modal that appears when a data source sync fails because the source's API rate-limited us)
    - "Error 422: Unprocessable Entity" (modal when a chart query returns a column that's been renamed since the chart was built)
    - "You don't have permission to do that." (modal when a viewer-role user tries to edit a dashboard)
    - "Connection failed." (inline error under data source URL field when the URL is unreachable)
  constraints: Inline errors max 80 characters; modals can be longer with optional learn-more link
exampleOutput: |
  ## 1. Stripe API key validation
  Original: "Invalid input. Please check your data and try again."
  Diagnosis: vague — doesn't say what's wrong or what valid input looks like.
  Rewrite: "This doesn't look like a Stripe key. Stripe keys start with sk_live_ or sk_test_."
  Why it works: names the field, gives the user a concrete pattern to check against, no apology.

  ## 2. Data source sync rate-limited
  Original: "Oops! Something went wrong. Please try again later."
  Diagnosis: blames nothing in particular ("oops" is sympathetic but not informative); the user has no idea whether to wait 1 minute or 1 day.
  Rewrite: "Stripe limited how often we can sync. We'll retry in 10 minutes — nothing you need to do." (with optional "Why this happens" link)
  Why it works: explains the cause in plain language, sets a specific expectation, takes the action off the user's plate.

  ## 3. Chart references a renamed column
  Original: "Error 422: Unprocessable Entity"
  Diagnosis: HTTP error code in user-facing copy — meaningless to a marketing analyst.
  Rewrite: "This chart uses a column that's been renamed. Pick a column to use instead, or remove this chart." (with a dropdown of available columns and a remove button)
  Why it works: names the problem in domain language ("column," not "field"), gives two concrete actions instead of leaving the user stuck.

  ## 4. Viewer attempts to edit
  Original: "You don't have permission to do that."
  Diagnosis: terse, accusatory, doesn't tell the user how to get unstuck.
  Rewrite: "You're a viewer on this dashboard, so you can't edit it. Ask Priya (the owner) for editor access if you need it."
  Why it works: explains the role they have, names the specific person who can grant access, frames the resolution as a normal request rather than a failure.

  ## 5. Data source URL unreachable
  Original: "Connection failed."
  Diagnosis: doesn't distinguish between "wrong URL," "URL is down right now," or "we can't reach it from our network."
  Rewrite: "We can't reach this URL. Check the spelling, or try again in a minute if the source is intermittent."
  Why it works: gives the two most likely causes and the user's two most likely actions, without overwhelming them with the unlikely third (firewall).

  ## Summary
  The dominant pattern in the originals is what I'd call "polite withholding": the system says something is wrong but won't say what, why, or what to do — usually because the writer didn't know the user well enough or didn't have time to be specific. The single rule that would prevent most of these: every error message must answer "what do I do next?" before it ships, and "try again" doesn't count as an answer.
tips:
  - "Specificity beats apology. 'We charged your card twice; refund coming' is better than 'Sorry for the inconvenience.'"
  - "Always answer 'what do I do next?' If the answer is 'nothing,' say so explicitly — open-ended errors create support tickets."
  - "Never use HTTP error codes or exception class names in user-facing copy. They're for logs."
  - "If you can't write a clear error message, the underlying flow is probably the problem. Flag those for design, not just copy."
  - "Audit error messages quarterly with this prompt — they drift toward developer-speak whenever the writers aren't watching."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - empty-state-microcopy
  - onboarding-microcopy-flow
  - cta-variant-generator
tags:
  - content-design
  - microcopy
  - error-messages
  - ux-writing
  - copywriting
---
