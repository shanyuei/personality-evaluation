<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="0" y="0" width="24" height="24" rx="4" :fill="inputColor" />
    <line x1="6" y1="12" x2="18" y2="12" :stroke="foregroundColor" stroke-width="2" stroke-linecap="round" />
    <line v-if="!expanded" x1="12" y1="6" x2="12" y2="18" :stroke="foregroundColor" stroke-width="2"
      stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ expanded?: boolean }>(), {
  expanded: false
})

const inputColor = 'var(--ui-input)'
const foregroundColor = 'var(--ui-foreground)'
</script>

<style scoped></style>
