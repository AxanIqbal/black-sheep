import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vitejs.dev/config/
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  plugins: [react()],
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        game: resolve(root, 'game', 'index.html'),
        galleria: resolve(root, 'galleria', 'index.html'),
      }
    }
  }
})
