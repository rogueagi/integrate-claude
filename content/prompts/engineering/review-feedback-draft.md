---
title: "Draft code review feedback that is clear and constructive"
slug: review-feedback-draft
function: engineering
role: code-review
description: "Transform raw code review observations into polished, professional feedback — clearly communicating the issue, the reasoning, and the suggested fix without being discouraging or vague."
useCase: "Use this prompt when you've identified issues in a PR but are struggling to phrase feedback that is clear without being harsh, or specific without being nitpicky. Especially useful for feedback to junior engineers or teammates you have a tricky dynamic with."
prompt: |
  You are a senior engineer known for giving feedback that is direct, respectful, and genuinely helpful. Help me write code review feedback for the situation below.

  **Context:** {{context}} (who is the author, what's the relationship, what's the PR about)
  **The issue I identified:** {{raw_issue}} (what's wrong — in rough notes form is fine)
  **Severity in my view:** {{severity}} (blocking / should-fix / nitpick / question)
  **My goal with this feedback:** {{feedback_goal}} (e.g., "get them to fix this before merge", "teach the pattern so they recognize it next time", "raise a question without being prescriptive", "document my concern without blocking the PR")
  **Tone needed:** {{tone}} (e.g., "this is a junior engineer — be encouraging", "senior peer — be direct and brief", "contentious PR — be diplomatic")
  **Draft or notes I have (if any):** {{my_draft}}

  Write 1–3 polished versions of the feedback comment. Each version should:
  - State what the issue is clearly (not just that something is wrong)
  - Explain *why* it matters (security risk, performance impact, maintainability concern, etc.)
  - Suggest a specific fix or direction
  - Match the requested tone
  - Be appropriately concise — longer is not better for code review comments

  After the versions, add:
  - **Which version I'd recommend and why**
  - **One thing to avoid** — a phrasing or approach that would undermine the feedback

  Finally, if the feedback would benefit from an inline code suggestion, provide a `suggestion` block:
  ```suggestion
  [replacement code for the line(s) being commented on]
  ```
variables:
  - "{{context}}"
  - "{{raw_issue}}"
  - "{{severity}}"
  - "{{feedback_goal}}"
  - "{{tone}}"
  - "{{my_draft}}"
exampleInput: |
  context: Junior engineer (6 months on the team), PR adding a search feature to our admin dashboard. Good PR overall, one real issue.
  raw_issue: |
    They're building the SQL query by string concatenation with user input:
    query = "SELECT * FROM users WHERE name LIKE '%" + search_term + "%'"
    This is a textbook SQL injection vulnerability. Needs parameterized queries.
  severity: blocking
  feedback_goal: Get them to fix the SQL injection AND understand why — so they recognize the pattern in future PRs, not just this one
  tone: This is a junior engineer — be encouraging but clear that this must be fixed. Don't be vague about the severity.
  my_draft: "hey this is a sql injection issue, you need to use parameterized queries not string concat"
exampleOutput: |
  ## Version 1 — Educational and encouraging

  > Nice work on this feature overall — the search UX looks clean. One thing to address before this merges: the query on line 47 is vulnerable to SQL injection.
  >
  > When user input is concatenated directly into a SQL string (`"... WHERE name LIKE '%" + search_term + "%'"`), an attacker can submit a specially crafted search term to break out of the string and run arbitrary SQL — including reading all users, deleting rows, or bypassing auth checks. This is one of the most common (and consequential) web security vulnerabilities.
  >
  > The fix is parameterized queries, which pass user input to the database as data rather than SQL:
  >
  > ```python
  > cursor.execute("SELECT * FROM users WHERE name LIKE %s", (f"%{search_term}%",))
  > ```
  >
  > If you're using Django's ORM, the equivalent is:
  > ```python
  > User.objects.filter(name__icontains=search_term)
  > ```
  > The ORM handles parameterization automatically.
  >
  > This is a blocking issue for the PR, but it's a one-line fix. Happy to talk through it if helpful.

  ---

  ## Version 2 — More concise, still educational

  > Blocking issue on line 47: SQL injection vulnerability.
  >
  > `"... WHERE name LIKE '%" + search_term + "%'"` — when user input is concatenated into SQL, an attacker controls part of the query. Search for `'; DROP TABLE users; --` to see what I mean.
  >
  > Use parameterized queries:

  ```suggestion
  cursor.execute("SELECT * FROM users WHERE name LIKE %s", (f"%{search_term}%",))
  ```

  > Or use the ORM: `User.objects.filter(name__icontains=search_term)` — it parameterizes automatically.
  >
  > Great pattern to lock in now — it applies to every SQL query that touches user input.

  ---

  ## Version 3 — Brief with link to learn more

  > Blocking: This is a SQL injection vulnerability (line 47). Concatenating user input into SQL strings allows attackers to manipulate the query.
  >
  > Fix: use parameterized queries or the Django ORM's `filter()` — both handle this safely. [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) is a good reference for the why.

  ---

  ## Recommendation

  **Version 1** for a junior engineer in a learning context. It explains *why* this matters (not just that it's wrong), gives two concrete fixes, and maintains an encouraging tone while being unambiguous that this blocks the PR. The extra words are worth it — you're investing in their pattern recognition.

  **Version 2** if you want the suggestion block (great for GitHub's inline suggestion feature) and a slightly more direct tone.

  ## One thing to avoid

  Don't write: *"This is a really bad security issue that should have been caught before submitting."* — it assigns blame without teaching anything and will make the engineer defensive. Focus on the pattern, not the mistake.
tips:
  - "The most useful code review comment has three parts: what the issue is, why it matters, and what to do instead. Your draft should cover all three."
  - "Tone matters more than content for whether feedback is actually acted on. 'This is wrong' and 'Here's a pattern worth knowing' deliver the same information with very different outcomes."
  - "Use GitHub's suggestion blocks for one-line fixes — the author can apply it with one click, which reduces friction and increases the chance the fix lands correctly."
  - "For nitpicks or style issues, preface them: 'Nit:' or 'Optional:' — this tells the author it's not blocking and respects their time. Reserve the unqualified blocking comments for things that actually matter."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - pr-review-checklist
  - security-review
  - performance-review
  - refactor-function
tags:
  - code-review
  - communication
  - feedback
  - engineering
  - mentorship
---
