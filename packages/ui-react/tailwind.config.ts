import type { Config } from 'tailwindcss';
import { createThemePlugin } from '@kirdes-org/config-tailwind';

const config: Pick<Config, 'content' | 'plugins' | 'prefix' | 'theme'> = {
  content: ['./src/**/*.tsx', 'src/App.tsx'],
  plugins: [createThemePlugin()],
};

export default config;
