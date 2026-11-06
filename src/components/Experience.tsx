import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Zap,
  Award,
  ArrowUpRight,
  ShieldCheck,
  Users
} from "lucide-react";
import { WORK_EXPERIENCE } from "../data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-neutral-900/60 transition-colors border-b border-neutral-200/70 dark:border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Professional Experience & Client Engagements
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto">
            7+ years of engineering tenure delivering high-throughput platforms, cloud migrations, and technical team leadership.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Symmetrical Dual-Role Layout */}
        <div className="max-w-5xl mx-auto space-y-10">
          {WORK_EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="rounded-3xl glass-card overflow-hidden shadow-lg border border-neutral-200/90 dark:border-neutral-800 text-left"
            >
              {/* Card Header Bar */}
              <div className="p-6 sm:p-8 bg-neutral-50/70 dark:bg-neutral-900/90 border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.type === "client-engagement" ? (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                          🇨🇦 Client Engagement
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300 border border-brand-200 dark:border-brand-500/30">
                          Full-Time Core Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="text-neutral-300 dark:text-neutral-700">•</span>
                      <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 shadow-xs shrink-0 w-fit">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    <span>{exp.period}</span>
                  </div>

                </div>
              </div>

              {/* Card Body with Symmetrical Columns */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Bullets Grid (Symmetrical 2 Columns on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-neutral-50/60 dark:bg-neutral-900/50 border border-neutral-150 dark:border-neutral-800/80 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mt-0.5 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Strip */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mr-2">
                    Key Technologies:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
