# AI Agent Development Framework

Structured markdown files that guide AI agents (ChatGPT, Claude, Cursor) to act as specialized team members with consistent workflows and quality standards.

Based on [Mirek Stanek's methodology](https://www.practicalengineering.management/p/prototyping-with-ai-agents-pt1) for AI-assisted software development.

## Quick Start

### Option 1: Interactive Setup (5 minutes)

```bash
# Clone and setup
git clone https://github.com/Quisharoo/agents-projects-structure.git
cd agents-projects-structure
npm install

# Navigate to your project and run init
cd /path/to/your-project
node /path/to/agents-projects-structure/agents-init.js
```

Answer the prompts, review your choices, and generate fully customized agent files. Done.

### Option 2: Manual Setup

```bash
cp -r TEMPLATE_AGENTS your-project/agents
cp -r TEMPLATE_AGENTS/tasks your-project/tasks
```

Replace placeholders in `agents/AGENTS.md`, `agents/BUSINESS_REQUIREMENTS.md`, and `agents/ARCHITECTURE.md`. See `TEMPLATE_AGENTS/QUICK_START.md` for details.

## Core Concepts

### Two Agent Personas

**Product Manager Agent** - Translates requirements into actionable tasks
- Breaks down features into independent, deployable units
- Creates task specs with acceptance criteria
- Maintains roadmap
- **Does not write code**

**Software Engineer Agent** - Implements following project standards
- Writes production-ready code with tests
- Follows architecture guidelines
- Two modes: Prototyping (quick/mocked) or Production (full quality)

### Key Documents

```
your-project/agents/
├── AGENTS.md                    # Entry point - role selection
├── BUSINESS_REQUIREMENTS.md     # What to build
├── ARCHITECTURE.md              # How to build it
├── UX_PRINCIPLES.md             # UX and usability standards
├── TESTING_PRINCIPLES.md        # Testing strategy
├── DEVELOPMENT_WORKFLOW.md      # Process and Definition of Done
├── ROADMAP.md                   # Current plan
├── agent-product-manager/
│   └── AGENTS.md                # PM instructions
└── agent-software-engineer/
    ├── AGENTS.md                # Engineer instructions
    ├── IMPLEMENTATION_INSTRUCTIONS.md   # Production code
    └── PROTOTYPING_INSTRUCTIONS.md      # Prototypes
```

## Usage

### Invoke an Agent

```
Act as the [Product Manager|Software Engineer] agent for MyProject.
Read agents/agent-[role]/AGENTS.md for your instructions.

Task: [YOUR REQUEST]
```

**Examples:**
- "Break down user authentication into independent tasks"
- "Implement tasks/TASK-001-user-login.md in production mode"
- "Prototype a payment flow UI with mocked data"

### Typical Workflow

1. **PM Agent**: Define requirements → Creates tasks + updates roadmap
2. **Engineer Agent**: Implement task → Writes code + tests
3. **Iterate**: Review, refine, repeat

## Universal Principles

These apply regardless of your tech stack:

**Architecture**
- Business logic in services, not routes/controllers
- Service layer pattern with clear separation of concerns
- Type safety throughout
- Explicit over implicit

**Testing**
- Tests ship with features, not separately
- Unit tests for business logic
- Integration tests for APIs
- Component tests for UI

**UX Quality**
- Follow usability heuristics (Nielsen's 10)
- WCAG 2.1 Level AA accessibility minimum
- Clear error messages with actionable guidance
- Keyboard navigation and screen reader support

**Workflow**
- One task = one feature branch = independently deployable
- Definition of Done enforced
- Quality gates before merge

## Customization

The templates work with any stack. Common presets included:
- Next.js / Django / Rails / Go / Express

Update placeholders for your:
- Project name and description
- Tech stack and commands
- File structure
- Testing approach

Keep the universal principles - they make software better.

## Documentation

- `QUICK_START.md` - 5-minute setup guide
- `INIT_TOOL_GUIDE.md` - Interactive setup tool details
- `IMPLEMENTATION_SUMMARY.md` - Framework overview
- Individual agent files - Detailed instructions

## Tech Stack Presets

Interactive init includes presets for:
- **Next.js** - TypeScript + PostgreSQL + Jest
- **Django** - Python + PostgreSQL + Pytest  
- **Rails** - Ruby + PostgreSQL + RSpec
- **Go** - PostgreSQL + Go test
- **Express** - TypeScript + PostgreSQL + Jest
- **Custom** - Configure manually

## Features

- ✅ Interactive CLI setup (git init style)
- ✅ Review and edit answers before generating
- ✅ Tech stack presets with smart defaults
- ✅ Comprehensive UX principles integration
- ✅ Universal quality standards
- ✅ Works with any framework/language
- ✅ Prototyping and production modes
- ✅ Task templates and examples

## Requirements

- Node.js 16+ (for interactive setup only)
- AI agent (ChatGPT, Claude, Cursor, etc.)
- Your project

## License

MIT - Use freely. Attribution to [Mirek Stanek's methodology](https://www.practicalengineering.management/p/prototyping-with-ai-agents-pt1) appreciated.

## Contributing

Improvements welcome. Test in your project first, then share what worked.

---

**Get started:** Run `agents-init` or copy the templates. See `QUICK_START.md` for details.
