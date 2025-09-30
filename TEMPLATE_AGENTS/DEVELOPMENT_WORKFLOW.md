# Development Workflow Guide – [YOUR_PROJECT_NAME]

This document provides essential guidance for developers and AI Agents working on this project.

---

## Pre-Implementation

**Universal preparation steps:**

- Review the task in `agents/ROADMAP.md` and related task files in `/tasks`
- Understand architectural principles in `agents/ARCHITECTURE.md`
- Check testing standards in `agents/TESTING_PRINCIPLES.md`
- Identify dependencies and potential risks

---

## Implementation Cycle

**Universal workflow - adapt commands to your tech stack:**

Follow this cycle for each feature. Tests are authored and updated in the same PR as the implementation — do not split tests to a later task unless explicitly doing coverage consolidation.

### 1. Code Implementation
- Follow coding standards and architectural principles from `agents/ARCHITECTURE.md`
- Implement incrementally with frequent local testing
- Extract business logic to service layer (not in routes/controllers)

### 2. Database Changes (if applicable)
If schema changes are needed:
- Update your schema definition file
  - **Examples**: `prisma/schema.prisma`, `models.py`, `schema.rb`, `*.sql`
- Run migration command
  - **Examples**: `npm run db:migrate`, `python manage.py makemigrations`, `rails db:migrate`, `goose up`
- Commit migration files to version control
- Test migrations work correctly (up and down if reversible)

### 3. Mandatory Refactoring Check
**Universal quality requirement:**
- Extract business logic from API routes/controllers to service layer
- Eliminate code duplication
- Ensure proper separation of concerns
- Verify adherence to architectural principles

### 4. Testing (Same PR)
**Universal requirement - tests ship with code:**

- **Unit tests** for services/business logic
- **Integration tests** for modified/added API routes/endpoints
- **Component tests** for reusable UI components and critical flows (if applicable)
- Keep tests close to the code they verify
- Add test utilities and factories as needed

**Test commands** (customize for your stack):
```bash
[unit-test-command]           # e.g., npm test, pytest, go test ./..., rspec
[integration-test-command]    # e.g., npm run test:api, pytest tests/integration
[watch-mode-command]          # e.g., npm test -- --watch, pytest-watch
```

### 5. Lint Check
Ensure code quality:
```bash
[lint-command]                # e.g., npm run lint, pylint, golangci-lint, rubocop
[format-command]              # e.g., npm run format, black, gofmt, rubocop -a
```

### 6. Build Verification
Confirm build success:
```bash
[build-command]               # e.g., npm run build, python setup.py build, go build, bundle install
```

### 7. Local Integration Testing (if applicable)
For API changes, test endpoints locally:
- **Terminal 1**: Start development server
  ```bash
  [dev-server-command]        # e.g., npm run dev, python manage.py runserver, rails s
  ```
- **Terminal 2**: Run API tests
  ```bash
  [api-test-command]          # e.g., npm run test:api, pytest tests/api, go test -tags=integration
  ```

### 8. Documentation
Update if contracts or architecture changed:
```bash
[doc-generation-command]      # e.g., npm run generate:openapi, sphinx-build, godoc
```

Update relevant markdown files in `agents/` or `docs/` if architectural patterns changed.

---

## Checklist for Prototyping

Use this checklist when creating prototypes for new features (Discovery Mode):

- [ ] Create low-fidelity prototypes for new features
- [ ] Use mocked data and components
- [ ] Use your component library / design system
- [ ] Use dedicated route/directory for previews (e.g., `/views-proto`, `/prototypes`)
- [ ] All prototyped code in designated preview directory
- [ ] All tests passing
- [ ] Build successful
- [ ] Linting clean

---

## Definition of Done

**Universal quality gates - customize commands for your stack:**

A task is complete only when ALL criteria are met:

- [ ] **No business logic in API routes/controllers** (extracted to service layer in `/lib`, `/services`, or equivalent)
- [ ] **Proper type safety**
  - TypeScript: No `any` types
  - Python: Type hints on public functions
  - Go: Proper interfaces and types
  - Ruby: RBS/Sorbet types (if used)
- [ ] **Database migrations** created and committed (if schema changed)
- [ ] **Tests included with the change:**
  - Services: unit tests
  - API routes/controllers: integration tests
  - UI components: component tests for critical behaviors
- [ ] **All tests passing**
  ```bash
  [test-command]              # All tests pass
  ```
- [ ] **Build successful**
  ```bash
  [build-command]             # Build completes without errors
  ```
- [ ] **Linting clean**
  ```bash
  [lint-command]              # No linting errors
  ```
