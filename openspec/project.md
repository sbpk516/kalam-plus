# OpenSpec Project Configuration

## Project Information

- **Name:** Kalam Plus - TranscriptAI Landing Page
- **Type:** Marketing Website / Landing Page
- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui

## Development Conventions

### Specification Format

All specifications SHALL follow the OpenSpec format:

- Use `### Requirement: <name>` for requirement headers
- Use `#### Scenario: <description>` for scenario blocks
- Use "SHALL" or "MUST" in requirement statements
- Use delta sections for changes: `## ADDED Requirements`, `## MODIFIED Requirements`, `## REMOVED Requirements`

### Change Workflow

1. **Draft:** Create proposal in `openspec/changes/<feature-name>/`
2. **Review:** Iterate on specs until consensus
3. **Implement:** Follow tasks.md checklist
4. **Archive:** Run `openspec archive <change>` when complete

### Code Standards

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Named exports for components
- Props interfaces defined for all components
- Data separated from presentation

### Testing Requirements

- Components SHALL be tested with React Testing Library
- Accessibility tests SHALL be included
- Visual regression tests SHOULD be considered

## Domain Vocabulary

| Term | Definition |
|------|------------|
| TranscriptAI | The macOS transcription application product |
| Kalam Plus | The company/brand name |
| Section | A major visual block on the landing page |
| Component | A reusable React UI element |
| CTA | Call-to-action button |

## Architecture Decisions

### ADR-001: Component Library

- **Decision:** Use shadcn/ui with Radix UI primitives
- **Rationale:** Accessible, customizable, works well with Tailwind
- **Consequences:** Must maintain component copies in project

### ADR-002: Build System

- **Decision:** Vite over Next.js or CRA
- **Rationale:** Simple static site, no SSR needed, fast builds
- **Consequences:** Manual optimization if SEO becomes critical

### ADR-003: State Management

- **Decision:** React useState/useContext only
- **Rationale:** Landing page has minimal state requirements
- **Consequences:** May need to add Zustand/Redux if complexity grows
