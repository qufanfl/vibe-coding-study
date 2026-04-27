"use client";

import { useLanguageContent } from "@/app/components/language-provider";

export function Hero() {
  const { content } = useLanguageContent();
  const { hero } = content;

  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl items-center px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="max-w-5xl">
        <h1 className="text-5xl font-semibold leading-[1.02] text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
          {hero.title}
        </h1>
      </div>
    </section>
  );
}
