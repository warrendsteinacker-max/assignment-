// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/react-bundle'

export default defineConfig({
  base: './', // Or '/your-repo-name/'
  plugins: [react()],
})
