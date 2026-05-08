---
title: "Prep targeted questions for a mentor or skip-level"
slug: mentor-question-prep
function: productivity
role: learning
description: "Prepare 3-5 sharp, specific questions for a mentor, skip-level, or coffee chat — questions only this person could uniquely help you with."
useCase: "Use this before a 1:1 with someone whose time is valuable and limited. The default is to walk in with vague questions and waste the slot. This prompt forces specificity."
prompt: |
  You are helping me prepare for a high-value conversation with a mentor, skip-level, or someone I respect. Generic questions waste their time. I want sharp, specific questions only THIS person can uniquely help me with.

  Who I'm meeting with: {{their_role_and_background}}
  Their unique expertise or perspective: {{their_unique_angle}}
  My role and current career stage: {{my_role_stage}}
  How long we have: {{duration}}
  How well we know each other (first meeting / ongoing relationship): {{relationship_depth}}

  What I'm currently working through (be specific):
  - Decision I'm facing: {{current_decision}}
  - Stuck point: {{current_stuck_point}}
  - Pattern I'm trying to break or build: {{current_pattern}}

  What I've already tried or considered: {{already_tried}}
  Generic questions I want to AVOID asking: {{questions_to_avoid}}

  Produce a prep doc with:

  1. ONE-LINE FRAMING — how I'll open the conversation in 30 seconds (not life story; just enough context for them to be useful)
  2. 3-5 QUESTIONS, ranked best to weakest. Each question:
     - The question itself (specific, answerable)
     - WHY THIS PERSON specifically — why they're uniquely positioned to help on this
     - WHAT I'M HOPING TO LEARN — the underlying answer or insight
     - FOLLOW-UP if they go deep on this question
  3. ONE QUESTION TO HOLD BACK — a sensitive question I shouldn't ask in the first conversation (or at all in this format)
  4. WHAT TO LISTEN FOR — patterns or asides in their answers that often matter more than the direct response
  5. END-OF-CONVERSATION ASK — one specific, easy follow-up I can request (intro, doc, future check-in)

  Be ruthless about specificity. "How do you make hard decisions" is a wasted question; "When you decided to leave [Company], what was the one consideration that finally tipped it?" is a great one.
variables:
  - "{{their_role_and_background}}"
  - "{{their_unique_angle}}"
  - "{{my_role_stage}}"
  - "{{duration}}"
  - "{{relationship_depth}}"
  - "{{current_decision}}"
  - "{{current_stuck_point}}"
  - "{{current_pattern}}"
  - "{{already_tried}}"
  - "{{questions_to_avoid}}"
exampleInput: |
  their_role_and_background: VP of Product at a public SaaS company; was a senior PM 6 years ago at a similar-sized company to where I am now
  their_unique_angle: She made the senior PM → director → VP jump in roughly 5 years; known for being good at scoping bets and cutting losses fast
  my_role_stage: Senior PM at 200-person SaaS; ~5 years PM experience; trying to figure out the path to director
  duration: 30 minutes
  relationship_depth: ongoing; this is our 4th coffee chat over a year
  current_decision: whether to push internally for a director role or look externally
  current_stuck_point: I keep getting feedback that I'm "almost there" but can't tell what the missing piece is
  current_pattern: I'm trying to be more visible in exec settings without seeming political
  already_tried: I've asked my VP for explicit feedback (got vague answer); I've taken on a stretch project; I've started speaking up more in meetings
  questions_to_avoid: "What advice do you have for someone in my position", "How did you become a director"
exampleOutput: |
  ONE-LINE FRAMING
  "Quick context — I'm wrestling with whether to push internally for director or move externally, and the main blocker is I keep getting 'almost there' feedback without specifics. Wanted your perspective on a few things."

  QUESTIONS (ranked best to weakest)

  1. "When you went from senior PM to director, was there a specific moment or piece of feedback that crystallized what was missing — or did it accumulate?"
  WHY HER: She made this exact transition recently enough to remember the specifics. Most VPs pattern-match to "you'll figure it out"; she may remember the actual signal.
  HOPING TO LEARN: Whether the gap is usually visible (and I'm missing it) or only legible in hindsight (in which case I should optimize differently).
  FOLLOW-UP: If she names a specific moment, ask what changed in her behavior right after.

  2. "Looking at director PMs at your company, what do they do in their first 90 days that senior PMs don't — that's invisible from the outside?"
  WHY HER: She's now the one promoting people to director, so she has the hiring-manager view that I literally cannot get from peers.
  HOPING TO LEARN: The specific behaviors that show up in director-level work, not the platitudes ("strategic thinking").
  FOLLOW-UP: Ask if she sees those behaviors in me, gently.

  3. "You're known for cutting losses fast on bets that aren't working. How do you tell the difference between 'this needs more time' and 'this needs to die'?"
  WHY HER: This is her specific reputation. Asking about her actual craft signals you respect her work, not just her title.
  HOPING TO LEARN: Decision heuristics I can apply to my own bets right now.
  FOLLOW-UP: Ask if there's a recent example she can share.

  4. "If you were me right now, would you push internally or go external — and what would tip you?"
  WHY HER: She's been on both sides of this and may have the contrarian view I haven't heard.
  HOPING TO LEARN: Whether the "stay internal" advice is real or default.
  FOLLOW-UP: If she leans one way, ask what she'd watch for in the next 60 days that would change her mind.

  5. "What's a question you wish a senior PM had asked you when you were in my seat — that no one ever does?"
  WHY HER: Forces a non-template answer. Often the highest-value question of the conversation.
  HOPING TO LEARN: The question I should be asking next time and didn't think of.

  ONE QUESTION TO HOLD BACK
  "Should I just leave my current company?" Don't put her in the position to recommend you leave — she might believe it but won't say it directly, and asking creates an awkward moment.

  WHAT TO LISTEN FOR
  - Whether she answers fast or pauses on Q1 and Q2 — pauses often mean she's thinking carefully and the answer is the most useful
  - Asides like "honestly, most senior PMs..." — those are pattern observations and gold
  - If she keeps redirecting to your VP relationship, that's a signal she thinks the bottleneck is there

  END-OF-CONVERSATION ASK
  "Mind if I send you a one-paragraph update in 60 days on what I tried? Would help me hold myself accountable." Easy yes for her, builds the relationship, and creates a deadline for you.
tips:
  - "Ban generic questions. 'What advice...' wastes the meeting; specific scenarios make great answers possible."
  - "Always come with at least one question that's about THEM and their specific work, not about you. Most people skip this and the conversation feels transactional."
  - "Send the prep doc to yourself the night before. Re-read it 5 minutes before, then close it — don't bring a list to the meeting."
  - "The end-of-conversation ask matters more than people think. A small, easy follow-up converts a one-time chat into a relationship."
  - "After the meeting, write down the answers within 30 minutes. Memory of mentor conversations decays fast."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - learning-roadmap-create
  - meeting-prep-brief
  - decision-options-expansion
tags:
  - learning
  - mentorship
  - career
  - questions
  - relationships
---
