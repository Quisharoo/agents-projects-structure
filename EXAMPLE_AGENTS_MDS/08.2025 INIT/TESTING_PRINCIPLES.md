# TESTING_PRINCIPLES.md

## 0) Agent directives (read first)

- Write **small, independent tests** using **AAA (Arrange–Act–Assert)**.
- Use **Jest** + **@testing-library/react** (components) + **Prisma mocking**
- **No `any`** in tests. Keep types strict.
- Prefer **factories + custom matchers**. Only introduce a _fixture class_ for multi-step flows that repeat.
- **Mock only boundaries** (network, clock, random, filesystem). **Do not** mock business logic.
- Tests must be **deterministic** (fake timers, seeded data, fixed timezone).


## 1) Test pyramid (what to test)

- **Integration (API/Server)** – primary layer for business rules and contracts. Test route handlers/server actions with happy and error paths.   
- **Unit (Service Layer)** – business logic in `/lib/*-service.ts`, pure functions, Zod schemas (valid + invalid).   
- **Components** – user-visible behavior and accessibility; avoid implementation details.

## 2) File layout
- **Co-locate** unit/component tests: `thing.ts` ↔ `thing.test.ts`.
- Keep higher-level suites in dedicated folders:

```
__tests__/
  api/        # API integration tests
  components/ # Component tests  
  utils/      # shared test helpers (factories, prisma mocks, utilities)
```

---

## 3) Patterns to use

### 3.1 Factories (preferred)
- Build plain objects with sensible defaults; override per test.
- Prefer deterministic defaults for IDs/timestamps (override when uniqueness matters).

```ts
// __tests__/utils/factories.ts
export const teamFactory = (o: Partial<Team> = {}): Team => ({
  id: o.id ?? 'team_test_id', // override in tests that need uniqueness
  name: o.name ?? 'Default Team',
  createdAt: o.createdAt ?? new Date('2025-01-01T00:00:00Z'),
  updatedAt: o.updatedAt ?? new Date('2025-01-01T00:00:00Z'),
  ...o,
});
```

### 3.2 Custom matchers / domain assertions
- Keep intent readable; avoid over-engineered fixtures when a matcher does the job.

```ts
// __tests__/utils/matchers.ts
export const expectTeam = (t: TeamWithGoals) => ({
  toHaveValidTimestamps() {
    expect(t.createdAt).toBeInstanceOf(Date);
    expect(t.updatedAt.getTime()).toBeGreaterThanOrEqual(t.createdAt.getTime());
  },
  toMatchSchema() {
    const r = TeamWithGoalsSchema.safeParse(t);
    expect(r.success).toBe(true);
  },
});
```

### 3.3 Route handler tests (Next.js App Router)
- Test handlers directly (no server) unless you need middleware/cookies end-to-end.
- Use a tiny helper to set JSON body/headers correctly:

```ts
// __tests__/utils/create-next-request.ts
import { NextRequest } from 'next/server';

export function createNextRequest(
  url: string,
  method: 'GET'|'POST'|'PUT'|'DELETE',
  body?: unknown,
  headers: Record<string,string> = {}
) {
  return new NextRequest(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: { 'content-type': 'application/json', ...headers },
  });
}
```

Example:

```ts
/**
 * @jest-environment node
 */
import { GET, POST } from '@/app/api/teams/route';
import { createNextRequest } from '@/__tests__/utils/create-next-request';

it('lists teams with goal counts', async () => {
  const req = createNextRequest('http://localhost/api/teams', 'GET');
  const res = await GET(req);
  expect(res.status).toBe(200);
  const body = await res.json();
  expect(body.success).toBe(true);
  expect(body.data[0]).toEqual(expect.objectContaining({
    id: expect.any(String),
    name: expect.any(String),
    goalCount: expect.any(Number),
  }));
});

it('creates a team', async () => {
  const req = createNextRequest('http://localhost/api/teams', 'POST', { name: 'New Team' });
  const res = await POST(req);
  expect(res.status).toBe(201);
});
```

### 3.4 Component tests (behavior-first)

```ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('submits valid goal data', async () => {
  const onSubmit = jest.fn();
  render(<TeamGoalForm teamId="t1" onSubmit={onSubmit} onCancel={() => {}} />);

  await userEvent.type(screen.getByLabelText(/goal name/i), 'Availability');
  await userEvent.type(screen.getByLabelText(/target value/i), '100');
  await userEvent.click(screen.getByRole('button', { name: /save goal/i }));

  expect(onSubmit).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'Availability', targetValue: 100, teamId: 't1' })
  );
});
```

### 3.5 Error-path parity

For every happy-path test, add at least one error/edge-case test (validation fails, DB error, empty state, permission denied).

### 3.6 Server actions

- Keep server actions thin; delegate logic to pure functions.    
- Unit test the pure function; add a couple of integration tests for the action wrapper (cookies/headers/redirects).
- When needed, mock Next headers/cookies:

