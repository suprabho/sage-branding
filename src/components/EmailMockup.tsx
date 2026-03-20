"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { Leaf, Brain, Flower, Tree } from "@phosphor-icons/react";

/** Try loading a generated image with .jpg or .png extension */
function useGeneratedImage(basePath: string) {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    setSrc(null);
    const exts = [".jpg", ".png", ".webp"];
    let cancelled = false;
    for (const ext of exts) {
      const img = new Image();
      img.onload = () => { if (!cancelled) setSrc(basePath + ext); };
      img.src = basePath + ext;
    }
    return () => { cancelled = true; };
  }, [basePath]);
  return src;
}

export default function EmailMockup() {
  const { themeId } = useTheme();

  const containerRadius = themeId === "dusk-bloom" ? "24px" : themeId === "soft-blueprint" ? "6px" : "16px";
  const containerBorder =
    themeId === "dusk-bloom" ? "1px solid #503A6B" : "none";
  const isDusk = themeId === "dusk-bloom";
  const textColor = isDusk ? "#F6F2EF" : "var(--color-neutral-dark)";
  const mutedTextColor = isDusk ? "rgba(246, 242, 239, 0.5)" : "var(--color-neutral-dark)";

  return (
    <div className="flex justify-center px-4">
      <div
        className="w-full max-w-[600px] overflow-hidden"
        style={{
          borderRadius: containerRadius,
          border: containerBorder,
          boxShadow: "var(--shadow-modal)",
          background: isDusk ? "#2A1F33" : "var(--color-surface)",
        }}
      >
        {/* Email Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{
            borderColor: isDusk ? "rgba(80, 58, 107, 0.4)" : "var(--color-neutral-mid)",
            ...(themeId === "soft-blueprint" ? { background: "var(--color-accent)" } : {}),
          }}
        >
          <div className="flex items-center gap-2">
            <EmailLogo themeId={themeId} />
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-display)", color: isDusk ? "var(--color-accent)" : "var(--color-neutral-dark)", ...(isDusk ? { fontStretch: "115%" } : {}) }}
            >
              Sage
            </span>
          </div>
          <div className="flex gap-4">
            {["About", "Blog", "Help"].map((link) => (
              <span
                key={link}
                className="text-xs cursor-pointer hover:opacity-80"
                style={{ fontFamily: isDusk ? "var(--font-display)" : "var(--font-body)", color: isDusk ? "var(--color-accent)" : "var(--color-neutral-dark)", opacity: isDusk ? 0.8 : 0.5, ...(isDusk ? { fontStretch: "85%", letterSpacing: "0.03em" } : {}) }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <EmailHero themeId={themeId} isDusk={isDusk} textColor={textColor} />

        {/* Body */}
        <div className="px-8 py-10 text-center">
          <p
            className="text-base leading-relaxed max-w-md mx-auto mb-2"
            style={{
              fontFamily: "var(--font-body)",
              color: textColor,
              opacity: 0.85,
            }}
          >
            Meet Sage. The {themeId === "soft-blueprint" ? (
              <span style={{ background: "var(--color-accent)", padding: "1px 3px", borderRadius: "2px" }}>personalized AI partner</span>
            ) : (
              "personalized AI partner"
            )}{" "}that helps you navigate tantrums, milestones, and
            the millions of decisions in between.
          </p>
          <p
            className="text-base leading-relaxed max-w-md mx-auto mb-8"
            style={{
              fontFamily: "var(--font-body)",
              color: textColor,
              opacity: 0.85,
            }}
          >
            Get advice that actually knows your child.
          </p>

          {/* Mascot Illustration */}
          <EmailMascot themeId={themeId} />

          {/* CTA Button — distinct per theme */}
          <EmailCTA themeId={themeId} />
        </div>

        {/* Footer */}
        <div
          className="px-8 py-6 text-center border-t"
          style={{
            borderColor: isDusk ? "rgba(80, 58, 107, 0.4)" : "var(--color-neutral-mid)",
            background: isDusk ? "rgba(30, 20, 40, 0.6)" : "var(--color-neutral-light)",
          }}
        >
          <div className="flex justify-center gap-6 mb-3">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <span
                key={link}
                className="text-xs opacity-40 cursor-pointer hover:opacity-70"
                style={{ fontFamily: isDusk ? "var(--font-display)" : "var(--font-body)", color: mutedTextColor, ...(isDusk ? { fontStretch: "80%" } : {}) }}
              >
                {link}
              </span>
            ))}
          </div>
          <p
            className="text-xs opacity-30"
            style={{ fontFamily: isDusk ? "var(--font-display)" : "var(--font-body)", color: mutedTextColor, ...(isDusk ? { fontStretch: "80%" } : {}) }}
          >
            You&apos;re receiving this because you signed up for Sage. Unsubscribe
          </p>
        </div>
      </div>
    </div>
  );
}

