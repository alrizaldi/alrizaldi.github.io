"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeClickAnimation, setActiveClickAnimation] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isThemeAnimating, setIsThemeAnimating] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background effect
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const triggerClickAnimation = (key: string) => {
    setActiveClickAnimation(key);
    window.setTimeout(() => setActiveClickAnimation(""), 220);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    triggerClickAnimation("brand-logo");

    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsThemeAnimating(true);
    window.setTimeout(() => setIsThemeAnimating(false), 350);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 dark:bg-dark-900/88 backdrop-blur-xl shadow-[0_14px_35px_-26px_rgba(15,23,42,0.8)]"
          : "bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl"
      } border-b border-dark-200/70 dark:border-dark-700/70`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className={`text-xl font-bold tracking-tight text-dark-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 ${
              activeClickAnimation === "brand-logo"
                ? "scale-95 opacity-80"
                : "scale-100 opacity-100"
            }`}
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  triggerClickAnimation(`desktop-${link.href}`);
                  handleNavClick(link.href);
                }}
                className={`relative text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-pointer ${
                  activeSection === link.href
                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                    : ""
                } ${
                  activeClickAnimation === `desktop-${link.href}`
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                {link.name}
                {/* Active indicator */}
                {activeSection === link.href && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full transition-all duration-300" />
                )}
              </button>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4 border-l border-dark-200 dark:border-dark-700 pl-4">
              <button
                onClick={() => {
                  triggerClickAnimation("desktop-theme");
                  toggleTheme();
                }}
                aria-label="Toggle dark mode"
                className={`flex items-center justify-center w-9 h-9 rounded-lg border border-dark-200/80 dark:border-dark-700/80 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-200 ${
                  activeClickAnimation === "desktop-theme"
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                {isDark ? (
                  <Sun
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isThemeAnimating ? "rotate-180 scale-110" : "rotate-0 scale-100"
                    }`}
                  />
                ) : (
                  <Moon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isThemeAnimating ? "-rotate-12 scale-110" : "rotate-0 scale-100"
                    }`}
                  />
                )}
              </button>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerClickAnimation("desktop-github")}
                className={`text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 hover:scale-110 transform ${
                  activeClickAnimation === "desktop-github"
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerClickAnimation("desktop-linkedin")}
                className={`text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 hover:scale-110 transform ${
                  activeClickAnimation === "desktop-linkedin"
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                triggerClickAnimation("mobile-theme");
                toggleTheme();
              }}
              aria-label="Toggle dark mode"
              className={`flex items-center justify-center w-9 h-9 rounded-lg border border-dark-200/80 dark:border-dark-700/80 text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 ${
                activeClickAnimation === "mobile-theme"
                  ? "scale-95 opacity-80"
                  : "scale-100 opacity-100"
              }`}
            >
              {isDark ? (
                <Sun
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isThemeAnimating ? "rotate-180 scale-110" : "rotate-0 scale-100"
                  }`}
                />
              ) : (
                <Moon
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isThemeAnimating ? "-rotate-12 scale-110" : "rotate-0 scale-100"
                  }`}
                />
              )}
            </button>
            <button
              onClick={() => {
                triggerClickAnimation("mobile-menu-toggle");
                setIsOpen(!isOpen);
              }}
              className={`text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 ${
                activeClickAnimation === "mobile-menu-toggle"
                  ? "scale-95 opacity-80"
                  : "scale-100 opacity-100"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  triggerClickAnimation(`mobile-${link.href}`);
                  handleNavClick(link.href);
                }}
                className={`block w-full text-left transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-primary-600 dark:text-primary-400 font-semibold pl-4 border-l-4 border-primary-600 dark:border-primary-400"
                    : "text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 pl-4"
                } ${
                  activeClickAnimation === `mobile-${link.href}`
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-dark-200 dark:border-dark-700">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerClickAnimation("mobile-github")}
                className={`text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 ${
                  activeClickAnimation === "mobile-github"
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerClickAnimation("mobile-linkedin")}
                className={`text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 ${
                  activeClickAnimation === "mobile-linkedin"
                    ? "scale-95 opacity-80"
                    : "scale-100 opacity-100"
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
