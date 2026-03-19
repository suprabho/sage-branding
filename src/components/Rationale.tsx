"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function Rationale() {
  const { theme } = useTheme();

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h2
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
        >
          {theme.name}
        </h2>
        <p
          className="text-base italic opacity-70"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          {theme.tagline}
        </p>
        <div className="flex items-center justify-center gap-4 mt-3 text-sm opacity-60">
          <span style={{ fontFamily: "var(--font-body)" }}>{theme.emotionalRegister}</span>
          <span>·</span>
          <span style={{ fontFamily: "var(--font-body)" }}>{theme.brandAnalogy}</span>
        </div>
      </div>

      {/* Color Palette */}
      <Section title="Color Palette">
        <div className="grid grid-cols-3 gap-3">
          {theme.colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center gap-2">
              <div
                className="w-full aspect-square rounded-xl ring-1 ring-black/5"
                style={{
                  backgroundColor: color.hex,
                  borderRadius: "var(--radius-card)",
                }}
              />
              <div className="text-center">
                <p
                  className="text-xs font-semibold"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
                >
                  {color.name}
                </p>
                <p
                  className="text-[10px] opacity-50 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
                >
                  {color.role}
                </p>
                <p
                  className="text-[10px] font-mono opacity-40"
                  style={{ color: "var(--color-neutral-dark)" }}
                >
                  {color.hex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Color Philosophy */}
      <Section title="Color Philosophy">
        <p
          className="text-sm leading-relaxed opacity-80"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          {theme.colorPhilosophy}
        </p>
      </Section>

      {/* Font Pairing */}
      <Section title="Font Pairing">
        <div
          className="p-6 rounded-xl space-y-6"
          style={{
            background: "var(--color-surface)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Display — {theme.displayFont}
            </p>
            <p
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className="border-t pt-4" style={{ borderColor: "var(--color-neutral-mid)" }}>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Body — {theme.bodyFont}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
            >
              The quick brown fox jumps over the lazy dog. Sage helps parents navigate the hundreds
              of decisions that shape their child&apos;s early years with confidence and calm.
            </p>
          </div>
        </div>
      </Section>

      {/* Font Width Usage — only for themes with variable width */}
      {theme.fontWidths && (
        <Section title="Font Width Usage">
          <p
            className="text-sm leading-relaxed opacity-70 mb-5"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            {theme.displayFont} uses a variable width axis (<code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--color-sage-bubble)" }}>font-stretch</code>) to create hierarchy within a single typeface — wider for impact, narrower for density.
          </p>
          <div className="space-y-1">
            {theme.fontWidths.map((fw, i) => (
              <div
                key={i}
                className="flex items-baseline gap-4 py-3 px-4 rounded-lg"
                style={{
                  background: i % 2 === 0 ? "var(--color-surface)" : "transparent",
                }}
              >
                <div className="shrink-0 w-36">
                  <p
                    className="text-xs opacity-50"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
                  >
                    {fw.context}
                  </p>
                  <p
                    className="text-[10px] font-mono opacity-30 mt-0.5"
                    style={{ color: "var(--color-neutral-dark)" }}
                  >
                    {fw.stretch} · w{fw.weight}
                  </p>
                </div>
                <p
                  className="flex-1 text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStretch: fw.stretch,
                    fontWeight: Number(fw.weight),
                    color: "var(--color-neutral-dark)",
                    lineHeight: 1.3,
                  }}
                >
                  {fw.sample}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Typographic Voice */}
      <Section title="Typographic Voice">
        <p
          className="text-sm leading-relaxed opacity-80"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          {theme.typographicVoice}
        </p>
      </Section>

      {/* Component Language */}
      <Section title="Component Language">
        <ul className="space-y-2">
          {theme.componentLanguage.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm opacity-80"
              style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-primary)" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Design Rationale Summary */}
      <Section title="Design Rationale">
        <div
          className="p-6 rounded-xl"
          style={{
            background: "var(--color-sage-bubble)",
            borderRadius: "var(--radius-card)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            {getRationale(theme.id)}
          </p>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        className="text-lg font-semibold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function getRationale(themeId: string): string {
  const rationales: Record<string, string> = {
    "morning-light":
      "The Morning Light variation uses earthy greens and warm clay tones to create an environment that feels like a trusted, grounding presence — not a clinical tool. Fraunces, with its optical warmth, carries emotional weight in headings, making Sage's responses feel crafted, not generated. Plus Jakarta Sans keeps the UI scannable. Resource cards rely on shadow-only depth for a clean, organic feel. Together, the softened shadows and rounded corners create a space where an overwhelmed parent feels seen, safe, and supported — like a deep breath before the day begins.",
    "soft-blueprint":
      "The Soft Blueprint variation goes bold — Electric Blue is high-conviction trust, deeper and more saturated than typical app blues, saying 'we engineered this.' Space Mono as the display font is deliberately unexpected for a parenting app, bringing technical authority that signals engineering rigor. Inter Tight keeps the body text crisp and condensed. Lemon yellow runs throughout as a signature accent: header bars, marker-pen text highlights on key phrases, and solid offset shadows on CTAs and resource cards. A dotted grid pattern on the chat background reinforces the blueprint aesthetic. Coral injects warmth without softening the authority. The overall voice is unmistakably bold: mission control meets parenting co-pilot.",
    "dusk-bloom":
      "The Dusk & Bloom variation immerses users in a deep plum page environment that feels like opening a luxury wellness app at dusk. Cream text glows against the plum surface while Lilac accents create luminous highlights. The app header uses Deep Plum with an Amber brand mark, and the AI chat bubble features a Soft Lilac radial gradient with a subtle inner shadow for depth. Archivo's variable width axis drives dynamic typographic hierarchy — expanded for bold hero moments, condensed for dense labels, and standard for body copy. Lexend Deca provides effortless readability. The mockups retain their own internal dark aubergine aesthetic, preserving realistic previews within the branded plum shell. Shadow-only card depth, frosted-glass input bars, and amber glow CTAs create an atmosphere of premium self-care.",
    grounded:
      "The Grounded variation leads with deep, earthy tones — forest green darker than true sage, warm terracotta, and golden amber — anchored on clean white backgrounds that feel like a steady hand, not a nursery. Lora, a humanist serif, brings editorial conviction and presence to headlines: authored, not generated. Plus Jakarta Sans keeps the operational UI clean and fast. The terracotta left-border accent on AI response bubbles and resource cards creates a warm, deliberate visual signature. Clean line icons at regular weight feel intentional without being playful. Buttons are solid rounded rectangles — neither pills nor sharp squares. Generous white space and asymmetric hierarchy give each screen the feeling of one clear thought. The overall voice is unmistakable: trusted friend who also has their facts straight. Confident, warm, direct — like walking into the room with authority, not whispering reassurance from the corner. Inspired by the premium confidence of Nanit and Coterie.",
  };
  return rationales[themeId] || "";
}