```ts
jest.mock('next/headers', () => ({
  cookies: jest.fn(() => ({ get: jest.fn(), set: jest.fn(), delete: jest.fn() })),
  headers: jest.fn(() => new Headers()),
}));
```


## 4) Mocks + isolation

- **Allowed:** time (`jest.useFakeTimers()`), randomness (`jest.spyOn(Math, 'random').mockReturnValue(0.42)`), filesystem, `process.env`.
- **Database Mocking:** Use Jest mocks for Prisma client (configured in `jest.setup.ts`) for fast, reliable API tests.
- **Avoid:** mocking internal services/logic; prefer testing through public interfaces.

**Timers/spies hygiene:**

```ts
afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
  jest.restoreAllMocks();
});
```

**Prisma mocking setup** (in `jest.setup.ts`):

```ts
// Mock Prisma client for consistent testing
jest.mock('@/lib/db', () => ({
  prisma: {
    team: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    // ... other models
  }
}));
```

**Deterministic test data:**

```ts
jest.useFakeTimers();
jest.setSystemTime(new Date('2025-01-01T00:00:00Z'));
```

---

## 5) Schema contracts (Zod)

```ts
it('rejects goal with negative target', () => {
  const invalid = { name: 'X', targetValue: -1, teamId: 't1' };
  const r = GoalSchema.safeParse(invalid);
  expect(r.success).toBe(false);
  expect(r.error?.issues.map(i => i.path.join('.')))
    .toEqual(expect.arrayContaining(['targetValue']));
});
```

---

## 6) Determinism

- Use fake timers + fixed system time; reset after tests.
- Set a fixed timezone for tests (e.g., `TZ=UTC` in `package.json` scripts).
- Mock `crypto.randomUUID` / `Math.random` where IDs appear in assertions:

```ts
beforeAll(() => {
  jest.spyOn(crypto, 'randomUUID' as any).mockReturnValue('00000000-0000-0000-0000-000000000000');
  jest.spyOn(Math, 'random').mockReturnValue(0.42);
});
```

- Avoid asserting raw `Date.now()`/random values; inject or mock them.
    

---

## 7) Coverage (risk-based)

**Note:** Coverage thresholds are for guidance only and not enforced in CI to avoid blocking development. Focus on meaningful tests over coverage metrics.

Current approach: Coverage reporting is enabled but thresholds are not enforced. This allows for rapid development while maintaining visibility into test coverage.

### 7.1 Environment management
- Use a dedicated **`env.ts`**. Never read `.env.local` in tests.
- Fail fast if required env vars are missing:
    

```ts
const required = ['DATABASE_URL'];
for (const v of required) {
  if (!process.env[v]) throw new Error(`Missing env var in tests: ${v}`);
}
```

---

## 8) CI integration

- `npm test` locally and in CI.
- `npm test -- --coverage` to enforce thresholds.
- Run DB-heavy suites **serially** where needed: `jest --runInBand` (or split jobs).
- Suggested split:
    - `test:unit` – fast, parallel
    - `test:api` – serial (route handlers with mocked Prisma)        
- Fail CI on:
    - Unhandled promise rejections
    - Leaked timers/handles

## 9) Maintenance rules

- Keep tests **independent** (no inter-test coupling).    
- Extract common setup into **helpers** (factories, utilities).
- Update tests when requirements change; delete obsolete tests.
- Treat flaky tests as **bugs**—fix or remove immediately.
- Ban `it.only` / `describe.only` in CI (lint or pre-commit hook).
- Prefer accessible selectors (`getByRole`, labels, text); avoid brittle selectors.
- Use `findBy*` / `waitFor` for async UI; avoid manual `act` unless necessary.
- Only `skip` with a short rationale + issue link (temporary).

---

## 10) What not to test (avoid fake coverage)

- **Do not test framework/library internals.** We don’t write tests to prove React, Next.js, Prisma, Zod, Fetch, or date-fns work.    
- **Test our integration, not their behavior.**
    - _Next.js:_ test **our** route handlers/server actions (inputs → outputs, error mapping), not router/middleware defaults.
    - _React:_ test **user-visible behavior and accessibility**, not `useState`/implementation details.
    - _Prisma:_ prefer integration tests with a test DB; don’t unit-test Prisma’s query engine. Verify **our** mapping, transactions, error handling.
    - _Zod:_ test **our schema rules** (domain constraints, error paths), not Zod mechanics.
- **No “fake coverage” anti-patterns:**
    - Snapshotting large UI/JSON just to bump coverage.
    - Duplicating the same assertion at multiple layers (unit + integration) without added value.
    - Tests that merely assert “file/function exists” or restate TypeScript’s job (don’t test types; the compiler already does).
- **Do not test styling specifics** (class names, Tailwind utilities). Assert visible behavior and accessibility instead.
- **Minimal smokes allowed:** tiny sanity checks that the app boots with current config / env setup—keep purposeful and stable.