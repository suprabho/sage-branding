"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function Rationale() {
  const { theme } = useTheme();

  const rationale = getRationale(theme.id);

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-10">
      {/* Header */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "var(--color-sage-bubble)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Title block */}
        <div className="px-8 pt-10 pb-6 text-center">
          <h2
            className="text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-primary)" }}
          >
            {theme.name}
          </h2>
          <p
            className="text-base italic opacity-70 max-w-sm mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
          >
            {theme.tagline}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm opacity-50" style={{ color: "var(--color-text)"}}>
            <span style={{ fontFamily: "var(--font-body)" }}>{theme.emotionalRegister}</span>
            <span>·</span>
            <span style={{ fontFamily: "var(--font-body)" }}>{theme.brandAnalogy}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-8">
          <div className="h-px" style={{ background: "var(--color-neutral-dark)", opacity: 0.1 }} />
        </div>

        {/* Two-column magazine rationale */}
        <div className="px-8 py-8 grid grid-cols-2 gap-6">
          <p
            className="text-sm leading-loose"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            {rationale.left}
          </p>
          <p
            className="text-sm leading-loose"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            {rationale.right}
          </p>
        </div>
      </div>
      {/* Color Palette */}
      <Section title="Color Palette">
        <div className="grid grid-cols-3 gap-3">
          {theme.colors.map((color, i) => (
            <div key={`${color.hex}-${i}`} className="flex flex-col items-center gap-2">
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

function getRationale(themeId: string): { left: string; right: string } {
  const rationales: Record<string, { left: string; right: string }> = {
    "morning-light": {
      left: "Earthy greens and warm clay tones create an environment that feels like a trusted, grounding presence — not a clinical tool. Fraunces carries emotional weight in headings, making responses feel crafted, not generated.",
      right: "Resource cards rely on shadow-only depth for a clean, organic feel. Softened shadows and rounded corners create a space where a parent feels seen, safe, and supported — like a deep breath before the day begins.",
    },
    "soft-blueprint": {
      left: "Electric Blue is high-conviction trust, deeper and bolder than typical app blues — saying 'we engineered this.' Space Mono brings unexpected technical authority, signaling engineering rigor in a parenting app.",
      right: "Lemon yellow runs throughout as a signature accent: header bars, marker-pen highlights, and solid offset shadows. A dotted grid pattern reinforces the blueprint aesthetic. The voice is unmistakable: mission control meets parenting co-pilot.",
    },
    "dusk-bloom": {
      left: "Deep plum immerses users in a premium atmosphere — like opening a luxury wellness app at dusk. Cream text glows against the surface while Lilac accents create luminous highlights.",
      right: "Archivo's variable width axis drives dynamic typographic hierarchy — expanded for hero moments, condensed for dense labels. Frosted-glass input bars and amber glow CTAs create an atmosphere of premium self-care.",
    },
    grounded: {
      left: "Deep, earthy tones — forest green, warm terracotta, and golden amber — anchored on clean white backgrounds that feel like a steady hand, not a nursery. Lora brings editorial conviction to headlines: authored, not generated.",
      right: "Terracotta left-border accents create a warm, deliberate visual signature. Generous white space gives each screen the feeling of one clear thought. The voice is unmistakable: confident, warm, direct — like walking into the room with authority.",
    },
  };
  return rationales[themeId] || { left: "", right: "" };
}
