import eslintPluginNuxt from 'eslint-plugin-nuxt';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueEslintParser from 'vue-eslint-parser';
import { fileURLToPath } from 'node:url';

export default [
  {
    ignores: ['dist', '.nuxt', 'node_modules', '*.md', '*.json'],
  },
  {
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      nuxt: eslintPluginNuxt,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: vueEslintParser,
      parserOptions: {
        parser: {
          ts: tsParser,
          js: tsParser,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      nuxt: eslintPluginNuxt,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    },
  },
];