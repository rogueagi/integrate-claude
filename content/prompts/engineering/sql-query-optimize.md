---
title: "Optimize a slow SQL query"
slug: sql-query-optimize
function: engineering
role: coding
description: "Analyze a slow SQL query, identify the root cause of performance issues, and produce an optimized version with indexing recommendations and a performance comparison."
useCase: "Use this prompt when a query is too slow for production, when you're adding a feature that needs to be database-efficient, or when you're reviewing a colleague's PR that includes database queries. Works best when you include the query plan and table schema."
prompt: |
  You are a database performance expert. Analyze and optimize the SQL query below.

  **Database system:** {{database}} (e.g., PostgreSQL 15, MySQL 8, SQLite, BigQuery)
  **Table schemas (include column types):**
  ```sql
  {{table_schemas}}
  ```
  **The slow query:**
  ```sql
  {{slow_query}}
  ```
  **Query plan output (EXPLAIN / EXPLAIN ANALYZE):** {{query_plan}}
  **Approximate row counts:** {{row_counts}} (e.g., "users: 2M rows, orders: 15M rows")
  **Query frequency:** {{query_frequency}} (e.g., "runs on every page load for logged-in users, ~500/sec peak")
  **Current performance:** {{current_performance}} (e.g., "average 4.2 seconds, P99 12 seconds")
  **Target performance:** {{target_performance}} (e.g., "under 100ms", "fast enough for a real-time search box")

  Provide:

  ## 1. Performance Diagnosis
  - What is making this query slow? (full table scan, missing index, N+1, bad join order, etc.)
  - Identify the specific bottleneck in the query plan
  - Explain *why* the database is executing it this way

  ## 2. Optimized Query
  ```sql
  -- Optimized version with inline comments explaining each change
  [optimized query]
  ```

  ## 3. Required Index Changes
  For each index to add or remove:
  ```sql
  -- What this index does and why it's needed
  CREATE INDEX ...
  ```
  - Estimated write-overhead impact of new indexes
  - Any existing indexes that are now redundant and can be dropped

  ## 4. Change-by-Change Explanation
  For every meaningful change to the query or schema:
  - What changed
  - Why it's faster
  - Any trade-offs (e.g., index write cost, less readable query)

  ## 5. Expected Performance Impact
  - Estimated improvement (order of magnitude, not a precise number)
  - What workload conditions make this improvement most significant
  - What conditions could reduce the benefit

  ## 6. How to Verify the Improvement
  - The EXPLAIN/EXPLAIN ANALYZE command to run
  - What to look for in the new query plan (seq scan → index scan, rows estimate accuracy, etc.)
  - How to benchmark in production safely

  ## 7. Further Optimizations (If Still Not Fast Enough)
  If the query-level optimizations aren't enough, what architectural changes would help?
  - Caching strategy (Redis, materialized views, etc.)
  - Data model changes
  - Application-level changes (pagination, lazy loading, denormalization)
variables:
  - "{{database}}"
  - "{{table_schemas}}"
  - "{{slow_query}}"
  - "{{query_plan}}"
  - "{{row_counts}}"
  - "{{query_frequency}}"
  - "{{current_performance}}"
  - "{{target_performance}}"
