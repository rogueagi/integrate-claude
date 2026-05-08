---
title: "Generate an agenda for a cofounder weekly 1-on-1"
slug: cofounder-weekly-1-1-agenda
function: founder
role: cofounder
description: "Build a focused weekly cofounder 1:1 agenda that surfaces friction early, tracks decisions, and prevents the silent drift that destroys cofounder relationships."
useCase: "Use this every week before your cofounder 1:1. Most cofounder pairs claim to talk constantly but never actually have a structured conversation. The result is small frictions that compound. A 45-minute weekly 1:1 with a real agenda — the same five sections every week — is one of the highest-ROI rituals a founding team can build."
prompt: |
  You are a chief of staff for a cofounder pair. You know what a great weekly cofounder 1:1 looks like — it's not a status update meeting. It's a relationship and decision meeting. The status updates happen elsewhere.

  Generate this week's agenda.

  Cofounders: {{cofounders}}
  Week of: {{week_of}}
  Last week's open items still in progress: {{open_items}}
  Decisions made between us this week (any size): {{decisions_made}}
  Decisions coming up that need both of us: {{decisions_upcoming}}
  Tensions, frustrations, or "I've been meaning to bring up" items from either side: {{tensions}}
  Energy / personal context for each cofounder: {{personal_context}}
  Big company priorities this month: {{monthly_priorities}}

  Build a 45-minute agenda with these sections:

  1. **Check-in (5 min)** — each cofounder, in 1-2 sentences, names their energy and one thing on their mind. No problem-solving. Just calibration.

  2. **Open items from last week (5 min)** — quick run through what was open, what closed, what's still in progress. Anything stuck?

  3. **Decisions needing both of us (15 min)** — surface the upcoming decisions and walk through them. For each: what's the decision, who's leaning what way, what would change our mind, when does it need to be resolved. Don't decide here unless it's clear — capture the state.

  4. **Tensions or "I've been meaning to bring up" (10 min)** — explicit time for the items that don't fit elsewhere. This is the highest-leverage section. If there's nothing, ask twice ("really? nothing?") before moving on.

  5. **Forward look + commitments (10 min)** — top 1-2 priorities each for the week, anything where we need each other, anything coming next week we should start prepping for.

  Output the actual agenda with concrete items in each section, drawn from the inputs. Where the inputs suggest something to address, put it explicitly into the relevant section. If you see a topic that should be in section 4 (tensions) that the inputs didn't surface, flag it as a potential prompt.

  Keep the agenda lean. The point is the conversation, not the doc.
variables:
  - "{{cofounders}}"
  - "{{week_of}}"
  - "{{open_items}}"
  - "{{decisions_made}}"
  - "{{decisions_upcoming}}"
  - "{{tensions}}"
  - "{{personal_context}}"
  - "{{monthly_priorities}}"
