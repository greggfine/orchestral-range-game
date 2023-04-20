/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
//   base: "/audiogames/orchestralrange",
  // build: {
  //   minify: true,
  // },
  logLevel: "error",
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
