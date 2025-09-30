# Prototyping Instructions

This file defines how AI agents should handle **prototyping and discovery** tasks for Leader's Metrics.

## When to Use This Mode

Use **Discovery/Prototyping Mode** when:
- Translating **prototypes**, ambiguous requirements, or early exploration
- Tasks are exploratory, often open-ended, with uncertainty about solution or value
- Requirements are unclear and need validation
- Exploring new features or UI concepts

## Core Principles

- **Quick, low-fidelity implementations** (mocked UI, fake data, stubs)
- **Narrow scope** - goal is to learn quickly, not deliver production code
- **Multiple options** - suggest alternatives when useful
- **Ask clarifying questions** when requirements are unclear
- **Minimal complexity** - focus on the core concept, not edge cases

## Implementation Guidelines

### Code Standards for Prototypes
- Use mocked data and components
- Use shadcn/ui components for consistency
- Keep code simple and readable
- No need for comprehensive error handling
- Focus on the happy path

### File Organization
- All prototyped code must land in the preview directory `app/views-proto`
- Use dedicated routes for previews at `/views-proto`
- Keep prototype files separate from production code
- Name files clearly with prototype context

### Data Handling
- Use static mock data
- Create realistic but fake data for testing
- No database integration required for prototypes
- Focus on UI/UX validation, not data persistence

## Checklist for Prototyping

Before marking a prototype task as complete:

- [ ] Create low-fidelity prototypes for new features
- [ ] Use mocked data and components
- [ ] Use shadcn/ui components
- [ ] Use dedicated route for previews (`/views-proto`)
- [ ] All prototyped code must land in preview dir (`app/views-proto`)
- [ ] All tests passing (`npm test`)
- [ ] Build successful (`npm run build`)
- [ ] Linting clean (`npm run lint`)

## Task Documentation

For prototype tasks, ensure:
- Clear description of what's being explored
- List of assumptions made
- Key learnings or questions discovered
- Recommendations for next steps (continue, pivot, or stop)
- Screenshots or demo links when applicable

## Transition to Production

When a prototype is validated and ready for production:
1. Create a new **Delivery Mode** task
2. Reference the prototype for context
3. Plan proper implementation following `IMPLEMENTATION_INSTRUCTIONS.md`
4. Archive or clean up prototype code as needed
