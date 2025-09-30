# Testing Principles – [YOUR_PROJECT_NAME]

## 0) Agent Directives (Read First)

**Universal testing principles that apply to all projects:**

- Write **small, independent tests** using **AAA (Arrange–Act–Assert)** pattern
- Use **[YOUR_TEST_FRAMEWORK]** - e.g., Jest, Pytest, Go test, RSpec
- **No `any`** in tests (if using TypeScript). Keep types strict in all languages
- Prefer **factories + custom matchers**. Only introduce fixture classes for multi-step flows that repeat
- **Mock only boundaries** (network, clock, random, filesystem). **Do not** mock business logic
- Tests must be **deterministic** (fake timers, seeded data, fixed timezone)
- Ship tests with features: unit, integration, and component tests are authored in the same PR as implementation
- Only use separate tasks for cross-cutting coverage consolidation or deflaking

---

## 1) Test Pyramid (What to Test)

**Universal principle: More unit tests, fewer integration tests, minimal E2E tests**

### Integration Tests (Primary Layer for Contracts)
- Test API endpoints / route handlers / controllers
- Test server actions and workflows
- Verify happy paths and error scenarios
- Test business rules through public interfaces

### Unit Tests (Business Logic)
- Test service layer (`/lib/*-service.*`, `/services/*`)
- Test pure functions and utilities
- Test validation schemas (valid + invalid inputs)
- Test calculations and transformations

### Component Tests (UI - if applicable)
- Test user-visible behavior and accessibility
- Avoid testing implementation details
- Focus on interactions and state changes

---

## 2) File Layout

**Universal principle: Tests close to code, shared utilities centralized**

- **Co-locate** unit tests with code: `service.ts` ↔ `service.test.ts`
- Keep higher-level test suites in dedicated folders:

```
[test-directory]/
  integration/        # API/endpoint integration tests
  components/         # Component tests (if applicable)
  e2e/               # End-to-end tests (if applicable)
  utils/             # Shared test helpers (factories, mocks, utilities)
    factories.ts     # Test data factories
    matchers.ts      # Custom assertions
    setup.ts         # Test environment setup
```

**Framework-specific examples:**
- Jest: `__tests__/`
- Pytest: `tests/`
- Go: `*_test.go` files alongside source
- RSpec: `spec/`

---

## 3) Patterns to Use

### 3.1 Factories (Preferred Pattern - Universal)

Build plain objects with sensible defaults; override per test.

**Benefits:**
- Reduce test brittleness
- Make tests readable
- Easy to maintain
- Deterministic by default

```typescript
// TypeScript/JavaScript example
export const userFactory = (overrides: Partial<User> = {}): User => ({
  id: overrides.id ?? 'user_test_id',
  email: overrides.email ?? 'test@example.com',
  name: overrides.name ?? 'Test User',
  createdAt: overrides.createdAt ?? new Date('2025-01-01T00:00:00Z'),
  ...overrides,
});
```

```python
# Python example
def user_factory(**overrides):
    defaults = {
        'id': 'user_test_id',
        'email': 'test@example.com',
        'name': 'Test User',
        'created_at': datetime(2025, 1, 1, 0, 0, 0, tzinfo=timezone.utc)
    }
    return User(**{**defaults, **overrides})
```

```go
// Go example
func UserFactory(overrides ...func(*User)) User {
    user := User{
        ID:        "user_test_id",
        Email:     "test@example.com",
        Name:      "Test User",
        CreatedAt: time.Date(2025, 1, 1, 0, 0, 0, 0, time.UTC),
    }
    for _, override := range overrides {
        override(&user)
    }
    return user
}
```

### 3.2 Custom Matchers / Domain Assertions (Universal)

Keep test intent readable; avoid over-engineered fixtures.

```typescript
// TypeScript example
export const expectUser = (u: User) => ({
  toHaveValidTimestamps() {
    expect(u.createdAt).toBeInstanceOf(Date);
    expect(u.updatedAt.getTime()).toBeGreaterThanOrEqual(u.createdAt.getTime());
  },
  toMatchSchema() {
    const result = UserSchema.safeParse(u);
    expect(result.success).toBe(true);
  },
});
```

```python
# Python example
class UserAssertions:
    def __init__(self, user):
        self.user = user
    
    def has_valid_timestamps(self):
        assert isinstance(self.user.created_at, datetime)
        assert self.user.updated_at >= self.user.created_at
    
    def matches_schema(self):
        # Use your validation library
        assert validate_user_schema(self.user)
```

### 3.3 API/Route Handler Tests (Framework-Agnostic Principle)

Test handlers directly when possible (faster, more focused).

**Universal AAA pattern:**
```
Arrange: Set up test data and mocks
Act: Call the handler/controller
Assert: Verify response, status codes, side effects
```

