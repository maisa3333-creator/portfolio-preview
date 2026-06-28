# Feature Specification: Bilingual Personal Portfolio (Maisa Alosaimi)

**Feature Branch**: `001-personal-portfolio`

**Created**: 2026-06-28

**Status**: Draft

**Input**: User description: "Build Maisa Alosaimi's bilingual (English + Arabic, with RTL and a language toggle) personal portfolio website as a static site for job/opportunity seeking, hosted on GitHub Pages. Content from her CV (Quality of Life & Wellbeing Specialist). Visual identity follows the Won J You–inspired design system."

## Clarifications

### Session 2026-06-28

- Q: When a first-time visitor opens the site, which language should load by default? → A: Always English first (Arabic reached via the toggle; the manual choice is then remembered).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recruiter assesses fit and makes contact (Priority: P1)

A hiring manager or recruiter lands on the portfolio, immediately understands who Maisa
is and what she does, scans her achievements and experience, and finds a clear way to
contact her or download her CV.

**Why this priority**: This is the core purpose of the site (job/opportunity seeking).
If only this works, the site already delivers its primary value.

**Independent Test**: Open the home page; within the first screen the visitor can read
Maisa's name, professional title, and a value statement, and can reach a Contact action
and a Download CV action. Scrolling reveals achievements and a complete experience
timeline. Fully testable without any other story.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on the landing screen, **When** the page loads, **Then**
   they see Maisa's name, title ("Quality of Life & Wellbeing Specialist"), a concise
   value statement, a primary "Contact" action, and a secondary "Download CV" action.
2. **Given** a visitor reading the page, **When** they reach the Experience section,
   **Then** they see all three roles with employer, dates, and responsibilities exactly
   as stated in the CV.
3. **Given** a visitor who wants to reach out, **When** they activate "Contact", **Then**
   they are offered the personal email and LinkedIn profile (never the government work
   email or phone).

### User Story 2 - Bilingual visitor reads in their language (Priority: P1)

An Arabic-speaking or English-speaking visitor switches the site language and reads the
entire interface in their preferred language with correct reading direction.

**Why this priority**: Bilingual EN/AR with RTL is a defining, non-negotiable requirement
of the project and serves the UAE audience directly.

**Independent Test**: Toggle the language control; verify every visible string changes
language, layout direction flips between LTR (English) and RTL (Arabic), and no content
is missing in either language.

**Acceptance Scenarios**:

1. **Given** the site in English (LTR), **When** the visitor activates the language toggle,
   **Then** all visible content switches to Arabic and the layout mirrors to right-to-left.
2. **Given** the site in Arabic, **When** the visitor reloads the page, **Then** their last
   chosen language is preserved.
3. **Given** either language, **When** the visitor inspects any section, **Then** the same
   information is present in both languages (full content parity).

### User Story 3 - Visitor downloads the CV (Priority: P2)

A visitor wants an offline/portable copy of Maisa's CV.

**Why this priority**: Supports the job-seeking goal but is secondary to on-page browsing.

**Independent Test**: Activate "Download CV" and confirm the official CV PDF is delivered.

**Acceptance Scenarios**:

1. **Given** a visitor on any screen with the CV action visible, **When** they activate
   "Download CV", **Then** the official CV PDF opens/downloads.

### User Story 4 - Visitor explores the Qaddha innovation (Priority: P2)

A visitor interested in Maisa's innovation work opens the Qaddha (منصة قدّها) Quality of
Life platform prototype.

**Why this priority**: Differentiates Maisa via her award-winning innovation; supportive
but not required for first-pass assessment.

**Acceptance Scenarios**:

1. **Given** the Strategic Initiatives section, **When** the visitor activates the Qaddha
   prototype link, **Then** the prototype opens in a new tab without leaving the portfolio.

### User Story 5 - Mobile visitor browses comfortably (Priority: P3)

A visitor on a phone navigates and reads the whole site comfortably.

**Why this priority**: Broadens reach; the content and contact stories must work first.

**Acceptance Scenarios**:

1. **Given** a visitor on a small screen, **When** they browse any section, **Then**
   content is single-column, legible, and free of horizontal scrolling, with comfortably
   tappable controls.

### Edge Cases

- **Language persistence**: A returning visitor's previously selected language is restored.
- **Long Arabic strings**: Arabic translations that are longer/shorter than English must not
  break layout in either direction.
- **External link availability**: The Qaddha prototype is an external preview that could
  change/expire; the link must open externally and its failure must not break the portfolio.
