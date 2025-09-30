# AGENTS.md – [YOUR_PROJECT_NAME]

## 🤖 How to Use This File

When working with an AI agent, start your conversation with:

```
I'm working on [YOUR_PROJECT_NAME]. Please read the agents/AGENTS.md file 
to understand the project structure and your role. I need help with [YOUR REQUEST].
```

---

## Project Overview

[YOUR_PROJECT_NAME] is a [BRIEF_DESCRIPTION] application.

**Tech stack**: [YOUR_TECH_STACK - e.g., Next.js 15, TypeScript, PostgreSQL, Python/Django, React Native, Go, Ruby/Rails, etc.]

**Key technologies**:
- [FRAMEWORK/LANGUAGE]
- [DATABASE]
- [TESTING_TOOLS]
- [OTHER_KEY_TOOLS]

---

## Agent-Specific Instructions

- **For Product Manager agent jobs** (task specification, translating business requirements into roadmap, mapping roadmap into specific tasks, describing execution process):
  - Use `agents/agent-product-manager/AGENTS.md`
  
- **For Software Engineer agent jobs** (implementing given tasks, features, fixing bugs, writing tests):
  - Use `agents/agent-software-engineer/AGENTS.md`

---

## Role Selection Heuristic

Use this guide to determine which agent to invoke:

- **If the request is about planning, breaking down requirements, roadmap updates, acceptance criteria, or task specs** → use the **Product Manager agent**
  
- **If the request is about coding, fixing bugs, implementing features, refactoring, or writing tests** → use the **Software Engineer agent**

- **If ambiguous**, ask a brief clarifying question or default to Product Manager to define scope first

---

## Important References

These documents provide critical context for all agents:

- `agents/BUSINESS_REQUIREMENTS.md`: Contains the business requirements and feature descriptions for the project
- `agents/ROADMAP.md`: Contains the development roadmap, current tasks, and next steps for project implementation
- `agents/ARCHITECTURE.md`: Defines the desired system design, project structure, and architectural standards
- `agents/UX_PRINCIPLES.md`: UX design principles, usability heuristics, and user experience guidelines
- `agents/TESTING_PRINCIPLES.md`: Outlines the testing strategy, guidelines, and best practices
- `agents/DEVELOPMENT_WORKFLOW.md`: Detailed software development workflow, testing strategies, and best practices

---

## Meta-Requirements: Continuous Learning and Improvement

When fixing issues or implementing features, always look for opportunities to improve the development process:

- **Refactoring Check**: Always look for opportunities to improve code organization
- **Test Coverage**: Business logic changes require corresponding test changes
- **Documentation Updates**: Update relevant docs when architectural patterns change

---

## Mandatory Code Quality Checks

Before considering any task complete, ALWAYS perform these checks:

1. **Business Logic Extraction**: If you find business logic in API routes/controllers, extract it to service layer
2. **Code Duplication**: Check for and eliminate duplicate code. Refactor repeated logic into reusable functions or modules
3. **Testing Requirements**: Any business logic extraction MUST include:
   - Unit tests for the newly created logic
   - Integration tests for modified route handlers/endpoints
   - Ensure the tests implementation follows `agents/TESTING_PRINCIPLES.md`
4. **Architecture Compliance**: Ensure the implementation follows `agents/ARCHITECTURE.md` principles

---

## Canonical Definition of Done (DoD)

Use `agents/DEVELOPMENT_WORKFLOW.md` as the single source of truth for DoD and quality gates. Other documents may reference it but should not redefine the criteria.

---

## Customization Instructions

To adapt this framework for your project, replace the following placeholders:

1. `[YOUR_PROJECT_NAME]` - Your actual project name
2. `[BRIEF_DESCRIPTION]` - One sentence describing what your application does
3. `[YOUR_TECH_STACK]` - List your main technologies
4. File paths in "Important References" - Update if your folder structure differs

Keep all the universal principles (Meta-Requirements, Quality Checks, DoD reference) as they apply to any well-structured project.
