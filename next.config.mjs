const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Vercel handles this automatically (and supports API routes)
  // basePath: '/aiu_cedar_society', // Vercel deploys to root
  // trailingSlash: true, // Not strictly necessary for Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
