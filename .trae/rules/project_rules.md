目标与范围
- 面向站点的对话型支持：回答问题、给出实现建议、产出页面或组件代码草案
- 优先围绕现有 Nuxt 项目结构与约定，避免引入与项目不一致的技术栈
- 输出可落地的方案，尽量给出简洁可执行的步骤或代码示例
语言与语气
- 默认为中文；若用户使用英文则跟随英文
- 语气专业、友好、简洁；使用现在时与主动语态
- 解释到可执行为止，不做冗长背景铺垫
排版与结构
- 使用短段落与要点式列表，便于扫描
- 合理使用小标题，保持层级清晰
- 内联代码、文件路径、命令用反引号包裹；避免过重的格式
代码协作规范
- 编辑现有文件时遵循项目约定：Tailwind、NuxtImg、组件风格、断点策略
- 变更说明应清楚：改动目的、影响范围、关键行号
- 优先复用现有组件与资源；不要新引库、不要泄露密钥
- 生成新页面时放在 app/pages/... ，命名清晰；使用组合式 API
Nuxt 项目约定
- 页面与布局： app/app.vue 、 <NuxtLayout> 、 <NuxtPage> 负责全局渲染
- 错误页： app/error.vue ，用 useError() 分支展示 404/其它错误；返回首页用 clearError({ redirect: '/' })
- 静态资源：位于 public/ ；项目已使用 public/theme 与 public/images ，路径以 / 起始
图片与资源
- 统一使用 NuxtImg ；需要“视觉方向”时使用两组图按断点显示（如 block md:hidden 与 hidden md:block ）
- 资源分布示例： /theme/home/cat-bg-h5.png 、 /theme/home/cat-bg-pc.png 、 /theme/404.png
- 背景图常用类： absolute -z-10 object-cover object-center ，依据卡片尺寸设置 w / h
响应式与样式
- Tailwind 断点以 md 为分界：移动端 block md:hidden ，桌面端 hidden md:block
- 统一字号与字体： font-['Outfit'] ；圆角优先 rounded-[16px] / [24px] / [48px]
- 颜色与按钮：主色 #009D77 ，悬停 #0AA17F ，次要强调可用 #EA4C89
- 常见卡片尺寸参考：H5 卡片约 342×440 ，PC 卡片约 1200×384
页面模式参考
- 登录页：居中卡片、渐变背景；输入框圆角 16、绿色聚焦；CTA 按钮主色，文字 Outfit
- 取消订阅：邮件必填校验、原因多选、说明区与支持链接；路径 app/pages/orders/cancel-subscription.vue
- 404 页：顶部 404 图片或渐变标题，说明文案与返回首页按钮
错误与路由
- 非命中路由自动进入 error.vue ；404 分支显示设计文案与图片
- 其它错误显示 statusCode 与 message ，统一提供“Back to Home”行为
安全与隐私
- 不输出敏感凭据、不记录用户隐私；示例或配置用占位值
- 对外链与上传保持谨慎，优先本地 public 资源
命令与验证
- 开发命令示例（Windows）：
  - 启动： pnpm dev
  - 类型检查： pnpm typecheck
  - Lint： pnpm lint
- 变更后说明如何验证：页面路径、预期视觉与交互
效率与互动
- 遇到模糊需求，按最合理假设先产出可用版本，并标注可微调项
- 任务分步推进：读项目→给方案→产出代码→说明验证→指出可扩展点
 - 大改动优先拆小步；保持每次输出完整可执行
自适应细则
- 页面容器：内容区建议 `max-w-[80%]  mx-auto`，水平内边距 `px-6 sm:px-10`
- 栅格布局：移动端单列，桌面端 2–3 列；优先 `grid` + `gap-6` 或 `flex` + `gap`
- 图片响应：统一用 `NuxtImg` 并设置 `sizes`，按断点切换 H5/PC 资源；示例 `sizes="(min-width:768px) 1200px, 342px"`
- 交互尺寸：按钮高度 `h-[48px]`、输入圆角 `rounded-[16px]`；在 md 以上增加水平间距与字号

公共主题配色
- 品牌主色：`var(--ui-primary)`；强调粉：`var(--color-pink-1)`；悬停可用浅色阶 `var(--color-green-2)`
- 中性文本：正文与标题统一走 `var(--ui-foreground)`；背景 `var(--ui-background)`；边框 `var(--ui-border)`；输入背景 `var(--ui-input)`；弱化文案 `var(--ui-muted-foreground)`
- 配色抽象：严格参考 `app/assets/css/main.css` 中的变量（如 `--ui-primary`、`--ui-background`、`--ui-foreground`、`--ui-border`、`--ui-input`、`--ui-muted`、`--ui-muted-foreground`、`--color-green-*`、`--color-pink-*`），组件中避免直接使用十六进制颜色值
- Tailwind 映射：如已在 `tailwind.config` 配置 `theme.colors.brand`，组件统一使用 `text-brand`/`bg-brand` 等语义类

样式抽离与复用
- 通用样式集中在 `app/assets/css/`（如 `utilities.css`/`components.css`），通过 `@apply` 抽取：`.btn-primary`、`.card`、`.input`
- 组件变体：通过 props 切换变体（如 `variant="primary"`），避免在模板硬编码大量类
- 背景渐变：封装为 `.bg-page-gradient` 等通用类，页面仅引用类名
- 颜色使用：不在组件中直接写十六进制值，统一走 CSS 变量或 Tailwind 语义色

多语言与国际化
- 默认语言中文，需支持英文；所有用户可见文案避免硬编码
- 文案资源建议放置 `app/locales/zh.json` 与 `app/locales/en.json`，键命名采用 `page.section.key`
- 使用方式：若已启用 `@nuxtjs/i18n`/`vue-i18n`，统一使用 `t('...')`；未启用时可暂用轻量 `useLocale()` 封装从 JSON 读取
- 路由策略：简版可不加前缀；如启用多语言路由，采用 `/en/*` 前缀并确保 SEO 友好
- 组件规范：按钮、标题、占位符等均从字典读取，确保语言切换一致
 - 任务规范：每次新增页面/组件/区块，必须同步在 `app/i18n/modules/{en,zh,ja}.json` 创建对应键，并在模板内以 `$t('...')` 引用；键名建议 `routeGuide.title`、`routeGuide.intro` 这类按页面为命名空间的格式
 - 变量占位：涉及动态数字或文本使用插值（如 `{count}`），在模板中以 `$t('routeGuide.stats', { count })` 方式传参

