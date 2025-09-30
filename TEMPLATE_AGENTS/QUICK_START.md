# Quick Start Guide

Get your AI agent framework up and running in 5 minutes!

---

## Step 1: Copy Template to Your Project

```bash
# Copy the template to your project as 'agents/'
cp -r TEMPLATE_AGENTS your-project/agents

# Copy the tasks template too
cp -r TEMPLATE_AGENTS/tasks your-project/tasks
```

---

## Step 2: Customize 3 Essential Files

### File 1: `agents/AGENTS.md`

Replace these placeholders:
```markdown
[YOUR_PROJECT_NAME]        → Your actual project name
[BRIEF_DESCRIPTION]        → One sentence about your project
[YOUR_TECH_STACK]          → List your technologies
[FRAMEWORK/LANGUAGE]       → e.g., Next.js, Django, Rails
[DATABASE]                 → e.g., PostgreSQL, MongoDB
[TESTING_TOOLS]            → e.g., Jest, Pytest, RSpec
```

### File 2: `agents/BUSINESS_REQUIREMENTS.md`

Fill in:
```markdown
[YOUR_PROJECT_NAME]        → Your project name
[TARGET_USERS]             → Who uses your app
Core Capabilities          → List 3-5 main features
Features                   → Categorize completed and planned features
Constraints                → Any technical or business constraints
```

### File 3: `agents/ARCHITECTURE.md`

Update:
```markdown
[your-project]/            → Your actual folder structure
[source-directory]/        → e.g., src/, app/, apps/
[api-or-routes]/          → Where your API code lives
[services]/               → Where business logic lives
Tech Stack                → Your actual technologies
[command]                 → Your actual commands
```

---

## Step 3: First Agent Interaction

### Try the Product Manager Agent

```
Act as the Product Manager agent for [YOUR PROJECT NAME]. 
Read agents/agent-product-manager/AGENTS.md for your instructions.

I need you to: Break down the following feature into independent tasks:
"Users should be able to login with email and password"
```

**Agent will:**
- Ask clarifying questions
- Create task files in `tasks/`
- Update `agents/ROADMAP.md`
- Provide implementation order

### Try the Software Engineer Agent

```
Act as the Software Engineer agent for [YOUR PROJECT NAME]. 
Read agents/agent-software-engineer/AGENTS.md for your instructions.

Implement the task defined in tasks/TASK-001-[name].md following production guidelines.
```

**Agent will:**
- Read task requirements
- Follow architectural standards
- Write code and tests
- Verify Definition of Done

---

## Step 4: Optional Customizations

### Customize Testing (Optional)
Edit `agents/TESTING_PRINCIPLES.md`:
- Replace `[YOUR_TEST_FRAMEWORK]` with your actual testing tools
- Update test commands
- Add framework-specific patterns

### Customize Workflow (Optional)
Edit `agents/DEVELOPMENT_WORKFLOW.md`:
- Replace all `[command]` placeholders with your actual commands
- Update branch naming conventions
- Add CI/CD details

### Customize Implementation Modes (Optional)
Edit agent-software-engineer files:
- `IMPLEMENTATION_INSTRUCTIONS.md` - Production code guidelines
- `PROTOTYPING_INSTRUCTIONS.md` - Prototype guidelines

---

## Quick Reference: Commands to Customize

Find and replace these in your template files:

### Testing Commands
```
[test-command]              → npm test, pytest, go test ./...
[test-coverage-command]     → npm test -- --coverage, pytest --cov
[test-watch-command]        → npm test -- --watch, pytest-watch
```

### Development Commands
```
[dev-server-command]        → npm run dev, rails s, python manage.py runserver
[build-command]             → npm run build, go build, bundle install
[lint-command]              → npm run lint, pylint, rubocop
```

### Database Commands
```
[migrate-command]           → npm run db:migrate, rails db:migrate
[seed-command]              → npm run db:seed, rails db:seed
```

---

## What You Get

### Core Framework Files
- ✅ `AGENTS.md` - Main entry point with role selection
- ✅ `BUSINESS_REQUIREMENTS.md` - What to build
- ✅ `ARCHITECTURE.md` - How to build it
- ✅ `TESTING_PRINCIPLES.md` - Testing standards
- ✅ `DEVELOPMENT_WORKFLOW.md` - Process and DoD
- ✅ `ROADMAP.md` - Planning and tracking

### Agent Personas
- ✅ `agent-product-manager/AGENTS.md` - PM instructions
- ✅ `agent-software-engineer/AGENTS.md` - Engineer instructions
- ✅ `agent-software-engineer/IMPLEMENTATION_INSTRUCTIONS.md` - Production code
- ✅ `agent-software-engineer/PROTOTYPING_INSTRUCTIONS.md` - Prototypes

### Task Management
- ✅ `tasks/TASK_TEMPLATE.md` - Template for creating tasks

---

## Common Customization Patterns

### For Next.js Projects
```markdown
Tech Stack:
- Framework: Next.js 15
- Language: TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Testing: Jest
- UI: Tailwind CSS

Commands:
[test-command]          → npm test
[build-command]         → npm run build
[dev-server-command]    → npm run dev
[lint-command]          → npm run lint
```

### For Django Projects
```markdown
Tech Stack:
- Framework: Django
- Language: Python
- Database: PostgreSQL
- ORM: Django ORM
- Testing: Pytest
- UI: Django Templates

Commands:
[test-command]          → pytest
[build-command]         → python setup.py build
[dev-server-command]    → python manage.py runserver
[lint-command]          → pylint
```

### For Go Projects
```markdown
Tech Stack:
- Language: Go
- Database: PostgreSQL
- Database Library: pgx
- Testing: Go test
- Web Framework: Gin/Echo

Commands:
[test-command]          → go test ./...
[build-command]         → go build
[dev-server-command]    → go run main.go
[lint-command]          → golangci-lint run
```

---

## Tips for Success

### 1. Start Small
- Customize just the 3 essential files first
- Try one agent interaction
- Refine based on experience

### 2. Be Specific
- Replace ALL placeholders
- Add project-specific details
- Include actual command examples

### 3. Keep Updated
- Update requirements as they change
- Document decisions in roadmap
- Refine processes based on learnings

### 4. Use Both Modes
- **Discovery Mode**: For uncertain features
- **Delivery Mode**: For clear requirements

### 5. Iterate
- Start basic, add detail as needed
- Refine agent instructions based on results
- Document what works for your team

---

## Troubleshooting

### Agent seems confused about project structure
**Fix**: Be more specific in `ARCHITECTURE.md` about folder structure and patterns

### Agent not following quality standards
**Fix**: Ensure `TESTING_PRINCIPLES.md` and `DEVELOPMENT_WORKFLOW.md` are clear and specific

### Tasks are too vague
**Fix**: Review task template and add more specific acceptance criteria examples

### Agent writes code in wrong locations
**Fix**: Update folder structure in `ARCHITECTURE.md` and be explicit about where code lives

---

## Next Steps

1. ✅ Copy templates to your project
2. ✅ Customize 3 essential files
3. ✅ Try first agent interaction
4. 🔄 Refine based on experience
5. 🔄 Document learnings
6. 🔄 Share with team

---

## Need Help?

- 📖 Read the main [README.md](../README.md) for comprehensive guide
- 📁 Check [EXAMPLE_AGENTS_MDS/](../EXAMPLE_AGENTS_MDS/) for real-world example (Leader's Metrics project)
- 🔗 Review [original article](https://www.practicalengineering.management/p/prototyping-with-ai-agents-pt1) by Mirek Stanek

---

**Ready to start? Copy the template and customize those 3 files!** 🚀
