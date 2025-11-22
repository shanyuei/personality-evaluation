import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  // Use common presets
  presets: [
    // Default UnoCSS utilities
    presetUno(),
    // Enable attributify mode (class attributes as props)
    presetAttributify(),
    // Enable icons (requires icon packages to be installed separately)
    presetIcons()
    // Removed presetTypography to prevent Google Fonts connection attempts
  ],
  // Custom theme colors
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      accent: '#8b5cf6',
      danger: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
      success: '#10b981',
      dark: '#1f2937',
      light: '#f9fafb'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    }
  },
  // Custom utilities
  utilities: {
    'content-auto': {
      contentVisibility: 'auto'
    },
    'transition-smooth': {
      transition: 'all 0.3s ease-in-out'
    }
  },
  // Safelist classes that should always be generated
  safelist: [
    'btn-primary',
    'btn-secondary',
    'text-primary',
    'bg-primary',
    'flex',
    'grid',
    'container'
  ]
})