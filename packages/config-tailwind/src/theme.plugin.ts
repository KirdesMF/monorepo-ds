import plugin from 'tailwindcss/plugin';

export function createThemePlugin() {
  return plugin(
    // Plugin function
    ({ addBase }) => {
      addBase({
        ':root': {
          // Pink
          '--af-pink-100': '331 100% 96%',
          '--af-pink-200': '331 100% 92%',
          '--af-pink-300': '332 100% 80%',
          '--af-pink-400': '331 100% 71%',
          '--af-pink-500': '331 100% 59%',
          '--af-pink-600': '332 100% 45%',
          '--af-pink-700': '332 69% 47%',
          '--af-pink-800': '332 69% 37%',
          '--af-pink-900': '332 69% 27%',
          '--af-pink': 'var(--af-pink-500)',

          // Teal
          '--af-teal-100': '187 55% 92%',
          '--af-teal-200': '187 58% 80%',
          '--af-teal-300': '187 61% 67%',
          '--af-teal-400': '187 61% 54%',
          '--af-teal-500': '187 97% 35%',
          '--af-teal-600': '187 91% 28%',
          '--af-teal-700': '187 91% 23%',
          '--af-teal-800': '187 91% 18%',
          '--af-teal-900': '187 91% 13%',
          '--af-teal': 'var(--af-teal-500)',

          // Mustard
          '--af-mustard-100': '49 100% 81%',
          '--af-mustard-200': '40 93% 84%',
          '--af-mustard-300': '49 95% 51%',
          '--af-mustard-400': '37 93% 64%',
          '--af-mustard-500': '42 100% 48%',
          '--af-mustard-600': '40 89% 36%',
          '--af-mustard-700': '40 89% 31%',
          '--af-mustard-800': '40 89% 26%',
          '--af-mustard-900': '40 89% 21%',
          '--af-mustard': 'var(--af-mustard-500)',

          // Grey
          '--af-grey-100': '220 13% 91%',
          '--af-grey-200': '220 13% 83%',
          '--af-grey-300': '220 13% 71%',
          '--af-grey-400': '220 13% 63%',
          '--af-grey-500': '220 13% 53%',
          '--af-grey-600': '220 13% 43%',
          '--af-grey-700': '220 13% 35%',
          '--af-grey-800': '220 13% 27%',
          '--af-grey-900': '220 13% 19%',
          '--af-grey': 'var(--af-grey-500)',

          // Orange
          '--af-orange-100': '33 100% 96%',
          '--af-orange-200': '33 100% 92%',
          '--af-orange-300': '33 100% 80%',
          '--af-orange-400': '33 100% 71%',
          '--af-orange-500': '33 100% 59%',
          '--af-orange-600': '33 100% 45%',
          '--af-orange-700': '33 69% 47%',
          '--af-orange-800': '33 69% 37%',
          '--af-orange-900': '33 69% 27%',
          '--af-orange': 'var(--af-orange-500)',

          // Blue
          '--af-blue-100': '210 100% 96%',
          '--af-blue-200': '210 100% 92%',
          '--af-blue-300': '210 100% 80%',
          '--af-blue-400': '210 100% 71%',
          '--af-blue-500': '210 100% 59%',
          '--af-blue-600': '210 100% 45%',
          '--af-blue-700': '210 69% 47%',
          '--af-blue-800': '210 69% 37%',
          '--af-blue-900': '210 69% 27%',
          '--af-blue': 'var(--af-blue-500)',

          // Z-indices
          '--z-popover': '1000',
          '--z-dialog': '1001',
          '--z-dropdown': '1002',
          '--z-tooltip': '1003',

          // Border radius
          '--af-radius': '4px',
        },
      });
    },
    // Plugin config
    {
      theme: {
        data: {
          override: 'override',
          mod: 'mod',
        },
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
            'af-blue': {
              DEFAULT: 'hsl(var(--af-blue))',
              100: 'hsl(var(--af-blue-100))',
              200: 'hsl(var(--af-blue-200))',
              300: 'hsl(var(--af-blue-300))',
              400: 'hsl(var(--af-blue-400))',
              500: 'hsl(var(--af-blue-500))',
              600: 'hsl(var(--af-blue-600))',
              700: 'hsl(var(--af-blue-700))',
              800: 'hsl(var(--af-blue-800))',
              900: 'hsl(var(--af-blue-900))',
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
          keyframes: {
            'fade-in': {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            'fade-out': {
              '0%': { opacity: '1' },
              '100%': { opacity: '0' },
            },
            'slide-in': {
              '0%': { transform: 'translateY(10px)', opacity: '0' },
              '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            'slide-out': {
              '0%': { transform: 'translateY(0)', opacity: '1' },
              '100%': { transform: 'translateY(10px)', opacity: '0' },
            },
          },
          animation: {
            'fade-in': 'fade-in 200ms ease-in-out',
            'fade-out': 'fade-out 200ms ease-in-out',
            'slide-in': 'slide-in 200ms ease-in-out',
            'slide-out': 'slide-out 200ms ease-in-out',
          },
        },
      },
    }
  );
}
