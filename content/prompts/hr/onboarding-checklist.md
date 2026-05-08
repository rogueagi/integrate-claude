---
title: "Create a new employee onboarding checklist"
slug: onboarding-checklist
function: hr
role: people-ops
description: "Generate a comprehensive, role-specific onboarding checklist that gives new employees a structured first 90 days and helps managers deliver a consistent onboarding experience."
useCase: "Use this prompt to create an onboarding checklist for a new hire — either a general template or one customized for a specific role. Companies that onboard well retain employees longer and see faster time-to-productivity. A structured checklist ensures no step is missed and gives the new employee a clear sense of what to expect."
prompt: |
  You are a People Ops lead creating an onboarding checklist for a new employee.

  Context:
  - Company: {{company_name}}
  - New employee name and role: {{employee_name_and_role}}
  - Start date: {{start_date}}
  - Department: {{department}}
  - Manager: {{manager_name}}
  - Work location: {{work_location}} (remote, hybrid, or in-office)
  - Key tools and systems the employee needs access to: {{tools_and_systems}}
  - Key people they should meet in the first 30 days: {{key_relationships}}
  - Role-specific early priorities: {{role_priorities}} (what this person should be doing, learning, or delivering in their first 30/60/90 days)
  - Company culture context: {{culture_context}} (anything important about how the company operates that the new employee should understand early)

  Create a checklist organized into:

  ## Before Day 1 (Pre-boarding)
  What People Ops and the manager do before the new employee's first day — equipment, access, communication, workspace prep.

  ## Day 1
  Exactly what happens on the first day — meeting by meeting, task by task. Not "orientation" but specific activities.

  ## Week 1 (Days 2–5)
  The first full week — focus on tools, team, and context without overwhelming.

  ## Month 1 (Days 6–30)
  Building understanding of the role, product, customers, and team. Key meetings to have and documents to read.

  ## Month 2 (Days 31–60)
  Increasing independence. Beginning to contribute to real work. Key milestones for this period.

  ## Month 3 (Days 61–90)
  Operating with autonomy. Delivering early wins. Completing the onboarding arc.

  For each item in the checklist, include:
  - The task or activity
  - The owner (People Ops, manager, or new employee)
  - A brief "why it matters" note (optional but valuable for manager checklists)

  Also include:
  ## 30/60/90-Day Check-In Template
  A brief structured template for the manager to use at each milestone check-in — what to discuss, what to assess, what to ask.
variables:
  - "{{company_name}}"
  - "{{employee_name_and_role}}"
  - "{{start_date}}"
  - "{{department}}"
  - "{{manager_name}}"
  - "{{work_location}}"
  - "{{tools_and_systems}}"
  - "{{key_relationships}}"
  - "{{role_priorities}}"
  - "{{culture_context}}"
exampleInput: |
  company_name: Anchor Analytics
  employee_name_and_role: Jordan Rivera, Senior Account Executive
  start_date: May 20, 2024
  department: Sales
  manager_name: James Wu, VP of Sales
  work_location: Remote (US)
  tools_and_systems: Salesforce, Outreach, LinkedIn Sales Navigator, Slack, Notion (company wiki), Google Workspace, Chorus, Zoom, Expensify
  key_relationships: James Wu (manager), Marcus Chen (CEO), Priya Patel (CTO — product context), Maya Chen (Controller — financial buyer context), existing AE team (3 peers), 2 CSMs (CS team handoff partners), Marketing Manager
  role_priorities: 30 days — product knowledge + ICP mastery + first prospecting sequences. 60 days — first closed deal. 90 days — sustainable pipeline and on-pace for quarterly quota
  culture_context: Direct communication culture; Slack is the primary async channel; weekly all-hands on Monday mornings; management trusts employees to manage their own time; direct feedback expected and welcomed; small team means everyone knows each other