**Example (Next.js):**
```typescript
import { GET, POST } from '@/app/api/users/route';
import { createNextRequest } from '@/__tests__/utils/create-next-request';

it('lists users successfully', async () => {
  // Arrange
  const req = createNextRequest('http://localhost/api/users', 'GET');
  
  // Act
  const res = await GET(req);
  
  // Assert
  expect(res.status).toBe(200);
  const body = await res.json();
  expect(body.success).toBe(true);
  expect(Array.isArray(body.data)).toBe(true);
});
```

**Example (Django):**
```python
from django.test import RequestFactory

def test_list_users_success():
    # Arrange
    factory = RequestFactory()
    request = factory.get('/api/users/')
    
    # Act
    response = list_users(request)
    
    # Assert
    assert response.status_code == 200
    data = json.loads(response.content)
    assert data['success'] is True
    assert isinstance(data['data'], list)
```

**Example (Go):**
```go
func TestListUsers(t *testing.T) {
    // Arrange
    req := httptest.NewRequest("GET", "/api/users", nil)
    w := httptest.NewRecorder()
    
    // Act
    ListUsersHandler(w, req)
    
    // Assert
    assert.Equal(t, 200, w.Code)
    var response Response
    json.Unmarshal(w.Body.Bytes(), &response)
    assert.True(t, response.Success)
}
```

### 3.4 Component Tests (UI - Behavior-First, Universal)

**Universal principle: Test what users see and do, not implementation details**

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('submits valid form data', async () => {
  // Arrange
  const onSubmit = jest.fn();
  render(<UserForm onSubmit={onSubmit} onCancel={() => {}} />);

  // Act
  await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
  await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
  await userEvent.click(screen.getByRole('button', { name: /save/i }));

  // Assert
  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'John Doe', email: 'john@example.com' })
  );
});
```

### 3.5 Error-Path Parity (Universal)

**For every happy-path test, add at least one error/edge-case test**

Examples:
- Validation fails
- Database error
- Empty state
- Permission denied
- Network timeout
- Invalid input format

---

## 4) Mocks + Isolation (Universal Principles)

### Allowed Mocks (Boundaries Only)
- **Time**: Fake timers, fixed dates
- **Randomness**: Seeded or mocked random values
- **Network**: HTTP calls, external APIs
- **Filesystem**: File operations
- **Environment**: `process.env` or equivalent

### Database Mocking
- **Preferred**: In-memory database or test database
- **Alternative**: Mock database client for fast unit tests
- **Avoid**: Mocking ORM query methods individually (brittle)

### Avoid Mocking (Internal Logic)
- Your own services/business logic
- Pure functions
- Validation logic
- Internal utilities

### Hygiene (Universal)
```typescript
// TypeScript/Jest
afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
  jest.restoreAllMocks();
});
```

```python
# Python/Pytest
@pytest.fixture(autouse=True)
def reset_mocks():
    yield
    # Reset any mocks/patches
```

```go
// Go
func TestMain(m *testing.M) {
    // Setup
    code := m.Run()
    // Teardown
    os.Exit(code)
}
```

---

## 5) Determinism (Universal Requirement)

**Tests must produce the same results every time**

### Fixed Time
```typescript
// TypeScript
jest.useFakeTimers();
jest.setSystemTime(new Date('2025-01-01T00:00:00Z'));
```

```python
# Python
from freezegun import freeze_time

@freeze_time("2025-01-01 00:00:00")
def test_something():
    pass
```

```go
// Go
func TestWithFixedTime(t *testing.T) {
    now := time.Date(2025, 1, 1, 0, 0, 0, 0, time.UTC)
    // Use now instead of time.Now()
}
```

### Fixed Randomness
```typescript
jest.spyOn(Math, 'random').mockReturnValue(0.42);
jest.spyOn(crypto, 'randomUUID').mockReturnValue('test-uuid-1234');
```

### Fixed Timezone
Set in test configuration:
- `TZ=UTC` in environment
- Framework-specific timezone settings

---

## 6) Schema Contracts (Validation Testing - Universal)

**Test both valid and invalid inputs**

```typescript
// TypeScript with Zod
it('rejects user with invalid email', () => {
  const invalid = { name: 'John', email: 'not-an-email' };
  const result = UserSchema.safeParse(invalid);
  
  expect(result.success).toBe(false);
  expect(result.error?.issues.map(i => i.path.join('.')))
    .toContain('email');
});
```

```python
# Python with Pydantic
def test_rejects_invalid_email():
    with pytest.raises(ValidationError) as exc_info:
        User(name='John', email='not-an-email')
    
    assert 'email' in str(exc_info.value)
