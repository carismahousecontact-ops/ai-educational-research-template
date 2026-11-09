# LOGOS Typographic Charter / الدليل الطباعي

Status: **Prototype for review** — not yet the final approved specification.

## Typeface families
- Arabic: **IBM Plex Sans Arabic** — primary UI, headings, long-form reading.
- Latin: **Inter** — primary UI, headings, labels and Latin content.
- Technical: **JetBrains Mono** — code, identifiers and technical values only.

## Responsive type scale
| Role | Desktop | Mobile | Weight |
|---|---:|---:|---|
| Hero H1 | 58–66 px | 36–40 px | 700 |
| Section H2 | 32–36 px | 27–30 px | 600–700 |
| Card H3 | 22–24 px | 20–22 px | 600 |
| Body | 16–18 px | 15.5–16 px | 400 |
| Supporting | 14–15 px | 14 px | 400–500 |
| Caption | 12–13 px | 12–13 px | 400 |

## Leading and rhythm
- Arabic body: 1.9; Arabic headings: 1.2–1.3.
- Latin body: 1.65–1.75; Latin headings: 1.1–1.2.
- Avoid letter-spacing on Arabic text; use restrained negative tracking for Latin display headings only.
- Long-form reading width: approximately 58ch Arabic and 72ch Latin.

## Semantic text colors
- Primary: `#F5EEE6` (Warm Ivory)
- Secondary: `#D5C1AA` (Sand)
- Muted: `#B9C5D2` (cool muted text; verify per surface)
- Links: `#55BCE0` (accessible cyan direction)
- Accent: `#D9B982` (gold; decorative emphasis, not small body copy)

## Implementation notes
- Language-specific families are selected from the document `lang` attribute.
- Preserve the existing ParticleBackground and all motion behavior.
- Load only the required font families and weights.
- Validate real rendered pages at desktop, tablet and mobile widths before finalizing.
- This prototype does not claim a complete visual QA pass; font loading and responsive rendering must still be checked in a browser.
