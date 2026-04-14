/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fallback to Babel if SWC binary fails
  output: "export", // Export static HTML for GitHub Pages
  swcMinify: process.env.NEXT_SKIP_SWC === "1" ? false : true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
