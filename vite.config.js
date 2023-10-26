import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
  },
});
