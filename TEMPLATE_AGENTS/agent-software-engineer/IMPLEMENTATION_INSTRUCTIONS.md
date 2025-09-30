# Implementation Instructions – [YOUR_PROJECT_NAME]

This file defines how AI agents should handle **production implementation** tasks for your project.

---

## When to Use This Mode

Use **Delivery/Implementation Mode** when:
- Requirements are **clear** and feature is ready for production implementation
- Feature has been validated (through prototyping or clear specifications)
- Goal is to deliver production-ready, maintainable code
- Task is marked as "Feature", "Bug Fix", or "Improvement"

---

## Core Principles (Universal)

### Production Quality
- Code must be robust, tested, and maintainable
- Handle all error cases and edge conditions
- Consider security implications
- Plan for future extensibility

### Architectural Compliance
- Follow all established patterns and standards from `agents/ARCHITECTURE.md`
- Extract business logic to service layer
- Maintain separation of concerns
- Use consistent naming and structure

### Extensibility
- Design for future modifications and growth
- Avoid tight coupling
- Use clear interfaces
- Document complex decisions

### Clean Code
- Readable: Clear variable and function names
- Well-structured: Organized into logical units
- Documented: Complex logic explained
- Maintainable: Easy for future developers to modify

### Comprehensive Testing
- Unit tests for business logic
- Integration tests for API routes/controllers
- Component tests for UI (where applicable)
- All tests must pass before completion

---

## Required Reading

**Before starting any implementation task, review:**

- `agents/ARCHITECTURE.md` - System architecture and patterns
- `agents/TESTING_PRINCIPLES.md` - Testing standards and practices
- `agents/DEVELOPMENT_WORKFLOW.md` - Development process and workflow
- `agents/BUSINESS_REQUIREMENTS.md` - Business context and requirements
- Task file in `tasks/TASK-XXX-[name].md` - Specific requirements and acceptance criteria

---

## Implementation Standards

### Code Quality

**Extract Business Logic (Universal)**
```
❌ Business logic in routes/controllers
✅ Business logic in service layer
```

**Examples by framework:**

TypeScript/Next.js:
```typescript
// ❌ Business logic in API route
export async function POST(request: Request) {
  const data = await request.json()
  // Complex calculations here
  const result = await prisma.create(data)
  return NextResponse.json(result)
}

// ✅ Business logic in service
export async function POST(request: Request) {
  const data = await request.json()
  const result = await goalService.createGoal(data)
  return NextResponse.json(result)
}
```

Python/Django:
```python
# ❌ Business logic in view
def create_user(request):
    data = json.loads(request.body)
    # Complex validation and calculations
    user = User.objects.create(**data)
    return JsonResponse({"data": user.to_dict()})

# ✅ Business logic in service
def create_user(request):
    data = json.loads(request.body)
    result = user_service.create_user(data)
    return JsonResponse(result)
```

**Type Safety**
- Use proper types throughout (no `any` in TypeScript)
- Add type hints in Python
- Use interfaces in Go
- Follow type conventions in your language

**Eliminate Duplication**
- Extract repeated code to functions
- Create shared utilities
- Use consistent patterns

**Separation of Concerns**
- Routes/Controllers: HTTP handling only
- Services: Business logic and data operations
- Models: Data structure and validation
- Utils: Shared helpers

---

### Database Changes

**When schema changes are needed:**

1. **Update schema definition**
   - Examples: `prisma/schema.prisma`, `models.py`, `migrations/*.sql`, `db/schema.rb`

2. **Create migration**
   - Run your framework's migration command
   - Examples: 
     - `npm run db:migrate`
     - `python manage.py makemigrations`
     - `rails db:migrate`
     - `goose up`

3. **Test migration**
   - Run migration locally
   - Test rollback (if applicable)
   - Verify data integrity

4. **Commit migration files**
   - Include migration in version control
   - Never modify existing migrations
   - Add migration notes if complex

**Migration Best Practices:**
- Make migrations reversible when possible
- Avoid data loss
- Consider production data
- Test on realistic dataset
- Plan for zero-downtime deployments

---

### Testing Requirements

**Universal: Tests ship with features, not as afterthought**

#### Unit Tests
**For**: Business logic in services, utilities, pure functions

**Coverage**: All service methods, validators, calculators

**Example structure:**
```
[service-file].[ext]           # e.g., user-service.ts
[service-file].test.[ext]       # e.g., user-service.test.ts
```

#### Integration Tests
**For**: API routes/endpoints, database operations

**Coverage**: All endpoints (happy paths + error cases)

**Location**: `tests/integration/` or `__tests__/api/`

#### Component Tests (if UI)
**For**: Reusable components, critical user flows

**Coverage**: User interactions, accessibility, state changes

**Location**: `tests/components/` or co-located with components

**Test Commands:**
```bash
[unit-test-command]         # e.g., npm test, pytest, go test
[integration-test-command]  # e.g., npm run test:api
[coverage-command]          # e.g., npm test -- --coverage
```

---

### Documentation

**Update when contracts change:**

- **API Documentation**: If endpoint signatures or responses change
- **Architecture Docs**: If patterns or standards evolve
- **Code Comments**: For complex logic that isn't self-evident
- **README**: If setup or usage changes

**Documentation Commands:**
```bash
[doc-gen-command]           # e.g., npm run generate:openapi, sphinx-build
```

---

## Implementation Cycle

**Follow this process for each implementation task:**

