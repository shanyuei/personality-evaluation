export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',

  // 关键：禁用消息编译，避免解析 HTML 中的特殊字符
  messageCompiler: (message) => () => message,
  // 或
  flatJson: true,
  // 关闭 HTML 警告
  warnHtmlMessage: false,
  // 或全局允许 HTML
  allowComposition: true,
}))
