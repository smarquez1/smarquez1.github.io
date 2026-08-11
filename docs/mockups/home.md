# Home Mockup

## Revision

Impact visibility review, approved for issue #29. The approved Pencil frames are `Issue #29 Review Desktop` and `Issue #29 Review Mobile` in `home.pen`.

## Goal

Establish Sergio's product engineering profile quickly, then give recruiters and engineering managers a clear path to experience, technical focus, and contact.

## Source Tool

Pencil / pen.dev, created through OpenCode.

## Prompt

Create a dark-first, minimalist, technical portfolio home screen for Sergio Marquez, a Senior Product Engineer focused on Ruby on Rails, SaaS, APIs, and full-stack web platforms. Use a restrained near-black, white, neutral, and cobalt palette; strong Geist headings; Inter body copy; Geist Mono metadata; and a factual career-record structure. Provide desktop and mobile compositions. Keep all copy factual, semantic-HTML friendly, accessible, and usable without JavaScript.

## Accepted Decisions

- Use a typographic hero with one primary action and one contact action.
- Make the dark theme the approved visual direction for the initial mockup.
- Use the headline “I build SaaS products around real workflows.” to establish a concise, mobile-friendly product engineering profile.
- Use supporting copy that presents Sergio as a Senior Product Engineer specializing in Ruby on Rails, APIs, and full-stack delivery.
- Use a technical system map to represent the public portfolio sample without inventing a product case study.
- Use a vertical career timeline with dates, company or work context, role, and concise detail.
- Reserve cobalt for links, active timeline state, and the primary action.
- Keep the desktop layout spacious and the mobile layout single-column with full-width actions.
- Include the privacy statement that most production work is private and this site is the public sample.
- Use `Since 2011` instead of an age-sensitive experience counter such as `more than 14 years`.
- Describe Decisiv without specifying the size of Sergio's team.
- Replace the disconnected hero system-map panel with a typographic hero and direct career/contact actions.
- Add a short company context line for selected timeline employers: industry plus what the company or product does.
- Keep Sergio's contribution summaries separate from company descriptions.
- Use `04 / Contact` and a direct invitation to discuss long-term remote product work.
- Preserve the information density of the current career record: dates, work arrangement, role, contribution summary, expandable notes, technologies, and the complete eight-role timeline.
- Preserve the current timeline composition: date and work arrangement column, vertical marker rail, company card, company mark, role, status/count indicator, summary, and contribution disclosure.
- Keep the JavaScript-disabled behavior as an implementation requirement, not visible footer copy.
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
- Defer the bright/light alternative to a separate GitHub issue and review pass.

## Accessibility Notes

- The intended implementation uses semantic landmarks, headings, links, and buttons rather than clickable decorative containers.
- The technical panel is supplementary and must not carry essential information.
- Body copy is kept above 14px in the desktop and mobile directions.
- Cobalt is paired with dark text or white text for clear state contrast in the dark-first palette.
- Focus states, keyboard navigation, reduced motion, and dark-mode contrast remain implementation acceptance criteria.
- Company context is supplementary text and must never be the only way to understand Sergio's role.
- The menu button is a mockup affordance only; implementation must provide a keyboard-operable disclosure with a useful no-JavaScript fallback.

## Responsive Notes

- Desktop uses a two-column hero and horizontal navigation.
- Mobile collapses navigation to a menu affordance, stacks the hero, makes actions full width, and keeps the technical panel below the actions.
- Timeline rows keep the marker visible while moving date and role information into a compact vertical group.
- Desktop keeps the timeline's date column, marker rail, and large cards; mobile stacks date metadata above each card while retaining the same card hierarchy.
- Technical focus changes from a two-column section to a single-column list.
- The mobile hero is single-column, with full-width actions and no decorative panel competing with the positioning statement.
- At intermediate widths, timeline metadata remains stacked above each card until the desktop date-column layout has enough room at the `sm` breakpoint.

## Implementation Risks

- The system map should remain lightweight HTML/CSS, not a shipped mockup image.
- Dark mode needs a deliberate visual pass rather than simple color inversion.
- The mobile menu must remain usable with JavaScript disabled or provide a semantic fallback.
- Copy length may require a second content pass after implementation to preserve readable line lengths at intermediate widths.
- The current implementation retains the full mobile navigation link list instead of the approved compact menu treatment; resolve this in a separate navigation work unit rather than changing issue #29 scope silently.

## Copy Source Notes

- Career dates, roles, responsibilities, and technologies follow `../CV/outputs/linkedin-profile.md` and the separate resume project's career source of truth.
- Company industries and descriptions follow `../CV/company-research.md` and are intentionally brief.
- `Since 2011` is derived from the first verified freelance role and is preferred because it remains accurate without annual editing.
- The Decisiv team size is intentionally omitted at Sergio's request.
- SoftPro context verified from [softpro.com.ar](http://softpro.com.ar/): software development company providing web, mobile, and desktop solutions, with software factory and IT consulting services.
