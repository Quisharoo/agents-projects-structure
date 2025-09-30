# UX Principles – [YOUR_PROJECT_NAME]

_Last updated: [DATE]_

This document provides **foundational principles and actionable rules** for building user-centric applications with AI agents.  
It synthesizes established UX systems with agent-specific principles so that agents can consistently produce **clear, usable, and accessible** design decisions.

---

## 🎯 Purpose

Every AI agent working on [YOUR_PROJECT_NAME] must apply these principles when:
- **Designing UI components** and interaction flows
- **Writing user-facing messages** and error handling
- **Creating onboarding** experiences
- **Building agent feedback systems**
- **Making architectural decisions** that affect user experience

**UX quality is non-negotiable** and must be verified at every stage of development.

---

## Core Design Systems

### Material Design (Google)
- Mobile-first, component-based design language
- Prioritize clarity, hierarchy, and adaptable layouts
- Use Material's documentation for building **responsive and scalable** interfaces
- Reference: [Material Design Guidelines](https://m3.material.io/)

### Apple Human Interface Guidelines (HIG)
- Principles: clarity, deference, depth
- Ensure intuitive interactions by following familiar mobile and desktop patterns
- Respect platform norms for modals, alerts, and navigation
- Reference: [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

**Agent Guidance:** Choose the system that matches your target platform. For web apps, Material Design is recommended. For iOS/macOS apps, follow HIG strictly.

---

## Nielsen Norman Group's 10 Usability Heuristics

Agents must check **every design decision** against these rules:

### 1. Visibility of System Status
**Rule:** Always show progress, updates, or results.
- Show loading states for async operations
- Display progress bars for multi-step processes
- Provide real-time feedback on user actions
- **Example:** "Saving changes..." with spinner, then "Changes saved ✓"

### 2. Match Between System and Real World
**Rule:** Use human terms, not machine jargon.
- Avoid technical error codes without explanation
- Use familiar metaphors (folders, trash, inbox)
- Present information in logical, natural order
- **Example:** "Unable to save document" not "Error 500: Internal Server Error"

### 3. User Control and Freedom
**Rule:** Always allow undo, redo, or exit.
- Provide "Cancel" on all multi-step flows
- Support undo for destructive actions
- Allow users to exit without losing progress
- **Example:** "Delete" button should have confirmation or undo option

### 4. Consistency and Standards
**Rule:** Reuse patterns; avoid surprises.
- Use consistent button styles (primary, secondary, danger)
- Maintain consistent navigation across pages
- Follow platform conventions
- **Example:** "Submit" buttons always in same position; colors mean the same thing

### 5. Error Prevention
**Rule:** Block obvious mistakes before they happen.
- Validate input as user types
- Disable invalid actions
- Provide constraints (date pickers, dropdowns)
- **Example:** Disable "Submit" until required fields are filled

### 6. Recognition Rather Than Recall
**Rule:** Keep choices and information visible.
- Show recently used items
- Display current selection/state
- Use visual indicators over memory-dependent interactions
- **Example:** Show selected filters instead of requiring users to remember them

### 7. Flexibility and Efficiency of Use
**Rule:** Support shortcuts for experts; keep defaults simple.
- Provide keyboard shortcuts
- Allow batch operations
- Offer advanced modes that can be hidden
- **Example:** "Ctrl+S" to save; bulk select with checkboxes for power users

### 8. Aesthetic and Minimalist Design
**Rule:** Remove clutter; highlight essentials.
- Every element should serve a purpose
- Hide advanced options behind "More" or "Advanced"
- Use white space effectively
- **Example:** Show 3-5 most important actions; hide others in menu

### 9. Help Users Recognize, Diagnose, and Recover from Errors
**Rule:** Use plain-language error messages with clear next steps.
- Explain what went wrong in human terms
- Suggest specific actions to fix the problem
- Provide links to relevant help docs
- **Example:** "Email already in use. Try signing in or use 'Forgot password'."

### 10. Help and Documentation
**Rule:** Provide guidance on demand, not by default.
- Include tooltips for complex features
- Link to docs from error messages
- Provide contextual help
- **Example:** "?" icon next to complex fields with helpful explanation

---

## Psychological Laws of UX

These laws explain **why** certain patterns work. Apply them to guide design decisions:

### Jakob's Law
**"Users spend most of their time on other sites."**
- Reuse patterns users already know from popular apps
- Don't reinvent navigation, forms, or common interactions
- **Example:** Put logo in top-left; it links to home (universal pattern)

### Miller's Law
**"The average person can hold 7±2 items in working memory."**
- Present <7 items at once in menus or lists
- Chunk complex information into digestible groups
- **Example:** Break long forms into 3-5 steps; show 5-7 menu items max

### Hick's Law
**"The time to make a decision increases with number of choices."**
- Fewer choices = faster decisions
- Hide advanced options by default
- **Example:** Offer 3 plans (Basic, Pro, Enterprise) not 10 variations

### Fitts's Law
**"The time to acquire a target is a function of distance and size."**
- Make important actions large and reachable
- Place frequently used buttons in easy-to-reach areas
- **Example:** Primary CTA should be largest button; secondary smaller

### Peak-End Rule
**"People judge experiences by peak moment and final step."**
- Ensure the best moment feels delightful
- Make the final step (confirmation, success) feel positive
- **Example:** Celebratory animation on task completion; positive final message

### Tesler's Law (Law of Conservation of Complexity)
**"Complexity cannot be removed, only moved."**
- Hide system complexity unless explicitly requested
- Simplify UI by handling complexity in the backend
- **Example:** Smart defaults; users shouldn't configure technical details

---

## Agent-Specific UX Principles

When AI agents make design or implementation decisions, apply these additional rules:

### 1. Transparency by Default
**Rule:** Show what action you took and why.
- Display clear status messages after agent actions
- Offer reasoning summaries, not raw logs (unless asked)
- Make agent decisions visible and understandable
- **Example:** "I created 3 files based on your Next.js preset" with list of files

### 2. User Authority at Every Step
**Rule:** Never lock users into an agent choice.
- Provide override, cancel, and retry options
- Allow users to edit agent-generated content
- Support manual intervention at any point
- **Example:** Show summary before generating files; allow editing

### 3. Progressive Autonomy
**Rule:** Default to assistive behavior; escalate when user is ready.
- Start with suggestions, not automatic actions
- Allow users to increase agent autonomy gradually
- Respect user's comfort level with automation
- **Example:** First suggest changes, then offer to "Apply all" once trust is built

### 4. Context Preservation
**Rule:** Reuse prior context to reduce repetition.
- Remember previous answers, files, and decisions
- Confirm context reuse before acting if ambiguity exists
- Show what context is being used
- **Example:** "Using your previous tech stack (Next.js)..."

### 5. Trust and Feedback Loops
**Rule:** Show confidence levels or uncertainty.
- Express uncertainty instead of guessing silently
- Ask for clarification when ambiguous
- Show confidence in recommendations
- **Example:** "I'm 90% sure this is what you meant. Is this correct?"

### 6. Graceful Degradation
**Rule:** Fail safe with clear explanation.
- If agent cannot proceed, explain why in human terms
- Suggest alternative approaches or next steps
- Provide manual override option
- **Example:** "I can't access that file. Would you like to specify the path manually?"

---

## Design Strategies for Agent-Assisted Development

### Component-Driven Development
- Build reusable UI elements with clear APIs
- Document component usage with examples
- Maintain a component library
- **Example:** Create `<Button>`, `<Card>`, `<Modal>` once; reuse everywhere

### Progressive Disclosure
- Reveal complexity step by step
- Start simple; show advanced options on demand
- Use expandable sections for details
- **Example:** Show basic form first; "Advanced options" link reveals more fields

### Accessible Design
- Comply with WCAG 2.1 Level AA standards minimum
- Support keyboard navigation
- Provide alt text for images
- Ensure sufficient color contrast
- Test with screen readers
- **Example:** All interactive elements accessible via Tab key; focus indicators visible

### Feedback Loops
- Give immediate, contextual responses to actions
- Show loading states (never leave users guessing)
- Confirm destructive actions before executing
- **Example:** Button shows spinner while saving; then success message

### Error Handling
- Anticipate failures and suggest fixes
- Validate early (client-side before server)
- Provide actionable error messages
- **Example:** "Password must be 8+ characters" while user types, not after submit

### Developer Workflow Alignment
- Support keyboard shortcuts for power users
- Provide dark mode option
- Allow reversible automation (undo/redo)
- Respect user's preferred tools and patterns
- **Example:** Ctrl+S saves; Cmd+Z undoes; dark mode respects system preference

---

## UX Verification Checklist

Before marking any feature complete, verify:

### Design Phase
- [ ] Follows established design system (Material/HIG)
- [ ] Adheres to all 10 usability heuristics
- [ ] Applies relevant psychological laws
- [ ] Considers agent-specific principles
- [ ] Supports accessibility requirements (WCAG 2.1 AA)

### Implementation Phase
- [ ] All user-facing text is clear and human-readable
- [ ] Loading states shown for all async operations
- [ ] Error messages are helpful with next steps
- [ ] Destructive actions have confirmation
- [ ] Keyboard navigation works completely
- [ ] Mobile responsive (if web app)
- [ ] Dark mode supported (if applicable)

### Testing Phase
- [ ] Manual UX testing completed
- [ ] Tested with keyboard only
- [ ] Tested on target devices/browsers
- [ ] Error states tested and verified
- [ ] Edge cases handled gracefully
- [ ] User can undo or cancel at any point

### Agent-Specific
- [ ] Agent actions are transparent and visible
- [ ] User has control and override options
- [ ] Context is preserved appropriately
- [ ] Uncertainty is communicated clearly
- [ ] Graceful degradation on failures

---

## UI Component Guidelines

### Buttons
- **Primary**: One per screen; most important action
- **Secondary**: Alternative actions
- **Danger**: Destructive actions (red/warning color)
- **Size**: Large enough to tap easily (min 44x44px)
- **State**: Disabled, loading, hover, focus

### Forms
- **Labels**: Always visible, not placeholders only
- **Validation**: Real-time feedback as user types
- **Required fields**: Clearly marked with asterisk
- **Error display**: Next to field, not just at top
- **Success**: Confirm submission with clear message

### Modals/Dialogs
- **Purpose**: Require immediate attention
- **Actions**: Clearly labeled (not just "OK"/"Cancel")
- **Escape**: Always allow closing (X button + Esc key)
- **Focus**: Trap focus inside modal
- **Backdrop**: Dim background to focus attention

### Navigation
- **Consistency**: Same structure across app
- **Current location**: Clearly indicated
- **Breadcrumbs**: For deep hierarchies
- **Mobile**: Hamburger menu or bottom nav

### Feedback
- **Success**: Green with checkmark, auto-dismiss after 3-5s
- **Error**: Red with clear message, stays visible
- **Warning**: Yellow, stays until addressed
- **Info**: Blue, auto-dismiss or user-dismissible

---

## Common UX Anti-Patterns to Avoid

❌ **Mystery Meat Navigation** - Unlabeled icons without tooltips  
✅ Use icons with labels or clear tooltips

❌ **Jargon-Heavy Text** - Technical terms without explanation  
✅ Use plain language; explain technical terms when necessary

❌ **Disabled Buttons Without Reason** - User doesn't know why  
✅ Show tooltip or message explaining why button is disabled

❌ **Surprise Pop-ups** - Modal appears without user action  
✅ Only show modals in response to user actions

❌ **Lost Work** - No auto-save or draft recovery  
✅ Auto-save drafts; warn before navigating away with unsaved changes

❌ **Cryptic Errors** - "Error 500" with no context  
✅ "We couldn't save your changes. Please try again."

❌ **Requiring Perfect Memory** - Multi-step process with no breadcrumbs  
✅ Show progress indicator; allow jumping between steps

❌ **No Undo** - Destructive action with no recovery  
✅ Confirmation dialog for destructive actions; provide undo

---

## Integration with Development Workflow

### Product Manager Agent
When creating tasks:
- Define UX acceptance criteria
- Specify which heuristics apply
- Include accessibility requirements
- Reference relevant design patterns

### Software Engineer Agent
When implementing:
- Review this document before starting UI work
- Check implementation against UX checklist
- Test with keyboard and screen reader
- Verify error states and loading states
- Ensure mobile responsiveness

### Definition of Done
Every task must pass UX verification:
- All heuristics checked
- Accessibility standards met
- Manual testing completed
- User flows validated

---

## Reference Links

### Design Systems
- [Material Design Guidelines](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

### UX Principles
- [NNG 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Laws of UX](https://lawsofux.com/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/)

### Testing
- [Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)

---

## Customization Instructions

To adapt this UX guide for your project:

1. Replace `[YOUR_PROJECT_NAME]` with your actual project name
2. Replace `[DATE]` with current date
3. Choose primary design system (Material Design or HIG) based on platform
4. Add project-specific UX requirements in a new section
5. Include brand guidelines if applicable
6. Add screenshots or examples from your app

Keep all universal principles (heuristics, psychological laws, agent-specific rules) as they apply to any user-facing application.

---

**Remember:** Good UX is not optional. It's what makes the difference between software that works and software that people love to use. 🎨

