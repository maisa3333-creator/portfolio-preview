# Design System Inspired by Won J You Studios

## 1. Visual Theme & Atmosphere

Won J You Studios embodies a bold, contemporary design language rooted in high contrast and deliberate minimalism. The visual identity leans into a striking interplay between deep blacks and vibrant warm tones, creating an energetic yet sophisticated atmosphere that commands attention without sacrificing elegance. This design system celebrates stark geometric simplicity, generous whitespace, and unapologetic color statements that reflect a confidence in design pedagogy. The mood is professional yet approachable, aspiring yet grounded—designed to inspire design professionals and mentees alike through visual clarity and intentional restraint.

**Key Characteristics**
- High-contrast color combinations with minimal palette
- Bold typography at extreme scales for dramatic hierarchy
- Clean geometric forms with zero border radius
- Warm accent colors dominating neutral foundations
- Generous spacing creating breathing room and focus
- Purposeful use of opacity and layering
- Refined, editorial aesthetic with coaching authority

## 2. Color Palette & Roles

### Primary
- **Primary Action Red** (`#EF5143`): Core brand color used extensively across CTAs, highlights, and emphasis states. Conveys energy, passion, and design expertise.
- **Primary Warm Accent** (`#FFB261`): Secondary warm tone for supporting accents and interactive states. Softens primary red while maintaining warmth.

### Accent Colors
- **Cream Warm** (`#FEE9CE`): Soft, inviting warm neutral used for background layers and card surfaces, creating visual separation.
- **Off-White Cream** (`#FFF3E2`): Lightest warm accent for subtle backgrounds and overlay states.

### Interactive
- **Interactive Orange** (`#FFB261`): Hover and active states on secondary buttons and links, providing visual feedback.
- **Interactive Red** (`#EF5143`): Primary interactive feedback on all main CTAs and links.

### Neutral Scale
- **Dark Charcoal** (`#4E4E4E`): Supporting text color for secondary hierarchy and disabled states.
- **Deep Black** (`#0A0A0A`): Primary text color, headings, and main content layer. Primary dark neutral.
- **Off-Black** (`#050505`): Darkest neutral for edge cases and maximum contrast.
- **White** (`#FFFFFF`): Pure white for surfaces and light text on dark backgrounds.

### Surface & Borders
- **Card Background Dark** (`#0A0A0A`): Default card and container background.
- **Surface Cream** (`#FEE9CE`): Soft surface option for highlighted sections.
- **Border Color** (`#EF5143`): Accent borders and dividers use primary red.

## 3. Typography Rules

### Font Family
**Primary Font:** Avantt (`avantt`, fallback: `'Arial', 'Helvetica Neue', sans-serif`)

Avantt is a contemporary, geometric sans-serif that reinforces the studio's modern, design-forward identity. All typography uses this single family for cohesive, intentional visual language.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Large | Avantt | 189px | 800 | 151.8px | 0px | Hero/splash screens, maximum impact |
| Display XL | Avantt | 195px | 800 | 156px | 0px | Extra large hero text, dramatic emphasis |
| Heading 1 | Avantt | 33px | 700 | 39.6px | 0px | Page titles, major section headers |
| Body Large | Avantt | 12px | 700 | 14.4px | 0px | Primary body text, article content |
| Button Label | Avantt | 7.5px | 500 | normal | 0px | Button text, small UI labels |
| Caption/Small | Avantt | 7.5px | 500 | normal | 0px | Captions, metadata, fine print |

### Principles
- **Scale Hierarchy:** Extreme size differences (7.5px to 195px) create dramatic visual rhythm and clear information architecture.
- **Weight Consistency:** Primary weights (500, 700, 800) provide clear differentiation between UI elements and content.
- **Line Height Proportions:** Display text uses tighter line-height ratios (0.8) while body maintains comfortable readability (1.2).
- **Single Font Family:** Avantt-only approach ensures visual cohesion and reinforces design system authority.
- **No Letter Spacing:** All typography maintains 0px letter spacing except where marked, honoring geometric precision.

## 4. Component Stylings

### Buttons

**Primary Button (Filled)**
- Background: `#FFB261`
- Text Color: `#EF5143`
- Font: Avantt, 7.5px, weight 500
- Padding: `19.875px 24px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: normal
- Height: `57.75px`
- Hover State: Background darkens to `#FF9F3D`, text remains `#EF5143`
- Active State: Background `#FF8C1A`, text `#D64031`

