---
title: "Expand a binary decision into a wider option set"
slug: decision-options-expansion
function: productivity
role: decision-making
description: "Take a yes/no decision and expand it into 4-6 real options with tradeoffs — because most binary decisions are false binaries."
useCase: "Use this when you've framed a decision as 'should I do X or not.' That framing usually hides better options. The model will surface the third, fourth, and fifth paths you didn't consider."
prompt: |
  You are expanding my binary decision into a wider option set. Most "yes/no" decisions are false binaries — the right answer is often option C, D, or E that I haven't articulated. Your job is to surface them.

  My current framing of the decision: {{binary_decision}}
  Context: {{context}}
  What's driving the decision (the underlying goal): {{underlying_goal}}
  Constraints I have to respect: {{constraints}}
  Things I've already ruled out and why: {{ruled_out}}

  Generate 4-6 options including but not limited to my original two. For each:

  1. NAME — short label for the option (3-5 words)
  2. WHAT IT IS — one sentence describing the option concretely
  3. WHO TYPICALLY CHOOSES THIS — what kind of person/situation makes this the right choice
  4. KEY TRADEOFF — what you give up by picking this
  5. SIGNAL THIS IS RIGHT FOR ME — what about my context/constraints points to this
  6. SIGNAL THIS IS WRONG FOR ME — what about my context/constraints points away

  Then output:
  - SECOND-ORDER OPTIONS — the 1-2 options I most likely haven't considered (mark them clearly)
  - WHAT THE BINARY HID — what about my framing as "X or not X" was obscuring better choices
  - RANKED RECOMMENDATION — your top 2 options for me, with the call on which I should weigh more
  - DISQUALIFYING QUESTIONS — 2-3 specific questions that would let me eliminate options quickly

  Don't be balanced for the sake of balance. If my original yes/no framing was reasonable, say so — but only after you've genuinely tried to find better options.
variables:
  - "{{binary_decision}}"
  - "{{context}}"
  - "{{underlying_goal}}"
  - "{{constraints}}"
  - "{{ruled_out}}"
exampleInput: |
  binary_decision: Should I quit my current PM job to join a Series A startup as Head of Product?
  context: 5 years PM experience, currently senior PM at a 200-person SaaS, the startup is 12 people post-Series A, comp would be 30% lower base + 1% equity
  underlying_goal: Faster career growth and more ownership; tired of feeling like an executor not a strategist
  constraints: Mortgage and one kid, can take ~6 months of comp risk if needed, partner supportive but cautious
  ruled_out: Going founder myself (not the right idea or the right time); switching to a non-PM role
