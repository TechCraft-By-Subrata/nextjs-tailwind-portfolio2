/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "nextjs-tailwind-portfolio2"; // <-- change this

export default {
  output: "export", // static export -> /out
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // helps with static hosting on GH Pages
  images: { unoptimized: true }, // needed for static export
};
