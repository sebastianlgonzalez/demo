/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  }
}

module.exports = nextConfig;
