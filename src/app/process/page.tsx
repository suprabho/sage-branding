"use client";

import { useTheme } from "@/lib/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const phases = [
  {
    number: "01",
    title: "Interpreting the Brief",
    period: "Direction Setting & Three Themes",
    summary:
      "It started with an art direction brief for Sage — an AI parenting companion that needed to feel authoritative and grounded, not soft or clinical. The brief called for deep earthy tones, confident serif typography, real photography, and a tone of \"trusted friend who also has their facts straight.\" Rather than one solution, the brief was interpreted through three distinct lenses — each a valid reading of the same source material, documented as comprehensive design system markdowns with colors, typography, component language, and rationale.",
    details: [
      "Analyzed the brief's core principles: color, typography, imagery, layout, and tone",
      "Studied reference brands (Nanit, Coterie) for visual authority and approachability",
      "Morning Light: Fraunces + Plus Jakarta Sans, sage greens and warm clay — \"like a deep breath before the day begins\"",
      "Soft Blueprint: Space Mono + Inter Tight, electric blue with lemon accents — structured, technical confidence",
      "Dusk & Bloom: Archivo (variable width) + Lexend Deca, deep plum and dusty rose — intimate, premium, nocturnal",
      "Each theme documented with full color palettes, type scales, iconography, component language, and emotional register",
    ],
  },
  {
    number: "02",
    title: "Building the Showcase",
    period: "Bringing Directions to Life",
    summary:
      "A live showcase was built to present each direction not as static mockups, but as interactive, switchable experiences. The same set of touchpoints — a mobile app screen, an email campaign, a personalized AI chat — rendered through each theme's visual language. Stakeholders could switch between directions and feel the difference, not just see it.",
    details: [
      "Interactive app mockup with home screen → chat transition animation",
      "Email campaign template adapting layout, color, and typography per theme",
      "PRC (Personalized Reasoning Chat) dialog showing how AI responses feel in each direction",
      "Theme switcher allowing instant comparison across all touchpoints",
    ],
  },
  {
    number: "03",
    title: "Fine-Tuning Each World",
    period: "Deep Per-Theme Refinement",
    summary:
      "Each theme was pushed further into its own visual world. Dusk & Bloom developed dark-mode specifics — plum gradient chat bubbles, dusty rose accents, yellow highlights. Soft Blueprint gained its grid pattern language and bold yellow shadows. Every detail — bubble gradients, input pill shapes, tab text colors — was tuned until each theme felt like a complete brand, not just a color swap.",
    details: [
      "Dusk & Bloom: iterated on AI chat bubble gradients (radial → anchored → softened), dark plum email treatment, cream-on-dark text",
      "Soft Blueprint: dotted grid background patterns, yellow phrase highlights in AI responses, solid shadow language on CTAs",
      "Morning Light: removed decorative borders for cleaner warmth, refined resource card styling",
      "Component-level decisions: bubble corner radii, input pill shapes, icon treatments — all unique per theme",
    ],
  },
  {
    number: "04",
    title: "Font Explorations",
    period: "Typography Deep-Dive",
    summary:
      "Typography makes or breaks a brand direction. A dedicated font exploration tool was built to compare candidates side-by-side — evaluating how each typeface communicated warmth, authority, and approachability at different weights and sizes. Started with 10 candidates, narrowed to 4, then created comparison views to finalize pairings.",
    details: [
      "Explored 10 wide and variable font candidates across personality spectrums",
      "Narrowed to 4 finalists: Archivo, Anybody, Fredoka, Lexend Deca",
      "Built old vs new font comparison views for stakeholder review",
      "Finalized pairings: each theme's display + body font chosen for distinct voice",
    ],
  },
  {
    number: "05",
    title: "A Fourth Direction",
    period: "Grounded — Editorial Confidence",
    summary:
      "A fourth theme emerged from the work — Grounded. Where the others explored different emotional registers, Grounded went back to the brief's core ask: confident, editorial, direct. Lora serif with forest greens. No playfulness, no premium mystique — just clean authority. The layout was simultaneously redesigned into a magazine-style editorial showcase with numbered sections and sticky navigation.",
    details: [
      "Lora (serif) + Plus Jakarta Sans pairing for editorial authority",
      "Forest green (#004f3b) primary with terracotta and gold accents",
      "White backgrounds, generous margins, clean visual hierarchy",
      "Editorial layout overhaul: numbered TOC sidebar, oversized section numbers, magazine-feel spacing",
    ],
  },
  {
    number: "06",
    title: "Image & Illustration Pipeline",
    period: "AI-Generated Visual Assets",
    summary:
      "Each brand direction needed its own visual world beyond UI — lifestyle photography, email headers, mascot characters, and hero imagery. Rather than sourcing stock, an image generation pipeline was built using detailed per-theme prompts fed to Google GenAI. Each prompt captured the theme's mood, color palette, and visual style to produce cohesive, on-brand imagery.",
    details: [
      "Wrote detailed image generation prompts for each theme direction",
      "Morning Light: warm, golden-hour lifestyle photography with natural textures",
      "Soft Blueprint: clean, technical illustrations with grid overlays",
      "Dusk & Bloom: moody, editorial photography with deep plum and amber tones",
      "Grounded: straightforward, editorial lifestyle with forest-green accents",
      "Generated email headers, phone lifestyle mockups, and mascot/avatar images per theme",
    ],
  },
  {
    number: "07",
    title: "Logos & Mascots",
    period: "Brand Identity Marks",
    summary:
      "The final layer — giving each direction its own identity mark. Logo explorations ranged from wordmarks to icon marks, each expressing the theme's personality. Mascot characters were developed for directions that called for one. The LogoShowcase component presents these with animations that match each theme's motion language — bouncy for Morning Light, precise for Blueprint, fluid for Dusk & Bloom.",
    details: [
      "Logo mark and wordmark explorations across all four directions",
      "Mascot character development for select themes",
      "Animated logo reveals matching each theme's motion personality",
      "SVG icon marks refined for clarity at small sizes",
    ],
  },
];

