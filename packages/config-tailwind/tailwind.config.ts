import type { Config } from 'tailwindcss';
import { createThemePlugin } from './theme.plugin';

/**
 * We want each package to be responsible for its own content.
 * This is a base config that can be extended by each package.
 *
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Omit<Config, 'content'> = {
  plugins: [createThemePlugin()],
};

export default config;
