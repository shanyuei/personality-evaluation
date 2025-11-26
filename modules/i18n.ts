
// i18n模块配置
export default {
    locales: [
      { 
        code: 'en', 
        name: 'English',
        file: 'en-US.json'
      },
      { 
        code: 'zh', 
        name: '中文',
        file: 'zh-CN.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      cookieSecure: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieSameSite: 'lax'
    },
    lazy: true,
    langDir: '../app/i18n/',
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      globalInjection: true,
      availableLocales: ['en', 'zh'],
      datetimeFormats: {
        en: {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }
        },
        zh: {
          short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          },
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }
        }
      },
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD'
          }
        },
        zh: {
          currency: {
            style: 'currency',
            currency: 'CNY'
          }
        }
      }
    }
}