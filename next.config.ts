import type { NextConfig } from 'next';
import NextBundleAnalyzer from '@next/bundle-analyzer';
import createNextPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: isAnalyze
});

const withPWA = createNextPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true
});

const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? undefined : 'http://localhost:3000',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        formats: ['image/webp'],
        deviceSizes: [32, 64, 96],
        remotePatterns: [
            { protocol: 'https', hostname: 'www.google.com' },
            { protocol: 'https', hostname: 'sol-digduel.vercel.app' }
        ]
    },
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false,
            net: false,
            tls: false,
            crypto: require.resolve('crypto-browserify'),
            path: require.resolve('path-browserify')
        };

        return config;
    }
} satisfies NextConfig;

export default isProd
    ? withPWA(nextConfig)
    : isAnalyze
      ? withBundleAnalyzer(nextConfig)
      : nextConfig;