export default function ProcessPage() {
  const { themeId, theme } = useTheme();
  const isDusk = themeId === "dusk-bloom";
  const textColor = isDusk ? "#F6F2EF" : "var(--color-neutral-dark)";

  return (
    <div
      className="min-h-screen"
      style={{
        background: isDusk ? "#6B4F8C" : "var(--color-neutral-light)",
      }}
    >
      {/* Header */}
      <header
        className="relative overflow-hidden"
        style={{
          background: isDusk
            ? "linear-gradient(180deg, #2A1F33 0%, #6B4F8C 100%)"
            : "var(--color-neutral-light)",
          borderBottom: isDusk
            ? "none"
            : "1px solid var(--color-neutral-mid)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.15em] opacity-50 hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              ← Back to Showcase
            </Link>
            <span
              className="text-xs opacity-30"
              style={{
                fontFamily: "var(--font-body)",
                color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
              }}
            >
              {theme.name} Direction
            </span>
          </div>

          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: textColor,
                ...(themeId === "dusk-bloom"
                  ? { fontStretch: "115%" }
                  : {}),
              }}
            >
              Process
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg opacity-60 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                color: textColor,
              }}
            >
              How this brand exploration evolved — from interpreting a brief to
              four fully realized visual directions, each telling a different
              story about what Sage could be.
            </p>
          </div>

          <ThemeSwitcher />
        </div>
      </header>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col gap-0">
          {phases.map((phase, i) => (
            <div key={phase.number} className="relative flex gap-6 md:gap-10">
              {/* Timeline line */}
              <div className="flex flex-col items-center shrink-0 w-12 md:w-16">
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: isDusk
                      ? "rgba(168,137,204,0.2)"
                      : "var(--color-primary)",
                    color: isDusk ? "#F6F2EF" : "#fff",
                    ...(themeId === "dusk-bloom"
                      ? { fontStretch: "115%" }
                      : {}),
                  }}
                >
                  {phase.number}
                </div>
                {i < phases.length - 1 && (
                  <div
                    className="flex-1 w-px my-2"
                    style={{
                      background: isDusk
                        ? "rgba(246,242,239,0.1)"
                        : "var(--color-neutral-mid)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-14 md:pb-20">
                <span
                  className="text-xs uppercase tracking-[0.12em] opacity-40 block mb-2"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: textColor,
                  }}
                >
                  {phase.period}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold leading-tight mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: textColor,
                    ...(themeId === "dusk-bloom"
                      ? { fontStretch: "110%" }
                      : {}),
                  }}
                >
                  {phase.title}
                </h2>
                <p
                  className="text-base leading-relaxed mb-6 opacity-70"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: textColor,
                  }}
                >
                  {phase.summary}
                </p>

                {/* Details */}
                <ul className="flex flex-col gap-2.5">
                  {phase.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm opacity-55 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: textColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{
                          background: "var(--color-primary)",
                          opacity: 0.6,
                        }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-12 text-center"
        style={{
          borderColor: isDusk
            ? "rgba(246,242,239,0.08)"
            : "var(--color-neutral-mid)",
        }}
      >
        <p
          className="text-xs uppercase tracking-[0.12em] opacity-30"
          style={{
            fontFamily: "var(--font-body)",
            color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
          }}
        >
          Sage — Brand Direction Explorations
        </p>
      </footer>
    </div>
  );
}
