# 硬编码文案扫描报告

以下是项目中仍然使用硬编码但未使用多语言的用户可见文案列表，你可以决定哪些需要改为多语言配置。

---

## 一、面包屑导航（Breadcrumb）

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/legal/terms-of-use.vue` | 5 | `Home` / `Terms of Use` | 页面路径导航 |
| `app/pages/legal/refund-policy.vue` | 5 | `Home` / `Refund Policy` | 页面路径导航 |
| `app/pages/legal/privacy.vue` | 6 | `Home` / `Privacy Policy` | 页面路径导航 |

---

## 二、页面标题

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/legal/terms-of-use.vue` | 9 | `Terms of Use` | 页面主标题 |
| `app/pages/legal/refund-policy.vue` | 9 | `Refund Policy` | 页面主标题 |
| `app/pages/legal/privacy.vue` | 10 | `Privacy Policy` | 页面主标题 |

---

## 三、用户课程相关

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/user-course/test.vue` | 15 | `{{ progress }}%` | 进度百分比（%符号硬编码） |
| `app/pages/user-course/lesson-guide.vue` | 13 | `{{ progress }}%` | 进度百分比（%符号硬编码） |
| `app/pages/user-course/lesson.vue` | 13 | `{{ progress }}%` | 进度百分比（%符号硬编码） |
| `app/pages/user-course/test-complete.vue` | 7 | `{{ score }}/{{ total }}` | 分数/总分（斜杠硬编码） |
| `app/pages/user-course/test-complete.vue` | 8 | `points` | 分数单位 |

---

## 四、电子书详情页

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/ebooks/detail.vue` | 90 | `Ready to boost your brand's reach?` | 硬编码英文文案 |

---

## 五、测试页面

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/test/index.vue` | 66 | `{{ 0 }}{{ $t('common.percentIcon') }}` | 初始进度显示，0 是数字 |

---

## 六、博客列表页

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/blog/index.vue` | 129 | `({{ c.posts.count }})` | 文章计数括号硬编码 |
| `app/pages/blog/index.vue` | 175 | `#{{ tag.name }}` | 标签符号 # 硬编码 |

---

## 七、联系邮箱（不需要翻译，静态信息）

| 文件 | 行号 | 硬编码文案 | 说明 |
|------|------|------------|------|
| `app/pages/orders/create.vue` | 50 | `support@personalitytest101.com` | 联系邮箱 |
| `app/components/AppFooter.vue` | 166 | `support@personalitytest101.com` | 联系邮箱 |
| `app/pages/orders/create copy.vue` | 50 | `support@personalitytest101.com` | 联系邮箱（备份文件） |

---

## 八、动态绑定数据（不需要翻译，数据驱动）

以下这些是从数据中动态获取的，文案本身不在模板中硬编码：

| 文件 | 行号 | 说明 |
|------|------|------|
| `app/pages/pricing.vue` | 61 | `{{ feat }}` - 从数据循环 |
| `app/pages/orders/create.vue` | 22 | `{{ planName }}` - 动态数据 |
| `app/pages/orders/create.vue` | 215 | `{{ item.text }}` - 从数据循环 |
| `app/pages/user-course/chapters.vue` | 24 | `{{ item }}` - 从数据循环 |
| `app/pages/index/index.vue` | 183 | `{{ item.step }}` - 从数据循环 |
| `app/components/ebooks/MyCard.vue` | 7 | `{{ description }}` - 组件 props |
| `app/components/TestimonialsSection.vue` | 40 / 83 / 132 | `{{ item.text }}` - 数据驱动 |
| `app/components/TestimonialsSection.vue` | 50 / 93 / 142 | `{{ item.role }}` - 数据驱动 |
| `app/pages/ebooks/detail.vue` | 52-66 | 分割字符串显示，动态数据 |
| `app/pages/about/index.vue` | 105 | `{{ listItem }}` - 数据循环 |
| `app/components/course/Card.vue` | 4-5 | `{{ course.title }}` / `{{ course.description }}` - 组件 props |
| `app/components/course/Card.vue` | 102 | `{{ course.duration ?? '2 weeks' }}` - 默认值硬编码 `2 weeks` |
| `app/pages/tests/index.vue` | 84 | `{{ card.desc }}` - 数据驱动 |
| `app/pages/blog/index.vue` | 64 | `{{ a.title }}` - 数据驱动 |
| `app/pages/blog/index.vue` | 128 | `{{ c.name }}` - 数据驱动 |
| `app/components/FAQSection.vue` | 5-7 | `{{ title }}` / `{{ description }}` - 组件 props |
| `app/components/profile/ProfileDailyStreakCard.vue` | 25 | `{{ d.text }}` - 数据驱动 |
| `app/pages/user-course/test-complete.vue` | 12 | `{{ courseName }}` - 动态数据 |

这些动态数据不需要处理，因为文案内容来自数据库/API，不是固定在模板中的。

---

## 九、建议优先处理列表

如果你决定将这些改为多语言，建议按优先级处理：

**高优先级（用户主要可见内容）：**
1. 面包屑导航（3个页面，共5个文案）
2. 页面标题（3个页面，共3个文案）
3. `user-course/test-complete.vue` - `points` 文字

**中优先级：**
1. `ebooks/detail.vue` - `Ready to boost your brand's reach?`
2. `components/course/Card.vue` - 默认值 `2 weeks`

**低优先级（符号不影响功能）：**
1. 进度百分比的 `%` 符号
2. 分数显示的 `/` 斜杠
3. 博客标签的 `#` 符号
4. 文章计数的 `()` 括号

**不需要处理：**
- 联系邮箱（静态信息，不需要翻译）
- 动态数据绑定（已经是数据驱动）

---

扫描时间: 2026-04-11
