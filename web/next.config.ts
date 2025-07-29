import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações de compilação
  compiler: {
    // Remove console.logs em produção
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurações de webpack
  webpack: (config, { dev, isServer }) => {
    // Otimizações para desenvolvimento
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
