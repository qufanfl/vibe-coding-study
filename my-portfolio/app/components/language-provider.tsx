"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Locale, siteContent } from "@/app/data/site-content";

type LanguageContextValue = {
  content: (typeof siteContent)[Locale];
  locale: Locale;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "ko";
  }

  const storedLocale = window.localStorage.getItem("locale") as Locale | null;

  return storedLocale ?? "ko";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      content: siteContent[locale],
      locale,
      toggleLocale: () => {
        setLocale((currentLocale) => {
          const nextLocale = currentLocale === "ko" ? "en" : "ko";

          window.localStorage.setItem("locale", nextLocale);
          return nextLocale;
        });
      },
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContent() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContent must be used inside LanguageProvider");
  }

  return context;
}