function EmailLogo({ themeId }: { themeId: string }) {
  const iconProps = { size: 22, color: "var(--color-primary)" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  if (themeId === "dusk-bloom") return <Flower size={22} color="var(--color-accent)" weight="duotone" />;
  if (themeId === "grounded") return <Tree {...iconProps} weight="regular" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function EmailCTA({ themeId }: { themeId: string }) {
  if (themeId === "grounded") {
    // Grounded: solid, intentional, rounded rectangle — warm and direct
    return (
      <button
        className="inline-block px-10 py-4 text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          fontFamily: "var(--font-body)",
          background: "#2D5A3D",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(45, 90, 61, 0.2)",
          letterSpacing: "0.01em",
        }}
      >
        Chat with Sage — It&apos;s Free
      </button>
    );
  }

  if (themeId === "soft-blueprint") {
    // Sharp: squared, uppercase, bordered, structured
    return (
      <button
        className="inline-block px-10 py-4 text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          fontFamily: "var(--font-body)",
          background: "var(--color-primary)",
          color: "white",
          borderRadius: "4px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          border: "2px solid var(--color-primary)",
          boxShadow: "4px 4px 0px var(--color-accent)",
        }}
      >
        Chat with Sage — It&apos;s Free
      </button>
    );
  }

  if (themeId === "dusk-bloom") {
    // Luxe: full pill, gradient, amber glow
    return (
      <button
        className="inline-block px-10 py-4 text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          fontFamily: "var(--font-body)",
          background: "linear-gradient(135deg, #6B4F8C 0%, #A889CC 100%)",
          color: "white",
          borderRadius: "99px",
          boxShadow: "0 6px 28px rgba(217, 139, 139, 0.45)",
          letterSpacing: "0.04em",
        }}
      >
        Chat with Sage — It&apos;s Free
      </button>
    );
  }

  // Morning Light: warm, rounded, organic
  return (
    <button
      className="inline-block px-8 py-4 text-base font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity"
      style={{
        fontFamily: "var(--font-body)",
        background: "var(--color-primary)",
        borderRadius: "12px",
        boxShadow: "var(--shadow-card)",
      }}
    >
      Chat with Sage — It&apos;s Free
    </button>
  );
}

function EmailHero({ themeId, isDusk, textColor }: { themeId: string; isDusk: boolean; textColor: string }) {
  const headerSrc = useGeneratedImage(`/generated/${themeId}-email-header`);

  return (
    <div
      className="relative px-8 py-16 text-center overflow-hidden"
      style={getHeroStyle(themeId)}
    >
      {/* Generated header image (preferred) */}
      {headerSrc && (
        <img
          src={headerSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.85 }}
          aria-hidden
        />
      )}

      {/* Fallback: original decorative background images */}
      {!headerSrc && themeId === "morning-light" && (
        <img src="/bg-email-morning-light.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" aria-hidden />
      )}
      {!headerSrc && themeId === "soft-blueprint" && (
        <img src="/bg-email-soft-blueprint.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" aria-hidden />
      )}
      {!headerSrc && themeId === "dusk-bloom" && (
        <img src="/bg-email-dusk-n-bloom.png" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" aria-hidden />
      )}

      {/* Scrim overlay for text readability when using generated image */}
      {headerSrc && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDusk
              ? "linear-gradient(180deg, rgba(42,31,51,0.5) 0%, rgba(42,31,51,0.7) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.6) 100%)",
          }}
          aria-hidden
        />
      )}

      <p
        className="text-xs uppercase tracking-widest mb-4 opacity-60 relative z-10"
        style={{
          fontFamily: isDusk ? "var(--font-display)" : "var(--font-body)",
          color: textColor,
          ...(isDusk ? { fontStretch: "75%", letterSpacing: "0.1em" } : {}),
        }}
      >
        One less thing to worry about today
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight relative z-10"
        style={{
          fontFamily: "var(--font-display)",
          color: textColor,
          ...(isDusk ? { fontStretch: "115%" } : {}),
        }}
      >
        Parent with confidence,
        <br />
        every day.
      </h2>
    </div>
  );
}

function EmailMascot({ themeId }: { themeId: string }) {
  const mascotSrc = useGeneratedImage(`/generated/${themeId}-mascot`);

  if (!mascotSrc) return null;

  return (
    <div className="flex justify-center mb-6">
      <img
        src={mascotSrc}
        alt="Sage mascot"
        className="w-20 h-20 object-contain"
        style={{
          filter: themeId === "dusk-bloom" ? "drop-shadow(0 4px 12px rgba(107,79,140,0.3))" : "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
        }}
      />
    </div>
  );
}

function getHeroStyle(themeId: string): React.CSSProperties {
  if (themeId === "grounded") {
    return {
      background: `
        radial-gradient(circle at 30% 40%, rgba(45, 90, 61, 0.08) 0%, transparent 60%),
        radial-gradient(circle at 70% 60%, rgba(192, 113, 75, 0.06) 0%, transparent 50%),
        linear-gradient(175deg, #FFFFFF 0%, #EFF5F1 100%)
      `,
    };
  }
  if (themeId === "morning-light") {
    return {
      background: `
        radial-gradient(circle at 20% 30%, rgba(111, 168, 132, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(201, 123, 75, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #F7F3EE 0%, #EEF5F1 100%)
      `,
    };
  }
  if (themeId === "soft-blueprint") {
    return {
      background: `linear-gradient(135deg, #8FAAEE 0%, #F4F6FB 100%)`,
    };
  }
  return {
    background: `
      radial-gradient(circle at 50% 50%, rgba(107, 79, 140, 0.3) 0%, transparent 70%),
      linear-gradient(135deg, #2A1F33 0%, #3D2E4A 100%)
    `,
  };
}
