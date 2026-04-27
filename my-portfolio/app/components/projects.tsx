"use client";

import { useLanguageContent } from "@/app/components/language-provider";

export function Projects() {
  const { content } = useLanguageContent();
  const { projects } = content;

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6600CC] dark:text-[#c7a3ff]">
              {projects.eyebrow}
            </p>
            <h2
              id="projects-title"
              className="mt-4 text-3xl font-semibold text-zinc-950 sm:text-4xl dark:text-white"
            >
              {projects.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {projects.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="group flex min-h-[360px] flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#6600CC] hover:shadow-xl hover:shadow-zinc-200/80 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-[#9b5cff] dark:hover:shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <span>{project.category}</span>
                  <time dateTime={project.year}>{project.year}</time>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-zinc-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {project.summary}
                </p>
              </div>
              <p className="mt-10 rounded-full bg-[#eff7ef] px-4 py-3 text-sm font-semibold text-[#003300] dark:bg-[#102310] dark:text-[#b7f5b7]">
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
