---
title: "Generate an IT onboarding checklist for a new hire"
slug: employee-onboarding-it-checklist
function: it-security
role: it-support
description: "Produce a role-aware IT onboarding checklist covering accounts, hardware, access, training, and day-1/week-1/month-1 milestones."
useCase: "Use this prompt before a new hire's start date to generate a tailored checklist that reflects their role, location, and access needs. The output is the doc the new hire and their manager actually receive — concrete tasks, dates, and owners — not a generic 'set up your laptop' template."
prompt: |
  You are an IT operations lead generating an onboarding checklist for a new hire. Tailor it to the role and the realities of the company. Avoid items that apply to nobody.

  New hire:
  - Name (or {{name}}): {{name}}
  - Role / department: {{role}}
  - Manager: {{manager}}
  - Start date: {{start_date}}
  - Location / time zone: {{location}}
  - Employment type: {{employment_type}} (FTE, contractor, intern)

  Org context:
  - Identity provider and core SaaS: {{identity_stack}}
  - Hardware standard for this role: {{hardware}}
  - Sensitive systems this role will access: {{sensitive_systems}}
  - Onboarding cohort or solo: {{cohort}}

  Produce:

  1. **Pre-start (manager + IT, 5 days before)**: ordering, account creation, calendar invites
  2. **Day 1**: laptop pickup or shipment confirmation, login, MFA, Okta first login, password manager, basic apps
  3. **Day 1–3**: SSO into role-specific apps, role-based group memberships, dev environment if applicable
  4. **Week 1**: training modules (security awareness, AUP, role-specific), first 1:1 with IT for questions
  5. **Week 2–4**: access expansion as need is established, JIT access patterns for prod, deeper tooling
  6. **30/60/90-day check-ins**: access review, hardware health, training completion

  For each item:
  - Task description (specific, not "get set up")
  - Owner (IT, manager, new hire, automation)
  - Dependency (if any)
  - Verification (how we know it's done)

  Plus:
  - **Role-specific access**: list of apps/systems this role gets, with risk note for any production access
  - **Things they will NOT have access to** (and how to request if needed) — useful for engineers who expect prod admin and won't get it on day 1
  - **Day-1 communication template**: short message from IT to the new hire setting expectations

  Tone: friendly but operational. Avoid "welcome to the family" language; favor "here's what's set up and what to do next."
variables:
  - "{{name}}"
  - "{{role}}"
  - "{{manager}}"
  - "{{start_date}}"
  - "{{location}}"
  - "{{employment_type}}"
  - "{{identity_stack}}"
  - "{{hardware}}"
  - "{{sensitive_systems}}"
  - "{{cohort}}"
exampleInput: |
  name: Anika Reyes
  role: Senior Backend Engineer, Payments team
  manager: Devon Chen
  start_date: Monday 2026-06-02
  location: Austin, TX (Central Time), remote
  employment_type: FTE
  identity_stack: Okta SSO, Google Workspace, Slack, Zoom, Notion, GitHub, AWS via Identity Center, Datadog, PagerDuty, 1Password Business, LaunchDarkly, Linear
  hardware: 16" MacBook Pro M3 Pro, 32GB; Logitech MX Master 3S; YubiKey 5C NFC (2× — primary + backup); ergonomic stipend $400 (separate from IT)
  sensitive_systems: Production AWS (read-only initially, deploy access after 30 days), payments-gateway repo, Stripe restricted dashboard (read-only), customer payment metadata DB (read-only via portal, never direct DB)
  cohort: Joining as part of the June engineering cohort (4 new hires); shared orientation Monday 9–11am Pacific
exampleOutput: |
  # IT Onboarding Checklist — Anika Reyes (Senior Backend Engineer, Payments)

  Start date: Monday 2026-06-02. Manager: Devon Chen. Cohort: June engineering (4 hires).
  Owner: IT Operations. Last updated: 2026-05-07.

  ## Pre-start (5 business days before — by 2026-05-26)

  | Task | Owner | Dependency | Verification |
  |---|---|---|---|
  | Create Okta account from BambooHR feed | Automated (SCIM) | HR record finalized | Okta admin shows user in `Pending` state |
  | Order MacBook Pro 16" M3 Pro 32GB to Anika's home address | IT | Address from BambooHR | Tracking number captured in onboarding ticket |
  | Order 2× YubiKey 5C NFC | IT | Same | Tracking number captured |
  | Enroll laptop in Jamf MDM with `engineering-mac` configuration profile | IT (zero-touch) | Apple Business Manager link | Pre-enrollment shows in Jamf inventory |
  | Pre-create Google Workspace account, suspended until day 1 | Automated | Okta SCIM | Account visible in Google admin |
  | Add to default Okta groups: `all-employees`, `engineering`, `payments-team`, `austin-tx`, `cohort-2026-06` | IT | Manager confirms team via BambooHR | Group memberships visible in Okta |
  | Schedule day-1 9am PT cohort orientation invite from `it-onboarding@` | IT | — | Calendar invite sent to anika@ |
  | Schedule day-1 IT 1:1 (15 min) at 11am PT for questions | IT | — | Calendar invite sent |
  | Manager Devon: schedule team intros + first 1:1 | Devon | — | Manager confirms in BambooHR |
  | Manager Devon: file access request in Linear `IT` project for production AWS read-only role (effective day 8, after security training complete) | Devon | — | Linear ticket created with target date |

  ## Day 1 (Monday 2026-06-02)

  Cohort orientation runs 9–11am PT. Anika should be at her laptop with hardware unboxed by 8:45am CT.

  | Task | Owner | Dependency | Verification |
  |---|---|---|---|
  | Confirm laptop arrived; unbox; power on | Anika | Shipment | Anika replies in onboarding ticket |
  | First boot: complete Apple Setup Assistant; MDM auto-enrolls and provisions | Automated + Anika | Jamf pre-enrollment | Jamf inventory shows enrolled with user identity |
  | Initial Okta login at okta.[company].com; setup password and primary YubiKey | Anika | YubiKey received | Okta user moves from `Pending` → `Active` |
  | Backup YubiKey enrolled as second factor | Anika | Backup YubiKey received | Two factors visible in Okta user profile |
  | 1Password Business account activation | Anika | Okta SSO | Anika sees `Engineering` and `Payments` shared vaults |
  | First Google Workspace login (mail, calendar, drive) | Anika | Okta SSO | First email received from `it-onboarding@` |
  | Slack onboarding: log in via SSO, join cohort + team channels | Anika | Okta SSO | Anika visible in `#payments`, `#cohort-2026-06` |
  | Zoom and PagerDuty SSO logins | Anika | Okta | Confirmation by automated check at 4pm CT |
  | Read and acknowledge Acceptable Use Policy via LMS | Anika | LMS access | Acknowledgment recorded in LMS |
  | Read and acknowledge Secrets Management Policy | Anika | LMS access | Acknowledgment recorded |
  | 11am PT IT 1:1 with Maya (IT) — questions, Yubikey backup confirmation | Maya + Anika | Above complete | 1:1 happens; ticket noted |

  ## Day 1–3

  | Task | Owner | Dependency | Verification |
  |---|---|---|---|
  | GitHub: SSO login, accept org invite, set up SSH/GPG keys via 1Password | Anika | Okta + 1Password | Anika commits a test branch to a sandbox repo |
  | Linear, Notion, Datadog, LaunchDarkly: SSO logins | Anika | Okta | Each visible in Anika's Okta dashboard |
  | Local dev environment: clone payments-gateway, run `scripts/dev-bootstrap.sh` | Anika + Devon (pair) | GitHub access | `make test` passes locally |
  | Stripe restricted dashboard read-only access | IT | Manager approval (already filed) | Anika sees Stripe in Okta dashboard |
  | AWS Identity Center first login — `engineer-readonly-dev` permission set | Anika | Okta + cohort group | `aws sts get-caller-identity` succeeds in dev account |
  | Pair on first PR (review-only) with Devon | Devon | GitHub access | First reviewed PR closed |

  ## Week 1

  | Task | Owner | Dependency | Verification |
  |---|---|---|---|
  | Complete Security Awareness 101 (LMS, ~45 min) | Anika | LMS | Module marked complete |
  | Complete Payments-team-specific data handling training (~30 min) | Anika | LMS | Module complete |
  | Phishing simulation enrollment confirmation | Anika (passive) | Onboarding complete | Visible in KnowBe4 |
  | First on-call shadow with Devon | Anika + Devon | Setup complete | Shadow shift logged in PagerDuty |
  | Friday end-of-week check-in: any setup gaps? | IT (Maya) | — | Onboarding ticket closed or items reassigned |

  ## Weeks 2–4: graduated access

  | Task | Owner | When | Why |
  |---|---|---|---|
  | Production AWS read-only access (`engineer-readonly-prod`) | IT | Day 8, post security training | Read-only enables debugging; no risk surface |
  | First independent PR merged | Anika + reviewers | ~Week 2 | Code-quality milestone |
  | Add to PagerDuty `payments-secondary` rotation as shadow | Manager | Week 3 | Builds on-call familiarity |
  | Production AWS deploy access (`engineer-prod-deploy`) requested via JIT after 30 days | Anika (request) | Day 30+ | Time-bounded, peer-approved |
  | LaunchDarkly write access | Anika | Week 3 | After understanding feature flag patterns |

  ## 30/60/90-day check-ins

  - **Day 30 (IT)**: confirm hardware healthy, MDM compliant, no outstanding access tickets, training 100%
  - **Day 60 (Manager)**: ramp progress, on-call readiness, any access expansion needed
  - **Day 90 (Manager + Security)**: prod deploy access reviewed; quarterly access review participation

  ## Role-specific access summary

  | System | Tier | Day-1 access | Notes |
  |---|---|---|---|
  | GitHub `payments` org | T2 | Day 1 | Standard for Payments engineers |
  | AWS dev account | T3 | Day 1 read+write | Sandbox-equivalent |
  | AWS prod account read-only | T1 access (read) | Day 8 | Post training |
  | AWS prod deploy | T1 (write) | Day 30+ JIT | Peer-approved, 4h sessions |
  | Stripe restricted dashboard | T1 | Day 2 (read only) | Anomaly investigation |
  | Customer payment metadata DB | T1 | Never direct | Always via internal portal |
  | Production Datadog | T2 | Day 1 (read) | Standard |
  | LaunchDarkly | T2 | Day 1 read; Week 3 write | After flag-pattern review |
  | PagerDuty | T2 | Day 1 (read), Week 3 (responder) | After shadowing |

  ## Things Anika will NOT have on day 1 (and how to request)

  - **Production AWS write/admin**: not granted by default; request via Slack `/access` JIT after 30 days. We grant 4-hour sessions, peer-approved, time-bounded.
  - **Customer DB direct query**: not granted to anyone in engineering; query via internal portal with approved query templates. Genuine need = ticket to Security with justification.
  - **Stripe live secret keys**: never granted to humans; backend services hold them via Secrets Manager.
  - **Org admin in Okta / Google / GitHub**: only platform/IT teams.
  - **Manager-level approvals in spend tools**: comes with management role, not engineer role.

  ## Day-1 message template (from IT to new hire)

  > Hi Anika — welcome.
  >
  > Your laptop tracking number is [TRACKING]. By Friday afternoon you should have it in hand. Please reply to this message when it arrives so we can coordinate first-boot.
  >
  > **Monday morning**: at 9am Pacific (8am Austin), join the cohort orientation Zoom — calendar invite already on your calendar. We'll walk through Okta setup, MFA, and answer questions.
  >
  > **Before Monday**: nothing to do other than receive the laptop. Don't try to set anything up early — the MDM enrollment expects a fresh boot.
  >
  > **At 11am Pacific Monday**, you have a 15-minute 1:1 with me (Maya) for any questions or hiccups.
  >
  > If anything's broken or unclear, reply to this thread or message me on Slack as soon as you have access. We try to make day 1 boring in the good way.
  >
  > — Maya, IT Operations
tips:
  - "Tailor by role. A senior backend engineer needs different access (and different timing) than a sales rep or a designer; a generic checklist creates either overprovisioning or day-1 friction."
  - "Graduate access. Day-1 production write access is a common audit finding and a real risk. Read-only on day 1, JIT or peer-approved write later."
  - "Make 'what they don't have' explicit. Engineers who expect prod admin and don't get it on day 1 are far less frustrated when the doc said so up front."
  - "Use SCIM and group-based provisioning. Manual click-throughs in 12 admin consoles are the source of most onboarding gaps and offboarding misses."
  - "AI assistance is not a replacement for security review by qualified professionals. Have your security and compliance lead review access lists for any role with production data exposure — getting day-1 access wrong is the easiest way to fail a SOC 2 audit."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - asset-management-policy
  - helpdesk-ticket-triage
  - secrets-management-policy
tags:
  - onboarding
  - it-support
  - access-management
  - new-hire
  - identity
---
