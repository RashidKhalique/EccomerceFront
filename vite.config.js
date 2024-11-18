import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // If the module is in node_modules, we can split it into a vendor chunk
          if (id.includes('node_modules')) {
            return 'vendor' // all dependencies go into the vendor chunk
          }
        }
      }
    }
  }
})
