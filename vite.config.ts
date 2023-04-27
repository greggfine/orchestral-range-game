/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import analyze from "rollup-plugin-analyzer";

export default defineConfig({
  // base: "/orchestral-range-game",
  logLevel: "error",
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  // optimizeDeps: {
  //   exclude: ["react-beautiful-dnd"],
  // },
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
