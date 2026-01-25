import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use './' if you aren't sure of the repo name, 
  // but it's better to use '/YOUR_REPO_NAME/' for GitHub Pages
  base: './', 
  plugins: [react()],
})
