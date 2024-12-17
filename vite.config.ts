/// <reference types="vitest" />

import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: { __version__: JSON.stringify(process.env.npm_package_version) },
  build: {
    target: 'safari12',
  },
  test: {
    includeSource: ['src/**/*.ts'],
  },
  server: {
    port: 6636,
    strictPort: true,
    open: true,
  },
  preview: {
    port: 6612,
    strictPort: true,
    open: true,
  },
});
