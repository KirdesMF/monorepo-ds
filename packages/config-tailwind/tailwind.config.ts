import type { Config } from 'tailwindcss';

/**
 * We want each package to be responsible for its own content.
 * This is a base config that can be extended by each package.
 *
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        'af-pink': {
          DEFAULT: 'hsl(var(--af-pink))',
          100: 'hsl(var(--af-pink-100))',
          200: 'hsl(var(--af-pink-200))',
          300: 'hsl(var(--af-pink-300))',
          400: 'hsl(var(--af-pink-400))',
          500: 'hsl(var(--af-pink-500))',
          600: 'hsl(var(--af-pink-600))',
          700: 'hsl(var(--af-pink-700))',
          800: 'hsl(var(--af-pink-800))',
          900: 'hsl(var(--af-pink-900))',
        },
        'af-teal': {
          DEFAULT: 'hsl(var(--af-teal))',
          100: 'hsl(var(--af-teal-100))',
          200: 'hsl(var(--af-teal-200))',
          300: 'hsl(var(--af-teal-300))',
          400: 'hsl(var(--af-teal-400))',
          500: 'hsl(var(--af-teal-500))',
          600: 'hsl(var(--af-teal-600))',
          700: 'hsl(var(--af-teal-700))',
          800: 'hsl(var(--af-teal-800))',
          900: 'hsl(var(--af-teal-900))',
        },
        'af-mustard': {
          DEFAULT: 'hsl(var(--af-mustard))',
          100: 'hsl(var(--af-mustard-100))',
          200: 'hsl(var(--af-mustard-200))',
          300: 'hsl(var(--af-mustard-300))',
          400: 'hsl(var(--af-mustard-400))',
          500: 'hsl(var(--af-mustard-500))',
          600: 'hsl(var(--af-mustard-600))',
          700: 'hsl(var(--af-mustard-700))',
          800: 'hsl(var(--af-mustard-800))',
          900: 'hsl(var(--af-mustard-900))',
        },
        'af-orange': {
          DEFAULT: 'hsl(var(--af-orange))',
          100: 'hsl(var(--af-orange-100))',
          200: 'hsl(var(--af-orange-200))',
          300: 'hsl(var(--af-orange-300))',
          400: 'hsl(var(--af-orange-400))',
          500: 'hsl(var(--af-orange-500))',
          600: 'hsl(var(--af-orange-600))',
          700: 'hsl(var(--af-orange-700))',
          800: 'hsl(var(--af-orange-800))',
          900: 'hsl(var(--af-orange-900))',
        },
        'af-grey': {
          DEFAULT: 'hsl(var(--af-grey))',
          100: 'hsl(var(--af-grey-100))',
          200: 'hsl(var(--af-grey-200))',
          300: 'hsl(var(--af-grey-300))',
          400: 'hsl(var(--af-grey-400))',
          500: 'hsl(var(--af-grey-500))',
          600: 'hsl(var(--af-grey-600))',
          700: 'hsl(var(--af-grey-700))',
          800: 'hsl(var(--af-grey-800))',
          900: 'hsl(var(--af-grey-900))',
        },
      },
      zIndex: {
        'af-popover': 'var(--z-popover)',
        'af-dialog': 'var(--z-dialog)',
        'af-dropdown': 'var(--z-dropdown)',
        'af-tooltip': 'var(--z-tooltip)',
      },
      borderRadius: {
        DEFAULT: 'var(--af-radius)',
        'af-radius-sm': '2px',
        'af-radius-md': '4px',
        'af-radius-lg': '8px',
        'af-radius-xl': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
