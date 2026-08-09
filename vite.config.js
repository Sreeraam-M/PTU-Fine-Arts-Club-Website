import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Vendor chunk splitting (TRD §13.3): isolate the large, stable
        // third-party libraries so page chunks (which change frequently)
        // can be cached independently and don't pull vendor code on every
        // route. react-icons stays unlisted so tree-shaken icons land in
        // the chunk that uses them. (Rolldown requires a function form.)
        manualChunks(id) {
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'framer-motion';
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router')
          ) {
            return 'react-vendor';
          }
        },
      },
    },
  },
})
