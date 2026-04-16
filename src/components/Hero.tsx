 "use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Hero() {
  const handleGetInTouchClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center fade-in-soft">
          {/* Greeting */}
          <p className="text-primary-700 dark:text-primary-300 text-base sm:text-lg font-semibold tracking-wide mb-5">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-dark-900 dark:text-white mb-5">
            {siteConfig.name}
          </h1>

          {/* Title */}
          <p className="text-2xl sm:text-3xl font-medium text-dark-600 dark:text-dark-300 mb-7">
            {siteConfig.title}
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed mb-11">
            {siteConfig.tagline}
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-green-200 dark:border-green-900/50 bg-green-50/80 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium mb-11">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {siteConfig.status}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-children">
            <Link
              href="#projects"
              className="btn-primary"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="#contact"
              onClick={handleGetInTouchClick}
              className="btn-secondary"
            >
              Get In Touch
            </Link>

            <a
              href="/pdf/CV%20Rizaldi%20Akbar.pdf"
              download="CV Rizaldi Akbar.pdf"
              className="btn-secondary"
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto text-dark-400 dark:text-dark-500 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
