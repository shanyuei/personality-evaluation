export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',

  // 关闭 HTML 警告
  warnHtmlMessage: false,
  // 或全局允许 HTML
  allowComposition: true,
  // 启用消息编译，确保占位符能被正确替换
  lazy: true,
  langDir: 'locales',
  defaultLocale: 'en',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en.ts',
      name: 'English'
    },
    {
      code: 'zh',
      iso: 'zh-CN',
      file: 'zh.ts',
      name: '中文'
    }
  ]
}))
