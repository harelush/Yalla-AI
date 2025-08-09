/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  // basePath: process.env.NODE_ENV === 'production' ? '/Yalla-AI' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Yalla-AI/' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 