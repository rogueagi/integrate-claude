---
title: "Condense reading notes into a personal reference"
slug: reading-notes-condense
function: productivity
role: notes
description: "Take raw highlights and notes from an article, book, or paper and turn them into a compact personal reference you'll actually re-read."
useCase: "Use this after finishing a book, long-form essay, or research paper. The goal isn't to summarize — it's to extract what's useful to YOU, in your context, in a format you'll actually open again 6 months later."
prompt: |
  You are condensing my reading notes into a personal reference document. Goal: a compact note I'll actually re-read in 3 months, not a generic book summary.

  Source material: {{source_title_and_author}}
  Type: {{source_type}} (book / article / paper / podcast transcript / etc.)
  Why I read this: {{why_read}}
  My current work or thinking context: {{my_context}}

  My raw notes and highlights:
  ---
  {{raw_notes}}
  ---

  Produce a personal reference with these sections:

  1. ONE-LINE THESIS — the author's central argument, in your own words
  2. THE 3-5 IDEAS WORTH REMEMBERING — only ideas that are non-obvious, that I might forget, or that connect to my context. Skip the 101 stuff.
  3. QUOTES WORTH KEEPING — verbatim, with page or section reference if available. Maximum 3.
  4. WHERE I DISAGREED OR HAD QUESTIONS — keep my pushback alive; don't smooth it out
  5. CONNECTIONS TO MY WORK — concrete: how does this apply to {{my_context}}? Be specific.
  6. ACTIONS — 1-3 things I should actually do differently as a result. If there are zero, say so honestly.
  7. WHEN TO RE-READ — what circumstances would make this worth opening again

  Be ruthless about cutting. A note I'll re-read is short. A note I won't is long.
variables:
  - "{{source_title_and_author}}"
  - "{{source_type}}"
  - "{{why_read}}"
  - "{{my_context}}"
  - "{{raw_notes}}"
exampleInput: |
  source_title_and_author: "Working Backwards" by Colin Bryar and Bill Carr
  source_type: book
  why_read: I'm a senior PM and our company is rolling out an Amazon-style PR/FAQ doc requirement; wanted to know if it actually works
  my_context: Senior PM at a 200-person SaaS; we're trying to improve how we make product bets and reduce thrashing
  raw_notes: |
    - 6-page memo, no slides
    - "Working backwards" = start from the customer press release
    - First 20 min of meetings are silent reading
    - PR/FAQ doc forces clarity before commitment
    - Bezos hated PowerPoint because it lets you skim past weak thinking
    - Two-pizza teams
    - Single-threaded leader concept — one person fully owns
    - Input metrics vs output metrics — control the inputs, outputs follow
    - The bar raiser hiring concept
    - Disagree and commit
    - Most companies that try PR/FAQ fail because they don't enforce silent reading
    - Day 1 / Day 2 mentality
    - Customer obsession is a daily practice not a slogan
    - Working backwards is most useful for new product bets, less for incremental work
exampleOutput: |
  ONE-LINE THESIS
  Amazon's leadership system is a set of mechanisms (PR/FAQ docs, silent reading, single-threaded ownership, input metrics) that together force clearer thinking and faster decisions than the meeting-and-deck culture they replace.

  THE IDEAS WORTH REMEMBERING
  1. The PR/FAQ doc isn't the artifact — the silent reading and the writing process are the artifact. Most adoptions fail because they keep the doc and skip the discipline.
  2. Input metrics > output metrics. You can control inputs daily; outputs are downstream. Most teams (including yours) track the wrong layer.
  3. Single-threaded leader = one person fully owns one thing, no shared accountability. The "team owns it" pattern is where your roadmap thrashing is coming from.
  4. PR/FAQ is for new bets, not incremental work. Don't force it on every feature spec — that kills the muscle.

  QUOTES WORTH KEEPING
  - "Most decisions should probably be made with somewhere around 70% of the information you wish you had." (Bezos letter, quoted)
  - "Disagree and commit doesn't mean think your team is wrong and let them flail. It means you couldn't convince them, you don't have a veto, and you commit fully." (paraphrased)

  WHERE I DISAGREED OR HAD QUESTIONS
  - The book oversells the universal applicability of PR/FAQ. They acknowledge but underweight that small teams with high context don't need it.
  - Bar raiser sounds great in theory but in practice creates hiring bottlenecks at smaller scale.
  - "Customer obsession" is treated as cultural — but isn't it really an outcome of the input metric system?

  CONNECTIONS TO MY WORK
  - Your team thrashes on big bets because the bet is owned by "product + eng" — no single-threaded leader. Naming a STL on the AI feature would unblock half the back-and-forth.
  - You're tracking output metrics (activation %, retention) without input metrics (interviews per week, prototypes shipped per week). Add input metrics to your weekly tracking.
  - The PR/FAQ rollout your company is doing will likely fail unless leadership enforces silent reading at the start of meetings. Worth flagging this risk.

  ACTIONS
  1. Propose naming a single-threaded leader for the AI feature in next week's roadmap meeting.
  2. Add 2 input metrics to your weekly tracker: customer interviews completed, prototypes shipped.
  3. In the PR/FAQ rollout, push for the 20-min silent reading practice — without it, the doc becomes theater.

  WHEN TO RE-READ
  - Any time you're starting a new bet that requires clarity before committing
  - When the team starts thrashing on ownership
  - When metrics feel like they're not telling the truth — re-read the input/output chapter
tips:
  - "Don't summarize the book — extract what's useful to you. The Wikipedia summary already exists; you don't need another."
  - "Keep the 'where I disagreed' section. Most reading notes flatten into agreement. Your pushback is what makes the note yours."
  - "If the ACTIONS section is empty, say so honestly. Forcing fake actions trains you to ignore the section."
  - "Re-read these notes quarterly. The act of re-reading is what makes the reading pay off — most notes die in the notes app."
  - "Title these consistently (e.g., 'Notes — [Title] — [Date]') so they're searchable when you need them."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - book-application-distillation
  - learning-roadmap-create
  - concept-feynman-explanation
tags:
  - notes
  - reading
  - synthesis
  - learning
  - reference
---
