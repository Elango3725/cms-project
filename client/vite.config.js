import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5173-elango3725-cms-project-vp8mjl4k4k.app.codeanywhere.com"]
  },
  plugins: [react()],
})