- **Portrait quality**: The available portrait is low-resolution; it must be presented at a
  modest size so it never looks degraded.
- **No-JavaScript / print**: Core content must remain readable if scripts fail, and the page
  should print/save legibly.
- **Deep-link/share**: A shared link should preview meaningfully (title, description, image).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present these sections, all sourced from the CV: Hero, About /
  Profile Summary, Key Highlights/Achievements, Professional Experience, Strategic
  Initiatives & Digital Innovation (Qaddha), Skills, Training & Certifications, and Contact.
- **FR-002**: The Hero MUST show Maisa's name, the title "Quality of Life & Wellbeing
  Specialist", a concise value statement, a primary Contact action, and a Download CV action.
- **FR-003**: The site MUST be fully bilingual (English and Arabic) with complete content
  parity — no information present in one language and absent in the other.
- **FR-004**: A visible language toggle MUST switch all content between English and Arabic
  and set the correct reading direction (LTR for English, RTL for Arabic) across the layout.
- **FR-005**: The selected language MUST persist across page reloads and return visits.
- **FR-006**: The Contact section MUST expose only the personal email and the LinkedIn
  profile; it MUST NOT display the government work email or phone number.
- **FR-007**: A Download CV action MUST deliver the official CV PDF.
- **FR-008**: The Strategic Initiatives section MUST link to the Qaddha prototype, opening
  in a new browsing context.
- **FR-009**: All factual content (roles, dates, employers, metrics, awards, certifications)
  MUST match the CV exactly; no fabricated or embellished facts.
- **FR-010**: The visual identity MUST follow the Won J You–inspired design system (fixed
  palette, sharp 0px corners, defined spacing scale, grid, flat aesthetic, dramatic type
  hierarchy), with font sizes scaled to readable real-world values.
- **FR-011**: The site MUST meet WCAG 2.1 AA: sufficient color contrast, full keyboard
  operability with visible focus, semantic structure, and adequately sized touch targets.
- **FR-012**: The layout MUST be responsive and mobile-first across the design's breakpoints
  (mobile, tablet, desktop, large desktop) with no horizontal scrolling.
- **FR-013**: Each language view MUST provide descriptive page metadata and social-share
  (Open Graph/Twitter) tags, and correct `lang`/`dir` signals.
- **FR-014**: Arabic content MUST be review-gated — the site MUST NOT be considered launch-
  ready until Maisa has approved the Arabic wording of her name, titles, awards, and roles.
- **FR-015**: On a first visit (no stored preference), the site MUST load in English (LTR);
  once the visitor uses the toggle, that choice MUST be remembered for subsequent visits.

### Key Entities *(content model, no implementation)*

- **Localized Content**: Every user-facing string in two languages (en, ar) with shared keys.
- **Experience Entry**: Role title, employer, employment type, date range, responsibilities.
- **Achievement**: Title, short description, optional year.
- **Certification/Training**: Name, issuer, optional year.
- **Contact Channel**: Type (email, LinkedIn), label, destination.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can identify Maisa's profession and locate a contact
  action within the first screen, without scrolling.
- **SC-002**: 100% of user-facing content is available in both English and Arabic.
- **SC-003**: Switching language updates all visible text and flips layout direction in
  under 1 second, with no full page reload.
- **SC-004**: All text passes WCAG AA contrast (≥ 4.5:1, or ≥ 3:1 for large text) and the
  entire site is operable by keyboard alone.
- **SC-005**: The site has no horizontal scrolling and remains legible at mobile, tablet,
  and desktop widths.
- **SC-006**: A visitor can download the CV, open LinkedIn, and open the Qaddha prototype
  each in 2 actions or fewer.
- **SC-007**: 0 fabricated facts — every claim is traceable to the CV.
- **SC-008**: The site becomes usable (content visible and interactive) within ~2 seconds on
  a typical mobile connection.

## Assumptions

- The public contact email is `maisa3333@gmail.com` (confirmed).
- Contact is via a direct email link and the LinkedIn profile; no server-side contact form
  or backend is required for v1.
- The downloadable CV is the existing English PDF, offered in both language views (no separate
  Arabic CV document exists).
- The Qaddha prototype canonical link is `https://preview--qadha-recognition-hub.lovable.app/`.
- The portrait `maisa.png` is used at modest size; a higher-resolution image may replace it
  later without spec changes.
- The Al Owais Award year is recorded as `1994` exactly as on the CV.
- Default first-load language is English (see Clarifications / FR-015); Arabic via the toggle.
- The site is a single-page experience with in-page navigation to each section.
