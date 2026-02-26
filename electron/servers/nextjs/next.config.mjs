import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check if building for Electron or in development mode
const isElectronBuild = process.env.BUILD_TARGET === 'electron' || process.argv.includes('--electron');
const isDevelopment = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: false,
  distDir: ".next-build",
  ...(isElectronBuild ? { output: "export" } : isDevelopment ? {} : { output: "export" }),
  ...(isDevelopment ? { allowedDevOrigins: ['127.0.0.1:*', 'localhost:*'] } : {}),

  // Disable font optimization to avoid Google Fonts download warnings during build
  optimizeFonts: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7c765f3726084c52bcd5d180d51f1255.r2.dev",
      },
      {
        protocol: "https",
        hostname: "pptgen-public.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "pptgen-public.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "present-for-me.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "yefhrkuqbjcblofdcpnr.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },

  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Replace Recharts ResponsiveContainer with SSR-safe wrapper on server.
      // ResponsiveContainer defaults initialDimension to {-1, -1} and returns null
      // when no ResizeObserver updates dimensions (never happens in SSR).
      // The wrapper injects reasonable initialDimension so charts render as SVG.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /recharts[\\/]es6[\\/]component[\\/]ResponsiveContainer/,
          path.resolve(__dirname, 'lib/ssr-recharts-responsive-container.js')
        )
      );
    }
    return config;
  },
};


export default nextConfig;
