import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
  analyzerMode: 'static',
})

const nextConfig: NextConfig = bundleAnalyzer({
  reactStrictMode: true,
  output: 'standalone',
  distDir: isProd ? 'dist' : '.next',
  cacheMaxMemorySize: 60 * 1024,
  // todo: fix it all before production. Now it slow the develop speed.
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
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },
})

export default nextConfig
