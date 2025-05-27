// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // αν έχεις άλλες ρυθμίσεις, πάρε τες από το παλιό mjs
};

// αν χρησιμοποιείς still next-transpile-modules:
const withTM = require("next-transpile-modules")(["rc-util", "rc-picker"]);

export default withTM(nextConfig);
