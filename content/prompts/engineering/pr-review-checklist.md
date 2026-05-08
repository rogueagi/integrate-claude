---
title: "Review a pull request with structured feedback"
slug: pr-review-checklist
function: engineering
role: code-review
description: "Conduct a thorough pull request review covering correctness, security, performance, test coverage, and code quality — with prioritized, actionable feedback for each finding."
useCase: "Use this prompt when reviewing a PR that's larger than you can hold in your head at once, when you want a second opinion on a review you've already done, or when you want to ensure you're not missing important review dimensions beyond just correctness."
prompt: |
  You are a senior software engineer conducting a thorough code review. Review the pull request described below and provide structured, actionable feedback.

  **PR title:** {{pr_title}}
  **PR description:** {{pr_description}}
  **Language and framework:** {{language_framework}}
  **Size:** {{pr_size}} (approximate lines changed, files affected)
  **Type of change:** {{change_type}} (e.g., new feature, bug fix, refactoring, performance improvement, security fix)
  **Code diff or key files:**
  ```{{language}}
  {{code_diff}}
  ```
  **Context:** {{context}} (what this code does in the larger system, any architectural constraints)
  **Testing provided:** {{testing}} (what tests were added or modified)

  Conduct a complete PR review using this structure:

  ## Review Summary
  2–3 sentence overall assessment: Is this PR ready to merge? What's the most important thing that needs to change before it can be? What's the strongest aspect of this PR?

  **Overall verdict:** Approve / Request Changes / Needs Discussion

  ## Must-Fix Issues (Blocking)
  Issues that must be resolved before merge. For each:
  - **Issue:** What the problem is
  - **Severity:** Why it's blocking (correctness, security, data loss risk, etc.)
  - **Location:** File and line reference
  - **Suggested fix:** Concrete code or approach
  - **Example:** If applicable, show the fix

  ## Should-Fix Issues (Non-Blocking but Important)
  Significant improvements that should be addressed but aren't strictly blocking. Same format as above.

  ## Suggestions (Optional Improvements)
  Style, readability, or performance improvements that would be nice but are truly optional. Keep these brief — don't pile on optional feedback.

  ## Security Review
  Explicitly assess the security implications:
  - Input validation and sanitization
  - Authentication and authorization checks
  - SQL injection, XSS, CSRF, path traversal risks
  - Secrets or credentials exposure
  - Any new attack surface introduced

  ## Test Coverage Assessment
  - Are the tests adequate for the complexity and risk of the change?
  - What scenarios are covered vs. not covered?
  - Are there edge cases that should have tests but don't?
  - Are any existing tests broken by this change?

  ## Performance Considerations
  - Any new N+1 queries, missing indexes, or expensive operations in hot paths?
  - Memory allocation concerns?
  - Any changes to time complexity?

  ## Positive Feedback
  At least 2–3 specific things done well. Good code review includes recognizing good work — this isn't just a formality.
variables:
  - "{{pr_title}}"
  - "{{pr_description}}"
  - "{{language_framework}}"
  - "{{pr_size}}"
  - "{{change_type}}"
  - "{{code_diff}}"
  - "{{context}}"
  - "{{testing}}"
exampleInput: |
  pr_title: "Add password reset functionality"
  pr_description: |
    Implements the password reset flow: user enters email, receives a reset link, clicks it, and sets a new password.
    Resolves #342.
  language_framework: Python / Django 4.2
  pr_size: ~280 lines added, 5 files
  change_type: new feature
  code_diff: |
    # views.py
    def request_password_reset(request):
        if request.method == 'POST':
            email = request.POST.get('email')
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                pass  # silently ignore unknown emails
            token = str(uuid.uuid4())
            reset_tokens[user.id] = {'token': token, 'created_at': datetime.now()}
            send_mail(
                'Password Reset',
                f'Click here: https://app.example.com/reset?token={token}&user_id={user.id}',
                'noreply@example.com',
                [email],
            )
            return redirect('/login?message=check_email')

    def reset_password(request):
        if request.method == 'POST':
            user_id = request.POST.get('user_id')
            token = request.POST.get('token')
            new_password = request.POST.get('password')
            stored = reset_tokens.get(int(user_id))
            if stored and stored['token'] == token:
                user = User.objects.get(id=user_id)
                user.password = new_password  # set the password
                user.save()
                del reset_tokens[int(user_id)]
                return redirect('/login?message=password_reset')
            return HttpResponse('Invalid token', status=400)

    # In-memory token store
    reset_tokens = {}
  context: This is a new Django app, small team, single server for now. This is the first authentication-related feature added since the initial user table was created.
  testing: No tests added yet — "will add in a follow-up PR"
