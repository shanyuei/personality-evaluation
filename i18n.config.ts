import { defineI18nConfig } from '@nuxtjs/i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,
  availableLocales: ['en', 'zh'],
  datetimeFormats: {
    en: {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    },
    zh: {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    }
  },
  numberFormats: {
    en: { currency: { style: 'currency', currency: 'USD' } },
    zh: { currency: { style: 'currency', currency: 'CNY' } }
  }
}))
