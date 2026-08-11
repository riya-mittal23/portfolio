import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
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

    // Basic confirmation checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out all mandatory fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        // URLSearchParams sets Content-Type: application/x-www-form-urlencoded
        // which is a "simple" header — fully compatible with no-cors.
        // Apps Script reads fields via e.parameter.name, e.parameter.email, etc.
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      // no-cors responses are opaque; treat reaching here as success
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setErrorMessage("Failed to send your message. Please try again or reach out directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-500 uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 dark:text-neutral-50 border-none">
            Contact & Hiring Inquiries
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Column 1: Directory details & channels (5 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-150 dark:border-neutral-800 shadow-md h-full flex flex-col justify-between text-left">
              
              <div className="space-y-6">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50">
                  Directory Channels
                </h3>
  
                <p className="text-sm font-medium text-neutral-550 dark:text-neutral-300 leading-relaxed font-sans mb-6">
                  Ready to connect regarding MERN Full-Stack roles, distributed architecture, or performance contracting. Currently located in India, preparing for new career options in Canada.
                </p>

                {/* Direct Channel Anchors */}
                <div className="space-y-4">
                  
                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    id="contact-email-card"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-850/50 border border-neutral-100 dark:border-neutral-830 group transition-all"
                  >
                    <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-brand-500 shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Email Address
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200 select-all truncate">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    id="contact-phone-card"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-850/50 border border-neutral-100 dark:border-neutral-830 group transition-all"
                  >
                    <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-teal-500 shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Direct Call
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200 select-all truncate">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location Map Pin */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-830">
                    <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-amber-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Current & Intended Location
                      </span>
                      <span className="block text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-150 leading-tight">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-850">
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-550 leading-relaxed block">
                  🛡️ Rest assured, metrics and records matches original documentation precisely.
                </span>
              </div>

            </div>
          </div>

          {/* Column 2: Interactive inquiry form (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-neutral-150 dark:border-neutral-800 shadow-md h-full text-left">
              
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-50 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="block text-xs font-mono font-bold tracking-wide uppercase text-neutral-450 dark:text-neutral-400">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your professional name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-805 bg-neutral-50 dark:bg-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-850 dark:text-neutral-150 transition-all font-sans"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="block text-xs font-mono font-bold tracking-wide uppercase text-neutral-450 dark:text-neutral-400">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-805 bg-neutral-50 dark:bg-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-850 dark:text-neutral-150 transition-all font-sans"
                    required
                  />
                </div>

                {/* Subject (Optional) */}
                <div className="space-y-1.5">
                  <label htmlFor="subject-input" className="block text-xs font-mono font-bold tracking-wide uppercase text-neutral-450 dark:text-neutral-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Hiring / Project Partnership..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-805 bg-neutral-50 dark:bg-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-850 dark:text-neutral-150 transition-all font-sans"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-xs font-mono font-bold tracking-wide uppercase text-neutral-450 dark:text-neutral-400">
                    Message Body <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your proposal or request here..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-805 bg-neutral-50 dark:bg-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-850 dark:text-neutral-150 transition-all font-sans resize-none"
                    required
                  />
                </div>

                {/* Error Banner Container */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-655 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button + Inline Success popup */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 disabled:opacity-50 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{isSubmitting ? "Delivering..." : "Send Secure Message"}</span>
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
                        <span>Message sent successfully!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
