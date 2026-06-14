import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        obrigado: resolve(__dirname, 'obrigado/index.html'),
        playbookBurnout: resolve(__dirname, 'playbook-burnout-lp2/index.html'),
      },
    },
  },
})
