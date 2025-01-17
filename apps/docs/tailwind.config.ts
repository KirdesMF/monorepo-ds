import type { Config } from "tailwindcss";
import afLibraryTailwindConfig from "@af-library/config-tailwind";

const config: Pick<Config, "content" | "presets" | "prefix" | "plugins"> = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@af-library/react/**/*.tsx",
    "./node_modules/@af-library/vue/**/*.vue",
  ],
  presets: [afLibraryTailwindConfig],
};

export default config;
