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
};

export default nextConfig;