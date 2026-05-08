---
title: "Write a developer environment setup guide"
slug: environment-setup-guide
function: engineering
role: coding
description: "Generate a complete, step-by-step developer environment setup guide that gets a new engineer from zero to running the project locally — covering prerequisites, installation, configuration, and validation."
useCase: "Use this prompt when onboarding a new engineer, when the existing setup doc is outdated, or when 'it works on my machine' problems are slowing the team down. A good setup guide is one of the highest-leverage investments in team productivity."
prompt: |
  You are a senior engineer writing documentation for a new team member joining tomorrow. Write a complete developer environment setup guide for the project described below.

  **Project name:** {{project_name}}
  **What it does:** {{project_description}}
  **Technology stack:** {{tech_stack}}
  **Prerequisites (what to assume they already have):** {{prerequisites}}
  **Development dependencies:** {{dev_dependencies}} (databases, queues, external services, tools)
  **Environment variables / secrets:** {{env_vars}} (list variable names — never actual values)
  **How to run tests:** {{test_command}}
  **How to run the development server:** {{dev_server}}
  **Common setup problems you've seen:** {{common_problems}}
  **Target OS:** {{target_os}} (macOS, Linux, Windows, or all three)

  Write a complete setup guide with:

  ## Prerequisites
  Exact versions required, with installation commands. Don't just say "install Python" — say which version and how.

  ## Repository Setup
  Clone, branch naming conventions, any submodule setup.

  ## Dependencies Installation
  Step-by-step with exact commands. Separate frontend and backend if applicable.

  ## Environment Configuration
  - How to create `.env` or equivalent config files
  - What each required variable does (brief description)
  - Where to find or generate each value
  - Which values require access requests (e.g., staging API keys from 1Password)

  ## Services Setup
  How to start any required local services (databases, queues, etc.) — prefer Docker Compose if available.

  ## Database Setup
  - How to create the database
  - How to run migrations
  - How to seed with development data (if applicable)

  ## Verification
  Specific commands to run to confirm everything is working correctly, with expected output.

  ## Running the Application
  - Development server command and expected output
  - How to run tests
  - How to run linting/formatting
  - Any other common development workflows

  ## Troubleshooting
  For each common problem: the symptom, why it happens, and exactly how to fix it.

  ## Getting Help
  Where to go when something isn't covered here.

  Guidelines:
  - Every command must be copy-paste runnable
  - Note OS-specific differences inline (macOS vs Linux vs Windows)
  - Use `expected output` blocks to show what success looks like
  - Err heavily toward over-documenting — skip nothing
variables:
  - "{{project_name}}"
  - "{{project_description}}"
  - "{{tech_stack}}"
  - "{{prerequisites}}"
  - "{{dev_dependencies}}"
  - "{{env_vars}}"
  - "{{test_command}}"
  - "{{dev_server}}"
  - "{{common_problems}}"
  - "{{target_os}}"
exampleInput: |
  project_name: Beacon API
  project_description: The backend Django REST API for the Beacon HR survey platform. Powers all survey management, user auth, and analytics endpoints.
  tech_stack: Python 3.12, Django 4.2, PostgreSQL 15, Redis 7, Celery 5
  prerequisites: Assume engineer has: macOS or Ubuntu, git, and a GitHub account with repo access
  dev_dependencies: |
    - PostgreSQL 15 (local)
    - Redis 7 (local)
    - Python 3.12
    - Node 20 (for running one script in the toolchain — no frontend)
  env_vars: |
    DATABASE_URL — PostgreSQL connection string
    REDIS_URL — Redis connection string
    SECRET_KEY — Django secret key (generate locally)
    DEBUG — Set to True for local dev
    SENDGRID_API_KEY — Email sending (get from 1Password vault "Engineering")
    AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY — S3 file storage (get from 1Password)
    SENTRY_DSN — Error tracking (use the dev project DSN from 1Password)
  test_command: pytest
  dev_server: python manage.py runserver
  common_problems: |
    - psycopg2 install fails on macOS (needs libpq)
    - PORT 8000 already in use
    - Redis connection refused (forgot to start Redis)
    - Celery task not running (forgot to start worker)
    - Migration fails with "relation does not exist" (ran migrate before createdb)
  target_os: macOS and Ubuntu (Windows not supported)
