const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const repository = "joonyoung-s-portfolio-page";

const nextConfig = {
  output: "export",
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);
