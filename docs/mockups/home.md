# Home Mockup

## Revision

Approved Issue #38 scope. Sergio approved this canonical Pencil source and handoff for implementation in the [human approval comment](https://github.com/smarquez1/smarquez1.github.io/issues/38#issuecomment-5281712527). The source contains only `Current Portfolio Baseline Desktop` and `Current Portfolio Baseline Mobile`. Future scope changes still require independent critique and human approval before implementation.

## Goal

Establish Sergio's product engineering profile quickly, then give recruiters and engineering managers a clear path to experience, technical focus, and contact.

## Source Tool

Pencil / pen.dev, created through OpenCode.

## Prompt

Create a dark-first, minimalist, technical personal website home screen for Sergio Marquez, a Senior Product Engineer focused on Ruby on Rails, SaaS, APIs, and full-stack web platforms. Use a restrained near-black, white, neutral, and cobalt palette; strong Geist headings; Inter body copy; Geist Mono metadata; and a factual career-record structure. Provide desktop and mobile compositions. Keep all copy factual, semantic-HTML friendly, accessible, and usable without JavaScript.

## Accepted Decisions

- Keep `02 / Experience` as the sole main section heading for professional experience and the selected community project. Place Hacer Pedido after the career timeline/disclosure as a nested editorial subsection, before `03 / Technical focus`.
- Assign the single timeline-to-project boundary to the project subsection's top divider. The final visible employment row has no bottom divider at this transition.
- Assign the single project-to-focus boundary to Technical Focus's top divider. The project subsection has no bottom divider at this transition.
- Use the exact approved-copy candidate shown below. The project is labeled `Selected community project`, with `VOLUNTEER COMMUNITY PROJECT`, `2020`, and COVID-19 context in its metadata.
- Preserve the verified contribution boundary and latest concise visible/detail copy; onboarding/editorial approval and delivery-choice details remain evidence, not required public copy.
- Use an editorial asymmetry rather than a generic equal-column card: a compact project-story label/metadata column and a wider narrative column, with no timeline rail, role card, disclosure status, or count treatment.
- Frame Hacer Pedido as a small, low-scale volunteer project rather than a major case study. The copy should set modest expectations about scope, scale, ownership, and impact.
- Keep primary navigation ordered as `About`, `Experience`, `Focus`, `Contact`. The Experience destination owns both the career record and Hacer Pedido subsection.
- Omit adoption figures and the React Native Web decision from the candidate: the former is direct recollection without independent verification, and the latter is secondary technical detail that would add density.
- Keep the outer timeline disclosure borderless in both canonical collapsed states: action `SHOW REMAINING 4 ROLES`, status `SHOWING 4 OF 8 ROLES`, and paper `+` indicator.

- Keep one canonical desktop frame and one canonical mobile frame; remove superseded issue experiments and duplicate evidence frames from the source.
- Use small recognizable glyphs beside LinkedIn, GitHub, Email, and Resume / PDF labels; keep the visible text labels so icons remain supplementary.
- Trim the footer's trailing black space so the page ends shortly after the footer content rather than with a large empty block.
- Start the hero with the final approved greeting `Hi, I’m Sergio 👋`, followed by a clear product-engineering statement.
- Use the approved hero sentence: `I’m a code-first Senior Product Engineer focused on Ruby on Rails, APIs, and full-stack product work. From understanding the problem to shipping the solution.`
- Keep the impact-led idea in the role summaries rather than creating a separate verified-stories section.
- Include a brief, text-only personal note about surfing in About; photography remains out of scope until issue #37 supplies approved assets.

