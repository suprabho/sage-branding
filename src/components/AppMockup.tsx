"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import {
  UserCircle,
  Leaf,
  Brain,
  Flower,
  Tree,
  PaperPlaneTilt,
  ArrowRight,
  Eye,
  BookmarkSimple,
  Printer,
  Star,
  Heart,
  ArrowClockwiseIcon,
} from "@phosphor-icons/react";

const FULL_TEXT =
  "Bedtime resistance at age 4 is completely normal. Since you mentioned earlier that Ollie loves dinosaurs, let\u2019s use that to our advantage! Here is a custom routine chart to help him feel in control.";
const ITALIC_SPLIT = "Bedtime resistance at age 4 is completely normal.".length;

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

export default function AppMockup() {
  const { themeId, theme } = useTheme();
  const [screen, setScreen] = useState<"home" | "chat">("home");
  const [visibleChars, setVisibleChars] = useState(0);
  const [replayKey, setReplayKey] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const lifestyleSrc = useGeneratedImage(`/generated/${themeId}-phone-lifestyle`);

  // Reset to home screen on theme change
  useEffect(() => {
    setScreen("home");
    setVisibleChars(0);
    setShowCard(false);
  }, [themeId]);

  const handleReplay = () => {
    setScreen("home");
    setVisibleChars(0);
    setShowCard(false);
    setTappedChip(false);
    setReplayKey((k) => k + 1);
  };

  const [tappedChip, setTappedChip] = useState(false);

  // Home screen timeline: show → tap chip → transition to chat
  useEffect(() => {
    if (screen !== "home") return;
    setTappedChip(false);
    const tapTimeout = setTimeout(() => setTappedChip(true), 2200);
    const transitionTimeout = setTimeout(() => setScreen("chat"), 3200);
    return () => {
      clearTimeout(tapTimeout);
      clearTimeout(transitionTimeout);
    };
  }, [screen, themeId, replayKey]);

  // Chat typing animation (only when on chat screen)
  useEffect(() => {
    if (screen !== "chat") return;
    setVisibleChars(0);
    setShowCard(false);

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i++;
        setVisibleChars(i);
        if (i >= FULL_TEXT.length) {
          clearInterval(intervalId!);
          setTimeout(() => setShowCard(true), 350);
        }
      }, 18);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [screen]);

  return (
    <div className="flex justify-center">
      {/* Lifestyle Background Container */}
      <div
        className="relative"
        style={{
          width: "460px",
          maxWidth: "100%",
          aspectRatio: "9 / 14",
          borderRadius: !!lifestyleSrc ? "24px" : "0",
          overflow: "hidden",
          perspective: "1200px",
        }}
      >
        {/* Lifestyle Background Image */}
        {!!lifestyleSrc && (
          <img
            src={lifestyleSrc!}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ borderRadius: "24px" }}
            aria-hidden
          />
        )}

        {/* Phone Frame — centered over the lifestyle bg */}
        <div
          className="relative mx-auto overflow-hidden flex flex-col"
          style={{
            width: "300px",
            maxWidth: "80%",
            aspectRatio: "9 / 19.5",
            borderRadius: "36px",
            border: `6px solid ${themeId === "dusk-bloom" ? "#2A1F33" : themeId === "grounded" ? "#1E3540" : "var(--color-neutral-dark)"}`,
            background: themeId === "dusk-bloom" ? "#2A1F33" : themeId === "grounded" ? "#FFFFFF" : "var(--color-neutral-light)",
            boxShadow: !!lifestyleSrc
              ? "0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.2)"
              : "var(--shadow-modal)",
            marginTop: !!lifestyleSrc ? "40px" : "0",
            zIndex: 1,
            ...(themeId === "grounded" ? {
              transform: "translateX(24px) translateY(24px) rotateX(9.5deg) rotateY(-30deg) rotateZ(17deg) scale(0.77)",
              transformStyle: "preserve-3d" as const,
            } : {}),
          }}
        >
        {/* App Header - floating pills for dusk-bloom */}
        {themeId === "dusk-bloom" ? (
          <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
            <div
              className="flex items-center gap-2 px-3 py-2"
              style={{
                background: "rgba(42, 31, 51, 0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "99px",
              }}
            >
              <SageIcon themeId={themeId} />
              <h1
                className="text-lg font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-accent)",
                  fontStretch: "115%",
                }}
              >
                Sage
              </h1>
            </div>
            <div
              className="flex items-center justify-center w-10 h-10"
              style={{
                background: "rgba(42, 31, 51, 0.7)",
                backdropFilter: "blur(12px)",
                borderRadius: "99px",
              }}
            >
              <UserCircle
                size={24}
                weight={theme.iconStyle}
                color="var(--color-secondary)"
              />
            </div>
          </div>
        ) : (
          <div
            className="flex items-center justify-between p-3 shrink-0"
            style={themeId === "soft-blueprint" ? {
              background: "var(--color-accent)",
            } : themeId === "grounded" ? {
              background: "#FFFFFF",
              borderBottom: "1px solid #E5E5E3",
            } : {}}
          >
            <div className="flex items-center gap-2">
              <h1
                className="text-xl font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-neutral-dark)",
                }}
              >
                Sage
              </h1>
            </div>
            <UserCircle
              size={28}
              weight={theme.iconStyle}
              color="var(--color-neutral-dark)"
              className="opacity-60"
            />
          </div>
        )}

        {/* Screen Content */}
        {screen === "home" ? (
          <HomePage themeId={themeId} tappedChip={tappedChip} />
        ) : (
          <>
            {/* Chat Messages + Input Container */}
            <div className={`flex-1 relative overflow-hidden ${themeId === "dusk-bloom" ? "-mt-14" : ""}`}>
              <div
                className="absolute inset-0 overflow-y-auto px-4 flex flex-col gap-4"
                style={{
                  paddingTop: themeId === "dusk-bloom" ? "120px" : "16px",
                  paddingBottom: (themeId === "soft-blueprint" || themeId === "dusk-bloom" || themeId === "grounded") ? "72px" : "16px",
                  ...(themeId === "soft-blueprint" ? {
                    backgroundImage: "radial-gradient(circle, var(--color-neutral-mid) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  } : {}),
                }}
              >
                {/* Timestamp */}
                <p
                  className="text-center text-xs opacity-50"
                  style={{
                    fontFamily: themeId === "dusk-bloom" ? "var(--font-display)" : "var(--font-body)",
                    color: themeId === "dusk-bloom" ? "#D9D0DC" : "var(--color-neutral-dark)",
                    ...(themeId === "dusk-bloom" ? { fontStretch: "75%", letterSpacing: "0.05em", textTransform: "uppercase" as const } : {}),
                  }}
                >
                  Today, 8:42 PM
                </p>

                {/* User Bubble */}
                <div
                  className="flex justify-end"
                  style={{ animation: "fadeInRight 0.25s var(--ease-default) 0.4s both" }}
                >
                  <UserBubble themeId={themeId} />
                </div>

                {/* Sage Response */}
                <div
                  className="flex flex-col gap-3"
                  style={{ animation: "fadeInLeft 0.35s var(--ease-default) 0.9s both" }}
                >
                  {/* Loading state with mascot */}
                  {visibleChars === 0 && (
                    <div className="flex justify-center py-2">
                      <div style={{ animation: "pulse 1.5s ease-in-out infinite" }}>
                        <MascotAvatar themeId={themeId} size="lg" />
                      </div>
                    </div>
                  )}

                  {/* Text Response */}
                  {visibleChars > 0 && (
                    <>
                      <AiBubble themeId={themeId} visibleChars={visibleChars} />

                      {/* Resource Card */}
                      {showCard && (
                        <div style={{ animation: "fadeInUp 0.4s var(--ease-default) both" }}>
                          <ResourceCard themeId={themeId} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Floating Chat Input for soft-blueprint and dusk-bloom */}
              {(themeId === "soft-blueprint" || themeId === "dusk-bloom" || themeId === "grounded") && (
                <div className="absolute bottom-0 left-0 right-0">
                  <ChatInput themeId={themeId} />
                </div>
              )}
            </div>

            {/* Chat Input for other themes */}
            {themeId !== "soft-blueprint" && themeId !== "dusk-bloom" && themeId !== "grounded" && <ChatInput themeId={themeId} />}
          </>
        )}
      </div>

      {/* Replay Button */}
      <button
        onClick={handleReplay}
        className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full transition-all opacity-50 hover:opacity-100 cursor-pointer"
        style={{
          fontFamily: "var(--font-body)",
          color: themeId === "dusk-bloom" ? "#D9D0DC" : "var(--color-neutral-dark)",
          background: themeId === "dusk-bloom" ? "rgba(42, 31, 51, 0.6)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(8px)",
          border: `1px solid ${themeId === "dusk-bloom" ? "rgba(164, 137, 204, 0.3)" : "var(--color-neutral-mid)"}`,
        }}
        title="Replay animation"
      >
        <ArrowClockwiseIcon size={14} />
        Replay
      </button>

      </div>
    </div>
  );
}

/* ============ HOME PAGE ============ */

const SUGGESTIONS = [
  "Bedtime won\u2019t stick",
  "Picky eater help",
  "Sibling rivalry",
];

function HomePage({ themeId, tappedChip }: { themeId: string; tappedChip: boolean }) {
  const mascotSrc = useGeneratedImage(`/generated/${themeId}-mascot`);

  if (themeId === "dusk-bloom") {
    return (
      <div
        className="flex-1 flex flex-col items-center justify-center px-6 -mt-14"
        style={{ animation: "fadeInUp 0.6s var(--ease-default) both" }}
      >
        {/* Mascot */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden mb-4"
          style={{
            boxShadow: "0 8px 32px rgba(107, 79, 140, 0.3)",
            border: "3px solid rgba(232, 168, 56, 0.4)",
          }}
        >
          {mascotSrc ? (
            <img src={mascotSrc} alt="Sage" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--color-accent)" }}>
              <Flower size={40} color="white" weight="duotone" />
            </div>
          )}
        </div>
        {/* Greeting */}
        <h2
          className="text-lg font-semibold mb-1"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-accent)",
            fontStretch: "115%",
          }}
        >
          Good evening, Sarah
        </h2>
        <p
          className="text-xs text-center mb-6 opacity-60"
          style={{ fontFamily: "var(--font-body)", color: "#D9D0DC" }}
        >
          What&apos;s on your mind tonight?
        </p>
        {/* Suggestion chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {SUGGESTIONS.map((s, i) => (
            <div
              key={s}
              className="px-3 py-1.5 text-xs"
              style={{
                fontFamily: "var(--font-body)",
                color: "#D9D0DC",
                background: tappedChip && i === 0 ? "rgba(232, 168, 56, 0.25)" : "rgba(80, 58, 107, 0.6)",
                backdropFilter: "blur(8px)",
                borderRadius: "99px",
                border: tappedChip && i === 0 ? "1px solid rgba(232, 168, 56, 0.6)" : "1px solid rgba(164, 137, 204, 0.3)",
                ...(tappedChip && i === 0 ? { animation: "chipTap 0.4s var(--ease-default) both" } : {}),
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (themeId === "soft-blueprint") {
    return (
      <div
        className="flex-1 flex flex-col items-center justify-center px-6"
        style={{
          animation: "fadeInUp 0.5s var(--ease-default) both",
          backgroundImage: "radial-gradient(circle, var(--color-neutral-mid) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        {/* Mascot */}
        <div
          className="w-20 h-20 overflow-hidden mb-4"
          style={{
            borderRadius: "8px",
            border: "2px solid var(--color-primary)",
            boxShadow: "4px 4px 0px var(--color-accent)",
          }}
        >
          {mascotSrc ? (
            <img src={mascotSrc} alt="Sage" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--color-primary)" }}>
              <Brain size={36} color="white" weight="regular" />
            </div>
          )}
        </div>
        {/* Greeting */}
        <h2
          className="text-base font-bold mb-1 uppercase tracking-wider"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-neutral-dark)",
          }}
        >
          Hey, Sarah
        </h2>
        <p
          className="text-xs text-center mb-5 opacity-50"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          What are we solving today?
        </p>
        {/* Suggestion chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {SUGGESTIONS.map((s, i) => (
            <div
              key={s}
              className="px-3 py-1.5 text-xs font-medium uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-body)",
                color: tappedChip && i === 0 ? "white" : "var(--color-primary)",
                background: tappedChip && i === 0 ? "var(--color-primary)" : "var(--color-surface)",
                borderRadius: "4px",
                border: "1.5px solid var(--color-primary)",
                ...(tappedChip && i === 0 ? { animation: "chipTap 0.4s var(--ease-default) both" } : {}),
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (themeId === "grounded") {
    return (
      <div
        className="flex-1 flex flex-col items-center justify-center px-6"
        style={{ animation: "fadeInUp 0.5s var(--ease-default) both" }}
      >
        {/* Mascot */}
        <div
          className="w-22 h-22 overflow-hidden mb-4"
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(28, 32, 36, 0.1)",
            border: "2px solid #E5E5E3",
          }}
        >
          {mascotSrc ? (
            <img src={mascotSrc} alt="Sage" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "#004f3b" }}>
              <Tree size={36} color="white" weight="regular" />
            </div>
          )}
        </div>
        {/* Greeting */}
        <h2
          className="text-lg font-semibold mb-1"
          style={{
            fontFamily: "var(--font-display)",
            color: "#1E3540",
          }}
        >
          Hi Sarah, welcome back
        </h2>
        <p
          className="text-xs text-center mb-5 opacity-50"
          style={{ fontFamily: "var(--font-body)", color: "#1E3540" }}
        >
          How can I help tonight?
        </p>
        {/* Suggestion chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          {SUGGESTIONS.map((s, i) => (
            <div
              key={s}
              className="px-3 py-1.5 text-xs font-medium"
              style={{
                fontFamily: "var(--font-body)",
                color: tappedChip && i === 0 ? "white" : "#004f3b",
                background: tappedChip && i === 0 ? "#004f3b" : "#F5F0EB",
                borderRadius: "10px",
                border: tappedChip && i === 0 ? "1px solid #004f3b" : "1px solid #E5E5E3",
                ...(tappedChip && i === 0 ? { animation: "chipTap 0.4s var(--ease-default) both" } : {}),
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Morning Light
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center px-6"
      style={{ animation: "fadeInUp 0.5s var(--ease-default) both" }}
    >
      {/* Mascot */}
      <div
        className="w-24 h-24 rounded-full overflow-hidden mb-4"
        style={{
          boxShadow: "var(--shadow-card)",
          border: "3px solid var(--color-neutral-mid)",
        }}
      >
        {mascotSrc ? (
          <img src={mascotSrc} alt="Sage" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--color-primary)" }}>
            <Leaf size={40} color="white" weight="fill" />
          </div>
        )}
      </div>
      {/* Greeting */}
      <h2
        className="text-lg font-semibold mb-1"
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-neutral-dark)",
        }}
      >
        Good evening, Sarah
      </h2>
      <p
        className="text-xs text-center mb-5 opacity-50"
        style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
      >
        I&apos;m here whenever you need me.
      </p>
      {/* Suggestion chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {SUGGESTIONS.map((s, i) => (
          <div
            key={s}
            className="px-3 py-1.5 text-xs"
            style={{
              fontFamily: "var(--font-body)",
              color: tappedChip && i === 0 ? "white" : "var(--color-neutral-dark)",
              background: tappedChip && i === 0 ? "var(--color-primary)" : "var(--color-surface)",
              borderRadius: "12px",
              border: tappedChip && i === 0 ? "1px solid var(--color-primary)" : "1px solid var(--color-neutral-mid)",
              boxShadow: "var(--shadow-card)",
              ...(tappedChip && i === 0 ? { animation: "chipTap 0.4s var(--ease-default) both" } : {}),
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ USER BUBBLE ============ */

function UserBubble({ themeId }: { themeId: string }) {
  const text = "My 4-year-old keeps getting out of bed. Help.";

  if (themeId === "soft-blueprint") {
    // Sharp, structured: squared corners, thin border, no shadow
    return (
      <div
        className="max-w-[80%] px-4 py-3 text-sm"
        style={{
          background: "var(--color-primary)",
          color: "white",
          fontFamily: "var(--font-body)",
          borderRadius: "6px 6px 2px 6px",
          border: "none",
        }}
      >
        {text}
      </div>
    );
  }

  if (themeId === "grounded") {
    // Grounded: clean, confident, terracotta-tinted
    return (
      <div
        className="max-w-[80%] px-4 py-3 text-sm"
        style={{
          background: "var(--color-primary)",
          color: "#FFFFFF",
          fontFamily: "var(--font-body)",
          borderRadius: "14px 14px 4px 14px",
        }}
      >
        {text}
      </div>
    );
  }

  if (themeId === "dusk-bloom") {
    // Luxe: dusty rose bubble, pill-like
    return (
      <div
        className="max-w-[80%] px-5 py-3.5 text-sm"
        style={{
          background: "var(--color-secondary)",
          color: "#2A1F33",
          fontFamily: "var(--font-body)",
          borderRadius: "26px 26px 6px 26px",
        }}
      >
        {text}
      </div>
    );
  }

  // Morning Light: organic, warm, rounded
  return (
    <div
      className="max-w-[80%] px-4 py-3 text-sm"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-neutral-dark)",
        fontFamily: "var(--font-body)",
        borderRadius: "18px 18px 4px 18px",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {text}
    </div>
  );
}

