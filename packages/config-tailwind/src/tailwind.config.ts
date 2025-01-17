import type { Config } from 'tailwindcss';

/**
 * We want each package to be responsible for its own content.
 * This is a base config that can be extended by each package.
 *
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Omit<Config, 'content'> = {
  theme: {
    data: {
      override: 'override',
      mod: 'mod',
    },
  },
};

export default config;