exampleInput: |
  database: PostgreSQL 15
  table_schemas: |
    CREATE TABLE users (
      id BIGSERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255),
      plan VARCHAR(50) DEFAULT 'free',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      deleted_at TIMESTAMPTZ
    );

    CREATE TABLE events (
      id BIGSERIAL PRIMARY KEY,
      user_id BIGINT REFERENCES users(id),
      event_type VARCHAR(100) NOT NULL,
      properties JSONB,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    -- Existing indexes: users(email), events(user_id)
  slow_query: |
    SELECT
      u.id,
      u.email,
      u.name,
      COUNT(e.id) AS event_count,
      MAX(e.created_at) AS last_event_at
    FROM users u
    LEFT JOIN events e ON e.user_id = u.id
    WHERE u.plan = 'pro'
      AND u.deleted_at IS NULL
      AND e.event_type = 'page_view'
      AND e.created_at > NOW() - INTERVAL '30 days'
    GROUP BY u.id, u.email, u.name
    ORDER BY last_event_at DESC NULLS LAST
    LIMIT 100;
  query_plan: |
    Hash Left Join (cost=189234.55..412876.32 rows=847 width=72) (actual time=3821.442..4102.887 rows=100 loops=1)
      Hash Cond: (e.user_id = u.id)
      -> Seq Scan on events e (cost=0.00..198234.12 rows=1247832 width=24) (actual time=0.021..1876.543 rows=1284912 loops=1)
            Filter: ((event_type = 'page_view') AND (created_at > (now() - '30 days'::interval)))
            Rows Removed by Filter: 13715088
      -> Hash (cost=10234.55..10234.55 rows=12345 width=48) (actual time=234.123..234.123 rows=12456 loops=1)
            -> Seq Scan on users u (cost=0.00..10234.55 rows=12345 width=48)
                  Filter: ((plan = 'pro') AND (deleted_at IS NULL))
                  Rows Removed by Filter: 187544
  row_counts: "users: 200K rows, events: 15M rows"
  query_frequency: "Powers a dashboard widget, runs once per dashboard load per account manager, ~50/min during business hours"
  current_performance: "Average 4.1 seconds, P99 over 8 seconds"
  target_performance: "Under 500ms average"
exampleOutput: |
  ## 1. Performance Diagnosis

  **Root cause: Two sequential scans on large tables — the query reads every row in both tables.**

  From the query plan:
  - `Seq Scan on events`: Reading all 15M event rows, keeping only 1.28M (91% discarded). This is the primary bottleneck — over 3.8 seconds just for this scan.
  - `Seq Scan on users`: Reading all 200K users, keeping only ~12K (94% discarded). A secondary problem.

  **Why the database chooses sequential scans:** PostgreSQL uses sequential scans when there's no index that covers the filter columns. `events` has an index on `user_id`, but the filter is on `event_type` and `created_at` — neither is indexed. Similarly, `users` has no index on `plan` or `deleted_at`.

  **Additional issue:** The LEFT JOIN is semantically wrong. Because `e.event_type = 'page_view'` is in the WHERE clause (not the JOIN ON clause), it implicitly converts the LEFT JOIN to an INNER JOIN — users with no matching events are excluded. This is a logic bug AND it makes query planning harder.

  ## 2. Optimized Query

  ```sql
  SELECT
    u.id,
    u.email,
    u.name,
    COUNT(e.id) AS event_count,
    MAX(e.created_at) AS last_event_at
  FROM users u
  -- Moved event filters into JOIN condition so LEFT JOIN semantics are correct
  -- and the planner can use nested loop with index if selectivity is high
  LEFT JOIN events e
    ON e.user_id = u.id
    AND e.event_type = 'page_view'
    AND e.created_at > NOW() - INTERVAL '30 days'
  WHERE u.plan = 'pro'
    AND u.deleted_at IS NULL
  GROUP BY u.id, u.email, u.name
  ORDER BY last_event_at DESC NULLS LAST
  LIMIT 100;
  ```

  ## 3. Required Index Changes

  ```sql
  -- Covers the events filter: event_type + created_at, with user_id for the join
  -- PostgreSQL will use this for: WHERE event_type = 'page_view' AND created_at > ...
  -- user_id included so the index covers the join without a table heap lookup
  CREATE INDEX idx_events_type_created_user
    ON events (event_type, created_at DESC, user_id)
    WHERE created_at > NOW() - INTERVAL '90 days';  -- partial index: only recent events

  -- Covers the users filter: plan + deleted_at
  CREATE INDEX idx_users_plan_active
    ON users (plan)
    WHERE deleted_at IS NULL;  -- partial index: only non-deleted users
  ```

  **Write overhead:** Both indexes add ~5–15ms to INSERT/UPDATE on their respective tables. At typical event ingestion rates, this is negligible. The partial index on events covers only ~3M rows (30-day window out of 15M total) — it stays small and fast to update.

  **Existing indexes:** `events(user_id)` is now superseded by the composite index for this query pattern. Keep it if other queries use it; otherwise it's safe to drop.

  ## 4. Change-by-Change Explanation

  **Composite index on events (event_type, created_at, user_id):** Instead of scanning 15M rows and filtering, PostgreSQL can seek directly to `event_type = 'page_view'` entries within the 30-day window — roughly 1.3M rows of 15M. The partial index (`WHERE created_at > NOW() - '90 days'`) keeps the index small and avoids indexing historical data nobody queries.

  **Partial index on users (plan WHERE deleted_at IS NULL):** Reduces the users scan from 200K rows to ~12K active pro users. Partial indexes are more selective and smaller than full indexes on low-cardinality columns.

  **Moved event filters to JOIN ON clause:** Fixes the logic bug (restores true LEFT JOIN behavior) and gives the planner flexibility to choose a nested loop join — look up each pro user's events via index — instead of a hash join on the full events table.

  ## 5. Expected Performance Impact

  - **Estimated improvement:** 10–30x — from ~4s to ~100–400ms
  - **Best case:** When there are few pro users (high selectivity on users) and the planner chooses a nested loop index scan on events per user
  - **Worst case:** If the 30-day page_view event volume is very high per user, the events index still reads many rows per user, but still far fewer than a full table scan
  - **The LIMIT 100 helps:** PostgreSQL can stop early once 100 rows are produced if the ORDER BY aligns with index ordering

  ## 6. How to Verify the Improvement

  ```sql
  -- Run with ANALYZE to get actual timing (note: runs the query for real)
  EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
  SELECT u.id, u.email, u.name, ...  -- your optimized query
  ;
  ```

  Look for:
  - `Index Scan` or `Index Only Scan` on events (not `Seq Scan`)
  - `Bitmap Index Scan` on users using the partial index
  - Actual rows much closer to estimated rows (bad estimates cause bad plans)
  - `Buffers: shared hit=` — lower buffer reads means less I/O

  **Safe production benchmark:** Run the query with `EXPLAIN ANALYZE` during low-traffic hours first. The partial index can be built `CONCURRENTLY` to avoid locking:
  ```sql
  CREATE INDEX CONCURRENTLY idx_events_type_created_user ON events ...;
  ```

  ## 7. Further Optimizations (If Still Not Fast Enough)

  - **Materialized view:** Pre-aggregate `event_count` and `last_event_at` per user nightly. The dashboard query becomes a simple lookup on a 12K-row view instead of aggregating 1.3M events.
  - **Pagination with keyset:** Replace `OFFSET/LIMIT` with `WHERE last_event_at < :cursor` to avoid the full sort on each page.
  - **Caching:** Cache the dashboard result in Redis with a 5-minute TTL — account managers don't need real-time data for this widget.
tips:
  - "Always include the EXPLAIN output — query optimization without the query plan is guesswork. PostgreSQL: EXPLAIN ANALYZE; MySQL: EXPLAIN FORMAT=JSON."
  - "Include approximate row counts. An index that's perfect for 10K rows might be wrong for 100M rows — size changes the math."
  - "Specify the database version — query planner behavior and available index types differ significantly between versions."
  - "If you're hitting the limit of single-query optimization, describe the feature it powers — sometimes the right fix is a data model change, not a faster query."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - data-model-review
  - performance-review
  - refactor-function
  - debug-error-message
tags:
  - sql
  - database
  - performance
  - optimization
  - engineering
---
