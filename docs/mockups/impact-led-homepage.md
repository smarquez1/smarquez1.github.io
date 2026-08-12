# Impact-Led Homepage Experiment

## Status

WIP for issue #32. This branch-only experiment does not replace the approved homepage direction on
`main`.

## Review Frames

| State                     | Desktop                                    | Mobile                                    |
| ------------------------- | ------------------------------------------ | ----------------------------------------- |
| Full career record closed | `Impact-led Experiment Desktop` (`I49rM`)  | `Impact-led Experiment Mobile` (`xmVuB`)  |
| Full career record open   | `Impact-led Career Open Desktop` (`TeGjv`) | `Impact-led Career Open Mobile` (`P431L`) |

All frames are in `home.pen`.

## Goal

Compare the complete career-record homepage with a shorter initial narrative that presents verified
product impact before the full eight-role timeline.

## Proposed Decisions

- Use the headline “I build and modernize SaaS products around complex workflows.”
- Keep `Senior Product Engineer / Ruby on Rails` as the hero label.
- Use `Discuss a role` as the primary action linking to `#contact`.
- Use `See selected impact` as the secondary action linking to `#selected-impact`.
- Present two selected-impact stories before the complete timeline.
- Describe KaiPod through verified problem, work, and delivery evidence without implying a measured
  business outcome.
- Describe Decisiv through verified problem, work, and measured outcome evidence.
- Keep the complete eight-role timeline inside native `details` and `summary` markup.
- Preserve every role's dates, arrangement, company context, contribution summary, expandable notes,
  and technologies.
- Keep Technical Focus, Contact, the dark visual language, and the concise About approved in issue
  #29.

## Rejected Decisions

- Do not invent adoption, revenue, reliability, customer, or business metrics.
- Do not remove older roles from the document.
- Do not require JavaScript to access career content or contact destinations.
- Do not describe delivered KaiPod capabilities as measured outcomes.
- Do not merge the experiment into `main` without a side-by-side review and separate human decision.

## Interaction And Semantics

- `Discuss a role` is an anchor link to Contact.
- `See selected impact` is an anchor link to the selected-impact heading.
- Selected-impact stories use semantic articles with headings and descriptive lists.
- The complete career record uses native `details` and `summary` containing the existing ordered
  timeline.
- The disclosure is closed in the initial experiment and exposes its expanded state to assistive
  technology through native semantics.
- Core content, anchors, and disclosure behavior remain available without JavaScript.
- Mobile navigation retains a semantic no-JavaScript fallback when issue #30 is implemented.

## Accessibility

- Primary CTA uses near-black text on cobalt; secondary CTA uses paper text and border on the dark
  background.
- Recurring metadata remains at least 12px.
- Focus states remain visible for anchors and disclosure controls.
- No information depends on hover, color, animation, or a collapsed visual state alone.
- Existing reduced-motion behavior remains unchanged.

## Responsive Behavior

- Mobile stacks the hero actions and selected-impact stories in document order.
- Selected-impact stories switch to the desktop card grid only when both stories retain readable line
  lengths; intermediate widths keep the stacked composition.
- The expanded career timeline reuses the issue #29 mobile, intermediate, and desktop transformations.
- The closed experiment reduces initial scanning length, not the total amount of career content.

## Content Evidence

- Career claims follow `../CV/outputs/linkedin-profile.md` through the repository's documented
  external CV source-of-truth relationship.
- KaiPod evidence is limited to direct founder and teacher collaboration, role-based web and Hotwire
  Native workflows, and verified Stripe recurring and per-student billing work.
- Decisiv evidence is limited to the verified 20% to 80% affected page-load improvement,
  approximately 40-to-8-minute CI reduction, and modernization of more than 500,000 lines.

## Implementation Risks

- Hiding the complete timeline improves initial scanning but must not make career history difficult to
  discover.
- The selected-impact cards must not duplicate every contribution detail from the full record.
- The changed hero requires review of metadata, alt text, the social preview image, and
  `../seo/social-preview.md` before completion.
- Browser comparison must cover desktop, intermediate, mobile, keyboard, JavaScript-disabled, and
  expanded disclosure states.
