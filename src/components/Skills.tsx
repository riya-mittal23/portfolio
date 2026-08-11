import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Code, Layout, Server, Database, Cloud, Star } from "lucide-react";
import { TECHNICAL_SKILLS } from "../data";

// Match specific icons to categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Languages":
      return <Code className="w-5 h-5 text-amber-500" />;
    case "Frontend":
      return <Layout className="w-5 h-5 text-blue-500" />;
    case "Backend":
      return <Server className="w-5 h-5 text-brand-500" />;
    case "Databases":
      return <Database className="w-5 h-5 text-indigo-505 text-emerald-500" />;
    case "Cloud & DevOps":
      return <Cloud className="w-5 h-5 text-sky-500" />;
    case "Practices":
      return <Star className="w-5 h-5 text-purple-500" />;
    default:
      return <Code className="w-5 h-5 text-brand-500" />;
  }
};

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...TECHNICAL_SKILLS.map((c) => c.category)];

  // Filter skills based on search term and category
  const filteredSkills = TECHNICAL_SKILLS.map((group) => {
    const matchingSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...group,
      skills: matchingSkills
    };
  }).filter((group) => {
    // Filter out categories that are empty after search filtering
    if (group.skills.length === 0) return false;
    // Apply category filter if one is active
    if (activeCategory !== "All" && group.category !== activeCategory) return false;
    return true;
  });

  return (
    <section
      id="skills"
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors border-b border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 border-none">
            Skills & Toolbelt
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Input & Tab controls in one clean layout */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                id="skills-search-input"
                placeholder="Search skills (e.g., React, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-850 dark:text-neutral-200"
              />
            </div>

            {/* Category Selectors */}
            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start w-full overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  id={`skill-filter-${category.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide border transition-all shrink-0 cursor-pointer ${
                    activeCategory === category
                      ? "bg-brand-500 border-brand-500 text-white shadow-sm"
                      : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((group) => (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-800 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-neutral-100 dark:border-neutral-850">
                      <div className="p-2 rounded-xl bg-neutral-50 dark:bg-neutral-850 border border-neutral-100 dark:border-neutral-800">
                        {getCategoryIcon(group.category)}
                      </div>
                      <h3 className="font-display font-bold text-neutral-800 dark:text-neutral-200 text-lg">
                        {group.category}
                      </h3>
                    </div>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => {
                        // Highlight skill tag if it matches the query
                        const isMatch =
                          searchQuery &&
                          skill.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-default border ${
                              isMatch
                                ? "bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-500/30 scale-105"
                                : "bg-neutral-50 dark:bg-neutral-950/60 border-neutral-100 dark:border-neutral-850 text-neutral-700 dark:text-neutral-300 hover:border-brand-500 dark:hover:border-brand-500"
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tiny counter at the bottom */}
                  <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-850 flex justify-between items-center text-xs font-mono text-neutral-450 dark:text-neutral-500">
                    <span>Stack category</span>
                    <span>{group.skills.length} skills listed</span>
                  </div>

                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center"
              >
                <p className="text-neutral-500 dark:text-neutral-400">
                  No skills matched your search criteria. Try another keyword!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