**Secondary Button (Ghost/Text)**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text Color: `#EF5143`
- Font: Avantt, 7.5px, weight 500
- Padding: `0px 0px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: normal
- Hover State: Text color shifts to `#FFB261`
- Active State: Text color shifts to `#D64031`

**Tertiary Button (Dark)**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text Color: `#0A0A0A`
- Font: Avantt, 12px, weight 700
- Padding: `0px 0px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: 14.4px
- Height: 14.4px
- Hover State: Text color `#4E4E4E`
- Active State: Text color `#050505`

### Links

**Primary Link**
- Background: transparent
- Text Color: `#FFF3E2`
- Font: Avantt, 7.5px, weight 500
- Padding: `0px 0px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: normal
- Hover State: Text color `#EF5143`, underline `1px solid #EF5143`
- Active State: Text color `#D64031`

**Secondary Link (Red)**
- Background: transparent
- Text Color: `#EF5143`
- Font: Avantt, 7.5px, weight 500
- Padding: `0px 0px`
- Border Radius: `0px`
- Border: `0px none`
- Line Height: normal
- Hover State: Text color `#FFB261`
- Active State: Text color `#D64031`, text-decoration underline

### Cards & Containers

**Default Card**
- Background: `#0A0A0A`
- Border Radius: `0px`
- Border: `0px none`
- Padding: `24px 32px`
- Box Shadow: none
- Text Color: `#EF5143`
- Min Height: Auto
- Container Width: Full width responsive (max `1440px`)

**Surface Variant Card**
- Background: `#FEE9CE`
- Text Color: `#0A0A0A`
- Border Radius: `0px`
- Padding: `24px 32px`
- Box Shadow: none
- Border: `0px none`

**Elevated Card**
- Background: `#FFFFFF`
- Border: `1px solid #EF5143`
- Padding: `24px 32px`
- Text Color: `#0A0A0A`
- Border Radius: `0px`

### Inputs & Forms

**Text Input**
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `1px solid #EF5143`
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: Avantt, 12px, weight 700
- Line Height: 14.4px
- Focus State: Border color `#FFB261`, box-shadow `0px 0px 0px 2px rgba(239, 81, 67, 0.1)`
- Placeholder Text Color: `#4E4E4E`

**Textarea**
- Background: `#FFFFFF`
- Text Color: `#0A0A0A`
- Border: `1px solid #EF5143`
- Border Radius: `0px`
- Padding: `12px 16px`
- Font: Avantt, 12px, weight 700
- Min Height: `120px`
- Focus State: Border color `#FFB261`

**Label**
- Font: Avantt, 12px, weight 700
- Color: `#0A0A0A`
- Margin Bottom: `8px`
- Display: block

### Navigation

**Primary Navigation**
- Background: `#0A0A0A`
- Padding: `24px 32px`
- Border Bottom: `1px solid #EF5143`
- Display: flex, justify-content: space-between, align-items: center

**Navigation Link**
- Text Color: `#EF5143`
- Font: Avantt, 12px, weight 700
- Padding: `8px 16px`
- Hover State: Background `rgba(239, 81, 67, 0.1)`, text color `#FFB261`
- Active State: Border bottom `2px solid #FFB261`, text color `#FFB261`

**Navigation Item Separator**
- Border Right: `1px solid #4E4E4E`
- Height: `20px`
- Margin: `0px 12px`

## 5. Layout Principles

### Spacing System
**Base Unit:** 4px

**Spacing Scale:**
- `4px`: Micro-gaps, icon spacing, tight grouping
- `8px`: Component internal spacing, small gaps
- `12px`: Form field padding, small button padding
- `16px`: Standard margin, input padding
- `20px`: Medium card padding, section gaps
- `24px`: Card/container padding, primary spacing unit
- `28px`: Large gaps between major sections
- `32px`: Extra large padding, main container inset
- `36px`: Large margin, section separation
- `44px`: Extra large margin, major breaks
- `60px`: Hero section spacing, dramatic breaks
- `68px`: Maximum spacing for hero/splash layouts

**Usage Context:**
- Form fields use `12px` padding for compact feel
- Cards default to `24px` to `32px` internal padding
- Section breaks use `44px` to `60px` margins
- Grid gaps use `16px` to `24px` depending on density

