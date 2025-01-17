import type { Config } from 'tailwindcss';
import { createThemePlugin } from '@kirdes-org/config-tailwind';

const config: Pick<Config, 'content' | 'plugins' | 'prefix'> = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [createThemePlugin()],
};

export default config;