exampleOutput: |
  OPTION 1: TAKE THE STARTUP JOB AS-IS
  What it is: Accept the Head of Product offer at the Series A.
  Who chooses this: People who want a step-change in scope and trust the founders/market.
  Key tradeoff: Base comp drop + concentration risk + likely 60+ hour weeks in year one.
  Signal it's right: You're explicit that ownership > comp; partner is supportive; you have 6 months runway.
  Signal it's wrong: You haven't said you love the founders or believe deeply in the market. Equity is worthless without conviction.

  OPTION 2: STAY AND ENGINEER A DIRECTOR PROMOTION
  What it is: Negotiate explicit promotion criteria + a stretch project at your current company.
  Who chooses this: People whose career complaint is "ownership" but the underlying issue is internal positioning.
  Key tradeoff: Slower growth, possible disappointment if promotion doesn't materialize.
  Signal it's right: Your stated stuck point is "feels like executor not strategist" — that can sometimes be solved by mandate, not by changing companies.
  Signal it's wrong: If you've been here 3+ years and the gap to director hasn't moved, the system isn't going to move for you.

  OPTION 3: TAKE THE STARTUP JOB BUT NEGOTIATE BASE UP / EQUITY DOWN
  What it is: Accept but propose 80% of current base instead of 70%, in exchange for slightly less equity (e.g., 0.7%).
  Who chooses this: People with constraints (mortgage, kid) who can't fully tolerate the comp drop.
  Key tradeoff: Less upside if the company exits big.
  Signal it's right: Your constraints (mortgage, kid) are real; equity at 1% vs 0.7% is small in absolute outcome distribution; base reduces real risk now.
  Signal it's wrong: If founders flinch at the negotiation, that's signal about their style.

  OPTION 4: SECOND CHOICE — DIFFERENT STARTUP, SAME PROFILE [SECOND-ORDER]
  What it is: Don't take this offer; spend 3 months actively looking at other Head of Product roles at companies you'd be more excited about.
  Who chooses this: People whose underlying goal is the role, not this specific opportunity.
  Key tradeoff: Time cost; no guarantee a better offer exists; this offer disappears.
  Signal it's right: You're treating this as "the offer I have" rather than "the offer I want." Fear of losing it ≠ excitement about it.
  Signal it's wrong: You've described this opportunity warmly — you may be talking yourself out of a yes.

  OPTION 5: STAY + CONSULT ON THE SIDE [SECOND-ORDER]
  What it is: Stay at current job; advise the Series A as a fractional product advisor (5 hrs/week) for 0.25% equity, 6-month engagement.
  Who chooses this: People testing whether they'd actually like startup chaos before committing.
  Key tradeoff: Time tax; can't deeply own; potentially conflict-of-interest with current employer.
  Signal it's right: You'd learn whether you actually want this without burning the bridge.
  Signal it's wrong: If founders reject this, it tells you they need a full-time leader (which is fair, and reframes your decision).

  OPTION 6: TIME-BOUNDED INTERNAL MOVE
  What it is: Tell your VP you want a director-track stretch with a 6-month timeline; if it doesn't materialize, leave (with eyes open).
  Who chooses this: People who want to give the current company a fair last shot but with a deadline.
  Key tradeoff: Could feel like an ultimatum; if it goes poorly your relationship cools.
  Signal it's right: You haven't actually given the current company a clear "now or never" yet.
  Signal it's wrong: If you've already had this conversation and it didn't move, repeating it is wasted.

  WHAT THE BINARY HID
  Your framing as "take the job or not" obscured: (a) the fractional/advisor path, (b) the negotiation lever on base vs equity, and (c) the option of pursuing a different similar role with a clearer fit. The binary frame also assumes this offer is your only path to "Head of Product" — it's not.

  RANKED RECOMMENDATION
  1. Option 5 (advise on the side) IF founders are open. It's the cheapest information you can buy about whether this team and market are right.
  2. Option 3 (take it, negotiate). If 5 isn't on the table, this is the version of yes that respects your constraints.
  Bias: lean toward Option 5 first. Founders who refuse it are telling you something about their flexibility.

  DISQUALIFYING QUESTIONS
  1. Do you actually believe in this market 5 years out? If "I'm not sure" — Option 4 or 5, not 1 or 3.
  2. Are the founders people you'd follow without the title? If no — none of the startup options are right.
  3. If your VP told you tomorrow that you'd be director in 6 months, would you still want to leave? If yes — staying isn't the answer; the role at current company isn't the issue.
tips:
  - "Always ask the model to surface 'second-order' options. Those are the ones that change the decision."
  - "The 'what the binary hid' section is the highest-value output. Most binaries hide a third path you'd take if you saw it."
  - "Use the disqualifying questions to compress weeks of agonizing into a 30-minute conversation with yourself."
  - "If your binary is 'do X or stay the same,' the third path is almost always 'do a smaller version of X to learn first.'"
  - "Re-run the prompt with different framing of the underlying goal. Same decision can yield very different option sets depending on the goal."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - reversible-vs-irreversible-decision
  - pre-mortem-prompt
  - trusted-advisor-simulation
tags:
  - decision-making
  - options
  - frameworks
  - strategy
  - thinking
---
