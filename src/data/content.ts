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
  languages: ["JavaScript", "TypeScript", "Python", "PHP", "Dart"],
  frontend: [
    "React",
    "Next.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Boostrap",
    "Flutter",
  ],
  backend: ["Node.js", "Express", "Next.js API Routes", "Laravel"],
  databases: ["MS SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  tools: [
    "VS Code",
    "Git",
    "Docker",
    "CI/CD",
    "Linux",
    "Postman",
    "Hoppscotch",
  ],
};

export const projects = [
  // {
  //   id: 1,
  //   slug: "e-commerce-platform",
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-stack e-commerce platform with payment integration and admin dashboard.",
  //   image: "/images/projects/e-commerce.png",
  //   tech: ["Next.js", "TypeScript", "MySQL", "Stripe"],
  //   live: "https://ecommerce-demo.example.com",
  //   role: "Full Stack Developer",
  //   period: "2024",
  //   overview:
  //     "This project was built to deliver a complete online shopping experience, from product discovery to checkout and post-purchase management. The focus was on creating a reliable storefront, a secure payment flow, and an admin experience that simplifies catalog and order operations.",
  //   features: [
  //     "Responsive product catalog with category browsing and product detail pages",
  //     "Shopping cart and secure checkout flow integrated with Stripe",
  //     "Admin dashboard for managing products, stock, and customer orders",
  //     "Authentication and order history for returning customers",
  //   ],
  //   challenges: [
  //     "Designing a checkout flow that feels simple while still handling edge cases like payment failures and stock changes",
  //     "Keeping product and order data consistent between the customer-facing storefront and the admin dashboard",
  //   ],
  //   outcomes: [
  //     "Delivered an end-to-end commerce workflow from discovery to payment",
  //     "Improved maintainability by separating reusable UI components and typed business logic",
  //   ],
  //   featured: true,
  // },
  // {
  //   id: 2,
  //   slug: "task-management-app",
  //   title: "Task Management App",
  //   description:
  //     "Collaborative task management tool with real-time updates and team features.",
  //   image: "/images/projects/task-management.png",
  //   tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  //   live: "https://taskapp-demo.example.com",
  //   role: "Full Stack Developer",
  //   period: "2024",
  //   overview:
  //     "This application helps teams organize work, assign responsibilities, and stay aligned through real-time collaboration. It was designed for fast-moving teams that need immediate updates without constantly refreshing the page.",
  //   features: [
  //     "Workspace-based task organization with statuses, priorities, and assignments",
  //     "Real-time updates using Socket.io for task changes and collaboration events",
  //     "Team collaboration features such as activity tracking and shared task views",
  //     "MongoDB-backed API for flexible task and user data modeling",
  //   ],
  //   challenges: [
  //     "Maintaining a responsive interface while syncing collaborative updates across multiple users",
  //     "Structuring task data so filters, assignments, and status changes remain efficient and easy to extend",
  //   ],
  //   outcomes: [
  //     "Created a collaborative workflow that reduces friction for distributed teams",
  //     "Built a real-time architecture that can support future notification and analytics features",
  //   ],
  //   featured: true,
  // },
  {
    id: 3,
    slug: "company-profile-cms",
    title: "Company Profile CMS",
    description:
      "Custom content management system for managing company profiles.",
    image: "/images/projects/001-compro.png",
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
  {
    id: 4,
    slug: "jala-kencana-utama",
    title: "Jala Kencana Utama",
    description:
      "Company profile website for Jala Kencana Utama, highlighting services, company history, and contact information.",
    image: "/images/projects/002-compro.png",
    tech: ["Next.js", "Vercel", "Tailwind CSS", "JavaScript"],
    live: "https://jalakencanautama.vercel.app",
    role: "Full Stack Developer",
    period: "2024",
    overview:
      "A polished company profile site built for Jala Kencana Utama to present their business, capabilities, and client contact channels in a professional and accessible format.",
    features: [
      "Responsive company profile layout optimized for desktop and mobile",
      "Clear service presentation with structured company information and team details",
      "Contact section designed to drive customer inquiries and lead generation",
      "Fast deployment on Vercel for reliable production hosting",
    ],
    challenges: [
      "Delivering a corporate identity online while keeping the site fast and easy to update",
      "Organizing company content into a structure that works well for multiple service offerings",
    ],
    outcomes: [
      "Provided a strong web presence that supports business credibility and customer trust",
      "Enabled the client to showcase their company information in a clear, modern format",
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "my-store-retail-system",
    title: "My Store - Retail Management System",
    description:
      "Modern full-stack retail management application for small to medium-sized physical stores with comprehensive management capabilities.",
    image: "/images/projects/003-mystore.png",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
    ],
    live: "https://my-store-alrizaldi.vercel.app/",
    role: "Full Stack Developer",
    period: "2024",
    overview:
      "My Store is a modern full-stack retail management application designed for small to medium-sized physical stores. It provides comprehensive management capabilities for products, inventory, employees, orders, procurement, and promotions.",
    features: [
      "Complete authentication system with login/logout and user management",
      "Dashboard with aggregated business metrics and analytics",
      "Full CRUD operations for products and categories management",
      "Inventory management with stock queries, in/out records, and transfers",
      "Complete order lifecycle management and payment status synchronization",
      "Purchase order management and supplier maintenance system",
      "Employee information management with role assignment and permissions",
      "Attendance tracking and cashier interface",
      "Promotion and discount campaign configuration",
    ],
    challenges: [
      "Implementing a responsive UI that works well on both desktop and mobile devices for store operations",
      "Managing complex data relationships between products, inventory, orders, and suppliers while maintaining performance",
    ],
    outcomes: [
      "Delivered a comprehensive solution that streamlines retail operations from inventory to sales",
      "Created a scalable architecture that can handle growth from small to medium-sized retail businesses",
    ],
    featured: true,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14: A Practical Developer Workflow",
    excerpt:
      "A practical walkthrough of how to start a scalable Next.js 14 project, from folder structure to deployment-ready patterns.",
    date: "2024-04-10",
    category: "Tutorial",
    readTime: "8 min read",
    slug: "getting-started-nextjs-14",
    content: [
      "Next.js 14 gives developers a solid full stack foundation out of the box. The App Router, server-first rendering model, and built-in optimization features reduce setup time and let you focus on product work.",
      "When I start a new project, I begin by defining route groups and component boundaries early. This keeps the codebase maintainable as the project grows and helps avoid large refactors later.",
      "For data access, I prefer colocating fetch logic with server components where possible, then isolating interactive state in client components only when needed. This pattern keeps performance strong and limits unnecessary client-side JavaScript.",
      "Before deployment, I run a final pass on metadata, image usage, and loading states. These small details significantly improve perceived performance and user trust.",
    ],
  },
  {
    id: 2,
    title: "Why I Moved from Standalone Express APIs to Next.js Route Handlers",
    excerpt:
      "The key reasons I consolidated frontend and backend development inside Next.js and what trade-offs I evaluate before deciding architecture.",
    date: "2024-03-25",
    category: "Experience",
    readTime: "6 min read",
    slug: "express-to-nextjs",
    content: [
      "I used to separate frontend and backend in different repositories by default. That approach still works well for large teams, but for many product scopes it creates overhead in deployment, versioning, and environment management.",
      "Moving to Next.js route handlers simplified the development loop. I could build API endpoints near the UI that consumes them, which made debugging and iteration faster.",
      "The biggest win was consistency: shared TypeScript types, fewer duplicated validation rules, and a cleaner onboarding experience for new contributors.",
      "I still choose standalone services for systems that need independent scaling or strict service boundaries, but for most portfolio and product MVP work, a unified Next.js stack gives better delivery speed.",
    ],
  },
  {
    id: 3,
    title:
      "Building Reliable APIs with TypeScript and SQL: Lessons from Production",
    excerpt:
      "Patterns I use to keep APIs maintainable, type-safe, and easy to evolve when product requirements change quickly.",
    date: "2024-03-15",
    category: "Backend",
    readTime: "10 min read",
    slug: "scalable-apis-typescript-sql",
    content: [
      "Reliable API design starts with predictable contracts. I treat request and response shape definitions as first-class code assets, not afterthoughts.",
      "TypeScript helps reduce accidental breakage, especially when paired with clear domain modules and strict linting rules. It also improves communication between frontend and backend developers.",
      "In SQL-backed systems, query clarity matters as much as query speed. I prefer explicit query intent, indexed access paths, and migration discipline over premature optimization.",
      "As projects grow, observability becomes essential. Logging key business events and error contexts makes debugging dramatically faster and supports better long-term maintenance.",
    ],
  },
];