- Use a typographic hero with one primary action and one contact action.
- Make the dark theme the approved visual direction for the initial mockup.
- Use supporting copy that presents Sergio as a Senior Product Engineer specializing in Ruby on Rails, APIs, and full-stack delivery.
- Use a vertical career timeline with dates, company or work context, role, and concise detail.
- Reserve cobalt for links, active timeline state, and the primary action.
- Keep the desktop layout spacious and the mobile layout single-column with full-width actions.
- Include the privacy statement that most production work is private and this site is the public sample.
- Use `Since 2011` instead of an age-sensitive experience counter such as `more than 14 years`.
- Describe Decisiv without specifying the size of Sergio's team.
- Replace the disconnected hero system-map panel with a typographic hero and direct career/contact actions.
- Add a short company context line for selected timeline employers: industry plus what the company or product does.
- Keep Sergio's contribution summaries separate from company descriptions.
- Use a direct invitation to discuss long-term remote product work without a visible contact section number.
- Preserve the information density of the current career record: dates, work arrangement, role, contribution summary, expandable notes, technologies, and the complete eight-role timeline.
- Preserve the current timeline composition: date and work arrangement column, vertical marker rail, company card, company mark, role, status/count indicator, summary, and contribution disclosure.
- Ship the enhanced timeline preview with the first four verified roles visible by default; positions 05–08 are available through an explicit `SHOW REMAINING 4 ROLES` disclosure.
- Use Sergio's contribution and verified outcomes in visible role summaries; company context remains supplementary.
- Keep all eight verified roles and native contribution disclosures available when JavaScript is disabled.
- Animate the outer timeline disclosure and each `CONTRIBUTION NOTES` disclosure with the same open/close treatment; semantic state changes remain immediate.
- Under `prefers-reduced-motion: reduce`, remove disclosure transitions and show the final state immediately.
- Preserve visible `:focus-visible` treatment for every disclosure in both themes, with native Enter/Space keyboard behavior and accurate expanded state.
- Keep the JavaScript-disabled behavior as an implementation requirement, not visible footer copy.
- Keep the greeting copy as `Hi, I’m Sergio 👋`; the emoji is supplementary and must not carry meaning.
- Say `surfing` explicitly in the brief personal note rather than relying on an indirect reference to waves.
- Keep About focused on how Sergio works and avoid repeating the hero positioning.
- Surface verified KaiPod workflow evidence and Decisiv outcomes in the visible timeline summaries.
- Keep recurring timeline metadata and disclosure labels at 12px or larger across desktop and mobile.
- Present private production work through verified decisions and outcomes without exposing sensitive product details.
- Keep the footer factual and remove implementation-status messaging.

## Rejected Decisions

- Do not place Hacer Pedido inside the employment ordered list; it is a volunteer/community project, not an employer or role 09.
- Do not give Hacer Pedido its own main-section number or primary navigation destination; its lower visual hierarchy is intentional within `02 / Experience`.
- Do not claim Sergio created the initial WordPress version, owned the whole product, or attribute press coverage of the initial launch to his rewrite contribution.
- Do not use grandiose case-study language, broad success framing, enterprise-scale implications, or quantified impact for this project.
- Do not publish `more than 100 businesses` or `approximately 10 businesses still use it`; both figures require explicit human confirmation and independent-verification treatment.

- No photography or invented project screenshots.
- No team-size claims where the number is not useful to the reader.
- Keep the SoftPro context concise: software development company providing web, mobile, and desktop solutions.
- No live AI interaction in the hero or core navigation.
- No implementation-status messaging in the public footer; progressive enhancement belongs in behavior and handoff notes.
- No dense technology keyword wall.
- No hover-only information or decorative motion required to understand the page.
- No JavaScript-only career content, mandatory animation, or disclosure state communicated by motion alone.
- Defer the bright/light alternative to a separate GitHub issue and review pass.

## Accessibility Notes

- The intended implementation uses semantic landmarks, headings, links, and buttons rather than clickable decorative containers.
- Body copy is kept above 14px in the desktop and mobile directions.
- Cobalt is paired with dark text or white text for clear state contrast in the dark-first palette.
- Focus states, keyboard navigation, reduced motion, and dark-mode contrast remain implementation acceptance criteria.
- Company context is supplementary text and must never be the only way to understand Sergio's role.
- The menu button is a mockup affordance only; implementation must provide a keyboard-operable disclosure with a useful no-JavaScript fallback.
- Timeline behavior follows the shipped issue #23 contract: enhanced preview shows roles 01–04, while no-JavaScript rendering keeps all eight roles available. The canonical baseline visually represents the collapsed enhanced state and annotates the expanded/no-JavaScript contract.
- Outer timeline and `CONTRIBUTION NOTES` disclosures use native semantic disclosure behavior; animation is feedback only and is bypassed for reduced motion.
- Focus-visible indicators remain visible and high-contrast in light and dark themes; disclosure labels communicate the action and count.

