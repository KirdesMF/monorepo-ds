import type { Config } from 'tailwindcss';
import afLibraryTailwindConfig from '@af-library/config-tailwind';

const config: Pick<Config, 'content' | 'presets' | 'prefix'> = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [afLibraryTailwindConfig],
};

export default config;
