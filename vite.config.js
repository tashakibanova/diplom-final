import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  root: 'src', // Корневая директория вашего проекта
  build: {
    outDir: '../dist', // Директория для выходных файлов
    rollupOptions: {
      input: 'src/index.jsx', // Точка входа вашего приложения
      external: ['web-vitals', 'react-router-hash-link', 'moment', 'react-datepicker', 'react-input-range']
    }
  }
})
