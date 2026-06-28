# Implementation Plan: Bilingual Personal Portfolio (Maisa Alosaimi)

**Branch**: `001-personal-portfolio` (working on `main`) | **Date**: 2026-06-28 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-personal-portfolio/spec.md`

## Summary

Deliver a single-page, bilingual (English/Arabic, RTL-aware) personal portfolio for a
Quality of Life & Wellbeing Specialist, targeting job/opportunity seeking. Built as a
zero-build static site (HTML + CSS + vanilla JS) deployed to GitHub Pages. English is the
no-JS/SEO baseline rendered in the HTML; a JavaScript language toggle swaps every labelled
node to Arabic, flips `lang`/`dir`, and persists the choice in `localStorage`. Visual design
faithfully implements the Won J You–inspired token system (8-color palette, 0px radius, 4px
spacing scale, 12-col/1440px grid, flat aesthetic) with font sizes scaled up from the design's
micro-exports to accessible real-world values (the single deviation sanctioned by the
constitution).

## Technical Context

**Language/Version**: HTML5, CSS (modern, custom properties), vanilla JavaScript (ES2020 modules). No transpilation.

**Primary Dependencies**: None at runtime. Self-hosted webfonts only: Familjen Grotesk (Latin, OFL) + Tajawal (Arabic, OFL). No frameworks, no bundler, no npm runtime deps.

**Storage**: `localStorage` for the language preference key only. No backend, no database.

**Testing**: Manual + scripted validation — HTML validation, axe/Lighthouse-style accessibility & contrast checks, keyboard-nav pass, EN/AR content-parity check (every `data-i18n` key exists in both dictionaries), responsive checks at each breakpoint, link checks.

**Target Platform**: Evergreen browsers (Chrome, Edge, Safari, Firefox), mobile + desktop. Served as static files by GitHub Pages.

**Project Type**: Static single-page web application (frontend only).

**Performance Goals**: First contentful paint < 1.5s and interactive < 2s on a typical mobile connection; total initial transfer kept lean (self-hosted woff2 subset, optimized images, no JS frameworks).

**Constraints**: No build step; directly serveable static artifact; no third-party tracking/analytics; must not expose government work email/phone; WCAG 2.1 AA; full EN/AR parity with correct RTL.

**Scale/Scope**: 1 page, 8 content sections, 2 languages, ~1 portrait + 1 CV PDF + 2 fonts. Single maintainer (non-developer) — simplicity is paramount.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-checked after Phase 1 design.*

| # | Principle | Plan compliance | Gate |
|---|-----------|-----------------|------|
| I | Design-System Fidelity | All palette/spacing/radius/grid/shadow rules encoded as CSS custom properties and reused; **only** the sanctioned type-scale deviation applied (micro sizes → readable sizes), documented in research.md with the preserved hierarchy ratios. | ✅ PASS |
| II | Content Truthfulness | All copy sourced verbatim from the CV; arrays in `content.js` mirror CV facts; Arabic strings flagged for Maisa's review before launch (FR-014). No invented facts. | ✅ PASS |
| III | Accessibility First | Semantic landmarks/headings, visible focus, ≥44px targets, verified ≥4.5:1 contrast pairs (weak pair `#4E4E4E` on `#FEE9CE` banned for body), correct `lang`/`dir`, `alt` text per language. | ✅ PASS |
| IV | Bilingual Parity (EN/AR + RTL) | Single dictionary drives both languages; parity check ensures every key has en+ar; `dir` flips ltr/rtl; logical CSS properties (`margin-inline`, `padding-inline`, `text-align: start`) mirror layout. | ✅ PASS |
| V | Performance & Simplicity | Plain HTML/CSS/vanilla JS, no build, no framework; self-hosted fonts; minimal JS. | ✅ PASS |
| VI | Responsive & Mobile-First | Mobile-first CSS, design breakpoints (767/1023/1440), fluid type via `clamp()`, no horizontal scroll. | ✅ PASS |
| VII | Privacy & Data Minimization | Only personal email + LinkedIn shown; no work email/phone; fonts self-hosted (no Google Fonts call); no analytics/trackers. | ✅ PASS |
| VIII | SEO & Shareability | Semantic `<title>`/meta description, Open Graph + Twitter tags, `lang`/`hreflang` signals, favicon, OG image. | ✅ PASS |

**Result: PASS — no violations. Complexity Tracking is empty (no justified deviations beyond the sanctioned type-scale rescale, which the constitution explicitly permits under Principle I).**

## Project Structure

### Documentation (this feature)

```text
specs/001-personal-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 output (decisions: fonts, i18n, type-scale mapping, deploy)
├── data-model.md        # Phase 1 output (content/i18n data model)
├── quickstart.md        # Phase 1 output (how to run/validate locally + deploy)
├── contracts/
│   └── ui-contract.md   # Phase 1 output (sections, components, i18n key contract, a11y contract)
├── checklists/
│   └── requirements.md  # Spec quality checklist (from /speckit-specify)
└── tasks.md             # Phase 2 output (/speckit-tasks — NOT created here)
```

### Source Code (repository root — served by GitHub Pages)

```text
/                              # repo root = GitHub Pages user-site root
├── index.html                # single page; English baseline content + data-i18n hooks
├── 404.html                  # fallback (redirects to index)
├── .nojekyll                 # serve assets verbatim (no Jekyll processing)
├── Maisa_Alosaimi_QoL.pdf    # downloadable CV (existing asset, linked from Hero)
├── assets/
│   ├── css/
│   │   ├── tokens.css        # design tokens: palette, spacing, type scale, breakpoints
│   │   ├── base.css          # reset, typography, fonts (@font-face), base elements
│   │   ├── layout.css        # container, 12-col grid, sections, nav, responsive
│   │   ├── components.css     # buttons, cards, links, timeline, badges, forms
│   │   └── rtl.css           # RTL-specific overrides (mostly logical props; minimal)
│   ├── js/
│   │   ├── content.js        # i18n dictionary { en:{...}, ar:{...} } — single source of truth
│   │   ├── i18n.js           # toggle engine: apply language, set lang/dir, persist
│   │   └── main.js           # boot: render dynamic lists, wire nav + toggle, year, etc.
│   ├── fonts/                # self-hosted woff2 (Familjen Grotesk + Tajawal subsets)
│   └── img/
│       ├── maisa.png         # portrait (modest size)
│       └── og-cover.png      # social share image (generated)
└── favicon.svg               # monogram favicon (palette-based)
```

**Structure Decision**: Flat static layout at the repository root because the deploy target is
a GitHub Pages **user site** (`maisa3333-creator.github.io`), which serves the default branch
root. `index.html` is the entry; `assets/` holds CSS/JS/fonts/images. The Spec Kit artifacts
(`.specify/`, `specs/`) and `.claude/` remain in the repo for provenance but are inert to Pages
(`.nojekyll` ensures everything is served as-is). No framework directories are needed.

## Complexity Tracking

> No constitutional violations. Table intentionally empty.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| (none)    | —          | —                                   |
