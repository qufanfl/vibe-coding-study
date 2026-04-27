"use client";

import { LanguageToggle } from "@/app/components/language-toggle";
import { useLanguageContent } from "@/app/components/language-provider";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { useEffect, useState } from "react";

const sectionIds = ["about", "projects", "contact"] as const;

export function Header() {
  const { content } = useLanguageContent();
  const [activeSection, setActiveSection] =
    useState<(typeof sectionIds)[number]>("about");
  const navigation = [
    { id: "about", label: content.navigation.about, href: "#about" },
    { id: "projects", label: content.navigation.projects, href: "#projects" },
    { id: "contact", label: content.navigation.contact, href: "#contact" },
  ];

  useEffect(() => {
    let frameId = 0;

    function updateActiveSection() {
      const scrollPoint = window.scrollY + window.innerHeight * 0.35;
      const nextSection =
        sectionIds.findLast((sectionId) => {
          const section = document.getElementById(sectionId);

          return section ? scrollPoint >= section.offsetTop : false;
        }) ?? "about";

      setActiveSection(nextSection);
    }

    function handleScroll() {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#fbfaf8]/90 backdrop-blur dark:border-zinc-800 dark:bg-[#080b08]/90">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:flex-nowrap sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="text-sm font-bold uppercase tracking-[0.28em] text-[#003300] transition hover:text-[#6600CC] dark:text-[#b7f5b7] dark:hover:text-[#c7a3ff]"
        >
          SUGYEONG HYEON
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <ul className="flex max-w-[calc(100vw-236px)] items-center gap-1 overflow-x-auto rounded-full border border-zinc-200 bg-white p-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6600CC] sm:px-4 ${
                    activeSection === item.id
                      ? "font-extrabold text-[#6600CC] dark:text-[#b7f5b7]"
                      : "font-medium text-zinc-600 hover:bg-zinc-100 hover:text-[#6600CC] dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-[#c7a3ff]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
