import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';
import { transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  // 启用预设
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  
  // 配置主题
  theme: {
    colors: {
      primary: '#4F46E5',
      secondary: '#10B981',
      tertiary: '#F59E0B',
      quaternary: '#EC4899',
      // 扩展灰色系列
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  
  // 自定义规则
  rules: [
    // 自定义渐变规则
    ['bg-gradient-soft', {
      background: 'linear-gradient(135deg, var(--un-primary/5) 0%, var(--un-secondary/5) 100%)'
    }],
    // 自定义阴影规则
    ['shadow-card', {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }],
    // 自定义过渡规则
    ['transition-all-300', {
      transition: 'all 0.3s ease'
    }],
    // 自定义悬停效果
    ['hover-lift', {
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }],
    [/^text-shadow-(\d+)$/, ([, d]) => ({
      'text-shadow': `0 ${d}px ${d * 2}px rgba(0, 0, 0, 0.1)`
    })],
  ],
  
  // 自定义变体
  variants: [
    // 响应式变体
    (matcher) => {
      if (!matcher.startsWith('hover:')) return matcher;
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('focus:')) return matcher;
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:focus`,
      };
    },
  ],
  
  // 转换器
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  
  // 安全列表 - 预先生成的工具类
  safelist: [
    // 常用颜色类
    'text-primary', 'bg-primary', 'border-primary',
    'text-secondary', 'bg-secondary', 'border-secondary',
    // 常用间距类
    'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6',
    'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6',
    // 常用Flex类
    'flex', 'flex-col', 'flex-row', 'items-center', 'justify-center', 'justify-between',
    // 常用文字类
    'text-sm', 'text-base', 'text-lg', 'text-xl', 'font-bold', 'font-medium',
    // 常用阴影类
    'shadow-sm', 'shadow-md', 'shadow-lg',
  ],
  
  // 块列表 - 禁用的工具类
  blocklist: [],
  
  // 自动导入配置
  autoImports: {
    aliases: {
      // 可选择的别名配置
    },
  },
});