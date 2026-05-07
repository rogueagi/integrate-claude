---
title: "Summarize a sales call into structured CRM notes"
slug: crm-note-summary
function: sales
role: sales-ops
description: "Convert raw call notes or transcript snippets into clean, structured CRM activity notes with next steps and deal intelligence."
useCase: "Use this prompt immediately after a sales call to transform messy call notes into structured CRM entries. Good CRM hygiene is the foundation of pipeline accuracy — this prompt makes logging fast and consistent across the entire team."
prompt: |
  You are a sales operations specialist. Convert the following raw call notes into structured, CRM-ready activity notes.

  Call details:
  - Account name: {{account_name}}
  - Contact name and title: {{contact_name}}, {{contact_title}}
  - Call type: {{call_type}} (e.g., discovery, demo, follow-up, negotiation, check-in)
  - Date of call: {{call_date}}
  - Call duration: {{call_duration}}
  - Raw notes: {{raw_notes}}

  Convert these notes into a structured CRM activity record with these sections:

  ## Call Summary (2–3 sentences)
  What was the purpose of the call, who attended, and what was the overall outcome? Write in past tense, third person.

  ## Key Discoveries / Insights
  Bullet list: What did you learn about the customer's situation, pain, timeline, budget, or decision process that you didn't know before this call?

  ## Customer's Stated Priorities
  Bullet list: What does the customer care most about? Use their language where possible, not your interpretation.

  ## Objections or Concerns Raised
  Bullet list: Any pushback, hesitation, or concerns the customer expressed, even informally.

  ## Stakeholders Mentioned
  Table or list: Name, title, and their role in the deal (champion, decision-maker, influencer, blocker) for anyone mentioned on the call.

  ## Commitments Made (Both Sides)
  - What you committed to do (and by when)
  - What they committed to do (and by when)

  ## Deal Stage Assessment
  Based on the call, what is the current deal stage and what is the evidence? If the deal has moved or stalled, note that explicitly.

  ## Recommended Next Action
  One specific next action with a suggested date. This should be actionable enough that another rep could pick up this deal and know exactly what to do next.

  Format clearly with headers. Use crisp, professional language — no filler phrases.
variables:
  - "{{account_name}}"
  - "{{contact_name}}"
  - "{{contact_title}}"
  - "{{call_type}}"
  - "{{call_date}}"
  - "{{call_duration}}"
  - "{{raw_notes}}"
exampleInput: |
  account_name: Meridian Logistics
  contact_name: Tamara Singh
  contact_title: VP of Operations
  call_type: follow-up after demo
  call_date: 2024-03-14
  call_duration: 35 minutes
  raw_notes: |
    Tamara seemed positive about the demo overall. She said the routing module is exactly what they need. Main concern was integration with their existing TMS — asked if we support FourKites. I said I'd check (we do — need to confirm with eng). She mentioned their CTO Derek wants to see the security docs before approving anything. Timeline sounds like Q2 budget cycle. They have a board meeting in April where ops goals will be reviewed — she implied this might come up there. Budget not confirmed but she didn't flinch at pricing. Asked about implementation timeline — I said 6-8 weeks. She said that works. No mention of other vendors except she asked "how do you compare to project44" — I gave a high-level answer, should prep a proper comparison. Next step: she said to send the security docs and FourKites integration info, then schedule a call with Derek.
exampleOutput: |
  ## Call Summary
  Follow-up call with Tamara Singh (VP of Operations) at Meridian Logistics on March 14, 35 minutes. Call was positive — Tamara confirmed the routing module addresses their core need. Primary open items are FourKites integration confirmation, security documentation for CTO review, and a scheduled call with CTO Derek to advance the evaluation.

  ## Key Discoveries / Insights
  - CTO (Derek) is a required approver — security documentation is his gating requirement
  - April board meeting may surface this initiative; Tamara implied ops goals will be reviewed (potential internal urgency driver)
  - Q2 budget cycle aligns with their evaluation timeline — purchase likely Q2
  - 6–8 week implementation timeline was accepted without concern
  - Project44 was mentioned as a frame of reference — competitive comparison needed

  ## Customer's Stated Priorities
  - Routing module functionality (confirmed as the core need)
  - FourKites integration (existing TMS dependency — critical to confirm)
  - Security compliance (CTO gating requirement)
  - Implementation speed (6–8 weeks acceptable)

  ## Objections or Concerns Raised
  - FourKites integration not confirmed — Tamara explicitly asked and is waiting on our answer
  - CTO has not yet been engaged; security is his bar to clear before any approval
  - Competitive question on project44 raised — current answer was informal; needs a proper response

  ## Stakeholders Mentioned
  | Name | Title | Role in Deal |
  |---|---|---|
  | Tamara Singh | VP of Operations | Champion / primary contact |
  | Derek (last name unknown) | CTO | Decision-maker / security approver |

  ## Commitments Made
  **We committed to:**
  - Confirm FourKites integration support with engineering (by EOD March 15)
  - Send security documentation package (by March 16)
  - Prepare a project44 competitive comparison (by next call)

  **They committed to:**
  - Share security docs with Derek after receipt
  - Schedule a call with Derek once docs are reviewed (Tamara to coordinate)

  ## Deal Stage Assessment
  Deal is at late-stage evaluation. Tamara is a strong champion; she's actively moving the process forward and the product fit is confirmed. Primary blocker is CTO approval, which is gated on security docs. Deal is healthy but requires fast follow-through on commitments — delay risks losing momentum before the April board meeting.

  ## Recommended Next Action
  Send security documentation and FourKites integration confirmation to Tamara by March 16. Follow up with a proposed calendar for the Derek call on March 17 if no response.
tips:
  - "Paste this immediately after the call while your memory is fresh. The quality of CRM notes degrades rapidly after 2 hours."
  - "If you have a call transcript from Gong, Chorus, or Otter, paste it directly into {{raw_notes}} — the prompt handles both raw notes and transcript snippets."
  - "The 'Stakeholders Mentioned' section is often the most valuable over time — it maps the buying committee even when you've only met one person."
  - "Share the structured output directly with your manager in your deal review. It replaces the 'how did the call go?' conversation with something actionable."
  - "Ask Claude to compare this call's output with previous call notes for the same account to identify what's changed — good for deal reviews and handoffs."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - pipeline-review-agenda
  - sales-discovery-call-prep
  - discovery-call-agenda
tags:
  - crm
  - sales-ops
  - call-notes
  - pipeline
---
