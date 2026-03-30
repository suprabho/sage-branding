"use client";

import { useTheme } from "@/lib/ThemeContext";
import type { ThemeId } from "@/lib/themes";

/* ================================================================
   LOGO VARIANTS
   ================================================================ */

/** Default leaf/shield logomark (Soft Blueprint + fallback) */
function SageLeafLogo({
  size = 64,
  primary,
  secondary,
  mono,
}: {
  size?: number;
  primary: string;
  secondary: string;
  mono?: boolean;
}) {
  const s = mono ? primary : secondary;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4C32 4 12 16 12 34C12 46 20.5 56 32 60C43.5 56 52 46 52 34C52 16 32 4 32 4Z"
        fill={primary}
      />
      <path d="M32 18V46" stroke={s} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 26C26 28 22 32 22 36" stroke={s} strokeWidth="2" strokeLinecap="round" />
      <path d="M32 32C38 34 42 38 42 42" stroke={s} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Dusk & Bloom flower logomark */
function SageFlowerLogo({
  size = 64,
  primary,
  secondary,
  mono,
}: {
  size?: number;
  primary: string;
  secondary: string;
  mono?: boolean;
}) {
  const accent = mono ? primary : "#E8A838";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="32"
          cy="16"
          rx="8"
          ry="14"
          fill={primary}
          opacity={mono ? 1 : 0.85}
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      {[36, 108, 180, 252, 324].map((angle) => (
        <ellipse
          key={angle}
          cx="32"
          cy="20"
          rx="5.5"
          ry="10"
          fill={mono ? primary : "#D98B8B"}
          opacity={mono ? 0.6 : 0.7}
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="8" fill={secondary} />
      <circle cx="32" cy="32" r="3.5" fill={accent} />
    </svg>
  );
}

/**
 * Soft Blueprint logo — uses SVG assets from /public.
 * blueprint-03 = light bg, blueprint-04 = dark bg, blueprint-05 = mono/ghost.
 */
function BlueprintLogo({
  size = 64,
  variant = "light",
}: {
  size?: number;
  variant?: "light" | "dark" | "mono";
}) {
  const src =
    variant === "dark"
      ? "/blueprint-04.svg"
      : variant === "mono"
        ? "/blueprint-05.svg"
        : "/blueprint-03.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Sage logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

/**
 * Grounded logo — uses the real SVG assets from /public.
 * grounded-01.svg = outlined (stroke), grounded-02.svg = filled.
 * CSS filter is used to recolour the static assets.
 */
function GroundedLogo({
  size = 64,
  variant = "filled",
  tint,
}: {
  size?: number;
  variant?: "filled" | "outline";
  /** Recolour the terracotta SVG: "white" | hex colour */
  tint?: "white" | string;
}) {
  const src = variant === "outline" ? "/grouded-01.svg" : "/grouded-02.svg";

  // For white we use a simple CSS filter. For arbitrary colours we mask the
  // image and overlay the target colour so the shape is preserved.
  if (tint && tint !== "white") {
    return (
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: tint,
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Sage logo"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        ...(tint === "white" ? { filter: "brightness(0) invert(1)" } : {}),
      }}
    />
  );
}

/* ================================================================
   UNIFIED LOGO SWITCH
   ================================================================ */

interface SageLogoProps {
  size?: number;
  primary: string;
  secondary: string;
  mono?: boolean;
  themeId: ThemeId;
  /** Grounded: pick outline vs filled variant */
  groundedVariant?: "filled" | "outline";
  /** Grounded: recolour — "white" or a hex colour like "#f6ede2" */
  groundedTint?: "white" | string;
  /** Blueprint: pick light / dark / mono variant */
  blueprintVariant?: "light" | "dark" | "mono";
}

function SageLogo({
  size = 64,
  primary,
  secondary,
  mono,
  themeId,
  groundedVariant = "filled",
  groundedTint,
  blueprintVariant = "light",
}: SageLogoProps) {
  if (themeId === "grounded") {
    return <GroundedLogo size={size} variant={groundedVariant} tint={groundedTint} />;
  }
  if (themeId === "soft-blueprint") {
    return <BlueprintLogo size={size} variant={blueprintVariant} />;
  }
  if (themeId === "dusk-bloom") {
    return <SageFlowerLogo size={size} primary={primary} secondary={secondary} mono={mono} />;
  }
  return <SageLeafLogo size={size} primary={primary} secondary={secondary} mono={mono} />;
}

/* ================================================================
   LOGO SHOWCASE GRID
   ================================================================ */

export default function LogoShowcase() {
  const { themeId, theme } = useTheme();
  const isDusk = themeId === "dusk-bloom";

  // Theme-aware colours
  const primary = theme.primaryHex;
  const colors = theme.colors;
  const isGrounded = themeId === "grounded";
  const isBlueprint = themeId === "soft-blueprint";
  const bgNeutralDark =
    isDusk ? "#2A1F33" : colors.find((c) => c.role === "Text" || c.role === "Mockup BG")?.hex ?? "#1E3540";
  const bgDark = isGrounded ? primary : bgNeutralDark;
  const textDark =
    colors.find((c) => c.role === "Text" || c.role === "Mockup BG")?.hex ?? "#1E3540";
  const textLight = isDusk
    ? "#F6F2EF"
    : colors.find((c) => c.role === "Background" || c.role === "Page Text")?.hex ?? "#F7F3EE";
  const surface =
    colors.find((c) => c.role === "Surface" || c.role === "Hover/Tint")?.hex ?? "#FFFFFF";
  const secondary = colors.find((c) => c.role === "Secondary")?.hex ?? "#C97B4B";
  const accent = colors.find((c) => c.role === "Accent")?.hex ?? "#F2C46D";
  const primaryLight =
    colors.find((c) => c.role === "Primary" || c.role === "Primary Light")?.hex ?? primary;

  const cardRadius = "var(--radius-card)";
  const fontDisplay = "var(--font-display)";
  const fontBody = "var(--font-body)";
  const duskStretch = themeId === "dusk-bloom" ? { fontStretch: "110%" as const } : {};

  return (
    <div
      className="grid gap-4 md:gap-5"
      style={{
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "auto auto",
      }}
    >
      {/* ── Panel 1: Large logo on light bg ── */}
      <div
        className="flex flex-col items-center justify-center col-span-6 sm:col-span-3 md:col-span-2 aspect-square"
        style={{
          background: isDusk ? surface : "#FFFFFF",
          borderRadius: cardRadius,
          boxShadow: "var(--shadow-card)",
        }}
      >
        <SageLogo
          size={80}
          primary={primary}
          secondary={surface}
          themeId={themeId}
          groundedVariant="filled"
          blueprintVariant="dark"
        />
        <span
          className="mt-4 text-xl font-bold"
          style={{ fontFamily: fontDisplay, color: textDark, ...duskStretch }}
        >
          Sage
        </span>
      </div>

      {/* ── Panel 2: Logo on dark bg ── */}
      <div
        className="flex flex-col items-center justify-center col-span-6 sm:col-span-3 md:col-span-2 aspect-square"
        style={{
          background: bgDark,
          borderRadius: cardRadius,
          border: isDusk ? "1px solid rgba(168,137,204,0.15)" : "none",
        }}
      >
        <SageLogo
          size={48}
          primary={primaryLight}
          secondary={bgDark}
          themeId={themeId}
          groundedVariant="outline"
          groundedTint="white"
          blueprintVariant="light"
        />
        <span
          className="mt-3 text-sm font-bold"
          style={{ fontFamily: fontDisplay, color: textLight, ...duskStretch }}
        >
          Sage
        </span>
      </div>

      {/* ── Panel 3: App icon with badge ── */}
      <div
        className="relative flex items-center justify-center col-span-6 sm:col-span-6 md:col-span-2 aspect-square"
        style={{
          background: isDusk
            ? `linear-gradient(135deg, ${primary} 0%, #6B4F8C 100%)`
            : `linear-gradient(135deg, ${primary}22 0%, ${primary}44 100%)`,
          borderRadius: cardRadius,
        }}
      >
        <div
          className="relative"
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: isBlueprint ? primary : bgDark,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          }}
        >
          <SageLogo
            size={44}
            primary={primaryLight}
            secondary={bgDark}
            themeId={themeId}
            groundedVariant="filled"
            groundedTint="white"
            blueprintVariant="dark"
          />
          {/* Notification badge */}
          <div
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: secondary,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fontBody,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            3
          </div>
        </div>
      </div>

      {/* ── Panel 4: Monochrome version ── */}
      <div
        className="flex flex-col items-center justify-center col-span-6 sm:col-span-2 aspect-square"
        style={{
          background: `linear-gradient(180deg, ${bgNeutralDark} 0%, ${isDusk ? "#1A1324" : bgNeutralDark}ee 100%)`,
          borderRadius: cardRadius,
          border: isDusk ? "1px solid rgba(168,137,204,0.1)" : "none",
        }}
      >
        <SageLogo
          size={64}
          primary={textLight}
          secondary={bgNeutralDark}
          mono
          themeId={themeId}
          groundedVariant="outline"
          groundedTint="#f6ede2"
          blueprintVariant="mono"
        />
        <span
          className="mt-4 text-lgfont-bold"
          style={{ fontFamily: fontDisplay, color: textLight, ...duskStretch }}
        >
          Sage
        </span>
        <span
          className="mt-2 text-[10px] tracking-[0.2em] uppercase opacity-40"
          style={{ fontFamily: fontBody, color: textLight }}
        >
          Monochrome
        </span>
      </div>

      {/* ── Panel 5: Social profile mockup ── */}
      <div
        className="flex items-center justify-center col-span-6 md:col-span-4"
        style={{
          background: isDusk
            ? `linear-gradient(180deg, ${primary} 0%, #6B4F8C 100%)`
            : `linear-gradient(180deg, ${primary} 0%, ${primary}dd 100%)`,
          borderRadius: cardRadius,
          padding: "24px 16px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 280,
            background: "#FFFFFF",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid #E5E5E5" }}
          >
            <span style={{ color: "#1A1A1A", fontSize: 16 }}>←</span>
            <span
              className="text-sm font-semibold flex-1"
              style={{ fontFamily: fontBody, color: "#1A1A1A" }}
            >
              Sage
            </span>
            <span style={{ color: "#1A1A1A", fontSize: 14, opacity: 0.5 }}>⋮</span>
          </div>
          {/* Profile info */}
          <div className="flex items-center gap-4 px-4 py-4">
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${primary}15`,
              }}
            >
              <SageLogo
                size={30}
                primary={primary}
                secondary={`${primary}15`}
                themeId={themeId}
                groundedVariant="filled"
                blueprintVariant="dark"
              />
            </div>
            <div className="flex gap-4">
              {[
                { n: "284", l: "posts" },
                { n: "11K", l: "followers" },
                { n: "0", l: "following" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div
                    className="text-sm font-bold"
                    style={{ fontFamily: fontBody, color: "#1A1A1A" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-[10px] opacity-50"
                    style={{ fontFamily: fontBody, color: "#666" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Follow button */}
          <div className="px-4 pb-4">
            <button
              className="w-full py-2 text-sm font-semibold"
              style={{
                background: "#3897F0",
                color: "#fff",
                borderRadius: "var(--radius-button)",
                fontFamily: fontBody,
                border: "none",
              }}
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* ── Panel 6: Promo card ── */}
      <div
        className="flex flex-col justify-end col-span-6 sm:col-span-6 md:col-span-2 p-6"
        style={{
          background: isDusk
            ? `linear-gradient(135deg, #6B4F8C 0%, ${primary} 100%)`
            : `linear-gradient(135deg, ${primary} 0%, ${primary}cc 50%, ${accent}66 100%)`,
          borderRadius: cardRadius,
          minHeight: 200,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative faded logo in background */}
        <div
          style={{
            position: "absolute",
            top: -10,
            right: -10,
            opacity: 0.08,
          }}
        >
          <SageLogo
            size={140}
            primary="#fff"
            secondary="#fff"
            themeId={themeId}
            groundedVariant="filled"
            groundedTint="white"
            blueprintVariant="mono"
            mono
          />
        </div>

        <h3
          className="text-2xl md:text-3xl font-bold leading-tight mb-3 relative"
          style={{ fontFamily: fontDisplay, color: "#fff", ...duskStretch }}
        >
          The Brand
          <br />
          Logo Showcase
        </h3>
        <p
          className="text-xs leading-relaxed opacity-70 mb-5 relative max-w-[200px]"
          style={{ fontFamily: fontBody, color: "#fff" }}
        >
          Drop in your logo and change the colors. Clean, modern, and ready for
          presentation.
        </p>
        <button
          className="self-start text-xs font-semibold px-5 py-2.5 relative"
          style={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            borderRadius: "var(--radius-button)",
            fontFamily: fontBody,
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          Download Now
        </button>
      </div>
    </div>
  );
}
