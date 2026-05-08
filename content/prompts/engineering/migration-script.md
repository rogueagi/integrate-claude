---
title: "Write a safe database migration script"
slug: migration-script
function: engineering
role: coding
description: "Generate a database migration script with rollback, safety checks, batching for large tables, and a step-by-step execution plan that minimizes downtime and risk."
useCase: "Use this prompt when you need to alter a production database — adding columns, changing types, renaming tables, or backfilling data. Migrations that run fine in staging can lock tables and cause outages in production. This prompt helps you avoid that."
prompt: |
  You are a database engineer with expertise in zero-downtime migrations. Write a migration script for the change described below.

  **Database system:** {{database}} (e.g., PostgreSQL 15, MySQL 8, SQLite)
  **Migration framework (if any):** {{framework}} (e.g., Alembic, Flyway, Django migrations, raw SQL)
  **Current schema (relevant tables):**
  ```sql
  {{current_schema}}
  ```
  **What needs to change:** {{change_description}}
  **Reason for change:** {{reason}}
  **Table size and traffic:** {{table_info}} (approximate row count, writes per second, read traffic pattern)
  **Downtime tolerance:** {{downtime_tolerance}} (e.g., "no downtime allowed", "up to 5 minutes during maintenance window", "this is a dev-only database")
  **Rollback requirement:** {{rollback_requirement}} (e.g., "must be reversible within 1 hour of deploy", "rollback not needed — one-way data migration")

  Produce a complete migration package:

  ## 1. Risk Assessment

  Before writing any code:
  - What is the risk level of this migration? (low / medium / high)
  - What could go wrong?
  - Does this migration acquire table locks? If so, for how long?
  - What is the blast radius if it fails mid-way?

  ## 2. Migration Strategy

  Recommend a migration strategy (explain the choice):
  - **Expand-contract** (add column → backfill → deploy app → remove old column)
  - **Batched DML** (UPDATE in chunks to avoid long-running transactions)
  - **CONCURRENTLY** operations (for index creation without locking)
  - **Maintenance window** with brief downtime
  - **Shadow table** pattern (write to both, migrate data, atomic swap)

  ## 3. Migration Script (Up)

  ```sql
  -- Migration: [descriptive name]
  -- Author: [placeholder]
  -- Date: [placeholder]
  -- Risk: [low/medium/high]
  -- Estimated run time: [estimate]
  -- Table lock duration: [estimate or "none"]

  [full migration script with inline comments]
  ```

  If using a migration framework, provide the framework-specific format as well.

  ## 4. Rollback Script (Down)

  ```sql
  -- Rollback: Reverses the above migration
  -- Safe to run after: [when is it safe to rollback?]
  -- Data loss risk: [none / low / high — explain]

  [full rollback script]
  ```

  ## 5. Execution Plan

  Step-by-step instructions for running this migration safely in production:
  1. Pre-migration checks to run
  2. How to monitor progress on large batches
  3. What to watch for in logs/metrics during execution
  4. When to abort and rollback

  ## 6. Verification Queries

  After the migration runs, how do you confirm it worked correctly?

  ```sql
  -- Verify the migration succeeded
  [verification queries]
  ```

  ## 7. Application Code Changes Required

  If the application code needs to change before or after the migration (e.g., to handle a new nullable column, stop writing to a dropped column), specify:
  - What changes are needed
  - Whether they should be deployed before or after the migration
  - Whether the old code is compatible with the new schema (backward compatibility)
variables:
  - "{{database}}"
  - "{{framework}}"
  - "{{current_schema}}"
  - "{{change_description}}"
  - "{{reason}}"
  - "{{table_info}}"
  - "{{downtime_tolerance}}"
  - "{{rollback_requirement}}"
exampleInput: |
  database: PostgreSQL 15
  framework: Alembic (Python)
  current_schema: |
    CREATE TABLE users (
      id BIGSERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      full_name VARCHAR(255),
      created_at TIMESTAMPTZ DEFAULT NOW()
    );

    -- Current app stores first/last name together in full_name
  change_description: |
    Split the full_name column into first_name and last_name columns.
    Backfill from full_name (split on first space; remainder goes to last_name).
    Keep full_name for 30 days as a fallback, then remove it.
    Add an index on last_name for a new search feature.
  reason: New search feature needs to search by last name efficiently. Marketing wants first_name for personalization.
  table_info: "8 million rows, ~200 writes/sec (mostly reads), high-traffic production table"
  downtime_tolerance: "No downtime allowed — this is a 24/7 consumer app"
  rollback_requirement: "Must be reversible for 30 days (keep full_name until app fully migrated)"
