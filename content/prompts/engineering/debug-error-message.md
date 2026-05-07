---
title: "Diagnose and fix an error message with context"
slug: debug-error-message
function: engineering
role: coding
description: "Systematically diagnose an error message by analyzing the stack trace, context, and code — and produce a root cause explanation with a concrete fix."
useCase: "Use this prompt when you're staring at an error message and can't figure out why it's happening. Paste the error, the relevant code, and any context about when it occurs — and get a structured diagnosis with an explanation you can actually learn from."
prompt: |
  You are a senior software engineer and debugging expert. Diagnose the error described below and provide a clear explanation and fix.

  **Error message / stack trace:**
  ```
  {{error_message}}
  ```

  **Language and framework:** {{language_framework}}

  **Relevant code:**
  ```{{language}}
  {{code_snippet}}
  ```

  **Context — when does this error occur:** {{error_context}}

  **What I've already tried:** {{already_tried}}

  **Environment details:** {{environment}} (OS, runtime version, dependency versions if relevant)

  Diagnose this error using this structure:

  ## 1. Error Interpretation
  Translate the error message into plain English. What is the runtime or compiler actually telling you? Break down each part of the stack trace or error message and explain what it means.

  ## 2. Root Cause Analysis
  Identify the root cause of the error. Distinguish between:
  - **Immediate cause:** The specific line or condition that triggers the error
  - **Root cause:** The underlying reason why that condition exists
  - **Contributing factors:** Environmental, dependency, or configuration factors that contributed

  ## 3. The Fix
  Provide the corrected code with:
  - The specific change(s) required
  - A brief explanation of why each change fixes the problem
  - Any edge cases the fix introduces or must handle

  ```{{language}}
  [Fixed code here]
  ```

  ## 4. Why This Happened
  A brief explanation of the underlying concept or common mistake pattern that caused this error. This helps prevent the same error in the future.

  ## 5. Prevention
  What could prevent this error from recurring?
  - Code patterns to use (or avoid)
  - Tests to write
  - Linting rules or static analysis that would catch this
  - Documentation or comments to add

  ## 6. If the Fix Doesn't Work
  List 2–3 alternative explanations and what to check if the primary fix doesn't resolve the issue.
variables:
  - "{{error_message}}"
  - "{{language_framework}}"
  - "{{language}}"
  - "{{code_snippet}}"
  - "{{error_context}}"
  - "{{already_tried}}"
  - "{{environment}}"
exampleInput: |
  error_message: |
    TypeError: Cannot read properties of undefined (reading 'map')
        at SurveyResults (SurveyResults.jsx:24:29)
        at renderWithHooks (react-dom.development.js:14985:18)
        at mountIndeterminateComponent (react-dom.development.js:17811:13)
  language_framework: JavaScript / React 18
  language: jsx
  code_snippet: |
    function SurveyResults({ surveyId }) {
      const [results, setResults] = useState();

      useEffect(() => {
        fetch(`/api/surveys/${surveyId}/results`)
          .then(res => res.json())
          .then(data => setResults(data));
      }, [surveyId]);

      return (
        <div>
          {results.responses.map(response => (
            <ResponseCard key={response.id} response={response} />
          ))}
        </div>
      );
    }
  error_context: Happens when the component first mounts, before the API call completes. Works fine after the data loads.
  already_tried: Added console.log to verify the API is returning data — it is, but only after a delay.
  environment: Node 20, React 18.2, browser Chrome 120
exampleOutput: |
  ## 1. Error Interpretation
  `TypeError: Cannot read properties of undefined (reading 'map')` means JavaScript tried to call `.map()` on a value that is `undefined`. The stack trace points to `SurveyResults.jsx:24` — which is the line `results.responses.map(...)`.

  The call chain shows this happened inside React's rendering process, confirming this is a render-time error, not an async error.

  ## 2. Root Cause Analysis
  - **Immediate cause:** `results` is `undefined` when the component first renders, so `results.responses` throws before `.map()` is even reached.
  - **Root cause:** `useState()` is called without an initial value, so `results` starts as `undefined`. React renders the component before the `useEffect` fetch completes, so the first render always happens with `results = undefined`.
  - **Contributing factor:** There's no null/undefined guard before accessing `results.responses`.

  ## 3. The Fix

  ```jsx
  function SurveyResults({ surveyId }) {
    const [results, setResults] = useState(null); // or useState({ responses: [] })

    useEffect(() => {
      fetch(`/api/surveys/${surveyId}/results`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, [surveyId]);

    // Guard: render loading state while data is not yet available
    if (!results) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {results.responses.map(response => (
          <ResponseCard key={response.id} response={response} />
        ))}
      </div>
    );
  }
  ```

  **Why this fixes it:** The `if (!results)` guard prevents the render from reaching `results.responses.map()` before data is available. Setting `useState(null)` makes the initial "no data" state explicit and distinguishable from an empty result set.

  ## 4. Why This Happened
  This is one of the most common React bugs — "async data accessed before it arrives." React renders components synchronously, but data fetching is asynchronous. The component always renders at least once before any `useEffect` runs. Any code that accesses fetched data must account for the initial render when that data doesn't exist yet.

  ## 5. Prevention
  - **Always initialize state:** Use `useState(null)` or `useState([])` with a meaningful default. `useState()` (no argument) is a footgun.
  - **Always guard before accessing nested properties:** `results?.responses?.map(...)` (optional chaining) prevents the TypeError even if the guard is missed.
  - **Add an error state:** Consider also handling fetch errors — what should render if the API fails?
  - **TypeScript:** A TypeScript return type like `SurveyResultsData | null` would have caught this at compile time.

  ## 6. If the Fix Doesn't Work
  1. **The API response structure is different than expected:** Add `console.log(data)` inside the `.then()` to confirm `data.responses` actually exists in the response.
  2. **Race condition with surveyId change:** If `surveyId` prop changes rapidly, multiple fetches may be in flight. Add a cleanup function to the useEffect to abort previous requests.
  3. **results.responses is itself undefined:** Even with results loading correctly, if `responses` key doesn't exist in the API response, you'll get the same error on `results.responses`. Add a fallback: `(results.responses ?? []).map(...)`.
tips:
  - "Paste the full stack trace, not just the error message — the line numbers and call stack are often more useful than the error text itself."
  - "Include the exact versions of your language/framework/dependencies. Many errors are version-specific bugs or breaking changes."
  - "After getting the fix, ask Claude to explain why the error happened in your own mental model terms — the explanation teaches you the pattern so you recognize it next time."
  - "If the fix doesn't work, paste the new error back in and iterate — debugging is rarely a single-step process."
complexity: beginner
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - refactor-function
  - code-explain
  - write-unit-tests
  - security-review
tags:
  - debugging
  - error-handling
  - coding
  - javascript
  - engineering
---
