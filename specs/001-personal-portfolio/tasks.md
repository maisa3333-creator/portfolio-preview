---

description: "Task list for Bilingual Personal Portfolio (Maisa Alosaimi)"
---

# Tasks: Bilingual Personal Portfolio (Maisa Alosaimi)

**Input**: Design documents from `specs/001-personal-portfolio/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contract.md

**Tests**: No automated test suite requested (static site). Validation is manual/scripted per
quickstart.md and the `checklists/quality.md` gates. No test tasks are generated.

**Organization**: Grouped by user story for independent, incremental delivery. All paths are
repo-root relative (the GitHub Pages user-site root).

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on an incomplete task)
- **[Story]**: US1–US5 from spec.md (Setup/Foundational/Polish have no story label)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project scaffold and design foundation.

- [x] T001 Create static scaffold: `index.html` head/skeleton, `404.html`, `.nojekyll`, and `assets/css/`, `assets/js/`, `assets/fonts/`, `assets/img/` directories at repo root
- [x] T002 [P] Create `assets/css/tokens.css` — CSS custom properties for the 8-color palette, 4px spacing scale, fluid type scale (research §D2), breakpoints, and 1440px/12-col grid
- [x] T003 [P] Self-host fonts: download Familjen Grotesk + Tajawal `woff2` into `assets/fonts/` and declare `@font-face` (`font-display: swap`) in `assets/css/base.css`
- [x] T004 [P] Add portrait `assets/img/maisa.png`, create `favicon.svg` (palette monogram), and generate `assets/img/og-cover.png` (social preview)
- [x] T005 Create `assets/css/base.css` — modern reset, base element typography, font stacks, visible focus styles, `prefers-reduced-motion` baseline

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: i18n engine, scripts, layout/components CSS, and page shell that ALL stories need.

**⚠️ CRITICAL**: No user-story section work begins until this phase is complete.

- [x] T006 Create `assets/js/content.js` — i18n dictionary with ALL keys per data-model.md (English complete; Arabic stub keys present for parity, filled in US2)
- [x] T007 [P] Create `assets/js/i18n.js` — set `<html lang/dir>`, swap `[data-i18n]` nodes, update `<title>`/meta, persist `localStorage["pref-lang"]`, default English, parity assertion (warn on missing key)
- [x] T008 Create `assets/js/main.js` — boot: render dynamic lists (highlights/experience/skills/training) from `content.js`, wire toggle + nav + back-to-top + current year, init i18n
- [x] T009 [P] Create `assets/css/layout.css` — container, 12-col grid, section rhythm, sticky header/nav, footer, responsive breakpoints
- [x] T010 [P] Create `assets/css/components.css` — buttons (contrast-safe per research §D3), cards, links, timeline, badges; `border-radius:0`, tokens only
- [x] T011 [P] Create `assets/css/rtl.css` — minimal `dir="rtl"` directional overrides (logical props do the rest)
- [x] T012 Build `index.html` shell: `<head>` SEO/OG/meta/lang, skip-link, header (name/monogram, section nav, language toggle), `<main>` with 8 empty section landmarks + ids, `<footer>`; link all 5 CSS files + JS modules

---

## Phase 3: User Story 1 — Recruiter browse + contact (P1) 🎯 MVP

**Goal**: An English single page where a recruiter reads profile, achievements, experience,
skills, and certifications, and can contact Maisa.

**Independent Test**: Load page; read hero → experience; reach Contact (email + LinkedIn). All in English.

- [x] T013 [US1] Build Hero in `index.html` (H1 name, title, tagline, primary "Contact" CTA, secondary "Download CV" CTA, portrait) with `data-i18n` keys
- [x] T014 [P] [US1] Build About section in `index.html` (profile summary) with `data-i18n` keys
- [x] T015 [P] [US1] Build Highlights section in `index.html` — render 5 achievement cards from `content.js`
- [x] T016 [P] [US1] Build Experience timeline in `index.html` — render 3 roles (org, type, dates, bullets) newest-first from `content.js`
- [x] T017 [P] [US1] Build Skills section in `index.html` — render 9 skill badges from `content.js`
- [x] T018 [P] [US1] Build Training & Certifications section in `index.html` — render 4 items from `content.js`
- [x] T019 [US1] Build Contact section in `index.html` — `mailto:` personal email + LinkedIn (new tab, `rel="noopener"`); assert NO work email/phone anywhere
- [x] T020 [US1] Fill English content in `content.js` for all US1 sections verbatim from `Maisa_Alosaimi_QoL.pdf`; verify each fact against the CV

**Checkpoint**: English MVP is viewable and contactable.

---

## Phase 4: User Story 2 — Bilingual toggle + RTL (P1)

**Goal**: Toggle EN↔AR with full parity, correct RTL mirroring, and persistence.

**Independent Test**: Toggle → all text Arabic + `dir=rtl`; reload → still Arabic; clear storage → English.

- [x] T021 [US2] Author complete Arabic translations for every key in `content.js` (mark `// REVIEW` for Maisa); ensure parity (equal keys + array lengths)
- [x] T022 [US2] Wire language toggle in `i18n.js`/`main.js`: set lang/dir, swap all nodes, update title/meta, persist; English default (FR-015)
- [x] T023 [P] [US2] Complete RTL mirroring in `assets/css/rtl.css`; verify nav, timeline, cards, badges mirror correctly
- [x] T024 [P] [US2] Add per-language `<title>`/meta description + `hreflang`/`lang` handling in head + `i18n.js`

