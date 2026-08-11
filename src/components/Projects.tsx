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
  Tag,
  Gauge
} from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

// Helper to resolve specific icons per category
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "fintech":
      return <Wallet className="w-5 h-5 text-teal-500" />;
    case "iot":
      return <Wifi className="w-5 h-5 text-indigo-505 text-amber-500" />;
    case "ecommerce":
      return <ShoppingCart className="w-5 h-5 text-pink-500" />;
    case "platform":
      return <Compass className="w-5 h-5 text-sky-500" />;
    default:
      return <Layers className="w-5 h-5 text-brand-500" />;
  }
};

const CATEGORIES = ["all", "fintech", "iot", "ecommerce", "platform"];

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
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors border-b border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Product Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 border-none">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Tab Filter Controllers */}
        <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`project-tab-${cat}`}
              onClick={() => {
                setFilter(cat);
                setExpandedProjectId(null); // Reset expands when filtering
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all cursor-pointer capitalize ${
                filter === cat
                  ? "bg-brand-500 border-brand-500 text-white shadow-md"
                  : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/80"
              }`}
            >
              {cat === "all" ? "View All" : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <motion.div
           layout
           className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start"
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
                  className="rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 shadow-md hover:shadow-lg transition-all text-left overflow-hidden flex flex-col justify-between"
                >
                  
                  {/* Card Visual Header */}
                  <div className="p-6 pb-2">
                    
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-100/30 dark:border-brand-500/10">
                        {getCategoryIcon(proj.category)}
                        <span>{proj.category}</span>
                      </span>
                      
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        Project #{idx + 1}
                      </span>
                    </div>

                    {/* Headline Info */}
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 mb-1">
                      {proj.name}
                    </h3>
                    
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 leading-snug mb-5">
                      {proj.tagline}
                    </p>

                    {/* High-Contrast Impact Metrics Callout Block (Mandatory data inclusion) */}
                    {proj.metrics.length > 0 && (
                      <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-brand-500/5 border border-teal-100/50 dark:border-brand-500/10 flex items-start gap-3 mb-5">
                        <div className="p-1.5 rounded-lg bg-teal-500/10 text-brand-500 mt-0.5 shrink-0">
                          <Gauge className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <span className="block text-xs font-mono font-bold tracking-wider text-brand-600 dark:text-brand-300 uppercase">
                            Performance Impact
                          </span>
                          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans mt-0.5 leading-relaxed">
                            {proj.metrics[0]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tech Stacks Tag Area */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xl text-xs font-mono font-medium bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-850"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Expand-Collapse Area */}
                  <div className="border-t border-neutral-100 dark:border-neutral-850 px-6 py-4 bg-neutral-50/50 dark:bg-neutral-900/40">
                    <button
                      id={`project-expand-toggle-${proj.id}`}
                      onClick={() => toggleExpand(proj.id)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 focus:outline-none transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Implementation Details" : "Show Implementation Details"}</span>
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
                          className="overflow-hidden mt-4"
                        >
                          <ul className="space-y-2.5 pt-2 mb-2 pl-1 border-l-2 border-brand-200 dark:border-brand-500/30">
                            {proj.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 pl-3">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0 animate-pulse" />
                                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans text-left">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                          </ul>
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
