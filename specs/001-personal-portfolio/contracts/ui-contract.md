# UI Contract

Defines the page's structural, component, i18n, and accessibility contracts. This is the
interface the implementation MUST satisfy and that `/speckit-tasks` decomposes.

## Document structure (landmarks)

```
<html lang dir>
 ├─ skip-link → #main
 ├─ <header> site nav: monogram/name · section links · language toggle (sticky, dark bar, red bottom border)
 ├─ <main id="main">
 │   ├─ #hero        (Hero)
 │   ├─ #about       (About / Profile Summary)
 │   ├─ #highlights  (Key Highlights / Achievements — card grid)
 │   ├─ #experience  (Professional Experience — timeline)
 │   ├─ #innovation  (Qaddha / Strategic Initiatives)
 │   ├─ #skills      (Skills — tag/badge cluster)
 │   ├─ #training    (Training & Certifications — list)
 │   └─ #contact     (Contact — email, LinkedIn, download CV)
 └─ <footer> name · rights · back-to-top
```

## Section contracts

- **Hero**: name (display type), title, tagline, primary CTA "Contact" (anchor to #contact),
  secondary CTA "Download CV" (PDF). Optional portrait at modest size. One H1 on the page (hero).
- **About**: H2 + profile paragraph.
- **Highlights**: H2 + 5 cards (`title`, `detail`, optional `year` badge). Dark cards, red text.
- **Experience**: H2 + vertical timeline, 3 entries (role, org, type, date range, bullets),
  newest first. Each entry is an `<article>` with its own sub-heading.
- **Innovation/Qaddha**: H2 + summary + external link (new tab, `rel="noopener noreferrer"`).
- **Skills**: H2 + list of 9 skill badges.
- **Training**: H2 + list of 4 certifications (name, issuer, year).
- **Contact**: H2 + mailto link, LinkedIn link, Download-CV link.

## Component contracts (design-system bound)

| Component | Rules |
|-----------|-------|
| Button (primary) | bg `#EF5143`, white bold label ≥18px, radius 0, padding from spacing scale, ≥44px tall; hover/active per design shadows; visible focus ring (non-color-only) |
| Button (ghost) | transparent, black or red label (size-appropriate per contrast table), radius 0 |
| Card | bg `#0A0A0A`, red text, 0 radius, padding 24–32px, no shadow at rest |
| Surface card | bg `#FEE9CE`, black text |
| Nav | dark bar, red bottom border, links with focus/hover/active states |
| Link | underline-on-hover; external links marked + new tab |
| Timeline entry | sharp rule/rail, date + role + bullets |
| Badge/tag | sharp, palette-based, ≥44px touch where interactive |

All components: `border-radius: 0`; spacing only from the 4px scale; colors only from the
8-color palette; logical CSS properties for RTL.

## i18n key contract

- Every visible text node maps to a `data-i18n="<section>.<key>"` (or is rendered from a
  `content.js` array). No hard-coded user-facing English string without a dictionary entry.
- `<html lang>` ∈ {`en`,`ar`}; `<html dir>` ∈ {`ltr`,`rtl`} kept consistent with `lang`.
- Language toggle: `role`/`aria-pressed` or a labelled `<button>`; updates all nodes without reload.
- Preference persisted in `localStorage["pref-lang"]`; English when unset.
- Document `<title>` and meta description update on language change.

## Accessibility contract (WCAG 2.1 AA)

- One H1; logical heading order (no skipped levels).
- Skip-to-content link first in tab order.
- All interactive elements keyboard-operable; visible, non-color-only focus indicator.
- Color contrast per research.md §D3 (≥4.5:1 normal, ≥3:1 large/UI).
- Touch targets ≥44×44px; ≥8px between adjacent targets.
- Images have `alt` (localized); decorative images `alt=""`.
- `prefers-reduced-motion` respected.
- Language toggle and external-link semantics announced to assistive tech.

## Responsive contract

| Breakpoint | Layout |
|-----------|--------|
| ≤767 mobile | 1 column; nav collapses to menu; full-width buttons; reduced display type; 16px container padding |
| 768–1023 tablet | 2 columns where sensible; 24px padding |
| 1024–1440 desktop | full grid; 32px padding; full type scale |
| ≥1440 large | centered 1440px max container |

No horizontal scrolling at any width.

## Done/acceptance signals (maps to spec Success Criteria)

- SC-001 hero identifies role + contact within first screen.
- SC-002/3 full parity; toggle < 1s, no reload.
- SC-004 contrast + keyboard pass.
- SC-005 no horizontal scroll across breakpoints.
- SC-006 CV/LinkedIn/Qaddha reachable in ≤2 actions.
