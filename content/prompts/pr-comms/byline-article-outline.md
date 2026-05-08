---
title: "Outline a byline article for a target publication"
slug: byline-article-outline
function: pr-comms
role: thought-leadership
description: "Build an editor-ready byline outline calibrated to a specific publication's voice, length, and what they actually accept."
useCase: "Use when planning a byline article for an executive in a target publication (HBR, MIT Sloan Review, Fast Company, a16z's Future, Stratechery, a trade outlet). Outputs an outline that fits the publication's structure, with the argument, the evidence, the section flow, and the line that earns the headline."
prompt: |
  You are a byline editor who has placed pieces in HBR, MIT Sloan Review, The Atlantic Business, Fortune, and Stratechery. Build an outline for a byline article by {{principal_name}} ({{principal_title}}) targeted at {{publication}}.

  Inputs:
  - Working title: {{working_title}}
  - The argument: {{argument}} (the actual claim, in one sentence)
  - Evidence we can bring: {{evidence}} (data, customer examples, named research, personal experience)
  - Why this publication: {{publication_fit}} (their typical reader, recent pieces this fits next to, their editorial priorities)
  - Target word count: {{word_count}}
  - The section we're trying to land in: {{section}} (e.g., HBR's Strategy section, MIT Sloan's Magazine, Fast Company's Co.Design)
  - Author voice: {{voice_notes}}
  - Constraints: {{constraints}} (NDA topics, specific competitor mentions, customer names)

  Build the outline in this structure:

  1. PUBLICATION FIT NOTE (3-5 lines)
  Why this publication, this section, this editor. Reference one or two recent pieces that this would sit alongside. If the publication's voice is data-heavy, our piece must be data-heavy.

  2. THE ARGUMENT (1 sentence)
  The claim, sharpened. Not a topic. A position the principal is willing to defend.

  3. THE LEDE
  Three to five sentences, written word-for-word. The first paragraph that earns the editor's read.

  4. SECTION OUTLINE
  Five to seven sections, each with:
  - A working header
  - The point of the section (1 sentence)
  - The evidence/example/data that earns it
  - One line of voice — a sentence as the principal would write it

  5. THE TURN
  The single move in the piece that makes it more than a list. The contrarian moment, the revealed pattern, the personal anecdote that recasts the argument.

  6. THE CLOSE
  Word-for-word. The last paragraph. The line that gets quoted.

  7. CALL-OUT BOX (if the publication uses them)
  A short sidebar — usually a list, framework, or table — that earns easy social shares.

  8. PITCH NOTE FOR THE EDITOR
  A 100-word note to the section editor pitching the piece, why it fits the publication now, and the deadline we can hit.

  Voice rules:
  - Write to the publication's reader, not to the principal's industry peers. HBR's reader is more skeptical than LinkedIn's.
  - No "Five Things You Should Know About..."
  - The argument must be defensible against a hostile reader.
  - If the principal can't bring evidence the publication's research desk would respect, the outline is not ready.

  Output: the full outline, then a 3-bullet "what could kill this pitch" risk note (saturation of similar pieces, competitor angle, fact-checking exposure).
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{publication}}"
  - "{{working_title}}"
  - "{{argument}}"
  - "{{evidence}}"
  - "{{publication_fit}}"
  - "{{word_count}}"
  - "{{section}}"
  - "{{voice_notes}}"
  - "{{constraints}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: Co-founder and CEO, Linden AI
  publication: Harvard Business Review
  working_title: The Headcount Question No One on Your Finance Team Has Modeled
  argument: AI agents are not making the support function smaller — they are restructuring it. Companies that budget for either "same headcount" or "AI replaces humans" are both wrong; the right model invests up the org chart, not across it.
  evidence: 140 customer deployments, average 61% deflection, 92% gross retention. Three named (with permission) examples of customers who restructured rather than reduced. Anonymized cohort data on hiring plan changes pre- vs. post-deployment.
  publication_fit: HBR's Strategy section recently ran two pieces on AI and operating models. Our piece would sit next to those but tell the inside-the-org story rather than the executive-level abstraction. HBR's reader is a senior operator who needs frameworks they can use Monday morning.
  word_count: 2,400 words
  section: Strategy
  voice_notes: Maya writes plainspoken, evidence-heavy, doesn't hedge. Will use a specific customer story but won't invent composites.
  constraints: Cannot name two specific customers (under MNDA). Cannot reference Series B (still under embargo). Cannot directly name competitors.
