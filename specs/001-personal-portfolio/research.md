# Phase 0 Research & Decisions

Feature: Bilingual Personal Portfolio (Maisa Alosaimi). All "NEEDS CLARIFICATION" from the
Technical Context are resolved below.

## D1 — Rendering & i18n architecture

**Decision**: Single `index.html` containing the **English** content as the semantic, no-JS,
SEO baseline. Every translatable text node carries a `data-i18n="section.key"` attribute. A
JS dictionary (`assets/js/content.js`) holds `{ en, ar }` for every key. On toggle, `i18n.js`
sets `<html lang dir>`, swaps each node's text to the active language, re-renders dynamic
lists, and stores the choice in `localStorage` (`pref-lang`). English loads by default (FR-015).

**Rationale**: Guarantees content parity from one source, keeps English readable without JS
(accessibility + SEO baseline), and needs zero build tooling.

**Alternatives considered**: (a) Fully JS-rendered both languages — rejected: empty page
without JS, weaker SEO. (b) Two separate pages `index.html` / `ar.html` — rejected: duplicate
maintenance, parity drift risk, more complex toggling.

## D2 — Type-scale mapping (the constitution's sanctioned deviation)

The design's exported micro sizes (body 12px, button/caption 7.5px) are unreadable on the web.
We scale **up** while preserving the dramatic hierarchy ratios. Mapping (fluid via `clamp()`):

| Role | Design (export) | Web value | Notes |
|------|-----------------|-----------|-------|
| Display (hero) | 189–195px | `clamp(56px, 11vw, 150px)` | Dramatic, responsive |
| H1 | 33px | `clamp(30px, 5vw, 52px)` | Section titles |
| H2 | (derived) | `clamp(24px, 3.5vw, 36px)` | Sub-sections |
| H3 / lead | (derived) | `clamp(19px, 2.2vw, 24px)` | Card titles, lead-in |
| Body | 12px | `clamp(16px, 1.1vw, 18px)` | Readable body (min 16px) |
| Small/caption | 7.5px | `14px` | Metadata, labels |
| Button label | 7.5px | `16px` (≥18px bold where used as large CTA) | Tap-friendly |

Weights preserved at 500 / 700 / 800; letter-spacing 0; tight line-height on display (~0.95),
comfortable (~1.5) on body. This is the **only** sanctioned deviation (Principle I).

## D3 — Contrast-safe color pairings (Accessibility is NON-NEGOTIABLE)

Verified pairings within the fixed 8-color palette (approx. WCAG contrast):

| Foreground | Background | ≈ Ratio | Verdict |
|-----------|-----------|---------|---------|
| `#0A0A0A` black | `#FFFFFF` white | ~20:1 | ✅ body/any |
| `#0A0A0A` black | `#FEE9CE` cream | ~17:1 | ✅ body/any |
| `#0A0A0A` black | `#FFB261` orange | ~11:1 | ✅ body/any (button text) |
| `#FFFFFF` white | `#0A0A0A` black | ~20:1 | ✅ body/any |
| `#EF5143` red | `#0A0A0A` black | ~5.8:1 | ✅ body/any (card text) |
| `#FFFFFF` white | `#EF5143` red | ~3.3:1 | ⚠ large/bold text only (≥18.66px bold or 24px) |
| `#EF5143` red | `#FFFFFF` white | ~3.3:1 | ⚠ large text / non-text UI only — **never small body** |

**Decisions driven by this:**
- **Primary CTA** = red `#EF5143` background + **white bold label at ≥18px** (qualifies as AA
  large text, 3.3:1 ≥ 3:1). The design's original orange-bg + red-text pair (~1.9:1) is
  **rejected** — it fails AA. This honors the design system's own rule ("test all pairs for
  WCAG AA / don't create weak contrast"), so it is compliant with Principle I, not a violation.
- **Secondary/ghost CTA** on light surfaces uses **black** label (or red only at large sizes).
- **Body text**: black on light surfaces, white on dark surfaces. Red reserved for accents,
  large headings, and text on black cards.
- `#4E4E4E` charcoal is **not** used for text on `#FEE9CE` (per design Don'ts); black is used.

## D4 — Fonts (self-hosted, OFL)

**Decision**: Latin = **Familjen Grotesk** (geometric grotesque, closest free match to Avantt);
Arabic = **Tajawal** (geometric Arabic, pairs cleanly). Both Open Font License. Self-hosted as
`woff2` in `assets/fonts/` via `@font-face`; fetched once with `curl` from the Google Fonts CDN
during implementation (no runtime Google Fonts request → satisfies privacy Principle VII).
Fallback stack: `'Familjen Grotesk', Arial, 'Helvetica Neue', sans-serif` (Latin) and
`'Tajawal', 'Segoe UI', Tahoma, sans-serif` (Arabic). `font-display: swap`.

**Rationale**: Distinctive geometric identity without a commercial license; self-host avoids
third-party tracking and an extra origin.

**Alternatives**: Archivo / Space Grotesk (Latin) — viable but Familjen Grotesk is closer to
Avantt's proportions. Cairo / IBM Plex Sans Arabic (Arabic) — good, but Tajawal is more
geometric and lighter weight range.

## D5 — RTL strategy

**Decision**: Use CSS **logical properties** everywhere (`margin-inline`, `padding-inline`,
`inset-inline`, `text-align: start/end`, `border-inline`) so the same CSS mirrors automatically
when `dir="rtl"`. `i18n.js` sets `document.documentElement.dir`. `rtl.css` holds only the few
unavoidable directional overrides (e.g., decorative arrows, timeline rail side, background
positions). Numerals stay Western Arabic by default.

**Rationale**: Minimal duplicate CSS; correct mirroring; maintainable.

## D6 — Contact (no backend)

**Decision**: Contact = `mailto:maisa3333@gmail.com` link + LinkedIn profile link
(`https://www.linkedin.com/in/maisa-alosaimi-4563b659`, opens new tab, `rel="noopener"`).
No server-side form (static hosting; avoids exposing secrets; satisfies privacy principle).
Government work email/phone are excluded entirely.

## D7 — Deployment

**Decision**: GitHub Pages **user site**. Repo `maisa3333-creator/maisa3333-creator.github.io`,
created and pushed via the **GitHub CLI** (`gh`). Pages serves the default branch root; site
lives at `https://maisa3333-creator.github.io`. `.nojekyll` added so `assets/` is served
verbatim. `gh` is not yet installed → install + interactive `gh auth login` performed at the
deploy step (the one manual action required from Maisa).

**Alternatives**: project-site repo with `/docs` — rejected; user site gives the cleaner root URL.

## D8 — Motion & reduced-motion

**Decision**: Subtle, tasteful entrance/scroll reveals only (opacity/translate), gated behind
`@media (prefers-reduced-motion: reduce)` which disables them. No motion is required for
comprehension; the flat editorial aesthetic stays primary.

## Open items deferred to review (non-blocking)

- Arabic wording of name/titles/awards → Maisa to approve before launch (FR-014).
- Optional higher-resolution portrait → can replace `maisa.png` later.
