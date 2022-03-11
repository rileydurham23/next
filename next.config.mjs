/* eslint-env node */
import bundleAnalyzer from "@next/bundle-analyzer";
import mdxOptions from "./.build/server/mdx-config.mjs";
import { generateSitemap } from "./.build/server/paths.mjs";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  redirects: async () => [
    {
      source: "/enterprise-trial/",
      destination: "/teleport-demo/",
      permanent: true,
    },
    {
      source: "/login/",
      destination: "https://teleport.sh",
      permanent: true,
    },
  ],
  rewrites: async () => [
    {
      source: "/docs/:path*/",
      destination: `${process.env.DOCS_DOMAIN}/docs/:path*/`,
      basePath: false,
    },
    {
      source: "/docs/:path*",
      destination: `${process.env.DOCS_DOMAIN}/docs/:path*`,
      basePath: false,
    },
  ],
  images: {
    path: "/_next/image",
    disableStaticImages: true,
    domains: ["i.ytimg.com"], // Images for youtube preview
  },
  trailingSlash: true,
  webpack: (config, options) => {
    if (!options.dev) {
      generateSitemap();
    }

    // silencing warnings until https://github.com/vercel/next.js/issues/33693 is resolved
    config.infrastructureLogging = {
      level: "error",
    };

    config.output.assetModuleFilename = "static/media/[hash][ext]";

    config.module.rules.push({
      test: /\.(png|jpg|webp|gif|mp4|webm|ogg|swf|ogv|woff2)$/i,
      type: "asset/resource",
    });

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          issuer: /\.[mjt]sx?$/,
          resourceQuery: /react/,
          use: "@svgr/webpack",
        },
        {
          type: "asset/resource",
        },
      ],
    });

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: mdxOptions,
        },
      ],
    });

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    return config;
  },
});
