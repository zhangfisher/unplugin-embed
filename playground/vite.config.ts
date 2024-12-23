import { defineConfig } from 'vite'
import Embed from '../src/vite'

export default defineConfig({
  plugins: [
    Embed(),
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'font',
      formats: ['es', 'cjs', 'umd'],
    },
    sourcemap: false,
    minify: false,
  },
})
