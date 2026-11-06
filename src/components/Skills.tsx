import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Layers,
  Sparkles,
  Zap,
  Users,
  Briefcase,
  X
} from "lucide-react";
import { TECHNICAL_SKILLS } from "../data";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Programming Languages":
      return <Code className="w-4 h-4 text-amber-500" />;
    case "Frontend & Mobile":
      return <Layout className="w-4 h-4 text-blue-500" />;
    case "Backend & APIs":
      return <Server className="w-4 h-4 text-brand-500" />;
    case "Cloud & Infrastructure":
      return <Cloud className="w-4 h-4 text-sky-500" />;
    case "Databases & Data":
      return <Database className="w-4 h-4 text-emerald-500" />;
    case "Security":
      return <ShieldCheck className="w-4 h-4 text-teal-500" />;
    case "Architecture & Engineering":
      return <Layers className="w-4 h-4 text-indigo-500" />;
    case "AI & Emerging Tools":
      return <Sparkles className="w-4 h-4 text-purple-500" />;
    case "Quality & Performance":
      return <Zap className="w-4 h-4 text-orange-500" />;
    case "Collaboration & Leadership":
      return <Users className="w-4 h-4 text-pink-500" />;
    case "Product & Workflow Experience":
      return <Briefcase className="w-4 h-4 text-cyan-500" />;
    default:
      return <Code className="w-4 h-4 text-brand-500" />;
  }
};

const FILTER_PILLS = [
  "All",
  "Programming Languages",
  "Frontend & Mobile",
  "Backend & APIs",
  "Cloud & Infrastructure",
  "Databases & Data",
  "Security",
  "AI & Emerging Tools",
  "Collaboration & Leadership"
];

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills = TECHNICAL_SKILLS.map((group) => {
    const matchingSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      skills: matchingSkills
    };
  }).filter((group) => {
    if (group.skills.length === 0) return false;
    if (activeCategory !== "All" && group.category !== activeCategory) return false;
    return true;
  });

  const totalFilteredSkills = filteredSkills.reduce(
    (acc, group) => acc + group.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="py-24 bg-neutral-50/70 dark:bg-neutral-950 transition-colors border-b border-neutral-200/70 dark:border-neutral-800/80 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Technical Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Skills & Ecosystem Mastery
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto">
            Categorized across languages, distributed cloud architectures, database tuning, security protocols, and AI tooling.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Search & Filter Toolbar - Symmetrical & Clean */}
        <div className="max-w-5xl mx-auto mb-12 space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                id="skills-search-input"
                placeholder="Search technologies (e.g. AWS, React, PostgreSQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-2xl glass-card text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-neutral-800 dark:text-neutral-100 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Status Count */}
            <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>Showing <strong>{totalFilteredSkills}</strong> technical proficiencies</span>
            </div>

          </div>

          {/* Symmetrical Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {FILTER_PILLS.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveCategory(pill)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide border transition-all cursor-pointer ${
                  activeCategory === pill
                    ? "bg-brand-600 border-brand-600 text-white shadow-sm"
                    : "glass-card text-neutral-600 dark:text-neutral-300 hover:border-brand-500/40"
                }`}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Symmetrical Grid of Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((group) => (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left h-full"
                >
                  <div>
                    {/* Header with Title & Badge */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100 dark:border-neutral-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 shrink-0">
                          {getCategoryIcon(group.category)}
                        </div>
                        <h3 className="font-display font-bold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base leading-tight">
                          {group.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-medium">
                        {group.skills.length}
                      </span>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.skills.map((skill) => {
                        const isMatch =
                          searchQuery &&
                          skill.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium font-sans transition-all cursor-default border ${
                              isMatch
                                ? "bg-brand-500 text-white border-brand-500 shadow-xs"
                                : "bg-neutral-50/80 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 border-neutral-200/80 dark:border-neutral-800 hover:border-brand-500/50"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>Verified Production Skill</span>
                    <span className="text-brand-500 font-semibold">• Active</span>
                  </div>

                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-sm text-neutral-500 font-mono">
                  No proficiencies matched "{searchQuery}". Try searching for React, AWS, or PostgreSQL.
                </p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
