# Sage — Design System Explorations
### Four Brand Direction Variations

---

## ✦ VARIATION 1 — "Morning Light"
*Warm, grounded, and quietly confident. Like a deep breath before the day begins.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Sage Moss | `#4A7C59` | CTAs, active states, logo mark |
| **Primary Light** | Fern | `#6FA884` | Hover states, gradient fills |
| **Secondary** | Warm Clay | `#C97B4B` | Highlights, inline accents, charts |
| **Accent** | Golden Hour | `#F2C46D` | Badges, alerts, delight moments |
| **Neutral Light** | Parchment | `#F7F3EE` | Page background, card fills |
| **Neutral Mid** | Linen | `#E8E0D5` | Dividers, borders, secondary bg |
| **Neutral Dark** | Slate Earth | `#2E3830` | Body text, headings |
| **Surface** | Warm White | `#FDFAF7` | Chat bubbles (user), modals |
| **Sage Bubble** | Sage Tint | `#EEF5F1` | AI response bubble background |

**Color Philosophy:**  
Green anchors trust and nature — evoking growth, calm, and competence. Clay and gold introduce warmth and emotional vitality. No harsh blacks; text sits on slightly warm, softened darks. The palette avoids clinical whites in favour of lived-in, natural tones.

---

### 2. Typography

**Font Pair:**
- **Display / Headings:** `Fraunces` — A variable optical serif with warmth and personality. Slightly literary; evokes care and craft without feeling precious.
- **Body / UI:** `Plus Jakarta Sans` — Rounded, modern grotesque with subtle friendliness. Highly legible at small sizes.

**Type Scale:**

| Label | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display XL | 40px / 2.5rem | 700 | 1.15 | Email hero headline |
| Heading 1 | 32px / 2rem | 600 | 1.2 | Section headers |
| Heading 2 | 24px / 1.5rem | 600 | 1.25 | Card titles, modals |
| Heading 3 | 20px / 1.25rem | 500 | 1.3 | Subheadings |
| Body L | 18px / 1.125rem | 400 | 1.6 | Email body, long-form |
| Body M | 16px / 1rem | 400 | 1.55 | Chat messages, default UI |
| Body S | 14px / 0.875rem | 400 | 1.5 | Labels, secondary text |
| Caption | 12px / 0.75rem | 500 | 1.4 | Timestamps, metadata |

**Typographic Voice:**  
Fraunces carries emotional weight in moments of reassurance (headings, chat response openers). Jakarta Sans keeps the operational UI clean and fast to scan. Never uppercase for body text — it feels cold.

---

### 3. Iconography

**Style:** Rounded, filled with a slight offset or duotone treatment.  
**Library Base:** Phosphor Icons (regular weight, with `fill` variants for active states)  
**Key Icons:**

| Context | Icon | Style Note |
|---------|------|------------|
| AI / Sage identity | `Leaf` or `Sparkle` | Filled, Sage Moss color |
| Profile | `UserCircle` | Stroke, medium weight |
| Save / Library | `BookmarkSimple` | Fill on saved state |
| Print | `Printer` | Stroke |
| Chat input | `PaperPlaneTilt` | Filled, send action |
| Attach | `Paperclip` | Stroke |
| Resource card | `FileText` | Duotone: green + clay |
| Success / Check | `CheckCircle` | Filled, Sage Moss |
| Warning | `WarningCircle` | Filled, Golden Hour |

**Sizing:** 16px (inline), 20px (default), 24px (feature), 32px (hero/empty states)  
**Treatment:** Icons never appear in isolation — always accompanied by a label or clear context.

---

### 4. Patterns & Visual Elements

**Corner Radius:**
- Cards: `16px`
- Chat bubbles: `18px` (with `4px` on the sending corner)
- Buttons: `12px`
- Inputs: `12px`
- Chips/Tags: `99px` (fully rounded)

**Shadows:**
- Card resting: `0 2px 12px rgba(46, 56, 48, 0.08)`
- Card hover: `0 6px 24px rgba(46, 56, 48, 0.14)`
- Chat modal: `0 12px 40px rgba(46, 56, 48, 0.12)`

