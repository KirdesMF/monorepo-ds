import type { Config } from 'tailwindcss';
import afLibraryTailwindConfig from '@af-library/config-tailwind';

const config: Pick<Config, 'content' | 'presets' | 'prefix' | 'theme'> = {
  content: ['./src/**/*.tsx', 'src/App.tsx'],
  presets: [afLibraryTailwindConfig],
};

export default config;
