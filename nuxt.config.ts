import { searchForWorkspaceRoot } from 'vite'

export default defineNuxtConfig({
  devServer: {
    port: 3002
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@vite-pwa/nuxt'
  ],

  app: {
    head: {
      title: 'Mon App Sociale',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  vite: {
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          // Ajoutez d'autres chemins si nécessaire
        ]
      }
    }
  },

  // Ajout de la configuration PWA
  pwa: {
    manifest: {
      name: 'Mon App Sociale',
      short_name: 'Social App',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/'
    }
  },

  compatibilityDate: '2024-12-09'
})