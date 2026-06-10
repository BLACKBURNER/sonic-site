# Sonic Group — Brand & UX Audit Plan

> Created: 2026-04-25 | Status: In Progress

---

## Overview

This document captures all identified brand inconsistencies, design issues, and recommended improvements discovered during a multi-session deep audit of all pages and components. Items are grouped by priority and category.

---

## STATUS TRACKER

| ID | Issue | Page(s) | Status |
|----|-------|---------|--------|
| B1 | FÜR MARKEN MIT POWER dark bg transparent | HeroRevamp | ✅ Fixed |
| B2 | ContactCTA rounded corners + shadow | LVP | ✅ Fixed |
| B3 | SRT Pricing WebkitTextStroke | SRT | ✅ Fixed |
| B4 | Leistungen ServiceGrid duplicate style prop | Leistungen | ✅ Fixed |
| B5 | KarriereCulture dark hover states | Careers | ✅ Fixed |
| B6 | GeschichtenSection dark hover states | Careers | ✅ Fixed |
| B7 | CaseStudiesGrid WebkitTextStroke | Case Studies | ✅ Fixed |
| B8 | FeaturedCases rounded corner SVG | Case Studies | ✅ Fixed |
| C1 | SectionBadge — 5+ different styles | Site-wide | ✅ Fixed |
| C2 | Tag / Pill elements — 4+ different styles | Site-wide | ✅ Fixed |
| C3 | Dark bg shades — 4 different values | Site-wide | ✅ Fixed |
| D1 | SRTTeaser center node conic-gradient | Home | ✅ Fixed |
| D2 | VideoStudioPhone stepper inconsistency | Video | ✅ Reassessed — current numbered step design is intentional for this journey-flow component |
| D3 | LVP ProcessFlow metrics bar flat | LVP | ✅ Fixed |
| D4 | ContactCTA SVG dashed border | LVP | ✅ Fixed |
| D5 | CaseStudiesGrid cards depth | Case Studies | ✅ Fixed |
| D6 | Floating badge unification | Site-wide | ✅ Fixed |
| W1 | Wooden icon signature — ConsultationButton survey CTA | Home | ✅ Fixed |
| W2 | Wooden icons on POS challenge cards | Leistungen/POS | ✅ Fixed |
| W3 | Wooden icons on Staff challenge cards | Leistungen/Staff | ✅ Fixed |
| W4 | Wooden icons on Events challenge cards | Leistungen/Events | ✅ Fixed |
| W5 | Wooden icons on Forecasting challenge cards | Leistungen/Forecasting | ✅ Fixed |
| W6 | Wooden icons on SRT TheProblem cards | SRT | ✅ Fixed |
| W7 | SRT page — remaining skeu-badge → SectionBadge + Tag components | SRT | ✅ Fixed |
| U1 | SonicFamily — #9bb520 non-standard lime → #C8D400, borderRadius 3px → 0, #1a1b14/#eae8e0 → standard tokens, Bebas Neue/Space Mono → Montserrat, SectionBadge, bg #f4f2ec → white | Careers | ✅ Fixed |
| U2 | ManagementVoices — borderRadius 3px → 0, Bebas Neue/Space Mono → Montserrat, SectionBadge, dark bg #0e0f0a → #111 | About | ✅ Fixed |
| U3 | SonicTeamEvents — borderRadius 3px → 0, Bebas Neue/Space Mono → Montserrat, SectionBadge, dark bg #0e0f0a → #111 | Careers | ✅ Fixed |
| U4 | KreationShowcase — Bebas Neue/Space Mono → Montserrat, slider handle borderRadius 50% → 0, #1c1d16 → #111, close button borderRadius 3px → 0 | Kreation | ✅ Fixed |
| U5 | Hero.tsx — scroll indicator rounded-full → borderRadius 0 | Home | ✅ Fixed |
| U6 | PhygitalReality.tsx — rounded-2xl/rounded-xl/rounded-lg/rounded-full throughout → all 0, non-standard warm colors → standard tokens, raw badge → SectionBadge | Home | ✅ Fixed |
| U7 | ModernDNA.tsx — real photo images used as card icons → wooden carved icons (wood-human/energy/data/tool-dna-0x) | Home | ✅ Fixed |
| U8 | SonicDNA.tsx — Remix icons in card icon boxes → wooden carved icons (wood-bridge/bulb/chart/globe-dna-card-0x) | Home | ✅ Fixed |
| U9 | VideoShowcase.tsx — Remix icons in strip → wooden carved icons (wood-team/store/euro-video-strip-0x) | Home | ✅ Fixed |
| U10 | CaseStudiesHero.tsx — raw badge div → SectionBadge component | Case Studies | ✅ Fixed |
| U11 | ImpactMetrics.tsx — rounded-lg/rounded-full on glows → no radius, raw badge → SectionBadge, rx/ry 14 → 0 on SVG rect, wood texture image overlay → grid texture | Case Studies | ✅ Fixed |
| U12 | SRTHero.tsx — bg-gradient-to-br from-[#0a0a0a] → bg-[#111] | SRT | ✅ Fixed |
| U13 | Pricing.tsx — rounded-full on glow blobs → no radius | SRT | ✅ Fixed |
| U14 | LVPBenefits.tsx — non-standard icon color #8B4513 on Remix icons → replaced with wooden carved icons (wood-euro/globe/chart/clock/chat/recycle-lvp-benefit-0x) | LVP | ✅ Fixed |
| U15 | KarriereHero.tsx — rounded-full dot in badge → borderRadius 0, Remix stat icons → wooden carved icons (wood-star/clock/team-karriere-hero-0x) | Careers | ✅ Fixed |
| U16 | KarriereCulture.tsx — bg-[#f7f7f5] → bg-[#f5f5f5], font-mono → font-black tracking-widest, Remix icons in values grid → wooden carved icons (wood-team/heart/flex/focus/shield/building-culture-0x) | Careers | ✅ Fixed |
| U17 | TheProblem.tsx — font-mono → font-black tracking-widest | SRT | ✅ Fixed |
| U18 | IndustriesHero — raw badge → SectionBadge, rounded-full glow → no radius | Industries | ✅ Fixed |
| U19 | IndustryGrid — ring-[#8B5A2B] → outline rgba, leading-none H2 → leading-tight | Industries | ✅ Fixed |
| U20 | IndustryExpertise — leading-none H2 → leading-tight | Industries | ✅ Fixed |
| U21 | IndustryCTA — bg-[#f4f4f2] → bg-[#f5f5f5], rounded-full glow → no radius | Industries | ✅ Fixed |
| U22 | TeamHero — raw badge → SectionBadge, ring-[#8B5A2B] → outline | Team | ✅ Fixed |
| U23 | TeamStats — bg-[#f9f9f7] → bg-[#f5f5f5], rounded-md highlight → no radius | Team | ✅ Fixed |
| U24 | CoreValues — rounded-md highlight → no radius, leading-none H2 → leading-tight | Team | ✅ Fixed |
| U25 | MeetTheTeam — raw badge → SectionBadge, rounded-full glows → no radius | Team | ✅ Fixed |
| U26 | TrainingDevelopment — raw badge → SectionBadge, bg-[#f9f9f7] → bg-[#f5f5f5] | Team | ✅ Fixed |
| U27 | RecruitmentPhilosophy — bg-[#f9f9f7] → bg-[#f5f5f5], leading-none H2 → leading-tight | Team | ✅ Fixed |
| U28 | TeamCTA — raw badge → SectionBadge, rounded-full dot → no radius | Team | ✅ Fixed |
| U29 | ClientTrust — leading-none H2 → leading-tight | Team | ✅ Fixed |
| U30 | JobsHero — raw badge → SectionBadge | Jobs | ✅ Fixed |
| U31 | JobCard — bg-[#f7f7f5] → bg-[#f5f5f5] | Jobs | ✅ Fixed |
| U32 | JobApplicationForm — spinner rounded-full → borderRadius 0 | Jobs | ✅ Fixed |
| U33 | EventsContent — 6 solution cards Remix icons → wooden carved icons | Leistungen | ✅ Fixed |
| U34 | POSContent — 4 solution cards Remix icons → wooden carved icons | Leistungen | ✅ Fixed |
| U35 | StaffContent — 4 solution + 6 specialization cards Remix icons → wooden carved icons | Leistungen | ✅ Fixed |
| U36 | VideoContent — 3 challenge + 3 solution + 6 advantage cards Remix icons → wooden carved icons | Leistungen | ✅ Fixed |
| U37 | All Leistungen Hero files — rounded-full glow blobs → no radius | Leistungen | ✅ Fixed |
| U38 | SRT HowItWorks — rounded-full glow blobs → no radius | SRT | ✅ Fixed |
| U39 | SRT Proof — rounded-full glow → no radius, font-mono stats → removed | SRT | ✅ Fixed |
| U40 | SRT GetAccess — rounded-full glow blobs → no radius | SRT | ✅ Fixed |

---

## PART 1 — CRITICAL BUGS (All Fixed)

### B1 — FÜR MARKEN MIT POWER Dark Background
**File:** `src/pages/home/components/HeroRevamp.tsx`
**Issue:** Left panel used `bg-[#111111]/80` (80% opacity), causing the white parent background to bleed through visually.
**Fix:** Changed to `bg-[#111111]` (fully opaque).

### B2 — ContactCTA Rounded Corners
**File:** `src/pages/lvp/components/ContactCTA.tsx`
**Issue:** 7 rounded-corner violations (`rounded-3xl`, `rounded-xl`, `rounded-lg`, `shadow-2xl`, `rx="10"`, `ry="10"`)
**Fix:** All removed. Sharp corners enforced. SVG rx/ry set to 0.

### B3 — SRT Pricing WebkitTextStroke
**File:** `src/pages/srt/components/Pricing.tsx`
**Issue:** `WebkitTextStroke: '2px #C8D400'` on "DEINEM PROJEKT." headline
**Fix:** Replaced with solid `text-[#C8D400]`

### B4 — Leistungen ServiceGrid Duplicate Style Prop
**File:** `src/pages/leistungen/components/ServiceGrid.tsx`
**Issue:** Two `style` props on same tab button — second was overriding first, losing `borderRadius: 0`
**Fix:** Merged into single style object

### B5 + B6 — Dark Hover States (Careers)
**Files:** `KarriereCulture.tsx`, `GeschichtenSection.tsx`
**Issue:** `hover:bg-[#1a1a1a]` with white text inversion on light background sections
**Fix:** Changed to warm `#f4f4f0` hover with dark text + lime accent retention

### B7 + B8 — Case Studies Cohesion
**Files:** `CaseStudiesGrid.tsx`, `FeaturedCases.tsx`
**Issue:** WebkitTextStroke stroke text + rounded SVG corners violating CI
**Fix:** Solid lime text, sharp SVG corners

---

## PART 2 — COMPONENT UNIFORMITY ISSUES

### C1 — Section Badges (5+ Different Styles) ✅ Fixed

All section category labels unified into `SectionBadge` component with two variants:

**`variant="dark"`** (for light background sections):
- `bg-[#C8D400]/20 border-2 border-[#C8D400]/40`
- Dark dot + dark text
- Used in: ChallengeSection, DarumSonic, Leistungen, Careers, About

**`variant="light"`** (for dark background sections):
- `bg-[#C8D400]/15 border border-[#C8D400]/30`
- Lime dot + lime text
- Used in: SRTTeaser, DualCTA, SRT page, LVP hero

**Before (sample of inconsistencies):**
```
SRTTeaser:     bg-[#C8D400]/15 border border-[#C8D400]/30  px-4 py-2
DualCTA:       bg-[#C8D400]/15 px-4 py-1.5 border border-[#C8D400]/30
ChallengeSection: bg-[#C8D400]/20 px-5 py-2 border-2 border-[#C8D400]/40
DarumSonic:    bg-[#C8D400]/20 px-5 py-2 border-2 border-[#C8D400]/40
VideoStudioPhone: dot + text, no box (completely different)
```

**After:** All use `<SectionBadge text="..." variant="light|dark" />`

### C2 — Tag/Pill Elements (4+ Different Styles) ✅ Fixed

All inline tags unified into `Tag` component with three variants:

**`variant="lime"`** — lime-tinted tag on dark background
**`variant="dark"`** — dark-tinted tag on light background  
**`variant="subtle"`** — ultra-light tag for secondary contexts

### C3 — Dark Background Standardization ✅ Fixed

| Before | After | Used In |
|--------|-------|---------|
| `#0d0d0d` | `#111` | SRTTeaser diagram panel bg |
| `#1c1c1c` | `#111` | VideoStudioPhone section bg |
| `#0a0a0a` | `#111` | Old phone frames (already fixed) |

Note: `bg-[#0d0d0d]/92` on panels kept as-is — the slight darkening relative to `#111` section bg creates visual depth (intentional panel-within-section contrast).

---

## PART 3 — ELEMENTS THAT NEED REDESIGN (Pending)

### D1 — SRTTeaser Center Node
**Current:** `conic-gradient(from 180deg, #C8D400...)` — looks slightly "Web 2.0"
**Proposed:** Solid lime square with subtle inner radial glow + 1px white/15 inner border
**Priority:** Medium

### D2 — VideoStudioPhone Stepper
**Current:** Numbered circles + connecting horizontal lines (4-column process diagram feel)
**Proposed:** Unified dot-style stepper consistent with EmployeeApp, HowItWorks, MitarbeiterStimmen
**Priority:** Medium

### D3 — LVP ProcessFlow Metrics Bar ✅
**Status:** Fixed
**What:** Added lime left-border accent (`borderLeft: 2px solid transparent → #C8D400` on hover) to each of the 4 stat boxes. Also added subtle `hover:bg-[#0d0d0d]` bg shift and `group-hover:bg-[#C8D400]/25` on icon boxes.

### D4 — ContactCTA Contact Cards ✅
**Status:** Fixed
**What:** Removed the SVG dashed-border rect animation entirely. Replaced with solid `border border-gray-100` + lime corner brackets on hover (E2 motif) + edge-lit left border (`w-0.5 bg-transparent group-hover:bg-[#C8D400]`). Icon boxes now have lime shadow on hover.

### D5 — CaseStudiesGrid Cards ✅
**Status:** Fixed
**What:** Added bottom lime accent bar (`h-1 bg-[#C8D400]`) on hover with glow shadow. Added edge-lit left border (`w-0.5 bg-[#C8D400]`) on hover. Also fixed `skeu-badge` → `SectionBadge` component.

### D6 — Floating Phone Badges Unification ✅
**Status:** Fixed
**What:** Created `FloatingBadge` component with `lime` and `dark` variants. Replaced all 3 instances:
- EmployeeApp: `lime` variant ("iOS & Android")
- HowItWorks: `lime` variant ("< 2 Sekunden")
- VideoStudioPhone: `dark` variant ("14 Berater online · Ø 12s")

---

## PART 4 — NEW DESIGN ELEMENTS TO ELEVATE (CI-aligned)

These patterns strengthen identity without breaking the established look.

### E1 — Edge-Lit Cards (Standard hover pattern) ✅
**Status:** Applied to ContactCTA cards + CaseStudiesGrid cards + LVPProcessFlow metrics
**Pattern:** `border-left: 2px solid transparent` → `#C8D400` on hover, or `w-0.5 bg-transparent group-hover:bg-[#C8D400]` for thinner accent.
**Remaining:** Service solution cards, advantage cards

### E2 — Corner Bracket Motif (Expand) ✅
**Status:** Completed on service challenge cards (EventsContent, POSContent, StaffContent, ForecastingContent)
- Lime corner brackets added to all 4 service challenge card grids — appear on hover with 300ms transition
- Also present on SRTTeaser diagram and KarriereCulture review image frame
- Remaining: Quote blocks (case studies), Section dividers
Status: 🔲 Pending

### E3 — Ruling Line with Text (New divider variant) 🔲
**Status:** Pending — low priority decorative element
**Where it could be used:** Between major section transitions on long pages

### E4 — Number Watermarks (Expand) ✅
**Status:** Completed on service challenge cards (EventsContent, POSContent, StaffContent, ForecastingContent)
- Large faded numbers ("01", "02", "03") added behind all 4 service challenge card grids at 5rem / 3.2% opacity
- Already present in process sections and KarriereCulture values grid
- Remaining: Case study cards

### E5 — Micro-Grid Backgrounds (Expand) ✅
**Status:** Already consistently applied across all dark sections (SRT, Video, LVP, POS, etc.)
**Pattern:** `opacity-[0.025]` to `opacity-[0.05]` with `backgroundSize: '32px 32px'` or `'50px 50px'`

### E6 — Glass Morphism Panels (Refine) 🔲
**Status:** Pending — currently used inconsistently in some phone screens and overlays
**Standard:** Dark: `bg-[#111]/70 backdrop-blur-sm border border-white/10` · Light: `bg-white/70 backdrop-blur-sm border border-black/5`

### E7 — Animated Border Glow on Hover ✅
**Status:** Applied to CaseStudiesGrid cards (bottom lime bar glow) + ContactCTA icon boxes (lime shadow on hover)
**Pattern:** `box-shadow: 0 0 12px rgba(200,212,0,0.5)` on lime accent elements during hover

### E8 — Typography Scale Lock ✅
**Status:** Completed across all service content pages + LVPBenefits + KarriereCulture
**Standard enforced:**
| Level | Size |
|-------|------|
| Hero/Display | text-5xl → text-7xl (hero only) |
| H2 Primary (Challenge/Solution) | text-4xl lg:text-5xl |
| H2 Secondary (Process/Sub-sections) | text-3xl lg:text-4xl |
| H3 | text-xl → text-2xl |
| Body | text-sm → text-base |
| Micro | text-xs → text-[10px] |

**Files updated:** EventsContent, POSContent, StaffContent, ForecastingContent, VideoContent, LVPBenefits, KarriereCulture. All now use `lg:` breakpoint (not `md:`) for heading scaling.
Status: 🔲 Audit needed across all pages

---

## PART 5 — INTENTIONAL DESIGN CHOICES (Keep As-Is)

These items were flagged during audit but confirmed to be correct by design:

| Element | Why It Stays |
|---------|-------------|
| SRT FunctionalityOverview dark bg | Image card showcase — dark is functional, separated from dark hero by 2 light sections |
| Home ChallengeSection dark flip hover | Signature homepage interaction — premium dramatic effect, approved in prior session |
| Home ModernDNA dark flip hover | Same as above |
| Home DarumSonic dark flip hover | Same as above |
| Navigation mobile `rounded-lg` | Functional UI chrome — rounding improves touch targets |
| Footer dark background | Intentional dark bookend with SonicPulseCanvas animation |
| SRT Industries `rounded-full` animated dots | Decorative status indicators only, non-interactive |

---

## RECOMMENDED EXECUTION ORDER (Remaining Work)

1. ✅ ~~SectionBadge + Tag components + replace instances (DONE)~~
2. ✅ ~~Dark bg standardization (DONE)~~
3. ✅ ~~D1 — SRTTeaser center node simplified to solid lime + inner glow (DONE)~~
4. ✅ ~~W1–W7 — Wooden icon signature rolled out to service pages + SRT (DONE)~~
5. ✅ ~~ConsultationButton — single sharp-corner survey CTA (DONE)~~
6. ✅ ~~E2 — Corner bracket motif on key feature cards (DONE)~~
7. ✅ ~~E4 — Number watermarks on service/process cards (DONE)~~
8. ✅ ~~E8 — Typography scale audit and lock (DONE)~~
9. ✅ ~~D3, D4, D5, D6 — Low priority polish (DONE)~~
10. ✅ ~~E1, E5, E7 — New pattern rollout (DONE)~~
11. 🔲 **Later:** E3 — Ruling line with text divider variant
12. 🔲 **Later:** E6 — Glass morphism panel standardization

---

## WOODEN ICON SIGNATURE SYSTEM

The wooden carved icon style is a signature visual element of Sonic Group. Guidelines:

### Where Wooden Icons Appear
| Section Type | Icon Size | Placement |
|---|---|---|
| Homepage stat cards | 40–56px | Top of card |
| Challenge cards (all pages) | 56px | Top-right of card |
| CTA panels | 56–64px | Alongside headline |
| Survey/action button | 56px | Left of button text |
| Hero dual panels | 48–64px | Below badge, above H3 |

### Prompt Formula for New Icons
```
carved wooden [OBJECT] icon made from solid dark walnut wood three dimensional
relief carving natural wood grain texture warm rich brown color simple
minimalist [THEME] symbol handcrafted artisan quality on clean white background
top view product photography studio lighting
```

### Seq IDs Used (append new ones, never reuse)
- wood-compass-survey-cta-v1
- wood-chain-pos-challenge-1
- wood-warning-pos-challenge-2
- wood-wrench-pos-challenge-3
- wood-search-staff-challenge-1
- wood-calc-staff-challenge-2
- wood-chart-staff-challenge-3
- wood-star-events-challenge-1
- wood-tools-events-challenge-2
- wood-eye-events-challenge-3
- wood-question-forecast-challenge-1
- wood-silos-forecast-challenge-2
- wood-pencil-forecast-challenge-3
- wood-db-srt-problem-1
- wood-screen-srt-problem-2
- wood-clock-srt-problem-3

---

## DESIGN TOKENS REFERENCE

```
// Colors
$lime: #C8D400
$dark: #111111
$warm-light: #f4f4f0
$white: #ffffff

// Dark bg surfaces
Section bg: #111
Panel bg: #0d0d0d (for panel-within-section depth contrast only)

// Spacing
Card padding: p-8 (desktop), p-6 (mobile)
Section padding: py-20 px-6 (desktop), py-12 px-4 (mobile)

// Typography
Font: As established in tailwind.config.ts
Micro: text-[10px] → text-xs
Body: text-sm → text-base  
H3: text-xl → text-2xl
H2: text-3xl → text-4xl
Display: text-5xl → text-7xl (hero only)

// Borders
All content: borderRadius 0 (no rounded corners on content cards/sections)
Functional UI (inputs, dropdowns): small rounding allowed

// Shadows
None on cards (design rule)
Box-shadow allowed for skeuomorphic elements (phones, wood icons)
```
