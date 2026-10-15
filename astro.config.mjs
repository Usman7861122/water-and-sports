// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    // Same-origin image proxy for local dev (Vercel uses the rewrite in vercel.json).
    server: {
      proxy: {
        '/media': {
          target: 'http://54.236.221.108',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/media/, '/wp-content/uploads'),
        },
      },
    },
  },
});
