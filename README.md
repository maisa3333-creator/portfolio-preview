# Maisa Alosaimi — Personal Portfolio

A bilingual (English / Arabic, RTL-aware) personal portfolio for **Maisa Alosaimi**,
*Quality of Life & Wellbeing Specialist*. Static site, zero build step, deployed to GitHub Pages.

🔗 **Live:** https://maisa3333-creator.github.io

Built with the [GitHub Spec Kit](https://github.com/github/spec-kit) Spec-Driven Development
workflow — see [`specs/001-personal-portfolio/`](specs/001-personal-portfolio/) for the
constitution, spec, plan, and tasks.

## Highlights

- **Bilingual EN/AR** with a one-click language toggle, full RTL mirroring, and persisted preference (English by default).
- **Won J You–inspired design system**: fixed 8-color palette, sharp `0px` corners, 4px spacing scale, flat editorial aesthetic.
- **Accessible** (WCAG 2.1 AA): verified contrast, keyboard navigable, semantic landmarks, ≥44px touch targets.
- **No build, no framework**: vanilla HTML + CSS + ES modules. Self-hosted fonts (Familjen Grotesk + Tajawal) — zero third-party requests.

## Project structure

```
index.html                 # single page (English baseline + data-i18n hooks)
404.html · favicon.svg · .nojekyll
Maisa_Alosaimi_QoL.pdf     # downloadable CV
assets/
  css/  fonts · tokens · base · layout · components · rtl
  js/   content.js (bilingual source of truth) · i18n.js · main.js
  fonts/  self-hosted woff2
  img/    maisa.png · og-cover.png
specs/001-personal-portfolio/   # Spec Kit artifacts
.specify/                        # Spec Kit infrastructure
```

## Run locally

```bash
python -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages, user site)

```bash
gh auth login
gh repo create maisa3333-creator/maisa3333-creator.github.io --public --source . --remote origin --push
```

The site is served from the default-branch root at `https://maisa3333-creator.github.io`.

## Editing content

All text lives in [`assets/js/content.js`](assets/js/content.js) as a single `CONTENT` object
with `en` and `ar` keys (kept at parity). Update facts there — they flow into the page on load.
