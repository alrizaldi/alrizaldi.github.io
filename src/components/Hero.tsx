import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-primary-600 dark:text-primary-400 text-lg font-medium mb-4">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-dark-900 dark:text-white mb-4">
            {siteConfig.name}
          </h1>

          {/* Title */}
          <p className="text-2xl sm:text-3xl text-dark-600 dark:text-dark-300 mb-6">
            {siteConfig.title}
          </p>

          {/* Tagline */}
          <p className="text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto mb-10">
            {siteConfig.tagline}
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-10">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            {siteConfig.status}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-children">
            <Link
              href="#projects"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-dark-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-400 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </Link>

            <button className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-dark-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-400 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all hover:scale-105">
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto text-dark-400 dark:text-dark-500 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
