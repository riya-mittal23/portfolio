import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Wallet,
  Wifi,
  ShoppingCart,
  Compass,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Gauge,
  Building2,
  Bot,
  ExternalLink,
  Code2
} from "lucide-react";
import { PROJECTS } from "../data";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "fintech":
      return <Wallet className="w-4 h-4 text-emerald-500" />;
    case "iot":
      return <Wifi className="w-4 h-4 text-amber-500" />;
    case "ecommerce":
      return <ShoppingCart className="w-4 h-4 text-pink-500" />;
    case "platform":
      return <Compass className="w-4 h-4 text-sky-500" />;
    case "ai":
      return <Bot className="w-4 h-4 text-purple-500" />;
    default:
      return <Layers className="w-4 h-4 text-brand-500" />;
  }
};

const CATEGORIES = [
  { id: "all", label: "All Systems (6)" },
  { id: "fintech", label: "Fintech & Token" },
  { id: "iot", label: "IoT Telemetry" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "platform", label: "Platform & Auth" },
  { id: "ai", label: "AI & RAG" }
];

export function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 bg-neutral-50/70 dark:bg-neutral-950 transition-colors border-b border-neutral-200/70 dark:border-neutral-800/80 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Featured Systems & Production Platforms
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto">
            Production-grade systems built for fintech wallets, real-time device telemetry, e-commerce bidding, and retrieval-augmented generation.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Tab Filters - Symmetrical & Clean */}
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`project-tab-${cat.id}`}
              onClick={() => {
                setFilter(cat.id);
                setExpandedProjectId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-brand-600 border-brand-600 text-white shadow-sm"
                  : "glass-card text-neutral-600 dark:text-neutral-300 hover:border-brand-500/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Symmetrical Grid */}
        <motion.div
           layout
           className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const isExpanded = expandedProjectId === proj.id;
              
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl glass-card glass-card-hover text-left overflow-hidden flex flex-col justify-between h-full border border-neutral-200/90 dark:border-neutral-800"
                >
                  
                  {/* Top Section */}
                  <div className="p-6 sm:p-7 space-y-4">
                    
                    {/* Header Row: Category Badge + Client + Index */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                          {getCategoryIcon(proj.category)}
                          <span>{proj.category}</span>
                        </span>

                        {proj.client && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-200 dark:border-brand-500/20">
                            <Building2 className="w-3 h-3" />
                            <span>{proj.client}</span>
                          </span>
                        )}
                      </div>
                      
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        SYSTEM #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Headline and Tagline */}
                    <div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 tracking-tight">
                        {proj.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">
                        {proj.tagline}
                      </p>
                    </div>

                    {/* High-Contrast Impact Metrics Callout Block */}
                    {proj.metrics.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-brand-50/60 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 flex items-start gap-3">
                        <div className="p-1 rounded-lg bg-brand-500/15 text-brand-600 dark:text-brand-400 mt-0.5 shrink-0">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <span className="block text-[10px] font-mono font-bold tracking-widest text-brand-600 dark:text-brand-300 uppercase">
                            Verified Production Metric
                          </span>
                          <p className="text-xs font-sans font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5 leading-relaxed">
                            {proj.metrics[0]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Architectural Feature Bullets Preview */}
                    <ul className="space-y-2 pt-1 text-xs text-neutral-600 dark:text-neutral-300 font-sans">
                      {proj.bullets.slice(0, 2).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Bottom Strip: Tech Stack & Accordion */}
                  <div className="border-t border-neutral-100 dark:border-neutral-800/80 px-6 py-4 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
                    
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg text-[10px] font-mono font-medium text-neutral-400 self-center">
                          +{proj.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Expand Details Trigger */}
                    <button
                      id={`project-expand-toggle-${proj.id}`}
                      onClick={() => toggleExpand(proj.id)}
                      className="flex items-center justify-between w-full pt-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 focus:outline-none transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Full Implementation Architecture" : "View Full Implementation Architecture"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`project-details-${proj.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pt-2"
                        >
                          <div className="p-3.5 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                              All Architecture & Implementation Deliverables:
                            </span>
                            <ul className="space-y-2">
                              {proj.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                                  <span className="text-brand-500 font-bold shrink-0">→</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>

                            {proj.metrics.length > 1 && (
                              <div className="pt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 border-t border-neutral-100 dark:border-neutral-800">
                                <strong>Additional Metric:</strong> {proj.metrics[1]}
                              </div>
                            )}

                            <div className="pt-2 flex flex-wrap gap-1 border-t border-neutral-100 dark:border-neutral-800">
                              <span className="text-[10px] font-mono text-neutral-400 mr-1 self-center">All Stacks:</span>
                              {proj.technologies.map((t) => (
                                <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
