import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /re-route/.
export default defineConfig({
  base: '/re-route/',
  plugins: [react()],
})
