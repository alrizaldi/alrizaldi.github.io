# Rizaldi Akbar - Personal Website

A modern, minimal personal portfolio and blog built with Next.js 14.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/              # Next.js pages and API routes
│   ├── page.tsx      # Homepage
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── BlogPosts.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── content.ts    # All content and data
```

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Clean, minimal UI
- ✅ Dark mode support (via CSS media query)
- ✅ Smooth scroll navigation
- ✅ Contact form (UI ready)
- ✅ Project showcase
- ✅ Blog section

## 📝 Customization

All content is in `src/data/content.ts`. Edit this file to:
- Update your name and bio
- Change projects and blog posts
- Modify social media links
- Adjust skills and technologies

## 🚧 TODO

- [ ] Connect to TiDB Cloud (MySQL) database
- [ ] Add Prisma ORM
- [ ] Implement contact form API
- [ ] Add blog post pages with MDX
- [ ] Add project detail pages
- [ ] Set up Cloudflare R2 for images
- [ ] Add dark mode toggle
- [ ] Deploy to Vercel

## 📄 License

MIT

---

Made with ❤️ by Rizaldi Akbar
