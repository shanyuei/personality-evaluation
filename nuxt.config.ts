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
  // Disable auto-imports that might trigger font loading
  autoImports: {
    imports: [],
    dirs: []
  },
  modules: [
    "@unocss/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@nuxt/ui"
  ],
  pinia: {

  },
  piniaPluginPersistedstate: {
    key: 'ceping_%id',
  },
  // UnoCSS configuration
  unocss: {
    // Default configuration will be extended by uno.config.ts
    devTools: true
  },
  
  // @nuxt/ui theme configuration
  ui: {
    theme: {
      extend: {
        colors: {
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#8B5CF6',
          danger: '#EF4444',
          warning: '#F59E0B',
          success: '#10B981',
          info: '#3B82F6',
          dark: '#1E293B'
        },
        // Use system fonts instead of external fonts
        fontFamily: {
          inter: ['system-ui', 'sans-serif'],
        },
        borderRadius: {
          none: '0',
          sm: '0.125rem',
          DEFAULT: '0.25rem',
          md: '0.375rem',
          lg: '0.5rem',
          xl: '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
          full: '9999px',
        }
      }
    },
    // Enable dark mode
    darkMode: {
      strategy: 'class',
      preference: 'system',
      fallback: 'light'
    },
    // Completely disable font loading
    fonts: false,
    // Completely disable icon loading
    icons: false
  },
  // Additional configuration to disable font loading
  css: [],
  build: {
    transpile: [],
    // Disable font extraction
    extractCSS: false
  }
})
