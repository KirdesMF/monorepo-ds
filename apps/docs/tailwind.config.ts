import type { Config } from 'tailwindcss';
import afLibraryTailwindConfig from '@af-library/config-tailwind';

const config: Pick<Config, 'content' | 'presets' | 'prefix'> = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@af-library/react/**/*.tsx',
  ],
  presets: [afLibraryTailwindConfig],
  prefix: 'af-',
};

export default config;
