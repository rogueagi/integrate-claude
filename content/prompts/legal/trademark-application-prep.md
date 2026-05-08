---
title: "Prepare a US trademark application strategy and filing draft"
slug: trademark-application-prep
function: legal
role: ip
description: "Generate a structured trademark filing strategy and USPTO application draft, including class selection, specimen guidance, and likely office-action issues — for counsel review before submission."
useCase: "Use this when filing a new mark for a product, brand, or company name. The two most common failure modes are filing in the wrong classes and submitting bad specimens; both lead to costly office actions or refusals. This prompt produces a structured plan that anticipates examiner objections and gets the filing right the first time."
prompt: |
  You are an experienced trademark attorney who has filed and prosecuted hundreds of US trademark applications. Prepare a filing strategy and draft for a new trademark application.

  Context:
  - Mark: {{mark}}
  - Mark type: {{mark_type}} (standard character / stylized / design / sound / 3D)
  - Owner entity: {{owner}}
  - Goods and/or services to be covered: {{goods_services}}
  - Current use status: {{use_status}} (in-use / intent-to-use)
  - First use date in commerce (if in-use): {{first_use}}
  - Markets: {{markets}} (US only / US + select foreign / global)
  - Budget posture: {{budget}}
  - Known competitive marks or risk: {{known_risk}}

  Output:

  1. **Mark assessment**
     - Distinctiveness analysis: where on the spectrum (generic, descriptive, suggestive, arbitrary, fanciful)
     - Strength prediction
     - Initial concerns (descriptive refusal risk, likelihood of confusion risk based on known marks)

  2. **Class selection** — Recommended Nice classes with reasoning. Distinguish between core classes the company must file in and adjacent classes that are nice-to-have. Note class fees.

  3. **Identification of goods/services** — Drafted ID statements per class, written to USPTO ID Manual standards. Flag any non-standard wording that risks examiner inquiry.

  4. **Specimen strategy** — For each class, what specimen would satisfy USPTO requirements. Common specimen mistakes to avoid.

  5. **Filing basis** — Section 1(a) use-in-commerce vs. 1(b) intent-to-use vs. 44(d)/(e) foreign priority. Recommendation with reasoning.

  6. **Likely office-action issues** — The 2–4 most likely refusals or objections, with how to respond.

  7. **Foreign filing considerations** — If markets include foreign, recommend Madrid Protocol filings and priority strategy. Note filing windows.

  8. **Drafted application key fields** — As they would appear on TEAS Plus form: applicant info, mark format, classes, IDs, basis, dates, signature certification.

  9. **Pre-filing checklist** — Knockout search status, specimen ready, signed declaration, payment.

  10. **Disclaimer** — That this is filing-prep, not legal advice, and counsel must finalize before USPTO submission.
variables:
  - "{{mark}}"
  - "{{mark_type}}"
  - "{{owner}}"
  - "{{goods_services}}"
  - "{{use_status}}"
  - "{{first_use}}"
  - "{{markets}}"
  - "{{budget}}"
  - "{{known_risk}}"
exampleInput: |
  mark: TROVELY
  mark_type: Standard character
  owner: Trovely Software, Inc., a Delaware C-corp
  goods_services: A SaaS platform for small businesses to manage customer reviews, respond to feedback, and analyze sentiment across multiple review sites (Google, Yelp, Facebook, etc.). Deployed as web app and mobile app. Sold by subscription.
  use_status: In-use; product launched 8 months ago
  first_use: 2025-04-15 (in commerce); same date for first use anywhere
  markets: US primary; planning UK and Canada within 12 months
  budget: Moderate. Filing all needed classes; willing to do Madrid filing for UK/CA when right
  known_risk: Knockout search shows: TROVE (Class 9, registered, for "downloadable software for inventory management" — different goods), TROVE & DESIGN (Class 35, abandoned), TROVELY HOMES (Class 36, registered, for real estate brokerage). No direct hit in software/customer review space.
