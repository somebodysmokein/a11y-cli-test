import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // allows external hostnames like bs-local.com
    port: 5173,
    allowedHosts: [
      'bs-local.com'     // explicitly allow bs-local.com
    ]
  },
  plugins: [react()],
})
