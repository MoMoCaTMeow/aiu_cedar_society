const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/aiu_cedar_society' : '',
  trailingSlash: isProd,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