exampleOutput: |
  # Trademark Filing Strategy — TROVELY
  **Owner:** Trovely Software, Inc.
  **Counsel review required before filing.**

  ## 1. Mark assessment

  - **Spectrum:** Arbitrary or coined. TROVELY has no dictionary meaning and is a fanciful adaptation of "trove." This is a strong position; arbitrary and fanciful marks receive the broadest protection.
  - **Strength prediction:** Strong. No descriptive concerns. Mark does not describe a feature, characteristic, or quality of customer-review software.
  - **Initial concerns:**
    - **TROVE (Class 9):** Different goods (inventory software vs. customer review software), but both are software. Likelihood-of-confusion analysis under DuPont factors should resolve in our favor because (a) goods are functionally different, (b) channels of trade differ (operations vs. marketing teams), and (c) the marks are distinguishable (TROVE vs. TROVELY — single-word vs. derived suffix).
    - **TROVELY HOMES (Class 36):** Different goods/services (real estate brokerage); coexistence likely. The added "HOMES" element narrows scope.
    - Overall risk of refusal under 2(d) likelihood of confusion: low, but not zero. Examiner may issue an initial 2(d) refusal that we respond to with a DuPont analysis.

  ## 2. Class selection

  | Class | Why | Required? | USPTO TEAS Plus fee |
  |---|---|---|---|
  | **Class 9** | Downloadable software (mobile app component) | Yes — covers the mobile app | $250 |
  | **Class 42** | Software-as-a-service (SaaS); the core offering | Yes — covers the web platform | $250 |
  | Class 35 | Business management services; review monitoring as a service | Optional — adjacent fit if Trovely positions as a business management platform | $250 |

  **Recommendation:** File in Classes 9 and 42 for the initial application. This is the standard SaaS pairing and covers the actual offering. Class 35 is defensible to add if positioning evolves; do not stretch the initial filing.

  Total filing fees: $500 USPTO (TEAS Plus, 2 classes). Counsel time additional.

  ## 3. Identification of goods/services

  ### Class 9
  > "Downloadable mobile application software for managing, monitoring, and responding to online customer reviews and feedback; downloadable mobile application software for analyzing customer sentiment from multiple online review platforms."

  ### Class 42
  > "Software as a service (SAAS) services featuring software for managing, monitoring, and responding to online customer reviews and feedback; software as a service (SAAS) services featuring software for analyzing customer sentiment from multiple online review platforms; providing online non-downloadable software for managing customer review responses."

  Both IDs use USPTO ID Manual-conformant phrasing. No non-standard wording that risks examiner inquiry. TEAS Plus eligible.

  ## 4. Specimen strategy

  ### Class 9 — Downloadable mobile application
  Acceptable specimens:
  - Screenshot of the App Store / Google Play listing showing the mark in connection with the downloadable software offering and a download/purchase mechanism
  - Screenshot of the app's launch/login screen showing the mark and indicating downloadable functionality
  - **Common mistake to avoid:** A screenshot of the running app interior is generally NOT a sufficient Class 9 specimen for downloadable software. It must show the point-of-sale/download context.

  ### Class 42 — SaaS
  Acceptable specimens:
  - Screenshot of the trovely.com landing page showing the mark and explaining the SaaS service
  - Screenshot of the customer-facing application page where the mark is displayed and the service is provided
  - **Common mistake to avoid:** A login page alone may be rejected as not showing the service. Use a signed-in dashboard view OR a marketing page that specifically describes the service.

  Capture and date-stamp specimens before filing.

  ## 5. Filing basis

  Recommend filing under **Section 1(a) — Use in Commerce** for both classes, since the product launched April 15, 2025 and has been in continuous use.

  - First use anywhere: April 15, 2025
  - First use in commerce: April 15, 2025

  Document the first-use date with: launch announcement, first paying customer invoice, app store launch date — preserve in case of later challenge.

  ## 6. Likely office-action issues

  1. **Section 2(d) likelihood-of-confusion citation against TROVE (Class 9 software).**
     - Likelihood: Moderate. Examiner may cite even when conflict is unlikely; this is a common initial refusal.
     - Response strategy: DuPont factor argument focused on (a) dissimilar goods (inventory mgmt vs. customer review), (b) different trade channels (operations buyers vs. marketing buyers), (c) distinguishable marks (TROVELY ≠ TROVE in sound, appearance, and commercial impression).
     - Estimated response cost: 4–8 hours of counsel time.

  2. **Identification clarity question.**
     - Likelihood: Low if filed as drafted; higher if drafted in non-standard language. Drafted IDs above should pass.

  3. **Specimen rejection.**
     - Likelihood: Moderate, especially in Class 9. Examiners frequently reject mobile-app specimens that don't clearly show the downloadable nature.
     - Mitigation: Capture multiple specimen options before filing; submit the strongest one; have backups ready.

  4. **Disclaimer requirement.**
     - Likelihood: Low. TROVELY has no descriptive component requiring disclaimer.

  ## 7. Foreign filing considerations

  Markets include UK and Canada within 12 months.

  **Recommended path:** US application first (filed now); within 6 months of US filing date, submit Madrid Protocol application designating UK and Canada with US priority. This preserves the US filing date as priority for foreign filings under the Paris Convention.

  Madrid Protocol fees: ~$500 USD basic + ~$200–400 per designated country. Significantly cheaper than direct national filings.

  Alternative: Direct UK and Canadian national filings if Madrid timing doesn't fit. Direct filings cost more but offer some procedural advantages.

  **Critical date:** Madrid designation must be filed within **6 months of US filing** to retain priority. Calendar this.

  ## 8. Drafted application key fields (TEAS Plus)

  | Field | Value |
  |---|---|
  | Applicant name | Trovely Software, Inc. |
  | Applicant entity type | Corporation |
  | State of incorporation | Delaware |
  | Applicant address | [Trovely's address] |
  | Mark | TROVELY |
  | Mark format | Standard character claim (no design or stylization) |
  | Translation | None (mark has no foreign-language meaning) |
  | Class 9 ID | [As drafted in Section 3] |
  | Class 9 basis | 1(a) Use in Commerce |
  | Class 9 first use anywhere | 2025-04-15 |
  | Class 9 first use in commerce | 2025-04-15 |
  | Class 42 ID | [As drafted in Section 3] |
  | Class 42 basis | 1(a) Use in Commerce |
  | Class 42 first use anywhere | 2025-04-15 |
  | Class 42 first use in commerce | 2025-04-15 |
  | Specimen Class 9 | [App Store listing screenshot, captured before filing] |
  | Specimen Class 42 | [Trovely.com landing page screenshot, captured before filing] |
  | Signatory | [Authorized officer of Trovely Software, Inc.] |
  | Declaration | Standard TEAS Plus declaration |

  ## 9. Pre-filing checklist

  - [ ] Knockout/clearance search complete (done; results in Section 1)
  - [ ] Full clearance search via outside vendor (recommended for additional confidence — $400–700)
  - [ ] Specimens captured for both classes, dated, saved
  - [ ] First-use evidence preserved
  - [ ] Authorized signatory identified
  - [ ] USPTO fees ($500) ready
  - [ ] Calendar 6-month Madrid Protocol deadline
  - [ ] Counsel review of full application before TEAS submission

  ## 10. Disclaimer

  This is a trademark filing-preparation document, not legal advice. Trademark prosecution requires licensed counsel review of the full application, supporting evidence, and clearance posture before USPTO submission. Likelihood-of-confusion analysis and office-action response strategy require attorney judgment based on the specific examiner and full factual record.
tips:
  - "Always run a professional clearance search beyond the basic knockout. The $400–700 cost is trivial compared to a refusal that wastes the filing fee and re-clears with a new mark."
  - "File in fewer classes precisely rather than more classes loosely. Examiners may issue more office actions on stretched class identifications, and unused classes are vulnerable to non-use cancellation later."
  - "Capture and date-stamp specimens before filing. Specimens captured after filing under examiner pressure often look reverse-engineered and get challenged."
  - "Not legal advice. Trademark prosecution is fact-specific and requires licensed counsel. The strategy above is a preparation document; final filing requires attorney review."
  - "Calendar the 6-month Madrid Protocol priority deadline the day you file in the US. Missing this deadline forfeits priority for all foreign filings."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - trademark-clearance-memo
  - ip-license-summary
  - cease-and-desist-draft
tags:
  - trademark
  - uspto
  - ip
  - filing-strategy
  - madrid-protocol
---
