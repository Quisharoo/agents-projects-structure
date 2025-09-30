# Leaders Metrics Development Roadmap

Engineering metrics tracking application translated from `agents/BUSINESS_REQUIREMENTS.md` into deliverable phases and tasks.

## Business Requirement Mapping

This roadmap translates business requirements into phases (high-level product features) and tasks (single artifacts deliverable within feature branches).

Each task here links to a file in `/tasks` containing detailed description, acceptance criteria, implementation plan, and DoD reference.

## Development Phases

### Phase 1: MVP Foundation ✅
*Business Requirement: Core team and goal tracking functionality*
- [**Task 000**: Environment Setup](/tasks/000-environment-setup.md) ✅
- [**Task 001**: Database Setup](/tasks/001-database-setup.md) ✅  
- [**Task 002**: Basic API Endpoints](/tasks/002-basic-api-endpoints.md) ✅
- [**Task 002b**: OpenAPI Documentation](/tasks/002b-openapi-docs.md) ✅
- [**Task 003**: Core UI Components](/tasks/003-core-ui-components.md) ✅
- [**Task 004**: Metrics Submission](/tasks/004-metrics-submission.md) ✅
- [**Task 005**: Dashboard Foundation](/tasks/005-simple-dashboard.md) ✅
- [**Task 006**: Goals Dashboard](/tasks/006-goals-summary-dashboard.md) ✅
- [**Task 006b**: Chart Components](/tasks/006b-chart-components-setup.md) ✅
- [**Task 007**: Charts & Metrics Table](/tasks/007-goal-charts-metrics-table.md) ✅
- [**Task 008a**: Form Integration](/tasks/008a-team-goal-form-integration.md) ✅

### Phase 2: Testing & Quality ✅
*Business Requirement: Production-ready quality assurance*
- [**Task 009a**: Unit Testing](/tasks/009a-unit-testing-foundation.md) ✅
- [**Task 009b**: API Integration Testing](/tasks/009b-api-integration-testing.md) ✅
- [**Task 009c**: CI/CD Integration](/tasks/009c-ci-cd-integration.md) ✅

### Phase 3: Enhanced Navigation & User Experience ✅
*Business Requirement: Mobile-responsive design and navigation*
- [**Task 010**: Enhanced Navigation](/tasks/010-enhanced-navigation-system.md) ✅

### Phase 4: Goal Enhancement & Detail Views ✅
*Business Requirement: Comprehensive goal management*
- [**Task 011**: Goal Detail Pages](/tasks/011-goal-detail-pages.md) ✅
- [**Task 011b**: Goal-Specific Metrics API](/tasks/011b-goal-specific-metrics-api.md) ✅
- [**Task 011c**: Goal Deletion UI](/tasks/011c-goal-deletion-ui.md) ✅
- [**Task 011d**: Goal Update UI](/tasks/011d-goal-update-ui.md) ✅

### Phase 5: Team Management & Detail Views ✅
*Business Requirement: Complete team management functionality*
- [**Task 012**: Team Detail Pages](/tasks/012-team-detail-pages.md) ✅
- [**Task 013**: Team Update UI](/tasks/013-team-update-ui.md) ✅
- [**Task 014**: Team Deletion UI](/tasks/014-team-deletion-ui.md) ✅
- [**Task 015**: Team-Specific Goals API](/tasks/015-team-specific-goals-api.md) ✅

### Phase 6: Authentication & Security ✅
*Business Requirement: Secure access with OAuth and multi-tenancy*
- [**Task 018**: User Authentication System](/tasks/018-user-authentication-system.md) ✅
- [**Task 018a**: Auth.js Infrastructure](/tasks/018a-authjs-infrastructure-setup.md) ✅
- [**Task 018b**: OAuth Integration](/tasks/018b-authjs-oauth-integration.md) ✅
- [**Task 018c**: Middleware & Protection](/tasks/018c-authjs-middleware-protection.md) ✅
- [**Task 018d**: UI Components](/tasks/018d-authjs-ui-components.md) ✅
- [**Task 018e**: Data Access Control](/tasks/018e-authjs-data-access-control.md) ✅
- [**Task 018f**: Credentials Provider](/tasks/018f-authjs-credentials-provider.md) ✅

### Phase 7: Demo Account & User Experience ✅
*Business Requirement: Demo account with sample data*
- [**Task 019**: Demo Account Setup](/tasks/019-demo-account-setup.md) ✅
- [**Task 019b**: Demo Data Regeneration](/tasks/019b-demo-data-regeneration.md) ✅

### Phase 8: API Security & External Integration ✅
*Business Requirement: Secure external API access for CI/CD*
- [**Task 020**: API Data Submission Protection](/tasks/020-api-data-submission-protection.md) ✅
- [**Task 020a**: Session Authentication](/tasks/020a-api-session-authentication.md) ✅
- [**Task 020b**: API Key Management](/tasks/020b-api-key-management.md) ✅

### Phase 9: CI/CD Metrics & External Reporting ✅
*Business Requirement: External metric submission for automated systems*
- [**Task 021**: CI Coverage Reporting](/tasks/021-ci-coverage-reporting.md) ✅

