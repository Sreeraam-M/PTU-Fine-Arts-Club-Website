import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/PTU-Fine-Arts-Club-Website/',

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  build: {
    rollupOptions: {
      output: {
        // Vendor chunk splitting
        manualChunks(id) {
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/motion')
          ) {
            return 'framer-motion'
          }

          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})