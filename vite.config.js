import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
    server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      },
      '/health': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      },

      '/api/distributions': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/api/apps': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/api/generate-script': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/api/stats': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }

})