### Phase 10: Developer Tooling & UI Enhancement ✅
*Business Requirement: UI prototyping infrastructure*
- [**Task 022**: UI Prototyping Infrastructure](/tasks/022-ui-prototyping-infrastructure.md) ✅
- [**Task 023**: Layout Isolation for Prototyping](/tasks/023-layout-isolation-prototyping.md) ✅

### Phase 11: User Feedback & Product Direction ✅
*Business Requirement: Simple feedback collection for product direction*
- [**Task 024**: User Feedback Collection](/tasks/024-user-feedback-collection.md) ✅

### Phase 12: Chart Export Enhancement ✅
*Business Requirement: Export dashboard charts as high-resolution images*
- [**Task 025**: Chart Export as Image](/tasks/025-chart-export-as-image.md) ✅

## Next Development Phases

### Phase 13: Team & Individual Health MVP ✅
*Business Requirement: MVP Dashboard Spec — Team & Individual Health (Discovery)*
- [**Task 026**: Team & Individual Health MVP — Prototype (Umbrella)](/tasks/026-health-mvp-prototype.md) ✅

### Phase 14: Health Domain & APIs
*Business Requirement: Team & Individual Health — production implementation (Delivery)*
	- [**Task 027**: Health Domain Model (Prisma)](/tasks/027-health-domain-model.md) ✅
	- [**Task 028**: Health Service Layer + Validation](/tasks/028-health-service-layer.md) ✅
	- [**Task 029**: Health API Endpoints (+ Auth)](/tasks/029-health-api-endpoints.md) ✅
		- [**Task 029a**: People Management API](/tasks/029a-people-management-api.md) ✅
		- [**Task 029b**: Team People Integration](/tasks/029b-team-people-integration.md) ✅

### Phase 15: Reusable Health UI
*Business Requirement: Independent, reusable components for broader app use (Delivery)*
- [**Task 030**: Extract Health UI Components](/tasks/030-health-ui-components-extraction.md)
- [**Task 031**: Component Props, Types, and Docs](/tasks/031-health-ui-component-contracts.md)

### Phase 16: App Integration
*Business Requirement: Ship Health Dashboard, Entry, Drill-down with real data (Delivery)*
- [**Task 032**: Health Dashboard Integration](/tasks/032-health-dashboard-integration.md)
- [**Task 033**: Individual Drill-down Integration](/tasks/033-health-drilldown-integration.md)
- [**Task 034**: Entry Flow (Page/Modal) Integration](/tasks/034-health-entry-integration.md)

### Phase 17: Access Control & Multi‑Tenancy
*Business Requirement: Data isolation, team scoping, and ownership (Delivery)*
- [**Task 035**: Health Permissions & Scoping](/tasks/035-health-permissions-multitenancy.md)

### Phase 18: Demo Data & Seeds
*Business Requirement: Demo account with realistic Health data (Delivery)*
- [**Task 036**: Demo Seeds for People & Health Entries](/tasks/036-health-demo-seeds.md)

### Phase 19: Coverage Consolidation & Stability
*Business Requirement: Strengthen coverage, edge cases, and test stability (Delivery)*
- [**Task 037**: Services Coverage Consolidation](/tasks/037-health-unit-tests.md)
- [**Task 038**: API Edge Cases & Stability](/tasks/038-health-api-integration-tests.md)
- [**Task 039**: UI Reliability & A11y Checks](/tasks/039-health-ui-tests.md)

### Phase 20: UX Polish & Performance
*Business Requirement: Production-grade UX, a11y, and performance (Delivery)*
- [**Task 040**: UX Polish, Loading/Empty/Error States, Mobile](/tasks/040-health-ux-polish.md)
- [**Task 041**: Server-side Pagination/Filtering for Logs](/tasks/041-health-log-scaling.md)

### Phase 21: Architecture & Testing Refinement
*Business Requirement: Scalable architecture and reliable testing foundation (Delivery)*
- [**Task 042**: Extract Prisma Queries from API Routes](/tasks/042-service-layer-refactor.md)
- [**Task 043**: Organize lib Directory into Domains](/tasks/043-lib-structure-organization.md)
- [**Task 044**: Introduce SWR for Browser Data Fetching](/tasks/044-browser-data-caching.md)
- [**Task 045**: Add Unit Tests for Core Services](/tasks/045-service-unit-tests.md)
- [**Task 046**: Add Real Database Integration Tests](/tasks/046-real-db-integration-tests.md)
- [**Task 047**: API Integration Test Harness](/tasks/047-api-integration-harness.md)
- [**Task 048**: Migrate Scripted API Tests](/tasks/048-migrate-api-tests.md)

## Task Planning Process

1. **Review Business Requirements**: Analyze `agents/BUSINESS_REQUIREMENTS.md` to identify next development priorities
2. **Define Tasks in Roadmap**: Add new tasks here with links to `/tasks` directory
3. **Create Task Files**: Generate detailed spec in `/tasks` (use `tasks/TASK_TEMPLATE.md`)
4. **Feature Branch Implementation**: Each task = single feature branch for independent development and deployment
5. **Tests with Features**: For every delivery task, include the necessary tests in the same PR (unit for services, integration for APIs, component tests for reusable UI)
