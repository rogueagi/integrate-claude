---
title: "Review an employment agreement and flag deviations from market"
slug: employment-agreement-review
function: legal
role: contracts
description: "Run a structured review of an inbound or outbound employment agreement, flagging clauses that deviate from market norms or expose the company to enforceability or PR risk."
useCase: "Use this when reviewing an executive offer letter, an inbound employment agreement from an acquired-company employee, or rebuilding your standard template. Common failures — overbroad non-competes, ambiguous severance triggers, unenforceable IP assignments — often slip through if the reviewer is rushing. This prompt forces a clause-by-clause discipline."
prompt: |
  You are an experienced employment lawyer who reviews employment agreements across US states and common international jurisdictions. Review an employment agreement and produce a structured analysis.

  Context:
  - Direction: {{direction}} (we are the employer / we are the candidate's counsel / we are reviewing inherited paper from acquisition)
  - Role and seniority: {{role_seniority}}
  - Jurisdiction (work location and governing law): {{jurisdiction}}
  - Compensation summary: {{comp_summary}}
  - Special considerations: {{special_considerations}} (e.g., remote work, executive role, prior employer non-compete, cross-border)

  The agreement text follows the divider. Output:

  1. **One-paragraph plain-English summary** of what the agreement does.

  2. **Clause-by-clause review** in a table:
     | Clause | Section | Position | Market norm | Risk to {{direction}} (H/M/L) | Recommendation |

     Cover at minimum: at-will employment language, compensation and bonus, equity terms (vesting, acceleration, repurchase), benefits, IP assignment and prior-inventions schedule, confidentiality, non-compete, non-solicit, garden leave, severance, change-in-control, indemnification of executive, governing law, dispute resolution, arbitration and class waiver.

  3. **Jurisdiction-specific flags** — Provisions that may be unenforceable or restricted in the named jurisdiction (e.g., California non-compete unenforceability, Massachusetts non-compete requirements, EU restrictive covenant requirements, NLRB rules on confidentiality). Be specific.

  4. **PR / employee-relations flags** — Anything that, while legally enforceable, would create real reputation or recruiting risk if surfaced (e.g., extremely broad non-disparagement, mandatory arbitration of harassment claims).

  5. **Top 5 redlines or revisions** — Ranked.

  6. **Open questions for the business owner.**

  7. **Disclaimer** — Always end noting this is preliminary and requires licensed-counsel sign-off.
variables:
  - "{{direction}}"
  - "{{role_seniority}}"
  - "{{jurisdiction}}"
  - "{{comp_summary}}"
  - "{{special_considerations}}"
exampleInput: |
  direction: We are the employer
  role_seniority: VP of Engineering, reports to CTO, manages 80 engineers
  jurisdiction: Work location San Francisco, CA. Governing law in current draft is Delaware.
  comp_summary: $300K base, $100K target bonus, 0.4% equity (4-year vest, 1-year cliff), no acceleration
  special_considerations: Candidate currently at competitor; has a 12-month non-compete in their current contract that covers the Bay Area. Candidate is asking us to indemnify if their prior employer sues over the non-compete.
exampleOutput: |
  # Employment Agreement Review — VP Engineering (SF, CA)

  ## 1. Plain-English summary

  This is a standard at-will employment agreement for a VP-level technical hire. It includes $300K base, $100K target bonus, and 0.4% equity on a standard 4-year cliff vest. It contains a 12-month non-compete and 24-month non-solicit, IP assignment, mandatory arbitration with class waiver, and Delaware governing law. No severance and no change-in-control acceleration are included. Several California-specific issues require attention.

  ## 2. Clause-by-clause review

  | Clause | Section | Position | Market norm | Risk | Recommendation |
  |---|---|---|---|---|---|
  | At-will language | 1 | Standard at-will | Standard | L | Acceptable |
  | Base compensation | 2.1 | $300K | $280K–$330K mid-market for SF VP Eng | L | Acceptable |
  | Bonus | 2.2 | $100K target, 100% discretionary, must be employed on payout date | Mostly market; "100% discretionary" creates retention risk if mistrusted | M | Soften to "based on company and individual performance" |
  | Equity | 2.3 | 0.4%, 4-year vest, 1-year cliff, no acceleration | 0.3–0.5% market for VP Eng at this stage; double-trigger acceleration on CIC is common at this level | M | Add double-trigger CIC acceleration on at least 50% of unvested |
  | Repurchase right on termination | 2.4 | Company can repurchase vested shares at FMV on any termination | Repurchase right at FMV is increasingly atypical at VP level for SF | H | Remove repurchase right on termination without cause; market is to retain shares |
  | Benefits | 3 | Standard | Standard | L | Acceptable |
  | IP assignment | 5 | Broad assignment of all inventions during employment | Standard, but **must include California Labor Code §2870 carve-out** | H | **CA legal requirement** — add §2870 schedule (no employer claim on inventions developed entirely on personal time without company resources, unrelated to company business) |
  | Prior inventions schedule | 5.3 | Schedule referenced but blank | Should be filled in by candidate | M | Require candidate to complete schedule before signing |
  | Confidentiality | 6 | Broad and includes "any business information" | Reasonable but the scope of "any" combined with non-disclosure of "compensation" raises NLRB issues | M | Carve out discussion of wages and working conditions per NLRB guidance |
  | Non-compete | 7 | 12 months, worldwide, in any "competitive business" | **Unenforceable in California** | **H** | Remove entirely OR replace with narrower trade-secret protections. As drafted, this is a ticking PR/recruiting problem, not just legally void |
  | Non-solicit (employees) | 8.1 | 24 months, all employees | **California: post-AB 1076 (2024), employee non-solicits are largely unenforceable** | **H** | Remove or narrow significantly; rely on trade secret and confidentiality |
  | Non-solicit (customers) | 8.2 | 24 months, all customers | Similar enforceability questions in CA | H | Narrow to customers about whom executive had confidential information |
  | Garden leave | None | Not included | Not standard at VP level US; common at executive level UK | L | Acceptable for this level |
  | Severance | None | None | Market for VP at this level is 3–6 months base + COBRA on termination without cause | M | Consider adding 4 months severance for termination without cause; aids retention |
  | Change-in-control | None | None | Market is 6–12 months severance + double-trigger acceleration | M | Add CIC severance trigger; standard for VP Eng |
  | Indemnification of executive | 11 | None for employment-related claims | D&O coverage standard for VP+ | M | Add reference to D&O policy and indemnification agreement |
  | Indemnification re prior employer | None | Candidate is asking for this | Atypical to provide | M | See "Open questions" — escalate to GC |
  | Governing law | 14 | Delaware | **Conflicts with CA Labor Code §925** for CA-resident employees | **H** | Change to California for CA-resident employee; Delaware governing law for CA employees with non-negotiable terms is voidable under §925 |
  | Arbitration | 15 | Mandatory arbitration including harassment claims, with class waiver | Federal Ending Forced Arbitration of Sexual Assault and Sexual Harassment Act (2022) prohibits forced arbitration of these claims | **H** | Add carve-out for sexual harassment and sexual assault claims; review state-specific carve-outs |
  | Survival | 16 | Standard | Standard | L | Acceptable |

  ## 3. Jurisdiction-specific flags (California)

  Five issues require attention because the employee will be CA-resident:

  1. **Non-compete (Section 7):** California Business and Professions Code §16600 makes the non-compete void and unenforceable. As of 2024, AB 1076 also requires employers to notify current and former employees of unenforceability. Leaving this clause in creates affirmative legal exposure, not just unenforceability.
  2. **Employee non-solicit (Section 8.1):** Post-*Edwards v. Arthur Andersen* and AB 1076, broad employee non-solicits are largely unenforceable in CA.
  3. **IP assignment §2870 carve-out:** California Labor Code §2870 requires a written notice carve-out for inventions developed entirely on the employee's own time without using employer resources and not related to employer's business. **Required by statute.**
  4. **Governing law (Section 14):** California Labor Code §925 makes choice of non-CA governing law voidable when imposed on a CA-resident employee as a condition of employment, unless the employee was individually represented by counsel in negotiating the choice-of-law provision.
  5. **Wage discussion confidentiality:** California Labor Code §232 prohibits employers from preventing employees from disclosing their own wages.

  ## 4. PR / employee-relations flags

  - **Forced arbitration of harassment claims:** Federal law as of 2022 prohibits this. Leaving it in is both unenforceable and a clear signal to candidates and the press that the company hasn't updated its templates. Update immediately.
  - **No severance for VP-level termination:** Legally fine. PR and recruiting weakness — peer companies offer 3–6 months for termination without cause at this level. Word travels.
  - **Repurchase right at FMV on any termination:** Once a candidate's lawyer flags this, it generates suspicion about the broader template. High signaling cost for low retained value.

  ## 5. Top 5 redlines

  1. Remove non-compete entirely (Section 7) and replace with focused trade-secret language. Required for CA enforceability + AB 1076 notice obligation.
  2. Add §2870 IP assignment carve-out (Section 5).
  3. Change governing law from Delaware to California (Section 14) per §925.
  4. Add carve-out from arbitration for sexual harassment/assault claims (Section 15).
  5. Remove repurchase right on termination without cause (Section 2.4) and add double-trigger CIC acceleration on equity.

  ## 6. Open questions

  - **Indemnification of candidate against prior-employer claims.** Candidate is asking us to indemnify if their current employer sues over their non-compete. Escalate to GC. Generally we should not provide this except in narrow circumstances; we may be able to defend the candidate if a claim is filed, but a contractual indemnity creates incentives to push close to the line.
  - **Should we offer severance and CIC terms now or hold for negotiation?** Business decision.
  - **Is the equity grant approved by the board, and at what FMV?** Confirm before the offer is finalized.
  - **Has the candidate received copies of any prior employer agreements they're bound by?** We should ask in writing as part of the offer process.

  ## 7. Disclaimer

  This is a preliminary review, not legal advice. California employment law is fast-moving (AB 1076 took effect in 2024) and the agreement must be finalized by counsel licensed in the applicable jurisdictions. Have employment counsel review before extending the offer.
tips:
  - "California, Massachusetts, Minnesota, and an increasing number of states have specific non-compete restrictions. Always check current state law — this area changes year to year."
  - "Always run a jurisdiction-specific check on governing law clauses. CA §925 voidability is the most common drafting error in inbound paper from non-CA companies hiring in California."
  - "Forced-arbitration carve-outs for harassment and sexual assault are now required by federal law. Templates that haven't been updated since 2022 are common — flag them every time."
  - "Not legal advice. Employment law is jurisdictional and fast-changing. Final agreements must be reviewed by employment counsel in the relevant jurisdictions before signature."
  - "When reviewing inherited contracts from acquisitions, prioritize jurisdiction-specific issues first — non-competes that are unenforceable in the target's state are usually the largest cleanup items."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - contract-redline
  - ip-assignment-review
  - legal-risk-memo
tags:
  - employment-law
  - contracts
  - non-compete
  - california-employment
  - executive-agreements
---
