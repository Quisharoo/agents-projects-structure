# agents-init - Interactive Setup Tool

A guided CLI tool to initialize your AI agent development framework in minutes.

## Installation

### Requirements
- Node.js 16.0.0 or higher
- npm (comes with Node.js)

### Setup (First Time Only)

**IMPORTANT**: Before running the script, you must install dependencies:

```bash
# Navigate to the agents-project-structure directory
cd /path/to/agents-project-structure

# Install dependencies (inquirer, chalk, fs-extra)
npm install
```

This only needs to be done once. The script will check for dependencies and show a helpful error if they're missing.

**Optional** - Make script executable (Unix/Mac):
```bash
chmod +x agents-init.js
```

## Usage

### Method 1: Run from Project Directory

Navigate to YOUR project directory and run the init script:

```bash
cd /path/to/your-project
node /path/to/agents-project-structure/agents-init.js
```

### Method 2: Run Locally (for testing)

Run from the agents-project-structure directory:

```bash
cd /path/to/agents-project-structure
node agents-init.js
```

This will create `agents/` and `tasks/` folders in your current directory.

### Method 3: Global Installation (future)

```bash
npm install -g @agents-framework/init
agents-init
```

## What It Does

The script guides you through a series of prompts to:

### 1. Project Setup (3 questions)
- **Project name**: e.g., "Task Tracker"
- **Description**: One-line description of your app
- **Target users**: Who will use this app

### 2. Tech Stack Selection (Smart Presets)
Choose from common presets or customize:

**Available Presets:**
1. **Next.js** - TypeScript + PostgreSQL + Jest
2. **Django** - Python + PostgreSQL + Pytest
3. **Rails** - Ruby + PostgreSQL + RSpec
4. **Go** - Go + PostgreSQL + Go test
5. **Express.js** - TypeScript + PostgreSQL + Jest
6. **Custom** - Configure manually

Each preset automatically fills in:
- Framework, language, database
- Testing framework
- Project structure (directories)
- Common commands (test, build, dev server, lint)

### 3. Feature Planning (MVP Definition)
- Describe the problem your app solves
- Define 3-5 core capabilities
- Optionally define your first feature → generates TASK-001

### 4. Review and Edit
- Shows summary of all choices
- Options to:
  - Generate files (proceed)
  - Edit project details
  - Edit tech stack
  - Edit features
  - Cancel and exit
- Loop back to any section to make changes
- Only generates files when you're satisfied

### 5. File Generation
Creates fully customized files with all placeholders replaced:
- ✅ `agents/AGENTS.md`
- ✅ `agents/BUSINESS_REQUIREMENTS.md`
- ✅ `agents/ARCHITECTURE.md`
- ✅ `agents/TESTING_PRINCIPLES.md`
- ✅ `agents/DEVELOPMENT_WORKFLOW.md`
- ✅ `agents/ROADMAP.md`
- ✅ `agents/agent-product-manager/AGENTS.md`
- ✅ `agents/agent-software-engineer/AGENTS.md`
- ✅ `agents/agent-software-engineer/IMPLEMENTATION_INSTRUCTIONS.md`
- ✅ `agents/agent-software-engineer/PROTOTYPING_INSTRUCTIONS.md`
- ✅ `tasks/TASK_TEMPLATE.md`
- ✅ `tasks/TASK-001-[feature].md` (if created)

## Example Session

```bash
$ node agents-init.js

🤖 AI Agent Framework Initializer
==================================

Let's set up your AI-assisted development environment!

📦 Project Setup
----------------
Project name: task-tracker
Description: A simple task management app for freelancers
Target users: freelance developers and designers

🛠️  Tech Stack
--------------
Choose a preset or customize:
  1. Next.js (TypeScript + PostgreSQL)
  2. Django (Python + PostgreSQL)
  3. Rails (Ruby + PostgreSQL)
  4. Go (PostgreSQL)
  5. Express.js (TypeScript + PostgreSQL)
  6. Custom (I'll configure manually)

Your choice [1]: 1

✓ Using Next.js preset
  - Framework: Next.js 15
  - Language: TypeScript
  - Database: PostgreSQL
  - Testing: Jest
  - ORM: Prisma

Customize? [y/N]: n

🎯 Feature Planning (PM Mode)
------------------------------
What problem does your app solve?
> Freelancers need a simple way to track tasks and time

Describe your MVP in 3-5 core capabilities (press Enter when done):
1. Create and manage tasks
2. Track time spent on each task
3. View task history

Want to define your first feature now? [Y/n]: y
First feature: User can create a new task

✅ Summary
----------
Project: task-tracker
Stack: Next.js 15 + TypeScript + PostgreSQL
Features: 3 core capabilities defined
Tasks: 1 task created

What would you like to do?
  ❯ Generate files (proceed)
    Edit project details
    Edit tech stack
    Edit features
    Cancel and exit

[Selected: Generate files (proceed)]

✨ Creating files...
  ✓ agents/AGENTS.md
  ✓ agents/BUSINESS_REQUIREMENTS.md
  ✓ agents/ARCHITECTURE.md
  ... (all files generated)

🚀 Next Steps:
  1. Review agents/BUSINESS_REQUIREMENTS.md
  2. Review agents/ARCHITECTURE.md
  3. Start with: "Act as Software Engineer agent. Implement tasks/TASK-001-*.md"

Done! Your AI agent framework is ready for task-tracker. 🎉
```