```

---

## 7) Coverage (Risk-Based, Universal Guidance)

**Note:** Coverage thresholds are guidance, not hard requirements. Focus on meaningful tests over metrics.

### Recommended Coverage Targets
- **Services/Business Logic**: 80%+ (high value, easy to test)
- **API Routes/Controllers**: All endpoints tested (happy + error paths)
- **Critical User Flows**: 100% (authentication, payments, data loss scenarios)
- **Utilities**: 80%+ (widely used, stable)

### What to Prioritize
1. Business logic with financial/legal impact
2. Security-critical code
3. Data integrity operations
4. Frequently used utilities

### What to Deprioritize
- Simple getters/setters
- Framework boilerplate
- Generated code
- Trivial mappers

---

## 8) CI Integration (Universal)

### Test Execution
- Run all tests on every commit
- Run tests in parallel when possible
- Fail CI on test failures
- Generate coverage reports

### Test Organization
```bash
# Run all tests
[your-test-command]              # e.g., npm test, pytest, go test ./...

# Run specific suites
[unit-tests-command]              # Fast, parallel
[integration-tests-command]       # May need serial execution
[e2e-tests-command]               # Slow, separate job

# Coverage
[coverage-command]                # e.g., npm test -- --coverage, pytest --cov
```

### CI Failures
Fail CI on:
- Test failures
- Unhandled promise rejections / exceptions
- Leaked resources (timers, handles, connections)
- Coverage drops (if enforced)

---

## 9) Maintenance Rules (Universal)

### Test Quality
- Keep tests **independent** (no inter-test coupling)
- Extract common setup into **helpers** (factories, utilities)
- Update tests when requirements change
- Delete obsolete tests immediately
- Treat flaky tests as **bugs**—fix or remove immediately

### Test Readability
- Use descriptive test names: `it('rejects user with invalid email')`
- Follow AAA pattern consistently
- Keep tests focused (one concept per test)
- Avoid test logic complexity

### Forbidden Patterns
- `it.only` / `describe.only` / `fit` / `fdescribe` in committed code (lint/pre-commit hook)
- Skipped tests without issue link and timeline
- Tests that depend on execution order
- Tests that require manual intervention

### UI Testing Best Practices (if applicable)
- Prefer accessible selectors (`getByRole`, `getByLabelText`)
- Avoid brittle selectors (class names, IDs)
- Use `findBy*` / `waitFor` for async UI
- Avoid manual `act()` unless necessary

---

## 10) What NOT to Test (Avoid Fake Coverage)

**Universal anti-patterns that apply to all projects:**

### Do Not Test Framework/Library Internals
We don't write tests to prove frameworks work. Test **our integration**, not **their behavior**.

- **Framework Routing**: Don't test that routes match URLs (framework's job)
- **ORM Query Generation**: Don't test that ORM generates correct SQL
- **HTTP Clients**: Don't test that HTTP library makes requests
- **Date Libraries**: Don't test that date library parses dates
- **Validation Libraries**: Don't test that Zod/Pydantic/etc. validates

### What TO Test (Our Integration)
- **Our route handlers**: Inputs → outputs, error mapping
- **Our ORM usage**: Mapping, transactions, error handling
- **Our API calls**: Error handling, retries, transformations
- **Our date logic**: Business rules using dates
- **Our validation rules**: Domain constraints, custom validators

### Avoid These Anti-Patterns
- ❌ Snapshot testing large UI/JSON just to bump coverage
- ❌ Duplicating assertions at multiple layers without added value
- ❌ Tests that merely assert "file/function exists"
- ❌ Testing that TypeScript types compile (compiler's job)
- ❌ Testing styling specifics (class names, CSS)
- ❌ Trivial getters/setters with no logic

### Allow These Patterns
- ✅ Smoke tests that app boots with current config (minimal, purposeful)
- ✅ Integration tests that verify our code uses framework correctly
- ✅ Schema tests for our domain validation rules

---

## Customization Instructions

To adapt this for your project:

1. **Replace `[YOUR_TEST_FRAMEWORK]`** with your actual testing tools:
   - Jest, Vitest, Mocha (JavaScript/TypeScript)
   - Pytest, unittest (Python)
   - Go test (Go)
   - RSpec, Minitest (Ruby)
   - JUnit, TestNG (Java)

2. **Update commands** in Section 8 with your actual test commands

3. **Add framework-specific patterns** as needed:
   - Component testing libraries
   - Database testing strategies
   - Mock/spy syntax
   - Fixture patterns

4. **Keep all universal principles**:
   - AAA pattern
   - Test pyramid
   - Mock only boundaries
   - Determinism
   - Error-path parity
   - What NOT to test

These principles apply to any well-tested codebase regardless of language or framework.
