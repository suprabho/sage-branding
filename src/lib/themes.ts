export type ThemeId = "morning-light" | "soft-blueprint" | "dusk-bloom";

export interface ThemeColor {
  name: string;
  hex: string;
  role: string;
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  tagline: string;
  primaryHex: string;
  emotionalRegister: string;
  brandAnalogy: string;
  displayFont: string;
  bodyFont: string;
  iconStyle: "fill" | "regular" | "duotone";
  colors: ThemeColor[];
  colorPhilosophy: string;
  typographicVoice: string;
  componentLanguage: string[];
  fontWidths?: {
    context: string;
    stretch: string;
    weight: string;
    sample: string;
  }[];
}

export const themes: Record<ThemeId, ThemeConfig> = {
  "morning-light": {
    id: "morning-light",
    name: "Morning Light",
    tagline: "Warm, grounded, and quietly confident. Like a deep breath before the day begins.",
    primaryHex: "#4A7C59",
    emotionalRegister: "Grounded, natural, calm",
    brandAnalogy: "Herbal tea, morning journal",
    displayFont: "Fraunces",
    bodyFont: "Plus Jakarta Sans",
    iconStyle: "fill",
    colors: [
      { name: "Sage Moss", hex: "#4A7C59", role: "Primary" },
      { name: "Fern", hex: "#6FA884", role: "Primary Light" },
      { name: "Warm Clay", hex: "#C97B4B", role: "Secondary" },
      { name: "Golden Hour", hex: "#F2C46D", role: "Accent" },
      { name: "Parchment", hex: "#F7F3EE", role: "Background" },
      { name: "Linen", hex: "#E8E0D5", role: "Neutral Mid" },
      { name: "Slate Earth", hex: "#2E3830", role: "Text" },
      { name: "Warm White", hex: "#FDFAF7", role: "Surface" },
      { name: "Sage Tint", hex: "#EEF5F1", role: "AI Bubble" },
    ],
    colorPhilosophy:
      "Green anchors trust and nature — evoking growth, calm, and competence. Clay and gold introduce warmth and emotional vitality. No harsh blacks; text sits on slightly warm, softened darks. The palette avoids clinical whites in favour of lived-in, natural tones.",
    typographicVoice:
      "Fraunces carries emotional weight in moments of reassurance (headings, chat response openers). Plus Jakarta Sans keeps the operational UI clean and fast to scan. Never uppercase for body text — it feels cold.",
    componentLanguage: [
      "Resource cards use a left-border accent in Sage Moss (4px)",
      "Inline charts use rounded bar fills in the primary palette",
      "Email CTA button uses a subtle grain overlay texture on green background",
      "Slightly springy motion — cubic-bezier(0.34, 1.2, 0.64, 1)",
    ],
  },
  "soft-blueprint": {
    id: "soft-blueprint",
    name: "Soft Blueprint",
    tagline: "Clean, structured, and deeply reassuring. Like a good pediatrician's office — expert but never cold.",
    primaryHex: "#5B7FD4",
    emotionalRegister: "Trustworthy, structured, expert",
    brandAnalogy: "Pediatric wellness clinic",
    displayFont: "Sora",
    bodyFont: "DM Sans",
    iconStyle: "regular",
    colors: [
      { name: "Periwinkle Blue", hex: "#5B7FD4", role: "Primary" },
      { name: "Lavender Mist", hex: "#8FAAEE", role: "Primary Light" },
      { name: "Peach Blush", hex: "#F5A382", role: "Secondary" },
      { name: "Marigold", hex: "#F9C846", role: "Accent" },
      { name: "Frost", hex: "#F4F6FB", role: "Background" },
      { name: "Pale Slate", hex: "#DDE3F0", role: "Neutral Mid" },
      { name: "Ink Navy", hex: "#1E2A45", role: "Text" },
      { name: "Pure White", hex: "#FFFFFF", role: "Surface" },
      { name: "Blue Tint", hex: "#EEF2FC", role: "AI Bubble" },
    ],
    colorPhilosophy:
      "Blue is globally associated with trust, expertise, and calm — the right frequency for a parent looking for certainty. Peach rescues it from coldness. Marigold sparks joy and draws the eye to key actions. The palette reads 'premium, modern healthcare' not 'app store children's game.'",
    typographicVoice:
      "Sora's geometric warmth is used for impact moments (the AI's opening line, the email headline). DM Sans maintains readability across dense informational contexts. All body weights stay at 400 — no bold body text; scarcity of weight gives it more power when used.",
    componentLanguage: [
      "All cards have a thin top border accent (3px, Primary Blue) — systematic 'header stripe' feeling",
      "Inline resource preview uses a split layout: thumbnail left / action buttons right",
      "Email container has a 6px border-radius simulating a card envelope",
      "Grounded, responsive motion — ease-out, 200-240ms range",
    ],
  },
  "dusk-bloom": {
    id: "dusk-bloom",
    name: "Dusk & Bloom",
    tagline: "Deep, premium, and emotionally resonant. A quiet evening journal meets a trusted companion.",
    primaryHex: "#6B4F8C",
    emotionalRegister: "Premium, deep, emotionally rich",
    brandAnalogy: "Luxury self-care, evening ritual",
    displayFont: "Archivo",
    bodyFont: "Lexend Deca",
    iconStyle: "duotone",
    colors: [
      { name: "Deep Plum", hex: "#6B4F8C", role: "Primary" },
      { name: "Lilac", hex: "#A889CC", role: "Primary Light" },
      { name: "Dusty Rose", hex: "#D98B8B", role: "Secondary" },
      { name: "Amber Glow", hex: "#E8A838", role: "Accent" },
      { name: "Cream Dusk", hex: "#F6F2EF", role: "Background" },
      { name: "Mauve Grey", hex: "#D9D0DC", role: "Neutral Mid" },
      { name: "Deep Aubergine", hex: "#2A1F33", role: "Text" },
      { name: "Warm Ivory", hex: "#FEFCFA", role: "Surface" },
      { name: "Plum Tint", hex: "#F2EDF8", role: "AI Bubble" },
    ],
    colorPhilosophy:
      "Plum signals depth, intelligence, and self-care — associated with premium wellness and mindful tools. Dusty Rose brings emotional safety. Amber creates urgency and warmth without stress. Together they communicate: 'this is a sophisticated tool that respects your emotions.' It stands out sharply in an app landscape dominated by blues.",
    typographicVoice:
      "Archivo's variable width axis creates dynamic typographic hierarchy — condensed for dense UI labels, standard for body, and expanded for bold hero moments. Lexend Deca provides effortless readability with its open letterforms. Together they feel modern, confident, and premium.",
    componentLanguage: [
      "Cards have no sharp outlines — depth communicated through shadow only",
      "AI response bubbles use expanded-width Archivo for the opening empathetic sentence",
      "Resource card preview has a soft gradient overlay (scrim) fading to Plum Tint",
      "Chat input bar floats above a frosted-glass backdrop (backdrop-filter: blur)",
      "Ultra-smooth, premium deceleration — cubic-bezier(0.22, 1, 0.36, 1)",
    ],
    fontWidths: [
      { context: "Hero headlines, brand name", stretch: "115%", weight: "700", sample: "Sage" },
      { context: "AI opening, card titles", stretch: "110%", weight: "500", sample: "Good evening, Sarah." },
      { context: "Standard headings", stretch: "100%", weight: "600", sample: "Bedtime Routine" },
      { context: "Nav links, labels", stretch: "85%", weight: "500", sample: "Dashboard · Activity · Settings" },
      { context: "Timestamps, metadata", stretch: "75%", weight: "400", sample: "TODAY, 8:42 PM · 3 MIN READ" },
    ],
  },
};

export const themeIds: ThemeId[] = ["morning-light", "soft-blueprint", "dusk-bloom"];
