import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: resolve(
            "..",
            "..",
            "node_modules",
            "@esri",
            "calcite-components",
            "dist",
            "calcite",
            "assets",
          ),
          dest: ".",
        },
      ],
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    server: {
      deps: {
        inline: [/component-library/],
      },
    },
  },
});
