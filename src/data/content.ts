export const siteConfig = {
  name: "Rizaldi Akbar",
  title: "Full stack Developer",
  tagline: "Building elegant solutions with clean code",
  email: "10rizaldiakbar@gmail.com",
  location: "Indonesia",
  status: "Open to opportunities",
  social: {
    github: "https://github.com/alrizaldi",
    linkedin: "https://www.linkedin.com/in/rizaldiakbar/",
  },
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  frontend: ["React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Next.js API Routes"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "CI/CD", "Linux"],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration and admin dashboard.",
    image: "/images/projects/e-commerce.png",
    tech: ["Next.js", "TypeScript", "MySQL", "Stripe"],
    github: "https://github.com/rizaldiakbar/ecommerce",
    live: "https://ecommerce-demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    image: "/images/projects/task-management.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/rizaldiakbar/taskapp",
    live: "https://taskapp-demo.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Company Profile CMS",
    description:
      "Custom content management system for managing company profiles.",
    image: "/images/projects/compro.png",
    tech: ["Next.js", "Vercel", "MongoDB", "Blob Storage"],
    github: "https://github.com/alrizaldi/base-compro",
    live: "https://base-compro.vercel.app/",
    featured: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with the latest Next.js features including Server Components and Server Actions.",
    date: "2024-04-10",
    category: "Tutorial",
    readTime: "8 min read",
    slug: "getting-started-nextjs-14",
  },
  {
    id: 2,
    title: "Why I Switched from Express to Next.js API Routes",
    excerpt:
      "My journey from a separate backend to a unified full-stack framework and the benefits I discovered along the way.",
    date: "2024-03-25",
    category: "Experience",
    readTime: "6 min read",
    slug: "express-to-nextjs",
  },
  {
    id: 3,
    title: "Building Scalable APIs with TypeScript and MySQL",
    excerpt:
      "Best practices for creating type-safe, performant APIs with proper database optimization techniques.",
    date: "2024-03-15",
    category: "Backend",
    readTime: "10 min read",
    slug: "scalable-apis-typescript-mysql",
  },
];
