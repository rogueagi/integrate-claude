---
title: "Refactor a function for readability and performance"
slug: refactor-function
function: engineering
role: coding
description: "Analyze a function or module and produce a refactored version that improves readability, reduces complexity, and addresses performance issues — with a full explanation of every change."
useCase: "Use this prompt when you have code that works but is hard to read, maintain, or extend — or when a code review has flagged issues you're not sure how to address. Works best when you provide context about what the code does and any constraints on the refactor."
prompt: |
  You are a senior software engineer specializing in code quality and refactoring. Analyze and refactor the code below.

  **Language:** {{language}}
  **What this code does:** {{code_description}}
  **Known issues (if any):** {{known_issues}}
  **Refactoring goals:** {{refactoring_goals}} (e.g., readability, performance, testability, reducing complexity)
  **Constraints:** {{constraints}} (e.g., must not change public API, must remain synchronous, no new dependencies)

  **Original code:**
  ```{{language}}
  {{original_code}}
  ```

  Provide a complete refactoring with this structure:

  ## 1. Code Analysis
  Before showing any changes, analyze the original code:
  - **What it does well:** At least 1–2 genuine strengths to preserve
  - **Issues identified:**
    - Readability issues (naming, structure, comments)
    - Performance issues (unnecessary loops, redundant operations, memory usage)
    - Maintainability issues (too many responsibilities, hidden coupling, magic numbers)
    - Error handling gaps
    - Testability issues
  - **Complexity assessment:** Cyclomatic complexity, nesting depth, function length

  ## 2. Refactoring Plan
  Before showing code, describe the changes planned:
  - What will change and why
  - What will be preserved and why
  - Any trade-offs in the refactoring approach

  ## 3. Refactored Code
  ```{{language}}
  [Full refactored code with inline comments explaining non-obvious choices]
  ```

  ## 4. Change-by-Change Explanation
  For every meaningful change made, explain:
  - What changed
  - Why this is better
  - Any trade-offs or considerations

  ## 5. Performance Impact
  If performance improvements were made:
  - The before/after complexity (Big O if applicable)
  - What conditions make the improvement significant
  - Any benchmarking approach to verify the improvement

  ## 6. Testing Recommendations
  - What test cases should be written or updated?
  - Any edge cases the refactored code handles differently?
  - Suggested test structure

  ## 7. Further Improvements (If Going Deeper)
  Optional suggestions for a deeper refactor that were intentionally excluded from this pass to maintain scope.
variables:
  - "{{language}}"
  - "{{code_description}}"
  - "{{known_issues}}"
  - "{{refactoring_goals}}"
  - "{{constraints}}"
  - "{{original_code}}"
exampleInput: |
  language: Python
  code_description: Processes a list of user records from a CSV export, filters active users, enriches each with data from an external API, and returns a formatted report dictionary
  known_issues: It's very slow on large datasets, hard to test because of the API calls, and a colleague said it's "spaghetti"
  refactoring_goals: readability, testability, performance on large datasets (10K+ records)
  constraints: must return the same dict structure, no new third-party libraries (only stdlib + requests which we already use)
  original_code: |
    def process_users(file_path):
        import csv
        result = {}
        f = open(file_path)
        reader = csv.DictReader(f)
        rows = []
        for row in reader:
            rows.append(row)
        f.close()
        active = []
        for r in rows:
            if r['status'] == 'active':
                active.append(r)
        for user in active:
            import requests
            resp = requests.get('https://api.example.com/users/' + user['id'])
            data = resp.json()
            if resp.status_code == 200:
                user['plan'] = data['plan']
                user['mrr'] = data['mrr']
            else:
                user['plan'] = 'unknown'
                user['mrr'] = 0
        final = {}
        for u in active:
            final[u['id']] = {'name': u['name'], 'email': u['email'], 'plan': u['plan'], 'mrr': u['mrr'], 'status': u['status']}
        return final
