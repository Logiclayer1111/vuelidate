import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@vuelidate/core': resolve(__dirname, '../vuelidate/src/index.js'),
      '@vuelidate/validators': resolve(__dirname, '../validators/src/index.js'),
      '@vuelidate/components': resolve(__dirname, '../components/index.js')
    }
  }
})
