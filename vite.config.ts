/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base: "/orchestral-range-game",
  // build: {
  //   minify: true,
  // },
  logLevel: "error",
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
