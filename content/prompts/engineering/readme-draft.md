---
title: "Write a README for a project or library"
slug: readme-draft
function: engineering
role: documentation
description: "Generate a complete, well-structured README that helps developers get from zero to working in the shortest possible path — covering what it does, how to install it, how to use it, and how to contribute."
useCase: "Use this prompt for new projects, when onboarding new engineers to an existing project, or when an existing README is outdated or incomplete. A good README is the highest-leverage documentation you can write."
prompt: |
  You are a technical writer who creates documentation developers actually read and use. Write a README for the project described below.

  **Project name:** {{project_name}}
  **What it does:** {{project_description}} (one sentence that captures the purpose)
  **Who it's for:** {{audience}} (e.g., backend engineers building Python services, frontend devs using the component library, data scientists using the CLI tool)
  **Language / stack:** {{tech_stack}}
  **Key features:** {{key_features}}
  **Installation method:** {{install_method}} (e.g., pip install, npm install, clone + make, Docker)
  **Quick start example:** {{quick_start}} (the simplest meaningful usage example)
  **Configuration options:** {{configuration}}
  **Any badges to include:** {{badges}} (e.g., build status, coverage, PyPI version, npm version)
  **License:** {{license}}
  **Contribution guidelines:** {{contribution_notes}}

  Write a complete README in Markdown with this structure:

  # [Project Name]

  [Badges row]

  [One-paragraph description — what it does, who it's for, why they'd use it instead of alternatives]

  ## Features
  [Bullet list of key capabilities]

  ## Installation
  [Installation commands with code blocks. Include any prerequisites.]

  ## Quick Start
  [The simplest working example — copy-paste runnable. Include expected output if helpful.]

  ## Usage
  [More complete usage examples covering common patterns. If the project has multiple modes or use cases, cover each with a brief example.]

  ## Configuration
  [All configuration options with types, defaults, and descriptions. Use a table if there are many options.]

  ## API Reference (if applicable)
  [Key functions/classes/endpoints with signatures and brief descriptions. Link to full docs if they exist elsewhere.]

  ## Contributing
  [How to set up the dev environment, run tests, and submit a PR. Be concrete and runnable — not just "fork and submit a PR".]

  ## License
  [License statement with link]

  Guidelines for writing:
  - Lead with what the project does for the user, not how it works internally
  - Every code block should be copy-paste runnable with realistic values
  - Err on the side of too much example code over too much prose
  - Use present tense ("Returns a list of users" not "Will return a list of users")
  - Avoid filler phrases ("Simply run", "Just install", "Easily configure")
variables:
  - "{{project_name}}"
  - "{{project_description}}"
  - "{{audience}}"
  - "{{tech_stack}}"
  - "{{key_features}}"
  - "{{install_method}}"
  - "{{quick_start}}"
  - "{{configuration}}"
  - "{{badges}}"
  - "{{license}}"
  - "{{contribution_notes}}"
