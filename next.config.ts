import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  serverExternalPackages: ['@payloadcms/db-sqlite', '@payloadcms/db-postgres', 'payload'],
  turbopack: {
    resolveAlias: {
      '@payload-config': './src/payload.config.ts',
    },
  },
}

export default withPayload(nextConfig)
