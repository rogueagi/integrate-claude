---
title: "Write unit tests for a given function or module"
slug: write-unit-tests
function: engineering
role: coding
description: "Generate comprehensive unit tests for a function or module — covering happy paths, edge cases, error conditions, and boundary values with clear test names and documentation."
useCase: "Use this prompt when you need to write tests quickly, when you're adding tests to legacy code, or when you want to ensure comprehensive coverage before a code review. The generated tests are ready to run — not just skeletons."
prompt: |
  You are a senior software engineer who writes thorough, well-organized unit tests. Write a comprehensive unit test suite for the code described below.

  **Language and test framework:** {{language_framework}} (e.g., Python + pytest, JavaScript + Jest, Go + testing package)
  **Code to test:**
  ```{{language}}
  {{code_to_test}}
  ```
  **What this code does:** {{code_description}}
  **Business rules or constraints to test:** {{business_rules}}
  **Any dependencies to mock:** {{dependencies_to_mock}}
  **Coverage goal:** {{coverage_goal}} (e.g., "100% branch coverage", "all public methods", "critical paths only")

  Write a complete test suite following these guidelines:

  **Test naming convention:**
  Use descriptive test names that state: what is being tested, under what conditions, and what the expected result is.
  Format: `test_[function]_[condition]_[expected_result]`
  Example: `test_calculate_tax_when_income_below_threshold_returns_zero`

  **Test organization:**
  - Group tests by function or behavior being tested
  - Use descriptive class names (if the framework supports it) to group related tests
  - Happy path tests first, then edge cases, then error conditions

  **For each test, include:**
  1. A docstring or comment explaining what the test verifies
  2. Arrange-Act-Assert structure (clearly separated)
  3. Only one logical assertion per test (multiple related assertions are acceptable, but not separate behaviors)
  4. Realistic test data (not just `"test"` and `0`)

  **Coverage areas to include:**
  - Happy path: Normal inputs producing expected outputs
  - Boundary values: Minimum, maximum, empty, zero, one
  - Edge cases: Nulls, empty collections, very large inputs, Unicode, whitespace
  - Error conditions: Invalid inputs, missing required fields, type errors
  - Business rule validation: Each explicit rule should have at least one test
  - Side effects: If the function calls external services, verify they're called correctly

  **Mocking guidelines:**
  - Mock external dependencies (APIs, databases, file system) consistently
  - Use meaningful mock return values that reflect realistic data
  - Test that mocks are called with expected arguments, not just that the function didn't crash

  After the test suite, provide:
  - **Coverage analysis:** What's covered and what intentionally isn't
  - **Missing test scenarios:** Tests that would be valuable but were excluded (and why)
  - **Test maintenance notes:** Anything that will break these tests if the implementation changes
variables:
  - "{{language_framework}}"
  - "{{language}}"
  - "{{code_to_test}}"
  - "{{code_description}}"
  - "{{business_rules}}"
  - "{{dependencies_to_mock}}"
  - "{{coverage_goal}}"
exampleInput: |
  language_framework: Python + pytest
  language: python
  code_to_test: |
    import requests
    from datetime import datetime

    def calculate_invoice_total(line_items: list[dict], customer_id: str, discount_pct: float = 0.0) -> dict:
        """Calculate invoice total with optional discount.

        Args:
            line_items: List of dicts with 'quantity' and 'unit_price' keys
            customer_id: Customer ID to fetch tax rate from API
            discount_pct: Discount percentage 0–100 (default 0)

        Returns:
            Dict with subtotal, discount, tax, and total.

        Raises:
            ValueError: If discount_pct is not between 0 and 100
            ValueError: If any line item has negative quantity or price
        """
        if not 0 <= discount_pct <= 100:
            raise ValueError(f"discount_pct must be 0-100, got {discount_pct}")

        for item in line_items:
            if item['quantity'] < 0 or item['unit_price'] < 0:
                raise ValueError("Line items cannot have negative quantity or price")

        subtotal = sum(item['quantity'] * item['unit_price'] for item in line_items)
        discount_amount = subtotal * (discount_pct / 100)
        discounted = subtotal - discount_amount

        resp = requests.get(f"https://api.example.com/customers/{customer_id}/tax_rate")
        tax_rate = resp.json()['tax_rate']
        tax_amount = discounted * tax_rate

        return {
            "subtotal": round(subtotal, 2),
            "discount": round(discount_amount, 2),
            "tax": round(tax_amount, 2),
            "total": round(discounted + tax_amount, 2),
            "calculated_at": datetime.utcnow().isoformat()
        }
  code_description: Calculates invoice totals from line items, fetches the customer's tax rate from an external API, and applies an optional discount
  business_rules: Discount must be 0-100%. No negative quantities or prices. Tax is applied after discount. Subtotal = sum of (qty * price). Total = (subtotal - discount) + tax. Values rounded to 2 decimal places.
  dependencies_to_mock: requests.get (external tax rate API)
  coverage_goal: 100% branch coverage on the main function
