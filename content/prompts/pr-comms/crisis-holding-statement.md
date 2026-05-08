---
title: "Draft a crisis holding statement"
slug: crisis-holding-statement
function: pr-comms
role: crisis-comms
description: "Issue a holding statement during an active crisis when facts are incomplete — buy time without making it worse."
useCase: "Use in the first 60 to 120 minutes of a crisis when press are calling and the facts are still emerging. The output is a short, accurate statement that acknowledges the situation, signals seriousness, commits to a follow-up timeline, and avoids the legal/reputational traps of saying too much too soon."
prompt: |
  You are a crisis communications director who has handled active incidents at public technology companies, financial institutions, and consumer brands. Draft a holding statement for {{company_name}} on {{incident_summary}}, intended to be issued within {{time_window}} of the situation becoming public.

  Inputs:
  - What is publicly known: {{public_facts}} (only the facts you can confirm)
  - What is internally known but not yet public: {{internal_facts}}
  - What we explicitly cannot say: {{cannot_say}} (legal hold, ongoing investigation, customer notification not complete, regulatory)
  - Who is being harmed and how: {{stakeholder_impact}}
  - Whose statement this is: {{spokesperson}} (CEO, comms team, no name)
  - Likely media questions in the next 6 hours: {{anticipated_questions}}
  - Legal review status: {{legal_status}}

  The holding statement must:
  - Acknowledge the situation in clear language
  - Express the right level of concern without preempting findings
  - State what we are doing right now (investigation, customer notification, third-party support)
  - Commit to a specific update window (e.g., "we will share an update by 5pm ET today")
  - Provide a contact for press
  - Be issued in writing only, no improvised verbal statements

  Hard rules — what NOT to do in a holding statement:
  - Do not speculate on cause.
  - Do not commit to remediation specifics you cannot deliver.
  - Do not blame third parties, even if it is technically their fault.
  - Do not use "unprecedented," "regrettable," or "we take this very seriously" — those are crisis-statement clichés that read as canned.
  - Do not apologize for something we have not yet confirmed happened.
  - Do not say "no comment." Say what we can say, and explain what we'll be able to say later.

  Output:
  1. The holding statement (suitable for press, social, and customer email with light tweaks)
  2. A 4-bullet "what to watch in the next 6 hours" section — what would force a re-statement
  3. A 2-bullet legal review note flagging which sentences will draw the most counsel scrutiny
  4. A "do not say" list of phrases the spokesperson must avoid in any verbal interaction during the holding window

  Tone: serious, direct, human. Not corporate. Not warm. Calibrated to the stakes.
variables:
  - "{{company_name}}"
  - "{{incident_summary}}"
  - "{{time_window}}"
  - "{{public_facts}}"
  - "{{internal_facts}}"
  - "{{cannot_say}}"
  - "{{stakeholder_impact}}"
  - "{{spokesperson}}"
  - "{{anticipated_questions}}"
  - "{{legal_status}}"
exampleInput: |
  company_name: Linden AI
  incident_summary: Customers are reporting that the agent platform routed support conversations to the wrong customer accounts for an unknown number of users between roughly 9:30am and 10:45am ET this morning. We've isolated and stopped the issue but have not yet quantified the scope.
  time_window: Within 90 minutes — TechCrunch and The Information have already called.
  public_facts: Customers are posting on X about seeing other companies' tickets in their dashboard. One customer screenshot is circulating with another company's customer name visible.
  internal_facts: Eng confirms a deployment caused a multi-tenant routing error. Estimated impact is 200 to 600 customers but full forensic timeline is 12+ hours away. No evidence of data exfiltration. Some PII (customer support conversations) was visible cross-tenant.
  cannot_say: Cannot yet confirm scope, cannot confirm whether any regulated data was exposed, cannot confirm whether notification triggers under GDPR or US state breach laws apply.
  stakeholder_impact: Hundreds of mid-market and enterprise SaaS companies; some of their end customers may have had support conversations exposed.
  spokesperson: Statement issued by Linden AI; CEO Maya Okafor is the named contact for follow-up.
  anticipated_questions: How many customers? What data? Was it a breach? Are you notifying regulators? When will the full report be available?
  legal_status: Outside counsel has been engaged. They are reviewing the statement now and want to see it before it goes out.
exampleOutput: |
  HOLDING STATEMENT — Linden AI

  Earlier today, between approximately 9:30am and 10:45am Eastern Time, a deployment to our customer support platform caused a number of support conversations to become visible to the wrong customer accounts. We identified and stopped the issue at 10:45am ET. The platform is now operating normally.

  We are working to determine the precise scope of the incident, including which customers were affected and what information was visible. Our engineering team is conducting a full forensic review with the support of outside specialists. We have engaged outside counsel and we are preparing direct notifications to affected customers. We have no current evidence of data being downloaded or exfiltrated outside the platform.

  We know our customers and the people they serve trust us with sensitive conversations. That trust is what we are accountable to in our response. We will share a substantive update by 6pm ET today, including the count of affected customers and the categories of information involved.

  Press inquiries: press@linden.ai. Affected customers will hear directly from us at security@linden.ai with specific impact and remediation details.

  — Linden AI

  WHAT TO WATCH IN THE NEXT 6 HOURS
  - A customer publicly posts a screenshot showing regulated data (HIPAA, financial). That moves this from a confidentiality incident to a regulatory event and the next statement must reflect that.
  - A journalist runs the story before our 6pm update. If The Information publishes by 3pm, accelerate the customer notification and bring the substantive update to 4pm.
  - The forensic review reveals the impact window is wider than 9:30-10:45am ET. Be ready to revise the time window without re-litigating the original statement.
  - One of the affected customers makes their own public statement. Coordinate before press hears it from them rather than us.

  LEGAL REVIEW NOTES
  - "We have no current evidence of data being downloaded or exfiltrated outside the platform" — counsel will want this softened to "we have no current evidence of data exfiltration." Hold the plain-English version unless they have a specific concern about a regulator's interpretation.
  - The 6pm ET commitment is the highest-risk single line. Confirm with engineering and the IR team that 6pm is a real number before issuing. Missing a publicly committed time window doubles the next news cycle.

  DO NOT SAY (during the holding window)
  - "We take this very seriously." Empty.
  - "Customer trust is our top priority." Worse than empty.
  - "It was a third-party issue." This was our deployment.
  - "There was no breach." Until forensics is done, this is not a sentence we can defend.
  - "We don't know yet." Always pair "we don't know X" with "we will share X by Y time."
tips:
  - "Speed and accuracy trade against each other. The right move is to issue the holding statement fast and make it small. The substantive statement comes later."
  - "Time-bound your follow-up commitment specifically. '6pm ET' is binding. 'Later today' is not, and reads as evasive."
  - "Run the statement past two channels in parallel: outside counsel for legal exposure and an affected customer (or proxy) for tone. Counsel optimizes for risk; the customer voice optimizes for trust."
  - "If you're tempted to say 'we are committed to X' in a holding statement, you are filling space. Cut it."
  - "Have a 'do not say' list ready before any executive talks to a reporter. Verbal slips during a holding window become the headline."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - apology-statement-public
  - data-incident-customer-comms
  - layoff-external-statement
  - interview-prep-doc
tags:
  - crisis
  - holding-statement
  - incident-response
  - press
  - executive-comms
---
