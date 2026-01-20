# OpenSpec Agent Configuration

This file configures AI coding assistants to work with OpenSpec in this project.

## Workflow Commands

When working on this project, AI assistants should understand these OpenSpec workflows:

### Creating a Change Proposal

1. Create a new folder under `openspec/changes/<feature-name>/`
2. Add required files:
   - `proposal.md` - Why and what changes
   - `tasks.md` - Implementation checklist
   - `design.md` - Technical decisions (optional)
   - `specs/` - Delta specifications

### Specification Format

Requirements use this structure:

```markdown
### Requirement: <requirement-name>

<Requirement description using SHALL/MUST language>

#### Scenario: <scenario-description>

**Given** <initial context>
**When** <action taken>
**Then** <expected outcome>
```

### Delta Format

Changes to specifications use:

```markdown
## ADDED Requirements

### Requirement: <new-requirement-name>
...

## MODIFIED Requirements

### Requirement: <existing-requirement-name>
<Complete updated text>

## REMOVED Requirements

### Requirement: <deprecated-requirement-name>
<Reason for removal>
```

## Project Context

- **Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Product:** TranscriptAI macOS transcription app landing page
- **Company:** Kalam Plus
- **Design Reference:** `Design_figma/` contains original Figma export

## Key Files

- `CLAUDE.md` - Project conventions and coding standards
- `openspec/project.md` - OpenSpec project configuration
- `openspec/specs/` - Source of truth specifications
- `openspec/changes/` - Proposed/active changes

## AI Assistant Guidelines

1. Always check `openspec/changes/` for active work before starting new features
2. Reference `CLAUDE.md` for coding conventions
3. Use the Figma export in `Design_figma/` as visual reference
4. Follow the component structure defined in `CLAUDE.md`
5. Extract content data to separate files under `src/data/`
