<template>
  <button :class="[
    baseClasses,
    sizeClasses,
    typographyClasses,
    colorClasses,
    hoverClasses,
    disabledClasses,
  ]" :style="{ width: width, height: height, fontSize: fontSize, fontWeight: fontWeight }" :disabled="disabled" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: 'full'
  },
  height: {
    type: String,
    default: '56px'
  },
  fontSize: {
    type: String,
    default: '18px'
  },
  fontWeight: {
    type: String,
    default: 'bold'
  }
});

defineEmits(['click']);

// Base classes
const baseClasses = 'uno-opacity-100 uno-vertical-align-middle uno-font-Outfit uno-font-bold'

// Size classes
const sizeClasses = `uno-w-full uno-h-56px uno-gap-4 uno-pt-[6px] uno-pr-[6px] uno-pb-[6px] uno-pl-[6px] uno-rounded-[8px]`

// Typography classes
const typographyClasses = `uno-text-18px uno-leading-[150%] uno-tracking-[0%] uno-font-bold`

// Color classes
const colorClasses = 'uno-bg-[#009D77] uno-text-white'

// Hover classes
const hoverClasses = 'hover:uno-bg-[#0AA17F] hover:uno-shadow-md hover:uno-transition-colors'

// Disabled classes
const disabledClasses = 'disabled:uno-opacity-50 disabled:uno-cursor-not-allowed disabled:uno-bg-[#009D77] disabled:hover:uno-bg-[#009D77] disabled:hover:uno-shadow-none'
</script>
