# TASK-XXX: [Task Title]

**Status**: [ ] Not Started | [ ] In Progress | [ ] Completed | [ ] Blocked  
**Type**: [ ] Feature | [ ] Bug Fix | [ ] Refactor | [ ] Prototype | [ ] Documentation  
**Mode**: [ ] Discovery (Prototyping) | [ ] Delivery (Production Implementation)  
**Priority**: [ ] High | [ ] Medium | [ ] Low  
**Estimated Effort**: [S / M / L] or [X hours/days]  
**Created**: [DATE]  
**Updated**: [DATE]

---

## Description

**What**: [Clear description of what needs to be done]

**Why**: [Business value or problem this solves]

**Context**: [Any relevant background information, related features, or dependencies]

---

## Acceptance Criteria

**The task is complete when:**

- [ ] [Specific, testable condition 1]
- [ ] [Specific, testable condition 2]
- [ ] [Specific, testable condition 3]
- [ ] [Add more as needed]

**Example criteria:**
- [ ] User can successfully login with email and password
- [ ] Invalid credentials show clear error message
- [ ] Successful login redirects to dashboard
- [ ] Session persists for 24 hours
- [ ] "Remember me" checkbox extends session to 30 days

---

## Technical Approach

### Proposed Solution
[High-level approach to solving this]

### Files to Create/Modify
- [ ] `[path/to/file]` - [What changes]
- [ ] `[path/to/another-file]` - [What changes]
- [ ] Add more as needed

### Architecture Considerations
- **Service Layer**: [What services need to be created/modified]
- **API/Routes**: [What endpoints are affected]
- **Database**: [Any schema changes needed]
- **UI Components**: [What UI components are affected, if applicable]

### Dependencies
- **Prerequisite tasks**: [List of tasks that must be completed first]
- **Related tasks**: [Tasks that are related but not blocking]
- **External dependencies**: [Third-party services, libraries, etc.]

### Risks & Challenges
- [Potential risk 1 and mitigation strategy]
- [Potential risk 2 and mitigation strategy]
- [Add more as needed]

---

## Testing Requirements

### Unit Tests Required
- [ ] Test [specific business logic in service]
- [ ] Test [validation rules]
- [ ] Test [error handling scenarios]
- [ ] Test [edge cases]

**Test files to create/modify:**
- `[path/to/test-file]`

### Integration Tests Required
- [ ] Test [API endpoint happy path]
- [ ] Test [API endpoint error cases]
- [ ] Test [data flow through system]

**Test files to create/modify:**
- `[path/to/integration-test]`

### Component Tests Required (if UI changes)
- [ ] Test [user interaction]
- [ ] Test [form submission]
- [ ] Test [accessibility]

**Test files to create/modify:**
- `[path/to/component-test]`

### Manual Testing Checklist
- [ ] [Manual test case 1]
- [ ] [Manual test case 2]
- [ ] [Manual test case 3]

---

## Implementation Notes

### Code Standards to Follow
- Extract business logic to service layer (not in routes/controllers)
- Maintain type safety (no `any` types in TypeScript, proper type hints in Python, etc.)
- Follow naming conventions from `agents/ARCHITECTURE.md`
- Ensure proper error handling
- Add logging for important operations

### Database Migrations (if applicable)
- [ ] Schema changes documented
- [ ] Migration file created
- [ ] Rollback plan considered
- [ ] Data integrity verified

**Migration details:**
```
[Describe schema changes here]
```

### API Changes (if applicable)
- [ ] Endpoint(s): `[HTTP METHOD] /api/path`
- [ ] Request schema documented
- [ ] Response schema documented
- [ ] Error responses documented
- [ ] API documentation updated

**API Contract:**
```
Request:
POST /api/[endpoint]
{
  "field1": "value",
  "field2": 123
}

Response (Success):
{
  "success": true,
  "data": { ... }
}

Response (Error):
{
  "success": false,
  "error": "Error message"
}
```

### UI/UX Notes (if applicable)
- Design references: [Link to Figma, screenshots, or prototype]
- Accessibility requirements: [WCAG level, specific concerns]
- Responsive design: [Mobile, tablet, desktop considerations]
- Browser support: [Required browser versions]

---

