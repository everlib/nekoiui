import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
  banner: {
    js: `/**
 * @nekoi93/ui v1.0.0
 * White flat modern glassmorphism UI library
 *
 * @author   Nekoi <nekoi@everlib.pro>
 * @homepage https://everlib.pro/
 * @npm      https://www.npmjs.com/~nekoi93
 * @license  MIT
 */`,
  },
});
