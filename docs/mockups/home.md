# Home Mockup

## Goal

Establish Sergio's product engineering profile quickly, then give recruiters and engineering managers a clear path to experience, technical focus, and contact.

## Source Tool

Pencil / pen.dev, created through OpenCode.

## Prompt

Create a dark-first, minimalist, technical portfolio home screen for Sergio Marquez, a Senior Product Engineer focused on Ruby on Rails, SaaS, APIs, and full-stack web platforms. Use a restrained near-black, white, neutral, and cobalt palette; strong Geist headings; Inter body copy; Geist Mono metadata; a timeline-led experience section; and a small technical system map as content. Provide desktop and mobile compositions. Keep all copy factual, semantic-HTML friendly, accessible, and usable without JavaScript.

## Accepted Decisions

- Use a typographic hero with one primary action and one contact action.
- Make the dark theme the approved visual direction for the initial mockup.
- Use the headline “I turn hard product problems into software that ships.” to communicate energy, judgment, and execution.
- Use supporting copy that names the Rails, SaaS, API, and full-stack focus and the path from product discovery to production ownership.
- Use a technical system map to represent the public portfolio sample without inventing a product case study.
- Use a vertical career timeline with dates, company or work context, role, and concise detail.
- Reserve cobalt for links, active timeline state, and the primary action.
- Keep the desktop layout spacious and the mobile layout single-column with full-width actions.
- Include the privacy statement that most production work is private and this site is the public sample.

## Rejected Decisions

- No photography or invented project screenshots.
- No live AI interaction in the hero or core navigation.
- No dense technology keyword wall.
- No hover-only information or decorative motion required to understand the page.
- Defer the bright/light alternative to a separate GitHub issue and review pass.

## Accessibility Notes

- The intended implementation uses semantic landmarks, headings, links, and buttons rather than clickable decorative containers.
- The technical panel is supplementary and must not carry essential information.
- Body copy is kept above 14px in the desktop and mobile directions.
- Cobalt is paired with dark text or white text for clear state contrast in the dark-first palette.
- Focus states, keyboard navigation, reduced motion, and dark-mode contrast remain implementation acceptance criteria.

## Responsive Notes

- Desktop uses a two-column hero and horizontal navigation.
- Mobile collapses navigation to a menu affordance, stacks the hero, makes actions full width, and keeps the technical panel below the actions.
- Timeline rows keep the marker visible while moving date and role information into a compact vertical group.
- Technical focus changes from a two-column section to a single-column list.

## Implementation Risks

- The system map should remain lightweight HTML/CSS, not a shipped mockup image.
- Dark mode needs a deliberate visual pass rather than simple color inversion.
- The mobile menu must remain usable with JavaScript disabled or provide a semantic fallback.
