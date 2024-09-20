import withBundleAnalyzer from '@next/bundle-analyzer'

const isProd = process.env.NODE_ENV === 'production'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
  analyzerMode: 'static',
})

/** @type {import('next').NextConfig} */
const nextConfig = bundleAnalyzer({
  reactStrictMode: true,
  output: 'standalone',
  distDir: isProd ? 'dist' : '.next',
  cacheMaxMemorySize: 60 * 1024,
  // fix all before production. Now it slow the develop speed.
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    // dirs: [],
  },
  typescript: {
    // https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
    ignoreBuildErrors: true,
  },
})

export default nextConfig
