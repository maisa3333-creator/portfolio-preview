<!--
SYNC IMPACT REPORT
==================
Version change: (uninitialized template) → 1.0.0
Bump rationale: Initial ratification of the project constitution (MINOR/MAJOR n/a for first version).

Principles defined (8):
  I.    Design-System Fidelity
  II.   Content Truthfulness (NON-NEGOTIABLE)
  III.  Accessibility First (NON-NEGOTIABLE)
  IV.   Bilingual Parity (EN/AR + RTL)
  V.    Performance & Simplicity
  VI.   Responsive & Mobile-First
  VII.  Privacy & Data Minimization
  VIII. SEO & Shareability

Added sections:
  - Additional Constraints & Technology Standards
  - Development Workflow & Quality Gates

Removed sections: none (first version)

Templates alignment:
  ✅ .specify/templates/plan-template.md   — generic "Constitution Check" gate; compatible (no edit needed)
  ✅ .specify/templates/spec-template.md   — generic scope/requirements; compatible
  ✅ .specify/templates/tasks-template.md  — generic task categories; compatible
  ✅ .specify/templates/checklist-template.md — generic; compatible

Deferred TODOs: none
-->

# Maisa Alosaimi Portfolio Constitution

A bilingual (English / Arabic), job-seeking personal portfolio for Maisa Alosaimi,
built as a static site and hosted on GitHub Pages. This constitution governs every
specification, plan, task, and implementation decision in the project. Where any
artifact conflicts with this document, this document prevails.

## Core Principles

### I. Design-System Fidelity

The site MUST faithfully honor the Won J You–inspired design system documented in
`wonjyou.studio-DESIGN.md`. Non-negotiable rules:

- Use ONLY the fixed 8-color palette: `#EF5143`, `#FFB261`, `#FEE9CE`, `#FFF3E2`,
  `#4E4E4E`, `#0A0A0A`, `#FFFFFF`, `#050505`. No gradients, tints, or off-palette colors.
- `border-radius` MUST be `0px` on all surfaces (buttons, cards, inputs, containers).
- Spacing MUST come from the 4px base scale (4, 8, 12, 16, 20, 24, 28, 32, 36, 44, 60, 68).
- Layout MUST use the 1440px max-width, 12-column grid with the documented gaps.
- Aesthetic MUST stay flat: shadows limited to hover/active/floating states only.
- Typography MUST preserve a dramatic, high-contrast hierarchy.

**Permitted deviation (rationale):** the design doc's exported micro font-sizes
(e.g. body 12px, buttons/captions 7.5px) are artifacts of a design-tool capture and
are unreadable on the web. Font sizes MUST be scaled up proportionally to accessible,
real-world values while preserving the *relative* dramatic hierarchy and every other
rule above. This is the single sanctioned deviation; all others are forbidden.

### II. Content Truthfulness (NON-NEGOTIABLE)

Every factual claim on the site MUST originate from `Maisa_Alosaimi_QoL.pdf` (the CV)
or from values explicitly confirmed by Maisa. Experience, dates, titles, metrics,
awards, and certifications MUST NOT be invented, embellished, or rounded. If a fact is
ambiguous or missing, it MUST be surfaced as a clarification rather than guessed.
Arabic translations of CV content MUST be review-gated: the site MUST NOT be published
until Maisa has reviewed the Arabic wording of her name, titles, awards, and roles.

### III. Accessibility First (NON-NEGOTIABLE)

The site MUST meet WCAG 2.1 Level AA. Concretely:

- Text contrast MUST be ≥ 4.5:1 (≥ 3:1 for large text); all chosen color pairs MUST be
  verified, and weak pairs (e.g. `#4E4E4E` on `#FEE9CE`) MUST NOT be used for body text.
- Markup MUST be semantic (landmarks, headings in order, lists, `<button>`/`<a>` used
  correctly); all interactive elements MUST be fully keyboard operable with visible focus.
- Interactive targets MUST be ≥ 44×44px.
- Every page state MUST expose correct `lang` and `dir` attributes; the active language
  MUST be programmatically determinable.
- Images MUST have meaningful `alt` text in the active language.

### IV. Bilingual Parity (EN/AR + RTL)

English and Arabic are first-class and MUST stay in sync. Rules:

- Every piece of user-facing content MUST exist in both languages; neither may carry
  content the other lacks.
- A visible language toggle MUST switch the entire interface, setting `lang` and `dir`
  (`ltr` for English, `rtl` for Arabic) and mirroring layout direction correctly.
- The chosen language SHOULD persist across reloads (e.g. via `localStorage`).
- Arabic typography MUST use an appropriate Arabic-capable webfont; Latin-only fonts
  MUST NOT be used to render Arabic.

