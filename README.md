# AI Agent Development Framework

A structured approach to AI-assisted software development using specialized agent personas. This framework helps AI agents understand project context, follow consistent workflows, and maintain high-quality standards.

## 📖 Overview

This framework is based on [Mirek Stanek's article on Prototyping with AI Agents](https://www.practicalengineering.management/p/prototyping-with-ai-agents-pt1). It provides a set of markdown files that guide AI agents (like ChatGPT, Claude, or Cursor) to act as specialized team members.

### Key Benefits

- **Consistent Quality**: All agents follow the same architectural and testing standards
- **Clear Roles**: Product Manager and Software Engineer personas with distinct responsibilities
- **Context Retention**: Documents serve as persistent memory between sessions
- **Scalable Workflow**: Supports both rapid prototyping and production-ready development
- **Easy Handoffs**: Clear task definitions enable smooth transitions between agents or human developers

## 🎯 Agent Personas

### Product Manager Agent
**Role**: Translates business needs into actionable engineering tasks
- Breaks down features into independent, deployable units
- Creates detailed task specifications with acceptance criteria
- Maintains roadmap and prioritization
- Ensures alignment with business requirements
- **Does NOT write code**

### Software Engineer Agent  
**Role**: Implements features following project standards
- Writes production-ready code following architecture guidelines
- Creates unit, integration, and component tests
- Refactors for code quality and maintainability
- Updates documentation and API specs
- Follows Definition of Done criteria

## 🗂️ Folder Structure

### For Your Project

Place the `agents/` folder at your project root:

```
your-project/
├── agents/                          # AI Agent instructions (place here)
│   ├── AGENTS.md                    # Main entry point - role selection
│   ├── BUSINESS_REQUIREMENTS.md     # What to build
│   ├── ARCHITECTURE.md              # How to build it
│   ├── DEVELOPMENT_WORKFLOW.md      # Process and Definition of Done
│   ├── TESTING_PRINCIPLES.md        # Testing standards
│   ├── ROADMAP.md                   # Current plan and history
│   ├── agent-product-manager/
│   │   └── AGENTS.md                # PM-specific instructions
│   └── agent-software-engineer/
│       ├── AGENTS.md                # Engineer-specific instructions
│       ├── IMPLEMENTATION_INSTRUCTIONS.md   # Production code guidelines
│       └── PROTOTYPING_INSTRUCTIONS.md      # Prototyping guidelines
├── tasks/                           # Individual task definitions
│   ├── TASK_TEMPLATE.md             # Template for new tasks
│   └── TASK-001-example.md          # Example task
├── src/                             # Your application code
├── tests/                           # Your tests
└── ...                              # Other project files
```

## 🚀 Quick Start

### Option 1: Interactive Setup (Recommended) 🎯

Use the interactive initialization script for a guided 5-minute setup:

```bash
# Navigate to your project directory
cd your-project

# Run the init script (requires Node.js 16+)
npm install -g @agents-framework/init
agents-init

# Or run directly from this repo
node /path/to/agents-project-structure/agents-init.js
```

The script will:
- ✅ Prompt for project details (name, description, target users)
- ✅ Let you choose from common tech stack presets (Next.js, Django, Rails, Go, Express)
- ✅ Guide you through defining MVP capabilities
- ✅ Optionally create your first task
- ✅ Generate fully customized agent files with all placeholders replaced

### Option 2: Manual Setup

If you prefer manual configuration:

```bash
cp -r TEMPLATE_AGENTS your-project/agents
cp -r TEMPLATE_AGENTS/tasks your-project/tasks
```

Then customize core files with your project details:

#### `agents/AGENTS.md`
- Replace `[YOUR_PROJECT_NAME]` with your project name
- Replace `[YOUR_TECH_STACK]` with your technologies
- Update file paths to match your project structure

#### `agents/BUSINESS_REQUIREMENTS.md`
- Replace with your actual features and requirements
- Define your MVP scope
- List completed and planned features
- Add any project constraints

#### `agents/ARCHITECTURE.md`
- Document your project structure
- Define your tech stack
- Specify coding standards and patterns
- Include architecture diagrams if helpful

#### `agents/TESTING_PRINCIPLES.md`
- Adapt testing approach to your stack (keep universal principles)
- Define coverage requirements
- Specify which types of tests are required
- Update testing commands

#### `agents/DEVELOPMENT_WORKFLOW.md`
- Customize Definition of Done for your team
- Define your testing commands
- List relevant npm/make/build commands

### 3. Create Your First Task

Copy the task template:

```bash
cp tasks/TASK_TEMPLATE.md tasks/TASK-001-your-feature.md
```

Fill in the sections with your feature details.

### 4. Brief Your AI Agent

When starting a session with an AI, provide context:

```
I'm working on [PROJECT NAME]. Please read the agents/AGENTS.md file 
to understand the project structure and your role. I need help with 
[SPECIFIC REQUEST].
```

## 📝 How to Use Each Agent

### Using the Product Manager Agent

**When to Use:**
- Planning a new feature
- Breaking down complex requirements
- Creating a development roadmap
- Defining acceptance criteria
- Prioritizing work

**How to Invoke:**

```
Act as the Product Manager agent for this project. Read agents/agent-product-manager/AGENTS.md 
for your instructions. I need you to:

[Your request - e.g., "Break down the user authentication feature into tasks"]
```

**Expected Outputs:**
- Updated `agents/ROADMAP.md` with new tasks
- New task files in `tasks/TASK-XXX.md`
- Clear acceptance criteria and Definition of Done

### Using the Software Engineer Agent

**When to Use:**
- Implementing a defined task
- Fixing bugs
- Refactoring code
- Writing tests
- Updating documentation

**How to Invoke:**

```
Act as the Software Engineer agent for this project. Read agents/agent-software-engineer/AGENTS.md 
for your instructions. Implement the task defined in tasks/TASK-001-example.md
```

**Expected Outputs:**
- Working code following architectural standards
- Unit and integration tests
- Updated documentation
- Passing all quality gates

### Discovery vs. Delivery Mode

**Discovery Mode (Prototyping)**
- Used for exploring new ideas
- Lower quality bar, faster iteration
- Uses mocks and prototypes
- Follow: `agents/agent-software-engineer/PROTOTYPING_INSTRUCTIONS.md`

**Delivery Mode (Production)**
- Used for production-ready features
- Full quality requirements
- Complete testing and documentation
- Follow: `agents/agent-software-engineer/IMPLEMENTATION_INSTRUCTIONS.md`

## 🔄 Typical Workflow

### 1. Define Requirements (PM Agent)

```
PM Agent: Review these user stories and create a set of tasks for implementing 
user authentication with OAuth.
```

**Agent will:**
- Analyze requirements
- Break into independent tasks
- Update roadmap
- Create task files

### 2. Implement Feature (Engineer Agent)

```
Engineer Agent: Implement TASK-001-oauth-setup.md following production guidelines.
```

**Agent will:**
- Write code following architecture
- Extract business logic to services
- Create unit and integration tests
- Update API documentation
- Verify Definition of Done

### 3. Iterate (Either Agent)

```
PM Agent: TASK-001 is complete. What should we work on next?
```

or

```
Engineer Agent: The tests are failing. Please debug and fix.
```

## 📋 Building Your Requirements

### Start with Business Goals

```markdown
## Vision
We're building a platform that helps [TARGET USERS] to [ACHIEVE GOAL]

## Key Features
1. Feature A - allows users to...
2. Feature B - enables teams to...
3. Feature C - provides visibility into...
```

### Define Your MVP

```markdown
## MVP Scope
Must have:
- [ ] User authentication
- [ ] Core feature X
- [ ] Basic dashboard

Nice to have (post-MVP):
- [ ] Advanced reporting
- [ ] Third-party integrations
```

### Create Acceptance Criteria

```markdown
## Feature: User Login
- Users can login with email/password
- Invalid credentials show clear error
- Successful login redirects to dashboard
- Sessions expire after 24 hours
```

## 🏗️ Architectural Documentation

### Document Your Stack

```markdown
## Tech Stack
- **Framework**: Next.js 14 / React / Vue / Django / Rails / etc.
- **Language**: TypeScript / Python / Ruby / Go / etc.
- **Database**: PostgreSQL / MongoDB / MySQL / etc.
- **Testing**: Jest / Pytest / RSpec / etc.
```

### Define Code Standards

```markdown
## Code Organization
- API routes handle HTTP only
- Business logic lives in services
- No `any` types in TypeScript
- All functions must have tests
```

### Include Diagrams

Use Mermaid, ASCII art, or links to external diagrams to show:
- System architecture
- Data flow
- Component relationships

## ✅ Definition of Done Template

Customize this checklist for your project:

```markdown
## Definition of Done
- [ ] Code follows architectural standards
- [ ] Unit tests written and passing
- [ ] Integration tests for API changes
- [ ] Documentation updated
- [ ] Code review completed
- [ ] Builds successfully
- [ ] Deployed to staging
```

## 🎯 Tips for Success

### 1. Keep Documents Updated
- Update requirements as features are completed
- Maintain roadmap with current priorities
- Document architectural decisions

### 2. Be Specific in Requests
- ❌ "Add user authentication"
- ✅ "Act as PM agent: break down OAuth authentication into tasks following our architecture"

### 3. Reference Existing Work
```
Review the authentication implementation in src/auth/ and create similar 
tasks for the payment system.
```

### 4. Iterate and Refine
- Start with basic requirements
- Let agents ask clarifying questions
- Refine based on implementation learnings

### 5. Use Both Modes Appropriately
- **Discovery**: For new, uncertain features
- **Delivery**: For well-defined production features

## 📚 Example Conversations

### Planning a New Feature

```
You: Act as PM agent. I want to add a commenting system to our blog.

Agent: [Reads AGENTS.md and PM instructions]
I'll analyze this feature and create tasks. A few questions:
1. Do comments need moderation?
2. Should we support nested replies?
3. Authentication required or allow anonymous?

You: 1. Yes, admin approval. 2. No, flat comments. 3. Must be logged in.

Agent: [Creates tasks]
I've updated agents/ROADMAP.md with 4 tasks:
- TASK-015: Comment data model and API
- TASK-016: Comment submission form
- TASK-017: Admin moderation interface  
- TASK-018: Comment display component

Each task is independent and ready for implementation. Start with TASK-015.
```

### Implementing a Task

```
You: Act as Software Engineer agent. Implement TASK-015 in delivery mode.

Agent: [Reads engineer instructions and task file]
I'll implement the comment system following the architecture:
1. Create Comment model in database schema
2. Build comment-service with business logic
3. Create API routes (POST /api/comments, GET /api/posts/[id]/comments)
4. Write unit tests for service layer
5. Write integration tests for API routes

[Agent proceeds with implementation following all standards]
```

## 🔧 Customization Examples

### For a Python/Django Project

Adapt file paths and commands:
```markdown
## Project Structure
my_project/
├── agents/           # AI instructions
├── apps/            # Django apps
├── tests/           # Pytest tests
└── manage.py

## Testing Commands
- `pytest` - Run all tests
- `pytest --cov` - Coverage report
- `python manage.py test` - Django tests
```

### For a Mobile App

Adjust architecture for mobile patterns:
```markdown
## Architecture
- `src/screens/` - UI screens
- `src/services/` - Business logic and API calls
- `src/hooks/` - Reusable React Native hooks
- `src/components/` - Shared UI components

## Testing
- Jest for unit tests
- Detox for E2E tests
- Storybook for component development
```

### For a Go Project

```markdown
## Project Structure
project/
├── agents/          # AI instructions
├── cmd/            # Application entrypoints
├── internal/       # Private application code
├── pkg/            # Public libraries
└── tests/          # Integration tests

## Testing Commands
- `go test ./...` - Run all tests
- `go test -cover ./...` - Coverage report
```

## 📖 Additional Resources

- [Original Article by Mirek Stanek](https://www.practicalengineering.management/p/prototyping-with-ai-agents-pt1)
- [Interactive Init Tool](./agents-init.js) - Guided setup in 5 minutes

## 🤝 Contributing

This template is based on real-world usage. If you have improvements:
1. Test them in your project
2. Document what worked well
3. Share back with the community

## 📄 License

This framework is provided as-is for any use. Attribution to Mirek Stanek's original methodology is appreciated.

---

**Questions or Issues?** Run `agents-init` for guided setup or refer back to the original article.
