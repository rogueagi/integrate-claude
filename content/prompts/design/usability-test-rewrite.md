---
title: "Rewrite usability test findings into action-prioritized recommendations"
slug: usability-test-rewrite
function: design
role: ux-design
description: "Take raw usability test notes (your own or a researcher's) and turn them into a prioritized recommendation list ranked by impact, effort, and confidence — not a wall of observations."
useCase: "Use this after running 5–8 usability sessions when you have a notes doc full of quotes and observations but no clear shipping list. PMs and engineers don't read research reports — they read prioritized fix lists. This prompt produces the latter."
prompt: |
  You are a senior UX researcher who has lost patience with research reports nobody reads. Take the raw findings below and produce a prioritized recommendation list that a PM can use to scope sprint work tomorrow.

  Context:
  - Product / surface tested: {{surface}}
  - Number of participants: {{participant_count}}
  - Participant type: {{participant_type}}
  - Tasks tested: {{tasks}}
  - Raw observations and quotes: {{observations}}
  - Known constraints (eg "we're not redesigning the data model"): {{constraints}}

  Produce the output in this structure:

  1. Headline (2 sentences). What's the single most important thing the team needs to know?
  2. Recommendations table. Columns: # | Issue | Evidence (X of Y participants) | Recommended fix | Impact (H/M/L) | Effort (H/M/L) | Confidence (H/M/L) | Priority (P0/P1/P2)
  3. Quotes worth showing the team. 3–5 verbatim quotes that capture the issues most viscerally — pick ones that will make a PM uncomfortable in a good way.
  4. What we deliberately did not recommend. List 2–3 things you considered but rejected, and why.

  Rules:
  - Priority: P0 = ship before launch, P1 = next sprint, P2 = backlog. Not everything is P0.
  - Confidence: H = 4+ participants hit it the same way; M = 2–3 with consistent pattern; L = 1 participant or a guess.
  - If you have 5 issues that come from 1 participant each, they're probably 5 different things — don't lump them.
  - Recommended fix must be specific. "Improve the onboarding" is not a fix. "Replace the empty state on the dashboard with a 3-step setup checklist" is.
  - "Section 4" is the rigor check. Force yourself to discard at least one tempting recommendation.

  Output: structured as above.
variables:
  - "{{surface}}"
  - "{{participant_count}}"
  - "{{participant_type}}"
  - "{{tasks}}"
  - "{{observations}}"
  - "{{constraints}}"
exampleInput: |
  surface: Helix Analytics — new-user onboarding (first 10 minutes after signup)
  participant_count: 6
  participant_type: Marketing analysts at SMBs (10–200 employees), evaluating self-serve BI tools
  tasks: Sign up, connect a data source, build first chart, share with a teammate
  observations: |
    P1, P3, P4 stalled on "connect data source" — couldn't find Stripe in the integrations list (it's there but alphabetized under S; they searched). P3 quote: "Why doesn't this just have a search box?"
    P2, P5, P6 used the search box (it does exist, hidden top-right) and connected fine.
    P1, P2, P3 didn't notice the sample dataset offered on first chart — went straight to "no data" empty state and got stuck.
    P4 said the chart builder "felt like Excel from 2003."
    P5 tried to share via Slack, couldn't find Slack integration, gave up and copied a URL into Slack manually.
    P6 said "this is the first BI tool that didn't make me want to ask a data person for help" — completed all tasks in 9 min.
    P1 churned out at 14 min, said "I'll come back to this later" (translation: won't).
    All six asked at some point: "Where am I in this — am I almost done?"
  constraints: Can't change the integrations data model this quarter; chart builder rewrite is on the roadmap for Q3
exampleOutput: |
  1. Headline
  Onboarding fails at the data-source connection step for half of new users — they can't find the search box and don't realize the integrations list is alphabetized. Fix this and most other issues become survivable.

  2. Recommendations
  | # | Issue | Evidence | Fix | Impact | Effort | Confidence | Priority |
  |---|---|---|---|---|---|---|---|
  | 1 | Search box on integrations page is hidden top-right; users scroll the alphabetized list and miss popular sources | 3 of 6 | Move search to a prominent full-width input above the list with placeholder "Search 80+ integrations (Stripe, Slack, Salesforce...)" | H | L | H | P0 |
  | 2 | Sample dataset is offered but not surfaced on first chart attempt; users hit the empty state and stall | 3 of 6 | Make the sample dataset the default state of the chart builder for users with zero connected sources, with a one-line "Using sample data — connect yours anytime" banner | H | M | H | P0 |
  | 3 | No progress indicator through onboarding | 6 of 6 | Add a 4-step progress strip: Connect data → Build chart → Share → Done. Persistent in the top bar | M | L | H | P0 |
  | 4 | Slack share path missing; users fall back to copy-paste | 1 of 6 | Add Slack share as a one-click option in the share modal | M | M | M | P1 |
  | 5 | Chart builder feels dated to power users | 1 of 6 | Defer to Q3 rewrite — surface this in the rewrite brief | M | H | L | P2 |

  3. Quotes worth showing the team
  - "Why doesn't this just have a search box?" (P3, after spending 90 seconds scrolling)
  - "I'll come back to this later." (P1, abandoning at 14 minutes — translation: won't)
  - "This is the first BI tool that didn't make me want to ask a data person for help." (P6, completing in 9 minutes)
  - "Am I almost done?" (asked by all 6 at some point — there's no progress indicator anywhere)

  4. What we deliberately did not recommend
  - Redesigning the integrations page from scratch. The data shows users can succeed with the existing layout if search is prominent. Don't fix what isn't broken.
  - Auto-connecting common data sources via OAuth detection. Tempting, but adds privacy/consent complexity and only one participant explicitly wanted it.
  - Onboarding tour overlay. None of the participants asked for or used a guided tour, and they tend to be ignored or dismissed instantly. The progress strip is the lighter-weight signal they actually need.
tips:
  - "Confidence ratings keep you honest. A 1-of-6 finding masquerading as a P0 is how design teams lose credibility with PMs."
  - "Quotes do more persuasive work than your synthesis. Pick the ones that make people physically uncomfortable."
  - "Section 4 (what you didn't recommend) is the most senior part of the document. It shows you actually evaluated trade-offs."
  - "If every fix is P0, none of them are. Force a distribution."
  - "Send the doc to one engineer before the team review. If they can't tell what to build, rewrite."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - ux-research-discussion-guide
  - heuristic-evaluation
  - ia-card-sort-summary
tags:
  - ux-research
  - usability-testing
  - synthesis
  - prioritization
  - findings
---
