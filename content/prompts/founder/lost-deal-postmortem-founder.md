---
title: "Postmortem on a lost deal where the founder was the seller"
slug: lost-deal-postmortem-founder
function: founder
role: founder-sales
description: "Run a structured postmortem on a deal you lost — separating what was fixable from what wasn't, and extracting the one or two changes you'll make for the next 10 deals."
useCase: "Use this within 48 hours of every lost deal in the first 30-50 sales calls. Founders learn slowly when they don't postmortem and treat every loss as 'they weren't a fit.' Most lost deals teach you something specific about your ICP, your discovery, your pricing, or your timing — but only if you actually look. This prompt produces a clean postmortem you can review monthly to spot patterns."
prompt: |
  You are an experienced sales operator who has done postmortems on hundreds of lost deals. You know that the first explanation a founder gives for a loss is usually wrong, and that the second-or-third explanation is where the lesson lives. Push me past the first answer.

  The deal:

  Account: {{account_name}}
  Industry / segment: {{segment}}
  Approximate ACV that was on the table: {{acv}}
  Time from first contact to lost decision: {{cycle_length}}
  Source (inbound, outbound, intro): {{source}}
  Stage when lost (first call / mid-cycle / final stage): {{lost_stage}}
  Stated reason for loss (what they told me): {{stated_reason}}
  My honest gut on the real reason: {{honest_gut}}
  Competitor (if known): {{competitor}}
  What I did well in the deal: {{did_well}}
  What I'd do differently: {{differently}}
  Other context (champion went silent, procurement issue, pricing, etc.): {{context}}

  Run the postmortem with these sections:

  1. **The deal in one paragraph.** Neutral summary of what happened, written third-person.

  2. **Stated vs. real reason.** What they told me vs. what most likely actually happened. Push past the polite reason — buyers rarely tell founders the truth about why they passed.

  3. **Was this an ICP miss?** Specific test: was this account a real fit on size, segment, persona, and use case? Or did I push a deal that shouldn't have been a deal?

  4. **Where did the deal break, exactly?** Pinpoint the moment — the call, the email, the moment of silence — where the deal turned. Most lost deals have a specific inflection point, not a slow drift.

  5. **What I controlled and missed.** 2-4 specific things in my control that, if done differently, might have changed the outcome.

  6. **What I didn't control.** 1-2 things outside my control (competitor's existing relationship, internal politics, timing).

  7. **The one fixable pattern.** If this is a pattern (look at recent losses), what's the single change for the next 10 deals?

  8. **Should I try to revive this deal?** Specific recommendation. If yes, what's the angle and timing. If no, what's the graceful close-out message.

  Be direct. Don't let me off the hook on "they just weren't a fit" if the data says I lost it because I demoed before discovery was done.
variables:
  - "{{account_name}}"
  - "{{segment}}"
  - "{{acv}}"
  - "{{cycle_length}}"
  - "{{source}}"
  - "{{lost_stage}}"
  - "{{stated_reason}}"
  - "{{honest_gut}}"
  - "{{competitor}}"
  - "{{did_well}}"
  - "{{differently}}"
  - "{{context}}"
exampleInput: |
  account_name: Westfield Apparel
  segment: 600-employee apparel manufacturer, 3 sites
  acv: $72k (3 sites)
  cycle_length: 8 weeks
  source: Outbound — I cold-emailed the VP of Ops, got a meeting
  lost_stage: Final stage — they were going to sign and went silent for 2 weeks, then said "we're going to build internally"
  stated_reason: "We've decided to build internally" — said by the VP of Ops in a 4-line email
  honest_gut: I think they got cold feet on price and the VP of Ops didn't want to fight for it internally because IT pushed back at the last minute. The "build internally" line feels like a face-saving cover.
  competitor: None we know of — but I think IT may have proposed a build alternative
  did_well: I had a clear discovery, ran a good demo, the user (DC manager at one site) was a strong champion. Patagonia reference call landed well.
  differently: I never got a real conversation with IT. I assumed the VP would handle that internally, and it bit us at the end. I also might have mispriced — $72k might have been too high relative to perceived value.
  context: VP of Ops went silent for 2 weeks before the final no. The DC manager (champion) actually emailed me apologetically saying she was sad it didn't work out.
