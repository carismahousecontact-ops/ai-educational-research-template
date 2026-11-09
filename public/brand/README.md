# LOGOS brand assets

This directory documents the approved brand-mark source and the status of derivative files.

## Canonical source

- `/public/logos-mark.svg` — existing vector brand mark in the repository. It is the canonical in-project source and should be used instead of redrawing or approximating the symbol.
- The supplied reference images and generated PDF are visual reference material; they are not substitutes for the canonical SVG.

## Required derivatives

| Asset | Status | Notes |
|---|---|---|
| Primary symbol (SVG) | Present | Use `/public/logos-mark.svg`. |
| Transparent PNG | Prepared separately | Raster extraction from a checkerboard JPEG preview; antialiased edges may contain extraction artifacts. Do not treat as a master. |
| Horizontal lockup | Reference supplied | Use only after verifying typography and spacing against the approved master. |
| Stacked lockup | Reference supplied | Use only after verifying typography and spacing against the approved master. |
| Light/dark monochrome variants | Reference supplied | Embossed mockups are presentation treatments, not production-ready monochrome artwork. |
| Favicon / app icon | Not yet validated | Generate from the canonical SVG and test at target sizes. |
| Print PDF | Reference PDF prepared separately | Archive/reference copy, not a vector source unless exported from the canonical SVG. |

## Usage rules

1. Preserve the symbol geometry, proportions, and gold/cyan palette.
2. Do not use checkerboard pixels as transparency; actual transparency must be represented by an alpha channel or SVG transparency.
3. Do not use embossed, glowing, textured, or framed mockups as production logo masters.
4. Keep the symbol-only mark separate from the LOGOS wordmark and the descriptor “INTELLIGENCE GATEWAY”.
5. Before adding derivatives, verify transparency, dimensions, color values, and visual fidelity against `/public/logos-mark.svg`.

This file is an asset inventory, not a declaration that every listed derivative has been added to the repository.