### V. Performance & Simplicity

The implementation MUST be plain static **HTML + CSS + vanilla JavaScript** with **no
build step, no framework, and no bundler**. Rationale: maximal reliability on GitHub
Pages, zero toolchain dependencies, and long-term maintainability by a non-developer.
Constraints:

- No runtime dependency on npm/Node; the deployed artifact MUST be directly serveable
  static files.
- Third-party requests MUST be minimal (self-host or `<link>` only essential webfonts).
- First contentful paint MUST be fast on a typical mobile connection; total page weight
  SHOULD stay lean (avoid heavy images; optimize assets).
- Added complexity MUST be justified against this principle (YAGNI).

### VI. Responsive & Mobile-First

Layouts MUST be designed mobile-first and honor the design system's breakpoints —
Mobile (320–767px, 1 column), Tablet (768–1023px, 2 column), Desktop (1024–1440px,
12 column), Large Desktop (1440px+, centered). Typography and spacing MUST scale down
per the documented responsive rules, and the site MUST be usable and legible at every
breakpoint with no horizontal scrolling.

### VII. Privacy & Data Minimization

The site MUST NOT expose Maisa's government work email (`...@moe.gov.ae`) or work phone
number. Only the agreed personal contact channel (personal email) and public profiles
(LinkedIn) MAY be shown. Any contact form MUST route through a privacy-respecting
third-party service without embedding secrets in the repository. No analytics or
trackers that collect personal data may be added without explicit approval.

### VIII. SEO & Shareability

Each language view MUST provide semantic, descriptive metadata: a meaningful `<title>`,
meta description, `lang`/`hreflang` signals, and Open Graph / Twitter Card tags so the
page previews well when shared. Headings MUST form a coherent document outline. A
favicon and social preview image SHOULD be provided.

## Additional Constraints & Technology Standards

- **Stack:** Static HTML5, modern CSS (custom properties for the palette/spacing tokens),
  vanilla ES (no transpilation). No server-side code.
- **Hosting:** GitHub Pages, user site repository `maisa3333-creator.github.io`, served
  at `https://maisa3333-creator.github.io`. Deployment performed via the GitHub CLI (`gh`).
- **Design tokens:** The palette, spacing scale, breakpoints, and type scale MUST be
  encoded as CSS custom properties and reused — never hard-coded ad hoc.
- **Fonts:** Latin text uses a free geometric sans approximating Avantt (Familjen Grotesk);
  Arabic text uses a complementary geometric Arabic webfont. Fallback stack: `Arial,
  'Helvetica Neue', sans-serif`. Commercial fonts (Avantt) MUST NOT be embedded.
- **Assets:** `Maisa_Alosaimi_QoL.pdf` is the downloadable CV; `maisa.png` is the portrait
  (used at modest size given its resolution).
- **Browser support:** Current evergreen browsers (Chrome, Edge, Safari, Firefox) on
  mobile and desktop.

## Development Workflow & Quality Gates

- **Methodology:** Development MUST follow the Spec Kit Spec-Driven flow in order —
  constitution → specify → clarify → plan → checklist → tasks → analyze → implement →
  converge — with each artifact consistent with the ones before it.
- **Constitution Check:** `plan.md` MUST include a Constitution Check confirming the
  design (stack, accessibility, bilingual, privacy) complies with these principles before
  tasks are generated.
- **Quality gates before launch:** (1) WCAG AA contrast & keyboard checks pass;
  (2) EN/AR content parity verified; (3) RTL layout verified; (4) Arabic wording reviewed
  by Maisa; (5) responsive check at all breakpoints; (6) no work email/phone exposed;
  (7) links (LinkedIn, Qaddha prototype, CV download) resolve correctly.
- **Version control:** Work committed in logical increments with clear messages; the
  public repository MUST NOT contain secrets or private credentials.

## Governance

This constitution supersedes other practices for this project. Amendments MUST be made by
editing this file, accompanied by a Sync Impact Report and a semantic-version bump:

- **MAJOR** — removal or backward-incompatible redefinition of a principle.
- **MINOR** — a new principle/section or materially expanded guidance.
- **PATCH** — clarifications and wording fixes with no semantic change.

All specs, plans, and implementations MUST be reviewed for compliance with these
principles; any deviation MUST be explicitly justified in the relevant artifact and, if
sustained, ratified here. Where a principle marked NON-NEGOTIABLE is at risk, work MUST
stop until compliance is restored.

**Version**: 1.0.0 | **Ratified**: 2026-06-28 | **Last Amended**: 2026-06-28
