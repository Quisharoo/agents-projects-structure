# Implementation Instructions

This file defines how AI agents should handle **production implementation** tasks for Leader's Metrics.

## When to Use This Mode

Use **Delivery/Implementation Mode** when:
- Requirements are **clear** and feature is ready for production implementation
- Feature has been validated (through prototyping or clear specifications)
- Goal is to deliver production-ready, maintainable code

## Core Principles

- **Production quality** - code must be robust, tested, and maintainable
- **Architectural compliance** - follow all established patterns and standards
- **Extensibility** - design for future modifications and growth
- **Clean code** - readable, well-structured, and documented
- **Comprehensive testing** - unit tests for business logic, integration tests where appropriate

## Required Reading

Before starting any implementation task, review:
- `agents/ARCHITECTURE.md` - System architecture and patterns
- `agents/TESTING_PRINCIPLES.md` - Testing standards and practices
- `agents/DEVELOPMENT_WORKFLOW.md` - Development process and workflow
- `agents/BUSINESS_REQUIREMENTS.md` - Business context and requirements

## Implementation Standards

### Code Quality
- Follow all architectural and coding standards
- Use proper TypeScript types (no `any`)
- Extract business logic from API routes to `/lib`
- Eliminate code duplication
- Ensure proper separation of concerns
- Use established patterns and conventions

### Database Changes
- Update `prisma/schema.prisma` for schema changes
- Run `npm run db:migrate` to create migrations
- Commit migration files to git
- Ensure backward compatibility where possible

### Testing Requirements
- Unit tests for all business logic
- API tests for modified endpoints
- Integration tests for complex workflows
- All tests must pass before completion

### Documentation
- Update API documentation if contract changes
- Add code comments for complex logic
- Update relevant documentation files
- Generate OpenAPI docs with `npm run generate:openapi`

## Implementation Cycle

Follow this process for each implementation task:

1. **Planning**
   - Break down the task into smaller components
   - Identify dependencies and potential risks
   - Plan the implementation approach

2. **Code Implementation**
   - Follow coding standards and architectural principles
   - Implement incrementally with frequent testing
   - Extract business logic appropriately

3. **Database Changes** (if needed)
   - Update `prisma/schema.prisma`
   - Run `npm run db:migrate` to create migration
   - Commit migration files to git

4. **Mandatory Refactoring Check**
   - Extract business logic from API routes to `/lib`
   - Eliminate duplication
   - Ensure separation of concerns

5. **Testing**
   - **Unit Testing**: `npm run test` - Run unit tests for new/modified code
   - **API Testing**: 
     - **Terminal 1**: `npm run dev` - Start and keep running dev server
     - **Terminal 2**: `npm run test:api` - Test API endpoints if routes changed

6. **Quality Assurance**
   - **Lint Check**: `npm run lint` - Ensure code quality
   - **Build Verification**: `npm run build` - Confirm build success

7. **Documentation Update**
   - `npm run generate:openapi` if API contract changed
   - Update relevant documentation

## Definition of Done

A task is complete only when ALL of these criteria are met:

- [ ] No business logic in API routes (extracted to `/lib`)
- [ ] Proper TypeScript types (no `any`)
- [ ] Database migrations created and committed (if schema changed)
- [ ] Unit tests for business logic
- [ ] All tests passing (`npm test`)
- [ ] Build successful (`npm run build`)
- [ ] Linting clean (`npm run lint`)
- [ ] OpenAPI docs updated if needed
- [ ] Code review completed (if applicable)
- [ ] Documentation updated

## Task Organization

### Branch Naming
- `feature/<short-name>` for new features
- `bugfix/<short-name>` for bug fixes
- Avoid `prototype/` prefix for production implementations

### Task Granularity
- One feature branch = one independent task
- Tasks should be deployable independently
- Minimize dependencies between tasks
- Keep scope focused and achievable

### Rollback Considerations
- Ensure database migrations are reversible when possible
- Consider feature flags for major changes
- Plan deployment and rollback strategies
