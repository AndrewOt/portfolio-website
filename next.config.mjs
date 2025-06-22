/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
}

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.NODE_ENV === 'production';

if (isGithubPages) {
  nextConfig.basePath = "/portfolio-website";
}

export default nextConfig