exampleOutput: |
  PUBLICATION FIT NOTE
  HBR's Strategy section in 2025 ran two pieces by McKinsey contributors on the operating-model implications of generative AI. Both pieces ended at the executive-team altitude. This piece comes in below them: the actual restructuring of a function, told from the inside, with cohort data. HBR's reader — a senior operator, not a researcher — needs the next-level granularity. The editor to pitch is the Strategy section editor; the call-back is to the framework, not to the case study.

  ARGUMENT
  AI agents are not making the support function smaller; they are restructuring it. Companies that budget for "same headcount" or for "AI replaces humans" are both wrong. The right model invests up the org chart, not across it — and most finance teams have not modeled that pattern.

  LEDE (word-for-word)
  Last quarter, the head of customer support at a $400M ARR SaaS company called me with a problem her finance team didn't know existed. She had deployed an AI agent platform eight weeks earlier. Her team's resolution volume was up. Her ticket backlog was down. And she had three of her most senior people sitting in her office one afternoon telling her that for the first time in their careers, they were doing senior work. Then she said the line that has stuck with me: "If I let HR put two more juniors on this team, the seniors are going to leave." Her finance team was modeling for two more juniors. This is the headcount question that the next 18 months of AI deployment depends on, and almost no one is asking it.

  SECTION OUTLINE

  Section 1: The Wrong Two Models (working header)
  - Point: Most operating-model debates assume one of two outcomes — same team, more output; or smaller team, same output. Both miss what's actually happening.
  - Evidence: Cohort data from 140 deployments showing the bimodal split.
  - Voice: "If your finance model has a single AI-productivity multiplier on the support line, you are budgeting for a category that does not exist."

  Section 2: What Actually Restructures
  - Point: The agent absorbs the entry-tier work. The senior tier shifts from resolution to review. The org chart compresses, then re-expands at the senior end.
  - Evidence: Named customer story (Brightpath) — before/after org chart with permission.
  - Voice: A concrete "what changed" narrative.

  Section 3: The Hidden Promotion
  - Point: Many of the people now doing review work are doing senior-level work for the first time without the title or pay change. This creates a retention problem that doesn't show up in any HR dashboard.
  - Evidence: Cohort data on senior-tier voluntary attrition pre- vs. post-deployment.
  - Voice: "The first thing you discover when AI absorbs the entry-tier work is who on your team has been doing entry-tier work all along."

  Section 4: The Finance Mistake
  - Point: Most CFO models treat AI deployment as a productivity input, not as an org-design event. They model a multiplier. The actual change requires new line items.
  - Evidence: Walk through what a corrected model looks like — three line-item changes.
  - Voice: A practical, dry checklist tone.

  Section 5: The Org Move That Works (the framework)
  - Point: A three-step pattern observed across the customers who got this right: (1) audit which tickets a senior person should never see, (2) re-define the senior role around review, (3) stop hiring at the entry tier.
  - Evidence: Three named examples; one anonymized counterexample.

  Section 6: Why This Is the 2026 Question
  - Point: Companies that get this right in the 2026 budget cycle build a 12-month talent advantage. Companies that don't will start losing senior people in Q3.
  - Evidence: Reference the HBR pieces from 2025 to position this as the next chapter.

  Section 7: Close
  - Point: This is not a story about AI. It is a story about whether the operators in your organization are doing the work you hired them to do.

  THE TURN
  Section 3 — "the first thing you discover is who has been doing entry-tier work all along." This is the moment the piece stops being about AI and starts being about whether the company has been honest with itself about its own org chart.

  THE CLOSE (word-for-word)
  The shift from copilot tools to agents that close tickets happened in eighteen months. The shift in operating models hasn't happened at all. The companies that win the next eighteen months are not the ones with the best vendor list. They are the ones whose finance teams already know what to model, whose HR teams already know what to title, and whose senior support people are still in the building two budget cycles from now. The technology decision is a procurement question. The org-design decision is the strategy question. Most companies are still answering the wrong one.

  CALL-OUT BOX
  Three Questions to Ask Before Signing the 2026 Plan
  1. Which tickets should a senior person on this team never see again?
  2. What is the work the senior tier should be doing instead?
  3. What is our retention plan for the seniors during the 18 months it takes for the title and pay to catch up to the work?

  PITCH NOTE FOR THE EDITOR
  Hi [editor]. I'm pitching a 2,400-word piece for the Strategy section by Maya Okafor, CEO of Linden AI, on the org-design question that AI agents have created for the customer support function and that no finance team is modeling for. The piece sits next to your 2025 Strategy pieces on operating-model change but tells the inside-the-org story rather than the executive-altitude abstraction. We can bring named customer examples, cohort data across 140 deployments, and a three-step framework. We could deliver a draft in 14 days. If this fits, I'm happy to send a fuller draft outline first.

  WHAT COULD KILL THIS PITCH
  - Saturation: HBR has run several "AI is reshaping the org" pieces. The defensible angle is the headcount-and-finance specificity, not the operating-model frame. Sharpen the lede if the editor pushes back on category overlap.
  - Fact-checking exposure: HBR's research desk will check the cohort numbers. Confirm before submission that the 140-deployment / 61% / 92% figures can be sourced and that the named customer can stand behind their before/after org chart.
  - Competitor angle: HBR will not let us name competitors directly. The piece works without naming, but if the editor asks for sharper category context, have the de-identified competitive frame ready ("a category leader's two-year-old approach to deflection rate").
tips:
  - "The argument and the lede are the only parts the editor reads in detail at first. Spend disproportionate time on those."
  - "Write to the publication's reader, not to the executive's audience. HBR's reader is more rigorous than a LinkedIn audience and will reject hand-waving."
  - "Bring data the publication's research desk can verify. A piece killed in fact-checking is worse than a piece never pitched."
  - "Avoid the listicle frame ('5 things'). Most legitimate publications have moved past it."
  - "If the principal isn't willing to defend the argument against a hostile reader, soften the argument or shelve the piece. Bylines that hedge get noticed."
complexity: intermediate
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - industry-trends-pov-doc
  - conference-talk-proposal
  - linkedin-post-executive
  - ceo-keynote-narrative
tags:
  - byline
  - thought-leadership
  - editorial
  - executive-comms
  - publication
---
