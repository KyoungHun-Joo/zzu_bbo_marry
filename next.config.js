const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
