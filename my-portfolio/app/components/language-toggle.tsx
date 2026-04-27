"use client";

import { useLanguageContent } from "@/app/components/language-provider";
import Image from "next/image";

export function LanguageToggle() {
  const { content, locale, toggleLocale } = useLanguageContent();
  const flagSrc = locale === "ko" ? "/flags/kr.svg" : "/flags/us.svg";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg shadow-sm transition hover:border-[#6600CC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6600CC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf8] dark:border-zinc-700 dark:bg-zinc-900 dark:focus-visible:ring-[#9b5cff] dark:focus-visible:ring-offset-[#080b08]"
      aria-label={content.languageToggle.label}
      suppressHydrationWarning
    >
      <Image
        src={flagSrc}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 rounded-full"
        aria-hidden="true"
        priority
      />
      <span className="sr-only">{locale === "ko" ? "Korean" : "English"}</span>
    </button>
  );
}