exampleOutput: |
  POSTMORTEM — Westfield Apparel ($72k, 8 weeks, lost at final stage)

  THE DEAL IN ONE PARAGRAPH
  Westfield Apparel was a 600-person, 3-site outbound deal sourced via cold email to the VP of Ops. Discovery, demo, and reference checks went well; a DC manager at one site became a strong champion. The deal moved to final stage with a verbal commit, then the VP went silent for 2 weeks before sending a 4-line email saying they'd build internally instead. The champion later emailed apologetically — confirming the decision wasn't hers and that she was disappointed.

  STATED vs. REAL REASON

  Stated: "We've decided to build internally."

  Real (most likely): IT or finance pushed back on a $72k spend in the final stretch, and the VP didn't have enough conviction or political capital to fight for it. "Build internally" is the polite cover that lets them avoid telling you the real story. Three signals point to this:
  1. They went silent for 2 weeks — that's typically internal political turbulence, not a clean decision.
  2. The champion was disappointed and surprised — meaning the decision was not made by the user-facing team.
  3. "Build internally" at a 600-person apparel manufacturer that has never built operational software before is highly unlikely to actually happen. It's a face-saving exit.

  WAS THIS AN ICP MISS?

  No. 600 employees, 3 sites, apparel — this is squarely your ICP. The deal didn't fail because they weren't a fit. It failed because of process.

  WHERE DID THE DEAL BREAK, EXACTLY?

  The 2-week silence after verbal commit. That's the inflection point. Specifically: the moment between "we're going to do this" and "build internally" is where you needed to be in the room — and you weren't, because you didn't have IT or finance on the relationship map. Once the silence started, the deal was already lost; you just didn't know yet.

  WHAT YOU CONTROLLED AND MISSED

  1. **You never got a conversation with IT.** This is the #1 lesson. You assumed the VP would handle it. At a 600-person company with multi-site rollout and $72k in spend, IT will weigh in — and at the end. You needed to ask "who from IT will need to look at this, and can I meet with them now?" by week 3, not week 8.

  2. **You didn't pre-empt the price objection.** $72k is real money for a mid-market 3-site rollout. You didn't anchor on the cost of the alternative ("you're spending $X today on this problem already") or pre-empt the build-it-internally framing ("here's why companies like yours have tried that and stopped").

  3. **You didn't have a multi-threaded relationship.** The deal lived on the VP and the DC manager. When the VP went quiet, you had no one else to call. A multi-threaded deal at this size has the VP, an operations peer, and at least one IT contact.

  4. **You didn't get the verbal commit in writing within 24 hours.** A "we're going to do this" without a signed pilot agreement or term sheet within 24 hours is not a commit — it's an intention. Intentions decay.

  WHAT YOU DIDN'T CONTROL

  - Internal politics at Westfield. Sometimes a VP loses a fight. You can reduce the probability with multi-threading, but you can't eliminate it.
  - The build-internally framing — this is a 600-person company's internal narrative that you can't fully change from the outside.

  THE ONE FIXABLE PATTERN

  Look at the last 5 lost deals: how many were lost between verbal commit and signature? If 2 or more, you have a "post-verbal collapse" pattern, and the fix is universal:

  - From now on, by the end of week 4 in any deal $50k+, ask: "Who from IT, security, or procurement will need to look at this? Can I meet with them in the next 2 weeks, before we finalize?" Make this a non-negotiable in your sales process.

  This single change probably saves 30-40% of late-stage losses at this segment.

  SHOULD YOU REVIVE THIS DEAL?

  Yes — but not now, and not on price. Wait 90 days. Then send a specific note to the DC manager (your champion) that's not asking for the deal, asking how she's doing. Build the relationship there. In 6-9 months, when "build internally" hasn't happened and the pain is back, she'll re-surface you. Don't push the VP — the VP is who killed the deal, and they'll do it again unless something material changes (new VP, sharper pain, new mandate).

  Graceful note to send to the VP this week:
  "Thanks for the consideration. Totally respect the decision. If anything changes in the next 6-12 months — happy to be a sounding board on the build-vs-buy framing without any sales pressure. Wishing you and the team well."

  This keeps the door open without being weird, and it positions you as a trusted operator rather than a vendor with a chip.
tips:
  - "Run a postmortem within 48 hours of any lost deal in your first 30 sales calls. After 30 days, your memory of the actual signals is gone."
  - "The first reason you give for a loss is usually wrong. Force yourself to articulate a second and third explanation — the lesson is usually in the third."
  - "Look at lost deals as cohorts. One loss doesn't tell you much; 5 losses with the same fingerprint tells you exactly what to fix."
  - "When buyers tell you 'we're going to build internally,' assume that's a polite cover and ask yourself what the real story is. Real build-internally decisions are rare in mid-market."
  - "If a deal goes silent for 7+ days post-verbal-commit, that deal is at material risk. Use the silence to multi-thread, not to wait."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - founder-led-sales-call-prep
  - founder-sales-discovery-script
  - design-partner-pitch
tags:
  - sales
  - lost-deal
  - postmortem
  - founder-led-sales
  - learning
---
