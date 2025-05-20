// next.config.mjs
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// Transpile rc-util (για rc-dialog κ.λπ.) και rc-picker (για DatePicker locales)
const withTM = require("next-transpile-modules")(["rc-util", "rc-picker"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // δεν χρειάζεται να πειράξουμε το experimental.esmExternals
};

export default withTM(nextConfig);
