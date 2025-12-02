const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/aiu_cedar_society' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
