/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   imports: ['vue'],
    //   dts: './auto-imports.d.ts',
    // })
  ],
  test:{
    environment:'happy-dom',
    globals:true,
    logHeapUsage:true
  }
})
