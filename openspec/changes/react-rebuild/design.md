# Design Decisions: React Application Rebuild

## Architecture Overview

```
src/
├── components/
│   ├── ui/           # shadcn/ui primitives
│   ├── layout/       # Header, Footer, Container
│   └── sections/     # Page sections
├── data/             # Static content data
├── lib/              # Utility functions
├── assets/           # Images, icons
├── styles/           # Global CSS
├── types/            # TypeScript type definitions
├── App.tsx
└── main.tsx
```

## Key Decisions

### Decision 1: Vite over Next.js

**Choice:** Use Vite as build tool
**Rationale:**
- Landing page is purely static
- No server-side rendering needed
- Faster development builds
- Simpler deployment (any static host)

**Trade-offs:**
- Manual SEO optimization needed
- No built-in routing (not needed for single page)

### Decision 2: shadcn/ui Component Approach

**Choice:** Copy shadcn/ui components into project
**Rationale:**
- Full control over component styling
- No external dependency for core UI
- Tailwind-native approach
- Accessible by default (Radix UI)

**Components to install:**
- Button
- Accordion
- Tabs
- AspectRatio

### Decision 3: Data Extraction Pattern

**Choice:** Separate data files with TypeScript types
**Rationale:**
- Easy content updates without touching components
- Type safety for content structure
- Future CMS integration friendly
- Clear separation of concerns

**Example:**
```typescript
// src/data/features.ts
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  accent: 'cyan' | 'purple' | 'red';
}

export const features: Feature[] = [
  // ...
];
```

### Decision 4: CSS Architecture

**Choice:** Tailwind CSS with design token customization
**Rationale:**
- Matches Figma export output
- Utility-first speeds development
- Custom colors in tailwind.config.js
- No CSS module complexity

**Custom tokens:**
```javascript
// tailwind.config.js
colors: {
  background: {
    primary: '#0D1117',
    secondary: '#161B22',
    tertiary: '#1C2128',
  },
  accent: {
    red: '#FF4757',
  }
}
```

### Decision 5: Asset Management

**Choice:** Local assets in src/assets with import
**Rationale:**
- Vite handles optimization
- Type-safe imports
- Cache busting automatic
- Works offline during development

**Figma asset replacement:**
```typescript
// Before (Figma export)
import icon from 'figma:asset/abc123.png';

// After (production)
import icon from '@/assets/images/app-icon.png';
```

### Decision 6: Section Component Pattern

**Choice:** Standalone section components with internal data imports
**Rationale:**
- Each section self-contained
- Easy to reorder or remove sections
- Clear mental model
- Testing isolation

**Pattern:**
```typescript
// src/components/sections/FeatureGrid.tsx
import { features } from '@/data/features';

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 lg:py-32">
      {/* Uses imported features data */}
    </section>
  );
}
```

## Non-Functional Considerations

### Performance

- Lazy load below-fold images
- Use WebP format where supported
- Minimize bundle with tree shaking
- Consider font subsetting

### Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Focus visible states
- Reduced motion support

### SEO

- Proper heading hierarchy (single h1)
- Meta description
- Open Graph tags
- Structured data (Organization schema)

## Future Considerations

- **CMS Integration:** Data structure supports headless CMS
- **Internationalization:** Can add i18n library later
- **Analytics:** Placeholder for tracking events
- **A/B Testing:** Section isolation supports variants