**Surface Patterns:**
- **Subtle leaf/botanical micro-pattern** at 4% opacity on section backgrounds — used sparingly on email hero and onboarding screens
- **Gradient mesh blobs** in Fern + Parchment as decorative layer behind hero content
- **Dot grid** at 6% opacity on neutral sections (Linen base)

**Motion Principles:**
- Ease: `cubic-bezier(0.34, 1.2, 0.64, 1)` — slightly springy, not bouncy
- Chat bubble entrance: fade + slide-up `200ms`
- Resource card reveal: scale from `0.96` + fade, `280ms`
- Typing indicator: three dots with staggered pulse

**Component Language:**
- Resource cards use shadow-only depth — no border accents, clean and organic
- Inline charts use rounded bar fills in the primary palette
- Email CTA button: full-width on mobile, uses a subtle grain overlay texture on the green background

---
---

## ✦ VARIATION 2 — "Soft Blueprint"
*Bold, engineered, and unapologetically technical. Like a mission control for parenting — we built this.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Electric Blue | `#2563EB` | CTAs, active nav, AI elements |
| **Primary Light** | Sky Blue | `#60A5FA` | Hover, gradient, tints |
| **Secondary** | Coral | `#FF6B6B` | Warm accents, emotional moments |
| **Accent** | Lemon | `#FFD93D` | Badges, highlights, "new" states |
| **Neutral Light** | Ice White | `#F0F4FF` | Page background |
| **Neutral Mid** | Cool Slate | `#CBD5E8` | Dividers, input borders |
| **Neutral Dark** | Midnight | `#0F172A` | Body text, headings |
| **Surface** | Pure White | `#FFFFFF` | Cards, modals, chat bubbles |
| **Sage Bubble** | Blue Wash | `#E8EEFF` | AI response bubble background |

**Color Philosophy:**
Electric Blue is high-conviction trust — deeper and bolder than periwinkle, it says "we engineered this." Coral injects warmth and emotional vitality without softening the authority. Lemon creates urgency and delight at key decision points. The palette reads "technical precision meets human care."

---

### 2. Typography

**Font Pair:**
- **Display / Headings:** `Space Mono` — Monospaced, technical authority. Unexpected for a parenting app — signals "we engineered this."
- **Body / UI:** `Inter Tight` — Condensed, purposeful, structured. High readability at density.

**Type Scale:**

| Label | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display XL | 44px / 2.75rem | 700 | 1.1 | Email hero, onboarding |
| Heading 1 | 34px / 2.125rem | 700 | 1.15 | Page titles |
| Heading 2 | 26px / 1.625rem | 700 | 1.2 | Card headers |
| Heading 3 | 20px / 1.25rem | 700 | 1.3 | Subheadings |
| Body L | 18px / 1.125rem | 400 | 1.65 | Email body |
| Body M | 16px / 1rem | 400 | 1.6 | Chat, UI default |
| Body S | 14px / 0.875rem | 500 | 1.5 | Labels, metadata |
| Caption | 12px / 0.75rem | 500 | 1.4 | Timestamps |

**Typographic Voice:**
Space Mono brings unexpected technical authority — its monospaced letterforms signal engineering rigor in a space dominated by soft, rounded typefaces. Inter Tight keeps the body text crisp and condensed, maximizing information density without sacrificing readability. The contrast between monospace display and tight sans body creates a distinctive, ownable voice.

---

### 3. Iconography

**Style:** Clean outline with 2px stroke weight; corners rounded at `2px`  
**Library Base:** Phosphor Icons (regular, with `fill` on selected/active)  
**Key Icons:**

| Context | Icon | Style Note |
|---------|------|------------|
| AI identity | `Brain` or `Robot` | Outline, accented with blue |
| Milestones | `Flag` | Filled accent |
| Activities | `GameController` | Outline |
| Calendar | `CalendarBlank` | Stroke |
| Save | `Star` | Fill on active |
| Send | `ArrowRight` | In circle button |
| Expert backed | `Seal` | Filled, primary blue |
| Notifications | `Bell` | Stroke |

