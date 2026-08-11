import { motion } from "motion/react";
import { BookOpen, Award, Compass, ShieldAlert, Sparkles, Star, Calendar, ArrowRight } from "lucide-react";
import { EDUCATION_DATA, CERTIFICATIONS, EXTRACURRICULAR } from "../data";

export function Education() {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-neutral-900 transition-colors border-b border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Credentials & Interests
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 border-none">
            Education, Certifications & Activities
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Education - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 pl-1 mb-2">
              <BookOpen className="w-5 h-5 text-brand-500" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 text-left">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  id={`edu-card-${edu.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="p-5 sm:p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800 text-left relative group overflow-hidden"
                >
                  <div className="absolute right-0 top-0 w-24 h-24 bg-brand-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                  
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-450 border border-neutral-100 dark:border-neutral-800">
                      {edu.period}
                    </span>
                    <span className="inline-flex px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-display font-black bg-brand-500 text-white shadow-sm shrink-0">
                      Grade: {edu.score}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {edu.institution}, {edu.location}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3 pl-1 mb-2">
                <Award className="w-5 h-5 text-teal-500" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 text-left">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, cIdx) => (
                  <motion.div
                    key={cert.id}
                    id={`cert-bar-${cert.id}`}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: cIdx * 0.1 }}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-150 dark:border-neutral-800 text-left"
                  >
                    <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-800 text-teal-500 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-semibold text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Awesome Leadership / Cadet pilot - 7 cols */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <div className="flex items-center gap-3 pl-1 mb-2">
              <Compass className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 text-left">
                Leadership & Extracurriculars
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {EXTRACURRICULAR.map((act, idy) => (
                <motion.div
                  key={act.id}
                  id={`extra-card-${act.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idy * 0.15 }}
                  className={`p-6 sm:p-8 rounded-3xl text-left border relative overflow-hidden group ${
                    act.id === "pilot"
                      ? "bg-gradient-to-br from-neutral-50 to-brand-50/20 dark:from-neutral-950 dark:to-brand-500/5 border-brand-200/50 dark:border-brand-500/20 shadow-md"
                      : "bg-neutral-50 dark:bg-neutral-950 border-neutral-150 dark:border-neutral-800 shadow-sm"
                  }`}
                >
                  {/* Highlight corner visual */}
                  {act.id === "pilot" && (
                    <div className="absolute top-0 right-0 p-4 shrink-0">
                      <span className="inline-flex gap-1 items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
                        <Star className="w-3 h-3 fill-amber-500" /> Unique Highlight
                      </span>
                    </div>
                  )}

                  {/* Icon of Cadet or Flight */}
                  <div className="flex items-start gap-4 mt-2">
                    <div className={`p-3 rounded-2xl shrink-0 border ${
                      act.id === "pilot"
                        ? "bg-brand-500/10 text-brand-500 border-brand-500/20"
                        : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-100 dark:border-neutral-800"
                    }`}>
                      <Compass className="w-6 h-6" />
                    </div>
                    
                    <div className="space-y-2 max-w-lg">
                      <h4 className="font-display font-extrabold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100">
                        {act.activity}
                      </h4>
                      
                      {act.highlight && (
                        <p className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                          {act.highlight}
                        </p>
                      )}

                      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                        {act.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative background biplane layout overlay */}
                  <div className="absolute bottom-[-15px] right-[-10px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-105 transition-transform duration-500">
                    <Compass className="w-48 h-48" />
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Seeking Canada Opportunity visual footnote card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-teal-50/30 dark:bg-neutral-950 border border-teal-100/30 dark:border-teal-500/10 text-left flex items-start gap-3 mt-6"
            >
              <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 animate-ping shrink-0" />
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-brand-100/90 leading-relaxed font-sans">
                Riya holds a strong, formal academic background with a scored aggregate of <strong>90% in M.Sc. IT</strong> and brings military cadet-level discipline and organization to engineering high-performance software.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
