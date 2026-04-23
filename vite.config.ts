import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "showcase",
  publicDir: "../public",
  resolve: {
    alias: {
      "@nekoi93/ui": resolve(__dirname, "src/index.ts"),
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: "../dist-showcase",
    emptyOutDir: true,
  },
});
