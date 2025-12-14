// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  // 别名
  alias: {

  },
  // Configure app settings to disable font loading
  app: {
    head: {
      link: [] // Remove any auto-added font links
    }
  },

  modules: [
    '@nuxt/ui',
    '@unocss/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n', // Vue 3兼容版本
    '@nuxt/image',
    '@nuxt/eslint',
    "@nuxt/devtools"
  ],
  css: ['~/assets/css/main.css', '~/assets/css/common.less'],
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
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
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
    baseUrl: 'https://example.com',
  },
  unocss: {
    nuxtLayers: true,
    
  },
  imports: {
    presets: [
      { from: 'vue-i18n', imports: ['useI18n'] }
    ]
  },
  // Additional configuration to disable font loading

  build: {
    transpile: [],
  },
});
