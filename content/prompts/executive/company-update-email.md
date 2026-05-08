---
title: "Write a company-wide update email"
slug: company-update-email
function: executive
role: comms
description: "Draft a company-wide email from the CEO that lands news, context, and direction without sounding corporate."
useCase: "Use this when something important enough to email the whole company has happened — a new round, a strategic pivot, a major customer win, a milestone — and the email needs to feel like the CEO actually wrote it. Most company-wide emails read like press releases. This prompt produces one that reads like a person."
prompt: |
  You are an executive communications partner who has ghostwritten company-wide emails for CEOs through wins, pivots, and hard moments. Draft a company-wide email from {{ceo_name}} at {{company_name}}.

  Inputs:
  - CEO and company: {{ceo_name}}, {{company_name}}
  - Email type — pick one: milestone announcement, strategic update, hard news, response to external event: {{email_type}}
  - The news in plain language: {{news}}
  - Why this matters for the company: {{why_it_matters}}
  - What changes for employees as a result: {{what_changes}}
  - The one feeling the CEO wants the team to take away: {{intended_feeling}}
  - Sensitive topics or things to handle with care: {{sensitivities}}
  - Length target: {{length}} (short: ~150 words; medium: ~300; long: ~500)

  Write the email. Structure:

  ## Subject Line
  Plain. Specific. No exclamation points.

  ## Opening
  One or two sentences. Lead with the news, not "I hope this finds you well." If the topic is hard news, do not bury it.

  ## The Context
  Why this matters. What changed in the world or in the business that made this happen.

  ## What This Means For You
  The "so what" for the team. If their job changes, say how. If it doesn't, say that too — uncertainty is worse than information.

  ## What Happens Next
  Specific next steps, dates, or moments. Where to ask questions. Who to talk to.

  ## Close
  No "thanks for everything you do." Close with a sentence that lands the {{intended_feeling}} — pride, urgency, calm, ambition. One sentence. Let it hit.

  Style:
  - Sounds like a person typed it. Contractions. Short sentences when they help.
  - First-person singular for the CEO's own view; "we" for the company.
  - No "incredibly excited," "amazing team," "the journey ahead."
  - Concrete details over abstractions. Names, numbers, places.
  - Match {{length}} as a target, not a hard cap.
variables:
  - "{{ceo_name}}"
  - "{{company_name}}"
  - "{{email_type}}"
  - "{{news}}"
  - "{{why_it_matters}}"
  - "{{what_changes}}"
  - "{{intended_feeling}}"
  - "{{sensitivities}}"
  - "{{length}}"
exampleInput: |
  ceo_name: Lila Hassan
  company_name: Vantage Systems
  email_type: milestone announcement
  news: closed Brookline Health, our largest contract ever ($1.2M ARR, 5-year)
  why_it_matters: validates the healthcare bet we made 18 months ago and signals we can win at the high end of the mid-market
  what_changes: nothing day-to-day for most of the company; the CS team will staff a dedicated resource for Brookline; the AI compliance module timeline matters even more now
  intended_feeling: pride and focus — this is what shipping the hard things looks like
  sensitivities: do not gloss over the AI module slip; the team that did this work has been heads-down for months and deserves direct credit
  length: medium
exampleOutput: |
  **Subject: Brookline Health is signed**

  Hi everyone,

  We signed Brookline Health on Friday afternoon. Five-year contract, $1.2 million ARR — the largest deal in the company's history.

  This one matters more than the number. Brookline is exactly the kind of customer we said we would learn to win 18 months ago when we made the call to focus on healthcare. They evaluated four vendors. They picked us, in their CIO's words, because "you were the only company that took the compliance question seriously." That sentence is the whole strategy reading itself back to us.

  Most of you are not going to see your day change because of this deal. A few of you will. Sandeep's data-warehouse-native work is the reason we passed Brookline's technical bar — the work was real and so is the credit. The CS team is going to staff a named pod for Brookline starting next week; Priya is leading it. And the AI compliance module GA in April is now the single most important thing this company is going to do, because Brookline is the first of a list of healthcare customers who need it to choose us.

  I am going to talk through the deal in detail at Wednesday's all-hands, including the AI module timeline and where we are honestly behind. If you want to ask questions before then, my office hours are open Tuesday afternoon — Joelle has the calendar.

  We said we would build a company that wins where the work is hard. This is what that looks like.

  — Lila
tips:
  - "Lead with the news. Burying the headline is the most common failure of CEO emails."
  - "Read it aloud. If a sentence sounds like LinkedIn, cut it."
  - "Name people who did the work. Generic 'thanks to the team' is worse than no thanks at all."
  - "Don't end with 'thanks for everything you do.' End with a sentence that means something."
  - "Send important emails at the start of the day, not the end. People read morning emails — evening emails get lost."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - all-hands-narrative
  - exec-memo-leadership
  - press-statement
  - internal-restructure-announcement
tags:
  - company-email
  - ceo-comms
  - announcement
  - executive-comms
  - leadership
---
