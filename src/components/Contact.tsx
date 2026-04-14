"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to API
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message! (Demo - form submission not yet implemented)",
    );
    setFormData({ name: "", email: "", message: "" });
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
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
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-800 rounded-lg shadow hover:shadow-md transition-shadow text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-800 rounded-lg shadow hover:shadow-md transition-shadow text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-800 rounded-lg shadow hover:shadow-md transition-shadow text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-900 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
