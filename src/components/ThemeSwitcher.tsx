"use client";

import { useTheme } from "@/lib/ThemeContext";
import { themes, themeIds } from "@/lib/themes";

export default function ThemeSwitcher() {
  const { themeId, setTheme } = useTheme();
  const isDusk = themeId === "dusk-bloom";

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className="text-xs uppercase tracking-[0.1em] opacity-30 mr-1"
        style={{
          fontFamily: "var(--font-body)",
          color: isDusk ? "#F6F2EF" : "var(--color-neutral-dark)",
        }}
      >
        Direction
      </span>
      {themeIds.map((id) => {
        const t = themes[id];
        const isActive = themeId === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-body)",
              color: isActive
                ? isDusk ? "#F6F2EF" : "var(--color-neutral-dark)"
                : isDusk ? "rgba(246,242,239,0.4)" : "rgba(0,0,0,0.3)",
              background: isActive
                ? isDusk ? "rgba(246,242,239,0.08)" : "rgba(0,0,0,0.04)"
                : "transparent",
              borderRadius: "var(--radius-button)",
              borderBottom: isActive ? `2px solid ${t.primaryHex}` : "2px solid transparent",
            }}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{
                backgroundColor: t.primaryHex,
                opacity: isActive ? 1 : 0.5,
              }}
            />
            <span>{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
