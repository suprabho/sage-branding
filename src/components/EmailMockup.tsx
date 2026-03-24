"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import { Brain, Flower, Star, CheckCircle, ArrowRight, Sparkle, Heart } from "@phosphor-icons/react";

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

const MASCOT_IMAGES: Record<string, string> = {
  "dusk-bloom": "/generated/dusk-bloom-mascot.jpg",
  "soft-blueprint": "/generated/soft-blueprint-mascot.jpg",
  "grounded": "/generated/grounded-mascot.png",
};

export default function EmailMockup() {
  const { themeId } = useTheme();

  if (themeId === "grounded") return <GroundedEmail />;
  if (themeId === "soft-blueprint") return <BlueprintEmail />;
  if (themeId === "dusk-bloom") return <DuskBloomEmail />;

  // Fallback for morning-light or any other
  return <GroundedEmail />;
}

/* ================================================================
   GROUNDED — Full-bleed hero with overlapping white card
   Lifestyle image hero → headline overlay → white card body with
   centered mascot → blue-gray footer.
   ================================================================ */

function GroundedEmail() {
  const headerSrc = useGeneratedImage("/generated/grounded-email-header");
  const mascotSrc = MASCOT_IMAGES["grounded"];

  return (
    <div className="flex justify-center px-4">
      <div
        className="w-full max-w-[600px] overflow-hidden"
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(28, 32, 36, 0.08)",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        {/* Full-height image background with everything layered on top */}
        <div className="relative h-full">
          {/* Background image — fills the entire section */}
          {headerSrc ? (
            <img
              src={headerSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 40%, rgba(44, 74, 46, 0.08) 0%, transparent 60%),
                  radial-gradient(circle at 70% 60%, rgba(181, 83, 30, 0.06) 0%, transparent 50%),
                  linear-gradient(175deg, #FFFFFF 0%, #f6ede2 100%)
                `,
              }}
            />
          )}
          {/* Scrim for readability over image */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(28,32,36,0.05) 0%, rgba(28,32,36,0.35) 40%, rgba(28,32,36,0.15) 100%)",
            }}
            aria-hidden
          />

          {/* Content layered on top of the image */}
          <div className="relative z-10">
            {/* Brand Name — centered, uppercase, on top of image */}
            <div className="text-center pt-5 pb-4 backdrop-blur-3xl">
              <span
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
              >
                Sage
              </span>
            </div>

            {/* Headline — overlaid on image */}
            <div className="text-center px-8 pt-120 pb-14">
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
              >
                Parent with
                <br />
                confidence,
                <br />
                every day.
              </h2>
            </div>

            {/* White Card — inset, sitting on top of the image */}
            <div
              className="mx-4 mb-4 text-center px-8 pt-10 pb-10"
              style={{
                background: "#FFFFFF",
                borderRadius: "28px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "#1E3540" }}
              >
                Meet Sage
              </h3>

              {/* Mascot — centered, prominent */}
              {mascotSrc && (
                <div className="flex justify-center mb-6">
                  <img
                    src={mascotSrc}
                    alt="Sage mascot"
                    className="w-24 h-24 object-contain"
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
                    }}
                  />
                </div>
              )}

              <p
                className="text-sm leading-relaxed max-w-xs mx-auto mb-2"
                style={{ fontFamily: "var(--font-body)", color: "#1E3540", opacity: 0.75 }}
              >
                The personalized AI partner that helps you navigate tantrums, milestones, and the
                millions of decisions in between.
              </p>
              <p
                className="text-sm leading-relaxed max-w-xs mx-auto mb-8 font-medium"
                style={{ fontFamily: "var(--font-body)", color: "#1E3540", opacity: 0.85 }}
              >
                Get advice that actually knows your child.
              </p>

              {/* CTA — warm terracotta/coral toned, rounded */}
              <button
                className="inline-block px-10 py-4 text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  fontFamily: "var(--font-body)",
                  background: "#B5531E",
                  color: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 16px rgba(181, 83, 30, 0.25)",
                  letterSpacing: "0.01em",
                }}
              >
                Chat with Sage — It&apos;s Free.
              </button>
            </div>

            {/* Footer — sits inside the image container */}
            <div
              className="mx-4 mb-4 text-center px-8 pt-6 pb-8 backdrop-blur-3xl bg-[#e5e5e333] rounded-2xl"
            >
          <span
            className="text-lg font-semibold uppercase tracking-[0.15em] block mb-3"
            style={{ fontFamily: "var(--font-display)", color: "#FFFFFF" }}
          >
            Sage
          </span>
          <div className="flex justify-center items-center gap-2 mb-4">
            {["Privacy", "Kids", "Newsletter"].map((link, i) => (
              <span key={link} className="flex items-center gap-2">
                <span
                  className="text-[10px] font-medium uppercase tracking-wider cursor-pointer hover:opacity-70"
                  style={{ fontFamily: "var(--font-body)", color: "#FFFFFF", opacity: 0.6 }}
                >
                  {link}
                </span>
                {i < 2 && (
                  <span style={{ color: "#FFFFFF", opacity: 0.3 }}>|</span>
                )}
              </span>
            ))}
          </div>
          <p
            className="text-[10px] leading-relaxed mb-1"
            style={{ fontFamily: "var(--font-body)", color: "#FFFFFF", opacity: 0.45 }}
          >
            Not to your preference? Click here.
          </p>
          <p
            className="text-[10px]"
            style={{ fontFamily: "var(--font-body)", color: "#FFFFFF", opacity: 0.45 }}
          >
            No longer wish to receive these emails? Unsubscribe
          </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SOFT BLUEPRINT — Technical / Modular Newsletter
   Yellow header, dot-grid, numbered steps, sharp edges.
   ================================================================ */

function BlueprintEmail() {
  const headerSrc = useGeneratedImage("/generated/soft-blueprint-email-header");
  const mascotSrc = MASCOT_IMAGES["soft-blueprint"];

  return (
    <div className="flex justify-center px-4">
      <div
        className="w-full max-w-[600px] overflow-hidden"
        style={{
          borderRadius: "6px",
          border: "2px solid #2563EB",
          boxShadow: "6px 6px 0px #FFD93D",
          background: "#FFFFFF",
        }}
      >
        {/* Yellow Header Bar */}
        <div
          className="flex items-center justify-between px-6 py-3"
          style={{ background: "#FFD93D" }}
        >
          <div className="flex items-center gap-2">
            <Brain size={20} color="#2563EB" weight="regular" />
            <span
              className="text-sm font-bold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-display)", color: "#0F172A", letterSpacing: "0.1em" }}
            >
              Sage
            </span>
          </div>
          <div className="flex gap-4">
            {["DOCS", "BLOG", "HELP"].map((link) => (
              <span
                key={link}
                className="text-[10px] font-semibold uppercase tracking-wider cursor-pointer hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "#2563EB", letterSpacing: "0.08em" }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Hero — blueprint grid background */}
        <div
          className="relative px-8 py-14 overflow-hidden"
          style={{
            background: "#F0F4FF",
            backgroundImage: "radial-gradient(circle, #CBD5E8 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {headerSrc && (
            <>
              <img
                src={headerSrc}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.7 }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(240, 244, 255, 0.6)" }}
                aria-hidden
              />
            </>
          )}
          <div className="relative z-10">
            <div
              className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-body)",
                background: "#2563EB",
                color: "white",
                borderRadius: "2px",
                letterSpacing: "0.1em",
              }}
            >
              New Release
            </div>
            <h2
              className="text-3xl font-bold leading-tight mb-2"
              style={{ fontFamily: "var(--font-display)", color: "#0F172A" }}
            >
              Parent with
              <br />
              <span style={{ background: "#FFD93D", padding: "2px 6px" }}>confidence.</span>
            </h2>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-body)", color: "#0F172A", opacity: 0.6 }}
            >
              One less thing to worry about today.
            </p>
          </div>
        </div>

        {/* Body — numbered steps */}
        <div className="px-8 py-8">
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", color: "#0F172A", opacity: 0.75 }}
          >
            Meet Sage — the <span style={{ background: "#FFD93D", padding: "1px 3px", borderRadius: "2px" }}>personalized AI partner</span> that
            helps you navigate tantrums, milestones, and the millions of decisions
            in between.
          </p>

          {/* Step cards */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { num: "01", title: "Tell Sage about your child", desc: "Age, temperament, what makes them tick." },
              { num: "02", title: "Ask anything", desc: "Sleep, tantrums, milestones — real questions, real answers." },
              { num: "03", title: "Get personalized plans", desc: "Evidence-backed routines built for your family." },
            ].map((step) => (
              <div
                key={step.num}
                className="flex gap-4 p-4"
                style={{
                  background: "#F0F4FF",
                  borderRadius: "4px",
                  border: "1px solid #CBD5E8",
                }}
              >
                <span
                  className="text-2xl font-bold shrink-0"
                  style={{ fontFamily: "var(--font-display)", color: "#2563EB", opacity: 0.3, lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <div>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ fontFamily: "var(--font-body)", color: "#0F172A" }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#0F172A", opacity: 0.55 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mascot badge */}
          {mascotSrc && (
            <div
              className="flex items-center gap-4 p-4 mb-8"
              style={{
                background: "#FFFFFF",
                borderRadius: "4px",
                border: "2px solid #2563EB",
                boxShadow: "4px 4px 0px #FFD93D",
              }}
            >
              <img
                src={mascotSrc}
                alt="Sage mascot"
                className="w-12 h-12 object-contain shrink-0"
                style={{ borderRadius: "4px" }}
              />
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-0.5"
                  style={{ fontFamily: "var(--font-body)", color: "#2563EB", letterSpacing: "0.08em" }}
                >
                  Powered by AI
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "#0F172A", opacity: 0.6 }}
                >
                  Personalized. Evidence-based. Always available.
                </p>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "var(--font-body)",
                background: "#2563EB",
                color: "white",
                borderRadius: "4px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                border: "2px solid #2563EB",
                boxShadow: "4px 4px 0px #FFD93D",
              }}
            >
              Get Started
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </div>

        {/* Footer — structured with dividers */}
        <div
          className="px-8 py-4 flex items-center justify-between"
          style={{ borderTop: "2px solid #CBD5E8", background: "#F0F4FF" }}
        >
          <div className="flex gap-3">
            {["Privacy", "Terms", "Docs"].map((link, i) => (
              <span key={link} className="flex items-center gap-3">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider cursor-pointer hover:opacity-70"
                  style={{ fontFamily: "var(--font-body)", color: "#2563EB", opacity: 0.5, letterSpacing: "0.08em" }}
                >
                  {link}
                </span>
                {i < 2 && <span style={{ color: "#CBD5E8" }}>|</span>}
              </span>
            ))}
          </div>
          <span
            className="text-[10px] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-body)", color: "#0F172A", opacity: 0.25, letterSpacing: "0.08em" }}
          >
            Unsubscribe
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   DUSK & BLOOM — Premium Magazine / Luxury
   Full-bleed dark hero, spacious, floating testimonial, amber glow.
   ================================================================ */

function DuskBloomEmail() {
  const headerSrc = useGeneratedImage("/generated/dusk-bloom-email-header");
  const mascotSrc = MASCOT_IMAGES["dusk-bloom"];

  return (
    <div className="flex justify-center px-4">
      <div
        className="w-full max-w-[600px] overflow-hidden"
        style={{
          borderRadius: "24px",
          border: "1px solid #503A6B",
          boxShadow: "0 8px 48px rgba(107, 79, 140, 0.2)",
          background: "#2A1F33",
        }}
      >
        {/* Floating Header — no background, minimal */}
        <div className="flex items-center justify-center px-8 pt-8 pb-2">
          <div className="flex items-center gap-2">
            <Flower size={20} color="#E8A838" weight="duotone" />
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "#E8A838", fontStretch: "115%" }}
            >
              Sage
            </span>
          </div>
        </div>

        {/* Immersive Hero */}
        <div className="relative px-10 py-20 text-center overflow-hidden">
          {headerSrc && (
            <>
              <img
                src={headerSrc}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.5 }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(42,31,51,0.4) 0%, rgba(42,31,51,0.85) 100%)",
                }}
                aria-hidden
              />
            </>
          )}
          {!headerSrc && (
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 20%, rgba(168, 137, 204, 0.2) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 80%, rgba(232, 168, 56, 0.08) 0%, transparent 50%),
                  linear-gradient(180deg, #2A1F33 0%, #3D2E4A 100%)
                `,
              }}
              aria-hidden
            />
          )}

          <div className="relative z-10">
            <p
              className="text-[10px] uppercase tracking-widest mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "#E8A838",
                fontStretch: "75%",
                letterSpacing: "0.15em",
              }}
            >
              A new chapter in parenting
            </p>
            <h2
              className="text-4xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                color: "#F6F2EF",
                fontStretch: "115%",
              }}
            >
              Parent with
              <br />
              confidence.
            </h2>
            <div
              className="w-12 h-0.5 mx-auto"
              style={{ background: "linear-gradient(90deg, transparent, #E8A838, transparent)" }}
            />
          </div>
        </div>

        {/* Body — centered, spacious, literary feel */}
        <div className="px-10 py-6 text-center">
          <p
            className="text-base leading-relaxed mb-2 mx-auto max-w-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "#F6F2EF",
              opacity: 0.8,
            }}
          >
            Meet Sage. The personalized AI partner that helps you navigate tantrums,
            milestones, and the millions of decisions in between.
          </p>
          <p
            className="text-sm leading-relaxed mb-10 mx-auto max-w-sm"
            style={{
              fontFamily: "var(--font-display)",
              color: "#A889CC",
              fontStretch: "110%",
              fontStyle: "italic",
            }}
          >
            Get advice that actually knows your child.
          </p>

          {/* Mascot — large, centered, glowing */}
          {mascotSrc && (
            <div className="flex justify-center mb-10">
              <div
                className="relative"
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "linear-gradient(135deg, #A889CC 0%, #E8A838 100%)",
                  boxShadow: "0 8px 32px rgba(232, 168, 56, 0.2), 0 0 48px rgba(168, 137, 204, 0.15)",
                }}
              >
                <img
                  src={mascotSrc}
                  alt="Sage mascot"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "50%", border: "2px solid #2A1F33" }}
                />
              </div>
            </div>
          )}

          {/* Floating Testimonial Card */}
          <div
            className="mx-auto max-w-sm p-6 mb-10 text-center"
            style={{
              background: "rgba(80, 58, 107, 0.3)",
              borderRadius: "20px",
              border: "1px solid rgba(168, 137, 204, 0.2)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} color="#E8A838" weight="fill" />
              ))}
            </div>
            <p
              className="text-sm leading-relaxed mb-3 italic"
              style={{ fontFamily: "var(--font-body)", color: "#F6F2EF", opacity: 0.85 }}
            >
              &ldquo;Like having a wise friend on speed dial — one who actually
              remembers everything about your kid.&rdquo;
            </p>
            <p
              className="text-[10px] uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-display)",
                color: "#A889CC",
                fontStretch: "75%",
                letterSpacing: "0.12em",
              }}
            >
              Sarah, mom of two
            </p>
          </div>

          {/* Three pillars */}
          <div className="flex gap-4 mb-10 mx-auto max-w-sm">
            {[
              { icon: <Sparkle size={18} color="#E8A838" weight="duotone" />, label: "Personalized" },
              { icon: <CheckCircle size={18} color="#A889CC" weight="duotone" />, label: "Evidence-Based" },
              { icon: <Heart size={18} color="#D98B8B" weight="duotone" />, label: "Empathetic" },
            ].map((p) => (
              <div key={p.label} className="flex-1 text-center">
                <div className="flex justify-center mb-2">{p.icon}</div>
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#F6F2EF",
                    opacity: 0.6,
                    fontStretch: "80%",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA — gradient pill with amber glow */}
          <button
            className="inline-block px-12 py-4 text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              fontFamily: "var(--font-body)",
              background: "linear-gradient(135deg, #6B4F8C 0%, #A889CC 100%)",
              color: "white",
              borderRadius: "99px",
              boxShadow: "0 6px 28px rgba(232, 168, 56, 0.3), 0 2px 12px rgba(168, 137, 204, 0.3)",
              letterSpacing: "0.04em",
            }}
          >
            Chat with Sage — It&apos;s Free
          </button>
        </div>

        {/* Footer — minimal, premium */}
        <div className="px-10 pt-6 pb-8 text-center">
          <div
            className="w-16 h-px mx-auto mb-5"
            style={{ background: "rgba(168, 137, 204, 0.2)" }}
          />
          <div className="flex justify-center gap-6 mb-3">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <span
                key={link}
                className="text-[10px] uppercase tracking-widest cursor-pointer hover:opacity-70"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#F6F2EF",
                  opacity: 0.25,
                  fontStretch: "80%",
                  letterSpacing: "0.1em",
                }}
              >
                {link}
              </span>
            ))}
          </div>
          <p
            className="text-[10px]"
            style={{
              fontFamily: "var(--font-display)",
              color: "#F6F2EF",
              opacity: 0.15,
              fontStretch: "80%",
            }}
          >
            You&apos;re receiving this because you signed up for Sage. Unsubscribe
          </p>
        </div>
      </div>
    </div>
  );
}
