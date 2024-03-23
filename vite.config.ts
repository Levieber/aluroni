import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { imagetools } from "vite-imagetools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    svgr({
      include: "**/*.svg?react"
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: new URL("src", import.meta.url).pathname },
    ]
  }
});
