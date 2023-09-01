/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.extensionAlias = { '.graphql': ['.graphql.ts'] };
    return config;
  },
};

module.exports = nextConfig;