### Grid & Container
- **Max Width:** `1440px` (full viewport container)
- **Column Strategy:** 12-column flexible grid with `16px` gaps on desktop, `12px` on tablet, `8px` on mobile
- **Container Padding:** `32px` on desktop, `24px` on tablet, `16px` on mobile
- **Section Pattern:** Full-width colored blocks with internal `32px` padding containers
- **Margin Reset:** All elements reset margin to `0px` by default, using margin utilities for spacing

### Whitespace Philosophy
The design system embraces generous whitespace as a core principle. Large breathing room between sections (44–60px) creates visual hierarchy and focus. Content is never crowded; each element receives intentional separation. This approach reflects the coaching-forward mission—clarity over clutter, emphasis over noise.

### Border Radius Scale
- **0px (Sharp):** All buttons, cards, inputs, and borders. Sharp edges reinforce the geometric, modern aesthetic and design precision.
- **Optional Soft Radius:** Advanced states may use `2px` for hover/focus states only, never on default surfaces.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | No shadow, flat | Cards, containers, default surfaces |
| Hover | `0px 2px 8px rgba(0, 0, 0, 0.12)` | Button hover, interactive cards, elevated links |
| Active | `0px 4px 12px rgba(0, 0, 0, 0.16)` | Button active, pressed state, modal surfaces |
| Floating | `0px 8px 24px rgba(0, 0, 0, 0.2)` | Modals, popovers, dropdown menus |
| Modal Overlay | `0px 16px 32px rgba(0, 0, 0, 0.25)` | Full-screen modal, dialog overlay |

**Shadow Philosophy:**
This design system largely rejects shadows in favor of flat, high-contrast aesthetic. Depth is achieved through color contrast and layering rather than shadow effects. When shadows appear, they are subtle and purposeful—limited to interactive feedback (hover/active) and floating elements (modals, dropdowns). The minimal shadow approach reinforces the clean, editorial quality and geometric precision of the brand.

## 7. Do's and Don'ts

### Do
- **Maintain High Contrast:** Always pair dark (`#0A0A0A`) and light (`#FFFFFF`) or use primary red (`#EF5143`) for accents. Contrast ensures legibility and energy.
- **Use Sharp Corners:** All borders, buttons, and containers use `0px` border radius. Consistency reinforces design precision.
- **Embrace Large Spacing:** Use `44px` to `68px` margins between major sections. Whitespace is a design feature, not wasted space.
- **Stack Typography Scales:** Dramatic size jumps (7.5px → 12px → 33px → 195px) create clear hierarchy. Never use intermediate sizes.
- **Leverage the Warm Palette:** Use `#FFB261` and `#FEE9CE` as surface accents; reserve `#EF5143` for primary CTAs and emphasis.
- **Apply Single Font Family:** Avantt only, across all typography. Consistency reinforces authority.
- **Prioritize Readability:** Never sacrifice legibility for style. Body text remains at minimum `12px` with adequate line-height.

### Don't
- **Avoid Rounded Corners:** Never use border-radius except `0px`. Soft corners dilute the geometric identity.
- **Don't Overuse Shadows:** Limit shadows to hover/active states only. Flat design is the default aesthetic.
- **Don't Mix Multiple Fonts:** Avantt is the only typeface. Avoid system fonts or serif alternatives.
- **Don't Compress Whitespace:** Never reduce spacing below the `16px` margin standard. Cramped layouts contradict the brand.
- **Don't Use Undefined Colors:** Stick to the 8-color palette. Custom or off-brand colors weaken system integrity.
- **Don't Center-Align Large Bodies of Text:** Left-align body content for readability. Center alignment reserved for headlines and CTAs.
- **Don't Create Weak Contrast:** Never place `#4E4E4E` text on `#FEE9CE` backgrounds. Test all color pairs for WCAG AA compliance.
- **Don't Add Borders to Everything:** Borders should be sparse and intentional. Use them only on inputs, cards, and key interactive elements.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes | Column Strategy |
|-----------------|-------|------------|-----------------|
| Mobile | 320px–767px | Single column, `16px` padding, `8px` gaps, heading size reduced to 24px (h1) | 1 column full-width |
| Tablet | 768px–1023px | Two-column layouts, `24px` padding, `12px` gaps, h1 remains 33px | 6–8 columns, `12px` gap |
| Desktop | 1024px–1440px | Full grid layout, `32px` padding, `16px`–`24px` gaps, full typography scale | 12 columns, `16px` gap |
| Large Desktop | 1440px+ | Max-width container `1440px` centered, consistent `32px` padding, full scale typography | 12 columns, `16px` gap, centered |

