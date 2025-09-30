# Prototyping Instructions – [YOUR_PROJECT_NAME]

This file defines how AI agents should handle **prototyping and discovery** tasks for your project.

---

## When to Use This Mode

Use **Discovery/Prototyping Mode** when:
- Translating **prototypes**, ambiguous requirements, or early exploration
- Tasks are exploratory, often open-ended, with uncertainty about solution or value
- Requirements are unclear and need validation
- Exploring new features, UI concepts, or workflows
- Task is marked as "Prototype" or "Discovery"

---

## Core Principles (Universal)

### Quick, Low-Fidelity Implementations
- Use mocked UI components
- Use fake/static data
- Create stubs for complex logic
- Focus on the concept, not polish

### Narrow Scope
- Goal is to learn quickly, not deliver production code
- Test specific hypotheses
- Validate assumptions
- Get feedback fast

### Multiple Options
- Suggest alternatives when useful
- Present trade-offs clearly
- Allow for pivoting quickly

### Ask Clarifying Questions
- When requirements are unclear
- When alternatives exist
- When trade-offs need decisions

### Minimal Complexity
- Focus on the core concept
- Ignore edge cases (document them)
- Skip comprehensive error handling
- Test happy path only

---

## Implementation Guidelines

### Code Standards for Prototypes

**Use Mocked Data**
```typescript
// Example: TypeScript
const mockUsers = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];
```

```python
# Example: Python
mock_users = [
    {'id': '1', 'name': 'Alice', 'email': 'alice@example.com'},
    {'id': '2', 'name': 'Bob', 'email': 'bob@example.com'},
]
```

**Use Component Libraries**
- Use your project's design system or component library
- Examples: shadcn/ui, Material-UI, Bootstrap, Tailwind components
- Avoid custom styling unless testing specific UI concepts

**Keep Code Simple**
- Prioritize readability over performance
- Use straightforward approaches
- Avoid premature optimization
- Document assumptions

**No Comprehensive Error Handling**
- Focus on happy path
- Basic validation only
- Simple error messages
- Full error handling deferred to production implementation

---

### File Organization

**Separate from Production Code**

All prototyped code must be isolated:
- Place in dedicated prototype directory
- Examples:
  - `app/prototypes/` or `app/views-proto/`
  - `prototypes/`
  - `src/prototype/`
  - `experiments/`

**Route Organization** (if web app)
- Use dedicated routes for previews
- Examples:
  - `/prototypes/*`
  - `/views-proto/*`
  - `/experiments/*`

**Clear File Naming**
- Name files clearly with prototype context
- Examples:
  - `payment-flow-prototype.tsx`
  - `dashboard-v2-experiment.py`
  - `search-ui-mock.vue`

---

### Data Handling

**Use Static Mock Data**
- Hard-code representative data
- Create realistic but fake data
- Use data that demonstrates the feature

**No Database Integration**
- No real database calls
- No API integrations
- Use in-memory data structures

**Focus on UI/UX Validation**
- How does it look?
- How does it feel to use?
- Is the workflow clear?
- Does it solve the user need?

---

## Checklist for Prototyping

**Before marking a prototype task as complete:**

- [ ] Create low-fidelity prototype for the feature
- [ ] Use mocked data and components
- [ ] Use your component library / design system
- [ ] Use dedicated route/directory for previews
- [ ] All prototyped code in designated prototype directory
- [ ] Document key assumptions made
- [ ] Document what you learned
- [ ] Tests pass (minimal testing required)
  ```bash
  [test-command]              # Basic smoke tests
  ```
- [ ] Build successful
  ```bash
  [build-command]             # Ensure it doesn't break build
  ```
- [ ] Linting clean
  ```bash
  [lint-command]              # Follow basic code standards
  ```

---

## Task Documentation

**For prototype tasks, ensure you document:**

### Clear Description
- What are you exploring?
- What problem are you trying to solve?
- What questions are you trying to answer?

### Assumptions Made
- What did you assume about user behavior?
- What technical assumptions did you make?
- What requirements are you uncertain about?

### Key Learnings
- What did you discover?
- What worked well?
- What didn't work?
- What surprised you?

### Questions Discovered
- What new questions emerged?
- What needs clarification?
- What needs further exploration?

### Recommendations for Next Steps
- Should we continue with this approach?
- Should we pivot to a different solution?
- Should we stop this direction?
- What should production implementation include?

### Screenshots or Demo Links
- Include visual documentation
- Record demo videos if helpful
- Link to deployed preview if available

---

## Transition to Production

**When a prototype is validated and ready for production:**

### 1. Create New Delivery Mode Task
- Don't just "productionize" the prototype
- Create proper task with full requirements
- Reference prototype for guidance

### 2. Reference the Prototype
- Link to prototype code
- Document what to keep
- Document what to change

