const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/aiu_cedar_society' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
