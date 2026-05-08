---
title: "Simulate advice from a personal board of advisors"
slug: trusted-advisor-simulation
function: productivity
role: decision-making
description: "Get advice on a tough decision from a simulated 'personal board' — distinct advisors who'd give you genuinely different perspectives, not consensus."
useCase: "Use this for decisions where you'd benefit from multiple perspectives but can't actually get five different mentors on a call. The point is to surface conflict between perspectives, not to find consensus."
prompt: |
  You are simulating a personal board of advisors for me on a tough decision. The point is NOT consensus — it's to surface conflict between genuinely different perspectives so I can see the decision from sides I can't see myself.

  Decision I'm wrestling with: {{decision}}
  Context: {{context}}
  What I'm currently leaning toward: {{my_lean}}
  Why I'm uncertain: {{my_uncertainty}}

  My personal board (or pick types if I leave it open): {{board_members}}
  (If I left it blank, choose 5 distinct archetypes who would genuinely disagree, e.g., "the pragmatist", "the long-term thinker", "the operator who's done this", "the contrarian", "the financial realist", "the relationship person", "the founder who's lived it")

  For each board member:

  1. THEIR ROLE / ARCHETYPE — name and what they uniquely see
  2. THEIR HONEST TAKE — 2-4 sentences in their voice on what I should do. Be specific, not generic.
  3. THE QUESTION THEY'D ASK ME — one sharp question that gets to the heart of their concern
  4. WHAT THEY'D DISAGREE WITH IN MY CURRENT LEAN — be direct; don't pull punches

  Then output:

  - WHERE THE BOARD AGREES — any consensus across advisors. If there's strong consensus, that's signal.
  - WHERE THE BOARD DISAGREES MOST — the key fault line, and what it reveals about the actual underlying decision
  - THE QUESTION I'M AVOIDING — based on the board's questions, what's the one I keep dodging
  - SYNTHESIS — your read on what the board collectively suggests, weighted honestly (not just averaged)

  Don't make all advisors agree. Don't make any of them generic. If two advisors are saying the same thing, you've underdifferentiated them.
variables:
  - "{{decision}}"
  - "{{context}}"
  - "{{my_lean}}"
  - "{{my_uncertainty}}"
  - "{{board_members}}"
exampleInput: |
  decision: Whether to take 3 months unpaid sabbatical to recover from burnout, with the risk of derailing my promotion track
  context: Senior PM, 8 years at company, recently promoted, top performer rating last cycle, savings cover 6 months of comp, partner supportive, no kids
  my_lean: Take it. I've been running on fumes for a year. But part of me thinks I'm being dramatic and this is normal corporate fatigue.
  my_uncertainty: Whether I can actually rest if I take it (will I just spiral about career?), and whether my company will quietly write me off the high-performer track
  board_members: leave open
exampleOutput: |
  THE PRAGMATIST OPERATOR (50-year-old who's run teams through cycles)
  Take it. The promotion track exists in your head more than in your company's HR system. You're a top performer; the company will figure out how to slot you when you come back, and if they don't, that tells you something. Your bigger risk is staying and underperforming for 6 more months — that costs you more than 3 months off.
  Question: "What does year three look like if you don't take this break?"
  Disagrees with your lean: They don't disagree, but they'd push back on you treating this as a "risk" — they think it's the lower-risk option.

  THE FINANCIAL REALIST
  Don't be cavalier with 3 months of comp. Run the math: 3 months of senior PM income is significant, and you may not earn it back. More importantly: is the burnout a 3-month problem or a "your job is wrong for you" problem? A sabbatical is the wrong tool if the answer is the second one.
  Question: "If you knew the burnout would return 6 months after coming back, would you still take the sabbatical?"
  Disagrees with your lean: You're framing this as recovery; they're worried it's a band-aid on a structural problem with the role itself.

  THE LONG-TERM THINKER (your retired-mentor archetype)
  At your stage, what compounds is not promotions — it's the quality of decisions you make for the next 20 years. Burnout is a body telling you it's been wrong for longer than you've admitted. Take the time. The career will sort itself.
  Question: "When you imagine yourself at 60, looking back, do you regret the sabbatical or regret not taking it?"
  Disagrees with your lean: They think your hesitation is a defense mechanism — your "am I being dramatic" voice is the burnout talking, not your actual judgment.

  THE CONTRARIAN
  Why three months? Why unpaid? You're choosing the most dramatic option because it matches the dramatic feeling of burnout — but the actual problem might solve in 4 weeks of real PTO + a role change. The sabbatical lets you avoid the harder conversation: are you in the wrong job?
  Question: "If your manager offered you 4 weeks PTO + a transfer to a different team next month, would you still want the sabbatical?"
  Disagrees with your lean: They think you're solving the wrong problem with the most expensive solution.

  THE FOUNDER WHO'S LIVED IT
  Burnout that's been building for a year doesn't recover in 3 months. You'll need to make actual changes when you come back — different boundaries, different role, different relationship to work. The sabbatical alone won't fix it; the sabbatical PLUS using it to figure out what to change will.
  Question: "What will you do differently in the first 30 days back? If you don't know, the sabbatical won't stick."
  Disagrees with your lean: Less about "should you take it" and more about "you haven't planned how to use it" — they think you're underprepared for what comes after.

  WHERE THE BOARD AGREES
  - The burnout is real and underrated by you ("am I being dramatic" — they all read this as denial)
  - 3 months of disconnection alone won't fix it — you need to come back with structural changes
  - The career risk is smaller than you fear

  WHERE THE BOARD DISAGREES MOST
  Whether the answer is a sabbatical at all — or whether the right answer is changing the role/job. The Pragmatist and Long-term Thinker say take it; the Contrarian and Financial Realist say you might be solving the wrong problem.

  THE QUESTION YOU'RE AVOIDING
  "Is this job actually wrong for me, regardless of burnout?" Three of five advisors are pointing at this question. The sabbatical lets you avoid asking it for 3 months.

  SYNTHESIS
  The board collectively says: take the time, but reframe its purpose. Not "recover so I can return to the same job" — but "step back far enough to honestly answer whether this job is right for me at all." Plan the sabbatical with that question in mind, not as a bandage. The sabbatical alone is good; the sabbatical with a structural reckoning is what actually changes the next 20 years.
tips:
  - "Pick 5 distinct archetypes — if any two advisors agree on everything, you under-differentiated them. Re-prompt."
  - "The 'question you're avoiding' is often more useful than the synthesis itself. Sit with it before deciding anything."
  - "Use real advisor archetypes from your life if you have them ('what would Janet say' often unlocks more than 'what would a CFO say')."
  - "Don't average the advice. Weight it. The pragmatist and the contrarian rarely deserve equal weight on a given decision."
  - "Re-run with one advisor swapped out (e.g., add 'the version of me from 5 years ago'). The blind spots shift."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - reversible-vs-irreversible-decision
  - decision-options-expansion
  - pre-mortem-prompt
tags:
  - decision-making
  - advice
  - perspectives
  - frameworks
  - mentorship
---
