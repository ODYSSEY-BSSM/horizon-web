import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: { emotion: true },
    transpilePackages: ['@odyssey-horizon/ui'],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@odyssey-horizon/ui': require.resolve('@odyssey-horizon/ui'),
        };
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.API_BASE_URL}/:path*`,
            },
        ];
    },
};

export default nextConfig;