/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}