/* ============ AI BUBBLE ============ */

function AiBubble({ themeId, visibleChars }: { themeId: string; visibleChars: number }) {
  const cursor = visibleChars < FULL_TEXT.length && visibleChars > 0 && (
    <span
      style={{
        display: "inline-block",
        width: "2px",
        height: "0.9em",
        background: "var(--color-primary)",
        marginLeft: "2px",
        verticalAlign: "text-bottom",
        animation: "blink 0.8s step-start infinite",
      }}
    />
  );

  if (themeId === "grounded") {
    // Grounded: editorial serif opener, clean body, subtle left border
    return (
      <div
        className="text-sm mb-2 leading-relaxed"
        style={{
          color: "#1E3540",
          fontFamily: "var(--font-body)",
          borderRadius: "14px 14px 14px 4px",
          minHeight: "2.5rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 500, }}>
          {FULL_TEXT.slice(0, Math.min(visibleChars, ITALIC_SPLIT))}
        </span>
        {visibleChars > ITALIC_SPLIT && FULL_TEXT.slice(ITALIC_SPLIT, visibleChars)}
        {cursor}
      </div>
    );
  }

  if (themeId === "soft-blueprint") {
    // Sharp: squared, top-border accent stripe, yellow-highlighted opener
    return (
      <div
        className="px-4 py-3 text-sm leading-relaxed"
        style={{
          background: "var(--color-sage-bubble)",
          color: "var(--color-neutral-dark)",
          fontFamily: "var(--font-body)",
          borderRadius: "6px 6px 6px 2px",
          minHeight: "2.5rem",
        }}
      >
        <span style={{ background: "var(--color-accent)", padding: "1px 3px", borderRadius: "2px" }}>
          {FULL_TEXT.slice(0, Math.min(visibleChars, ITALIC_SPLIT))}
        </span>
        {visibleChars > ITALIC_SPLIT && FULL_TEXT.slice(ITALIC_SPLIT, visibleChars)}
        {cursor}
      </div>
    );
  }

  if (themeId === "dusk-bloom") {
    // Luxe: pill-like, expanded opener, soft glow
    return (
      <div
        className="px-5 py-3.5 text-sm leading-relaxed"
        style={{
          background: "radial-gradient(ellipse at 0% 0%, #C4ADDE 0%, #F2EDF8 50%)",
          color: "#2A1F33",
          fontFamily: "var(--font-body)",
          borderRadius: "8px 30px 30px 30px",
          boxShadow: "inset 0 2px 8px rgba(107, 79, 140, 0.1), 0 4px 20px rgba(107, 79, 140, 0.1)",
          minHeight: "2.5rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontStretch: "110%", fontWeight: 500 }}>
          {FULL_TEXT.slice(0, Math.min(visibleChars, ITALIC_SPLIT))}
        </span>
        {visibleChars > ITALIC_SPLIT && FULL_TEXT.slice(ITALIC_SPLIT, visibleChars)}
        {cursor}
      </div>
    );
  }

  // Morning Light: organic, rounded, warm
  return (
    <div
      className="px-4 py-3 text-sm leading-relaxed"
      style={{
        background: "var(--color-sage-bubble)",
        color: "var(--color-neutral-dark)",
        fontFamily: "var(--font-body)",
        borderRadius: "18px 18px 18px 4px",
        minHeight: "2.5rem",
      }}
    >
      {FULL_TEXT.slice(0, visibleChars)}
      {cursor}
    </div>
  );
}

/* ============ CHAT INPUT ============ */

function ChatInput({ themeId }: { themeId: string }) {
  if (themeId === "grounded") {
    // Grounded: clean, white input bar, subtle border, intentional send button
    return (
      <div
        className="shrink-0 px-4 py-3"
        style={{ background: "transparent" }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            background: "#FFFFFF",
            borderRadius: "10px",
            border: "1px solid #E5E5E3",
            padding: "8px 12px",
            boxShadow: "0 1px 4px rgba(28, 32, 36, 0.06)",
          }}
        >
          <input
            type="text"
            placeholder="Ask Sage anything..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-40"
            style={{
              fontFamily: "var(--font-body)",
              color: "#1E3540",
            }}
            readOnly
          />
          <button
            className="w-9 h-9 flex items-center justify-center shrink-0"
            style={{
              background: "#004f3b",
              borderRadius: "8px",
            }}
          >
            <PaperPlaneTilt size={16} weight="regular" color="white" />
          </button>
        </div>
      </div>
    );
  }

  if (themeId === "soft-blueprint") {
    // Sharp: flat, squared, prominent bottom border, square send button
    return (
      <div
        className="shrink-0 px-4 py-3"
        style={{
          background: "transparent",
        }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            background: "var(--color-neutral-light)",
            borderRadius: "4px",
            border: "2px solid var(--color-neutral-mid)",
            padding: "8px 12px",
          }}
        >
          <input
            type="text"
            placeholder="Ask Sage anything..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-40"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-neutral-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              fontSize: "12px",
            }}
            readOnly
          />
          <button
            className="w-8 h-8 flex items-center justify-center shrink-0"
            style={{
              background: "var(--color-primary)",
              borderRadius: "4px",
            }}
          >
            <ArrowRight size={16} weight="bold" color="white" />
          </button>
        </div>
      </div>
    );
  }

  if (themeId === "dusk-bloom") {
    // Luxe: floating input pill, amber send
    return (
      <div
        className="shrink-0 px-4 py-3"
        style={{
          background: "transparent",
        }}
      >
        <div
          className="flex items-center gap-2"
          style={{
            background: "#2A1F33",
            borderRadius: "99px",
            padding: "6px 6px 6px 16px",
            border: "1px solid #503A6B",
          }}
        >
          <input
            type="text"
            placeholder="Ask Sage anything..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/50"
            style={{
              fontFamily: "var(--font-body)",
              color: "white",
              caretColor: "white",
            }}
            readOnly
          />
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "var(--color-accent)",
              boxShadow: "0 4px 16px rgba(232, 168, 56, 0.4)",
            }}
          >
            <PaperPlaneTilt size={16} weight="fill" color="white" />
          </button>
        </div>
      </div>
    );
  }

  // Morning Light: warm, rounded, standard
  return (
    <div
      className="shrink-0 px-4 py-3 border-t"
      style={{
        borderColor: "var(--color-neutral-mid)",
        background: "var(--color-surface)",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="flex-1 flex items-center"
          style={{
            background: "var(--color-neutral-light)",
            borderRadius: "12px",
            border: "1px solid var(--color-neutral-mid)",
            padding: "10px 14px",
          }}
        >
          <input
            type="text"
            placeholder="Ask Sage anything..."
            className="flex-1 bg-transparent outline-none text-sm placeholder:opacity-40"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-neutral-dark)",
            }}
            readOnly
          />
        </div>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "var(--color-primary)" }}
        >
          <PaperPlaneTilt size={18} weight="fill" color="white" />
        </button>
      </div>
    </div>
  );
}

