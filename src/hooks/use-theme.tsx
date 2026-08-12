import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

type Mode = "archive" | "cinematic";

const ThemeContext = createContext<{ mode: Mode; toggle: () => void }>({
  mode: "archive",
  toggle: () => {},
});

const STORAGE_KEY = "first-dawn-mode";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [override, setOverride] = useState<Mode | null>(null);
  // Emotional pacing: the home experience opens cinematic, the research
  // sections read as archive pages — unless the visitor chooses otherwise.
  const mode: Mode = override ?? (pathname === "/" ? "cinematic" : "archive");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Mode | null;
    if (stored === "cinematic" || stored === "archive") setOverride(stored);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "cinematic");
  }, [mode]);

  const toggle = useCallback(() => {
    const next: Mode = mode === "archive" ? "cinematic" : "archive";
    window.localStorage.setItem(STORAGE_KEY, next);
    setOverride(next);
  }, [mode]);

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
