# Social Preview

The homepage uses a branded `1200x630` PNG for Open Graph and Twitter/X link previews.

## Source

- Source: `docs/seo/social-preview.svg`
- Deployed asset: `public/assets/social-preview-v2.png`
- Format: PNG, generated from the SVG with `rsvg-convert`
- Design: dark-first typographic composition with Sergio's name, role, positioning statement, and public technical focus

The image contains no private repository names, customer information, or unsupported career claims. It is intentionally separate from the homepage mockup exports so small preview sizes remain readable.

## Accepted Decisions

- Align the social card with the homepage positioning: “Product engineering for SaaS platforms, APIs, and complex workflows.”
- Remove the obsolete `/ 01` suffix from Sergio's name.
- Preserve the established near-black, cobalt, white, and muted-neutral visual system.
- Keep the card typographic and readable at small sharing-preview sizes.
- Version the PNG filename so sharing platforms fetch the revised image instead of a cached predecessor.

## Rejected Decisions

- Do not use a full-page screenshot because timeline and body text become unreadable at preview size.
- Do not add photography, customer logos, private product imagery, or unverifiable outcomes.

## Metadata

The canonical URL and absolute image URL are defined in `index.html` for the production user-site URL:

`https://smarquez1.github.io/`

Validate the generated tags and image URL after deployment using the public URL and a social preview debugger before changing the asset.
