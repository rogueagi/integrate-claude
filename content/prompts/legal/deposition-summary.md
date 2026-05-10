---
title: "Summarize a deposition transcript into admissions, contradictions, and follow-ups"
slug: deposition-summary
function: legal
role: contracts
description: "Turn a long deposition transcript into a structured summary highlighting key admissions, contradictions with prior statements, and the follow-up areas to pursue at next deposition or trial."
useCase: "Use this prompt when preparing for the next round of depositions, summary judgment briefing, or trial. Litigation associates spend hours reading 200-page transcripts looking for the one or two admissions that matter. This prompt forces a structured pass that surfaces the moments worth quoting and the gaps worth pressing on."
prompt: |
  You are a litigation paralegal with 10 years of experience supporting trial teams. Read the deposition transcript below and produce a structured summary that a partner can scan in five minutes before a status call.

  Case context:
  - Matter name: {{matter_name}}
  - Deponent: {{deponent_name}} ({{deponent_role}})
  - Date taken: {{deposition_date}}
  - Theory of the case (our side): {{case_theory}}
  - Prior statements on file: {{prior_statements}}

  Transcript:
  {{transcript}}

  Produce the following sections:

  1. Witness profile (3 to 5 sentences): role, relevance, demeanor cues if noted on the record.

  2. Key admissions: bullet list of statements helpful to our theory. For each, give a one-line characterization, the page and line cite (use the format Tr. XX:Y), and a verbatim quote of no more than two sentences.

  3. Damaging testimony: same format, but for statements unhelpful to our side. Be honest about exposure.

  4. Contradictions with prior statements: where the deponent's testimony conflicts with declarations, interrogatory responses, or earlier deposition testimony in {{prior_statements}}. Cite both sources.

  5. Open follow-ups: questions the deposing attorney did not ask or did not get a clean answer to. These are the seeds for the next deposition or for trial cross.

  6. Documents referenced: exhibits introduced, with exhibit number and one-line description.

  Rules:
  - Do not paraphrase a quote you are presenting as a quote. Verbatim only.
  - If a cite is uncertain, mark it with [verify cite] rather than guessing.
  - Flag anything that looks like privileged content the witness should not have disclosed.
variables:
  - "{{matter_name}}"
  - "{{deponent_name}}"
  - "{{deponent_role}}"
  - "{{deposition_date}}"
  - "{{case_theory}}"
  - "{{prior_statements}}"
  - "{{transcript}}"
exampleInput: |
  matter_name: Halberd Industries v. Northbrook Logistics
  deponent_name: Diane Pressler
  deponent_role: Former VP of Operations, Northbrook Logistics (2019-2023)
  deposition_date: April 18, 2026
  case_theory: Northbrook knew the load capacity ratings were overstated by Q2 2022 but continued to sell the trailers without disclosure.
  prior_statements: Pressler declaration dated Jan 12, 2026 (stated she "first learned of the rating issue in late 2023"); 2024 interrogatory response No. 7 from Northbrook (stated rating audit began "in or around 2023").
  transcript: [350 page transcript pasted in]
exampleOutput: |
  1. Witness profile
  Diane Pressler ran ops at Northbrook from 2019 through her 2023 departure. She reported directly to the COO and sat on the product safety committee. On the record she was composed for the first three hours, became defensive when shown internal emails (Ex. 14, 16), and asked for breaks twice during the load capacity line of questioning.

  2. Key admissions
  - Confirmed she received the June 2022 engineering memo flagging the 12% overstatement. Tr. 87:14. "Yes, I read it when it came in."
  - Acknowledged the safety committee discussed the memo at its July 2022 meeting. Tr. 92:3. "We talked about it. We did not act on it that month."
  - Conceded no customer was notified between July 2022 and the Q1 2023 recall. Tr. 118:9. "Not that I am aware of, no."

  3. Damaging testimony
  - Stated the engineering memo was "preliminary" and that further testing was ordered. Tr. 89:21.
  - Testified she believed the COO was handling external disclosure. Tr. 121:4. This sets up an empty chair defense.

  4. Contradictions with prior statements
  - Pressler declaration (Jan 12, 2026) stated she "first learned of the rating issue in late 2023." Deposition testimony at Tr. 87:14 admits she read the June 2022 memo on receipt. Direct contradiction.
  - Northbrook's 2024 interrogatory response No. 7 stated the rating audit began "in or around 2023." Pressler now testifies the safety committee discussed it in July 2022. Tr. 92:3.

  5. Open follow-ups
  - Who at Northbrook drafted the response to interrogatory No. 7, and what did Pressler tell them? Not asked.
  - What "further testing" was ordered after the June 2022 memo, and who has the results? Tr. 90 was cut off by an objection and never circled back.
  - Identify every member of the July 2022 safety committee meeting. Pressler named two; minutes were not produced.

  6. Documents referenced
  - Ex. 14: June 14, 2022 engineering memo from R. Holm to safety committee
  - Ex. 16: July 21, 2022 safety committee meeting agenda
  - Ex. 22: Pressler's January 2026 declaration

  [verify cite] Tr. 121:4 was read from a rough transcript; confirm against the certified copy.
tips:
  - "Have a qualified attorney review the summary against the certified transcript before relying on it for filings or trial. Claude can mis-cite line numbers in long documents."
  - "Paste the prior statements (declarations, interrogatory responses, earlier depositions) directly into {{prior_statements}}. Without them Claude cannot find contradictions."
  - "Run the same transcript twice with two different case theories to surface what the other side will emphasize."
  - "For very long transcripts, chunk by topic (background, key event, damages) rather than by page range. Claude tracks topical threads better than arbitrary pagination."
  - "Ask Claude to flag any moment a privilege instruction was given but the witness answered anyway. Those are clawback candidates."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - contract-redline
  - legal-risk-memo
  - discovery-objection-template
tags:
  - legal
  - litigation
  - deposition
  - trial-prep
  - transcript-summary
---
