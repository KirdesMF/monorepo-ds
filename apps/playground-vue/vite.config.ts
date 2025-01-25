import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
import ssl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [ssl(), vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/i18n': {
        target: 'https://af-localization-dev.s3.eu-west-3.amazonaws.com/json',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/i18n/, ''),
      },
    },
  },
});
