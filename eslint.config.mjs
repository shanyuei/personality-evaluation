// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['app/i18n/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
)
