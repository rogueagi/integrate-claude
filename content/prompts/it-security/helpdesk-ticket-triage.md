---
title: "Triage a helpdesk ticket queue and propose categorization"
slug: helpdesk-ticket-triage
function: it-security
role: it-support
description: "Convert a messy helpdesk ticket queue into a categorized, prioritized triage list with assignment recommendations and patterns to address."
useCase: "Use this prompt at the start of an IT shift, after a long weekend, or when onboarding new helpdesk staff who need to learn how to categorize tickets. The output is a structured view of the queue with assignment guidance — not a generic SLA reminder."
prompt: |
  You are an experienced IT helpdesk lead triaging an inbound ticket queue. Process the tickets below into a categorized, prioritized triage view that an IT tech can act on this morning.

  Inputs:
  - Raw ticket queue: {{tickets}}
  - Team composition: {{team}} (e.g., "2 L1 techs, 1 L2 sysadmin, 1 networking SME on call")
  - Existing categorization scheme: {{categories}} (or "propose one")
  - Org SLAs: {{slas}}
  - Known concurrent issues / context: {{context}} (e.g., "Okta degraded since 7am", "new starter cohort onboarded this morning")

  Produce:

  1. **Queue snapshot**: count of tickets, by initial priority, by category, anything obviously time-critical or VIP

  2. **Categorized triage table**:
     | Ticket ID | Reporter | Summary | Category | Priority | Suggested assignee level | First action | SLA flag |

  3. **Top 5 actions in order** for the next 60 minutes — what gets touched first

  4. **Patterns and clusters**: tickets that look related and may share a root cause; recommended consolidation or escalation

  5. **Likely-self-resolvable**: tickets where a templated KB-article reply will close 80% of cases — proposed reply text

  6. **Escalations**: tickets requiring L2/L3 or other team involvement, with a one-line rationale

  7. **Out-of-scope / wrong queue**: tickets that should route elsewhere with proposed redirect

  8. **Process feedback**: 1–3 observations about the queue (recurring categories that suggest a fix; tickets with poor descriptions; gaps in self-service)

  Tone: pragmatic, time-conscious, no "in a perfect world." Focus on what reduces queue time today.
variables:
  - "{{tickets}}"
  - "{{team}}"
  - "{{categories}}"
  - "{{slas}}"
  - "{{context}}"
exampleInput: |
  team: 2 L1 techs (Maya, Jamal), 1 L2 sysadmin (Priya), networking SME on call
  categories: account-access, hardware, software, network, mobile, AV/conf-room, security, other
  slas: P1 15min response / 4h resolve; P2 1h / 8h; P3 4h / 24h; P4 1d / 5d
  context: Okta is fully healthy. New-hire cohort of 12 onboarded this morning at 9am. Quarterly board meeting in conf room A at 11am.
  tickets: |
    #4501 (08:14) - Sales VP Marcus C. - "I cannot get into Salesforce, please call me asap" - urgent
    #4502 (08:22) - Joon Park (new hire) - "Yubikey doesn't work, can't log into laptop"
    #4503 (08:23) - Wei Zhang (new hire) - "MFA setup failing"
    #4504 (08:24) - Adriana Silva (new hire) - "Need help logging in"
    #4505 (08:25) - Reggie Holt - "Outlook search index corrupt, taking forever"
    #4506 (08:31) - Conf Room A user (booked board mtg 11am) - "TV in conf room A not turning on"
    #4507 (08:35) - Mona Vance - "Forgot Mac password, can't log in"
    #4508 (08:37) - finance-team distribution list - "Can't print to finance-printer-3, just spins"
    #4509 (08:40) - Jamal Iqbal (new hire) - "Need access to engineering Github org"
    #4510 (08:42) - Pavel Romanov - "VPN slow this morning"
    #4511 (08:44) - Linnea Torvalds - "Slack desktop crashing on launch"
    #4512 (08:50) - finance-team distribution list - "Printer still won't work"
    #4513 (08:55) - Sherry Lin - "Can I get admin on my laptop to install Postman?"
    #4514 (08:58) - John W. - "I think I just clicked a phishing email??"
    #4515 (09:02) - Kareem Bashir (new hire) - "MFA setup failing"
    #4516 (09:08) - Conf Room A user - "Followup: still no display, board meeting at 11"
    #4517 (09:15) - Anonymous report via security@ - "Saw a guy in the office without a badge today"
