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
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration and admin dashboard.",
    image: "/images/projects/e-commerce.png",
    tech: ["Next.js", "TypeScript", "MySQL", "Stripe"],
    github: "https://github.com/rizaldiakbar/ecommerce",
    live: "https://ecommerce-demo.example.com",
    role: "Full Stack Developer",
    period: "2024",
    overview:
      "This project was built to deliver a complete online shopping experience, from product discovery to checkout and post-purchase management. The focus was on creating a reliable storefront, a secure payment flow, and an admin experience that simplifies catalog and order operations.",
    features: [
      "Responsive product catalog with category browsing and product detail pages",
      "Shopping cart and secure checkout flow integrated with Stripe",
      "Admin dashboard for managing products, stock, and customer orders",
      "Authentication and order history for returning customers",
    ],
    challenges: [
      "Designing a checkout flow that feels simple while still handling edge cases like payment failures and stock changes",
      "Keeping product and order data consistent between the customer-facing storefront and the admin dashboard",
    ],
    outcomes: [
      "Delivered an end-to-end commerce workflow from discovery to payment",
      "Improved maintainability by separating reusable UI components and typed business logic",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features.",
    image: "/images/projects/task-management.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/rizaldiakbar/taskapp",
    live: "https://taskapp-demo.example.com",
    role: "Full Stack Developer",
    period: "2024",
    overview:
      "This application helps teams organize work, assign responsibilities, and stay aligned through real-time collaboration. It was designed for fast-moving teams that need immediate updates without constantly refreshing the page.",
    features: [
      "Workspace-based task organization with statuses, priorities, and assignments",
      "Real-time updates using Socket.io for task changes and collaboration events",
      "Team collaboration features such as activity tracking and shared task views",
      "MongoDB-backed API for flexible task and user data modeling",
    ],
    challenges: [
      "Maintaining a responsive interface while syncing collaborative updates across multiple users",
      "Structuring task data so filters, assignments, and status changes remain efficient and easy to extend",
    ],
    outcomes: [
      "Created a collaborative workflow that reduces friction for distributed teams",
      "Built a real-time architecture that can support future notification and analytics features",
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "company-profile-cms",
    title: "Company Profile CMS",
    description:
      "Custom content management system for managing company profiles.",
    image: "/images/projects/compro.png",
    tech: ["Next.js", "Vercel", "MongoDB", "Blob Storage"],
    github: "https://github.com/alrizaldi/base-compro",
    live: "https://base-compro.vercel.app/",
    role: "Full Stack Developer",
    period: "2024",
    overview:
      "This project provides companies with a manageable web presence through a custom CMS tailored to profile content. The system makes it easy to update pages, media, and structured company information without requiring code changes.",
    features: [
      "Custom CMS interface for editing company profile content and website sections",
      "Media upload support using blob storage for images and assets",
      "Fast deployment workflow with Next.js and Vercel",
      "Flexible content structure for different company profile needs",
    ],
    challenges: [
      "Creating a CMS that feels simple for non-technical users while remaining flexible for different page layouts",
      "Managing uploaded assets and published content in a way that keeps the site fast and easy to maintain",
    ],
    outcomes: [
      "Reduced the need for direct developer intervention when content updates are required",
      "Provided a reusable base for future company profile projects",
    ],
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
