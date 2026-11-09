# LOGOS brand assets

This directory documents the canonical brand-mark source, the working digital color system, and the status of derivative files.

## Identity architecture

- **LOGOS** — primary institutional identity.
- **Intelligence Gateway** — descriptor.
- **غرفة عمليات الحكمة التربوية** — specialist platform under the LOGOS identity.

## Canonical source

- `/public/logos-mark.svg` — existing vector brand mark in the repository. It is the canonical in-project source and must be used instead of redrawing or approximating the symbol.

## Brand standards

- [LOGOS Visual Identity & Color Standards](./LOGOS-visual-identity-guide.md) — identity hierarchy, color roles, logo integrity, accessibility, print guidance, and approval status.
- [tokens.css](./tokens.css) — reusable CSS custom properties for the working digital palette.

### Working digital palette

| Token | HEX | Role |
|---|---:|---|
| Institutional Navy | `#142D4B` | Primary institutional color |
| Muted Gold | `#B58A4C` | Restrained signature accent |
| Signal Cyan | `#27A6D2` | Interactive and connectivity accent |
| Warm Ivory | `#F5EEE6` | Light backgrounds |
| Sand | `#D5C1AA` | Supporting surfaces |
| Stone | `#C3B29F` | Neutral details |

**Color status:** These values are a proposed working digital standard visually derived from the supplied mockup. They have not yet been verified as exact measurements from the canonical SVG or certified print colors. See the guide before production use.

## Derivative asset inventory

| Asset | Status | Notes |
|---|---|---|
| Primary symbol (SVG) | Present | Use `/public/logos-mark.svg`. |
| Transparent PNG | Prepared separately | Raster extraction from a checkerboard JPEG preview; antialiased edges may contain extraction artifacts. Do not treat as a master. |
| Horizontal lockup | Reference supplied | Verify typography and spacing against approved master artwork. |
| Stacked lockup | Reference supplied | Verify typography and spacing against approved master artwork. |
| Light/dark monochrome variants | Reference supplied | Embossed mockups are presentation treatments, not production-ready monochrome artwork. |
| Favicon / app icon | Not yet validated | Generate from the canonical SVG and test at target sizes. |
| Print PDF | Reference PDF prepared separately | Archive/reference copy, not a vector source unless exported from the canonical SVG. |

## Usage rules

1. Preserve the symbol geometry, proportions, and original artwork.
2. Do not use checkerboard pixels as transparency; actual transparency must be represented by an alpha channel or SVG transparency.
3. Do not use embossed, glowing, textured, or framed mockups as production logo masters.
4. Keep the symbol-only mark separate from the LOGOS wordmark and the descriptor “INTELLIGENCE GATEWAY”.
5. Verify transparency, dimensions, contrast, and visual fidelity before adding derivatives.
6. Use the guide and tokens as the current working color reference; do not treat the HEX values as print-certified specifications.

This inventory does not declare that every listed derivative has been added to the repository.
