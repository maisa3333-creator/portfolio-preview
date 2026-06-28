# Phase 1 Data Model — Content & i18n

No database. The "data" is the localized content dictionary that drives the page. Single
source of truth: `assets/js/content.js`.

## Top-level shape

```js
export const CONTENT = {
  en: { meta, nav, hero, about, highlights[], experience[], qaddha, skills[], training[], contact, ui },
  ar: { meta, nav, hero, about, highlights[], experience[], qaddha, skills[], training[], contact, ui }
};
```

**Parity rule (FR-003)**: `keys(CONTENT.en)` deep-equals `keys(CONTENT.ar)`; every array has the
same length and field set in both languages. A boot-time assertion logs any missing key.

## Entities

### Meta
- `title` (string) — `<title>` per language
- `description` (string) — meta description / OG description
- `ogLocale` (string) — `en_US` / `ar_AE`

### NavItem (static UI labels)
- keys: `about, highlights, experience, innovation, skills, training, contact`

### Hero
- `name` — "Maisa Alosaimi" / "ميساء العصيمي" (AR review-gated)
- `title` — "Quality of Life & Wellbeing Specialist"
- `tagline` — value statement derived from CV Profile Summary (≤ ~140 chars)
- `ctaContactLabel`, `ctaCvLabel`

### About
- `heading`, `body` — from CV Profile Summary (verbatim meaning)

### Highlight[] (Key Highlights / Achievements — from CV)
Fields: `title`, `detail`, `year?`
1. UAE Hackathon 2024 — First Place (Government Employees Innovators Category)
2. Al Owais Award for Studies & Scientific Innovation — Research Category — `1994`
3. Exceeds Expectations — Performance Appraisal — `2025`
4. Coordinated 90 Events for 30,000 Students
5. Quality of Life & Wellbeing Expertise — 3+ years

### ExperienceEntry[] (Professional Experience — from CV, newest first)
Fields: `role`, `org`, `type` (Full-time), `start`, `end`, `bullets[]`
1. Students' Wellbeing Coordinator — Dubai Schools Branch 1 — Jan 2024 – Present (5 bullets)
2. Head of Student Affairs Unit — Nad Al Hammar School, Cycle Two — Jul 2020 – Jan 2024 (4 bullets)
3. Head of Student Affairs Unit — Al Rashidiya School, Cycle Three — Sep 2017 – Jul 2020 (2 bullets)

### Qaddha (Strategic Initiatives & Digital Innovation)
- `heading`, `name` ("Qaddha — منصة قدّها"), `summary` (digital QoL incentive platform prototype),
  `linkLabel`, `linkHref` = `https://preview--qadha-recognition-hub.lovable.app/`

### Skill[] (from CV)
Application & Website Design, Community Outreach, Data Analysis, Fine Arts, Photography,
Program Coordination, Program Evaluation, Talent Identification & Innovation, Volunteer Work.

### Certification[] (Training & Certifications — from CV)
Fields: `name`, `issuer?`, `year?`
1. STEM Innovation in Education — Stanford University
2. New Leader Training Program — Empowering and Qualifying Leaders — 2018
3. International Visitor Leadership Program (IVLP) — Women's Leadership: Promoting Peace & Security — 2018
4. Certified Trainer License — 2017

### Contact
- `heading`, `body`, `emailLabel`, `email` = `maisa3333@gmail.com`,
  `linkedinLabel`, `linkedin` = `https://www.linkedin.com/in/maisa-alosaimi-4563b659`,
  `cvLabel`, `cvHref` = `Maisa_Alosaimi_QoL.pdf`

### UI (chrome strings)
- `langToggleLabel` (e.g., "العربية" when EN active / "English" when AR active),
  `skipToContent`, `backToTop`, `footerRights`, `downloadCv`, `openInNewTab`

## Validation rules
- All factual fields trace to the CV (Principle II). No fabricated values.
- `year` displayed exactly as on CV (`1994`, `2025`, `2018`, `2017`).
- Email/phone: only personal email + LinkedIn; **no** `@moe.gov.ae` / phone (Principle VII).
- Arabic strings carry an internal `// REVIEW` note until Maisa approves (FR-014).
