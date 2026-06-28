<!-- SPECKIT START -->
## Active feature: 001-personal-portfolio

Bilingual (EN/AR, RTL) static personal portfolio for **Maisa Alosaimi** — job-seeking,
deployed to GitHub Pages (`maisa3333-creator.github.io`).

- **Stack**: vanilla HTML5 + CSS (design tokens) + vanilla JS ES modules. No build, no framework.
- **i18n**: English baseline in HTML + `data-i18n` keys; `assets/js/content.js` dictionary `{en,ar}`;
  toggle sets `lang`/`dir`, persists `localStorage["pref-lang"]`; English default.
- **Design**: Won J You–inspired tokens (8-color palette, `0px` radius, 4px spacing scale,
  1440px/12-col grid, flat). Type scaled up from the design's micro-exports for readability.
- **Fonts**: self-hosted Familjen Grotesk (Latin) + Tajawal (Arabic).
- **Artifacts**: `specs/001-personal-portfolio/` → plan.md, research.md, data-model.md,
  contracts/ui-contract.md, quickstart.md. **Constitution**: `.specify/memory/constitution.md` (v1.0.0).
- **Accessibility is NON-NEGOTIABLE** (WCAG 2.1 AA); never expose the `@moe.gov.ae` email or phone.
<!-- SPECKIT END -->
