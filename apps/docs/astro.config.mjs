// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log(path.resolve(__dirname, '../../packages/ui-react/src/index.ts'));
// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), tailwind({ configFile: './tailwind.config.ts' })],
  vite: {
    resolve: {
      alias: [
        {
          find: '@af-library/react',
          replacement: path.resolve(__dirname, '../../packages/ui-react/src/index.ts'),
        },
        {
          find: '@af-library/vue',
          replacement: path.resolve(__dirname, '../../packages/ui-vue/src/index.ts'),
        },
      ],
    },
  },
});
