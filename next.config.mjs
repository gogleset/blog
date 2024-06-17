import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

if (process.env.NEXT_PUBLIC_NODE_ENV === "prod") {
  nextConfig.compiler = {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  };
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
