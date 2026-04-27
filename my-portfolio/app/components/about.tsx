"use client";

import { useLanguageContent } from "@/app/components/language-provider";

export function About() {
  const { content } = useLanguageContent();
  const { about } = content;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6600CC] dark:text-[#c7a3ff]">
            {about.eyebrow}
          </p>
          <h2
            id="about-title"
            className="mt-4 text-3xl font-semibold text-zinc-950 sm:text-4xl dark:text-white"
          >
            {about.title}
          </h2>
        </div>
        <div className="space-y-8">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {about.description}
          </p>
          <ul
            className="grid gap-4 sm:grid-cols-3"
            aria-label={about.strengthsLabel}
          >
            {about.strengths.map((strength) => (
              <li
                key={strength}
                className="rounded-2xl border border-zinc-200 bg-[#fbfaf8] p-5 text-sm font-medium leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-[#080b08] dark:text-zinc-200"
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
