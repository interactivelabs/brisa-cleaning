/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.extensionAlias = { '.graphql': ['.graphql.ts'] };
    return config;
  },
};

module.exports = nextConfig;
