# Sage — Design System Explorations
### Three Brand Direction Variations

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
- Resource cards use a left-border accent in Sage Moss (`4px`)
- Inline charts use rounded bar fills in the primary palette
- Email CTA button: full-width on mobile, uses a subtle grain overlay texture on the green background

---
---

## ✦ VARIATION 2 — "Soft Blueprint"
*Clean, structured, and deeply reassuring. Like a good pediatrician's office — expert but never cold.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Periwinkle Blue | `#5B7FD4` | CTAs, active nav, AI elements |
| **Primary Light** | Lavender Mist | `#8FAAEE` | Hover, gradient, tints |
| **Secondary** | Peach Blush | `#F5A382` | Warm accents, emotional moments |
| **Accent** | Marigold | `#F9C846` | Badges, highlights, "new" states |
| **Neutral Light** | Frost | `#F4F6FB` | Page background |
| **Neutral Mid** | Pale Slate | `#DDE3F0` | Dividers, input borders |
| **Neutral Dark** | Ink Navy | `#1E2A45` | Body text, headings |
| **Surface** | Pure White | `#FFFFFF` | Cards, modals, chat bubbles |
| **Sage Bubble** | Blue Tint | `#EEF2FC` | AI response bubble background |

**Color Philosophy:**  
Blue is globally associated with trust, expertise, and calm — the right frequency for a parent looking for certainty. Peach rescues it from coldness. Marigold sparks joy and draws the eye to key actions. The palette reads "premium, modern healthcare" not "app store children's game."

---

### 2. Typography

**Font Pair:**
- **Display / Headings:** `Sora` — Geometric, rounded, contemporary. Feels like it belongs in 2025 — ambitious but approachable.
- **Body / UI:** `DM Sans` — Neutral, low-friction reading. Optical sizing makes it work across scales.

**Type Scale:**

| Label | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display XL | 44px / 2.75rem | 700 | 1.1 | Email hero, onboarding |
| Heading 1 | 34px / 2.125rem | 700 | 1.15 | Page titles |
| Heading 2 | 26px / 1.625rem | 600 | 1.2 | Card headers |
| Heading 3 | 20px / 1.25rem | 600 | 1.3 | Subheadings |
| Body L | 18px / 1.125rem | 400 | 1.65 | Email body |
| Body M | 16px / 1rem | 400 | 1.6 | Chat, UI default |
| Body S | 14px / 0.875rem | 400 | 1.5 | Labels, metadata |
| Caption | 12px / 0.75rem | 500 | 1.4 | Timestamps |

**Typographic Voice:**  
Sora's geometric warmth is used for impact moments (the AI's opening line, the email headline). DM Sans maintains readability across dense informational contexts. All body weights stay at 400 — no bold body text; scarcity of weight gives it more power when used.

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
- Cards: `20px`
- Chat bubbles: `20px` (with `6px` on sending-end corner)
- Buttons: `10px`
- Inputs: `10px`
- Tags: `99px`

**Shadows:**
- Card resting: `0 1px 8px rgba(30, 42, 69, 0.07)`
- Card hover: `0 4px 20px rgba(91, 127, 212, 0.15)`
- Input focus ring: `0 0 0 3px rgba(91, 127, 212, 0.25)`

**Surface Patterns:**
- **Blueprint grid** — ultra-faint `#DDE3F0` grid lines at `1px`, 20px spacing on hero and onboarding areas
- **Concentric arcs** as decorative element behind profile header — subtle, `10% opacity`, primary blue
- **Gradient sweep** from `Lavender Mist → Frost` used as email hero background

**Motion Principles:**
- Ease: `ease-out`, `200-240ms` range — nothing bouncy; grounded and responsive
- AI typing: horizontal ellipsis pulse (`…`) in a rounded pill container
- Card entrance: fade-in with `translateY(8px)` correction
- Button press: subtle `scale(0.97)` depress

**Component Language:**
- All cards have a thin top border accent (`3px`, Primary Blue) — creates a systematic "header stripe" feeling
- Inline resource preview uses a split layout: thumbnail left / action buttons right
- Email has a `6px` border-radius on the email container itself (simulates a card envelope)

---
---

## ✦ VARIATION 3 — "Dusk & Bloom"
*Deep, premium, and emotionally resonant. A quiet evening journal meets a trusted companion.*

---

### 1. Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary** | Deep Plum | `#6B4F8C` | Brand anchor, primary actions |
| **Primary Light** | Lilac | `#A889CC` | Hover states, tints, gradients |
| **Secondary** | Dusty Rose | `#D98B8B` | Emotional warmth, soft emphasis |
| **Accent** | Amber Glow | `#E8A838` | CTAs, key highlights, delight |
| **Neutral Light** | Cream Dusk | `#F6F2EF` | Background, modal overlays |
| **Neutral Mid** | Mauve Grey | `#D9D0DC` | Borders, dividers |
| **Neutral Dark** | Deep Aubergine | `#2A1F33` | Headings, body text |
| **Surface** | Warm Ivory | `#FEFCFA` | Cards, bubbles |
| **Sage Bubble** | Plum Tint | `#F2EDF8` | AI response bubble |

**Color Philosophy:**  
Plum signals depth, intelligence, and self-care — it has become associated with premium wellness and mindful tools. Dusty Rose brings emotional safety. Amber creates urgency and warmth without stress. Used together they communicate: *"this is a sophisticated tool that respects your emotions."* It stands out sharply in an app landscape dominated by blues.

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
- Cards have no sharp outlines — depth is communicated through shadow only
- AI response bubbles use expanded-width Archivo (110%, weight 500) for the opening empathetic sentence
- Resource card preview has a soft gradient overlay at the bottom edge (scrim) fading to Plum Tint
- Email container uses a decorative `1px` outer border in Mauve Grey with `24px` radius — envelope-like
- Chat input bar floats above a frosted-glass backdrop (`backdrop-filter: blur(12px)`)

---

---

## ✦ COMPARISON SNAPSHOT

| | Variation 1 "Morning Light" | Variation 2 "Soft Blueprint" | Variation 3 "Dusk & Bloom" |
|---|---|---|---|
| **Primary Color** | Sage Moss `#4A7C59` | Periwinkle Blue `#5B7FD4` | Deep Plum `#6B4F8C` |
| **Emotional Register** | Grounded, natural, calm | Trustworthy, structured, expert | Premium, deep, emotionally rich |
| **Display Font** | Fraunces (optical serif) | Sora (geometric) | Archivo (variable width) |
| **Body Font** | Plus Jakarta Sans | DM Sans | Lexend Deca |
| **Icon Style** | Rounded filled / duotone | Clean outline, 2px stroke | Duotone layered |
| **Corner Radius** | 16px cards | 20px cards | 24px cards |
| **Brand Analogy** | Herbal tea, morning journal | Pediatric wellness clinic | Luxury self-care, evening ritual |
| **Best for** | Most universally appealing | Trust-forward, expert-backed | Standout, premium differentiation |

---

*All three variations use the Phosphor icon library and are designed to accommodate WCAG AA contrast standards across both light and dark surface contexts.*
