"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import {
  UserCircle,
  Leaf,
  Brain,
  Flower,
  PaperPlaneTilt,
  ArrowRight,
  Eye,
  BookmarkSimple,
  Printer,
  Star,
  Heart,
} from "@phosphor-icons/react";

const FULL_TEXT =
  "Bedtime resistance at age 4 is completely normal. Since you mentioned earlier that Ollie loves dinosaurs, let\u2019s use that to our advantage! Here is a custom routine chart to help him feel in control.";
const ITALIC_SPLIT = "Bedtime resistance at age 4 is completely normal.".length;

export default function AppMockup() {
  const { themeId, theme } = useTheme();
  const [visibleChars, setVisibleChars] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
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
    }, 1400);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [themeId]);

  return (
    <div className="flex justify-center">
      {/* Phone Frame */}
      <div
        className="relative w-[375px] max-w-full overflow-hidden flex flex-col"
        style={{
          aspectRatio: "9 / 19.5",
          borderRadius: "40px",
          border: `8px solid ${themeId === "dusk-bloom" ? "#2A1F33" : "var(--color-neutral-dark)"}`,
          background: themeId === "dusk-bloom" ? "#2A1F33" : "var(--color-neutral-light)",
          boxShadow: "var(--shadow-modal)",
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
            } : {}}
          >
            <div className="flex items-center gap-2">
              <SageIcon themeId={themeId} />
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

        {/* Chat Messages + Input Container */}
        <div className={`flex-1 relative overflow-hidden ${themeId === "dusk-bloom" ? "-mt-14" : ""}`}>
          <div
            className="absolute inset-0 overflow-y-auto px-4 flex flex-col gap-4"
            style={{
              paddingTop: themeId === "dusk-bloom" ? "80px" : "16px",
              paddingBottom: (themeId === "soft-blueprint" || themeId === "dusk-bloom") ? "72px" : "16px",
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
              className="flex gap-2.5 items-start"
              style={{ animation: "fadeInLeft 0.35s var(--ease-default) 0.9s both" }}
            >
              <div
                className="w-8 h-8 flex items-center justify-center shrink-0 mt-1"
                style={{
                  background: themeId === "dusk-bloom" ? "var(--color-accent)" : "var(--color-primary)",
                  borderRadius: themeId === "soft-blueprint" ? "4px" : "50%",
                }}
              >
                <SageIconSmall themeId={themeId} />
              </div>
              <div className="flex flex-col gap-3 max-w-[85%]">
                {/* Text Response */}
                <AiBubble themeId={themeId} visibleChars={visibleChars} />

                {/* Resource Card */}
                {showCard && (
                  <div style={{ animation: "fadeInUp 0.4s var(--ease-default) both" }}>
                    <ResourceCard themeId={themeId} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Floating Chat Input for soft-blueprint and dusk-bloom */}
          {(themeId === "soft-blueprint" || themeId === "dusk-bloom") && (
            <div className="absolute bottom-0 left-0 right-0">
              <ChatInput themeId={themeId} />
            </div>
          )}
        </div>

        {/* Chat Input for other themes */}
        {themeId !== "soft-blueprint" && themeId !== "dusk-bloom" && <ChatInput themeId={themeId} />}
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

function SageIcon({ themeId }: { themeId: string }) {
  if (themeId === "dusk-bloom") return <Flower size={24} color="var(--color-accent)" weight="duotone" />;
  const iconProps = { size: 24, color: "var(--color-primary)" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function SageIconSmall({ themeId }: { themeId: string }) {
  if (themeId === "dusk-bloom") return <Flower size={16} color="white" weight="duotone" />;
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
