// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Configure app settings to disable font loading
  app: {
    head: {
      link: [] // Remove any auto-added font links
    }
  },

  modules: [
    "pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@nuxt/ui"
  ],
  pinia: {

  },
  piniaPluginPersistedstate: {
    key: 'ceping_%id',
  },


  // @nuxt/ui theme configuration
  ui: {
    fonts: false,
  },
  // Additional configuration to disable font loading
  css: [],
  build: {
    transpile: [],
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
})
