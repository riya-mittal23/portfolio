import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Code2, Linkedin, Github } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Summary" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education & More" },
  { id: "contact", label: "Contact" }
];

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/85 dark:bg-neutral-950/85 backdrop-blur-md shadow-sm border-b border-neutral-100 dark:border-neutral-900"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => handleNavClick("hero")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/25 text-white shrink-0">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6" id="header-logo-icon" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
                RIYA
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 font-semibold tracking-wider">
                Full-Stack Dev
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 outline-none hover:text-neutral-950 dark:hover:text-white"
                  style={{
                    color: isActive ? "var(--color-brand-500)" : "rgb(115, 115, 115)"
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 rounded-lg -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utilities (Social links, Theme Switcher & Mobile Menu Toggle) */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
              title="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Actuator */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 md:hidden transition-colors"
            >
              {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    id={`mobile-nav-btn-${item.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${isActive
                        ? "bg-neutral-100 dark:bg-neutral-900 text-brand-500"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/60"
                      }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              
              <div className="pt-4 flex items-center gap-3 px-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
