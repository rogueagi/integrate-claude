---
title: "Draft an acceptable use policy"
slug: security-policy-acceptable-use
function: it-security
role: security
description: "Produce an acceptable use policy that employees will read, understand, and follow — clear about what's allowed, what isn't, and consequences."
useCase: "Use this prompt when establishing an AUP for a new company, refreshing a stale 2018 version, or harmonizing local policies after an acquisition. The output reads like a real human wrote it, names common gray-area situations, and avoids legal-template fog."
prompt: |
  You are a security and people-ops professional drafting an Acceptable Use Policy (AUP) for company assets and systems. Write a policy people will actually read — direct, specific, free of legal-template padding. Address modern realities (BYOD, AI tools, personal use) head-on.

  Org context:
  - Company size: {{company_size}}
  - Industry / regulatory frame: {{industry}}
  - Workforce mix: {{workforce_mix}} (remote/hybrid, contractors, geographies)
  - Devices: {{devices}} (corporate laptops, BYOD phones, personal devices)
  - Sensitive systems: {{sensitive_systems}}
  - Specific concerns or recent incidents: {{concerns}}

  The AUP must cover:

  1. **Scope**: who and what this applies to (employees, contractors, devices, accounts)

  2. **General principles** (3–5): the spirit, in plain English, before the rules

  3. **What's allowed**: limited personal use, BYOD with restrictions, AI tools, etc. — be permissive where reasonable

  4. **What's not allowed**: explicit list with examples; cover the common gray areas (sharing accounts with family, installing unapproved software, running side businesses on company hardware)

  5. **AI / LLM use**: which tools are approved, what data can be input, what cannot. This is 2026; this is its own section.

  6. **Data handling**: classification levels referenced, basic rules per level (e.g., "no Tier 1 data in personal email")

  7. **Personal devices (BYOD)**: when allowed, what's required (MDM enrollment, screen lock), what the company can and cannot see

  8. **Monitoring**: honest disclosure of what the company logs and reviews; what triggers individual review

  9. **Reporting**: how to report security concerns; whistleblower protections; promise of no retaliation for good-faith reporting

  10. **Consequences**: graduated, proportionate. Distinguish accidental violation (training) from willful misuse (HR action) from malicious activity (termination, possibly legal).

  11. **Updates and acknowledgment**: how the policy is updated and how acknowledgment is captured

  Tone: matter-of-fact, slightly skeptical of compliance theater. Show you trust adults to act responsibly while being clear about hard rules. Avoid "stakeholder," "robust framework," and any phrase a templated AUP would use.
variables:
  - "{{company_size}}"
  - "{{industry}}"
  - "{{workforce_mix}}"
  - "{{devices}}"
  - "{{sensitive_systems}}"
  - "{{concerns}}"
exampleInput: |
  company_size: 240 employees + ~40 contractors
  industry: B2B SaaS — handles customer payment metadata, SOC 2 + PCI compliance
  workforce_mix: Fully remote across US and 6 EU countries
  devices: Corporate MacBooks issued to all FTEs; BYOD phones common (personal iPhones used for Slack and email); contractors use their own laptops with VDI
  sensitive_systems: Production AWS, customer database, Stripe admin, Salesforce CRM, Google Workspace
  concerns: |
    - Recent incident where an engineer pasted a customer email into ChatGPT consumer (free tier) for help drafting a reply
    - Two cases of employees forwarding work email to personal Gmail "to read on the weekend"
    - Quiet drift toward employees using personal Notion accounts for work notes