### 3. Plan Proper Implementation
- Follow `IMPLEMENTATION_INSTRUCTIONS.md`
- Extract business logic to services
- Add comprehensive error handling
- Implement full test coverage
- Add proper validation
- Consider edge cases

### 4. Archive or Clean Up Prototype
- Move prototype to archive directory
- Or delete if no longer needed
- Don't let prototype code drift into production

---

## What NOT to Do in Prototypes

### ❌ Don't Build Production-Quality Code
- No need for service layer extraction (yet)
- No need for comprehensive testing
- No need for error handling edge cases
- No need for performance optimization

### ❌ Don't Integrate Real Systems
- No real database calls
- No real API integrations
- No real payment processing
- No real email sending

### ❌ Don't Spend Time on Polish
- Don't perfect the styling
- Don't optimize performance
- Don't handle all error cases
- Don't add comprehensive validation

### ❌ Don't Mix with Production Code
- Keep prototype code separate
- Don't modify production services
- Don't add prototype routes to production
- Don't deploy prototypes to production

---

## What TO Do in Prototypes

### ✅ Focus on Learning
- Test hypotheses quickly
- Get feedback from users
- Validate assumptions
- Discover unknowns

### ✅ Use Mocks Liberally
- Mock data
- Mock APIs
- Mock components
- Mock complex logic

### ✅ Document Learnings
- What worked?
- What didn't?
- What surprised you?
- What needs more exploration?

### ✅ Present Options
- Show multiple approaches
- Explain trade-offs
- Let stakeholders decide
- Be ready to pivot

---

## Example Prototype Structure

### Simple UI Prototype
```
prototypes/
├── payment-flow/
│   ├── page.tsx                  # Main prototype page
│   ├── mock-data.ts              # Fake data
│   ├── components/
│   │   ├── CheckoutForm.tsx      # Mocked form
│   │   └── PaymentSummary.tsx    # Display component
│   └── README.md                 # Learnings and next steps
```

### API Workflow Prototype
```
prototypes/
├── notification-system/
│   ├── routes.py                 # Prototype endpoints
│   ├── mock_data.py              # Sample data
│   ├── test_workflow.py          # Basic workflow tests
│   └── README.md                 # Documentation
```

---

## Prototype Review Checklist

**When reviewing a prototype, check:**

- [ ] **Clear Purpose**: Is it clear what's being explored?
- [ ] **Isolated Code**: Is prototype code separated from production?
- [ ] **Documented Learnings**: Are discoveries documented?
- [ ] **Recommendations**: Are next steps clear?
- [ ] **No Production Dependencies**: Does it not affect production code?
- [ ] **Demo Ready**: Can stakeholders see it working?

---

## Common Prototype Scenarios

### UI/UX Exploration
**Goal**: Validate user interface design

**Approach**:
1. Use component library
2. Hard-code mock data
3. Focus on layout and interactions
4. Get user feedback
5. Document what works

### Workflow Validation
**Goal**: Test if process makes sense

**Approach**:
1. Map out the steps
2. Build simple implementation
3. Test with users
4. Find pain points
5. Refine workflow

### Technical Feasibility
**Goal**: Can we build this?

**Approach**:
1. Build simple proof of concept
2. Test key technical challenges
3. Identify blockers
4. Estimate complexity
5. Recommend approach

### Feature Discovery
**Goal**: What should this feature do?

**Approach**:
1. Build multiple variations
2. Present options to stakeholders
3. Get feedback
4. Identify preferred direction
5. Define requirements

---

## Anti-Patterns to Avoid

### ❌ Prototype Becomes Production
- Prototypes are not production-ready
- Don't just "clean up" a prototype
- Rebuild with production standards

### ❌ Over-Engineering Prototypes
- Don't add unnecessary complexity
- Don't optimize prematurely
- Keep it simple

### ❌ No Documentation
- Always document learnings
- Explain what you discovered
- Provide recommendations

### ❌ Ignoring Feedback
- Prototypes are for learning
- Listen to user feedback
- Be ready to pivot

### ❌ Mixing Prototype and Production
- Keep code separate
- Don't modify production services
- Clear boundaries

---

## Success Criteria for Prototypes

**A prototype is successful when:**

✅ Answers the key questions
✅ Validates or invalidates hypotheses
✅ Gathers useful feedback
✅ Provides clear next steps
✅ Documents learnings
✅ Demonstrates the concept clearly
✅ Informs production implementation decisions

**Not when:**
- It's production-ready (that's not the goal)
- It's perfect (that's wasteful)
- It handles all edge cases (out of scope)

---

## Customization Instructions

To adapt these prototyping instructions for your project:

1. **Update prototype directory path** to match your project structure
2. **Specify your component library** or design system
3. **Add project-specific patterns** for prototyping
4. **Update build/test commands** for your stack
5. **Keep universal principles**:
   - Quick and lightweight
   - Mocked data only
   - Isolated from production
   - Document learnings
   - Clear next steps

These principles apply to effective prototyping in any software project.