### 1. Planning
- Read task file thoroughly
- Break down the task into smaller components
- Identify dependencies and potential risks
- Plan the implementation approach
- Review relevant existing code

### 2. Code Implementation
- Follow coding standards and architectural principles
- Implement incrementally with frequent testing
- Extract business logic to services
- Maintain type safety
- Handle errors appropriately
- Add logging where useful

### 3. Database Changes (if needed)
- Update schema definition file
- Create migration
- Test migration locally
- Commit migration files to git
- Verify data integrity

### 4. Mandatory Refactoring Check
**Before moving to testing:**
- Extract business logic from API routes/controllers to service layer
- Eliminate code duplication
- Ensure separation of concerns
- Improve naming if needed
- Add missing documentation

### 5. Testing
**Write tests in same PR as implementation:**

- **Unit Testing**: Test business logic in services
  ```bash
  [unit-test-command]       # Run tests frequently during development
  ```

- **Integration Testing**: Test API routes/endpoints
  - **Terminal 1**: Start development server
    ```bash
    [dev-server-command]    # e.g., npm run dev, python manage.py runserver
    ```
  - **Terminal 2**: Run API tests
    ```bash
    [api-test-command]      # e.g., npm run test:api, pytest tests/integration
    ```

- **Component Testing**: Test UI components (if applicable)
  ```bash
  [component-test-command]  # e.g., npm test -- components/
  ```

### 6. Quality Assurance

- **Lint Check**: Ensure code quality
  ```bash
  [lint-command]            # e.g., npm run lint, pylint, rubocop
  ```

- **Type Check**: Verify types (if applicable)
  ```bash
  [type-check-command]      # e.g., npm run type-check, mypy
  ```

- **Build Verification**: Confirm build success
  ```bash
  [build-command]           # e.g., npm run build, python setup.py build
  ```

### 7. Documentation Update
- Generate API docs if contract changed
  ```bash
  [doc-gen-command]
  ```
- Update relevant markdown files
- Add code comments for complex logic

### 8. Manual Testing
- Test the feature manually in development environment
- Verify all acceptance criteria
- Check error cases
- Test edge conditions
- Verify UI responsiveness (if applicable)

---

## Definition of Done

**A task is complete only when ALL criteria are met:**

- [ ] **No business logic in API routes/controllers** (extracted to service layer)
- [ ] **Proper type safety** (no `any` in TypeScript, type hints in Python, etc.)
- [ ] **Database migrations created and committed** (if schema changed)
- [ ] **Tests included with the change:**
  - [ ] Unit tests for business logic
  - [ ] Integration tests for API routes/endpoints
  - [ ] Component tests for UI (if applicable)
- [ ] **All tests passing**
  ```bash
  [test-command]            # All tests pass
  ```
- [ ] **Build successful**
  ```bash
  [build-command]           # Build completes without errors
  ```
- [ ] **Linting clean**
  ```bash
  [lint-command]            # No linting errors
  ```
- [ ] **Documentation updated** (if needed)
- [ ] **Manual testing complete** (verified all acceptance criteria)
- [ ] **Code review ready** (if applicable to your workflow)

---

## Task Organization

### Branch Naming
- `feature/[short-name]` for new features
- `bugfix/[short-name]` for bug fixes
- `refactor/[short-name]` for code improvements
- Avoid `prototype/` prefix for production implementations

**Examples:**
- `feature/user-authentication`
- `bugfix/fix-null-pointer`
- `refactor/extract-payment-service`

### Task Granularity
- One feature branch = one independent task
- Tasks should be deployable independently
- Minimize dependencies between tasks
- Keep scope focused and achievable
- Typical size: 1-3 days of work

### Commit Strategy
- Commit frequently
- Write clear commit messages
- Follow [Conventional Commits](https://www.conventionalcommits.org/) if adopted
- Each commit should leave code in working state

**Commit message format:**
```
type(scope): description

[optional body]
```

**Types**: feat, fix, refactor, test, docs, chore

**Examples:**
- `feat(auth): add OAuth login functionality`
- `fix(api): handle null values in user endpoint`
- `refactor(services): extract payment logic to service layer`
- `test(auth): add integration tests for login flow`

---

## Rollback Considerations

**Plan for production safety:**

- Ensure database migrations are reversible when possible
- Consider feature flags for major changes
- Plan deployment strategy
- Document rollback procedures for complex changes
- Test rollback locally

---

## Common Implementation Scenarios

### New Feature Implementation
1. Read task file and requirements
2. Review architecture for patterns
3. Create service layer for business logic
4. Implement API route/controller (thin layer)
5. Write unit tests for service
6. Write integration tests for API
7. Build UI components (if needed)
8. Test manually
9. Verify Definition of Done

### Bug Fix
1. Reproduce the bug
2. Write failing test that demonstrates bug
3. Fix the bug in appropriate layer
4. Verify test now passes
5. Check for similar bugs elsewhere
6. Add regression test
7. Document the fix

### Refactoring
1. Ensure existing tests cover current behavior
2. Refactor incrementally
3. Run tests after each change
4. Verify all tests still pass
5. Improve test coverage if gaps found
6. Update documentation

---

## Customization Instructions

To adapt these implementation instructions for your project:

1. **Replace all `[command]` placeholders** with your actual commands
2. **Update file paths and structure** to match your project
3. **Add framework-specific patterns** as needed
4. **Update branch naming** to match your conventions
5. **Keep all universal principles**:
   - Service layer pattern
   - Tests with implementation
   - Type safety
   - Incremental development
   - Quality gates

These principles apply to any production-grade software project.
