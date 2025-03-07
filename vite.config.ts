import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio' ,
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    outDir: 'build'
  }
}) 