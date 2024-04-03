import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePluginRadar({
      enableDev: true,
      // Configuração do Google Tag Manager
      gtm: {
        id: 'GTM-PF94X583',
      },
      // Configuração do Facebook Pixel
      pixel: {
        id:  '1514311669374145',
      },
    }),
  ],
})