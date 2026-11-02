/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Restaurants page retired 2 Nov 2026 (trades only).
      { source: "/industries/restaurants", destination: "/industries", permanent: true },
    ];
  },
};

export default nextConfig;
