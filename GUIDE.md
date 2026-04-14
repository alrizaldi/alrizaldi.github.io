# Personal Website Guide for Rizaldi Akbar

## 🎯 Project Overview

**Name:** Rizaldi Akbar  
**Type:** Professional Portfolio + Personal Blog  
**Role:** Full stack Developer  
**Design Style:** Minimal & Clean

---

## 📋 Website Structure

### Recommended Sections

1. **Hero Section** - First impression with your name, title, and a compelling tagline
2. **About Me** - Professional bio with photo, background, and personality
3. **Skills & Technologies** - Visual representation of your tech stack
4. **Portfolio/Projects** - Showcase your best work with case studies
5. **Blog/Articles** - Share knowledge and demonstrate expertise
6. **Contact & Social Links** - Easy ways to reach you
7. **Footer** - Copyright, quick links, and social icons

---

## 🎨 Design Recommendations

### Color Palette

- **Primary:** Deep navy blue (#1a1a2e) or charcoal (#2d2d2d)
- **Secondary:** Clean white (#ffffff) or off-white (#f8f9fa)
- **Accent:** A single vibrant color like teal (#00b4d8) or coral (#ff6b6b)
- **Text:** Dark gray (#333333) for readability

### Typography

- **Headings:** Inter, Poppins, or Space Grotesk (modern, geometric sans-serif)
- **Body:** Inter, Source Sans Pro, or system fonts
- **Code snippets:** Fira Code, JetBrains Mono, or Source Code Pro

### Design Principles

- ✅ Generous whitespace for breathing room
- ✅ Consistent spacing system (8px grid)
- ✅ Clear visual hierarchy with size contrast
- ✅ Subtle animations (hover effects, smooth scrolling)
- ✅ Mobile-first responsive design
- ✅ High contrast for accessibility
- ❌ Avoid clutter, excessive colors, or distracting elements

---

## 🛠️ Technology Stack Recommendations

### ✅ Your Choice: Option 1 (Monorepo - Single Project)

**Perfect choice!** Next.js can handle both frontend and backend in one project using **API Routes**. No need for a separate Express server.

---

### 📦 Your Customized Stack (All FREE)

#### Core Framework

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Project Structure:** Single monorepo (FE + BE together)

#### Backend (Built into Next.js)

- **API Routes:** Replace Express.js with Next.js route handlers
  - Located in `app/api/` folder
  - Same Express-like routing pattern
  - Serverless functions deployed with Next.js
- **Validation:** Zod (free, lightweight)
- **Authentication (optional):** NextAuth.js / Auth.js (free)

#### Database (Free Alternatives to MySQL)

Since you want free hosting, here are the best MySQL-compatible options:

| Option          | Free Tier                     | Why                                                            |
| --------------- | ----------------------------- | -------------------------------------------------------------- |
| **Neon**        | 0.5 GB, serverless PostgreSQL | PostgreSQL (similar to MySQL), auto-scales, generous free tier |
| **PlanetScale** | 5 GB MySQL                    | **Actual MySQL**, but free tier discontinued (paid only now)   |
| **Turso**       | 9 GB SQLite (libSQL)          | SQLite-based, MySQL-compatible syntax, very generous free tier |
| **Supabase**    | 0.5 GB PostgreSQL             | PostgreSQL + extra features (auth, storage, realtime)          |
| **TiDB Cloud**  | 5 GB MySQL                    | **Actual MySQL**, serverless, free tier available ✅           |

**🏆 Recommendation: TiDB Cloud** (since you already know MySQL - it's 100% MySQL compatible and free)

#### File Storage (Free Alternatives to Huawei S3)

Since Huawei S3 requires paid credits, here are free alternatives:

| Option               | Free Tier                     | Why                                                              |
| -------------------- | ----------------------------- | ---------------------------------------------------------------- |
| **Cloudflare R2**    | 10 GB storage, 1M reads/month | S3-compatible API, **no egress fees**, easiest migration from S3 |
| **Supabase Storage** | 1 GB storage                  | Simple, built-in if using Supabase                               |
| **Vercel Blob**      | 10 GB storage                 | Native Next.js integration, easy setup                           |
| **Backblaze B2**     | 10 GB storage                 | S3-compatible, very cheap if you exceed free tier                |

**🏆 Recommendation: Cloudflare R2** (S3-compatible, so your existing S3 code works with just endpoint/credential changes)

---

### 📁 Final Recommended Stack

```
┌─────────────────────────────────────────┐
│           Next.js 14+ (Single Project)  │
├─────────────────────────────────────────┤
│                                         │
│  Frontend        Backend                │
│  ┌─────────┐     ┌──────────────┐       │
│  │ React   │     │ API Routes   │       │
│  │ Pages   │     │ (Express-like│       │
│  │ Tailwind│     │  route       │       │
│  │ MDX     │     │  handlers)   │       │
│  └─────────┘     └──────┬───────┘       │
│                         │               │
│              ┌──────────┴──────────┐    │
│              │                     │    │
│         Database              Storage   │
│      ┌──────────────┐    ┌──────────┐  │
│      │ TiDB Cloud   │    │Cloudflare│  │
│      │ (MySQL)      │    │   R2     │  │
│      │ Free: 5 GB   │    │Free:10 GB│  │
│      └──────────────┘    └──────────┘  │
│                                         │
│         Deployment                      │
│      ┌──────────────┐                   │
│      │   Vercel     │                   │
│      │  (Free Tier) │                   │
│      └──────────────┘                   │
└─────────────────────────────────────────┘
```

### 💰 Total Cost: **$0/month** (all free tiers)

---

### 🗂️ Project Structure (Monorepo)

```
personal-web/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Frontend routes
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   ├── projects/
│   │   ├── blog/
│   │   └── contact/
│   │
│   └── api/                      # Backend routes (Express replacement)
│       ├── projects/
│       │   ├── route.ts          # GET, POST projects
│       │   └── [id]/
│       │       └── route.ts      # GET, PUT, DELETE project
│       ├── blog/
│       └── contact/
│
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   ├── layout/                   # Header, Footer, etc.
│   └── sections/                 # Page sections (Hero, About, etc.)
│
├── lib/                          # Shared utilities
│   ├── db.ts                     # Database connection (MySQL/TiDB)
│   ├── s3.ts                     # Storage client (Cloudflare R2)
│   └── utils.ts                  # Helper functions
│
├── prisma/                       # Database ORM (recommended)
│   └── schema.prisma             # Database schema
│
├── public/                       # Static assets
├── content/                      # Blog posts (MDX/Markdown)
├── types/                        # TypeScript types
├── middleware.ts                   # API middleware
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

### 🔧 Why This Stack Works

| Your Familiar Stack | Replacement        | Notes                                         |
| ------------------- | ------------------ | --------------------------------------------- |
| Express.js          | Next.js API Routes | Same routing logic, serverless, auto-deployed |
| MySQL               | TiDB Cloud         | 100% MySQL compatible, same queries           |
| Huawei S3           | Cloudflare R2      | S3-compatible API, just change credentials    |
| Separate FE + BE    | Single Next.js app | Simplified deployment, shared types           |

**Bonus:** Prisma ORM (free) makes database operations easier and type-safe with TypeScript.

---

### 🚀 Deployment (All Free)

- **Hosting:** Vercel (free tier - unlimited personal projects)
- **Database:** TiDB Cloud Serverless (free 5 GB)
- **Storage:** Cloudflare R2 (free 10 GB)
- **Domain:** Use `yourname.vercel.app` (free) or buy custom domain (~$10/year)

---

## 📄 Content Guidelines

### Hero Section

```
Hi, I'm Rizaldi Akbar
full stack Developer

[One-liner tagline that shows your specialty]
Example: "Building elegant solutions with clean code"

[CTA Buttons]
→ View My Work
→ Get In Touch
```

### About Me

**Include:**

- Professional photo (friendly, high-quality)
- 2-3 paragraph bio covering:
  - Who you are
  - What you do and love
  - Your approach/philosophy
  - A personal touch (hobbies, interests)
- Quick facts (location, experience level, availability)
- Download resume button

### Skills & Technologies

**Organize by categories:**

- **Languages:** JavaScript, TypeScript, Python, etc.
- **Frontend:** React, Vue, HTML/CSS, etc.
- **Backend:** Node.js, Express, databases, etc.
- **Tools:** Git, Docker, CI/CD, etc.

**Display:** Clean icons or logos with proficiency indicators

### Portfolio/Projects

**For each project include:**

- Project screenshot/mockup
- Project name and brief description
- Tech stack used
- Your role and contributions
- Links (Live demo, GitHub repo)
- Case study (for featured projects):
  - Problem statement
  - Solution approach
  - Challenges and learnings
  - Results/impact

**Recommended: 4-6 strongest projects**

### Blog/Articles

**Content ideas:**

- Technical tutorials
- Project postmortems/learnings
- Industry insights
- Career journey and advice
- Open-source contributions
- Tool/library reviews

**Blog features:**

- Categories/tags
- Reading time estimate
- Code syntax highlighting
- Social sharing buttons
- Related posts section

### Contact Section

- Contact form (Name, Email, Message)
- Email address (clickable mailto link)
- Social links:
  - GitHub
  - LinkedIn
  - Twitter/X (if active)
  - Medium/Dev.to (if blogging there)
  - Other relevant platforms

---

## 🚀 Features to Implement

### Essential

- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark/Light mode toggle
- [ ] Smooth scroll navigation
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Fast loading (optimize images, lazy loading)
- [ ] Accessible (WCAG 2.1 AA standard)

### Recommended

- [ ] Blog search functionality
- [ ] Newsletter subscription
- [ ] Analytics (Plausible, Fathom, or Google Analytics)
- [ ] RSS feed for blog
- [ ] Sitemap.xml
- [ ] Performance monitoring

### Nice-to-Have

- [ ] Terminal-style Easter egg in console
- [ ] Animated hero background (subtle)
- [ ] Project filtering by tech stack
- [ ] Reading progress bar on blog posts
- [ ] Code snippet copy button

---

## 📱 Page Layout Wireframes

### Homepage

```
┌─────────────────────────────────┐
│         Navigation Bar          │
├─────────────────────────────────┤
│                                 │
│        Hero Section             │
│   (Name, Title, CTA buttons)    │
│                                 │
├─────────────────────────────────┤
│                                 │
│       About Me Section          │
│   (Photo + Bio + Quick Facts)   │
│                                 │
├─────────────────────────────────┤
│                                 │
│    Featured Projects (3-4)      │
│        [View All →]             │
│                                 │
├─────────────────────────────────┤
│                                 │
│     Latest Blog Posts (3)       │
│        [Read More →]            │
│                                 │
├─────────────────────────────────┤
│                                 │
│      Contact Section            │
│    (Form + Social Links)        │
│                                 │
├─────────────────────────────────┤
│           Footer                │
└─────────────────────────────────┘
```

### Blog Post Page

```
┌─────────────────────────────────┐
│         Navigation Bar          │
├─────────────────────────────────┤
│                                 │
│      Post Title (H1)            │
│   Date · Category · Read Time   │
│                                 │
├─────────────────────────────────┤
│                                 │
│      [Featured Image]           │
│                                 │
├─────────────────────────────────┤
│                                 │
│      Post Content               │
│      (with TOC sidebar)         │
│                                 │
├─────────────────────────────────┤
│     Related Posts (2-3)         │
├─────────────────────────────────┤
│           Footer                │
└─────────────────────────────────┘
```

---

## 🎬 Next Steps

### Phase 1: Setup & Foundation (Week 1)

1. Choose your tech stack from recommendations above
2. Initialize the project repository
3. Set up development environment
4. Configure build tools and linters
5. Create base layout structure

### Phase 2: Core Pages (Week 2-3)

1. Build responsive navigation
2. Implement Hero + About sections
3. Create project showcase component
4. Set up blog system with MDX/Markdown

### Phase 3: Polish & Launch (Week 4)

1. Add animations and transitions
2. Implement dark/light mode
3. Optimize for SEO and performance
4. Test across browsers and devices
5. Deploy to hosting platform

---

## 📚 Resources & Inspiration

### Design Inspiration

- [Brittany Chiang's Portfolio](https://brittanychiang.com/) - Clean developer portfolio
- [Lee Robinson's Site](https://leerob.io/) - Great blog + portfolio combo
- [Josh Comeau](https://www.joshwcomeau.com/) - Interactive and educational

### Tools

- **Icons:** Lucide Icons, Heroicons, or Simple Icons
- **Images:** Unsplash, Pexels (for placeholders)
- **Mockups:** Device frames from shots.so
- **Code Highlighting:** Shiki or Prism.js
- **Animations:** Framer Motion or CSS transitions

---

## 💡 Pro Tips

1. **Keep it updated** - An outdated portfolio is worse than no portfolio
2. **Write authentically** - Let your personality show in your blog
3. **Quality over quantity** - Showcase fewer, stronger projects
4. **Make it yours** - Add personal touches that make you memorable
5. **Test everything** - Broken links or bugs hurt credibility
6. **Tell stories** - Don't just list what you did, explain why and how
7. **Include metrics** - Numbers make your impact tangible

---

## 📝 Your Input Needed

Before we start building, please prepare:

- [ ] Your professional photo
- [ ] Updated resume/CV
- [ ] 4-6 projects to showcase (with screenshots)
- [ ] Your bio (or I can help write one)
- [ ] Social media profile URLs
- [ ] Any specific projects/links for each portfolio item

---

**Ready to build?** Let me know which tech stack you'd prefer, and we can start setting up the project! 🚀
