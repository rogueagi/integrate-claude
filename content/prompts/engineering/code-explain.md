---
title: "Explain code to a non-expert audience"
slug: code-explain
function: engineering
role: coding
description: "Break down a function, module, or system into plain English — explaining what it does, why it's written that way, and what someone needs to know to work with it confidently."
useCase: "Use this prompt when onboarding someone to a codebase, writing documentation from code, reviewing code you didn't write, or preparing to give a code walkthrough. Works for any audience from junior engineers to non-technical stakeholders."
prompt: |
  You are a senior software engineer and technical communicator. Explain the code below clearly and completely for the audience described.

  **Language:** {{language}}
  **Audience:** {{audience}} (e.g., junior engineer, senior engineer, non-technical product manager, first-day intern)
  **What this code is part of:** {{code_context}} (e.g., payment processing module, user authentication, background job runner)
  **Code to explain:**
  ```{{language}}
  {{code_to_explain}}
  ```
  **Specific questions to answer (if any):** {{specific_questions}}

  Provide a complete explanation using this structure:

  ## What This Code Does (One Paragraph)
  A plain-English summary of the code's purpose — what problem it solves, what it produces, and where it fits in the larger system. No code, no jargon. This paragraph should make sense to the stated audience.

  ## How It Works (Step by Step)
  Walk through the code in execution order. For each meaningful step or block:
  - What is happening
  - Why it's necessary
  - Any non-obvious decisions or patterns used

  Do not just restate the code in English. Explain the *intent* and the *why* behind each step.

  ## Key Concepts to Understand
  List 2–5 concepts, patterns, or language features a reader needs to understand this code. For each:
  - **Concept:** What it is
  - **Why it's used here:** The specific reason this code uses it
  - **Quick example** (if needed to clarify)

  ## Inputs and Outputs
  - **Inputs:** What data goes in, what types are expected, any preconditions
  - **Outputs:** What is returned or produced, in what form
  - **Side effects:** Any external state changes (DB writes, API calls, file operations, etc.)

  ## Edge Cases and Gotchas
  What could go wrong or behave unexpectedly? What assumptions does this code make that could be violated? What should someone be careful about when using or modifying it?

  ## How to Use This Code
  A short example showing how to call or invoke this code correctly, including a realistic example with realistic data.

  ```{{language}}
  [Example usage]
  ```

  ## What to Watch Out for When Modifying
  If someone wanted to change this code, what are the non-obvious risks? What would break if they changed X? What invariants must be preserved?
variables:
  - "{{language}}"
  - "{{audience}}"
  - "{{code_context}}"
  - "{{code_to_explain}}"
  - "{{specific_questions}}"
exampleInput: |
  language: python
  audience: junior engineer (6 months experience, knows Python basics, unfamiliar with async/concurrency)
  code_context: A background job runner that processes queued tasks from a Redis queue
  code_to_explain: |
    import asyncio
    import json
    import logging
    from typing import Callable, Any
    from redis.asyncio import Redis

    logger = logging.getLogger(__name__)

    class JobQueue:
        def __init__(self, redis: Redis, queue_name: str, concurrency: int = 5):
            self.redis = redis
            self.queue_name = queue_name
            self.concurrency = concurrency
            self._semaphore = asyncio.Semaphore(concurrency)
            self._running = False

        async def enqueue(self, job_type: str, payload: dict) -> str:
            job = {"type": job_type, "payload": payload}
            await self.redis.lpush(self.queue_name, json.dumps(job))
            return f"{job_type}:{id(job)}"

        async def process(self, handlers: dict[str, Callable]) -> None:
            self._running = True
            while self._running:
                raw = await self.redis.brpop(self.queue_name, timeout=5)
                if raw is None:
                    continue
                _, data = raw
                job = json.loads(data)
                handler = handlers.get(job["type"])
                if handler is None:
                    logger.warning("No handler for job type: %s", job["type"])
                    continue
                asyncio.create_task(self._run_with_limit(handler, job["payload"]))

        async def _run_with_limit(self, handler: Callable, payload: Any) -> None:
            async with self._semaphore:
                try:
                    await handler(payload)
                except Exception as exc:
                    logger.error("Job failed: %s", exc, exc_info=True)

        def stop(self) -> None:
            self._running = False
  specific_questions: What does the semaphore do and why is it needed? What happens if a job fails?
