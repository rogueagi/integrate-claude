---
title: "Draft an asset management policy"
slug: asset-management-policy
function: it-security
role: it-support
description: "Produce an asset management policy covering hardware lifecycle, software inventory, ownership, return, and audit cadence."
useCase: "Use this prompt when standing up asset management for a growing company, preparing for SOC 2 / ISO 27001 audit, or after losing track of how many laptops are in the field. The output is a working policy with specific tools, owners, and procedures — not a vague reference document."
prompt: |
  You are an IT operations lead drafting an asset management policy. Tone: practical, audit-ready, no padding. Cover hardware, software, and SaaS subscriptions — modern asset management is all three.

  Org context:
  - Company size: {{company_size}}
  - Workforce mix and geography: {{workforce_mix}}
  - Existing tools: {{existing_tools}}
  - Compliance frame: {{compliance}}
  - Current state: {{current_state}}
  - Pain points: {{pain_points}}

  The policy must cover:

  1. **Scope and definitions**: what counts as an asset (and what doesn't)
  2. **Asset categories and tiers**: e.g., Tier 1 (production servers, domain controllers), Tier 2 (employee laptops, mobile), Tier 3 (peripherals, accessories)
  3. **Inventory and tagging**: how assets are recorded, identifier scheme, tooling
  4. **Lifecycle stages**: procurement → provisioning → in-use → reassignment → retirement → disposal
  5. **Ownership and accountability**: asset owner, custodian, financial owner; what changes at handoff
  6. **Issuance and return**: new hire, role change, offboarding, lost/stolen
  7. **Software inventory**: how installed software is tracked; standard image; allowed/blocked applications
  8. **SaaS / subscription inventory**: tracking SaaS spend and access; orphaned account detection
  9. **Audit and reconciliation**: physical audit cadence, MDM-to-CMDB reconciliation, SaaS-to-HR reconciliation
  10. **Disposal and data sanitization**: NIST SP 800-88 reference for media sanitization; certificate of destruction; environmental
  11. **Lost/stolen handling**: reporting, response, remote wipe, replacement
  12. **Roles and responsibilities**

  Tone: direct. Each section should answer "what do I do" for someone tasked with that step.
variables:
  - "{{company_size}}"
  - "{{workforce_mix}}"
  - "{{existing_tools}}"
  - "{{compliance}}"
  - "{{current_state}}"
  - "{{pain_points}}"
exampleInput: |
  company_size: 500 employees
  workforce_mix: 70% remote across 15 US states + 4 EU countries; 30% hybrid in 2 offices (SF, London)
  existing_tools: Jamf Pro (Mac), Intune (small Windows fleet), BambooHR, Okta, Snipe-IT (deployed but underused), Workspace, Office 365, Zylo for SaaS spend (recently purchased)
  compliance: SOC 2 Type II; ISO 27001 in progress; GDPR
  current_state: ~700 deployed laptops; ~600 actively in MDM; ~100 unaccounted for in latest audit. SaaS sprawl: ~180 SaaS apps across the org, only 70 tracked in Zylo today. Disposal currently ad-hoc — IT keeps a closet of old laptops.
  pain_points: Offboarding slow — laptops not returned for weeks. No formal disposal pipeline. Software inventory is "what's in the standard image" with no real tracking of post-deploy installs. Orphaned SaaS accounts found 6 months after employees left.
exampleOutput: |
  # Asset Management Policy

  Owner: IT Operations. Effective: 2026-05-07. Reviewed annually.

  ## 1. Scope and definitions

  This policy covers the lifecycle of:
  - **Hardware assets**: laptops, desktops, mobile devices issued by the company, peripherals over $100 retail (monitors, headsets, docks)
  - **Software assets**: applications installed on company-managed endpoints
  - **SaaS subscriptions**: cloud applications with org-level admin or paid seats

  Out of scope: consumables (cables under $20, printer ink), personal devices not enrolled in MDM, free-tier tools individual employees may use for non-work purposes.

  Definitions:
  - **Asset owner**: the team or business unit accountable for the asset's appropriate use (e.g., Engineering owns engineer laptops as a class)
  - **Asset custodian**: the individual currently in possession of the asset
  - **Financial owner**: the budget that paid for it (often Finance, sometimes the team)

  ## 2. Asset categories and tiers

  | Tier | Examples | Tracking | Audit cadence |
  |---|---|---|---|
  | T1 — Critical infrastructure | Domain controllers, network gear in office, conference room AV controllers | Snipe-IT + Jamf/Intune; physical audit + MDM reconciliation | Quarterly |
  | T2 — Employee endpoints | Laptops, company phones, YubiKeys | Snipe-IT + Jamf/Intune; HR-to-MDM reconciliation | Quarterly |
  | T3 — Peripherals (>$100) | Monitors, docking stations, headsets | Snipe-IT (basic); no MDM | Annually |
  | T4 — Software | Applications on managed endpoints | Jamf/Intune inventory; weekly automated report | Weekly automated, quarterly manual review |
  | T5 — SaaS | Paid cloud applications | Zylo + Okta SSO logs | Monthly reconciliation |

  ## 3. Inventory and tagging

  - **System of record**: Snipe-IT for hardware. CMDB-style entry per asset.
  - **Identifier scheme**: company-laptop tag prefix `LP-` followed by 5-digit sequence (`LP-04217`). Asset tag physically applied to laptop and matches inventory record.
  - **Required fields**: serial number, asset tag, model, purchase date, financial owner, current custodian, location (state/country), MDM enrollment status, status (in-stock / deployed / repair / retired / disposed)
  - **Automation**: Jamf and Intune push device records to Snipe-IT nightly via API. Drift between MDM and Snipe-IT is reported in a daily dashboard.

  ## 4. Lifecycle

  **Procurement** (IT + Finance):
  - Standard models per role tier, ordered through approved vendors
  - Asset record created in Snipe-IT at PO time, status `ordered`

  **Provisioning** (IT, automated where possible):
  - Apple Business Manager / Windows Autopilot for zero-touch enrollment
  - Asset linked to custodian (new hire) at shipment; status → `deployed`
  - Standard image (managed by Jamf / Intune configuration profile) applied at first boot

  **In-use**:
  - Custodian responsible for physical care, reasonable security (don't leave in cars, screen lock enforced by MDM)
  - Hardware issues open IT ticket; loaner pool available for 1-week+ repairs

  **Reassignment** (role change, internal transfer):
  - If laptop leaves the team's hardware tier (e.g., engineer → ops), reassess hardware fit
  - Asset record updated; previous custodian's accounts removed before new custodian receives

  **Retirement** (end of life — typically 4 years for Mac, 3 for Windows):
  - Status → `retired`, removed from MDM after data sanitization
  - Disposal pipeline (see §10)

  ## 5. Ownership and accountability

  - **At provisioning**: custodian acknowledges receipt + asset return obligation in onboarding (signed in BambooHR)
  - **At reassignment**: outgoing custodian's responsibility ends only after IT confirms data wipe
  - **At offboarding**: custodian responsible for return per §6; failure to return triggers cost recovery via final paycheck where law allows

  ## 6. Issuance and return

  **New hire**: see onboarding policy. Laptop ships 5 business days before start; tracking captured.

  **Offboarding** (cohort issue today — strict process going forward):
  - HR posts termination in BambooHR (real-time SCIM trigger)
  - IT generates a return kit (prepaid box, instructions, packing list) within 4 business hours of separation
  - Return kit shipped same business day to custodian's address on file
  - **Hard return deadline: 7 calendar days from separation date**
  - At day 5: IT email reminder
  - At day 7: IT escalation to People Ops + manager
  - At day 14: cost recovery process initiated where legal; asset marked `lost`
  - Returned hardware processed within 5 business days of receipt: data sanitized (§10), assigned to repair pool or refurb pool

  **Lost/stolen**: see §11.

  ## 7. Software inventory

  - **Standard image**: managed by Jamf/Intune configuration profile; new installs require admin elevation per AUP
  - **Self-Service catalog**: ~200 approved applications available without IT ticket; install events logged
  - **Other installations**: blocked at OS level for non-admin users; admin-elevation requests routed to IT and logged
  - **Reporting**: weekly automated report on apps installed across the fleet. Apps appearing on >5 endpoints that aren't in the catalog trigger a review (potential cataloging or potential blocking)
  - **License compliance**: paid software requires either site license (centrally managed) or per-seat tracking via Snipe-IT software module

  ## 8. SaaS / subscription inventory

  - **System of record**: Zylo (SaaS spend management) + Okta SSO event log (access truth)
  - **Discovery**: Zylo agents pull from spend data (Brex, AmEx, AP); Okta provides authoritative SSO-connected access
  - **Shadow IT detection**: monthly review of expense reports for SaaS-shaped charges not in Zylo
  - **Orphaned account detection**: monthly job comparing Okta active users vs each SSO-connected SaaS app's active users; mismatches investigated within 5 business days
  - **Procurement gate**: any new SaaS spending over $1k/year or handling Tier 1/2 data must complete vendor risk assessment (see related policy) before contract
  - **Reconciliation cadence**: monthly Zylo-to-HR reconciliation by IT; quarterly review with Finance

  ## 9. Audit and reconciliation

  - **Quarterly hardware audit**: Snipe-IT records reconciled against MDM (Jamf/Intune) inventories. Any asset in Snipe-IT but not MDM (or vice versa) investigated within 30 days. Last audit gap (100 unaccounted of 700) is the impetus for this policy.
  - **Quarterly HR-to-MDM reconciliation**: every active MDM device should map to an active employee or known loaner; orphans investigated
  - **Monthly SaaS reconciliation**: see §8
  - **Annual physical audit** of office-located T1 assets (network gear, conference room AV)

  Findings logged; remediation tracked in Linear `IT` project; persistent gaps escalated to CISO.

  ## 10. Disposal and data sanitization

  Sanitize before disposal per NIST SP 800-88 Rev 1:
  - **Self-encrypting drives (Apple Silicon, modern Windows)**: cryptographic erase via secure-erase command (Apple Configurator / Microsoft Surface Data Eraser); MDM-confirmed
  - **Legacy magnetic drives**: physical destruction (shredding); maintained by approved vendor with certificate of destruction

  Disposal vendor: contract with [vendor] for ITAD (IT asset disposition) including certificate of destruction per asset, environmentally responsible recycling per R2/RIOS standards. Track certificate per asset in Snipe-IT.

  Closet of old laptops mentioned in current state — inventory and process within 90 days; do not let unaccounted-for hardware accumulate.

  ## 11. Lost or stolen

  Custodian responsibilities:
  - Report immediately to IT (`lost-device@` and Slack `#it-help`) and manager
  - Within 4 hours of awareness if a security incident is suspected (e.g., unattended in public)

  IT response:
  - **Within 1 hour of report**: remote lock or wipe via MDM; revoke active sessions in Okta
  - **Within 4 hours**: assess data exposure (was disk encryption confirmed at last MDM check-in? When was last lock?); engage Security on-call if Tier 1/2 data plausibly exposed
  - **Within 1 business day**: file police report if stolen (some insurance and customer-contractual obligations require this)
  - **Within 5 business days**: replacement device provisioned

  GDPR / regulatory: if device contained personal data of identifiable individuals and disk encryption status is unconfirmed at last check-in, treat as potential breach and engage Security/Privacy/Legal under §72-hour notification.

  ## 12. Roles and responsibilities

  - **IT Operations**: owns this policy, runs reconciliation, provisions and retires assets
  - **Custodian**: physical care, return obligations, immediate reporting of loss
  - **Manager**: enforces return at offboarding; signs off on reassignment
  - **Finance**: pays invoices, owns financial-asset register reconciliation with IT
  - **People Ops / HR**: triggers provisioning and offboarding via BambooHR; cost recovery on non-return
  - **Security**: handles loss-of-device incidents involving Tier 1/2 data; quarterly review of audit findings

  ---

  Acknowledgment: all employees and contractors acknowledge this policy at onboarding. Material changes communicated 30 days before effective date.
tips:
  - "Asset management is three problems — hardware, software, SaaS — and most policies only cover the first. SaaS sprawl is now the larger spend and the bigger access risk."
  - "Reconciliation cadence is what separates a working policy from a wallpaper policy. If you're not reconciling MDM-to-HR-to-Snipe-IT quarterly, your inventory is out of date and your audit will find it."
  - "The offboarding return process is the single biggest source of loss in most companies. A prepaid return kit on day 1 of separation closes the gap fast."
  - "Don't keep a closet of old laptops. Auditors hate it; data on them is a liability; environmental rules apply. Set a 90-day disposal SLA and stick to it."
  - "AI assistance is not a replacement for security review by qualified professionals. Have Security and Legal review the lost/stolen and disposal sections — these have breach-notification and environmental-compliance implications."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - employee-onboarding-it-checklist
  - secrets-management-policy
  - security-policy-acceptable-use
tags:
  - asset-management
  - it-policy
  - inventory
  - mdm
  - compliance
---
