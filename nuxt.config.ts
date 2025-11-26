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
    'pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n', // Vue 3兼容版本
    '@unocss/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
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
  i18n: {
    locales: [
      { code: 'en', name: 'English',file: 'en.json' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      cookieSecure: true,
      cookieCrossOrigin: false
    },
    langDir: '../app/i18n/modules',
    vueI18n: 'app/i18n/i18n.config.ts'
  },

  imports: {
    presets: [
      { from: 'vue-i18n', imports: ['useI18n'] }
    ]
  },
  // Additional configuration to disable font loading
  css: ['~/assets/css/main.css'],
  build: {
    transpile: [],
  },
});
