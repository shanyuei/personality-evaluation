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
      link: [], // Remove any auto-added font links
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
      ]
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
    langDir: '../i18n/locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
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
      { from: 'vue-i18n', imports: ['useI18n'] },
    ]
  },
  // Additional configuration to disable font loading

  build: {
    transpile: [],
  },
  nitro: {
    prerender: {
      ignore: ['/-mentors', '/legal/-terms.vue'] // 排除带有 "-" 的文件夹和文件
    }
  },
  
  // 运行时配置
  runtimeConfig: {
    // 私有密钥（仅在服务器端可用）
    // 公共配置（客户端和服务器端都可用）
    public: {
      // Strapi API配置
      strapiApiUrl: process.env.NUXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api',
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
      // 通用API配置
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  
    }
  }
});
