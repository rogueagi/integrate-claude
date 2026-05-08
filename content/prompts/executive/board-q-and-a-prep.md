---
title: "Anticipate and prepare for board Q&A"
slug: board-q-and-a-prep
function: executive
role: board-prep
description: "Generate the likely board questions for an upcoming meeting, with drafted answers and the strategic frame to hold while answering them."
useCase: "Use this in the 48 hours before a board meeting, after the deck and pre-read are largely done. CEOs are usually well-prepared for the topics they want to cover and underprepared for the questions the board is going to ask. This prompt closes that gap by surfacing the questions before they are asked."
prompt: |
  You are a board director who has sat on 20+ company boards and asked the questions that exposed weak preparation. Build a Q&A prep doc for {{ceo_name}}'s upcoming board meeting at {{company_name}}.

  Inputs:
  - Company and stage: {{company_name}}, {{stage}}
  - Meeting date and meeting type: {{meeting_date}}, {{meeting_type}}
  - The narrative the CEO is presenting: {{narrative}}
  - The metrics being shown — what looks good, what looks soft: {{metric_picture}}
  - The decisions or asks the CEO is making: {{decisions_asked}}
  - Known board concerns from prior meetings: {{prior_concerns}}
  - Board composition (investor leads, independents, observers): {{board_composition}}
  - The single line of questioning the CEO is most worried about: {{biggest_worry}}

  Produce a Q&A prep doc:

  ## The Frame To Hold
  Two or three sentences. The single strategic frame the CEO should hold across all questioning. When a question pulls toward defending tactics, the answer should pull back to this frame.

  ## The 12 Questions Most Likely To Be Asked
  Group into four buckets:

  **Operational Questions (3):** Specific to the metrics, the funnel, or the operational picture. Drafted answer is 2–3 sentences, anchored in data.

  **Strategic Questions (3):** Pulling on the bigger thesis — why this segment, why now, where this goes. Drafted answer is 3–4 sentences, anchored in the frame above.

  **People Questions (3):** Hires, departures, leadership team, succession, retention. Drafted answer addresses the question concretely without venting.

  **Hard Questions (3):** The questions the CEO does not want to be asked. The ones each board member is hoping someone else asks first. Drafted answer is honest, frames the response, and ends on what's being done about it.

  For each question:
  - **Q:** the question, in the voice it will likely be asked
  - **Why this gets asked:** what the board is really probing
  - **A:** the drafted answer (2–4 sentences, conversational)
  - **Pivot:** if the question is unsafe, the line that bridges back to ground the CEO controls

  ## The Question The CEO Is Most Worried About
  Address {{biggest_worry}} directly. Three drafted versions of the answer, each tuned for a different posture: defending the position, owning the gap, redirecting to the next decision. The CEO can choose which posture fits the moment in the room.

  ## The Question To Welcome
  The question the CEO actively hopes a board member asks. The drafted answer is the speech the CEO most wants to give. If no one asks it, the CEO should plant the question themselves with: "One thing I want to surface even if no one's asking..."

  ## What Not To Say
  Three things the CEO should not say in the meeting, regardless of how the questioning goes. Patterns: defensive language, premature commitments, naming individuals in front of the full board.

  Constraints:
  - Drafted answers are conversational. The CEO is talking, not reading.
  - No "we are tracking that," "great question." Engage with the substance.
  - The hardest questions get the most-honest answers. Boards remember CEOs who name gaps.
variables:
  - "{{ceo_name}}"
  - "{{company_name}}"
  - "{{stage}}"
  - "{{meeting_date}}"
  - "{{meeting_type}}"
  - "{{narrative}}"
  - "{{metric_picture}}"
  - "{{decisions_asked}}"
  - "{{prior_concerns}}"
  - "{{board_composition}}"
  - "{{biggest_worry}}"
