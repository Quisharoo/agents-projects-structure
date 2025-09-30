# Framework Capabilities

Quick reference for what this framework can do, what each agent does, and what's out of scope.

## What Has Been Implemented

### Core Framework
- ✅ Interactive CLI initialization (`agents-init.js`)
- ✅ Two specialized agent personas (PM + Engineer)
- ✅ Complete documentation templates
- ✅ Task management system
- ✅ 9 tech stack presets (5 full-stack + 4 frontend-only)

### Quality Standards
- ✅ Architecture principles (service layer pattern, separation of concerns)
- ✅ Testing requirements (unit, integration, component)
- ✅ **Browser/functional testing mandated** for user-facing features
- ✅ UX principles (Nielsen's heuristics, WCAG 2.1 AA accessibility)
- ✅ Definition of Done with quality gates

### Tech Stack Support
**Full-Stack:**
- Next.js + PostgreSQL
- Django + PostgreSQL
- Rails + PostgreSQL
- Go + PostgreSQL
- Express + PostgreSQL

**Frontend-Only (No Database):**
- React + Vite
- Next.js (frontend only)
- Vue 3 + Vite
- Static sites (HTML/CSS/JS)

---

## Agent Capabilities

### Product Manager Agent CAN:
- ✅ Break down requirements into independent, deployable tasks
- ✅ Create detailed task specifications with acceptance criteria
- ✅ Update and maintain roadmap
- ✅ Define testing requirements (including browser testing)
- ✅ Document technical decisions
- ✅ Prioritize work based on business value

### Product Manager Agent CANNOT:
- ❌ Write production code
- ❌ Implement features
- ❌ Run tests or debug
- ❌ Make architectural decisions (only documents them)

### Software Engineer Agent CAN:
- ✅ Implement features following architecture standards
- ✅ Write production-ready code with proper separation of concerns
- ✅ Create unit, integration, and component tests
- ✅ **Perform browser/functional testing** (mandatory for UI)
- ✅ Verify UX quality and accessibility
- ✅ Refactor and improve code quality
- ✅ Update documentation
- ✅ Work in two modes:
  - **Prototyping:** Quick mocks with lower quality bar
  - **Production:** Full quality with all tests and standards

### Software Engineer Agent CANNOT:
- ❌ Change business requirements
- ❌ Reprioritize roadmap
- ❌ Skip quality gates (tests, linting, browser testing)
- ❌ Deploy to production (that's on you)

---

## What's Out of Scope

### Framework Does NOT Provide:
- ❌ Actual code implementation (just templates and guidance)
- ❌ CI/CD pipelines (you configure based on your setup)
- ❌ Deployment automation
- ❌ Infrastructure as code
- ❌ Monitoring/observability setup
- ❌ Security scanning tools
- ❌ Package management (you use npm/pip/etc.)
- ❌ Version control (you use git)

### Agents Will NOT:
- ❌ Make business decisions for you
- ❌ Choose your tech stack (you choose via prompts)
- ❌ Deploy your application
- ❌ Manage your infrastructure
- ❌ Write marketing copy or business plans
- ❌ Replace human code review
- ❌ Guarantee bug-free code

---

## Key Workflows

### Starting a New Project
1. Run `agents-init.js` from your project directory
2. Answer prompts (project name, tech stack, MVP capabilities)
3. Review generated `agents/` and `tasks/` folders
4. Invoke PM agent to create tasks
5. Invoke Engineer agent to implement

### Implementing a Feature
1. PM agent creates task file with acceptance criteria
2. Engineer agent reads task + architecture docs
3. Engineer implements with tests
4. **Engineer browser tests** (mandatory for UI features)
5. All quality gates pass (tests, lint, build, browser test)
6. Feature is done

### Two Development Modes
- **Prototyping:** Fast exploration with mocked data
- **Production:** Full quality with tests and standards

Switch modes per-task based on requirements clarity.

---

## Browser Testing Emphasis

**New in this version:** Browser/functional testing is now **mandatory** for user-facing features.

### What This Means:
- Unit/integration tests alone are NOT sufficient
- Engineer must open feature in actual browser
- Test complete user flows end-to-end
- Verify forms, navigation, error states
- Test on Chrome, Firefox, Safari (minimum)
- Check console for errors (must be clean)
- Verify mobile responsive behavior

### Why:
Passing automated tests ≠ working feature. Browser testing catches:
- CSS/styling issues
- Real user interaction problems
- Browser-specific bugs
- JavaScript errors in production
- Network/timing issues

---

## Quick Decision Matrix

**"Should I use the PM agent or Engineer agent?"**

| Task | Use Agent |
|------|-----------|
| Break down a feature | PM |
| Define acceptance criteria | PM |
| Update roadmap | PM |
| Write code | Engineer |
| Fix a bug | Engineer |
| Write tests | Engineer |
| Browser test a feature | Engineer |
| Refactor code | Engineer |

**"Should I use Prototyping or Production mode?"**

| Situation | Mode |
|-----------|------|
| Requirements unclear | Prototyping |
| Exploring UI concepts | Prototyping |
| Need quick feedback | Prototyping |
| Requirements are clear | Production |
| Building for production | Production |
| Fixing bugs | Production |

---

## Support & Customization

### This Framework IS:
- ✅ A structured approach to AI-assisted development
- ✅ Templates you customize for your project
- ✅ Universal principles for quality software
- ✅ Reusable across projects and tech stacks

### You Still Need To:
- Write/review the actual code
- Set up your development environment
- Configure CI/CD
- Deploy your application
- Manage infrastructure
- Make business decisions
- Review agent output for correctness

---

**Bottom Line:** This framework guides AI agents to follow best practices and quality standards. It makes AI-assisted development more structured and consistent. But **you're still the developer** - agents are assistants, not replacements.