## Definition of Done

**This task is complete when ALL criteria are met:**

### Code Quality
- [ ] Business logic extracted to service layer (not in routes/controllers)
- [ ] No code duplication
- [ ] Proper type safety maintained
- [ ] Code follows architectural standards from `agents/ARCHITECTURE.md`
- [ ] Clear variable and function names
- [ ] Complex logic documented with comments

### Testing
- [ ] Unit tests written and passing
- [ ] Integration tests written and passing (if applicable)
- [ ] Component tests written and passing (if applicable)
- [ ] All tests pass: `[test-command]`
- [ ] Test coverage meets requirements

### Quality Gates
- [ ] Build successful: `[build-command]`
- [ ] Linting clean: `[lint-command]`
- [ ] Type checking passes: `[type-check-command]` (if applicable)
- [ ] No console errors or warnings
- [ ] Manual testing completed

### Documentation
- [ ] API documentation updated (if endpoints changed)
- [ ] Code comments added for complex logic
- [ ] README updated (if setup changed)
- [ ] Architecture docs updated (if patterns changed)

### Database (if applicable)
- [ ] Schema changes tested
- [ ] Migrations created and committed
- [ ] Migrations tested (up and down)
- [ ] Data integrity verified

### Review Ready
- [ ] All acceptance criteria met
- [ ] Code is ready for review
- [ ] Commits follow conventions
- [ ] Branch is up to date with main/develop

---

## Branch Information

**Suggested Branch Name**: `[feature|bugfix|prototype|refactor]/[short-descriptive-name]`

**Example**: `feature/user-authentication`

---

## Resources & References

### Related Documents
- `agents/BUSINESS_REQUIREMENTS.md` - [Section reference]
- `agents/ARCHITECTURE.md` - [Pattern to follow]
- `agents/TESTING_PRINCIPLES.md` - [Testing approach]

### Related Tasks
- Depends on: `TASK-XXX` - [Task name]
- Related to: `TASK-YYY` - [Task name]
- Enables: `TASK-ZZZ` - [Task name]

### External Resources
- [Link to design mockups]
- [Link to API documentation]
- [Link to relevant article or documentation]
- [Link to user stories or requirements]

### Example Code
- [Path to similar implementation in codebase]
- [Link to code example or tutorial]

---

## Notes & Questions

### Questions to Resolve
- [ ] [Question 1 that needs answering]
- [ ] [Question 2 that needs clarification]

### Assumptions
- [Assumption 1 about requirements or behavior]
- [Assumption 2 about technical approach]

### Decisions Made
**[DATE]**: [Decision about X] - [Rationale]
**[DATE]**: [Decision about Y] - [Rationale]

### Learnings & Improvements
[To be filled during/after implementation]
- [What went well]
- [What could be improved]
- [Technical debt identified]
- [Suggestions for future tasks]

---

## Progress Log

### [DATE] - Task Created
- Initial task created by [Name/Agent]
- Added to roadmap

### [DATE] - Started Implementation
- Checked out branch: `[branch-name]`
- Implementation started

### [DATE] - Update
- [Progress update or blocker information]

### [DATE] - Completed
- PR created: #[number]
- Merged to main/develop
- Deployed to [environment]

---

## Customization Instructions

**To use this template for your project:**

1. **Copy this file** to `tasks/TASK-XXX-[descriptive-name].md` where XXX is the next task number
2. **Fill in all sections** - Delete sections that don't apply, but keep Definition of Done
3. **Be specific** in acceptance criteria - Should be testable, not vague
4. **Link to requirements** - Connect task back to business value
5. **Update as you learn** - This is a living document, update as implementation progresses
6. **Use checkboxes** - Track progress through checkboxes
7. **Document decisions** - Record why choices were made

**Sections to always include:**
- Description (What/Why/Context)
- Acceptance Criteria
- Testing Requirements
- Definition of Done
- Branch Information

**Sections to include when relevant:**
- Technical Approach (for complex tasks)
- API Changes (for backend work)
- UI/UX Notes (for frontend work)
- Database Migrations (for schema changes)
- Resources & References (helpful links)

**Keep it concise but complete** - Enough detail for anyone to pick up the task, not so much that it's overwhelming.
