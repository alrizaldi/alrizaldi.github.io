/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fallback to Babel if SWC binary fails
  swcMinify: process.env.NEXT_SKIP_SWC === "1" ? false : true,
};

module.exports = nextConfig;