**Sizing:** 16 / 20 / 24 / 32px per context  
**Treatment:** Consistent 2px stroke. Phosphor `bold` variant reserved for empty states and hero illustrations only.

---

### 4. Patterns & Visual Elements

**Corner Radius:**
- Cards: `8px`
- Chat bubbles: `6px` (with `2px` on sending-end corner)
- Buttons: `4px`
- Inputs: `4px`
- Tags: `99px`

**Shadows:**
- Card resting: `0 1px 8px rgba(15, 23, 42, 0.07)`
- Card hover: `0 4px 20px rgba(37, 99, 235, 0.18)`
- Input focus ring: `0 0 0 3px rgba(37, 99, 235, 0.25)`
- Solid offset shadow (cards, CTAs): `4px 4px 0px #FFD93D` — graphic, bold, signature treatment

**Surface Patterns:**
- **Dotted grid** — `radial-gradient(circle, #CBD5E8 1px, transparent 1px)` at 20px spacing on chat background — blueprint aesthetic
- **Concentric arcs** as decorative element behind profile header — subtle, `10% opacity`, primary blue
- **Gradient sweep** from `Sky Blue → Ice White` used as email hero background

**Motion Principles:**
- Ease: `ease-out`, `200-240ms` range — nothing bouncy; grounded and responsive
- AI typing: horizontal ellipsis pulse (`…`) in a rounded pill container
- Card entrance: fade-in with `translateY(8px)` correction
- Button press: subtle `scale(0.97)` depress

**Component Language:**
- Lemon yellow (`#FFD93D`) header bar on app and email mockups — bold, high-energy brand signal
- Yellow marker-pen highlight on key phrases in AI chat bubble and email body text
- Resource cards use Electric Blue (`#2563EB`) border + solid Lemon yellow offset shadow (`4px 4px 0px`)
- Email CTA button uses matching solid yellow offset shadow
- Space Mono headings create a technical, engineered feel uncommon in parenting apps
- Email has a `6px` border-radius on the email container itself (simulates a card envelope)

---
---

## ✦ VARIATION 3 — "Dusk & Bloom"
*Deep, premium, and emotionally resonant. A quiet evening journal meets a trusted companion.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Lilac | `#A889CC` | Primary actions, active states |
| **Primary Light** | Soft Lilac | `#C4ADDE` | Hover states, tints |
| **Secondary** | Dusty Rose | `#D98B8B` | Emotional warmth, user bubbles |
| **Accent** | Amber Glow | `#E8A838` | CTAs, key highlights, delight |
| **Page Background** | Deep Plum | `#6B4F8C` | Page-level background |
| **Neutral Mid** | Dark Plum | `#503A6B` | Borders, dividers |
| **Page Text** | Cream Dusk | `#F6F2EF` | Headings, body text |
| **Surface** | Mid Plum | `#7B5FA0` | Cards, elevated surfaces |
| **Sage Bubble** | Deep Grape | `#5C4378` | AI bubble backgrounds |
| **Mockup Dark** | Deep Aubergine | `#2A1F33` | App/email mockup backgrounds |
| **Mockup Light** | Warm Ivory | `#FEFCFA` | Mockup card surfaces |
| **Mockup Bubble** | Plum Tint | `#F2EDF8` | Mockup AI response bubble |

**Color Philosophy:**
Deep Plum as the page background creates an immersive, premium atmosphere — like opening a luxury self-care app at dusk. Cream text on plum provides elegant contrast while Lilac accents glow against the dark surface. Dusty Rose brings emotional safety. Amber creates urgency and warmth without stress. The mockups maintain their own internal dark aesthetic with Deep Aubergine, preserving realistic app/email previews within the branded page shell.

---

### 2. Typography

**Font Pair:**
- **Display / Headings:** `Archivo` — A variable-width grotesque that ranges from ultra-condensed (62%) to expanded (125%). Its width axis enables dynamic typographic hierarchy within a single family: expanded for bold hero moments, condensed for dense labels, and standard for general headings.
- **Body / UI:** `Lexend Deca` — Designed for optimal reading proficiency with open letterforms and generous spacing. Effortlessly legible at all sizes, modern without being cold.

