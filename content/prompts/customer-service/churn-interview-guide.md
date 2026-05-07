---
title: "Write a churn exit interview guide"
slug: churn-interview-guide
function: customer-service
role: cx-research
description: "Generate a structured exit interview discussion guide for customers who have cancelled or are churning, designed to surface honest root causes."
useCase: "Use this prompt before conducting exit interviews with churned customers. Exit interviews are one of the highest-value and most underused research activities — this prompt creates a guide that gets customers to tell you what actually went wrong, not just what's polite."
prompt: |
  You are a customer experience researcher specializing in churn analysis. Create a churn exit interview discussion guide.

  Context:
  - Product/service: {{product_name}}
  - Target interviewee: {{interviewee_type}} (e.g., customers who cancelled in the last 90 days, customers who churned after 3+ months, enterprise customers who downgraded)
  - Interview duration: {{duration}} minutes
  - Top hypotheses about why customers churn: {{churn_hypotheses}}
  - Anything you currently know or suspect about churn patterns: {{churn_context}}

  Create an exit interview guide with these sections:

  ## Opening Script
  How to introduce the purpose of the call without being defensive, desperate, or creating the impression that you're trying to win them back. Acknowledge they've left. Ask for honesty.

  ## Warm-Up (2–3 minutes)
  1–2 questions to start with their experience from a neutral, reflective angle — not the cancellation decision.

  ## Core Discovery Questions (bulk of interview)
  Organized into three areas:

  **Area 1: The Moment Things Changed**
  Questions that identify when and why satisfaction declined — the inflection point before the actual cancellation.

  **Area 2: The Decision to Cancel**
  Questions that surface the final triggers — what pushed them from dissatisfied to gone.

  **Area 3: Alternatives and Evaluation**
  Questions that reveal what they're doing instead and why that felt better.

  Each area: 2–3 primary questions with follow-up probes.

  ## The Honest Question
  One direct, disarming question near the end: the kind that gets the response they wouldn't put in a cancellation survey because they thought it wouldn't matter. Examples: "What would you have needed to see from us in month 3 to feel like this was going to work?" or "If you were advising our CEO on the one thing to fix, what would you say?"

  ## Closing
  2 questions: Is there anything else? Would they be open to reconnecting in 6 months?

  ## What NOT to Do
  5 behaviors or questions to avoid in this specific interview type.
variables:
  - "{{product_name}}"
  - "{{interviewee_type}}"
  - "{{duration}}"
  - "{{churn_hypotheses}}"
  - "{{churn_context}}"
exampleInput: |
  product_name: Anchor Analytics
  interviewee_type: customers who cancelled in the last 60 days after 2+ months of usage
  duration: 30
  churn_hypotheses: |
    1. Customers never achieved the activation milestone (connecting 2+ data sources)
    2. The product didn't integrate with a key tool they needed
    3. Value wasn't realized quickly enough — they lost patience before seeing ROI
  churn_context: our NPS data shows detractor scores cluster around "setup was harder than expected" and "didn't solve the problem I bought it for"
exampleOutput: |
  ## Opening Script
  "Thank you for taking the time to talk — I know you've moved on from Anchor, and I appreciate you being willing to share your experience. I want to be upfront: I'm not here to try to win you back or sell you anything. I'm here to understand what actually happened, because that's the only way we improve for the customers we still have. I'd love for you to be as honest as you're comfortable being — even if what you have to say is critical. Especially if it's critical. Does that work?"

  ## Warm-Up
  1. "Before we talk about your decision to cancel, can you take me back to why you signed up in the first place? What were you hoping Anchor would do for you?"
  2. "In the early weeks, what was your first impression?"

  ## Core Discovery Questions

  **Area 1: The Moment Things Changed**
  Primary: "Was there a specific moment — or a stretch of time — when your confidence in Anchor started to slip?"
  Probes: "What was happening on your end at that point?" / "Did you reach out for help, or did you try to work through it yourself?" / "If you had to name the single biggest frustration, what would it be?"

  Primary: "Looking back, when did you first start thinking this might not be worth continuing?"
  Probes: "What had you expected by that point that hadn't happened?" / "What, if anything, were you still hoping would change?"

  **Area 2: The Decision to Cancel**
  Primary: "When you actually decided to cancel, what tipped you over the edge?"
  Probes: "Was there a final straw — a specific event or moment?" / "How long were you thinking about cancelling before you actually did it?" / "Did you talk to anyone on our team before cancelling?"

  Primary: "If you could identify the one thing that, if it had been different, would have made you stay — what would it be?"
  Probes: "Is that a product thing, a support thing, a value thing, or something else?" / "Was it something we did wrong, or something we never did at all?"

  **Area 3: Alternatives**
  Primary: "What are you doing now instead of Anchor?"
  Probes: "What made that feel like a better fit?" / "Was it an easier decision than you expected, or harder?"

  Primary: "Is there anything about that alternative that you wish Anchor had done instead?"

  ## The Honest Question
  "If you were sitting across from our CEO and had 2 minutes to tell them the one thing they should fix — the thing that would have changed your decision — what would you say?"

  ## Closing
  1. "Is there anything we didn't cover that you think is important for us to hear?"
  2. "If we made significant changes and reached out in 6 months, would you be open to taking another look?" (Note: this is for research purposes — don't make a promise you can't keep)

  ## What NOT to Do
  1. **Don't defend the product.** If they say something critical, do not explain, justify, or correct them. Your job is to understand, not to persuade.
  2. **Don't ask leading questions.** "Would you say the onboarding was too complicated?" puts words in their mouth. Ask "What was onboarding like for you?"
  3. **Don't make the call feel like a retention attempt.** If they sense you're trying to win them back, they'll become guarded and you'll learn nothing.
  4. **Don't skip the warm-up.** Starting immediately with "why did you cancel?" creates defensiveness. The warm-up gets them talking about their goals, not their grievances.
  5. **Don't end without asking what they're doing instead.** The competitive alternative is one of your most important data points — and customers are usually willing to share it.
tips:
  - "Exit interviews with churned customers are more honest than anything you'll learn from active customers — there's nothing left to protect. Create a program to do at least 3–5 per month."
  - "Offer a small incentive (gift card, donation to charity in their name) for the interview. It signals that you value their time even after they've left."
  - "The most important thing you'll learn is usually in Area 1 — the moment things changed. The cancellation is a lagging indicator; the inflection point is where the churn actually happened."
  - "After 10 exit interviews, run the interview-synthesis prompt to identify patterns. Present these findings to product leadership quarterly."
  - "Don't share individual exit interview quotes with sales or CS without permission — these are sensitive research conversations, not product feedback for public consumption."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - customer-interview-guide
  - interview-synthesis
  - survey-question-set
  - churn-risk-email
tags:
  - churn
  - exit-interview
  - cx-research
  - qualitative
  - retention
---
