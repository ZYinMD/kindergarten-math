import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
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
