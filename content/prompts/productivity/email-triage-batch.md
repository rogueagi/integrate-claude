---
title: "Triage an email backlog into action buckets"
slug: email-triage-batch
function: productivity
role: email
description: "Sort a backlog of emails into respond-now, schedule, delegate, and archive buckets so you can clear the queue in one focused session."
useCase: "Use this when you open your inbox to 80+ unread messages and need to know what actually requires your attention. Paste a list of subjects and senders (or forward a digest) and Claude will batch them into the right action so you stop re-reading the same emails."
prompt: |
  You are my email triage assistant. I will paste a list of emails (subject lines, senders, and a one-line preview if available). Sort every email into exactly one of these buckets:

  1. RESPOND NOW (under 2 minutes) — quick replies, confirmations, yes/no
  2. RESPOND TODAY (needs thought, < 15 min draft) — substantive replies I should batch later
  3. SCHEDULE / TIME-BOX — requires real work; estimate time and suggest when to do it
  4. DELEGATE — better handled by someone else; suggest who based on my context
  5. ARCHIVE / FYI — read-only, no action required
  6. UNSUBSCRIBE — newsletters or vendor noise I should kill

  My role and context: {{my_role_context}}
  My current top priorities this week: {{current_priorities}}
  People I commonly delegate to: {{delegates}}

  Emails to triage:
  {{email_list}}

  For each email, output: subject (truncated to 60 chars) | bucket | one-line reason.

  At the end, output a summary block:
  - Counts per bucket
  - The 3 emails most likely to be regretted if missed
  - Suggested order for the RESPOND NOW batch (fastest wins first)
variables:
  - "{{my_role_context}}"
  - "{{current_priorities}}"
  - "{{delegates}}"
  - "{{email_list}}"
exampleInput: |
  my_role_context: Head of Operations at a 40-person SaaS company; report to COO
  current_priorities: Q3 vendor consolidation, new hire onboarding for 2 ops analysts, board prep deck
  delegates: Priya (ops analyst), Marcus (project coordinator)
  email_list:
    - "Re: DocuSign renewal pricing — Sarah at DocuSign — 'attaching the revised quote per your ask'"
    - "Quick Q on the onboarding doc — Priya — 'do you want me to add the IT checklist or keep separate?'"
    - "Board materials due Friday — Janet (COO) — 'reminder, need your ops slides by EOD Thursday'"
    - "[Newsletter] The Operations Brief — weekly digest"
    - "Vendor request — Notion AI demo — Notion sales — 'free trial invite'"
    - "Marcus PTO question — Marcus — 'covering my Tuesday standup?'"
    - "Re: Salesforce contract — Legal — 'redlines attached, your sign-off needed'"
exampleOutput: |
  Re: DocuSign renewal pricing | SCHEDULE | Vendor consolidation work — block 30 min Wed AM to compare against alternatives
  Quick Q on the onboarding doc | RESPOND NOW | Priya is blocked; one-sentence answer unblocks her
  Board materials due Friday | SCHEDULE | Real work; book a 90-min Thursday AM block
  [Newsletter] The Operations Brief | ARCHIVE | FYI; consider unsubscribing if unread 3 weeks running
  Vendor request — Notion AI demo | UNSUBSCRIBE | Cold vendor outreach, no current need
  Marcus PTO question | RESPOND NOW | One-line yes/no
  Re: Salesforce contract | RESPOND TODAY | Needs careful read of redlines; batch with other 15-min items after lunch

  ---
  SUMMARY
  Counts: Respond Now 2 | Respond Today 1 | Schedule 2 | Delegate 0 | Archive 1 | Unsubscribe 1
  Most regret-if-missed: (1) Board materials — COO escalation risk, (2) Salesforce redlines — legal blocking, (3) DocuSign quote — expires in 7 days per typical vendor pattern
  Respond Now order: Marcus (10 sec) → Priya (60 sec)
tips:
  - "Run this once at the start of your day and once after lunch. Don't triage continuously — that's the trap."
  - "Tell Claude your current top priorities. The same email is 'urgent' or 'archive' depending on what week it is."
  - "If a bucket is consistently huge (e.g., RESPOND TODAY > 10), the real fix is upstream — fewer subscriptions, better filters, or default-decline policies."
  - "After triaging, do the RESPOND NOW batch in one sitting. Context-switching back to email later costs more than the replies themselves."
  - "Anything that sits in RESPOND TODAY for 3 days should drop to ARCHIVE — if it still mattered someone would have followed up."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - email-reply-draft
  - email-thread-summary
  - inbox-zero-system-design
tags:
  - email
  - triage
  - inbox
  - productivity
  - focus
---
