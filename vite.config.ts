/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
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
