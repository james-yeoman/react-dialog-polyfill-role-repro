/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import viteSvgr from "vite-plugin-svgr";

import { defineConfig } from "vite";
import { InlineConfig } from "vitest";

export default defineConfig(() => {
  return {
    build: { outDir: "build" },
    css: { devSourcemap: true },
    // https://vitest.dev/guide/in-source.html#production-build
    define: { "import.meta.vitest": undefined },
    plugins: [react(), viteSvgr()],
    server: { open: !process.env.VITEST, port: 3000 },
    test: {
      css: true,
      globals: true,
      include: ["./src/**/*.spec.{js,ts,jsx,tsx}"],
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],

      // https://vitest.dev/guide/in-source.html#setup
      includeSource: ["./src/**/*.{js,ts}"],
    } as InlineConfig,
  };
});
