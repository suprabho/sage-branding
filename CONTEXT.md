# Sage Brand Showcase — Project Context

## What is Sage?

Sage is an AI-powered parenting companion app. It provides personalized advice, helping parents navigate tantrums, milestones, routines, and the millions of decisions in between. The tagline: **"A smarter way to parent."**

---

## Repository

A **Next.js brand showcase site** that presents multiple design directions side-by-side using a theme switcher. Each theme applies a distinct color palette, typography pairing, and visual tone across shared UI components (app mockup, email mockup, rationale).

### Themes

| Theme | Personality | Display Font | Body Font | Primary Color |
|---|---|---|---|---|
| **Morning Light** | Warm, grounded, organic | Fraunces | Plus Jakarta Sans | Sage Moss (#4A7C59) |
| **Soft Blueprint** | Bold, engineered, technical | Space Mono | Inter Tight | Electric Blue (#2563EB) |
| **Dusk & Bloom** | Deep, premium, intimate | Archivo (expanded) | Lexend Deca | Lilac (#A889CC) |
| **Grounded** | Confident, editorial, direct | Lora | Plus Jakarta Sans | Forest (#004f3b) |

---

## Art Direction Brief

### Core Principles

- **Color:** Deep, earthy tones (forest greens, terracotta, deep slate) — not pastels. Avoid baby blues or blush pinks that read as "generic parenting app."
- **Typography:** Confident, slightly humanist serif for headlines paired with a clean, readable sans for body. Editorial with a POV — not clinical, not cute.
- **Imagery:** Real, unposed photography of parents in quiet, in-between moments. If illustration is used, bold reduced forms (linocut/geometric), not soft watercolor or rounded characters.
- **Layout:** Generous margins, white backgrounds, asymmetry, deliberate visual hierarchy. Each screen = one clear thought.
- **Iconography:** Clean, slightly weighted line icons. Buttons and interactive elements should feel intentional and solid.
- **Tone:** "Trusted friend who also has their facts straight." Confident, warm, direct, no-nonsense.

### Reference Brands

- **[Nanit](https://www.nanit.com/)** — confidence, authority, approachability
- **[Coterie](https://www.coterie.com/)** — premium, safety, clean design

### Applicant Reference

An applicant's brand exercise was shared as reference (3 screenshots). It used a soft blue palette with a friendly mascot character and the tagline "Parent with confidence, every day." Assessment: solid first pass that evoked emotion, but read too "mental health / emotional support" — the final brand should feel more authoritative and grounded.

---

## Expanded Scope

The brand exploration goes beyond the app and email mockups to include:

1. **Logo Concepts & Animation** — wordmark, icon mark, and motion behavior
2. **Social Media Posts** — Instagram grid/story, Twitter/X header, Facebook cover
3. **Web Landing Page** — hero, trust bar, features, testimonials
4. **Patterns** — background textures and decorative treatments per theme
5. **Icons** — style direction and custom icon suggestions
6. **Imagery** — photography direction, shot lists, illustration guidance, image treatments

Detailed prompts for generating these assets per theme live in the `/prompts/` directory:

- [`prompts/morning-light.md`](prompts/morning-light.md)
- [`prompts/soft-blueprint.md`](prompts/soft-blueprint.md)
- [`prompts/dusk-bloom.md`](prompts/dusk-bloom.md)
- [`prompts/grounded.md`](prompts/grounded.md)

---

## Layout Direction

The page layout was redesigned from a plain utility style to an **editorial / magazine feel**:

- Large typographic hero header with brand name and theme metadata
- Oversized section numbers (01, 02, 03) as visual anchors
- Numbered sidebar navigation with minimal typography
- Generous spacing between sections (32px gaps → 128px gaps)
- Dark-aware treatment for the Dusk & Bloom theme
- Minimal footer
- Theme switcher as understated tab-style controls with color dot + underline accent

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + CSS custom properties (design tokens per theme)
- **Fonts:** Google Fonts (Fraunces, Lora, Plus Jakarta Sans, Space Mono, Inter Tight, Archivo, Lexend Deca)
- **State:** React Context for theme switching
- **Deployment:** Static export compatible
