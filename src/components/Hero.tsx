import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Linkedin,
  Github,
  CheckCircle2,
  Terminal,
  Activity,
  Server,
  Zap,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export function Hero({ onExploreProjects, onContactClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-neutral-50/50 dark:bg-neutral-950 transition-colors bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[140px] opacity-70" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Brampton, ON, Canada • Open to Senior / Full-Stack Roles</span>
              </div>
            </motion.div>

            {/* Headline and Title */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.12]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-500 dark:from-brand-400 dark:via-indigo-300 dark:to-purple-300">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-bold text-neutral-800 dark:text-neutral-200 tracking-tight">
                Full-Stack Developer & Technical Lead
              </p>
            </motion.div>

            {/* Concise Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed font-sans"
            >
              7+ years designing, building, enhancing, and deploying production web applications across fintech, IoT, e-commerce, and enterprise domains. Specialist in high-throughput cloud architectures (AWS ECS, SQS, SNS, RDS, Lambda) with 4 years of proven team leadership.
            </motion.p>

            {/* Quick Meta Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>20+ Production Web Apps Delivered</span>
              </div>
            </motion.div>

            {/* Symmetrical CTA Button Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-brand-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-semibold text-sm px-5 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>Get In Touch</span>
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-btn"
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-blue-50 dark:hover:bg-neutral-800 text-neutral-600 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-btn"
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors shadow-xs"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  id="hero-phone-btn"
                  className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-teal-50 dark:hover:bg-neutral-800 text-neutral-600 hover:text-teal-600 dark:text-neutral-300 dark:hover:text-teal-400 transition-colors shadow-xs"
                  title="Call Direct"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Symmetrical Architecture Console / Code HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative rounded-3xl glass-card overflow-hidden shadow-2xl border border-neutral-200/90 dark:border-neutral-800">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-100/80 dark:bg-neutral-900/90 border-b border-neutral-200 dark:border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono font-medium text-neutral-600 dark:text-neutral-400">
                  <Terminal className="w-3 h-3 text-brand-500" />
                  <span>riya-architect.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Console Body Content */}
              <div className="p-5 sm:p-6 font-mono text-xs text-left space-y-3.5 bg-neutral-950/95 text-neutral-200">
                
                <div className="text-neutral-500">
                  // Enterprise Technical Profile
                </div>

                <div className="space-y-1.5 leading-relaxed">
                  <div>
                    <span className="text-purple-400 font-semibold">const</span>{" "}
                    <span className="text-brand-300 font-bold">engineer</span>:{" "}
                    <span className="text-amber-300">SeniorFullStackLead</span> = &#123;
                  </div>
                  
                  <div className="pl-4 space-y-1 text-neutral-300">
                    <div>
                      <span className="text-neutral-400">totalExperience:</span>{" "}
                      <span className="text-emerald-400 font-bold">"7+ Years"</span>,
                    </div>
                    <div>
                      <span className="text-neutral-400">leadershipTrack:</span>{" "}
                      <span className="text-emerald-400 font-bold">"4 Years Coordination & Mentorship"</span>,
                    </div>
                    <div>
                      <span className="text-neutral-400">productionApps:</span>{" "}
                      <span className="text-sky-300 font-bold">20+</span> across{" "}
                      <span className="text-sky-300 font-bold">15+</span> client projects,
                    </div>
                    <div>
                      <span className="text-neutral-400">coreEcosystem:</span> [
                      <span className="text-amber-200">"TypeScript"</span>,{" "}
                      <span className="text-amber-200">"React"</span>,{" "}
                      <span className="text-amber-200">"Node.js"</span>,{" "}
                      <span className="text-amber-200">"PostgreSQL"</span>,{" "}
                      <span className="text-amber-200">"MongoDB"</span>],
                    </div>
                    <div>
                      <span className="text-neutral-400">cloudArchitecture:</span> [
                      <span className="text-teal-300">"AWS ECS"</span>,{" "}
                      <span className="text-teal-300">"SQS"</span>,{" "}
                      <span className="text-teal-300">"SNS"</span>,{" "}
                      <span className="text-teal-300">"Lambda"</span>,{" "}
                      <span className="text-teal-300">"RDS"</span>],
                    </div>
                    <div>
                      <span className="text-neutral-400">verifiedImpact:</span> &#123;
                    </div>
                    <div className="pl-4 text-emerald-400">
                      apiResponseSpeedup: <span className="font-bold">"25–30%"</span>,
                    </div>
                    <div className="pl-4 text-emerald-400">
                      pageLoadReduction: <span className="font-bold">"~30%"</span>,
                    </div>
                    <div>&#125;</div>
                  </div>
                  
                  <div>&#125;;</div>
                </div>

                {/* Live Console Output Card */}
                <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Client Engagement: Brampton, Ontario</span>
                  </div>
                  <span className="text-brand-400 font-semibold">Active Ready</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Symmetrical 6-Tile Key Performance Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 pt-8 border-t border-neutral-200/80 dark:border-neutral-800"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                id={`hero-metric-tile-${idx}`}
                className="p-4 rounded-2xl glass-card glass-card-hover flex flex-col justify-between text-left space-y-1.5"
              >
                <span className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-500 dark:from-brand-400 dark:to-indigo-300">
                  {stat.value}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
