/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'utils'],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
