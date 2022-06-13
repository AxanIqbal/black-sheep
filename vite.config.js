import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path"

// https://vitejs.dev/config/
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
const publicDir = resolve(__dirname, 'public')

export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util'
    }
  },
  plugins: [react()],
  root,
  publicDir,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        game: resolve(root, 'game', 'index.html'),
        galleria: resolve(root, 'galleria', 'index.html'),
        miner: resolve(root, 'miner', 'index.html')
        // whitepaper: resolve(root, 'assets', "whitepaper.pdf")
      }
    }
  }
})