/* ============ RESOURCE CARD ============ */

function ResourceCard({ themeId }: { themeId: string }) {
  if (themeId === "grounded") {
    // Grounded: clean card, terracotta left border, deliberate hierarchy
    return (
      <div
        className="overflow-hidden"
        style={{
          background: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 1px 8px rgba(28, 32, 36, 0.06)",
        }}
      >
        <img
          src="/resource-image.jpg"
          alt="Resource"
          className="w-full h-auto aspect-8.5/11 shrink-0 object-cover"
        />
        <div className="p-3">
          <p
            className="text-[10px] font-medium uppercase tracking-widest mb-1"
            style={{ fontFamily: "var(--font-body)", color: "#B5531E" }}
          >
            Sleep Guide
          </p>
          <p
            className="text-sm font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#1E3540" }}
          >
            Dinosaur Bedtime Routine Chart
          </p>
          <p
            className="text-xs mt-0.5 opacity-50"
            style={{ fontFamily: "var(--font-body)", color: "#1E3540" }}
          >
            Custom activity chart for Ollie
          </p>
        </div>
        <div
          className="flex border-t px-2 py-2 gap-1"
          style={{ borderColor: "#E5E5E3" }}
        >
          <ActionButtonText icon={<Eye size={18} />} label="View" />
          <ActionButtonText icon={<BookmarkSimple size={18} />} label="Save" />
          <ActionButtonText icon={<Printer size={18} />} label="Print" />
        </div>
      </div>
    );
  }

  if (themeId === "soft-blueprint") {
    // Structured: bordered, top accent stripe, visible text labels, squared
    return (
      <div
        className="overflow-hidden"
        style={{
          background: "var(--color-surface)",
          borderRadius: "8px",
          border: "2px solid var(--color-primary)",
          boxShadow: "4px 4px 0px var(--color-accent)",
        }}
      >
        <img
          src="/resource-image.jpg"
          alt="Resource"
          className="w-full h-auto aspect-8.5/11 shrink-0 object-cover"
        />
        <div className="p-3">
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-1"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)" }}
          >
            Sleep Guide
          </p>
          <p
            className="text-sm font-semibold leading-tight"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            Dinosaur Bedtime Routine Chart
          </p>
          <p
            className="text-xs mt-0.5 opacity-50"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            Custom activity chart for Ollie
          </p>
        </div>
        <div
          className="flex border-t"
          style={{ borderColor: "var(--color-neutral-mid)" }}
        >
          {["View", "Save", "Print"].map((label) => (
            <button
              key={label}
              className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-primary)",
                borderRight: label !== "Print" ? "1px solid var(--color-neutral-mid)" : "none",
                letterSpacing: "0.08em",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (themeId === "dusk-bloom") {
    // Luxe: no border, deep shadow, gradient scrim, frosted action bar
    return (
      <div
        className="overflow-hidden"
        style={{
          background: "#FEFCFA",
          borderRadius: "28px",
          boxShadow: "0 8px 32px rgba(107, 79, 140, 0.18)",
        }}
      >
        <div className="relative">
          <img
            src="/resource-image.jpg"
            alt="Resource"
            className="w-full h-auto aspect-8.5/11 shrink-0 object-cover"
          />
          {/* Gradient scrim overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{
              background: "linear-gradient(to top, #F2EDF8 0%, transparent 100%)",
            }}
          />
        </div>
        <div className="px-4 pt-1 pb-2">
          <p
            className="text-sm font-semibold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#2A1F33", fontStretch: "110%" }}
          >
            Dinosaur Bedtime Routine Chart
          </p>
          <p
            className="text-xs mt-0.5 opacity-50"
            style={{ fontFamily: "var(--font-display)", color: "#2A1F33", fontStretch: "85%" }}
          >
            Custom activity chart for Ollie
          </p>
        </div>
        <div
          className="flex px-3 py-2.5 gap-2 mx-2 mb-2"
          style={{
            background: "rgba(242, 237, 248, 0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "99px",
          }}
        >
          <ActionButtonIcon icon={<Eye size={18} />} />
          <ActionButtonIcon icon={<Heart size={18} />} />
          <ActionButtonIcon icon={<Printer size={18} />} />
        </div>
      </div>
    );
  }

  // Morning Light: warm, left-border accent, organic
  const SaveIcon = BookmarkSimple;
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderRadius: "16px",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <img
        src="/resource-image.jpg"
        alt="Resource"
        className="w-full h-auto aspect-8.5/11 rounded-lg shrink-0 object-cover"
      />
      <div className="flex-1 min-w-0 p-2">
        <p
          className="text-sm font-semibold leading-tight"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          Dinosaur Bedtime Routine Chart
        </p>
        <p
          className="text-xs mt-0.5 opacity-50"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
        >
          Custom activity chart for Ollie
        </p>
      </div>
      <div
        className="flex border-t px-2 py-2 gap-1"
        style={{ borderColor: "var(--color-neutral-mid)" }}
      >
        <ActionButtonText icon={<Eye size={20} />} label="View" />
        <ActionButtonText icon={<SaveIcon size={20} />} label="Save" />
        <ActionButtonText icon={<Printer size={20} />} label="Print" />
      </div>
    </div>
  );
}

/* ============ HELPER COMPONENTS ============ */

const MASCOT_IMAGES: Record<string, string> = {
  "dusk-bloom": "/generated/dusk-bloom-mascot.jpg",
  "soft-blueprint": "/generated/soft-blueprint-mascot.jpg",
  "grounded": "/generated/grounded-mascot.jpg",
};

function MascotAvatar({ themeId, size = "sm" }: { themeId: string; size?: "sm" | "lg" }) {
  const src = MASCOT_IMAGES[themeId];
  const isLg = size === "lg";
  const sizeClass = isLg ? "" : "w-8 h-8";
  const sizeStyle = isLg ? { width: "60%", aspectRatio: "1" } : {};

  if (src) {
    return (
      <div
        className={`${sizeClass} shrink-0 ${isLg ? "" : "mt-1"} overflow-hidden`}
        style={{
          ...sizeStyle,
          borderRadius: themeId === "soft-blueprint" ? (isLg ? "12px" : "4px") : themeId === "grounded" ? (isLg ? "20px" : "8px") : "50%",
          boxShadow: isLg ? "0 8px 32px rgba(0,0,0,0.15)" : "0 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={src}
          alt="Sage"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} flex items-center justify-center shrink-0 ${isLg ? "" : "mt-1"}`}
      style={{
        ...sizeStyle,
        background: themeId === "dusk-bloom" ? "var(--color-accent)" : "var(--color-primary)",
        borderRadius: themeId === "soft-blueprint" ? (isLg ? "12px" : "4px") : themeId === "grounded" ? (isLg ? "20px" : "8px") : "50%",
      }}
    >
      <SageIconSmall themeId={themeId} />
    </div>
  );
}

function SageIcon({ themeId }: { themeId: string }) {
  if (themeId === "dusk-bloom") return <Flower size={24} color="var(--color-accent)" weight="duotone" />;
  if (themeId === "grounded") return <Tree size={24} color="var(--color-primary)" weight="regular" />;
  const iconProps = { size: 24, color: "var(--color-primary)" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function SageIconSmall({ themeId }: { themeId: string }) {
  if (themeId === "dusk-bloom") return <Flower size={16} color="white" weight="duotone" />;
  if (themeId === "grounded") return <Tree size={16} color="white" weight="regular" />;
  const iconProps = { size: 16, color: "white" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function ActionButtonText({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-primary)",
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function ActionButtonIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      className="flex-1 flex items-center justify-center py-1.5 hover:opacity-80 transition-opacity cursor-pointer"
      style={{ color: "#6B4F8C" }}
    >
      {icon}
    </button>
  );
}
