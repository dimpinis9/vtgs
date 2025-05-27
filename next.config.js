// next.config.js
const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-picker",
  "rc-pagination", // <–– προσθήκη εδώ
  "@babel/runtime",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // μπορείς να αφαιρέσεις το experimental.esmExternals
};

module.exports = withTM(nextConfig);