**Archivo Width Usage:**

| Context | Width (`font-stretch`) | Weight | Effect |
|---------|----------------------|--------|--------|
| Hero headlines, brand name | 115% (expanded) | 700 | Bold, commanding presence |
| AI opening sentence, card titles | 110% (semi-expanded) | 500–600 | Confident, warm emphasis |
| Standard headings | 100% (normal) | 600–700 | Clean, balanced |
| Nav links, labels | 85% (semi-condensed) | 400–500 | Compact, efficient |
| Timestamps, captions, metadata | 75% (condensed) | 400 | Dense, utilitarian, uppercase |

**Type Scale:**

| Label | Size | Weight | Width | Line Height | Usage |
|-------|------|--------|-------|-------------|-------|
| Display XL | 42px / 2.625rem | 700 | 115% | 1.1 | Email hero (Archivo) |
| Heading 1 | 32px / 2rem | 700 | 115% | 1.2 | App screen titles (Archivo) |
| Heading 2 | 24px / 1.5rem | 700 | 100% | 1.25 | Section headers (Archivo) |
| Heading 3 | 20px / 1.25rem | 600 | 110% | 1.3 | Card titles (Archivo) |
| Body L | 18px / 1.125rem | 400 | — | 1.7 | Email body copy (Lexend Deca) |
| Body M | 16px / 1rem | 400 | — | 1.6 | Chat messages (Lexend Deca) |
| Body S | 14px / 0.875rem | 500 | — | 1.5 | Labels, button text (Lexend Deca) |
| Caption | 12px / 0.75rem | 400 | 75% | 1.4 | Timestamps, metadata (Archivo condensed) |

**Typographic Voice:**
Archivo's variable width axis creates dynamic typographic hierarchy — expanded for bold hero moments, condensed for dense UI labels, and standard for body. Lexend Deca provides effortless readability with its open letterforms. Together they feel modern, confident, and premium.

---

### 3. Iconography

**Style:** Duotone — two-layer icons with `30% opacity` fill layer + full stroke  
**Library Base:** Phosphor Icons (`duotone` variant where available, `regular` fallback)  
**Key Icons:**

| Context | Icon | Style Note |
|---------|------|------------|
| Sage identity | `Flower` or `Sparkle` | Duotone plum + lilac |
| Bedtime/routines | `Moon` | Duotone with amber |
| Growth/milestones | `TrendUp` | Duotone |
| Activities | `PuzzlePiece` | Duotone |
| Profile | `UserCircle` | Regular |
| Save | `Heart` | Fill on saved, duotone tint otherwise |
| Share/Print | `ShareNetwork` | Regular |
| Send | `PaperPlaneTilt` | Filled amber on send |

**Sizing:** 16 / 20 / 24 / 32px  
**Treatment:** Duotone treatment creates visual richness without increasing visual complexity. The secondary layer always uses the `Primary Light` (lilac) at reduced opacity.

---

### 4. Patterns & Visual Elements

**Corner Radius:**
- Cards: `24px`
- Chat bubbles: `22px` (with `4px` on tail corner)
- Buttons: `14px`
- Inputs: `14px`
- Tags / Pills: `99px`

**Shadows:**
- Card resting: `0 2px 16px rgba(42, 31, 51, 0.08)`
- Card elevated: `0 8px 32px rgba(107, 79, 140, 0.18)`
- Glow effect on CTA: `0 4px 20px rgba(232, 168, 56, 0.35)` (amber glow)

**Surface Patterns:**
- **Soft floral/bloom watercolor** at `8% opacity` on email hero area — abstract, not literal
- **Radial gradient bloom** from Deep Plum center → Cream Dusk edge used as app splash / chat background
- **Fine noise grain texture** (`3% opacity`) applied to primary buttons and resource card headers for premium, tangible feel
- **Flowing line illustration** style for empty states and onboarding — loose, hand-drawn feel

