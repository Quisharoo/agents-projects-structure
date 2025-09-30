# AGENTS.md – Leader's Metrics

## Project Overview
Next.js 15 application for tracking engineering team metrics, goals, and performance.
Tech stack: TypeScript, Prisma/PostgreSQL, Tailwind/shadcn/ui, Zod, Auth.js.

## Agent-Specific Instructions
- For Product Manager agent jobs, like tasks specification, translating business requirements into roadmap, mapping roadmap into specific tasks, and describing execution process, use `agents/agent-product-manager/AGENTS.md`.
- For Software Engineer agent jobs, like implementing given tasks, features, fixing bugs, and writing tests, use `agents/agent-software-engineer/AGENTS.md`.

## Role Selection Heuristic
- If the request is about planning, breaking down requirements, roadmap updates, acceptance criteria, or task specs → use the Product Manager agent.
- If the request is about coding, fixing bugs, implementing features, refactoring, or writing tests → use the Software Engineer agent.
- If ambiguous, ask a brief clarifying question or default to Product Manager to define scope first.

## Important References

- `agents/BUSINESS_REQUIREMENTS.md`: Contains the business requirements and feature descriptions for the project
- `agents/ROADMAP.md`: Contains the development roadmap, current tasks, and next steps for project implementation
- `agents/ARCHITECTURE.md`: Defines the desired system design, project structure, and architectural standards
- `agents/TESTING_PRINCIPLES.md`: Outlines the testing strategy, guidelines, and best practices
- `agents/DEVELOPMENT_WORKFLOW.md`: Detailed software development workflow, testing strategies, and best practices

## Meta-Requirements: Continuous Learning and Improvement

When fixing issues or implementing features, always look for opportunities to improve the development process

- **Refactoring Check**: Always look for opportunities to improve code organization
- **Test Coverage**: Business logic changes require corresponding test changes
- **Documentation Updates**: Update relevant docs when architectural patterns change

## Mandatory Code Quality Checks
Before considering any task complete, ALWAYS perform these checks:

1. **Business Logic Extraction**: If you find business logic in API routes, consider extracting it to external services
2. **Code Duplication**: Check for and eliminate duplicate code. Refactor repeated logic into reusable functions or modules.
3. **Testing Requirements**: Any business logic extraction MUST include:
   - Unit tests for the newly created logic
   - API integration tests for modified route handlers
   - Ensure the tests implementation follows `agents/TESTING_PRINCIPLES.md`
4. **Architecture Compliance**: Ensure the implementation follows `agents/ARCHITECTURE.md` principles

## Canonical Definition of Done (DoD)
Use `agents/DEVELOPMENT_WORKFLOW.md` as the single source of truth for DoD and quality gates. Other documents may reference it but should not redefine the criteria.
