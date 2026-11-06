import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, MessageSquare, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SHEET_URL =
    "https://script.google.com/macros/s/AKfycbytbTNWFHQpsOKyxgkybA5izofoWr4tvLAhHhit4_PpzwEqnX8uhXJudBg28hRk1FiVoA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setErrorMessage("Failed to send message. Please contact directly via email or phone.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-neutral-50/70 dark:bg-neutral-950 transition-colors bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300 border border-brand-100 dark:border-brand-500/20">
            <span>Direct Connection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto">
            Available for Senior / Full-Stack engineering roles, technical architecture, and high-impact distributed systems in Canada.
          </p>
          <div className="w-12 h-1 bg-brand-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Symmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Column 1: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card text-left border border-neutral-200/90 dark:border-neutral-800">
            <div className="space-y-6">
              
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-brand-600 dark:text-brand-400">
                  Directory Details
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50">
                  Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans">
                  Direct pathways to reach me for interviews, consultations, or technical collaborations.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-3">
                
                {/* Phone Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-teal-50/50 dark:hover:bg-neutral-800/80 border border-neutral-150 dark:border-neutral-800 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-950 text-teal-600 dark:text-teal-400 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Canada Direct / WhatsApp
                    </span>
                    <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 font-mono select-all">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-brand-50/50 dark:hover:bg-neutral-800/80 border border-neutral-150 dark:border-neutral-800 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-950 text-brand-600 dark:text-brand-400 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Email Address
                    </span>
                    <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 select-all truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-blue-50/50 dark:hover:bg-neutral-800/80 border border-neutral-150 dark:border-neutral-800 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-950 text-blue-600 dark:text-blue-400 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      LinkedIn Network
                    </span>
                    <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      linkedin.com/in/riya232
                    </span>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 border border-neutral-150 dark:border-neutral-800 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Code Repositories
                    </span>
                    <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                      github.com/riya-mittal23
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-150 dark:border-neutral-800">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-neutral-950 text-amber-500 shadow-xs shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      Physical Base
                    </span>
                    <span className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Timezone: Eastern Time (ET)</span>
              <span className="text-emerald-500 font-semibold">• Ready to Onboard</span>
            </div>
          </div>

          {/* Column 2: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between text-left border border-neutral-200/90 dark:border-neutral-800">
            <div>
              <div className="space-y-1.5 mb-6">
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-brand-600 dark:text-brand-400">
                  Send a Message
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50">
                  Direct Inquiries & Hiring Discussion
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 2-Column Symmetrical Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-xs font-mono font-semibold uppercase text-neutral-500">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-neutral-800 dark:text-neutral-100 transition-all font-sans"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-xs font-mono font-semibold uppercase text-neutral-500">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-neutral-800 dark:text-neutral-100 transition-all font-sans"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject-input" className="block text-xs font-mono font-semibold uppercase text-neutral-500">
                    Subject / Role Interest
                  </label>
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior Full-Stack Developer Opportunity"
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-neutral-800 dark:text-neutral-100 transition-all font-sans"
                  />
                </div>

                {/* Message Body */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-xs font-mono font-semibold uppercase text-neutral-500">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, team, and technology challenges you're tackling..."
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-neutral-800 dark:text-neutral-100 transition-all font-sans resize-none"
                    required
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 disabled:opacity-50 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-brand-500/20 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-sans font-bold text-sm p-1"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Message received. Will reply promptly!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400">
              🔒 Form transmits directly via secure endpoint.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