**Motion Principles:**
- Ease: `cubic-bezier(0.22, 1, 0.36, 1)` — ultra-smooth, premium deceleration
- Chat bubble: fade + subtle scale from `0.95 → 1.0`, `250ms`
- Resource card: staggered reveal with `80ms` delay between elements
- Typing indicator: gentle bloom pulse animation on three dots
- CTA button: amber glow pulses softly at `2s` interval when idle

**Component Language:**
- Deep Plum (`#6B4F8C`) page background with Cream Dusk (`#F6F2EF`) text — immersive dark shell
- App header uses Deep Plum background with Amber Glow brand mark
- AI chat bubble features a Soft Lilac (`#C4ADDE`) radial gradient from top-left corner + inner shadow for depth
- AI response bubbles use expanded-width Archivo (110%, weight 500) for the opening empathetic sentence
- Resource card preview has a soft gradient overlay at the bottom edge (scrim) fading to Plum Tint
- Chat input bar floats above a frosted-glass backdrop (`backdrop-filter: blur(12px)`)
- Mockups retain internal Deep Aubergine (`#2A1F33`) dark aesthetic via hardcoded values
- Email container uses a decorative `1px` outer border in Dark Plum with `24px` radius — envelope-like

---

---

## ✦ VARIATION 4 — "Grounded"
*Confident, direct, and warm. Like a trusted friend who also has their facts straight.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Forest | `#004f3b` | CTAs, active states, logo mark, AI avatar |
| **Primary Light** | Forest Fern | `#009966` | Hover states, gradient fills |
| **Secondary** | Terracotta | `#B5531E` | AI bubble border, resource card accent, highlights |
| **Accent** | Golden Amber | `#D4943A` | Badges, warm emphasis, delight moments |
| **Neutral Light** | Clean White | `#FFFFFF` | Page background — not beige, not pastel |
| **Neutral Mid** | Cool Gray | `#E5E5E3` | Dividers, borders, secondary backgrounds |
| **Neutral Dark** | Slate | `#1E3540` | Body text, headings |
| **Surface** | Pure White | `#FFFFFF` | Cards, modals, chat bubbles (user) |
| **Sage Bubble** | Bone | `#f6ede2` | AI response bubble background |

**Color Philosophy:**
Forest anchors Sage in earthy authority — a deep, grounded green that communicates competence and trust without softness. Terracotta introduces warmth and human connection. Golden Amber signals clarity at key decision points. Slate provides a rich, warm-dark text tone. Bone brings natural warmth to surfaces. The palette feels like a steady hand, not a nursery. No baby blues, no blush pinks. Inspired by the premium confidence of brands like Nanit and Coterie.

---

### 2. Typography

**Font Pair:**
- **Display / Headings:** `Lora` — A humanist serif with presence and editorial conviction. Slightly warm, confident, with a clear point of view. Headlines feel authored, not generated.
- **Body / UI:** `Plus Jakarta Sans` — Clean, modern, and highly readable. Keeps operational UI accessible and fast to scan.

**Type Scale:**

| Label | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display XL | 40px / 2.5rem | 700 | 1.15 | Email hero headline |
| Heading 1 | 32px / 2rem | 600 | 1.2 | Section headers |
| Heading 2 | 24px / 1.5rem | 600 | 1.25 | Card titles, modals |
| Heading 3 | 20px / 1.25rem | 500 | 1.3 | Subheadings |
| Body L | 18px / 1.125rem | 400 | 1.6 | Email body, long-form |
| Body M | 16px / 1rem | 400 | 1.55 | Chat messages, default UI |
| Body S | 14px / 0.875rem | 400 | 1.5 | Labels, secondary text |
| Caption | 12px / 0.75rem | 500 | 1.4 | Timestamps, metadata |

**Typographic Voice:**
Lora is a humanist serif with presence and editorial conviction — it brings the "point of view" the brand calls for. The serif-sans pairing feels editorial: not clinical, not cute. Never uppercase for body text — it feels cold. The serif carries weight in headings and AI response openers (italic), making advice feel personally authored.

---

### 3. Iconography

**Style:** Clean line icons with slightly increased weight — intentional, never overly rounded or playful.
**Library Base:** Phosphor Icons (`regular` weight for all contexts)
**Key Icons:**

