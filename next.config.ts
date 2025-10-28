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
  reactCompiler: true,
  output: 'standalone',
  distDir: isProd ? 'dist' : '.next',
  cacheMaxMemorySize: 60 * 1024,
  cacheComponents: true,
  serverExternalPackages: ['pino', 'pino-pretty'],
  typescript: {
    // https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
    ignoreBuildErrors: true,
  },
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
    turbopackFileSystemCacheForDev: true,
  },
})

export default nextConfig
