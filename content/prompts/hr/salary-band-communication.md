---
title: "Communicate salary bands to employees"
slug: salary-band-communication
function: hr
role: people-ops
description: "Generate a clear, thoughtful communication to employees about the company's salary band structure — what it means, how it works, and what it means for them."
useCase: "Use this prompt when introducing salary bands for the first time, updating an existing compensation structure, or responding to employee questions about pay equity. Most employees don't understand how salary bands work — or why they exist. A clear communication reduces anxiety, builds trust, and decreases the number of individual comp conversations that derail managers."
prompt: |
  You are a People Ops lead or Head of HR communicating the company's compensation philosophy and salary band structure to employees.

  Context:
  - Company: {{company_name}}
  - Audience: {{audience}} (all employees, specific department, managers only)
  - What's changing or being introduced: {{change_description}} (first time introducing bands / refreshing bands / sharing more transparency)
  - Compensation philosophy: {{comp_philosophy}} (how the company thinks about pay — market positioning, pay equity goals, performance differentiation)
  - Salary band structure: {{band_structure}} (levels, ranges, how bands are set — e.g., 25th/50th/75th percentile of market, geographic adjustments)
  - What employees should expect to learn: {{employee_expectations}} (will individual bands be shared? Will employees see their level? Will they learn where in a band they sit?)
  - Any pay adjustments being made: {{pay_adjustments}} (if bands are being rolled out with adjustments, describe what's happening)
  - What won't change: {{unchanged}} (at-will employment, performance review process, etc.)
  - Questions employees are likely to ask: {{anticipated_questions}}
  - Tone: {{tone}} (transparent and direct / professional and reassuring / conversational)

  Write a communication that includes:

  ## Subject Line (if email)
  Specific and informative — not "Important HR Update"

  ## Introduction (1–2 paragraphs)
  Why you're sharing this and what it's designed to accomplish. Lead with the benefit to employees, not the company.

  ## What Salary Bands Are (Plain Language)
  Explain the structure for employees who haven't encountered formal bands before. No jargon.

  ## How Compensation Decisions Work Here
  How positions within a band are determined — experience, performance, tenure, market rates.

  ## What This Means for You
  The practical implications — will individual band information be shared? How does this affect raises, promotions, and new hire offers?

  ## FAQ
  5–7 anticipated questions with honest answers — including the uncomfortable ones employees will actually ask.

  ## What to Do With Questions
  Clear next step for employees who want to discuss their specific situation.

  Tone: direct and honest. Compensation communication is where many companies fail because they're vague or defensive. Employees who don't understand the system make up their own story — usually a worse one. Clarity reduces anxiety and increases trust.
variables:
  - "{{company_name}}"
  - "{{audience}}"
  - "{{change_description}}"
  - "{{comp_philosophy}}"
  - "{{band_structure}}"
  - "{{employee_expectations}}"
  - "{{pay_adjustments}}"
  - "{{unchanged}}"
  - "{{anticipated_questions}}"
  - "{{tone}}"
exampleInput: |
  company_name: Anchor Analytics
  audience: All employees
  change_description: First time introducing salary bands — company has grown to 28 people and informal comp decisions are creating inconsistency
  comp_philosophy: Target 50th percentile of market for base salary, using Radford/Levels.fyi benchmarks; believe pay should be competitive and equitable; performance differentiated through equity and bonus, not base salary variation within a band; geographic adjustments for cost-of-labor differences (SF, NYC, everywhere else)
  band_structure: 5 IC levels (IC1–IC5) and 3 management levels (M1–M3); each level has a target range (P25–P75 of market benchmark); current employees are being placed into levels; ranges will be shared with employees
  employee_expectations: Employees will learn their level and their salary range; they will not see where others sit in the band; managers will have context on how to discuss band placement
  pay_adjustments: Any employees below the P25 of their band are being brought up to the band floor as part of this rollout (approximately 3 employees); no one is being reduced
  unchanged: Performance review cycle and rating system unchanged; equity refresh program unchanged
  anticipated_questions: Am I being paid fairly? Why am I at this level? What if I disagree with my level? Can I see what others make? Does this mean I won't get a raise unless I'm promoted?
  tone: transparent and direct
exampleOutput: |
  **Subject:** Introducing Anchor's Compensation Structure — What It Means for You

  ---

  Hi team,

  As Anchor has grown from 10 to 28 people, something that worked fine in a smaller team has started to create friction: compensation decisions that happen case by case, without a clear, consistent framework. We want to fix that — and this communication explains how.

  Starting this month, Anchor is formalizing our compensation structure with defined salary bands for every role and level at the company. We're sharing this with you because we believe you deserve to understand how your pay is determined — not to find out when you negotiate or leave.

  ---

  ## What Are Salary Bands?

  A salary band is a range of pay for a given role and level at the company. For example, "IC3 Engineer" might have a range of $145,000–$185,000. This means that everyone in an IC3 Engineer role is paid somewhere in that range.

  Our bands are built using two data sources:
  - **Radford** (a compensation benchmark that surveys thousands of companies on actual salary data by role, level, and location)
  - **Levels.fyi** (a public dataset focused on tech roles, which we use to verify against market rates for engineering roles specifically)

  We target the **50th percentile** of market for each role — meaning our goal is to pay at the midpoint of what comparable companies pay for comparable roles. We believe this is competitive for a pre-Series A company and allows us to compete for strong candidates without making compensation promises we can't sustain.

  ---

  ## How Compensation Works at Anchor

  **Base salary:**
  Your base salary is set to be competitive with the market for your role and level. Within a band, placement reflects factors like total years of relevant experience, specialized skills, and internal equity (we don't want two people doing the same job at the same level to be paid dramatically differently).

  **Levels:**
  Every role at Anchor maps to a level — IC1 through IC5 for individual contributors, M1 through M3 for managers. Your level reflects your scope, autonomy, and impact in your role. This week, you'll receive information from your manager about your level and your band range.

  **Geographic adjustment:**
  Because the cost of labor varies significantly across the US, we apply geographic adjustments. Employees in high-cost areas (San Francisco Bay Area, New York City) receive higher base salaries than employees in lower-cost areas in the same band. This reflects the labor market, not a judgment about where you choose to live.

  **Performance differentiation:**
  We believe base salary should be stable and predictable. Performance differentiation at Anchor comes through equity (refresh grants for strong performers) and bonus eligibility, not through significant variation in base salary within a band. This means your base salary won't jump dramatically in a single year — but it also means it won't drop.

  ---

  ## What This Means for You

  **This week:** Your manager will schedule time to share your level and your salary band range. You'll see the range; you won't see where your colleagues sit in the band (that's private to each employee).

  **No one is being paid less:** If your current salary is below the band floor for your level, we are bringing you up as part of this rollout — no later than June 1. No one's salary is being reduced.

  **Raises and promotions:** Under this structure, raises within a band happen at the annual review cycle, based on market movement (if benchmarks shift) and internal adjustments. Promotions to a new level come with a corresponding increase to the new level's band. You don't have to wait until you're at the top of your band to be promoted — band placement and promotion decisions are separate.

  ---

  ## Frequently Asked Questions

  **Am I being paid fairly?**
  We've designed the bands to ensure that employees doing comparable work at comparable levels are paid comparably. If your current salary is below the band floor, we're fixing that in this rollout. If you have a specific concern about your pay relative to your level or role, please talk to your manager or reach out to Maya (people@anchor.com) — we want to know.

  **Why am I at this level — I thought I was more senior?**
  Levels are based on the scope and impact of your current role, not your career experience overall. It's possible to have 10 years of experience and be at an IC3 if the role you're in is currently scoped at that level. If you believe your work has expanded to the point that your level should be reviewed, that's a conversation to have with your manager — level reviews are part of the annual performance process, and mid-year reviews can be requested.

  **What if I disagree with my level placement?**
  Talk to your manager first. If after that conversation you still believe there's a mismatch, Maya is the right next contact. We'll review the criteria together and make sure we're applying them consistently. This isn't a process with no appeals — we want to get it right.

  **Can I see what my colleagues make?**
  No — individual salaries are private to each employee. You'll see your band range; you won't see where others sit within it. This is a deliberate choice: individual salary data creates interpersonal friction that usually causes more harm than the transparency is worth. If you're concerned about equity in the broader sense, please ask us — we track pay equity across gender, tenure, and other factors and will share those aggregate findings.

  **Does this mean I won't get a raise unless I get promoted?**
  Not exactly. Within a band, salaries can be adjusted at the annual review for two reasons: (1) the market has moved and benchmarks have increased, or (2) an internal equity adjustment is warranted. The goal is not to freeze your salary until you're promoted — it's to ensure salary decisions are systematic rather than ad hoc. Equity and bonus are the primary performance differentiation tools; base salary is designed to track the market.

  **Does this affect my equity or bonus?**
  No. The equity refresh program and any bonus eligibility are unchanged by this rollout.

  **What if I'm thinking about leaving because I think I can make more somewhere else?**
  Please talk to us first. If the market has genuinely shifted since your last compensation review, we want to know — and we'd rather make a competitive adjustment than lose someone we value. Our bands are updated annually to reflect market benchmarks; if you've seen specific data suggesting you're below market, bring it to the conversation.

  ---

  ## Questions?

  Your manager is the right first point of contact for questions about your specific level or band. For questions about the broader structure, the benchmarking methodology, or pay equity, reach out to Maya Chen at people@anchor.com.

  We're scheduling an optional Q&A session for anyone who wants to discuss this further: **Thursday, May 23 at 11:00 AM PT** — Zoom link in the calendar invite.

  — Marcus Chen and Maya Chen
tips:
  - "Anticipate the question 'why am I at this level?' and answer it proactively. Employees who feel they were miscategorized become disengaged quickly. Make the level placement criteria explicit and create a clear appeals process."
  - "The 'what if I can make more elsewhere?' question is the most important one to answer honestly. Companies that say 'we can't match market' lose people who would have stayed for a competitive adjustment. Be clear about whether and how you'll respond to competitive offers."
  - "Share band ranges, not just the midpoint. Employees who only know the midpoint of their band don't understand what growth within the band looks like. A range (e.g., $145K–$185K) is more useful."
  - "If you're rolling out bands for the first time, expect some employees to feel underleveled. Build the appeals process before you start the conversation — a process that exists only in theory isn't reassuring."
  - "The 'does this mean I won't get a raise unless I'm promoted?' question is the most anxiety-inducing aspect of bands. Answer it directly and explain how within-band increases work — or honestly acknowledge if they are limited to promotion events."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - employee-handbook-section
  - offer-letter-draft
  - all-hands-agenda
  - policy-change-announcement
tags:
  - compensation
  - people-ops
  - hr
  - salary-bands
  - transparency
---