exampleOutput: |
  ## What This Code Does

  This code defines a `JobQueue` — a system for running background tasks asynchronously without blocking the main application. You push work onto the queue (like "send a welcome email to user 123"), and the queue processes it in the background, running up to 5 tasks at the same time. It uses Redis, a fast in-memory database, as the actual storage for pending jobs. Think of it like a to-do list that multiple workers share — the queue ensures no task is picked up twice, and limits how many are running at once.

  ## How It Works (Step by Step)

  **1. Initialization (`__init__`)**
  When you create a `JobQueue`, you give it three things: a connection to Redis, a name for this queue (so multiple queues can coexist), and an optional concurrency limit (default: 5). The `_semaphore` is a concurrency controller — more on this below. `_running` tracks whether the queue is active.

  **2. Adding a job (`enqueue`)**
  `enqueue` takes a job type (like `"send_email"`) and a payload dict (the data the job needs). It packages them as JSON and pushes them onto the left side of a Redis list using `lpush`. Redis lists act as the queue storage — jobs wait here until a worker picks them up.

  **3. Processing jobs (`process`)**
  This is the main loop. It continuously calls `brpop` — a Redis operation that *blocks* (waits) until a job appears, then pops it from the *right* side of the list (FIFO order: first in, first out). When a job arrives, it looks up the matching handler function from the `handlers` dict you pass in. If there's no handler, it logs a warning and skips the job. If there is a handler, it launches the job using `asyncio.create_task`, which runs it concurrently without stopping the loop from picking up the next job.

  **4. Running with a limit (`_run_with_limit`)**
  This helper wraps the actual handler call. The `async with self._semaphore` line is the concurrency gate — only 5 tasks can be inside this block at once. If 5 are already running, the 6th waits here until one finishes. If the handler raises an exception, it's caught and logged — the job is silently dropped (no retry), and the queue keeps running.

  **5. Stopping (`stop`)**
  Sets `_running = False`, which causes the `while` loop in `process` to exit after the current iteration. Since `brpop` has a 5-second timeout, the loop may take up to 5 seconds to fully stop after `stop()` is called.

  ## Key Concepts to Understand

  **`asyncio` and async/await**
  Python's `asyncio` lets a single program do many things "at once" without threads. Instead of pausing the whole program while waiting for Redis or a slow API, `async` functions yield control back while waiting. This code is fully async — every method that touches I/O uses `await`.

  **`asyncio.Semaphore`**
  A semaphore is a counter that limits concurrent access. `asyncio.Semaphore(5)` means "at most 5 coroutines can hold this at once." When you do `async with self._semaphore`, you acquire a slot. If all 5 are taken, you wait. When a slot is released (the `with` block exits), another waiter gets it. This prevents the queue from launching 500 jobs simultaneously and overwhelming the system.

  **`asyncio.create_task`**
  This launches a coroutine in the background and returns immediately. The queue loop doesn't wait for the job to finish — it immediately starts listening for the next job. The task runs concurrently in the same event loop.

  **`brpop` (blocking pop)**
  A Redis command that waits for an item to appear in the list before returning. The `timeout=5` means: "if nothing arrives in 5 seconds, return `None`." This prevents the loop from spinning at 100% CPU when the queue is empty.

  ## Inputs and Outputs

  **`enqueue(job_type, payload)`**
  - Input: `job_type` is a string key that maps to a handler; `payload` is any JSON-serializable dict
  - Output: Returns a string ID (informational, not used to track job status)
  - Side effect: Writes a job record to Redis

  **`process(handlers)`**
  - Input: `handlers` is a dict mapping job type strings to async callable functions
  - Output: Runs indefinitely until `stop()` is called; no return value
  - Side effect: Reads from Redis, runs handler functions

  ## Edge Cases and Gotchas

  - **No retry on failure:** If a handler raises an exception, the job is logged and dropped. If your job is important (like charging a customer), you need to add retry logic or a dead-letter queue yourself.
  - **No job acknowledgment:** If the process crashes mid-job (power loss, OOM kill), the job is lost. More robust systems use Redis's `BRPOPLPUSH` to atomically move jobs to a "processing" list before working on them.
  - **JSON-only payloads:** Payloads must be JSON-serializable. Passing datetime objects, sets, or custom classes will raise a `TypeError` in `enqueue`.
  - **`stop()` is not immediate:** The loop polls with a 5-second timeout. Stopping takes up to 5 seconds after calling `stop()`.

  ## How to Use This Code

  ```python
  import asyncio
  from redis.asyncio import Redis
  from job_queue import JobQueue

  async def send_welcome_email(payload: dict):
      user_email = payload["email"]
      # ... actual email sending logic
      print(f"Sending welcome email to {user_email}")

  async def main():
      redis = Redis(host="localhost", port=6379)
      queue = JobQueue(redis, queue_name="background-jobs", concurrency=3)

      # Add a job to the queue
      await queue.enqueue("send_welcome_email", {"email": "alice@example.com"})

      # Start processing (runs forever until stop() is called)
      handlers = {
          "send_welcome_email": send_welcome_email,
      }
      await queue.process(handlers)

  asyncio.run(main())
  ```

  ## What to Watch Out for When Modifying

  - **Adding retry logic:** If you add retries, be careful not to re-enqueue inside `_run_with_limit` without releasing the semaphore first — you could deadlock if the queue is at capacity and retries are waiting for a slot.
  - **Changing the queue name after data is in Redis:** Old jobs in the old queue name will be stranded — they'll never be picked up because the new instance listens on a different key.
  - **The FIFO ordering depends on `lpush` + `brpop` together:** If you change `lpush` to `rpush`, you'll get LIFO (last in, first out) ordering. Change both or neither.
  - **Timeout value on `brpop`:** If you increase the timeout, `stop()` takes longer to take effect. If you decrease it to 0, `brpop` blocks forever — your process will never stop cleanly.
tips:
  - "Always specify the audience — an explanation for a junior engineer is very different from one for a product manager. The code is the same; the explanation must meet the reader where they are."
  - "Ask about specific questions you have — the more targeted your questions, the more targeted the explanation."
  - "After reading the explanation, ask a follow-up: 'How would I write a test for this?' — it deepens your understanding of both the code and its contracts."
  - "If the explanation uses a concept you don't understand, ask for a separate explanation of just that concept before re-reading the full walkthrough."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - refactor-function
  - write-unit-tests
  - readme-draft
  - debug-error-message
tags:
  - code-explanation
  - documentation
  - onboarding
  - engineering
  - learning
---
