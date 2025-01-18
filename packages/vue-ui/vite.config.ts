import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.lib.json',
    }),
    {
      name: 'copy-styles',
      closeBundle: () => {
        copyFileSync('node_modules/@kirdes-org/config-tailwind/index.css', 'dist/tailwind.css');
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@kirdes-org/vue',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.cjs.js'),
    },
    rollupOptions: {
      external: ['vue', 'tailwindcss', '@ark-ui/vue'],
      output: {
        globals: {
          vue: 'Vue',
          tailwindcss: 'tailwindcss',
          '@ark-ui/vue': '@ark-ui/vue',
        },
      },
    },
  },
});
