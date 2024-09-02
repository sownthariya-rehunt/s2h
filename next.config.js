/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = nextConfig
