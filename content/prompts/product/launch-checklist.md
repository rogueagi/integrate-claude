---
title: "Build a pre-launch checklist for a product feature"
slug: launch-checklist
function: product
role: product-management
description: "Generate a comprehensive pre-launch checklist that covers engineering, design, product, marketing, legal, and customer success tasks required to ship a feature safely."
useCase: "Use this prompt 2–3 weeks before a planned feature launch. A thorough launch checklist prevents the most common launch failures: things nobody remembered to do, handoffs that didn't happen, and dependencies that were assumed to be done."
prompt: |
  You are an experienced product manager who has shipped dozens of features. Create a comprehensive pre-launch checklist for the feature described below.

  **Feature name:** {{feature_name}}
  **What it does:** {{feature_description}}
  **Launch type:** {{launch_type}} (full release / beta / phased rollout / internal only)
  **Target launch date:** {{launch_date}}
  **Teams involved:** {{teams}}
  **Customer segments affected:** {{customer_segments}}
  **Key risks:** {{key_risks}}
  **Rollout plan:** {{rollout_plan}} (e.g., 10% → 50% → 100%, or all-at-once, or feature flag)

  Generate a launch checklist organized by phase and team. For each item:
  - **Item:** Specific task or verification
  - **Owner:** Role responsible
  - **Due:** Relative timing (e.g., "2 weeks before launch," "Launch day")
  - **Dependency:** What must be completed first
  - **Status:** [ ] Checkbox

  ## Phase 1: 3–4 Weeks Before Launch (Foundation)

  ### Product
  - PRD finalized and approved
  - Success metrics defined and baseline captured
  - Rollout strategy documented (phased, flag-based, etc.)
  - Rollback plan documented

  ### Engineering
  - Feature complete in staging
  - Feature flag implemented (if phased rollout)
  - Performance testing completed
  - Load testing completed (if applicable)
  - Security review completed (if applicable)
  - Error monitoring configured

  ### Design
  - Final designs approved and handed off
  - Edge cases and error states designed
  - Empty states designed
  - Mobile responsive (if applicable)

  ### Legal / Compliance
  - Privacy review (if collecting new data)
  - Terms of service updates (if applicable)
  - Accessibility compliance verified

  ## Phase 2: 1–2 Weeks Before Launch (Readiness)

  ### Engineering
  - QA testing complete (all test cases passed)
  - Regression testing complete
  - Automated tests written and passing
  - Feature deployed to production behind flag
  - Monitoring dashboards configured

  ### Marketing / Comms
  - Launch messaging approved
  - Blog post or changelog written (not published)
  - Email announcement drafted and approved
  - Social posts drafted
  - Sales talk track updated

  ### Customer Success / Support
  - Product FAQ documented
  - Support team trained
  - In-app help content updated
  - Escalation path for launch issues documented

  ### Data / Analytics
  - Tracking events implemented and verified
  - Dashboard configured for launch metrics
  - Baseline metrics captured

  ## Phase 3: Launch Week

  ### Day Before Launch
  - Final staging verification
  - Feature flag ready for activation
  - All communications approved and scheduled
  - Monitoring war room scheduled (if needed)
  - Rollback plan reviewed with engineering lead

  ### Launch Day
  - Feature flag enabled (at planned %)
  - Monitoring active
  - Error rates checked immediately after activation
  - Launch communications sent (if applicable)
  - Team notified (Slack announcement)

  ## Phase 4: Post-Launch (Week 1 and Week 4)

  ### Week 1
  - Day 1 metrics reviewed
  - Any launch bugs triaged
  - Customer support volume reviewed
  - Phased rollout next step (if applicable)
  - Learnings documented

  ### Week 4
  - 30-day metrics review against targets
  - Post-launch retro scheduled
  - Feature flagging removed (if clean launch)
  - Documentation updated

  After generating the checklist, add:
  - **Go/No-Go criteria:** Specific conditions that must be met to proceed with launch
  - **Rollback plan:** How to disable the feature if something goes wrong
  - **Escalation contacts:** Who to call for engineering, product, and comms emergencies
variables:
  - "{{feature_name}}"
  - "{{feature_description}}"
  - "{{launch_type}}"
  - "{{launch_date}}"
  - "{{teams}}"
  - "{{customer_segments}}"
  - "{{key_risks}}"
  - "{{rollout_plan}}"
exampleInput: |
  feature_name: AI Insights — weekly engagement summary
  feature_description: AI analyzes survey results weekly and generates a plain-English summary of top engagement insights with recommended actions
  launch_type: Phased rollout (20% → 50% → 100% over 3 weeks)
  launch_date: March 15, 2025
  teams: Product, Engineering, Design, Marketing, Customer Success, Legal
  customer_segments: All 800 paying accounts (all tiers)
  key_risks: AI outputs could be inaccurate or misleading; customer data privacy concerns; potential for high token costs if usage spikes; some customers may be skeptical of AI
  rollout_plan: 20% of accounts at launch (March 15), expand to 50% March 22 if metrics healthy, 100% March 29