exampleInput: |
  project_name: Taskr
  project_description: A Python library for defining and running typed background tasks with Redis as the broker, with built-in retries, dead-letter queues, and a monitoring dashboard
  audience: Python backend engineers who need background job processing without the complexity of Celery
  tech_stack: Python 3.11+, Redis, FastAPI (for the dashboard)
  key_features: |
    - Type-safe task definitions with Pydantic
    - Automatic retries with configurable exponential backoff
    - Dead-letter queue for failed tasks
    - Built-in monitoring dashboard (FastAPI)
    - Priority queues (high/normal/low)
    - Task result storage and retrieval
    - Compatible with asyncio and sync task functions
  install_method: pip install taskr[dashboard]
  quick_start: |
    from taskr import Taskr, task
    app = Taskr(redis_url="redis://localhost:6379")

    @task
    def send_email(to: str, subject: str, body: str) -> bool:
        # your email sending logic
        return True

    # Enqueue from anywhere
    job = send_email.delay(to="alice@example.com", subject="Hello", body="Hi!")
    print(job.id)  # "job_abc123"

    # Run workers
    # taskr worker --concurrency=4
  configuration: |
    TASKR_REDIS_URL — Redis connection URL (default: redis://localhost:6379)
    TASKR_CONCURRENCY — Number of worker threads (default: 4)
    TASKR_MAX_RETRIES — Global max retry count (default: 3)
    TASKR_RETRY_BACKOFF — Initial retry delay in seconds (default: 5)
    TASKR_RESULT_TTL — How long to keep task results in Redis in seconds (default: 3600)
    Per-task overrides: @task(max_retries=5, priority="high", queue="emails")
  badges: PyPI version, Python 3.11+, MIT license, build status (GitHub Actions)
  license: MIT
  contribution_notes: |
    Run tests with pytest. Requires a local Redis instance (docker-compose up redis). 
    Format with ruff and type-check with mypy before submitting. 
    Open an issue before large changes.
exampleOutput: |
  # Taskr

  [![PyPI version](https://badge.fury.io/py/taskr.svg)](https://pypi.org/project/taskr/)
  [![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Build Status](https://github.com/your-org/taskr/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/taskr/actions)

  Taskr is a Python background task library for teams that need reliable job processing without Celery's complexity. Define tasks as typed Python functions, enqueue them from anywhere in your app, and run them in dedicated workers — with automatic retries, dead-letter queues, and a built-in dashboard.

  ## Features

  - **Type-safe task definitions** — Pydantic validates task arguments at enqueue time, not at execution time
  - **Automatic retries** with configurable exponential backoff per task
  - **Dead-letter queue** for manual inspection of permanently failed tasks
  - **Priority queues** — route time-sensitive tasks to high-priority workers
  - **Task result storage** — retrieve return values from any enqueued job
  - **Monitoring dashboard** — FastAPI-powered UI for queue depth, worker status, and task history
  - **asyncio and sync support** — works with both async def and regular functions

  ## Installation

  Requires Python 3.11+ and a running Redis instance.

  ```bash
  # Core library
  pip install taskr

  # With the monitoring dashboard
  pip install taskr[dashboard]
  ```

  ## Quick Start

  ```python
  from taskr import Taskr, task

  app = Taskr(redis_url="redis://localhost:6379")

  @task
  def send_email(to: str, subject: str, body: str) -> bool:
      # Your email sending logic here
      print(f"Sending to {to}: {subject}")
      return True

  # Enqueue from anywhere in your app
  job = send_email.delay(to="alice@example.com", subject="Hello", body="Hi!")
  print(job.id)   # "job_a1b2c3d4"
  print(job.status)  # "queued"
  ```

  Start a worker process in a separate terminal:

  ```bash
  taskr worker --concurrency=4
  ```

  Check the result:

  ```python
  result = app.get_result(job.id)
  print(result.status)   # "completed"
  print(result.value)    # True
  ```

  ## Usage

  ### Retry configuration

  ```python
  @task(max_retries=5, retry_backoff=10)
  def call_flaky_api(user_id: str) -> dict:
      response = requests.get(f"/api/users/{user_id}")
      response.raise_for_status()
      return response.json()
  ```

  On failure, Taskr retries with exponential backoff: 10s, 20s, 40s, 80s, 160s. After 5 failures, the task moves to the dead-letter queue.

  ### Priority queues

  ```python
  @task(priority="high")
  def process_payment(amount: float, user_id: str) -> str:
      # ...

  @task(priority="low")
  def generate_report(report_id: str) -> None:
      # ...
  ```

  Run separate workers for each priority level:

  ```bash
  taskr worker --queue=high --concurrency=8
  taskr worker --queue=normal,low --concurrency=2
  ```

  ### Async tasks

  ```python
  @task
  async def fetch_and_store(url: str) -> None:
      async with httpx.AsyncClient() as client:
          data = await client.get(url)
      await db.store(data.json())
  ```

  ### Monitoring dashboard

  ```python
  from taskr.dashboard import create_dashboard

  dashboard = create_dashboard(app)
  # Mount to your existing FastAPI app
  main_app.mount("/taskr", dashboard)
  ```

  Navigate to `/taskr` to see queue depths, worker status, and task history.

  ## Configuration

  | Option | Environment Variable | Default | Description |
  |--------|---------------------|---------|-------------|
  | `redis_url` | `TASKR_REDIS_URL` | `redis://localhost:6379` | Redis connection URL |
  | `concurrency` | `TASKR_CONCURRENCY` | `4` | Worker thread count |
  | `max_retries` | `TASKR_MAX_RETRIES` | `3` | Global retry limit |
  | `retry_backoff` | `TASKR_RETRY_BACKOFF` | `5` | Initial retry delay (seconds) |
  | `result_ttl` | `TASKR_RESULT_TTL` | `3600` | Task result TTL in Redis (seconds) |

  Per-task options override global defaults:

  ```python
  @task(max_retries=10, priority="high", queue="payments", result_ttl=86400)
  def process_payment(...):
  ```

  ## Contributing

  ```bash
  # 1. Clone and set up
  git clone https://github.com/your-org/taskr
  cd taskr
  pip install -e ".[dev]"

  # 2. Start Redis
  docker compose up -d redis

  # 3. Run tests
  pytest

  # 4. Lint and type check
  ruff check .
  mypy taskr/
  ```

  Open an issue before starting large features or refactors — it saves everyone time. For bug fixes, a PR with a failing test that your fix makes pass is the fastest path to merge.

  ## License

  MIT — see [LICENSE](LICENSE) for details.
tips:
  - "Lead the README with what the project does for the reader, not its technical architecture. 'A background job library that gets out of your way' is more compelling than 'An asyncio-based Redis-backed task execution framework'."
  - "Every code example should be copy-paste runnable. If it requires setup the reader hasn't done yet, say so explicitly or move the setup to an earlier step."
  - "The Quick Start section is the most important section. It should get a developer from zero to something working in under 5 minutes. If it takes longer, it's not quick."
  - "Update the README when you change the API — a README that's out of sync with the code is worse than no README."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - api-endpoint-docs
  - architecture-decision-record
  - code-explain
  - environment-setup-guide
tags:
  - documentation
  - readme
  - engineering
  - open-source
  - developer-experience
---
