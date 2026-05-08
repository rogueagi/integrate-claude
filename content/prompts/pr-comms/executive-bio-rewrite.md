---
title: "Rewrite an executive bio for different audiences"
slug: executive-bio-rewrite
function: pr-comms
role: executive-comms
description: "Produce a tight, audience-tuned executive bio in three lengths and three registers — board, conference, and web — without the LinkedIn-resume cadence."
useCase: "Use when an executive needs a refreshed bio for a board deck, a speaker introduction, the company website, or a press release. Outputs three versions calibrated to each audience, with the credibility moves and the cuts that distinguish them."
prompt: |
  You are an executive communications director. Rewrite a bio for {{principal_name}} ({{principal_title}} at {{company_name}}) in three versions: a board/investor version, a conference-stage version, and a web/press version.

  Inputs:
  - Career history: {{career_history}}
  - Notable accomplishments: {{accomplishments}}
  - The narrative they want to convey: {{narrative}}
  - What to leave out: {{omissions}} (companies they're tired of being identified by, roles that overshadow current work, irrelevant credentials)
  - Audience-specific signals: {{audience_signals}} (e.g., for board: fiduciary credibility; for conference: stage authority; for web: SEO + accessibility)
  - Personal voice notes: {{voice_notes}}

  Produce three versions:

  1. BOARD / INVESTOR VERSION (60-90 words)
  - Reads as fiduciary-grade. Past P&L scope, decision authority, board roles, fund work.
  - One specific operating result with a number.
  - No personal-color details.
  - Third person.

  2. CONFERENCE-STAGE VERSION (40-70 words)
  - Read aloud by an emcee, so write for the ear, not the page.
  - One credibility credential, one through-line, one human detail.
  - The last sentence should land — emcees take a breath there.
  - Avoid the "previously at X, Y, and Z" list. Pick one prior role that earns the stage.

  3. WEB / PRESS VERSION (90-130 words)
  - Used in press releases and the company website "about" page.
  - Third person. Clean and quotable. Should pass cleanly into a journalist's piece.
  - Includes the through-line that distinguishes them in the category.
  - Ends with one personal detail that humanizes without being twee (no "lives in Brooklyn with her partner and a very loud dog").

  Voice rules across all three:
  - No "thought leader," "passionate about," "deeply experienced," "seasoned."
  - No "Previously, X served as..." — start sentences differently.
  - Never list more than three prior companies. The third one stops adding signal.
  - Cut every adjective that could apply to anyone.

  Output: the three bios, then a 2-bullet note on which credential or omission was the hardest call and why.
variables:
  - "{{principal_name}}"
  - "{{principal_title}}"
  - "{{company_name}}"
  - "{{career_history}}"
  - "{{accomplishments}}"
  - "{{narrative}}"
  - "{{omissions}}"
  - "{{audience_signals}}"
  - "{{voice_notes}}"
exampleInput: |
  principal_name: Maya Okafor
  principal_title: Co-founder and CEO
  company_name: Linden AI
  career_history: Princeton CS '11; engineer at Palantir 2011-2014; founding engineer at Algolia 2014-2017; VP Eng at Looker 2017-2020 (acquired by Google); started Linden in 2023.
  accomplishments: Took Looker engineering from 80 to 240 during the run-up to acquisition; published a widely-cited paper on agent evaluation in 2024; raised $42M Series B in 2026.
  narrative: She's an operator-founder, not a researcher-founder. The story is about scaling teams and shipping into enterprise environments.
  omissions: Tired of being introduced as "ex-Palantir." Doesn't want Princeton in the conference bio. The 2024 paper is academic-flavored and overshadows the operating story for some audiences.
  audience_signals: Board version needs the Looker P&L and acquisition; conference version needs stage authority without sounding like a brag; web version needs SEO terms (autonomous customer support, AI agents).
  voice_notes: Maya wants the bios to feel like an operator wrote them. Cut anything that sounds aspirational rather than earned.
exampleOutput: |
  BOARD / INVESTOR VERSION

  Maya Okafor is co-founder and CEO of Linden AI, an autonomous customer support platform serving 140 enterprise SaaS companies. Before founding Linden in 2023, she was VP of Engineering at Looker, where she scaled the engineering organization from 80 to 240 people through the company's acquisition by Google. Earlier in her career, Okafor was a founding engineer at Algolia. Linden raised a $42M Series B in 2026 led by Bessemer Venture Partners. She holds a degree in computer science from Princeton.

  CONFERENCE-STAGE VERSION

  Maya Okafor is the co-founder and CEO of Linden AI. Before starting Linden, she was the VP of Engineering at Looker — she ran the team that took Looker from a series-D startup through its acquisition by Google. She thinks the most interesting question in enterprise software right now isn't what AI can do. It's what the operating model has to look like once it can.

  WEB / PRESS VERSION

  Maya Okafor is the co-founder and CEO of Linden AI, an autonomous customer support platform deployed by 140 mid-market and enterprise SaaS companies. She started Linden in 2023 with the bet that the support category would shift from copilot tools to agents that close tickets — a thesis the market has since followed. Before Linden, Maya was VP of Engineering at Looker, where she scaled the engineering team from 80 to 240 people through Looker's acquisition by Google. She lives in San Francisco and writes occasionally about how operating models change when AI agents enter enterprise workflows.

  Notes:
  - Hardest call: leaving Palantir out of all three bios. It's the credential most people would lead with, and Maya specifically asked to drop it. The board version still gets enough technical credibility from Algolia + Looker; the trade is worth it.
  - The 2024 agent-evaluation paper is omitted entirely. Including it pulls Maya into the "researcher-founder" lane she's actively avoiding. If a press release ever needs to cite it, do so in the body, not the bio.
tips:
  - "The bio is positioning, not biography. Ask the principal what story they want to be told, then cut everything that doesn't serve it."
  - "Read the conference version out loud. If you stumble on any clause, the emcee will too — and they'll do it in front of 800 people."
  - "Numbers in a bio do more work than adjectives. '140 enterprise customers' beats 'leading enterprise platform.'"
  - "Update bios on a schedule (every 6 months) rather than only before specific events. Stale bios get pasted into press releases and last five years."
  - "If a principal insists on keeping a credential that doesn't earn its space, ask which line they'd cut for it. The trade-off makes the call concrete."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - linkedin-post-executive
  - press-release-draft
  - conference-talk-proposal
tags:
  - bio
  - executive-comms
  - positioning
  - speaker-bio
  - copy
---
