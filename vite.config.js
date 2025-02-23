import { defineConfig } from 'vite'

export default defineConfig({
  // Configuración básica
  base: '/o1234-neural-network/', // Nombre del repositorio
  build: {
    outDir: 'docs', // GitHub Pages puede servir desde /docs
  },
})
