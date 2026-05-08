---
title: "Redline a contract against your standard positions"
slug: contract-redline
function: legal
role: contracts
description: "Review a contract against your standard playbook positions and generate redline comments and suggested alternative language for each non-standard provision — with rationale for each change."
useCase: "Use this prompt when reviewing a counterparty's paper to identify deviations from your standard positions and prepare your redline response. Works best when you have defined fallback positions (ideal, acceptable, walk-away) for key terms."
prompt: |
  You are a senior contracts attorney reviewing a counterparty's contract against our standard positions. Identify all deviations from our playbook and draft redlined comments with suggested alternative language.

  **Contract type:** {{contract_type}}
  **Our role in this contract:** {{our_role}} (e.g., vendor, customer, licensor, licensee)
  **Our standard positions / playbook:**
  ```
  {{our_playbook}}
  ```
  **Contract to review:**
  ```
  {{contract_text}}
  ```
  **Deal context:** {{deal_context}} (deal size, strategic importance, counterparty leverage)
  **Must-win provisions:** {{must_wins}} (positions we will not move from)
  **Nice-to-have positions:** {{nice_to_haves}} (positions worth fighting for but not deal-breakers)

  For each deviation from our standard positions, provide:

  ## Redline Summary
  A brief executive summary: How many deviations were found? What's the overall risk rating of the contract as-received? What are the must-fix changes before this can be signed?

  ## Provision-by-Provision Redlines

  For each provision that deviates from our positions:

  ### Section [X.X]: [Section Title]

  **Issue:** What the contract says vs. what our position is
  **Risk:** Why this matters — what exposure does the current language create?
  **Priority:** Must-change / Should-change / Nice-to-have
  **Proposed redline:**
  > ~~[Deleted text in strikethrough]~~ [New/inserted text in brackets]

  **Fallback position:** If they won't accept our preferred language, what's our minimum acceptable position?
  **Negotiating rationale:** How to explain this ask to the counterparty

  ## Missing Provisions
  Provisions that are absent from the contract but should be included per our standard:
  - **[Provision name]:** What it should say and why it's important

  ## Provisions to Accept As-Is
  Provisions that are non-standard but acceptable given this deal's context.

  ## Summary Table

  | Section | Issue | Priority | Status |
  |---|---|---|---|
  | [X.X] | [Brief description] | Must-change | Open |
variables:
  - "{{contract_type}}"
  - "{{our_role}}"
  - "{{our_playbook}}"
  - "{{contract_text}}"
  - "{{deal_context}}"
  - "{{must_wins}}"
  - "{{nice_to_haves}}"
