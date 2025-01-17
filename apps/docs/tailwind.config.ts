import type { Config } from "tailwindcss";
import { createThemePlugin } from "@kirdes-org/config-tailwind";

const config: Pick<Config, "content" | "presets" | "prefix" | "plugins"> = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@kirdes-org/react/**/*.tsx",
    "./node_modules/@kirdes-org/vue/**/*.vue",
  ],
  plugins: [createThemePlugin()],
};

export default config;
