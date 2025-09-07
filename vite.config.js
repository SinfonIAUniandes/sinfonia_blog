// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    react(),
    markdown({ mode: ['html', 'toc', 'react'] }),
  ],
  base: '/sinfonia_blog/', // Nombre del repositorio en GitHub,
  homepage: 'https://sinfoniauniandes.github.io/sinfonia_blog/', // URL completa del sitio
})
