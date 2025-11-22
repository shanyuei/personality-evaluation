export default defineAppConfig({
  ui: {
    // Completely disable font loading
    fonts: {
      sans: 'system-ui',
      mono: 'monospace',
      provider: false
    },
    // Disable icon loading from external providers
    icons: {
      provider: false
    }
  }
})