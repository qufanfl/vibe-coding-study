import { About } from "@/app/components/about";
import { Contact } from "@/app/components/contact";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { LanguageProvider } from "@/app/components/language-provider";
import { Projects } from "@/app/components/projects";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fbfaf8] text-zinc-950 transition-colors dark:bg-[#080b08] dark:text-zinc-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
