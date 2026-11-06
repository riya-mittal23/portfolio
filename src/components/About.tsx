import { motion } from "motion/react";
import {
  Layers,
  Cpu,
  Radio,
  Database,
  ShieldCheck,
  TrendingUp,
  Users,
  Cloud,
  Zap,
  Sparkles,
  MapPin,
  CheckCircle2,
  Award,
  ArrowUpRight
} from "lucide-react";
import { PERSONAL_INFO, CORE_COMPETENCIES } from "../data";

const getCompetencyIcon = (name: string) => {
  switch (name) {
    case "Full-Stack Web Development":
      return <Layers className="w-4 h-4 text-brand-500" />;
    case "RESTful API Design & Integration":
      return <Cpu className="w-4 h-4 text-indigo-500" />;
    case "Cloud & AWS Services (ECS, S3, RDS, Lambda)":
      return <Cloud className="w-4 h-4 text-sky-500" />;
    case "Event-Driven Architecture (SQS & SNS)":
      return <Zap className="w-4 h-4 text-amber-500" />;
    case "Database Optimization (PostgreSQL & MongoDB)":
      return <Database className="w-4 h-4 text-emerald-500" />;
    case "Real-Time Telemetry & MQTT Protocol":
      return <Radio className="w-4 h-4 text-pink-500" />;
    case "Security, JWT & Role-Based Access Control (RBAC)":
      return <ShieldCheck className="w-4 h-4 text-teal-500" />;
    case "Team Leadership & Code Review (4+ Years)":
      return <Users className="w-4 h-4 text-purple-500" />;
    case "AI-Assisted Engineering & RAG Fundamentals":
      return <Sparkles className="w-4 h-4 text-cyan-500" />;
    case "Performance Optimization & Root-Cause Analysis":
      return <TrendingUp className="w-4 h-4 text-rose-500" />;
    default:
      return <Layers className="w-4 h-4 text-brand-500" />;
  }
};

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-neutral-900/60 transition-colors border-b border-neutral-200/70 dark:border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Executive Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Background & Architectural Philosophy
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Bridging complex business domains with resilient backend infrastructure, high-fidelity UI engineering, and cross-functional leadership.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Bento Grid Layout (Symmetric 12-Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Executive Summary (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-between p-7 sm:p-8 rounded-3xl glass-card text-left"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-500 inline-block" />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400">
                    Professional Summary
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                  7+ Years Experience
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-neutral-50 leading-snug">
                Full-Stack Developer with Proven Scale & Team Leadership
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>

              {/* Highlights Pill Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-150 dark:border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                    20+ production web apps across 15+ client projects
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-150 dark:border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                    4 years technical coordination & mentorship
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Card */}
            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono">
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-300 font-semibold">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>Brampton, Ontario, Canada</span>
              </div>
              <span className="hidden sm:inline">Certified Java Foundation</span>
            </div>
          </motion.div>

          {/* Right Bento Column: 4 Architecture Feature Tiles (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tile 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Cloud & Serverless
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Deep experience with AWS ECS, Fargate, EC2, RDS, Lambda, and event queues with SQS & SNS.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-semibold text-sky-600 dark:text-sky-400">
                AWS Production-Grade
              </div>
            </motion.div>

            {/* Tile 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-5 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Data Optimization
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Strategic PostgreSQL indexing & MongoDB aggregation pipelines delivering 25–30% latency reduction.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                25–30% Speedup
              </div>
            </motion.div>

            {/* Tile 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-5 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Tech Coordination
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  4 years steering agile teams, conducting code reviews, aligning API contracts, and mentoring peers.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-semibold text-purple-600 dark:text-purple-400">
                4 Years Leadership
              </div>
            </motion.div>

            {/* Tile 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="p-5 rounded-3xl glass-card glass-card-hover flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Real-Time & MQTT
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Sub-second bidirectional data streaming for multi-site IoT telemetry with zero UI frame lag.
                </p>
              </div>
              <div className="pt-3 text-[11px] font-mono font-semibold text-amber-600 dark:text-amber-400">
                Sub-Second Streams
              </div>
            </motion.div>

          </div>

        </div>

        {/* Symmetrical Core Competencies Row */}
        <div className="mt-14 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-100">
              Core Technical Competencies
            </h3>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              10 Key Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {CORE_COMPETENCIES.map((competency, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="p-3.5 rounded-2xl glass-card glass-card-hover flex items-center gap-3 text-left"
              >
                <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
                  {getCompetencyIcon(competency)}
                </div>
                <span className="font-sans font-semibold text-xs text-neutral-800 dark:text-neutral-200 leading-snug">
                  {competency}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