| Context | Icon | Style Note |
|---------|------|------------|
| Sage identity | `Tree` | Regular weight, Forest color |
| Profile | `UserCircle` | Regular weight |
| Save / Library | `BookmarkSimple` | Regular, fill on saved state |
| Print | `Printer` | Regular |
| Chat input | `PaperPlaneTilt` | Regular, in solid button |
| Resource card | `FileText` | Regular |
| Success | `CheckCircle` | Regular, Forest |
| Warning | `WarningCircle` | Regular, Golden Amber |

**Sizing:** 16px (inline), 18–20px (default), 24px (feature), 32px (hero/empty states)
**Treatment:** Icons always feel solid and purposeful. No duotone, no fill for decorative effect — clean line weight communicates professionalism and clarity.

---

### 4. Patterns & Visual Elements

**Corner Radius:**
- Cards: `12px`
- Chat bubbles: `14px` (with `4px` on the sending corner)
- Buttons: `10px` — rounded rectangles, not pills or sharp squares
- Inputs: `10px`
- Chips/Tags: `99px` (fully rounded)

**Shadows:**
- Card resting: `0 1px 8px rgba(28, 32, 36, 0.06)` — extremely subtle
- Card hover: `0 4px 16px rgba(28, 32, 36, 0.1)`
- Modal: `0 8px 32px rgba(28, 32, 36, 0.1)`

**Surface Patterns:**
- **Clean white backgrounds** — generous margins signal calm, each screen feels like one clear thought
- **Subtle asymmetric layout** — deliberate visual hierarchy guides the eye with confidence
- **Terracotta left-border accent** on AI response bubbles and resource cards — warm, distinctive signature
- **No decorative patterns** — the design speaks through typography, color, and whitespace

**Motion Principles:**
- Ease: `ease-out`, `280-320ms` range — deliberate, calm, reassuring
- Chat bubble entrance: fade + slide, `250ms`
- Resource card reveal: fade-in-up, `300ms`
- Micro-interactions: subtle, quiet confirmations — never celebratory or bouncy

**Component Language:**
- White backgrounds with generous margins — each screen feels like one clear thought
- AI response bubble: Bone background + terracotta left-border accent + italic serif opener
- Resource cards: subtle shadow + terracotta left border — clean, editorial hierarchy
- Clean line icons at regular weight — slightly weighted, never playful
- Buttons are solid rounded rectangles (10px radius) — intentional, not floaty
- Chat input: white with subtle border + solid Forest send button (rounded square)
- Asymmetric visual hierarchy guides the eye with confidence, not decoration

---
---

## ✦ COMPARISON SNAPSHOT

| | Variation 1 "Morning Light" | Variation 2 "Soft Blueprint" | Variation 3 "Dusk & Bloom" | Variation 4 "Grounded" |
|---|---|---|---|---|
| **Primary Color** | Sage Moss `#4A7C59` | Electric Blue `#2563EB` | Lilac on Deep Plum `#A889CC / #6B4F8C` | Forest `#004f3b` |
| **Emotional Register** | Grounded, natural, calm | Engineered, bold, high-signal | Premium, deep, emotionally rich | Authoritative, approachable, steady |
| **Display Font** | Fraunces (optical serif) | Space Mono (monospace) | Archivo (variable width) | Lora (humanist serif) |
| **Body Font** | Plus Jakarta Sans | Inter Tight | Lexend Deca | Plus Jakarta Sans |
| **Icon Style** | Rounded filled / duotone | Clean outline, 2px stroke | Duotone layered | Clean line, regular weight |
| **Corner Radius** | 16px cards | 8px cards | 24px cards | 12px cards |
| **Brand Analogy** | Herbal tea, morning journal | Mission control, parenting co-pilot | Luxury self-care, evening ritual | Nanit meets Coterie — premium confidence |
| **Best for** | Most universally appealing | Bold differentiation, tech-forward trust | Standout, premium differentiation | Art direction brief alignment — confident authority with warmth |

---

*All three variations use the Phosphor icon library and are designed to accommodate WCAG AA contrast standards across both light and dark surface contexts.*
