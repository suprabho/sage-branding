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
    tagline: "Bold, engineered, and unapologetically technical. Like a mission control for parenting — we built this.",
    primaryHex: "#2563EB",
    emotionalRegister: "Engineered, bold, high-signal",
    brandAnalogy: "Mission control meets parenting co-pilot",
    displayFont: "Space Mono",
    bodyFont: "Inter Tight",
    iconStyle: "regular",
    colors: [
      { name: "Electric Blue", hex: "#2563EB", role: "Primary" },
      { name: "Sky Blue", hex: "#60A5FA", role: "Primary Light" },
      { name: "Coral", hex: "#FF6B6B", role: "Secondary" },
      { name: "Lemon", hex: "#FFD93D", role: "Accent" },
      { name: "Ice White", hex: "#F0F4FF", role: "Background" },
      { name: "Cool Slate", hex: "#CBD5E8", role: "Neutral Mid" },
      { name: "Midnight", hex: "#0F172A", role: "Text" },
      { name: "Pure White", hex: "#FFFFFF", role: "Surface" },
      { name: "Blue Wash", hex: "#E8EEFF", role: "AI Bubble" },
    ],
    colorPhilosophy:
      "Electric Blue is high-conviction trust — deeper and bolder than periwinkle, it says 'we engineered this.' Coral injects warmth and emotional vitality without softening the authority. Lemon creates urgency and delight at key decision points. The palette reads 'technical precision meets human care.'",
    typographicVoice:
      "Space Mono brings unexpected technical authority to a parenting app — its monospaced letterforms signal 'we built this with engineering rigor.' Inter Tight keeps the body text crisp and condensed, maximizing information density without sacrificing readability. The contrast between monospace display and tight sans body creates a distinctive voice that stands apart.",
    componentLanguage: [
      "All cards have a thin top border accent (3px, Electric Blue) — systematic 'header stripe' feeling",
      "Space Mono headings create a technical, engineered feel uncommon in parenting apps",
      "Email container has a 6px border-radius simulating a card envelope",
      "Grounded, responsive motion — ease-out, 200-240ms range",
    ],
  },
  "dusk-bloom": {
    id: "dusk-bloom",
    name: "Dusk & Bloom",
    tagline: "Deep, premium, and emotionally resonant. A quiet evening journal meets a trusted companion.",
    primaryHex: "#A889CC",
    emotionalRegister: "Premium, deep, emotionally rich",
    brandAnalogy: "Luxury self-care, evening ritual",
    displayFont: "Archivo",
    bodyFont: "Lexend Deca",
    iconStyle: "duotone",
    colors: [
      { name: "Deep Plum", hex: "#6B4F8C", role: "Page Background" },
      { name: "Lilac", hex: "#A889CC", role: "Primary" },
      { name: "Dusty Rose", hex: "#D98B8B", role: "Secondary" },
      { name: "Amber Glow", hex: "#E8A838", role: "Accent" },
      { name: "Cream Dusk", hex: "#F6F2EF", role: "Page Text" },
      { name: "Mid Plum", hex: "#7B5FA0", role: "Surface" },
      { name: "Deep Aubergine", hex: "#2A1F33", role: "Mockup BG" },
      { name: "Soft Lilac", hex: "#C4ADDE", role: "Hover/Tint" },
      { name: "Deep Grape", hex: "#5C4378", role: "AI Bubble" },
    ],
    colorPhilosophy:
      "Deep Plum as the page background creates an immersive, premium atmosphere. Cream text on plum provides elegant contrast while Lilac accents glow against the dark surface. Dusty Rose brings emotional safety. Amber creates urgency and warmth. The mockups maintain their own internal dark aesthetic with Deep Aubergine.",
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
