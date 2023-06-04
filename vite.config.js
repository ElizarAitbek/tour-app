import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import "vite/modulepreload-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "/path/to/main.js",
    },
  },
});
