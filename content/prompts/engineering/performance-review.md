---
title: "Review code for performance issues"
slug: performance-review
function: engineering
role: code-review
description: "Analyze a function, endpoint, or system component for performance bottlenecks — identifying N+1 queries, unnecessary computation, memory leaks, and algorithmic inefficiencies with specific fixes and benchmarking guidance."
useCase: "Use this prompt when a feature is functionally correct but slow, before shipping a change that touches a hot code path, or when a load test has revealed a bottleneck you can't immediately trace."
prompt: |
  You are a performance engineer conducting a focused performance review. Analyze the code below for performance issues.

  **Language and framework:** {{language_framework}}
  **What this code does:** {{code_description}}
  **Performance concern:** {{performance_concern}} (e.g., "endpoint takes 3 seconds for users with >100 items", "background job is using 4GB RAM", "this runs 10K times per minute")
  **Code to review:**
  ```{{language}}
  {{code}}
  ```
  **Scale / load context:** {{load_context}} (e.g., dataset sizes, request rates, concurrent users)
  **Current performance metrics:** {{current_metrics}} (response time, memory usage, CPU — whatever you have)
  **Performance target:** {{performance_target}}

  Conduct a performance review using this structure:

  ## Performance Summary
  2–3 sentences: What are the most significant issues? What's the expected improvement if they're fixed? What's the risk level of each fix?

  ## Issue 1: [Name of biggest bottleneck]
  **Severity:** Critical / High / Medium / Low
  **Type:** N+1 query / O(n²) algorithm / unnecessary I/O / memory leak / cache miss / blocking operation / etc.
  **Location:** Specific line or function
  **Why it's slow:** Explanation of the performance mechanism — not just "it's slow" but *why* it scales poorly
  **Quantified impact:** If the problem scales with data size or request rate, describe the scaling behavior (e.g., "1 query per item means 500 queries for a user with 500 items")
  **Fix:**
  ```{{language}}
  [Fixed code]
  ```
  **Expected improvement:** Estimated improvement after fix (order of magnitude)

  [Repeat for each issue found]

  ## Algorithmic Complexity Analysis
  For any loops, nested iterations, or recursive functions:
  - Current time complexity (Big O)
  - Current space complexity
  - Optimal complexity for this problem
  - Whether a complexity improvement is achievable and worth the code complexity trade-off

  ## Memory Analysis
  - Are there any memory leaks (objects accumulated without being released)?
  - Any large allocations in hot paths?
  - Any opportunities to stream or process incrementally instead of loading all at once?

  ## Caching Opportunities
  - What data is being recomputed or re-fetched that could be cached?
  - Appropriate cache strategy (in-process, Redis, CDN) and TTL recommendation
  - Cache invalidation approach

  ## Database / I/O Analysis
  - N+1 queries
  - Missing indexes (based on query patterns)
  - Unnecessary round trips (can any queries be batched or combined?)
  - Synchronous I/O blocking async execution

  ## Benchmarking Plan
  How to measure the performance before and after:
  - Specific benchmark to run
  - What to measure (latency, throughput, memory)
  - How to isolate the fix from other variables
variables:
  - "{{language_framework}}"
  - "{{code_description}}"
  - "{{performance_concern}}"
  - "{{language}}"
  - "{{code}}"
  - "{{load_context}}"
  - "{{current_metrics}}"
  - "{{performance_target}}"
exampleInput: |
  language_framework: Python / Django 4.2 + PostgreSQL
  code_description: An API endpoint that returns a dashboard for a user — their profile, recent activity, and team members with their activity counts
  performance_concern: The dashboard endpoint takes 4–8 seconds for users on teams with more than 50 members
  language: python
  code: |
    def get_dashboard(request):
        user = request.user
        profile = UserProfile.objects.get(user=user)
        team = Team.objects.get(id=profile.team_id)
        members = TeamMember.objects.filter(team=team)

        member_data = []
        for member in members:
            activity_count = Activity.objects.filter(
                user=member.user,
                created_at__gte=timezone.now() - timedelta(days=30)
            ).count()
            last_activity = Activity.objects.filter(
                user=member.user
            ).order_by('-created_at').first()
            member_data.append({
                'name': member.user.get_full_name(),
                'email': member.user.email,
                'activity_count': activity_count,
                'last_active': last_activity.created_at if last_activity else None,
            })

        recent_activities = Activity.objects.filter(
            user=user
        ).order_by('-created_at')[:10]

        activity_list = []
        for activity in recent_activities:
            activity_list.append({
                'type': activity.activity_type,
                'created_at': activity.created_at,
                'detail': activity.detail,
                'team_name': Team.objects.get(id=activity.team_id).name,
            })

        return JsonResponse({
            'profile': {'name': user.get_full_name(), 'email': user.email},
            'team': {'name': team.name, 'member_count': len(members)},
            'members': member_data,
            'recent_activity': activity_list,
        })
  load_context: Teams of 50–200 members. ~500 dashboard loads per minute during business hours. Activities table has ~10M rows.
  current_metrics: "P50: 2.1s, P95: 6.8s, P99: 12s. Most time in database."
  performance_target: "P95 under 500ms"