- [ ] **Documentation updated**
  - API documentation (if contract changed)
  - Architecture docs (if patterns changed)
  - README or guides (if setup changed)

### When Tests Can Be a Separate Task

**Universal principle:**
- Only for cross-cutting "coverage consolidation", flakiness fixes, or large edge-case matrices that span multiple features
- Feature-level correctness must be tested with the feature PR
- Business logic tests are NEVER optional or deferred

---

## Testing Commands

### Unit Tests
```bash
[test-command]                # Run all unit tests
[test-coverage-command]       # Generate coverage reports
[test-watch-command]          # Watch mode for development
[test-specific-command]       # Run specific test file or suite
```

**Examples by framework:**
- **Jest**: `npm test`, `npm run test:coverage`, `npm run test:watch`, `npm test -- path/to/file`
- **Pytest**: `pytest`, `pytest --cov`, `pytest-watch`, `pytest tests/unit/test_users.py`
- **Go**: `go test ./...`, `go test -cover ./...`, `goconvey`, `go test ./services`
- **RSpec**: `rspec`, `rspec --format documentation`, `guard`, `rspec spec/services`

### Integration Tests
```bash
[integration-test-command]    # Run integration tests
[api-test-command]            # Test API endpoints
```

**Note**: Start development server first if tests make real HTTP calls.

---

## Key Commands

### Development
```bash
[start-dev-command]           # Start development server
[build-command]               # Build for production  
[lint-command]                # Code quality check
[format-command]              # Auto-format code
[type-check-command]          # Type checking (if applicable)
```

### Database (if applicable)
```bash
[migrate-create-command]      # Create new migration
[migrate-up-command]          # Apply migrations (development)
[migrate-deploy-command]      # Apply migrations (production-safe)
[migrate-rollback-command]    # Rollback last migration
[seed-command]                # Seed database with data
[db-console-command]          # Open database console
[db-reset-command]            # Reset database (development only!)
```

### Documentation
```bash
[doc-generate-command]        # Generate API documentation
[doc-serve-command]           # Serve documentation locally
```

**Access documentation at**: [your-docs-url - e.g., http://localhost:3000/api-docs]

---

## CI/CD Pipeline

### Database Migrations
- **Production**: Automatic migration when pushing migration changes to main branch
- **Safety**: Use production-safe migration command (non-destructive)
- **Trigger**: Only runs when migration folder changes

### Test Execution
- All tests run on every pull request
- Parallel execution where possible
- Coverage reports generated
- Failed tests block merge

### Deployment
- [Your deployment process]
- [Your rollback process]
- [Your monitoring/alerting]

---

## Branch Naming Conventions

**Universal pattern:**
- `feature/[short-name]` - New features
- `bugfix/[short-name]` - Bug fixes
- `hotfix/[short-name]` - Urgent production fixes
- `refactor/[short-name]` - Code improvements
- `docs/[short-name]` - Documentation updates
- `test/[short-name]` - Test improvements
- `prototype/[short-name]` - Discovery/prototyping work

**Examples:**
- `feature/user-authentication`
- `bugfix/fix-null-pointer`
- `refactor/extract-payment-service`

---

## Git Workflow

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/) or your team's convention:

```
type(scope): description

[optional body]

[optional footer]
```

**Types**: feat, fix, docs, refactor, test, chore, perf

**Examples:**
- `feat(auth): add OAuth login`
- `fix(api): handle null values in user endpoint`
- `refactor(services): extract payment logic to service layer`
- `test(auth): add integration tests for login flow`

### Pull Request Process
1. Create feature branch from main/develop
2. Implement changes following this workflow
3. Ensure all quality gates pass
4. Create pull request with description
5. Address review feedback
6. Merge when approved and tests pass

---

## Troubleshooting Common Issues

### Tests Failing
1. Run tests locally: `[test-command]`
2. Check for:
   - Uncommitted database migrations
   - Missing environment variables
   - Stale dependencies
   - Flaky time-dependent tests

### Build Failing
1. Clear build cache: `[clean-command]`
2. Reinstall dependencies: `[install-command]`
3. Check for:
   - Type errors
   - Import errors
   - Missing files

### Database Issues
1. Check migrations are up to date
2. Verify database connection
3. Reset local database if needed (development only)

---

## Customization Instructions

To adapt this workflow for your project:

1. **Replace all `[command]` placeholders** with your actual commands
2. **Update branch naming** to match your team conventions
3. **Add framework-specific sections** as needed
4. **Update CI/CD details** with your actual pipeline
5. **Keep universal principles**:
   - Tests ship with features
   - Business logic in services
   - Definition of Done criteria
   - Quality gates

The workflow structure and quality principles apply to any well-managed project.
