"use client";

import { useTheme } from "@/lib/ThemeContext";
import { themes, themeIds } from "@/lib/themes";

export default function ThemeSwitcher() {
  const { themeId, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      {themeIds.map((id) => {
        const t = themes[id];
        const isActive = themeId === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            className={`
              flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium
              transition-all duration-200 cursor-pointer
              ${isActive
                ? "bg-[var(--color-surface)] shadow-md ring-2"
                : "bg-transparent hover:bg-[var(--color-surface)]/60"
              }
            `}
            style={{
              fontFamily: "var(--font-body)",
              color: isActive ? t.primaryHex : "var(--color-neutral-dark)",
              borderColor: isActive ? t.primaryHex : "transparent",
              ...(isActive ? { boxShadow: `0 0 0 2px ${t.primaryHex}` } : {}),
            }}
          >
            <span
              className="w-4 h-4 rounded-full shrink-0 ring-1 ring-black/10"
              style={{ backgroundColor: t.primaryHex }}
            />
            <span>{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