exampleOutput: |
  ## Performance Summary

  This endpoint has two severe N+1 query patterns that produce 2–4 database queries per team member (50–200 members = 100–800 queries per request). Fixing these alone should bring P95 from 6.8s to under 200ms. A secondary N+1 in the activity loop adds 10 more queries per request. All three issues are straightforward to fix with Django's `annotate()` and `select_related()`.

  ## Issue 1: N+1 Queries in Member Loop (2 queries per member)

  **Severity:** Critical
  **Type:** N+1 query pattern
  **Location:** The `for member in members` loop — two `Activity.objects.filter()` calls per member
  **Why it's slow:** For a 100-member team, this loop executes 200 database queries (1 COUNT + 1 ORDER BY per member), plus the initial `TeamMember.objects.filter()`. Each query has network latency + PostgreSQL execution time. Since Python awaits each query sequentially, latency compounds.
  **Quantified impact:** 100 members × 2 queries = 200 queries. At 5ms average query time = 1 full second just for this loop. At 200 members = 2 seconds.

  **Fix — replace the loop with a single aggregated query:**
  ```python
  from django.db.models import Count, Max
  from django.utils import timezone
  from datetime import timedelta

  thirty_days_ago = timezone.now() - timedelta(days=30)

  members = TeamMember.objects.filter(team=team).select_related('user').annotate(
      activity_count=Count(
          'user__activity',
          filter=Q(user__activity__created_at__gte=thirty_days_ago)
      ),
      last_active=Max('user__activity__created_at'),
  )

  member_data = [
      {
          'name': member.user.get_full_name(),
          'email': member.user.email,
          'activity_count': member.activity_count,
          'last_active': member.last_active,
      }
      for member in members
  ]
  ```

  **Expected improvement:** 200 queries → 1 query. ~1–2 second reduction for 100-member teams.

  ## Issue 2: N+1 Queries in Activity Loop (1 query per activity)

  **Severity:** High
  **Type:** N+1 query pattern
  **Location:** `Team.objects.get(id=activity.team_id)` inside the activity loop
  **Why it's slow:** For each of the 10 recent activities, a separate query fetches the team name. Since activities often belong to the same team, the same team is fetched multiple times.
  **Quantified impact:** 10 queries per request for recent activities. Minor compared to the member loop, but trivial to fix.

  **Fix:**
  ```python
  recent_activities = Activity.objects.filter(
      user=user
  ).select_related('team').order_by('-created_at')[:10]

  activity_list = [
      {
          'type': activity.activity_type,
          'created_at': activity.created_at,
          'detail': activity.detail,
          'team_name': activity.team.name,  # now a join, not a query
      }
      for activity in recent_activities
  ]
  ```

  **Expected improvement:** 10 queries → 0 additional queries (covered by JOIN).

  ## Issue 3: `UserProfile` and `Team` Fetched Separately

  **Severity:** Medium
  **Type:** Unnecessary sequential queries
  **Location:** First 3 lines of the view
  **Fix:**
  ```python
  profile = UserProfile.objects.select_related('team').get(user=request.user)
  team = profile.team  # already fetched — no additional query
  ```

  ## Algorithmic Complexity Analysis

  | Section | Current | After Fix |
  |---|---|---|
  | Member data assembly | O(n) queries, O(n) Python | O(1) queries, O(n) Python |
  | Activity loop | O(k) queries | O(1) queries |
  | len(members) | O(n) Python evaluation of QuerySet | O(1) — use `.count()` or annotate |

  The Python-side loops (list comprehensions) are O(n) and fine — the bottleneck is I/O, not computation.

  ## Memory Analysis

  `TeamMember.objects.filter(team=team)` fetches all members into memory. For a 200-member team this is manageable (~200 Python objects). No memory leak detected. After adding `annotate()`, the same objects carry the aggregated values — still fine.

  ## Caching Opportunities

  - **Team member list:** Cache `member_data` in Redis with key `dashboard:team:{team_id}:members` for 5 minutes. Member lists don't change frequently — this eliminates the members query entirely for most requests.
  - **Team metadata:** Cache `team.name` and `team.member_count` with a longer TTL (1 hour).
  - **Do not cache `recent_activity`** — this is user-specific and needs to be fresh.

  ## Database / I/O Analysis

  **Check these indexes exist:**
  ```sql
  -- Required for the annotate() query
  CREATE INDEX IF NOT EXISTS idx_activity_user_created
    ON activity (user_id, created_at DESC);

  -- Required for recent_activity query
  CREATE INDEX IF NOT EXISTS idx_activity_user_created_at
    ON activity (user_id, created_at DESC);
  ```

  Run `EXPLAIN ANALYZE` on the annotated query to confirm it's using these indexes.

  ## Benchmarking Plan

  1. **Baseline:** Use `django-silk` or `django-debug-toolbar` to count queries per request before and after. Target: under 5 queries total (was 200+).
  2. **Load test:** Use `locust` or `k6` with 50 concurrent users, 500 RPS, measuring P50/P95/P99. Compare before and after.
  3. **Database profiling:** Enable `log_min_duration_statement = 100` in PostgreSQL to capture all queries >100ms. Should see none after the fix.
tips:
  - "The most common performance problem in ORM-heavy backends is N+1 queries. Before looking anywhere else, count the queries your endpoint makes using a query logging tool."
  - "Performance fixes should be measured, not assumed. Define a benchmark before the fix and run it after — 'it feels faster' is not a performance review outcome."
  - "For database-heavy code, always specify the scale — a fix that eliminates 10 queries is trivial at 10K rows but transformative at 10M rows."
  - "Caching is often the right answer for read-heavy dashboards, but always define the invalidation strategy before adding the cache — stale data is a correctness bug."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - sql-query-optimize
  - refactor-function
  - pr-review-checklist
  - system-design-review
tags:
  - performance
  - code-review
  - database
  - optimization
  - engineering
---
