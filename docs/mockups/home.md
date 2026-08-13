# Home Mockup

## Revision

Approved portfolio baseline for issue #36. The canonical Pencil source is `home.pen`; it contains only `Current Portfolio Baseline Desktop` and `Current Portfolio Baseline Mobile`. Sergio approved these frames and this handoff for implementation in the issue's human-approval comment.

## Goal

Establish Sergio's product engineering profile quickly, then give recruiters and engineering managers a clear path to experience, technical focus, and contact.

## Source Tool

Pencil / pen.dev, created through OpenCode.

## Prompt

Create a dark-first, minimalist, technical personal website home screen for Sergio Marquez, a Senior Product Engineer focused on Ruby on Rails, SaaS, APIs, and full-stack web platforms. Use a restrained near-black, white, neutral, and cobalt palette; strong Geist headings; Inter body copy; Geist Mono metadata; and a factual career-record structure. Provide desktop and mobile compositions. Keep all copy factual, semantic-HTML friendly, accessible, and usable without JavaScript.

## Accepted Decisions

- Keep one canonical desktop frame and one canonical mobile frame; remove superseded issue experiments and duplicate evidence frames from the source.
- Use small recognizable glyphs beside LinkedIn, GitHub, Email, and Resume / PDF labels; keep the visible text labels so icons remain supplementary.
- Trim the footer's trailing black space so the page ends shortly after the footer content rather than with a large empty block.
- Start the hero with the final approved greeting `Hi, I’m Sergio 👋`, followed by a clear product-engineering statement.
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
- The mobile hero is single-column, with full-width actions and no decorative panel competing with the positioning statement.
- At intermediate widths, timeline metadata remains stacked above each card until the desktop date-column layout has enough room at the `sm` breakpoint.

## Implementation Risks

- Dark mode needs a deliberate visual pass rather than simple color inversion.
- The mobile menu must remain usable with JavaScript disabled or provide a semantic fallback.
- Copy length may require a second content pass after implementation to preserve readable line lengths at intermediate widths.
- Native disclosure transitions vary across browsers; semantics, immediate assistive-technology state, keyboard operation, and the reduced-motion final state take priority over visual interpolation.
- Preview hiding must be applied only after enhancement is available; otherwise the no-JavaScript fallback must retain all eight roles.

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
