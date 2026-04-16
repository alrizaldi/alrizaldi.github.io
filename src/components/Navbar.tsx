"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeClickAnimation, setActiveClickAnimation] = useState("");

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-md"
          : "bg-white/80 dark:bg-dark-900/80 backdrop-blur-md"
      } border-b border-dark-200 dark:border-dark-700`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className={`text-xl font-bold text-dark-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 ${
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
                className={`relative text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-pointer ${
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
          <button
            onClick={() => {
              triggerClickAnimation("mobile-menu-toggle");
              setIsOpen(!isOpen);
            }}
            className={`md:hidden text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-all duration-200 ${
              activeClickAnimation === "mobile-menu-toggle"
                ? "scale-95 opacity-80"
                : "scale-100 opacity-100"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