exampleOutput: |
  ## Review Summary

  This PR has several critical security vulnerabilities that must be fixed before merge: passwords are stored in plaintext, tokens are kept in-memory (lost on restart), and the reset endpoint is vulnerable to user enumeration and mass-assignment attacks. The approach shows good intent (silently ignoring unknown emails is actually correct behavior from a security perspective) but the implementation needs significant work before it's safe to ship.

  **Overall verdict: Request Changes**

  ## Must-Fix Issues (Blocking)

  **1. Plaintext password storage**
  - **Issue:** `user.password = new_password` stores the password as-is. Django's `User` model requires using `set_password()` which hashes the password with the configured hasher.
  - **Severity:** Critical — all reset passwords will be stored as plaintext, readable by anyone with database access. This is a data breach waiting to happen.
  - **Location:** `views.py`, reset_password function
  - **Fix:**
    ```python
    user.set_password(new_password)  # NOT user.password = new_password
    user.save()
    ```

  **2. In-memory token store — tokens lost on restart**
  - **Issue:** `reset_tokens = {}` is a module-level dict. It's wiped every time the server restarts, and doesn't work with multiple processes or workers.
  - **Severity:** Critical — functionally broken in any production setup with gunicorn/uwsgi multi-worker, and unreliable on single-process servers.
  - **Fix:** Store tokens in the database with an expiry. Django has a built-in `PasswordResetTokenGenerator` that doesn't require storing tokens at all — it's HMAC-based.

  **3. No token expiry**
  - **Issue:** `reset_tokens[user.id] = {'token': token, 'created_at': datetime.now()}` stores `created_at` but never checks it. Tokens are valid forever.
  - **Severity:** High — a stolen reset link works indefinitely.
  - **Fix:** Check `created_at` and reject tokens older than 1 hour (or use Django's built-in token generator which has expiry baked in).

  **4. No CSRF protection on the reset form**
  - **Issue:** Django's `@csrf_protect` decorator (or the CSRF middleware) must be explicitly verified on POST forms. It's not shown here.
  - **Severity:** High — without CSRF protection, attackers can trick users into resetting their own passwords via a malicious site.
  - **Fix:** Ensure `{% csrf_token %}` is in the template and the view either uses the CSRF middleware or `@csrf_protect`. If using function-based views with `require_POST`, CSRF is enforced by default if middleware is active.

  **5. No password validation**
  - **Issue:** `new_password` is accepted without any validation — length, complexity, or Django's own `validate_password()`.
  - **Severity:** High — allows empty string passwords and bypasses the site's password policy.
  - **Fix:**
    ```python
    from django.contrib.auth.password_validation import validate_password
    from django.core.exceptions import ValidationError
    try:
        validate_password(new_password, user)
    except ValidationError as e:
        return render(request, 'reset_password.html', {'errors': e.messages})
    ```

  ## Should-Fix Issues (Non-Blocking but Important)

  **1. Use Django's built-in password reset**
  Django includes `PasswordResetView`, `PasswordResetConfirmView`, and `PasswordResetTokenGenerator` that handle all of these security concerns correctly. Unless there's a strong reason to implement from scratch, use the built-in views. This PR could be reduced to URL configuration, template customization, and email template changes.

  **2. Race condition in token lookup**
  `reset_tokens.get(int(user_id))` — if `user_id` is not a valid integer, `int()` raises `ValueError`. Wrap in a try/except.

  ## Suggestions (Optional)

  - Consider `User.objects.filter(email=email).first()` instead of `get()` + exception — cleaner for the silent-ignore pattern.
  - Log reset attempts (without the token) for security audit purposes.

  ## Security Review

  **Critical issues found (see above):** plaintext passwords, no token expiry, no CSRF protection.

  **User enumeration:** The silent-ignore on unknown emails in `request_password_reset` is correct — good call. Don't change this.

  **Token in URL:** Putting the token and `user_id` in a GET parameter means it may appear in server logs and referrer headers. Django's built-in approach puts the user identifier in the URL path and uses HMAC — consider adopting that pattern.

  **No brute-force protection:** Nothing prevents an attacker from trying many tokens for a given user_id. Add rate limiting on the reset endpoint (Django's `ratelimit` library or similar).

  ## Test Coverage Assessment

  No tests were added. "Will add in a follow-up PR" is not acceptable for security-critical flows — this PR should not merge without tests covering:
  - Successful password reset end-to-end
  - Invalid token is rejected
  - Expired token is rejected
  - Unknown email is silently ignored (non-disclosure)
  - Password validation failures are returned to the user
  - Reuse of a token after a successful reset is rejected

  ## Performance Considerations

  No significant performance concerns at this scale. The `User.objects.get(id=user_id)` in `reset_password` does a primary key lookup — fine.

  ## Positive Feedback

  - Correctly silences the response for unknown email addresses — this prevents user enumeration and is a subtle but important security detail that many implementations get wrong.
  - The `try/except User.DoesNotExist: pass` pattern correctly handles the case without leaking whether an account exists.
  - The redirect-after-POST pattern is correctly used to prevent form resubmission on refresh.
tips:
  - "Prioritize your review feedback clearly — a wall of 20 undifferentiated comments makes it hard for the author to know what to fix first. Use must-fix / should-fix / optional tiers."
  - "Always assess security explicitly — it's easy to focus on code style and miss an injection vulnerability or missing auth check."
  - "Include positive feedback. 'What you did well' is not padding — it tells the author what patterns to repeat and makes the review feel collaborative instead of adversarial."
  - "If you're reviewing security-critical code (auth, payments, permissions), slow down and trace every input from entry point to storage."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - security-review
  - write-unit-tests
  - review-feedback-draft
  - refactor-function
tags:
  - code-review
  - pull-request
  - engineering
  - security
  - quality
---
