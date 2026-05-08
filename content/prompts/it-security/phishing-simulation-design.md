---
title: "Design a phishing simulation campaign for employee training"
slug: phishing-simulation-design
function: it-security
role: security
description: "Design a realistic, ethical phishing simulation campaign with templates, success metrics, and a remediation path that doesn't humiliate employees."
useCase: "Use this prompt when planning quarterly security awareness training or after a real phishing incident exposes a gap. The campaign measures real behavior change rather than click rate alone, and is designed to teach instead of punish."
prompt: |
  You are a security awareness lead designing a phishing simulation campaign. Goal: measurable behavior change, not gotchas. Be direct about what works and what doesn't.

  Org context:
  - Company size: {{company_size}}
  - Industry / regulatory frame: {{industry}}
  - Past incidents or known weak spots: {{past_incidents}}
  - Tooling: {{tooling}} (KnowBe4, Hoxhunt, Microsoft Attack Simulator, custom)
  - Employee culture: {{culture}} (tolerance for "tricky" simulations)
  - Specific roles to target or exclude: {{role_targeting}}

  Produce:

  1. **Campaign objectives**: 3 measurable outcomes, not vanity metrics. State the baseline you'll measure against.

  2. **Threat scenarios** (3–5): each grounded in a real phishing pattern relevant to this org and role mix. Avoid clichés (Nigerian prince, generic IT password reset). Examples: vendor invoice spoof, internal HR benefits update during open enrollment, M365 MFA fatigue, cloud-app OAuth grant.

  3. **Email templates** (1–2 fully drafted, headers + body + believable sender domain pattern); for each: the red flags a careful user should catch

  4. **Targeting and pacing**:
     - Population (all-employee, role-targeted, randomized cohorts)
     - Send timing (avoid first-day-of-quarter or right after a real incident)
     - Difficulty progression across the campaign

  5. **Metrics** (with target thresholds):
     - Click rate (and why it's a poor sole metric)
     - Credential submission rate
     - Reporting rate (to security@ or report-phish button) — the most important metric
     - Time-to-first-report
     - Repeat-clicker rate

  6. **Just-in-time training**: what happens when someone clicks. Don't humiliate; teach in <2 minutes. Include the language of the post-click landing page.

  7. **Repeat-offender handling**: progressive remediation, when to involve manager, when (rarely) to escalate to HR. Tone: support, not punishment.

  8. **Reporting and follow-up**:
     - Org-level dashboard
     - Department-level coaching
     - Communication to leadership (avoid shame metrics)

  9. **Ethical guardrails**: scenarios you will not run (e.g., fake bonus letters, fake layoffs, fake bereavement). State why explicitly.

  10. **Schedule and budget**: 12-month plan with cadence and rough cost

  Tone: practical, slightly skeptical of vendor maximalism. The point is fewer real compromises, not bigger dashboards.
variables:
  - "{{company_size}}"
  - "{{industry}}"
  - "{{past_incidents}}"
  - "{{tooling}}"
  - "{{culture}}"
  - "{{role_targeting}}"
exampleInput: |
  company_size: 850 employees, 6 offices, ~60% remote
  industry: B2B SaaS — fintech-adjacent (payments processing); SOC 2 + PCI-DSS compliance
  past_incidents: 1) BEC attempt against AP team in Q4 2025 (caught by AP procedure, not by employee detection); 2) Quarterly real phishing rate trending up — real reports increased 3x year-over-year
  tooling: KnowBe4 for simulation + LMS; Microsoft Defender for Office 365; report-phish button deployed in Outlook; security@ inbox for reports
  culture: Engineering-heavy, generally low tolerance for "stunt" simulations after a bonus-letter campaign in 2023 generated significant pushback
  role_targeting: Always include AP/Finance, Engineering with admin privileges, and Customer Success (they receive most external email). Exclude Legal during contract-heavy quarters per agreement with GC.
