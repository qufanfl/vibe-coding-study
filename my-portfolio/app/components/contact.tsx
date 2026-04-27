"use client";

import { useLanguageContent } from "@/app/components/language-provider";

export function Contact() {
  const { content } = useLanguageContent();
  const { contact } = content;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#003300] py-24 text-white dark:bg-[#071507]"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9c2ff]">
            {contact.eyebrow}
          </p>
          <h2 id="contact-title" className="mt-4 text-4xl font-semibold sm:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            {contact.description}
          </p>
          <a
            href="mailto:hello@sugyeonghyeon.design"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#003300] transition hover:bg-[#d9c2ff] hover:text-[#330066] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003300]"
          >
            {contact.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
