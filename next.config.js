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
  swcMinify: false,
};

module.exports = nextConfig;
