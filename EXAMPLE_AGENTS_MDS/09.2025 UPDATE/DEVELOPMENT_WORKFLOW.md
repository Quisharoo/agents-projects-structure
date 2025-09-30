# Development Workflow Guide

This document provides essential guidance for developers and AI Agents working on the Leader's Metrics project.

## Pre-Implementation
- Review the task in `agents/ROADMAP.md` and related task files in `/tasks`
- Understand architectural principles in `agents/ARCHITECTURE.md`
- Check testing standards in `agents/TESTING_PRINCIPLES.md`

## Implementation Cycle

Follow this cycle for each feature. Tests are authored and updated in the same PR as the implementation — do not split tests to a later task unless explicitly doing coverage consolidation.

1. **Code Implementation**: Follow coding standards and architectural principles
2. **Database Changes**: If schema changes are needed:
   - Update `prisma/schema.prisma`
   - Run `npm run db:migrate` to create migration
   - Commit migration files to git
3. **Mandatory Refactoring Check**: Extract business logic from API routes to `/lib`, eliminate duplication, ensure separation of concerns
4. **Testing (Same PR)**:
   - Unit tests for services/business logic
   - API integration tests for modified/added routes
   - Component tests for reusable UI components and critical flows
   - Keep tests close to the code they verify; add fixtures as needed
5. **Lint Check**: `npm run lint` - Ensure code quality
6. **Build Verification**: `npm run build` - Confirm build success
7. **API Testing**:
   - **Terminal 1**: `npm run dev` - Start and keep running dev server
   - **Terminal 2**: `npm run test:api` - Test API endpoints if routes changed
8. **Documentation**: `npm run generate:openapi` if API contract changed

## Checklist for Prototyping

Use this checklist when creating prototypes for new features:

- [ ] Create low-fidelity prototypes for new features
- [ ] Use mocked data and components
- [ ] Use shadcn/ui components
- [ ] Use dedicated route for previews (`/views-proto`)
- [ ] All prototyped code must land in preview dir (`app/views-proto`)
- [ ] All tests passing (`npm test`)
- [ ] Build successful (`npm run build`)
- [ ] Linting clean (`npm run lint`)

## Definition of Done

- [ ] No business logic in API routes (extracted to `/lib`)
- [ ] Proper TypeScript types (no `any`)
- [ ] Database migrations created and committed (if schema changed)
- [ ] Tests included with the change:
  - Services: unit tests
  - API routes: integration tests
  - UI components: component tests for critical behaviors
- [ ] All tests passing (`npm test` and API tests if applicable)
- [ ] Build successful (`npm run build`)
- [ ] Linting clean (`npm run lint`)
- [ ] OpenAPI docs updated if needed

### When tests can be a separate task
- Only for cross-cutting “coverage consolidation”, flakiness fixes, or large edge-case matrices that span multiple features. Feature‑level correctness must be tested with the feature PR.

## Testing Commands

### Unit Tests
- `npm run test` - Run Jest unit tests
- `npm run test:coverage` - Generate coverage reports
- `npm run test:watch` - Watch mode for development

### API Tests
⚠️ **Always start `npm run dev` first in separate terminal**
- `npm run test:api` - Test all endpoints locally
- `npm run test:api:verbose` - Detailed request/response logging
- `npm run test:api:prod` - Test production environment

## Key Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Code quality check

### Database
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes (dev)
- `npm run db:seed` - Seed database
- `npm run db:studio` - Open Prisma Studio

### Testing  
- `npm run test` - Run Jest unit tests
- `npm run test:coverage` - Generate coverage reports
- `npm run test:watch` - Watch mode for development
- `npm run test:api` - Test API endpoints (requires dev server)

### Database
- `npm run db:migrate` - Create and apply new migration (development)
- `npm run db:migrate:deploy` - Apply migrations (production-safe)
- `npm run db:generate` - Generate Prisma client
- `npm run db:reset` - Reset database (development only)
- `npm run db:studio` - Open Prisma Studio

### Documentation
- `npm run generate:openapi` - Generate API docs
- Visit `/api-docs` - View interactive Swagger UI

## CI/CD Pipeline

### Database Migrations
- **Production**: Automatic migration when pushing migration changes to main branch
- **Safety**: Uses `prisma migrate deploy` for zero-downtime updates
- **Trigger**: Only runs when `prisma/migrations/` folder changes
