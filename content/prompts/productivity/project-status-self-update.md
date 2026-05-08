---
title: "Generate a project status update on your own work"
slug: project-status-self-update
function: productivity
role: notes
description: "Turn your scattered project notes into a clean status update for a manager or peer — calibrated to their preferred format and altitude."
useCase: "Use this when your manager asks 'how's the project going?' and you have a brain full of context but no clean way to present it. Beats walking in and rambling."
prompt: |
  You are generating a project status update on my behalf. The audience matters: tailor altitude and tone to who's reading.

  Project name and context: {{project_name_context}}
  Audience: {{audience}} (e.g., my manager, my skip-level, a peer team lead)
  Audience's preferred format: {{format_preference}} (e.g., bullets, prose, dashboard-style, traffic lights)
  Audience's altitude — how much detail do they want: {{altitude}} (executive summary / mid-detail / deep dive)
  Their main concern about the project: {{their_concern}} (what are they actually worried about)

  My raw status notes:
  ---
  {{raw_status_notes}}
  ---

  Things I should NOT include (still in flux, embarrassing, political): {{do_not_include}}

  Produce a status update with these sections (adapt format to {{format_preference}}):

  1. HEADLINE — one sentence: project on track / at risk / off track, plus the why
  2. STATUS BY DIMENSION — scope, timeline, quality, team. Mark each with green / yellow / red and a one-line reason.
  3. WHAT SHIPPED / PROGRESSED — concrete recent progress (last 1-2 weeks)
  4. RISKS — top 2-3, with mitigation
  5. ASKS — anything I need from the audience (decisions, unblocking, headcount, etc.). Be specific.
  6. NEXT MILESTONE — what success looks like in the next 1-2 weeks

  After the update, output a 1-line "WHAT THIS UPDATE IS DOING POLITICALLY" — what message does this send about how I'm running the project. Honest read.
variables:
  - "{{project_name_context}}"
  - "{{audience}}"
  - "{{format_preference}}"
  - "{{altitude}}"
  - "{{their_concern}}"
  - "{{raw_status_notes}}"
  - "{{do_not_include}}"
exampleInput: |
  project_name_context: Q1 customer onboarding redesign — goal is to lift activation from 38% to 50%
  audience: my VP of Product (Lena)
  format_preference: bullets, brief
  altitude: mid-detail — she'll skim but wants enough to ask sharp questions
  their_concern: that we'll miss the Q1 ship date and that activation lift won't materialize
  raw_status_notes: |
    Funnel data confirmed integration step is the biggest drop (61% drop there)
    Prototype of "skip integration first session" built; flagged for 5% of new signups Mon
    Eng pulled into a payments fire mid-week, lost ~2 days
    Designer on board, has wireframes for the use-case-first onboarding
    Customer interviews this week (3) confirmed the use-case framing resonates
    Risk: eng might be pulled into payments again next week, depends on ops decision
    Risk: 5% test sample might be too small for fast read; thinking about going to 15%
    Asked about hiring a growth designer; no movement
    Mid-Feb ship still feels achievable but tight
  do_not_include: my frustration with the eng pull-off; the hiring ask (raise that 1:1)
exampleOutput: |
  HEADLINE
  Q1 onboarding redesign: ON TRACK with caveats. Mid-Feb ship still achievable; activation lift hypothesis getting stronger; eng capacity is the main risk.

  STATUS BY DIMENSION
  - Scope: GREEN — focused on integration drop-off + use-case-first onboarding; no scope creep
  - Timeline: YELLOW — lost ~2 eng days this week to a payments fire; mid-Feb still hits but no buffer left
  - Quality: GREEN — funnel data confirmed our integration hypothesis; customer interviews validate use-case framing
  - Team: YELLOW — eng risk of being pulled again; designer fully ramped

  WHAT SHIPPED / PROGRESSED
  - Funnel analysis: confirmed 61% drop at integration step (was hypothesis, now data)
  - "Skip integration first session" prototype: built; rolling to 5% of new signups Monday
  - Use-case-first wireframes: complete, ready for prototype phase
  - 3 customer interviews this week: use-case framing resonates strongly

  RISKS
  1. Eng capacity: another payments fire could pull the team for 2-3 days. Mitigation: align with ops on payments staffing this week so we know the risk window.
  2. Test sample size: 5% may be slow to read; recommend bumping to 15% next week if early data is clean.
  3. Activation lift sizing: still a hypothesis until the test reads. Worth setting the realistic-case range now (38% → 44-50%) so expectations align.

  ASKS
  1. Help align with ops on payments staffing — keeps eng on the redesign through ship.
  2. Sign-off to bump test sample to 15% if early data warrants (decision needed by Wed).

  NEXT MILESTONE
  By end of next week: 5% test live for a full week, first read of integration-skip impact, and use-case-first prototype in front of 5 customers.

  WHAT THIS UPDATE IS DOING POLITICALLY
  Signals: I'm on top of the project, I have data not just opinions, I'm flagging risks before they hit, and I'm asking for help on the right thing (eng protection) without complaining. The yellow on timeline is honest insurance — if we slip 1 week, I'm not surprising her.
tips:
  - "Match the audience's altitude. Your VP wants different detail than your skip-level. Don't reuse the same update."
  - "Always include an explicit ASK section. Status updates without asks read as performative — the recipient is wondering 'what does this person need from me?'"
  - "Use traffic-light colors honestly. If everything is green every week, no one believes you. Yellow is your friend."
  - "The 'political read' is for you only. Never send it. But know what your update is signaling."
  - "Send the update before they ask. A status update unprompted reads as competent; one prompted reads as reactive."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - meeting-notes-synthesis
  - weekly-review-template
  - email-reply-draft
tags:
  - notes
  - status-update
  - communication
  - reporting
  - influence
---
