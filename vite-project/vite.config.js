import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/assignment-/', 
  server: {
    port: 3000, // Forces this project to run on 3000 instead of the default 5173
  }
})
