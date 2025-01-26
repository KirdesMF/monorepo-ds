// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

// https://astro.build/config
export default defineConfig({
  integrations: [react({ include: "**/react/*" }), vue()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@kirdes-org/react-ui": path.resolve(
          __dirname,
          "../../packages/react-ui/src/index.ts",
        ),
        "@kirdes-org/vue-ui": path.resolve(
          __dirname,
          "../../packages/vue-ui/src/index.ts",
        ),
      },
    },
  },
});
