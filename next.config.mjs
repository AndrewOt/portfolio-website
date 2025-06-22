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

if (process.env.NODE_ENV === 'development') {
  nextConfig.basePath = "";
} else {
  nextConfig.basePath = "/portfolio-website";
}

export default nextConfig
