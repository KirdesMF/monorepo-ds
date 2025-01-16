import plugin from 'tailwindcss/plugin';

export function createThemePlugin() {
  return plugin(
    // Plugin function
    ({ addBase }) => {
      addBase({
        ':root': {
          // Pink
          '--af-pink-100': '331, 100%, 96%',
          '--af-pink-200': '331, 100%, 92%',
          '--af-pink-300': '332, 100%, 80%',
          '--af-pink-400': '331, 100%, 71%',
          '--af-pink-500': '331, 100%, 59%',
          '--af-pink-600': '332, 100%, 45%',
          '--af-pink-700': '332, 69%, 47%',
          '--af-pink-800': '332, 69%, 37%',
          '--af-pink-900': '332, 69%, 27%',
          '--af-pink': 'var(--af-pink-500)',

          // Teal
          '--af-teal-100': '187, 55%, 92%',
          '--af-teal-200': '187, 58%, 80%',
          '--af-teal-300': '187, 61%, 67%',
          '--af-teal-400': '187, 61%, 54%',
          '--af-teal-500': '187, 97%, 35%',
          '--af-teal-600': '187, 91%, 28%',
          '--af-teal-700': '187, 91%, 23%',
          '--af-teal-800': '187, 91%, 18%',
          '--af-teal-900': '187, 91%, 13%',
          '--af-teal': 'var(--af-teal-500)',

          // Mustard
          '--af-mustard-100': '49, 100%, 81%',
          '--af-mustard-200': '40, 93%, 84%',
          '--af-mustard-300': '49, 95%, 51%',
          '--af-mustard-400': '37, 93%, 64%',
          '--af-mustard-500': '42, 100%, 48%',
          '--af-mustard-600': '40, 89%, 36%',
          '--af-mustard-700': '40, 89%, 31%',
          '--af-mustard-800': '40, 89%, 26%',
          '--af-mustard-900': '40, 89%, 21%',
          '--af-mustard': 'var(--af-mustard-500)',

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
    }
  );
}
