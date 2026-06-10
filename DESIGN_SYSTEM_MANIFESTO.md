# Sonic Group — Design System Manifesto & Technical Handoff

> **Version:** 1.0  
> **Last Updated:** 2026-04-26  
> **Status:** Source of Truth — All future development must reference this document  
> **Project:** Sonic Group Corporate Website (React + Tailwind + TypeScript)

---

## Table of Contents

1. [Project Architecture](#1-project-architecture)
2. [Design Philosophy](#2-design-philosophy)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Library](#6-component-library)
7. [Animation & Motion](#7-animation--motion)
8. [Page Structure & Routing](#8-page-structure--routing)
9. [Asset Guidelines](#9-asset-guidelines)
10. [Development Standards](#10-development-standards)
11. [Design Brief Template](#11-design-brief-template)

---

## 1. Project Architecture

### Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Build Tool | Vite | 5.x |
| Routing | React Router DOM | 6.x |
| Icons | Remix Icon (CDN) | — |
| Fonts | Google Fonts (Montserrat) | — |

### Project Structure
```
src/
├── components/
│   ├── base/           # Reusable atomic components (buttons, badges, cards, dividers)
│   └── feature/        # Shared page-level components (nav, footer, CTAs, etc.)
├── pages/
│   ├── home/           # Homepage sections
│   ├── about/          # About page sections
│   ├── careers/        # Careers page sections
│   ├── case-studies/   # Case studies sections
│   ├── leistungen/     # Services overview + sub-pages
│   ├── losungen/       # Solutions page
│   ├── srt/            # SRT product page
│   ├── lvp/            # Live Video Promotion page
│   ├── industries/     # Industries page
│   ├── team/           # Team page
│   ├── jobs/           # Job listings + application
│   └── services/       # Legacy service pages (being phased out)
├── hooks/              # Custom React hooks
├── mocks/              # Mock data files (ts only, no functions)
├── i18n/               # Internationalization (German primary)
├── router/             # Route configuration
└── index.css           # Global styles, animations, skeuomorphism
```

### Routing Rules
- All routes defined in `src/router/config.tsx`
- Use `BrowserRouter` with `basename={__BASE_PATH__}`
- Navigation uses `useNavigate()` — NEVER `window.location.href`
- Internal links use `<a href>` with `onClick` handler for SPA routing
- External links use `<a>` with `target="_blank" rel="noopener noreferrer"`

---

## 2. Design Philosophy

### Brand Identity
Sonic Group is a **German sales and marketing agency** operating across the DACH region. The brand communicates:
- **Professionalism** — Clean, structured, no clutter
- **Energy** — Lime green (#C8D400) as the primary accent
- **Independence** — Sharp corners, zero-radius design, no shadows
- **Data-driven** — Stats, metrics, and proof points everywhere
- **Human-centric** — Real team photos, personal language

### Design Principles
1. **Zero Radius** — No rounded corners anywhere (cards, buttons, badges, containers). The entire site uses sharp 0px corners. This is non-negotiable.
2. **No Shadows** — Shadows are prohibited. Use skeuomorphic depth (inset/embossed effects) instead.
3. **High Contrast** — Dark sections (#1A1A1A) with white/lime text. Light sections (white/#F5F5F5) with black text.
4. **German Language** — All copy is in German. No English on public-facing pages.
5. **Stats-First** — Every page leads with numbers. Proof over promise.

---

## 3. Color System

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `sonic-dark` | `#1A1A1A` | Primary dark backgrounds, headings on light |
| `sonic-lime` | `#C8D400` | Primary accent, CTAs, badges, highlights |
| `sonic-lime-dark` | `#a8b300` | Hover states, secondary lime, SVG strokes |
| `sonic-gray` | `#F5F5F5` | Light section backgrounds |
| `sonic-accent` | `#9CA3AF` | Muted text, secondary info |
| `sonic-text-secondary` | `#6B7280` | Body text on light backgrounds |
| `sonic-text-muted` | `#9CA3AF` | Captions, metadata, disabled states |

### Usage Rules
- **Lime on dark:** `text-[#C8D400]` or `text-sonic-lime` on `bg-sonic-dark`
- **Lime on light:** `bg-sonic-lime` with `text-white` for buttons/badges
- **White on dark:** `text-white` or `text-white/75` for body copy on dark heroes
- **Black on light:** `text-sonic-dark` or `text-black` for headings on white
- **Hero overlays:** `bg-gradient-to-b from-black/40 via-black/30 to-black/40`
- **Footer:** `bg-[#1a1a1a]` with `border-t-2 border-[#C8D400]/30`

### Prohibited Colors
- ❌ Blue (`#3B82F6`, `#6366F1`, etc.) — never use
- ❌ Purple (`#8B5CF6`, `#A855F7`, etc.) — never use
- ❌ `bg-[#111]` — use `bg-sonic-dark` instead
- ❌ `bg-[#0a0a0a]` — use `bg-sonic-dark` instead
- ❌ `text-gray-300` on dark sections — use `text-white/75` instead

---

## 4. Typography System

### Font Family
```
font-family: 'Montserrat', system-ui, sans-serif;
```
Loaded via Google Fonts CDN in `index.html` with weights: 300, 400, 500, 600, 700, 800, 900.

### Type Scale
| Element | Mobile | Tablet | Desktop | Weight | Line-Height | Letter-Spacing |
|---------|--------|--------|---------|--------|-------------|----------------|
| H1 (Hero) | `text-4xl` | `text-5xl` | `text-7xl` | `font-black` | `leading-tight` | `tracking-tight` |
| H2 (Section) | `text-3xl` | `text-4xl` | `text-5xl` | `font-black` | `leading-tight` | `tracking-tight` |
| H3 (Subsection) | `text-2xl` | `text-3xl` | `text-4xl` | `font-black` | `leading-tight` | — |
| H4 (Card Title) | `text-lg` | `text-xl` | `text-2xl` | `font-bold` | `leading-snug` | — |
| Body | `text-sm` | `text-base` | `text-base` | `font-normal` | `leading-relaxed` | — |
| Caption | `text-xs` | `text-xs` | `text-sm` | `font-semibold` | `leading-normal` | `tracking-wider` |
| Badge | `text-xs` | `text-xs` | `text-xs` | `font-black` | — | `tracking-widest` |
| Button | `text-sm` | `text-sm` | `text-sm` | `font-black` | — | `tracking-wider` |
| Stat Number | `text-2xl` | `text-3xl` | `text-4xl` | `font-black` | `leading-none` | — |

### Typography Rules
- All headings use `font-black` (900 weight)
- All buttons use `font-black` with `uppercase tracking-wider`
- All badges use `font-black` with `uppercase tracking-widest`
- Body text on light: `text-black/60` or `text-gray-600`
- Body text on dark: `text-white/75`
- Hero subtitles: `text-white/75` (standardized across all pages)
- Never use `leading-none` on headings — always `leading-tight`

---

## 5. Spacing & Layout

### Container System
| Container | Max-Width | Padding |
|-----------|-----------|---------|
| Standard | `max-w-7xl` | `px-4 md:px-6` |
| Hero | `max-w-6xl` | `px-4 md:px-6` |
| Wide | `max-w-7xl` | `px-4 md:px-6` |

### Section Padding
| Context | Mobile | Desktop |
|---------|--------|---------|
| Hero sections | `py-24 md:py-32` | `py-32` |
| Inner sections | `py-16 md:py-24` | `py-24` |
| CTA sections | `py-12 md:py-16` | `py-16` |
| Footer | `py-10 md:py-16` | `py-16` |

### Grid System
- Use Tailwind's grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-N`
- Card grids: `gap-4 md:gap-6`
- Content grids: `gap-8 md:gap-12`
- All side-by-side layouts: `flex flex-col lg:flex-row`
- Never use fixed widths without responsive overrides

### Responsive Breakpoints
| Breakpoint | Tailwind Prefix | Usage |
|------------|-----------------|-------|
| Mobile | default | Base styles |
| Tablet | `md:` | 768px+ |
| Desktop | `lg:` | 1024px+ |
| Large Desktop | `xl:` | 1280px+ |

---

## 6. Component Library

### Base Components (`src/components/base/`)

#### SectionBadge
```tsx
<SectionBadge text="Über uns" variant="dark" />
```
- **variant="light"** — for dark backgrounds (lime text on lime-tinted bg)
- **variant="dark"** — for light backgrounds (dark text on lime-tinted bg)
- Always: `px-4 py-1.5`, `border: 1px solid rgba(200,212,0,0.30)`
- Dot: `w-1.5 h-1.5`, `bg-[#C8D400]`, `borderRadius: 0`
- Text: `text-xs font-black uppercase tracking-widest`

#### WoodenButton
```tsx
<WoodenButton variant="primary" size="md" href="/path">
  Button Text
</WoodenButton>
```
- **primary:** `bg-sonic-lime text-white hover:scale-105`
- **secondary:** `bg-sonic-dark text-white hover:scale-105`
- **outline:** `border-2 border-gray-300 text-sonic-dark`
- Sizes: `sm` (px-4 py-2), `md` (px-6 py-3), `lg` (px-8 py-4)
- **NO rounded corners** — borderRadius is always 0

#### WoodenCard
```tsx
<WoodenCard hover={true} borderRadius={0}>
  Content
</WoodenCard>
```
- White background, `p-8`, `shadow-lg`
- Hover: `hover:shadow-2xl hover:-translate-y-2`
- SVG border with lime gradient stroke
- **borderRadius must always be 0**

#### WoodenDivider
```tsx
<WoodenDivider variant="horizontal" />
```
- Three animated wave lines in lime/olive tones
- Used between sections for visual rhythm
- `aria-hidden="true"` — decorative only

#### WoodenSection
```tsx
<WoodenSection variant="white">
  Content
</WoodenSection>
```
- **white:** `bg-white`
- **light:** `bg-sonic-gray/50`
- **medium:** `bg-sonic-gray`

### Feature Components (`src/components/feature/`)

#### Navigation
- Fixed top nav, transparent → white on scroll
- Desktop: horizontal links + dropdowns for Leistungen & Über uns
- Mobile: slide-in panel from right (70vw width)
- CTA button: "Kontakt" — `bg-sonic-lime text-sonic-dark` (black text for contrast)
- All nav items have `focus-visible:ring-2 focus-visible:ring-sonic-lime`

#### Footer
- `bg-[#1a1a1a]` with `SonicPulseCanvas` background animation
- 5-column grid: Brand (2 cols) + Solutions + Company + Legal
- Social icons: LinkedIn, Instagram, Facebook
- Bottom bar: copyright + "Built by Reezan Digital" + ISO/GDPR badges
- All links use `hover:text-[#C8D400]`

---

## 7. Animation & Motion

### Global Animation Tokens
| Token | Duration | Usage |
|-------|----------|-------|
| `duration-micro` | 150ms | Hover states, micro-interactions |
| `duration-standard` | 200ms | Button transitions, color changes |
| `duration-moderate` | 300ms | Card hovers, panel slides |
| `duration-400` | 400ms | Page transitions, reveals |

### Easing Functions
| Name | Value | Usage |
|------|-------|-------|
| `ease-sonic` | `ease-out` | Standard transitions |
| `ease-sonic-spring` | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal animations, spring feel |

### Key Animations
1. **Section Reveal** — `sectionCardReveal` with spring physics
   - `translateY(36px) scale(0.988) blur(3px)` → `translateY(0) scale(1) blur(0)`
   - Duration: 1.1s, Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

2. **Wave Dividers** — Three SVG paths with staggered animation
   - `animate-wave-1`: 8s linear infinite
   - `animate-wave-2`: 6s linear infinite (delay -0.3s)
   - `animate-wave-3`: 10s linear infinite (delay -0.6s)

3. **Scroll Ticker** — `animate-scroll-optimized`
   - 30s linear infinite, GPU-accelerated
   - Content duplicated for seamless loop

4. **Card Border Glow** — On hover, SVG stroke width increases + glow filter
   - Outer stroke: 0.8px → 2.5px
   - Inner stroke: 0.5px → 1.5px
   - Glow: `drop-shadow(0 0 8px rgba(200, 212, 0, 0.6))`

5. **Sonic Pulse Canvas** — Dark neon lime mesh background in footer
   - WebGL/Canvas animation with lime particles
   - Gradient veil overlay for text readability

### Performance Rules
- All animated elements use `will-change: transform`
- Scroll containers use `overscroll-behavior: contain`
- Images use `content-visibility: auto` for lazy rendering
- Heavy sections use `contain: style` for paint optimization
- Never use `will-change` on static elements

---

## 8. Page Structure & Routing

### Page Inventory
| Page | Route | Key Sections |
|------|-------|-------------|
| Home | `/` | Hero, AudienceSelector, ServicesGrid, TrustStrip, SRTTeaser, Contact |
| About | `/about` | OriginStory, WhySonic, ValuesVisual, LeadershipTeam, Timeline |
| Careers | `/careers` | KarriereHero, KarriereCulture, OpenPositions, Perks, TeamEvents |
| Case Studies | `/case-studies` | CaseStudiesHero, CaseStudiesGrid, FeaturedCases, ImpactMetrics |
| Solutions | `/losungen` | LosungenHero, ThreeWays, SuccessStories, AlwaysIncluded, FinalCTA |
| Services | `/leistungen` | LeistungenHero, ServiceGrid, IndustrySelector, Stats, Testimonials |
| SRT | `/srt` | SRTHero, TheProblem, HowItWorks, Features, Pricing, GetAccess |
| LVP | `/lvp` | LVPHero, PhygitalGap, HowItWorks, Benefits, ProcessFlow, UseCases |
| Industries | `/industries` | IndustriesHero, IndustryGrid, IndustryExpertise, IndustryCTA |
| Team | `/team` | TeamHero, MeetTheTeam, CoreValues, TeamStats, Training, CTA |
| Jobs | `/jobs` | JobsHero, JobsFilter, JobCard, JobApplicationForm |
| Sonic Reels | `/sonic-reels` | EraNav, PhotoAlbum |

### Service Sub-Pages
| Service | Route |
|---------|-------|
| POS Full Service | `/leistungen/pos-full-service` |
| Live Video Promotion | `/leistungen/live-video` |
| Events & Messen | `/leistungen/events-messen` |
| Staff as a Service | `/leistungen/staff-as-a-service` |
| Talentpool | `/leistungen/talentpool` |
| Warehouse & Logistik | `/leistungen/warehouse-logistik` |
| SRT Reporting Tool | `/srt` |
| Forecasting | `/leistungen/forecasting` |
| Kreation & Content | `/leistungen/kreation-content` |
| Video Production | `/leistungen/video` |

---

## 9. Asset Guidelines

### Images
- **Hero backgrounds:** Landscape, 1920x1080, dark/moody or professional retail scenes
- **Team photos:** Real photos from `www.sonic-group.de/wp-content/uploads/`
- **Icons:** Wooden carved style via Stable Diffusion (walnut/dark wood on white)
- **Product shots:** Simple backgrounds, highlighting the subject
- **All images:** `object-cover object-top`, explicit width/height on containers

### Image URL Format (Stable Diffusion)
```
https://readdy.ai/api/search-image?query={prompt}&width={w}&height={h}&seq={unique-id}&orientation={landscape|portrait|squarish}
```
- Prompts must be ≥150 characters
- Must include background description for consistency
- URLs must be complete hardcoded strings — no template variables

### Icons
- **Primary:** Remix Icon (CDN) — `ri-*` classes
- **Usage:** `<i className="ri-home-line"></i>`
- **Container:** Parent must have `w-{size} h-{size} flex items-center justify-center`
- **Never use:** FontAwesome from node_modules

### Logo
- **Source:** `https://www.sonic-group.de/wp-content/uploads/elementor/thumbs/SONIC_GESAMTLOGO_LIME-...`
- **Height:** `h-8 md:h-10` in nav, `h-10 md:h-12` in footer
- **Alt text:** "Sonic Group — Zur Startseite"

---

## 10. Development Standards

### Code Style
- **Airbnb** specification compliance
- TypeScript strict mode
- No `any` types without justification
- Named imports from React: `import { useState } from 'react'`
- No `React.xxx` or `window.React`

### File Organization
- Components max 500 lines — split into sub-components
- Page-specific components: `src/pages/[page]/components/`
- Shared components: `src/components/base/` or `src/components/feature/`
- Mock data: `src/mocks/[language]/[namespace].ts`
- i18n: `src/i18n/local/[language]/[namespace].ts`

### Import Rules
- Same directory: `./Component`
- Cross directory: `@/components/base/SectionBadge`
- **Never use:** `../` or `../../`

### Component Rules
- Props interfaces always defined
- Default props provided
- `className` prop accepted for extensibility
- `aria-*` attributes for accessibility
- `focus-visible` rings for keyboard navigation

### Form Rules
- All forms use `get_form_url` tool for submission
- Form ID must be unique
- All inputs must have `name` attribute
- Textarea limited to 500 characters
- Submit via `application/x-www-form-urlencoded`
- Status feedback displayed on page (no redirects)

### Prohibited Patterns
- ❌ `window.location.href` for navigation
- ❌ `float` layout
- ❌ `require()` for imports
- ❌ SVG generation in code
- ❌ `framer-motion-3d` (use `motion` instead)
- ❌ `react-query` (use `@tanstack/react-query`)
- ❌ `react-helmet-async` (use React 19 features)
- ❌ `bg-opacity-50` (use `bg-black/50`)
- ❌ `border-border` (not a Tailwind class)

---

## 11. Design Brief Template

Use this template when requesting new pages or sections:

```
## Design Brief — [Page/Section Name]

### Purpose
[What is this page/section for? Who is the audience?]

### Content
- Headline: [German text]
- Subheadline: [German text]
- Body copy: [German text]
- CTA: [Button text + destination]
- Stats/Proof points: [List of numbers]

### Visual Direction
- Background: [Dark hero / Light section / Image / Gradient]
- Mood: [Professional / Energetic / Calm / Bold]
- Key imagery: [Describe needed images]

### Layout
- Section order: [List sections in order]
- Special components: [Any custom components needed]
- Animations: [Specific motion requirements]

### References
- Similar existing page: [Which current page to match]
- External inspiration: [URLs or descriptions]

### Technical Notes
- Route: [URL path]
- SEO keywords: [3-5 German keywords]
- Form requirements: [Yes/No — if yes, specify fields]
```

---

## Appendix A: Quick Reference Card

### Button Patterns
```
Primary CTA:    bg-sonic-lime text-white hover:bg-white hover:text-sonic-dark
Secondary CTA:  bg-sonic-dark text-white hover:bg-sonic-lime hover:text-sonic-dark
Outline Light:  border-2 border-white/30 text-white hover:border-sonic-lime
Outline Dark:   border-2 border-black/20 text-sonic-dark hover:border-sonic-lime
```

### Badge Pattern
```
Light bg (dark section):  bg-[#C8D400]/15 border border-[#C8D400]/30 text-[#C8D400]
Dark bg (light section):  bg-[#C8D400]/20 border border-[#C8D400]/30 text-[#1A1A1A]
```

### Hero Pattern
```
<section className="relative min-h-[640px] md:min-h-[720px] flex items-center">
  <img className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
  <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
    <SectionBadge text="Category" variant="light" />
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
      HEADLINE<br /><span className="text-sonic-lime">LIME ACCENT</span>
    </h1>
    <p className="text-xl text-white/75 max-w-3xl mx-auto">Subtitle</p>
  </div>
</section>
```

### Section Pattern
```
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <SectionBadge text="Category" variant="dark" />
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
      Section Headline
    </h2>
    {/* Content */}
  </div>
</section>
```

---

## Appendix B: Component Checklist for New Pages

Before marking a page complete, verify:

- [ ] All text is in German
- [ ] No rounded corners (`borderRadius: 0` everywhere)
- [ ] No shadows (use skeuomorphic effects instead)
- [ ] Hero uses `max-w-6xl mx-auto px-4 md:px-6`
- [ ] Inner sections use `max-w-7xl mx-auto px-4 md:px-6`
- [ ] Section padding is `py-16 md:py-24`
- [ ] H1: `text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight`
- [ ] H2: `text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight`
- [ ] Hero subtitle: `text-white/75`
- [ ] Primary CTA: `bg-sonic-lime text-white hover:bg-white hover:text-sonic-dark`
- [ ] Badge uses `SectionBadge` component (not raw divs)
- [ ] All buttons have `whitespace-nowrap`
- [ ] All clickable elements have `cursor-pointer`
- [ ] All links have `focus-visible:ring-2 focus-visible:ring-sonic-lime`
- [ ] Images have `alt` text and explicit container dimensions
- [ ] Mobile menu has hamburger + slide-in panel
- [ ] Footer links added to `Footer.tsx` if new routes
- [ ] Navigation links added to `Navigation.tsx` if new routes
- [ ] Route added to `src/router/config.tsx`
- [ ] Build passes with zero errors

---

*This document is the single source of truth for the Sonic Group design system. Any deviation requires approval from the brand integrity lead.*