exampleOutput: |
  # Helpdesk Triage — 09:30 morning standup view

  Triaged by: IT Lead. Total tickets: 17 (3 in last 30 min). Team: Maya & Jamal (L1), Priya (L2), Networking SME on call.

  ## 1. Queue snapshot

  - 1 P1 (security incident — phishing report)
  - 3 effectively P1 by impact (board-meeting AV; possible visitor without badge; sales VP locked out)
  - 6 P2 (new-hire cohort blockers, broken printer with finance team)
  - 5 P3 (slow VPN, Outlook reindex, etc.)
  - 2 P4 (Postman install request, etc.)

  Cluster signal: 3 of 12 new hires are blocked on MFA/Yubikey setup → likely a configuration issue with this cohort, not three independent tickets.

  ## 2. Triage table

  | # | Reporter | Summary | Category | Priority | Assignee | First action | SLA |
  |---|---|---|---|---|---|---|---|
  | #4514 | John W. | Possible phishing click | security | **P1** | Priya + escalate to security@ | Isolate device, get URL clicked + screenshot, notify security on-call | 15 min |
  | #4517 | security@ anon | Visitor in office without badge | security | **P1** | Escalate to physical security + facilities; IT to assist with badge log review | Confirm with reception, pull last hour of badge logs | 15 min |
  | #4506/#4516 | Conf Room A | TV not turning on, board mtg 11am | AV | **P1 by impact** (executive visibility) | Maya — physically | Walk to conf room A, check HDMI/source/power; have backup cart ready | 11am hard deadline |
  | #4501 | Marcus C. (Sales VP) | Cannot get into Salesforce | account-access | P2 (VIP) | Jamal — call within 5 min | Verify Okta + Salesforce status; check user's group memberships; password reset path | 1h |
  | #4502 | Joon (new hire) | Yubikey doesn't work | account-access | P2 (cohort blocker) | Maya — after AV | Likely cohort issue — see pattern below | 1h |
  | #4503 | Wei (new hire) | MFA setup failing | account-access | P2 | Same as #4502 | Same | 1h |
  | #4504 | Adriana (new hire) | Need help logging in | account-access | P2 | Same as #4502 | Same | 1h |
  | #4515 | Kareem (new hire) | MFA setup failing | account-access | P2 | Same as #4502 | Same | 1h |
  | #4508/#4512 | finance-team | finance-printer-3 broken | hardware | P2 (team-wide blocker) | Jamal | Restart print spooler service; physical check toner/paper | 8h |
  | #4509 | Jamal I. (new hire) | GitHub org access | software | P2 | Maya (after cohort fix) | Verify role; approve through engineering manager | 8h |
  | #4507 | Mona V. | Forgot Mac password | account-access | P2 | Maya | Standard MacOS password reset via MDM | 8h |
  | #4505 | Reggie H. | Outlook search slow | software | P3 | Self-help reply (template) | Send reindex KB | 24h |
  | #4510 | Pavel R. | VPN slow | network | P3 | Networking SME — informational | Check VPN concentrator metrics; not user-specific likely | 24h |
  | #4511 | Linnea T. | Slack desktop crashing | software | P3 | Self-help reply (template) | Reinstall Slack or switch to web | 24h |
  | #4513 | Sherry L. | Admin to install Postman | software | P4 | Standard request workflow | Direct to Self-Service catalog (Postman is in there) | 5d |

  ## 3. Top 5 actions in next 60 min

  1. **Priya** picks up #4514 (phishing click) immediately. Isolate device via MDM, capture URL, notify security@ on-call. Investigate as potential incident until cleared.
  2. **IT Lead** escalates #4517 (no-badge visitor) to physical security + facilities right now. IT pulls badge log for last 60 min in parallel.
  3. **Maya** walks to Conf Room A for #4506. Diagnose AV; if not fixable in 15 min, set up portable cart as fallback ahead of 11am.
  4. **Jamal** calls Marcus C. for #4501. Reset Okta password if needed; check Salesforce user record. Sales VP locked out of CRM is high-visibility.
  5. **Maya** (after AV) batches the four new-hire MFA tickets (#4502, #4503, #4504, #4515) — likely common cause; see pattern below.

  ## 4. Patterns and clusters

  - **New-hire MFA cluster** (#4502, #4503, #4504, #4515): 4 of 12 cohort members blocked on Yubikey/MFA. Most likely cause: the new permission group rolled out last week didn't propagate `MFA Required: Yubikey` until first login. Recommend: have IT Lead investigate group membership in Okta; one fix likely resolves all four. Potential 5th–8th ticket coming from cohort if not addressed proactively.
  - **finance-printer-3 cluster** (#4508, #4512): single printer, repeat reports. Treat as one issue.
  - **AV in conf room A** (#4506, #4516): same ticket, second user reporting. Merge.

  ## 5. Self-resolvable with template reply

  - **#4505 Outlook search slow** — send KB article `KB-114` (rebuild Outlook index): "Hi Reggie — Outlook's search index can corrupt after a few months. Easiest fix is rebuild via these steps: <link>. Takes ~20 minutes in the background. If still slow tomorrow, reply and we'll dig further."
  - **#4511 Slack crashing** — send KB `KB-208` (Slack reinstall): "Hi Linnea — usually a corrupt cache. Steps to clear cache and reinstall: <link>. If that fails, web is a workaround at slack.com while we look further."

  ## 6. Escalations

  - **#4514 Phishing**: escalate to Security on-call (Priya is L2 IT but the security investigation owner is security@; she co-handles)
  - **#4517 No-badge visitor**: physical security + facilities; not IT scope, but IT helps with badge log query
  - **New-hire MFA cluster**: if root cause is Okta group config, IT Lead handles; otherwise escalate to identity engineer on Security team

  ## 7. Out-of-scope / redirect

  - **#4513 Postman install request**: redirect to Self-Service catalog (Postman is approved); reply with link rather than handling as a ticket. If Self-Service doesn't have it for the user's machine cohort, root-cause that separately.

  ## 8. Process feedback

  - **MFA setup gaps in new-hire onboarding**: 4 of 12 cohort blocked on MFA suggests the onboarding runbook or the Okta group config has a gap. Root-cause this and update onboarding guide before next cohort. Prevent ~30 minutes of L1 time per cohort.
  - **Printer downtime is recurring**: finance-printer-3 has appeared in 3 of last 4 weekly queues. Time to either replace or schedule a vendor service call rather than restarting it weekly.
  - **Conf room AV without backup**: a board-meeting room hitting "TV doesn't turn on" 2.5 hours before start is a process failure. Recommend pre-meeting AV check on board-week mornings as a standing tech task.
tips:
  - "Triage by impact and clusters, not strictly by submission time. Four tickets from the same cohort are one investigation, not four."
  - "Self-help replies handle a surprising fraction of P3/P4 tickets. Have a few KB articles your team can paste; spend the saved time on real diagnosis."
  - "Escalate phishing reports immediately, even if they look low-confidence. The blast radius of a missed click is much bigger than the cost of a 5-minute investigation that turns out negative."
  - "Use the queue as a feedback loop. Recurring tickets in the same category usually point at a fix that's cheaper than handling the individual tickets."
  - "AI assistance is not a replacement for security review by qualified professionals. Phishing or physical security tickets surfaced here should always reach a qualified security responder, not be resolved at the helpdesk."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - employee-onboarding-it-checklist
  - it-faq-knowledge-article
  - asset-management-policy
tags:
  - helpdesk
  - it-support
  - triage
  - service-desk
  - operations
---
