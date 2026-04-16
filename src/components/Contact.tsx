"use client";

import { useState, useRef } from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/data/content";

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: "service_nm6smop",
  templateId: "template_5q29mc9",
  publicKey: "RMaT_LmwTUSznYAJB",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact Form Submission",
        },
        EMAILJS_CONFIG.publicKey,
      );

      setSendStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSendStatus("idle"), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setSendStatus("error");

      // Reset status after 3 seconds
      setTimeout(() => setSendStatus("idle"), 3000);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">
            Get In Touch
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, feel free to reach out. I'm always open to
                discussing new opportunities and interesting ideas.
              </p>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-6"
              >
                <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                Find me on
              </h4>
              <div className="flex items-center space-x-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-dark-200/80 dark:border-dark-700/80 bg-white/80 dark:bg-dark-800/80 hover:-translate-y-0.5 transition-all text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl border border-dark-200/80 dark:border-dark-700/80 bg-white/80 dark:bg-dark-800/80 hover:-translate-y-0.5 transition-all text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="elegant-card p-6 sm:p-8 fade-in-soft">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 font-semibold rounded-xl transition-all flex items-center justify-center ${
                  sendStatus === "success"
                    ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 text-white"
                    : sendStatus === "error"
                      ? "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white"
                      : isSending
                        ? "bg-primary-400 dark:bg-primary-500/80 cursor-not-allowed text-white"
                        : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 text-white"
                }`}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : sendStatus === "success" ? (
                  <>Message Sent!</>
                ) : sendStatus === "error" ? (
                  <>Failed - Try Again</>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
