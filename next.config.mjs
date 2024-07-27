/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
     appDir: true,
    },
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "learn.limitx.ir",
            },
          ],
    },
    devIndicators: {
      buildActivity: false
  }
};

export default nextConfig;