exampleOutput: |
  # Acceptable Use Policy

  Owner: Security + People. Effective: 2026-05-07. Reviewed annually. Read time: ~8 minutes.

  We trust adults to act like adults. This policy describes how we use company systems and data, with focus on the few areas where the rules are firm. Read it once, refer to it when you're unsure, ask in #ask-security when this doc doesn't answer your question.

  ## 1. Scope

  This policy applies to: employees, contractors, interns, and anyone with credentials to a [Company] system. It covers: company-issued devices, personal devices used for work, all SaaS accounts provisioned by IT, and access to customer or company data.

  Contractors are bound by the same rules through their MSA; some sections (e.g., BYOD) have contractor-specific clauses noted inline.

  ## 2. Principles

  1. **Default to caution with customer data.** When in doubt about whether something is OK, treat customer data as if a customer could see what you're doing.
  2. **Use approved tools.** It's faster than getting in trouble for an unapproved one. If a tool you need isn't on the approved list, ask in #ask-it — we move quickly to evaluate new requests.
  3. **Minimal personal use is fine.** A quick personal email or banking check on your work laptop isn't a problem. Running your side business on it is.
  4. **Tell us when something goes wrong.** We'd rather hear "I think I just clicked a phishing link" than find out from logs three days later. Reporting honestly will not get you in trouble.
  5. **Privacy and security are paired, not opposed.** What we monitor, we tell you about (see §8). What you do on your own time on your own devices is yours.

  ## 3. What's allowed

  - **Reasonable personal use** of work devices and accounts: occasional browsing, banking, personal email, music. Don't make it your primary use.
  - **Approved AI tools** (see §5) for work tasks, including code assistance and writing help.
  - **BYOD phones** for Slack, Gmail, calendar, and Okta authenticator, with the requirements in §7.
  - **Personal accounts on company devices** for non-work things (Spotify, news, etc.) — keep them separate from your work Google account.
  - **Side projects and outside writing** that don't use company time, equipment in any meaningful way, customer data, or company-confidential information. Disclose if you're unsure.

  ## 4. What's not allowed

  - **Pasting customer or company-confidential data into unapproved tools.** This includes unapproved AI tools, personal email, personal cloud accounts, and shared personal note-taking apps. (See §5 for AI specifics.)
  - **Forwarding work email to personal email accounts** for any reason. We've seen "to read on the weekend" come up; the answer is "use the Gmail mobile app or the work laptop." Forwarded mail leaves our security perimeter and is hard to recover during an investigation.
  - **Storing work data in personal cloud accounts** (personal Drive, personal Dropbox, personal Notion, personal GitHub). Use the company-provisioned versions.
  - **Sharing your password or MFA token with anyone**, including IT. IT will never ask. (If "IT" asks, it isn't us.)
  - **Sharing your account with family members** or letting others use your work device for their own purposes.
  - **Installing software from unapproved sources** on the company laptop. Self-Service has the approved catalog; ask in #ask-it for additions.
  - **Running cryptocurrency miners, torrents, game servers, or commercial services** on company resources or networks.
  - **Bypassing security controls** including the MDM, VPN, browser extensions, or DNS filter.
  - **Accessing customer data without a documented business reason.** "I was curious" is not a business reason.
  - **Using company resources for harassment, threats, hate speech, or any conduct that would violate the Code of Conduct.**

  ## 5. AI and LLM use

  Real talk: AI tools are useful, and we want you to use them well. Recent incidents prompted clearer rules.

  **Approved for work**:
  - Anthropic Claude (Pro/Team/Enterprise) via the company-provisioned account
  - GitHub Copilot (Business tier, enrolled via IT)
  - ChatGPT Team or Enterprise via the company-provisioned account
  - Internal AI assistants we deploy (e.g., the customer-data assistant in Salesforce)

  **Not approved for work data**:
  - ChatGPT free or personal Plus accounts
  - Bard / Gemini personal accounts
  - Any LLM you sign up for with your personal email or personal credit card

  **What you can put into an approved tool**:
  - Internal documentation, code, drafts, your own work
  - Tier 3 data (public or general internal)
  - Tier 2 data (internal sensitive — fine in approved Enterprise/Team accounts only, never in consumer accounts)

  **What you cannot put into any AI tool**:
  - Customer personally identifiable information (names + details, account info)
  - Customer payment data or anything touching the PCI scope
  - Login credentials, API keys, tokens, private keys
  - Anything covered by an NDA you've personally signed

  When in doubt about a specific case, ask in #ask-security — same-day answer.

  ## 6. Data handling

  Our data classification is: **Tier 1 (crown jewels — payment data, credentials, KMS keys)**, **Tier 2 (internal sensitive — customer PII, financial reports, source code)**, **Tier 3 (general internal — meeting notes, roadmaps)**, **Tier 4 (public)**.

  Headline rules:
  - Tier 1: only in approved production systems. Never in email, Slack, docs, AI tools, or personal devices.
  - Tier 2: company-provisioned tools only. Approved AI Enterprise/Team accounts OK.
  - Tier 3: company-provisioned tools preferred. AI tools fine.
  - Tier 4: anywhere.

  ## 7. Personal devices (BYOD)

  - **Phones**: BYOD allowed for Slack, Gmail, calendar, Okta. Required: MDM profile installed, device passcode/biometric, OS up to date. The MDM lets us wipe work data if your phone is lost or you leave; we cannot read your personal photos, messages, or browsing.
  - **Laptops**: contractors only, with a documented technical control review. Employees use the issued MacBook.
  - **What we can see on your personal phone**: device compliance status (encrypted, passcode set, OS version), the work apps' data, and the ability to selectively wipe work data. We cannot see your messages, photos, location history, or personal app data.
  - **What we ask**: do not store work data outside the work apps. Don't, for example, screenshot a Slack conversation containing customer data into your camera roll.

  ## 8. Monitoring

  Honest list of what we log and review:

  - **Endpoint**: the MDM logs OS version, encryption status, installed apps from the approved catalog. We do not screenshot you or keylog.
  - **Network**: corporate VPN logs source/destination/bytes; we do not inspect HTTPS content.
  - **Email and Slack**: stored per legal retention. Reviewed only on incident, legal hold, or HR investigation — not for general performance review.
  - **AWS / production systems**: full audit log via CloudTrail, retained 1 year online + 7 years archive.
  - **AI tool usage**: enterprise plans log prompts and responses for compliance; reviewed only on incident.

  Individual review of any of the above happens when: (a) a security incident triggers it, (b) HR investigation, (c) legal hold, (d) explicit consent. It is not used for managerial surveillance.

  ## 9. Reporting

  - **Suspected phish or weird email**: use the Report Phish button in Outlook/Gmail or forward to phish@[company].com
  - **Suspected security incident**: #sec-incidents in Slack or security@[company].com (24/7 PagerDuty for the security on-call)
  - **Lost/stolen device**: IT helpdesk immediately, then your manager
  - **Anonymous reporting**: ethics-line at <link>; we use a third-party service so reports are not traceable to you

  Good-faith reporting will not result in retaliation. Reporting your own mistake earns you our gratitude, not a write-up. Repeat patterns of the same mistake will trigger coaching, not punishment.

  ## 10. Consequences

  - **Accidental violation** (e.g., forwarded one email to personal Gmail without thinking): conversation with manager + 5-minute training module
  - **Repeated minor violation**: HR involvement, possible written warning
  - **Willful violation** (e.g., installing crypto miner, sharing credentials, using unapproved AI for customer data after being told not to): formal HR action up to and including termination
  - **Malicious activity** (e.g., exfiltrating customer data, sabotage): termination and potential legal action

  We try to read intent. The first time someone bumps into a rule they didn't know existed, we explain. The fifth time, the conversation is different.

  ## 11. Updates and acknowledgment

  - Policy reviewed annually by Security + People + Legal; material changes communicated 30 days before effective date
  - All employees and contractors acknowledge this policy at onboarding and at each material update via the LMS
  - Questions: #ask-security
tips:
  - "Write the AUP that you'd want to read on day one. Templates feel like templates because they were written for auditors, not for the humans who have to follow them."
  - "Address recent incidents directly. The AI section in the example is more useful for naming the actual ChatGPT-paste-incident than for being theoretically complete."
  - "Be permissive where reasonable. 'Reasonable personal use is fine' builds trust; 'no personal use whatsoever' invites silent violation."
  - "Make the consequences proportionate and visible. Employees who can predict consequences will self-regulate; employees who can't will hide mistakes."
  - "AI assistance is not a replacement for security review by qualified professionals. Have HR, Legal, and the works council (where applicable in EU) review before publishing — language in this policy has employment-law implications."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - secrets-management-policy
  - asset-management-policy
  - employee-onboarding-it-checklist
tags:
  - acceptable-use
  - policy
  - security
  - hr
  - byod
---
