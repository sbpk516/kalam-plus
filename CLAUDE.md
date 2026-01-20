# Kalam Plus - TranscriptAI Landing Page

## Project Overview

TranscriptAI is a macOS-native AI-powered transcription application that processes audio locally using Whisper AI. This repository contains the marketing landing page built with React.

**Product Key Features:**
- 100% offline transcription (no cloud processing)
- Whisper AI powered
- Live recording, audio import, and YouTube import
- Press-and-hold dictation
- macOS 13+ with Apple Silicon optimization

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 3.x
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Package Manager:** npm

## Project Structure

```
kalam-plus/
├── CLAUDE.md                 # This file - project conventions
├── openspec/                 # OpenSpec specifications
│   ├── specs/               # Source-of-truth specifications
│   ├── changes/             # Proposed changes
│   └── project.md           # Project conventions
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives (shadcn/ui)
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Page sections (Hero, Features, etc.)
│   ├── assets/              # Static assets (images, icons)
│   ├── styles/              # Global styles
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── data/                # Static content data
│   ├── App.tsx
│   └── main.tsx
├── public/                   # Public static files
├── Design_figma/            # Original Figma export (reference)
└── package.json
```

## Design System

### Color Palette

```css
/* Background Colors */
--bg-primary: #0D1117;      /* Main dark background */
--bg-secondary: #161B22;    /* Card backgrounds */
--bg-tertiary: #1C2128;     /* Elevated surfaces */

/* Accent Colors */
--accent-red: #FF4757;      /* Primary CTA, download buttons */
--accent-cyan: cyan-400;    /* Feature highlights */
--accent-purple: purple-400; /* Gradients, secondary highlights */

/* Text Colors */
--text-primary: white;      /* Headings */
--text-secondary: gray-400; /* Body text */
--text-tertiary: gray-500;  /* Muted text */

/* Border Colors */
--border-default: white/10;  /* Default borders */
--border-hover: white/20;    /* Hover state borders */
```

### Typography

- **Headings:** System font stack, sizes 4xl-7xl responsive
- **Body:** text-lg for main content, text-sm for secondary
- **Code/Mono:** Use `font-mono` for keyboard shortcuts

### Spacing

- **Section Padding:** `py-20 lg:py-32`
- **Container:** `max-w-7xl mx-auto px-6 lg:px-8`
- **Card Padding:** `p-8` or `p-10`
- **Gap Spacing:** `gap-6`, `gap-8`, `gap-12`

### Effects

- **Backdrop Blur:** `backdrop-blur-xl` for header
- **Shadows:** Colored glow shadows (cyan-500/20, purple-500/20)
- **Hover Transitions:** `transition-all duration-300`
- **Hover Transforms:** `hover:-translate-y-0.5`, `hover:scale-110`

## Coding Conventions

### Component Structure

```tsx
// 1. Imports (React, third-party, local)
import React from 'react';
import { IconName } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces (if needed)
interface ComponentProps {
  // ...
}

// 3. Static data (if component-specific)
const data = [];

// 4. Component definition (named export preferred for sections)
export function ComponentName({ prop }: ComponentProps) {
  // Hooks first
  // Event handlers
  // Render
  return (
    <section className="...">
      {/* Content */}
    </section>
  );
}
```

### File Naming

- **Components:** PascalCase (`Hero.tsx`, `FeatureGrid.tsx`)
- **Utilities:** camelCase (`utils.ts`, `cn.ts`)
- **Types:** PascalCase for types, camelCase for files
- **Data files:** camelCase (`testimonials.ts`, `faqData.ts`)

### Tailwind Conventions

- Use Tailwind classes directly in JSX
- Group classes logically: layout → sizing → spacing → colors → effects
- Extract repeated patterns to components, not utility classes
- Use `cn()` helper for conditional classes

```tsx
// Good
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">

// With conditionals
<button className={cn(
  "px-4 py-2 rounded-lg transition-colors",
  isActive ? "bg-cyan-500" : "bg-white/10"
)}>
```

### Data Extraction

Keep content data separate from components:

```tsx
// src/data/features.ts
export const features = [
  {
    id: 'live-recording',
    icon: 'Mic',
    title: 'Live Recording',
    description: '...',
    accent: 'cyan'
  },
  // ...
];

// src/components/sections/FeatureGrid.tsx
import { features } from '@/data/features';
```

## Development Workflow

### OpenSpec Integration

This project uses [OpenSpec](https://github.com/Fission-AI/OpenSpec) for specification-driven development:

1. **Create proposal:** `openspec` slash commands or manual creation
2. **Review specs:** Align on requirements before implementation
3. **Implement tasks:** Follow tasks.md checklist
4. **Archive:** Merge specs after completion

### Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check

# OpenSpec
openspec list        # View active changes
openspec validate    # Validate spec format
openspec archive     # Archive completed change
```

## Content Data Reference

### Page Sections

1. **Header** - Fixed nav with logo, links (Products, Pricing, About), Download CTA
2. **Hero** - App icon, headline, subheadline, download button, trust badges
3. **AppShowcase** - Tabbed screenshots (Capture, Transcripts, Settings)
4. **FeatureGrid** - 6 feature cards in 3-column grid
5. **HowItWorks** - 3-step workflow (Capture → Transcribe → Use)
6. **VideoDemo** - Embedded video player placeholder
7. **Pricing** - Single pricing card (free beta, $29 one-time)
8. **Testimonials** - 3 customer testimonials
9. **FAQ** - 6 expandable Q&A items
10. **FinalCTA** - Final download call-to-action
11. **Footer** - Links, social icons, copyright

### Brand Details

- **Product Name:** TranscriptAI
- **Company:** Kalam Plus
- **Version:** v0.1.5 (beta)
- **Price:** Free during beta, $29 one-time after
- **Platform:** macOS 13+, Apple Silicon optimized

## Assets

- Logo: `/assets/logo.png` (from `logo_final.jpg`)
- App Icon: Figma export asset
- Screenshots: Replace Unsplash placeholders with actual app screenshots
- Favicon: To be created from logo

## Notes

- The `Design_figma/` folder contains the original Figma export for reference
- All Figma asset imports (`figma:asset/...`) need to be replaced with actual assets
- Unsplash placeholder images should be replaced with real product screenshots
