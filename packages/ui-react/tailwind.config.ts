import type { Config } from 'tailwindcss';
import afLibraryTailwindConfig from '@af-library/config-tailwind';

const config: Pick<Config, 'content' | 'presets' | 'prefix'> = {
  content: ['./src/**/*.tsx'],
  presets: [afLibraryTailwindConfig],
  prefix: 'af-',
};

export default config;
