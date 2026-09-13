import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative assets work both on paulmuller.dev and on the repository Pages URL.
  base: './',
})
