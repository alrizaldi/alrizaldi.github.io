"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({ children, className = "", delay = 0 }: ScrollAnimationProps) {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isIntersecting ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
