# 项目概览

## 基础信息
- 框架：Nuxt 4（`nuxt`: `^4.2.1`）
- 源目录：`app/`（`nuxt.config.ts:3` 通过 `srcDir` 默认约定）
- 开发工具：`devtools.enabled=true`（`nuxt.config.ts:4`）
- 模块：`@unocss/nuxt`、`pinia-plugin-persistedstate/nuxt`、`@pinia/nuxt`、`@nuxt/ui`（`nuxt.config.ts:16-21`）
- 约束：禁用字体与图标的自动加载（`nuxt.config.ts:71-75`），`autoImports` 关闭（`nuxt.config.ts:12-15`）

## 结构
- `app/app.vue`：应用根
- `app/layouts/default.vue`：默认布局，已接入 `AppHeader`
- `app/layouts/marketing.vue`：营销布局示例，定制导航与 CTA
- `app/pages/index.vue`：首页内容丰富（导航、Hero、卡片、评价、CTA）
- `app/components/AppHeader.vue`：通用头部组件，支持 `logoText/navItems/cta/locale/variant`
- `app/components/icons/*`：图标组件（ChevronDown/Globe/ArrowUpRight）
- `app/stores/modules/*`：`counter.ts`、`user.ts` 示例；持久化键 `ceping_%id`（`nuxt.config.ts:25-27`）
- `public/robots.txt`：静态 robots 文件
- `uno.config.ts`：UnoCSS 配置
- `tsconfig.json`：TypeScript 配置
- `nuxt.config.ts`：核心配置与主题扩展

## 主题与样式
- `@nuxt/ui.theme.extend.colors`：`primary/secondary/accent/danger/warning/success/info/dark`（`nuxt.config.ts:38-47`）
- `fontFamily.inter` 使用系统字体（`nuxt.config.ts:49-51`）
- `borderRadius` 多档位（`nuxt.config.ts:52-62`）
- UnoCSS DevTools 开启（`nuxt.config.ts:29-32`）

## 约定与注意
- 页面与布局需放在 `app/pages`、`app/layouts` 下；`@` 指向 `app/`
- 组件使用别名 `@/components/...` 指向 `app/components`，已修正组件位置
- 如需自动导入，需在 `nuxt.config.ts` 的 `autoImports` 中恢复配置

## 待扩展
- sitemap.xml 动态生成（基于路由清单）
- 设计变量与多语言的深度集成
- DevTools 工具链下的页面性能与可视化检查脚本

---
本文件将随每次任务执行进行更新，以反映最新结构与约定。
