# LOGOS — Visual Identity & Color Standards
## دليل الهوية البصرية ومعايير الألوان

**Brand:** LOGOS  
**Descriptor:** Intelligence Gateway  
**Platform:** غرفة عمليات الحكمة التربوية  
**Status:** Color direction proposed from the approved visual reference; final production values require comparison with the original master artwork.

---

## 1. Brand architecture

- **LOGOS** is the primary institutional identity.
- **Intelligence Gateway** is the descriptive tagline.
- **غرفة عمليات الحكمة التربوية** is the specialist platform operating under the LOGOS identity.

Keep these levels distinct. Do not replace the LOGOS wordmark with the platform name, or treat the descriptor as part of the symbol artwork unless an approved lockup explicitly includes it.

## 2. Color system

The following HEX values are the working digital palette sampled/derived visually from the supplied stationery mockup. They are a proposed standard, not verified color measurements from the original logo source. The canonical artwork at `/public/logos-mark.svg` remains authoritative for the mark itself.

| Token | Color name | HEX | Primary role |
|---|---|---:|---|
| `logos-navy` | Institutional Navy | `#142D4B` | Primary dark surfaces, navigation, footer |
| `logos-gold` | Muted Gold | `#B58A4C` | Premium accent, fine rules, emphasis |
| `logos-cyan` | Signal Cyan | `#27A6D2` | Interactive accents, links, active states |
| `logos-ivory` | Warm Ivory | `#F5EEE6` | Light surfaces and document backgrounds |
| `logos-sand` | Sand | `#D5C1AA` | Secondary surfaces and supporting materials |
| `logos-stone` | Stone Neutral | `#C3B29F` | Borders, muted neutral details |

### Color hierarchy

1. Navy is the dominant institutional anchor.
2. Gold is the signature accent and should be used with restraint.
3. Cyan signals intelligence, connectivity, links, and interaction.
4. Ivory provides a warm, readable light surface.
5. Sand and Stone are supporting neutrals, not competing brand colors.

Suggested interface balance: Navy 55–65%, Ivory/neutral surfaces 25–35%, combined Gold/Cyan accents 5–10%. This is a design guide, not a strict pixel quota.

## 3. Recommended usage

| Context | Recommendation |
|---|---|
| Main dark website background | Institutional Navy |
| Main light content surface | Warm Ivory |
| Primary headings on navy | Warm Ivory or white |
| Interactive links and focus states | Signal Cyan |
| Fine separators and restrained highlights | Muted Gold |
| Secondary cards and stationery | Sand / Stone |
| Logo on dark backgrounds | Use the approved light/reversed artwork only |
| Logo on light backgrounds | Use the canonical mark with verified contrast |

Do not use gold or cyan for long paragraphs. Maintain strong text/background contrast and visible keyboard focus. Never rely on color alone to communicate status.

## 4. Logo integrity

- Use `/public/logos-mark.svg` as the canonical in-repository symbol source.
- Do not redraw, distort, rotate, stretch, crop, or add effects to the master mark.
- Preserve its original geometry and internal spacing.
- Do not extract a production master from a JPEG mockup or checkerboard preview.
- A checkerboard visible in an image is not transparency. Transparent raster artwork must contain a genuine alpha channel.
- Embossed, foil, debossed, textured, photographed, or 3D mockups are presentation applications, not logo masters.
- Do not combine the symbol, LOGOS wordmark, descriptor, and platform name into new lockups without checking the approved source artwork.

## 5. Typography and layout

No typeface has yet been verified as part of the canonical logo artwork. Therefore:
- Do not substitute or recreate the LOGOS wordmark using a guessed font.
- For interface text, use the project's existing typography stack unless a separate type system is formally approved.
- Use clear hierarchy, generous whitespace, restrained letter spacing, and consistent alignment.
- Arabic and Latin content must each retain correct shaping, direction, and legibility.

## 6. Accessibility and contrast

- Check text contrast for every actual foreground/background pairing before release.
- Use cyan and gold primarily for accents, not small body text on navy or ivory without a contrast check.
- Provide visible focus indicators and non-color cues for interactive states.
- Test the palette in light and dark contexts, at mobile widths, and in grayscale print previews.

## 7. Print and export

- Prefer vector SVG/PDF artwork for print.
- Do not claim that HEX values are print-ready CMYK equivalents. Obtain printer-specific CMYK or spot-color conversions from the verified master and print profile.
- Export PNG only from the canonical vector source, at the required dimensions, with genuine transparency where needed.
- Keep a dated reference PDF for archiving; it does not replace editable vector artwork.

## 8. Governance and approval status

**Approved as a visual direction:** Navy / Muted Gold / Signal Cyan / Warm Ivory / Sand / Stone.

**Pending technical validation:** exact sampled values against the original logo source, print color conversions, typeface standards, minimum reproduction size, clear-space measurement, and final alternate logo variants.

Until those checks are complete, treat the HEX values as working digital design tokens and do not describe them as laboratory-measured or print-certified brand specifications.

## 9. Source of truth

- Canonical mark: `/public/logos-mark.svg`
- Digital tokens: `/public/brand/tokens.css`
- Asset inventory and status: `/public/brand/README.md`

Any future brand derivative must be checked against the canonical mark and this guide before being labelled production-ready.
