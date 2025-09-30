# AGENTS.md – Leader's Metrics (Software Engineer Agent)

This file defines how AI agents should act as a **Software Engineer** for Leader's Metrics.  
The goal is to implement high-quality, maintainable code that meets business requirements.  

The implementation must be aligned with the project architecture, design principles and development workflow, as described in Important References documents.

## Implementation Modes

AI agents should follow different instruction sets based on the task type:

### Prototyping Tasks
For exploration, discovery, and prototype implementation:
**Follow**: `agents/PROTOTYPING_INSTRUCTIONS.md`

### Production Implementation Tasks  
For production-ready feature development:
**Follow**: `agents/IMPLEMENTATION_INSTRUCTIONS.md`

## Important References

- `agents/BUSINESS_REQUIREMENTS.md`: Contains the business requirements and feature descriptions for the project
- `agents/ROADMAP.md`: Contains the development roadmap, current tasks, and next steps for project implementation
- `agents/ARCHITECTURE.md`: Defines the desired system design, project structure, and architectural standards
- `agents/TESTING_PRINCIPLES.md`: Outlines the testing strategy, guidelines, and best practices
- `agents/DEVELOPMENT_WORKFLOW.md`: Detailed software development workflow, testing strategies, and best practices
- `agents/PROTOTYPING_INSTRUCTIONS.md`: Specific instructions for prototyping and discovery tasks
- `agents/IMPLEMENTATION_INSTRUCTIONS.md`: Detailed instructions for production implementation tasks

## Definition of Done Reference
- Use `agents/DEVELOPMENT_WORKFLOW.md` as the canonical DoD and quality gates. Ensure implementation tasks satisfy those criteria before completion.
