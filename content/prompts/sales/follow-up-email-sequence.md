---
title: "Write a 3-email follow-up sequence after no reply"
slug: follow-up-email-sequence
function: sales
role: sdr
description: "Generate a 3-touch follow-up sequence for cold outreach that went unanswered, each with a distinct angle to earn a response."
useCase: "Use this prompt after your initial cold email receives no reply. Most responses come on follow-up touch 2 or 3 — this prompt generates a complete sequence with different value angles so you're not just sending 'just checking in' bumps."
prompt: |
  You are a B2B sales expert who knows that follow-up emails are where most deals start. Write a 3-email follow-up sequence for a prospect who did not reply to an initial cold email.

  Context:
  - Prospect name: {{prospect_name}}
  - Prospect title: {{prospect_title}}
  - Company: {{company_name}}
  - Industry: {{industry}}
  - Original email topic / pain point: {{original_pain_point}}
  - Your product/service: {{your_product}}
  - A piece of relevant content or resource you can offer: {{content_asset}} (e.g., a case study, benchmark report, or short video)

  Write 3 follow-up emails with these specific strategies:

  Email 2 (send 3–4 days after Email 1):
  - New angle: add value by sharing {{content_asset}} or a relevant insight — do NOT just say "following up on my last email"
  - Keep it to 4–6 sentences max
  - Make the CTA slightly different from Email 1 (e.g., ask a yes/no question instead of requesting a call)

  Email 3 (send 5–7 days after Email 2):
  - Use the "permission to close" or "last touch" approach — be direct that this is your final outreach
  - Keep it to 3–4 sentences
  - Leave the door open without being needy
  - Make it easy for them to say "not interested" or "not now"

  Email 4 (send 2 weeks after Email 3 — the "breakup" email):
  - Ultra-short: 2–3 sentences max
  - Assume they're not interested but give one last opening
  - Reference something current or timely if possible
  - No CTA — just an open door

  For each email: write the subject line (should not say "Following up" or "Checking in"), the body, and a one-line note on the strategy.

  Tone across all: confident, human, not desperate. Shorter is better. Never grovel.
variables:
  - "{{prospect_name}}"
  - "{{prospect_title}}"
  - "{{company_name}}"
  - "{{industry}}"
  - "{{original_pain_point}}"
  - "{{your_product}}"
  - "{{content_asset}}"
exampleInput: |
  prospect_name: Jamie
  prospect_title: VP of Engineering
  company_name: Crestline Software
  industry: B2B SaaS
  original_pain_point: engineering team spending too much time on infrastructure instead of product
  your_product: cloud infrastructure automation platform
  content_asset: a 5-minute benchmark report showing how SaaS companies at 150-300 employees spend engineering time
exampleOutput: |
  Email 2 — Subject: How Crestline's peers spend engineering time

  Hi Jamie,

  Thought this might be useful regardless of whether we talk — it's a quick benchmark showing how SaaS companies at your stage typically split engineering time between infra and product. The gap is usually surprising.

  [Link to report]

  Quick yes/no: is the infra-vs-product split a live conversation on your team right now?

  — [Name]

  Strategy: Value-first follow-up. Gives something useful before asking for anything. Yes/no question is low friction.

  ---

  Email 3 — Subject: Last thought on this

  Hi Jamie,

  I've sent a couple of notes — clearly the timing isn't right or this isn't a priority. Totally fair.

  If that changes — especially as you scale past the next hiring round — happy to pick this back up. I'll leave it there for now.

  — [Name]

  Strategy: Permission-to-close. Respects their time, removes pressure, leaves a clean re-entry point.

  ---

  Email 4 — Subject: Crestline

  Hi Jamie — saw you shipped [recent release/feature]. Congrats.

  Still here if the infra time sink ever becomes the conversation. No need to respond if it's not.

  — [Name]

  Strategy: Breakup email with a genuine observation. Ultra-short. No ask. The easiest email to reply to because there's nothing to reply to.
tips:
  - "Never use 'Just following up' or 'Checking in' as your subject line — they signal low effort and get ignored."
  - "Space your emails: 3–4 days, then 5–7 days, then 2 weeks. Tighter than that feels aggressive; longer and you've lost the thread."
  - "Email 2's value add should be something they'd want even if they never buy from you. A generic 'I thought you might like our case study' doesn't count."
  - "The breakup email often gets the highest reply rate in the sequence — people respond to honesty and brevity."
  - "After running this prompt, ask Claude to write 3 alternate subject lines for each email so you can A/B test."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cold-outbound-cto-email
  - cold-outbound-vp-sales
  - deal-close-email
tags:
  - outbound
  - email
  - follow-up
  - sequence
  - cold-outreach
---
