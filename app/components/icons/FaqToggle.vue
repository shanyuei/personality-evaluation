<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="0" y="0" :width="size" :height="size" :rx="size / 6" :fill="inputColor" />
    <line x1="6" y1="12" x2="18" y2="12" :stroke="foregroundColor" stroke-width="2" stroke-linecap="round" />
    <line v-if="!expanded" x1="12" y1="6" x2="12" y2="18" :stroke="foregroundColor" stroke-width="2"
      stroke-linecap="round" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ 
  expanded?: boolean
  size?: number 
}>(), {
  expanded: false,
  size: 24
})

// 设置默认大小为 24
const size = computed(() => props.size || 24)

const inputColor = 'var(--ui-input)'
const foregroundColor = 'var(--ui-foreground)'
</script>

<style scoped></style>
