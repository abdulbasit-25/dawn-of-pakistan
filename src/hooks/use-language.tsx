import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type Language = "en" | "ur";

const LanguageContext = createContext<{ language: Language; toggle: () => void }>({
  language: "en",
  toggle: () => {},
});

const STORAGE_KEY = "first-dawn-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === "en" || stored === "ur") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "ur" ? "ur" : "en";
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggle = useCallback(() => {
    setLanguage((current) => (current === "en" ? "ur" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggle }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
