# Pre-Implementation Quality Checklist: Bilingual Personal Portfolio

**Purpose**: Validate that the requirements across design, accessibility, bilingual/RTL,
content, privacy, responsiveness, performance, and SEO are complete, clear, consistent, and
measurable BEFORE implementation (and re-checkable after).
**Created**: 2026-06-28
**Feature**: [spec.md](../spec.md) · [plan.md](../plan.md) · [research.md](../research.md)

**Note**: "Unit tests for English" — each item tests the *requirements*, not the build.

## Design-System Fidelity Requirements

- [ ] CHK001 Is the exact color palette enumerated with hex values and forbidden-color rules? [Completeness, Constitution §I]
- [ ] CHK002 Is the `0px` border-radius rule stated as applying to all surfaces without exception? [Clarity, Constitution §I]
- [ ] CHK003 Is the spacing scale fully enumerated (allowed values) rather than "use consistent spacing"? [Measurability, Constitution §I]
- [ ] CHK004 Is the type-scale rescale (micro→readable) defined with concrete source→web values and preserved ratios? [Clarity, Research §D2]
- [ ] CHK005 Is the grid/container requirement quantified (max-width, columns, gaps per breakpoint)? [Completeness, Plan/Contract]
- [ ] CHK006 Are shadow/elevation rules bounded to specific states rather than left open? [Clarity, Constitution §I]
- [ ] CHK007 Is the single sanctioned deviation explicitly scoped so no other deviations are implied permissible? [Consistency, Constitution §I]

## Accessibility Requirements (NON-NEGOTIABLE)

- [ ] CHK008 Are contrast requirements quantified per color pair with pass/fail verdicts (not "good contrast")? [Measurability, Research §D3]
- [ ] CHK009 Is the orange-bg/red-text button conflict resolved in requirements with an AA-compliant alternative? [Conflict, Research §D3]
- [ ] CHK010 Are keyboard operability and visible non-color-only focus requirements defined for every interactive element? [Coverage, Spec §FR-011]
- [ ] CHK011 Is the ≥44×44px touch-target requirement stated with spacing between targets? [Completeness, Contract]
- [ ] CHK012 Are `lang`/`dir` correctness requirements tied to language state? [Clarity, Spec §FR-004]
- [ ] CHK013 Are localized `alt` text requirements specified (including decorative-image handling)? [Gap, Contract]
- [ ] CHK014 Is heading-order / single-H1 / landmark structure specified? [Completeness, Contract]

## Bilingual Parity & RTL Requirements

- [ ] CHK015 Is "full content parity" defined objectively (every key present in both languages, equal array lengths)? [Measurability, Spec §FR-003, Data-Model]
- [ ] CHK016 Is the language-toggle behavior specified (no reload, updates all nodes, < 1s)? [Clarity, Spec §SC-003]
- [ ] CHK017 Is language persistence + default-English-on-first-visit unambiguously required? [Clarity, Spec §FR-015]
- [ ] CHK018 Are RTL mirroring requirements defined (logical properties; what stays LTR like numerals/links)? [Completeness, Research §D5]
- [ ] CHK019 Is the Arabic-review gate stated as a launch blocker with explicit scope (name/titles/awards/roles)? [Clarity, Spec §FR-014]
- [ ] CHK020 Are per-language metadata/title/description requirements specified? [Coverage, Spec §FR-013]

## Content Truthfulness Requirements

- [ ] CHK021 Does every content entity in the data model trace to a CV fact (no invented fields)? [Traceability, Data-Model]
- [ ] CHK022 Are dates/years required to match the CV exactly (incl. Al Owais `1994`)? [Clarity, Spec Assumptions]
- [ ] CHK023 Is the experience set bounded to exactly the three CV roles with their date ranges? [Completeness, Data-Model]
- [ ] CHK024 Is the Qaddha link target specified exactly and required to open externally? [Clarity, Spec §FR-008]

## Privacy Requirements

- [ ] CHK025 Is the prohibition on the government work email and phone stated as a hard rule? [Clarity, Constitution §VII, Spec §FR-006]
- [ ] CHK026 Are the only-permitted contact channels (personal email + LinkedIn) enumerated? [Completeness, Research §D6]
- [ ] CHK027 Is the no-analytics/no-tracker requirement explicit (incl. self-hosted fonts, no 3rd-party font call)? [Coverage, Research §D4/D7]

## Responsiveness Requirements

- [ ] CHK028 Are all four breakpoints defined with concrete layout/column/padding behavior? [Completeness, Contract]
- [ ] CHK029 Is "no horizontal scrolling at any width" stated as a measurable acceptance criterion? [Measurability, Spec §SC-005]
- [ ] CHK030 Are mobile navigation-collapse and full-width-button requirements specified? [Coverage, Contract]

## Performance & Simplicity Requirements

- [ ] CHK031 Is "no build step / no framework / directly serveable" stated as a binding constraint? [Clarity, Constitution §V]
- [ ] CHK032 Are load-time targets quantified (FCP/interactive) rather than "fast"? [Measurability, Plan]
- [ ] CHK033 Is the font-self-hosting requirement specified with fallback stacks and `font-display`? [Completeness, Research §D4]

## SEO & Shareability Requirements

- [ ] CHK034 Are required meta tags enumerated (title, description, OG, Twitter, hreflang/lang)? [Completeness, Spec §FR-013]
- [ ] CHK035 Are favicon and social preview image requirements specified? [Gap, Constitution §VIII]

## Cross-Cutting Consistency & Ambiguities

- [ ] CHK036 Do the spec, plan, research, data-model, and UI contract use consistent terminology (sections, keys, color rules)? [Consistency]
- [ ] CHK037 Are there any remaining `[NEEDS CLARIFICATION]` or unresolved assumptions that would block implementation? [Ambiguity]

## Notes

- Check items off as their underlying requirements are confirmed adequate.
- This list gates `/speckit-implement`; `/speckit-analyze` cross-checks the artifacts it references.