exampleInput: |
  contract_type: SaaS Vendor Agreement (Counterparty's paper)
  our_role: Customer
  our_playbook: |
    Liability cap: Minimum 12 months of fees for general claims; uncapped for breach of confidentiality, data breach, and IP indemnification
    Data use: Vendor may use our data only to provide the service; no use for product improvement, analytics, or AI/ML training
    Auto-renewal: Maximum 30-day notice for non-renewal; no auto-renewal without affirmative consent for contracts >$100K/year
    Governing law: Our jurisdiction (California) or neutral jurisdiction (Delaware)
    Termination for convenience: We can terminate with 30 days' notice without penalty for contracts <1 year; 60 days for multi-year
    Indemnification: Mutual indemnification for IP infringement; vendor indemnifies us for data breach caused by vendor negligence
    Audit rights: Right to audit vendor's security and compliance controls annually with 30 days' notice
  contract_text: |
    5.2 Liability Cap. Each party's total cumulative liability shall not exceed the fees paid in the three (3) months preceding the event giving rise to the claim. This cap applies to all claims including breach of confidentiality.

    7.1 Data Use. Customer grants Vendor a license to use Customer Data to operate, improve, and enhance the Service and Vendor's other products and services.

    8.3 Auto-Renewal. This Agreement automatically renews for one-year terms. Customer must provide ninety (90) days' prior written notice to prevent renewal.

    10.1 Governing Law. This Agreement is governed by the laws of the State of Texas.

    11.1 Termination. Either party may terminate for cause with thirty (30) days' notice and an opportunity to cure. There is no termination for convenience.

    12.1 Indemnification. Vendor shall indemnify Customer for third-party IP infringement claims. Customer shall indemnify Vendor for claims arising from Customer's use of the Service.
  deal_context: Annual contract value $180,000. Strategic vendor — we have no current alternative. Counterparty is a mid-size company with some negotiating flexibility.
  must_wins: |
    - Liability cap must exclude data breach and confidentiality breach
    - Data use must prohibit AI/ML training on our data
    - Termination for convenience must be added
  nice_to_haves: |
    - Governing law changed to California or Delaware
    - Auto-renewal notice reduced to 30-60 days
    - Audit rights added
exampleOutput: |
  ## Redline Summary

  **Overall risk rating: High — do not sign as received.**

  The contract as-received has 5 must-change deviations and 2 nice-to-haves. The most critical issues are: (1) the liability cap applies to data breach and confidentiality breach — this is a complete elimination of meaningful remedy for our highest-risk scenarios; (2) the data use clause permits the vendor to use our data for their other products and AI/ML training with no limitation; and (3) there is no termination for convenience, trapping us in this contract unless we can show cause.

  Given the $180K annual value and strategic importance, the vendor has some flexibility. Prioritize the three must-wins and be prepared to accept Texas governing law and the 90-day auto-renewal notice as traded concessions.

  ---

  ## Provision-by-Provision Redlines

  ### Section 5.2: Liability Cap

  **Issue:** Cap at 3 months of fees applies to ALL claims including breach of confidentiality. Our position: 12 months minimum; uncapped for breach of confidentiality and data breach.
  **Risk:** At $180K/year, a 3-month cap means our maximum recovery for any event — including a catastrophic data breach — is $45,000. This is commercially unreasonable for the risk we bear.
  **Priority:** Must-change

  **Proposed redline:**
  > Each party's total cumulative liability shall not exceed the fees paid in the ~~three (3)~~ **twelve (12)** months preceding the event giving rise to the claim. ~~This cap applies to all claims including breach of confidentiality.~~ **This cap shall not apply to: (a) either party's breach of confidentiality obligations; (b) Vendor's breach of its data security obligations; (c) either party's indemnification obligations; or (d) either party's gross negligence or willful misconduct.**

  **Fallback position:** 6 months if they resist 12; we will not move on the carve-outs for confidentiality and data breach.
  **Negotiating rationale:** "A 3-month cap creates no meaningful deterrent for a vendor handling our data. Standard commercial practice is 12 months, and breach of confidentiality is always carved out — this is a market-standard ask."

  ---

  ### Section 7.1: Data Use

  **Issue:** Vendor may use our data to improve their service AND "other products and services" — this includes AI/ML model training with no limitation. Our position: use limited to providing the service only.
  **Risk:** Our proprietary business data (which we will upload to this platform) could be used to train models that benefit the vendor's other customers, including our competitors.
  **Priority:** Must-change

  **Proposed redline:**
  > Customer grants Vendor a license to use Customer Data to ~~operate, improve, and enhance the Service and Vendor's other products and services~~ **provide the Service to Customer**. **Vendor shall not use Customer Data for: (a) improving or developing Vendor's products or services; (b) training machine learning or artificial intelligence models; or (c) providing services to Vendor's other customers.**

  **Fallback position:** We can accept "improve the Service" if limited to improving the Service for us specifically (not aggregated with other customers' data), with explicit exclusion of AI/ML training.
  **Negotiating rationale:** "We need to ensure our proprietary data stays ours. Permitting unlimited data use for 'other products and services' means our data could benefit your other customers, including our competitors. This is a non-starter for us."

  ---

  ### Section 8.3: Auto-Renewal Notice

  **Issue:** 90-day notice required to prevent renewal. Our position: maximum 30 days.
  **Risk:** At $180K/year, a missed 90-day window means we're locked into another $180K commitment. For reference, most organizations set calendar reminders 30 days out — 90 days requires a separate process.
  **Priority:** Should-change (nice-to-have for this deal given other priorities)

  **Proposed redline:**
  > Customer must provide ~~ninety (90)~~ **thirty (30)** days' prior written notice to prevent renewal.

  **Fallback position:** Accept 60 days if 30 days isn't available; we will trade this for wins on must-change items.
  **Negotiating rationale:** "90-day notice creates operational risk for our team. 30-60 days is market standard for commercial SaaS agreements at this price point."

  ---

  ### Section 10.1: Governing Law

  **Issue:** Texas governing law. Our position: California or neutral jurisdiction (Delaware).
  **Risk:** Minor — Texas courts are generally business-friendly. Main issue is inconvenience and need for Texas-licensed counsel if disputes arise.
  **Priority:** Nice-to-have — trade for must-win items

  **Proposed redline:**
  > This Agreement is governed by the laws of the State of ~~Texas~~ **Delaware**.

  **Fallback position:** Accept Texas if needed to secure the other must-wins.
  **Negotiating rationale:** "We prefer a neutral jurisdiction. If you're incorporated in Delaware, that's a natural choice for both parties."

  ---

  ### Section 11.1: No Termination for Convenience

  **Issue:** No termination for convenience. Our position: right to terminate with 30 days' notice.
  **Risk:** We cannot exit this contract without showing "cause" (material breach that isn't cured). If the vendor underperforms, we are locked in unless we can prove breach — a high bar in practice.
  **Priority:** Must-change

  **Proposed redline:**
  > ~~Either party may terminate for cause with thirty (30) days' notice and an opportunity to cure. There is no termination for convenience.~~ **Either party may terminate this Agreement for cause upon thirty (30) days' written notice to the other party, providing a description of the alleged breach and an opportunity to cure within such notice period. Customer may terminate this Agreement for convenience upon sixty (60) days' written notice to Vendor. In the event of Customer's termination for convenience, Vendor's sole remedy shall be payment of fees through the end of the applicable notice period.**

  **Fallback position:** Accept 90-day notice for termination for convenience if they won't accept 60 days.
  **Negotiating rationale:** "Without a termination for convenience right, we have no exit if the service doesn't meet our needs. This is a standard right in enterprise agreements and doesn't prevent you from earning the full term value if you perform."

  ---

  ### Section 12.1: Indemnification Gaps

  **Issue:** No vendor indemnification for data breach. Our position: vendor indemnifies us for data breach caused by vendor negligence.
  **Risk:** If the vendor suffers a breach affecting our data due to their negligence, we bear all costs of notifying affected individuals and regulatory response — with no recourse.
  **Priority:** Must-change (given the nature of data we'll share)

  **Proposed redline:**
  > Add new Section 12.2: **"Data Breach Indemnification. Vendor shall indemnify, defend, and hold harmless Customer from and against any claims, costs, penalties, and expenses (including reasonable attorneys' fees) arising out of any unauthorized access to or disclosure of Customer Data resulting from Vendor's failure to maintain reasonable security practices or Vendor's breach of its confidentiality or security obligations under this Agreement."**

  ---

  ## Missing Provisions

  **Audit Rights:** Our standard position includes the right to audit vendor's security and compliance controls annually. No audit right is present. Suggest adding:
  > "Customer shall have the right, upon thirty (30) days' prior written notice, to audit Vendor's security and data protection controls no more than once per year, at Customer's expense."

  **Data Return on Termination:** No provision addresses what happens to our data when the contract ends. Add: "Upon termination or expiration, Vendor shall promptly return or destroy all Customer Data upon Customer's request and provide written certification of such destruction."

  **Security Standards:** No security exhibit or minimum security standard is specified. For a $180K contract involving business data, request a Security Exhibit specifying: encryption at rest and in transit, SOC 2 Type II compliance, breach notification within 48 hours.

  ---

  ## Provisions to Accept As-Is

  **Section 11.1 (Termination for Cause — 30-day cure):** The cure period and termination for cause mechanism is reasonable and consistent with our standard. The only issue is the absence of termination for convenience (addressed above).

  ---

  ## Summary Table

  | Section | Issue | Priority | Status |
  |---|---|---|---|
  | 5.2 | Liability cap at 3 months; applies to data breach/confidentiality | Must-change | Open |
  | 7.1 | Unlimited data use including AI training | Must-change | Open |
  | 8.3 | 90-day auto-renewal notice | Should-change | Open |
  | 10.1 | Texas governing law | Nice-to-have | Open |
  | 11.1 | No termination for convenience | Must-change | Open |
  | 12.1 | No data breach indemnification | Must-change | Open |
  | Missing | No audit rights | Should-change | Open |
  | Missing | No data return on termination | Should-change | Open |
  | Missing | No security exhibit | Should-change | Open |
tips:
  - "Define your fallback positions before you start negotiating — it's much harder to think clearly under deadline pressure. Know in advance what you'll trade for your must-wins."
  - "Explain the business rationale for each ask, not just the legal position. 'This is market standard' is weaker than 'our data could benefit your other customers, including our competitors.'"
  - "Prioritize ruthlessly. Presenting 15 redlines of equal weight signals you don't know your own priorities and invites the counterparty to trade your must-wins for your nice-to-haves."
  - "This output is a starting point, not a final redline. Have a licensed attorney in the relevant jurisdiction review before sending to counterparty."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - contract-summary
  - nda-review
  - vendor-contract-playbook
  - legal-risk-memo
tags:
  - contracts
  - negotiation
  - legal
  - redline
  - vendor-management
---