exampleOutput: |
  # Phishing Simulation Campaign — FY26

  Owner: Security Awareness, AppSec team. Sponsor: CISO. Effective: 2026-Q2.

  ## 1. Objectives (with baseline)

  - **Increase reporting rate from 14% (2025 avg) to ≥35% by Q4 2026.** Reporting is the only metric that says "the human caught it before it mattered."
  - **Reduce credential submission rate from 4.1% to ≤1.5%.** Click ≠ compromise; credential entry usually does.
  - **Reduce time-to-first-report from 47 minutes to ≤15 minutes** for AP/Finance and engineering admins. Fast first reports protect everyone else.

  Click rate is reported but not an objective. We don't reward "didn't click" the same way we reward "reported it" — they're different behaviors.

  ## 2. Threat scenarios

  S1: **Vendor invoice spoof to AP** — looks like a known vendor (we'll use a real-but-altered vendor name from our AP list, with consent from CFO) requesting bank-account-change for next payment. Targets the BEC pattern from the Q4 2025 attempt.

  S2: **M365 MFA fatigue** — fake "authentication request" page mimicking our IdP, harvested behind a fake "Confirm to continue" button. Tests the well-documented MFA-prompt-bombing vector.

  S3: **Open-enrollment HR benefits update** — runs during Q4 actual open enrollment week (with HR/People-Ops alignment) — "Action required to keep your benefits active." Tests urgency-and-authority pattern in a believable seasonal context.

  S4: **Cloud OAuth grant scam** — Google/Microsoft consent-screen lookalike asking to grant a "doc viewer app" permissions to read mail. Targets engineering & PM who frequently install OAuth apps.

  S5: **Customer Support reply-chain hijack** — a fake reply in an existing-looking thread requesting CS to re-send credentials to "the new ticketing system." Targets CS social-engineering exposure.

  Excluded (see §9): bonus-letter scenarios, fake layoffs, fake bereavement.

  ## 3. Email template — Scenario S2 (MFA fatigue)

  ```
  From: "Microsoft 365 Security" <noreply@m365security-alerts.com>
  Subject: Action required: Suspicious sign-in detected for [user.email]
  Reply-To: noreply@m365security-alerts.com

  We detected a sign-in attempt to your [Company] Microsoft 365 account from a new device:

  Device: Windows 11 PC
  Location: Lagos, Nigeria
  IP: 197.210.84.22
  Time: [now - 5 min]

  If this was you, you can confirm and continue. If not, secure your account immediately.

  [Confirm it was me]   [This wasn't me]

  Microsoft 365 Security Team
  ```

  **Red flags a careful user should catch**:
  - Sender domain `m365security-alerts.com` — not `microsoft.com` or our IdP
  - We use Okta, not Microsoft, for SSO — irrelevant brand
  - Geo-spoofing trope (location far from user)
  - Reply-To matches sender (legitimate Microsoft mail doesn't include this)
  - "Both buttons" — both go to a credential-harvesting page

  ## 4. Targeting and pacing

  | Scenario | Who | When | Difficulty |
  |---|---|---|---|
  | S1 | AP/Finance only | Q2 week 4 | High (named vendor) |
  | S2 | All employees, randomized 25% per week | Q2 weeks 6–9 | Medium |
  | S3 | All employees | Q4 open-enrollment week | Medium-high |
  | S4 | Engineering + Product | Q3 week 4 | High |
  | S5 | Customer Success | Q3 week 8 | High |

  Avoid: first day of quarter, payroll day, any active real-incident response. Difficulty escalates over the year.

  ## 5. Metrics

  | Metric | Definition | Q4 target | Why |
  |---|---|---|---|
  | Reporting rate | reports / sends | ≥35% | Only metric measuring "human caught it" |
  | Credential submission rate | submissions / sends | ≤1.5% | Closest proxy to actual compromise risk |
  | Click rate | clicks / sends | ≤12% | Reported but not goaled |
  | Time-to-first-report | median minutes | ≤15 | Speed of detection ↔ blast radius |
  | Repeat-clicker rate (3+ times) | clickers / population | ≤2% | Triggers coaching |

  Click rate alone is misleading: a click that ends in a "you reported it" landing page is fine; a non-click by someone who didn't see the email is not a win.

  ## 6. Just-in-time training

  When a user clicks, the landing page reads (verbatim):

  > **You clicked a phishing simulation. No harm done — this was a controlled test.**
  >
  > What you saw was a simulated [Microsoft 365 sign-in alert]. Three signals would have caught it:
  > 1. Sender domain wasn't @microsoft.com or our IdP
  > 2. We don't use Microsoft 365 for sign-in — we use Okta
  > 3. Both buttons went to the same place
  >
  > Next time, please use the **Report Phish** button in Outlook. Reporting is the most useful action — it protects coworkers who haven't seen the email yet.
  >
  > [Two-minute video: How to spot a credential-harvesting page]
  >
  > Questions? security@[company].com

  No "you failed" language. The training is about what to do, not what they did wrong.

  ## 7. Repeat-offender handling

  - **2 simulation clicks in 90 days** → automated email with a 5-minute interactive module
  - **3 clicks** → 15-minute live session with security awareness team (small group)
  - **4+ clicks** → manager looped in for a coaching conversation. Conversation framework provided to managers; not a performance issue unless paired with a real incident.
  - **Repeat credential submission** (any) → individual coaching by security; manager not involved unless it persists
  - **Real-world successful phish** → no automatic punishment; root cause review focused on system controls (MFA, conditional access, sandboxing), not the individual

  No public lists of "top clickers." Ever.

  ## 8. Reporting and follow-up

  - **Org dashboard** in KnowBe4 and a quarterly slide for CISO 1:1 with leadership: trend lines for the four target metrics, no individual names
  - **Department coaching**: department heads see their dept's metrics privately and decide whether to ask for additional training. Security offers, doesn't impose.
  - **Leadership comms**: quarterly summary celebrates reporting-rate improvement and time-to-first-report. Click-rate framing avoided unless trending unexpectedly badly.

  ## 9. Ethical guardrails (scenarios we will not run)

  - **Fake bonus letters or compensation announcements** — exploits trust in financial communication; generated significant cultural pushback in 2023 and we stopped
  - **Fake layoffs or organizational changes** — uses real anxiety as a lure; demonstrably reduces trust in real comms afterward
  - **Fake bereavement / family emergency** — never
  - **Fake CEO/exec wire requests sent to junior employees not in finance** — the role mismatch teaches nothing; targets BEC scenarios at appropriate roles only
  - **Anything impersonating a specific real coworker** — confusing for both the target and the impersonated person; we use generic external personas only

  These align with NIST SP 800-181 and the FAIR-ER ethics framework recommendations on simulation realism.

  ## 10. Schedule and budget

  - **Cadence**: 5 campaigns over 12 months (one per quarter + one targeted catch-up); supplemented by monthly micro-modules in LMS
  - **Cost**: KnowBe4 license already in place; campaign design + analysis ≈ 0.4 FTE within Security Awareness role; outside content production ≈ $8k/yr for video assets
  - **Time on task per employee**: ≤30 minutes/year of training material if they don't click; ≤90 minutes if they do
tips:
  - "Reporting rate is the only phishing metric that matters. Click rate alone trains people to avoid links, not to recognize and report attacks."
  - "Run scenarios that match real attacker patterns at your org, not generic ones. Generic phishing trains for generic phishing; specific scenarios train for what's actually trying to compromise you."
  - "Never publish individual click data. Public 'clicker lists' destroy the reporting culture you're trying to build."
  - "Match difficulty to role. Engineering admins should see harder simulations than the average employee — their compromise blast radius is larger."
  - "AI assistance is not a replacement for security review by qualified professionals. Have your CISO, HR, and Legal review templates and remediation paths before launch — content that crosses ethical lines damages trust and can trigger real grievances."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - security-policy-acceptable-use
  - employee-onboarding-it-checklist
  - third-party-vendor-risk-assessment
tags:
  - phishing
  - security-awareness
  - training
  - security
  - culture
---
