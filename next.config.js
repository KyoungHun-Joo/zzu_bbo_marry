const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록

  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "./server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "./client.html",
    },
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