## Responsive Notes

- Desktop uses a spacious typographic hero and horizontal navigation.
- Mobile collapses navigation to a menu affordance, stacks the hero, and makes actions full width.
- Timeline rows keep the marker visible while moving date and role information into a compact vertical group.
- Desktop keeps the timeline's date column, marker rail, and large cards; mobile stacks date metadata above each card while retaining the same card hierarchy.
- Technical focus changes from a two-column section to a single-column list.
- Hacer Pedido uses a desktop editorial asymmetry: a 300px project-story label/metadata column and a flexible narrative column with 96px separation. Mobile stacks the same story in one column with 34px top / 0px bottom internal padding and preserves the 12px metadata minimum.
- The mobile hero is single-column, with full-width actions and no decorative panel competing with the positioning statement.
- At intermediate widths, timeline metadata remains stacked above each card until the desktop date-column layout has enough room at the `sm` breakpoint.
- The mobile menu order contract is `About`, `Experience`, `Focus`, `Contact`, matching the desktop navigation. The Experience destination contains both career record and project subsection.
- Desktop and mobile place the project subsection after the timeline/disclosure but inside `02 / Experience`, before `03 / Technical focus`. The project subsection owns the single Timeline → Hacer Pedido top divider; Technical Focus owns the single Hacer Pedido → Technical Focus top divider; the project has no bottom divider. Generous spacing, a subsection eyebrow, and distinct heading hierarchy prevent it from reading as a timeline role.

## Implementation Risks

- Dark mode needs a deliberate visual pass rather than simple color inversion.
- The mobile menu must remain usable with JavaScript disabled or provide a semantic fallback.
- Copy length may require a second content pass after implementation to preserve readable line lengths at intermediate widths.
- Native disclosure transitions vary across browsers; semantics, immediate assistive-technology state, keyboard operation, and the reduced-motion final state take priority over visual interpolation.
- Preview hiding must be applied only after enhancement is available; otherwise the no-JavaScript fallback must retain all eight roles.
- The candidate adds a content section without changing navigation or interaction contracts. Implementation must preserve semantic headings, static content without JavaScript, visible focus behavior for existing controls, and reduced-motion rules already documented above.
- The mobile copy is near the density limit; preserve the designed 14px minimum body size and recheck line wrapping at intermediate widths.
- The project is intentionally concise and not interactive; verify the editorial asymmetry at intermediate widths so the story column does not become a cramped pseudo-card or create horizontal overflow.
- Boundary ownership is intentionally non-stacked: desktop/mobile project top divider only; desktop/mobile Technical Focus top divider only; no project bottom divider and no final visible timeline-row bottom divider.

## Issue #38 Approved-Copy Candidate

The following is the candidate copy represented in both canonical Pencil frames. It is verified against `../CV/career-master.md` lines 205–218 and direct confirmation recorded Aug 12, 2026 (lines 278–279). The adoption figures are deliberately not included.

**Label:** `Selected community project`

**Title:** `Hacer Pedido`

**Metadata:** `VOLUNTEER COMMUNITY PROJECT` / `2020 · COVID-19 PANDEMIC` / `DISTRIBUTED TEAM / ARGENTINA · SPAIN · GERMANY`

**Summary:** `A small volunteer community project during COVID-19, helping local businesses publish simple menus and take orders remotely.`

**Contribution:** `CONTRIBUTION / I joined the later rewrite, not the original WordPress version. As part of a small distributed volunteer team, I worked across UX and frontend/full-stack delivery. Businesses could manage menu information, and customers could review a cart before handing the order off to a prefilled WhatsApp message.`

**Result label:** `WHAT WE SHIPPED`

