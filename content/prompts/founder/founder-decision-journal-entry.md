---
title: "Write a structured decision journal entry for a major founder call"
slug: founder-decision-journal-entry
function: founder
role: solo-founder
description: "Capture the reasoning behind a major founder decision so you can audit it later — separating signal from rationalization, and naming the assumptions that would change your mind."
useCase: "Use this when you make a non-trivial decision (a hire, a pivot, a no-go on a deal, a pricing change). Founders make hundreds of decisions and remember almost none of the reasoning a year later. A decision journal is the single highest-leverage habit for getting better at judgment over time. This prompt gives you a structured entry that is honest about uncertainty."
prompt: |
  You are a thoughtful interviewer helping me write a decision journal entry. The point is not to justify the decision — it's to capture the actual reasoning so future-me can audit it.

  Decision context:

  The decision: {{decision}}
  Date: {{date}}
  Status: {{status}} (decided / leaning / in deliberation)

  My current thinking on the decision:
  {{current_thinking}}

  What I know (facts I'm confident in):
  {{known_facts}}

  What I'm assuming (beliefs that could be wrong):
  {{assumptions}}

  What would change my mind:
  {{disconfirming_evidence}}

  Counterfactual — what would I do if this option weren't available:
  {{counterfactual}}

  Emotional state right now:
  {{emotional_state}}

  Who I've consulted:
  {{consulted}}

  Generate a clean decision journal entry with this structure:

  1. **Decision** — one-sentence statement of what's being decided.
  2. **Date and decision-time confidence** — date plus a 1-10 confidence I'll feel good about this in 12 months.
  3. **The choice** — what I'm choosing, including any specific terms.
  4. **The reasoning (steel-man)** — the strongest 3-4 reasons for the choice.
  5. **The reasoning (anti-steel-man)** — the strongest 2-3 reasons against, that I'm choosing to override.
  6. **Key assumptions** — list each load-bearing assumption with a confidence rating (high/medium/low).
  7. **Disconfirming signals** — what specific evidence would tell me I got it wrong, and by when I'd see it.
  8. **What I'd do if this option vanished** — the counterfactual, named clearly.
  9. **Emotional flags** — am I deciding from fear, optimism, fatigue, ego, FOMO? Name it honestly.
  10. **Review date** — when I should re-read this entry to evaluate the decision.

  Keep it under 600 words. Don't soften my honest inputs to make me sound smarter.
variables:
  - "{{decision}}"
  - "{{date}}"
  - "{{status}}"
  - "{{current_thinking}}"
  - "{{known_facts}}"
  - "{{assumptions}}"
  - "{{disconfirming_evidence}}"
  - "{{counterfactual}}"
  - "{{emotional_state}}"
  - "{{consulted}}"
exampleInput: |
  decision: Whether to hire our first full-time AE or stay founder-led on sales for another 6 months
  date: 2026-05-08
  status: leaning toward hiring, 80% there
  current_thinking: I'm spending 60% of my time selling, the pipeline is real, and I think a good AE could carry it. But cash is tight — we have 9 months of runway and an AE adds $20-25k/month all-in.
  known_facts:
    - 9 months runway
    - Founder-closed 11 of last 12 deals
    - ACV is ~$24k
    - Sales cycle ~6 weeks
    - Inbound has been steady for 3 months (8-12 quality demos/month)
  assumptions:
    - A good AE can ramp to closing in 60-90 days
    - The product is sufficiently sticky that an AE can sell it without me on every call
    - Inbound flow will continue
    - I can hire an AE who actually works at this stage
  disconfirming_evidence:
    - If a hired AE can't close any of their first 5 inbound demos at all, that tells me product or pricing is broken — not the AE
    - If inbound drops below 5 demos/month for 2 months, the cost of carrying an AE is unjustifiable
  counterfactual: If I couldn't hire, I'd cut my engineering time and go full sales for another quarter while building hiring leverage
  emotional_state: tired of selling, slightly afraid of hiring my first sales person, FOMO from a peer founder who hired and 'unlocked everything'
  consulted: cofounder, two advisor calls, one sales-leader friend
exampleOutput: |
  DECISION JOURNAL ENTRY

  1. Decision
  Hire first full-time AE now vs. stay founder-led 6 more months.

  2. Date and confidence
  May 8, 2026. Decision-time confidence I'll feel good about this in 12 months: 6/10. Honest read: I'm not sure, but the cost of waiting is now visible.

  3. The choice
  Hire the first AE. Target offer: $90-110k base, $180-220k OTE, 0.25-0.5% equity. Hire by July 1. Six-month evaluation milestone built into the offer conversation.

  4. The reasoning (steel-man)
  - Founder-led sales is at a real ceiling. 60% of my time, 11/12 deals — I'm the bottleneck, not the demand.
  - Pipeline shape supports it. Steady inbound (8-12 demos/mo for 3 months) and 6-week cycle means an AE can ramp inside 90 days on real, predictable volume.
  - $24k ACV is high enough that 4-5 closed deals pay for the AE.
  - I need my time back for product and fundraising. Both are higher-leverage uses of founder hours than the next demo.

  5. The reasoning (anti-steel-man)
  - 9 months of runway is tight. An AE adds ~$22k/mo and ramps to productivity in 90 days minimum. If they don't produce, runway becomes 6 months and I'm in panic territory.
  - First sales hire is the highest-risk hire at this stage. If I hire wrong it costs 4 months and a serious chunk of cash.
  - "Founder peer unlocked everything" is FOMO, not data. My business is not their business.

  6. Key assumptions (load-bearing)
  - I can find an AE who works at this stage. Confidence: medium. Hiring early-stage AEs is famously hard.
  - Inbound continues at 8+ demos/mo. Confidence: medium-high. 3 months of data, but small sample.
  - The product is sellable without me on every call. Confidence: medium. I haven't actually tested this — I'm always on the calls.
  - 60-90 day ramp. Confidence: low. Most AEs ramp slower than founders predict.

  7. Disconfirming signals (and by when)
  - AE closes 0 of their first 5 inbound demos by day 75. Action: that's a product/pricing/ICP problem, not an AE problem. Pull AE off and diagnose.
  - Inbound drops below 5 demos/mo for 2 consecutive months. Action: re-evaluate the hire economics; possibly let AE go.
  - I find myself still on >50% of demos at day 60. Action: I'm not actually delegating — coach myself out, or admit the hire was premature.

  8. Counterfactual
  If I couldn't hire, I'd go heads-down on sales for another quarter, cut my engineering hours to ~5/week, and use the breathing room to build a hiring brief and warm-source candidates. That option is real and not catastrophic. The fact that it's tolerable is a useful tell.

  9. Emotional flags
  Honest reading: tired of selling (real, but a bad reason to hire), FOMO from peer founder (suspect), slight fear of managing a sales person (also a bad reason to delay). The decision is mostly rational but I'm aware fatigue is sweetening it. Worth flagging.

  10. Review date
  August 8, 2026 (90 days). Re-read this entry. Evaluate against the disconfirming signals. Update.
tips:
  - "The point of a decision journal is calibration over time. Re-read your entries 6-12 months later. You'll find you were systematically over-confident in some kinds of decisions and under-confident in others. That's the gold."
  - "Always name what would change your mind. If you can't name disconfirming evidence, you haven't actually made a reasoned decision — you've made an emotional one."
  - "Be honest about emotional state. Tired/FOMO/ego/fear are real inputs. Naming them doesn't invalidate the decision; pretending they're not there does."
  - "The counterfactual is the most underused field. If the alternative is tolerable, the decision is rarely as urgent as it feels."
  - "Don't share decision journal entries with your team unprompted — they're for calibration, not communication. Share the decision, not the doubt."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - solo-founder-weekly-priorities
  - cofounder-conflict-conversation-prep
  - investor-objection-rebuttal
tags:
  - decision-making
  - judgment
  - reflection
  - solo-founder
  - calibration
---
