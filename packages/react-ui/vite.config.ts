import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      name: '@kirdes-org/react',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.esm.js' : 'index.cjs.js'),
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@ark-ui/react', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@ark-ui/react': '@ark-ui/react',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
});
