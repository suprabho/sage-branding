"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type ThemeId, type ThemeConfig, themes } from "./themes";

interface ThemeContextValue {
  themeId: ThemeId;
  theme: ThemeConfig;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>("grounded");

  useEffect(() => {
    document.body.setAttribute("data-theme", themeId);
  }, [themeId]);

  const value: ThemeContextValue = {
    themeId,
    theme: themes[themeId],
    setTheme: setThemeId,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
