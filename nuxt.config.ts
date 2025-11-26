import i18n from './modules/i18n' // 导入i18n配置
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
    '@nuxtjs/i18n/vue3', // Vue 3兼容版本
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
  i18n, // i18n配置
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
