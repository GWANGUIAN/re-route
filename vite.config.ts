import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /career-journey/.
export default defineConfig({
  base: '/career-journey/',
  plugins: [react()],
})