**Checkpoint**: Site is fully bilingual with RTL.

---

## Phase 5: User Story 3 — CV download (P2)

**Goal**: Visitor downloads the official CV.

**Independent Test**: Activate "Download CV" → PDF opens/downloads.

- [x] T025 [US3] Wire "Download CV" links (hero + contact) to `Maisa_Alosaimi_QoL.pdf` with localized accessible labels + `download` attr; confirm file served at root

---

## Phase 6: User Story 4 — Qaddha innovation (P2)

**Goal**: Visitor opens the Qaddha QoL platform prototype.

**Independent Test**: Activate Qaddha link → prototype opens in a new tab.

- [x] T026 [US4] Build Strategic Initiatives / Qaddha section in `index.html` — bilingual summary + external link to `https://preview--qadha-recognition-hub.lovable.app/` (new tab, `rel="noopener noreferrer"`)

---

## Phase 7: User Story 5 — Mobile responsive (P3)

**Goal**: Comfortable mobile experience.

**Independent Test**: At 360px width, content is single-column, legible, no horizontal scroll, tappable controls.

- [x] T027 [US5] Implement responsive behavior in `assets/css/layout.css`: mobile single-column, collapsible nav, full-width buttons, type/spacing scale-down; verify no horizontal scroll at 360/768/1024/1600px
- [x] T028 [P] [US5] Ensure ≥44×44px touch targets + ≥8px spacing on nav links, buttons, badges, and links

---

## Phase 8: Polish & Cross-Cutting Concerns

- [ ] T029 [P] Accessibility pass: heading order, single H1, ARIA for toggle/nav, localized `alt` text, visible focus, keyboard order, contrast verification per research §D3
- [x] T030 [P] SEO/shareability: finalize OG/Twitter tags, favicon, `og-cover.png`, descriptive titles in both languages
- [x] T031 [P] Performance: optimize images, verify font files, defer non-critical JS, confirm zero external requests
- [x] T032 Content parity + truthfulness check: boot parity assertion clean; spot-check all facts vs CV; confirm no `@moe.gov.ae`/phone present
- [ ] T033 Validation per quickstart.md (local server, keyboard, responsive, links); tick passing gates in `checklists/quality.md`
- [x] T034 [P] Add `README.md` at repo root (overview, run, deploy instructions)

---

## Dependencies & Execution Order

- **Phase 1 → Phase 2 → Phase 3** are sequential at the boundaries (shell must exist before sections).
- **US1 (Phase 3)** is the MVP and unblocks the rest.
- **US2** depends on US1 sections + `content.js` existing. **US3, US4, US5** depend on the shell + US1; they are mutually independent and can be done in any order / in parallel.
- **Polish (Phase 8)** runs after the stories are in place.

## Parallel Execution Examples

- Phase 1: T002, T003, T004 in parallel (separate files), then T005.
- Phase 2: T007, T009, T010, T011 in parallel after T006/T008 contracts are set.
- Phase 3: after T013, run T014–T018 in parallel (independent sections), then T019–T020.
- Phase 8: T029, T030, T031, T034 in parallel.

## Implementation Strategy

- **MVP first**: Complete Phase 1 → 2 → 3 (US1) for a viewable, contactable English site.
- **Then bilingual**: US2 makes it EN/AR + RTL (a defining requirement).
- **Then enrich**: US3 (CV), US4 (Qaddha), US5 (mobile).
- **Then polish**: accessibility, SEO, performance, parity/truthfulness, validation.
- Deploy to GitHub Pages after Phase 8 validation passes.

## Task Summary

- **Total**: 34 tasks
- **By story**: Setup 5 · Foundational 7 · US1 8 · US2 4 · US3 1 · US4 1 · US5 2 · Polish 6
- **Parallelizable**: 17 tasks marked `[P]`
- **MVP scope**: Phases 1–3 (US1)
