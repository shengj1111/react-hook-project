import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置scss变量地址
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sassConfig.scss";`,
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  server: {
    // 设置打开端口号
    port: 5000,
    // 配置代理
    proxy: {
      '/api':{
        target: '',
        changeOrigin: true
      }
    },
  },
})