### Touch Targets
- **Minimum Touch Size:** `44px × 44px` for all interactive elements (buttons, links, form inputs)
- **Spacing Between Targets:** Minimum `8px` gap between adjacent touch targets to prevent accidental activation
- **Mobile Button Height:** Increase to `48px` on mobile for comfortable thumb interaction
- **Mobile Link Padding:** Increase to `12px` on mobile for easier tapping

### Collapsing Strategy
- **Navigation:** Hamburger menu appears at tablet breakpoint (768px). Primary nav collapses to vertical stack.
- **Buttons:** Full-width buttons on mobile (width: 100%), side-by-side on desktop.
- **Typography:** Display sizes (h2, h3) scale down to 64px on tablet, 48px on mobile.
- **Spacing:** Vertical margins halved on mobile (`44px` → `24px`, `60px` → `32px`) to conserve space.
- **Grid Columns:** 1 column mobile, 2 column tablet, 3–4 column desktop sections adapt automatically.
- **Cards:** Stack vertically on mobile/tablet, grid layout on desktop (2–3 per row).

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Primary Action Red (`#EF5143`) — Use on buttons, links, and interactive emphasis
- **Background:** Deep Black (`#0A0A0A`) — Default dark surface for cards and containers
- **Heading Text:** Deep Black (`#0A0A0A`) — All headlines and primary content
- **Body Text:** Deep Black (`#0A0A0A`) — Primary body content on light backgrounds
- **Accent/Hover:** Primary Warm Accent (`#FFB261`) — Interactive states, secondary emphasis
- **Light Surface:** Cream Warm (`#FEE9CE`) — Soft background layers and card alternates
- **Light Text:** White (`#FFFFFF`) — Text on dark backgrounds, high contrast overlay text
- **Supporting Text:** Dark Charcoal (`#4E4E4E`) — Secondary, disabled, or de-emphasized content

### Iteration Guide
1. **All typography must use Avantt font family exclusively.** Fallback to `'Arial', 'Helvetica Neue', sans-serif` if Avantt unavailable. Never substitute with system fonts.
2. **All buttons and containers must have `border-radius: 0px`.** Sharp corners are non-negotiable and define the design identity.
3. **All spacing follows the 4px base unit scale:** Use only `4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 44px, 60px, 68px`. Intermediate values dilute consistency.
4. **Color palette is fixed at 8 colors:** `#EF5143, #FFB261, #FEE9CE, #FFF3E2, #4E4E4E, #0A0A0A, #FFFFFF, #050505`. Do not create gradients, tints, or custom blends outside this palette.
5. **Shadows are minimal and purposeful:** Base surfaces have no shadow. Hover states use `0px 2px 8px rgba(0, 0, 0, 0.12)`. Active/modal states escalate to `0px 4px 12px` or `0px 8px 24px`. Never exceed `0px 16px 32px`.
6. **Typography hierarchy is extreme:** Use only the defined sizes (7.5px, 12px, 33px, 189px, 195px). Never interpolate intermediate sizes. Each step must create dramatic visual difference.
7. **High contrast is always required:** Pair dark `#0A0A0A` with light `#FFFFFF` or accent with `#EF5143`. Test all color combinations for WCAG AA minimum contrast ratio (4.5:1 for text).
8. **Buttons are semantic not stylistic:** Primary actions use filled orange (`#FFB261` bg, `#EF5143` text). Secondary actions are text-only (`#EF5143` text). Dark/tertiary use `#0A0A0A` text. Hover states shift accent colors; never change background.
9. **Whitespace is intentional:** Minimum `44px` margins between major sections. Minimum `16px` padding on all containers. Never compress spacing below base unit; generous breathing room defines the aesthetic.
10. **Responsive behavior is predictable:** Mobile is single-column, tablet is 2-column (6–8 grid columns), desktop is full 12-column grid. Typography scales down on mobile (h1: 33px → 24px). All breakpoints maintain minimum touch target size of `44px × 44px`.