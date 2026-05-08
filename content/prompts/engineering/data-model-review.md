---
title: "Review and improve a database data model"
slug: data-model-review
function: engineering
role: architecture
description: "Critically evaluate a database schema or data model — identifying normalization issues, missing constraints, indexing gaps, and design patterns that will cause problems at scale — with concrete improvements."
useCase: "Use this prompt when designing a schema for a new feature, before a migration to fix an existing schema, or when a data model is causing recurring bugs or performance problems. Data model decisions are expensive to reverse — a review before building saves months of migration work later."
prompt: |
  You are a database architect reviewing a data model. Analyze the schema below and provide a comprehensive review with prioritized improvements.

  **Database system:** {{database}}
  **Application context:** {{app_context}} (what the application does, domain description)
  **Schema to review:**
  ```sql
  {{schema}}
  ```
  **Key queries this schema must support efficiently:** {{key_queries}}
  **Scale requirements:** {{scale}} (row counts, write rate, read rate)
  **Known issues:** {{known_issues}} (bugs or performance problems you've already noticed)

  Provide a complete data model review:

  ## 1. Schema Overview
  Summarize what the schema models, note the relationships between entities, and identify any domain concepts that are missing from the schema.

  ## 2. Normalization Analysis
  - Is the schema over-normalized (causing excessive joins for common queries)?
  - Is it under-normalized (storing the same data in multiple places)?
  - Identify any functional dependencies that violate 3NF (data that depends on non-key columns)
  - Identify any repeating groups or multi-valued attributes

  ## 3. Constraints and Data Integrity
  For each constraint issue found:
  - **Issue:** What invariant is not enforced
  - **Risk:** What data corruption or bugs this enables
  - **Fix:** The specific constraint or change required

  Missing constraint types to check:
  - NOT NULL on required fields
  - UNIQUE constraints on logically unique fields
  - CHECK constraints on bounded values
  - Foreign key constraints on relationships
  - Consistent use of ON DELETE behavior

  ## 4. Indexing Analysis
  - What indexes are needed for the stated key queries?
  - Are there any existing indexes that appear redundant or counterproductive?
  - Composite index recommendations with column ordering rationale
  - Partial index opportunities

  ## 5. Naming and Conventions
  - Inconsistent naming conventions that will cause confusion
  - Ambiguous column names
  - Any naming changes that would make the schema clearer

  ## 6. Design Patterns and Anti-patterns
  Call out any recognized anti-patterns:
  - EAV (Entity-Attribute-Value) anti-pattern
  - Polymorphic associations
  - Storing serialized data in text columns (when structured columns are better)
  - Using strings for IDs or enums that should be typed differently
  - Magic numbers or status codes without a reference table

  ## 7. Scalability Concerns
  At the stated scale:
  - What tables will grow fastest and cause problems?
  - Are there any hotspot risks (e.g., all writes going to the same table partition)?
  - Archiving or partitioning recommendations

  ## 8. Recommended Schema (Improved Version)
  ```sql
  -- Improved schema with all changes applied
  -- Inline comments explaining non-obvious choices
  ```

  ## 9. Migration Path
  If this is an existing schema: how to migrate to the improved version safely, in what order, with what risks.
variables:
  - "{{database}}"
  - "{{app_context}}"
  - "{{schema}}"
  - "{{key_queries}}"
  - "{{scale}}"
  - "{{known_issues}}"
exampleInput: |
  database: PostgreSQL 15
  app_context: A B2B HR survey platform. Companies run engagement surveys for their employees. Survey results are analyzed by HR managers to understand team sentiment.
  schema: |
    CREATE TABLE companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      created_at TIMESTAMP
    );

    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      company_id INT REFERENCES companies(id),
      email VARCHAR(255),
      full_name VARCHAR(255),
      role VARCHAR(50),
      is_active BOOLEAN,
      manager_id INT,
      department VARCHAR(255),
      created_at TIMESTAMP
    );

    CREATE TABLE surveys (
      id SERIAL PRIMARY KEY,
      company_id INT REFERENCES companies(id),
      title VARCHAR(500),
      description TEXT,
      questions TEXT,  -- JSON stored as text
      status VARCHAR(50),
      created_by INT,
      start_date DATE,
      end_date DATE,
      created_at TIMESTAMP
    );

    CREATE TABLE responses (
      id SERIAL PRIMARY KEY,
      survey_id INT REFERENCES surveys(id),
      user_id INT REFERENCES users(id),
      answers TEXT,  -- JSON stored as text
      submitted_at TIMESTAMP,
      created_at TIMESTAMP
    );
  key_queries: |
    1. Get all responses for a survey with user details (for HR manager dashboard)
    2. Check if a specific user has completed a specific survey
    3. Get response rate for a survey, broken down by department
    4. Get all active surveys for a company
    5. Check if a survey's end_date has passed (to auto-close)
  scale: |
    - companies: ~1K rows, slow growth
    - users: ~500K rows, moderate growth
    - surveys: ~10K rows, moderate growth  
    - responses: ~50M rows, high growth (main volume table)
  known_issues: |
    - Querying "has user X completed survey Y" is slow (full scan of responses)
    - JSON parsing of questions/answers in Python is causing bugs when fields are missing
    - Duplicate responses appear occasionally (same user, same survey)
