<template>
  <button
    :class="[base, sizeClass, variantClass, block && 'uno-w-full']"
    type="button"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'solid' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
}>(), {
  variant: 'solid',
  size: 'md',
  block: false,
})

const base = 'uno-inline-flex uno-items-center uno-justify-center uno-font-[\'Outfit\'] uno-transition uno-duration-200 uno-select-none disabled:uno-opacity-50 disabled:uno-cursor-not-allowed focus:uno-outline-none'

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'uno-h-[40px] uno-px-3 uno-rounded-[16px] uno-text-sm'
  if (props.size === 'lg') return 'uno-h-[56px] uno-px-6 uno-rounded-[24px] uno-text-lg'
  return 'uno-h-[48px] uno-px-4 uno-rounded-[16px] uno-text-base'
})

const variantClass = computed(() => {
  if (props.variant === 'outline') {
    return 'uno-text-[var(--ui-primary)] uno-border uno-border-[var(--ui-primary)] hover:uno-bg-[var(--color-green-3)] active:uno-bg-[var(--color-green-4)]'
  }
  if (props.variant === 'text') {
    return 'uno-bg-transparent uno-text-[var(--ui-primary)] hover:uno-text-[var(--color-green-2)] hover:uno-underline active:uno-opacity-80'
  }
  return 'uno-text-[var(--ui-primary-foreground)] uno-bg-[var(--ui-primary)] hover:uno-bg-[var(--color-green-2)] active:uno-opacity-90'
})

const block = computed(() => props.block)
</script>
