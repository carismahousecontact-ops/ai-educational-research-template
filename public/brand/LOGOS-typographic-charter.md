# LOGOS Typographic Charter / الدليل الطباعي

Status: **Editorial typography revision — review build**.

## Direction
Adopt the editorial reading character of the supplied UNESCO Courier Arabic article: clear Arabic forms, confident hierarchy, comfortable long-form reading, and generous line spacing. This is a typographic reference only; it does not copy UNESCO's identity or assert that the article uses the exact font selected below.

## Typeface families
- Arabic: **Noto Sans Arabic** — primary interface, headings and long-form reading.
- Latin: **Inter** — primary interface, headings, labels and Latin content.
- Technical: **JetBrains Mono** — code, identifiers and technical values only.

## Weight policy
- Minimum supported text weight: **400 (Regular)**.
- Use 500 for supporting text and labels, 600 for section headings, 700 for primary headings, and 800 only for strong display emphasis.
- Thin (100), ExtraLight (200), and Light (300) are excluded. Legacy light-weight utility classes are normalized to 400.
- Do not use low-contrast, thin text on the dark institutional surfaces.

## Responsive type scale
| Role | Desktop | Mobile | Weight |
|---|---:|---:|---|
| Hero H1 | 64–70 px | 40–42 px | 700–800 |
| Section H2 | 36–40 px | 30–32 px | 700 |
| Card H3 | 24–28 px | 22–24 px | 600–700 |
| Body | 18 px | 17–17.5 px | 400–500 |
| Supporting | 16 px | 16 px | 500 |
| Caption | 14 px | 14 px | 500 |

## Leading and rhythm
- Arabic body: 1.95–2.0; Arabic headings: 1.3–1.4.
- Latin body: 1.7–1.75; Latin headings: 1.1–1.2.
- No letter-spacing on Arabic text; restrained negative tracking for Latin display headings only.
- Long-form reading width: approximately 58ch Arabic and 68ch Latin.

## Semantic text colors
- Primary: `#F5EEE6` (Warm Ivory)
- Secondary: `#D5C1AA` (Sand)
- Muted: `#B9C5D2` (cool muted text; verify per surface)
- Links: `#55BCE0` (accessible cyan direction)
- Accent: `#D9B982` (gold; decorative emphasis, not small body copy)

## Implementation notes
- Language-specific families are selected from the document `lang` attribute.
- Preserve the existing ParticleBackground and all motion behavior.
- Load only the required font families and weights (400–800).
- Responsive Tailwind type tokens have been increased globally; body and reading text are larger on desktop and mobile.
- Validate real rendered pages at desktop, tablet and mobile widths before final approval.
- This revision does not claim a complete visual QA pass; font loading, line wrapping and responsive rendering still require browser review.
