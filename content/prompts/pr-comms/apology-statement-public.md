---
title: "Draft a public apology statement"
slug: apology-statement-public
function: pr-comms
role: crisis-comms
description: "Write a public apology that lands as accountable rather than performative — concrete remediation, no hedging, and the specific words that matter."
useCase: "Use when the company has done something wrong and needs to apologize publicly. The output names what happened, takes responsibility without blaming, commits to specific remediation, and avoids the lawyered-up phrasing that makes apologies read as non-apologies."
prompt: |
  You are a crisis communications director who has crafted public apologies for product failures, executive misconduct, customer-facing incidents, and brand missteps. Draft a public apology statement for {{company_name}} regarding {{incident_summary}}.

  Inputs:
  - What happened: {{what_happened}} (factual, sequential)
  - Who was harmed: {{who_was_harmed}}
  - What went wrong on our side: {{root_cause}} (operational, decision, oversight)
  - What we are doing about it: {{remediation}} (specific, measurable, time-bound)
  - Who is signing: {{signer}} (CEO, founder, named individual responsible)
  - Channel: {{channel}} (press release, blog post, X post, customer email, internal + external)
  - Legal constraints: {{legal_constraints}}
  - What past customer/user feedback indicates they want to hear: {{audience_expectations}}

  Required structure:

  1. THE APOLOGY (first sentence)
  Use the words "we were wrong" or "I was wrong" or "we apologize." Do not use "we're sorry if" or "we apologize for any inconvenience." Specificity beats generality.

  2. WHAT WE DID
  Plainly. The bad thing, in order. No "an issue occurred." Name it: shipped a feature without consent review; misrepresented our pricing; let a senior leader behave badly for too long.

  3. WHAT WE GOT WRONG
  Why this happened. Not who to blame. The decision, the oversight, the missing process. This is the part that distinguishes accountability from performance.

  4. WHAT WE ARE DOING
  Three to five concrete commitments. Each should be measurable. Each should have a date or trigger. "We are reviewing our processes" is not a commitment.

  5. WHAT WE OWE THE PEOPLE AFFECTED
  Specific make-rights. Refunds, credits, direct outreach, terminations, policy changes, named consequences. If the cost is real, the apology is real.

  6. SIGN-OFF
  By a named human. With an email or contact for follow-up. Not "The team at [Company]."

  Hard rules — phrases that destroy a public apology:
  - "We're sorry if anyone was offended."
  - "This is not who we are."
  - "Mistakes were made."
  - "Out of an abundance of caution."
  - "We hear you."
  - "We will do better."
  - "Robust review."
  - "Internal investigation."

  Tone calibration:
  - The apology should be proportional to the harm. Over-apologizing for a small thing reads as performative. Under-apologizing for a real harm reads as evasive. Match the magnitude.
  - First-person plural is fine for company-level mistakes. First-person singular ("I") is required when the signer is personally responsible.

  Output: the full statement, then a 3-bullet "what to expect" note covering immediate reactions, follow-up press, and what the second statement (if needed) should address.
variables:
  - "{{company_name}}"
  - "{{incident_summary}}"
  - "{{what_happened}}"
  - "{{who_was_harmed}}"
  - "{{root_cause}}"
  - "{{remediation}}"
  - "{{signer}}"
  - "{{channel}}"
  - "{{legal_constraints}}"
  - "{{audience_expectations}}"
