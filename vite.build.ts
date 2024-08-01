import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      external:['vue','@designable/core','@designable/shared','@formily/core','@formily/reactive-vue','@formily/element-plus']
    }
  }
})