# Quickstart — Run, Validate, Deploy

## Prerequisites
- A modern browser.
- Python 3 (already installed) for a local static server — no Node/npm needed.
- For deploy: GitHub CLI (`gh`) authenticated as `maisa3333-creator`.

## Run locally
From the repo root:

```bash
python -m http.server 8080
# open http://localhost:8080
```

The site is plain static files; no build step.

## Validate (maps to spec Success Criteria & UI contract)

1. **Bilingual parity** — toggle language; confirm every section changes language, `dir`
   flips ltr↔rtl, and nothing is missing in either language (SC-002/003).
2. **Persistence** — switch to Arabic, reload → still Arabic; clear storage → English (FR-015).
3. **Accessibility** — keyboard-only pass (Tab/Shift-Tab/Enter), visible focus everywhere;
   run an axe/Lighthouse audit → 0 serious contrast/name-role-value issues (SC-004).
4. **Responsive** — check 360px, 768px, 1024px, 1600px widths → no horizontal scroll (SC-005).
5. **Links** — Download CV opens the PDF; LinkedIn + Qaddha open in a new tab (SC-006).
6. **Truthfulness** — spot-check every fact against `Maisa_Alosaimi_QoL.pdf` (SC-007).
7. **No leakage** — confirm no `@moe.gov.ae` / phone number anywhere (Principle VII).

## Deploy to GitHub Pages (user site)

```bash
# one-time: install gh, then authenticate (interactive — Maisa completes this)
gh auth login

# create the user-site repo and push
gh repo create maisa3333-creator/maisa3333-creator.github.io --public --source . --remote origin --push

# enable Pages from the default branch root (if not auto-enabled)
gh api -X POST repos/maisa3333-creator/maisa3333-creator.github.io/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

Live at `https://maisa3333-creator.github.io` (first build can take 1–2 minutes).

## Detailed references
- Content/i18n model: [data-model.md](./data-model.md)
- UI/component/a11y/responsive contract: [contracts/ui-contract.md](./contracts/ui-contract.md)
- Decisions (fonts, type scale, contrast, RTL): [research.md](./research.md)