exampleInput: |
  company_name: Linden AI
  incident_summary: A 75-minute multi-tenant routing error exposed support conversations across roughly 380 customer accounts. No evidence of exfiltration, but PII in support transcripts was visible cross-tenant.
  what_happened: A deployment to the routing layer at 9:30am ET made support conversations between end-users and customer service agents visible to other Linden customers using the same UI. The error was identified at 10:45am ET and the deployment was rolled back. Forensics confirmed the impact at 380 customer accounts.
  who_was_harmed: 380 customer companies whose support conversations were briefly visible to other customers. End users (the people writing into customer support) whose messages may have been seen by employees at unrelated companies.
  root_cause: A schema change for tenant isolation was reviewed by one engineer rather than the standard two-reviewer policy. The change passed staging but had a regression that only manifested under production load.
  remediation: Free 90-day Enterprise tier upgrade for all 380 affected accounts. Engagement of independent third-party security auditor (CrowdStrike) for full review. New mandatory two-reviewer + canary deployment policy effective immediately. CEO will personally call the top 50 affected customers within 5 business days. Post-incident report public within 14 days.
  signer: Maya Okafor, co-founder and CEO
  channel: Blog post, customer email, social.
  legal_constraints: Outside counsel has reviewed and approved the language about the incident itself. They flagged the "we should have caught this" phrasing for partner co-signing.
  audience_expectations: Customers want a named root cause, accountability from the CEO directly, and concrete commitments — not "robust review."
exampleOutput: |
  We were wrong, and I am sorry.

  Yesterday between 9:30am and 10:45am Eastern Time, a deployment we made caused support conversations across 380 of our customers' accounts to be visible to other Linden AI customers. People who wrote into customer service expecting privacy did not have it during that window. Some of those people are our customers' customers, and we owe them an apology too.

  Here is what went wrong on our side. The change that caused the incident was reviewed by one engineer rather than the two reviewers our policy requires. It cleared our staging environment but failed under production load. Our review process and our staging coverage should have caught this. They did not, because we let exceptions to the two-reviewer policy accumulate, and because our staging traffic did not match the production pattern that triggered the regression. That is on us, and specifically on me as the executive accountable for engineering process.

  Here is what we are doing.

  1) Two-reviewer code review and a mandatory canary deployment are now required for any change that touches tenant isolation. This policy is in effect today. No exceptions, including for me.
  2) We have engaged CrowdStrike to conduct an independent review of our isolation architecture. Their report will be made public, with sensitive details redacted, within 60 days.
  3) Every one of the 380 affected accounts is being upgraded to our Enterprise tier for 90 days at no charge. The upgrade is being applied automatically; you do not need to ask for it.
  4) I am personally calling the top 50 affected customers, by ARR, within five business days. If you are one of the other 330 and want a direct conversation, write to me at maya@linden.ai and you will get one.
  5) A full post-incident report — what happened, why, and what we changed — will be published on our blog within 14 days.

  To the people whose conversations were visible: the trust you placed in our platform is a trust we did not deserve in that 75-minute window. We will not ask you to forgive that. We will earn back the right to keep handling that work, by doing it correctly from here.

  — Maya Okafor, co-founder and CEO, Linden AI

  WHAT TO EXPECT
  - First 24 hours: customer reactions split into "thank you for being direct" and "this isn't enough." Both are legitimate. Maya should reply personally to the harshest public reactions, not delegate.
  - 48-72 hours: trade press will pick up the post. Expect at least one think piece comparing this to other tenant-isolation incidents (Cloudflare 2017, Slack 2019). Have facts ready for comparison rather than letting the framing happen without us.
  - The second statement, if needed, comes when the CrowdStrike report publishes. That statement should report what was found, including anything bad, and confirm whether the original commitments held. Suppressing bad findings in the second statement undoes the trust earned by the first.
tips:
  - "The first sentence is the entire test of the apology. If it contains 'if,' 'any,' or 'inconvenience,' rewrite it before reading further."
  - "Specificity earns trust. '380 customers' lands; 'a number of customers' is corporate cover."
  - "Name the root cause, not the people. 'A reviewer policy was bypassed' is accountability. 'A reviewer didn't follow process' is blame."
  - "Legal will push to soften the strongest sentences. Defend them. The lawyered version reads as the company hiding behind counsel — which is exactly what counsel will be blamed for in the next news cycle."
  - "Have remediation commitments approved by ops/finance/eng in writing before publishing. A missed promise compounds the original harm."
complexity: advanced
modelRecommendation: claude-opus-4-7
relatedSlugs:
  - crisis-holding-statement
  - data-incident-customer-comms
  - layoff-external-statement
  - cofounder-letter-customer
tags:
  - apology
  - crisis
  - public-statement
  - accountability
  - executive-comms
---