exampleOutput: |
  # Beacon API — Developer Environment Setup

  **Estimated setup time:** 30–45 minutes on first run | **Updated:** 2025-03-15

  If you get stuck, ask in **#eng-help** on Slack or pair with any backend engineer.

  ---

  ## Prerequisites

  ### Python 3.12

  We use [pyenv](https://github.com/pyenv/pyenv) to manage Python versions.

  **macOS:**
  ```bash
  brew install pyenv
  echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
  echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
  echo 'eval "$(pyenv init -)"' >> ~/.zshrc
  source ~/.zshrc
  pyenv install 3.12.3
  ```

  **Ubuntu:**
  ```bash
  curl https://pyenv.run | bash
  # Follow the printed instructions to add pyenv to your shell profile
  source ~/.bashrc
  pyenv install 3.12.3
  ```

  Verify:
  ```bash
  python --version
  # Expected: Python 3.12.3
  ```

  ### PostgreSQL 15

  **macOS:**
  ```bash
  brew install postgresql@15
  brew services start postgresql@15
  echo 'export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"' >> ~/.zshrc
  source ~/.zshrc
  ```

  **Ubuntu:**
  ```bash
  sudo apt install -y postgresql-15 postgresql-client-15
  sudo systemctl start postgresql
  sudo systemctl enable postgresql
  ```

  Verify:
  ```bash
  psql --version
  # Expected: psql (PostgreSQL) 15.x
  ```

  ### Redis 7

  **macOS:**
  ```bash
  brew install redis
  brew services start redis
  ```

  **Ubuntu:**
  ```bash
  sudo apt install -y redis-server
  sudo systemctl start redis-server
  sudo systemctl enable redis-server
  ```

  Verify:
  ```bash
  redis-cli ping
  # Expected: PONG
  ```

  ### Node 20 (required for one build script)

  ```bash
  # macOS/Ubuntu via nvm:
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc  # or ~/.zshrc on macOS
  nvm install 20
  nvm use 20
  ```

  ---

  ## Repository Setup

  ```bash
  git clone git@github.com:beacon-hr/beacon-api.git
  cd beacon-api
  ```

  Set the Python version for this project:
  ```bash
  pyenv local 3.12.3
  python --version
  # Expected: Python 3.12.3
  ```

  ---

  ## Dependencies Installation

  Create and activate a virtual environment:
  ```bash
  python -m venv .venv
  source .venv/bin/activate  # macOS/Linux
  # On Windows (not officially supported): .venv\Scripts\activate
  ```

  Your shell prompt should now show `(.venv)`.

  Install Python dependencies:
  ```bash
  pip install --upgrade pip
  pip install -r requirements/development.txt
  ```

  **macOS only — if psycopg2 install fails:**
  ```bash
  brew install libpq
  export LDFLAGS="-L/opt/homebrew/opt/libpq/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/libpq/include"
  pip install psycopg2-binary
  ```

  ---

  ## Environment Configuration

  Copy the example env file:
  ```bash
  cp .env.example .env
  ```

  Open `.env` and fill in each variable:

  | Variable | Description | How to get it |
  |---|---|---|
  | `DATABASE_URL` | PostgreSQL connection string | Use the value below after creating the DB |
  | `REDIS_URL` | Redis connection string | `redis://localhost:6379/0` (local default) |
  | `SECRET_KEY` | Django cryptographic key | Run: `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"` |
  | `DEBUG` | Enable debug mode | `True` |
  | `SENDGRID_API_KEY` | Email sending | 1Password → "Engineering" vault → "SendGrid Dev API Key" |
  | `AWS_ACCESS_KEY_ID` | S3 file storage | 1Password → "Engineering" vault → "AWS Dev Credentials" |
  | `AWS_SECRET_ACCESS_KEY` | S3 file storage | Same as above |
  | `SENTRY_DSN` | Error tracking | 1Password → "Engineering" vault → "Sentry Dev DSN" |

  For local database, set:
  ```
  DATABASE_URL=postgresql://localhost/beacon_dev
  ```

  ---

  ## Database Setup

  Create the local database:
  ```bash
  createdb beacon_dev
  ```

  Run migrations:
  ```bash
  python manage.py migrate
  ```

  Expected output (last lines):
  ```
  Applying analytics.0012_add_aggregation_index... OK
  Applying delivery.0008_completion_tracking... OK
  ```

  Load development seed data:
  ```bash
  python manage.py loaddata fixtures/dev_seed.json
  ```

  This creates:
  - 1 test company: "Acme Corp" (company_id: 1)
  - 5 test users (see `fixtures/dev_seed.json` for credentials)
  - 3 sample surveys in various states

  ---

  ## Verification

  Run this checklist to confirm everything is working:

  ```bash
  # 1. Django checks
  python manage.py check
  # Expected: System check identified no issues (0 silenced).

  # 2. Database connectivity
  python manage.py dbshell -c "SELECT COUNT(*) FROM users;"
  # Expected: count = 5 (from seed data)

  # 3. Redis connectivity
  python manage.py shell -c "from django.core.cache import cache; cache.set('test', 1); print(cache.get('test'))"
  # Expected: 1

  # 4. Run the test suite
  pytest --tb=short -q
  # Expected: all tests pass (some may be skipped for missing external API keys)
  ```

  ---

  ## Running the Application

  ### Development server
  ```bash
  python manage.py runserver
  ```
  Expected output:
  ```
  Watching for file changes with StatReloader
  Performing system checks...
  System check identified no issues.
  March 15, 2025 - 14:30:00
  Django version 4.2, using settings 'beacon.settings.development'
  Starting development server at http://127.0.0.1:8000/
  ```

  Open http://localhost:8000/api/health/ — expect `{"status": "ok"}`.

  ### Celery worker (for background jobs)
  In a second terminal (with `.venv` activated):
  ```bash
  celery -A beacon worker -l info
  ```

  ### Run tests
  ```bash
  pytest                          # all tests
  pytest apps/surveys/            # one app
  pytest -k test_survey_creation  # one test by name
  pytest --pdb                    # drop into debugger on failure
  ```

  ### Linting and formatting
  ```bash
  ruff check .          # lint
  ruff format .         # format
  mypy beacon/          # type check
  ```

  ---

  ## Troubleshooting

  **`psycopg2` install fails on macOS**
  Symptom: `Error: pg_config executable not found` during `pip install`
  Fix: See the macOS-specific psycopg2 install step in Dependencies Installation above.

  **Port 8000 already in use**
  Symptom: `Error: That port is already in use`
  Fix: Either kill the process using the port (`lsof -ti:8000 | xargs kill`) or run on a different port: `python manage.py runserver 8001`

  **Redis connection refused**
  Symptom: `redis.exceptions.ConnectionError: Error 111 connecting to localhost:6379`
  Fix: Redis isn't running. Start it: `brew services start redis` (macOS) or `sudo systemctl start redis-server` (Ubuntu)

  **"relation does not exist" on migrate**
  Symptom: `ProgrammingError: relation "users" does not exist` when running `migrate`
  Fix: Database doesn't exist yet. Run `createdb beacon_dev` first, then re-run `migrate`.

  **Celery tasks not running**
  Symptom: Tasks are enqueued but never execute
  Fix: The Celery worker isn't running. Open a second terminal, activate `.venv`, and run `celery -A beacon worker -l info`.

  ---

  ## Getting Help

  - **#eng-help** Slack — fastest response during business hours
  - **#eng-setup-issues** — if you solve a setup problem not documented here, share the fix here so we can add it to this guide
  - Pair with any backend engineer for a setup walkthrough session
tips:
  - "Include expected output for every verification command. Without it, a new engineer can't tell if their output is correct or subtly wrong."
  - "Cover the most common failure modes explicitly. The 5 minutes it takes to document 'psycopg2 install fails on macOS' saves every new macOS hire from an hour of frustration."
  - "Add a 'Getting Help' section. A new engineer who is stuck but doesn't know where to ask will spend hours stuck in silence — a pointer to the right channel makes help-seeking feel safe."
  - "Review and update the setup guide every time a new engineer joins. If they hit a problem not in the guide, add it immediately."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - readme-draft
  - runbook-draft
  - api-endpoint-docs
  - code-explain
tags:
  - documentation
  - onboarding
  - developer-experience
  - engineering
  - setup
---
