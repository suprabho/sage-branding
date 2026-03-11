"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import {
  UserCircle,
  Leaf,
  Brain,
  Flower,
  PaperPlaneTilt,
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
    // Wait for sage bubble to fade in before starting typewriter
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
          border: `8px solid var(--color-neutral-dark)`,
          background: "var(--color-neutral-light)",
          boxShadow: "var(--shadow-modal)",
        }}
      >
        {/* App Header */}
        <div
          className="flex items-center justify-between p-3 shrink-0"
        >
          <div className="flex items-center gap-2">
            <SageIcon themeId={themeId} />
            <h1
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-neutral-dark)" }}
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

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
          {/* Timestamp */}
          <p
            className="text-center text-xs opacity-50"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-neutral-dark)" }}
          >
            Today, 8:42 PM
          </p>

          {/* User Bubble */}
          <div
            className="flex justify-end"
            style={{ animation: "fadeInRight 0.25s var(--ease-default) 0.4s both" }}
          >
            <div
              className="max-w-[80%] px-4 py-3 text-sm"
              style={{
                background: "var(--color-surface)",
                color: "var(--color-neutral-dark)",
                fontFamily: "var(--font-body)",
                borderRadius: `var(--radius-bubble) var(--radius-bubble) var(--radius-bubble-tail) var(--radius-bubble)`,
                boxShadow: "var(--shadow-card)",
              }}
            >
              My 4-year-old keeps getting out of bed. Help.
            </div>
          </div>

          {/* Sage Response */}
          <div
            className="flex gap-2.5 items-start"
            style={{ animation: "fadeInLeft 0.35s var(--ease-default) 0.9s both" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1"
              style={{ background: "var(--color-primary)" }}
            >
              <SageIconSmall themeId={themeId} />
            </div>
            <div className="flex flex-col gap-3 max-w-[85%]">
              {/* Text Response */}
              <div
                className="px-4 py-3 text-sm leading-relaxed"
                style={{
                  background: "var(--color-sage-bubble)",
                  color: "var(--color-neutral-dark)",
                  fontFamily: "var(--font-body)",
                  borderRadius: `var(--radius-bubble) var(--radius-bubble) var(--radius-bubble) var(--radius-bubble-tail)`,
                  minHeight: "2.5rem",
                }}
              >
                {themeId === "dusk-bloom" ? (
                  <>
                    <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                      {FULL_TEXT.slice(0, Math.min(visibleChars, ITALIC_SPLIT))}
                    </span>
                    {visibleChars > ITALIC_SPLIT && FULL_TEXT.slice(ITALIC_SPLIT, visibleChars)}
                  </>
                ) : (
                  FULL_TEXT.slice(0, visibleChars)
                )}
                {visibleChars < FULL_TEXT.length && visibleChars > 0 && (
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
                )}
              </div>

              {/* Resource Card */}
              {showCard && (
                <div style={{ animation: "fadeInUp 0.4s var(--ease-default) both" }}>
                  <ResourceCard themeId={themeId} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div
          className="shrink-0 px-4 py-3 border-t"
          style={{
            borderColor: "var(--color-neutral-mid)",
            background: themeId === "dusk-bloom" ? "rgba(254, 252, 250, 0.85)" : "var(--color-surface)",
            ...(themeId === "dusk-bloom" ? { backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } : {}),
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{
              background: "var(--color-neutral-light)",
              borderRadius: "var(--radius-input)",
              border: "1px solid var(--color-neutral-mid)",
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
              }}
              readOnly
            />
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "var(--color-primary)" }}
            >
              <PaperPlaneTilt size={16} weight="fill" color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SageIcon({ themeId }: { themeId: string }) {
  const iconProps = { size: 24, color: "var(--color-primary)" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  if (themeId === "dusk-bloom") return <Flower {...iconProps} weight="duotone" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function SageIconSmall({ themeId }: { themeId: string }) {
  const iconProps = { size: 16, color: "white" } as const;
  if (themeId === "soft-blueprint") return <Brain {...iconProps} weight="regular" />;
  if (themeId === "dusk-bloom") return <Flower {...iconProps} weight="duotone" />;
  return <Leaf {...iconProps} weight="fill" />;
}

function ResourceCard({ themeId }: { themeId: string }) {
  const SaveIcon = themeId === "dusk-bloom" ? Heart : themeId === "soft-blueprint" ? Star : BookmarkSimple;

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Card Preview Area */}
      <div
        className="flex flex-col items-start"
        style={{
          ...(themeId === "dusk-bloom"
            ? {
                background: `linear-gradient(135deg, var(--color-sage-bubble) 0%, var(--color-surface) 100%)`,
              }
            : {}),
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
      </div>

      {/* Action Buttons */}
      <div
        className="flex border-t px-2 py-2 gap-1"
        style={{ borderColor: "var(--color-neutral-mid)" }}
      >
        <ActionButton icon={<Eye size={20} />} label="View" />
        <ActionButton icon={<SaveIcon size={20} />} label="Save to Library" />
        <ActionButton icon={<Printer size={20} />} label="Print" />
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-primary)",
      }}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
}