exampleOutput: |
  ## 1. Schema Overview

  The schema models: Companies → Users (employees), Companies → Surveys, Surveys → Responses (user answers). The relationships are correct and the entity model covers the core domain.

  **Missing domain concepts:**
  - Survey questions are stored as a JSON text blob in `surveys.questions` — questions are not first-class entities. This makes it impossible to query or aggregate by individual question.
  - Survey responses store answers as JSON text — same problem. Individual answer values can't be queried without application-layer parsing.
  - There's no `teams` or `departments` table — department is a free-text field on `users`, making consistent grouping unreliable.
  - No audit trail for survey status changes.

  ## 2. Normalization Analysis

  **Under-normalized:**
  - `users.department` is a VARCHAR — if department names change or contain typos, existing user records don't update. This causes the "by-department" breakdown query to produce fragmented results (e.g., "Engineering", "engineering", "Eng" as three separate groups).
  - Recommendation: extract `departments` to a reference table with `department_id` foreign key on `users`.

  **Appropriately normalized:** The company → user → survey → response hierarchy is correctly normalized.

  **JSON blobs:** `surveys.questions` and `responses.answers` stored as `TEXT` are a normalization issue — structured data is hidden from the database. At minimum, use JSONB; ideally, extract to first-class tables.

  ## 3. Constraints and Data Integrity

  **Critical — Missing UNIQUE constraint on responses:**
  - **Issue:** No unique constraint prevents the same user from submitting multiple responses to the same survey
  - **Risk:** Duplicate responses — this is your known bug
  - **Fix:**
    ```sql
    ALTER TABLE responses ADD CONSTRAINT uq_responses_survey_user
      UNIQUE (survey_id, user_id);
    ```

  **Missing NOT NULL on required fields:**
  - `users.email` — NULL email causes issues with auth and notification lookup
  - `users.company_id` — a user without a company is invalid
  - `users.is_active` — NULL is not the same as FALSE; should have a default
  - `surveys.status` — NULL status makes state machine logic ambiguous
  - `surveys.company_id` — a survey without a company is invalid
  - Fix: `ALTER TABLE users ALTER COLUMN email SET NOT NULL;` (and similar for each)

  **Missing UNIQUE on users.email:**
  - **Issue:** Two users can have the same email, causing auth confusion
  - **Fix:** `ALTER TABLE users ADD CONSTRAINT uq_users_email UNIQUE (email);`

  **Missing CHECK constraint on surveys.status:**
  - **Issue:** Any string can be written to `status` — "publihed", "ACTIVE", etc.
  - **Fix:**
    ```sql
    ALTER TABLE surveys ADD CONSTRAINT chk_surveys_status
      CHECK (status IN ('draft', 'active', 'closed', 'archived'));
    ```

  **Missing ON DELETE behavior:**
  - `users.company_id` has no `ON DELETE` — what happens if a company is deleted? Define explicitly (likely `RESTRICT` or `CASCADE`).

  **Missing FK on `users.manager_id`:**
  - `manager_id` references another user but has no FK constraint. Self-referential FK:
    ```sql
    ALTER TABLE users ADD CONSTRAINT fk_users_manager
      FOREIGN KEY (manager_id) REFERENCES users(id) ON DELETE SET NULL;
    ```

  ## 4. Indexing Analysis

  **Indexes needed for key queries:**
  ```sql
  -- Query 1: Responses for a survey (most frequent dashboard query)
  CREATE INDEX idx_responses_survey_id ON responses (survey_id);

  -- Query 2: Has user completed survey (currently causing full scan — this is your known slow query)
  -- The UNIQUE constraint above creates this index automatically:
  -- idx_responses_survey_user already covers (survey_id, user_id)

  -- Query 3: Response rate by department (needs join through users)
  CREATE INDEX idx_users_company_dept ON users (company_id, department);

  -- Query 4: Active surveys for a company
  CREATE INDEX idx_surveys_company_status ON surveys (company_id, status)
    WHERE status = 'active';  -- partial index: only active surveys

  -- Query 5: Surveys past end_date (for auto-close job)
  CREATE INDEX idx_surveys_end_date ON surveys (end_date)
    WHERE status = 'active';  -- partial: only active surveys need this check
  ```

  **responses table at 50M rows:** The primary key index is critical. The `(survey_id, user_id)` unique index covers both the duplicate-prevention constraint and the "has user completed" query — one index serves two purposes.

  ## 5. Naming and Conventions

  - `submitted_at` vs `created_at` on `responses` — these appear redundant. If they're meant to track different events (draft saved vs. submitted), document this. If identical, remove one.
  - `full_name` on users — consider splitting to `first_name` / `last_name` for personalization use cases
  - `questions` and `answers` column names on surveys/responses are ambiguous — consider `question_definitions` and `answer_payload`

  ## 6. Design Patterns and Anti-patterns

  **JSON stored as TEXT (critical):** Both `surveys.questions` and `responses.answers` use `TEXT` for JSON. This:
  - Prevents database-level querying of individual questions/answers
  - Cannot be indexed
  - Means bugs from missing fields are caught in Python, not at write time

  **Immediate fix:** Change to `JSONB`. This enables indexing and operators like `->` without a schema change.

  **Better fix (if query patterns require it):** Extract to a `questions` table and an `answers` table. This enables "average score for question 3 across all responses" queries in SQL.

  **Status as VARCHAR:** The `surveys.status` field should use a PostgreSQL `ENUM` type or a CHECK constraint (above). VARCHAR allows invalid states.

  ## 7. Scalability Concerns

  - **responses table (50M rows, high growth):** At 500M rows, queries on `survey_id` will still be fast with the index. Consider range partitioning by `submitted_at` year if you need to archive old responses.
  - **JSONB on responses.answers:** At 50M rows with large answer payloads, this column could represent significant storage. Profile average payload size; if >2KB average, consider response compression.
  - **Department fragmentation:** The free-text department field will cause increasing fragmentation in analytics. This is the most urgent non-constraint issue.

  ## 8. Recommended Schema

  ```sql
  -- Reference tables
  CREATE TYPE survey_status AS ENUM ('draft', 'active', 'closed', 'archived');
  CREATE TYPE user_role AS ENUM ('employee', 'manager', 'admin');

  CREATE TABLE companies (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  CREATE TABLE departments (
    id          BIGSERIAL PRIMARY KEY,
    company_id  BIGINT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    name        VARCHAR(255) NOT NULL,
    CONSTRAINT uq_departments_company_name UNIQUE (company_id, name)
  );

  CREATE TABLE users (
    id            BIGSERIAL PRIMARY KEY,
    company_id    BIGINT NOT NULL REFERENCES companies(id) ON DELETE RESTRICT,
    email         VARCHAR(255) NOT NULL,
    first_name    VARCHAR(255),
    last_name     VARCHAR(255),
    role          user_role NOT NULL DEFAULT 'employee',
    is_active     BOOLEAN NOT NULL DEFAULT TRUE,
    manager_id    BIGINT REFERENCES users(id) ON DELETE SET NULL,
    department_id BIGINT REFERENCES departments(id) ON DELETE SET NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_users_email UNIQUE (email)
  );

  CREATE TABLE surveys (
    id           BIGSERIAL PRIMARY KEY,
    company_id   BIGINT NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    title        VARCHAR(500) NOT NULL,
    description  TEXT,
    questions    JSONB NOT NULL DEFAULT '[]',  -- JSONB, not TEXT
    status       survey_status NOT NULL DEFAULT 'draft',
    created_by   BIGINT NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    start_date   DATE,
    end_date     DATE,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_surveys_dates CHECK (end_date IS NULL OR end_date >= start_date)
  );

  CREATE TABLE responses (
    id           BIGSERIAL PRIMARY KEY,
    survey_id    BIGINT NOT NULL REFERENCES surveys(id) ON DELETE CASCADE,
    user_id      BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    answers      JSONB NOT NULL DEFAULT '{}',  -- JSONB, not TEXT
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_responses_survey_user UNIQUE (survey_id, user_id)
  );

  -- Indexes
  CREATE INDEX idx_surveys_company_status ON surveys (company_id, status) WHERE status = 'active';
  CREATE INDEX idx_surveys_end_date ON surveys (end_date) WHERE status = 'active';
  CREATE INDEX idx_users_company_dept ON users (company_id, department_id);
  CREATE INDEX idx_responses_survey_id ON responses (survey_id);
  ```

  ## 9. Migration Path

  1. **Add UNIQUE on responses** (blocking bug fix — do first, run in off-hours): Confirm no existing duplicates (`SELECT survey_id, user_id, COUNT(*) FROM responses GROUP BY 1,2 HAVING COUNT(*) > 1`). Deduplicate if found, then add constraint.
  2. **Change TEXT to JSONB** for questions and answers: Non-breaking if data is valid JSON; validates on migration. Run with `ALTER TABLE surveys ALTER COLUMN questions TYPE JSONB USING questions::JSONB;`
  3. **Add NOT NULL constraints**: Add defaults first, then constraints. Can be done per-column during low-traffic window.
  4. **Add departments table + migrate department text**: New table, backfill from distinct values in `users.department`, update `users` with `department_id` FK, then optionally drop the old `department` text column.
tips:
  - "The data model is the hardest thing to change in a live system. Every hour spent reviewing a schema before it goes to production saves days of migration work later."
  - "Missing UNIQUE constraints are the #1 source of data integrity bugs — they don't cause loud errors, they cause subtle data quality problems that are hard to diagnose months later."
  - "Include the key queries the schema must support. A schema that looks clean in isolation may be wrong for its actual query patterns."
  - "Use TIMESTAMPTZ (timezone-aware) instead of TIMESTAMP for all timestamps unless you have a specific reason not to. Timezone bugs are painful to debug in production data."
complexity: advanced
modelRecommendation: claude-opus-4-5
relatedSlugs:
  - sql-query-optimize
  - migration-script
  - system-design-review
  - architecture-decision-record
tags:
  - database
  - schema
  - architecture
  - engineering
  - postgresql
---