exampleInput: |
  ceo_name: Lila Hassan
  company_name: Vantage Systems
  stage: Series B SaaS, post-Series-C, $31.6M ARR
  meeting_date: May 21, 2027
  meeting_type: regular quarterly
  narrative: hit ARR plan, slipped on AI module then shipped on the recovery date, closed Series C strong, healthcare segment compounding faster than modeled, asking the board about M&A timing
  metric_picture: ARR 105% of plan; healthcare NRR 138% (strong); blended NRR 128% (strong); AI module GA shipped on date but only 9 paying users so far; lost a $400K renewal at Greentree Medical
  decisions_asked: ratify Series C, ratify CRO grant, ratify CPO promotion, get board's view on starting active M&A scouting in healthcare-adjacent analytics
  prior_concerns: at Q4 2026 meeting, two board members raised concern about the AI module slipping and SMB self-serve drag; both have been addressed
  board_composition: 7 members — Series A lead (long-time partner, strategic), Series B lead (very metrics-focused), Series C lead (newest member, healthcare-experienced), 1 founder/CEO, 2 independents (one go-to-market, one finance), 1 observer
  biggest_worry: a board member asks why the AI module only has 9 paying users 3 weeks post-GA when the Q2 target is 18, framed as "is the module landing soft"
exampleOutput: |
  ## The Frame To Hold
  Vantage is doing the focused work that turns a healthcare bet into a healthcare moat. The Series C gives us room; the segment data tells us the bet is compounding; the next decision is about how aggressive to be on the next 12 months. Every answer should pull toward "is this the company that owns mid-market healthcare?"

  ## Operational Questions

  **Q1 (likely from Series B lead): Why did Net New ARR come in at 95% of plan if New ARR was 102%?**
  *Why this gets asked:* The Series B lead reads metrics carefully. The gap between gross and net is a question they'll spot.
  *A:* "The gap is one event — Greentree Medical, a $400K renewal we lost in March. Their parent-company acquisition triggered a procurement consolidation that we saw coming for 60 days but had no good play on. Outside of that, churn was below plan. The trend isn't soft; the quarter just had one acquisition-driven loss that doesn't repeat."
  *Pivot:* if pressed on whether other top accounts are at acquisition risk: "We track that. Top-50 accounts have an acquisition-watch flag; three are at elevated risk and we're sequencing CSM-led conversations with each."

  **Q2 (likely from Series A lead): What's the gross-to-net retention shape inside healthcare?**
  *Why this gets asked:* Probing whether the 138% healthcare NRR is real expansion or one-time bumps.
  *A:* "Gross retention in healthcare is 96%, expansion is 42% — that's where the 138% comes from. The expansion is usage-driven, not upsell-driven. Customers add modules and seats because the platform is doing more work for them, not because we're working a renewal motion. The cohort heatmap in the appendix shows it cleanly."
  *Pivot:* none needed; this is a question to lean into.

  **Q3 (likely from finance independent): Are we still on track for breakeven by end of Q4?**
  *Why this gets asked:* The breakeven commitment was made publicly at the start of the year. The finance independent will hold us to it.
  *A:* "Yes, with margin. The Series C close moved the question from 'do we hit breakeven' to 'how aggressive should we be in 2028,' which is one of the discussions on the agenda today. The base case has us at breakeven Q4; the push case extends it to Q2 2028 in exchange for a meaningfully larger ARR base."

  ## Strategic Questions

  **Q4 (likely from Series C lead): If the segment is compounding this fast, why are you not 100% healthcare today?**
  *Why this gets asked:* The Series C lead is healthcare-experienced and may push us to commit harder to the segment.
  *A:* "Most of the non-healthcare ARR is enterprise general — accounts that pre-date the focus shift and renew at high NRR. We are not adding new non-healthcare logos and have not since Q2 last year. Within 18 months the book will look like 75–85% healthcare with a long tail of legacy enterprise that we manage well, not aggressively. So we're not going more horizontal — but we are also not abandoning customers we promised to support."

  **Q5 (likely from any board member): What happens to the company if Helio launches a healthcare initiative tomorrow?**
  *Why this gets asked:* The competitive worry has been raised before. The board wants to see the muscle.
  *A:* "We have a 14-month head start on the compliance plumbing, the customer base, and the partner relationships. Their motion is PLG and marketing-led; healthcare buying is procurement-led with 18-month cycles and compliance pre-qualification. They will eventually announce a healthcare initiative — likely in the next 12 months. By the time they pivot the motion, we have 200 logos. The race is not capital. It is who spent the last three years doing healthcare-specific work."
  *Pivot:* if pressed on capital asymmetry: "Capital matters less in a procurement-led market than in a PLG one. The ROI on each dollar of theirs is lower because the buyer behavior they need to influence does not respond to capital intensity."

  **Q6 (likely from go-to-market independent): What's the EU expansion timeline?**
  *Why this gets asked:* Healthcare M&A is consolidating in the EU and the board may push earlier expansion.
  *A:* "We are not committing to EU in 2027 — the US healthcare opportunity is large enough and we are not yet the unambiguous leader here. EU goes on the 2028 plan, with structured exploration in H2 2027. The risk of moving too early is splitting attention before the US story is locked in. The risk of moving too late is real but smaller."

  ## People Questions

  **Q7 (likely from any independent): How is Sandeep doing in the CPO role?**
  *Why this gets asked:* The promotion was approved last meeting; the board will check in.
  *A:* "Strong. Skip-level survey results in April were the highest we've seen on the engineering side. Two senior engineers who had been on the fence about renewing have confirmed they're staying. The AI module ship on date — three weeks after his transition — is the operational signal that the org reshape is working. There is one open question: whether he and Jenna can co-own healthcare-product cleanly. We're watching it; no concerns yet."

  **Q8 (likely from Series A lead): Where are you on the CMO search?**
  *Why this gets asked:* It's been an open role too long and the board will press.
  *A:* "We are 11 weeks in. The bar is high — we are looking for someone who has built marketing for a healthcare-vertical SaaS company at our stage, and that is a tight pool. We have two finalists and expect to make an offer in the next four weeks. If those two don't close, we go to a fractional model with a structured handoff to a full-time hire later in the year. I'd rather hire late than hire wrong."

  **Q9 (likely from any independent): What did you learn from the SMB self-serve closure?**
  *Why this gets asked:* Six weeks out from the layoff; the board will revisit.
  *A:* "The lesson I paid the most for: a failing experiment looks identical to a working one if you only let yourself see one more test. I should have made the call two quarters earlier. The structural change — every product bet now has a pre-defined set of conditions under which it gets killed, set at the start, not negotiated at the end — is in place for current bets. We will not run another 18-month experiment without those conditions."

  ## Hard Questions

  **Q10 (likely from Series B lead, the worry): Is the AI module landing soft? You shipped on April 30 and have only 9 paying users three weeks later — what does that say about the conversion curve?**
  *Why this gets asked:* This is the question {{ceo_name}} is most worried about.
  *A:* "Three weeks is early data, but the question is fair. The 9 paying users are users that converted in the first week with no sales motion engaged — they self-onboarded. The conversion curve we are watching is the next 30: of the top 50 healthcare accounts, 31 have expressed buying interest and the CS-led conversion motion engaged on May 7. We hit the 18-paying-user Q2 target if 9 of those 31 convert by end of June, which is well below the 30% historical close rate on similar motions. So the early data is consistent with hitting the target. If by mid-June fewer than 6 of those 31 have converted, that's the signal the module is landing softer than expected and we make the bundling decision earlier."
  *Pivot:* none — this question deserves the full answer.

  **Q11 (likely from any board member): What's the single biggest risk to the 2028 plan?**
  *Why this gets asked:* Open-ended risk question. Many CEOs flub by listing five risks.
  *A:* "Engineering capacity. We have a flat headcount commitment and an ambitious roadmap, and our retention margin is thin if we lose two senior engineers in the same quarter. The 2028 plan assumes we ship on the same velocity we did in Q2 2027 — which is the upper end of what we have demonstrated. The mitigation is selective hiring in the bottleneck functions and a clear charter for the engineers we have. But the honest answer is: this is the one risk where there isn't a great mitigation if it goes the wrong way."

  **Q12 (likely from Series C lead): If you had to start over today, what would you do differently?**
  *Why this gets asked:* It's the kind of reflective question that exposes whether the CEO has actually learned.
  *A:* "Two things. I would commit to healthcare 12 months earlier — the data was there in our first cohort, and I read it as coincidence for two quarters too long. And I would never run an 18-month experiment without pre-defined kill conditions. Both of those mistakes cost the company a year of compounding. I won't make the same shape of error again, but I'm sure I'll find new ones."

  ## The Question The CEO Is Most Worried About — Three Postures

  **Posture 1: Defending the position.**
  "The 9 paying users are first-week self-onboards with no sales engagement. The full conversion motion engaged May 7 against 31 of our top 50 healthcare accounts. Hitting the 18-user Q2 target requires 9 of those 31 to convert in 6 weeks — well below historical close rates on similar motions. The early data is consistent with hitting plan."

  **Posture 2: Owning the gap.**
  "Three weeks is early but I take the spirit of the question. The risk is real that the module is landing soft because customers need procurement and security review cycles before they convert, and our forecast might have been optimistic on that timing. I'm watching the May 7 cohort closely; if fewer than 6 of 31 convert by mid-June, we move the bundling decision forward."

  **Posture 3: Redirecting to the next decision.**
  "The conversion curve is the watch-item, but the bigger strategic question this surfaces is whether the module should be a premium-tier paid attach or embedded in healthcare tier — which is one of the discussions on the agenda today. The 9-user data point is one input to that decision; the broader pricing question is the one that determines 2028 module-led ARR."

  ## The Question To Welcome
  **Q: What gives you the most conviction right now?**
  *A:* "The healthcare segment NRR — 138%. That is the metric that tells me the platform thesis is working. Customers are not just renewing; they are deepening. They add modules, they add seats, they pull more of their workflow into us. That is the behavior of customers who can't easily replace us, and it is the moat we have been quietly building for two years. If I had to point to one thing that says we are the company we said we'd be, it's that number."

  *(If no one asks: plant it after the M&A discussion. "One thing I want to surface even if no one's asking — the segment NRR data is the single strongest signal we have, and I want to make sure the room sees it before we leave today.")*

  ## What Not To Say
  - **"We are tracking that."** It is a verbal stall and it tells the board you are not done thinking. If you are tracking it, say what you are tracking and what would change.
  - **"I'll get back to you on that."** Defensible occasionally; corrosive at scale. If you do not know, say "I do not have that number on me — I will send it within 24 hours."
  - **A specific person's name in a critical context.** "Devon is behind on the marketing build" is the kind of sentence that travels. Keep critical conversations about individuals in 1:1s with the board chair.
tips:
  - "Build this prep doc the day before the meeting, not the morning of. Sleep changes which answers feel right."
  - "Three postures on the hardest question lets the CEO read the room and choose. The wrong posture in the wrong moment is what makes a board meeting go sideways."
  - "Plant the question you want asked. Boards are not always good at asking the question that helps the company; the CEO can lead them to it."
  - "After the meeting, write a quick retro of the questions that got asked versus the ones in the prep doc. The next prep is sharper for it."
  - "Have the CFO and one other leadership team member do a 30-minute mock Q&A with this prep doc the day before. The first time you say an answer out loud is not in the meeting."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - board-meeting-agenda
  - board-update-narrative
  - board-deck-outline
  - exec-podcast-talking-points
tags:
  - board
  - q-and-a
  - meeting-prep
  - executive-comms
  - leadership
---