exampleInput: |
  cofounders: Maya & Jordan
  week_of: May 6, 2026
  open_items:
    - Decision on whether to move forward with the contractor scope
    - SOC2 vendor selection (3 finalists)
    - Hiring brief for first AE (waiting on Jordan's draft)
  decisions_made:
    - Decided to delay the pricing page redesign 2 weeks
    - Approved the offer to Priya for senior eng role
  decisions_upcoming:
    - Whether to take the Acme Corp deal at a steep discount or hold the line on price
    - Q3 product priorities — new onboarding flow vs. enterprise SSO
    - Whether to attend the industry conference in June ($8k all-in)
  tensions:
    - Maya feels Jordan committed to a customer feature without checking
    - Jordan feels meetings are running long and want to compress
  personal_context:
    - Maya: tired, partner traveling this week, kid had a cold
    - Jordan: high energy, just back from a productive customer week
  monthly_priorities:
    - Hit $40k MRR
    - Close the Patagonia expansion
    - Get SOC2 kicked off
    - Hire first AE
exampleOutput: |
  COFOUNDER 1:1 — Maya & Jordan
  Week of May 6, 2026 | 45 minutes

  1. CHECK-IN (5 min)
  - Maya: low-energy week, partner traveling, kid sick. Bring this up so Jordan knows the bandwidth situation.
  - Jordan: high energy off a good customer week. Be aware of the energy mismatch — don't steamroll.

  2. OPEN ITEMS FROM LAST WEEK (5 min)
  - AE hiring brief: Jordan, where is this? If not done by Friday, it's blocking and we need to either resource or descope.
  - Contractor scope decision: still open. Settle today.
  - SOC2 vendor selection: 3 finalists still. Pick by end of week.
  - Closed: pricing page redesign delay (decided), Priya offer (sent).

  3. DECISIONS NEEDING BOTH OF US (15 min)

  a) Acme Corp pricing
  - The decision: take the discount and close, or hold and risk losing.
  - Question: how steep is "steep"? At what discount level does this stop being a customer and start being a precedent we regret?
  - What would change our mind: have we asked them what they actually need (annual upfront? smaller scope?) before discounting on price?
  - Resolve by: end of this 1:1 if possible, otherwise by Wednesday.

  b) Q3 product priorities — onboarding vs. enterprise SSO
  - This is the big one. Onboarding helps SMB activation; SSO unblocks enterprise.
  - Maya leaning: SSO (we keep losing enterprise on it).
  - Jordan leaning: onboarding (better data, faster impact, retains customers we already have).
  - Don't decide today. Set a 2-hour working session next week with the data in front of us.

  c) Industry conference ($8k)
  - This is a small decision being treated as big. Default: skip unless one of us has a specific case for ROI by Friday.

  4. TENSIONS / "I'VE BEEN MEANING TO BRING UP" (10 min)

  Two named items — both real, both worth time:

  a) Maya: Jordan committed to a customer feature without checking.
  - Specifically what was committed, on what call, to whom?
  - The conversation isn't about this one feature — it's about the protocol going forward. Use the R&R doc as the anchor.
  - Goal: leave this meeting with a concrete protocol (e.g., "any committed scope or timeline gets a 5-min back-channel ping before going to the customer in writing").

  b) Jordan: meetings are running long.
  - Which meetings specifically? Is it our 1:1, the all-hands, or customer calls?
  - Concrete proposal: what would each of us cut to compress?

  Potential prompt (not in inputs but worth noting): the energy mismatch this week (Maya tired, Jordan flying) is the kind of week where misunderstandings happen. If you have a hard conversation today, slow down.

  5. FORWARD LOOK + COMMITMENTS (10 min)

  Top priorities each:
  - Maya: SOC2 vendor selection finalized + onboarding-vs-SSO data prep.
  - Jordan: Acme Corp resolved + AE hiring brief shipped.

  Where we need each other:
  - Acme Corp call Friday — Jordan running it, Maya on standby for technical questions only.
  - SOC2 vendor pick — Maya proposes, Jordan signs off.

  Coming next week:
  - The 2-hour Q3 priorities working session.
  - Patagonia expansion conversation — schedule it.

  END NOTE
  This is a heavier agenda than usual. If we get through 1, 2, 3a, and 4a, that's a good meeting. The rest can wait or move to async.
tips:
  - "Run this 1:1 at the same time every week — even (especially) when there's nothing pressing. The week you skip it is the week you needed it most."
  - "The 'tensions' section is the entire reason this meeting exists. If you're consistently skipping it because 'nothing came up,' you're either lying to each other or the meeting is too short."
  - "Capture decisions in writing within 24 hours, somewhere both of you can find later. Memory is unreliable; resentment is not."
  - "Watch for energy mismatches. The week one of you is exhausted and the other is energized is the week miscommunication is most likely. Slow down."
  - "Don't use this meeting for status updates — that's what async tools are for. This meeting is for the conversation that doesn't happen anywhere else."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - cofounder-roles-document
  - cofounder-conflict-conversation-prep
  - solo-founder-weekly-priorities
tags:
  - cofounder
  - meeting-agenda
  - 1-on-1
  - rituals
  - alignment
---
