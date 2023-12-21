/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.html$/i,
      use: 'html-loader',
    });

    return config;
  },
  /*
  experimental: {
    scrollRestoration: true,
  }
  */
};

module.exports = nextConfig;
