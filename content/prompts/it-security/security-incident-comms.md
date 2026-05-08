---
title: "Draft customer-facing communication for a security incident"
slug: security-incident-comms
function: it-security
role: security
description: "Produce honest, legally-defensible customer communication about a security incident — covering what happened, impact, what we did, and what customers should do."
useCase: "Use this prompt during or shortly after a security incident when you need to communicate to customers. The output is a draft for legal and exec review — direct, regulator-aware, and free of the corporate evasions that erode trust."
prompt: |
  You are a security and crisis-communications professional drafting customer-facing communication about a security incident. Be honest, specific, and free of corporate weasel-language. The CEO will want to soften it; do the right thing.

  Incident:
  - What happened: {{what_happened}}
  - When (detected / contained / resolved): {{timeline}}
  - Customer data potentially affected: {{data_affected}}
  - Number of customers affected: {{customers_affected}}
  - What we know is NOT affected: {{not_affected}}
  - Root cause (if known and shareable): {{root_cause}}
  - Actions taken: {{actions_taken}}
  - What customers should do: {{customer_actions}}
  - Regulatory triggers: {{regulatory}} (GDPR 72h, state breach laws, contractual notice)
  - Audience tier: {{audience}} (all customers, affected only, enterprise tier first)

  Produce:

  1. **Email to affected customers**: 250–400 words. Subject line + body. No marketing tone. State the facts, the impact, the actions taken, the actions they should take, and how to reach us. Do NOT use the words "abundance of caution" or "your trust is important to us." If we own a mistake, own it.

  2. **Public status page or blog post** (if applicable): same content, different voice; suitable for press to quote

  3. **CS team talking points**: 5–8 bullets they can use on inbound calls, including questions to expect ("was my data accessed?") with honest answers

  4. **Internal Slack message** (employees, not customers): what employees should know and the specific instruction "do not speculate publicly"

  5. **Regulatory notification draft** if {{regulatory}} indicates one is required: bullet list of what would go in the formal notice (not the full document, just the substance)

  6. **What we are NOT saying yet and why**: items deliberately omitted because they're unconfirmed or could mislead — explicit list for the comms reviewer

  Be honest about uncertainty. "We do not yet know whether…" is better than implying knowledge you don't have.
variables:
  - "{{what_happened}}"
  - "{{timeline}}"
  - "{{data_affected}}"
  - "{{customers_affected}}"
  - "{{not_affected}}"
  - "{{root_cause}}"
  - "{{actions_taken}}"
  - "{{customer_actions}}"
  - "{{regulatory}}"
  - "{{audience}}"
exampleInput: |
  what_happened: A misconfigured S3 bucket exposed customer invoice PDFs to anonymous read access for approximately 19 hours. Logs confirm the bucket was accessed by a small number of external IPs during the window; we cannot fully confirm whether any specific customer's invoices were downloaded.
  timeline: Misconfiguration introduced 2026-04-22 14:30 UTC during a Terraform refactor; detected via cloud security tool 2026-04-23 09:14 UTC; remediated 2026-04-23 09:42 UTC.
  data_affected: Invoice PDFs containing: customer name, billing address, line items, total amount, last 4 of card, invoice date. No full card numbers, no passwords, no SSNs.
  customers_affected: 4,127 customers had at least one invoice in the bucket during the window. Of those, server logs indicate 312 invoices were accessed by unrecognized external IPs.
  not_affected: Production database; customer login credentials; payment instruments; Stripe-tokenized payment data; non-invoice files
  root_cause: A Terraform module change removed an aws_s3_bucket_public_access_block resource. The change passed CI because we did not have a tfsec rule for this; the misconfiguration sat in main for ~3 hours before the deploy hit prod.
  actions_taken: Bucket access blocked within 28 minutes of detection; full IP/UA log analysis completed; Terraform module restored with explicit public access block; tfsec rule added to require public access block on all buckets; engaged outside forensics firm for independent confirmation of scope.
  customer_actions: Review recent invoices for any anomalies. We do not believe this incident exposes credentials or payment instruments, so no password changes are required; if you wish to rotate as standard hygiene, we support that.
  regulatory: GDPR Article 33 — 72-hour notification to supervisory authority required (subset of affected customers are EU); some US state laws may apply; review with Legal.
  audience: All affected customers individually; public status page entry; no broad press release planned.
