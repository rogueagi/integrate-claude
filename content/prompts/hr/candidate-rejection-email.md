---
title: "Write a candidate rejection email"
slug: candidate-rejection-email
function: hr
role: recruiting
description: "Generate a professional, respectful rejection email that closes the candidate relationship without burning bridges — and optionally provides feedback."
useCase: "Use this prompt to write rejection emails at any stage of the hiring process — after a resume review, after a phone screen, or after final rounds. Rejection emails that are specific, timely, and human are one of the most underrated employer brand investments a company can make. Every candidate you reject may become a future candidate, customer, or referral source."
prompt: |
  You are a recruiter or hiring manager writing a rejection email to a candidate.

  Context:
  - Company: {{company_name}}
  - Candidate name: {{candidate_name}}
  - Role applied for: {{role_title}}
  - Stage of process: {{stage}} (resume screen / phone screen / technical screen / final round)
  - Reason for rejection: {{rejection_reason}} (be honest — this shapes the tone and content; e.g., "stronger candidate hired," "missing required technical skills," "culture fit concerns," "role was cancelled")
  - Whether to provide feedback: {{provide_feedback}} (yes — and provide the feedback to include; no — keep general)
  - Whether to keep in future candidate pool: {{keep_in_pool}} (yes/no — only say yes if you mean it)
  - Tone: {{tone}} (warm/professional/neutral — avoid cold)

  Write a rejection email that:

  1. **Acknowledges the candidate by name and the specific role** — not generic "Thank you for your interest in opportunities at [Company]"

  2. **Delivers the decision clearly in the first or second sentence** — don't bury it. Candidates who read three paragraphs before learning they're rejected feel disrespected.

  3. **Expresses genuine appreciation** without being hollow. Reference something specific from the process if possible.

  4. **Provides feedback if applicable** — honest, specific, and actionable. Not "we had a very strong pool" (which says nothing about them).

  5. **Closes the relationship appropriately** — if you genuinely want to keep them in consideration for future roles, say so specifically. If not, don't make promises you won't keep.

  Write the rejection email, then provide a brief note on what to avoid in rejection communications.
variables:
  - "{{company_name}}"
  - "{{candidate_name}}"
  - "{{role_title}}"
  - "{{stage}}"
  - "{{rejection_reason}}"
  - "{{provide_feedback}}"
  - "{{keep_in_pool}}"
  - "{{tone}}"
exampleInput: |
  company_name: Anchor Analytics
  candidate_name: Preethi Sharma
  role_title: Senior Data Engineer
  stage: Final round (completed 4 interviews including technical assessment)
  rejection_reason: Strong candidate, but another candidate had more direct experience with real-time streaming systems (Kafka/Flink), which is the primary need for Signal's data infrastructure; Preethi's batch processing background is strong but doesn't match the streaming focus
  provide_feedback: Yes — feedback: her Spark knowledge is excellent; the gap is streaming/real-time systems experience, specifically Kafka or Flink at production scale; we'd consider her for a future role if we add more batch-oriented data work
  keep_in_pool: Yes — genuinely
  tone: warm and direct
exampleOutput: |
  Subject: Re: Senior Data Engineer — Anchor Analytics

  Hi Preethi,

  Thank you for going through the full interview process with us — we genuinely appreciated the quality of your thinking and your Spark work in the technical assessment was impressive.

  I'm writing with disappointing news: we've decided to move forward with another candidate for the Senior Data Engineer role. I want to be straightforward about why, because I think you deserve a real answer after investing this much time.

  The decision came down to a specific technical gap that wasn't clear until late in the process: the primary infrastructure need for Signal right now is real-time streaming — specifically, Kafka or Flink at production scale. Your batch processing background (and your Spark knowledge in particular) is genuinely strong, but this role is skewed toward streaming architecture, and the candidate we selected has extensive hands-on streaming experience that matched the immediate need more directly.

  This is a meaningful gap from the hiring committee's perspective, but it's also a closeable one. If you're looking to build streaming experience, I'd recommend targeting roles with Kafka or Flink exposure specifically — even if it means a step lateral. Companies with event-driven architectures will give you that foundation quickly.

  I mean this sincerely: we'd want to talk to you again if we add batch-oriented data work or if the role requirements shift. Our data needs will evolve significantly post-Series A. I'm adding your information to a "revisit" list that I actually maintain. If that happens, I'll reach out directly.

  Thanks again for the time and quality of engagement throughout the process, Preethi. I'm sorry this one didn't work out.

  Best,
  Maya Chen
  People & Recruiting, Anchor Analytics

  ---

  *What to avoid in rejection emails:*
  - **Waiting more than 3 business days after the decision to send the rejection.** Candidates in final rounds often have other offers they're holding; respect their time by moving quickly.
  - **"We had an extremely competitive pool."** This is meaningless to the candidate — it tells them nothing about why they weren't selected.
  - **False encouragement.** "We'd love to keep you in mind for future roles" is a promise. Only make it if you'll actually follow through — otherwise it feels like a platitude and damages trust.
  - **No feedback at all for final-round candidates.** Someone who invested 4–6 hours in your process deserves more than "we went a different direction." Specific feedback is an employer brand investment.
  - **Generic subject lines.** "Following up on your application" is confusing — the candidate may have applied to 10 companies. Use the role name.
tips:
  - "The most common complaint candidates have about rejections is the delay — not the rejection itself. Move within 48–72 hours of the decision. Candidates who hear nothing for weeks feel disrespected."
  - "Feedback is most valuable at the final-round stage. Earlier stage rejections (resume screen, phone screen) can be more general without being unkind."
  - "The 'keep in pool' language is only credible if you have a system. If you're genuinely interested in a candidate for future roles, tag them in your ATS with specific notes about why — not just 'good candidate.'"
  - "Rejection emails are employer brand touchpoints. Candidates talk to each other, leave Glassdoor reviews, and may apply again in 2 years or refer friends. The quality of your rejection email affects all of this."
  - "Personalize beyond the name and role. Referencing something specific from the process ('your approach to the distributed systems design question was impressive') signals that you actually paid attention — and makes the rejection feel less like a form letter."
complexity: beginner
modelRecommendation: claude-haiku-4-5
relatedSlugs:
  - offer-letter-draft
  - structured-interview-questions
  - interview-scorecard
  - outbound-sourcing-message
tags:
  - recruiting
  - candidate-experience
  - rejection
  - employer-brand
  - hr
---