## Features

### Smart Defaults
- Press Enter to accept defaults
- Common tech stacks pre-configured
- Sensible project structure for each framework

### Validation
- Required fields enforced
- Minimum 3 capabilities required for MVP
- Checks for existing `agents/` directory before overwriting

### Safety
- Confirms before overwriting existing files
- Shows complete summary before generation
- Can cancel at any time with Ctrl+C
- Can edit any section before final generation
- Multiple review loops supported

### Customization
- Use presets as-is for speed
- Customize any preset
- Full manual configuration available

## Tech Stack Presets

### Next.js Preset
```
Framework: Next.js 15
Language: TypeScript
Database: PostgreSQL
ORM: Prisma
Testing: Jest
Structure:
  - app/ (source)
  - lib/services/ (business logic)
  - components/ (UI)
  - tests/ (tests)
Commands:
  - npm test
  - npm run build
  - npm run dev
```

### Django Preset
```
Framework: Django
Language: Python 3.11+
Database: PostgreSQL
ORM: Django ORM
Testing: Pytest
Structure:
  - apps/ (source)
  - apps/services/ (business logic)
  - templates/ (UI)
  - tests/ (tests)
Commands:
  - pytest
  - python manage.py runserver
```

(See `tech-stack-presets.js` for all presets)

## Advanced Usage

### Running for Multiple Projects

The script can be run multiple times for different projects:

```bash
# Project 1
cd ~/projects/task-tracker
node /path/to/agents-init.js

# Project 2
cd ~/projects/blog-platform
node /path/to/agents-init.js
```

Each run creates a fresh, customized setup.

### Customizing Presets

Edit `tech-stack-presets.js` to:
- Add new framework presets
- Modify existing presets
- Add your organization's standards

### Integration with Project Templates

Combine with project generators:

```bash
# Create Next.js project
npx create-next-app my-app
cd my-app

# Add AI agent framework
node /path/to/agents-init.js
```

## Troubleshooting

### "Module not found"
Run `npm install` in the agents-project-structure directory.

### "Permission denied"
Run `chmod +x agents-init.js` (Unix/Mac).

### "agents/ directory already exists"
The script will ask if you want to overwrite. Choose 'y' to replace or 'n' to cancel.

### Script hangs or doesn't respond
Press Ctrl+C to cancel and try again.

## What Gets Generated

All files in `TEMPLATE_AGENTS/` are copied and customized with:
- `[YOUR_PROJECT_NAME]` → Your project name
- `[BRIEF_DESCRIPTION]` → Your description
- `[TARGET_USERS]` → Your target users
- `[FRAMEWORK/LANGUAGE]` → Your framework
- `[DATABASE]` → Your database
- `[test-command]` → Your test command
- All other placeholders replaced with your answers

## Next Steps After Running

1. **Review generated files**:
   - `agents/BUSINESS_REQUIREMENTS.md` - Verify features
   - `agents/ARCHITECTURE.md` - Customize structure
   - `agents/ROADMAP.md` - Check initial plan

2. **Start coding**:
   ```
   Act as Software Engineer agent for [YOUR_PROJECT].
   Read agents/agent-software-engineer/AGENTS.md for instructions.
   Implement tasks/TASK-001-[feature].md
   ```

3. **Iterate**:
   - Add more tasks with PM agent
   - Implement with Engineer agent
   - Refine based on learnings

## Contributing

To improve the init tool:
1. Test with different tech stacks
2. Add more presets to `tech-stack-presets.js`
3. Enhance prompts in `agents-init.js`
4. Document patterns that work well

---

**Happy building!** 🚀

