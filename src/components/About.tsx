import { motion } from "motion/react";
import {
  Layers,
  Cpu,
  Radio,
  Database,
  Palette,
  ShieldCheck,
  TrendingUp,
  Users,
  Cloud,
  Zap,
  Target,
  FileText
} from "lucide-react";
import { PERSONAL_INFO, CORE_COMPETENCIES } from "../data";

// Helper to assign icons to competencies
const getCompetencyIcon = (name: string) => {
  switch (name) {
    case "Full-Stack Web Development":
      return <Layers className="w-5 h-5 text-brand-500" />;
    case "REST API Design & Integration":
      return <Cpu className="w-5 h-5 text-indigo-500" />;
    case "Real-Time Data Streaming":
      return <Radio className="w-5 h-5 text-pink-500" />;
    case "Database Optimization":
      return <Database className="w-5 h-5 text-blue-500" />;
    case "UI/UX Implementation":
      return <Palette className="w-5 h-5 text-teal-500" />;
    case "JWT & OAuth Authentication":
      return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
    case "Agile / Scrum Delivery":
      return <TrendingUp className="w-5 h-5 text-amber-500" />;
    case "Code Review & Mentorship":
      return <Users className="w-5 h-5 text-purple-500" />;
    case "Cloud Deployment (AWS / Azure)":
      return <Cloud className="w-5 h-5 text-sky-500" />;
    case "Performance Optimization":
      return <Zap className="w-5 h-5 text-orange-500" />;
    default:
      return <Target className="w-5 h-5 text-brand-500" />;
  }
};

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
       transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-neutral-900 transition-colors border-b border-neutral-100 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50">
            About Me & Summary
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Executive Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between"
          >
            <div className="bg-neutral-50 dark:bg-neutral-950 p-6 sm:p-8 rounded-3xl border border-neutral-150 dark:border-neutral-800/80 shadow-md relative group h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-brand-50 dark:bg-brand-500/10 text-brand-500">
                  <FileText className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 text-left">
                  Professional Journey
                </h3>
  
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed text-left font-sans">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Special country transition note */}
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 text-left">
                  <span>🚀 Seeking to bring full-stack expertise to a growth-oriented team in <strong>Canada</strong>.</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Core Competencies Interactive Grid */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 text-left pl-1">
              Core Competencies
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {CORE_COMPETENCIES.map((competency, idx) => (
                <motion.div
                  key={idx}
                  id={`competency-card-${idx}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-neutral-150 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm hover:shadow-md cursor-default text-left"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-800 shrink-0">
                    {getCompetencyIcon(competency)}
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                      {competency}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
