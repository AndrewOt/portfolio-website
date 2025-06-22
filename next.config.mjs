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

// if (process.env.GITHUB_PAGES === 'true') {
//   nextConfig.basePath = "/portfolio-website";
// }

export default nextConfig
