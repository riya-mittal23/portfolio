import { motion } from "motion/react";
import {
  GraduationCap,
  Award,
  Compass,
  Plane,
  Star,
  Shield,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";
import { EDUCATION_DATA, CERTIFICATIONS, EXTRACURRICULAR } from "../data";

export function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-neutral-900/60 transition-colors border-b border-neutral-200/70 dark:border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Credentials & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Academic Background, Certifications & Leadership
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto">
            Formal computer science degrees, professional developer certifications, and military-level leadership training.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* 3-Column Symmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: Formal Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-7 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left border border-neutral-200/90 dark:border-neutral-800"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-100">
                    Formal Education
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
                  Panjab Univ.
                </span>
              </div>

              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-150 dark:border-neutral-800 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {edu.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-display font-black bg-brand-600 text-white shadow-xs">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>90% scored in M.Sc. IT</span>
              <span className="text-emerald-500 font-semibold">High Distinction</span>
            </div>
          </motion.div>

          {/* Card 2: Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left border border-neutral-200/90 dark:border-neutral-800"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-100">
                    Certifications
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                  Verified
                </span>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-150 dark:border-neutral-800 flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-xl bg-white dark:bg-neutral-950 text-teal-600 dark:text-teal-400 shadow-xs shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-neutral-100 leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-0.5">
                        Professional Foundation Certification
                      </p>
                    </div>
                  </div>
                ))}

                <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 text-xs text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                  <strong>Continuous Learning:</strong> Hands-on exploration in Retrieval-Augmented Generation (RAG) architectures, AI agent workflows, and vector embeddings.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Java & Web Systems</span>
              <span className="text-teal-500 font-semibold">Certified</span>
            </div>
          </motion.div>

          {/* Card 3: Leadership & Extracurricular Disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 sm:p-7 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left border border-neutral-200/90 dark:border-neutral-800 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-100">
                    Leadership & Aviation
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  Cadet & Pilot
                </span>
              </div>

              <div className="space-y-4">
                {EXTRACURRICULAR.map((act) => (
                  <div
                    key={act.id}
                    className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/50 border border-neutral-150 dark:border-neutral-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                        {act.id === "pilot" ? <Plane className="w-3.5 h-3.5 text-amber-500" /> : <Shield className="w-3.5 h-3.5 text-brand-500" />}
                        <span>{act.activity}</span>
                      </h4>
                      {act.highlight && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold">
                          {act.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Military & Flight Training</span>
              <span className="text-amber-500 font-semibold">Exemplary</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
