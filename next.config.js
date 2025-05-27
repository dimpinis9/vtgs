// next.config.js
const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-picker",
  "@babel/runtime", // προσθέτουμε κι αυτό
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Αν θες να βοηθήσεις το bundling των ESM modules:
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = withTM(nextConfig);
