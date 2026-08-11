import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ArrowRight } from "lucide-react";
import { WORK_EXPERIENCE } from "../data";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-neutral-900 transition-colors border-b border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 border-none">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-[29px] sm:left-[39px] top-6 bottom-6 w-0.5 bg-neutral-154 dark:bg-neutral-800 bg-gradient-to-b from-brand-500 via-teal-500 to-neutral-200 dark:to-neutral-800" />

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                id={`experience-timeline-node-${exp.id}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Point */}
                <span className="absolute left-[-26px] sm:left-[-36px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white border-4 border-white dark:border-neutral-900 shadow-md ring-4 ring-brand-100 dark:ring-brand-500/10 shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </span>

                {/* Main Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-150 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all text-left">
                  
                  {/* Card Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-150 dark:border-neutral-850 pb-4 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-900 dark:text-neutral-50">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1">
                        <span className="text-brand-500 font-bold text-sm select-all">
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    {/* Date Tag */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300 border border-brand-100/50 dark:border-brand-500/20 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack used in this role */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200/50 dark:border-neutral-800">
                    <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-550 mr-2 self-center">
                      Key Stack:
                    </span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-100 dark:border-neutral-800"
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

      </div>
    </section>
  );
}