**Result:** `WHAT WE SHIPPED / A simple ordering path that helped participating local businesses take orders remotely.`

## Evidence Mapping

| Candidate claim                                                                | Evidence                                                                                     | Status                                                                           |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Volunteer project, 2020, distributed team across Argentina, Spain, Germany     | `career-master.md` Hacer Pedido project record, lines 205–208; direct confirmation, line 278 | Verified                                                                         |
| WordPress prototype rewritten as Next.js/TypeScript with another developer     | `career-master.md`, lines 210 and 278                                                        | Verified; technology names are omitted from visible candidate to control density |
| Designers and marketing contributors; UX, frontend/full-stack boundary         | `career-master.md`, lines 211–214 and 278                                                    | Verified                                                                         |
| Reusable onboarding, editorial approval, self-service business/menu management | `career-master.md`, lines 212 and 278                                                        | Verified                                                                         |
| Cart, quantities, delivery method, prefilled WhatsApp message                  | `career-master.md`, lines 213–216 and 278; `story-bank.md`, lines 163–171                    | Verified                                                                         |
| Free ordering path for businesses unable to serve customers in person          | `career-master.md`, lines 216 and 278; `company-research.md`, lines 171–185                  | Verified, with team-level outcome language                                       |
| Peak/current adoption figures                                                  | `career-master.md`, lines 217 and 278                                                        | Not used; requires independent verification and explicit human confirmation      |

### Scale and expectation guardrail

The public treatment intentionally presents Hacer Pedido as a small volunteer community project. A reasonable reader must not infer enterprise scale, sole ownership, broad adoption, sustained product success, or quantified business impact. The visible result is bounded to helping participating local businesses take simple orders remotely. Adoption recollections remain excluded from the design.

Excluded interpretations: Sergio created the original WordPress product; Sergio owned the whole product; the project had broad or enterprise scale; the rewrite produced measured adoption, revenue, growth, or business outcomes; the project was a large or complex program.

## Accessibility Intent

The section is static content with one progressive enhancement: use a semantic `section` with a heading, paragraphs, visible metadata, and a native `<details><summary>` for contribution notes. The summary and result remain visible without opening the disclosure. Keep the existing page landmarks, skip link, keyboard order, `:focus-visible`, contrast, and reduced-motion contracts unchanged. The visible project label and title must remain meaningful when read without the adjacent metadata.

## Handoff Contract