exampleOutput: |
  ## 1. Risk Assessment

  **Risk level: Medium**

  - **Lock risk:** Adding nullable columns in PostgreSQL 15 is fast and does NOT lock the table for reads or writes (uses ADD COLUMN without DEFAULT or with a volatile DEFAULT). The backfill (UPDATE) does not lock the table but will create I/O pressure on 8M rows.
  - **What could go wrong:** Backfill UPDATE on 8M rows is a long-running operation. If done as one transaction, it holds row locks and generates a huge WAL that can cause replication lag. Solution: batch it.
  - **Blast radius:** If the backfill fails mid-way, first_name/last_name will be NULL for un-migrated rows. The rollback is safe — dropping the new columns is instant.
  - **Index creation:** Must be `CONCURRENTLY` to avoid locking the table for minutes.

  ## 2. Migration Strategy

  **Expand-contract pattern** in three phases:

  - **Phase 1 (this migration):** Add `first_name` and `last_name` columns (nullable), backfill from `full_name` in batches, create index CONCURRENTLY. `full_name` is kept intact.
  - **Phase 2 (app deployment, before Phase 3):** Deploy app code that reads from `first_name`/`last_name` (with fallback to `full_name` for nulls), and writes to all three columns.
  - **Phase 3 (30 days later, separate migration):** Drop `full_name` column after confirming app is fully migrated.

  This approach means zero downtime and clean rollback at every stage.

  ## 3. Migration Script (Up)

  ```sql
  -- Migration: split_full_name_into_first_last
  -- Risk: Medium (batched backfill, CONCURRENTLY index)
  -- Estimated run time: 15–40 minutes (batched, depends on I/O)
  -- Table lock duration: ~milliseconds for ADD COLUMN; none for backfill or CONCURRENTLY index

  BEGIN;

  -- Step 1: Add new columns (nullable — no table rewrite in PG15)
  ALTER TABLE users
    ADD COLUMN IF NOT EXISTS first_name VARCHAR(255),
    ADD COLUMN IF NOT EXISTS last_name  VARCHAR(255);

  COMMIT;

  -- Step 2: Backfill in batches of 10,000 rows
  -- Run this OUTSIDE a transaction to avoid long-held locks
  -- Can be interrupted and resumed safely (idempotent WHERE clause)
  DO $$
  DECLARE
    batch_size INT := 10000;
    processed  INT := 0;
    total      INT;
  BEGIN
    SELECT COUNT(*) INTO total FROM users WHERE first_name IS NULL AND full_name IS NOT NULL;
    RAISE NOTICE 'Rows to backfill: %', total;

    LOOP
      UPDATE users
      SET
        first_name = SPLIT_PART(TRIM(full_name), ' ', 1),
        last_name  = TRIM(SUBSTRING(TRIM(full_name) FROM POSITION(' ' IN TRIM(full_name)) + 1))
      WHERE id IN (
        SELECT id FROM users
        WHERE first_name IS NULL AND full_name IS NOT NULL
        LIMIT batch_size
        FOR UPDATE SKIP LOCKED  -- skip rows locked by concurrent writes
      );

      GET DIAGNOSTICS processed = ROW_COUNT;
      EXIT WHEN processed = 0;

      RAISE NOTICE 'Backfilled % rows this batch', processed;
      PERFORM pg_sleep(0.1);  -- brief pause to reduce I/O pressure
    END LOOP;

    RAISE NOTICE 'Backfill complete';
  END $$;
  ```

  **Alembic version:**
  ```python
  """split_full_name_into_first_last

  Revision ID: a1b2c3d4e5f6
  Revises: previous_revision
  Create Date: 2025-03-15
  """
  from alembic import op
  import sqlalchemy as sa

  def upgrade():
      # Phase 1: Add columns (non-blocking)
      op.add_column('users', sa.Column('first_name', sa.String(255), nullable=True))
      op.add_column('users', sa.Column('last_name', sa.String(255), nullable=True))

      # Phase 2: Create index concurrently (must be outside transaction)
      op.execute('COMMIT')  # end implicit transaction
      op.execute("""
          CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_users_last_name
          ON users (last_name)
          WHERE last_name IS NOT NULL
      """)
      # Note: backfill is run as a separate script, not in Alembic
      # See: scripts/backfill_split_names.py

  def downgrade():
      op.execute('DROP INDEX CONCURRENTLY IF EXISTS idx_users_last_name')
      op.drop_column('users', 'last_name')
      op.drop_column('users', 'first_name')
  ```

  ## 4. Rollback Script (Down)

  ```sql
  -- Rollback: Remove first_name, last_name columns and index
  -- Safe to run: any time before Phase 3 (full_name is still intact)
  -- Data loss risk: None — full_name column was never modified

  -- Drop index first (CONCURRENTLY to avoid lock)
  DROP INDEX CONCURRENTLY IF EXISTS idx_users_last_name;

  -- Drop columns (fast in PG15)
  ALTER TABLE users
    DROP COLUMN IF EXISTS first_name,
    DROP COLUMN IF EXISTS last_name;
  ```

  ## 5. Execution Plan

  1. **Pre-migration:** Run `SELECT COUNT(*) FROM users WHERE full_name IS NULL` — confirm baseline. Check replication lag is <1 second before starting.
  2. **Add columns:** Run the `ALTER TABLE` block during any time of day (non-locking in PG15). Verify in `\d users`.
  3. **Start backfill:** Run the `DO $$` block in a tmux/screen session. Monitor progress via `RAISE NOTICE` output. Expected rate: ~100K rows/minute under normal I/O.
  4. **Monitor during backfill:** Watch replication lag (`SELECT now() - pg_last_xact_replay_timestamp()` on replica). If lag exceeds 30 seconds, increase `pg_sleep` delay.
  5. **Create index CONCURRENTLY:** After backfill completes. This runs in the background — monitor with `SELECT * FROM pg_stat_progress_create_index`.
  6. **Abort signal:** If replication lag exceeds 60 seconds, or CPU exceeds 90% for >5 minutes, stop the backfill loop (Ctrl+C is safe — idempotent WHERE clause handles resume).

  ## 6. Verification Queries

  ```sql
  -- Confirm column exists
  SELECT column_name, data_type, is_nullable
  FROM information_schema.columns
  WHERE table_name = 'users' AND column_name IN ('first_name', 'last_name');

  -- Confirm backfill completeness
  SELECT
    COUNT(*) FILTER (WHERE first_name IS NULL AND full_name IS NOT NULL) AS not_yet_backfilled,
    COUNT(*) FILTER (WHERE first_name IS NOT NULL) AS backfilled,
    COUNT(*) AS total
  FROM users;

  -- Spot-check data quality
  SELECT full_name, first_name, last_name
  FROM users
  WHERE full_name IS NOT NULL
  ORDER BY RANDOM()
  LIMIT 20;

  -- Confirm index exists
  SELECT indexname, indexdef FROM pg_indexes
  WHERE tablename = 'users' AND indexname = 'idx_users_last_name';
  ```

  ## 7. Application Code Changes Required

  **Before Phase 3 (required before dropping full_name):**

  ```python
  # Old code:
  user.full_name

  # New code (backward compatible during migration):
  def get_display_name(user):
      if user.first_name:
          return f"{user.first_name} {user.last_name or ''}".strip()
      return user.full_name or ""  # fallback for any un-migrated rows

  # Write path — write to all three during transition:
  user.first_name = first_name
  user.last_name = last_name
  user.full_name = f"{first_name} {last_name}".strip()  # keep in sync until Phase 3
  ```

  Deploy this code **after Phase 1** (columns exist) and **before Phase 3** (full_name drop). The app must not write only to `full_name` after this deploy — or the backfill will be un-done for new records.
tips:
  - "For tables over 1M rows, always batch your UPDATE statements. A single UPDATE on 10M rows can hold locks for minutes and spike replication lag."
  - "In PostgreSQL, CREATE INDEX CONCURRENTLY is your friend — it builds the index without locking the table. It takes longer but won't cause downtime."
  - "Always include a rollback script, even for 'simple' migrations. Adding a column is easy to reverse; dropping one after 30 days of writes is not."
  - "Test on a production-sized database snapshot, not staging. A migration that runs in 5 seconds on 10K rows may take 45 minutes on 50M rows."
complexity: advanced
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - data-model-review
  - sql-query-optimize
  - runbook-draft
  - incident-postmortem-template
tags:
  - database
  - migrations
  - postgresql
  - devops
  - engineering
---
