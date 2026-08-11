/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function MainApp() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Active Section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const offset = 120; // safe top margin

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("hero");
  };

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 selection:bg-brand-500 selection:text-white transition-colors overflow-x-hidden font-sans">
      {/* Header element */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Container */}
      <main>
        {/* Hero Landing */}
        <Hero
          onExploreProjects={() => navigateToSection("projects")}
          onContactClick={() => navigateToSection("contact")}
        />

        {/* Executive Summary & Competencies */}
        <About />

        {/* Skills Tagbelt */}
        <Skills />

        {/* Work Timeline */}
        <Experience />

        {/* Portfolio Showcases */}
        <Projects />

        {/* Education, Certifications & Cadet Interests */}
        <Education />

        {/* Messaging & Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800/80 py-10 transition-colors text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-xs font-black">
              R
            </div>
            <span className="font-display font-extrabold text-lg text-neutral-900 dark:text-neutral-50">
              RIYA
            </span>
          </div>

          <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans flex flex-col sm:items-end gap-1 text-center sm:text-right">
            <p className="flex items-center justify-center sm:justify-end gap-1.5 font-medium">
              <span>Riya's Portfolio — All rights reserved</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
            </p>
            {/* <p className="font-mono text-[11px] text-neutral-400">
              Built with React, Vite, Tailwind CSS & Framer Motion
            </p> */}
          </div>

        </div>
      </footer>

      {/* Floating button scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scrollTopBtn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            id="scroll-to-top-btn"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-500 hover:bg-brand-605 active:bg-brand-700 text-white shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all text-sm shrink-0 flex items-center justify-center border-none"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