- **Tokens:** preserve the existing dark surface `#0D0F12`, primary text `#F5F7FA`, body text `#D5DAE2` / `#A7B0BF`, divider `#28303B`, cobalt accent `#78A7FF`, Geist headings, Inter body, and Geist Mono metadata.
- **Structure:** one semantic `section#experience` with main `h2` `02 / Experience`; within it, an employment block labeled `Career record / 2011—now` and its unchanged timeline/disclosure contract, followed by a distinct nested project block. The project uses a 300px project-story label/metadata column and flexible narrative column separated by 96px on desktop; mobile is a single column at 346px content width with 34px top / 0px bottom internal padding. No timeline rail, role numbering, company card, or disclosure count/status is reused.
- **Boundary and spacing contract:** the final visible employment row owns no bottom border. The project subsection follows the timeline boundary with 28px desktop / 22px mobile separation, owns one top border, and uses 28px desktop / 34px mobile internal top padding with no bottom padding. Technical Focus follows the project with 56px desktop / 34px mobile separation, owns one top border, and uses 12px top / 12px bottom desktop padding and 8px top / 8px bottom mobile padding. Its first list item has no top border; dividers begin between items and the list keeps its lower boundary. The Experience container owns no additional bottom padding, avoiding an accumulated empty band.
- **Outer timeline disclosure:** remove both top and bottom borders from the desktop and mobile `SHOW REMAINING 4 ROLES / SHOWING 4 OF 8 ROLES / +` control. Keep cobalt action text, muted status, plus indicator, spacing, alignment, practical 44px minimum hit area where applicable, and visible focus treatment. This borderless treatment applies only to the outer timeline control; inner `CONTRIBUTION NOTES` controls retain their established treatment.
- **Interaction:** contribution detail uses native `<details><summary>` semantics, matching the established `CONTRIBUTION NOTES` pattern. The outer timeline control is also a native summary with no top/bottom border: Enter/Space, normal tab order, visible focus, immediate semantic state, and JavaScript-disabled operation are required. The detail is collapsed in the canonical enhanced mockup; no-JavaScript native disclosure remains operable.
- **Responsive:** keep the project subsection after the timeline/disclosure but inside Experience and before `03 / Technical focus` at every breakpoint. Stack all project content on mobile; the contribution detail remains available through the native disclosure in collapsed/enhanced and no-JavaScript modes, while the result remains visible without opening. Navigation remains `About`, `Experience`, `Focus`, `Contact`.
- **Heading contract:** implement `section#experience > h2` for `02 / Experience`; use a non-heading eyebrow for `Career record / 2011—now`; use timeline role headings at the established role heading level; use a nested project block with eyebrow `Selected community project` and a distinct subsection heading `Hacer Pedido` (recommended `h3`). Implement `03 / Technical focus` as the next main `h2`. Contact remains unnumbered.
- **Acceptance criteria:** `02 / Experience` is the sole main heading for career and project content; Hacer Pedido has no main-section number and cannot be read as role 09; roles 01–04 including Paper Kite remain visible before the borderless outer disclosure; the outer disclosure has no top or bottom border but retains clear action/status/plus hierarchy, keyboard operation, visible focus, and practical hit area; summary and bounded result remain visible collapsed; contribution detail is available under native `CONTRIBUTION NOTES`; explicit later-rewrite boundary and small distributed-team contribution are available when opened; a reasonable reader cannot infer enterprise scale, sole ownership, broad adoption, sustained product success, or quantified impact; no grandiose case-study language; no timeline geometry or disclosure status is reused; no clipping in collapsed or expanded states; readable at desktop/mobile; semantic and keyboard-safe without JavaScript; verify intermediate widths and breakpoint transitions for no horizontal overflow and no clipped project copy; footer remains trimmed with no unnecessary trailing space.

### Hacer Pedido disclosure contract

- **Collapsed visible copy:** eyebrow `Selected community project`; heading `Hacer Pedido`; compact volunteer/community and COVID-19 metadata; summary `A small volunteer community project during COVID-19, helping local businesses publish simple menus and take orders remotely.`; result `WHAT WE SHIPPED / A simple ordering path that helped participating local businesses take orders remotely.`
- **Expandable detail:** the native `CONTRIBUTION NOTES` control reveals `I joined the later rewrite, not the original WordPress version. As part of a small distributed volunteer team, I worked across UX and frontend/full-stack delivery. Businesses could manage menu information, and customers could review a cart before handing the order off to a prefilled WhatsApp message.`
- **State:** desktop and mobile canonical frames show the collapsed enhanced state. Opening detail increases the subsection height naturally; no fixed-height implementation or clipping is permitted.
- **Motion and accessibility:** use the same open/close animation and reversal contract as role contribution notes; reduced motion bypasses animation. Semantic state changes are immediate, focus remains visible, and Enter/Space operate the native summary. Without JavaScript, `<details>` remains operable and the visible summary/result do not depend on opening.
- **Responsive:** desktop keeps the 300px metadata column and 96px editorial gap; mobile stacks the subsection. The disclosure control follows the narrative column on desktop and the single content column on mobile.
- **Timeline visibility:** the enhanced collapsed timeline visibly renders roles 01–04, including Paper Kite Ltd as role `04 / 08`; the `SHOW REMAINING 4 ROLES / SHOWING 4 OF 8 ROLES` disclosure follows Paper Kite and is not a replacement for it. Roles 05–08 remain available through the existing disclosure/no-JavaScript contract.
- **Visible-role evidence:** desktop timeline items `cvVIZ`, `ac7DC`, `Hli2t`, and `K1hbG` are enabled and resolved in order; Paper Kite `K1hbG` is the fourth visible card, followed by the borderless disclosure `JVRwp` and then the project subsection. Mobile items `xnPMy`, `c8SgY`, `HQsIC`, and `CN2rz` are enabled and resolved in order; Paper Kite `CN2rz` is fourth, followed by the borderless disclosure `D1xt2W` and then the project subsection. Positions are intentionally content-driven rather than hardcoded evidence offsets.
- **Paper Kite visible-role evidence:** desktop card `K1hbG` includes context `Designs and develops mobile and web products for clients.` and summary `Developed Ruby on Rails APIs for mobile products, external services, and payment integrations.`, followed by collapsed `CONTRIBUTION NOTES +`; mobile card `CN2rz` contains the same copy and pattern in its stacked responsive form. The role remains `04 / 08` with `MAY 2016—MAY 2017` and `ON-SITE / WELLINGTON`.

