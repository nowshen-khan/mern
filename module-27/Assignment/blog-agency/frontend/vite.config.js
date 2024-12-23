import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 build: {
   sourcemap: false
 },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
