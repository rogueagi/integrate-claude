---
title: "Generate structured interview questions for a role"
slug: structured-interview-questions
function: hr
role: recruiting
description: "Generate a bank of structured behavioral and situational interview questions for a specific role, organized by competency and designed to produce evidence-based hiring decisions."
useCase: "Use this prompt to prepare for an interview by generating role-specific behavioral and situational questions. Structured interviews — where every candidate is asked the same questions in the same order — produce more consistent, legally defensible, and predictive hiring decisions than unstructured conversations."
prompt: |
  You are a recruiting partner or hiring manager preparing structured interview questions for a specific role.

  Context:
  - Role: {{role_title}}
  - Seniority: {{seniority}}
  - Key competencies to assess: {{competencies}} (list 4–6 competencies that predict success in this role)
  - Common failure modes in this role: {{failure_modes}} (what typically goes wrong for people who don't work out)
  - Company context: {{company_context}} (stage, culture, working environment)
  - Interview format: {{interview_format}} (30-min screen / 60-min panel / structured loop)

  For each competency, generate:

  ## [Competency Name]
  **Why it matters for this role:** (1 sentence specific to the role, not generic)

  **Behavioral question (past behavior):**
  The STAR format question ("Tell me about a time when…") — specific enough to surface real examples, not hypotheticals.

  **Follow-up probes:**
  3 follow-up questions to go deeper if the initial answer is vague or surface-level:
  - Follow-up 1: Specific to the situation (what was the context?)
  - Follow-up 2: Specific to the action (what did YOU do, not "we"?)
  - Follow-up 3: Specific to the outcome/learning (what happened, and what would you do differently?)

  **Situational question (hypothetical):**
  A "What would you do if…" question that presents a realistic scenario relevant to this role.

  **What a strong answer includes:**
  3–5 specific indicators that the answer reflects the competency you're assessing.

  **Red flags:**
  2–3 specific answer patterns that indicate weakness in this competency.

  After all competencies, add:

  ## Questions to Avoid
  5 questions that interviewers commonly ask that are either legally problematic, produce no useful signal, or enable candidate coaching without substance.

  ## Candidate Questions Section
  5–7 questions good candidates often ask — and how you'd ideally answer them. Prepares the interviewer for the end of the conversation.
variables:
  - "{{role_title}}"
  - "{{seniority}}"
  - "{{competencies}}"
  - "{{failure_modes}}"
  - "{{company_context}}"
  - "{{interview_format}}"
exampleInput: |
  role_title: Customer Success Manager
  seniority: Mid-level (2–4 years CS experience)
  competencies: Proactive account management, handling difficult conversations, cross-functional coordination, customer business acumen, managing a portfolio at scale
  failure_modes: Reactive (only responds to issues, doesn't surface risk); can't deliver bad news to customers; gets attached to accounts and misses churn signals; doesn't know customers' business well enough to advise strategically
  company_context: 28-person SaaS startup; CSM manages 20–30 accounts at $1.82M ARR; works closely with product team on customer feedback; direct communication culture
  interview_format: 60-minute structured interview with VP CS and peer CSM
exampleOutput: |
  # Structured Interview Questions — Customer Success Manager
  **Anchor Analytics | Mid-Level (2–4 years)**

  ---

  ## Competency 1: Proactive Account Management

  **Why it matters:** A reactive CSM processes problems; a proactive CSM prevents them. At a 20–30 account portfolio, you can't afford to wait for customers to tell you they're at risk.

  **Behavioral question:**
  "Tell me about a customer account where you identified a risk of churn before the customer raised it themselves. How did you identify the risk, and what did you do about it?"

  **Follow-up probes:**
  - "What specific signal or data point told you this account was at risk?"
  - "What actions did you take personally — not what the team did, but what you specifically did?"
  - "How did that account end up — did they renew, churn, or are they still at risk? What would you do differently?"

  **Situational question:**
  "You're managing 25 accounts. Three of them have had declining product usage for 6 weeks — none have raised a concern with you. You also have a renewal coming up in 30 days for a strategic account that's currently healthy. How do you prioritize your time this week?"

  **What a strong answer includes:**
  - Describes a specific, concrete account situation (not "generally, I review health scores")
  - Identifies the specific signal they acted on (usage data, NPS change, executive contact changes, support ticket volume)
  - Takes personal ownership of the action — doesn't attribute it to "the team"
  - Has a follow-up outcome that shows the action worked or a clear lesson from when it didn't

  **Red flags:**
  - Describes a situation where the customer raised the risk first, then frames it as proactive
  - Vague about what signal triggered the intervention
  - Treats customer health as something that happens to them, not something they actively manage

  ---

  ## Competency 2: Handling Difficult Conversations

  **Why it matters:** CSMs at early-stage companies often deliver bad news — product delays, pricing changes, feature requests that won't be built. The ability to have these conversations without losing the relationship is what separates great CSMs from good ones.

  **Behavioral question:**
  "Tell me about a time you had to deliver news to a customer that you knew they weren't going to like. What was the situation and how did you handle it?"

  **Follow-up probes:**
  - "What was your approach to preparing for that conversation? What did you say first?"
  - "How did the customer respond, and how did you handle their reaction?"
  - "How did the relationship look 30 days later? Did the way you handled it affect the outcome?"

  **Situational question:**
  "A customer is on the renewal call and tells you they've decided not to renew — it's the first time you're hearing this. Their reason is that a feature they requested 6 months ago still hasn't been built. What do you do in the next 5 minutes of that call?"

  **What a strong answer includes:**
  - Describes a genuinely difficult situation (not "I had to tell them a feature would be delayed by a week")
  - Shows preparation: knew the message, had considered the customer's reaction
  - Demonstrates empathy without losing clarity — doesn't bury the message or over-soften it
  - Has a specific approach to managing the aftermath

  **Red flags:**
  - Has never had a genuinely difficult customer conversation (raises questions about portfolio health or conflict avoidance)
  - Describes avoiding the conversation or delegating it to a manager
  - Resolved the situation by making a commitment they couldn't keep

  ---

  ## Competency 3: Cross-Functional Coordination

  **Why it matters:** CSMs are the customer's voice inside the company. At a startup, this means escalating productively to engineering, product, and sales — often without formal authority.

  **Behavioral question:**
  "Tell me about a time you needed to get something done for a customer that required another team's help — engineering, product, or sales — and that team wasn't making it a priority. How did you handle it?"

  **Follow-up probes:**
  - "What specifically was the other team's objection or priority conflict?"
  - "How did you make the case for prioritization? What arguments did you use?"
  - "What was the outcome? Did you get what you needed, and how long did it take?"

  **Situational question:**
  "A customer has found a bug that's preventing them from using a key feature. Engineering tells you the fix will take 3 weeks. The customer is unhappy and threatening to escalate. What do you do in the next 24 hours — internally and externally?"

  **What a strong answer includes:**
  - Shows ability to work across teams without formal authority
  - Uses customer context to make the business case for internal prioritization
  - Manages the customer's expectations while advocacy is in progress — doesn't overpromise
  - Resolves the situation without burning internal relationships

  **Red flags:**
  - Escalates to their manager immediately without trying to resolve it themselves
  - Makes commitments to the customer without internal alignment
  - Describes a situation where another team "just wouldn't help" with no reflection on their own approach

  ---

  ## Competency 4: Customer Business Acumen

  **Why it matters:** CSMs who understand their customers' businesses can advise strategically. CSMs who don't end up as support ticket handlers.

  **Behavioral question:**
  "Tell me about a customer where you understood their business well enough to spot an opportunity or a risk they hadn't seen themselves. What was the situation?"

  **Follow-up probes:**
  - "How did you develop that level of understanding of their business?"
  - "What specifically did you see that they hadn't?"
  - "What did you do with that insight, and what was the customer's response?"

  **Situational question:**
  "You're doing a QBR with a $45K ARR SaaS customer. Their CEO is in the meeting. You've looked at their product usage data and noticed that their sales team's usage of the platform has dropped 40% over the last 8 weeks. The customer hasn't mentioned this. What do you do?"

  **What a strong answer includes:**
  - Can describe a customer's business model, key metrics, and success drivers in their own words
  - Has a specific example of using customer business knowledge to drive a recommendation
  - Asks business questions, not just product questions, in account conversations
  - The QBR scenario answer includes raising the usage data proactively and understanding the business reason before proposing a solution

  **Red flags:**
  - Customer business acumen described only in terms of the product they use — no understanding of what the customer is trying to achieve in their market
  - Treats QBRs as a product review rather than a business conversation
  - In the scenario, doesn't raise the usage drop at all or waits for the customer to bring it up

  ---

  ## Competency 5: Portfolio Management at Scale

  **Why it matters:** A CSM managing 20–30 accounts can't give every account the same attention. Prioritization, systems, and discipline are what separate effective portfolio managers from overwhelmed ones.

  **Behavioral question:**
  "Tell me about a period when you were managing more accounts than felt comfortable. How did you decide what got your attention and what didn't?"

  **Follow-up probes:**
  - "What was your specific system or approach for triaging which accounts needed attention?"
  - "Were there any accounts that slipped through the cracks? What happened and what did you learn?"
  - "How did you communicate with accounts that weren't getting your full attention?"

  **Situational question:**
  "On Monday morning you have: a renewal call on Thursday (high-probability, no red flags), an angry customer who emailed over the weekend about a bug, a low-usage account with a renewal in 2 months, and a prospective expansion conversation a sales rep has asked you to join. You have 6 hours of available time this week after standing meetings. How do you allocate it?"

  **What a strong answer includes:**
  - Has a clear triage methodology — health-based, renewal-based, or some combination
  - Admits to trade-offs honestly — acknowledges that some accounts get less attention and has a system for managing that
  - The scenario answer reflects reasonable prioritization with a clear rationale, not a claim that they'd handle everything equally
  - Uses tools or systems (Gainsight, Notion, personal frameworks) to manage scale, not just willpower

  **Red flags:**
  - Claims they give every account equal attention (not credible at 25+ accounts)
  - Has no systematic approach to prioritization — decides ad hoc each week
  - The scenario prioritization answer doesn't reflect the business urgency hierarchy

  ---

  ## Questions to Avoid

  1. **"Where do you see yourself in 5 years?"** — Produces rehearsed answers that tell you nothing about job performance. Ask about specific career milestones instead.

  2. **"What's your greatest weakness?"** — Produces coached responses ("I work too hard"). Replace with behavioral questions about specific failures.

  3. **"Why do you want to work here?"** — Tells you about research skills, not job performance. What you actually want to know is whether their skills match the role — ask directly.

  4. **"Tell me about yourself."** — Too unstructured. Produces a chronological resume recitation. If you want career history, ask about specific transitions and why they made them.

  5. **Questions about gaps in employment, family plans, or personal circumstances** — These are legally problematic and produce no job-relevant signal. Stick to job-related competencies.

  ---

  ## How to Answer the Candidate's Best Questions

  **"How does the CS team work with the product team?"**
  *What to share:* Specific examples of how CS feedback has influenced the product roadmap. The frequency of CS-product syncs. A feature that was built based on customer feedback.

  **"What does success look like in the first 90 days?"**
  *What to share:* Be honest — 30 days is onboarding and learning, 60 days is first independent accounts, 90 days is early signal on account health and relationships. Don't oversell.

  **"What's the biggest challenge for the CS team right now?"**
  *What to share:* Be honest. If the portfolio is growing faster than the team, say that. If there are product gaps creating CS conversations, acknowledge it. Candidates who ask this question are good candidates — they deserve a real answer.

  **"How does the company handle churn?"**
  *What to share:* The honest churn rate, the post-mortem process, and what management does when churn is above plan. This question tests whether the CS function is trusted with real information.

  **"What have you learned from CSMs who didn't work out?"**
  *What to share:* This is the highest-signal question a candidate can ask — and most interviewers don't prepare for it. Be specific about actual failure modes you've seen and what you look for to avoid them. It shows self-awareness and organizational learning.
tips:
  - "Behavioral questions (past behavior) predict performance better than hypothetical questions (what would you do). Use both, but weight behavioral more heavily."
  - "The follow-up probes are where the signal is. The initial answer is often coached; the follow-ups reveal whether the candidate actually did what they described."
  - "Ask 'what did YOU do' not 'what did your team do.' CS is a collaborative role, but interviews should reveal the individual's specific contribution."
  - "Consistency is the point of structured interviews. If you ask different questions to different candidates for the same role, you can't compare them — and you open yourself to bias and legal risk."
  - "Share the competency framework (not the questions) with candidates in advance. It produces better interviews — candidates prepare more substantively, and the conversation is richer."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - interview-scorecard
  - job-description-engineering
  - job-description-sales
  - candidate-rejection-email
tags:
  - recruiting
  - interview
  - structured-hiring
  - hr
  - behavioral-interview
---
