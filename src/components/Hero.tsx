import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, Download, MapPin, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export function Hero({ onExploreProjects, onContactClick }: HeroProps) {
  // Container variant for staggered text fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      {/* Decorative background vectors representing a full stack grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-neutral-300/30 dark:bg-neutral-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Textholder */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Tag indicator */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-100 border border-brand-100 dark:border-brand-500/25">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Available for Roles in Canada
              </span>
            </motion.div>

            {/* Developer Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-neutral-800 dark:text-neutral-200">
                {PERSONAL_INFO.title}
              </p>
            </motion.div>

            {/* High level quick descriptive outline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed font-sans"
            >
              Four years designing, building, and deploying ultra-scalable full-stack applications. Specialized in high-throughput IoT networks, optimized MERN architecture, and lightning-fast APIs.
            </motion.p>

            {/* Location indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 font-mono"
            >
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-semibold text-sm px-6 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get In touch</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-email-link"
                className="inline-flex items-center gap-2 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-zinc-100 dark:hover:bg-neutral-905 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                title="Email direct"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                id="hero-phone-link"
                className="inline-flex items-center gap-2 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-zinc-100 dark:hover:bg-neutral-905 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                title="Call direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>

          </motion.div>

          {/* Right Column: Dynamic Visual Showcase with exact metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-xl overflow-hidden group">
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <span className="font-mono font-bold text-sm">JS</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-neutral-800 dark:text-neutral-200 text-sm">Key Performance Records</h3>
                  <p className="text-xs text-neutral-500 font-mono">Verified in production environments</p>
                </div>
              </div>

              {/* Grid of resume key metrics */}
              <div className="grid grid-cols-2 gap-4">
                {PERSONAL_INFO.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    id={`stat-box-${i}`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-150 dark:border-neutral-800 flex flex-col space-y-1 text-left"
                  >
                    <span className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-brand-500 to-purple-500">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 leading-tight">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Little interactive component overview box */}
              <div className="mt-6 p-3 rounded-xl bg-orange-50/40 dark:bg-amber-500/5 border border-amber-100/50 dark:border-amber-500/10 flex items-start gap-2 text-left">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0 animate-ping" />
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Completed <strong>20+ scalable</strong> applications. Specializing in standardising backend microservices, boosting customer retention, and low-latency IoT interfaces.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
