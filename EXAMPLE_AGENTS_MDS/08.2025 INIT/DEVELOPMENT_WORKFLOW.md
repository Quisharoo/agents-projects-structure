# Development Workflow Guide

This document provides essential guidance for developers and AI Agents working on the Leader's Metrics project.

## Pre-Implementation
- Review the task in `agents/ROADMAP.md` and related task files in `/tasks`
- Understand architectural principles in `agents/ARCHITECTURE.md`
- Check testing standards in `agents/TESTING_PRINCIPLES.md`

## Implementation Cycle

Follow this cycle for each feature:

1. **Code Implementation**: Follow coding standards and architectural principles
2. **Database Changes**: If schema changes are needed:
   - Update `prisma/schema.prisma`
   - Run `npm run db:migrate` to create migration
   - Commit migration files to git
3. **Mandatory Refactoring Check**: Extract business logic from API routes to `/lib`, eliminate duplication, ensure separation of concerns
4. **Unit Testing**: `npm run test` - Run unit tests for new/modified code
5. **Lint Check**: `npm run lint` - Ensure code quality
6. **Build Verification**: `npm run build` - Confirm build success
7. **API Testing**:
   - **Terminal 1**: `npm run dev` - Start and keep running dev server
   - **Terminal 2**: `npm run test:api` - Test API endpoints if routes changed
8. **Documentation**: `npm run generate:openapi` if API contract changed

## Definition of Done

- [ ] No business logic in API routes (extracted to `/lib`)
- [ ] Proper TypeScript types (no `any`)
- [ ] Database migrations created and committed (if schema changed)
- [ ] Unit tests for business logic
- [ ] All tests passing (`npm test`)
- [ ] Build successful (`npm run build`)
- [ ] Linting clean (`npm run lint`)
- [ ] OpenAPI docs updated if needed

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