exampleOutput: |
  ## 1. Code Analysis

  **Strengths:**
  - Logic is clear in intent — filter, enrich, format
  - Returns a useful dict structure

  **Issues:**
  - `import` statements inside the function (imports at module top is PEP 8 convention)
  - File opened without `with` statement — will leak the file handle if an exception occurs
  - Sequential API calls in a loop — N API calls take O(N) time with no parallelism
  - No error handling if `resp.json()` fails (e.g., non-JSON response)
  - Unclear variable names (`r`, `u`, `f`) — hard to follow
  - All logic in one function — impossible to test the API call, parsing, and formatting independently
  - Loading all rows into memory before filtering — wasteful on large files

  **Complexity:** High. Single function with 4 distinct responsibilities: read CSV, filter, enrich via API, format output.

  ## 2. Refactoring Plan
  - Extract 4 separate functions (single responsibility)
  - Use `with` for file handling
  - Filter during CSV iteration (don't build full list then filter)
  - Make the API call injectable for testability
  - Add proper error handling with logging
  - Preserve the exact return dict structure

  ## 3. Refactored Code

  ```python
  import csv
  import logging
  from typing import Callable, Iterator
  import requests

  logger = logging.getLogger(__name__)

  # Type alias for the API fetch function — makes this injectable/testable
  ApiFetcher = Callable[[str], dict]


  def _read_active_users(file_path: str) -> Iterator[dict]:
      """Yield active user rows from a CSV file without loading all into memory."""
      with open(file_path, newline="") as f:
          for row in csv.DictReader(f):
              if row["status"] == "active":
                  yield row


  def _fetch_user_enrichment(user_id: str, fetcher: ApiFetcher) -> dict:
      """Fetch plan and MRR for a user from the external API.

      Returns defaults on any failure to keep the pipeline moving.
      """
      try:
          data = fetcher(user_id)
          return {"plan": data["plan"], "mrr": data["mrr"]}
      except Exception as exc:
          logger.warning("Failed to enrich user %s: %s", user_id, exc)
          return {"plan": "unknown", "mrr": 0}


  def _default_api_fetcher(user_id: str) -> dict:
      """Production API fetcher. Raises on non-200 responses."""
      resp = requests.get(
          f"https://api.example.com/users/{user_id}", timeout=5
      )
      resp.raise_for_status()
      return resp.json()


  def _format_user_record(user: dict, enrichment: dict) -> dict:
      """Build the final output record for a single user."""
      return {
          "name": user["name"],
          "email": user["email"],
          "plan": enrichment["plan"],
          "mrr": enrichment["mrr"],
          "status": user["status"],
      }


  def process_users(
      file_path: str,
      fetcher: ApiFetcher = _default_api_fetcher,
  ) -> dict:
      """Process active users from a CSV and enrich with external API data.

      Args:
          file_path: Path to the CSV export file.
          fetcher: Callable that takes a user_id and returns enrichment data.
                   Defaults to the production API. Override in tests.

      Returns:
          Dict mapping user_id -> formatted user record.
      """
      result = {}
      for user in _read_active_users(file_path):
          enrichment = _fetch_user_enrichment(user["id"], fetcher)
          result[user["id"]] = _format_user_record(user, enrichment)
      return result
  ```

  ## 4. Change Explanations

  **Moved imports to module level:** Following PEP 8; imports inside functions re-execute on every call and slow startup in some contexts.

  **`with open(...)` for file handling:** Guarantees the file is closed even if an exception occurs mid-read.

  **Generator instead of list (`yield`):** `_read_active_users` now yields rows as they're read, filtering inline. For a 10K-row CSV, we never hold 10K rows in memory simultaneously.

  **Injected `fetcher` function:** By accepting `fetcher: ApiFetcher = _default_api_fetcher`, you can pass a mock in tests: `process_users(path, fetcher=lambda uid: {"plan": "pro", "mrr": 100})`. No patching required.

  **`try/except` with logging in `_fetch_user_enrichment`:** `raise_for_status()` raises on 4xx/5xx; `resp.json()` raises on non-JSON. Either way, we log and return defaults rather than crashing the whole pipeline.

  **Type hints:** `ApiFetcher = Callable[[str], dict]` makes the contract explicit at a glance.

  ## 5. Performance Impact
  - **Memory:** Was O(N) memory for all rows; now O(1) — we process one row at a time via generator.
  - **Speed:** API calls are still sequential — for 10K+ users, consider `concurrent.futures.ThreadPoolExecutor` for parallel requests (excluded per no-new-dependencies constraint, but `ThreadPoolExecutor` is stdlib).
  - **File I/O:** Single-pass CSV reading; previously: full read, then filter.

  ## 6. Testing Recommendations
  ```python
  def test_process_users_filters_inactive(tmp_path):
      csv_content = "id,name,email,status\n1,Alice,a@x.com,active\n2,Bob,b@x.com,inactive"
      f = tmp_path / "users.csv"
      f.write_text(csv_content)
      mock_fetcher = lambda uid: {"plan": "pro", "mrr": 99}
      result = process_users(str(f), fetcher=mock_fetcher)
      assert "1" in result
      assert "2" not in result  # inactive user excluded

  def test_process_users_handles_api_failure(tmp_path):
      # API failure should return defaults, not raise
      def failing_fetcher(uid):
          raise requests.RequestException("timeout")
      ...
      result = process_users(str(f), fetcher=failing_fetcher)
      assert result["1"]["plan"] == "unknown"
      assert result["1"]["mrr"] == 0
  ```

  ## 7. Further Improvements
  - **Parallel API calls:** Use `ThreadPoolExecutor` with `max_workers=20` to fetch enrichments concurrently — would reduce 10K calls from ~100 seconds to ~5 seconds.
  - **Batch API endpoint:** If the API supports batch lookups (`/users?ids=1,2,3`), rework `_fetch_user_enrichment` to batch in chunks of 100.
  - **Streaming CSV:** For files >1GB, consider `pandas` with `chunksize` parameter for memory-efficient processing.
tips:
  - "Describe what the code does as well as what's wrong — 'this processes invoices' gives the refactoring meaningful context that 'this code is bad' doesn't."
  - "Specify your constraints clearly — 'no new dependencies' and 'must not change the public API' are the constraints that most affect refactoring decisions."
  - "Ask for the change-by-change explanation, then use it in your PR description — it saves you writing the rationale yourself."
  - "After refactoring, paste the new code back in and ask for a code review — fresh eyes often catch things the refactoring introduced."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - debug-error-message
  - write-unit-tests
  - code-explain
  - review-feedback-draft
  - performance-review
tags:
  - refactoring
  - code-quality
  - engineering
  - clean-code
  - performance
---