exampleOutput: |
  # New Employee Onboarding Checklist
  **Jordan Rivera — Senior Account Executive**
  **Anchor Analytics | Start Date: May 20, 2024**

  ---

  ## Before Day 1 (Pre-boarding)

  **People Ops (Maya Chen):**
  - [ ] Send welcome email with Day 1 schedule, Slack link, and what to expect (send May 17)
  - [ ] Ship laptop via FedEx Priority — arrive by May 17 (confirm delivery address)
  - [ ] Provision accounts: Google Workspace, Slack, Notion, Salesforce (read-only until Day 3), Expensify
  - [ ] Set up Rippling for payroll/benefits; send benefits enrollment link (Jordan has 30 days to elect)
  - [ ] Add Jordan to team Slack channels: #general, #sales, #all-hands, #wins
  - [ ] Send $500 home office stipend process email (can submit receipts from Day 1)
  - [ ] Schedule Day 1 welcome call with James at 9:00 AM

  **Manager (James Wu):**
  - [ ] Send a personal welcome message to Jordan's personal email on May 17 — brief, warm, practical ("here's what Monday looks like")
  - [ ] Send the SDR/AE Onboarding Playbook link (Notion) with a note to read through it before Day 1 if they have time
  - [ ] Confirm Jordan is added to the weekly team standup (Monday, 10 AM)
  - [ ] Block James's calendar for daily 15-min check-ins for the first 2 weeks
  - [ ] Tell the existing AE team who's starting and ask them to reach out on Day 1

  ---

  ## Day 1 (Monday, May 20)

  | Time | Activity | Owner | Notes |
  |---|---|---|---|
  | 9:00 AM | Welcome call with James Wu | James | 60-min 1:1; tour of the role, team, and Week 1 plan |
  | 10:00 AM | All-hands standup | Marcus (facilitates) | Jordan introduced to full team; James introduces |
  | 10:30 AM | IT setup and account verification | Jordan | Confirm access to all provisioned tools; flag any gaps to Maya |
  | 11:00 AM | Notion wiki orientation | Jordan | Read: Company Overview, Sales section index, AE Playbook intro |
  | 12:00 PM | Lunch — async, no meetings | Jordan | Encourage to take a real break on Day 1 |
  | 1:00 PM | Product demo walkthrough (recorded) | Jordan | Watch the 60-min recorded demo in Google Drive; take notes |
  | 2:30 PM | Welcome 1:1 with Maya Chen (People Ops) | Maya | 30 min; benefits enrollment, policy overview, answer HR questions |
  | 3:00 PM | Write Day 1 reflection | Jordan | 5 minutes: what was useful, what questions do you have? Share in Slack #sales |

  ---

  ## Week 1 (Days 2–5: May 21–24)

  **Product and Company Knowledge:**
  - [ ] Read: ICP Definition document (Notion > Sales > ICP) — Jordan — Day 2
  - [ ] Read: Competitive battle cards for Amplitude, Mixpanel, Tableau — Jordan — Day 2–3
  - [ ] Complete Salesforce 101 (Trailhead "Salesforce for Sales" — ~3 hours) — Jordan — Days 3–4
  - [ ] Read: Signal product overview and launch data summary — Jordan — Day 3
  - [ ] Watch: 3 Chorus call recordings (James will select; 1 great, 1 average, 1 enterprise close) — Jordan — Days 3–5

  **Relationships:**
  - [ ] 1:1 with Marcus Chen (CEO) — 30 min — schedule for Day 2 or 3 — James sets up
  - [ ] 1:1 with each peer AE — 20 min each — Jordan schedules directly via Slack
  - [ ] 1:1 with Priya Patel (CTO) — 30 min — "understand the product from the builder's perspective" — James sets up
  - [ ] Meet the CS team on a group call — 30 min — James coordinates

  **Tools and Process:**
  - [ ] Set up Outreach sequences library; review top 3 performing sequences — Jordan — Day 2
  - [ ] Set up LinkedIn Sales Navigator saved searches for ICP account targeting — Jordan — Day 3–4
  - [ ] Complete Expensify setup; submit home office stipend receipt if purchased — Jordan — Day 5

  **Daily:**
  - [ ] Daily 15-min check-in with James (9:00 AM) — all of Week 1

  ---

  ## Month 1 (Days 6–30)

  **Learning milestones:**
  - [ ] Pass ICP Quiz (10-question assessment developed by James) — Jordan — Day 14
  - [ ] Can explain Anchor's value proposition without looking at the deck — Jordan — Day 10 target
  - [ ] Shadow 3 discovery calls (with James or senior AE) — Jordan — Days 6–14
  - [ ] Run 2 mock cold calls with James (role-play) — Jordan — Week 3
  - [ ] Read Fanatical Prospecting (chapters 1–5) — Jordan — by Day 21

  **First outreach:**
  - [ ] Build target account list (60 accounts) — Jordan — Day 10
  - [ ] Draft first outbound email sequence (3 emails + LinkedIn touch) — Jordan — Day 12
  - [ ] James reviews and approves first sequences before sending — James — Day 14
  - [ ] Begin sending 20+ outbound sequences per week (with pre-approval for first batch) — Jordan — Week 3

  **Milestone: 30-day check-in (see template below)**

  ---

  ## Month 2 (Days 31–60)

  **Performance milestones:**
  - [ ] First qualified discovery call booked and held — Jordan — target by Day 35
  - [ ] Sending 40+ outreach sequences per week independently — Jordan — by Day 45
  - [ ] Salesforce accuracy maintained at 95%+ — Jordan — ongoing
  - [ ] First deal closed — Jordan — target by Day 60 (first close) or at minimum 3+ opportunities in late stage

  **Relationships:**
  - [ ] Meet Marketing Manager (Sarah Kim) — discuss Signal campaign and co-marketing opportunities — Jordan — Week 5
  - [ ] Join one CS QBR as an observer — Jordan — if available in this period

  **Milestone: 60-day check-in (see template below)**

  ---

  ## Month 3 (Days 61–90)

  **Operating independently:**
  - [ ] Managing full pipeline without pre-approval on outreach — Jordan — ongoing
  - [ ] Booking 3+ qualified discovery calls per week — Jordan — target by Day 75
  - [ ] Contributing to AE team playbook (one improvement based on what's working) — Jordan — by Day 90

  **Performance:**
  - [ ] On-pace to contribute $150K+ new ARR by end of Q3 (first full quarter) — James and Jordan review
  - [ ] Received written performance feedback from James — James — Day 85

  **Milestone: 90-day check-in (see template below)**

  ---

  ## 30/60/90-Day Check-In Templates

  ### 30-Day Check-In (Manager-led, ~45 min)
  **Focus:** Is Jordan set up to succeed? What's missing?

  Questions to ask:
  - "What's clicked and what hasn't in the first month? Anything surprising about the role or the company?"
  - "Where do you feel confident and where do you still need more context or support?"
  - "What do you wish you'd known on Day 1 that you know now?"

  Assess:
  - ICP knowledge — can Jordan qualify a prospect without help?
  - Product knowledge — can they explain Signal to a skeptical buyer?
  - Pipeline activity — are they sending the right volume of outreach?

  Feedback to give: Be specific about what's strong and where they should focus for Month 2.

  ---

  ### 60-Day Check-In (Manager-led, ~45 min)
  **Focus:** Is Jordan contributing at the expected level? On track for quota?

  Questions to ask:
  - "Walk me through your current pipeline — what do you feel good about and what are you worried about?"
  - "What's been the hardest part of the role so far? What do you need from me?"
  - "How is the team dynamic feeling? Anyone you need more connection with?"

  Assess:
  - First deal closed or in late stage?
  - Pipeline volume and quality
  - Discovery call effectiveness (listen to a recording together)

  Feedback to give: Be honest about where the ramp is ahead of pace vs. behind.

  ---

  ### 90-Day Check-In (Manager + People Ops, ~60 min)
  **Focus:** Is Jordan operating at full AE capacity? Formal end of onboarding.

  Questions to ask:
  - "What would you change about your own first 90 days if you could do it over?"
  - "Where do you see your biggest growth opportunity in the next 6 months?"
  - "What do you need from me as your manager to do your best work?"

  Assess:
  - Quota trajectory (on pace?)
  - Independent pipeline generation
  - Team integration and culture fit
  - One-year retention signal: are they energized or showing warning signs?

  Outcome: Formal feedback letter in personnel file; confirm Year 1 goals together.
tips:
  - "Pre-boarding (before Day 1) is the most important and most neglected phase of onboarding. A laptop that doesn't arrive until Day 3, or Slack access that's set up on Day 1, signals disorganization at a moment when the employee is forming their impression of the company."
  - "Day 1 should end with the employee feeling welcomed, not overwhelmed. Limit the content load on Day 1 — prioritize connections and context over information transfer."
  - "The 30-day check-in is when most onboarding problems can still be fixed. Managers who skip this check-in find out at 90 days that something went wrong at week 2 — when it's much harder to course-correct."
  - "Build the onboarding checklist before the employee's first day — not the night before. A well-designed onboarding starts before the offer letter is signed."
  - "Ask employees to rate their own onboarding at 30 and 90 days. A simple survey ('how prepared do you feel for the role on a 1–5 scale? What would have made the onboarding better?') improves each subsequent hire's experience."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - learning-path-outline
  - offer-letter-draft
  - employee-handbook-section
  - all-hands-agenda
tags:
  - onboarding
  - people-ops
  - hr
  - new-hire
  - manager-guide
---
