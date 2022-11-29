import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'garuda',
      formats: ['es', 'cjs'],
      fileName: 'garuda'
    },
    ssr: true,
    minify: 'esbuild',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      input: resolve(__dirname, 'src/index.ts'),
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  }
})