exampleOutput: |
  ```python
  import pytest
  from decimal import Decimal
  from unittest.mock import patch, Mock
  from invoice import calculate_invoice_total


  # ─── Fixtures ──────────────────────────────────────────────────────────────────

  @pytest.fixture
  def standard_line_items():
      """Standard line items for use across multiple tests."""
      return [
          {"quantity": 2, "unit_price": 50.00},  # $100
          {"quantity": 1, "unit_price": 25.00},  # $25
      ]  # subtotal = $125


  @pytest.fixture
  def mock_tax_api():
      """Mock the tax rate API to return a fixed rate."""
      with patch("invoice.requests.get") as mock_get:
          mock_response = Mock()
          mock_response.json.return_value = {"tax_rate": 0.10}  # 10%
          mock_get.return_value = mock_response
          yield mock_get


  # ─── Happy Path ────────────────────────────────────────────────────────────────

  class TestCalculateInvoiceTotalHappyPath:

      def test_standard_items_no_discount_returns_correct_totals(
          self, standard_line_items, mock_tax_api
      ):
          """Standard invoice with no discount: subtotal=$125, tax=10%, total=$137.50."""
          result = calculate_invoice_total(standard_line_items, "cust_123")

          assert result["subtotal"] == 125.00
          assert result["discount"] == 0.00
          assert result["tax"] == 12.50
          assert result["total"] == 137.50

      def test_discount_applied_before_tax(self, standard_line_items, mock_tax_api):
          """20% discount reduces subtotal before tax is calculated."""
          result = calculate_invoice_total(standard_line_items, "cust_123", discount_pct=20.0)

          # subtotal=125, discount=25, discounted=100, tax=10 (10% of 100), total=110
          assert result["subtotal"] == 125.00
          assert result["discount"] == 25.00
          assert result["tax"] == 10.00
          assert result["total"] == 110.00

      def test_values_rounded_to_two_decimal_places(self, mock_tax_api):
          """Values with fractional cents are rounded to 2 decimal places."""
          items = [{"quantity": 3, "unit_price": 0.10}]  # subtotal = 0.30
          mock_tax_api.return_value.json.return_value = {"tax_rate": 0.0833}
          result = calculate_invoice_total(items, "cust_123")
          # Verify values are rounded, not truncated
          assert result["subtotal"] == 0.30
          assert len(str(result["tax"]).split(".")[-1]) <= 2

      def test_tax_api_called_with_correct_customer_id(
          self, standard_line_items, mock_tax_api
      ):
          """Verifies the correct customer ID is used in the API call."""
          calculate_invoice_total(standard_line_items, "cust_abc_123")
          mock_tax_api.assert_called_once_with(
              "https://api.example.com/customers/cust_abc_123/tax_rate"
          )

      def test_result_includes_calculated_at_timestamp(
          self, standard_line_items, mock_tax_api
      ):
          """Result includes an ISO-format timestamp."""
          result = calculate_invoice_total(standard_line_items, "cust_123")
          assert "calculated_at" in result
          # Should be a valid ISO format string
          from datetime import datetime
          datetime.fromisoformat(result["calculated_at"])  # raises if invalid


  # ─── Boundary Values ───────────────────────────────────────────────────────────

  class TestCalculateInvoiceTotalBoundaryValues:

      def test_single_line_item(self, mock_tax_api):
          """Invoice with a single item processes correctly."""
          items = [{"quantity": 1, "unit_price": 100.00}]
          result = calculate_invoice_total(items, "cust_123")
          assert result["subtotal"] == 100.00

      def test_zero_discount_is_valid(self, standard_line_items, mock_tax_api):
          """discount_pct=0 is a valid input (the default)."""
          result = calculate_invoice_total(standard_line_items, "cust_123", discount_pct=0)
          assert result["discount"] == 0.00

      def test_hundred_percent_discount_is_valid(self, standard_line_items, mock_tax_api):
          """discount_pct=100 means subtotal minus all discount = $0 before tax."""
          result = calculate_invoice_total(standard_line_items, "cust_123", discount_pct=100)
          assert result["discount"] == 125.00
          assert result["total"] == 0.00

      def test_zero_unit_price_is_valid(self, mock_tax_api):
          """Zero price items (free line items) are allowed."""
          items = [{"quantity": 5, "unit_price": 0.00}]
          result = calculate_invoice_total(items, "cust_123")
          assert result["subtotal"] == 0.00

      def test_zero_quantity_is_valid(self, mock_tax_api):
          """Zero quantity is allowed (item on order but not delivered)."""
          items = [{"quantity": 0, "unit_price": 50.00}]
          result = calculate_invoice_total(items, "cust_123")
          assert result["subtotal"] == 0.00

      def test_empty_line_items_returns_zero_totals(self, mock_tax_api):
          """Empty line items list results in zero totals."""
          result = calculate_invoice_total([], "cust_123")
          assert result["subtotal"] == 0.00
          assert result["total"] == 0.00


  # ─── Error Conditions ──────────────────────────────────────────────────────────

  class TestCalculateInvoiceTotalValidation:

      def test_discount_above_100_raises_value_error(self, standard_line_items):
          """discount_pct > 100 is invalid and raises ValueError."""
          with pytest.raises(ValueError, match="discount_pct must be 0-100"):
              calculate_invoice_total(standard_line_items, "cust_123", discount_pct=101)

      def test_negative_discount_raises_value_error(self, standard_line_items):
          """Negative discount_pct is invalid and raises ValueError."""
          with pytest.raises(ValueError):
              calculate_invoice_total(standard_line_items, "cust_123", discount_pct=-1)

      def test_negative_quantity_raises_value_error(self, mock_tax_api):
          """Line item with negative quantity raises ValueError."""
          items = [{"quantity": -1, "unit_price": 10.00}]
          with pytest.raises(ValueError, match="negative"):
              calculate_invoice_total(items, "cust_123")

      def test_negative_unit_price_raises_value_error(self, mock_tax_api):
          """Line item with negative unit_price raises ValueError."""
          items = [{"quantity": 1, "unit_price": -10.00}]
          with pytest.raises(ValueError, match="negative"):
              calculate_invoice_total(items, "cust_123")
  ```

  ## Coverage Analysis
  **Covered:** All explicit business rules, all branches (discount_pct validation, negative item validation), happy path, boundaries, error conditions. API mock verifies correct URL construction.

  **Not covered intentionally:**
  - API timeout or network error — would require testing error propagation strategy (raise vs. default rate); this is a separate concern
  - Floating-point precision edge cases beyond 2 decimal places — implementation uses `round()`, which is an accepted trade-off
  - Concurrent calls — not applicable to this function

  ## Test Maintenance Notes
  - If the API endpoint URL changes, `test_tax_api_called_with_correct_customer_id` will break
  - If `calculated_at` is removed from the response, `test_result_includes_calculated_at_timestamp` will fail
  - Tests don't test the `datetime` value itself (only that it's valid ISO format) — this is intentional to avoid time-dependent flakiness
tips:
  - "Descriptive test names are worth more than comments — a test named `test_discount_applied_before_tax` tells you what failed without reading the test body."
  - "Mock external dependencies at the boundary (the `requests.get` call), not inside your business logic. This makes tests fast and deterministic."
  - "Write the tests before you write the refactor — failing tests against the original code are your safety net."
  - "Fixtures for test data prevent duplication and make tests easier to read. If you're copying the same dict into 10 tests, it's time for a fixture."
complexity: intermediate
modelRecommendation: claude-sonnet-4-6
relatedSlugs:
  - refactor-function
  - debug-error-message
  - code-explain
  - pr-review-checklist
tags:
  - testing
  - unit-tests
  - engineering
  - code-quality
  - tdd
---
