---
title: "Draft a trademark clearance summary memo"
slug: trademark-clearance-memo
function: legal
role: ip
description: "Summarize the results of a trademark clearance search and provide a risk assessment and recommendation on whether to proceed with adoption of a proposed mark — in a format suitable for business decision-makers."
useCase: "Use this prompt after conducting a trademark search (through your IP counsel or a search service) to summarize the findings in a format that lets business leaders make an informed adoption decision. Always have qualified trademark counsel conduct the underlying search and legal analysis."
prompt: |
  You are a trademark attorney writing a clearance summary memo for a business client. Summarize the trademark clearance search results and provide a risk-stratified recommendation.

  **Proposed mark:** {{proposed_mark}} (word mark, logo, tagline, or combination)
  **Goods/services:** {{goods_services}} (what products or services the mark will be used with — use NICE classification language if possible)
  **Geographic scope:** {{geography}} (where the mark will be used: US, EU, specific countries)
  **Industry/sector:** {{industry}}
  **Search results summary:** {{search_results}} (describe what the search found — identical marks, similar marks, pending applications, registered marks in related classes)
  **Business context:** {{business_context}} (how important is this mark? Is there flexibility to change it? What's the timeline?)

  Write a trademark clearance memo with:

  ## TRADEMARK CLEARANCE MEMO

  **Proposed Mark:** [Mark]
  **Goods/Services:** [Description]
  **Search Date:** [Date]
  **Attorney-Client Privileged**

  ## Executive Summary
  Overall risk assessment: **Low / Moderate / Elevated / High**
  One-paragraph recommendation: Should the client proceed with adoption? With modifications? Should it be abandoned?

  ## Key Findings
  For each potentially conflicting mark found:
  - **Mark:** The third-party mark
  - **Owner:** Who owns it
  - **Registration status:** Registered / Pending / Common law
  - **Goods/Services:** What class and what goods/services
  - **Similarity analysis:** How similar to proposed mark (identical / highly similar / similar / low similarity) and why
  - **Likelihood of confusion analysis:** Would consumers likely confuse the marks? (consider: similarity of marks, similarity of goods/services, channels of trade, customer sophistication)
  - **Risk level:** High / Moderate / Low risk to adoption

  ## Risk Matrix
  | Mark | Owner | Similarity | Goods/Services Proximity | Overall Risk |
  |---|---|---|---|---|

  ## Likelihood of Confusion Analysis
  A synthesized analysis of the most significant conflicts and the likelihood of confusion factors (DuPont factors for US analysis):
  1. Similarity of marks (appearance, sound, connotation)
  2. Similarity of goods/services
  3. Channels of trade
  4. Purchaser sophistication
  5. Strength of the third-party mark

  ## Registrability Assessment
  Beyond conflicts: is the mark itself registrable?
  - Distinctiveness (generic, descriptive, suggestive, arbitrary, fanciful)
  - Any Section 2(d) refusal risk based on cited marks?
  - Any Section 2(e) concerns (primarily merely descriptive)?

  ## Options and Recommendations

  **Option 1: Proceed with adoption as-is**
  [Risk level and why]

  **Option 2: Proceed with modifications**
  [What modifications would reduce risk — different spelling, additional design element, different name entirely]

  **Option 3: Abandon this mark**
  [If risk is too high]

  **Recommendation:** [Legal team's recommended course of action]

  ## Next Steps if Proceeding
  - Filing strategy (use-based vs. intent-to-use)
  - Classes to file in
  - Countries to file in
  - Priority timing considerations
variables:
  - "{{proposed_mark}}"
  - "{{goods_services}}"
  - "{{geography}}"
  - "{{industry}}"
  - "{{search_results}}"
  - "{{business_context}}"
exampleInput: |
  proposed_mark: BEACON (word mark)
  goods_services: |
    Class 42: Software as a service (SaaS) featuring software for employee engagement surveys, human resources management, and workplace analytics
    Class 35: Business management consulting services; human resources management services
  geography: United States (primary); EU and UK (secondary, within 12 months)
  industry: HR technology / SaaS
  search_results: |
    US exact matches found:
    - BEACON (Reg. No. 5,234,567): Registered to Beacon Financial Inc. for Class 36 (financial services, insurance) — registered 2017, actively in use
    - BEACON (Reg. No. 4,891,234): Registered to Beacon Health Systems for Class 44 (medical services, healthcare) — registered 2015
    - BEACON HR (Application No. 97/123,456): Pending application filed March 2024 by Beacon HR Solutions LLC for Class 35 (human resources consulting services) — same goods as our Class 35 filing
    - iBeacon (Reg. No. 4,567,890): Apple Inc., Class 9 (electronic devices/software) and Class 38 (communication services)

    Highly similar marks:
    - BEACON ANALYTICS (Reg. No. 5,678,901): Registered to TechAnalytics Inc. for Class 42 (data analytics software) — registered 2019
    - LIGHTHOUSE (Reg. No. 6,123,456): Registered to WorkForce Technologies for Class 42 (HR software) — thematically similar (navigation/light metaphor)

    Common law: Several unregistered "Beacon" usages in HR/tech space found in search.
  business_context: |
    The company has been operating as "Beacon HR" since 2021 (3+ years of use). The brand is established with customers and in sales materials. There is moderate flexibility to add a descriptor (e.g., "Beacon HR") but no appetite to rebrand entirely. The company is preparing for a Series B raise in Q3 2025 and needs clean IP for due diligence.
exampleOutput: |
  # TRADEMARK CLEARANCE MEMO

  **Proposed Mark:** BEACON (word mark)
  **Goods/Services:** Class 42 (HR/engagement SaaS); Class 35 (HR consulting/management services)
  **Search Date:** 2025-03-15
  **Prepared by:** Legal
  **Attorney-Client Privileged and Confidential**

  ---

  ## Executive Summary

  **Overall risk: Elevated**

  The name BEACON faces meaningful opposition risk in Class 35, a high-risk pending application filed by "Beacon HR Solutions LLC" that covers directly competitive services, and a broader landscape of BEACON marks that — while in different industries — could complicate USPTO prosecution. The good news: the company's 3+ years of actual use as "Beacon HR" since 2021 creates common law rights that predate the 2024 pending application, which may be the most important defensive asset for the Class 35 filing.

  **Recommendation:** Proceed to file as "BEACON HR" (not bare BEACON), in Classes 42 and 35, with an expedited filing strategy. The "HR" addition meaningfully reduces confusion risk against Beacon Financial and Beacon Health, and the company's 3-year use history likely gives it priority over the 2024 Beacon HR Solutions application in Class 35. Do not file bare "BEACON" without counsel review of the prosecution risk.

  ---

  ## Key Findings

  ### 1. BEACON — Beacon Financial Inc. (Reg. No. 5,234,567)

  - **Owner:** Beacon Financial Inc.
  - **Status:** Federally registered (2017)
  - **Goods/Services:** Class 36 — financial services, insurance brokerage
  - **Similarity of marks:** Identical — word mark BEACON
  - **Goods/services proximity:** Low — financial services are distinct from HR SaaS and consulting
  - **Channels of trade:** Different — financial services buyers vs. HR technology buyers
  - **Customer sophistication:** Both B2B — sophisticated buyers unlikely to confuse HR software with financial services
  - **Risk:** Low — different industry, sophisticated buyers, different channels of trade
  - **Note:** Could appear as a citation in USPTO examination; argue non-relatedness

  ---

  ### 2. BEACON — Beacon Health Systems (Reg. No. 4,891,234)

  - **Owner:** Beacon Health Systems
  - **Status:** Federally registered (2015)
  - **Goods/Services:** Class 44 — medical services, healthcare
  - **Risk:** Low — healthcare services are distinct from HR software; different buyers, different channels
  - **Note:** For EU filings, healthcare and HR SaaS are evaluated differently — confirm with EU counsel

  ---

  ### 3. BEACON HR — Beacon HR Solutions LLC (App. No. 97/123,456) — HIGHEST RISK

  - **Owner:** Beacon HR Solutions LLC (unknown company)
  - **Status:** Pending (filed March 2024)
  - **Goods/Services:** Class 35 — human resources consulting services
  - **Similarity of marks:** BEACON HR vs. proposed BEACON/BEACON HR — nearly identical
  - **Goods/services proximity:** High — human resources consulting is directly adjacent to HR SaaS
  - **Risk:** High for Class 35 as to the "BEACON HR" variant

  **Critical analysis:** However — the company has been operating as "Beacon HR" since 2021, creating common law trademark rights that predate this 2024 application by approximately 3 years. Under US trademark law, use-based common law rights can defeat a later application for the same mark in the same territory. **The company's priority position in Class 35 may be superior to the Beacon HR Solutions application.** This should be confirmed with trademark counsel by filing a use-based application immediately (establishing the filing date as the constructive first use date) and, if necessary, opposing the Beacon HR Solutions application based on prior use.

  ---

  ### 4. BEACON ANALYTICS — TechAnalytics Inc. (Reg. No. 5,678,901)

  - **Owner:** TechAnalytics Inc.
  - **Status:** Federally registered (2019)
  - **Goods/Services:** Class 42 — data analytics software
  - **Similarity:** BEACON ANALYTICS vs. BEACON — "Beacon" is the dominant element; ANALYTICS is descriptive
  - **Goods/services proximity:** Moderate — data analytics software and HR SaaS both in Class 42
  - **Risk:** Moderate — data analytics and HR SaaS are used in the same enterprise software ecosystem
  - **USPTO examination risk:** Examiner may cite this mark. Argument: HR surveys/engagement is a specialized subfield; BEACON is weak ("beacon" is widely used in software as a metaphor)

  ---

  ### 5. iBeacon — Apple Inc. (Reg. No. 4,567,890)

  - **Owner:** Apple Inc.
  - **Status:** Federally registered
  - **Goods/Services:** Classes 9, 38 — electronic devices, Bluetooth proximity software, communication
  - **Risk:** Low for HR SaaS — different services, different buyers, "i" prefix makes marks distinguishable
  - **Note:** Apple is a vigorous trademark enforcer. The lowercase "i" prefix in "iBeacon" plus the different goods/services makes confusion unlikely, but document this analysis.

  ---

  ## Risk Matrix

  | Mark | Owner | Similarity to Proposed Mark | Goods Proximity | Overall Risk |
  |---|---|---|---|---|
  | BEACON HR | Beacon HR Solutions LLC | Very High (identical) | High | High — priority dispute |
  | BEACON ANALYTICS | TechAnalytics Inc. | High | Moderate | Moderate |
  | BEACON | Beacon Financial Inc. | Identical | Low | Low |
  | BEACON | Beacon Health Systems | Identical | Low | Low |
  | iBeacon | Apple Inc. | Moderate | Low | Low |
  | LIGHTHOUSE | WorkForce Technologies | Low (conceptual only) | High | Low |

  ---

  ## Likelihood of Confusion Analysis

  For the most significant conflict (BEACON HR Solutions):

  **DuPont Factor 1 — Similarity of marks:** The marks are essentially identical if the company files as "BEACON HR." This factor weighs strongly against adoption — or in favor of the company if it establishes prior use.

  **DuPont Factor 2 — Similarity of goods/services:** HR consulting (Beacon HR Solutions) and HR SaaS (our services) are related and in some cases overlap. This factor weighs against adoption.

  **DuPont Factor 3 — Channels of trade:** Both sell to HR departments of businesses. Same channels. This factor weighs against adoption.

  **DuPont Factor 4 — Customer sophistication:** Enterprise HR technology buyers are sophisticated. Mitigating factor — less likely to confuse similar marks.

  **DuPont Factor 5 — Strength of prior mark:** Beacon HR Solutions' pending application has no established use; our company has 3 years of actual use. If we have priority, this dispute is winnable.

  **Overall:** The conflict with Beacon HR Solutions is serious but winnable based on prior use. All other conflicts are manageable.

  ---

  ## Registrability Assessment

  **Distinctiveness:** BEACON is suggestive (a beacon guides, as HR analytics might guide management decisions) or arguably arbitrary when applied to HR software. It is not generic or merely descriptive. Registrable in principle.

  **BEACON in Class 42:** BEACON ANALYTICS may be cited, requiring an argument of no likelihood of confusion. The argument is viable — HR engagement software is distinguishable from general data analytics.

  **Section 2(d) risk:** Moderate for Class 35 (the Beacon HR Solutions conflict), Low for Class 42.

  ---

  ## Options and Recommendations

  ### Option 1: File "BEACON HR" with expedited use-based application (Recommended)

  File a use-based application in Classes 42 and 35 immediately, establishing the company's 2021 first-use date. Monitor the Beacon HR Solutions application — oppose if necessary based on prior use. The opposition has a strong basis given the 3-year priority gap.

  **Risk:** Moderate. USPTO may require an amendment or co-existence agreement with Beacon HR Solutions. The company's prior use position is strong.

  **Timeline:** File within 30 days to protect the company's position before the Series B due diligence.

  ### Option 2: File "BEACON" (bare mark) in Class 42 only

  More exposure to BEACON ANALYTICS citation. Avoids the Class 35 conflict entirely but leaves the HR consulting services unprotected.

  **Risk:** Moderate — less risk than filing in Class 35, but narrower protection.

  ### Option 3: Adopt a modified mark ("Beacon Engage," "Beacon Workforce," etc.)

  If the opposition risk with Beacon HR Solutions is deemed unacceptable, a modified mark would clear the conflict entirely.

  **Risk:** Low — but requires rebranding away from established 3-year brand equity.

  ---

  **Recommendation:** Option 1 — file immediately as "BEACON HR" on a use-based basis. The company's prior use position in Class 35 is a strong asset that should be perfected before the Series B. Brief an opposing counsel to monitor and, if necessary, oppose the Beacon HR Solutions application.

  ---

  ## Next Steps if Proceeding

  - [ ] File use-based trademark application (Classes 35 and 42) within 30 days
  - [ ] Set up watch service on BEACON HR, BEACON, and related marks
  - [ ] Confirm filing strategy for EU and UK (Madrid System vs. national filings)
  - [ ] Document and preserve evidence of 2021 first use (earliest customer contracts, website screenshots, product releases)
  - [ ] Brief Series B counsel on pending Beacon HR Solutions application and opposition strategy

  ---

  *This memo is protected by attorney-client privilege. The analysis is based on the search results provided and is not a guarantee of successful registration or freedom to use the mark.*
tips:
  - "A trademark clearance memo is only as good as the search behind it. Don't skip a professional trademark search — a Google search is not a clearance search."
  - "Common law rights (unregistered use) matter. If you've been using a name for years, document that use — it may be your most important asset in a priority dispute."
  - "Trademark risk is a spectrum, not binary. Many companies proceed with elevated-risk marks with appropriate monitoring and enforcement strategy. The memo should quantify risk, not just flag it."
  - "File early. Trademark rights in the US attach at first use, but federal registration gives constructive notice. Filing a use-based application immediately locks in your filing date against later applicants."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - ip-assignment-review
  - ip-license-summary
  - legal-risk-memo
  - contract-summary
tags:
  - trademark
  - ip
  - legal
  - brand
  - clearance
---
