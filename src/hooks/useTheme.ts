import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
const themeKey = "theme";

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStartingTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem(themeKey);
  if (isTheme(saved)) return saved;

  return getSystemTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStartingTheme());

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, setTheme, toggleTheme };
}