### Expanded-state implementation evidence

Temporary verification was performed by enabling the existing hidden detail nodes inside the canonical project disclosure containers, allowing the parent sections to use natural fit-content reflow, capturing bounds/screenshots, and restoring both nodes to `enabled: false`. No duplicate root frames or exploration artifacts were retained.

- Desktop expanded project subsection: `224px` high; disclosure detail: `860×69px`; Technical Focus moved from `y=2473` collapsed to `y=2507` expanded (`+34px`); Contact moved from `y=2785` to `y=2819` (`+34px`).
- Mobile expanded project subsection: `506px` high; disclosure detail: `346×147px`; Technical Focus moved from `y=3023` collapsed to `y=3178` expanded (`+155px`); Contact moved from `y=3372` to `y=3527` (`+155px`). The extra displacement includes the opened detail plus the natural parent/neighbor reflow, with no overlay or fixed expanded height.
- Canonical state after cleanup: both detail nodes are disabled, frames are collapsed, and the canonical dimensions remain `VUu2s 1440×3500` and `PKtDg 390×4360`. The permanent mockup does not contain expanded duplicate frames.

## Approval Gate

**Approved status:** Sergio approved this exact Issue #38 scope for implementation in the [human approval comment](https://github.com/smarquez1/smarquez1.github.io/issues/38#issuecomment-5281712527). The approved scope is the small Hacer Pedido subsection inside `02 / Experience`, after visible roles 01–04 and the borderless outer disclosure, before `03 / Technical focus`, with bounded copy and native contribution disclosure. Future scope changes require a new review and approval decision.

## Disclosure Handoff — Inherited Issue #23 Contract

The current baseline inherits the shipped Issue #23 disclosure behavior as a written implementation contract. Superseded Issue #23 evidence frames were removed from `home.pen` during the canonical-source cleanup; the current source contains only the two baseline frames documented above.

- Enhanced presentation: show roles 01–04 initially; the control reads `SHOW REMAINING 4 ROLES` and status reads `SHOWING 4 OF 8 ROLES`.
- Expanded presentation: show roles 01–08; the control reads `SHOW FEWER ROLES` and status reads `SHOWING ALL 8 ROLES`.
- No-JavaScript fallback: render all eight verified roles and preserve native `CONTRIBUTION NOTES` disclosure behavior.
- Interaction: use native disclosure semantics, normal tab order, visible focus, accurate accessible names, and `aria-expanded` / `aria-controls` when an enhanced control is used.
- Motion: animate the outer disclosure and contribution notes with matching duration, easing, and indicator treatment; reverse from the current visual position when toggled mid-transition; remove transitions for reduced motion.
- Implementation boundary: the visual animation never delays or replaces the semantic state change and never hides content from assistive technology.

## Copy Source Notes

- Career dates, roles, responsibilities, and technologies follow `../CV/outputs/linkedin-profile.md` and the separate resume project's career source of truth.
- Company industries and descriptions follow `../CV/company-research.md` and are intentionally brief.
- `Since 2011` is derived from the first verified freelance role and is preferred because it remains accurate without annual editing.
- The Decisiv team size is intentionally omitted at Sergio's request.
- SoftPro context verified from [softpro.com.ar](http://softpro.com.ar/): software development company providing web, mobile, and desktop solutions, with software factory and IT consulting services.