exampleOutput: |
  ## 1. Email to affected customers

  **Subject**: Important security notice about your invoices on [Company]

  Hi [First name],

  On April 23 we discovered that a configuration change had made customer invoice PDFs in one of our cloud storage locations accessible to anyone on the internet for approximately 19 hours, between April 22 14:30 UTC and April 23 09:42 UTC. Your account is one of approximately 4,100 with invoices in that location during the window.

  **What was exposed.** The PDFs contain your name, billing address, invoice line items, total amount, last 4 digits of the card we charged, and invoice dates.

  **What was not exposed.** Our production database was not accessed. No login credentials, no full card numbers, no payment instruments, and no other documents were exposed by this incident.

  **What we know about access.** Server logs show a small number of external systems accessed PDFs during the window. We are unable to fully determine which specific customer files were downloaded, but our analysis flagged approximately 300 invoices as having been accessed by addresses we do not recognize. We have engaged an outside forensics firm to independently confirm scope.

  **What caused it.** A Terraform configuration change removed a setting that blocks public access to the storage bucket. We did not have an automated check that would have caught this configuration; we do now.

  **What we have done.** We blocked public access within 28 minutes of detection. We restored the configuration, added an automated check that prevents this class of misconfiguration on every change, and are reviewing all of our cloud storage configurations for similar issues.

  **What you should do.** Because no credentials or payment instruments were involved, you do not need to change your password or reissue your card. We recommend reviewing recent invoices for anything unfamiliar. If you have questions or want to confirm what was in the affected files, reply to this email or contact security@[company].com — we are responding within one business day.

  We are sorry. This was preventable on our side, and we owe you the details we have. We will follow up if our forensic analysis changes the picture.

  — [Name], [Title]
  [Company]

  ---

  ## 2. Public status page entry

  **April 23, 2026 — Resolved: customer invoice exposure**

  Between April 22 14:30 UTC and April 23 09:42 UTC, a configuration change made customer invoice PDFs accessible without authentication. The configuration was restored within 28 minutes of detection. Approximately 4,100 customers had invoices in the affected location; we have notified those customers individually with details of what was and was not exposed. No login credentials, payment instruments, or production database content was affected. We have added automated controls to prevent recurrence and engaged an outside firm to validate the scope.

  Status page contact: security@[company].com.

  ---

  ## 3. CS team talking points

  - "Was my data accessed?" → "Server logs show a small number of external addresses accessed files during the window. We can confirm whether your specific invoices were among the ~300 we identified as accessed by unrecognized addresses — let me check your account."
  - "What was in the file?" → "Customer name, billing address, invoice line items, total, last 4 of card, invoice date. No full card numbers, no passwords."
  - "Do I need to reset my password?" → "Not because of this incident — credentials were not in the exposed files. If you'd like to rotate as standard practice, we support that."
  - "Was my credit card exposed?" → "No. We don't store full card numbers; only the last 4 digits appeared on the invoice."
  - "Are you reporting this to regulators?" → "We are notifying applicable supervisory authorities under GDPR Article 33 within the required 72-hour window. We are also reviewing US state notification requirements with Legal."
  - "Can I get a copy of the forensic report?" → "We're engaging an outside firm; once their scope confirmation is complete, we will share what we can. Some details remain confidential pending the investigation."
  - "Will you compensate me?" → "We're addressing each customer's situation individually. Please continue this conversation with me and we'll route to the right team."
  - DO NOT speculate beyond the email. If asked something not in talking points, say "Let me get an answer and follow up" and escalate to security@.

  ---

  ## 4. Internal Slack — #all-employees

  Team — earlier this morning we identified and remediated a security incident affecting a subset of customer invoice PDFs. We have notified affected customers and posted a public status page entry. Details are in the email going out from [Name].

  Two requests:
  1. **Do not speculate publicly** — including LinkedIn, Twitter, customer calls outside CS, or family/friends. If a customer asks you, route to security@. If a journalist or investor asks, route to comms@.
  2. **If you spot something** that looks related (an inbound from an unusual IP, a customer report of an odd email referencing their invoice), forward to security@ immediately.

  We will share the postmortem internally next week. Thank you for the discipline today.

  — [Name], CISO

  ---

  ## 5. Regulatory notification (substance)

  GDPR Article 33 notification to supervisory authority — must file within 72h of becoming aware (clock started 2026-04-23 09:14 UTC):

  - Nature of breach: unauthorized public access to invoice PDFs via misconfigured cloud storage
  - Categories of data: identification (name, address), financial transaction (invoice content, last 4 digits of card)
  - Categories of data subjects: paying customers, including EU residents (count to be confirmed)
  - Approximate number of records: ~4,100 customers; ~300 invoices confirmed as accessed by unrecognized addresses
  - Likely consequences: limited; no credentials, no full payment instruments, no SSNs
  - Measures taken: containment within 28 min of detection; forensic engagement; preventive control (tfsec rule) added
  - DPO contact and incident reference

  Confirm with Legal: applicability of US state notification laws (CCPA in California requires notice to AG if >500 California residents; depending on actual EU vs US split, multiple state laws may apply).

  ---

  ## 6. What we are NOT saying yet and why

  - **Specific external IPs that accessed files**: forensic analysis ongoing; sharing prematurely could compromise investigation or wrongly implicate IPs that turn out to be legitimate scanners. Internal reference only.
  - **Names of the engineers involved in the deploy**: blameless culture; named individuals do not appear in customer comms.
  - **Vendor/tooling specifics that could aid an attacker**: we say "Terraform configuration change" — accurate. We do not name the cloud security tool that detected it (could attract probing).
  - **Whether this is a "breach" under specific state laws**: Legal determination in progress. We use "exposure" in customer comms; the regulatory notification will use the legally precise term.
  - **Compensation/credit offers**: deferred until forensic scope confirmation. Communicating an offer prematurely could cap our response if scope expands.
tips:
  - "Lead with what was exposed and what was not. Customers calculate the risk; help them calculate it accurately."
  - "Avoid 'abundance of caution,' 'your trust is important to us,' and any other phrase customers have heard so often it triggers eye-rolling. Simple direct language sounds honest because it is."
  - "Own the cause if it's known and ownable. 'A configuration change we made' lands better than 'a configuration issue occurred.'"
  - "Do not promise compensation in the first communication unless you've already decided. Promises in early comms get misquoted; commitments come later in writing."
  - "AI assistance is not a replacement for security review by qualified professionals. Every word of customer-facing security comms must be reviewed by Legal and Security leadership before sending — there are subtle terms (breach vs incident, accessed vs disclosed) that have legal weight."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - incident-response-playbook
  - vulnerability-triage-report
  - soc2-control-narrative
tags:
  - security-comms
  - incident-response
  - breach-notification
  - gdpr
  - crisis-communications
---