exampleOutput: |
  # Pre-Launch Checklist: AI Insights Feature
  **Launch date:** March 15, 2025 | **Rollout:** Phased (20% → 50% → 100%) | **DRI:** VP Product

  ## Phase 1: 3–4 Weeks Before (by Feb 22)

  **Product**
  - [ ] AI Insights PRD approved by VP Product and Head of Engineering | PM | Feb 22
  - [ ] Success metrics defined (Week 1 open rate, 30-day adoption, accuracy satisfaction) | PM | Feb 22
  - [ ] Token cost model reviewed with CFO (cost per account per week at 100% rollout) | PM + Finance | Feb 22
  - [ ] Rollback plan documented: feature flag disable process documented | PM + Engineering | Feb 22

  **Engineering**
  - [ ] AI output quality tested on 50 real anonymized accounts | Engineering | Feb 22
  - [ ] Token cost cap per account implemented (circuit breaker) | Engineering | Feb 22
  - [ ] Feature flag implemented — enables per-account activation | Engineering | Feb 22
  - [ ] Rate limiting implemented on AI API calls | Engineering | Feb 22
  - [ ] Error monitoring configured for AI generation failures | Engineering | Feb 22

  **Legal**
  - [ ] Privacy review: confirm no customer data is used for AI model training | Legal | Feb 22
  - [ ] AI disclosure language approved ("Powered by AI — verify with your team") | Legal | Feb 22
  - [ ] Terms of service updated to include AI-generated content disclosure | Legal | Mar 1

  ## Phase 2: 1–2 Weeks Before (by Mar 8)

  **Engineering**
  - [ ] QA: AI outputs reviewed for 20 test accounts — no hallucinations or inappropriate content | QA + PM | Mar 8
  - [ ] Load test: simulate 200 accounts generating insights simultaneously | Engineering | Mar 8
  - [ ] Monitoring dashboard live: tracks token cost, error rate, generation success rate | Engineering | Mar 8
  - [ ] 20% cohort selected and feature flag configured for March 15 | Engineering | Mar 12

  **Customer Success**
  - [ ] CS team trained on AI Insights feature and common questions | CS Manager | Mar 8
  - [ ] FAQ documented: "Is my data safe?" "How accurate is this?" "Can I turn it off?" | CS + PM | Mar 8
  - [ ] Proactive email to beta customers (who gave early feedback) | CS | Mar 12
  - [ ] Escalation path for AI accuracy complaints documented | CS Manager | Mar 8

  **Marketing**
  - [ ] Launch email drafted and approved ("AI Insights is here") | Marketing | Mar 8
  - [ ] In-app announcement copy approved (legal cleared AI language) | Marketing + Legal | Mar 8
  - [ ] Blog post drafted and legal-reviewed | Marketing | Mar 8
  - [ ] Social posts drafted (no publication until launch day) | Marketing | Mar 8

  ## Launch Day (March 15)

  - [ ] Feature flag enabled for 20% cohort at 9:00 AM ET | Engineering Lead
  - [ ] Error rate and token cost monitored for first 2 hours | Engineering on call
  - [ ] Launch email sent at 10:00 AM ET | Marketing
  - [ ] In-app announcement enabled | Engineering / CS Ops
  - [ ] Team notification in #product-announcements | PM
  - [ ] CS team briefed — "launch is live, watch for inbound" | CS Manager
  - [ ] Token cost checked against projections by noon ET | PM

  ## Go / No-Go Criteria (March 14 check)
  **Launch proceeds if:**
  - Zero P0/P1 bugs open in staging
  - AI output quality review passed (QA sign-off)
  - Legal has approved all customer-facing AI copy
  - Token cost projection is within approved budget
  - CS team confirms they're trained and ready

  **Launch blocked if:**
  - Any known AI hallucination or misleading output in test accounts
  - Token cost projection exceeds $8K/month at 20% rollout (escalate to CFO)
  - Legal has not approved AI disclosure language

  ## Rollback Plan
  1. Engineering disables feature flag for all accounts — immediate (< 5 minutes)
  2. PM sends internal Slack notification: "AI Insights rolled back — [reason]"
  3. CS sends brief customer email if feature was already announced: "We've temporarily paused AI Insights while we improve quality. [ETA for return]"
  4. Marketing holds all pending social posts

  ## Escalation Contacts
  | Area | Primary | Secondary |
  |------|---------|-----------|
  | Engineering emergency | Marcus W. (on-call) | Dev A. |
  | Product decisions | Jamie C. (VP Product) | PM on rotation |
  | Customer communications | CS Manager | VP CS |
  | AI accuracy concern | PM + Head of Eng | CTO |
tips:
  - "The Go/No-Go criteria are the most important section. Define them before launch week — not on launch morning when pressure is high and judgment is compromised."
  - "Legal review of AI-related copy often takes longer than expected. Start it 4 weeks before launch, not 1 week."
  - "A feature flag with phased rollout is not optional for AI features — it's essential. Never launch AI to 100% of users on day 1."
  - "After every launch, run a quick retro: What was almost missed? What took longer than expected? What can be added to the standard checklist for next time?"
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - go-to-market-brief
  - post-launch-review
  - prd-one-pager
  - success-metrics-framework
tags:
  - product-launch
  - product-management
  - release-management
  - checklists
  - go-to-market
---
